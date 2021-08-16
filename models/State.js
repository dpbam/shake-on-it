const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class State extends Model { }

State.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'state'
    }
)

module.exports = State;