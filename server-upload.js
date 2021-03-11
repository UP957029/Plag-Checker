const express = require('express');
const multer = require('multer');
const md5File = require('md5-file/promise');

const config = require('./config.json')

const app = express();
const configuredMulter = multer(config)
const multi = configuredMulter.multi('md5me')


