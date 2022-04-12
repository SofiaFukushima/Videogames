const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull:false,
            primaryKey: true,
          },
        user: {
          type: DataTypes.STRING,
          allowNull: false,
            },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          mail: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          favorites: {
            type: DataTypes.STRING,
            allowNull: false,
          },

      }, {timestamps: false});
    };