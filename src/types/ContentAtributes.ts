import { Optional } from "sequelize";

export interface ContentAttributes {
    id?: number; 
    hashtag: string;
    title: string;
    description: string;
    imageUrl: string;
  }
  
 export type ContentCreationAttributes = Optional<ContentAttributes, 'id'>;