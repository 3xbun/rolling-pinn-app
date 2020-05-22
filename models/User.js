const mongoose = require('mongoose');

const Schema = mongoo.Schema;

const UserSchema = new Schema({
    name: String,
    mail: String
});

const User = mongoose.model("User", UserSchema);

const user_response = new User({
    name: 'John Doe',
    mail: 'johnD@mail.com'
});

user_response.save(err => {
    if (err) {
        console.log(err);
    }

    res.send({
        success: true,
        code: 200,
        msg: "User added!"
    })
})

module.exports = User;