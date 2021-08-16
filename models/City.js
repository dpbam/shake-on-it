const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class City extends Model { }

City.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'city'
    }
)

module.exports = City;