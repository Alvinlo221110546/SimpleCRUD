import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../config/database.js";

const Item = sequelize.define('Item', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }, {
    tableName: 'items',
    timestamps: false,
  });

  (async () => {
    try {
      await sequelize.sync();
      console.log("Item model synced with database");
    } catch (error) {
      console.log("Error syncing Item model:", error);
    }
  })();
  
  export default Item;
  
  