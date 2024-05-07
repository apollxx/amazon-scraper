const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const virtualConsole = new jsdom.VirtualConsole();

//Function to handle the JSDOM convertion
function handleJsdomConversion(html){
    return new JSDOM(html,{virtualConsole}); 
}

//Function to convert the dom element into the desired product JSON
function jsdomAmazonJson(dom){
    //Selecting all elements that are present in the search result
    const productElements = dom.window.document.querySelectorAll('[data-component-type="s-search-result"]');

    const products = [];
    //Mounting the JSON by selecting each element
    productElements.forEach(productElement => {

        const titleElement = productElement.querySelector('h2 span');
        const title = titleElement ? titleElement.textContent.trim() : '';

        const ratingElement = productElement.querySelector('.a-icon-star-small .a-icon-alt');
        const rating = ratingElement ? ratingElement.textContent.split(' ')[0] : '';
        
        const reviewsElement = productElement.querySelector('.a-size-small .a-size-base');
        const reviews = reviewsElement ? reviewsElement.textContent.split(' ')[0] : '';

        const imageElement = productElement.querySelector('img');
        const image = imageElement ? imageElement.src : '';

        products.push({ title, rating, reviews, image });
    });  
    return products;
}

module.exports = {
    handleJsdomConversion,
    jsdomAmazonJson
}