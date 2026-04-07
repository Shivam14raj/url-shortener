const { nanoid } = require('nanoid');
const URL = require('../models/url.model');

async function handleGenerateNewURL(req, res) {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ message: "Enter any URL" });
    }

    const shortID = nanoid(8);

    await URL.create({
        shortID,
        redirectURL: url,
        visitHistory: []
    });

    return res.json({ id: shortID });
}


async function handleRedirectURL(req, res) {
    const { shortId } = req.params;

    const entry = await URL.findOneAndUpdate(
        { shortID: shortId },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now()
                }
            }
        },
        { new: true }
    );

    if (!entry) {
        return res.status(404).json({ message: "Short URL not found" });
    }

    res.redirect(entry.redirectURL);
}

module.exports = {
    handleGenerateNewURL,
    handleRedirectURL
};