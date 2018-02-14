let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {

	sns.publish({
		Message: 'this is a test message',
		MessageAttributes: {
			'AWS.SNS.SMS.SMSType': {
				DataType: 'String',
				StringValue: 'Transactional'
			}
		},
		PhoneNumber: '12345'
	}).promise()
		.then(data => {
			// your code goes here
			console.log(data);
		})
		.catch(err => {
			// error handling goes here
			console.log(error);
		});

	callback(null, 'Successfully executed');
}