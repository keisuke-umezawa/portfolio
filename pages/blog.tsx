import React from 'react';
import {
  Container,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Box,
  Typography,
} from "@material-ui/core";
import { useTheme, makeStyles, Theme } from "@material-ui/core/styles";

import { Header } from '../src/components/header';
import contents from "./blog_contents.json";

const useStyle = makeStyles({
  root: (props: Theme) => ({
    paddingTop: props.spacing(10),
    paddingLeft: props.spacing(5),
    paddingRight: props.spacing(5),
  })
});

export default function Blog() {
  const classes = useStyle(useTheme());
  const title = "Umechan Portfolio";

  return (
    <div className={classes.root}>
      <Header title={title} />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom={true}>
            Blog
          </Typography>
          <Typography variant="h4" component="h1" gutterBottom={true}>
            <Grid container>
              {contents.map((item, key) => (
                <Grid
                  item
                  key={key}
                  xs={12}
                  sm={6}
                  md={4}
                >
                  <Card>
                    <CardActionArea href={item.url}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {item.title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Typography>
        </Box>
      </Container>
      <style jsx={true}>{`
        .root {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
