'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Feedback extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Feedback.init(
        {
            proposal_review_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            created_by: DataTypes.STRING,
            answer_id: DataTypes.STRING,
            feedback_comment: DataTypes.STRING,
            positive_negative: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
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
            modelName: 'feedback',
            schema: 'pensdown',
            createdAt: false,
            updatedAt: false
        });
    return Feedback;
};