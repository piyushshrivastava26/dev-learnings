REST (Representational State Transfer) :

REST is an architectural style for designing networked applications. It relies on a stateless, client-server communication model, where resources are represented by URLs, and HTTP methods are used to perform operations on these resources.




Example: RESTful API for Managing Users
Resource: users

Operation	          HTTP Method	  Endpoint          Description

Get all users	        GET	        /api/users	       Retrieve a list of users.
Get a specific user	    GET	        /api/users/:id	   Retrieve a user by ID.
Create a new user	    POST	    /api/users	       Add a new user.
Update a user	        PUT	        /api/users/:id	   Update a user's details.
Delete a user	        DELETE	    /api/users/:id	   Remove a user.
