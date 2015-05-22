//center.js
ThunderConnector = require('thunder-connector');
console.log(ThunderConnector);
ThunderConnector.connect();
function center(){
setTimeout(function(){ThunderConnector.command('right');},0);
setTimeout(function(){ThunderConnector.command('down');},6000);
setTimeout(function(){ThunderConnector.command('left');},7000);
setTimeout(function(){ThunderConnector.command('up');},10000);
setTimeout(function(){ThunderConnector.command('stop');},10500);
//setTimeout(function(){ThunderConnector.command('fire');},10500);


//setTimeout(function(){ThunderConnector.command('fire');},8200);

}

center();