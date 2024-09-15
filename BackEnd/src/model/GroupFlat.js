import { DataTypes } from 'sequelize';
import { sequelize } from './database.js'; // Adjust the path to your database connection
import Emp from './Emp.js'; // Adjust the path
import Group from './Group.js'; // Adjust the path

const GroupFlat = sequelize.define('GroupFlat', {
  GroupFlatID: {
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
  GroupID: {
    type: DataTypes.INTEGER,
    references: {
      model: Group,
      key: 'GroupID',
    },
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

export default GroupFlat;
