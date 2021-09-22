const express = require('express');
const multer = require('multer');
const path = require('path')
const fs = require('fs');
//import { copyFile, constants } from 'fs';

const router = express.Router();


/*const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../docs'),
    filename: (req, file, cb) => {
        cb(null,)
    }
})*/

function callback(err) {
    if (err) throw err;
    console.log('was copied');
}

function archs() {
    const origin = 'C:/Guidewire/claimcenter/modules/configuration/config/extensions/typelist/'
    const destiny = '../public/docs/'
    /*fs.readFile('./docs/Test.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });*/
    fs.copyFile(origin+'LossCause.ttx', destiny+'Causes.xml', callback);

     fs.copyFile(origin+'CovTermPattern.ttx',destiny+'Terms.xml', callback);

     fs.copyFile(origin+'CostCategory.ttx',destiny+'Costs.xml', callback);

     fs.copyFile(origin+'CoverageType.ttx',destiny+'Coverage.xml', callback);

     fs.copyFile(origin+'OfferingType_Ext.tti',destiny+'Products.xml', callback);
}

router.get('/', (req, res) => {
    res.send('welcome to Tijuana')
})

router.post('/carga/post', (req, res) => {
    //console.log('llego esto: ' + res);
    archs();
});

module.exports = router