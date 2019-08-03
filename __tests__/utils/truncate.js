import { sequelize } from "../../src/models";

module.exports = () => {
  console.log("truncating database");
  return Promise.all(
    Object.keys(sequelize.models).map(key => {
      return sequelize.models[key].destroy({ truncate: true, force: true });
    }),
  );
};
