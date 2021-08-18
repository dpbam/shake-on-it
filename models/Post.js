const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {
  static rating(body, models) {
    return models.Rating.create({
      user_id: body.user_id,
      post_id: body.post_id,
      num_rating: body.num_rating,
    }).then(() => {
      return Post.findOne({
        where: {
          id: body.user_id,
        },
        attributes: [
          "id",
          "title",
          "content",
          "created_at",
          [
            sequelize.literal(
              `(SELECT AVG(num_rating) FROM rating WHERE post.id = rating.post_id)`
            ),
            "rating_score",
          ],
        ],
      });
    });
  }
}

//define Post table columns and configuration
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    // photo: {
    //     type: DataTypes.BLOB('long'),
    //     allowNull: true
    // },
    state_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "state",
        key: "id",
      },
    },
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "city",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
