
var images = new Array()

images[0] = "images\250X110668568400.jpg";
images[1] = "images\paz_250x110103131473.jpg";

var x=0;

function changeImage()
{
           document.getElementById("bannerImage").src=images[x];
           x++;
           if (images.length == x) 
           {
               x = 0;
           }
}

var txt = new Array()

txt[0] = "טיפז";
txt[1] = "yellow click&pick";
txt[2] = "שטחי מסחר פז סנטר"
var y=0;

function changetxt()
{
           document.getElementById("bannertxt").innerText=txt[y];
           y++;
           if (images.length == y) 
           {
               y = 0;
           }
}

setInterval("changetxt()", 2000);
setInterval("changeImage()", 2000);

