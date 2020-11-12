import { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5),
    width: '100%',
    background: '#f1f0f0',
  },
  leftSide: {
    overflow: 'auto',
    height: 'auto',
  },
  rightSide: {
    overflow: 'auto',
    height: 'auto',
  },
});
