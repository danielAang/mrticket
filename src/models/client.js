"use strict";

module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define(
    "Client",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      cnpj: DataTypes.STRING,
      cpf: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {},
  );
  Client.associate = function(models) {
    models.Client.hasMany(models.Event);
  };
  return Client;
};
