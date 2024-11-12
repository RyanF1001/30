
const  Sequelize = require('sequelize');
const db = require('../db/connection');

const Job = db.define('job', {
    title:{
        type: Sequelize.STRING,
    },
    solicitante:{
        type: Sequelize.STRING,
    },
    disciplina:{
        type: Sequelize.STRING,
    },
    local:{
        type: Sequelize.STRING,
    },
    detalhes:{
        type: Sequelize.STRING,
    },
    new_job:{
        type: Sequelize.INTEGER,
    }
})

module.exports = Job