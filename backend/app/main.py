from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from .routers import interactions, users, auth, matches
from . import models
from .database import engine


app = FastAPI()

models.Base.metadata.create_all(engine)

app.include_router(interactions.router)
app.include_router(users.router)
app.include_router(auth.router)
app.include_router(matches.router)

app.mount("/images", StaticFiles(directory="images")) # for static files ie. Images