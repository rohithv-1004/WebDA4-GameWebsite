import React from 'react';

const App = () => {
  const htmlContent = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Game-Time</title>
  <link rel="stylesheet" href="../src/index.css">
</head>
<body>
  <div class="grid-for-alignment">
  <div class="left-side-design"><p></p></div>
  <div class="middle-stuff">
    <div class="text-align">
    <h1 class="neon-text">Game Time</h1>
  </div>
    <div class="div-for-button">
      <a href="../src/tetris.html"><button class="buttons" id="tetris">Tetris</button></a>
      <a href="../src/wordle.html"><button class="buttons" id="wordle">Wordle</button></a> 
      <a href="../src/snake.html"><button class="buttons" id="snake">Snake</button></a> 
      <a href="../src/rps.html"><button class="buttons" id="rps">Rock paper scissors</button></a>
      
    </div>
  </div>
  <div class="right-side-design"><p></p></div>
  </div>
</body>
</html>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default App;
