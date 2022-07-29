module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/blog.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');



    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "public"
      }
    }
  };
