const Sequelize = require('sequelize');
const db = require('../database');


const Candy = db.define('candy', {
  // define your model here!
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 10
    }

  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://www.rebeccas.com/mm5/graphics/00000001/cn134_430x430.jpg'
  }

});


module.exports = Candy
