document.addEventListener("DOMContentLoaded", function() {

var list = document.getElementById( 'unorder_list' );

	$.ajax({
		url: 'https://bb-election-api.herokuapp.com/',
		method: 'GET',
		dataType: 'json',
	}).done(function(responseData) {
		console.log(responseData);
		responseData.candidates.forEach(function(info) {
			var voter = document.createElement('li');
			voter.innerHTML = 'NAME: ' + info.name + 'VOTES: ' + info.votes
			list.append(voter)
		})
	})

});
