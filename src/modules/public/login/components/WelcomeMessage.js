import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  heading: {
    color: '#fff',
    textAlign: 'center',
  },
  logo: {
    width: 250,
    heading: 250,
    objectFit: 'cover',
  },
});

const WelcomeMessage = ({ classes }) => {
  return (
    <Fragment>
      <img src="/images/logo.png" alt="app logo" className={classes.logo} />
      <Typography variant="display1" gutterBottom className={classes.heading}>
        Flight Checker Login
      </Typography>
    </Fragment>
  );
};

WelcomeMessage.propTypes = {
  classes: PropTypes.object, // Material UI Injected
};

export default withStyles(styles)(WelcomeMessage);
