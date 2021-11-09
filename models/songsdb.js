const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('songsdb', {
    songId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    img: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    precioUnitario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    audioFileYTPlayer: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: "audioFileYTPlayer_UNIQUE"
    },
    audioFile: {
      type: DataTypes.STRING(70),
      allowNull: false,
      unique: "audioFile_UNIQUE"
    },
    tipoProducto: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    usersDBId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usersdb',
        key: 'id'
      }
    },
    ventasDBCartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ventasdb',
        key: 'cartId'
      }
    }
  }, {
    sequelize,
    tableName: 'songsdb',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "songId" },
        ]
      },
      {
        name: "songId_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "songId" },
        ]
      },
      {
        name: "audioFileYTPlayer_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "audioFileYTPlayer" },
        ]
      },
      {
        name: "audioFile_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "audioFile" },
        ]
      },
      {
        name: "fkSongsDBUsersDB_idx",
        using: "BTREE",
        fields: [
          { name: "usersDBId" },
        ]
      },
      {
        name: "fkSongsDBVentasDB1_idx",
        using: "BTREE",
        fields: [
          { name: "ventasDBCartId" },
        ]
      },
    ]
  });
};
