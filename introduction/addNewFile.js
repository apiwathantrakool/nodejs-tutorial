const fs = require('fs');

fs.writeFileSync(
  'newFile.txt',
  `this is a new file from addNewFile.js create at ${new Date()}`
);
