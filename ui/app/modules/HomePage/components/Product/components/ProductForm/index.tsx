import React from 'react';
import clsx from 'clsx';
import * as R from 'rambda';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { Paper, Typography, Button, Select, Grid } from '@material-ui/core';
import { config } from './config';
import { styles } from './styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { productsActions } from '../../actions';
import { ICategory, IProduct } from 'modules/HomePage/interfaces';

interface IProps {
  addProduct: (params: Omit<IProduct, 'category' | 'id'>) => void;
  categories: ICategory[];
}

const useStyles = makeStyles(styles);

const ProductFormComponent = ({ addProduct, categories }: IProps) => {
  const classes = useStyles();
  const [values, setValues] = React.useState(config);
  const [categoryId, setCategory] = React.useState(0);

  const handleChange = ({ target: { value, name } }) => {
    const newValues = { ...values };
    newValues[name].value = value;
    setValues(newValues);
  };

  const clearFields = () => {
    const newValues = R.map(value => ({ ...value, value: '' }), values);
    setValues(newValues);
  };

  const hasEmptyField = R.pipe(
    R.keys,
    R.filter(field => !values[field].value.length),
    R.length,
    length => length > 0,
  );

  const add = async () => {
    if (hasEmptyField(values)) {
      return;
    }
    const params = {
      categoryId,
      name: values.name.value,
      calories: Number(values.calories.value),
      carbs: Number(values.carbs.value),
      protein: Number(values.protein.value),
      fat: Number(values.fat.value),
    };
    await addProduct(params);
  };

  return (
    <Paper>
      <div className={classes.root}>
        <Typography variant="h6">Product form</Typography>
        {R.pipe(
          R.keys,
          R.map((field: string) => {
            const {
              id,
              label,
              name,
              value,
              helperText,
              metric,
              required,
              error,
            } = values[field];
            return (
              <TextField
                key={id}
                id={id}
                name={name}
                value={value}
                label={label}
                required={required}
                error={error}
                helperText={helperText}
                onChange={handleChange}
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{metric}</InputAdornment>
                  ),
                }}
              />
            );
          }),
        )(values)}
        <Select
          native
          value={categoryId}
          onChange={({ target: { value } }) => {
            setCategory(value);
          }}
          label="Category"
          className={clsx(classes.margin, classes.textField)}
        >
          {categories.map(({ id, name }: ICategory) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Select>
        <Grid container direction="row" justify="center" alignItems="center">
          <Button
            onClick={add}
            variant="contained"
            color="default"
            className={classes.button}
          >
            Add
          </Button>
          <Button
            onClick={clearFields}
            variant="contained"
            color="default"
            className={classes.button}
          >
            Clear
          </Button>
        </Grid>
      </div>
    </Paper>
  );
};

const categoriesSelector = ({ home }) => R.values(home.category.categories);

const selector = createStructuredSelector({
  categories: categoriesSelector,
});

const ProductForm = connect(selector, {
  addProduct: productsActions.addProducts.trigger,
})(ProductFormComponent);

export { ProductForm };
