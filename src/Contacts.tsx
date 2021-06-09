import React from 'react';
import { Theme, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Filter   from  "./Filter"
import { connect } from 'react-redux';
import { AppState, Actions, store } from './rdx'
import {BranchesService, ApiBranches,  ApiBranch } from './api'
import FContacts from './FContacts';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{width:'80%'}}
      {...other}
    >
      {value === index && (
        <>{children}</>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

type AProps = {
  classes? : any,
  rstate? : any
}

type AState = {
  value : number
}
 
class Contacts extends React.Component<AProps, AState> {
  
  constructor(props: AProps) {
      super(props)
      this.state = { value : 0}
  }

  handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    this.setState({value: newValue});
  };

  match = (s : string) => {
    if (this.props.rstate.filter==='') return true;
    return (s.indexOf(this.props.rstate.filter)>=0 ) 
  }

  async getBranches() {
    BranchesService.getBranches( { } ) 
      .then(
        (res : ApiBranches) => {
          store.dispatch(Actions.setBranches(res.branches));
        }
      )        
      .catch( (err : any) => {        
          alert('Błąd odczytu'+JSON.stringify(err) );
         } 
      );
   }   
     

  componentDidMount() {
    this.getBranches();
  }


  render() { 
    
      const classes = this.props.classes;

  return (
    <div className={classes.root}>
     <Tabs
        orientation="vertical"
        variant="scrollable"
        value={this.state.value}
        onChange={ this.handleChange }
        aria-label="Instytuty"
        className={ classes.tabs }
      >
        {this.props.rstate.branches.map(
          (br : ApiBranch, i : number) => {     
           const label=br.branch;
           return (<Tab key={i} label={label} {...a11yProps(i)}  />
           ) 
        })}
      </Tabs>
      {this.props.rstate.branches.map(
          (br : ApiBranch, i : number) => {     
           const label=br.branch;
           return (
            <TabPanel value={this.state.value} index={i}>
            <h2>{label}</h2>
            <Filter  />
            <FContacts index={i} />
          </TabPanel>    
           ) 
        })}
    </div>
  );
  }
}

const tabsStyles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    height: 500,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width:'15%',
    backgroundColor: theme.palette.background.paper,
  },
});


const mapowanieStanuNaWlasnosc = (state : AppState) => ({
  rstate: state
});

export default 
connect(mapowanieStanuNaWlasnosc)(
  withStyles(tabsStyles)(Contacts)
)

