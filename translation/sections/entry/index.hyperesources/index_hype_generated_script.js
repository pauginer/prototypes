//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/index_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_601","HYPE_dtl_601",!0==(null!=a&&10>a||false==!0)?"HYPE-601.full.min.js":"HYPE-601.thin.min.js"),false==!0&&(a=a||l("HYPE_w_601","HYPE_wdtl_601","HYPE-601.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"pushState",source:"function(hypeDocument, element, event) {\tupdateState();\n}",identifier:"61"},{name:"scrollToTranslations",source:"function(hypeDocument, element, event) {\t\n\t$('html, body').animate({\n        scrollTop: 2565\n      }, 800);\n}",identifier:"235"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_601(c,e,{"3":{p:1,n:"langsel-missing.png",g:"55",t:"@1x"},"12":{p:1,n:"mob-topics-arts.jpg",g:"94",o:true,t:"@1x"},"21":{p:1,n:"readers-sections.png",g:"7",t:"@1x"},"4":{p:1,n:"dash-suggest-food.png",g:"107",t:"@1x"},"30":{p:1,n:"mob-start-guitar-new.jpg",g:"230",o:true,t:"@1x"},"13":{p:1,n:"mob-sect-select.jpg",g:"37",o:true,t:"@1x"},"5":{p:1,n:"desk-article-header.jpg",g:"47",o:true,t:"@1x"},"22":{p:1,n:"readers-start.jpg",g:"22",o:true,t:"@1x"},"6":{p:1,n:"langsel-options.png",g:"57",t:"@1x"},"31":{p:1,n:"after-target.jpg",g:"148",o:true,t:"@1x"},"14":{p:1,n:"mob-start.jpg",g:"29",o:true,t:"@1x"},"7":{p:1,n:"desk-article-contents.jpg",g:"49",o:true,t:"@1x"},"23":{p:1,n:"readers-footer.jpg",g:"13",o:true,t:"@1x"},"32":{p:1,n:"login.jpg",g:"239",o:true,t:"@1x"},"15":{p:1,n:"mob-topics-init.jpg",g:"98",o:true,t:"@1x"},"8":{p:1,n:"langsel-emptysearch.png",g:"59",t:"@1x"},"24":{p:1,n:"mob-switch-src.jpg",g:"208",o:true,t:"@1x"},"9":{p:1,n:"mob-dash-base.png",g:"86",t:"@1x"},"33":{p:1,n:"login-filled.jpg",g:"241",o:true,t:"@1x"},"16":{p:1,n:"mob-topics-food.jpg",g:"96",o:true,t:"@1x"},"25":{p:1,n:"after-selector.png",g:"135",t:"@1x"},"34":{p:1,n:"notif-list.png",g:"249",t:"@1x"},"17":{p:1,n:"mob-topics-search.png",g:"101",t:"@1x"},"26":{p:1,n:"switch-button.png",g:"51",t:"@1x"},"35":{p:1,n:"home-notif-seen.jpg",g:"251",o:true,t:"@1x"},"18":{p:1,n:"mob-topics-searched.png",g:"103",t:"@1x"},"27":{p:1,n:"after-source.jpg",g:"129",o:true,t:"@1x"},"36":{p:1,n:"home-notified.jpg",g:"253",o:true,t:"@1x"},"19":{p:1,n:"readers-sections-exp.png",g:"9",t:"@1x"},"28":{p:1,n:"mob-switch.png",g:"214",t:"@1x"},"-1":{n:"PIE.htc"},"29":{p:1,n:"mob-switch-search.jpg",g:"224",o:true,t:"@1x"},"-2":{n:"blank.gif"},"10":{p:1,n:"mob-shade.png",g:"90",t:"@1x"},"0":{p:1,n:"dash-suggest-initial.png",g:"92",t:"@1x"},"1":{p:1,n:"dash-suggest-arts.png",g:"105",t:"@1x"},"11":{p:1,n:"mob-dash-nav.png",g:"88",t:"@1x"},"2":{p:1,n:"langsel.png",g:"53",t:"@1x"},"20":{p:1,n:"readers-base.jpg",g:"5",o:true,t:"@1x"}},h,[],d,[{n:"readers",o:"1",X:[0]},{n:"start-preselected",o:"19",X:[1]},{n:"start-new",o:"25",X:[2]},{n:"sect-select",o:"31",X:[3]},{n:"desk-switch",o:"44",X:[4]},{n:"topics",o:"83",X:[5]},{n:"switch",o:"205",X:[6]},{n:"switch-selector",o:"211",X:[7]},{n:"switch-search",o:"216",X:[8]},{n:"switch-translate",o:"219",X:[9]},{n:"after",o:"126",X:[10]},{n:"after-selector",o:"131",X:[11]},{n:"after-target",o:"145",X:[12]},{n:"notifications",o:"236",X:[13]},{n:"notifs",o:"246",X:[14]},{n:"Untitled Scene",o:"261",X:[15]}],[{o:"3",p:"600px",cA:false,Y:375,Z:1600,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{"16":{i:"16",n:"expand-sections",z:0.05,b:[],a:[{f:"c",y:0,z:0.05,i:"cY",e:"0",s:"1",o:"268"},{f:"c",y:0,z:0.05,i:"b",e:1350,s:940,o:"264"},{f:"c",y:0,z:0.05,i:"cY",e:"0",s:"1",o:"271"},{f:"c",y:0,z:0.05,i:"b",e:639,s:239,o:"267"},{f:"c",y:0,z:0.05,i:"cY",e:"1",s:"0",o:"273"},{f:"c",y:0.01,z:0.04,i:"e",e:1,s:0,o:"269"},{y:0.05,i:"e",s:1,z:0,o:"269",f:"c"},{y:0.05,i:"b",s:1350,z:0,o:"264",f:"c"},{y:0.05,i:"cY",s:"0",z:0,o:"271",f:"c"},{y:0.05,i:"b",s:639,z:0,o:"267",f:"c"},{y:0.05,i:"cY",s:"0",z:0,o:"268",f:"c"},{y:0.05,i:"cY",s:"1",z:0,o:"273",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["274","268","273","270","269","266","265","271","267","272","264"],n:"Untitled Layout","_":0,v:{"265":{k:"div",x:"visible",c:345,d:1000,z:4,a:14,j:"absolute",b:521},"268":{c:345,d:52,I:"None",cY:"1",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"265",A:"#D8DDE4",x:"visible",aA:{a:[{b:"16",p:8,z:true,symbolOid:"2",J:false}]},O:0,j:"absolute",k:"div",dB:"button",z:4,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:0,b:0},"271":{c:345,d:47,I:"None",cY:"1",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"269",A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"19"},{p:4,h:"61"}]},O:0,j:"absolute",k:"div",dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:0,b:48},"274":{h:"5",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",c:375,d:1621,r:"inline",cQ:1,cR:1},"264":{w:"",h:"13",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:940,j:"absolute",dB:"img",z:3,k:"div",c:375,d:349,r:"inline",cQ:1,cR:1},"267":{c:343,d:101,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"265",A:"#D8DDE4",x:"visible",aA:{a:[{j:"https://sx.wmflabs.org/index.php/Special:ContentTranslation?page=Guitar&from=en&to=bn&sx=true#/sx",p:5,k:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:5,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:239},"270":{h:"9",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"269",d:1000,c:345,r:"inline",e:1},"273":{c:345,d:52,I:"None",cY:"0",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"265",A:"#D8DDE4",x:"visible",aA:{a:[{b:"16",p:8,z:false,symbolOid:"2",J:false}]},O:0,j:"absolute",k:"div",dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:0,b:0},"266":{h:"7",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"265",d:411,c:345,cQ:1,r:"inline",cR:1},"269":{x:"visible",cY:"0",k:"div",c:345,d:1000,z:2,e:0,a:0,j:"absolute",bF:"265",b:0},"272":{c:343,d:52,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"265",A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"83"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:6,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:352}}},{o:"21",p:"600px",cA:false,Y:375,Z:667,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["275","277","276"],n:"Untitled Layout","_":1,v:{"275":{h:"22",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",c:375,d:667,r:"inline"},"276":{c:159,d:49,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"31"},{p:4,h:"61"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:11,b:186},"277":{c:43,d:63,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:332,b:0}}},{o:"28",p:"600px",cA:false,Y:375,Z:667,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["279","278","280"],n:"Untitled Layout","_":2,v:{"278":{c:43,d:63,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"},{p:4,h:"61"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:332,b:0},"279":{h:"29",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",c:375,d:667,r:"inline"},"280":{c:274,d:49,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"31"},{p:4,h:"61"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:51,b:227}}},{o:"34",p:"600px",cA:false,Y:375,Z:1167,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["281","282"],n:"Untitled Layout","_":3,v:{"281":{h:"37",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",c:375,d:1086,r:"inline",cQ:1,cR:1},"282":{c:54,d:52,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"},{p:4,h:"61"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:314,b:10}}},{o:"46",p:"600px",cA:false,Y:1024,Z:768,L:[],c:"#FFFFFF",bY:1,d:1024,U:{},T:{"71":{i:"71",n:"show-options",z:0.06,b:[],a:[{f:"c",y:0,z:0.06,i:"cY",e:"1",s:"0",o:"284"},{f:"c",y:0,z:0.06,i:"cY",e:"0",s:"1",o:"300"},{y:0.06,i:"cY",s:"1",z:0,o:"284",f:"c"},{y:0.06,i:"cY",s:"0",z:0,o:"300",f:"c"}],f:30},"65":{i:"65",n:"show-missing",z:0.06,b:[],a:[{f:"c",y:0,z:0.06,i:"cY",e:"0",s:"1",o:"289"},{f:"c",y:0,z:0.06,i:"cY",e:"1",s:"0",o:"284"},{y:0.06,i:"cY",s:"1",z:0,o:"284",f:"c"},{y:0.06,i:"cY",s:"0",z:0,o:"289",f:"c"}],f:30},"70":{i:"70",n:"show-search",z:0.06,b:[],a:[{f:"c",y:0,z:0.06,i:"cY",e:"1",s:"0",o:"284"},{f:"c",y:0,z:0.06,i:"cY",e:"0",s:"1",o:"294"},{y:0.06,i:"cY",s:"1",z:0,o:"284",f:"c"},{y:0.06,i:"cY",s:"0",z:0,o:"294",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0.01,b:[],a:[{f:"c",y:0,z:0.01,i:"cY",e:"1",s:"0",o:"283"},{y:0.01,i:"cY",s:"1",z:0,o:"283",f:"c"}],f:30},"81":{i:"81",n:"show-selector",z:0.06,b:[],a:[{f:"c",y:0,z:0.06,i:"cY",e:"0",s:"1",o:"283"},{y:0.06,i:"cY",s:"0",z:0,o:"283",f:"c"}],f:30}},bZ:180,O:["299","304","306","305","285","288","284","293","290","289","297","294","301","302","300","283","298","286","303","291","295","292","296","287"],n:"Untitled Layout","_":4,v:{"302":{h:"57",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"300",z:1,k:"div",dB:"img",d:316,c:354,r:"inline"},"296":{c:53,d:43,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"294",A:"#D8DDE4",x:"visible",aA:{a:[{j:"https://sx.wmflabs.org/index.php/Special:ContentTranslation?page=Guitar&from=en&to=bn&sx=true#/sx",p:5,k:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:181,b:150},"288":{w:"",h:"53",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"284",d:316,c:354,r:"inline"},"292":{c:53,d:43,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"289",A:"#D8DDE4",x:"visible",aA:{a:[{j:"https://sx.wmflabs.org/index.php/Special:ContentTranslation?page=Guitar&from=en&to=bn&sx=true#/sx",p:5,k:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:5,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:183,b:150},"284":{x:"visible",cY:"0",k:"div",c:354,d:316,z:9,a:0,j:"absolute",bF:"283",b:0},"303":{c:191,d:43,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"300",A:"#D8DDE4",x:"visible",aA:{a:[{j:"https://sx.wmflabs.org/index.php/Special:ContentTranslation?page=Guitar&from=en&to=bn&sx=true#/sx",p:5,k:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:13,b:70},"297":{h:"59",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"294",z:1,k:"div",dB:"img",d:217,c:354,r:"inline"},"289":{x:"visible",cY:"1",k:"div",c:354,d:316,z:7,a:0,j:"absolute",bF:"283",b:0},"293":{c:51,d:50,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"289",A:"#D8DDE4",x:"visible",aA:{a:[{b:"65",p:8,z:true,symbolOid:"45",J:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:2,b:3},"285":{c:352,d:48,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"284",A:"#D8DDE4",x:"visible",aA:{a:[{b:"70",p:3,z:false,symbolOid:"45"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:6},"304":{h:"47",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",c:1024,d:137,r:"inline"},"298":{c:51,d:50,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"294",A:"#D8DDE4",x:"visible",aA:{a:[{b:"70",p:8,z:true,symbolOid:"45",J:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:4,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:300,b:3},"300":{x:"visible",cY:"1",k:"div",c:354,d:316,z:2,a:0,j:"absolute",bF:"283",b:0},"294":{x:"visible",cY:"1",k:"div",c:354,d:217,z:4,a:0,j:"absolute",bF:"283",b:0},"286":{c:352,d:38,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"284",A:"#D8DDE4",x:"visible",aA:{a:[{b:"65",p:3,z:false,symbolOid:"45"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:4,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:10,b:66},"305":{h:"49",p:"no-repeat",x:"visible",a:87,q:"100% 100%",b:146,j:"absolute",dB:"img",z:2,k:"div",c:850,d:678,r:"inline"},"299":{c:1026,d:770,I:"None",J:"None",K:"None",L:"None",aP:"default",M:0,N:0,bF:"283",A:"#D8DDE4",x:"visible",aA:{a:[{b:"81",p:8,z:true,symbolOid:"45",J:false},{b:"65",p:8,z:true,symbolOid:"45",J:false},{b:"70",p:8,z:true,symbolOid:"45",J:false},{b:"71",p:8,z:true,symbolOid:"45",J:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:1,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:-569,b:-176},"290":{h:"55",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"289",z:1,k:"div",dB:"img",d:316,c:354,r:"inline"},"301":{c:51,d:50,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"300",A:"#D8DDE4",x:"visible",aA:{a:[{b:"71",p:8,z:true,symbolOid:"45",J:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:1,b:3},"295":{c:80,d:43,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"294",A:"#D8DDE4",x:"visible",aA:{a:[{j:"https://sx.wmflabs.org/index.php/Special:ContentTranslation?page=Guitar&from=en&to=bn&sx=true#/sx",p:5,k:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:30,b:152},"287":{c:46,d:48,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"284",A:"#D8DDE4",x:"visible",aA:{a:[{b:"71",p:3,z:false,symbolOid:"45"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:305,b:268},"306":{h:"51",p:"no-repeat",x:"visible",a:709,q:"100% 100%",b:125,j:"absolute",dB:"img",aA:{a:[{b:"81",p:8,z:false,symbolOid:"45",J:false}]},k:"div",z:3,d:72,c:228,r:"inline",aP:"pointer"},"291":{c:80,d:43,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"289",A:"#D8DDE4",x:"visible",aA:{a:[{j:"https://sx.wmflabs.org/index.php/Special:ContentTranslation?page=Guitar&from=en&to=bn&sx=true#/sx",p:5,k:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:4,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:110,b:147},"283":{x:"visible",cY:"0",k:"div",c:354,d:316,z:5,a:566,j:"absolute",b:176}}},{o:"85",p:"600px",cA:false,Y:375,Z:1000,b:100,c:"#FFFFFF",L:[],bY:1,d:375,U:{},T:{"123":{i:"123",n:"suggest-food",z:0.03,b:[],a:[{f:"c",y:0,z:0.03,i:"cY",e:"1",s:"0",o:"319"},{y:0,i:"b",s:465,z:0,o:"308",f:"a"},{f:"c",y:0,z:0.03,i:"cY",e:"0",s:"1",o:"320"},{f:"c",y:0,z:0.03,i:"cY",e:"0",s:"1",o:"312"},{f:"c",y:0,z:0.03,i:"cY",e:"1",s:"0",o:"314"},{y:0.03,i:"cY",s:"1",z:0,o:"319",f:"c"},{y:0.03,i:"cY",s:"0",z:0,o:"320",f:"c"},{y:0.03,i:"cY",s:"0",z:0,o:"312",f:"c"},{y:0.03,i:"cY",s:"1",z:0,o:"314",f:"c"}],f:30},"115":{i:"115",n:"show-search",z:0.09,b:[],a:[{y:0,i:"a",s:0,z:0,o:"323",f:"a"},{y:0,i:"b",s:0,z:0,o:"323",f:"a"},{f:"c",y:0,z:0.03,i:"e",e:1,s:0,o:"323"},{f:"c",y:0,z:0.01,i:"cY",e:"0",s:"1",o:"323"},{y:0.01,i:"cY",s:"0",z:0,o:"323",f:"c"},{f:"c",y:0.02,z:0.07,i:"cY",e:"1",s:"0",o:"328"},{y:0.03,i:"e",s:1,z:0,o:"323",f:"c"},{f:"c",p:2,y:0.05,z:0,i:"ActionHandler",s:{a:[{b:"115",symbolOid:"84",p:7}]},o:"115"},{f:"c",y:0.05,z:0.02,i:"e",e:1,s:0,o:"326"},{f:"c",y:0.06,z:0.03,i:"cY",e:"0",s:"1",o:"325"},{f:"c",y:0.07,z:0.02,i:"e",e:0,s:1,o:"329"},{y:0.07,i:"e",s:1,z:0,o:"326",f:"c"},{y:0.09,i:"cY",s:"1",z:0,o:"328",f:"c"},{y:0.09,i:"e",s:0,z:0,o:"329",f:"c"},{y:0.09,i:"cY",s:"0",z:0,o:"325",f:"c"}],f:30},"112":{i:"112",n:"show-topics",z:0.03,b:[],a:[{y:0,i:"a",s:0,z:0,o:"307",f:"a"},{y:0,i:"b",s:0,z:0,o:"307",f:"a"},{f:"c",y:0,z:0.03,i:"e",e:1,s:0,o:"307"},{f:"c",y:0,z:0.01,i:"cY",e:"0",s:"1",o:"307"},{y:0.01,i:"cY",s:"0",z:0,o:"307",f:"c"},{y:0.03,i:"e",s:1,z:0,o:"307",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30},"122":{i:"122",n:"suggest-arts",z:0.03,b:[],a:[{f:"c",y:0,z:0.02,i:"cY",e:"1",s:"0",o:"319"},{y:0,i:"b",s:412,z:0,o:"308",f:"c"},{f:"c",y:0,z:0.02,i:"cY",e:"0",s:"1",o:"321"},{f:"c",y:0,z:0.03,i:"cY",e:"1",s:"0",o:"314"},{f:"c",y:0,z:0.03,i:"cY",e:"0",s:"1",o:"311"},{y:0.02,i:"cY",s:"1",z:0,o:"319",f:"c"},{y:0.02,i:"cY",s:"0",z:0,o:"321",f:"c"},{y:0.03,i:"cY",s:"1",z:0,o:"314",f:"c"},{y:0.03,i:"cY",s:"0",z:0,o:"311",f:"c"}],f:30}},bZ:180,O:["314","311","312","307","316","315","313","330","323","310","319","321","320","317","318","309","328","329","326","324","325","327","308","322"],n:"Untitled Layout","_":5,v:{"323":{x:"visible",cY:"0",k:"div",c:375,d:1000,z:15,e:1,a:910,j:"absolute",bS:53,b:0},"315":{x:"auto",k:"div",bS:61,cR:1,c:375,d:934,z:1,a:0,j:"absolute",cQ:1,b:0},"307":{x:"auto",cY:"1",k:"div",c:375,d:1000,z:9,e:1,a:479,j:"absolute",bS:52,b:0},"328":{c:333,d:54,I:"None",cY:"0",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"324",A:"#D8DDE4",x:"visible",aA:{a:[{b:"115",p:8,z:false,symbolOid:"84",J:false}]},O:0,j:"absolute",k:"div",dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:6,b:0},"311":{h:"94",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",cY:"1",z:2,dB:"img",k:"div",d:2590,bF:"307",cQ:1,c:375,r:"inline",cR:1},"324":{k:"div",x:"visible",bF:"323",c:341,d:316,z:2,a:17,j:"absolute",bS:45,b:304},"316":{h:"86",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"315",z:1,k:"div",dB:"img",d:1000,c:375,r:"inline"},"308":{c:373,d:51,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"307",A:"#D8DDE4",x:"visible",aA:{a:[{b:"112",p:3,z:true,symbolOid:"84"},{b:"122",p:3,z:false,symbolOid:"84"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:6,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:412},"329":{h:"101",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bS:0,z:2,k:"div",dB:"img",d:316,bF:"324",c:341,e:1,r:"inline"},"320":{h:"107",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",cY:"1",z:1,k:"div",dB:"img",d:876,bF:"317",c:345,r:"inline"},"312":{w:"",h:"96",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,dB:"img",cY:"1",z:1,j:"absolute",k:"div",d:2590,bF:"307",cQ:1,c:375,r:"inline",cR:1},"325":{c:43,d:49,I:"None",cY:"1",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"324",A:"#D8DDE4",x:"visible",aA:{a:[{b:"115",p:8,z:true,symbolOid:"84",J:false}]},O:0,j:"absolute",k:"div",dB:"button",z:4,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:213,b:5},"317":{k:"div",x:"visible",c:345,d:876,z:2,a:15,j:"absolute",bF:"315",b:116},"309":{c:349,d:58,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"307",A:"#D8DDE4",x:"visible",aA:{a:[{b:"115",p:3,z:false,symbolOid:"84"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:4,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:7,b:294},"321":{w:"",h:"105",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",cY:"1",z:2,k:"div",dB:"img",d:876,bF:"317",c:345,r:"inline"},"313":{c:62,d:58,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"307",A:"#D8DDE4",x:"visible",aA:{a:[{b:"112",p:8,z:true,symbolOid:"84",J:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:5,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:311,b:0},"326":{h:"103",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"324",d:316,c:341,r:"inline",e:0},"318":{c:162,d:39,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"317",A:"#D8DDE4",x:"visible",aA:{a:[{b:"112",p:3,z:false,symbolOid:"84"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:4,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:81,b:49},"330":{w:"",h:"90",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",aA:{a:[{i:0,b:"115",p:9,symbolOid:"84"}]},z:1,k:"div",d:1000,bS:61,bF:"323",aP:"default",c:375,r:"inline"},"322":{h:"88",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:921,j:"absolute",bS:13,z:5,k:"div",dB:"img",d:79,c:375,r:"inline"},"314":{h:"98",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",cY:"0",z:3,dB:"img",k:"div",d:2590,bF:"307",cQ:1,c:375,r:"inline",cR:1},"327":{c:339,d:64,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"324",A:"#D8DDE4",x:"visible",aA:{a:[{i:0,b:"115",p:9,symbolOid:"84"},{i:0,b:"112",p:9,symbolOid:"84"},{i:0,b:"122",p:9,symbolOid:"84"},{b:"123",p:3,z:false,symbolOid:"84"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:5,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:56},"319":{h:"92",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",cY:"0",z:3,k:"div",dB:"img",d:876,bF:"317",c:345,r:"inline"},"310":{c:163,d:66,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"307",A:"#D8DDE4",x:"visible",aA:{a:[{i:0,b:"123",p:9,symbolOid:"84"},{i:0,b:"122",p:9,symbolOid:"84"},{i:0,b:"112",p:9,symbolOid:"84"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:7,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:17,b:96}}},{o:"207",p:"600px",cA:false,Y:375,Z:800,b:100,c:"#FFFFFF",L:[],bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["331","332"],n:"Untitled Layout","_":6,v:{"331":{h:"208",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",c:375,d:800,r:"inline",cQ:1,cR:1},"332":{c:46,d:40,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,f:1},{p:4,h:"61"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:9,b:128}}},{o:"213",p:"600px",cA:false,Y:375,Z:800,b:100,c:"#FFFFFF",L:[],bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["336","333","335","334"],n:"Untitled Layout","_":7,v:{"334":{c:375,d:40,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"219"},{p:4,h:"61"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:692},"335":{c:375,d:45,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,f:1},{p:4,h:"61"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:4,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:54},"336":{h:"214",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",c:375,d:800,r:"inline"},"333":{c:46,d:40,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,f:2},{p:4,h:"61"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:5}}},{o:"218",p:"600px",cA:false,Y:375,Z:800,b:100,c:"#FFFFFF",L:[],bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["340","337","338","339"],n:"Untitled Layout","_":8,v:{"337":{c:46,d:40,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"205"},{p:4,h:"61"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:5},"338":{c:69,d:40,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"219"},{p:4,h:"61"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:40,b:203},"340":{h:"224",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",c:375,d:800,r:"inline"},"339":{c:46,d:40,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"219"},{p:4,h:"61"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:4,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:199,b:203}}},{o:"221",p:"600px",cA:false,Y:375,Z:800,b:100,c:"#FFFFFF",L:[],bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["341","342"],n:"Untitled Layout","_":9,v:{"341":{h:"230",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",c:375,d:667,r:"inline"},"342":{c:45,d:60,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"83"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:330,b:0}}},{o:"128",p:"600px",cA:false,Y:375,Z:800,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["343","344"],n:"Untitled Layout","_":10,v:{"343":{w:"",h:"129",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",c:375,d:987,r:"inline"},"344":{c:46,d:40,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,f:1}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:16,b:125}}},{o:"133",p:"600px",cA:false,Y:375,Z:800,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["347","348","345","346"],n:"Untitled Layout","_":11,v:{"346":{c:375,d:62,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,f:1}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:4,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:370},"347":{h:"135",p:"no-repeat",x:"visible",a:-1,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",c:375,d:987,r:"inline",cQ:1,cR:1},"348":{c:46,d:40,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,f:2}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:7},"345":{c:375,d:62,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,f:1}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:142}}},{o:"147",p:"600px",cA:false,Y:375,Z:3520,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["349","350"],n:"Untitled Layout","_":12,v:{"349":{h:"148",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",c:375,d:3520,r:"inline",cQ:1,cR:1},"350":{c:339,d:38,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"235"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:16,b:191}}},{o:"238",p:"600px",cA:false,Y:375,Z:667,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{"244":{i:"244",n:"fill-login",z:0.05,b:[],a:[{f:"c",y:0,z:0.05,i:"e",e:1,s:0,o:"354"},{y:0.05,i:"e",s:1,z:0,o:"354",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["354","352","351","353"],n:"Untitled Layout","_":13,v:{"354":{h:"241",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:2,k:"div",c:375,d:667,r:"inline",e:0},"351":{c:343,d:95,I:"None",J:"None",K:"None",L:"None",aP:"text",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"244",p:8,z:false,symbolOid:"237",J:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:16,b:306},"352":{h:"239",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",c:375,d:667,r:"inline"},"353":{c:343,d:40,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,f:1}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:4,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:16,b:410}}},{o:"248",p:"600px",cA:false,Y:375,Z:667,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{"258":{i:"258",n:"seen",z:0.05,b:[],a:[{f:"c",y:0,z:0.05,i:"cY",e:"0",s:"1",o:"360"},{y:0.05,i:"cY",s:"0",z:0,o:"360",f:"c"}],f:30},"259":{i:"259",n:"show-list",z:0.08,b:[],a:[{f:"c",y:0,z:0.08,i:"cY",e:"0",s:"1",o:"355"},{y:0.08,i:"cY",s:"0",z:0,o:"355",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["359","356","355","361","360","357","358"],n:"Untitled Layout","_":14,v:{"356":{h:"249",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"355",z:1,k:"div",dB:"img",d:667,c:375,r:"inline"},"359":{c:49,d:53,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"259",p:8,z:true,symbolOid:"247",J:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:6,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:0},"355":{x:"visible",cY:"1",k:"div",c:375,d:667,z:5,a:0,j:"absolute",b:-1},"358":{c:54,d:53,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"259",p:8,z:false,symbolOid:"247",J:true},{b:"258",p:8,z:false,symbolOid:"247",J:false},{p:4,h:"61"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:319,b:0},"361":{h:"251",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"360",z:1,k:"div",dB:"img",d:54,c:375,r:"inline"},"357":{h:"253",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",c:375,d:667,r:"inline"},"360":{x:"visible",cY:"1",k:"div",c:375,d:54,z:2,e:1,a:0,j:"absolute",b:0}}},{o:"263",p:"600px",cA:false,Y:375,Z:667,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:[],n:"Untitled Layout","_":15,v:{}}],{},g,{},null,false,true,-1,true,true,true,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
