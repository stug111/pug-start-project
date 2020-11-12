module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-css-modules-preset",
    {
      name: "storypug",
      options: {
        babel: true,
        loaderOptions: {
          root: "src/components",
        },
      },
    },
  ],
};
