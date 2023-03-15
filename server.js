const express = require('express')
const { listImages, addImage, deleteImg } = require('./images_func')
const app = express()

// List Images
app.get('/', async function (req, res) {
    let allImages = await listImages();
    res.status(200).send(allImages);
})
// Add Images
app.get('/add/:imageTitle/:imageUrl', async function (req, res) {
    let title = req.params.imageTitle;
    let url = req.params.imageUrl;
    if (!title) {
        res.status(400).send('Please provide a Title')
    } else if (!url) {
        res.status(400).send('Please provide a URL')
    }
    addImage(title, url);
    res.status(201).send('1'); 
})

// Delete Image
app.get('/delete/:imageTitle', async function (req, res) {
    let title = req.params.imageTitle;
    if (!title) {
        res.status(400).send('Please provide a Title')
    }
    deleteImg(title);
    res.status(201).send('1');
})

app.listen(3001)