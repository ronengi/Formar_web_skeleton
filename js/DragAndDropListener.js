/**
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

var infotom;
var infocompound;
var resizehandle;

/**
 * Add all drag & drop event listeners related to drag and drop functionality.
 * Every event is directed to the appropriate function, according to the
 * class and action.
 * This class assumes that every draggable object in the document has
 * a unique id.
 */
function DragAndDropListener() {

    var self = this;
    this.draggedElement = null;
    
    // dragstart
    this.dragstart = function() {
        document.addEventListener("dragstart", function (event) {
            self.draggedElement = event.target;
            if (event.target.classList.contains("resizeHandle"))
                resizehandle.dragstart(event);
            else if (event.target.classList.contains("InfoTom"))
                infotom.dragstart(event);
            else if (event.target.classList.contains("InfoCompound"))
                 infocompound.dragstart(event);
        });
    };

    // drag
    this.drag = function() {
        document.addEventListener("drag", function (event) {
            if (event.target.classList.contains("resizeHandle"))
                resizehandle.drag(event);
            else if (event.target.classList.contains("InfoTom"))
                infotom.drag(event);
            else if (event.target.classList.contains("InfoCompound"))
                infocompound.drag(event);
        });
    };
        
    // dragover
    this.dragover = function() {
        document.addEventListener("dragover", function (event) {
            var elm = self.draggedElement;
            if (elm.classList.contains("resizeHandle"))
                resizehandle.dragover(event, elm.id);
            else if (elm.classList.contains("InfoTom"))
                infotom.dragover(event, elm.id);
            else if (elm.classList.contains("InfoCompound"))
                infocompound.dragover(event, elm.id);
        });
    };

    /*
    // dragend
    document.addEventListener("dragend", function(event) {
        console.log("dragend");
    });
    */

    // drop
    this.drop = function() {
        document.addEventListener("drop", function (event) {
            var elm = self.draggedElement;
            self.draggedElement = null;
            if (elm.classList.contains("resizeHandle"))
                resizehandle.drop(event, elm.id);
            else if (elm.classList.contains("InfoTom"))
                infotom.drop(event, elm.id);
            else if (elm.classList.contains("InfoCompound"))
                infocompound.drop(event, elm.id);
        });
    };

    this.dragstart();
    this.drag();
    this.dragover();
    this.drop();

}
