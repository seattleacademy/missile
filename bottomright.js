ThunderConnector = require('thunder-connector');
console.log(ThunderConnector);
ThunderConnector.connect();
function downRight(){
setTimeout(function(){ThunderConnector.command('right');},0);
setTimeout(function(){ThunderConnector.command('down');},6000);
setTimeout(function(){ThunderConnector.command('stop');},7000);

//setTimeout(function(){ThunderConnector.command('fire');},8200);

}

downRight();