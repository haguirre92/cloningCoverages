import React from "react";
import axios from 'axios';
import XMLParser from 'react-xml-parser';
import { render } from "react-dom";

class Product extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            code: [],    
        }        
    }

    componentDidMount(){
        axios.get('docs/XMLTest.xml',{
            "Content-Type": "aplication/xml; charset=utf-8"
        }).then(res => {
            const jsonDataFromXML = new XMLParser().parseFromString(res.data);
            console.log(jsonDataFromXML);
            this.setState({ code: 
                jsonDataFromXML.getElementsByTagName('typecode')
            })
            
        });
    }

render() {
  return(
        <div className="col">
        <label >Producto</label>
        <select className="form-control form-control-sm">
            {(
             this.state.code.map((item, index) => { 
               // console.log(item.attributes['code'])
                // if(item.attributes['typelist']=='OfferingType_Ext'){
                    console.log(item.attributes['name'])
                    return (
                        <option key={index}>{item.attributes['name']}</option>                        
                     ) //}
                 }       
              ) )}
          
            
        </select>
    </div>
            )};}

export default Product