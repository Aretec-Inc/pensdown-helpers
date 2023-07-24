'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ShallsWills extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ShallsWills.init(
        {
            shalls_wills_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            shalls_wills_text: DataTypes.STRING,
            proposal_id: DataTypes.STRING,
            section_id: DataTypes.STRING,
            created_by: DataTypes.STRING,
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: 'shallswills',
            schema: 'pensdown',
            createdAt: false,
            updatedAt: false
        });
    return ShallsWills;
};