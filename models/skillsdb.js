const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('skillsdb', {
    skillsId: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    skills: {
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
    }
  }, {
    sequelize,
    tableName: 'skillsdb',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "skillsId" },
        ]
      },
      {
        name: "fkSkillsDBUsersDB1_idx",
        using: "BTREE",
        fields: [
          { name: "usersDB_id" },
        ]
      },
    ]
  });
};
