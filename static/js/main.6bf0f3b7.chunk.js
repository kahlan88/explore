(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,e,n){t.exports=n(26)},22:function(t,e,n){},23:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(14),i=n.n(r),c=(n(22),n(7)),s=n(8),l=n(11),u=n(9),d=n(12),m=n(29),p=n(28),h=function(){navigator.geolocation?console.log("Geolocation is supported!"):console.log("Geolocation is not supported for this Browser/OS."),navigator.geolocation.watchPosition(function(t){document.getElementById("currentLat").innerHTML=t.coords.latitude,document.getElementById("currentLon").innerHTML=t.coords.longitude})},g=(n(23),function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).state={lat:50.94544,lng:-1.42896,zoom:13},t}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=[this.state.lat,this.state.lng];return h(),a.a.createElement("div",{className:"Map"},a.a.createElement("div",{id:"startLat"}),a.a.createElement("div",{id:"startLon"}),a.a.createElement(m.a,{center:t,zoom:this.state.zoom},a.a.createElement(p.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"})))}}]),e}(o.Component)),f=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement(g,{className:"App"})}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.6bf0f3b7.chunk.js.map