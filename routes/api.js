let express = require('express');
let C = require("../app/Http/Controller");
let Route = express.Router();
let { check } = require('express-validator');



Route.get('/notif',C('Api/ApiCmsNotificationsController@getAllNotif'));
Route.post('/uploads',C('Api/ApiUploadFileController@uploadFile'));
Route.post('/uploads/base64',C('Api/ApiUploadFileController@uploadBase64'));
Route.get('/sample',C('Api/ApiSampleController@getIndex'));
Route.get('/aes',C('Api/ApiSampleController@getAES'));


Route.get('/store',C('Api/ApiListStoreController@getListStore'));
Route.get('/bandara',C('Api/ApiBandaraController@getListBandara'));


module.exports = Route;
