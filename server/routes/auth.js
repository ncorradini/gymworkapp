const { Router } = require('express');
const AuthController = require('../controllers/auth');

const router = Router();

router.post('/refresh-access-token', AuthController.refreshAccessToken);

module.exports = router;