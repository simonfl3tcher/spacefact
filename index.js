module.change_code = 1;

var Alexa     = require('alexa-app');
var app       = new Alexa.app('spacefact');
var SpaceFact = require('./space_fact');

app.launch(function(req, res) {
  var prompt = 'Ask me about the planet Mercury, Venus or Earth. I will give you a fact on the one you choose.';
  res.say(prompt).reprompt(prompt).shouldEndSession(false);
});

app.intent('planetFact', {
 'slots': {
    'WORD': 'POSSIBLEWORDS'
  },
  'utterances': ['{tell me about | tell us about |} {-|WORD}']
}, function(req, res) {
  var word     = req.slot('WORD');
  var response = SpaceFact.requestPlanetFact(word)
  res.say(response).shouldEndSession(true).send();
});

app.intent('AMAZON.StopIntent', function(req, res) {
  res.say("Goodbye").shouldEndSession(true);
});

app.sessionEnded(function(req, res) {
  res.say("Goodbye").shouldEndSession(true);
});

module.exports = app;
