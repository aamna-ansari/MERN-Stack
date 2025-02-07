// Import Shortid from Npm to generate  'shortid'
const shortid = require("shortid");
// Store in dataBase so , import this
const URL = require("../models/url");

// generatedNewShortUrl
async function generatedNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "URL is required" });
  const shortID = shortid(); //Generate 8 characters short id by nanoid and shortid
  // Add in DataBase
  await URL.create({
    shortId: shortID,
    redirectUrl: body.url,
    visitHistory: [],
  });
  return res.json({ id: shortID });
}

// generatedNewShortUrlById

async function generatedNewShortUrlById(req, res) {
  const shortId = req.params.shortId;
  
  const entry = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } },
    { new: true }
  );

  if (!entry) {
    return res.status(404).send("<h1>404 Not Found</h1><p>Invalid short URL</p>");
  }

  return res.redirect(entry.redirectUrl);
}

// export
module.exports = {
  generatedNewShortUrl,
  generatedNewShortUrlById,
};
