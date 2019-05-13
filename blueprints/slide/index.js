'use strict';

const { readdirSync } = require('fs');
const { join } = require('path');

module.exports = {
  description: 'A simple blueprint to create a new slide markdown',

  fileMapTokens() {
    // Return custom tokens to be replaced in your files
    return {
      __number__() {
        let existingFiles = readdirSync(join(process.cwd(), 'slides'));

        let numbers = existingFiles.map((filename) => {
          return parseInt(filename.split('-')[0])
        });

        let highestNumber = Math.max(...numbers, 0);

        // Logic to determine value goes here
        return (highestNumber + 1).toString().padStart(3, '0');
      }
    };
  },

  locals(options) {
    return {
      title: options.entity.name
    };
  },
};
