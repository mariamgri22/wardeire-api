import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import { ContentAttributes, ContentCreationAttributes } from '../types/ContentAtributes';

class Content extends Model<ContentAttributes, ContentCreationAttributes> implements ContentAttributes {
  public id!: number; 
  public hashtag!: string;
  public title!: string;
  public description!: string;
  public imageUrl!: string;
}

Content.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true, 
    },
    hashtag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'contents',
    timestamps: false,
  }
);

export default Content;
