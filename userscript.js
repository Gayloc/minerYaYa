// ==UserScript==
// @name         矿工丫丫脚本
// @namespace    http://tampermonkey.net/
// @version      2024-04-21
// @description  隐藏b站推荐《熊猫干饭噎住被救时还在炫 奶妈：我的活爹！别吃了！》
// @author       Gayloc
// @match        https://www.bilibili.com/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let panda=document.querySelector("p[title='熊猫干饭噎住被救时还在炫 奶妈：我的活爹！别吃了！']").parentElement.parentElement.parentElement;
    if(panda){
        console.log("发现傻逼熊猫干饭！隐藏节点");
        panda.setAttribute("style","visibility: hidden; height: 0; width: 0; margin: 0; padding: 0;");
    }
})()
