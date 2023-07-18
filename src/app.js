const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000

// Define paths for Express config
const publickDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publickDirectoryPath))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        pageDescription: 'Welcome to Home Page.'
    })
})

// app.get('/weather', (req, res) => {
//     if(!req.query.address){
//         return res.send({
//             error: "You must provide a address term."
//         })
//     }

//     geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
//         if(error){
//             return res.send({ error })
//         }

//         forecast(latitude, longitude, (error, forecastData) => {
//             if(error){
//                 return res.send({error})
//             }

//             res.send({
//                 forecase: forecastData,
//                 location,
//                 address: req.query.address
//             })
            
//         })
//     })

    // res.send({
    //     address: req.query.address,
    //     someInfo: 'some info about location',
    //     climate: 'rainy'
    // })
// })

app.get('/products', (req, res) => {
    console.log(req.query)
    res.send({
        products: []
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About page',
        pageDescription: 'Welcome to About Page.'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        pageDescription: 'This is some helpful text.',
        title: 'Help Page',
        name: 'Anil'
    })
})

app.get('*', (req, res) => {
    res.render('404page')
})

// app.get('/weather', (req, res) => {
//     res.send([
//         {
//             name: 'Anil',
//             designation: 'MERN Stack Developer'
//         },
//         {
//             name: 'Harish',
//             designation: 'MERN Stack Developer'
//         },
//         {
//             name: 'Seenu',
//             designation: 'Software Engineer'
//         }
//     ])
// })

app.listen(port, () => {
    console.log('SERVER STARTED..!!' + port)
})