// ==UserScript==
// @name         Neopets Make Some Noise Score Display
// @namespace    https://github.com/voxalice2/neopets-userscripts
// @version      v1
// @description  Mitigate a text rendering issue in Make Some Noise by displaying the total score outside of the game window
// @author       Voxalice
// @license      MIT
// @match        https://www.neopets.com/altador/colosseum/ctp.phtml?game_id=1399*
// @icon         https://neopets.com/favicon.ico
// @run-at       document-body
// @grant        none
// ==/UserScript==

console.log("Neopets Make Some Noise Score Display: Creating display");

function override() {
    var score_display = document.createElement("p")
    score_display.id = "score_display"
    document.querySelector("#animation_container").append(score_display)

    function updateScoreDisplay() {
        // This was found with a window object search script: https://stackoverflow.com/a/46536947

        var totalScore;
        try {
            totalScore = Math.round(Phaser.Display.Canvas.CanvasPool.pool[1].parent.game.events._events.destroy[5].context.events._events.gameout.context.scene.sys.scale._events.resize[1].context.scene.sys.events._events.start[3].context.manager.keys.game?.gameManager?.privateGameManager?.totalScore);
        } catch {
            totalScore = 0;
        }

        score_display.innerText = "Score : " + totalScore;
    }

    setInterval(updateScoreDisplay, 100);

    console.log("Neopets Make Some Noise Score Display: Display created successfully");
}

function addOverride() {
    console.log("Neopets Make Some Noise Score Display: Adding display function to page");

    var script = document.createElement("script");
    script.textContent = "(" + override.toString() + ")();";
    document.body.appendChild(script);
}

addOverride();
console.log("Neopets Make Some Noise Score Display: Done loading! :)");

/* MIT License

Copyright (c) 2026 Voxalice

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */