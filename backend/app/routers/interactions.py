from fastapi import APIRouter, Response, Depends, status, HTTPException
from .. import schemas, models, database
from sqlalchemy.orm import Session
from typing import List
from ..oauth2 import get_current_user

get_db = database.get_db

router = APIRouter(
    tags=["Interactions"],
    prefix="/interaction"
)




@router.get('/', response_model = List[schemas.ShowUsers])
def show_people(db:Session = Depends(get_db), current_user: schemas.User = Depends(get_current_user)):
    users = db.query(models.User).all()
    if not users:
        raise HTTPException(status_code= status.HTTP_404_NOT_FOUND ,detail="No users found")
    return users




@router.post('/like/{to_user_id}')
def like(to_user_id:int ,request: schemas.LikeRequest , db:Session = Depends(get_db)):
    
    existing_like = db.query(models.Like).filter(models.Like.from_user_id == request.from_user_id, 
    models.Like.to_user_id == to_user_id).first()

    if existing_like:
        return {"Match":False}
    
    if not existing_like:
        new_like = models.Like(from_user_id = request.from_user_id, to_user_id = to_user_id)
        db.add(new_like)
        db.commit()

    reverse_like = db.query(models.Like).filter( 
    models.Like.to_user_id == request.from_user_id, 
    models.Like.from_user_id == to_user_id).first()

    if reverse_like:
        return {"Match":True}


    return {"Match":False}

