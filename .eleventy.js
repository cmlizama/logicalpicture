const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = eleventyConfig => {
  // Use the eleventyConfig object's built in methods to customize
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("assets/**/**");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    templateFormats: [ "md", "njk", "html", "jpg", "css", ],
  };
};
