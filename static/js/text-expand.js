<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2299.77">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px Courier; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px Courier; -webkit-text-stroke: #000000; min-height: 16.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">var elements = document.querySelectorAll('p');</span></p>
<p class="p1"><span class="s1">Array.prototype.forEach.call(elements, function(el, i){</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if(el.innerHTML=='[expand]') {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>var parentcontent = el.parentNode.innerHTML.replace('&lt;p&gt;[expand]&lt;/p&gt;','&lt;div class="expand" style="display: none; height: 0; overflow: hidden;"&gt;').replace('&lt;p&gt;[/expand]&lt;/p&gt;','&lt;/div&gt;');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>el.parentNode.innerHTML = parentcontent;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">var elements = document.querySelectorAll('div.expand');</span></p>
<p class="p1"><span class="s1">Array.prototype.forEach.call(elements, function(el, i){</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>el.previousElementSibling.innerHTML = el.previousElementSibling.innerHTML + '&lt;span&gt;..&amp;nbsp; &lt;a href="#" style="cursor: pointer;" onclick="this.parentNode.parentNode.nextElementSibling.style.display = \'block\'; this.parentNode.parentNode.nextElementSibling.style.height = \'auto\'; this.parentNode.style.display = \'none\';"&gt;read&amp;nbsp;more&amp;nbsp;&amp;rarr;&lt;/a&gt;&lt;/span&gt;';</span></p>
<p class="p1"><span class="s1">});</span></p>
</body>
</html>
