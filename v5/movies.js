MovieApi = {
  actors: {
    'Ed Helms':{name:'The Hangover'},
    'Will Ferrel':{name:'Step Brothers'}
  },
  find: function(actor) {
    return this.actors[actor];
  }
};

Util = {
  isDefined: function(value) {
    return typeof value !== 'undefined';
  },
  displayMovieName: function(movie) {
    $('.search-result').append(movie.name);
  },
  displayNoActorFound: function() {
    $('.search-result').append('No actor found');
  },
  maybe: function(value) {
    var obj = {
          then: function(func) {
            func(value);
            return this;
          },
          otherwise: function() {
            return this;
          }
        };
    if (!Util.isDefined(value)) {
      var then = obj.then;
      obj.then = obj.otherwise;
      obj.otherwise = then;
    }
    return obj;
  }
};

$('.show-movie-button').on('click', function() {
  var movie = MovieApi.find($('.search').val());
  Util.maybe(movie)
      .then(Util.displayMovieName)
      .otherwise(Util.displayNoActorFound);
});