# main.py
from fastapi import FastAPI
from workflow import router  # Assuming workflow.py is in the same directory

app = FastAPI()

app.include_router(router)

# ... additional configuration or startup tasks (optional)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
