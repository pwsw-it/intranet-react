// https://material-ui.com/components/tabs/
import React from 'react';
import { Theme, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
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


type VTProps = {
    classes? : any;

}
type VTState = {
    value : number;
}

class VerticalTabs extends  React.Component<VTProps,VTState>
{
    constructor(props: VTProps) {
        super(props);
        this.state = {
            value : 0
        }
        }


    handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        this.setState({ value : newValue})
    };

    render = () => {
        let classes = this.props.classes; //useStyles();
        return (
            <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={this.state.value}
                onChange={this.handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
                <Tab label="Item Seven" {...a11yProps(6)} />
            </Tabs>
            <TabPanel value={this.state.value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={this.state.value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={this.state.value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={this.state.value} index={3}>
                Item Four
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

const AddrStyle = (theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  });
  
export default withStyles(AddrStyle)(VerticalTabs);