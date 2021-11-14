var DataTypes = require("sequelize").DataTypes;
var _instrumentsdb = require("./instrumentsdb");
var _songsdb = require("./songsdb");
var _usersdb = require("./usersdb");

function initModels(sequelize) {
  var instrumentsdb = _instrumentsdb(sequelize, DataTypes);
  var songsdb = _songsdb(sequelize, DataTypes);
  var usersdb = _usersdb(sequelize, DataTypes);

  instrumentsdb.belongsTo(usersdb, { as: "id_usersdb", foreignKey: "id"});
  usersdb.hasMany(instrumentsdb, { as: "instrumentsdbs", foreignKey: "id"});
  songsdb.belongsTo(usersdb, { as: "id_usersdb", foreignKey: "id"});
  usersdb.hasMany(songsdb, { as: "songsdbs", foreignKey: "id"});

  return {
    instrumentsdb,
    songsdb,
    usersdb,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
