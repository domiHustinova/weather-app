(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{15:function(e,n,t){e.exports=t(25)},23:function(e,n,t){},24:function(e,n,t){e.exports=t.p+"static/media/background.351097f8.jpg"},25:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(11),i=t(3),c=t.n(i),l=t(5),u=t(4),s=t(2),d=t(1),h="https://api.openweathermap.org/data/2.5/",f="b873b3cd2a6fe46f2345df4722c65732",b=["Nede\u013ea","Pondelok","Utorok","Streda","\u0160tvrtok","Piatok","Sobota"],m=[{name:"Praha",code:"cz"},{name:"Barcelona",code:"es"},{name:"Bratislava",code:"sk"}],p=function(e){var n=new Date(1e3*e);return{weekDay:n.getDay(),day:n.getDate(),month:n.getMonth()+1}},g=function(e){var n=new Date(1e3*e);return{hours:("0"+n.getHours()).slice(-2),minutes:("0"+n.getMinutes()).slice(-2)}},w=function(e){var n=e.reduce((function(e,n){var t=n.date.day;return e[t]||(e[t]=[]),e[t].push(n),e}),{});return Object.keys(n).map((function(e){return n[e].reduce((function(e,n){return n.temp>e.temp?n:e}))})).slice(1,-1)},x=function(e,n){var t="",r=v[e].icon;return"d"===n.slice(-1)?t="day-":"n"===n.slice(-1)&&(t="night-"),e>699&&e<800||e>899&&e<1e3||(r=t+r),"".concat("wi wi-"+r)},v={200:{label:"thunderstorm with light rain",icon:"storm-showers"},201:{label:"thunderstorm with rain",icon:"storm-showers"},202:{label:"thunderstorm with heavy rain",icon:"storm-showers"},210:{label:"light thunderstorm",icon:"storm-showers"},211:{label:"thunderstorm",icon:"thunderstorm"},212:{label:"heavy thunderstorm",icon:"thunderstorm"},221:{label:"ragged thunderstorm",icon:"thunderstorm"},230:{label:"thunderstorm with light drizzle",icon:"storm-showers"},231:{label:"thunderstorm with drizzle",icon:"storm-showers"},232:{label:"thunderstorm with heavy drizzle",icon:"storm-showers"},300:{label:"light intensity drizzle",icon:"sprinkle"},301:{label:"drizzle",icon:"sprinkle"},302:{label:"heavy intensity drizzle",icon:"sprinkle"},310:{label:"light intensity drizzle rain",icon:"sprinkle"},311:{label:"drizzle rain",icon:"sprinkle"},312:{label:"heavy intensity drizzle rain",icon:"sprinkle"},313:{label:"shower rain and drizzle",icon:"sprinkle"},314:{label:"heavy shower rain and drizzle",icon:"sprinkle"},321:{label:"shower drizzle",icon:"sprinkle"},500:{label:"light rain",icon:"rain"},501:{label:"moderate rain",icon:"rain"},502:{label:"heavy intensity rain",icon:"rain"},503:{label:"very heavy rain",icon:"rain"},504:{label:"extreme rain",icon:"rain"},511:{label:"freezing rain",icon:"rain-mix"},520:{label:"light intensity shower rain",icon:"showers"},521:{label:"shower rain",icon:"showers"},522:{label:"heavy intensity shower rain",icon:"showers"},531:{label:"ragged shower rain",icon:"showers"},600:{label:"light snow",icon:"snow"},601:{label:"snow",icon:"snow"},602:{label:"heavy snow",icon:"snow"},611:{label:"sleet",icon:"sleet"},612:{label:"shower sleet",icon:"sleet"},615:{label:"light rain and snow",icon:"rain-mix"},616:{label:"rain and snow",icon:"rain-mix"},620:{label:"light shower snow",icon:"rain-mix"},621:{label:"shower snow",icon:"rain-mix"},622:{label:"heavy shower snow",icon:"rain-mix"},701:{label:"mist",icon:"sprinkle"},711:{label:"smoke",icon:"smoke"},721:{label:"haze",icon:"day-haze"},731:{label:"sand, dust whirls",icon:"cloudy-gusts"},741:{label:"fog",icon:"fog"},751:{label:"sand",icon:"cloudy-gusts"},761:{label:"dust",icon:"dust"},762:{label:"volcanic ash",icon:"smog"},771:{label:"squalls",icon:"day-windy"},781:{label:"tornado",icon:"tornado"},800:{label:"clear sky",icon:"sunny"},801:{label:"few clouds",icon:"cloudy"},802:{label:"scattered clouds",icon:"cloudy"},803:{label:"broken clouds",icon:"cloudy"},804:{label:"overcast clouds",icon:"cloudy"},900:{label:"tornado",icon:"tornado"},901:{label:"tropical storm",icon:"hurricane"},902:{label:"hurricane",icon:"hurricane"},903:{label:"cold",icon:"snowflake-cold"},904:{label:"hot",icon:"hot"},905:{label:"windy",icon:"windy"},906:{label:"hail",icon:"hail"},951:{label:"calm",icon:"sunny"},952:{label:"light breeze",icon:"cloudy-gusts"},953:{label:"gentle breeze",icon:"cloudy-gusts"},954:{label:"moderate breeze",icon:"cloudy-gusts"},955:{label:"fresh breeze",icon:"cloudy-gusts"},956:{label:"strong breeze",icon:"cloudy-gusts"},957:{label:"high wind, near gale",icon:"cloudy-gusts"},958:{label:"gale",icon:"cloudy-gusts"},959:{label:"severe gale",icon:"cloudy-gusts"},960:{label:"storm",icon:"thunderstorm"},961:{label:"violent storm",icon:"thunderstorm"},962:{label:"hurricane",icon:"cloudy-gusts"}},y=function(){var e=Object(l.a)(c.a.mark((function e(n){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(h,"weather?APPID=").concat(f,"&q=").concat(n.name,"&units=metric&lang=SK"),e.next=3,fetch(t);case 3:return e.next=5,e.sent.json();case 5:return r=e.sent,e.abrupt("return",{name:r.name,temp:Math.round(r.main.temp),description:r.weather[0].description,id:r.weather[0].id,icon:r.weather[0].icon,humidity:r.main.humidity,speed:Number.parseFloat(r.wind.speed).toFixed(1),sunrise:g(r.sys.sunrise),sunset:g(r.sys.sunset)});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(c.a.mark((function e(n){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(h,"forecast?APPID=").concat(f,"&q=").concat(n.name,"&units=metric&lang=SK"),e.next=3,fetch(t);case 3:return e.next=5,e.sent.json();case 5:return r=e.sent,e.abrupt("return",r.list.map((function(e){return{temp:Math.round(e.main.temp),date:p(e.dt),icon:x(e.weather[0].id,e.weather[0].icon)}})));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function E(){var e=Object(s.a)(["\n  flex: 1 1 auto;\n  padding: 10px;\n  font-family: Montserrat, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  background: ","\n    ",";\n  color: ",";\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n\n  &:hover,\n  &:focus,\n  &:active {\n    background: ","\n      ",";\n  }\n\n  &:first-child {\n    border-radius: 5px 0 0 5px;\n  }\n\n  &:not(:first-child) {\n    border-left: 1px solid ",";\n  }\n\n  &:last-child {\n    border-radius: 0 5px 5px 0;\n  }\n"]);return E=function(){return e},e}function z(){var e=Object(s.a)(["\n  width: 350px;\n  margin: 10px auto;\n  display: flex;\n  border-radius: 10px;\n  border: 5px solid ",";\n  box-shadow: 0 3px 15px ",";\n"]);return z=function(){return e},e}var O=d.c.div(z(),(function(e){return e.theme.quickOptionsBorder}),(function(e){return e.theme.quickOptionsShadow})),j=d.c.button(E(),(function(e){return e.theme.buttonBackground}),(function(e){return e.theme.buttonBackgroundGradientLight}),(function(e){return e.theme.buttonText}),(function(e){return e.theme.buttonBackground}),(function(e){return e.theme.buttonBackgroundGradientDark}),(function(e){return e.theme.buttonBorder})),B=function(e){var n=e.displayWeather,t=e.handleThemeChange,r=e.isDarkTheme;return a.a.createElement(O,null,a.a.createElement(j,null,a.a.createElement("i",{className:"fas fa-map-marker-alt"})),m.map((function(e){return a.a.createElement(j,{key:e.name,onClick:function(){return n(e)}},e.name)})),a.a.createElement(j,{onClick:t},a.a.createElement("i",{className:"fas ".concat(r?"fa-sun":"fa-moon")})))};t(23);function D(){var e=Object(s.a)(["\n  margin-top: 5px;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1;\n"]);return D=function(){return e},e}function S(){var e=Object(s.a)(["\n  font-size: 24px;\n"]);return S=function(){return e},e}function F(){var e=Object(s.a)(["\n  font-size: 64px;\n  font-weight: 800;\n  line-height: 1;\n"]);return F=function(){return e},e}function C(){var e=Object(s.a)(["\n  font-size: 18px;\n  text-align: center;\n  font-weight: 600;\n"]);return C=function(){return e},e}function M(){var e=Object(s.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 1;\n  text-align: center;\n  padding: 0 0 5px 0;\n  margin: 0 0 5px 0;\n"]);return M=function(){return e},e}function P(){var e=Object(s.a)(["\n  font-size: 64px;\n"]);return P=function(){return e},e}function W(){var e=Object(s.a)(["\n  flex: 0 0 50%;\n  text-align: center;\n"]);return W=function(){return e},e}function q(){var e=Object(s.a)(["\n  display: flex;\n  margin-top: 30px;\n"]);return q=function(){return e},e}function G(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n"]);return G=function(){return e},e}function N(){var e=Object(s.a)(["\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 1;\n  text-align: center;\n  margin: 0 0 20px 0;\n"]);return N=function(){return e},e}function T(){var e=Object(s.a)(["\n  padding: 20px;\n  background: ","\n    ",";\n  color: ",";\n"]);return T=function(){return e},e}var H=d.c.div(T(),(function(e){return e.theme.backgroundWeather}),(function(e){return e.theme.backgroundWeatherGradient}),(function(e){return e.theme.textWeather})),I=d.c.h2(N()),V=d.c.div(G()),A=d.c.div(q()),J=d.c.div(W()),K=Object(d.c)(J)(P()),L=d.c.h3(M()),U=d.c.div(C()),Z=d.c.span(F()),Q=Object(d.c)(Z)(S()),R=d.c.div(D()),X=function(e){var n=e.weatherData;return a.a.createElement(H,{id:"weather"},a.a.createElement(I,null,n.name),a.a.createElement(V,null,a.a.createElement(J,null,a.a.createElement(Z,null,n.temp),a.a.createElement(Q,null,"\xb0C"),a.a.createElement(R,null,n.description)),a.a.createElement(K,null,a.a.createElement("i",{className:x(n.id,n.icon)}))),a.a.createElement(A,null,a.a.createElement(J,null,a.a.createElement(L,null,"Vietor"),a.a.createElement(U,null,a.a.createElement("span",null,n.speed)," km/h")),a.a.createElement(J,null,a.a.createElement(L,null,"Vlhkos\u0165"),a.a.createElement(U,null,a.a.createElement("span",null,n.humidity)," %"))),a.a.createElement(A,null,a.a.createElement(J,null,a.a.createElement(L,null,"V\xfdchod slnka"),a.a.createElement(U,null,a.a.createElement("span",null,n.sunrise.hours,":",n.sunrise.minutes))),a.a.createElement(J,null,a.a.createElement(L,null,"Z\xe1pad slnka"),a.a.createElement(U,null,a.a.createElement("span",null,n.sunset.hours,":",n.sunset.minutes)))))};function Y(){var e=Object(s.a)(["\n  flex: 0 0 70px;\n  text-align: right;\n"]);return Y=function(){return e},e}function $(){var e=Object(s.a)(["\n  flex: 0 0 30px;\n  font-size: 20px;\n  text-align: center;\n  color: ",";\n"]);return $=function(){return e},e}function _(){var e=Object(s.a)(["\n  flex: 1;\n  font-size: 14px;\n"]);return _=function(){return e},e}function ee(){var e=Object(s.a)(["\n  border-top: 1px solid ",";\n  padding: 15px 30px;\n  display: flex;\n  align-items: center;\n  color: ",";\n\n  &:hover {\n    background-color: ",";\n  }\n"]);return ee=function(){return e},e}function ne(){var e=Object(s.a)(["\n  background-color: ",";\n"]);return ne=function(){return e},e}var te=d.c.div(ne(),(function(e){return e.theme.backgroundForecast})),re=d.c.div(ee(),(function(e){return e.theme.borderForecast}),(function(e){return e.theme.textForecast}),(function(e){return e.theme.backgroundForecastHover})),ae=d.c.div(_()),oe=d.c.div($(),(function(e){return e.theme.iconForecast})),ie=d.c.div(Y()),ce=function(e){var n=e.forecastData;return a.a.createElement(te,{id:"forecast"},n.map((function(e){return a.a.createElement(re,null,a.a.createElement(ae,null,b[e.date.weekDay]," ",e.date.day,".",e.date.month,"."),a.a.createElement(oe,null,a.a.createElement("i",{className:e.icon})),a.a.createElement(ie,null,Math.round(e.temp)," \xb0C"))})))},le=t(9),ue={backgroundForecast:"#fff",backgroundForecastHover:"#fff3d9",textForecast:"#666",borderForecast:"#e5e5e5",iconForecast:"#ff3e78",quickOptionsBorder:"rgba(0, 0, 0, 0.5)",quickOptionsShadow:"rgba(0, 0, 0, 0.7)",buttonBackground:"#ff3e78",buttonBackgroundGradientLight:"linear-gradient(to top, #ff3e78, #777bf0)",buttonBackgroundGradientDark:"linear-gradient(to top, #ff3e78, #453df8)",buttonText:"#fff",buttonBorder:"rgba(0, 0, 0, 0.5)",backgroundWeather:"#ff3e78",backgroundWeatherGradient:"linear-gradient(to bottom, #ff3e78, #ffbd2e)",textWeather:"#fff",weatherCardBorder:"rgba(0, 0, 0, 0.5)",weatherCardShadow:"rgba(0, 0, 0, 0.7)",text:"#fff"},se=Object(le.a)({},ue),de=Object(le.a)({},ue);function he(){var e=Object(s.a)(["\nhtml {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n*,\n::after,\n::before {\n  box-sizing: inherit;\n}\n\nbody {\n  min-width: 100vw;\n  min-height: 100vh;\n  font-family: Montserrat, sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n  padding: 1em;\n  background: url(",") top no-repeat;\n  background-size: cover;\n}\n\nh1 {\n  margin-bottom: 30px;\n  font-size: 48px;\n  text-align: center;\n  color: ",";\n}\n"]);return he=function(){return e},e}var fe=Object(d.b)(he(),t(24),(function(e){return e.theme.text}));function be(){var e=Object(s.a)(["\n  margin: 10px auto 30px auto;\n  width: 350px;\n  overflow: hidden;\n  border-radius: 10px;\n  border: 5px solid ",";\n  box-shadow: 0 3px 15px r ",";\n"]);return be=function(){return e},e}var me=d.c.div(be(),(function(e){return e.theme.weatherCardBorder}),(function(e){return e.theme.weatherCardShadow})),pe=function(){var e=Object(r.useState)(!1),n=Object(u.a)(e,2),t=n[0],o=n[1],i=Object(r.useState)(!1),s=Object(u.a)(i,2),h=s[0],f=s[1],b=Object(r.useState)(!1),m=Object(u.a)(b,2),p=m[0],g=m[1],x=Object(r.useState)({}),v=Object(u.a)(x,2),E=v[0],z=v[1],O=Object(r.useState)([]),j=Object(u.a)(O,2),D=j[0],S=j[1],F=function(){var e=Object(l.a)(c.a.mark((function e(n){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),g(!0),e.next=4,y(n);case 4:return t=e.sent,e.next=7,k(n);case 7:r=e.sent,z(t),S(w(r)),f(!1);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return a.a.createElement(d.a,{theme:t?de:se},a.a.createElement(a.a.Fragment,null,a.a.createElement(fe,null),a.a.createElement("h1",null,"Po\u010dasie"),a.a.createElement(B,{displayWeather:F,handleThemeChange:function(){o(!t)},isDarkTheme:t}),!h&&p&&a.a.createElement(me,null,a.a.createElement(X,{weatherData:E}),a.a.createElement(ce,{forecastData:D}))))};Object(o.render)(a.a.createElement(a.a.StrictMode,null,a.a.createElement(pe,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e5453305.chunk.js.map