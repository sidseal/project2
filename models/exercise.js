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
    }
  });
  return Exercises;
};
