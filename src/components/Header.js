import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>Covid-19 Map Tracker</p>
        <ul>
          <li>
            <Link to="/">Map</Link>
          </li>
          <li>
            <Link to="/page-2/">About Me</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
