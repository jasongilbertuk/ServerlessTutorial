'use strict';

exports.handler = function(event, context, callback) {
    const response = { 'statusCode': 200, 
                       'headers': {'Content-Type': 'application/json'},
                       'body': { 'message' : 'hello world' }};
    callback(null, response);
}