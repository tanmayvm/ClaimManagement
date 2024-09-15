import { DataTypes } from 'sequelize';
import { sequelize } from './database.js'; // Adjust the path to your database connection
import Emp from './Emp.js'; // Adjust the path
import Catagory from './Catagory.js'; // Adjust the path

const BreClaim = sequelize.define('BreClaim', {
  ClaimID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  EmpID: {
    type: DataTypes.INTEGER,
    references: {
      model: Emp,
      key: 'EmpID',
    },
  },
  CatagoryID: {
    type: DataTypes.INTEGER,
    references: {
      model: Catagory,
      key: 'CatagoryID',
    },
  },
  Status: DataTypes.STRING(50),
  Active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  ApplicationDate: DataTypes.DATE,
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
},{
  tableName: 'BreClaim',
  timestamps: false,
});

export default BreClaim;
