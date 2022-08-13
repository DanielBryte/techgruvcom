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

    require("dotenv").config();
    const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
    const algoliasearch = require("algoliasearch");
    
    const client = algoliasearch(process.env.ALGOLIA_APP, process.env.ALGOLIA_SEARCH_KEY);
    const index = client.initIndex(process.env.ALGOLIA_INDEX);
    
    module.exports = function (eleventyConfig) {
      eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
        name: "search", // The serverless function name from your permalink object
        functionsDir: "./netlify/functions/",
      });
    
      eleventyConfig.addFilter("getResults", function (query) {
        return index.search(query, {
          attributesToRetrieve: ["title", "url", "date", "description"],
    
        }).then(res => {
          return res.hits;
        })
      });
    
    };
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };

}
