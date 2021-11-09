var DataTypes = require("sequelize").DataTypes;
var _instrumentsdb = require("./instrumentsdb");
var _skillsdb = require("./skillsdb");
var _songsdb = require("./songsdb");
var _usersdb = require("./usersdb");
var _ventasdb = require("./ventasdb");

function initModels(sequelize) {
  var instrumentsdb = _instrumentsdb(sequelize, DataTypes);
  var skillsdb = _skillsdb(sequelize, DataTypes);
  var songsdb = _songsdb(sequelize, DataTypes);
  var usersdb = _usersdb(sequelize, DataTypes);
  var ventasdb = _ventasdb(sequelize, DataTypes);

  instrumentsdb.belongsTo(usersdb, { as: "usersDB", foreignKey: "usersDB_id"});
  usersdb.hasMany(instrumentsdb, { as: "instrumentsdbs", foreignKey: "usersDB_id"});
  skillsdb.belongsTo(usersdb, { as: "usersDB", foreignKey: "usersDB_id"});
  usersdb.hasMany(skillsdb, { as: "skillsdbs", foreignKey: "usersDB_id"});
  songsdb.belongsTo(usersdb, { as: "usersDB", foreignKey: "usersDBId"});
  usersdb.hasMany(songsdb, { as: "songsdbs", foreignKey: "usersDBId"});
  instrumentsdb.belongsTo(ventasdb, { as: "ventasDB_cart", foreignKey: "ventasDB_cartId"});
  ventasdb.hasMany(instrumentsdb, { as: "instrumentsdbs", foreignKey: "ventasDB_cartId"});
  songsdb.belongsTo(ventasdb, { as: "ventasDBCart", foreignKey: "ventasDBCartId"});
  ventasdb.hasMany(songsdb, { as: "songsdbs", foreignKey: "ventasDBCartId"});

  return {
    instrumentsdb,
    skillsdb,
    songsdb,
    usersdb,
    ventasdb,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
