const axios = require('axios').default;
require('dotenv').config();

module.exports = { 
    async getData(req, res) {
        try {
            const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${process.env.API_KEY}`);
            // console.log(response);
            res.json(response.data)
        } catch (error) {
            console.error(error);
        }
    }
}
