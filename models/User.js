const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    // static rating(body, models) {
    //     return models.Rating.create({
    //         user_id: body.user_id,
    //         post_id: body.post_id,
    //         star_rating: body.star_rating
    //     })
    //         .then(() => {
    //             return User.findOne({
    //                 where: {
    //                     id: body.user_id
    //                 },
    //                 attributes: [
    //                     'id',
    //                     'username',
    //                     'email',
    //                     [
    //                         sequelize.fn('AVG', sequelize.col('rating.star_rating')), 'avg_rating'
    //                     ]
    //                     sequelize.literal(`(SELECT AVG(star_rating) FROM rating WHERE id = Rating.user_id)`)
    //                 ]
    //             })
    //         })
    // };
    //set up method to run on instance data (per user) to check password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

//define User table columns and configuration
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true

        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: {
                len: [4]
            }
        }
    },
    {
        hooks: {
            //set up beforeCreate lifecycle "hook" functionality
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            //set up beforeUpdate lifecycle "hook" functionality
            async beforeUpdate(updateUserData) {
                updateUserData.password = await bcrypt.hash(updateUserData.password, 10);
                return updateUserData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;