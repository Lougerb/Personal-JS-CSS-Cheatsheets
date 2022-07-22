//=====================================================================================
//toggle two or more element's class to be remove or added
//=====================================================================================
const toggleClassOnce  =  (
  elementAdd,
  addMClass,
  elementRemove,
  removeMClass
) => {
  if (elementAdd == null && addMClass == null) {
    elementRemove.classList.remove(removeMClass);
  } else if (elementRemove == null && removeMClass == null) {
    elementAdd.classList.add(addMClass);
  } else {
    elementAdd.classList.add(addMClass);
    elementRemove.classList.remove(removeMClass);
  }
};

//=====================================================================================
//Adding Delay for Async
//=====================================================================================
const delay = n => new Promise(r => setTimeout(r, n));

//Usage
const foo = async () =>{
    try{
        console.log("bar1");
        await delay(500);
        console.log("bar2");
        await delay(500);
        console.log("bar3");
        await delay(500);

    }catch (err){
        console.log(err);
    }
}
foo();

//=====================================================================================
//Swipe functions
//=====================================================================================
myElement.addEventListener("touchstart", startTouch, false);
myElement.addEventListener("touchmove", moveTouch, false);
 
// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;
 
function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
};
 
function moveTouch(e) {
  if (initialX === null) {
    return;
  }
 
  if (initialY === null) {
    return;
  }
 
  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;
 
  var diffX = initialX - currentX;
  var diffY = initialY - currentY;
 
  if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
      // swiped left
      console.log("swiped left");
    } else {
      // swiped right
      console.log("swiped right");
    }  
  } else {
    // sliding vertically
    if (diffY > 0) {
      // swiped up
      console.log("swiped up");
    } else {
      // swiped down
      console.log("swiped down");
    }  
  }
 
  initialX = null;
  initialY = null;
   
  e.preventDefault();
};
// Reference:
//"https://www.kirupa.com/html5/detecting_touch_swipe_gestures.htm"
//=====================================================================================
//Title
//=====================================================================================


//=====================================================================================
//Run function on a certain Window size
//=====================================================================================
$(window).on('resize', function(){
            var win = $(this);
            if (win.width() < 751) {
                console.log('This is SP');
            }else {
                console.log('This is pc')
            }
        });

//=====================================================================================
// Responsive Nav on scroll when resizing browser on PC
//=====================================================================================
$(window).on("scroll", function (e) {
    //calculate left position
    var left = $(this).scrollLeft();
    //apply to header in negative
    $(".nav-bar-here").css("left", -left);
});

//=====================================================================================
// Real usage for modal plugin
//=====================================================================================

Modal plugin
https://www.humaan.com/modaal/

Usage
HTML:
<a class='myButton' name='myContent1'>Show Modal</a>
<div id='myContent1'>This is a content 1</div>

<a class='myButton' name='myContent2'>Show Modal</a>
<div id='myContent2'>This is a content 2</div>

JS:

$('myButton').each(function(i, e){
            var el = `#${e.id}`;
            var eltar = `#${e.name}`;
            $(el).modaal({
                content_source: eltar,
            });
        });

//prevent pressing enter
<input type="text" onkeydown="return event.key != 'Enter';">
  
  
//Number only on input
  $('#number').keypress(function(e){
            const pattern = /^[0-9]$/;
            return pattern.test(e.key )
        });
