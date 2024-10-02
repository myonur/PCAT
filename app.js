const express = require('express');
const ejs = require('ejs');
const path = require('path');

const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');

const photoController = require('./controllers/photoControllers');


const app = express();


mongoose.connect('mongodb://localhost/pcat-test-db').then(() => {
   console.log('bağlanıldı')
}).catch((err) => {
   console.log(err)
});

app.set("view engine", 'ejs');

app.use(express.static('public'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(methodOverride('_method', {
   methods: ['POST', 'GET']
}));

app.get('/', photoController.getAllPhotos);
app.get('/photos/:id', photoController.getPhoto);
app.post('/photos', photoController.createPhoto);
app.put('/photos/:id', photoController.updatePhoto);
app.delete('/photos/:id', photoController.deletePhoto)
app.get('/about', photoController.getAboutPage);
app.get('/add', photoController.addPhoto);
app.get('/photos/edit/:id', photoController.getEditPage);


const port = 8000;

app.listen(port, () => {
   console.log(`Sunucu ${port} nolu porttan çalışmaktadır`);

})

