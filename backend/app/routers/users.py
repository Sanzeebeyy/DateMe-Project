from fastapi import APIRouter, Response, Depends, status, HTTPException, File, UploadFile
from .. import schemas, models, database
from sqlalchemy.orm import Session
from typing import List
import uuid
from .. import hashing
from ..oauth2 import get_current_user

get_db = database.get_db
IMGDIR = "images/"

router = APIRouter(
    tags=["Users"],
    prefix="/user"
)


@router.post('/register')
def register_user(request: schemas.User , db:Session = Depends(get_db)):

    user = db.query(models.User).filter(models.User.username == request.username).first()

    if user:
         return {f"The user with username '{user.username}' already exists!"}

    hashed_password = hashing.Hash.bcrypt(request.password)

    new_user = models.User(username = request.username, name = request.name, password = hashed_password, age = request.age, gender = request.gender, bio = request.bio)

    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    
    return new_user

# @router.post('/{user_id}/upload-photo')
# async def upload_photo(user_id:int, file: UploadFile = File(...), db: Session = Depends(get_db)):

#         user = db.query(models.User).filter(models.User.id == user_id).first()

#         if not user:
#              raise HTTPException(status_code= status.HTTP_404_NOT_FOUND)
        


#         file.filename = f"{uuid.uuid4()}.jpg"
#         contents = await file.read()

#         with open(f"{IMGDIR}{file.filename}", "wb") as f:
#             f.write(contents)


#         user.photo = f"/images/{file.filename}"
#         db.commit()
        
#         return  file.filename


@router.post('/upload-photo')
async def upload_photo(user_id:int, 
                       file: UploadFile = File(...), 
                       db: Session = Depends(get_db),
                       current_user: schemas.User = Depends(get_current_user)):

        user = db.query(models.User).filter(models.User.username == current_user.username).first()

        if not user:
             raise HTTPException(status_code= status.HTTP_404_NOT_FOUND)
        

        file.filename = f"{uuid.uuid4()}.jpg"
        contents = await file.read()

        with open(f"{IMGDIR}{file.filename}", "wb") as f:
            f.write(contents)


        user.photo = f"/images/{file.filename}"
        db.commit()
        
        return  file.filename

@router.put('/update')
def update_profile(
                    user: schemas.UpdateUser,
                    db:Session = Depends(get_db),
                    current_user : schemas.User = Depends(get_current_user),
                   ):
    db.query(models.User).filter(models.User.username == current_user.username).update(user.dict(exclude_unset=True), synchronize_session=False)
    db.commit()

    return {"Status":"Updated"}

    