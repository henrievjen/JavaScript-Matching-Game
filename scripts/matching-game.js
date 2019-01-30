$(document).ready(function() {
    
    // Both matches and misses are displayed at top of page
    let matches = 0;
    let misses = 0;

    let photos = ["#dogPhoto1", "#catPhoto2", "#carPhoto3", "#naturePhoto4", "#laptopPhoto5", "#bookPhoto6", "#wavePhoto7", "#naturePhoto8", "#dogPhoto9", "#tablePhoto10", "#lightbulbPhoto11", "#lightbulbPhoto12", "#pizzaPhoto13", "#basketballPhoto14", "#laptopPhoto15", "#catPhoto16", "#tablePhoto17", "#wavePhoto18", "#bonusCard19", "#skatePhoto20", "#basketballPhoto21", "#bookPhoto22", "#pizzaPhoto23", "#skatePhoto24", "#carPhoto25"];
    
    let matchedPhotos = ["#matched1", "#matched2", "#matched3", "#matched4", "#matched5", "#matched6", "#matched7", "#matched8", "#matched9", "#matched10", "#matched11", "#matched12", "#matched13", "#matched14", "#matched15", "#matched16", "#matched17", "#matched18", "#matched19", "#matched20", "#matched21", "#matched22", "#matched23", "#matched24", "#matched25"];

    let counter = 0;
    
    // Click control variable >> allows two cards to be flipped, then resets them unless a match
    let click;
    
    // clicked1 & clicked2 are the targets of the two clicks
    let clicked1;
    let clicked2;
    
    let checker = 0;
    
    alert("Welcome to the JavaScript Matching Game! There are 12 matches with one bonus card. Have Fun!");

    $('#game-board img').click(function() {
        
        if(click == 0)
        {
            clicked1 = event.target;
            click++;
        }
 
        else if(click == 1)
        {
            clicked2 = event.target;
            click++;
           
            if($(photos[clicked1.className])[0].src == $(photos[clicked2.className])[0].src && $('#' + $(matchedPhotos[clicked1.className])[0].id).css("visibility") == "hidden")
            {
                matches++;
                $('#matches-num').text("Matches: " + matches);
                $("#" + $(matchedPhotos[clicked1.className])[0].id).css("visibility", "visible");
                $("#" + $(matchedPhotos[clicked2.className])[0].id).css("visibility", "visible");
            }
        }
 
        else
        {  
            click = 0;
        }
 
        if(counter == 0)
        {
            $(clicked1).css("visibility", "hidden");
            $(photos[clicked1.className]).css("visibility", "visible");
            counter++;
        }
 
        else if(counter == 1)
        {
            $(clicked2).css("visibility", "hidden");
            $(photos[clicked2.className]).css("visibility", "visible");
            counter++;
            if($('#' + $(matchedPhotos[clicked1.className])[0].id).css("visibility") == "hidden" && $('#' + $(matchedPhotos[clicked2.className])[0].id).css("visibility") == "hidden")
            {
                misses++;
                $('#misses').text("Misses: " + misses);
            }
            
            flipBack = setTimeout(function() {
                $(clicked1).css("visibility", "visible");
                $(photos[clicked1.className]).css("visibility", "hidden");
                $(clicked2).css("visibility", "visible");
                $(photos[clicked2.className]).css("visibility", "hidden");
            }, 2000);
        }

        else
        {
            clearTimeout(flipBack);
            counter = 0;
            $(clicked1).css("visibility", "visible");
            $(photos[clicked1.className]).css("visibility", "hidden");
            $(clicked2).css("visibility", "visible");
            $(photos[clicked2.className]).css("visibility", "hidden");
            $('#card1').trigger('click');
        }
        
        
        if(matches == 12 && checker == 0)
        {
            alert("You have gotten all the possible matches.\n\nCongratulations! Here is the bonus card.");
            
            setTimeout(function() {
                $(matchedPhotos[18]).css("visibility", "visible");
                matches++;
                alert("Congratulations, you won!");
            }, 1000);
            
            checker++;
        }

    });
   
    $('#card1').trigger('click');

});