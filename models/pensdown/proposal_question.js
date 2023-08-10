'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProposalQuestions extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ProposalQuestions.init(
        {
            proposal_question_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            question_id: DataTypes.STRING,
            proposal_id: DataTypes.STRING,
            question_text: DataTypes.STRING(109765),
            section_id: DataTypes.STRING,
            approved_by: DataTypes.STRING,
            question_status: DataTypes.STRING,
            created_at: {
                type: DataTypes.DATE
            },
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
        },
        {
            sequelize,
            modelName: 'proposal_question',
            schema: 'pensdown',
            createdAt: false,
            updatedAt: false
        });
    return ProposalQuestions;
};