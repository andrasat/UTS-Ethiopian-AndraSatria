# SIMPLE CRUD RESTAURANT API

## Description

Aplikasi ini merupakan sebuah aplikasi sederhana yang dapat melakukan CRUD untuk daftar makanan dan restaurant

## Usage

```
npm install
npm start OR npm test
```

## Routing

`http://localhost:3000/`

### Food

| route | http method | description |
|  ---  |     ---     |     ---     |
| /food/ | POST | Add new Book |
| /food/ | GET | Get food list |
| /food/find/:objectId | GET | Find one food by objectId |
| /food/:objectId | DELETE | delete a food by objectId |
| /food/:objectId | PUT | update a food by objectId |

### Restaurant

| route | http method | description |
|  ---  |     ---     |     ---     |
| /rest/ | POST | Add new Book |
| /rest/ | GET | Get restaurant list |
| /rest/find/:objectId | GET | Find one restaurant by objectId |
| /rest/:objectId | DELETE | delete a restaurant by objectId |
| /rest/:objectId | PUT | update a restaurant by objectId |