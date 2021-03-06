const { Seeder } = require('mongo-seeding')
const path = require('path')

const config = {
    database: 'mongodb://localhost/api-starter-node-jwt-mongo',
    dropDatabase: true,
}

const seeder = new Seeder(config)

const collections = seeder.readCollectionsFromPath(path.resolve('./seeder/data'))

seeder
    .import(collections)
    .then(() => {
        console.log('Your data was imported successfully!')
    })
    .catch(err => {
        console.log('ERROR! ' + err)
    })