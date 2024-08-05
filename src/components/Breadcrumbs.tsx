// BreadcrumbsComponent.js
import React from 'react';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
  },
}));

interface Props {
  breadcrumbs: { name: string, link: string}[] ;
}
const BreadcrumbsComponent = (props: Props) => {
  const {  breadcrumbs } = props
  const classes = useStyles();
  const location = useLocation();

  const pathnames = location.pathname

  return (
    <Breadcrumbs aria-label="breadcrumb">
        {
            breadcrumbs.map((b) => {
                const ismatched = Boolean(pathnames === b.link)
                return ismatched ? (
                    <Typography color="textPrimary" key={b.link} className={classes.link}>
                      {b.name}
                    </Typography>
                ) : (
                    <Link color="inherit" component={RouterLink} to={b.link} key={b.link} className={classes.link} style={{ textDecoration: 'underline'}}>
                       {b.name}
                    </Link>
                )
            })
        }
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;
