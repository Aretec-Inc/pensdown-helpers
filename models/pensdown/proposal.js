'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Proposal extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Proposal.init(
        {
            proposal_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            proposal_name: DataTypes.STRING,
            model_name: DataTypes.STRING,
            api_key: DataTypes.STRING,
            proposal_type: DataTypes.STRING,
            category_type: DataTypes.STRING,
            team_id: DataTypes.STRING,
            created_by: DataTypes.STRING,
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            submission_date: {
                type: DataTypes.DATE
            },
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: 'proposal',
            schema: 'pensdown',
            createdAt: false,
            updatedAt: false
        });

    return Proposal;
};