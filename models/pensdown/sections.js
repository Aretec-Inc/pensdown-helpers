'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Sections extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Sections.init(
        {
            section_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            section_name: DataTypes.STRING,
            created_at: DataTypes.DATE,
            parent_id: DataTypes.STRING
        },
        {
            sequelize,
            modelName: 'sections',
            schema: 'pensdown',
            createdAt: false,
            updatedAt: false
        });
    return Sections;
};