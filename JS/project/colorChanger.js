// generating random colors 
const randomColor = function () {
    const hex = '01234564789ABCDEF'
    let color = '#'
  
    for(let i = 0; i < 6; i++){
      color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
  }
  
  // for starting changing bg color
  let setInt;
  function startChangingColor () {
    function changeBG () {
      document.body.style.backgroundColor = randomColor()
    }
    if(!setInt){
    setInt = setInterval(changeBG, 1000)
    }
  }
  
  document.getElementById('start').addEventListener('click', startChangingColor)
  
  
  // for stopping the changing color movement
  function stopChangingColor ()  {
    clearInterval(setInt)
    setInt = null
  }
  
  document.getElementById('stop').addEventListener('click', stopChangingColor)
  