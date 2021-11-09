const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ventasdb', {
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipoProducto: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    cantidadItems: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    precioTotalProductos: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ventasdb',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cartId" },
        ]
      },
    ]
  });
};
