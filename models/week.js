module.exports = function(sequelize, DataTypes) {
  const Week = sequelize.define("Week", {
    weekDay: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Association
  Week.associate = function(models) {
    Week.hasMany(models.Exercises, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Week;
};
