const { DateTime }  = require("luxon");
module.exports = function(eleventyConfig)  {
    eleventyConfig.addPassthroughCopy('./src/blog.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');

    eleventyConfig.addFilter("limit", function (arr, limit) {
        return arr.slice(0, limit);
      });

    eleventyConfig.addFilter("postDate", (dateObj) => {

        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    })

  
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };

}
