import React from 'react';
import { Theme, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { Grid } from '@material-ui/core';
import Filter   from  "./Filter"
import Contact   from  "./Contact"
import { connect } from 'react-redux';
import { AppState, Actions, store } from './rdx'
import { BranchesService, ContactsService, 
  ApiBranches, 
  ApiContacts, 
  ApiBranch,
  // ApiContact 
} from './api'

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

   async getContacts(bcode : string) {
    ContactsService.getContacts( { bcode : bcode} ) 
      .then(
        (res : ApiContacts) => {
          store.dispatch(Actions.setContacts(res.contacts));
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
        {this.props.rstate.branches.map((br : ApiBranch, i : number) => {     
           const label=br.branch;
           return (<Tab label={label} {...a11yProps(i)}  />
           ) 
        })}
      </Tabs>
      <TabPanel value={this.state.value} index={0}>
        <h2>Biuro</h2>
        <Filter  />
    <Grid container >
     { this.match("Jurek Wawro") &&
       <Contact nazwisko="Jurek Wawro"  tel="999" email="jw@gmail.com"  link="#" funkcja="informatyk" /> 
     }
     { this.match("Jan Kowalski") &&
     <Contact nazwisko="Jan Kowalski"  tel="999" email="jk@gmail.com" link="#" funkcja="sprzedawca" /> 
     }
     { this.match("Jan Nowak") &&
      <Contact nazwisko="Jan Nowak"  tel="999" email="jw@gmail.com"  link="#" funkcja="informatyk" /> 
     }
     { this.match("Józef Nowak") &&
      <Contact nazwisko="Józef Nowak"  tel="999" email="jk@gmail.com" link="#" funkcja="sprzedawca" /> 
     }
     </Grid>     
      </TabPanel>
      <TabPanel value={this.state.value} index={1}>
        ....
      </TabPanel>
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

