'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Teams extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Teams.init(
        {
            team_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            team_name: DataTypes.STRING,
            team_description: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'teams',
            schema: 'pensdown',
            createdAt: false,
            updatedAt: false
        });
    return Teams;
};