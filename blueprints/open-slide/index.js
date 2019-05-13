'use strict';

module.exports = {
  description: 'Default blueprint for OpenSlide',

  normalizeEntityName() {
    // no-op
  },

  afterInstall() {
    return this.addAddonsToProject({
      packages: [
        'prember',
        'ember-cli-fastboot'
      ]
    })
  },

  filesToRemove: ['app/templates/application.hbs'],
};
