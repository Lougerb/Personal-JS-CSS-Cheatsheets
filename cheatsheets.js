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
