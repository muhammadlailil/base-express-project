let Helpers = require("../../Helpers/Helpers");

class ApiUploadFileController{

    static async uploadFile(req,res){
        let valid = Helpers.validatorRequest(req,res);
        if (valid){
            let fileUpload = Helpers.uploadFile(req.files.file);
            let url = Helpers.url(req);
            let response = {
                fileUploadurl : url+fileUpload,
                url : url
            };
            Helpers.sendSuccessResponseData(res,response)
        }
    }

    static uploadBase64(req,res){
        console.log(req.body);
        let value = req.body.base64;
        let fileUplaad = Helpers.uploadBase64(value);
        Helpers.sendSuccessResponseData(res,{file:Helpers.url(req,fileUplaad)})
    }

}

module.exports = ApiUploadFileController;
