$('document').ready(function(){
	var hiddenWords = ['slug', 'truck', 'crunch', 'brush', 'shrub'];
	var longestWordLength = 6;
	var tableRows = 10;
	var tableCols = 20;
	var found = 0;
	var position;

	function displaywords(){

		for (var i = 0; i < hiddenWords.length; i++)
		{
			
				var b = $('<div>');
				$('.addwords').append(b);
				b.attr("class", hiddenWords[i] + " wordlist");
				b.html(hiddenWords[i]);

				var stringWord = hiddenWords[i];
				// words go diagonal, down and across only
				var positionArr = [1, tableCols, (1 + tableCols)];
				var positionInc = (Math.floor(Math.random() * 3));
				if (positionArr[positionInc] === (1 + tableCols)){
					// so words dont fall off end
					position = (Math.floor(Math.random() * ((tableRows * tableCols) - longestWordLength * (1 + tableCols))));
				}
				else if (positionArr[positionInc]  === (tableCols)) {
						// so words dont fall off end
					position = (Math.floor(Math.random() * ((tableRows * tableCols) - longestWordLength * tableCols)));
				}
				else {
						position = (Math.floor(Math.random() * ((tableRows * tableCols) - longestWordLength)));
				}
				
				
				for (var k = 0; k < stringWord.length; k++ ){

					var datacount = ".col" + position;
					$(datacount).addClass("hiddenword");
					$(datacount).addClass(stringWord);

					$(datacount).html(stringWord[k]);
					position = position + positionArr[positionInc] ;
					
				}	
		
		}
	}

	$(document.body).on('click', '.square', function(){
		var classHidden = $(this).attr("class")
		if (classHidden.includes('hiddenword'))
		{
			// $(this).attr("style", "background-color:red");
			$(this).attr("style", "text-decoration:line-through; background-color:red");
		} 
		else
		{
			$(this).attr("style", "background-color:grey");
		} 

	})

	$(document.body).on('click', '.wordlist', function(){
		$(this).attr("style", "text-decoration:line-through");
		found++;
		if (found === hiddenWords.length) {
			alert("Congratulatons! You found all the words.")
		}
	})



    function makeid()
	{
	    var text = "";
	    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

	    text = possible.charAt(Math.floor(Math.random() * possible.length));
	   
	    return text;
	}
	//create a table.

	var t = $('<table>');
	$('.addtable').append(t);
	
	var counter = 0;
	for (var j = 1; j <= tableRows; j++){
		t.append('<tr class="row' + j +'">');
		for (i = 1; i <= tableCols; i++){
			var rowNo = ".row" + j;
			$(rowNo).append('<td class="col' + counter + ' square" data-count=' + counter + '>');
			var letter = makeid();
			console.log(letter);
			var colNo = '.col' + counter;
			$(colNo).append(letter);
			counter++;
			
		}

	}
	

	displaywords();
})