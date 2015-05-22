ThunderConnector = require('thunder-connector');
console.log(ThunderConnector);
ThunderConnector.connect();
//the turret takes 22.3 milliseconds per degree
function turnLeftDegrees(degrees){
	stopTime = Math.floor(degrees * 22.3)
	setTimeout(function(){ThunderConnector.command('left');},0);
	setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}

turnLeftDegrees(90);