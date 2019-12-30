let DB = require("../../../../config/database");
let Helpers = require("../../Helpers/Helpers");
let AES = require("../../Helpers/AES");


class ApiSampleController {

    static getIndex(req, res)
    {
        var a = Helpers.renderPaginate(6,1000);
        console.log(a);
        Helpers.sendSuccessMessage(res);
    }

    static getAES(req, res)
    {
        try {
            let text = "s2OQDyBnvnMU7GVnJO4sfZxIyziGU5h+aEoEOD5fD8hLUmx0IjPLmo54w+7HDu7K2Hs9RvYRtxD8vlw7qGe/lYn9IDZYZImYh9/C9T4v4W7+99I9s/ZnoAoib4VqVphTwUghqRvyovsQ5myd2RFZQQ==";
            let descryp = AES.decrypt(text,"crocodicdeveloper","batic2019telin");
            let data = {
                data : descryp
            };
            Helpers.sendSuccessResponseData(res,data);
        }catch (e) {
            Helpers.sendErrorMessage(res,e.toString())
        }
    }
}

module.exports = ApiSampleController;
