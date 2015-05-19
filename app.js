ThunderConnector = require('thunder-connector');
console.log(ThunderConnector);
ThunderConnector.connect();
//ThunderConnector.command('fire');
//ThunderConnector.command('down');
//setTimeout(function(){ThunderConnector.command('fire');},500);
setTimeout(function(){ThunderConnector.command('right');},1000);
setTimeout(function(){ThunderConnector.command('left');},1500);

setTimeout(function(){ThunderConnector.command('up');},2000);
setTimeout(function(){ThunderConnector.command('stop');},3500);
setTimeout(function(){ThunderConnector.command('fire');},5000);
setTimeout(function(){ThunderConnector.command('fire');},9000);
setTimeout(function(){ThunderConnector.command('left');},12000);

setTimeout(function(){ThunderConnector.command('fire');},13000);
setTimeout(function(){ThunderConnector.command('left');},18000);

setTimeout(function(){ThunderConnector.command('fire');},19000);
setTimeout(function(){ThunderConnector.command('down');},22000);
