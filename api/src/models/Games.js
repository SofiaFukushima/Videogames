const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Games', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull:false,
            primaryKey: true,
          },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        realeased: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        user: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        reviews: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        platforms: {
            type: DataTypes.STRING,
            allowNull: false,
          },

      }, {timestamps: false});
    };