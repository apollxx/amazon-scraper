const axios = require('axios');
const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
};

async function axiosAmazon(keyword){
    const response = await axios.get(`https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`, {headers});
    return response.data;
}

module.exports = {
    axiosAmazon
}