$(document).ready(function(){
	$("form").submit(function(){	
		var artistName = $('#artistName').val();
		var artistSplit = artistName.split(" ")
		var convertedName = artistSplit.join('+')
		var apiUrl ="https://itunes.apple.com/search?term=" + convertedName  +"&limit=25"
		var itunesData = $.ajax({
			url:apiUrl,
			dataType:"jsonp",
			success: function(itunesData){
				for (var i = 0; i <= itunesData.results.length-1; i++) {
					console.log(itunesData.results[i].trackName)
					
				}
				}
			})
		})	
	})
          

