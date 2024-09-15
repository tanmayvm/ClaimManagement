import { DataTypes } from 'sequelize';
import { sequelize } from './database.js'; // Adjust the path to your database connection
import Emp from './Emp.js'; // Adjust the path
import GroupFlat from './Groupflat.js'; // Adjust the path

const PolicyFlat = sequelize.define('PolicyFlat', {
  PolicyFlatID: {
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
  GroupFlatID: {
    type: DataTypes.INTEGER,
    references: {
      model: GroupFlat,
      key: 'GroupFlatID',
    },
  },
  Policy: {
    type: DataTypes.TEXT,
    allowNull: false,
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

export default PolicyFlat;
