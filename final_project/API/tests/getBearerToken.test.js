const axios = require('axios');
require('dotenv').config();
const { url, basicConfig } = require('../helpers/constants.js');


describe('GET bearer token', () => {
    let response;

        beforeEach(async () => {
            response = await axios.get(url.basicURL, basicConfig);
        });

        test('The request should return status code 200', () => {
            expect(response.status).toEqual(200);
        });

  
        test('Token should not be null', () => {
            token = response.data;
            expect(token).toBeDefined(); 
            expect(token).not.toBeNull();
          });
   
});
