$(document).ready(function(){
    $("button").click(function(){
    	var quotes=["santosh","dora","alika","bharati","we are best friends"];

        $("p").text(quotes[Math.floor(Math.random()*quotes.length)]);
    });
});