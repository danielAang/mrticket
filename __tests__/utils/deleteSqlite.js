import fs from "fs";
import path from "path";

module.exports = () => {
  console.log("Deleting .sqlite file");
  fs.readdirSync(path.resolve(".."))
    .filter(file => {
      return file.includes(".sqlite");
    })
    .forEach(sqliteFile => {
      fs.unlinkSync(sqliteFile);
    }); 
};

