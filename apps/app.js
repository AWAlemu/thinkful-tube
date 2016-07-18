$(function(){
	$('#search-form').submit(function(event) {
		event.preventDefault();
		var query = $('#query').val();
		getRequest(query);

	})

	function getRequest(query) {
		var params = {
			part: 'snippet',
			key: 'AIzaSyDD7m5HIHdu2HHoq_rm4W5Y9yd5g2XVK5I',
			q: query
		}
		url = 'https://www.googleapis.com/youtube/v3/search';
		$.getJSON(url, params, function(data){
			showResults(data.items);
		});
	}

	function showResults(results) {
		var html = '';
		
		$.each(results, function (index, value){
			//html += '<img src=\'' + value.snippet.thumbnails.medium.url + '\' >';
			html += '<li><div id="video"><div id="thumbnail"><a id="videoLink" href="https://youtu.be/' + value.id.videoId + '"><img src="' + value.snippet.thumbnails.medium.url + '"></a></div></div><div id="content"><a id="videoLink" href="https://youtu.be/' + value.id.videoId + '"><h3 id="title">' + value.snippet.title + '</h3>' + value.snippet.channelTitle + '</a><div id="channel"></div><div id="views"></div></div></li>';
			console.log(value);
		});
		$('#results').html(html);
	}	

});