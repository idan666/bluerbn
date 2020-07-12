import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Paper } from '@material-ui/core';

import Flights from './FlightTable';

const styles = {
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  paper: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
};

const FlightsList = props => {
  return (
    <div className={styles.root}>
      <AppBar position="absolute" className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={styles.title}>
            Flights
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={styles.content}>
        <div className={styles.appBarSpacer} />
        <Grid container spacing={3}>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper className={styles.paper}>
              <Flights />
            </Paper>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default FlightsList;
