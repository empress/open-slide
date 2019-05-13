'use strict';

const StaticSiteJson = require('broccoli-static-site-json');

const contentsJson = new StaticSiteJson('slides', {
  contentFolder: 'slides',
  collate: true,
  attributes: ['notes']
});

module.exports = {
  name: require('./package').name,

  treeForPublic() {
    return contentsJson;
  }
};
