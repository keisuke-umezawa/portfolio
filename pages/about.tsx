import React from 'react';
import {
  Container,
  Box,
  Typography,
} from "@material-ui/core";
import { useTheme, makeStyles, Theme } from "@material-ui/core/styles";
import { IconContext } from "react-icons";
import { FaTwitterSquare } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';

const useStyle = makeStyles({
  root: (props: Theme) => ({
    paddingTop: props.spacing(10),
    paddingLeft: props.spacing(5),
    paddingRight: props.spacing(5),
  })
});

export default function About() {
  const classes = useStyle(useTheme());

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            About
          </Typography>
          <Typography variant="h4" component="h4" gutterBottom>
              <div className="about-page__card">
                  <table className="about-page__table">
                      <tbody>
                          <tr>
                              <th>Name</th>
                              <td>Keisuke Umezawa</td>
                          </tr>
                          <tr>
                              <th>Blog (en)</th>
                              <td>
                                  <a href="https://medium.com/@keisukeumezawa">Medium</a>
                              </td>
                          </tr>
                          <tr>
                              <th>Blog (ja)</th>
                              <td>
                                  <a href="https://kumechann.hatenablog.com/">Hatena Blog</a>
                              </td>
                          </tr>
                          <tr>
                              <th>Resume</th>
                              <td>
                                  <a href="https://github.com/keisuke-umezawa/pandoc_resume/blob/master/output/resume.pdf">Pandoc</a>
                              </td>
                          </tr>
                          <tr className="about-page__icons">
                              <td>
                                  <a href="https://github.com/keisuke-umezawa">
                              <IconContext.Provider value={{ size: "3em", color: "#000" }}>
                                  <GoMarkGithub />
                              </IconContext.Provider>
                                  </a>
                              </td>
                              <td>
                                  <a href="https://twitter.com/kumezawa_">
                              <IconContext.Provider value={{ size: "3em", color: "#55acee" }}>
                                  <FaTwitterSquare />
                              </IconContext.Provider>
                                  </a>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
