(function(){"use strict";var t={353:function(t,e,a){var s=a(144),r=a(81),i=a.n(r),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("HeaderMenu")],1)},o=[],l=function(){var t=this,e=t._self._c;return e("div",[e("div",{attrs:{id:"header"}},[e("p",{attrs:{id:"bio"}},[e("span",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#header",expression:"'#header'"}],attrs:{id:"home"}},[t._v("James Tadd Adcox is a writer and software developer living in Pittsburgh.")])]),e("div",{staticClass:"menu"},[e("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#writing",expression:"'#writing'"}]},[t._v("Writing")]),t._v(" | "),e("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#code",expression:"'#code'"}]},[t._v("Code")]),t._v(" | "),e("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}]},[t._v("Contact")])]),e("hr")]),e("MainText")],1)},c=[],u=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"main"}},[e("img",{attrs:{id:"splash",src:a(557),alt:"manipulated image"}}),e("div",{staticClass:"spacer"}),e("div",{staticClass:"content",attrs:{id:"writing"}},[e("WritingSection")],1),e("div",{staticClass:"spacer"}),e("div",{staticClass:"content",attrs:{id:"code"}},[e("CodeSection")],1),e("div",{staticClass:"spacer"}),e("div",{staticClass:"content",attrs:{id:"contact"}},[e("ContactSection")],1),e("div",{staticClass:"spacer"}),t._m(0)])},p=[function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"secret"}},[e("p")])}],h=function(){var t=this;t._self._c;return t._m(0)},d=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[e("a",{attrs:{href:"https://github.com/jamestaddadcox/ConwaysZombies",target:"_blank"}},[t._v("Conway's Zombies")])]),e("p",[t._v("An implementation of "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Conways_Game_of_Life",target:"_blank"}},[t._v("Conway's Game of Life")]),t._v(" in Java, with zombies. Inspired by the 2023 "),e("a",{attrs:{href:"https://www.coderetreat.org/",target:"_blank"}},[t._v("Global Day of Coderetreat")]),t._v(", hosted in Pittsburgh by "),e("a",{attrs:{href:"https://codeandsupply.co/",target:"_blank"}},[t._v("Code & Supply")]),t._v(".")]),e("h1",[e("a",{attrs:{href:"https://github.com/jamestaddadcox/BulletHeck",target:"_blank"}},[t._v("Bullet Heck")])]),e("p",[t._v("A single-screen bullet-hell style game in Python, in which you try to avoid the—astroids? enemy ships? missiles? coming your way.")]),e("p",[t._v("Programmed in Python using Pygame.")]),e("img",{attrs:{src:a(469),alt:"Screenshot from Bullet Heck"}}),e("h1",[e("a",{attrs:{href:"https://github.com/jamestaddadcox/CatGame",target:"_blank"}},[t._v("Cat Game")])]),e("p",[t._v("A small console game in C# in which you play a cat, doing cat things. Sneak past the terrible human! Steal the food!")]),e("img",{attrs:{src:a(878),alt:"Screenshot from Cat Game"}}),e("h1",[t._v("This Site")]),e("p",[t._v("This site is built in Vue.js and hosted on GitHub Pages")])])}],v={},_=v,f=a(1),m=(0,f.Z)(_,h,d,!1,null,"6240220e",null),b=m.exports,g=function(){var t=this;t._self._c;return t._m(0)},w=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Hello")]),e("p",[e("a",{staticClass:"first",attrs:{href:"mailto:jamestaddadcox@gmail.com"}},[t._v("email ")]),t._v(" | "),e("a",{staticClass:"next",attrs:{href:"https://github.com/jamestaddadcox",target:"_blank"}},[t._v("github ")]),t._v(" | "),e("a",{staticClass:"next",attrs:{href:"https://www.linkedin.com/in/james-tadd-adcox/",target:"_blank"}},[t._v("linkedin")])])])}],y={},C=y,k=(0,f.Z)(C,g,w,!1,null,"79c3fa54",null),x=k.exports,S=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v(" Books ")]),t._l(t.books,(function(a){return e("p",{key:a.title},[""!==a.url?e("span",[e("a",{attrs:{href:a.url,target:"_blank"}},[e("span",{staticClass:"title"},[t._v(t._s(a.title))]),t._v(", "+t._s(a.year))])]):e("span",[e("span",{staticClass:"title"},[t._v(t._s(a.title))]),t._v(", "+t._s(a.year)+" ")])])})),e("h1",[t._v(" Selected Fiction ")]),t._l(t.fictions,(function(a){return e("p",{key:a.title},[""!==a.url?e("span",[e("a",{attrs:{href:a.url,target:"_blank"}},[t._v("“"+t._s(a.title)+",” "),e("span",{staticClass:"title"},[t._v(t._s(a.publisher))]),t._v(", "+t._s(a.year))])]):e("span",[t._v(" “"+t._s(a.title)+",” "),e("span",{staticClass:"title"},[t._v(t._s(a.publisher))]),t._v(", "+t._s(a.year)+" ")])])})),e("h1",[t._v(" Reviews ")]),t._l(t.reviews,(function(a){return e("p",{key:a.title},[""!==a.url?e("span",[e("a",{attrs:{href:a.url,target:"_blank"}},[e("span",{staticClass:"title"},[t._v(t._s(a.title))]),t._v(" by "+t._s(a.author)+", "),e("span",{staticClass:"title"},[t._v(t._s(a.publisher))]),t._v(", "+t._s(a.year))])]):e("span",[e("span",{staticClass:"title"},[t._v(t._s(a.title))]),t._v(" by "+t._s(a.author)+", "),e("span",{staticClass:"title"},[t._v(t._s(a.publisher))]),t._v(", "+t._s(a.year)+" ")])])}))],2)},j=[],P={data(){return{books:[{title:"Denmark: Variations",publisher:"Hem Press",year:"2023",url:"https://www.hempressbooks.com/shop/p/denmark-variations"},{title:"Repetition",publisher:"Cobalt Press",year:"2016",url:"https://www.cobaltreview.com/product/adcox-repetition/"},{title:"Does Not Love",publisher:"Curbside Splendor",year:"2014",url:"https://www.amazon.com/Does-Love-James-Tadd-Adcox/dp/1940430232/"},{title:"Map of the System of Human Knowledge",publisher:"Tiny Hardcore Press",year:"2012",url:"https://www.amazon.com/Map-System-Human-Knowledge/dp/0998070165/"}],fictions:[{title:"The Stage Name",publisher:"X-R-A-Y",year:"forthcoming",url:""},{title:"A Memory",publisher:"ergot.",year:"2023",url:"https://www.ergot.press/authors/James_Tadd_Adcox/A_Memory"},{title:"The Darkness Retreat",publisher:"Propagule",year:"2023",url:"https://www.propagule.co/fiction/the-darkness-retreat"},{title:"Three Stories: Doubt, City of the Dead, The Distant Friend",publisher:"3:AM",year:"2023",url:"https://www.3ammagazine.com/3am/three-stories-5/"},{title:"'This Man Does Not Exist'",publisher:"Gigantic Sequins",year:"2023",url:"https://gigantic-sequins.square.site/product/GSissue14/40"}],reviews:[{title:"Sister Séance",author:"Aimee Parkison",publisher:"American Book Review",year:"2023",url:"https://muse.jhu.edu/pub/17/article/902833"},{title:"Sprawl",author:"Danielle Dutton",publisher:"Triangle House",year:"2020",url:"https://www.triangle.house/blog/revisit-james-tadd-adcox-on-sprawl"}]}}},T=P,A=(0,f.Z)(T,S,j,!1,null,null,null),H=A.exports,D={components:{WritingSection:H,CodeSection:b,ContactSection:x}},M=D,O=(0,f.Z)(M,u,p,!1,null,null,null),Z=O.exports,G={components:{MainText:Z}},N=G,B=(0,f.Z)(N,l,c,!1,null,"012291c1",null),R=B.exports,z={name:"App",components:{HeaderMenu:R}},J=z,L=(0,f.Z)(J,n,o,!1,null,null,null),q=L.exports;s.ZP.config.productionTip=!1,s.ZP.use(i()),new s.ZP({render:t=>t(q)}).$mount("#app")},878:function(t,e,a){t.exports=a.p+"img/CatGameScreenshot.a4a75386.jpg"},469:function(t,e,a){t.exports=a.p+"img/bulletHeckScreenshot2.f6fb2a93.jpg"},557:function(t,e,a){t.exports=a.p+"img/sn.2adc0e57.jpg"}},e={};function a(s){var r=e[s];if(void 0!==r)return r.exports;var i=e[s]={exports:{}};return t[s].call(i.exports,i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,s,r,i){if(!s){var n=1/0;for(u=0;u<t.length;u++){s=t[u][0],r=t[u][1],i=t[u][2];for(var o=!0,l=0;l<s.length;l++)(!1&i||n>=i)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(o=!1,i<n&&(n=i));if(o){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[s,r,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/jamestaddadcox.github.io/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,i,n=s[0],o=s[1],l=s[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(l)var u=l(a)}for(e&&e(s);c<n.length;c++)i=n[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(u)},s=self["webpackChunkinauthenticity"]=self["webpackChunkinauthenticity"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(353)}));s=a.O(s)})();
//# sourceMappingURL=app.d8ee1f7b.js.map