import { DataTypes } from 'sequelize';
import { sequelize } from './database.js'; // Adjust the path to your database connection

const Conveyance = sequelize.define('Conveyance', {
  ConveyanceID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ConveyanceName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  ConveyanceType: DataTypes.STRING(50),
  Active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  Rate: {
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

export default Conveyance;
