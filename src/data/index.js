let data;
try {
    data = require('./data').default;
} catch(err) {
    try {
      data = require('./data.json');
    } catch(err) {
      console.error('could not load data file');
    }
}

export default data;
