import { sequelize } from "../Config/db.sequelize.js";
import { DataTypes, Model } from "sequelize";

class SongModel extends Model {}

SongModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Untitled'
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    artist_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'song',
    freezeTableName: true,
    underscored: true
})

export default SongModel;