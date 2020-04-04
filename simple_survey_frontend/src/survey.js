import React from 'react';
import axios from 'axios';
import {mapInt, getLabel} from './utils';

function Option(props) {
    return (
        <div>
        <label>
            {getLabel(props.value)}
            <input
                type="radio"
                name="option"
                onChange={props.onChange}
                value={props.value}
            ></input>
        </label>
        <br/>
        </div>
    );
}

class Survey extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            optionCount: -1,
            scaleId: null,
            chosenOption: -1
        }
    }

    componentDidMount() {
        this.dbGetSurvey();
    }

    dbGetSurvey() {
        axios.get('http://localhost:8000/api/survey/1')
            .then(res => {
                const name = res.data[0].name;
                const optionCount = res.data[0].optionCount;
                const scaleId = res.data[0].scaleId;
                this.setState({
                    name: name,
                    optionCount: optionCount,
                    scaleId: scaleId
                });
            })
            .catch(error => {
                alert(error);
            })
    }

    renderOptionScale() {
        return (
            <div>
                {mapInt(this.state.optionCount,i => {
                    return (
                        <Option
                            value={i}
                            key={i}
                            onChange={() => {
                                const chosenOption = i;
                                this.setState({
                                    chosenOption: chosenOption
                                });
                            }}
                        />
                    )
                })}
            </div>
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.put('http://localhost:8000/api/scale/' + this.state.scaleId + '/vote/' + this.state.chosenOption);

        //todo check 4 null
        window.location.href = '/results/' + this.state.scaleId;
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    {this.renderOptionScale()}
                    <input className='surveySubmit' type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default Survey;