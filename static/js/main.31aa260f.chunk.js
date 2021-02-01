(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{16:function(e){e.exports=JSON.parse('{"title":"Weather","weather.wind":"Wind","weather.humidity":"Humidity","weather.sunrise":"Sunrise","weather.sunset":"Sunset","quick_options.city.prague":"Prague","quick_options.city.barcelona":"Barcelona","quick_options.city.paris":"Paris","week_day.monday":"Monday","week_day.tuesday":"Tuesday","week_day.wednesday":"Wednesday","week_day.thursday":"Thursday","week_day.friday":"Friday","week_day.saturday":"Saturday","week_day.sunday":"Sunday"}')},17:function(e){e.exports=JSON.parse('{"title":"Po\u010dasie","weather.wind":"Vietor","weather.humidity":"Vlhkos\u0165","weather.sunrise":"V\xfdchod slnka","weather.sunset":"Z\xe1pad slnka","quick_options.city.prague":"Praha","quick_options.city.barcelona":"Barcelona","quick_options.city.paris":"Par\xed\u017e","week_day.monday":"Pondelok","week_day.tuesday":"Utorok","week_day.wednesday":"Streda","week_day.thursday":"\u0160tvrtok","week_day.friday":"Piatok","week_day.saturday":"Sobota","week_day.sunday":"Nede\u013ea"}')},24:function(e,n,t){e.exports=t(39)},37:function(e,n,t){},38:function(e,n,t){e.exports=t.p+"static/media/background.351097f8.jpg"},39:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(15),o=t(11),c=t(6),l={en:{translation:t(16)},sk:{translation:t(17)}};o.a.use(c.e).init({resources:l,lng:"en",fallbackLng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});o.a;var u=t(3),s=t.n(u),d=t(5),h=t(4),f=t(2),b=t(1),m=t(40),p="https://api.openweathermap.org/data/2.5/",w="b873b3cd2a6fe46f2345df4722c65732",y=["week_day.sunday","week_day.monday","week_day.tuesday","week_day.wednesday","week_day.thursday","week_day.friday","week_day.saturday"],g=[{title:"quick_options.city.prague",value:"Prague",code:"cz"},{title:"quick_options.city.barcelona",value:"Barcelona",code:"es"},{title:"quick_options.city.paris",value:"Paris",code:"fr"}],k=function(e){var n=new Date(1e3*e);return{weekDay:n.getDay(),day:n.getDate(),month:n.getMonth()+1}},x=function(e){var n=new Date(1e3*e);return{hours:("0"+n.getHours()).slice(-2),minutes:("0"+n.getMinutes()).slice(-2)}},v=function(e){var n=e.reduce((function(e,n){var t=n.date.day;return e[t]||(e[t]=[]),e[t].push(n),e}),{});return Object.keys(n).map((function(e){return n[e].reduce((function(e,n){return n.temp>e.temp?n:e}))})).slice(1,-1)},E=function(e,n){var t="",r=O[e].icon;return"d"===n.slice(-1)?t="day-":"n"===n.slice(-1)&&(t="night-"),e>699&&e<800||e>899&&e<1e3||(r=t+r),"".concat("wi wi-"+r)},O={200:{label:"thunderstorm with light rain",icon:"storm-showers"},201:{label:"thunderstorm with rain",icon:"storm-showers"},202:{label:"thunderstorm with heavy rain",icon:"storm-showers"},210:{label:"light thunderstorm",icon:"storm-showers"},211:{label:"thunderstorm",icon:"thunderstorm"},212:{label:"heavy thunderstorm",icon:"thunderstorm"},221:{label:"ragged thunderstorm",icon:"thunderstorm"},230:{label:"thunderstorm with light drizzle",icon:"storm-showers"},231:{label:"thunderstorm with drizzle",icon:"storm-showers"},232:{label:"thunderstorm with heavy drizzle",icon:"storm-showers"},300:{label:"light intensity drizzle",icon:"sprinkle"},301:{label:"drizzle",icon:"sprinkle"},302:{label:"heavy intensity drizzle",icon:"sprinkle"},310:{label:"light intensity drizzle rain",icon:"sprinkle"},311:{label:"drizzle rain",icon:"sprinkle"},312:{label:"heavy intensity drizzle rain",icon:"sprinkle"},313:{label:"shower rain and drizzle",icon:"sprinkle"},314:{label:"heavy shower rain and drizzle",icon:"sprinkle"},321:{label:"shower drizzle",icon:"sprinkle"},500:{label:"light rain",icon:"rain"},501:{label:"moderate rain",icon:"rain"},502:{label:"heavy intensity rain",icon:"rain"},503:{label:"very heavy rain",icon:"rain"},504:{label:"extreme rain",icon:"rain"},511:{label:"freezing rain",icon:"rain-mix"},520:{label:"light intensity shower rain",icon:"showers"},521:{label:"shower rain",icon:"showers"},522:{label:"heavy intensity shower rain",icon:"showers"},531:{label:"ragged shower rain",icon:"showers"},600:{label:"light snow",icon:"snow"},601:{label:"snow",icon:"snow"},602:{label:"heavy snow",icon:"snow"},611:{label:"sleet",icon:"sleet"},612:{label:"shower sleet",icon:"sleet"},615:{label:"light rain and snow",icon:"rain-mix"},616:{label:"rain and snow",icon:"rain-mix"},620:{label:"light shower snow",icon:"rain-mix"},621:{label:"shower snow",icon:"rain-mix"},622:{label:"heavy shower snow",icon:"rain-mix"},701:{label:"mist",icon:"sprinkle"},711:{label:"smoke",icon:"smoke"},721:{label:"haze",icon:"day-haze"},731:{label:"sand, dust whirls",icon:"cloudy-gusts"},741:{label:"fog",icon:"fog"},751:{label:"sand",icon:"cloudy-gusts"},761:{label:"dust",icon:"dust"},762:{label:"volcanic ash",icon:"smog"},771:{label:"squalls",icon:"day-windy"},781:{label:"tornado",icon:"tornado"},800:{label:"clear sky",icon:"sunny"},801:{label:"few clouds",icon:"cloudy"},802:{label:"scattered clouds",icon:"cloudy"},803:{label:"broken clouds",icon:"cloudy"},804:{label:"overcast clouds",icon:"cloudy"},900:{label:"tornado",icon:"tornado"},901:{label:"tropical storm",icon:"hurricane"},902:{label:"hurricane",icon:"hurricane"},903:{label:"cold",icon:"snowflake-cold"},904:{label:"hot",icon:"hot"},905:{label:"windy",icon:"windy"},906:{label:"hail",icon:"hail"},951:{label:"calm",icon:"sunny"},952:{label:"light breeze",icon:"cloudy-gusts"},953:{label:"gentle breeze",icon:"cloudy-gusts"},954:{label:"moderate breeze",icon:"cloudy-gusts"},955:{label:"fresh breeze",icon:"cloudy-gusts"},956:{label:"strong breeze",icon:"cloudy-gusts"},957:{label:"high wind, near gale",icon:"cloudy-gusts"},958:{label:"gale",icon:"cloudy-gusts"},959:{label:"severe gale",icon:"cloudy-gusts"},960:{label:"storm",icon:"thunderstorm"},961:{label:"violent storm",icon:"thunderstorm"},962:{label:"hurricane",icon:"cloudy-gusts"}},z=function(){var e=Object(d.a)(s.a.mark((function e(n){var t,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(p,"weather?APPID=").concat(w,"&q=").concat(n.value,"&units=metric&lang=EN"),e.next=3,fetch(t);case 3:return e.next=5,e.sent.json();case 5:return r=e.sent,e.abrupt("return",{name:r.name,temp:Math.round(r.main.temp),description:r.weather[0].description,id:r.weather[0].id,icon:r.weather[0].icon,humidity:r.main.humidity,speed:Number.parseFloat(r.wind.speed).toFixed(1),sunrise:x(r.sys.sunrise),sunset:x(r.sys.sunset)});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),j=function(){var e=Object(d.a)(s.a.mark((function e(n){var t,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(p,"forecast?APPID=").concat(w,"&q=").concat(n.value,"&units=metric&lang=EN"),e.next=3,fetch(t);case 3:return e.next=5,e.sent.json();case 5:return r=e.sent,e.abrupt("return",r.list.map((function(e){return{temp:Math.round(e.main.temp),date:k(e.dt),icon:E(e.weather[0].id,e.weather[0].icon)}})));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function _(){var e=Object(f.a)(["\n  flex: 1 1 auto;\n  padding: 10px;\n  font-family: Montserrat, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  background: ","\n    ",";\n  color: ",";\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n\n  &:hover,\n  &:focus,\n  &:active {\n    background: ","\n      ",";\n  }\n\n  &:first-child {\n    border-radius: 5px 0 0 5px;\n  }\n\n  &:not(:first-child) {\n    border-left: 1px solid ",";\n  }\n\n  &:last-child {\n    border-radius: 0 5px 5px 0;\n  }\n"]);return _=function(){return e},e}function S(){var e=Object(f.a)(["\n  width: 350px;\n  margin: 10px auto;\n  display: flex;\n  border-radius: 10px;\n  border: 5px solid ",";\n  box-shadow: 0 3px 15px ",";\n"]);return S=function(){return e},e}var B=b.c.div(S(),(function(e){return e.theme.quickOptionsBorder}),(function(e){return e.theme.quickOptionsShadow})),q=b.c.button(_(),(function(e){return e.theme.buttonBackground}),(function(e){return e.theme.buttonBackgroundGradientLight}),(function(e){return e.theme.buttonText}),(function(e){return e.theme.buttonBackground}),(function(e){return e.theme.buttonBackgroundGradientDark}),(function(e){return e.theme.buttonBorder})),D=function(e){var n=e.displayWeather,t=e.handleThemeChange,r=e.isDarkTheme,i=Object(m.a)().t;return a.a.createElement(B,null,a.a.createElement(q,null,a.a.createElement("i",{className:"fas fa-map-marker-alt"})),g.map((function(e){return a.a.createElement(q,{key:i(e.name),onClick:function(){return n(e)}},i(e.title))})),a.a.createElement(q,{onClick:t},a.a.createElement("i",{className:"fas ".concat(r?"fa-sun":"fa-moon")})))};t(37);function F(){var e=Object(f.a)(["\n  margin-top: 5px;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1;\n"]);return F=function(){return e},e}function P(){var e=Object(f.a)(["\n  font-size: 24px;\n"]);return P=function(){return e},e}function W(){var e=Object(f.a)(["\n  font-size: 64px;\n  font-weight: 800;\n  line-height: 1;\n"]);return W=function(){return e},e}function C(){var e=Object(f.a)(["\n  font-size: 18px;\n  text-align: center;\n  font-weight: 600;\n"]);return C=function(){return e},e}function N(){var e=Object(f.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 1;\n  text-align: center;\n  padding: 0 0 5px 0;\n  margin: 0 0 5px 0;\n"]);return N=function(){return e},e}function M(){var e=Object(f.a)(["\n  font-size: 64px;\n"]);return M=function(){return e},e}function T(){var e=Object(f.a)(["\n  flex: 0 0 50%;\n  text-align: center;\n"]);return T=function(){return e},e}function G(){var e=Object(f.a)(["\n  display: flex;\n  margin-top: 30px;\n"]);return G=function(){return e},e}function H(){var e=Object(f.a)(["\n  display: flex;\n  align-items: center;\n"]);return H=function(){return e},e}function J(){var e=Object(f.a)(["\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 1;\n  text-align: center;\n  margin: 0 0 20px 0;\n"]);return J=function(){return e},e}function V(){var e=Object(f.a)(["\n  padding: 20px;\n  background: ","\n    ",";\n  color: ",";\n"]);return V=function(){return e},e}var I=b.c.div(V(),(function(e){return e.theme.backgroundWeather}),(function(e){return e.theme.backgroundWeatherGradient}),(function(e){return e.theme.textWeather})),L=b.c.h2(J()),A=b.c.div(H()),U=b.c.div(G()),Z=b.c.div(T()),K=Object(b.c)(Z)(M()),Q=b.c.h3(N()),R=b.c.div(C()),X=b.c.span(W()),Y=Object(b.c)(X)(P()),$=b.c.div(F()),ee=function(e){var n=e.weatherData,t=Object(m.a)().t;return a.a.createElement(I,{id:"weather"},a.a.createElement(L,null,n.name),a.a.createElement(A,null,a.a.createElement(Z,null,a.a.createElement(X,null,n.temp),a.a.createElement(Y,null,"\xb0C"),a.a.createElement($,null,n.description)),a.a.createElement(K,null,a.a.createElement("i",{className:E(n.id,n.icon)}))),a.a.createElement(U,null,a.a.createElement(Z,null,a.a.createElement(Q,null,t("weather.wind")),a.a.createElement(R,null,a.a.createElement("span",null,n.speed)," km/h")),a.a.createElement(Z,null,a.a.createElement(Q,null,t("weather.humidity")),a.a.createElement(R,null,a.a.createElement("span",null,n.humidity)," %"))),a.a.createElement(U,null,a.a.createElement(Z,null,a.a.createElement(Q,null,t("weather.sunrise")),a.a.createElement(R,null,a.a.createElement("span",null,n.sunrise.hours,":",n.sunrise.minutes))),a.a.createElement(Z,null,a.a.createElement(Q,null,t("weather.sunset")),a.a.createElement(R,null,a.a.createElement("span",null,n.sunset.hours,":",n.sunset.minutes)))))};function ne(){var e=Object(f.a)(["\n  flex: 0 0 70px;\n  text-align: right;\n"]);return ne=function(){return e},e}function te(){var e=Object(f.a)(["\n  flex: 0 0 30px;\n  font-size: 20px;\n  text-align: center;\n  color: ",";\n"]);return te=function(){return e},e}function re(){var e=Object(f.a)(["\n  flex: 1;\n  font-size: 14px;\n"]);return re=function(){return e},e}function ae(){var e=Object(f.a)(["\n  border-top: 1px solid ",";\n  padding: 15px 30px;\n  display: flex;\n  align-items: center;\n  color: ",";\n\n  &:hover {\n    background-color: ",";\n  }\n"]);return ae=function(){return e},e}function ie(){var e=Object(f.a)(["\n  background-color: ",";\n"]);return ie=function(){return e},e}var oe=b.c.div(ie(),(function(e){return e.theme.backgroundForecast})),ce=b.c.div(ae(),(function(e){return e.theme.borderForecast}),(function(e){return e.theme.textForecast}),(function(e){return e.theme.backgroundForecastHover})),le=b.c.div(re()),ue=b.c.div(te(),(function(e){return e.theme.iconForecast})),se=b.c.div(ne()),de=function(e){var n=e.forecastData,t=Object(m.a)().t;return a.a.createElement(oe,{id:"forecast"},n.map((function(e){return a.a.createElement(ce,null,a.a.createElement(le,null,t(y[e.date.weekDay])," ",e.date.day,".",e.date.month,"."),a.a.createElement(ue,null,a.a.createElement("i",{className:e.icon})),a.a.createElement(se,null,Math.round(e.temp)," \xb0C"))})))},he=t(13),fe={backgroundForecast:"#fff",backgroundForecastHover:"#fff3d9",textForecast:"#666",borderForecast:"#e5e5e5",iconForecast:"#ff3e78",quickOptionsBorder:"rgba(0, 0, 0, 0.5)",quickOptionsShadow:"rgba(0, 0, 0, 0.7)",buttonBackground:"#ff3e78",buttonBackgroundGradientLight:"linear-gradient(to top, #ff3e78, #777bf0)",buttonBackgroundGradientDark:"linear-gradient(to top, #ff3e78, #453df8)",buttonText:"#fff",buttonBorder:"rgba(0, 0, 0, 0.5)",backgroundWeather:"#ff3e78",backgroundWeatherGradient:"linear-gradient(to bottom, #ff3e78, #ffbd2e)",textWeather:"#fff",weatherCardBorder:"rgba(0, 0, 0, 0.5)",weatherCardShadow:"rgba(0, 0, 0, 0.7)",text:"#fff"},be=Object(he.a)({},fe),me=Object(he.a)({},fe);function pe(){var e=Object(f.a)(["\nhtml {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n*,\n::after,\n::before {\n  box-sizing: inherit;\n}\n\nbody {\n  min-width: 100vw;\n  min-height: 100vh;\n  font-family: Montserrat, sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n  padding: 1em;\n  background: url(",") top no-repeat;\n  background-size: cover;\n}\n\nh1 {\n  margin-bottom: 30px;\n  font-size: 48px;\n  text-align: center;\n  color: ",";\n}\n"]);return pe=function(){return e},e}var we=Object(b.b)(pe(),t(38),(function(e){return e.theme.text}));function ye(){var e=Object(f.a)(["\n  margin: 10px auto 30px auto;\n  width: 350px;\n  overflow: hidden;\n  border-radius: 10px;\n  border: 5px solid ",";\n  box-shadow: 0 3px 15px r ",";\n"]);return ye=function(){return e},e}var ge=b.c.div(ye(),(function(e){return e.theme.weatherCardBorder}),(function(e){return e.theme.weatherCardShadow})),ke=function(){var e=Object(m.a)().t,n=Object(r.useState)(!1),t=Object(h.a)(n,2),i=t[0],o=t[1],c=Object(r.useState)(!1),l=Object(h.a)(c,2),u=l[0],f=l[1],p=Object(r.useState)(!1),w=Object(h.a)(p,2),y=w[0],g=w[1],k=Object(r.useState)({}),x=Object(h.a)(k,2),E=x[0],O=x[1],_=Object(r.useState)([]),S=Object(h.a)(_,2),B=S[0],q=S[1],F=function(){var e=Object(d.a)(s.a.mark((function e(n){var t,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),g(!0),e.next=4,z(n);case 4:return t=e.sent,e.next=7,j(n);case 7:r=e.sent,O(t),q(v(r)),f(!1);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return a.a.createElement(b.a,{theme:i?me:be},a.a.createElement(a.a.Fragment,null,a.a.createElement(we,null),a.a.createElement("h1",null,e("title")),a.a.createElement(D,{displayWeather:F,handleThemeChange:function(){o(!i)},isDarkTheme:i}),!u&&y&&a.a.createElement(ge,null,a.a.createElement(ee,{weatherData:E}),a.a.createElement(de,{forecastData:B}))))};Object(i.render)(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ke,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.31aa260f.chunk.js.map