const express = require('express');
const multer = require('multer');
const path = require('path')
const fs = require('fs');
//import { copyFile, constants } from 'fs';
const cors = require('cors')
const app = express() 
app.use(cors()) 

var whiteList = ['http://localhost:3001']
var corsOptions = {
    origin: function (origin, callB) {
        if(whiteList.indexOf(origin) !== -1){
            callB(null, true)
        }else{
            callB(new Error('not allow by cors'))
        }
    }
}
/*app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});*/

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
    const origin2 = 'C:/Guidewire/claimcenter/modules/configuration/config/locale/'
    const destiny = '../public/docs/'
    var typeKeysOffering = [];

    fs.readFile(origin2+'es_CO/typelist.properties', 'utf8', (err, data) => {
        if (err) throw err;
       
        var dataSeparate = data.toString().split('\n');
        var typekey = '';
        var nameTypekey = '';
        var conte = 0;
        dataSeparate.forEach(item => {
            typekey = item.toString().split('=');
            nameTypekey = typekey.toString().split('.',3);
            if(nameTypekey[1] == 'OfferingType_Ext'){
                conte++;
                //console.log('tenemos: '+typekey)
                typeKeysOffering.push(typekey[0]+'-'+nameTypekey[2])
            }
        })
        console.log('total: '+conte)
        
        //console.log(typeKeysOffering);
        fs.writeFile(destiny+'typekeys.txt', typeKeysOffering.toString(), 'utf8', (err) => {
        //fs.writeFile(destiny+'typekeys.json', typeKeysOffering.toString(), 'utf8', (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    });

    

    fs.copyFile(origin+'LossCause.ttx', destiny+'Causes.xml', callback);

     fs.copyFile(origin+'CovTermPattern.ttx',destiny+'Terms.xml', callback);

     fs.copyFile(origin+'CostCategory.ttx',destiny+'Costs.xml', callback);

     fs.copyFile(origin+'CoverageType.ttx',destiny+'Coverage.xml', callback);

     fs.copyFile(origin+'OfferingType_Ext.tti',destiny+'Products.xml', callback);
}

router.get('/', (req, res) => {
    res.send('welcome to Tijuana')
})

/*router.post('/carga/post', (req, res) => {
    console.log('llego esto: ' + req);
    archs();
});*/

app.post('/rewrite/post', cors(corsOptions), (req, res) => {
    const {product, coverage } = req.body
    console.log('llego para modificar: ' + product+' y este '+coverage);
    res.json({mensaje: 'ok'})
});

module.exports = router