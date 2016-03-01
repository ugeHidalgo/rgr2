var getbabelRelayPlugin = require('babel-relay-plugin');
var schemaData = require('./data/schema.json').data;

module.exports = getbabelRelayPlugin(schemaData);
