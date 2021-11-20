const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('instrumentsdb', {
    InstrumId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    img: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    titulo: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(420),
      allowNull: true
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tipoProducto: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usersdb',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'instrumentsdb',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "InstrumId" },
        ]
      },
      {
        name: "fkInstrumentsDBUsersDB1_idx",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
