const jwt = require('jsonwebtoken');
const moment = require('moment');

const SECRET_KEY = 'Ghe2456aswWergkaweE202481';

exports.createAccessToken = user => {
    const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        albums: user.albums,
        createToken: moment().unix(),
        exp: moment().add(3, 'hours').unix()
    }

    return jwt.sign(payload, SECRET_KEY);
}

exports.createRefreshToken = user => {
    const payload = {
        id: user._id,
        exp: moment().add(30, 'days').unix()
    }

    return jwt.sign(payload, SECRET_KEY);
}

exports.decodeToken = token => jwt.decode(token, SECRET_KEY);