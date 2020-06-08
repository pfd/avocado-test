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

  // create variable for custom hit template
var hitTemplate =
'<a href="{{ permalink }}" class="List-item">' +
'<div class="List-image">' +
'<img src="https://res.cloudinary.com/harrycresswell/image/upload/w_auto,dpr_auto,c_scale/{{{featuredimage}}}" />' +
"</div>" +
'<div class="List-title">{{{_highlightResult.title.value}}}</div>' +
"</a>" +
'<div class="List-summary">{{{summary}}}</div>';


// Parse options to instantsearch
const search = instantsearch(options);

// initialize SearchBox
search.addWidget(
  instantsearch.widgets.searchBox({
    container: "#search-box",
    placeholder: "Search for post",
    reset: false,
    cssClasses: {
      root: "Search-box-container",
      input: "Search-box-input",
    },
  })
);


// initialize RefinementList
search.addWidget(
  instantsearch.widgets.refinementList({
    container: "#refinement-list",
    attributeName: "tags",
  })
);
// make all this stuff happen
search.start();