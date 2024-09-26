const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/pcat-test-db',);

const PhotoSchema = new Schema({
    title: String,
    description: String
})

const Photo = mongoose.model('Photo', PhotoSchema);



/* Photo.create({
    title: "Photo Title 4",
    description: "Photo description "
}) */


// Photo.find().then((data)=> {    
//     console.log(data);
// })

const id = "66f3b8414fc30e60949b9903";

Photo.findByIdAndUpdate(id, {title: "Photo Title 1 updated",  description: "Photo eeee" }, {new : true}).then((data)=> {console.log(data)});

// Photo.findByIdAndUpdate(id, {title: "Photo Title 1 updated",  description: "Photo güncel" }).then();

