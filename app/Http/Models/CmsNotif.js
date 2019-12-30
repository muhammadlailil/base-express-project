let DB = require("../../../config/database");

let tableName = "cms_notifications";
class CmsNotif{


    static simpleQuery()
    {
        return DB.table(tableName)
    }

    static all(){
        return this.simpleQuery().orderBy("id","desc");
    }

}

module.exports = CmsNotif;
