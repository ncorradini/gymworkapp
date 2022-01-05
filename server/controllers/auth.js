const jwt = require('../services/jwt');
const moment = require('moment');
const User = require('../models/user');

const willExpiredToken = token => {
    const { exp } = jwt.decodeToken(token);
    const currentDate = moment().unix();

    if (currentDate > exp) return true;

    return false;
}

const refreshAccessToken = (req, res) => {
    const { refreshToken } = req.body;
    const isTokenExpired = willExpiredToken(refreshToken);

    if (isTokenExpired) return res.status(404).send({ message: "El refresh token a expirado" });

    const { id } = jwt.decodeToken(refreshToken);
    User.findOne({ _id: id }, (err, userStored) => {
        if (err) return res.status(500).send({ message: "Error del servidor" });
        if (!userStored) return res.status(404).send({ message: "Usuario no encontrado" });

        return res.status(200).send({
            accessToken: jwt.createAccessToken(userStored), 
            refreshToken: refreshToken
        });
    })
}

module.exports = {
    willExpiredToken,
    refreshAccessToken
}
