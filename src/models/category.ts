'use strict';
import { Model } from 'sequelize';
import { CategoryAttributes } from '../dto/CategoryDTO';

module.exports = (sequelize: any, DataTypes: any) => {
  class Category extends Model<CategoryAttributes> implements CategoryAttributes {
    name!: string
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  Category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};