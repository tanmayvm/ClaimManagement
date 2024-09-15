import { DataTypes } from 'sequelize';
import { sequelize } from './database.js';
import Catagory from './Catagory.js';

const Head = sequelize.define('Head', {
  HeadID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  CatagoryID: {
    type: DataTypes.INTEGER,
    references: {
      model: Catagory,
      key: 'CatagoryID',
    },
  },
  HeadName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  CreatedBy: DataTypes.STRING(50),
  ModifiedBy: DataTypes.STRING(50),
  CreatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  ModifiedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW,
  }
}, {
  tableName: 'Head',
  timestamps: false,
});

Catagory.hasMany(Head,{foreignKey:'CatagoryID'});
Head.belongsTo(Catagory,{foreignKey:'CatagoryID'});


export default Head;
