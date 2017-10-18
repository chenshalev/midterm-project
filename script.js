
var txt = new Array()
txt[0] = "טיפז";
txt[1] = "yellow click&pick";
txt[2] = "שטחי מסחר פז סנטר"
var y=0;

var images = new Array()
images[0] = "images\250X110668568400.jpg";
images[1] = "images\paz_250x110103131473.jpg";
images[2] = "images\paz_250x110059890678.jpg";
var x=0;

function changet()
{
           document.getElementById("bannertxt").innerText=txt[y];
           document.getElementById("bannerImage").src=images[x];
           y++;
           if (images.length == y) 
           {
               y = 0;
           }
}

setInterval("changet()", 2000);

