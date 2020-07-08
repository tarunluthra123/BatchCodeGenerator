const { db } = require('./db/model')
const { app } = require('./server')

const start = async () => {

    try {
        await db.sync()

        app.listen(5555, function () {
            console.log('Server started on localhost:5555')
        })


    } catch (err) {
        console.error(err)
    }

}

start()