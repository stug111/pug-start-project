import startCase from "lodash/startCase";
import Example from "./example.pug";

export default {
  title: "Example",
};

export const Basic = () => {
  const props = { intro: "This is an intro" };
  const contents = "<p>Example body</p>";

  return Example({ props, contents, startCase });
};
