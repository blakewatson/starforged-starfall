const markdownIt = require('markdown-it');

module.exports = function (eleventyConfig) {
  // Add a global data helper for the current year
  eleventyConfig.addGlobalData('helpers', {
    year: () => new Date().getFullYear(),
  });

  eleventyConfig.setLibrary(
    'md',
    markdownIt({
      html: true,
      linkify: true,
      typographer: true,
      breaks: true,
    }),
  );

  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('images');

  return {
    dir: {
      input: '.',
      includes: '_includes',
      output: '_site',
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
};
