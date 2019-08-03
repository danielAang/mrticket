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
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {},
  );
  Client.associate = function(models) {
    // associations can be defined here
  };
  return Client;
};
