# Drexel-SE-577-003: Software Architecture in Spring 2021-2022

## Project Final Release
> **Note**   
> This document addresses the architectural changes only.  
> For more details on basic instructions, please refer to the follows.
> - [readme.md](readme.md)  
> - [client/readme.md](client/readme.md)
> - [server/readme.md](server/readme.md)

### Introduction
The main change is adding a new page for a certain *org*.  
(Note that the existing **"My Repos"** page is limited to my account and accessibility.)  
Since it requires changes in both **client** and **server**, the `proj-final` was branched out from `proj-release-3`, not from the recent one.

### Changes in client
At the beginning, I considered textbox and submit button for users to pass the organization name.  
However, it is more error-prone and requires more error handling, I decided to go with a select UI.  
It provides convenience to user choosing one of pre-defined organization, whereas it has a limitation in user's choice.

### Changes in server
Since the response body is a bit verbose, I decided to reduce the amount w/ the essential fields (required by the tables).  
Each object of a repo information contains `id`, `name`, `url`, `language` and `updated_at`.  
Here are pros and cons from the decision.
- Pros
1. Less verbosity using less traffic
- Cons
1. Maintaining cost  
Whenever UI requires a new field, the backend should be changed together.
2. Filtering cost  
The filtering requires additional implementations and it also requires more time.  

As mentioned above, I realize it's not a good decision from the architectural perspective.  
However, I leave it as is, to compare it with the existing architecture and implementations.