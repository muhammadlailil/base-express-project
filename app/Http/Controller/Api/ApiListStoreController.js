let DB = require("../../../../config/database");
let Helpers = require("../../Helpers/Helpers");

class ApiListStoreController {

    static async getListStore(req,res)
    {
        var list = await DB("store").orderBy("id","desc");
        Helpers.sendSuccessResponseData(res,list);
    }

}


module.exports = ApiListStoreController;
