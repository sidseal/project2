module.exports = function(sequelize, DataTypes) {
  const Exercises = sequelize.define("Exercises", {
    name: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    instructions: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      field: "created_at",
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      field: "updated_at",
      type: Sequelize.DATE,
      allowNull: false
    }
  });
  return Exercises;
};
