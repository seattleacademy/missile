ThunderConnector = require('thunder-connector');
ThunderConnector.connect();

exports.turnLeftDegrees = function turnLeftDegrees(degrees){
	degrees = degrees || 10;
	stopTime = Math.floor(degrees * 22.3);
	console.log(stopTime);
	setTimeout(function(){ThunderConnector.command('left');},0);
	setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}