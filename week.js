module.exports = function(sequelize, DataTypes) {
  const Week = sequelize.define("Week", {
    weekDay: {
      type: DataTypes.STRING
    }
  });
  // Association
  Week.associate = function(models) {
    Week.hasMany(models.Exercises);
  };
  return Week;
};
