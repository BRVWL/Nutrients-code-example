import React from 'react';
import { connect } from 'react-redux';
import * as R from 'rambda';
import { createStructuredSelector } from 'reselect';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { styles } from './styles';
import { sideMenuActions } from './actions';
import { Paper } from '@material-ui/core';
import { productsActions } from '../Product/actions';
import { categoriesActions } from '../Category/actions';
import { IProduct, ICategory } from 'modules/HomePage/interfaces';

interface IProps {
  product: {
    products: {
      [id: number]: IProduct;
    };
  };
  category: {
    categories: {
      [id: number]: ICategory;
    };
  };
  getData: () => void;
  getCategories: () => void;
  selectItem: (id: number) => void;
}

const useStyles = makeStyles(styles);

const SideMenuComponent = ({
  product: { products },
  category: { categories },
  getData,
  getCategories,
  selectItem,
}: IProps) => {
  const classes = useStyles();

  React.useEffect(() => {
    getCategories();
    getData();
  }, []);

  const onSelectItem = (id: number) => () => {
    selectItem(id);
  };

  const mapMenu = () =>
    R.pipe(
      R.keys,
      R.map(categoryId => {
        const category = categories[categoryId];
        return (
          <div key={category.id}>
            <ListItem button onClick={onSelectItem(category.id)}>
              <ListItemText primary={category.name} />
              {category.isOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {category.products && category.products.length ? (
              <Collapse
                key={`sub_menu__${category.id}`}
                in={category.isOpen}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {category.products.map((product: IProduct) => {
                    const listItem = products[product.id];
                    return (
                      <ListItem
                        key={listItem.id}
                        button
                        onClick={() => null}
                        className={classes.nested}
                      >
                        <ListItemText primary={listItem.name} />
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            ) : null}
          </div>
        );
      }),
    )(categories);
  return (
    <Paper>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Side menu
          </ListSubheader>
        }
        className={classes.root}
      >
        {products &&
          categories &&
          Object.keys(products).length &&
          Object.keys(categories).length &&
          mapMenu()}
      </List>
    </Paper>
  );
};

const SideMenu = connect(
  createStructuredSelector({
    product: ({ home }) => home.product,
    category: ({ home }) => home.category,
  }),
  {
    getData: productsActions.getProducts.trigger,
    getCategories: categoriesActions.getCategories.trigger,
    selectItem: sideMenuActions.selectMenuItem.trigger,
  },
)(SideMenuComponent);

export { SideMenu };
