const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('instrumentsdb', {
    instrumId: {
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
      type: DataTypes.STRING(60),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(420),
      allowNull: false
    },
    precioUnitario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tipoProducto: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    usersDB_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usersdb',
        key: 'id'
      }
    },
    ventasDB_cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ventasdb',
        key: 'cartId'
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
          { name: "instrumId" },
        ]
      },
      {
        name: "instrumId_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "instrumId" },
        ]
      },
      {
        name: "fkInstrumentsDBUsersDB1_idx",
        using: "BTREE",
        fields: [
          { name: "usersDB_id" },
        ]
      },
      {
        name: "fkInstrumentsDBVentasDB1_idx",
        using: "BTREE",
        fields: [
          { name: "ventasDB_cartId" },
        ]
      },
    ]
  });
};
