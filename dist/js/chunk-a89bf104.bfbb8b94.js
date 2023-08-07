(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a89bf104"],{"145a":function(e,r,t){"use strict";var a=t("5ea5"),n=t.n(a);n.a},"5ea5":function(e,r,t){},"9f1b":function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"farmers-page"},[t("h1",[e._v("Farmers")]),t("form",{staticClass:"farmer-form",on:{submit:function(r){return r.preventDefault(),e.addFarmer(r)}}},[t("label",{attrs:{for:"name"}},[e._v("Name:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newFarmer.name,expression:"newFarmer.name"}],attrs:{type:"text",id:"name",name:"name"},domProps:{value:e.newFarmer.name},on:{input:function(r){r.target.composing||e.$set(e.newFarmer,"name",r.target.value)}}}),t("br"),t("label",{attrs:{for:"address"}},[e._v("Address:")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newFarmer.address,expression:"newFarmer.address"}],attrs:{id:"address"},domProps:{value:e.newFarmer.address},on:{input:function(r){r.target.composing||e.$set(e.newFarmer,"address",r.target.value)}}}),t("br"),t("label",{attrs:{for:"country"}},[e._v("Country:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newFarmer.country,expression:"newFarmer.country"}],attrs:{type:"text",id:"country",name:"country"},domProps:{value:e.newFarmer.country},on:{input:function(r){r.target.composing||e.$set(e.newFarmer,"country",r.target.value)}}}),t("br"),t("label",{attrs:{for:"state"}},[e._v("State:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newFarmer.state,expression:"newFarmer.state"}],attrs:{type:"text",id:"state",name:"state"},domProps:{value:e.newFarmer.state},on:{input:function(r){r.target.composing||e.$set(e.newFarmer,"state",r.target.value)}}}),t("br"),t("label",{attrs:{for:"district"}},[e._v("District:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newFarmer.district,expression:"newFarmer.district"}],attrs:{type:"text",id:"district",name:"district"},domProps:{value:e.newFarmer.district},on:{input:function(r){r.target.composing||e.$set(e.newFarmer,"district",r.target.value)}}}),t("br"),t("label",{attrs:{for:"panchayats"}},[e._v("Panchayats:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.newFarmer.panchayats,expression:"newFarmer.panchayats"}],attrs:{id:"panchayats",name:"panchayats"},on:{change:[function(r){var t=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){var r="_value"in e?e._value:e.value;return r}));e.$set(e.newFarmer,"panchayats",r.target.multiple?t:t[0])},e.updateFPOByPanchayats]}},e._l(e.panchayatsList,(function(r){return t("option",{key:r.id,domProps:{value:r.id}},[e._v(e._s(r.name))])})),0),t("br"),t("label",{attrs:{for:"fpo"}},[e._v("FPO:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.newFarmer.fpo,expression:"newFarmer.fpo"}],attrs:{id:"fpo",name:"fpo"},on:{change:[function(r){var t=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){var r="_value"in e?e._value:e.value;return r}));e.$set(e.newFarmer,"fpo",r.target.multiple?t:t[0])},e.updateICSByFPO]}},e._l(e.fpos,(function(r){return t("option",{key:r.id,domProps:{value:r.id}},[e._v(e._s(r.name))])})),0),t("br"),t("label",{attrs:{for:"ics"}},[e._v("ICS:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.newFarmer.ics,expression:"newFarmer.ics"}],attrs:{id:"ics",name:"ics",required:""},on:{change:[function(r){var t=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){var r="_value"in e?e._value:e.value;return r}));e.$set(e.newFarmer,"ics",r.target.multiple?t:t[0])},e.updateVFCByICS]}},e._l(e.icsList,(function(r){return t("option",{key:r.id,domProps:{value:r.id}},[e._v(e._s(r.name))])})),0),t("br"),t("label",{attrs:{for:"vfc"}},[e._v("VFC:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.newFarmer.vfc,expression:"newFarmer.vfc"}],attrs:{id:"vfc",name:"vfc"},on:{change:function(r){var t=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){var r="_value"in e?e._value:e.value;return r}));e.$set(e.newFarmer,"vfc",r.target.multiple?t:t[0])}}},e._l(e.vfcList,(function(r){return t("option",{key:r.id,domProps:{value:r.id}},[e._v(e._s(r.name))])})),0),t("br"),t("label",{attrs:{for:"farmer_code"}},[e._v("Farmer Code:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newFarmer.farmer_code,expression:"newFarmer.farmer_code"}],attrs:{type:"number",name:"farmer_code",id:"farmer_code",required:""},domProps:{value:e.newFarmer.farmer_code},on:{input:function(r){r.target.composing||e.$set(e.newFarmer,"farmer_code",r.target.value)}}}),t("br"),t("button",{staticClass:"submit-button",attrs:{type:"submit"}},[e._v("Add Farmer")])]),t("h2",[e._v("Existing Farmers")]),t("ul",{staticClass:"farmer-list"},e._l(e.farmers,(function(r){return t("li",{key:r.id,staticClass:"farmer-item"},[t("p",{staticClass:"info-label"},[e._v(e._s(r.name)+" - "+e._s(r.address))])])})),0)])},n=[],s=(t("b0c0"),t("96cf"),t("1da1")),c=t("bc3a"),i=t.n(c),o={data:function(){return{farmers:[],fpos:[],icsList:[],vfcList:[],panchayatsList:[],newFarmer:{name:"",address:"",country:"",state:"",district:"",panchayats:"",fpo:"",ics:[],vfc:"",farmer_code:null}}},mounted:function(){this.fetchFarmers(),this.fetchFPOs(),this.fetchICSList(),this.fetchVFCList(),this.fetchPanchayatsList()},methods:{fetchFarmers:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.a.get("http://127.0.0.1:8000/api/farmers/");case 3:t=r.sent,e.farmers=t.data,r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),console.error("Error fetching farmers:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},fetchFPOs:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.a.get("http://127.0.0.1:8000/api/fpos/");case 3:t=r.sent,e.fpos=t.data,r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),console.error("Error fetching FPOs:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},fetchICSList:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.a.get("http://127.0.0.1:8000/api/ics/");case 3:t=r.sent,e.icsList=t.data,r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),console.error("Error fetching ICS list:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},fetchVFCList:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.a.get("http://127.0.0.1:8000/api/vfcs/");case 3:t=r.sent,e.vfcList=t.data,r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),console.error("Error fetching VFC list:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},addFarmer:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var t,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t={name:e.newFarmer.name,address:e.newFarmer.address,country:e.newFarmer.country,state:e.newFarmer.state,district:e.newFarmer.district,panchayats:e.newFarmer.panchayats,fpo:parseInt(e.newFarmer.fpo),ics:parseInt(e.newFarmer.ics),vfc:parseInt(e.newFarmer.vfc),farmer_code:e.newFarmer.farmer_code},r.next=4,i.a.post("http://127.0.0.1:8000/api/farmers/",t);case 4:a=r.sent,e.farmers.push(a.data),e.resetNewFarmer(),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](0),console.error("Error adding farmer:",r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()},fetchPanchayatsList:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.a.get("http://127.0.0.1:8000/api/locationspanchayats/");case 3:t=r.sent,e.panchayatsList=t.data,r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),console.error("Error fetching Panchayats list:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},updateFPOByPanchayats:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.a.get("http://127.0.0.1:8000/api/fpos/?panchayats=".concat(e.newFarmer.panchayats));case 3:t=r.sent,t.data.length>0&&(e.newFarmer.fpo=t.data[0].id),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),console.error("Error updating FPO by Panchayats:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},updateICSByFPO:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.a.get("http://127.0.0.1:8000/api/ics/?fpo=".concat(e.newFarmer.fpo));case 3:t=r.sent,e.icsList=t.data,r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),console.error("Error updating ICS by FPO:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},updateVFCByICS:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.a.get("http://127.0.0.1:8000/api/vfcs/?ics=".concat(e.newFarmer.ics));case 3:t=r.sent,t.data.length>0&&(e.newFarmer.vfc=t.data[0].id),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),console.error("Error updating VFC by ICS:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},resetNewFarmer:function(){this.newFarmer={name:"",address:"",country:"",state:"",district:"",panchayats:"",fpo:"",ics:"",vfc:"",farmer_code:null}}}},u=o,m=(t("145a"),t("2877")),p=Object(m["a"])(u,a,n,!1,null,null,null);r["default"]=p.exports},b0c0:function(e,r,t){var a=t("83ab"),n=t("9bf2").f,s=Function.prototype,c=s.toString,i=/^\s*function ([^ (]*)/,o="name";a&&!(o in s)&&n(s,o,{configurable:!0,get:function(){try{return c.call(this).match(i)[1]}catch(e){return""}}})}}]);