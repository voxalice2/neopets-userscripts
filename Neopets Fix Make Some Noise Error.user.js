// ==UserScript==
// @name         Neopets Fix Make Some Noise Error
// @namespace    https://github.com/voxalice2/neopets-userscripts
// @version      v1
// @description  Fix the error that prevents "Make Some Noise" from launching
// @author       Voxalice
// @license      Unlicense
// @match        https://www.neopets.com/altador/colosseum/ctp.phtml*
// @icon         https://neopets.com/favicon.ico
// @run-at       document-body
// @grant        none
// ==/UserScript==

console.log("Neopets Fix Make Some Noise Error: Creating XMLHttpRequest.open() override");

function override() {
    var openOriginal = window.XMLHttpRequest.prototype.open;

    // For every XMLHttpRequest:
    // 1: If request URL contains "images50.neopets.com", replace with "images.neopets.com"
    // 2: If request URL contains "neopia-central", replace with "virtupets" (The presence of a new team, Neopia Central, breaks MSN)
    // 3: Call original function to send the request
    window.XMLHttpRequest.prototype.open = function() {
        //console.log(arguments[1]);
        arguments[1] = arguments[1].replace("images50.neopets", "images.neopets");
        arguments[1] = arguments[1].replace("neopia-central", "virtupets");
        //console.log(">>>", arguments[1]);

        openOriginal.apply(this, arguments);
    }

    console.log("Neopets Fix Make Some Noise Error: XMLHttpRequest.open() overridden");
}

function addOverride() {
    console.log("Neopets Fix Make Some Noise Error: Adding override function to page");

    var script = document.createElement("script");
    script.textContent = "(" + override.toString() + ")();";
    document.body.appendChild(script);
}

addOverride();
console.log("Neopets Fix Make Some Noise Error: Done loading! :)");

// Copyright 'License' Statement:

/* This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org> */