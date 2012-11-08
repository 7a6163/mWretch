// ==UserScript==
// @name           iWretch
// @namespace      http://mymengyu.github.com/
// @description    將電腦版網頁轉到手機版
// @author         Zac http://mymengyu.github.com
// @match		   http://www.wretch.cc/*
// @version 0.1
// ==/UserScript==

var url = location.pathname;
window.location.href = "http://tw.m.wretch.yahoo.com" + url;