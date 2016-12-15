const expect = require('chai').expect;
const debug = require('debug');
const log = debug('unittest');

const inheritance = require('./inheritance.js');
function inheritedTypes(type) {
  var types = inheritance[type] || [];
  var nestedTypes = types.map(inheritedTypes);
  types = [type].concat(types);
  return [].concat.apply(types, nestedTypes);
}

module.exports.inheritedTypes = inheritedTypes;
module.exports.expectType = function(res, type, exact) {
  if (type === 'Integer' || type === 'Double')
    return expect(res).to.be.a('number');

  if (type === 'Boolean')
    return expect(res).to.be.a('boolean');

  expect(typeof res).to.equal('object');
  if (type === 'Object') return true;

  var className = res.qualifiedName || res.constructor.name;

  var types = inheritedTypes(type);
  expect(types).to.include(className);
  return true;
};
