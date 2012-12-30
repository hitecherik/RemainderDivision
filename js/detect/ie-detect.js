var ie=function(){for(var a=3,b=document.createElement("div"),c=b.getElementsByTagName("i");b.innerHTML="<\!--[if gt IE "+ ++a+"]><i></i><![endif]--\>",c[0];);return 4<a?a:void 0}();

if (ie) {
	var html = "<script src=\"http://html5shiv.googlecode.com/svn/trunk/html5.js\"></script><script src=\"http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js\">IE7_PNG_SUFFIX=\".png\"></script>";
	$('head').prepend(html);
};