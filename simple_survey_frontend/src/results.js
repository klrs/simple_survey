import React from 'react';
import Plot from 'react-plotly.js';
import axios from "axios";
import {getLabel} from './utils';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: [],
            y: []
        };
    }

    componentDidMount() {
        this.dbGetScale();
    }

    dbGetScale() {
        console.log(this.props.match.params.id);
        axios.get('http://localhost:8000/api/scale/' + this.props.match.params.id)
            .then(res => {
                const yArr = optionsJsonToArr(res.data[0]);
                const xArr = generateXArr(yArr);
                this.setState({
                    x: xArr,
                    y: yArr
                })
            })
            .catch(error => {
                alert(error);
            });

        function generateXArr(yArr) {
            //todo move this
            const n = 5;
            let xArr = [];

            for(let i = 1; i <= n; i++) {
                xArr.push(getLabel(i));
            }

            return xArr;
        }

        function optionsJsonToArr(options) {
            let arr = [];

            //todo an elegant way of doing this
            pushIfNumber(options.option1);
            pushIfNumber(options.option2);
            pushIfNumber(options.option3);
            pushIfNumber(options.option4);
            pushIfNumber(options.option5);

            function pushIfNumber(o) {
                if(!isNaN(o)){
                    arr.push(o);
                }
            }

            return arr;
        }
    }

    renderHistogram() {
        return (
            <div className='hgram'>
            <Plot
                data={[{ type: 'bar', x: this.state.x, y: this.state.y }]}
                layout={{width: 480, height: 320, title: 'Äänestysjakauma'}}
            />
            </div>
        )
    }

    render() {
        return this.renderHistogram();
    }
}

export default Results;