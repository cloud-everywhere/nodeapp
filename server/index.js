// const server = require('./server');

// const port = process.env.PORT || 3000;

// server.create()
//     .then(app => {
//         app.listen(port, () => {
//             console.log(`Application has started on port ${port}!`);
//         });
//     }).catch(err => console.log(err));

const staticServer = require('node-static');
    
var fileServer = new staticServer.Server('./build');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response, function (err, result) {
            if (err) { // There was an error serving the file
                console.error("Error serving " + request.url + " - " + err.message);

                // Respond to the client
                response.writeHead(err.status, err.headers);
                response.end();
            }
        });
    }).resume();
}).listen(3000);