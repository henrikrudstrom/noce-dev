const expect = require('chai').expect;
module.exports.expectType = function(res, type){
  if (type === 'Integer' || type === 'Double')
    return expect(res).to.be.a('number');

  if (type === 'Boolean')
    return expect(res).to.be.a('boolean');

  if(type.indexOf('.') !== -1)
    type = type.split('.')[1];
  expect(typeof res).to.equal('object');
  //if(type === 'Object') return;
  expect(res.constructor.name.replace('_exports_', '')).to.equal(type);
}
