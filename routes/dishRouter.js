const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req, res, next) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   next();
})
.get((req, res, next) => {
   res.end('Will send all dishes to you!');
})
.post((req, res, next) => {
   res.end('Will add the dish: ' + req.body.name +
           ' with details: ' + req.body.description);
})
.put((req, res, next) => {
   res.statusCode = 403 /*Not supported*/
   res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
   res.end('Will delete all the dishes!');
});


dishRouter.route('/:dishId')
.get((req, res, next) => {
   res.end('Will send the dish: ' + req.params.dishId + ' to you!');
})
.post((req, res, next) => {
  res.statusCode = 403 /*Not supported*/
  res.end('POST operation not supported on /dishes/'
           + req.params.dishId);
})
.put((req, res, next) => {
   res.write('Updating the dish: ' + req.params.dishId);
   res.end('will update the dish: ' + req.body.name +
          ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
   res.end('Deleting dish: ' + req.params.dishId);
});


module.exports = dishRouter;
