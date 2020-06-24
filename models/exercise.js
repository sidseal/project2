module.exports = function(sequelize, DataTypes) {
  const Exercises = sequelize.define("Exercises", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    instructions: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return Exercises;
};
