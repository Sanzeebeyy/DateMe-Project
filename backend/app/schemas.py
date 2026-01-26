from pydantic import BaseModel

class User(BaseModel):
    username: str
    name: str
    password: str
    age: int
    gender: str
    bio: str

    class Config:
        orm_mode = True


class ShowUsers(BaseModel):
    name: str
    age: int
    gender: str
    bio: str
    photo:str
    
    class Config:
        orm_mode = True

class LikeRequest(BaseModel):
    from_user_id:int

    class Config:
        orm_mode = True


class Token(BaseModel):

    access_token: str
    token_types: str

    class Config:
        orm_mode = True

class TokenData(BaseModel):
    username: str

    class Config:
        orm_mode = True