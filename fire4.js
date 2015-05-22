//fire4.js
ThunderConnector = require('thunder-connector');
console.log(ThunderConnector);
ThunderConnector.connect();
function fire4(){
	setTimeout(function(){ThunderConnector.command('fire');},0);
	setTimeout(function(){ThunderConnector.command('fire');},3500);
	setTimeout(function(){ThunderConnector.command('fire');},7000);
	setTimeout(function(){ThunderConnector.command('fire');},10500);
}

fire4();