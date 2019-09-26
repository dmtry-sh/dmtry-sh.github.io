var hover1 = document.getElementById("hover1");
var hover2 = document.getElementById('hover2');
hover1.onmouseover = (() => document.getElementById('hidden1').style.visibility = "hidden");
hover1.onmouseout = (() => document.getElementById("hidden1").style.visibility = "visible");
hover2.onmouseover = (() => document.getElementById('hidden2').style.visibility = "hidden");
hover2.onmouseout = (() => document.getElementById("hidden2").style.visibility = "visible");
