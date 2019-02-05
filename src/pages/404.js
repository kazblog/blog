import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";

const NotFoundPage = () => {

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <header>
              <Headline title="404" theme={theme} />
            </header>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </Article>
        )}
      </ThemeContext.Consumer>
    </React.Fragment>
  );
};

export default NotFoundPage;
