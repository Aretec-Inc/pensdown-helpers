'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProposalTypes extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ProposalTypes.init(
        {
            type_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            type_name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'proposal_types',
            schema: 'pensdown',
            createdAt: false,
            updatedAt: false
        });
    return ProposalTypes;
};