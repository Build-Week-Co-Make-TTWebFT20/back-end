# Co-Make Endpoints

- These are the endpoints we will be using in our App.
- Note that there are two major sections, the `Auth` section, and the `Posts` section.
- `Auth` is for sending post requests to `register` and `login`
- `Posts` contains the endpoints for normal CRUD operatiosn with all of the 'issues'

#### Base URL

| Base URL                                   |
| ------------------------------------------ |
| https://comake-tt-webft-20.herokuapp.com/  |

#### Auth

| Method | Endpoint           | Description                                                                       |
| ------ | ------------------ | --------------------------------------------------------------------------------- |
| POST   | /api/auth/register | Creates a new user account. `Username` and `Password` are required, both strings. |
| POST   | /api/auth/login    | Logs a user in. `Username` and `Password` are required, both strings.             |


#### Posts
- Not yet implemented

| Method | Endpoint                | Description                                                                              |
| ------ | ------------------------| ---------------------------------------------------------------------------------------- |
| GET    | /api/posts              | Gets all current user posts/issues, regardless of proximity                              |
| POST   | /api/posts              | Creates a new user psot. `Name`, `Description`, `City`, `State`, and `Zip` are required. |
| PUT    | /api/posts/:id          | Allows a user to edit one of their posts, but only if they created it                    |
| DELETE | /api/posts/:id          | Allows a user to delete one of their posts, but only if they created it                  |
| GET    | /api/posts/:id/comments | Fetches all of the comments for a given post (STRETCH GOAL)                              |