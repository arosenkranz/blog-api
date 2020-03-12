# Blog API Project

## User Stories

- As a user, I want create blog posts so other people can view them.

- As a user, I want to be able to log in so people know posts I write are by me.

- As a user, I want to be able to see all other users' blog posts

- etc.

## Endpoint documentation (running list)

### GET `/api/posts`

Get all post data with their associated user

### GET `/api/posts/:id`

Get one post by its ID value with its associated user

### POST `/api/posts`

Create a new post after running through authentication middleware

Expected body content:

```js
{
  title: "Post Title",
  body: "Post Body",
  UserId: 1
}
```

> The `UserId` value comes from `req.id` in the decoded web token from the middleware function

### GET `/api/users`

Get all user data with their associated posts

### GET `/api/users/:id`

Get one user by its ID value with its associated post

### POST `/api/users`

Create a new user with hashed password

Expected body content:

```js
{
  name: 'Alex',
  email: 'alex@alex.com',
  password: 'password123'
}
```

> Password is hashed in a beforeCreate Sequelize hook

### POST `/api/auth`

Authenticate user and receive JSON Web Token (JWT) to access routes protected by middleware

Expected body content:

```js
{
  email: 'alex@alex.com',
  password: 'password123
}
```

## Models

### User

**name**

- String
- Not Null

**email**

- String
- Not Null
- Validate email

**password**

- String
- Not Null

> Use beforeCreateHook to hash password

### Post

**title**

- String
- Not Null

**body**

- Long String (Text)
- Not Null
- Min Length

### Associations

- Users own many Posts

- Posts belong to one User
