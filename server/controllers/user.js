const User = require('../models/user');
const jwt = require('../services/jwt');
const bcrypt = require('bcryptjs');

const signUp = async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;

    const user = new User({
        username,
        email: email.toLowerCase(),
        role: "admin"
    });

    if (!password || !repeatPassword) return res.status(404).send({ message: "Las contraseñas son obligatorias" })
    if (password !== repeatPassword) return res.status(404).send({ message: "Las contraseñas no son iguales" })

    const exist = await User.findOne({ email });
    if (exist) return res.status(404).send({ message: "El correo electrónico ya está registrado" });

    user.password = await user.encryptPassword(password);

    user.save();
    return res.status(200).send({ message: "Usuario creado correctamente" });
}

const signIn = (req, res) => {
    const email = req.body.email.toLowerCase();
    const password = req.body.password;

    User.findOne({ email }, (err, userStored) => {
        if (err) return res.status(500).send({ message: "Error del servidor" });
        if (!userStored) return res.status(404).send({ message: "Correo electrónico incorrecto" });

        bcrypt.compare(password, userStored.password, (err, check) => {
            if (err) return res.status(500).send({ message: "Error del servidor" });
            if (!check) return res.status(404).send({ message: "Contraseña incorrecta" })

            res.status(200).send({
                accessToken: jwt.createAccessToken(userStored),
                refreshToken: jwt.createRefreshToken(userStored)
            });
        });
    })
}

module.exports = {
    signUp,
    signIn
}