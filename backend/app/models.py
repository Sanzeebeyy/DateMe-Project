from .database import Base
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship




class Like(Base):
    __tablename__ = "likes"


    id = Column(Integer, primary_key=True, index = True)
    from_user_id = Column(Integer, ForeignKey("users.id"))     
    to_user_id = Column(Integer, ForeignKey("users.id"))  

    from_user = relationship("User", foreign_keys=[from_user_id], back_populates="liked_to")

    to_user = relationship("User", foreign_keys=[to_user_id], back_populates="liked_from") 
    # backpopulates: Example, my side, my gf, her side, her bf okaeyyy


class User(Base):
    __tablename__ = "users"

    id=  Column(Integer, primary_key=True, index = True)
    username = Column(String)
    name = Column(String)
    password = Column(String)
    age = Column(Integer)
    gender = Column(String)
    bio = Column(String)
    photo = Column(String)

    liked_from = relationship("Like", foreign_keys=[Like.from_user_id]  , back_populates="to_user")
    liked_to = relationship("Like", foreign_keys=[Like.to_user_id] , back_populates="from_user")