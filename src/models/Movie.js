const _ = require('lodash');

function Movie(_node) {
  _.extend(this, _node.properties);

  if (this.id) {
    this.id = this.id.toNumber();
  }
  if (this.duration) {
    this.duration = this.duration.toNumber();
  }
  if (this.votes) {
    this.votes = this.votes.toNumber();
  } else {
    this.votes = 0;
  }
}

module.exports = Movie;
