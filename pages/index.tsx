import React, { ComponentProps } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { useTheme, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import { Header } from '../src/components/header';

const useStyle = makeStyles({
  root: (props: Theme) => ({
    paddingTop: props.spacing(10),
    paddingLeft: props.spacing(5),
    paddingRight: props.spacing(5),
  })
});

export default function Home() {
  const classes = useStyle(useTheme());
  const title = "Umechan Portfolio";

  return (
    <div className={classes.root}>
      <Header title={title} />
      <Typography variant="h1" gutterBottom={true}>
        Welcome to umechan portfolio site!!!
      </Typography>
      <style jsx={true}>{`
        .root {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
