<BODY>



<SCRIPT LANGUAGE=”JavaScript”>



<!– This script and many more are available free online at –>

<!– The JavaScript Source!! http://www.javascriptsource.com –>

<!– Original:  Premshree Pillai & Dynamic Drive (premshree@hotmail.com) –>

<!– Web Site:  http://www.qiksearch.com/javascripts.htm –>

<!– Begin

var msgs = new Array(

     “New Look for JavaScripts.com”,

     “The most up to date ASP source”,

     “CNN latest headlines!”,

     “Wired News- Technology and beyond”,

     “Newest Java News at Gamelan” ); // No comma after last ticker msg



 var msg_url = new Array(

     “http://www.javascripts.com”,

     “http://www.ASPNews.com”,

     “http://www.cnn.com”,

     “http://www.wired.com”,

     “http://www.gamelan.com” ); // No comma after last ticker url



var barwidth=350 //Enter main bar width in px or %

var setdelay=3000 //Enter delay between msgs, in mili-seconds

var mouseover_color=’#E1FFE1′ //Specify highlight color

var mouseout_color=’#FFFFFF’ //Specify default color

/////////////////////////////////////////////////////////////////////



var count=0;

var ns6=document.getElementById&&!document.all

var ie4=document.all&&navigator.userAgent.indexOf(“Opera”)==-1



if (ie4||ns6){

document.write(‘<form name=”news_bar”><input type=”button” value=”3″ onclick=”moveit(0)” class=”scrollerstyle” style=”width:22; height:22; border-right-width:0px;” name=”prev” title=”Previous News”><input type=”button” name=”news_bar_but” onclick=”goURL();” style=”color:#000000;background:#FFFFFF; width:’+barwidth+’; height:22; border-width:1; border-color:#000000; cursor:hand” onmouseover=”this.style.background=mouseover_color” onmouseout=”this.style.background=mouseout_color”><input type=”button” value=”4″ onclick=”moveit(1)” class=”scrollerstyle” style=”width:22; height:22; border-left-width:0px;” name=”next” title=”Next News”></form>’);

}

else{

document.write(‘<form name=”news_bar”><input type=”button” value=”Previous” onclick=”moveit(0)”>’)

if (navigator.userAgent.indexOf(“Opera”)!=-1)

document.write(‘<input type=”button” name=”news_bar_but” onclick=”goURL();” style=”width:’+barwidth+'” border=”0″>’)

else

document.write(‘<input type=”button” name=”news_bar_but” onclick=”goURL();” width=”‘+barwidth+'” border=”0″>’)

document.write(‘<input type=”button” value=”Next” onclick=”moveit(1)”></form>’)

}



function init_news_bar(){

  document.news_bar.news_bar_but.value=msgs[count];

}

//moveit function by Dynamicdrive.com

function moveit(how){

if (how==1){ //cycle foward

if (count<msgs.length-1)

count++

else

count=0

}

else{ //cycle backward

if (count==0)

count=msgs.length-1

else

count–

}

document.news_bar.news_bar_but.value=msgs[count];

}



setInterval(“moveit(1)”,setdelay)



function goURL(){

 location.href=msg_url[count];

}



init_news_bar();

//  End –>

</script>



<p><center>

<font face=”arial, helvetica” size”-2″>Free JavaScripts provided<br>

by <a href=”https://javascriptsource.com”>The JavaScript Source</a></font>

</center><p>



<!– Script Size:  3.13 KB –>