(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{204:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.integerToWord=t.SINGLE_DIGIT=void 0;const r=n(205);t.SINGLE_DIGIT=["សូន្យ","មួយ","ពីរ","បី","បួន","ប្រាំ","ប្រាំមួយ","ប្រាំពីរ","ប្រាំបី","ប្រាំបួន"];const o=["","ដប់","ម្ភៃ","សាមសិប","សែសិប","ហាសិប","ហុកសិប","ចិតសិប","ប៉ែតសិប","កៅសិប"],c="រយ",l="ពាន់",d="ម៉ឺន",f="សែន",m="លាន",v="ប៊ីលាន",h="ទ្រីលាន",_=1000000000000000n;t.integerToWord=function e(n){let N="",I=0;return n<10?N=t.SINGLE_DIGIT[n]:n<100?(I=n%10,N=o[Math.floor(n/10)]):n<1e3?(I=n%100,N=t.SINGLE_DIGIT[Math.floor(n/100)]+c):n<1e4?(I=n%1e3,N=t.SINGLE_DIGIT[Math.floor(n/1e3)]+l):n<1e5?(I=n%1e4,N=t.SINGLE_DIGIT[Math.floor(n/1e4)]+d):n<1e6?(I=n%1e5,N=t.SINGLE_DIGIT[Math.floor(n/1e5)]+f):n<1e9?(I=n%1e6,N=e(Math.floor(n/1e6))+m):n<1e12?(I=n%1e9,N=e(Math.floor(n/1e9))+v):n<_&&(I=n%1e12,N=e(Math.floor(n/1e12))+h),0!==I?`${N}${r.Separator}${e(I)}`:N}},205:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Separator=void 0,t.Separator="-"},206:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.numberToWord=void 0;const r=n(211),o=n(204),c="ក្បៀស";t.numberToWord=function(input){const e=Number(input);if(isNaN(e))throw Error("The number format is invalid");return Number.isInteger(e)?o.integerToWord(e):function(input){const[e,t]=input.split("."),n=o.integerToWord(Number(e)),l=r.decimalToWord(t);return`${n}-*${c}*${l}`}(input.toString())}},207:function(e,t,n){var content=n(213);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(63).default)("1b7833da",content,!0,{sourceMap:!1})},208:function(e,t,n){var content=n(218);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(63).default)("aabf79d4",content,!0,{sourceMap:!1})},209:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var p in e)"default"===p||Object.prototype.hasOwnProperty.call(t,p)||r(t,e,p)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(210),t),o(n(206),t)},210:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.currencyToWord=void 0;const r=n(204),o=n(206),c={USD:{symbol:"$",name:"ដុល្លារ"},KHR:{symbol:"៛",name:"រៀល"}};t.currencyToWord=function(input,e){const t=Number(input);if(isNaN(t))throw Error("The number format is invalid");const{symbol:symbol,name:n}=c[e];let l="";return l=Number.isInteger(t)?function(input,e){const t=Number(input),n=r.integerToWord(t);return n+` ${e} គត់`}(input.toString(),n):function(input,e){let[t,n]=input.split(".");const c=r.integerToWord(Number(t));if(n.length<=2){1===n.length&&(n+="0");const t=r.integerToWord(Number(n));return c+" "+e+" និង"+` ${t} សេន`}return`${o.numberToWord(Number(input))} ${e}`}(input.toString(),n),`${symbol}  ${l}`}},211:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.decimalToWord=void 0;const r=n(205),o=n(204);t.decimalToWord=function(e){return e.split("").map(e=>r.Separator+o.SINGLE_DIGIT[Number(e)]).join("")}},212:function(e,t,n){"use strict";n(207)},213:function(e,t,n){(t=n(62)(!1)).push([e.i,".container{margin:0 auto;min-height:90vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;overflow:hidden}",""]),e.exports=t},214:function(e,t,n){"use strict";var r=n(9),o=n(4),c=n(65),l=n(14),d=n(10),f=n(28),m=n(146),v=n(64),h=n(6),_=n(66),N=n(99).f,I=n(35).f,S=n(16).f,y=n(215).trim,x=o.Number,T=x.prototype,M="Number"==f(_(T)),E=function(e){var t,n,r,o,c,l,d,code,f=v(e,!1);if("string"==typeof f&&f.length>2)if(43===(t=(f=y(f)).charCodeAt(0))||45===t){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(c("Number",!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var D,O=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof O&&(M?h((function(){T.valueOf.call(n)})):"Number"!=f(n))?m(new x(E(t)),n,O):E(t)},w=r?N(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),$=0;w.length>$;$++)d(x,D=w[$])&&!d(O,D)&&S(O,D,I(x,D));O.prototype=T,T.constructor=O,l(o,"Number",O)}},215:function(e,t,n){var r=n(13),o="["+n(216)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(c,"")),2&e&&(n=n.replace(l,"")),n}};e.exports={start:d(1),end:d(2),trim:d(3)}},216:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},217:function(e,t,n){"use strict";n(208)},218:function(e,t,n){(t=n(62)(!1)).push([e.i,"input[data-v-478c7de9]{text-align:center;background-color:#fff;border-radius:4px;border:1px solid #dcdfe6;box-sizing:border-box;color:#4e4e4e;padding:5px 0;line-height:120%;outline:none;max-width:80%;font-size:30px}[data-v-478c7de9]::-moz-placeholder{color:#bdbdbd}[data-v-478c7de9]:-ms-input-placeholder{color:#bdbdbd}[data-v-478c7de9]::placeholder{color:#bdbdbd}",""]),e.exports=t},219:function(e,t,n){"use strict";n.r(t);var r={props:{value:{type:String}},data:function(){return{selected:this.value,options:[{text:"Currency USD",value:"usd"},{text:"Currency KHR",value:"khr"},{text:"Number",value:"number"}]}},watch:{selected:function(){this.$emit("input",this.selected)}}},o=n(33),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("span",{staticStyle:{"font-size":"25px","margin-right":"10px"}},[e._v("Mode: ")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticStyle:{"font-size":"25px"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selected=t.target.multiple?n:n[0]}}},e._l(e.options,(function(option){return n("option",{key:option.value,domProps:{value:option.value}},[e._v("\n      "+e._s(option.text)+"\n    ")])})),0)])}),[],!1,null,null,null);t.default=component.exports},220:function(e,t,n){"use strict";n.r(t);n(47),n(100),n(214),n(11),n(29),n(101),n(48),n(49);var r={props:{value:{type:Number}},data:function(){return{content:this.value.toString()}},watch:{value:function(){Number(this.content)===Number(this.value)?this.content=this.content.replace(/^0+(?=\d)/,""):this.content=this.value.toString()}},methods:{handleKeyPress:function(e){this.isDigitOrDecimalSeperator(e.data)||this.isDeleteForwardOrBackwardKey(e.inputType)?this.doesContentContainDecimalSeperator()&&this.isDecimalSeperator(e.data)&&e.preventDefault():e.preventDefault()},isDeleteForwardOrBackwardKey:function(e){return e.includes("deleteContent")},isDigitOrDecimalSeperator:function(e){return/^[0-9,.]$/.test(e)},isDecimalSeperator:function(e){return/^[,.]$/.test(e)},doesContentContainDecimalSeperator:function(e){var t=this;return[",","."].some((function(e){return t.content.includes(e)}))},handleInput:function(){var output=this.content.replaceAll(",",".");this.$emit("input",Number(output))}}},o=(n(217),n(33)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("span",{staticStyle:{"font-size":"25px","margin-right":"10px"}},[e._v("Value: ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],attrs:{inputmode:"decimal",placeholder:"ចំនួន"},domProps:{value:e.content},on:{beforeinput:e.handleKeyPress,paste:function(e){e.preventDefault()},input:[function(t){t.target.composing||(e.content=t.target.value)},e.handleInput]}})])}),[],!1,null,"478c7de9",null);t.default=component.exports},221:function(e,t,n){"use strict";n.r(t);var r=n(209),o={data:function(){return{inputValue:0,mode:"usd"}},computed:{usdMode:function(){return Object(r.currencyToWord)(this.inputValue,"USD")},khrMode:function(){return Object(r.currencyToWord)(this.inputValue,"KHR")},numberMode:function(){return Object(r.numberToWord)(this.inputValue)}}},c=(n(212),n(33)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",[n("h1",[e._v("Number to Khmer words")]),e._v(" "),n("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"start"}},[n("div",{staticStyle:{height:"20px"}}),e._v(" "),n("ModeSelect",{model:{value:e.mode,callback:function(t){e.mode=t},expression:"mode"}}),e._v(" "),n("div",{staticStyle:{height:"20px"}}),e._v(" "),n("InputDecimalNumber",{model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}),e._v(" "),n("div",{staticStyle:{height:"20px"}})],1)]),e._v(" "),n("div",["usd"===e.mode?n("h2",[e._v("\n      "+e._s(e.usdMode)+"\n    ")]):"khr"===e.mode?n("h2",[e._v("\n      "+e._s(e.khrMode)+"\n    ")]):"number"===e.mode?n("h2",[e._v("\n      "+e._s(e.numberMode)+"\n    ")]):n("h2",[e._v("Oh no 😢")])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ModeSelect:n(219).default,InputDecimalNumber:n(220).default})}}]);