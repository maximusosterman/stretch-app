Users:
Retrieve all users:

GET /users
Retrieve a specific user:

GET /users/:userId
Create a new user:

POST /users
Update a user:

PUT /users/:userId or PATCH /users/:userId
Delete a user:

DELETE /users/:userId
Programs:
Retrieve all programs:

GET /programs
Retrieve a specific program:

GET /programs/:programId
Create a new program:

POST /programs
Update a program:

PUT /programs/:programId or PATCH /programs/:programId
Delete a program:

DELETE /programs/:programId
Exercises:
Retrieve all exercises:

GET /exercises
Retrieve a specific exercise:

GET /exercises/:exerciseId
Create a new exercise:

POST /exercises
Update an exercise:

PUT /exercises/:exerciseId or PATCH /exercises/:exerciseId
Delete an exercise:

DELETE /exercises/:exerciseId
Relationships:
Retrieve all exercises for a program:

GET /programs/:programId/exercises
Retrieve all programs for a user:

GET /users/:userId/programs
Authentication and Authorization:
User registration:

POST /auth/register
User login:

POST /auth/login
User logout (optional):

POST /auth/logout