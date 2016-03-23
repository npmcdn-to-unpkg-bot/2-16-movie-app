$(document).ready(function(){
	var imagePath;
	//The URL of all our API calls
	var baseURL = 'https://api.themoviedb.org/3/';
	//The query string including apiKey anytime they ask for it
	var apiKey = '?api_key=fec8b5ab27b292a68294261bb21b04a5';
	//The configURL so that we can get basic config data
	var configURL = baseURL + 'configuration' + apiKey;

	//Make an AJAX call to the config URL.
	$.getJSON(configURL, function(configData){
		//Set our global var imagePath to the result of our AJAX call
		imagePath = configData.images.base_url;
	});

	//Now Playing is default on page load. Set up the URL
	var nowPlaying = baseURL + 'movie/now_playing' + apiKey;
	//Make an AJAX call to the now playing URL.
	$.getJSON(nowPlaying, function(movieData){
		var newHTML = '';
		//Loop through all the results and set up an image url.
		for(i=0; i<movieData.results.length; i++){
			var currentPoster = imagePath + 'w300' + movieData.results[i].poster_path;
			newHTML += '<div class="col-sm-3">';
			newHTML += '<img src="' + currentPoster + '">';
			newHTML += '</div>';
			console.log(currentPoster);
		}
		$('#poster-grid').html(newHTML);
	});

});