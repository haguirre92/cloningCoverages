import React from "react";
import axios from 'axios';
import XMLParser from 'react-xml-parser';
import { render } from "react-dom";
const { Provider, Consumer } = React.createContext();
class Coverage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            code: [],
        }
    }

    componentDidMount() {
        axios.get('docs/Coverage.xml', { "Content-Type": "aplication/xml; charset=utf-8" }).then(res => {
            const jsonDataFromXML = new XMLParser().parseFromString(res.data);
            console.log(jsonDataFromXML);
            this.setState({
                code:
                    jsonDataFromXML.getElementsByTagName('typecode'),
            })
        });


    }

    render() {
        const { product } = this.props;
        console.log(product);
        return (
            /*<Consumer>{
                 ({product}) => (
                     
                 )
                 }*/
            
            <div className="col">
                <label >Coverage</label>
                <select className="form-control form-control-sm">
                    {(
                        this.state.code.map((item, index) => {

                            return (
                                <option key={item.attributes['code']}>{item.attributes['name']}</option>
                            ) //}
                        }
                        ))}


                </select>
            </div>
             //</Consumer>
        )
    };
}

export default Coverage