ThunderConnector = require('thunder-connector');
console.log(ThunderConnector);
ThunderConnector.connect();
function fireloop(num){
for (i = 0; i < num; i++) { 
    setTimeout(function(){ThunderConnector.command('fire');},1 * 4000 * i);
}
}

num = process.argv[2] || 10;
fireloop(num);