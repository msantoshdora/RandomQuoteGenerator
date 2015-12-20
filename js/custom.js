$(document).ready(function(){
    $("button").click(function(){
    	var quotes=["we are best friends","We\’ve all got both light and dark inside us. What matters is the part we choose to act on. That\’s who we really are.","Let us step into the night and pursue that flighty temptress, adventure.","It matters not what someone is born, but what they grow to be.","Of course it is happening inside your head, Harry, but why on earth should that mean it is not real?","Things we lose have a way of coming back to us in the end, if not always in the way we expect.",
    	"Things we lose have a way of coming back to us in the end, if not always in the way we expect.","\‘The thing about growing up with Fred and George is that you sort of start thinking anything’s possible if you’ve got enough nerve.\’","\‘ If you want to know what a man \’ s like, take a good look at how he treats his inferiors, not his equals.\’ – Sirius Black"];

        $("p").text(quotes[Math.floor(Math.random()*quotes.length)]);
    });
});
