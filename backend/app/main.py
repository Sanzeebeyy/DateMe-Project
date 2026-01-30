from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from .routers import interactions, users, auth, matches, chat, ws_chat
from . import models
from .database import engine


app = FastAPI()

models.Base.metadata.create_all(engine)

app.include_router(interactions.router)
app.include_router(users.router)
app.include_router(auth.router)
app.include_router(matches.router)
app.include_router(chat.router)
app.include_router(ws_chat.router)

app.mount("/static", StaticFiles(directory="static")) # for static files ie. Images