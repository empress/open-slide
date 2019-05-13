'use strict';

module.exports = {
  description: 'Default blueprint for OpenSlide',

  afterInstall() {
    return this.addAddonsToProject({
      packages: [
        'prember',
        'ember-cli-fastboot'
      ]
    })
  }
};
