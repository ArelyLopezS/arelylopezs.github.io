let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #7655ed">Desarrollo sitios web y dibujo por diversión.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
