---
title: CSS命名与代码片段
date: 2016-8-3 20:20:20
excerpt: 一些有用的CSS代码片段作为存档
---

## 命名规范
> 使用[BEM](http://getbem.com/)规则，全部使用下划线来分隔，不使用驼峰式的命名方法。  

1. 如果class是大于等于两个单词(第二个之后的单词一般是修饰语Modifier)，单词之间的分隔用一个下划线来实现。例如：    

```css
   .mobile_menu{
       display:block;
   }
```
2. 如果class是该模块下的子元素，使用两个下划线来分隔。例如:  
   
```css
   .main__header{
       display:block;
   }
```

## 实用代码段

### 任意元素保持为窗口高度

```css
html, 
body {
    height: 100%;
}
 
.item{
    height: 100%;
}
```

### 使用 IE 盒模型

```css
html {
      box-sizing: border-box;
}
 
*, *:before, *:after {
box-sizing: inherit;
}
```

### 清浮动

```css
.clearfix:after {
content:".";
display:block;
height:0;
visibility:hidden;
clear:both;
}


.clearfix:before, .container:after { content: ""; display: table; }.clearfix:after { clear: both; } /* IE 6/7 */.clearfix { zoom: 1; }
```

### 文字过长后用…代替

#### `text-overflow`属性
1. 这一属性用于设置文字过长后文字的展现形式，目前支持广泛的为以下两种值:
- clip //文字超长会截断
- ellipsis //文字超长会转变为...

2. 这一属性想要生效需要满足以下条件：
- 只能在`block`或`inline-block`元素中生效，因为他要求元素本身具有宽度
- 必须同时设置下面两种属性：
```
white-space: nowrap;
 overflow: hidden;
```
- `text-overflow:ellipsis;`要想生效要求元素设置具体的宽度，百分比宽度不能生效 

#### 基本用法
```
.el {
  white-space: nowrap;
  max-width: 450px;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

#### 多行文字
```
.el {
overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```

### 媒体查询

```css
/* Smartphones (portrait and landscape) ----------- */
@media only screen 
and (min-device-width : 320px) and (max-device-width : 480px) {
  /* Styles */
}
 
/* Smartphones (landscape) ----------- */
@media only screen and (min-width : 321px) {
  /* Styles */
}
 
/* Smartphones (portrait) ----------- */
@media only screen and (max-width : 320px) {
  /* Styles */
}
 
/* iPads (portrait and landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
  /* Styles */
}
 
/* iPads (landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
  /* Styles */
}
 
/* iPads (portrait) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
  /* Styles */
}
 
/* Desktops and laptops ----------- */
@media only screen and (min-width : 1224px) {
  /* Styles */
}
 
/* Large screens ----------- */
@media only screen and (min-width : 1824px) {
  /* Styles */
}
 
