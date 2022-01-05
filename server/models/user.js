const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = Schema({
    username: String,
    email: {
        type: String,
        unique: true
    },
    password: String
}, { versionKey: false });

UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password , salt);
}

module.exports = model("User", UserSchema);