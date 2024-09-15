import { DataTypes } from 'sequelize';
import { sequelize } from './database,js'; // Adjust the path to your database connection

const Group = sequelize.define('Group', {
  GroupID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  GroupName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Parameter: DataTypes.TEXT,
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
});

export default Group;
