(function($){$.fn.snowfall=function(options)
{var element=this;random=function random(min,max)
{return Math.round(min+Math.random()*(max-min));}
function Flake(_x,_y,_size,_speed)
{this.id=flakeId;this.x=_x;this.y=_y;this.size=_size;this.
speed=_speed;this.step=0,this.stepSize=random(1,10)/100;var 
angle=Math.round(Math.random()*360);var flakeMarkup="
<img src='"+options.image+"' id='flake-"+this.id;flakeMarkup+="' 
style='width: "+this.size+"px; height: "+this.size+"px;";flakeMarkup+="; 
position: absolute; top: "+this.y+"px; left:"+this.x+"px; font-size: 0px; 
z-index: "+options.flakeIndex;flakeMarkup+="; -moz-transform:rotate("+angle+"deg);"
;flakeMarkup+="-webkit-transform:rotate("+angle+"deg);";flakeMarkup+="
transform:rotate("+angle+"deg);";flakeMarkup+="' />";if($(element).get(0).
tagName===$(document).get(0).tagName){$('body').append(flakeMarkup);}
else{$(element).append(flakeMarkup);}this.element=document.
getElementById('flake-'+this.id);this.update=function(
){this.y+=this.speed;if(this.y>(elHeight)-20){this.reset();}
this.element.style.top=this.y+'px';this.element.style.left=this.x+'px'
;this.step+=this.stepSize;this.x+=Math.cos(this.step);if(this.x>(elWidth
)-22||this.x<22){this.reset();}}
this.reset=function(){this.y=0;this.x=random(0,elWidth)
;this.stepSize=random(1,10)/100;this.size=random((options.minSize*100),(options.maxSize*100))/100;this.speed=random(options.minSpeed,options.maxSpeed);}}var flakes=[],flakeId=0,i=0,elHeight=$(element).height(),elWidth=$(element).width(),defaults={flakeCount:35,flakeColor:'#ffffff',flakeIndex:999999,minSize:1,maxSize:3,minSpeed:2,maxSpeed:3,image:'image.png'},options=$.extend(defaults,options);$(window).bind("resize",function(){elHeight=$(element).height();elWidth=$(element).width();});for(i=0;i<options.flakeCount;i+=1){flakeId=i;flakes[i]=new Flake(random(0,elWidth),random(0,elHeight),random((options.minSize*100),(options.maxSize*100))/100,random(options.minSpeed,options.maxSpeed));}function snow(){for(i=0;i<options.flakeCount;i+=1){flakes[i].update();}setTimeout(function(){snow()},30);}snow();};})(jQuery);