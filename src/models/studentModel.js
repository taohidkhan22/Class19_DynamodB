const AWS = require('../config/Aws');

const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports = dynamodb;
