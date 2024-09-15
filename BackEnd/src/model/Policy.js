import { DataTypes } from 'sequelize';
import { sequelize } from './database.js'; // Adjust the path to your database connection
import Group from './Group.js'; // Adjust the path

const Policy = sequelize.define('Policy', {
  PolicyID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  GroupID: {
    type: DataTypes.INTEGER,
    references: {
      model: Group,
      key: 'GroupID',
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

export default Policy;
