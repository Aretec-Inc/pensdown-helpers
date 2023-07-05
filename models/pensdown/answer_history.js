'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Reviews extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Reviews.init(
        {
            answer_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            question_text: DataTypes.STRING,
            answer_text: DataTypes.STRING,
            reference_text: DataTypes.STRING,
            proposal_question_id: DataTypes.STRING,
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
            modelName: 'answer_history',
            schema: 'pensdown',
            createdAt: false,
            updatedAt: false
        });
    return Reviews;
};