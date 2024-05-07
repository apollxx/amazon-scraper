//Requiring the express module and auxiliary modules
const { Router } = require("express");   
const {handleJsdomConversion, jsdomAmazonJson} = require("../Common/jsdom");
const {axiosAmazon} = require("../Common/axios")

const router = Router();
router.get("/api/scrape", async (req, res) => {
    //Verifying if the keyword is present in the request
    //if it is not, return an error
    const { keyword } = req.query;
    if (!keyword) return res.status(400).json({ error: 'Keyword parameter is required' });
      
    //Using the encapsulated axios function to retrieve the html
    const html = await axiosAmazon(keyword);
    if (!html) return res.status(500).json({ error: 'Could not fetch Amazon html' });

    //Using the encapsulated Jsdom functions to retrieve the products JSON
    const dom = handleJsdomConversion(html);
    const products = jsdomAmazonJson(dom);

    //Returning the products JSON
    res.status(200).send(products);
})

module.exports = {
    scrape: router
}