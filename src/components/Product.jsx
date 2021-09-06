import React from "react";
import axios from 'axios';
import XMLParser from 'react-xml-parser';
import { render } from "react-dom";
class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: [],
            restring: '',
            product: ''
        }

        this.captureValue = this.captureValue.bind(this);
        this.removeDiacritics = this.removeDiacritics.bind(this);
    }

    componentDidMount() {
        axios.get('docs/Products.xml', { "Content-Type": "aplication/xml; charset=utf-8" }).then(res => {
            const jsonDataFromXML = new XMLParser().parseFromString(res.data);
            console.log(jsonDataFromXML);
            this.setState({
                code:
                    jsonDataFromXML.getElementsByTagName('typecode')
            })
        });
    }

    captureValue(e) {
        //console.log(e.target.value)
        this.setState({
            product: e.target.value
        })
        // console.log(this.state.product)
    }

    removeDiacritics(str) {
        var defaultDiacriticsRemovalMap = [
            { 'base': 'o', 'letters': /[&#243]/g },
            { 'base': '', 'letters': /[&#]/g },
            { 'base': '', 'letters': /[;]/g }
        ]
        var changes = defaultDiacriticsRemovalMap;

        for (var i = 0; i < changes.length; i++) {
            str = str.replace(changes[i].letters, changes[i].base);
        }
        return str;
    }


    render() {
        const { product } = this.state.product;
        return (
            <div className="col">
                <label >Producto</label>
                <select className="form-control form-control-sm" name='product'
                    onChange={this.captureValue}  >
                    {(
                        this.state.code.map((item, index) => {
                            return (
                                <option value={item.attributes['code']} key={index}>
                                    {item.attributes['name']}
                                </option>
                            )
                        }
                        ))}
                </select>
            </div>
        )
    };
}

export default Product