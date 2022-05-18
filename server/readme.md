## Server (Backend)
It is based on **[Node.js](https://nodejs.org/en/)** and **[fastify](https://www.fastify.io/)** framework.  
The following endpoints are provided.  
> **_NOTE_**  
If you run it on your local, port 5000 will be used.  
The root endpoint is http://localhost:5000  

### GET /gh
This is a redirection to `GET http://api.github.com/users/nunojun/repos` by using **[fastify-http-proxy](https://github.com/fastify/fastify-http-proxy)**.  
It will gives you the list of public repos under **nunojun**, my project.  
No authentication is required.
### GET /gh_sec
This retrieves all repos I (or the user) has the access.  
Note that this requires the OAuth token and it should be in **_.env_** file as below.
```
GITHUB_ACCESS_TOKEN="YOUR_GITHUB_TOKEN"
```
Otherwise, this will return **401 Unauthorized**.  
### GET /gh_db
This returns the same result as `GET /gh` does but uses a YAML file named `gh_result.yml`.  
If `gh_result.yml` exists, this method retrieves the result from the file, convert to JSON and return it.  
If `gh_result.yml` does not exist,  
this method invokes GET http://api.github.com/users/nunojun/repos first, store it into the file and return the result.  
That being said, only the first invocation retrieves the result from the Github API and after then, the result is coming from the YAML file.  
No authentication is required.  
### GET /docs
This shows the Swagger API document, created by **[fastify-swagger](https://github.com/fastify/fastify-swagger)**.  
Note that this is NOT being used by the frontend application.  