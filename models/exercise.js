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
      type: DataTypes.DATE,
      // field: "created_at",
      // type: sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      // field: "updated_at",
      // type: sequelize.DATE,
      allowNull: false
    }
  });
  // Association
  // Exercises.associate = function(models) {
  //   Exercises.belongsTo(models.Week, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Exercises;
};
