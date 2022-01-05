const mongoose = require('mongoose');

const config = { IP: 'localhost', PORT_DB: '27017' }

const connect = () => {
    try {
        mongoose.connect(`mongodb://${config.IP}:${config.PORT_DB}/gymworkapp`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database is connected');
    } catch (err) {
        console.error(err)
    }
}

module.exports = { connect }