"use strict";
module.exports = function(sequelize, DataTypes) {
  var favorite = sequelize.define(
    "favorite",
    {
      imdbid: DataTypes.STRING,
      title: DataTypes.STRING,
      year: DataTypes.INTEGER,
      poster: DataTypes.STRING
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
          models.favorite.hasMany(models.comment, { onDelete: "cascade" });
        }
      }
    }
  );
  return favorite;
};
