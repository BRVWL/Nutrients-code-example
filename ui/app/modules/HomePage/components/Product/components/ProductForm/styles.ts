import { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    padding: theme.spacing(1),
    // marginTop: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '100%',
  },
  button: {
    margin: theme.spacing(1),
  },
});
