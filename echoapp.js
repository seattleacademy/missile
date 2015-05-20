ThunderConnector = require('thunder-connector');
console.log(ThunderConnector);
ThunderConnector.connect();
//ThunderConnector.command('fire');
//ThunderConnector.command('down');
//setTimeout(function(){ThunderConnector.command('fire');},500);
// setTimeout(function(){ThunderConnector.command('right');},100);
// setTimeout(function(){ThunderConnector.command('left');},1500);

// setTimeout(function(){ThunderConnector.command('up');},2000);
// setTimeout(function(){ThunderConnector.command('stop');},3500);
// setTimeout(function(){ThunderConnector.command('fire');},5000);
// setTimeout(function(){ThunderConnector.command('fire');},9000);
// setTimeout(function(){ThunderConnector.command('left');},12000);

// setTimeout(function(){ThunderConnector.command('fire');},13000);
// setTimeout(function(){ThunderConnector.command('left');},18000);

// setTimeout(function(){ThunderConnector.command('fire');},19000);
// setTimeout(function(){ThunderConnector.command('down');},22000);


var https = require('https');
var fs = require('fs');
var options = {
    key: fs.readFileSync('/etc/ssl/server.key'),
    cert: fs.readFileSync('/etc/ssl/server.crt'),
    ca: fs.readFileSync('/etc/ssl/server.ca.crt')
};


https.createServer(options, function(req, res) {
    if (req.method == 'POST') {
        var jsonString = '';
        req.on('data', function(data) {
            jsonString += data;
        });
        req.on('end', function() {
            console.dir(jsonString, {
                depth: 5
            });
            echoResponse = {};
            echoResponse.version = "1.0";
            echoResponse.response = {};
            echoResponse.response.outputSpeech = {};


            echoResponse.response.outputSpeech.type = "PlainText"
            echoResponse.response.outputSpeech.text = "Awaiting your command!"
            echoResponse.response.shouldEndSession = "false";
            theRequest = JSON.parse(jsonString);
            console.log('JSON', theRequest.request);
            if (typeof theRequest.request.intent !== 'undefined') {
                choice = theRequest.request.intent.slots.Choice.value;
                echoResponse.response.outputSpeech.text = choice;

                if(choice === "left"){
                    echoResponse.response.outputSpeech.text = 'left';
                    setTimeout(function(){ThunderConnector.command('left');},0);
                    setTimeout(function(){ThunderConnector.command('stop');},1000);
                }
                if(choice === "right"){
                    echoResponse.response.outputSpeech.text = 'right';
                    setTimeout(function(){ThunderConnector.command('right');},0);
                    setTimeout(function(){ThunderConnector.command('stop');},1000);
                }                if(choice === "up"){
                    echoResponse.response.outputSpeech.text = 'up';
                    setTimeout(function(){ThunderConnector.command('up');},0);
                    setTimeout(function(){ThunderConnector.command('stop');},500);
                } 
                if(choice === "down"){
                    echoResponse.response.outputSpeech.text = 'down';
                    setTimeout(function(){ThunderConnector.command('down');},0);
                    setTimeout(function(){ThunderConnector.command('stop');},500);
                } 
                if(choice === "stop"){
                    echoResponse.response.outputSpeech.text = 'stop';
                    setTimeout(function(){ThunderConnector.command('stop');},0);
                } 
                   if(choice === "fire"){
                    echoResponse.response.outputSpeech.text = 'fire';
                    setTimeout(function(){ThunderConnector.command('fire');},0);
                    //setTimeout(function(){ThunderConnector.command('stop');},500);
                }               }
            myResponse = JSON.stringify(echoResponse);
            res.setHeader('Content-Length', myResponse.length);
            res.writeHead(200);
            res.end(myResponse);
            console.log('from post', myResponse);

        });
    } else {
        myResponse = JSON.stringify(echoResponse);
        res.setHeader('Content-Length', myResponse.length);
        res.writeHead(200);
        res.end(myResponse);
    }
}).listen(3000); //Put number in the 3000 range for testing and 443 for production
