import { DataTypes } from 'sequelize';
import { sequelize } from './database.js'; // Adjust the path to your database connection

const Emp = sequelize.define('Emp', {
  EmpID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  EmpCode: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  DOJ: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  Active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  DOB: DataTypes.DATE,
  Location: DataTypes.STRING(100),
  Status: DataTypes.STRING(50),
  Position: DataTypes.STRING(50),
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
});

export default Emp;
