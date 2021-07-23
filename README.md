# Api-Nodejs-Pets
That's an API, use to interactuate with a Realtime database. as a area knowledge prof to seleccion-hackacademy-2021. 
### Endpoints
| Endpoint | Description | Method |
|---| ---------- | --- |
| https://prueba-de-area.herokuapp.com/api/pets/new | * requirements: petname | POST |
|https://prueba-de-area.herokuapp.com/api/pets/ | * requirements: none | GET |
|https://prueba-de-area.herokuapp.com/api/pets/delete/:id| * requirements: database-id| GET |
### Realtime DB estructure 
```
{
    "-MfA_eigphn1OAxjvpvO": {
        "petAge": "12",
        "petName": "lula",
        "petType": "chihuhua"
    },
```
*  How to delete. 
```
"-MfA_eigphn1OAxjvpvO": identifier of the last element in the db.
$ curl https://prueba-de-area.herokuapp.com/api/pets/delete/puthereidentifier
```
*  How to set new reg.:
```
$ curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"petname":"lola"}' \
    https://prueba-de-area.herokuapp.com/api/pets/new
```
*  How to list the registers
```
$ curl https://prueba-de-area.herokuapp.com/api/pets/
```
### Features
Api-Nodejs-Pets, It was developed with the following tools.
- Node-js, and some libraries:
    1. Express
    2. Morgan
    3. firebase-admin(to manage the DB)
- Heroku as a deployment tool
- Realtime Database, from google firestore
