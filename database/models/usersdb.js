const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('usersdb', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    apellido: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    userAvatar: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    bio: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    usersDBcol: {
      type: DataTypes.STRING(141),
      allowNull: true
    },
    skills: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usersdb',
    timestamps: false,
    indexes: [{
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [{
        name: "id"
      }, ]
    }, ]
  });
};