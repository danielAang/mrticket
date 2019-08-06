'use strict';

module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    address: DataTypes.STRING
  }, 
  {
    sequelize,
    tableName: "Events"
  });
  Event.associate = function(models) {
    models.Event.belongsTo(models.User, {
      foreignKey: "user_id"
    });
    models.Event.belongsTo(models.Client, {
      foreignKey: "client_id"
    });
  };
  return Event;
};