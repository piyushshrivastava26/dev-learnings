var tl = gsap.timeline()


tl.from('h3', {
  y : -30,
  opacity : 0, 
  delay : 0.2,
  duration : 0.5,
  stagger : 0.1 
})

tl.from('h1', {
    x : 400,
    opacity : 0,
    duration : 0.8,
    delay : 0.3,
    stagger : 0.4
})

tl.from('h2', {
    y : +30,
  opacity : 0, 
  delay : 0.2,
  duration : 0.5,
  stagger : 0.1  
})