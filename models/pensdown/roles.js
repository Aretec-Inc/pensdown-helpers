'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Roles extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Roles.init(
        {
            role_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            role_name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'roles',
            schema: 'pensdown',
            createdAt: false,
            updatedAt: false
        });
    return Roles;
};