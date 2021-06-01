import {
   TextField,
   Theme,
   withStyles
} from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux';
import { AppState, Actions, store  } from './rdx'


const styleFilter = (theme: Theme) => (
    {
        filter: { color: 'gray' },
    }
)

type FilterProps = {
    classes?: any,
    rstate: AppState
}

type FilterState = {
    filter: string;
};

class Filter extends React.Component<FilterProps, FilterState> {

    constructor(props: FilterProps) {
        super(props);
        this.state={
            filter : ''
        }
    }
/* przetestuj:
    handleChange = (event : any) => {
        alert(JSON.stringify(event.target.value))
    }
    */

    handleChange = (event : any) => {
        //this.setState({...this.state, filter: event.target.value})
        store.dispatch(Actions.setFilter(event.target.value));
    }

    render() {
        const classes = this.props.classes;
        return (
            <div>
                <TextField 
                  label="Filtr" 
                  className={classes.filter}
                  value = {this.props.rstate.filter} 
                  onChange = { this.handleChange} />
            </div>)
    }

}

//export default withStyles(styleFilter)(Filter);
const mapStateToProps = (state : AppState) => ({
    rstate: state
  });
  
export  default connect(mapStateToProps)( 
    withStyles(styleFilter)(Filter)
 );
  