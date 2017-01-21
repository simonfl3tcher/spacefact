var chai = require('chai');
var expect = chai.expect;
var SpaceFact = require('../space_fact');

describe('SpaceFact', function() {
  describe('#requestPlanetFact', function() {
    context('with a valid planet name', function() {
      it('returns the fact about the planet Mercury', function() {
        expect(
          SpaceFact.requestPlanetFact('Mercury')
        ).to.eq('Mercury is the closest planet to the Sun, and due to its proximity it is not easily seen except during twilight.');
      });

      it('returns the fact about the planet Venus', function() {
        expect(
          SpaceFact.requestPlanetFact('Venus')
        ).to.eq(
          'Named after the Roman goddess of love and beauty, Venus is the second largest terrestrial planet and is sometimes referred to as the Earth\'s sister planet due their similar size and mass.'
        );
      });

      it('returns the fact about the planet Earth', function() {
        expect(
          SpaceFact.requestPlanetFact('Earth')
        ).to.eq('The Earth is the only planet in our solar system not to be named after a Greek or Roman deity.');
      });
    });

    context('with a planet name where it does not have a fact', function() {
      it('returns Sorry; I do not have a fact on the planet you are asking about', function() {
        expect(
          SpaceFact.requestPlanetFact('Uranus')
        ).to.eq('Sorry; I do not have a fact on the planet you are asking about')
      });
    });
  });
});