/* iPhone 4 ----------- */
@media only screen and (-webkit-min-device-pixel-ratio:1.5), only screen and (min-device-pixel-ratio:1.5) {
  /* Styles */
}
```

### 视窗内水平垂直居中

```css
.div{
   position: fixed;
   left:0;right:0;top:0;bottom:0;
   margin:auto;
}
```

### font-face写法

```css
@font-face {
    font-family: 'MyWebFont';
    src: url('webfont.eot'); /* IE9 Compat Modes */
    src: url('webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('webfont.woff') format('woff'), /* Modern Browsers */
    url('webfont.ttf')  format('truetype'), /* Safari, Android, iOS */
    url('webfont.svg#svgFontName') format('svg'); /* Legacy iOS */
}
 
body {
    font-family: 'MyWebFont', Arial, sans-serif;
}
```

### 可点击项目鼠标手形

```css
a[href], input[type='submit'], input[type='image'], label[for], select, button, .pointer {    cursor: pointer;}
```

### 输入表单样式重置

```css
input[type=text], textarea {
  -webkit-transition: all 0.30s ease-in-out;
  -moz-transition: all 0.30s ease-in-out;
  -ms-transition: all 0.30s ease-in-out;
  -o-transition: all 0.30s ease-in-out;
  outline: none;
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
  border: 1px solid #DDDDDD;
  resize: none;
}
 
input[type=text]:focus, textarea:focus {
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
  border: 1px solid rgba(81, 203, 238, 1);
}
```

### GITHUB RIBBON USING CSS TRANSFORMS

```css
.ribbon {
    background-color: #a00;
    overflow: hidden;
    /* top left corner */
    position: absolute;
    left: -3em;
    top: 2.5em;
    /* 45 deg ccw rotation */
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    /* shadow */
    -moz-box-shadow: 0 0 1em #888;
    -webkit-box-shadow: 0 0 1em #888;
}
.ribbon a {
    border: 1px solid #faa;
    color: #fff;
    display: block;
    font: bold 81.25% 'Helvetiva Neue', Helvetica, Arial, sans-serif;
    margin: 0.05em 0 0.075em 0;
    padding: 0.5em 3.5em;
    text-align: center;
    text-decoration: none;
    /* shadow */
    text-shadow: 0 0 0.5em #444;
}
 
// https://unindented.org/articles/github-ribbon-using-css-transforms/
```

### css实现带阴影三角

```css
.triangle-with-shadow {
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 16px 10px -17px rgba(0, 0, 0, 0.5);
}
.triangle-with-shadow:after {
  content: "";
  position: absolute;
  width: 50px;
  height: 50px;
  background: #999;
  transform: rotate(45deg); /* Prefixes... */
  top: 75px;
  left: 25px;
  box-shadow: -1px -1px 10px -2px rgba(0, 0, 0, 0.5);
}
```

### 如何让fixed定位的元素产生滚动条

```
position: fixed;
overflow-y:scroll;
top: 0;
bottom: 0;
```

避免对可能改变大小的元素使用position:fixed，尤其是在需要加上js支持下的动画效果时，会出现超出父元素部分被遮挡（暂未发现如何去产生滚动条），可以对父元素进行fixed定位，然后他本身绝对定位


### flex-end导致滚动条丢失

不实用flex-end，在子元素中用 margin：auto
```css
#container > :first-child {
  marign-top: auto;
}
```


### 眼睛随鼠标运动

```js
const x = eyes.getBoundingClientRect().left
const y = eyes.getBoundingClientRect().top
const rad = Math.atan2(e.pageX - x, e.pageY - y)
const degree = (rad * (180 / Math.PI) * -1) + 180
```

### 三角

```css
.dGqufC::after {
    display: block;
    content: "";
    width: 12px;
    height: 12px;
    position: absolute;
    z-index: 99999;
    left: 32px;
    top: -24px;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 12px solid transparent;
    border-bottom: 12px solid rgb(255, 255, 255);
}

{
 position: absolute;
  display: block;
  width: 12px;
  height: 12px;
  background: transparent;
  border-style: solid;
  border-width: 6px;
  left: -6px;
  top: 50%;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: #fff;
  border-left-color: #fff;
  box-shadow: -3px 3px 7px rgba(0, 0, 0, 0.07);
  transform: translateY(-50%) rotate(45deg);
  box-sizing: border-box;
}
```

### 高亮页面框架结构

```css
* { background-color: rgba(255,0,0,.2); }
* * { background-color: rgba(0,255,0,.2); }
* * * { background-color: rgba(0,0,255,.2); }
* * * * { background-color: rgba(255,0,255,.2); }
* * * * * { background-color: rgba(0,255,255,.2); }
* * * * * * { background-color: rgba(255,255,0,.2); }
* * * * * * * { background-color: rgba(255,0,0,.2); }
* * * * * * * * { background-color: rgba(0,255,0,.2); }
* * * * * * * * * { background-color: rgba(0,0,255,.2); }
```

### 光标闪烁效果

```css
@keyframes blink {
    50% {
        color: #000;
        background: #0c0;
        -webkit-box-shadow: 0 0 5px rgba(0,100,0,50);
        box-shadow: 0 0 5px rgba(0,100,0,50);
    }
}
@-webkit-keyframes blink {
    50% {
        color: #000;
        background: #0c0;
        -webkit-box-shadow: 0 0 5px rgba(0,100,0,50);
        box-shadow: 0 0 5px rgba(0,100,0,50);
    }
}
@-ms-keyframes blink {
    50% {
        color: #000;
        background: #0c0;
        -webkit-box-shadow: 0 0 5px rgba(0,100,0,50);
        box-shadow: 0 0 5px rgba(0,100,0,50);
    }
}
@-moz-keyframes blink {
    50% {
        color: #000;
        background: #0c0;
        -webkit-box-shadow: 0 0 5px rgba(0,100,0,50);
        box-shadow: 0 0 5px rgba(0,100,0,50);
    }
}
.cmd .cursor.blink {
    -webkit-animation: 1s blink infinite;
    animation: 1s blink infinite;
    -webkit-box-shadow: 0 0 0 rgba(0,100,0,50);
    box-shadow: 0 0 0 rgba(0,100,0,50);
    border: none;
    margin: 0;
} 
</style>
<!-- (*^__^*) 嘻嘻…… -->
<div class="cmd">输入内容
    <div class="cursor blink" style="height: 14px;width: 6px;">
    </div>
</div>
```
