'use strict';

const StaticSiteJson = require('broccoli-static-site-json');
const { join } = require('path');

module.exports = {
  name: require('./package').name,

  treeForPublic() {
    let appPrefix = join(this.project.configPath(), '../..');

    const contentsJson = new StaticSiteJson(join(appPrefix, 'slides'), {
      type: 'slide',
      contentFolder: 'slides',
      collate: true,
      attributes: ['notes']
    });

    return contentsJson;
  }
};
