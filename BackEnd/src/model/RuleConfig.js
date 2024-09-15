import { DataTypes } from 'sequelize';
import { sequelize } from './database.js'; // Adjust the path to your database connection
import Group from './Group.js'; // Adjust the path
import Catagory from './Catagory.js'; // Adjust the path
import Head from './Head.js'; // Adjust the path
import Conveyance from './Conveyance.js'; // Adjust the path

const RuleConfig = sequelize.define('RuleConfig', {
  ConfigID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  RuleType: DataTypes.STRING(50),
  GroupID: {
    type: DataTypes.INTEGER,
    references: {
      model: Group,
      key: 'GroupID',
    },
  },
  CatagoryID: {
    type: DataTypes.INTEGER,
    references: {
      model: Catagory,
      key: 'CatagoryID',
    },
  },
  HeadID: {
    type: DataTypes.INTEGER,
    references: {
      model: Head,
      key: 'HeadID',
    },
  },
  ConveyanceID: {
    type: DataTypes.INTEGER,
    references: {
      model: Conveyance,
      key: 'ConveyanceID',
    },
  },
  Active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  EligibleAmt: {
    type: DataTypes.DECIMAL(10, 2),
  },
  ExcessClaim: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  ExcessClaimMessage: DataTypes.TEXT,
  MaxDOJ: DataTypes.DATE,
  MaxBOB: DataTypes.DATE,
  ConveyanceRate: {
    type: DataTypes.DECIMAL(10, 2),
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

export default RuleConfig;
