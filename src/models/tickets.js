'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tickets = sequelize.define('Tickets', {
    pack_id: DataTypes.INTEGER,
    barcode: DataTypes.STRING,
    is_checked: DataTypes.BOOLEAN
  }, 
  {
    sequelize,
    tableName: "Tickets"
  });
  Tickets.associate = function(models) {
    // associations can be defined here
  };
  return Tickets;
};