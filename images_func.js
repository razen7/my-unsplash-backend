const fs = require('fs').promises;

async function listImages() {
    try {
        return await fs.readFile('images_db.txt', 'utf-8');
    } catch (err) {
        console.log(err);
    }
}

async function addImage(title, url) {
    let allImgs = await listImages();
    allImgs = JSON.parse(allImgs);
    allImgs.push({ title, url })
    try {
        await fs.writeFile('images_db.txt', JSON.stringify(allImgs))
    } catch (err) {
        console.log(err);
    }
}

async function deleteImg(title) { 
    let allImgs = await listImages();
    allImgs=JSON.parse(allImgs)
    let idx = allImgs.findIndex((ele) => ele.title === title);
    if (idx === -1) {
        console.error('Image not found');
        return;
    }
    allImgs.splice(idx, 1);

    try {
        await fs.writeFile('images_db.txt', JSON.stringify(allImgs));
        console.log('Image Deleted');
    } catch (err) {
        console.log(err);
    }
}

module.exports = { listImages, addImage, deleteImg };