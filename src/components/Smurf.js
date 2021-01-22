import React from 'react';


class Smurf extends React.Component {
    render() {
        const { smurf } = this.props;

        return(
            <div data-testid="smurf" className="card">
                <h2>Name: {smurf.name}</h2>
                <h3>Position: {smurf.position}</h3>
                <h3>NickName: {smurf.nickname}</h3>
                <h3>Description: {smurf.description}</h3>
            </div>
        );
    }
}

export default (Smurf);

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.