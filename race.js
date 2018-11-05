var randleng;
var var1;
  function resetRace()
  {
    document.getElementById("startRace").src="Red.png"
    // window.location.reload();
  }

    //PLACED THE POS1 & POS2 OUTSIDE OF THE FUNCTION
  var trump = 0;
  var Musk = 0;
  function start()
  {
    myVar1 = setInterval(startRace, 4);
    document.getElementById("startButton").src="green.png"

  }
function startRace() 
{
    var ranNum = Math.floor(Math.random()*2);
    randleng = Math.floor(Math.random()*5);

    //position of racer1
    if(ranNum == 0)
    {
      var leng1 = trump + randleng;
      trump+=randleng;
      document.getElementById("Nasa").style.left = leng1 + "px";
    } 
    //postion of racer2
    else if (ranNum == 1)
    {
      var leng2 = Musk + randleng;
      Musk+=randleng;
      document.getElementById("SpaceX").style.left = leng2 + "px";
      
    }

    //sets the length of race to 900px and pops up winner
    if (leng1 >= 900)
    {
     document.body.innerHTML = '<img src="trump.png"></img>';
    
      stopRockets();
    }
  
    else if ( leng2 >= 900)
    {
      document.body.innerHTML = '<img src="Musk.png"></img>';
      addEventListener();
      
      stopRockets();
    }

  function stopRockets()
  {
    clearInterval(myVar1);
    //resetRace();
  }

    
  
}