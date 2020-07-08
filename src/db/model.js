const { db } = require('./connection')
const { DataTypes } = require('sequelize')

const Course = db.define('course', {
    id: {
        type: DataTypes.STRING(2),
        primaryKey: true
    },
    name: DataTypes.STRING(20),

})

const Teacher = db.define('teacher', {
    name: {
        type: DataTypes.STRING(35),
        allowNull: false
    }
})

const Center = db.define('center', {
    id: {
        type: DataTypes.STRING(15),
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    city: {
        type: DataTypes.STRING(15),
        allowNull: false
    }
})

const Season = db.define('season', {
    id: {
        type: DataTypes.STRING(1),
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
})


const Batch = db.define('batch', {
    code: {
        type: DataTypes.STRING(8), primaryKey: true
    },
    year: DataTypes.INTEGER(4),
    start: DataTypes.DATE,
    end: DataTypes.DATE
})

Batch.belongsTo(Course)
Batch.belongsTo(Center)
Batch.belongsTo(Season)

Course.hasMany(Batch)
Center.hasMany(Batch)
Season.hasMany(Batch)

db.sync()

module.exports = {
    db, Center, Season, Batch, Course, Teacher
}
