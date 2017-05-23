/**
 * Add Drag & Drop Event Listeners
 *
 *
 *
 *   Copyright 2017 Ronen Gilead-Raz
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

function drag_and_drop_init() {

    // dragstart
    document.addEventListener("dragstart", function (event) {
        var leftover = document.getElementById("the_currently_dragged_thingy");
        if (leftover !== null)
            leftover.id = "";

        event.target.id = "the_currently_dragged_thingy";
        if (event.target.classList.contains("resizeHandle"))
            resizeHandle_dragstart(event);
        else if (event.target.classList.contains("InfoTom"))
            InfoTom_dragstart(event);
    });

    // drag
    document.addEventListener("drag", function (event) {
        event.preventDefault();
        if (event.target.classList.contains("resizeHandle"))
            resizeHandle_drag(event);
        else if (event.target.classList.contains("InfoTom"))
            InfoTom_drag(event);
    });

    // dragover
    document.addEventListener("dragover", function (event) {
        event.preventDefault();
        var classes = document.getElementById("the_currently_dragged_thingy").className.split(' ');
        if (classes.includes("resizeHandle"))
            resizeHandle_dragover(event);
        else if(classes.includes("InfoTom"))
            InfoTom_dragover(event);
    });

    /*
    // dragend
    document.addEventListener("dragend", function(event) {
    console.log("dragend");
    });
    */

    // drop
    document.addEventListener("drop", function (event) {
        event.preventDefault();
        var classes = document.getElementById("the_currently_dragged_thingy").className.split(' ');
        if (classes.includes("resizeHandle"))
            resizeHandle_drop(event);
        else if (classes.includes("InfoTom"))
            InfoTom_drop(event);
    });

}
