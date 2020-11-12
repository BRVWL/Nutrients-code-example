import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import Grid from '@material-ui/core/Grid';
import { SideMenu, Table, ProductForm } from './components';

const useStyles = makeStyles(styles);

export default function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3} className={classes.leftSide}>
          <SideMenu />
        </Grid>
        <Grid item xs={9} className={classes.leftSide}>
          <Table />
          <ProductForm />
        </Grid>
      </Grid>
    </div>
  );
}
