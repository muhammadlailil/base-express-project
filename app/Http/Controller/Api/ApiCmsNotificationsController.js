let DB = require("../../../../config/database");
let Helpers = require("../../Helpers/Helpers");
let CmsNotif = require("../../Models/CmsNotif");

class ApiCmsNotificationsController{

    static async getAllNotif(req, res) {
        let notif = await CmsNotif.all();
        Helpers.sendSuccessResponseData(res, notif);
    }

}

module.exports = ApiCmsNotificationsController;