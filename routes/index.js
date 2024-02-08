const Express = require('express');
const Pages = require('../controllers/PageController');
const Email = require('../controllers/EmailController');
const { apiEmailValidation } = require('../configs/validation');
const router = Express.Router();
router.get('/', Pages.homepage);
router.post('/api/email', apiEmailValidation, Email);
module.exports = router;
