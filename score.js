// Iteration 5: Store the player score and display it on the game over screen
document.getElementById('score-box').innerText="Score: "+localStorage.getItem('score');

document.getElementById('play-again-button').onclick=()=>{
    window.open('game.html','_self')
}