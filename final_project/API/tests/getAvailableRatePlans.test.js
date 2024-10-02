const axios = require('axios');
const availableRatePlanJsonSchema = require('../data/availableRatePlan.v1.json');
require('dotenv').config();

const { Validator } = require('jsonschema');
const validator = new Validator();
const { url, basicConfig } = require('../helpers/constants.js');



        
describe('GET available rate plans', () => {
    let response;

        beforeEach(async () => {
            response = await axios.get(url.basicURL, basicConfig);
            const bearerToken = response.data;
            const ratePlanConfig = { headers: { 'Authorization': `${process.env.basicToken}`, 'x-sso-authorization': `${bearerToken}`} };
            ratePlanResponse = await axios.get(url.ratePlanURL, ratePlanConfig);
        });

        test('The request should return status code 200', () => {
            expect(ratePlanResponse.status).toEqual(200);
        });


        test('The response should match the appropriate JSON schema', async () => {
            const validationResult = validator.validate(ratePlanResponse.data, availableRatePlanJsonSchema);
            expect(validationResult.valid).toEqual(true);
        });

           
});
