import React from 'react';
import { useParams } from 'react-router-dom';

import About from "pages/About.js";
import DataScience from "pages/DataScience.js";

export const pages = {
    about: About,
    datascience: DataScience,
}

export default () => {
  const { name } = useParams()
  try {
    let Page = pages[name]
    return <Page/>
  }
  catch (e) {
    console.log(e)
    return <div>Error: Page not found</div>
  }
}
