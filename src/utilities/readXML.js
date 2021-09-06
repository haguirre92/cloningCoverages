const XMLData = require("./XMLTest.xml");

let xmlContent = '';        
        fetch(XMLData).then((response)=> {
            response.text().then((xml)=>{
                xmlContent = xml;
console.log(xmlContent);
                let parser = new DOMParser();
                let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
                let books = xmlDOM.querySelectorAll('typecode');
                console.log(books);                
            });
            });