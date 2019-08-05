"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.STRING,
      birth_date: DataTypes.DATE,
    },
    {},
  );
  User.associate = function(models) {
    models.User.hasMany(models.Event);
  };
  return User;
};
