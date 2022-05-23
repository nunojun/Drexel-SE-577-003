## Client (Frontend)
The frontend is based on **[Vue.js](https://vuejs.org/)** framework.
> **_NOTE_**  
If you run it on your local, port 8080 will be used (unless it's reserved).  
The root url is http://localhost:8080  

### Basic Architecture
![Basic Architecture](../screenshots/frontend-001.png "Basic Architecture")
The goal is showing Github repos with different access permission.  

### How it works
This is the intial form of http://localhost:8080/repos.  
You can access from **"My Repos"** link from the main page.  
The default information comes from `GET /gh` endpoint of the backend.  
Users can switch the URL by clicking **"CHANGE GITHUB URL"** button and it toggles among `/gh`, `/gh_sec` and `/gh_db`.  
The endpoint it uses will be shown on top of the table.  
![Screenshot 1](../screenshots/frontend-002.png "Screenshot 1")
In case of `/gh_sec`, if the authentication is failed in the backend, no data will be shown as following.
![Screenshot 2](../screenshots/frontend-003.png "Screenshot 2")