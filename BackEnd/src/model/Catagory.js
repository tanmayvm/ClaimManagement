import { DataTypes } from 'sequelize';
import { sequelize } from './database.js';

const Catagory = sequelize.define('Catagory', {
  CatagoryID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  CatagoryName: {
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
  tableName: 'Catagory',
  timestamps: false,
});

export default Catagory;
