import {
   TextField,
   Theme,
   withStyles
} from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux';
import { AppState, Actions, store } from './rdx'


const styleFilter = (theme: Theme) => (
    {
        filter: { color: 'gray' },
    }
)

type FilterProps = {
    classes?: any,
    rstate? : any
}
/*
type FilterState = {
    filter: string,
    tabNr : number
}
*/
class Filter extends React.Component<FilterProps /*, FilterState*/ > {
/*
    constructor(props: FilterProps) {
        super(props);
        this.state={
            filter:'',
            tabNr : 0
        }
    }
*/
    handleChange = (event : any) => {
        //alert(event.target.value)
        // źle this.state.filter=event.target.value
        // stan lokalny: this.setState({...this.state,filter: event.target.value})
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

const mapowanieStanuNaWlasnosc = (state : AppState) => ({
    rstate: state
  });
  
export default 
 connect(mapowanieStanuNaWlasnosc)(withStyles(styleFilter)(Filter));
