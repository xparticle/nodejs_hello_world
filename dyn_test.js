// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-2'});

// Create the DynamoDB service object
ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});

var params = {
  TableName: 'test-1',
  Item: {
    'id' : {S: '001'},
    'sort_id' : {S: '001'},
  }
};

// Call DynamoDB to add the item to the table
var items=[1,2,3,4,5,6,7,8,9,10];

items.forEach(element => {

    params.Item.id.S=element.toString();
    params.Item.sort_id.S=element.toString();
    

    ddb.putItem(params, function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Success", data);
        }
      });
    
});

