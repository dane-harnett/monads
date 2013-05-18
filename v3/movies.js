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
  }
};

$('.show-movie-button').on('click', function() {
  var movie = MovieApi.find($('.search').val());
  if (Util.isDefined(movie)) {
    $('.search-result').append(movie.name);
  } else {
    $('.search-result').append('No actor found');
  }
});