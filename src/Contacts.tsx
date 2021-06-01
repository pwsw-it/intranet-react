import React from 'react';
import { Theme, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { connect } from 'react-redux';
import { AppState } from './rdx'
import { Grid } from '@material-ui/core';
import Filter   from  "./Filter"
import Contact   from  "./Contact"

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
  rstate: AppState;
  classes? : any
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
    return s.indexOf(this.props.rstate.filter)>=0
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
        <Tab label="Biuro" {...a11yProps(0)}  />
        <Tab label="Portiernia" {...a11yProps(1)}  />
        <Tab label="Księgowość" {...a11yProps(2)}  />
        <Tab label="Magazyn" {...a11yProps(3)}  />
        <Tab label="Sprzedaż" {...a11yProps(4)}  />
        <Tab label="Sekretariat" {...a11yProps(5)}  />
        <Tab label="Zakupy" {...a11yProps(6)}  />
      </Tabs>
      <TabPanel value={this.state.value} index={0}>
        <h2>Biuro</h2>
        <Filter />
    <Grid container >
        {this.match('Jurek Wawro') && 
     <Contact nazwisko="Jurek Wawro"  tel="999" email="jw@gmail.com"  link="#" funkcja="informatyk" /> }
        {this.match('Jan Kowalski') && 
     <Contact nazwisko="Jan Kowalski"  tel="999" email="jk@gmail.com" link="#" funkcja="sprzedawca" /> }
        {this.match('Jan Nowak') && 
     <Contact nazwisko="Jan Nowak"  tel="999" email="jw@gmail.com"  link="#" funkcja="informatyk" /> }
        {this.match('Józef Nowak') && 
     <Contact nazwisko="Józef Nowak"  tel="999" email="jk@gmail.com" link="#" funkcja="sprzedawca" /> }
     </Grid>     
      </TabPanel>
      <TabPanel value={this.state.value} index={1}>
        Portiernia 
      </TabPanel>
      <TabPanel value={this.state.value} index={2}>
        Księgowość
      </TabPanel>
      <TabPanel value={this.state.value} index={3}>
        Magazyn
      </TabPanel>
      <TabPanel value={this.state.value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={this.state.value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={this.state.value} index={6}>
        Item Seven
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


const mapStateToProps = (state : AppState) => ({
rstate: state
});

export default connect(mapStateToProps)( 
  withStyles(tabsStyles)(Contacts)
)
