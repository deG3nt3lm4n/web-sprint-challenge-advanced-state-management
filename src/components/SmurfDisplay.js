import React from 'react';
import Smurf from './Smurf'
import { connect } from 'react-redux'
import { FetchSmurfs } from '../actions/index'

export class SmurfDisplay extends React.Component {


    componentDidUpdate(){
        this.props.FetchSmurfs()
    }

    render() {
        console.log(this.props.smurfs)
        return(
            <div>
                {
                    this.props.smurfs.map(smurf => {
                        return <Smurf key={smurf.id} smurf={smurf} />
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return{
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {FetchSmurfs})(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.