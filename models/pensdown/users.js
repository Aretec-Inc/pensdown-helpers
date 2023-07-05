'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init(
        {
            user_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            email: DataTypes.STRING,
            user_name: DataTypes.STRING,
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            password: DataTypes.STRING,
            auth_type: DataTypes.STRING,
            access_token: DataTypes.ARRAY(DataTypes.STRING(5000)),
            role_id: DataTypes.STRING,
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            is_approved: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            is_validated: {
                type: DataTypes.BOOLEAN
            },
            created_at: {
                type: DataTypes.DATE
            },
            updated_at: {
                type: DataTypes.DATE
            },
        },
        {
            sequelize,
            modelName: 'users',
            schema: 'pensdown',
            createdAt: false,
            updatedAt: false
        });
    return User;
};