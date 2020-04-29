var {
  DateTime
} = require('luxon');

module.exports = config => {
  config.addFilter('favorites', arr => {
    const favs = p => p.data.favorite;
    return arr.filter(favs);
  });

  config.addFilter('take', (arr, amt = 2) => {
    return arr.slice(0, amt);
  })

  config.addFilter('formatDate', (dateObj, fmt = 'DD') => {
    return DateTime.fromJSDate(dateObj).toFormat(fmt)
  });

  config.addCollection('posts', (collection) => {
    return collection.getFilteredByGlob('**/posts/*.md').reverse();
  });

  config.addPassthroughCopy('styles.css');
}
