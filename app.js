// Include the cluster module
var cluster = require('cluster');
var debug = require('debug')('ocruzcarrillo:server');

// Code to run if we're in the master process
if (cluster.isMaster) {

    // Count the machine's CPUs
    var cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

    // Listen for terminating workers
    cluster.on('exit', function (worker) {

        // Replace the terminated workers
        console.log('Worker ' + worker.id + ' died :(');
        cluster.fork();

    });

// Code to run if we're in a worker process
} else {
	var AWS = require('aws-sdk');
	var createError = require('http-errors');
	var express = require('express');
	var path = require('path');
	var favicon = require('serve-favicon');
	var logger = require('morgan');
	
	AWS.config.region = process.env.REGION

	var mongoose = require('mongoose');
	mongoose.connect('mongodb://ocruzcarrillo:4n1t4l4v4l4t1n4@34.204.141.156/testing')
	  .then(() =>  console.log('connection succesful'))
	  .catch((err) => console.error(err));

	var apiRouter = require('./routes/gym');

	var app = express();

	app.use(logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(express.static(path.join(__dirname, 'dist/ocruzcarrillo')));
	app.use('/gyms', express.static(path.join(__dirname, 'dist/ocruzcarrillo')));
	app.use('/gym-details/:id', express.static(path.join(__dirname, 'dist/ocruzcarrillo')));
	app.use('/gym-create', express.static(path.join(__dirname, 'dist/ocruzcarrillo')));
	app.use('/gym-edit/:id', express.static(path.join(__dirname, 'dist/ocruzcarrillo')));
	app.use('/api', apiRouter);

	// catch 404 and forward to error handler
	app.use(function(req, res, next) {
	  next(createError(404));
	});

	// error handler
	app.use(function(err, req, res, next) {
	  // set locals, only providing error in development
	  res.locals.message = err.message;
	  res.locals.error = req.app.get('env') === 'development' ? err : {};

	  // render the error page
	  res.status(err.status || 500);
	  res.send(err.status);
	});
	
	var port = process.env.PORT || 3000;

    var server = app.listen(port, function () {
        console.log('Server running at http://127.0.0.1:' + port + '/');
    });
	
    server.on('error', onError);
    server.on('listening', onListening);
	
	module.exports = app;
}


/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}