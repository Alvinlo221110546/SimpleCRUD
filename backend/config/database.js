import {Sequelize , DataTypes} from 'sequelize';

const sequelize = new Sequelize ("SimpleCrud_db","root","",{
host : "localhost",
dialect : "mysql"

});

(async ()=>{
try {
    await sequelize.sync();
    console.log ("Database and Tables synced")
} catch (error) {
    console.log("Error syncing database :",error)
}
})();

export {sequelize, DataTypes};