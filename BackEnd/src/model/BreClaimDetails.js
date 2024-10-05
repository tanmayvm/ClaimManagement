import { DataTypes } from 'sequelize';
import { sequelize } from './database.js'; // Adjust the path to your database connection
import BreClaim from './BreClaim.js'; // Adjust the path
import Head from './Head.js'; // Adjust the path
import Conveyance from './Conveyance.js'; // Adjust the path

const BreClaimDetails = sequelize.define('BreClaimDetails', {
  ClaimDetailID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ClaimID: {
    type: DataTypes.INTEGER,
    references: {
      model: BreClaim,
      key: 'ClaimID',
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
  EligibleAmt: {
    type: DataTypes.DECIMAL(10, 2),
  },
  BillPeriod: DataTypes.STRING(50),
  BillDate: DataTypes.DATE,
  ConveyanceRate: {
    type: DataTypes.DECIMAL(10, 2),
  },
  Amount: {
    type: DataTypes.DECIMAL(10, 2),
  },
  EmpRemarks: DataTypes.TEXT,
  EmpExcessClaimRemarks: DataTypes.TEXT,
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
  },
  Active:DataTypes.INTEGER
},{
  tableName: 'BreClaimDetails',
  timestamps: false,
}
);

BreClaim.hasMany(BreClaimDetails,{foreignKey:'ClaimID'});
BreClaimDetails.belongsTo(BreClaim,{foreignKey:'ClaimID'});

Head.hasMany(BreClaimDetails,{foreignKey:'HeadID'});
BreClaimDetails.belongsTo(Head,{foreignKey:'HeadID'});
export default BreClaimDetails;
