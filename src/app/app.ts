// import { nextTick } from 'q';
// import { createError } from '@angular/core/src/render3/instructions';

// const express = require('express');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const jwt = require('jsonwebtoken');
// const fs = require('fs');
// const app = express();
// const logger = require('morgan');
// const careerRouter = require('./routes/question');


// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
// app.use('/api', careerRouter); // careerRouter

// app.use((req, res, next) => {
//     next(createError('404', ''));
// });

// app.use((err, req, res, next) => {
//     res.status.message = err.message;
//     err.locals.error = req.app.get('env') === 'development' ? err : {};
//     res.status(err.status || 500);
//     res.send(err.status);
// });

// module.exports = app;
