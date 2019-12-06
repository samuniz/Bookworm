module.exports = function(sequelize, Sequelize) {
  
  var Books = sequelize.define("books", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    ISBN: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },

    title: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    authors:{
      type: Sequelize.STRING,
      notEmpty: true
    },
    pageCount: Sequelize.INTEGER,
    currentPage: Sequelize.INTEGER,
    imgThumbnail:Sequelize.STRING,
    imgUrl: Sequelize.STRING,
    rating: Sequelize.INTEGER,
    userId: Sequelize.INTEGER,
  });

  return Books;
};

