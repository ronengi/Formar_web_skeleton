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

function re_position_rtl_resizeHandles() {
    /**
     * 
     * @type NodeList
     */

    // change positions of rtl resizeHandles
    var rtlNodes = document.getElementsByClassName("lang_rtl");
    for (var i = 0; i < rtlNodes.length; ++i) {
        var rtlResizeHandles = rtlNodes[i].getElementsByClassName("resizeHandle");
        for (var j = 0; j < rtlResizeHandles.length; ++j) {
            rtlResizeHandles[j].style.left = "1px";
            rtlResizeHandles[j].style.right = "";
        }
    }
}

window.onload = function () {
    // drag_and_drop_init();
    infotom = new InfoTom();    // global, undeclared
    listener = new DragAndDropListener();
    re_position_rtl_resizeHandles();
    document.getElementById("alerter").innerHTML = "ready";
};
