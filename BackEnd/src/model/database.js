
import { Sequelize } from 'sequelize';
// import {dbConfig} from '../properties'

const dbConfig={
    DBName:"BRE",
    user:"admin",
    pass:"admin",
    host:"localhost",
    port:3306,
    dialect: "mysql",
    // ,/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */

}

export const sequelize = new Sequelize(
    dbConfig.DBName,
    dbConfig.user,
    dbConfig.pass, 
    {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: 'mysql'
});
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

