ThunderConnector = require('thunder-connector');
console.log(ThunderConnector);
ThunderConnector.connect();
//the turret takes 22.3 milliseconds per degree
function turnRightDegrees(degrees){
	stopTime = Math.floor(degrees * 22.3)
	setTimeout(function(){ThunderConnector.command('right');},0);
	setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}

turnRightDegrees(90);