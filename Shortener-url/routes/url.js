// Step 1:
const express = require('express');

// step4: Controller Function  destructure
const {generatedNewShortUrl} = require('../controllers/url');

// Step2:Router
const router = express.Router();


//Step3: Create main route POST for generte random-id

router.post('/', generatedNewShortUrl);

// export 
module.exports = router;