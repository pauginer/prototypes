//	HYPE.documents["index"]

(function(){(function k(){var h="index.hyperesources",e="index",d="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),b=0;b<f.length;b++){var a=f[b].src;if(null!=a&&-1!=a.indexOf("index_hype_generated_script.js")){h=a.substr(0,a.lastIndexOf("/"));break}}}catch(n){}null==window.HYPE_DocumentsToLoad&&(window.HYPE_DocumentsToLoad=[]);if(false==!1&&null==window.HYPE_248)null==window.HYPE_dtl_248?(window.HYPE_dtl_248=[],window.HYPE_dtl_248.push(k),
e=document.getElementsByTagName("head")[0],d=document.createElement("script"),d.type="text/javascript",d.src=h+"/HYPE.js?hype_version=248",e.appendChild(d)):window.HYPE_dtl_248.push(k);else{f=window.HYPE.documents;if(null!=f[e]){a=1;b=e;do e=""+b+"-"+a++;while(null!=f[e]);for(var c=document.getElementsByTagName("div"),a=!1,b=0;b<c.length;b++)if(c[b].id==d&&null==c[b].getAttribute("HYP_dn")){var a=1,g=d;do d=""+g+"-"+a++;while(null!=document.getElementById(d));c[b].id=d;a=!0;break}if(!1==a)return}for(var a=
new HYPE_248,c=[],c=[{name:"jumpToHashScene",source:"function(hypeDocument, element, event) {\t\t//URL parameters\n\t\tvar hash = window.location.hash;\n\t\tvar sceneName=hash.replace('#','');\n\t\thypeDocument.showSceneNamed(sceneName, hypeDocument.kSceneTransitionInstant);\n\t\n}",identifier:"38"},{name:"postSave",source:"function(hypeDocument, element, event) {\t//console.debug(saveCounter);\n\tif(saveCounter == 0){\n\thypeDocument.startTimelineNamed('first-publish')\n\t//console.debug(\"first save\");\n\t}\n\t\n\tsaveCounter = saveCounter +1;\n}",identifier:"39"}],g={},l={},b=0;b<c.length;b++)try{l[c[b].identifier]=c[b].name,g[c[b].name]=eval("(function(){return "+c[b].source+"})();")}catch(m){a.log(m),g[c[b].name]=function(){}}a.z_a({b:0,c:0,bQ:0,bC:0,d:0,aS:0,M:0,e:3,aT:0,N:0,f:2,O:0,g:5,aU:0,P:0,Q:0,aV:0,R:5,bG:3,aW:3,aI:0,S:0,T:0,l:2,aX:0,bH:2,m:5,bI:3,aJ:0,n:5,aK:0,bJ:3,X:0,aL:0,A:5,aZ:0,Y:1,B:5,bK:3,bL:3,C:5,D:5,t:0,E:0,G:5,bO:2,bA:5,a:0,bB:0});a.z_b({"10":{n:"first-publishing-exposure.png",p:1},"2":{n:"Redlink-callout.png",p:1},"15":{n:"first-draft.png",p:1},"3":{n:"saving-controls-active.png",p:1},"11":{n:"search-results.png",p:1},"4":{n:"save-dialog.png",p:1},"16":{n:"info-collab.png",p:1},"5":{n:"Draft.png",p:1},"12":{n:"invite-menu.png",p:1},"17":{n:"draft-menu.png",p:1},"6":{n:"Crosswalk.png",p:1},"13":{n:"invite-active.png",p:1},"7":{n:"saving-controls-publish.png",p:1},"18":{n:"info-discuss.png",p:1},"0":{n:"Traffic-lights.png",p:1},"8":{n:"publishing-confirmation.png",p:1},"14":{n:"Draft-started.png",p:1},"1":{n:"Redlink-callout-open.png",p:1},"9":{n:"homepage.png",p:1}});a.z_c([]);a.z_d([{x:0,p:"600px",c:"#FFFFFF",v:{"13":{k:"div",x:"visible",c:316,d:300,z:"2",a:648,j:"absolute",b:196},"6":{c:37,d:40,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,bF:"13",N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",aA:{a:[{b:"10",p:8}]},k:"div",O:0,z:"2",P:0,D:"#A0A0A0",C:"#A0A0A0",a:255,b:139},"4":{o:"content-box",h:"2",p:"no-repeat",a:-105,x:"visible",q:"100% 100%",b:0,j:"absolute",r:"inline",c:461,k:"div",z:"1",d:300,bF:"13",e:"0.000000",aP:"default"},"2":{o:"content-box",h:"0",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",aA:{a:[{b:"kTimelineDefaultIdentifier",p:3}]},k:"div",c:1280,d:900,z:"1",aP:"default"},"11":{c:157,d:40,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,bF:"13",N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",aA:{a:[{p:1,g:1,f:1}]},k:"div",O:0,z:"3",P:0,D:"#A0A0A0",C:"#A0A0A0",a:101,b:140},"5":{c:131,d:21,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",aA:{a:[{b:"kTimelineDefaultIdentifier",p:8}]},k:"div",O:0,z:"4",P:0,D:"#A0A0A0",C:"#A0A0A0",a:661,b:188}},n:"article",T:{"10":{i:"10",n:"callout",z:0.19,a:[{f:"2",y:0,z:0.09,i:"h",e:"1",s:"2",o:"4"},{f:"2",p:2,y:0.04,z:0.07,i:"ActionHandler",e:{a:[{b:"10",p:7}]},s:{a:[{b:"10",p:7}]},o:"10"},{y:0.09,i:"h",s:"1",z:0,o:"4",f:"2"},{f:"2",p:2,y:0.11,z:0.08,i:"ActionHandler",e:{a:[{b:"10",p:9,i:0}]},s:{a:[{b:"10",p:7}]},o:"10"},{f:"2",p:2,y:0.19,z:0,i:"ActionHandler",s:{a:[{b:"10",p:9,i:0}]},o:"10"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0.15,a:[{f:"2",p:2,y:0,z:0.04,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",p:7}]},s:{a:[{p:4,h:"38"}]},o:"kTimelineDefaultIdentifier"},{f:"2",y:0.04,z:0.05,i:"e",e:"1.000000",s:"0.000000",o:"4"},{f:"2",p:2,y:0.04,z:0.06,i:"ActionHandler",e:{a:[{b:"10",p:3}]},s:{a:[{b:"kTimelineDefaultIdentifier",p:7}]},o:"kTimelineDefaultIdentifier"},{y:0.09,i:"e",s:"1.000000",z:0,o:"4",f:"2"},{f:"2",p:2,y:0.1,z:0.05,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",p:7}]},s:{a:[{b:"10",p:3}]},o:"kTimelineDefaultIdentifier"},{f:"2",p:2,y:0.15,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",p:7}]},o:"kTimelineDefaultIdentifier"}],f:30}},o:"1"},{x:1,p:"600px",E:{a:[{b:"18",p:3}]},c:"#FFFFFF",v:{"63":{o:"content-box",h:"17",a:-196,x:"visible",q:"100% 100%",b:144,j:"absolute",r:"inline",aA:{a:[{b:"62",p:8}]},k:"div",c:164,d:112,z:"14",aP:"pointer",e:"0.000000"},"31":{c:124,d:43,I:"None",e:"1.000000",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",aA:{a:[{b:"33",p:3}]},k:"div",O:0,z:"8",P:0,D:"#A0A0A0",C:"#A0A0A0",a:1280,b:54},"25":{k:"div",x:"visible",c:1279,d:904,z:"4",e:"0.000000",a:0,j:"absolute",b:-910},"26":{c:90,d:32,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",aA:{a:[{b:"20",p:3}]},k:"div",O:0,z:"7",P:0,D:"#A0A0A0",C:"#A0A0A0",a:1147,b:57},"64":{o:"content-box",h:"16",a:670,x:"visible",q:"100% 100%",b:-176,j:"absolute",r:"inline",aA:{a:[{b:"kTimelineDefaultIdentifier",p:8}]},k:"div",c:392,d:230,z:"15",aP:"pointer",e:"0.000000"},"37":{o:"content-box",h:"8",p:"no-repeat",x:"visible",a:607,q:"100% 100%",b:71,j:"absolute",r:"inline",c:394,k:"div",z:"10",d:179,e:"0.000000"},"16":{o:"content-box",h:"5",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1280,k:"div",z:"1",d:900},"65":{o:"content-box",h:"18",a:670,x:"visible",q:"100% 100%",b:-270,j:"absolute",r:"inline",aA:{a:[{b:"kTimelineDefaultIdentifier",p:8}]},k:"div",c:392,d:230,z:"16",aP:"pointer",e:"0.000000"},"59":{o:"content-box",h:"15",a:692,x:"visible",q:"100% 100%",b:-283,j:"absolute",r:"inline",aA:{a:[{b:"kTimelineDefaultIdentifier",p:8}]},k:"div",c:348,d:265,z:"12",aP:"pointer",e:"0.000000"},"17":{I:"None",J:"None",a:199,x:"visible",i:"textwidget",j:"absolute",b:225,c:818,k:"div",z:"2",d:643,L:"None",U:"textwidget.html",e:"1.000000",V:"0",K:"None",W:""},"61":{c:83,d:30,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",aA:{a:[{b:"62",p:8}]},k:"div",O:0,z:"13",P:0,D:"#A0A0A0",C:"#A0A0A0",a:199,b:114},"23":{o:"content-box",h:"4",x:"visible",a:292,q:"100% 100%",b:215,j:"absolute",r:"inline",c:695,k:"div",z:"2",d:474,bF:"25"},"24":{c:1279,d:904,I:"None",e:"0.596072",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,bF:"25",N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",O:0,P:0,z:"1",C:"#A0A0A0",D:"#A0A0A0",a:0,b:0},"30":{c:100,d:46,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,bF:"25",N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",aA:{a:[{b:"18",p:9,i:2},{b:"20",p:9,i:0},{p:4,h:"39"}]},k:"div",O:0,z:"3",P:0,D:"#A0A0A0",C:"#A0A0A0",a:833,b:604},"29":{o:"content-box",h:"7",x:"visible",a:1017,q:"100% 100%",b:33,j:"absolute",r:"inline",c:256,k:"div",z:"6",d:82,e:"0.000000"},"35":{c:1072,d:774,I:"None",e:"0.000000",J:"None",K:"None",g:"#DDEEFF",L:"None",aP:"default",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",aA:{a:[{b:"42",p:9,i:0},{b:"kTimelineDefaultIdentifier",p:9,i:0}]},k:"div",O:0,z:"9",P:0,D:"#A0A0A0",C:"#A0A0A0",a:199,b:-750},"41":{o:"content-box",h:"10",a:1309,x:"visible",q:"100% 100%",b:69,bO:"0deg",r:"inline",aA:{a:[{b:"42",p:8}]},k:"div",c:324,d:203,z:"11",j:"absolute",e:"0.000000",aP:"pointer"},"19":{o:"content-box",h:"3",x:"visible",a:1009,q:"100% 100%",b:32,j:"absolute",r:"inline",c:256,k:"div",z:"3",d:82,e:"0.000000"}},n:"draft",T:{"42":{i:"42",n:"first-publish",z:1.04,j:{"0":[{g:171,c:171,h:1113,d:1471,i:171,e:171,f:1113,b:1471}],"1":[{g:171,c:171,h:1113,d:1113,i:171,e:171,f:1113,b:1113}],"2":[{g:171,c:171,h:1453,d:1113,i:171,e:171,f:1453,b:1113}]},a:[{o:"41",y:0,z:0.03,i:"a",e:951,a:"0",f:"2",s:1309},{o:"41",y:0,z:0.03,i:"b",e:69.5,a:"0",f:"2",s:69.5},{o:"41",y:0,z:0.03,i:"bO",e:"180deg",a:"0",f:"2",s:"180deg"},{f:"2",y:0,z:0.15,i:"b",e:90,s:-750,o:"35"},{f:"2",y:0.03,z:0.01,i:"e",e:"1.000000",s:"0.000000",o:"41"},{o:"41",y:0.03,z:0.25,i:"a",e:951,a:"1",f:"2",s:951},{o:"41",y:0.03,z:0.25,i:"bO",e:"0deg",a:"1",f:"2",s:"0deg"},{o:"41",y:0.03,z:0.25,i:"b",e:69.5,a:"1",f:"2",s:69.5},{f:"2",y:0.04,z:0.15,i:"e",e:"1.000000",s:"1.000000",o:"41"},{f:"2",p:2,y:0.15,z:0,i:"ActionHandler",s:{a:[{b:"42",p:7}]},o:"42"},{f:"2",y:0.15,z:0.11,i:"b",e:-750,s:90,o:"35"},{f:"2",y:0.19,z:0.08,i:"e",e:"0.000000",s:"1.000000",o:"41"},{y:0.26,i:"b",s:-750,z:0,o:"35",f:"2"},{y:0.27,i:"e",s:"0.000000",z:0,o:"41",f:"2"},{o:"41",y:0.28,z:0.06,i:"a",e:1291,a:"2",f:"2",s:951},{o:"41",y:0.28,z:0.06,i:"bO",e:"360deg",a:"2",f:"2",s:"0deg"},{o:"41",y:0.28,z:0.06,i:"b",e:69.5,a:"2",f:"2",s:69.5},{y:1.04,i:"bO",s:"360deg",z:0,o:"41",f:"2"},{y:1.04,i:"a",s:1291,z:0,o:"41",f:"2"},{y:1.04,i:"b",s:69.5,z:0,o:"41",f:"2"}],f:30},"33":{i:"33",n:"publish",z:1,a:[{f:"2",y:0,z:0.09,i:"h",e:"6",s:"5",o:"16"},{f:"2",y:0,z:1,i:"b",e:154,s:-750,o:"35"},{f:"2",y:0,z:1,i:"e",e:"0.000000",s:"1.000000",o:"31"},{f:"2",y:0,z:1,i:"a",e:1287,s:1017,o:"29"},{f:"2",y:0,z:1,i:"a",e:1287,s:1147,o:"26"},{f:"2",y:0,z:0.09,i:"b",e:171,s:225,o:"17"},{f:"2",y:0,z:0.09,i:"e",e:"0.000000",s:"0.000000",o:"29"},{f:"2",y:0,z:0.09,i:"e",e:"0.000000",s:"0.000000",o:"19"},{f:"2",y:0.03,z:0.07,i:"e",e:"1.000000",s:"0.000000",o:"37"},{y:0.09,i:"h",s:"6",z:0,o:"16",f:"2"},{y:0.09,i:"b",s:171,z:0,o:"17",f:"2"},{y:0.09,i:"e",s:"0.000000",z:0,o:"19",f:"2"},{y:0.09,i:"e",s:"0.000000",z:0,o:"29",f:"2"},{y:0.1,i:"e",s:"1.000000",z:0,o:"37",f:"2"},{y:1,i:"a",s:1287,z:0,o:"29",f:"2"},{y:1,i:"a",s:1287,z:0,o:"26",f:"2"},{y:1,i:"b",s:154,z:0,o:"35",f:"2"},{y:1,i:"e",s:"0.000000",z:0,o:"31",f:"2"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:3,a:[{f:"2",y:0,z:0.15,i:"e",e:"0.000000",s:"0.000000",o:"59"},{f:"2",y:0.11,z:0.03,i:"b",e:77,s:-283,o:"59"},{f:"2",y:0.14,z:0.1,i:"b",e:77,s:77,o:"59"},{f:"2",y:0.15,z:0.04,i:"b",e:0,s:-750,o:"35"},{f:"2",y:0.15,z:0.04,i:"e",e:"1.000000",s:"0.000000",o:"59"},{f:"2",p:2,y:0.19,z:0.26,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",p:7}]},s:{a:[{b:"kTimelineDefaultIdentifier",p:7}]},o:"kTimelineDefaultIdentifier"},{f:"2",y:0.19,z:0.04,i:"b",e:-750,s:0,o:"35"},{f:"2",y:0.19,z:0.02,i:"e",e:"0.000000",s:"1.000000",o:"59"},{y:0.21,i:"e",s:"0.000000",z:0,o:"59",f:"2"},{f:"2",y:0.23,z:0.18,i:"b",e:-750,s:-750,o:"35"},{f:"2",y:0.24,z:0.06,i:"b",e:-283,s:77,o:"59"},{y:1,i:"b",s:-283,z:0,o:"59",f:"2"},{f:"2",y:1.03,z:0.05,i:"b",e:144,s:-176,o:"64"},{f:"2",y:1.08,z:0.05,i:"e",e:"1.000000",s:"0.000000",o:"64"},{f:"2",y:1.08,z:0.14,i:"b",e:144,s:144,o:"64"},{f:"2",y:1.11,z:0.04,i:"b",e:0,s:-750,o:"35"},{f:"2",y:1.13,z:0.06,i:"e",e:"1.000000",s:"1.000000",o:"64"},{f:"2",p:2,y:1.15,z:1,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",p:7}]},s:{a:[{b:"kTimelineDefaultIdentifier",p:7}]},o:"kTimelineDefaultIdentifier"},{f:"2",y:1.15,z:0.04,i:"b",e:-750,s:0,o:"35"},{f:"2",y:1.19,z:0.03,i:"e",e:"0.000000",s:"1.000000",o:"64"},{f:"2",y:1.19,z:0.23,i:"b",e:-750,s:-750,o:"35"},{f:"2",y:1.22,z:0.05,i:"b",e:-176,s:144,o:"64"},{y:1.22,i:"e",s:"0.000000",z:0,o:"64",f:"2"},{y:1.27,i:"b",s:-176,z:0,o:"64",f:"2"},{f:"2",y:2.01,z:0.04,i:"b",e:280,s:-270,o:"65"},{f:"2",y:2.05,z:0.2,i:"b",e:280,s:280,o:"65"},{f:"2",y:2.07,z:0.06,i:"e",e:"1.000000",s:"0.000000",o:"65"},{f:"2",y:2.12,z:0.04,i:"b",e:0,s:-750,o:"35"},{f:"2",y:2.13,z:0.06,i:"e",e:"1.000000",s:"1.000000",o:"65"},{f:"2",p:2,y:2.15,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",p:7}]},o:"kTimelineDefaultIdentifier"},{f:"2",y:2.16,z:0.04,i:"b",e:-750,s:0,o:"35"},{f:"2",y:2.19,z:0.04,i:"e",e:"0.000000",s:"1.000000",o:"65"},{y:2.2,i:"b",s:-750,z:0,o:"35",f:"2"},{y:2.23,i:"e",s:"0.000000",z:0,o:"65",f:"2"},{f:"2",y:2.25,z:0.05,i:"b",e:-270,s:280,o:"65"},{y:3,i:"b",s:-270,z:0,o:"65",f:"2"}],f:30},"20":{i:"20",n:"save-dialog",z:0.1,a:[{f:"2",y:0,z:0.04,i:"b",e:0,s:-910,o:"25"},{f:"2",y:0.04,z:0.06,i:"e",e:"1.000000",s:"0.000000",o:"25"},{y:0.04,i:"b",s:0,z:0,o:"25",f:"2"},{y:0.1,i:"e",s:"1.000000",z:0,o:"25",f:"2"}],f:30},"18":{i:"18",n:"saving-controls",z:2.15,a:[{y:0,i:"e",s:"1.000000",z:0,o:"17",f:"2"},{f:"2",p:2,y:0.15,z:0.15,i:"ActionHandler",e:{a:[{b:"18",p:9,i:0.5}]},s:{a:[{b:"18",p:7}]},o:"18"},{y:0.15,i:"e",s:"1.000000",z:0,o:"19",f:"2"},{f:"2",p:2,y:1,z:1,i:"ActionHandler",e:{a:[{b:"18",p:7}]},s:{a:[{b:"18",p:9,i:0.5}]},o:"18"},{f:"2",y:1.11,z:0.04,i:"a",e:1120,s:1290,o:"31"},{y:1.15,i:"a",s:1120,z:0,o:"31",f:"2"},{f:"2",y:1.21,z:0.08,i:"e",e:"1.000000",s:"0.000000",o:"29"},{y:1.29,i:"e",s:"1.000000",z:0,o:"29",f:"2"},{f:"2",p:2,y:2,z:0.15,i:"ActionHandler",e:{a:[{b:"18",p:9,i:0.5}]},s:{a:[{b:"18",p:7}]},o:"18"},{f:"2",p:2,y:2.15,z:0,i:"ActionHandler",s:{a:[{b:"18",p:9,i:0.5}]},o:"18"}],f:30},"62":{i:"62",n:"draft-options",z:0.28,a:[{f:"2",y:0,z:0.04,i:"a",e:174,s:-566,o:"63"},{f:"2",y:0.04,z:0.2,i:"a",e:174,s:174,o:"63"},{f:"2",y:0.09,z:0.06,i:"e",e:"1.000000",s:"-1.000000",o:"63"},{f:"2",p:2,y:0.15,z:0,i:"ActionHandler",s:{a:[{b:"62",p:7}]},o:"62"},{f:"2",y:0.15,z:0.05,i:"e",e:"-1.000000",s:"1.000000",o:"63"},{y:0.2,i:"e",s:"-1.000000",z:0,o:"63",f:"2"},{f:"2",y:0.24,z:0.04,i:"a",e:-196,s:174,o:"63"},{y:0.28,i:"a",s:-196,z:0,o:"63",f:"2"}],f:30}},o:"7"},{x:2,p:"600px",c:"#FFFFFF",v:{"45":{o:"content-box",h:"9",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1280,k:"div",z:"1",d:900},"47":{c:48,d:30,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",aA:{a:[{p:1,g:1,f:1}]},k:"div",O:0,z:"3",P:0,D:"#A0A0A0",C:"#A0A0A0",a:790,b:459},"46":{aU:8,G:"#000000",aV:8,r:"inline",e:"0.000000",s:"Helvetica,Arial,Sans-Serif",t:14,Z:"break-word",aP:"text",w:"Pedestrian crossing",j:"absolute",x:"visible",aA:{a:[{b:"kTimelineDefaultIdentifier",p:8}]},k:"div",y:"preserve",yy:"pre",z:"2",aS:8,aT:8,a:456,b:459}},n:"home",T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0.04,a:[{f:"2",p:2,y:0.03,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",p:7}]},o:"kTimelineDefaultIdentifier"},{f:"2",y:0.03,z:0.01,i:"e",e:"1.000000",s:"0.000000",o:"46"},{y:0.04,i:"e",s:"1.000000",z:0,o:"46",f:"2"}],f:30}},o:"43"},{x:3,p:"600px",c:"#FFFFFF",v:{"50":{o:"content-box",h:"11",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1280,k:"div",z:"1",d:900},"51":{c:145,d:30,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",aA:{a:[{p:1,g:1,f:1}]},k:"div",O:0,z:"2",P:0,D:"#A0A0A0",C:"#A0A0A0",a:949,b:430}},n:"search",T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,a:[],f:30}},o:"49"},{x:4,p:"600px",c:"#FFFFFF",v:{"54":{I:"None",x:"visible",J:"None",a:199,b:241,j:"absolute",K:"None",c:519,k:"div",z:"2",d:440,L:"None",U:"htmlwidget.html",V:"0",W:""},"57":{c:1278,d:898,I:"None",J:"None",K:"None",L:"None",aP:"default",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",aA:{a:[{b:"kTimelineDefaultIdentifier",p:8}]},k:"div",O:0,z:"4",P:0,D:"#A0A0A0",C:"#A0A0A0",a:0,b:-930},"53":{o:"content-box",h:"14",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1280,k:"div",z:"1",d:900},"56":{o:"content-box",h:"12",a:1321,x:"visible",q:"100% 100%",b:196,j:"absolute",r:"inline",aA:{a:[{p:0}]},k:"div",c:269,d:223,z:"5",aP:"pointer",e:"0.000000"},"55":{o:"content-box",h:"13",a:1044,x:"visible",q:"100% 100%",b:151,j:"absolute",r:"inline",aA:{a:[{b:"kTimelineDefaultIdentifier",p:8}]},k:"div",c:220,d:50,z:"3",aP:"pointer",e:"0.000000"}},n:"draft-updated",T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:2,a:[{f:"2",y:0.15,z:0.03,i:"a",e:1011,s:1321,o:"56"},{f:"2",p:2,y:0.15,z:0.15,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",p:7}]},s:{a:[{b:"kTimelineDefaultIdentifier",p:7}]},o:"kTimelineDefaultIdentifier"},{f:"2",y:0.15,z:0.05,i:"e",e:"1.000000",s:"0.000000",o:"55"},{f:"2",y:0.18,z:0.05,i:"e",e:"1.000000",s:"0.000000",o:"56"},{f:"2",y:0.18,z:0.2,i:"a",e:1011,s:1011,o:"56"},{y:0.2,i:"e",s:"1.000000",z:0,o:"55",f:"2"},{f:"2",y:0.21,z:0.09,i:"b",e:0,s:-930,o:"57"},{f:"2",y:0.23,z:0.07,i:"e",e:"1.000000",s:"1.000000",o:"56"},{f:"2",p:2,y:1,z:0.15,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",p:7}]},s:{a:[{b:"kTimelineDefaultIdentifier",p:7}]},o:"kTimelineDefaultIdentifier"},{f:"2",y:1,z:0.07,i:"b",e:-930,s:0,o:"57"},{f:"2",y:1,z:0.07,i:"e",e:"0.000000",s:"1.000000",o:"56"},{y:1.07,i:"b",s:-930,z:0,o:"57",f:"2"},{y:1.07,i:"e",s:"0.000000",z:0,o:"56",f:"2"},{f:"2",y:1.08,z:0.14,i:"a",e:1321,s:1011,o:"56"},{f:"2",p:2,y:1.15,z:0.15,i:"ActionHandler",e:{a:[{}]},s:{a:[{b:"kTimelineDefaultIdentifier",p:7}]},o:"kTimelineDefaultIdentifier"},{y:1.22,i:"a",s:1321,z:0,o:"56",f:"2"},{f:"2",p:2,y:2,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",p:9,i:1}]},o:"kTimelineDefaultIdentifier"}],f:30}},o:"52"}]);a.z_e(l);a.z_p=g;a.z_f(0);a.z_g(d);a.z_h(h);a.z_i(0);a.z_j(false);
a.z_k(true);a.z_l(true);a.z_m(true);a.z_n(e);f[e]=a.API;document.getElementById(d).setAttribute("HYP_dn",e);a.z_o(this.body)}})();})();
