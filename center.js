//center.js
ThunderConnector = require('thunder-connector');
console.log(ThunderConnector);
ThunderConnector.connect();
function center(){
setTimeout(function(){ThunderConnector.command('right');},0);
setTimeout(function(){ThunderConnector.command('down');},6500);
setTimeout(function(){ThunderConnector.command('left');},8000);
setTimeout(function(){ThunderConnector.command('up');},11050);
setTimeout(function(){ThunderConnector.command('stop');},11850);
//setTimeout(function(){ThunderConnector.command('fire');},10500);


//setTimeout(function(){ThunderConnector.command('fire');},8200);

}

center();