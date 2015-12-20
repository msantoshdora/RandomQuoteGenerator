$(document).ready(function(){
           randomNumber();
	

	    	function randomNumber(){
	    		var arr=["	How lucky I am to have something that makes saying goodbye so hard. -Winnie The Pooh",
	    	"How do you spell love?- asked Piglet. You don't spell it...you feel it- answered Pooh.",
	    	" It's a dangerous path I bounce, but I bounce it alone. Because the Hundred Acre Wood needs a hero, Pooh Bear, and Im the only one. -Tigger"
	    	" Rivers know this: there is no hurry. We shall get there some day. -Pooh"
	    	" Oh Tigger, where are your manners?' 'I don’t know, but I bet they’re having more fun than I am."
	    	" We'll be friends forever, won't we, Pooh?\" asked Piglet. \"Even longer,- Pooh answered."
	    	" Some people talk to animals. Not many listen though. That's the problem. -Pooh"
	    	"The hardest part is what to leave behind, ... It's time to let go. -Pooh"];
	 var len=arr.length; 
	    var cur;
	   

	    	var randomQuote=arr[Math.floor(Math.random()*len)];
	    		//arr[cur];
	    		var rq=randomQuote.split("-");
	    		$('.quote').text(randomQuote);
	    	}
   $("#click").on("click",function(){
   	randomNumber();
   });
});