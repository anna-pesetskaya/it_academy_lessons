const axios = require('axios');
require('dotenv').config();
const availableServicesJsonSchema = require('../data/availableServices.v1.json');

const { Validator } = require('jsonschema');
const validator = new Validator();

const { url, basicConfig } = require('../helpers/constants.js');



describe('GET available services', () => {
    let response;

        beforeEach(async () => {
            response = await axios.get(url.basicURL, basicConfig);
            const bearerToken = response.data;
            const servicesConfig = { headers: { 'Authorization': `${process.env.basicToken}`, 'x-sso-authorization': `${bearerToken}`} };
            servicesResponse = await axios.get(url.servicesURL, servicesConfig);
        });

        test('The request should return status code 200', () => {
            expect(servicesResponse.status).toEqual(200);
        });


        test('The response should match the appropriate JSON schema', async () => {
            const validationResult = validator.validate(servicesResponse.data, availableServicesJsonSchema);
            expect(validationResult.valid).toEqual(true);
        });

        
});

  