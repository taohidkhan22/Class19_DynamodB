const AWS = require('aws-sdk');
require('dotenv').config();

const { AWS_REGION, AWS_ENDPOINT } = process.env;

AWS.config.update({
  region: AWS_REGION,
  endpoint: AWS_ENDPOINT
});

module.exports = AWS;
