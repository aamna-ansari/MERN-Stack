// Step 1:
const express = require('express');

// step4: Controller Function  destructure
const {generatedNewShortUrl, generatedNewShortUrlById} = require('../controllers/url');

// Step2:Router
const router = express.Router();


//Step3: Create main route POST for generte random-id

// ✅ Route for creating short URLs
router.post('/', generatedNewShortUrl);

// ✅ Route for handling short URL redirects
router.get('/:shortId', generatedNewShortUrlById);

// export 
module.exports = router;