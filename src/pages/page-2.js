import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const SecondPage = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>About Me</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>About Me</h1>
        <header>Joshua Anderson</header>
        <p>Website was done through Gatsby and Leaflet.</p>
        <p>Thank you to Colby Fayock for creating a tutorial :D</p>
        <a href="https://github.com/joshhmann/Covid-19-tracker"> Link to Github page</a>
      </Container>
    </Layout>
  );
};

export default SecondPage;
