let DB = require("../../../config/database");
let { validationResult } = require('express-validator');
let fs = require('fs');

class Helpers{
    static first(table,id,pk="id"){
        return DB(table).where(pk,id).first();
    }
    static sendSuccessResponseData(res,data){
        res.status(200).json({
            api_status : 1,
            api_message : "success",
            data : data
        })
    }

    static sendSuccessMessage(res,pesan="success"){
        res.status(200).json({
            api_status : 1,
            api_message : pesan,
        })
    }

    static sendErrorMessage(res,pesan="success"){
        res.status(200).json({
             api_status : 1,
             api_message : pesan.toString(),
        })
    }

    static validatorRequest(req,res){
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(200).json({
                api_status: 0,
                api_message: errors.array({onlyFirstError:true})[0].msg
            });
            return false;
        }else {
            return true;
        }
    }

    static url(req,url=""){
        let urlFull = req.protocol + '://' + req.get('host')+'/'+url;
        return urlFull;
    }

    static currentUrl(req,url=""){
        let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl+'/'+url;
        return fullUrl;
    }

    static uploadFile(file,filename=null){
        if (!filename){
            let randomString = this.random(10);
            filename = `${randomString}${file.name}`;
        }
        let dir = 'storage/uploads/'+filename;
        file.mv(dir, function(err) {
            if (err) {
                console.log(err);
                return null;
            }
        });
        return dir;
    }

    static random(length=6){
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < length; i++){
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    static uploadBase64(value){
        value.replace(/^data:([A-Za-z-+/]+);base64/, '');
        try {
            let randomString = this.random(15);
            let dir = 'storage/uploads/'+randomString+".jpg";
            fs.writeFileSync(dir, value, {encoding: 'base64'});
            return dir;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    static renderPaginate(current,last){
        var delta = 2;
        var left = current - delta;
        var right = current + delta + 1;
        var range = [];
        var rangeWithDots = [];
        var l = 0;

        for (var i = 1; i <= last; i++) {
            if (i == 1 || i == last || i >= left && i < right) {
                range.push(i);
            }
        }
        for(let [index, i] of range.entries()) {
            if (l!=0) {
                if (i - l == 2) {
                    var val = l + 1;
                    rangeWithDots.push(val);
                } else if (i - l != 1) {
                    rangeWithDots.push("...");
                }
            }
            rangeWithDots.push(i);
            l = i;
        }
        return rangeWithDots;
    }

}


module.exports = Helpers;
