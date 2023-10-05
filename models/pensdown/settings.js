'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Setting extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Setting.init(
        {
            proposal_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            model: DataTypes.STRING(255),
            willshallprompt: DataTypes.STRING(109654),
            questionprompt: DataTypes.STRING(109654),
            answerprompt: DataTypes.STRING(109654),
            agentprompt: DataTypes.STRING(109654),
            finetuneprompt: DataTypes.STRING(109654),
            api_key: DataTypes.STRING(1000),
            usedisearch: DataTypes.STRING(10),
            disearchserver: DataTypes.STRING(100)
        },
        {
            sequelize,
            modelName: 'settings',
            schema: 'pensdown',
            createdAt: false,
            updatedAt: false
        });
    return Setting;
};
