let express = require('express');
let C = require("../app/Http/Controller");
let Route = express.Router();
let moment = require("moment");



Route.get('/',function (req,res) {
    // let z = 221;
    // z =z.toString();
    // console.log(z);
    // ab = z.replace(1,"sds");
    // console.log(ab)
    // let data = {
    //     "lama_bekerja": 76,
    //     "jumlah_hari_kerja": 21,
    //     "jumlah_absen_masuk": 0,
    //     "absen_tidak_masuk": 21,
    //     "menit_terlambat": 10,
    //     "gaji_pokok": 2000000
    // };
    // let b ="sds";
    // data[b] = 100;
    // console.log(data);
    // let a = "menit_terlambat*50000+gaji_pokok";
    // for (var key in data) {
    //     if (data.hasOwnProperty(key)) {
    //         a = a.replace(key,data[key]);
    //     }
    // }
    // console.log(a);
    //
    //
    // let c =eval(a);
    // console.log(c);
    res.render('index', { layout: 'default',title: 'Hello Word' });
});



module.exports = Route;
