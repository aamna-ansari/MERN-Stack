const shortid= require('shortid');
// Store in data base so , import this 
const URL = require('../models/url');


async function generatedNewShortUrl(req, res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error: 'URL is required'})
    const shortID = shortid(); //Generate 8 characters short id by nanoid
// Add in DataBase  
    await URL.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory:[], 
    });
    return res.json({id: shortID});
}

// export 
module.exports = {
    generatedNewShortUrl,
}