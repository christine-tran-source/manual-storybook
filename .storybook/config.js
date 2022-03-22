import { configure } from "@storybook/react";

function loadStories() {
  const req = require.context("../stories", true, /\.stories\.js$/); //get all the stories from ./stories folder
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
