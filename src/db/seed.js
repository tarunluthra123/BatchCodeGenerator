const { db, Center, Season, Batch, Course, Teacher } = require('./model.js')

const seed = async () => {
    try {
        db.sync({ alter: true })

        await Center.bulkCreate([
            { id: 'PP', name: 'Pitampura', city: 'Delhi' },
            { id: 'DW', name: 'Dwarka', city: 'Delhi' },
            { id: 'NO', name: 'Noida', city: 'Noida' },
            { id: 'DD', name: 'Dehradun', city: 'Dehradun' },
            { id: 'OL', name: 'Online', city: 'Delhi' },

        ], {
            ignoreDuplicates: true
        })

        await Season.bulkCreate([
            { id: 'S', name: 'Summer' },
            { id: 'P', name: 'Spring' },
            { id: 'F', name: 'Fall' },
            { id: 'W', name: 'Winter' }
        ], {
            ignoreDuplicates: true
        })


        await Course.bulkCreate([
            { id: 'LP', name: 'Launchpad' },
            { id: 'CX', name: 'Crux' },
            { id: 'IB', name: 'Interview Bootcamp' },
            { id: 'AD', name: 'Android Dev' },
            { id: 'WD', name: 'Web Dev' }
        ], {
            ignoreDuplicates: true
        })


    } catch (e) {
        console.error(e)
    }
}

seed()