//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/index_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_601","HYPE_dtl_601",!0==(null!=a&&10>a||false==!0)?"HYPE-601.full.min.js":"HYPE-601.thin.min.js"),false==!0&&(a=a||l("HYPE_w_601","HYPE_wdtl_601","HYPE-601.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"speak",source:"function(hypeDocument, element, event) {// Example from: https://usefulangle.com/post/98/javascript-text-to-speech\n// list of languages is probably not loaded, wait for it\nif(window.speechSynthesis.getVoices().length == 0) {\n\twindow.speechSynthesis.addEventListener('voiceschanged', function() {\n\t\ttextToSpeech();\n\t});\n}\nelse {\n\t// languages list available, no need to wait\n\ttextToSpeech()\n}\n\nfunction textToSpeech() {\n\t// get all voices that browser offers\n\tvar available_voices = window.speechSynthesis.getVoices();\n\n\t// this will hold an english voice\n\tvar english_voice = '';\n\n\t// find voice by language locale \"en-US\"\n\t// if not then select the first voice\n\tfor(var i=0; i<available_voices.length; i++) {\n\t\tif(available_voices[i].lang === 'en-US'||available_voices[i].lang === 'en') {\n\t\t\tenglish_voice = available_voices[i];\n\t\t\tbreak;\n\t\t}\n\t}\n\tif(english_voice === '')\n\t\tenglish_voice = available_voices[0];\n\n\t// new SpeechSynthesisUtterance object\n\tvar utter = new SpeechSynthesisUtterance();\n\tutter.rate = 0.8;\n\tutter.pitch = 0.9;\n\tutter.text = \"The ukulele is commonly associated with music from Hawaii where the name roughly translates as jumping flea\";\n\tutter.voice = english_voice;\n\t\n\tutter.onstart = function() {\n\t\t//alert('Speech has finished');\n\t\thypeDocument.continueTimelineNamed('preview', hypeDocument.kDirectionReverse, false)\n\t}\n\n\t// event after text has been spoken\n\tutter.onend = function() {\n\t\t//alert('Speech has finished');\n\t\thypeDocument.continueTimelineNamed('preview', hypeDocument.kDirectionForward, false)\n\t}\n\n\t// speak\n\twindow.speechSynthesis.speak(utter);\n\t\n\t//Second part:\n\tutter = new SpeechSynthesisUtterance();\n\tutter.rate = 0.8;\n\tutter.pitch = 0.9;\n\tutter.text = \"perhaps because of the movement of the player's fingers.\";\n\tutter.voice = english_voice;\n\n\twindow.speechSynthesis.speak(utter);\n\n\t\n\t\n}\n\n\t\n}",identifier:"228"},{name:"pushState",source:"function(hypeDocument, element, event) {\tupdateState();\n\t\n}",identifier:"237"},{name:"focusOnEditor",source:"function(hypeDocument, element, event) {\t$(\"#container iframe\").contents().find(\"#editor\").focus();\n\t\n}",identifier:"266"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_601(c,e,{"3":{p:1,n:"mob-publish-preview.png",g:"173",t:"@1x"},"12":{p:1,n:"mob-section-selector.jpg",g:"18",o:true,t:"@1x"},"21":{p:1,n:"mob-trans-sen1.png",g:"112",t:"@1x"},"4":{p:1,n:"mob-new-selected.jpg",g:"89",o:true,t:"@1x"},"30":{p:1,n:"mob-welcome2.png",g:"55",t:"@1x"},"13":{p:1,n:"mob-selected-suggestion.jpg",g:"13",o:true,t:"@1x"},"5":{p:1,n:"mob-published-followup.png",g:"186",t:"@1x"},"22":{p:1,n:"mob-trans-panel-sen3.png",g:"166",t:"@1x"},"6":{p:1,n:"mob-section-overview.png",g:"29",t:"@1x"},"31":{p:1,n:"mob-ve-preview-text1.png",g:"222",t:"@1x"},"14":{p:1,n:"mob-section-overview-target.jpg",g:"36",o:true,t:"@1x"},"7":{p:1,n:"mob-published-section-highlight.png",g:"188",t:"@1x"},"23":{p:1,n:"mob-trans-panel-title.png",g:"78",t:"@1x"},"32":{p:1,n:"mob-welcome1.png",g:"53",t:"@1x"},"15":{p:1,n:"mob-suggestions.jpg",g:"5",o:true,t:"@1x"},"8":{p:1,n:"mob-search.png",g:"87",t:"@1x"},"24":{p:1,n:"mob-trans-sen3.png",g:"164",t:"@1x"},"9":{p:1,n:"mob-section-overview-compact-header-src.png",g:"40",t:"@1x"},"33":{p:1,n:"mob-ve-peek-base.jpg",g:"268",o:true,t:"@1x"},"16":{p:1,n:"mob-trans-panel-sen2.png",g:"153",t:"@1x"},"25":{p:1,n:"mob-trans-sen2.png",g:"151",t:"@1x"},"34":{p:1,n:"mob-ve-preview-text2.png",g:"224",t:"@1x"},"17":{p:1,n:"mob-trans-header.jpg",g:"71",o:true,t:"@1x"},"26":{p:1,n:"mob-trans-translated-highlighted-title.png",g:"103",t:"@1x"},"35":{p:1,n:"mob-ve-peek-expander.png",g:"271",t:"@1x"},"18":{p:1,n:"mob-trans-panel-sen1.png",g:"115",t:"@1x"},"27":{p:1,n:"mob-ve-preview.jpg",g:"123",o:true,t:"@1x"},"36":{p:1,n:"mob-ve-peek-text.png",g:"273",t:"@1x"},"19":{p:1,n:"mob-trans-content.png",g:"69",t:"@1x"},"28":{p:1,n:"mob-ve-editor.png",g:"121",t:"@1x"},"-1":{n:"PIE.htc"},"37":{p:1,n:"mob-ve-peek-nav1.png",g:"276",t:"@1x"},"29":{p:1,n:"mob-ve-preview2.jpg",g:"220",o:true,t:"@1x"},"-2":{n:"blank.gif"},"38":{p:1,n:"mob-ve-peek-nav2.png",g:"279",t:"@1x"},"39":{p:1,n:"mob-ve-peek-back.png",g:"285",t:"@1x"},"10":{p:1,n:"mob-section-overview-compact-header-tar.png",g:"42",t:"@1x"},"0":{p:1,n:"keyboard.png",g:"125",t:"@1x"},"1":{p:1,n:"mob-navigation.png",g:"32",t:"@1x"},"11":{p:1,n:"mob-section-overview-original.png",g:"34",t:"@1x"},"2":{p:1,n:"mob-article-published.jpg",g:"184",o:true,t:"@1x"},"20":{p:1,n:"mob-trans-highlight-title.png",g:"73",t:"@1x"}},h,[],d,[{n:"Suggestions",o:"1",X:[0]},{n:"NewTranslation",o:"83",X:[1]},{n:"SelectedSuggestion",o:"10",X:[2]},{n:"SectionSelector",o:"15",X:[3]},{n:"SectionOverview",o:"26",X:[4]},{n:"Welcome",o:"50",X:[5]},{n:"TranslationTitle",o:"66",X:[6]},{n:"TranslationSen1",o:"99",X:[7]},{n:"EditSen1",o:"118",X:[8]},{n:"TranslationSen2",o:"144",X:[9]},{n:"TranslationSen3",o:"157",X:[10]},{n:"PublishPreview",o:"170",X:[11]},{n:"Published",o:"181",X:[12]}],[{o:"3",p:"600px",cA:false,Y:375,Z:667,b:100,c:"#FFFFFF",L:[],bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["298","295","296","294","297"],n:"Untitled Layout","_":0,v:{"296":{c:186,d:52,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"295",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:2,f:1},{p:4,h:"237"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:10,b:55},"297":{c:298,d:116,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"295",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:2,e:"10"},{p:4,h:"237"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:16,b:833},"294":{h:"32",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:599,j:"absolute",bS:15,z:3,k:"div",dB:"img",d:69,c:375,r:"inline"},"298":{w:"",h:"5",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"295",d:1098,c:375,cQ:1,r:"inline",cR:1},"295":{k:"div",x:"auto",c:375,d:667,z:1,a:0,j:"absolute",bS:52,b:0}}},{o:"85",p:"600px",cA:false,Y:375,Z:667,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{"95":{i:"95",n:"search",z:0.02,b:[],a:[{f:"c",y:0,z:0.02,i:"cY",e:"1",s:"0",o:"299"},{y:0.02,i:"cY",s:"1",z:0,o:"299",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["301","303","299","306","304","300","305","302","307"],n:"Untitled Layout","_":1,v:{"304":{x:"visible",cY:"0",k:"div",c:375,d:1000,z:1,a:-1,j:"absolute",b:-1},"307":{c:278,d:58,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"304",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:6,e:"15"},{p:4,h:"237"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:49,b:220},"300":{c:41,d:46,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"299",A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,f:2},{p:4,h:"237"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:4,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:334,b:1},"303":{w:"",h:"87",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"299",d:667,c:375,r:"inline",e:1},"306":{h:"89",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"304",d:1000,c:375,cQ:1,r:"inline",cR:1},"299":{x:"visible",cY:"0",k:"div",c:375,d:667,z:3,a:0,j:"absolute",b:-1},"302":{c:374,d:65,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"299",A:"#D8DDE4",x:"visible",aA:{a:[{b:"95",p:8,z:false,symbolOid:"84",J:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:151},"305":{c:41,d:46,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"304",A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"},{p:4,h:"237"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:334,b:7},"301":{c:267,d:47,I:"None",J:"None",K:"None",L:"None",aP:"auto",M:0,N:0,bF:"299",A:"#D8DDE4",x:"visible",aA:{a:[{p:8,z:false,J:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:0}}},{o:"12",p:"600px",cA:false,Y:375,Z:667,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["309","310","308"],n:"Untitled Layout","_":2,v:{"308":{c:269,d:59,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:6,f:1},{p:4,h:"237"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:53,b:118},"309":{h:"13",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",c:375,d:1000,r:"inline",cQ:1,cR:1},"310":{c:41,d:64,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"},{p:4,h:"237"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:334,b:0}}},{o:"17",p:"600px",cA:false,Y:375,Z:667,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["313","311","314","312"],n:"Untitled Layout","_":3,v:{"313":{h:"18",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"311",d:1014,c:375,cQ:1,r:"inline",cR:1},"314":{c:67,d:66,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"311",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:7,e:"1"},{p:4,h:"237"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:309,b:0},"311":{k:"div",x:"auto",c:375,d:667,z:1,a:0,j:"absolute",b:0},"312":{c:374,d:54,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"311",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:5,f:1},{p:4,h:"237"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:1,b:185}}},{o:"28",p:"600px",cA:false,Y:375,Z:667,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{"47":{i:"47",n:"swap-preview",z:0.03,b:[],a:[{f:"c",y:0,z:0.03,i:"e",e:0,s:1,o:"319"},{f:"c",y:0,z:0.03,i:"e",e:0,s:1,o:"327"},{y:0.03,i:"e",s:0,z:0,o:"319",f:"c"},{y:0.03,i:"e",s:0,z:0,o:"327",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["319","317","315","316","318","320","329","328","321","322","325","327","324","323","326"],n:"Untitled Layout","_":4,v:{"329":{c:229,d:66,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"321",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:4,f:2},{p:4,h:"237"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:0},"318":{c:154,d:50,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"315",A:"#D8DDE4",x:"visible",aA:{a:[{b:"47",p:8,z:true,symbolOid:"27",J:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:64},"324":{h:"36",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"323",d:922,c:375,cQ:1,r:"inline",cR:1},"327":{h:"34",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:2,k:"div",bF:"323",d:922,c:375,cQ:1,e:1,r:"inline",cR:1},"316":{c:141,d:59,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"315",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:2,f:1},{p:4,h:"237"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:5,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:234,b:1},"322":{c:236,d:59,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"321",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:2,f:1},{p:4,h:"237"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:4,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:8,b:141},"319":{h:"40",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:2,k:"div",bF:"315",d:114,c:375,r:"inline",e:1},"320":{c:189,d:50,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,w:"",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"47",p:8,z:false,symbolOid:"27",J:false}]},j:"absolute",O:0,k:"div",dB:"button",z:4,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",bF:"315",P:0,a:156,b:64},"325":{c:154,d:50,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"323",A:"#D8DDE4",x:"visible",aA:{a:[{b:"47",p:8,z:true,symbolOid:"27",J:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:0},"328":{h:"29",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"321",z:1,k:"div",dB:"img",d:318,c:375,r:"inline"},"317":{h:"42",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"315",z:1,k:"div",dB:"img",d:114,c:375,r:"inline"},"323":{k:"div",x:"visible",c:375,d:922,z:2,a:0,j:"absolute",bF:"321",b:318},"326":{c:189,d:50,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"323",A:"#D8DDE4",x:"visible",aA:{a:[{b:"47",p:8,z:false,symbolOid:"27",J:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:4,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:156,b:0},"315":{k:"div",x:"visible",c:375,d:114,z:13,a:-1,j:"absolute",b:-114},"321":{k:"div",x:"auto",c:375,d:667,z:1,a:0,j:"absolute",b:0}}},{o:"52",p:"600px",cA:false,Y:375,Z:667,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{"65":{i:"65",n:"welcome",z:0.03,b:[],a:[{f:"c",y:0,z:0.02,i:"e",e:0,s:1,o:"332"},{f:"c",p:2,y:0.02,z:0.01,i:"ActionHandler",e:{a:[{}]},s:{a:[{b:"65",symbolOid:"51",p:7}]},o:"65"},{y:0.02,i:"e",s:0,z:0,o:"332",f:"c"},{f:"c",p:2,y:0.03,z:0,i:"ActionHandler",s:{a:[{d:1.1000000000000001,p:1,g:1,f:1},{p:4,h:"237"}]},o:"65"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["332","330","331"],n:"Untitled Layout","_":5,v:{"330":{h:"55",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",c:375,d:667,r:"inline"},"331":{c:200,d:52,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"65",p:8,z:false,symbolOid:"51",J:true}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:175,b:599},"332":{w:"",h:"53",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:2,k:"div",c:375,d:667,r:"inline",e:1}}},{o:"68",p:"600px",cA:false,Y:375,Z:667,b:100,c:"#FFFFFF",L:[],bY:1,d:375,U:{},T:{"102":{i:"102",n:"translate",z:0.15,b:[],a:[{f:"c",y:0,z:0.06,i:"e",e:1,s:0,o:"341"},{y:0.06,i:"e",s:1,z:0,o:"341",f:"c"},{f:"c",p:2,y:0.15,z:0,i:"ActionHandler",s:{a:[{d:0.10000000149011612,p:1,g:2,f:1},{p:4,h:"237"}]},o:"102"}],f:30},"82":{i:"82",n:"intro",z:0.18,b:[],a:[{f:"c",y:0,z:0.06,i:"e",e:1,s:0,o:"338"},{y:0.06,i:"e",s:1,z:0,o:"338",f:"c"},{f:"e",y:0.12,z:0.06,i:"b",e:411,s:461,o:"342"},{f:"e",y:0.12,z:0.06,i:"e",e:1,s:0,o:"342"},{y:0.18,i:"b",s:411,z:0,o:"342",f:"c"},{y:0.18,i:"e",s:1,z:0,o:"342",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0.12,b:[],a:[{f:"c",p:2,y:0.12,z:0,i:"ActionHandler",s:{a:[{b:"82",p:3,z:false,symbolOid:"67"}]},o:"kTimelineDefaultIdentifier"}],f:30},"241":{i:"241",n:"jump",z:0.08,b:[],a:[{f:"c",y:0,z:0.04,i:"b",e:400,r:true,s:410,o:"342"},{f:"c",y:0.04,z:0.04,i:"b",e:410,s:400,o:"342"},{y:0.08,i:"b",s:410,z:0,o:"342",f:"c"}],f:30}},bZ:180,O:["336","335","333","334","341","340","338","339","337","344","342","343"],n:"Untitled Layout","_":6,v:{"335":{h:"71",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"333",z:1,k:"div",dB:"img",d:49,c:375,r:"inline"},"341":{h:"103",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:4,k:"div",bF:"337",d:67,c:375,r:"none",e:0},"338":{h:"73",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",aA:{a:[{b:"241",p:3,z:false,symbolOid:"67"}]},z:2,k:"div",d:67,bF:"337",c:375,e:0,aP:"auto",r:"inline"},"333":{k:"div",x:"visible",c:375,d:49,z:6,a:0,j:"absolute",b:0},"344":{h:"78",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"342",z:1,k:"div",dB:"img",d:257,c:375,r:"inline"},"336":{c:44,d:49,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"333",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:4,e:"1"},{p:4,h:"237"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:0},"342":{x:"visible",k:"div",c:375,d:257,z:1,e:0,a:0,j:"absolute",bS:15,b:461},"339":{h:"69",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"337",z:1,k:"div",dB:"img",d:619,c:375,r:"inline"},"334":{c:103,d:49,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"333",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",P:0,a:271,b:0},"340":{h:"103",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:3,k:"div",bF:"337",d:67,c:375,r:"none",e:0},"343":{c:197,d:52,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"342",A:"#D8DDE4",x:"visible",aA:{a:[{b:"102",p:8,z:false,symbolOid:"67",J:true}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:68,b:205},"337":{k:"div",x:"visible",c:375,d:619,z:0,a:0,j:"absolute",bS:52,b:49}}},{o:"101",p:"600px",cA:false,Y:375,Z:667,b:100,c:"#FFFFFF",L:[],bY:1,d:375,U:{},T:{"240":{i:"240",n:"jump",z:0.08,b:[],a:[{f:"c",y:0,z:0.04,i:"b",e:400,r:true,s:410,o:"352"},{f:"c",y:0.04,z:0.04,i:"b",e:410,s:400,o:"352"},{y:0.08,i:"b",s:410,z:0,o:"352",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["351","349","348","350","346","345","347","354","352","353"],n:"Untitled Layout","_":7,v:{"346":{h:"112",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"345",z:1,k:"div",dB:"img",d:618,c:375,r:"inline"},"349":{h:"71",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"348",z:1,k:"div",dB:"img",d:49,c:375,r:"inline"},"352":{k:"div",x:"visible",c:375,d:257,z:6,a:0,j:"absolute",bS:15,b:410},"345":{k:"div",x:"visible",c:375,d:618,z:2,a:-1,j:"absolute",bS:52,b:49},"348":{k:"div",x:"visible",c:375,d:49,z:1,a:0,j:"absolute",bS:36,b:0},"351":{c:44,d:49,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"348",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:4,e:"1"},{p:4,h:"237"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:0},"354":{w:"",h:"115",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"352",d:257,c:375,r:"inline"},"347":{c:346,d:110,I:"None",J:"None",K:"None",L:"None",aP:"default",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"240",p:3,z:false,symbolOid:"100"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:11,b:113},"350":{c:103,d:49,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"348",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",P:0,a:271,b:0},"353":{c:375,d:151,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"352",A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,f:1},{p:4,h:"237"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:50}}},{o:"120",p:"600px",cA:false,Y:375,Z:667,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{"226":{i:"226",n:"preview",z:2,b:[],a:[{f:"c",y:0,z:1.17,i:"a",e:-260,r:true,s:0,o:"357"},{f:"c",y:0,z:1.17,i:"e",e:0,r:true,s:1,o:"357"},{f:"c",y:0.13,z:1.17,i:"a",e:0,r:true,s:260,o:"356"},{f:"c",y:0.13,z:1.17,i:"e",e:1,r:true,s:0,o:"356"},{f:"c",y:0.27,z:0.06,i:"e",e:1,r:true,s:0,o:"359"},{y:1.03,i:"e",s:1,z:0,o:"359",f:"c"},{y:1.17,i:"a",s:-260,z:0,o:"357",f:"c"},{y:1.17,i:"e",s:0,z:0,o:"357",f:"c"},{y:2,i:"a",s:0,z:0,o:"356",f:"c"},{y:2,i:"e",s:1,z:0,o:"356",f:"c"}],f:30},"236":{i:"236",n:"outro-back",z:0.24,b:[],a:[{f:"c",p:2,y:0,z:0.24,i:"ActionHandler",e:{a:[{d:1.1000000000000001,p:1,g:1,f:2}]},s:{a:[{b:"132",p:8,z:true,symbolOid:"119",J:false}]},o:"236"},{f:"c",p:2,y:0.24,z:0,i:"ActionHandler",s:{a:[{d:1.1000000000000001,p:1,g:1,f:2},{p:4,h:"237"}]},o:"236"}],f:30},"284":{i:"284",n:"peek-paginate",z:0.06,b:[],a:[{f:"c",y:0,z:0.06,i:"b",e:-54,r:true,s:-8,o:"376"},{f:"c",y:0.02,z:0.04,i:"e",e:0,r:true,s:1,o:"378"},{y:0.06,i:"b",s:-54,z:0,o:"376",f:"c"},{y:0.06,i:"e",s:0,z:0,o:"378",f:"c"}],f:30},"287":{i:"287",n:"peek-expand",z:0.09,b:[],a:[{f:"c",y:0,z:0.09,i:"d",e:158,s:105,o:"374"},{f:"c",y:0,z:0.09,i:"b",e:133,s:80,o:"375"},{f:"c",y:0,z:0.09,i:"d",e:101,s:49,o:"377"},{f:"c",y:0,z:0.09,i:"b",e:-8,s:-8,o:"376"},{f:"c",y:0,z:0.09,i:"b",e:156,s:105,o:"361"},{f:"c",y:0.01,z:0.01,i:"cY",e:"0",s:"1",o:"383"},{y:0.02,i:"cY",s:"0",z:0,o:"383",f:"c"},{y:0.09,i:"d",s:158,z:0,o:"374",f:"c"},{y:0.09,i:"b",s:133,z:0,o:"375",f:"c"},{y:0.09,i:"d",s:101,z:0,o:"377",f:"c"},{y:0.09,i:"b",s:-8,z:0,o:"376",f:"c"},{y:0.09,i:"b",s:156,z:0,o:"361",f:"c"}],f:30},"156":{i:"156",n:"outro",z:1,b:[],a:[{f:"c",p:2,y:0,z:1,i:"ActionHandler",e:{a:[{d:1.1000000000000001,p:1,g:1,f:1}]},s:{a:[{b:"132",p:8,z:true,symbolOid:"119",J:false}]},o:"156"},{f:"c",p:2,y:1,z:0,i:"ActionHandler",s:{a:[{d:0.25,p:1,g:2,f:1},{p:4,h:"237"}]},o:"156"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0.03,b:[],a:[{f:"c",p:2,y:0.03,z:0,i:"ActionHandler",s:{a:[{b:"132",p:8,z:false,symbolOid:"119",J:false}]},o:"kTimelineDefaultIdentifier"}],f:30},"132":{i:"132",n:"intro",z:0.24,b:[],a:[{f:"c",y:0,z:0.15,i:"e",e:0.70000000000000007,s:0,o:"370"},{f:"c",y:0,z:0.15,i:"b",e:105,s:414,o:"361"},{f:"c",y:0,z:0.01,i:"e",e:0,s:1,o:"374"},{f:"c",y:0,z:0.15,i:"e",e:1,s:0,o:"361"},{f:"c",y:0,z:0.15,i:"b",e:96,s:410,o:"371"},{f:"c",y:0.01,z:0.01,i:"a",e:0,s:391,o:"374"},{f:"c",y:0.01,z:0.07,i:"e",e:0,s:0,o:"374"},{y:0.02,i:"a",s:0,z:0,o:"374",f:"c"},{f:"c",y:0.08,z:0.09,i:"e",e:1,s:0,o:"355"},{f:"c",y:0.08,z:0.07,i:"e",e:1,s:0,o:"374"},{f:"c",p:2,y:0.15,z:0,i:"ActionHandler",s:{a:[{p:4,h:"266"}]},o:"132"},{y:0.15,i:"b",s:105,z:0,o:"361",f:"c"},{y:0.15,i:"e",s:1,z:0,o:"361",f:"c"},{y:0.15,i:"b",s:96,z:0,o:"371",f:"c"},{y:0.15,i:"e",s:1,z:0,o:"374",f:"c"},{y:0.15,i:"e",s:0.70000000000000007,z:0,o:"370",f:"c"},{y:0.17,i:"e",s:1,z:0,o:"355",f:"c"},{f:"c",y:0.21,z:0.03,i:"b",e:0,s:258,o:"367"},{y:0.24,i:"b",s:0,z:0,o:"367",f:"c"}],f:30}},bZ:180,O:["357","359","358","355","370","369","368","356","360","373","374","383","378","380","379","382","376","377","372","381","384","375","365","364","361","363","362","366","371","367"],n:"Untitled Layout","_":8,v:{"377":{k:"div",x:"hidden",c:375,d:49,z:3,a:0,j:"absolute",bF:"374",b:32},"369":{h:"71",p:"no-repeat",x:"visible",a:1,q:"100% 100%",b:0,j:"absolute",bF:"368",z:2,k:"div",dB:"img",d:49,c:375,r:"inline"},"360":{c:45,d:41,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"355",A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"228"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:5,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:330,b:0},"381":{c:48,d:46,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"379",A:"#D8DDE4",x:"visible",aA:{a:[{b:"284",p:8,z:false,symbolOid:"119",J:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:4,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:-2,b:53},"373":{h:"268",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"374",z:1,k:"div",dB:"img",d:158,c:375,r:"inline"},"365":{c:53,d:49,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"361",A:"#D8DDE4",x:"visible",aA:{a:[{b:"236",p:3,z:false,symbolOid:"119"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:4,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:0},"357":{h:"222",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:3,k:"div",bF:"355",d:96,c:375,r:"inline",e:1},"378":{h:"276",p:"no-repeat",x:"visible",a:-3,q:"100% 100%",b:0,j:"absolute",dB:"img",z:2,k:"div",bF:"379",d:105,c:50,r:"inline",e:1},"361":{x:"visible",k:"div",c:375,d:571,z:2,e:0,a:0,j:"absolute",bS:52,b:414},"382":{c:48,d:46,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"379",A:"#D8DDE4",x:"visible",aA:{a:[{b:"284",p:8,z:true,symbolOid:"119",J:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:5,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:-2,b:7},"374":{x:"hidden",k:"div",c:375,d:105,z:15,e:1,a:391,j:"absolute",bN:{a:[{p:10,y:true,c:1,A:1,K:1,symbolOid:"119",b:"287"}]},b:0},"366":{k:"div",x:"visible",c:375,d:258,z:14,a:0,j:"absolute",bS:15,b:409},"358":{h:"123",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"355",d:96,c:375,r:"inline",e:1},"379":{k:"div",x:"hidden",c:46,d:105,z:4,a:329,j:"absolute",bF:"374",b:0},"370":{c:375,d:667,I:"None",e:0,J:"None",K:"None",g:"#EAECF0",L:"None",M:0,N:0,bF:"368",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:3,P:0,D:"#D8DDE4",a:1,b:0},"362":{I:"None",x:"visible",a:13,i:"container",K:"None",j:"absolute",b:56,z:2,k:"div",L:"None",d:156,U:"iframe-container.html",bF:"361",c:340,V:"0",J:"None",W:""},"383":{h:"285",p:"no-repeat",x:"visible",a:-3,q:"100% 100%",b:0,j:"absolute",cY:"1",aA:{a:[{b:"287",p:8,z:true,symbolOid:"119",J:false}]},z:6,dB:"img",d:105,k:"div",bF:"379",aP:"pointer",c:50,r:"inline"},"375":{h:"271",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:80,j:"absolute",dB:"img",aA:{a:[{b:"287",p:8,z:false,symbolOid:"119",J:false}]},k:"div",z:6,d:25,bF:"374",c:375,aP:"pointer",r:"inline"},"367":{h:"125",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:258,j:"absolute",bF:"366",z:1,k:"div",dB:"img",d:258,c:375,r:"inline"},"359":{h:"220",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:2,k:"div",bF:"355",d:96,c:375,r:"inline",e:0},"371":{h:"115",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:410,j:"absolute",bF:"368",z:4,k:"div",dB:"img",d:257,c:375,r:"inline"},"363":{c:68,d:49,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"361",A:"#D8DDE4",x:"visible",aA:{a:[{b:"156",p:3,z:false,symbolOid:"119"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:307,b:0},"355":{x:"visible",k:"div",c:375,r:"none",d:96,z:11,e:0,a:0,j:"absolute",bN:{a:[{c:0,y:true,A:1,p:10,K:1,symbolOid:"119",b:"226"}]},b:0},"384":{c:375,d:32,I:"None",r:"inline",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"374",A:"#D8DDE4",x:"visible",aA:{a:[{b:"287",p:8,z:true,symbolOid:"119",J:false}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:7,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:126},"376":{w:"",h:"273",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:-8,j:"absolute",dB:"img",z:1,k:"div",bF:"377",d:112,c:375,r:"inline"},"368":{k:"div",x:"visible",c:376,d:667,z:1,a:-1,j:"absolute",b:0},"380":{h:"279",p:"no-repeat",x:"visible",a:-3,q:"100% 100%",b:0,j:"absolute",bF:"379",z:1,k:"div",dB:"img",d:105,c:50,r:"inline"},"372":{h:"112",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:49,j:"absolute",bF:"368",z:1,k:"div",dB:"img",d:618,c:375,r:"inline"},"364":{w:"",h:"121",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"361",d:571,c:375,r:"inline",e:1},"356":{h:"224",p:"no-repeat",x:"visible",a:260,q:"100% 100%",b:0,j:"absolute",dB:"img",z:4,k:"div",bF:"355",d:96,c:375,r:"inline",e:0}}},{o:"146",p:"600px",cA:false,Y:375,Z:667,b:100,c:"#FFFFFF",L:[],bY:1,d:375,U:{},T:{"168":{i:"168",n:"next",z:0.09,b:[],a:[{f:"c",y:0,z:0.09,i:"b",e:-179,s:0,o:"394"},{f:"c",p:2,y:0.09,z:0,i:"ActionHandler",s:{a:[{d:0.10000000149011612,p:1,g:2,f:1},{p:4,h:"237"}]},o:"168"},{y:0.09,i:"b",s:-179,z:0,o:"394",f:"c"}],f:30},"243":{i:"243",n:"jump",z:0.08,b:[],a:[{f:"c",y:0,z:0.04,i:"b",e:387,r:true,s:397,o:"389"},{f:"c",y:0.04,z:0.04,i:"b",e:397,s:387,o:"389"},{y:0.08,i:"b",s:397,z:0,o:"389",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["388","386","385","387","394","392","393","390","389","391"],n:"Untitled Layout","_":9,v:{"385":{k:"div",x:"visible",c:375,d:49,z:7,a:0,j:"absolute",b:0},"388":{c:44,d:49,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"385",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:4,e:"1"},{p:4,h:"237"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:0},"391":{c:199,d:52,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"389",A:"#D8DDE4",x:"visible",aA:{a:[{b:"168",p:3,z:false,symbolOid:"145"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:67,b:218},"394":{h:"151",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"392",z:1,k:"div",dB:"img",d:618,c:375,r:"inline"},"387":{c:103,d:49,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"385",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",P:0,a:271,b:0},"390":{h:"153",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"389",d:270,c:375,cQ:1,r:"inline",cR:1},"393":{c:347,d:113,I:"None",J:"None",K:"None",L:"None",aP:"default",M:0,N:0,bF:"392",A:"#D8DDE4",x:"visible",aA:{a:[{b:"243",p:3,z:false,symbolOid:"145"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:10,b:141},"386":{h:"71",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"385",z:1,k:"div",dB:"img",d:49,c:375,r:"inline"},"389":{k:"div",x:"visible",c:375,d:270,z:4,a:0,j:"absolute",bS:15,b:397},"392":{k:"div",x:"visible",c:375,d:618,z:1,a:0,j:"absolute",bS:52,b:49}}},{o:"159",p:"600px",cA:false,Y:375,Z:667,b:100,c:"#FFFFFF",L:[],bY:1,d:375,U:{},T:{"264":{i:"264",n:"jump",z:0.08,b:[],a:[{f:"c",y:0,z:0.04,i:"b",e:359,r:true,s:369,o:"396"},{f:"c",y:0.04,z:0.04,i:"b",e:369,s:359,o:"396"},{y:0.08,i:"b",s:369,z:0,o:"396",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["403","402","401","399","398","400","395","397","396"],n:"Untitled Layout","_":10,v:{"395":{c:354,d:160,I:"None",J:"None",K:"None",L:"None",aP:"default",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{b:"264",p:3,z:false,symbolOid:"158"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:11,b:91},"398":{k:"div",x:"visible",c:375,d:49,z:6,a:0,j:"absolute",b:0},"401":{c:44,d:49,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"398",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:4,e:"1"},{p:4,h:"237"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:0},"397":{h:"166",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"396",d:299,c:375,cQ:1,r:"inline",cR:1},"400":{c:103,d:49,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"398",A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:2,f:1},{p:4,h:"237"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:271,b:0},"403":{h:"164",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"402",z:1,k:"div",dB:"img",d:618,c:375,r:"inline"},"396":{k:"div",x:"visible",c:375,d:298,z:4,a:0,j:"absolute",bS:15,b:369},"399":{h:"71",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"398",z:1,k:"div",dB:"img",d:49,c:375,r:"inline"},"402":{k:"div",x:"visible",c:375,d:618,z:1,a:0,j:"absolute",bS:52,b:-130}}},{o:"172",p:"600px",cA:false,Y:375,Z:667,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["406","404","405"],n:"Untitled Layout","_":11,v:{"404":{w:"",h:"173",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",c:375,d:667,r:"inline"},"405":{c:91,d:49,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:2,f:1},{p:4,h:"237"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:3,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:284,b:0},"406":{c:39,d:46,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,A:"#D8DDE4",x:"visible",aA:{a:[{d:0.25,p:1,g:2,f:2},{p:4,h:"237"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:0,b:0}}},{o:"183",p:"600px",cA:false,Y:375,Z:667,b:100,c:"#FFFFFF",L:[],bY:1,d:375,U:{},T:{"194":{i:"194",n:"intro",z:1.03,b:[],a:[{f:"c",y:0,z:0.27,i:"b",e:-534,s:0,o:"411"},{f:"c",y:0.24,z:0.06,i:"e",e:1,s:0,o:"412"},{y:0.27,i:"b",s:-534,z:0,o:"411",f:"c"},{y:1,i:"e",s:1,z:0,o:"412",f:"c"},{f:"c",p:2,y:1.03,z:0,i:"ActionHandler",s:{a:[{b:"195",p:3,z:false,symbolOid:"182"}]},o:"194"}],f:30},"195":{i:"195",n:"followup",z:0.09,b:[],a:[{f:"e",y:0,z:0.09,i:"e",e:1,r:true,s:0,o:"407"},{f:"e",y:0,z:0.09,i:"b",e:389,r:true,s:489,o:"407"},{y:0.09,i:"e",s:1,z:0,o:"407",f:"c"},{y:0.09,i:"b",s:389,z:0,o:"407",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0.03,b:[],a:[{f:"c",p:2,y:0.03,z:0,i:"ActionHandler",s:{a:[{b:"194",p:3,z:false,symbolOid:"182"}]},o:"kTimelineDefaultIdentifier"}],f:30}},bZ:180,O:["413","411","410","408","407","412","409"],n:"Untitled Layout","_":12,v:{"408":{h:"186",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"407",z:1,k:"div",dB:"img",d:278,c:375,r:"inline"},"411":{k:"div",x:"visible",c:375,d:1201,z:1,a:0,j:"absolute",bF:"410",b:0},"407":{x:"visible",k:"div",c:375,d:278,z:5,e:0,a:0,j:"absolute",bS:15,b:489},"410":{k:"div",x:"visible",c:375,d:667,z:1,a:0,j:"absolute",bS:52,b:0},"413":{h:"184",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:1,k:"div",bF:"411",d:1201,c:375,cQ:1,r:"inline",cR:1},"409":{c:375,d:55,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,N:0,bF:"407",A:"#D8DDE4",x:"visible",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"15"},{p:4,h:"237"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:1,b:223},"412":{h:"188",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:591,j:"absolute",dB:"img",z:2,k:"div",bF:"411",d:325,c:375,r:"inline",e:0}}}],{},g,{},null,false,true,-1,true,true,true,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
