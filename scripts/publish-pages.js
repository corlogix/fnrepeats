const path = require("path");
const ghpages = require('gh-pages');
ghpages.publish(
    path.resolve("pages/documentation/dist"),
    {
        branch: 'pages',
    },
    console.log
);