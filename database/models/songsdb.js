const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('songsdb', {
    songId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    img: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    titulo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    audioFileYTPlayer: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    audioFile: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    tipoProducto: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    usersDB_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usersdb',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'songsdb',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{
          name: "songId"
        }, ]
      },
      {
        name: "fkSongsDBUsersDB1idx",
        using: "BTREE",
        fields: [{
          name: "usersDB_id"
        }, ]
      },
    ]
  });
};