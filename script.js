
var txt = new Array()
var images = new Array()

txt[0] = "טיפז";
images[0]="images/250X110668568400.jpg"

txt[1] = "yellow click&pick";
images[1] = "images/paz_250x110059890678.jpg"
txt[2] = "שטחי מסחר פז סנטר"
images[2]="images/paz_250x110103131473.jpg"
var x=0;

function changet()
{
           document.getElementById("bannertxt").innerText= txt[x];
           document.getElementById("bannerImage").src= images[x];
           x++;
           if (images.length == x) 
           {
               x = 0;
           }
}

setInterval("changet()", 2000);

