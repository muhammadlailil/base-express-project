let DB = require("../../../../config/database");
let Helpers = require("../../Helpers/Helpers");
let moment = require("moment");
let Cryptr = require('cryptr');
let cryptr = new Cryptr(process.env.SECRET_KEY);

class ApiBandaraController {

    static async getListBandara(req,res)
    {
        let bandara = await DB.table('bandara').orderBy('id','desc');
        for(let [i, row] of bandara.entries()) {
            row.created_at = moment(row.created_at).format("YYYY-MM-DD HH:mm:ss");
            row.updated_at = (row.updated_at)?moment(row.updated_at).format("YYYY-MM-DD HH:mm:ss"):"";
            row.id = cryptr.encrypt(row.id);
        }
        Helpers.sendSuccessResponseData(res,bandara)
    }

}

module.exports = ApiBandaraController;
