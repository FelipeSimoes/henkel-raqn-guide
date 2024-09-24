import{c as Y,d as V}from"./chunk-J5J7XQ4F.mjs";import{o as O}from"./chunk-INOGIEW4.mjs";import{F as K,G as N,X as T,b,fa as B}from"./chunk-DMXVZUOD.mjs";import{a as o}from"./chunk-GTKDMUJJ.mjs";function G(l,t){t&&l.attr("style",t)}o(G,"applyStyle");function nt(l){let t=B(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),c=t.append("xhtml:div"),s=l.label,a=l.isNode?"nodeLabel":"edgeLabel",r=c.append("span");return r.html(s),G(r,l.labelStyle),r.attr("class",a),G(c,l.labelStyle),c.style("display","inline-block"),c.style("white-space","nowrap"),c.attr("xmlns","http://www.w3.org/1999/xhtml"),t.node()}o(nt,"addHtmlLabel");var ht=o((l,t,c,s)=>{let a=l||"";if(typeof a=="object"&&(a=a[0]),N(T().flowchart.htmlLabels)){a=a.replace(/\\n|\n/g,"<br />"),b.debug("vertexText"+a);let r={isNode:s,label:Y(O(a)),labelStyle:t.replace("fill:","color:")};return nt(r)}else{let r=document.createElementNS("http://www.w3.org/2000/svg","text");r.setAttribute("style",t.replace("color:","fill:"));let e=[];typeof a=="string"?e=a.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(a)?e=a:e=[];for(let i of e){let n=document.createElementNS("http://www.w3.org/2000/svg","tspan");n.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),n.setAttribute("dy","1em"),n.setAttribute("x","0"),c?n.setAttribute("class","title-row"):n.setAttribute("class","row"),n.textContent=i.trim(),r.appendChild(n)}return r}},"createLabel"),_=ht;var m=o(async(l,t,c,s)=>{let a=T(),r,e=t.useHtmlLabels||N(a.flowchart.htmlLabels);c?r=c:r="node default";let i=l.insert("g").attr("class",r).attr("id",t.domId||t.id),n=i.insert("g").attr("class","label").attr("style",t.labelStyle),y;t.labelText===void 0?y="":y=typeof t.labelText=="string"?t.labelText:t.labelText[0];let h=n.node(),f;t.labelType==="markdown"?f=V(n,K(O(y),a),{useHtmlLabels:e,width:t.width||a.flowchart.wrappingWidth,classes:"markdown-node-label"},a):f=h.appendChild(_(K(O(y),a),t.labelStyle,!1,s));let g=f.getBBox(),x=t.padding/2;if(N(a.flowchart.htmlLabels)){let p=f.children[0],v=B(f),d=p.getElementsByTagName("img");if(d){let k=y.replace(/<img[^>]*>/g,"").trim()==="";await Promise.all([...d].map(S=>new Promise(j=>{function D(){if(S.style.display="flex",S.style.flexDirection="column",k){let P=a.fontSize?a.fontSize:window.getComputedStyle(document.body).fontSize,$=parseInt(P,10)*5+"px";S.style.minWidth=$,S.style.maxWidth=$}else S.style.width="100%";j(S)}o(D,"setupImage"),setTimeout(()=>{S.complete&&D()}),S.addEventListener("error",D),S.addEventListener("load",D)})))}g=p.getBoundingClientRect(),v.attr("width",g.width),v.attr("height",g.height)}return e?n.attr("transform","translate("+-g.width/2+", "+-g.height/2+")"):n.attr("transform","translate(0, "+-g.height/2+")"),t.centerLabel&&n.attr("transform","translate("+-g.width/2+", "+-g.height/2+")"),n.insert("rect",":first-child"),{shapeSvg:i,bbox:g,halfPadding:x,label:n}},"labelHelper"),w=o((l,t)=>{let c=t.node().getBBox();l.width=c.width,l.height=c.height},"updateNodeBounds");function M(l,t,c,s){return l.insert("polygon",":first-child").attr("points",s.map(function(a){return a.x+","+a.y}).join(" ")).attr("class","label-container").attr("transform","translate("+-t/2+","+c/2+")")}o(M,"insertPolygonShape");var ot=o(l=>{let t=new Set;for(let c of l)switch(c){case"x":t.add("right"),t.add("left");break;case"y":t.add("up"),t.add("down");break;default:t.add(c);break}return t},"expandAndDeduplicateDirections"),J=o((l,t,c)=>{let s=ot(l),a=2,r=t.height+2*c.padding,e=r/a,i=t.width+2*e+c.padding,n=c.padding/2;return s.has("right")&&s.has("left")&&s.has("up")&&s.has("down")?[{x:0,y:0},{x:e,y:0},{x:i/2,y:2*n},{x:i-e,y:0},{x:i,y:0},{x:i,y:-r/3},{x:i+2*n,y:-r/2},{x:i,y:-2*r/3},{x:i,y:-r},{x:i-e,y:-r},{x:i/2,y:-r-2*n},{x:e,y:-r},{x:0,y:-r},{x:0,y:-2*r/3},{x:-2*n,y:-r/2},{x:0,y:-r/3}]:s.has("right")&&s.has("left")&&s.has("up")?[{x:e,y:0},{x:i-e,y:0},{x:i,y:-r/2},{x:i-e,y:-r},{x:e,y:-r},{x:0,y:-r/2}]:s.has("right")&&s.has("left")&&s.has("down")?[{x:0,y:0},{x:e,y:-r},{x:i-e,y:-r},{x:i,y:0}]:s.has("right")&&s.has("up")&&s.has("down")?[{x:0,y:0},{x:i,y:-e},{x:i,y:-r+e},{x:0,y:-r}]:s.has("left")&&s.has("up")&&s.has("down")?[{x:i,y:0},{x:0,y:-e},{x:0,y:-r+e},{x:i,y:-r}]:s.has("right")&&s.has("left")?[{x:e,y:0},{x:e,y:-n},{x:i-e,y:-n},{x:i-e,y:0},{x:i,y:-r/2},{x:i-e,y:-r},{x:i-e,y:-r+n},{x:e,y:-r+n},{x:e,y:-r},{x:0,y:-r/2}]:s.has("up")&&s.has("down")?[{x:i/2,y:0},{x:0,y:-n},{x:e,y:-n},{x:e,y:-r+n},{x:0,y:-r+n},{x:i/2,y:-r},{x:i,y:-r+n},{x:i-e,y:-r+n},{x:i-e,y:-n},{x:i,y:-n}]:s.has("right")&&s.has("up")?[{x:0,y:0},{x:i,y:-e},{x:0,y:-r}]:s.has("right")&&s.has("down")?[{x:0,y:0},{x:i,y:0},{x:0,y:-r}]:s.has("left")&&s.has("up")?[{x:i,y:0},{x:0,y:-e},{x:i,y:-r}]:s.has("left")&&s.has("down")?[{x:i,y:0},{x:0,y:0},{x:i,y:-r}]:s.has("right")?[{x:e,y:-n},{x:e,y:-n},{x:i-e,y:-n},{x:i-e,y:0},{x:i,y:-r/2},{x:i-e,y:-r},{x:i-e,y:-r+n},{x:e,y:-r+n},{x:e,y:-r+n}]:s.has("left")?[{x:e,y:0},{x:e,y:-n},{x:i-e,y:-n},{x:i-e,y:-r+n},{x:e,y:-r+n},{x:e,y:-r},{x:0,y:-r/2}]:s.has("up")?[{x:e,y:-n},{x:e,y:-r+n},{x:0,y:-r+n},{x:i/2,y:-r},{x:i,y:-r+n},{x:i-e,y:-r+n},{x:i-e,y:-n}]:s.has("down")?[{x:i/2,y:0},{x:0,y:-n},{x:e,y:-n},{x:e,y:-r+n},{x:i-e,y:-r+n},{x:i-e,y:-n},{x:i,y:-n}]:[{x:0,y:0}]},"getArrowPoints");function yt(l,t){return l.intersect(t)}o(yt,"intersectNode");var Q=yt;function ft(l,t,c,s){var a=l.x,r=l.y,e=a-s.x,i=r-s.y,n=Math.sqrt(t*t*i*i+c*c*e*e),y=Math.abs(t*c*e/n);s.x<a&&(y=-y);var h=Math.abs(t*c*i/n);return s.y<r&&(h=-h),{x:a+y,y:r+h}}o(ft,"intersectEllipse");var F=ft;function xt(l,t,c){return F(l,t,t,c)}o(xt,"intersectCircle");var Z=xt;function gt(l,t,c,s){var a,r,e,i,n,y,h,f,g,x,p,v,d,k,S;if(a=t.y-l.y,e=l.x-t.x,n=t.x*l.y-l.x*t.y,g=a*c.x+e*c.y+n,x=a*s.x+e*s.y+n,!(g!==0&&x!==0&&q(g,x))&&(r=s.y-c.y,i=c.x-s.x,y=s.x*c.y-c.x*s.y,h=r*l.x+i*l.y+y,f=r*t.x+i*t.y+y,!(h!==0&&f!==0&&q(h,f))&&(p=a*i-r*e,p!==0)))return v=Math.abs(p/2),d=e*y-i*n,k=d<0?(d-v)/p:(d+v)/p,d=r*n-a*y,S=d<0?(d-v)/p:(d+v)/p,{x:k,y:S}}o(gt,"intersectLine");function q(l,t){return l*t>0}o(q,"sameSign");var tt=gt;var rt=pt;function pt(l,t,c){var s=l.x,a=l.y,r=[],e=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY;typeof t.forEach=="function"?t.forEach(function(p){e=Math.min(e,p.x),i=Math.min(i,p.y)}):(e=Math.min(e,t.x),i=Math.min(i,t.y));for(var n=s-l.width/2-e,y=a-l.height/2-i,h=0;h<t.length;h++){var f=t[h],g=t[h<t.length-1?h+1:0],x=tt(l,c,{x:n+f.x,y:y+f.y},{x:n+g.x,y:y+g.y});x&&r.push(x)}return r.length?(r.length>1&&r.sort(function(p,v){var d=p.x-c.x,k=p.y-c.y,S=Math.sqrt(d*d+k*k),j=v.x-c.x,D=v.y-c.y,P=Math.sqrt(j*j+D*D);return S<P?-1:S===P?0:1}),r[0]):l}o(pt,"intersectPolygon");var ut=o((l,t)=>{var c=l.x,s=l.y,a=t.x-c,r=t.y-s,e=l.width/2,i=l.height/2,n,y;return Math.abs(r)*e>Math.abs(a)*i?(r<0&&(i=-i),n=r===0?0:i*a/r,y=i):(a<0&&(e=-e),n=e,y=a===0?0:e*r/a),{x:c+n,y:s+y}},"intersectRect"),et=ut;var u={node:Q,circle:Z,ellipse:F,polygon:rt,rect:et};var dt=o(async(l,t)=>{t.useHtmlLabels||T().flowchart.htmlLabels||(t.centerLabel=!0);let{shapeSvg:s,bbox:a,halfPadding:r}=await m(l,t,"node "+t.classes,!0);b.info("Classes = ",t.classes);let e=s.insert("rect",":first-child");return e.attr("rx",t.rx).attr("ry",t.ry).attr("x",-a.width/2-r).attr("y",-a.height/2-r).attr("width",a.width+t.padding).attr("height",a.height+t.padding),w(t,e),t.intersect=function(i){return u.rect(t,i)},s},"note"),st=dt;var at=o(l=>l?" "+l:"","formatClass"),I=o((l,t)=>`${t||"node default"}${at(l.classes)} ${at(l.class)}`,"getClassesFromNode"),it=o(async(l,t)=>{let{shapeSvg:c,bbox:s}=await m(l,t,I(t,void 0),!0),a=s.width+t.padding,r=s.height+t.padding,e=a+r,i=[{x:e/2,y:0},{x:e,y:-e/2},{x:e/2,y:-e},{x:0,y:-e/2}];b.info("Question main (Circle)");let n=M(c,e,e,i);return n.attr("style",t.style),w(t,n),t.intersect=function(y){return b.warn("Intersect called"),u.polygon(t,i,y)},c},"question"),wt=o((l,t)=>{let c=l.insert("g").attr("class","node default").attr("id",t.domId||t.id),s=28,a=[{x:0,y:s/2},{x:s/2,y:0},{x:0,y:-s/2},{x:-s/2,y:0}];return c.insert("polygon",":first-child").attr("points",a.map(function(e){return e.x+","+e.y}).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),t.width=28,t.height=28,t.intersect=function(e){return u.circle(t,14,e)},c},"choice"),bt=o(async(l,t)=>{let{shapeSvg:c,bbox:s}=await m(l,t,I(t,void 0),!0),a=4,r=s.height+t.padding,e=r/a,i=s.width+2*e+t.padding,n=[{x:e,y:0},{x:i-e,y:0},{x:i,y:-r/2},{x:i-e,y:-r},{x:e,y:-r},{x:0,y:-r/2}],y=M(c,i,r,n);return y.attr("style",t.style),w(t,y),t.intersect=function(h){return u.polygon(t,n,h)},c},"hexagon"),mt=o(async(l,t)=>{let{shapeSvg:c,bbox:s}=await m(l,t,void 0,!0),a=2,r=s.height+2*t.padding,e=r/a,i=s.width+2*e+t.padding,n=J(t.directions,s,t),y=M(c,i,r,n);return y.attr("style",t.style),w(t,y),t.intersect=function(h){return u.polygon(t,n,h)},c},"block_arrow"),vt=o(async(l,t)=>{let{shapeSvg:c,bbox:s}=await m(l,t,I(t,void 0),!0),a=s.width+t.padding,r=s.height+t.padding,e=[{x:-r/2,y:0},{x:a,y:0},{x:a,y:-r},{x:-r/2,y:-r},{x:0,y:-r/2}];return M(c,a,r,e).attr("style",t.style),t.width=a+r,t.height=r,t.intersect=function(n){return u.polygon(t,e,n)},c},"rect_left_inv_arrow"),St=o(async(l,t)=>{let{shapeSvg:c,bbox:s}=await m(l,t,I(t),!0),a=s.width+t.padding,r=s.height+t.padding,e=[{x:-2*r/6,y:0},{x:a-r/6,y:0},{x:a+2*r/6,y:-r},{x:r/6,y:-r}],i=M(c,a,r,e);return i.attr("style",t.style),w(t,i),t.intersect=function(n){return u.polygon(t,e,n)},c},"lean_right"),Bt=o(async(l,t)=>{let{shapeSvg:c,bbox:s}=await m(l,t,I(t,void 0),!0),a=s.width+t.padding,r=s.height+t.padding,e=[{x:2*r/6,y:0},{x:a+r/6,y:0},{x:a-2*r/6,y:-r},{x:-r/6,y:-r}],i=M(c,a,r,e);return i.attr("style",t.style),w(t,i),t.intersect=function(n){return u.polygon(t,e,n)},c},"lean_left"),Lt=o(async(l,t)=>{let{shapeSvg:c,bbox:s}=await m(l,t,I(t,void 0),!0),a=s.width+t.padding,r=s.height+t.padding,e=[{x:-2*r/6,y:0},{x:a+2*r/6,y:0},{x:a-r/6,y:-r},{x:r/6,y:-r}],i=M(c,a,r,e);return i.attr("style",t.style),w(t,i),t.intersect=function(n){return u.polygon(t,e,n)},c},"trapezoid"),Ct=o(async(l,t)=>{let{shapeSvg:c,bbox:s}=await m(l,t,I(t,void 0),!0),a=s.width+t.padding,r=s.height+t.padding,e=[{x:r/6,y:0},{x:a-r/6,y:0},{x:a+2*r/6,y:-r},{x:-2*r/6,y:-r}],i=M(c,a,r,e);return i.attr("style",t.style),w(t,i),t.intersect=function(n){return u.polygon(t,e,n)},c},"inv_trapezoid"),Tt=o(async(l,t)=>{let{shapeSvg:c,bbox:s}=await m(l,t,I(t,void 0),!0),a=s.width+t.padding,r=s.height+t.padding,e=[{x:0,y:0},{x:a+r/2,y:0},{x:a,y:-r/2},{x:a+r/2,y:-r},{x:0,y:-r}],i=M(c,a,r,e);return i.attr("style",t.style),w(t,i),t.intersect=function(n){return u.polygon(t,e,n)},c},"rect_right_inv_arrow"),kt=o(async(l,t)=>{let{shapeSvg:c,bbox:s}=await m(l,t,I(t,void 0),!0),a=s.width+t.padding,r=a/2,e=r/(2.5+a/50),i=s.height+e+t.padding,n="M 0,"+e+" a "+r+","+e+" 0,0,0 "+a+" 0 a "+r+","+e+" 0,0,0 "+-a+" 0 l 0,"+i+" a "+r+","+e+" 0,0,0 "+a+" 0 l 0,"+-i,y=c.attr("label-offset-y",e).insert("path",":first-child").attr("style",t.style).attr("d",n).attr("transform","translate("+-a/2+","+-(i/2+e)+")");return w(t,y),t.intersect=function(h){let f=u.rect(t,h),g=f.x-t.x;if(r!=0&&(Math.abs(g)<t.width/2||Math.abs(g)==t.width/2&&Math.abs(f.y-t.y)>t.height/2-e)){let x=e*e*(1-g*g/(r*r));x!=0&&(x=Math.sqrt(x)),x=e-x,h.y-t.y>0&&(x=-x),f.y+=x}return f},c},"cylinder"),Dt=o(async(l,t)=>{let{shapeSvg:c,bbox:s,halfPadding:a}=await m(l,t,"node "+t.classes+" "+t.class,!0),r=c.insert("rect",":first-child"),e=t.positioned?t.width:s.width+t.padding,i=t.positioned?t.height:s.height+t.padding,n=t.positioned?-e/2:-s.width/2-a,y=t.positioned?-i/2:-s.height/2-a;if(r.attr("class","basic label-container").attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",n).attr("y",y).attr("width",e).attr("height",i),t.props){let h=new Set(Object.keys(t.props));t.props.borders&&(U(r,t.props.borders,e,i),h.delete("borders")),h.forEach(f=>{b.warn(`Unknown node property ${f}`)})}return w(t,r),t.intersect=function(h){return u.rect(t,h)},c},"rect"),Et=o(async(l,t)=>{let{shapeSvg:c,bbox:s,halfPadding:a}=await m(l,t,"node "+t.classes,!0),r=c.insert("rect",":first-child"),e=t.positioned?t.width:s.width+t.padding,i=t.positioned?t.height:s.height+t.padding,n=t.positioned?-e/2:-s.width/2-a,y=t.positioned?-i/2:-s.height/2-a;if(r.attr("class","basic cluster composite label-container").attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",n).attr("y",y).attr("width",e).attr("height",i),t.props){let h=new Set(Object.keys(t.props));t.props.borders&&(U(r,t.props.borders,e,i),h.delete("borders")),h.forEach(f=>{b.warn(`Unknown node property ${f}`)})}return w(t,r),t.intersect=function(h){return u.rect(t,h)},c},"composite"),It=o(async(l,t)=>{let{shapeSvg:c}=await m(l,t,"label",!0);b.trace("Classes = ",t.class);let s=c.insert("rect",":first-child"),a=0,r=0;if(s.attr("width",a).attr("height",r),c.attr("class","label edgeLabel"),t.props){let e=new Set(Object.keys(t.props));t.props.borders&&(U(s,t.props.borders,a,r),e.delete("borders")),e.forEach(i=>{b.warn(`Unknown node property ${i}`)})}return w(t,s),t.intersect=function(e){return u.rect(t,e)},c},"labelRect");function U(l,t,c,s){let a=[],r=o(i=>{a.push(i,0)},"addBorder"),e=o(i=>{a.push(0,i)},"skipBorder");t.includes("t")?(b.debug("add top border"),r(c)):e(c),t.includes("r")?(b.debug("add right border"),r(s)):e(s),t.includes("b")?(b.debug("add bottom border"),r(c)):e(c),t.includes("l")?(b.debug("add left border"),r(s)):e(s),l.attr("stroke-dasharray",a.join(" "))}o(U,"applyNodePropertyBorders");var Nt=o((l,t)=>{let c;t.classes?c="node "+t.classes:c="node default";let s=l.insert("g").attr("class",c).attr("id",t.domId||t.id),a=s.insert("rect",":first-child"),r=s.insert("line"),e=s.insert("g").attr("class","label"),i=t.labelText.flat?t.labelText.flat():t.labelText,n="";typeof i=="object"?n=i[0]:n=i,b.info("Label text abc79",n,i,typeof i=="object");let y=e.node().appendChild(_(n,t.labelStyle,!0,!0)),h={width:0,height:0};if(N(T().flowchart.htmlLabels)){let v=y.children[0],d=B(y);h=v.getBoundingClientRect(),d.attr("width",h.width),d.attr("height",h.height)}b.info("Text 2",i);let f=i.slice(1,i.length),g=y.getBBox(),x=e.node().appendChild(_(f.join?f.join("<br/>"):f,t.labelStyle,!0,!0));if(N(T().flowchart.htmlLabels)){let v=x.children[0],d=B(x);h=v.getBoundingClientRect(),d.attr("width",h.width),d.attr("height",h.height)}let p=t.padding/2;return B(x).attr("transform","translate( "+(h.width>g.width?0:(g.width-h.width)/2)+", "+(g.height+p+5)+")"),B(y).attr("transform","translate( "+(h.width<g.width?0:-(g.width-h.width)/2)+", 0)"),h=e.node().getBBox(),e.attr("transform","translate("+-h.width/2+", "+(-h.height/2-p+3)+")"),a.attr("class","outer title-state").attr("x",-h.width/2-p).attr("y",-h.height/2-p).attr("width",h.width+t.padding).attr("height",h.height+t.padding),r.attr("class","divider").attr("x1",-h.width/2-p).attr("x2",h.width/2+p).attr("y1",-h.height/2-p+g.height+p).attr("y2",-h.height/2-p+g.height+p),w(t,a),t.intersect=function(v){return u.rect(t,v)},s},"rectWithTitle"),Mt=o(async(l,t)=>{let{shapeSvg:c,bbox:s}=await m(l,t,I(t,void 0),!0),a=s.height+t.padding,r=s.width+a/4+t.padding,e=c.insert("rect",":first-child").attr("style",t.style).attr("rx",a/2).attr("ry",a/2).attr("x",-r/2).attr("y",-a/2).attr("width",r).attr("height",a);return w(t,e),t.intersect=function(i){return u.rect(t,i)},c},"stadium"),jt=o(async(l,t)=>{let{shapeSvg:c,bbox:s,halfPadding:a}=await m(l,t,I(t,void 0),!0),r=c.insert("circle",":first-child");return r.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",s.width/2+a).attr("width",s.width+t.padding).attr("height",s.height+t.padding),b.info("Circle main"),w(t,r),t.intersect=function(e){return b.info("Circle intersect",t,s.width/2+a,e),u.circle(t,s.width/2+a,e)},c},"circle"),At=o(async(l,t)=>{let{shapeSvg:c,bbox:s,halfPadding:a}=await m(l,t,I(t,void 0),!0),r=5,e=c.insert("g",":first-child"),i=e.insert("circle"),n=e.insert("circle");return e.attr("class",t.class),i.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",s.width/2+a+r).attr("width",s.width+t.padding+r*2).attr("height",s.height+t.padding+r*2),n.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",s.width/2+a).attr("width",s.width+t.padding).attr("height",s.height+t.padding),b.info("DoubleCircle main"),w(t,i),t.intersect=function(y){return b.info("DoubleCircle intersect",t,s.width/2+a+r,y),u.circle(t,s.width/2+a+r,y)},c},"doublecircle"),_t=o(async(l,t)=>{let{shapeSvg:c,bbox:s}=await m(l,t,I(t,void 0),!0),a=s.width+t.padding,r=s.height+t.padding,e=[{x:0,y:0},{x:a,y:0},{x:a,y:-r},{x:0,y:-r},{x:0,y:0},{x:-8,y:0},{x:a+8,y:0},{x:a+8,y:-r},{x:-8,y:-r},{x:-8,y:0}],i=M(c,a,r,e);return i.attr("style",t.style),w(t,i),t.intersect=function(n){return u.polygon(t,e,n)},c},"subroutine"),Pt=o((l,t)=>{let c=l.insert("g").attr("class","node default").attr("id",t.domId||t.id),s=c.insert("circle",":first-child");return s.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),w(t,s),t.intersect=function(a){return u.circle(t,7,a)},c},"start"),ct=o((l,t,c)=>{let s=l.insert("g").attr("class","node default").attr("id",t.domId||t.id),a=70,r=10;c==="LR"&&(a=10,r=70);let e=s.append("rect").attr("x",-1*a/2).attr("y",-1*r/2).attr("width",a).attr("height",r).attr("class","fork-join");return w(t,e),t.height=t.height+t.padding/2,t.width=t.width+t.padding/2,t.intersect=function(i){return u.rect(t,i)},s},"forkJoin"),Ht=o((l,t)=>{let c=l.insert("g").attr("class","node default").attr("id",t.domId||t.id),s=c.insert("circle",":first-child"),a=c.insert("circle",":first-child");return a.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),s.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),w(t,a),t.intersect=function(r){return u.circle(t,7,r)},c},"end"),Rt=o((l,t)=>{let c=t.padding/2,s=4,a=8,r;t.classes?r="node "+t.classes:r="node default";let e=l.insert("g").attr("class",r).attr("id",t.domId||t.id),i=e.insert("rect",":first-child"),n=e.insert("line"),y=e.insert("line"),h=0,f=s,g=e.insert("g").attr("class","label"),x=0,p=t.classData.annotations?.[0],v=t.classData.annotations[0]?"\xAB"+t.classData.annotations[0]+"\xBB":"",d=g.node().appendChild(_(v,t.labelStyle,!0,!0)),k=d.getBBox();if(N(T().flowchart.htmlLabels)){let L=d.children[0],C=B(d);k=L.getBoundingClientRect(),C.attr("width",k.width),C.attr("height",k.height)}t.classData.annotations[0]&&(f+=k.height+s,h+=k.width);let S=t.classData.label;t.classData.type!==void 0&&t.classData.type!==""&&(T().flowchart.htmlLabels?S+="&lt;"+t.classData.type+"&gt;":S+="<"+t.classData.type+">");let j=g.node().appendChild(_(S,t.labelStyle,!0,!0));B(j).attr("class","classTitle");let D=j.getBBox();if(N(T().flowchart.htmlLabels)){let L=j.children[0],C=B(j);D=L.getBoundingClientRect(),C.attr("width",D.width),C.attr("height",D.height)}f+=D.height+s,D.width>h&&(h=D.width);let P=[];t.classData.members.forEach(L=>{let C=L.getDisplayDetails(),H=C.displayText;T().flowchart.htmlLabels&&(H=H.replace(/</g,"&lt;").replace(/>/g,"&gt;"));let A=g.node().appendChild(_(H,C.cssStyle?C.cssStyle:t.labelStyle,!0,!0)),E=A.getBBox();if(N(T().flowchart.htmlLabels)){let X=A.children[0],z=B(A);E=X.getBoundingClientRect(),z.attr("width",E.width),z.attr("height",E.height)}E.width>h&&(h=E.width),f+=E.height+s,P.push(A)}),f+=a;let W=[];if(t.classData.methods.forEach(L=>{let C=L.getDisplayDetails(),H=C.displayText;T().flowchart.htmlLabels&&(H=H.replace(/</g,"&lt;").replace(/>/g,"&gt;"));let A=g.node().appendChild(_(H,C.cssStyle?C.cssStyle:t.labelStyle,!0,!0)),E=A.getBBox();if(N(T().flowchart.htmlLabels)){let X=A.children[0],z=B(A);E=X.getBoundingClientRect(),z.attr("width",E.width),z.attr("height",E.height)}E.width>h&&(h=E.width),f+=E.height+s,W.push(A)}),f+=a,p){let L=(h-k.width)/2;B(d).attr("transform","translate( "+(-1*h/2+L)+", "+-1*f/2+")"),x=k.height+s}let $=(h-D.width)/2;return B(j).attr("transform","translate( "+(-1*h/2+$)+", "+(-1*f/2+x)+")"),x+=D.height+s,n.attr("class","divider").attr("x1",-h/2-c).attr("x2",h/2+c).attr("y1",-f/2-c+a+x).attr("y2",-f/2-c+a+x),x+=a,P.forEach(L=>{B(L).attr("transform","translate( "+-h/2+", "+(-1*f/2+x+a/2)+")");let C=L?.getBBox();x+=(C?.height??0)+s}),x+=a,y.attr("class","divider").attr("x1",-h/2-c).attr("x2",h/2+c).attr("y1",-f/2-c+a+x).attr("y2",-f/2-c+a+x),x+=a,W.forEach(L=>{B(L).attr("transform","translate( "+-h/2+", "+(-1*f/2+x)+")");let C=L?.getBBox();x+=(C?.height??0)+s}),i.attr("style",t.style).attr("class","outer title-state").attr("x",-h/2-c).attr("y",-(f/2)-c).attr("width",h+t.padding).attr("height",f+t.padding),w(t,i),t.intersect=function(L){return u.rect(t,L)},e},"class_box"),lt={rhombus:it,composite:Et,question:it,rect:Dt,labelRect:It,rectWithTitle:Nt,choice:wt,circle:jt,doublecircle:At,stadium:Mt,hexagon:bt,block_arrow:mt,rect_left_inv_arrow:vt,lean_right:St,lean_left:Bt,trapezoid:Lt,inv_trapezoid:Ct,rect_right_inv_arrow:Tt,cylinder:kt,start:Pt,end:Ht,note:st,subroutine:_t,fork:ct,join:ct,class_box:Rt},R={},Rr=o(async(l,t,c)=>{let s,a;if(t.link){let r;T().securityLevel==="sandbox"?r="_top":t.linkTarget&&(r=t.linkTarget||"_blank"),s=l.insert("svg:a").attr("xlink:href",t.link).attr("target",r),a=await lt[t.shape](s,t,c)}else a=await lt[t.shape](l,t,c),s=a;return t.tooltip&&a.attr("title",t.tooltip),t.class&&a.attr("class","node default "+t.class),R[t.id]=s,t.haveCallback&&R[t.id].attr("class",R[t.id].attr("class")+" clickable"),s},"insertNode"),zr=o((l,t)=>{R[t.id]=l},"setNodeElem"),Or=o(()=>{R={}},"clear"),$r=o(l=>{let t=R[l.id];b.trace("Transforming node",l.diff,l,"translate("+(l.x-l.width/2-5)+", "+l.width/2+")");let c=8,s=l.diff||0;return l.clusterNode?t.attr("transform","translate("+(l.x+s-l.width/2)+", "+(l.y-l.height/2-c)+")"):t.attr("transform","translate("+l.x+", "+l.y+")"),s},"positionNode");export{_ as a,et as b,w as c,Rr as d,zr as e,Or as f,$r as g};
