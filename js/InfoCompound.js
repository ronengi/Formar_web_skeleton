/*
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

function InfoCompound() {

    // dragstart
    this.dragstart = function (event) {
        var dt = event.dataTransfer;
        var me = event.target;
        var myStyle = document.defaultView.getComputedStyle(me);
        var myLeft = parseInt(myStyle.getPropertyValue("left"), 10) - event.clientX;
        var myTop = parseInt(myStyle.getPropertyValue("top"), 10) - event.clientY;
        me.style.opacity = "0.9";
        dt.setData("text/plain", myLeft + "," + myTop);

        document.getElementById("alerter").innerHTML = "Dragging Information Node";
    };

    // drag
    this.drag = function (event) {
        event.preventDefault();
        // var dt = event.target;
        // dt.effectAllowed = "all";
        // dt.dropEffect = "move";
    };

    // dragover
    this.dragover = function (event, e_id) {
        event.preventDefault();
        var me = document.getElementById(e_id);
        var dt = event.dataTransfer;
        var myData = dt.getData("text/plain").split(',');
        var myLeft = parseInt(myData[0], 10);
        var myTop = parseInt(myData[1], 10);
        me.style.left = myLeft + event.clientX + 'px';
        me.style.top = myTop + event.clientY + 'px';
    };

    // drop
    this.drop = function (event, e_id) {
        event.preventDefault();
        var me = document.getElementById(e_id);
        me.style.opacity = "";

        document.getElementById("alerter").innerHTML = "ready";
    };

}
