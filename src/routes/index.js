require('dotenv').config();

const admin = require('firebase-admin');

const pk = process.env.PRIVATE_KEY;
const private_key = pk.replace(/\\n/g, '\n');

admin.initializeApp({
    credential: admin.credential.cert({
        "projectId": process.env.PROJECT_ID,
        "private_key": private_key,
        "client_email": process.env.CLIENT_EMAIL
    }),

    databaseURL: 'https://database-mascotas-default-rtdb.firebaseio.com/'
});
const database = admin.database();
const { Router } = require( 'express' );
const router = Router();

router.get('/', async (request, response) => {
    //consultar firebase
   await database.ref('pets').once( 'value' , (snapshot) => {
        data = snapshot.val();
        response.json(data);
    });
});

router.post('/new', async (request, response) => {
        const newPet = {
            id: request.body.id,
            petName: request.body.petname,
            petAge: request.body.petage,
            petType: request.body.pettype
        }
        if (newPet.id && newPet.petName){
        await database.ref('pets/').push(newPet);
        response.redirect('/');
        }else{
            response.send("Wrong-request");
        }
});

router.get('/delete/:id', (request, response) => {
    database.ref('pets/' + request.params.id).remove();
    response.redirect('/');
});
router.post('/debug', (req, res) => {
    res.json(req.body);
});        

module.exports = router;

