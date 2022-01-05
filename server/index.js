const { connect } = require('./database/config');
const app = require('./app');

// Database connection
(function () { connect() })();

// Init server
app.listen(app.get('PORT'), () => {
    console.log('Server on port: ', app.get('PORT'));
});