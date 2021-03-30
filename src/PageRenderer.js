import React from 'react';
import { useParams } from 'react-router-dom';

import About from "pages/About.js";
import DataScience from "pages/DataScience.js";
import Software from "pages/Software.js";
import Teaching from "pages/Teaching.js";
import Tutoring from "pages/Tutoring.js";

export const pages = {
  about: About,
  datascience: DataScience,
  software: Software,
  teaching: Teaching,
  tutoring: Tutoring,
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
