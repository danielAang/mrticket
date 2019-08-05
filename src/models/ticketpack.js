'use strict';
module.exports = (sequelize, DataTypes) => {
  const TicketPack = sequelize.define('TicketPack', {
    event_id: DataTypes.INTEGER,
    number: DataTypes.INTEGER
  }, {});
  TicketPack.associate = function(models) {
    // associations can be defined here
  };
  return TicketPack;
};