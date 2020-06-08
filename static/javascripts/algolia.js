// Set Algolia options
const options = {
    appId: "6JIGQMYDKN",
    apiKey: "1607b501f03d77ab7a2afc27d98a3bdc",
    indexName: "avocado_test",
    hitsPerPage: 10,
    routing: true,
  };
  
  // Parse options to instantsearch
  const search = instantsearch(options);


// initialize hits widget
search.addWidget(
    instantsearch.widgets.hits({
      // define container
      container: "#hits",
      // add classes for styling
      cssClasses: {
        root: "Search-hits",
        empty: "Search-hits--empty",
      },
      templates: {
        // call custom hit template
        item: hitTemplate,
        empty: 'Didn’t find any results for the search  <em>"{{query}}"</em>',
      },
    })
  );