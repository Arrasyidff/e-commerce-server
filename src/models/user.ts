'use strict';
import { Model } from 'sequelize'
import { UserAttributes } from '../dto/UserDTO'

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    fullname!: string
    email!: string
    password!: string
    gender!: 'male' | 'female'
    address!: string
    date_of_birth!: Date
    cart!: Array<string>
    wishlist!: Array<string>
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  User.init({
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    address: DataTypes.STRING,
    date_of_birth: DataTypes.DATEONLY,
    cart: DataTypes.ARRAY(DataTypes.STRING),
    wishlist: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};