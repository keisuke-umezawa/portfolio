import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';

import { useTheme, makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import MuiLink from '@material-ui/core/Link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navbar: {
      boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(0, 0, 0, 0.2)',
      background: '#454545',
      color: '#eaeaea',
      '& a': {
        color: '#eaeaea',
      },
    },
    container: {},
    toolbar: {
      padding: '0',
      display: 'grid',
      gridTemplate: '"title . button"',
    },
    title: {
      gridArea: 'title',
      '& > a': {
        fontSize: '2em',
        fontWeight: 700,
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'none',
        },
      },
    },
    menu: {
      '& > a': {
        fontSize: '1em',
        fontWeight: 700,
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'none',
        },
      },
    },
  }),
);

type Props = {
  title: string;
};

export function Header(props: Props) {
  const classes = useStyles(useTheme());
  const { title, } = props;

  return (
    <AppBar className={classes.navbar}>
      <Container maxWidth="md" className={classes.container}>
        <Toolbar className={classes.toolbar}>
          <Typography noWrap className={classes.title}>
            <NextLink href="/" passHref>
               <MuiLink>
                 {title}
               </MuiLink>
            </NextLink>
          </Typography>
          <Button color="inherit">
            <Typography className={classes.menu}>
              <NextLink href="/about" passHref>
                 <MuiLink>
                   About
                 </MuiLink>
              </NextLink>
            </Typography>
          </Button>
          <Button color="inherit">
            <Typography className={classes.menu}>
              <NextLink href="/blog" passHref>
                 <MuiLink>
                   Blog
                 </MuiLink>
              </NextLink>
            </Typography>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
