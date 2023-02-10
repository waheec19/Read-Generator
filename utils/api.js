const axios = require("axios");
require('dotenv').config();

const token = process.env.TOKEN;
const api = {
 async getUser(username) {
    const res = await axios({
      headers:{'Authorization': `token ${token}`},
      url: `https://api.github.com/users/${username}`,
      method: 'GET'}) 

    const user = res.data
    return user;
    
  }
};

module.exports = api;