import React from 'react';

import Header from '../components/Header';
import Project from '../components/Project';
import Footer from '../components/Footer';

const Work = () => {
//   const { loading, data } = useQuery(QUERY_PROFILES);
//   const profiles = data?.profiles || [];

  return (
    <main>
        <Header />
        <Project />
        <Footer />
    </main>
  );
};

export default Work;
