const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const cors = require('cors');
const expressMongoSanitize = require('express-mongo-sanitize');
const expressRateLimit = require('express-rate-limit');
const hpp = require('hpp');
const validator = require('validator');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet());
app.use(cors());
app.use(expressMongoSanitize());
app.use(expressRateLimit({ max: 100, windowMs: 60 * 60 * 1000 })); // 100 requests per hour max
app.use(hpp());
app.use(validator());

// Add your security middleware

// Undefined route
app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Route not found' });
});

module.exports = app;
