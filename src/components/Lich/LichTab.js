import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BasicTable from './BasicTable';
import TabPanel from './TabPanel';
import { useEffect } from 'react';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const LichTab = ({rows}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [thisWeek, setThisWeek] = React.useState(rows)
  const [nextWeek, setNextWeek] = React.useState(rows)

  const handleChange = (event, newValue) => {
    const newRows = [
        { id: 1, tenbn: "ABC", chandoan: "dau bung", ngayphauthuat: "2222-2-2"}
    ]
    setValue(newValue);
    if(value === 1) {
      setThisWeek(rows);
    } else if(value === 0) {
      setNextWeek(newRows);
    }
  };
  
  useEffect(() => {
    setThisWeek(rows);
  }, []);

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Tuần này" />
        <Tab label="Tuần sau" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <BasicTable rows={thisWeek}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BasicTable rows={nextWeek}/>
      </TabPanel>
    </Paper>
  );
}

export default LichTab;