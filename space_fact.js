module.change_code = 1; // Reload module after change

var SpaceFact = (function() {
  var planets = {
    'mercury': 'Mercury is the closest planet to the Sun, and due to its proximity it is not easily seen except during twilight.',
    'venus':   'Named after the Roman goddess of love and beauty, Venus is the second largest terrestrial planet and is sometimes referred to as the Earth\'s sister planet due their similar size and mass.',
    'earth':   'The Earth is the only planet in our solar system not to be named after a Greek or Roman deity.'
  };

  var requestPlanetFact = function(planet_name) {
    var key = planet_name.toLowerCase();
    if(key in planets) {
      return planets[key]
    } else {
      return 'Sorry; I do not have a fact on the planet you are asking about';
    }
  }

  return {
    requestPlanetFact: requestPlanetFact
  }
})();

module.exports = SpaceFact;
