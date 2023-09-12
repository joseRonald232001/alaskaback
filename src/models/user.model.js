const { DataTypes } = require("sequelize");
const db = require("../database/database");

const User = db.define("users", {
  id: { type: DataTypes.UUID, primaryKey: true},

  name: { type: DataTypes.STRING, allowNull: false },

  avatar: { type: DataTypes.STRING },

  lastName: { type: DataTypes.STRING, allowNull: false },

  userName: { type: DataTypes.STRING, allowNull: false, unique: true },

  email: { type: DataTypes.STRING, allowNull: false, unique: true  },

  password: { type: DataTypes.STRING, allowNull: false },

  role: { type: DataTypes.ENUM("normal", "admin"), defaultValue: "normal" },
});

module.exports = User;
