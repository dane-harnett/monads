MovieApi = {
  actors: {
    'Ed Helms':{name:'The Hangover'},
    'Will Ferrel':{name:'Step Brothers'}
  },
  find: function(actor) {
    return this.actors[actor];
  }
};

$('.show-movie-button').on('click', function() {
  var movie = MovieApi.find($('.search').val());
  $('.search-result').append(movie.name);
});