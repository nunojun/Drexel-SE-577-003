# Drexel-SE-577-003: Software Architecture in Spring 2021-2022

## Project Release No.4
> **Note**   
This document addresses my thoughts on OAuth of the Release no.4 only.  
For more details on basic instructions, please refer to the [readme.md](readme.md).
### My thoughts on the auth logic
The current design of Github authentication (and authorization) is,
1. User needs to create a Github token for OAuth authentication.
2. The token should be in `.env` file of the root directory of **client**.
3. The token is being loaded in the initialization and passed to Github REST API invocation via HTTP request headers.

It is working but not a practical use case at all.  
Users never pass any file with secret to the host manually in generic web application use cases.
Instead, we can think about other auth logics as following.
1. Username & Password  
We need to have a database and passwords should be stored as hashed. 
2. OIDC based on OAuth2  
This could be the most preferable way in web authentication these days.  
A user can be granted by other authorities (Github, Google, Facebook, etc) and my **client** can authorize the user accordingly.
