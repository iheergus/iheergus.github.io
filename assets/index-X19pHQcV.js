(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const pt=(i,e,t,n,r,s,o,a,c,d="เล่นเกม / สร้างสรรค์งาน")=>({id:i,name:`${t==="green"?"NOVERA":t==="red"?"AMBER":"INTERRA"} ${e}`,type:"GPU",mount:"pcie-x16",color:t==="green"?"#88cc8b":t==="red"?"#e47465":"#6fbbf3",team:t,vramGB:n,watts:r,lengthMm:s,fans:o,price:a,performance:c,role:d}),uo=[pt("gpu-4060ti8","RTX 4060 Ti 8GB","green",8,160,255,2,13900,1740),pt("gpu-4060ti16","RTX 4060 Ti 16GB","green",16,165,265,2,16900,1810),pt("gpu-4070","RTX 4070","green",12,200,280,2,19900,2200),pt("gpu-4070s","RTX 4070 SUPER","green",12,220,295,3,22900,2500),pt("gpu-4070ti","RTX 4070 Ti","green",12,285,310,3,26900,2750),pt("gpu-4070tis","RTX 4070 Ti SUPER","green",16,285,315,3,29900,3e3),pt("gpu-4080","RTX 4080","green",16,320,335,3,35900,3400),pt("gpu-4080s","RTX 4080 SUPER","green",16,320,340,3,37900,3600),pt("gpu-4090","RTX 4090","green",24,450,360,3,55900,4500),pt("gpu-4090d","RTX 4090 D","green",24,425,355,3,52900,4250),pt("gpu-6600","RX 6600","red",8,132,210,2,6500,1e3),pt("gpu-6650xt","RX 6650 XT","red",8,176,235,2,8500,1250),pt("gpu-6700xt","RX 6700 XT","red",12,230,270,2,11900,1800),pt("gpu-6750xt","RX 6750 XT","red",12,250,280,2,13900,1950),pt("gpu-7600","RX 7600","red",8,165,240,2,9500,1430),pt("gpu-7600xt","RX 7600 XT","red",16,190,260,2,12500,1610),pt("gpu-7700xt","RX 7700 XT","red",12,245,290,3,16900,2250),pt("gpu-7800xt","RX 7800 XT","red",16,263,305,3,19900,2750),pt("gpu-7900gre","RX 7900 GRE","red",16,260,320,3,22900,3e3),pt("gpu-7900xtx","RX 7900 XTX","red",24,355,365,3,32900,4e3),pt("gpu-a770","Arc A770 Compact 16GB","blue",16,225,220,2,11900,1750,"เน้นงานสร้างสรรค์ · ขนาดเล็ก (แบบจำลองเกม)"),pt("gpu-b58012","Arc B580 12GB · 2 พัดลม","blue",12,190,260,2,10900,2050,"ทำงาน / เล่นเกม · ขนาดเล็ก–กลาง"),{...pt("gpu-b58016","Arc B580 16GB · 3 พัดลม [รุ่นสมมติ]","blue",16,210,315,3,14900,2200,"ทำงาน / เล่นเกม · ขนาดกลาง–ใหญ่"),fictional:!0},{id:"psu-850",name:"SEASONOVA Focus 850",type:"PSU",mount:"psu",color:"#b9c4cd",price:3900,wattage:850,lengthMm:160,formFactor:"ATX"},{id:"psu-1000",name:"SEASONOVA Focus 1000",type:"PSU",mount:"psu",color:"#8b98a5",price:4900,wattage:1e3,lengthMm:170,formFactor:"ATX"}],cn=(i,e,t,n,r,s)=>({id:i,name:e,type:"CPU",mount:"cpu",socket:t,cores:n,watts:r,price:s,color:t==="AX5"?"#f1a660":"#6fbbf3"}),Pn=(i,e,t,n,r,s)=>({id:i,name:e,type:"RAM",mount:"dimm",generation:t,capacityGB:n,speedMT:r,price:s,watts:n>=32?7:5,color:t==="DDR5"?"#bea7ed":"#ec8e99"}),la=[cn("cpu-ax-7500f","AMBER Ryzora 5 7500F","AX5",6,65,4900),cn("cpu-ax-7700","AMBER Ryzora 7 7700","AX5",8,65,8900),cn("cpu-ax-7800x3d","AMBER Ryzora 7 7800X3D","AX5",8,120,13900),cn("cpu-ax-7900","AMBER Ryzora 9 7900","AX5",12,90,14900),cn("cpu-ax-7950x","AMBER Ryzora 9 7950X","AX5",16,170,19900),cn("cpu-lx-13100","INTERRA Coreon i3 13100","LX170",4,60,3900),cn("cpu-lx-13500","INTERRA Coreon i5 13500","LX170",14,110,7900),cn("cpu-lx-14400","INTERRA Coreon i5 14400","LX170",10,100,7200),cn("cpu-lx-13700","INTERRA Coreon i7 13700","LX170",16,150,12900),cn("cpu-lx-14900","INTERRA Coreon i9 14900","LX170",24,170,18900),Pn("ram-d4-16","KINGFORGE Fury D4 16 / 3200","DDR4",16,3200,1300),Pn("ram-d4-16-fast","KINGFORGE Fury D4 16 / 3600","DDR4",16,3600,1600),Pn("ram-d4-32","KINGFORGE Fury D4 32 / 3200","DDR4",32,3200,2400),Pn("ram-d5-8","CORVEX Vigor D5 8 / 4800","DDR5",8,4800,950),Pn("ram-d5-16-base","CORVEX Vigor D5 16 / 5200","DDR5",16,5200,1450),Pn("ram-d5-16-fast","CORVEX Vigor D5 16 / 6000","DDR5",16,6e3,2e3),Pn("ram-d5-32","CORVEX Vigor D5 32 / 5600","DDR5",32,5600,2900),Pn("ram-d5-32-fast","CORVEX Vigor D5 32 / 6000","DDR5",32,6e3,3400)],fr=96,ln=(i,e,t)=>({id:i,kind:e,position:t,rotation:[0,0,0]}),As=()=>[ln("cpu","cpu",[-.16,.2,.23]),ln("cooler","cooler",[-.16,.2,.3227]),ln("dimm-a","dimm",[.32,.16,.26]),ln("dimm-b","dimm",[.52,.16,.26]),ln("gpu","pcie-x16",[-.16,-.4,.24]),ln("ssd","m2",[-.14,-.19,.154])],on=[{id:"mb-ax",name:"ASORA Prime B650",type:"Motherboard",price:4200,mount:"board",color:"#287d72",socket:"AX5",ram:"DDR5",formFactor:"ATX",slots:As()},{id:"mb-lx",name:"GIGAFORGE B760M",type:"Motherboard",price:3400,mount:"board",color:"#365d9b",socket:"LX170",ram:"DDR4",formFactor:"Micro-ATX",slots:As()},{id:"mb-wide",name:"MSORA Titan X870",type:"Motherboard",price:9500,mount:"board",color:"#8c4365",socket:"AX5",ram:"DDR5",formFactor:"E-ATX",slots:As()},{id:"cpu-ax",name:"AMBER Ryzora 5 7600",type:"CPU",price:6200,mount:"cpu",color:"#f1a660",socket:"AX5",cores:6,watts:65},{id:"cpu-lx",name:"INTERRA Coreon i5 13400",type:"CPU",price:6500,mount:"cpu",color:"#6fbbf3",socket:"LX170",cores:10,watts:100},{id:"cool-air",name:"NOCTERRA Air U12",type:"CPU Cooler",price:1500,mount:"cooler",color:"#c99469",sockets:["AX5","LX170"],heightMm:155,coolingWatts:180,watts:5},{id:"ram-d5",name:"CORVEX Vigor D5 16",type:"RAM",price:1600,mount:"dimm",color:"#bea7ed",generation:"DDR5",capacityGB:16,speedMT:5600,watts:5},{id:"ram-d4",name:"KINGFORGE Fury D4 8",type:"RAM",price:800,mount:"dimm",color:"#ec8e99",generation:"DDR4",capacityGB:8,speedMT:3200,watts:4},{id:"gpu-fit",name:"NOVERA GeForceon N4060",type:"GPU",price:10500,mount:"pcie-x16",color:"#88cc8b",lengthMm:240,watts:115,vramGB:8},{id:"gpu-long",name:"AMBER Radeora R7900 XT",type:"GPU",price:25e3,mount:"pcie-x16",color:"#e47465",lengthMm:360,watts:330,vramGB:20},{id:"ssd-1",name:"SAMSORA EVOX 1T",type:"SSD",price:2200,mount:"m2",color:"#77c8d7",interface:"M.2 NVMe",capacityGB:1e3,lengthMm:80,watts:6},{id:"psu-650",name:"SEASONOVA Focus 650",type:"PSU",price:2500,mount:"psu",color:"#c2c9d0",formFactor:"ATX",wattage:650,lengthMm:140},{id:"psu-180",name:"CORVEX Basic 180",type:"PSU",price:650,mount:"psu",color:"#cbaf6d",formFactor:"ATX",wattage:180,lengthMm:140}],_u={id:"support-1",name:"FORMA Lift S1",type:"GPU Support",price:350,mount:"gpu-support",color:"#73949d",optional:!0};on.push(_u);on.push({id:"ssd-sata",name:"SAMSORA Solid S500",type:"SSD",price:1200,mount:"sata",color:"#466e93",interface:"SATA",capacityGB:500,lengthMm:100,watts:5});on.push({id:"gpu-slot",name:"NOVERA Mini N1030",type:"GPU",price:3500,mount:"pcie-x16",color:"#7db6ba",lengthMm:170,watts:30,vramGB:2,requiresPower:!1});Object.assign(on.find(i=>i.id==="gpu-fit"),{name:"NOVERA RTX 4060",team:"green",fans:2});Object.assign(on.find(i=>i.id==="gpu-long"),{name:"AMBER RX 7900 XT",team:"red",fans:3});on.push(...uo);on.push(...la);const al=new Set(la.map(i=>i.id)),cl=on.filter(i=>!al.has(i.id));function Ie(i){const e=on.find(t=>t.id===i);if(!e)throw new Error(`Unknown catalog ID: ${i}`);return e}const dn={name:"FORMA C01",formFactors:["ATX","Micro-ATX"],gpuClearanceMm:320,coolerClearanceMm:165,psuClearanceMm:180,psuFormFactor:"ATX",slots:[ln("board","board",[-.75,1.76,-.5]),ln("psu","psu",[-1.5,.33,.05]),ln("support","gpu-support",[-.18,.765,.28]),ln("sata","sata",[.3,1.65,-.44])],standoffs:[[-1.39,1.06,-.5],[-.14,1.06,-.5],[-1.39,1.77,-.5],[-.14,1.77,-.5],[-1.39,2.45,-.5],[-.14,2.45,-.5]]},Pr=["mb-ax","cpu-ax","cool-air","ram-d5","gpu-fit","ssd-1","psu-650"],ys=[{id:"compact",name:"FORMA Mini C02",size:"Compact",dimensions:[210,400,350],stretch:[.96,1,1],shape:"mesh",forms:["Micro-ATX"],gpu:270,cooler:165},{id:"standard",name:"FORMA C01",size:"Mid Tower",dimensions:[220,450,420],stretch:[1,1,1],shape:"slats",forms:["ATX","Micro-ATX"],gpu:320,cooler:165},{id:"tower",name:"MONORA Air T80",size:"Full Tower",dimensions:[250,540,500],stretch:[1.18,1.18,1.15],shape:"fans",forms:["E-ATX","ATX","Micro-ATX"],gpu:400,cooler:190},{id:"wide",name:"AQUORA Cube W90",size:"Wide Chamber",dimensions:[320,480,510],stretch:[1.17,1.05,1.45],shape:"window",forms:["E-ATX","ATX","Micro-ATX"],gpu:420,cooler:210}],Ss=[{id:"ivory",name:"งาช้าง",color:"#c6cec9"},{id:"black",name:"ดำกราไฟต์",color:"#303740"},{id:"red",name:"แดงไวน์",color:"#9d394b"},{id:"blue",name:"น้ำเงิน",color:"#477ca5"},{id:"mint",name:"เขียวมิ้นต์",color:"#79bba2"},{id:"pink",name:"ชมพู",color:"#d894b1"}],ua=[{id:"plain",name:"เรียบ"},{id:"stripe",name:"แถบคู่"},{id:"circuit",name:"วงจร"},{id:"checker",name:"ตารางแข่ง"}],da=i=>ys.find(e=>e.id===i);function qn(i){const e=da(i);return{...dn,slots:dn.slots.map(t=>t.id==="support"?{...t,position:[-.18,.33+.435*e.stretch[1],.28]}:t),name:e.name,formFactors:[...e.forms],gpuClearanceMm:e.gpu,coolerClearanceMm:e.cooler}}function vu(i,e){const t=document.createElement("button");t.className="side-panel-toggle",t.onclick=()=>e.toggleSidePanel(),i.append(t);const n=document.createElement("button");n.className="side-panel-toggle back-panel-toggle",n.onclick=()=>e.toggleBackPanel(),i.append(n);const r=document.createElement("button");r.className="side-panel-toggle rear-panel-toggle",r.onclick=()=>e.toggleRearPanel(),i.append(r);const s=document.createElement("button");s.className="case-toggle",s.textContent="▣ เลือกเคส / สี / ลาย",s.setAttribute("aria-expanded","false");const o=document.createElement("aside");o.className="case-panel",o.hidden=!0,o.id="case-panel",s.setAttribute("aria-controls",o.id),o.innerHTML=`<div class="inventory-heading"><h2>เลือกเคส</h2><button type="button" aria-label="ปิดตัวเลือกเคส">✕</button></div><label>รุ่นและขนาด<select name="case">${ys.map(p=>`<option value="${p.id}">${p.name} · ${p.size}</option>`).join("")}</select></label><p class="case-spec"></p><label>สี<select name="finish">${Ss.map(p=>`<option value="${p.id}">${p.name}</option>`).join("")}</select></label><label>ลาย<select name="pattern">${ua.map(p=>`<option value="${p.id}">${p.name}</option>`).join("")}</select></label><p class="case-note" aria-live="polite"></p><p>เปลี่ยนสีและลายได้ทันที · ขนาดเป็นสเปกสมมติในเกม</p>`,i.append(s,o);const a=document.createElement("nav");a.className="workbench-toolbar",a.setAttribute("aria-label","เครื่องมือโต๊ะประกอบ");const c=i.querySelector(".inventory-toggle");c&&a.append(c),a.append(s),i.append(a);const d=document.createElement("label");d.textContent="ฝาข้าง";const l=document.createElement("select");l.innerHTML='<option value="solid">ธรรมดา (ทึบ)</option><option value="glass">กระจกใส</option>',d.append(l),o.append(d),l.onchange=()=>e.setSidePanelStyle(l.value);const u=o.querySelector("[name=case]"),h=o.querySelector("[name=finish]"),f=o.querySelector("[name=pattern]"),g=()=>{o.hidden=!0,s.setAttribute("aria-expanded","false")};s.onclick=()=>{o.hidden=!o.hidden,s.setAttribute("aria-expanded",String(!o.hidden)),o.hidden||e.toggle(!1)},o.querySelector("button").onclick=()=>{g(),s.focus()};for(const p of[u,h,f])p.onchange=()=>e.configureCase(u.value,h.value,f.value);const _=e.subscribe(p=>{l.value=p.sidePanelStyle,l.disabled=!!p.operation,t.textContent=p.sidePanelInstalled?"▣ ถอดฝาข้างเคส":"▣ ใส่ฝาข้างเคส",t.disabled=!!p.operation,t.setAttribute("aria-pressed",String(p.sidePanelInstalled)),n.textContent=p.backPanelInstalled?"▣ ถอดฝาหลังเคส":"▣ ใส่ฝาหลังเคส",n.disabled=!!p.operation,n.setAttribute("aria-pressed",String(p.backPanelInstalled)),r.textContent=p.rearPanelInstalled?"▣ ถอดแผงท้าย (พอร์ต)":"▣ ใส่แผงท้าย (พอร์ต)",r.disabled=!!p.operation,r.setAttribute("aria-pressed",String(p.rearPanelInstalled)),p.inventoryOpen&&g(),u.value=p.caseId,h.value=p.finishId,f.value=p.patternId,u.disabled=!!p.operation||p.inventory.some(v=>v.location==="installed"),h.disabled=f.disabled=!!p.operation;const y=da(p.caseId),x=qn(p.caseId);o.querySelector(".case-spec").textContent=`${y.dimensions.join(" × ")} mm (กว้าง × สูง × ลึก) · ${x.formFactors.join(" / ")} · GPU ≤ ${x.gpuClearanceMm} mm · Cooler ≤ ${x.coolerClearanceMm} mm · PSU ATX ≤ ${x.psuClearanceMm} mm`,o.querySelector(".case-note").textContent=p.operation?"รอชิ้นส่วนเคลื่อนเสร็จก่อน":u.disabled?"ถอดชิ้นส่วนทั้งหมดก่อนเปลี่ยนรุ่นเคส":"เลือกรุ่นเพื่อเปลี่ยนเคสบนโต๊ะ",i.querySelector(".scene-label h2").textContent=y.name}),m=p=>{p.code==="Escape"&&g()};return window.addEventListener("keydown",m),{dispose(){_(),window.removeEventListener("keydown",m),o.remove(),s.remove(),t.remove(),n.remove(),r.remove(),c?.isConnected&&i.append(c),a.remove()}}}function ll(i){return Math.ceil((50+i.reduce((e,t)=>e+("watts"in t?t.watts:0),0))*1.25)}function ul(i,e,t=dn){const n=[],r=(a,c,d)=>n.push({code:a,severity:"error",blocks:"installation",message:c,action:d,partId:i.id}),s=e.find(a=>a.type==="Motherboard"),o=e.find(a=>a.type==="CPU");return i.type==="Motherboard"&&!t.formFactors.includes(i.formFactor)&&r("BOARD_FORM_FACTOR","ขนาดเมนบอร์ดไม่รองรับโดยเคส",`เลือกเคสที่รองรับ ${i.formFactor}`),i.type==="CPU"&&s&&i.socket!==s.socket&&r("CPU_SOCKET","CPU socket ไม่ตรงกับ motherboard",`ใช้ CPU socket ${s.socket}`),i.type==="RAM"&&s&&i.generation!==s.ram&&r("RAM_GENERATION","RAM generation ไม่ตรงกับ motherboard",`ใช้ RAM ${s.ram}`),i.type==="GPU"&&i.lengthMm>t.gpuClearanceMm&&r("GPU_LENGTH",`GPU ยาวเกิน case clearance ${t.gpuClearanceMm} mm`,"ใช้ GPU สั้นลงหรือเปลี่ยนเคส"),i.type==="PSU"&&(i.formFactor!==t.psuFormFactor||i.lengthMm>t.psuClearanceMm)&&r("PSU_FIT","PSU ไม่พอดีเคส",`ใช้ PSU ${t.psuFormFactor} ยาวไม่เกิน ${t.psuClearanceMm} mm`),i.type==="CPU Cooler"&&(i.heightMm>t.coolerClearanceMm&&r("COOLER_FIT","Cooler สูงเกินเคส",`ใช้ cooler สูงไม่เกิน ${t.coolerClearanceMm} mm`),o&&(!i.sockets.includes(o.socket)||i.coolingWatts<o.watts)&&r("COOLER_FIT","Cooler ไม่รองรับ CPU นี้","เปลี่ยน cooler ให้รองรับ socket และภาระความร้อน CPU")),n}function ha(i,e=dn){const t=i.flatMap(a=>ul(a,i,e)),n=["Motherboard","CPU","CPU Cooler","RAM","GPU","SSD","PSU"];for(const a of n){const c=i.filter(d=>d.type===a).length;c||t.push({code:"MISSING_PART",severity:"warning",blocks:"test",message:`ขาด ${a}`,action:`ติดตั้ง ${a}`,partType:a}),a!=="RAM"&&a!=="SSD"&&c>1&&t.push({code:"SLOT_CAPACITY",severity:"error",blocks:"installation",message:`${a} เกินจำนวน slot`,action:"ถอดชิ้นส่วนที่เกินออก",partType:a})}const r=i.find(a=>a.type==="Motherboard");r&&i.filter(a=>a.type==="RAM").length>r.slots.filter(a=>a.kind==="dimm").length&&t.push({code:"SLOT_CAPACITY",severity:"error",blocks:"installation",message:"เกินจำนวน slot dimm",action:"ลดจำนวนแรมให้พอดีสล็อต"});const s=ll(i),o=i.find(a=>a.type==="PSU");return o&&o.wattage<s&&t.push({code:"PSU_POWER",severity:"warning",blocks:"test",message:`PSU ไม่พอ: ต้องการอย่างน้อย ${s} W`,action:`เปลี่ยน PSU จาก ${o.wattage} W เป็นอย่างน้อย ${s} W`,partId:o.id}),{issues:t,requiredWatts:s,availableWatts:o?.wattage??0,canTest:t.length===0}}function dl(i){const e=Ie(i);return i==="gpu-long"?{x:.09875,z:-.05}:{x:.395*((e.type==="GPU"&&e.fans?Math.max(.85,Math.min(1.4,e.lengthMm/240)):1)-1),z:e.type==="GPU"&&e.fans===3?-.05:0}}const ur={atx24:[.65,.03,.19],eps:[-.5,.6,.19],fan:[-.12,.6,.2],"sata-data":[.58,-.53,.18]};function fi(i){const e=[];for(const t of i.inventory.filter(n=>n.location==="installed")){const n=Ie(t.catalogId),r=(s,o,a,c,d)=>e.push({key:`${t.instanceId}/${s}`,ownerId:t.instanceId,name:`${n.name} · ${o}`,kind:a,direction:c,position:d});if(n.type==="PSU")for(const[s,o]of["atx24","eps","pcie","sata-power"].entries())r(o,o,o,"source",[.214,.12+s%2*.1,-.1+Math.floor(s/2)*.16]);if(n.type==="Motherboard"&&(r("atx24","24-pin","atx24","sink",ur.atx24),r("eps","CPU power","eps","sink",ur.eps),i.inventory.some(s=>s.location==="installed"&&Ie(s.catalogId).mount==="sata")&&r("sata-data","SATA data","sata-data","sink",ur["sata-data"]),r("fan","CPU fan header","fan","sink",ur.fan)),n.type==="GPU"){if(n.requiresPower!==!1){const s=dl(n.id);r("pcie","GPU power 8-pin","pcie","sink",[.884+s.x*4,-.136,.198-s.z*4])}r("display","DisplayPort → จอภาพ","display","source",[-.884,-.244,.47])}n.type==="SSD"&&n.interface==="SATA"&&(r("sata-power","SATA power","sata-power","sink",[.25,-.04,.06]),r("sata-data","SATA data","sata-data","source",[.25,.04,.06])),n.type==="CPU Cooler"&&r("fan","Fan cable 4-pin","fan","source",[-.18,.12,.33])}return e.some(t=>t.kind==="display")&&e.push({key:"monitor/display",ownerId:"monitor",name:"จอบนโต๊ะ · DisplayPort",kind:"display",direction:"sink",position:[2.5,.8,-2.112]}),e}const yt=i=>["CHECKING","BOOTING","RUNNING"].includes(i.power);function di(i,e,t){if(yt(i))return"ปิด Power ก่อนแก้ไขสาย";if(i.operation)return"รอชิ้นส่วนเคลื่อนเสร็จก่อน";if(i.sidePanelInstalled)return"ถอดฝาข้างก่อนต่อสาย";const n=fi(i),r=n.find(o=>o.key===e),s=n.find(o=>o.key===t);return!r||!s?"ติดตั้งอุปกรณ์ทั้งสองชิ้นก่อนต่อสาย":r.direction!=="source"||s.direction!=="sink"||r.kind!==s.kind||r.ownerId===s.ownerId?"ชนิดสายหรือต้นทาง–ปลายทางไม่ตรงกัน":i.cables.some(o=>[o.from,o.to].some(a=>a===e||a===t))?"connector นี้มีสายต่ออยู่แล้ว":null}function $n(i){const e=ha(i.inventory.filter(t=>t.location==="installed").map(t=>Ie(t.catalogId)),qn(i.caseId)).issues.map(t=>`${t.message} — ${t.action}`);for(const t of fi(i).filter(n=>n.direction==="sink"&&n.kind!=="display"))i.cables.some(n=>n.to===t.key)||e.push(`ขาดสาย ${t.name}`);return e}function Vn(i){const t=qn(i.caseId).slots.map(n=>({...n,ownerId:"case",key:`case/${n.id}`}));for(const n of i.inventory){const r=Ie(n.catalogId);n.location==="installed"&&r.type==="Motherboard"&&t.push(...r.slots.map(s=>({...s,ownerId:n.instanceId,key:`${n.instanceId}/${s.id}`})))}return t}function ho(i,e,t){return i.inventory.find(n=>n.placement?.ownerId===e&&n.placement.slotId===t)}function Yn(i,e,t){if(yt(i))return"ปิด Power ก่อนติดตั้งชิ้นส่วน";if(i.sidePanelInstalled)return"ถอดฝาข้างเคสก่อนติดตั้งชิ้นส่วน";const n=qn(i.caseId);if(i.operation)return"กำลังเคลื่อนชิ้นส่วน กรุณารอ";const r=i.inventory.find(d=>d.instanceId===e);if(!r)return"ไม่พบชิ้นส่วน";if(r.location!=="tray")return"ชิ้นนี้ติดตั้งแล้ว ต้องถอดก่อน";const s=Ie(r.catalogId);if(s.type==="GPU Support"&&!i.inventory.some(d=>d.location==="installed"&&Ie(d.catalogId).type==="GPU"))return"ติดตั้ง GPU ก่อนใส่ขาตั้ง";const o=Vn(i).find(d=>d.key===t);if(!o)return"ต้องติดตั้ง motherboard ก่อนเลือก slot บนบอร์ด";if(o.kind!==s.mount)return`slot ${o.kind} ไม่รองรับ ${s.type}`;if(ho(i,o.ownerId,o.id))return"slot นี้มีชิ้นส่วนติดตั้งอยู่แล้ว";if(s.type==="CPU Cooler"&&!ho(i,o.ownerId,"cpu"))return"ติดตั้ง CPU ก่อน cooler";const a=i.inventory.filter(d=>d.location==="installed").map(d=>Ie(d.catalogId)),c=ul(s,a,n)[0];return c?`${c.message} · ${c.action}`:null}function hl(i,e){if(yt(i))return"ปิด Power ก่อนถอดอุปกรณ์";if(i.cables.some(r=>r.from.startsWith(e+"/")||r.to.startsWith(e+"/")))return"ถอดสายที่ต่อกับอุปกรณ์นี้ก่อน";const t=i.inventory.find(r=>r.instanceId===e);if(t&&Ie(t.catalogId).type==="CPU"&&i.cables.some(r=>r.to===t.placement?.ownerId+"/eps"))return"ถอดสาย CPU power ก่อนถอด CPU";if(i.sidePanelInstalled)return"ถอดฝาข้างเคสก่อนถอดชิ้นส่วน";if(i.operation)return"กำลังเคลื่อนชิ้นส่วน กรุณารอ";const n=i.inventory.find(r=>r.instanceId===e);return!n||n.location!=="installed"?"เลือกชิ้นส่วนที่ติดตั้งแล้วเพื่อถอด":Ie(n.catalogId).type==="GPU"&&i.inventory.some(r=>r.location==="installed"&&Ie(r.catalogId).type==="GPU Support")?"ถอดขาตั้งก่อนถอด GPU":i.inventory.some(r=>r.placement?.ownerId===e)?"ถอดชิ้นส่วนลูกทั้งหมดก่อนถอด motherboard":Ie(n.catalogId).type==="CPU"&&ho(i,n.placement.ownerId,"cooler")?"ถอด cooler ก่อน CPU":null}function xu(i,e){return{...i,location:e?"installed":"tray",placement:e}}const ds=[{id:"office",name:"01 · เครื่องสำนักงาน",description:"เครื่องทำงานประจำวันภายในงบ 20,000 cr",budget:2e4,reward:1800,minScore:1500,minRamGB:8,minStorageGB:500,referenceCase:"compact",referenceParts:["mb-lx","cpu-lx","cool-air","ram-d4","gpu-slot","ssd-sata","psu-650"]},{id:"gaming",name:"02 · เครื่องเล่นเกม",description:"ทำคะแนนจำลองอย่างน้อย 2,500 คะแนน",budget:31e3,reward:3200,minScore:2500,minRamGB:16,minStorageGB:1e3,referenceCase:"standard",referenceParts:["mb-ax","cpu-ax","cool-air","ram-d5","gpu-fit","ssd-1","psu-650"]},{id:"editing",name:"03 · เครื่องตัดต่อ",description:"RAM อย่างน้อย 32 GB และพื้นที่เก็บข้อมูลรวม 1,500 GB",budget:33e3,reward:4200,minScore:2500,minRamGB:32,minStorageGB:1500,referenceCase:"standard",referenceParts:["mb-ax","cpu-ax","cool-air","ram-d5","ram-d5","gpu-fit","ssd-1","ssd-sata","psu-650"]}],hi=i=>ds.find(e=>e.id===i);function fl(i){const e=i.find(a=>a.type==="CPU"),t=i.find(a=>a.type==="GPU"),n=i.filter(a=>a.type==="RAM"),r=n.reduce((a,c)=>a+c.capacityGB,0),s=i.filter(a=>a.type==="SSD").reduce((a,c)=>a+c.capacityGB,0);return{score:(e?.cores??0)*120+(t?.performance??(t?.vramGB??0)*180)+r*12+Math.floor((n.length?Math.min(...n.map(a=>a.speedMT)):0)/20),ramGB:r,storageGB:s,estimatedWatts:50+i.reduce((a,c)=>a+("watts"in c?c.watts:0),0),recommendedPsuWatts:ll(i)}}function fa(i){return JSON.stringify([i.caseId,i.inventory.filter(e=>e.location==="installed").map(e=>[e.instanceId,e.catalogId,e.placement]).sort((e,t)=>String(e[0]).localeCompare(String(t[0]))),i.cables.map(e=>[e.from,e.to,e.kind]).sort((e,t)=>e.join().localeCompare(t.join()))])}const pl=i=>i.inventory.filter(e=>e.location==="installed").map(e=>Ie(e.catalogId));function hs(i){const e=hi(i.activeJobId??"");if(!e)return[];const t=fl(pl(i)),n=!!i.benchmark&&i.benchmark.fingerprint===fa(i);return[{id:"budget",label:`ใช้งบ ${e.budget-i.jobBudget} / ${e.budget} cr`,passed:i.jobBudget>=0&&i.jobBudget<=e.budget},{id:"ownership",label:"ชิ้นส่วนในเครื่องซื้อด้วยงบงานนี้",passed:i.inventory.filter(r=>r.location==="installed").every(r=>r.purchasedFor===e.id)},{id:"hardware",label:"อุปกรณ์ สเปก และสายครบ",passed:$n(i).length===0},{id:"running",label:"เครื่องอยู่ในสถานะ RUNNING",passed:i.power==="RUNNING"},{id:"ram",label:`RAM ${t.ramGB} / ${e.minRamGB} GB`,passed:t.ramGB>=e.minRamGB},{id:"storage",label:`พื้นที่เก็บข้อมูล ${t.storageGB} / ${e.minStorageGB} GB`,passed:t.storageGB>=e.minStorageGB},{id:"benchmark",label:"รัน benchmark ของเครื่องปัจจุบันแล้ว",passed:n},{id:"score",label:`คะแนนจำลอง ${n?i.benchmark.score:"—"} / ${e.minScore}`,passed:n&&i.benchmark.score>=e.minScore}]}function ml(i){return!!i.activeJobId&&!i.operation&&!i.completedJobs.includes(i.activeJobId)&&hs(i).every(e=>e.passed)}const Gn=[["ติดตั้งเมนบอร์ด","เลือกเมนบอร์ดบนถาด แล้วคลิกสล็อตสีเขียวในเคส"],["ติดตั้ง CPU","เลือก CPU ที่ socket ตรงกับเมนบอร์ด แล้วใส่ช่อง CPU"],["ติดตั้งชุดระบายความร้อน","เลือก CPU Cooler แล้วติดตั้งบน CPU"],["ติดตั้ง RAM","เลือก RAM ที่ตรงกับเมนบอร์ด แล้วใส่ช่อง DIMM"],["ติดตั้งการ์ดจอ","เลือก GPU แล้วติดตั้งช่อง PCIe"],["ติดตั้ง SSD","ใส่ M.2 บนเมนบอร์ด หรือ SATA SSD ในเคส"],["ติดตั้ง PSU","เลือก PSU ที่กำลังไฟเพียงพอ แล้วติดตั้งด้านล่างเคส"],["ต่อสายและตรวจเครื่อง","เปิดเมนูต่อสาย ต่อสายที่ยังขาด และแก้รายการปัญหาเหนือปุ่มเปิดเครื่อง"],["เปิดเครื่องครั้งแรก","กดเปิดเครื่อง รอจนสถานะเป็น “เปิดแล้ว”"]];function yu(i){let e=i.tutorial.step;const t=["Motherboard","CPU","CPU Cooler","RAM","GPU","SSD","PSU"];for(;e<Gn.length&&(e<7?i.inventory.some(r=>r.location==="installed"&&Ie(r.catalogId).type===t[e]):e===7?$n(i).length===0:i.power==="RUNNING");)e++;return{...i.tutorial,step:e}}function Vi(){return{activeJobId:null,jobBudget:0,rewardMoney:0,completedJobs:[],nextPurchaseId:1,benchmark:null,lastDelivery:null,cables:[],nextCableId:1,wiringMode:!1,selectedTerminal:null,power:"OFF",powerElapsed:0,powerErrors:[],sidePanelStyle:"solid",rearPanelInstalled:!0,backPanelInstalled:!0,sidePanelInstalled:!1,caseId:"standard",finishId:"ivory",patternId:"plain",phase:"inventory",workstation:"01",selectedInstanceId:null,inventoryOpen:!1,benchSelection:{},tutorial:{step:0,skipped:!1},operation:null,nextOperationId:1,message:"เลือก CPU/RAM และอุปกรณ์จากถาด · เลือกการ์ดจอจากคลังด้านซ้าย",inventory:[...on.filter(i=>!["support-1","ssd-sata","gpu-slot",...uo.map(e=>e.id),...la.map(e=>e.id)].includes(i.id)).map((i,e)=>({instanceId:`part-${String(e+1).padStart(3,"0")}`,catalogId:i.id,location:"tray",placement:null})),{instanceId:"part-014",catalogId:"ram-d5",location:"tray",placement:null},{instanceId:"part-015",catalogId:"support-1",location:"tray",placement:null},{instanceId:"part-016",catalogId:"ssd-sata",location:"tray",placement:null},{instanceId:"part-017",catalogId:"gpu-slot",location:"tray",placement:null},{instanceId:"part-018",catalogId:"ram-d4",location:"tray",placement:null},...uo.map((i,e)=>({instanceId:`part-${100+e}`,catalogId:i.id,location:"tray",placement:null}))]}}function Su(i,e){if(i.operation||!i.inventory.some(n=>n.instanceId===e))return i;const t=i.inventory.find(n=>n.instanceId===e);return{...i,selectedInstanceId:e,benchSelection:t.location==="tray"?{...i.benchSelection,[Ie(t.catalogId).type]:e}:i.benchSelection}}function Mu(i=Vi()){let e=i;const t=new Set,n=()=>{e={...e,tutorial:yu(e)},t.forEach(r=>r(e))};return{getState:()=>e,setTutorial(r){e={...e,tutorial:{...e.tutorial,skipped:r}},n()},acceptJob(r){const s=hi(r);!s||e.activeJobId||e.completedJobs.includes(r)||e.operation||yt(e)||(e={...e,benchSelection:{},activeJobId:r,jobBudget:s.budget,inventory:[],cables:[],selectedInstanceId:null,selectedTerminal:null,wiringMode:!1,power:"OFF",powerErrors:[],powerElapsed:0,benchmark:null,lastDelivery:null,sidePanelInstalled:!1,caseId:s.referenceCase,message:`รับงาน ${s.name} · ได้งบจัดซื้อ ${s.budget} cr · เลือกซื้อชิ้นส่วน`},n())},buyPart(r){const s=cl.find(a=>a.id===r);if(!s||!e.activeJobId||e.operation||yt(e))return;if(s.price>e.jobBudget){e={...e,message:"งบงานไม่พอ · คืนชิ้นส่วนที่ยังอยู่บนถาดเพื่อรับงบคืน"},n();return}if(e.inventory.length>=fr){e={...e,message:"คลังเต็ม · คืนชิ้นส่วนที่ไม่ใช้ก่อนซื้อเพิ่ม"},n();return}const o={instanceId:`purchase-${e.nextPurchaseId}`,catalogId:r,location:"tray",placement:null,purchasedFor:e.activeJobId,paidPrice:s.price};e={...e,benchSelection:{...e.benchSelection,[s.type]:o.instanceId},inventory:[...e.inventory,o],jobBudget:e.jobBudget-s.price,nextPurchaseId:e.nextPurchaseId+1,message:`ซื้อ ${s.name} แล้ว · วางในช่องบนถาดแล้ว`},n()},returnPart(r){const s=e.inventory.find(a=>a.instanceId===r);if(!e.activeJobId||!s||s.location!=="tray"||s.purchasedFor!==e.activeJobId||s.paidPrice===void 0||e.operation||yt(e))return;const o={...e.benchSelection};o[Ie(s.catalogId).type]===r&&delete o[Ie(s.catalogId).type],e={...e,benchSelection:o,inventory:e.inventory.filter(a=>a.instanceId!==r),jobBudget:e.jobBudget+s.paidPrice,selectedInstanceId:null,message:"คืนชิ้นส่วนแล้ว · เงินกลับเข้างบงาน"},n()},runBenchmark(){if(e.power!=="RUNNING"||e.operation||$n(e).length){e={...e,message:"ต้องเปิดเครื่องจนเป็น RUNNING ก่อน benchmark"},n();return}const r={...fl(pl(e)),fingerprint:fa(e)};e={...e,benchmark:r,message:`Benchmark จำลอง: ${r.score} คะแนน · ดูผลในงาน / ร้านค้า`},n()},deliverJob(){if(!ml(e)){e={...e,message:e.activeJobId?`ยังส่งไม่ได้: ${hs(e).filter(o=>!o.passed).map(o=>o.label).join(" · ")}`:"ไม่มีงานที่พร้อมส่ง"},n();return}const r=hi(e.activeJobId),s=e.inventory.filter(o=>o.location==="installed");e={...e,benchSelection:{},lastDelivery:{jobId:r.id,reward:r.reward,score:e.benchmark.score,cost:s.reduce((o,a)=>o+(a.paidPrice??0),0),returnedParts:e.inventory.length-s.length},rewardMoney:e.rewardMoney+r.reward,completedJobs:[...e.completedJobs,r.id],activeJobId:null,jobBudget:0,inventory:[],cables:[],selectedInstanceId:null,selectedTerminal:null,wiringMode:!1,power:"OFF",powerElapsed:0,powerErrors:[],benchmark:null,message:`ส่งงานสำเร็จ · รับรางวัล ${r.reward} cr · รับงานถัดไปได้เลย`},n()},toggleWiring(){e.operation||yt(e)||(e={...e,wiringMode:!e.wiringMode,selectedInstanceId:null,selectedTerminal:null},n())},connectCable(r,s){const o=di(e,r,s);if(o){e={...e,message:o},n();return}const a=fi(e).find(c=>c.key===s);e={...e,cables:[...e.cables,{id:e.nextCableId,from:r,to:s,kind:a.kind}],nextCableId:e.nextCableId+1,selectedTerminal:null,selectedInstanceId:null,powerErrors:[],message:"ต่อสายสำเร็จ · เก็บสายตามช่องเดินสายแล้ว"},n()},chooseTerminal(r){if(e.operation||yt(e))return;if(e.sidePanelInstalled){e={...e,message:"ถอดฝาข้างก่อนต่อสาย"},n();return}const s=fi(e).find(o=>o.key===r);if(s){if(e.selectedTerminal){const o=di(e,e.selectedTerminal,r);o?e={...e,message:o}:e={...e,cables:[...e.cables,{id:e.nextCableId,from:e.selectedTerminal,to:r,kind:s.kind}],nextCableId:e.nextCableId+1,selectedTerminal:null,message:"ต่อสายสำเร็จ"}}else{if(s.direction!=="source"||e.cables.some(o=>o.from===r)){e={...e,message:"เลือก connector ต้นทางที่ว่างก่อน"},n();return}e={...e,wiringMode:!0,selectedInstanceId:null,selectedTerminal:r,message:"เลือก connector ปลายทางที่ไฮไลต์"}}n()}},disconnectCable(r){if(yt(e)||e.operation||e.sidePanelInstalled){e={...e,message:"ปิด Power และเปิดฝาข้างก่อนถอดสาย"},n();return}e={...e,cables:e.cables.filter(s=>s.id!==r),selectedTerminal:null,message:"ถอดสายแล้ว"},n()},powerOff(){e={...e,benchmark:null,power:"OFF",powerElapsed:0,powerErrors:[],message:"ปิดเครื่องแล้ว · แก้ไขอุปกรณ์และสายได้"},n()},pressPower(){e.operation||yt(e)||(e={...e,benchmark:null,power:"CHECKING",powerElapsed:0,powerErrors:[],selectedInstanceId:null,selectedTerminal:null,wiringMode:!1,message:"กำลังตรวจอุปกรณ์และสาย…"},n())},setSidePanelStyle(r){e.operation||!["solid","glass"].includes(r)||(e={...e,sidePanelStyle:r,message:r==="glass"?"เปลี่ยนฝาข้างเป็นกระจกแล้ว":"เปลี่ยนฝาข้างเป็นแบบทึบแล้ว"},n())},toggleRearPanel(){if(e.operation)return;const r=!e.rearPanelInstalled;e={...e,rearPanelInstalled:r,message:r?"ใส่แผงท้ายแล้ว · ช่องโครงยึด GPU ยังเปิดอยู่":"ถอดแผงท้ายไว้บนแท่นแล้ว"},n()},toggleBackPanel(){if(e.operation)return;const r=!e.backPanelInstalled;e={...e,backPanelInstalled:r,message:r?"ใส่ฝาหลังแล้ว":"ถอดฝาหลังไว้บนแท่นแล้ว"},n()},toggleSidePanel(){if(e.operation)return;const r=!e.sidePanelInstalled;e={...e,sidePanelInstalled:r,selectedInstanceId:null,message:r?"ใส่ฝาข้างแล้ว · ถอดฝาก่อนประกอบหรือถอดชิ้นส่วน":"ถอดฝาข้างไว้บนแท่นแล้ว · พร้อมประกอบ"},n()},configureCase(r,s,o){if(!e.operation&&!(!ys.some(a=>a.id===r)||!Ss.some(a=>a.id===s)||!ua.some(a=>a.id===o))){if(r!==e.caseId&&e.inventory.some(a=>a.location==="installed")){e={...e,message:"ถอดชิ้นส่วนกลับถาดให้ครบก่อนเปลี่ยนรุ่นเคส (เปลี่ยนสีและลายได้ทันที)"},n();return}e={...e,caseId:r,finishId:s,patternId:o,selectedInstanceId:null,message:"เปลี่ยนเคส / สี / ลายแล้ว"},n()}},select(r){if(e.operation)return;e={...e,wiringMode:!1,selectedTerminal:null},e=Su(e,r);const s=e.inventory.find(o=>o.instanceId===r);if(s){const a=Vn(e).filter(c=>c.kind===Ie(s.catalogId).mount).map(c=>Yn(e,r,c.key));e={...e,message:s.location==="installed"?"เลือกแล้ว: คลิกเมาส์ขวาบนฉากเพื่อถอดกลับถาด":a.some(c=>c===null)?"คลิก slot สีเขียวเพื่อติดตั้ง · คลิกเมาส์ขวายกเลิก":a[0]??"ติดตั้ง motherboard ก่อนชิ้นส่วนบนบอร์ด"}}n()},cancel(){e={...e,selectedTerminal:null},e.operation?e={...e,operation:null,selectedInstanceId:null,message:"ยกเลิกการเคลื่อนแล้ว ชิ้นส่วนกลับตำแหน่งเดิม"}:e={...e,selectedInstanceId:null,message:"ยกเลิกการเลือกแล้ว"},n()},install(r){if(e.operation)return;const s=e.selectedInstanceId,o=s?Yn(e,s,r):"เลือกชิ้นส่วนก่อน";if(o){e={...e,message:o},n();return}const a=Vn(e).find(c=>c.key===r);e={...e,operation:{id:e.nextOperationId,instanceId:s,from:null,to:{ownerId:a.ownerId,slotId:a.id},elapsed:0,duration:.65},nextOperationId:e.nextOperationId+1,message:"กำลังติดตั้ง… · คลิกเมาส์ขวายกเลิก"},n()},remove(){if(e.operation)return;const r=e.selectedInstanceId,s=r?hl(e,r):"เลือกชิ้นส่วนก่อน";if(s){e={...e,message:s},n();return}const o=e.inventory.find(a=>a.instanceId===r);e={...e,benchSelection:{...e.benchSelection,[Ie(o.catalogId).type]:r},operation:{id:e.nextOperationId,instanceId:r,from:o.placement,to:null,elapsed:0,duration:.65},nextOperationId:e.nextOperationId+1,message:"กำลังถอด… · คลิกเมาส์ขวายกเลิก"},n()},tick(r){if(!Number.isFinite(r)||r<=0)return;if(e.power==="CHECKING"||e.power==="BOOTING"){const a=e.powerElapsed+r;if(a>=1){const c=$n(e);c.length?e={...e,power:"ERROR",powerElapsed:0,powerErrors:c,message:"เปิดไม่สำเร็จ · ดูสาเหตุใน Power / สาย"}:e.power==="CHECKING"?e={...e,power:"BOOTING",powerElapsed:0,message:"กำลังบูต…"}:e={...e,power:"RUNNING",powerElapsed:0,message:"เปิดเครื่องสำเร็จ"}}else e={...e,powerElapsed:a};n();return}const s=e.operation;if(!s||!Number.isFinite(r)||r<=0)return;const o=Math.min(s.duration,s.elapsed+r);o<s.duration-1e-9?e={...e,operation:{...s,elapsed:o}}:e={...e,inventory:e.inventory.map(a=>a.instanceId===s.instanceId?xu(a,s.to):a),operation:null,selectedInstanceId:null,message:s.to?"ติดตั้งสำเร็จ":"ถอดกลับถาดแล้ว"},n()},toggle(r=!e.inventoryOpen){e={...e,inventoryOpen:r},n()},subscribe(r){return t.add(r),r(e),()=>t.delete(r)}}}function gl(i){const e=i.inventory.find(t=>t.instanceId===i.selectedInstanceId);return e?{instance:e,part:Ie(e.catalogId)}:null}const bu={Motherboard:"เมนบอร์ด",CPU:"CPU","CPU Cooler":"ชุดระบายความร้อน CPU",RAM:"หน่วยความจำ RAM",GPU:"การ์ดจอ",SSD:"ไดรฟ์ SSD",PSU:"พาวเวอร์ซัพพลาย","GPU Support":"ขาตั้งการ์ดจอ"};function Eu(i){return bu[i.type]+(i.type==="GPU"&&i.team?` · ฝั่ง${{green:"เขียว",red:"แดง",blue:"ฟ้า"}[i.team]}`:"")}const fo={atx24:"ไฟเมนบอร์ด · 24-pin",eps:"ไฟ CPU · EPS",pcie:"ไฟการ์ดจอ · 8-pin","sata-power":"ไฟ SSD · SATA","sata-data":"ข้อมูล SSD → เมนบอร์ด",fan:"พัดลม CPU → เมนบอร์ด",display:"ภาพจากการ์ดจอ → จอ"},wu={OFF:"ปิดอยู่",CHECKING:"กำลังตรวจเครื่อง",BOOTING:"กำลังบูต",RUNNING:"เปิดแล้ว",ERROR:"เปิดไม่สำเร็จ"};function Tu(i){switch(i.type){case"GPU Support":return{การใช้งาน:"รองรับน้ำหนักการ์ดจอ",จำเป็นหรือไม่:"อุปกรณ์เสริม ไม่บังคับ",ตำแหน่ง:"บนฝาครอบ PSU · ปรับความสูงตามเคส"};case"Motherboard":return{"ซ็อกเก็ต CPU":i.socket,"ชนิด RAM":i.ram,ขนาดบอร์ด:i.formFactor,"ช่อง RAM":`${i.slots.filter(e=>e.kind==="dimm").length} ช่อง`,ช่องการ์ดจอ:"PCIe x16","ช่อง SSD":"M.2 NVMe"};case"CPU":return{ซ็อกเก็ต:i.socket,จำนวนคอร์:`${i.cores} คอร์`,กำลังไฟ:`${i.watts} W`};case"CPU Cooler":return{ซ็อกเก็ตที่รองรับ:i.sockets.join(" / "),ความสูง:`${i.heightMm} mm`,รองรับความร้อน:`${i.coolingWatts} W`,กำลังไฟพัดลม:`${i.watts} W`,สายที่ต้องต่อ:"CPU fan → เมนบอร์ด"};case"RAM":return{ชนิดหน่วยความจำ:i.generation,ความจุต่อแผง:`${i.capacityGB} GB`,ความเร็ว:`${i.speedMT.toLocaleString()} MT/s`,กำลังไฟ:`${i.watts} W`};case"GPU":return{หน่วยความจำภาพ:`${i.vramGB} GB`,ความยาว:`${i.lengthMm} mm`,กำลังไฟ:`${i.watts} W`,ไฟเลี้ยง:i.requiresPower===!1?"รับไฟจากสล็อต ไม่ต้องต่อสาย PSU":"ต้องต่อสาย PSU → GPU",สายภาพ:"DisplayPort → จอภาพ"};case"SSD":return{การเชื่อมต่อ:i.interface,ความจุ:`${i.capacityGB.toLocaleString()} GB`,ความยาว:`${i.lengthMm} mm`,กำลังไฟ:`${i.watts} W`,สายที่ต้องต่อ:i.interface==="SATA"?"SATA power + SATA data":"เสียบ M.2 บนเมนบอร์ด ไม่ใช้สาย SATA"};case"PSU":return{กำลังจ่ายสูงสุด:`${i.wattage} W`,ขนาดมาตรฐาน:i.formFactor,ความยาว:`${i.lengthMm} mm`}}}function _l(i){const e=i.type==="GPU"?`<p>${i.fans??(i.requiresPower===!1?1:2)} พัดลม${i.role?` · ${i.role}`:""}${i.fictional?" · รุ่นออกแบบพิเศษในเกม ไม่ใช่สเปกสินค้าจริง":""}</p>`:"";return`<p class="part-category">ประเภท: ${Eu(i)}</p><p class="part-price">ราคา ${i.price.toLocaleString()} เครดิต</p>${e}<dl>${Object.entries(Tu(i)).map(([t,n])=>`<dt>${t}</dt><dd>${n}</dd>`).join("")}</dl><small>สเปกและราคาเป็นข้อมูลจำลองของเกม</small>`}function Ha(i,e=dn){return ha(i,e).issues.map(t=>t.message)}const On={centerX:2.65,centerZ:.5,width:2.8,depth:4.3,scale:1.65},po=[["Motherboard","เมนบอร์ด"],["CPU","CPU"],["CPU Cooler","ระบายความร้อน"],["RAM","RAM"],["GPU-green","GPU · ฝั่งเขียว"],["GPU-red","GPU · ฝั่งแดง"],["GPU-blue","GPU · ฝั่งฟ้า"],["GPU","GPU · รุ่นพื้นฐาน"],["SSD","SSD"],["PSU","PSU"],["GPU Support","ขาตั้ง GPU"]],mo=i=>i.type==="GPU"&&i.team?`GPU-${i.team}`:i.type,Au=[{key:"Motherboard",xs:[1.795,2.695,3.595],z:-1.21,left:1.29,width:2.74,top:-1.55,depth:.76},{key:"CPU",xs:[1.62,2.17,2.72],z:-.55,left:1.29,width:1.67,top:-.76,depth:.43},{key:"CPU Cooler",xs:[3.55],z:-.55,left:3.15,width:.85,top:-.76,depth:.43},{key:"RAM",xs:[1.62,2.3,2.98,3.66,1.62,2.3,2.98,3.66],zs:[-.1,-.1,-.1,-.1,.14,.14,.14,.14],z:-.1,left:1.29,width:2.74,top:-.2,depth:.45},{key:"GPU",xs:[2.25],z:2,left:1.29,width:2.74,top:1.4,depth:1.2},{key:"GPU Support",xs:[3.5],z:.42,left:3.15,width:.85,top:.19,depth:.47},{key:"SSD",xs:[1.8,2.65],z:.42,left:1.29,width:1.7,top:.19,depth:.47},{key:"PSU",xs:[1.59,2.28,2.97,3.66],z:1.02,left:1.29,width:2.74,top:.75,depth:.55}];function Wi(i,e={}){const t=new Map,n=new Set,r=Au.map(({key:s,xs:o,zs:a,z:c,left:d,top:l,width:u,depth:h})=>{const f=d+u/2,g=l+h/2,_=i.filter(x=>Ie(x.catalogId).type===s),m=_.findIndex(x=>x.instanceId===e[s]),p=Math.min(Math.floor(Math.max(0,m)/o.length)*o.length,Math.max(0,_.length-o.length)),y=s==="GPU"?.267:.25;for(const[x,v]of _.entries())t.set(v.instanceId,[o[x%o.length],y,a?.[x%o.length]??c]);if(s!=="GPU"||m>=0)for(const[x,v]of _.slice(p,p+o.length).entries())t.set(v.instanceId,[o[x],y,a?.[x]??c]),v.location==="tray"&&n.add(v.instanceId);return{key:s,left:d,top:l,width:u,depth:h,centerX:f,centerZ:g,capacity:o.length}});return{positions:t,visibleIds:n,sections:r,width:On.width,centerX:On.centerX,centerZ:On.centerZ,depth:On.depth,right:On.centerX+On.width/2}}function Ru(i,e){const t=document.createElement("button");t.className="inventory-toggle",t.textContent=`▦ Inventory · ${e.getState().inventory.length}  [I]`,t.setAttribute("aria-controls","inventory-panel"),i.append(t);const n=document.createElement("button");n.type="button",n.className="gpu-catalog-toggle",n.textContent="เลือกการ์ดจอ [G]",n.setAttribute("aria-controls","inventory-panel"),i.append(n);const r=document.createElement("aside");r.id="inventory-panel",r.className="inventory-panel",r.setAttribute("aria-label","คลังการ์ดจอ"),r.hidden=!0,r.innerHTML='<div class="inventory-heading"><h2>คลังชิ้นส่วน</h2><button type="button" class="close-inventory" aria-label="ปิดคลัง">✕</button></div><p class="inventory-note">ชิ้นส่วนสมมติ · ราคาเป็นเครดิตในเกม<br>คลิกเพื่อดูสเปกและไฮไลต์บนถาด</p><div class="inventory-list"></div><section class="part-details" aria-live="polite"></section><details><summary>ชุดอ้างอิงและขนาดเคส</summary><div class="build-reference"></div></details>',i.append(r),r.querySelector("h2").textContent="คลังการ์ดจอ";const s=r.querySelector(".inventory-list"),o=document.createElement("select");o.className="inventory-filter",o.setAttribute("aria-label","หมวดชิ้นส่วน"),o.append(new Option("การ์ดจอทั้งหมด","GPU-all"),...po.filter(([y])=>y==="GPU"||y.startsWith("GPU-")).map(([y,x])=>new Option(x,y)));const a=document.createElement("input");a.className="inventory-search",a.type="search",a.placeholder="ค้นหาการ์ดจอ เช่น 4070, B580",a.setAttribute("aria-label","ค้นหาการ์ดจอ");const c=document.createElement("p");c.className="inventory-result",c.setAttribute("role","status"),s.before(o,a,c);const d=r.querySelector(".part-details"),l=new Map;function u(){for(const[y,x]of l)e.getState().inventory.some(v=>v.instanceId===y)||(x.remove(),l.delete(y));for(const y of e.getState().inventory){if(Ie(y.catalogId).type!=="GPU"||l.has(y.instanceId))continue;const x=Ie(y.catalogId),v=document.createElement("button");v.type="button",v.dataset.instanceId=y.instanceId,v.innerHTML=`<span class="part-type"></span><strong>${x.name}</strong><span class="part-brief"></span><span class="part-action"></span>`,v.querySelector(".part-brief").textContent=x.type==="GPU"?`${x.vramGB} GB · ${x.fans??1} พัดลม · ${x.watts} W`:x.type==="CPU"?`${x.socket} · ${x.cores} คอร์ · ${x.watts} W`:x.type==="RAM"?`${x.generation} · ${x.capacityGB} GB · ${x.speedMT} MT/s`:`${x.price.toLocaleString()} cr`,v.style.borderLeftColor=x.color,v.onclick=()=>{e.select(y.instanceId),e.getState().selectedInstanceId===y.instanceId&&e.toggle(!1)},s.append(v),l.set(y.instanceId,v)}}u(),r.querySelector(".inventory-note").textContent="เลือกการ์ดจอเพื่อนำมาวางบนถาด · CPU, RAM และอุปกรณ์อื่นเลือกจากโมเดลบนถาดได้เลย";const h=Ha(Pr.map(Ie)).length===0;r.querySelector(".build-reference").textContent=`${dn.name}: ${dn.formFactors.join(" / ")} · GPU ≤ ${dn.gpuClearanceMm} mm · Cooler ≤ ${dn.coolerClearanceMm} mm · PSU ≤ ${dn.psuClearanceMm} mm. ชุดอ้างอิง ${h?"สเปกเข้ากันได้":"ต้องตรวจสอบ"}: ${Pr.map(y=>Ie(y).name).join(" + ")}. ติดตั้ง motherboard → CPU → cooler; ถอดย้อนลำดับ`;const f=()=>{const y=e.getState(),x=Wi(y.inventory,y.benchSelection);let v=0;for(const[E,A]of l){const R=y.inventory.find(b=>b.instanceId===E),I=Ie(R.catalogId),M=(o.value==="all"||o.value==="GPU-all"&&I.type==="GPU"||mo(I)===o.value)&&I.name.toLowerCase().includes(a.value.trim().toLowerCase());A.hidden=!M,M&&v++,A.querySelector(".part-type").textContent=`${I.type} · ${R.location==="installed"?"ติดตั้งแล้ว":x.visibleIds.has(E)?"บนถาด":"ในคลัง"}`,A.querySelector(".part-action").textContent=R.location==="installed"?"เลือกชิ้นส่วนในเครื่อง":x.visibleIds.has(E)?"เลือกเพื่อติดตั้ง":"นำมาวางบนถาด"}for(const E of s.querySelectorAll("h3")){let A=E.nextElementSibling,R=!1;for(;A&&A.tagName!=="H3";)A.hidden||(R=!0),A=A.nextElementSibling;E.hidden=!R}c.textContent=v?`${v} การ์ดจอ · กดรุ่นที่ต้องการเพื่อวางบนถาด`:"ไม่มีการ์ดจอในหมวดนี้ · งานลูกค้าเลือกซื้อได้ในเมนูงาน / ร้านค้า",r.dataset.category=o.value};o.onchange=f,a.oninput=f;const g=y=>{o.value=y,a.value="",f(),e.toggle(!0)};t.onclick=()=>{e.getState().inventoryOpen?e.toggle(!1):g("GPU-all")},n.onclick=()=>g("GPU-all"),r.querySelector(".close-inventory").onclick=()=>{e.toggle(!1),t.focus()};let _="";const m=e.subscribe(y=>{const x=JSON.stringify([y.caseId,y.inventoryOpen,y.selectedInstanceId,y.benchSelection,y.operation?.id,y.inventory.map(I=>[I.instanceId,I.location])]);if(x===_)return;_=x,u(),s.querySelectorAll("h3").forEach(I=>I.remove());for(const[I,M]of po.filter(([b])=>b==="GPU"||b.startsWith("GPU-"))){const b=y.inventory.filter(N=>mo(Ie(N.catalogId))===I).sort((N,F)=>Ie(N.catalogId).price-Ie(F.catalogId).price);if(!b.length)continue;const w=document.createElement("h3");w.textContent=M,s.append(w,...b.map(N=>l.get(N.instanceId)))}const v=qn(y.caseId);r.querySelector(".build-reference").textContent=`${v.name}: ${v.formFactors.join(" / ")} · GPU ≤ ${v.gpuClearanceMm} mm · Cooler ≤ ${v.coolerClearanceMm} mm. ชุดอ้างอิง: ${Ha(Pr.map(Ie),v).length?"ไม่รองรับกับเคสที่เลือก":"เข้ากันได้"} — ${Pr.map(I=>Ie(I).name).join(" + ")}`,r.hidden=!y.inventoryOpen,t.setAttribute("aria-expanded",String(y.inventoryOpen)),t.textContent=`▦ คลังการ์ดจอ ${y.inventory.filter(I=>Ie(I.catalogId).type==="GPU").length} ชิ้น [I]`,n.setAttribute("aria-expanded",String(y.inventoryOpen&&o.value==="GPU-all"));for(const[I,M]of l)M.setAttribute("aria-pressed",String(I===y.selectedInstanceId)),M.disabled=!!y.operation;f();const E=gl(y);if(!E){d.textContent="เลือกชิ้นส่วนจากรายการเพื่อดูรายละเอียด";return}const{part:A,instance:R}=E;d.innerHTML=`<h3>${A.name}</h3><p>${A.type} · ${R.location==="tray"?"บนถาด":"ติดตั้งแล้ว"}</p>${_l(A)}`}),p=y=>{y.ctrlKey||y.altKey||y.metaKey||y.repeat||y.code!=="Escape"&&y.target instanceof Element&&y.target.closest("input,textarea,select,[contenteditable]")||(y.code==="KeyI"&&(e.getState().inventoryOpen?e.toggle(!1):g("GPU-all")),y.code==="KeyG"&&g("GPU-all"),y.code==="Escape"&&(e.cancel(),e.getState().inventoryOpen&&(e.toggle(!1),t.focus())),y.code==="Delete"&&e.remove())};return window.addEventListener("keydown",p),{dispose(){m(),window.removeEventListener("keydown",p),r.remove(),t.remove(),n.remove()}}}const Hn={caseName:"FORMA / C01",camera:{position:[4.8,4.4,8.5],target:[.65,1.15,0],minDistance:3.6},pixelRatioLimit:1.75};function Cu(i,e){return i.innerHTML=`<header class="brand"><img class="brand-logo" src="./ctc-logo.png" alt="โลโก้วิทยาลัยเทคโนโลยีชลบุรี" width="64" height="64"><div><h1>CTC <span>PC BUILDER</span></h1><p>พื้นที่เล็ก ๆ สำหรับเครื่องที่คุณจะสร้าง</p></div></header>
    <aside class="station"><span class="dot"></span> WORKBENCH ${e.workstation}</aside>
    <footer><div class="scene-label"><span class="eyebrow">CHASSIS STUDY / 001</span><h2>${Hn.caseName}</h2><p>เคสเปิดข้าง · สำรวจพื้นที่ประกอบ</p></div>
    <div class="controls"><p><span>ลากเมาส์ซ้าย</span> หมุนมุมมอง <i></i><span>เลื่อนล้อเมาส์</span> ซูม <i></i><span>Q / E</span> เลื่อนซ้าย / ขวา <i></i><span>เมาส์ขวา</span> ยกเลิก / ถอดชิ้นที่เลือก</p><button id="reset-camera" type="button">↺ &nbsp; Reset Camera <kbd>R</kbd></button></div></footer>
    <section class="error" role="alert" hidden><span class="eyebrow">DISPLAY UNAVAILABLE</span><h2>เปิดฉาก 3D ไม่สำเร็จ</h2><p id="error-message"></p><button id="reload" type="button">ลองใหม่</button></section>`,i.querySelector("#reload").addEventListener("click",()=>location.reload()),{resetButton:i.querySelector("#reset-camera"),showError(t){i.querySelector(".error").hidden=!1,i.querySelector("#error-message").textContent=t,i.querySelector("#reset-camera").disabled=!0}}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pa="180",ki={ROTATE:0,DOLLY:1,PAN:2},Oi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pu=0,Va=1,Iu=2,vl=1,xl=2,wn=3,jn=0,Bt=1,hn=2,Wn=0,Gi=1,Wa=2,Xa=3,qa=4,Du=5,ai=100,Lu=101,Uu=102,Nu=103,Fu=104,Ou=200,Bu=201,zu=202,ku=203,go=204,_o=205,Gu=206,Hu=207,Vu=208,Wu=209,Xu=210,qu=211,$u=212,Yu=213,ju=214,vo=0,xo=1,yo=2,Xi=3,So=4,Mo=5,bo=6,Eo=7,yl=0,Ju=1,Ku=2,Xn=0,Zu=1,Qu=2,ed=3,Sl=4,td=5,nd=6,id=7,Ml=300,qi=301,$i=302,wo=303,To=304,Ms=306,fs=1e3,li=1001,Ao=1002,Wt=1003,rd=1004,Ir=1005,fn=1006,Rs=1007,ui=1008,_n=1009,bl=1010,El=1011,vr=1012,ma=1013,pi=1014,pn=1015,Ar=1016,ga=1017,_a=1018,xr=1020,wl=35902,Tl=35899,Al=1021,Rl=1022,rn=1023,yr=1026,Sr=1027,va=1028,xa=1029,Cl=1030,ya=1031,Sa=1033,ss=33776,os=33777,as=33778,cs=33779,Ro=35840,Co=35841,Po=35842,Io=35843,Do=36196,Lo=37492,Uo=37496,No=37808,Fo=37809,Oo=37810,Bo=37811,zo=37812,ko=37813,Go=37814,Ho=37815,Vo=37816,Wo=37817,Xo=37818,qo=37819,$o=37820,Yo=37821,jo=36492,Jo=36494,Ko=36495,Zo=36283,Qo=36284,ea=36285,ta=36286,sd=3200,od=3201,Pl=0,ad=1,zn="",Ot="srgb",Yi="srgb-linear",ps="linear",at="srgb",Si=7680,$a=519,cd=512,ld=513,ud=514,Il=515,dd=516,hd=517,fd=518,pd=519,Ya=35044,ja="300 es",mn=2e3,ms=2001;class _i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ja=1234567;const pr=Math.PI/180,Mr=180/Math.PI;function vi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function Ma(i,e){return(i%e+e)%e}function md(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function gd(i,e,t){return i!==e?(t-i)/(e-i):0}function mr(i,e,t){return(1-t)*i+t*e}function _d(i,e,t,n){return mr(i,e,1-Math.exp(-t*n))}function vd(i,e=1){return e-Math.abs(Ma(i,e*2)-e)}function xd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function yd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Sd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Md(i,e){return i+Math.random()*(e-i)}function bd(i){return i*(.5-Math.random())}function Ed(i){i!==void 0&&(Ja=i);let e=Ja+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wd(i){return i*pr}function Td(i){return i*Mr}function Ad(i){return(i&i-1)===0&&i!==0}function Rd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pd(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),d=s((e+n)/2),l=o((e+n)/2),u=s((e-n)/2),h=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*l,c*u,c*h,a*d);break;case"YZY":i.set(c*h,a*l,c*u,a*d);break;case"ZXZ":i.set(c*u,c*h,a*l,a*d);break;case"XZX":i.set(a*l,c*g,c*f,a*d);break;case"YXY":i.set(c*f,a*l,c*g,a*d);break;case"ZYZ":i.set(c*g,c*f,a*l,a*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Fi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const na={DEG2RAD:pr,RAD2DEG:Mr,generateUUID:vi,clamp:qe,euclideanModulo:Ma,mapLinear:md,inverseLerp:gd,lerp:mr,damp:_d,pingpong:vd,smoothstep:xd,smootherstep:yd,randInt:Sd,randFloat:Md,randFloatSpread:bd,seededRandom:Ed,degToRad:wd,radToDeg:Td,isPowerOfTwo:Ad,ceilPowerOfTwo:Rd,floorPowerOfTwo:Cd,setQuaternionFromProperEuler:Pd,normalize:Lt,denormalize:Fi};class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],d=n[r+1],l=n[r+2],u=n[r+3];const h=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=d,e[t+2]=l,e[t+3]=u;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==h||d!==f||l!==g){let m=1-a;const p=c*h+d*f+l*g+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const E=Math.sqrt(x),A=Math.atan2(E,p*y);m=Math.sin(m*A)/E,a=Math.sin(a*A)/E}const v=a*y;if(c=c*m+h*v,d=d*m+f*v,l=l*m+g*v,u=u*m+_*v,m===1-a){const E=1/Math.sqrt(c*c+d*d+l*l+u*u);c*=E,d*=E,l*=E,u*=E}}e[t]=c,e[t+1]=d,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],d=n[r+2],l=n[r+3],u=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+l*u+c*f-d*h,e[t+1]=c*g+l*h+d*u-a*f,e[t+2]=d*g+l*f+a*h-c*u,e[t+3]=l*g-a*u-c*h-d*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,d=a(n/2),l=a(r/2),u=a(s/2),h=c(n/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*l*u+d*f*g,this._y=d*f*u-h*l*g,this._z=d*l*g+h*f*u,this._w=d*l*u-h*f*g;break;case"YXZ":this._x=h*l*u+d*f*g,this._y=d*f*u-h*l*g,this._z=d*l*g-h*f*u,this._w=d*l*u+h*f*g;break;case"ZXY":this._x=h*l*u-d*f*g,this._y=d*f*u+h*l*g,this._z=d*l*g+h*f*u,this._w=d*l*u-h*f*g;break;case"ZYX":this._x=h*l*u-d*f*g,this._y=d*f*u+h*l*g,this._z=d*l*g-h*f*u,this._w=d*l*u+h*f*g;break;case"YZX":this._x=h*l*u+d*f*g,this._y=d*f*u+h*l*g,this._z=d*l*g-h*f*u,this._w=d*l*u-h*f*g;break;case"XZY":this._x=h*l*u-d*f*g,this._y=d*f*u-h*l*g,this._z=d*l*g+h*f*u,this._w=d*l*u+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],d=t[2],l=t[6],u=t[10],h=n+a+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(l-c)*f,this._y=(s-d)*f,this._z=(o-r)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(l-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+d)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-d)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+l)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-r)/f,this._x=(s+d)/f,this._y=(c+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,d=t._z,l=t._w;return this._x=n*l+o*a+r*d-s*c,this._y=r*l+o*c+s*a-n*d,this._z=s*l+o*d+n*c-r*a,this._w=o*l-n*a-r*c-s*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const d=Math.sqrt(c),l=Math.atan2(d,a),u=Math.sin((1-t)*l)/d,h=Math.sin(t*l)/d;return this._w=o*u+this._w*h,this._x=n*u+this._x*h,this._y=r*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ka.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ka.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,d=2*(o*r-a*n),l=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+c*d+o*u-a*l,this.y=n+c*l+a*d-s*u,this.z=r+c*u+s*l-o*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cs.copy(this).projectOnVector(e),this.sub(Cs)}reflect(e){return this.sub(Cs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cs=new P,Ka=new vn;class Ve{constructor(e,t,n,r,s,o,a,c,d){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,d)}set(e,t,n,r,s,o,a,c,d){const l=this.elements;return l[0]=e,l[1]=r,l[2]=a,l[3]=t,l[4]=s,l[5]=c,l[6]=n,l[7]=o,l[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],d=n[1],l=n[4],u=n[7],h=n[2],f=n[5],g=n[8],_=r[0],m=r[3],p=r[6],y=r[1],x=r[4],v=r[7],E=r[2],A=r[5],R=r[8];return s[0]=o*_+a*y+c*E,s[3]=o*m+a*x+c*A,s[6]=o*p+a*v+c*R,s[1]=d*_+l*y+u*E,s[4]=d*m+l*x+u*A,s[7]=d*p+l*v+u*R,s[2]=h*_+f*y+g*E,s[5]=h*m+f*x+g*A,s[8]=h*p+f*v+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],d=e[7],l=e[8];return t*o*l-t*a*d-n*s*l+n*a*c+r*s*d-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],d=e[7],l=e[8],u=l*o-a*d,h=a*c-l*s,f=d*s-o*c,g=t*u+n*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*d-l*n)*_,e[2]=(a*n-r*o)*_,e[3]=h*_,e[4]=(l*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(n*c-d*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),d=Math.sin(s);return this.set(n*c,n*d,-n*(c*o+d*a)+o+e,-r*d,r*c,-r*(-d*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ps.makeScale(e,t)),this}rotate(e){return this.premultiply(Ps.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ps.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ps=new Ve;function Dl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Id(){const i=gs("canvas");return i.style.display="block",i}const Za={};function br(i){i in Za||(Za[i]=!0,console.warn(i))}function Dd(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Qa=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ec=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ld(){const i={enabled:!0,workingColorSpace:Yi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===at&&(r.r=An(r.r),r.g=An(r.g),r.b=An(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(r.r=Hi(r.r),r.g=Hi(r.g),r.b=Hi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===zn?ps:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return br("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return br("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Yi]:{primaries:e,whitePoint:n,transfer:ps,toXYZ:Qa,fromXYZ:ec,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:at,toXYZ:Qa,fromXYZ:ec,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),i}const et=Ld();function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Mi;class Ud{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mi===void 0&&(Mi=gs("canvas")),Mi.width=e.width,Mi.height=e.height;const r=Mi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Mi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=An(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(An(t[n]/255)*255):t[n]=An(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nd=0;class ba{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Is(r[o].image)):s.push(Is(r[o]))}else s=Is(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Is(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ud.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fd=0;const Ds=new P;class At extends _i{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=li,r=li,s=fn,o=ui,a=rn,c=_n,d=At.DEFAULT_ANISOTROPY,l=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=vi(),this.name="",this.source=new ba(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=d,this.format=a,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ds).x}get height(){return this.source.getSize(Ds).y}get depth(){return this.source.getSize(Ds).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ml)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fs:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case Ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fs:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case Ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Ml;At.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,d=c[0],l=c[4],u=c[8],h=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(l-h)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+h)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(d+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(d+1)/2,v=(f+1)/2,E=(p+1)/2,A=(l+h)/4,R=(u+_)/4,I=(g+m)/4;return x>v&&x>E?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=A/n,s=R/n):v>E?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=A/r,s=I/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=R/s,r=I/s),this.set(n,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(h-l)*(h-l));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(h-l)/y,this.w=Math.acos((d+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Od extends _i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new At(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ba(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends Od{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ll extends At{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bd extends At{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kt):Kt.fromBufferAttribute(s,o),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dr.copy(n.boundingBox)),Dr.applyMatrix4(e.matrixWorld),this.union(Dr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),Lr.subVectors(this.max,nr),bi.subVectors(e.a,nr),Ei.subVectors(e.b,nr),wi.subVectors(e.c,nr),In.subVectors(Ei,bi),Dn.subVectors(wi,Ei),Qn.subVectors(bi,wi);let t=[0,-In.z,In.y,0,-Dn.z,Dn.y,0,-Qn.z,Qn.y,In.z,0,-In.x,Dn.z,0,-Dn.x,Qn.z,0,-Qn.x,-In.y,In.x,0,-Dn.y,Dn.x,0,-Qn.y,Qn.x,0];return!Ls(t,bi,Ei,wi,Lr)||(t=[1,0,0,0,1,0,0,0,1],!Ls(t,bi,Ei,wi,Lr))?!1:(Ur.crossVectors(In,Dn),t=[Ur.x,Ur.y,Ur.z],Ls(t,bi,Ei,wi,Lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yn=[new P,new P,new P,new P,new P,new P,new P,new P],Kt=new P,Dr=new Cn,bi=new P,Ei=new P,wi=new P,In=new P,Dn=new P,Qn=new P,nr=new P,Lr=new P,Ur=new P,ei=new P;function Ls(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ei.fromArray(i,s);const a=r.x*Math.abs(ei.x)+r.y*Math.abs(ei.y)+r.z*Math.abs(ei.z),c=e.dot(ei),d=t.dot(ei),l=n.dot(ei);if(Math.max(-Math.max(c,d,l),Math.min(c,d,l))>a)return!1}return!0}const zd=new Cn,ir=new P,Us=new P;class Zi{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);const t=ir.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ir,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Us.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(Us)),this.expandByPoint(ir.copy(e.center).sub(Us))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Sn=new P,Ns=new P,Nr=new P,Ln=new P,Fs=new P,Fr=new P,Os=new P;class bs{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ns.copy(e).add(t).multiplyScalar(.5),Nr.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(Ns);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Nr),a=Ln.dot(this.direction),c=-Ln.dot(Nr),d=Ln.lengthSq(),l=Math.abs(1-o*o);let u,h,f,g;if(l>0)if(u=o*c-a,h=o*a-c,g=s*l,u>=0)if(h>=-g)if(h<=g){const _=1/l;u*=_,h*=_,f=u*(u+o*h+2*a)+h*(o*u+h+2*c)+d}else h=s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*c)+d;else h=-s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*c)+d;else h<=-g?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+h*(h+2*c)+d):h<=g?(u=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+d):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+h*(h+2*c)+d);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*c)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ns).addScaledVector(Nr,h),f}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const n=Sn.dot(this.direction),r=Sn.dot(Sn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const d=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,h=this.origin;return d>=0?(n=(e.min.x-h.x)*d,r=(e.max.x-h.x)*d):(n=(e.max.x-h.x)*d,r=(e.min.x-h.x)*d),l>=0?(s=(e.min.y-h.y)*l,o=(e.max.y-h.y)*l):(s=(e.max.y-h.y)*l,o=(e.min.y-h.y)*l),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,r,s){Fs.subVectors(t,e),Fr.subVectors(n,e),Os.crossVectors(Fs,Fr);let o=this.direction.dot(Os),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ln.subVectors(this.origin,e);const c=a*this.direction.dot(Fr.crossVectors(Ln,Fr));if(c<0)return null;const d=a*this.direction.dot(Fs.cross(Ln));if(d<0||c+d>o)return null;const l=-a*Ln.dot(Os);return l<0?null:this.at(l/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,r,s,o,a,c,d,l,u,h,f,g,_,m){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,d,l,u,h,f,g,_,m)}set(e,t,n,r,s,o,a,c,d,l,u,h,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=d,p[6]=l,p[10]=u,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ti.setFromMatrixColumn(e,0).length(),s=1/Ti.setFromMatrixColumn(e,1).length(),o=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),d=Math.sin(r),l=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=o*l,f=o*u,g=a*l,_=a*u;t[0]=c*l,t[4]=-c*u,t[8]=d,t[1]=f+g*d,t[5]=h-_*d,t[9]=-a*c,t[2]=_-h*d,t[6]=g+f*d,t[10]=o*c}else if(e.order==="YXZ"){const h=c*l,f=c*u,g=d*l,_=d*u;t[0]=h+_*a,t[4]=g*a-f,t[8]=o*d,t[1]=o*u,t[5]=o*l,t[9]=-a,t[2]=f*a-g,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*l,f=c*u,g=d*l,_=d*u;t[0]=h-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*l,t[9]=_-h*a,t[2]=-o*d,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*l,f=o*u,g=a*l,_=a*u;t[0]=c*l,t[4]=g*d-f,t[8]=h*d+_,t[1]=c*u,t[5]=_*d+h,t[9]=f*d-g,t[2]=-d,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,f=o*d,g=a*c,_=a*d;t[0]=c*l,t[4]=_-h*u,t[8]=g*u+f,t[1]=u,t[5]=o*l,t[9]=-a*l,t[2]=-d*l,t[6]=f*u+g,t[10]=h-_*u}else if(e.order==="XZY"){const h=o*c,f=o*d,g=a*c,_=a*d;t[0]=c*l,t[4]=-u,t[8]=d*l,t[1]=h*u+_,t[5]=o*l,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*l,t[10]=_*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kd,e,Gd)}lookAt(e,t,n){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Un.crossVectors(n,Gt),Un.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Un.crossVectors(n,Gt)),Un.normalize(),Or.crossVectors(Gt,Un),r[0]=Un.x,r[4]=Or.x,r[8]=Gt.x,r[1]=Un.y,r[5]=Or.y,r[9]=Gt.y,r[2]=Un.z,r[6]=Or.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],d=n[12],l=n[1],u=n[5],h=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],v=n[11],E=n[15],A=r[0],R=r[4],I=r[8],M=r[12],b=r[1],w=r[5],N=r[9],F=r[13],B=r[2],G=r[6],H=r[10],j=r[14],W=r[3],ue=r[7],ge=r[11],Se=r[15];return s[0]=o*A+a*b+c*B+d*W,s[4]=o*R+a*w+c*G+d*ue,s[8]=o*I+a*N+c*H+d*ge,s[12]=o*M+a*F+c*j+d*Se,s[1]=l*A+u*b+h*B+f*W,s[5]=l*R+u*w+h*G+f*ue,s[9]=l*I+u*N+h*H+f*ge,s[13]=l*M+u*F+h*j+f*Se,s[2]=g*A+_*b+m*B+p*W,s[6]=g*R+_*w+m*G+p*ue,s[10]=g*I+_*N+m*H+p*ge,s[14]=g*M+_*F+m*j+p*Se,s[3]=y*A+x*b+v*B+E*W,s[7]=y*R+x*w+v*G+E*ue,s[11]=y*I+x*N+v*H+E*ge,s[15]=y*M+x*F+v*j+E*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],d=e[13],l=e[2],u=e[6],h=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*u-r*d*u-s*a*h+n*d*h+r*a*f-n*c*f)+_*(+t*c*f-t*d*h+s*o*h-r*o*f+r*d*l-s*c*l)+m*(+t*d*u-t*a*f-s*o*u+n*o*f+s*a*l-n*d*l)+p*(-r*a*l-t*c*u+t*a*h+r*o*u-n*o*h+n*c*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],d=e[7],l=e[8],u=e[9],h=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=u*m*d-_*h*d+_*c*f-a*m*f-u*c*p+a*h*p,x=g*h*d-l*m*d-g*c*f+o*m*f+l*c*p-o*h*p,v=l*_*d-g*u*d+g*a*f-o*_*f-l*a*p+o*u*p,E=g*u*c-l*_*c-g*a*h+o*_*h+l*a*m-o*u*m,A=t*y+n*x+r*v+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=y*R,e[1]=(_*h*s-u*m*s-_*r*f+n*m*f+u*r*p-n*h*p)*R,e[2]=(a*m*s-_*c*s+_*r*d-n*m*d-a*r*p+n*c*p)*R,e[3]=(u*c*s-a*h*s-u*r*d+n*h*d+a*r*f-n*c*f)*R,e[4]=x*R,e[5]=(l*m*s-g*h*s+g*r*f-t*m*f-l*r*p+t*h*p)*R,e[6]=(g*c*s-o*m*s-g*r*d+t*m*d+o*r*p-t*c*p)*R,e[7]=(o*h*s-l*c*s+l*r*d-t*h*d-o*r*f+t*c*f)*R,e[8]=v*R,e[9]=(g*u*s-l*_*s-g*n*f+t*_*f+l*n*p-t*u*p)*R,e[10]=(o*_*s-g*a*s+g*n*d-t*_*d-o*n*p+t*a*p)*R,e[11]=(l*a*s-o*u*s-l*n*d+t*u*d+o*n*f-t*a*f)*R,e[12]=E*R,e[13]=(l*_*r-g*u*r+g*n*h-t*_*h-l*n*m+t*u*m)*R,e[14]=(g*a*r-o*_*r-g*n*c+t*_*c+o*n*m-t*a*m)*R,e[15]=(o*u*r-l*a*r+l*n*c-t*u*c-o*n*h+t*a*h)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,d=s*o,l=s*a;return this.set(d*o+n,d*a-r*c,d*c+r*a,0,d*a+r*c,l*a+n,l*c-r*o,0,d*c-r*a,l*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,d=s+s,l=o+o,u=a+a,h=s*d,f=s*l,g=s*u,_=o*l,m=o*u,p=a*u,y=c*d,x=c*l,v=c*u,E=n.x,A=n.y,R=n.z;return r[0]=(1-(_+p))*E,r[1]=(f+v)*E,r[2]=(g-x)*E,r[3]=0,r[4]=(f-v)*A,r[5]=(1-(h+p))*A,r[6]=(m+y)*A,r[7]=0,r[8]=(g+x)*R,r[9]=(m-y)*R,r[10]=(1-(h+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ti.set(r[0],r[1],r[2]).length();const o=Ti.set(r[4],r[5],r[6]).length(),a=Ti.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zt.copy(this);const d=1/s,l=1/o,u=1/a;return Zt.elements[0]*=d,Zt.elements[1]*=d,Zt.elements[2]*=d,Zt.elements[4]*=l,Zt.elements[5]*=l,Zt.elements[6]*=l,Zt.elements[8]*=u,Zt.elements[9]*=u,Zt.elements[10]*=u,t.setFromRotationMatrix(Zt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=mn,c=!1){const d=this.elements,l=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let g,_;if(c)g=s/(o-s),_=o*s/(o-s);else if(a===mn)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ms)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return d[0]=l,d[4]=0,d[8]=h,d[12]=0,d[1]=0,d[5]=u,d[9]=f,d[13]=0,d[2]=0,d[6]=0,d[10]=g,d[14]=_,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=mn,c=!1){const d=this.elements,l=2/(t-e),u=2/(n-r),h=-(t+e)/(t-e),f=-(n+r)/(n-r);let g,_;if(c)g=1/(o-s),_=o/(o-s);else if(a===mn)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===ms)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return d[0]=l,d[4]=0,d[8]=0,d[12]=h,d[1]=0,d[5]=u,d[9]=0,d[13]=f,d[2]=0,d[6]=0,d[10]=g,d[14]=_,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ti=new P,Zt=new tt,kd=new P(0,0,0),Gd=new P(1,1,1),Un=new P,Or=new P,Gt=new P,tc=new tt,nc=new vn;class Jt{constructor(e=0,t=0,n=0,r=Jt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],d=r[5],l=r[9],u=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,d),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,d)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,d));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,d),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,d),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nc.setFromEuler(this),this.setFromQuaternion(nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jt.DEFAULT_ORDER="XYZ";class Ea{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hd=0;const ic=new P,Ai=new vn,Mn=new tt,Br=new P,rr=new P,Vd=new P,Wd=new vn,rc=new P(1,0,0),sc=new P(0,1,0),oc=new P(0,0,1),ac={type:"added"},Xd={type:"removed"},Ri={type:"childadded",child:null},Bs={type:"childremoved",child:null};class Et extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new P,t=new Jt,n=new vn,r=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new Ve}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(rc,e)}rotateY(e){return this.rotateOnAxis(sc,e)}rotateZ(e){return this.rotateOnAxis(oc,e)}translateOnAxis(e,t){return ic.copy(e).applyQuaternion(this.quaternion),this.position.add(ic.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rc,e)}translateY(e){return this.translateOnAxis(sc,e)}translateZ(e){return this.translateOnAxis(oc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Br.copy(e):Br.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(rr,Br,this.up):Mn.lookAt(Br,rr,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),Ai.setFromRotationMatrix(Mn),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ac),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xd),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ac),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,Vd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Wd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let d=0,l=c.length;d<l;d++){const u=c[d];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,d=this.material.length;c<d;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),d=o(e.textures),l=o(e.images),u=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),d.length>0&&(n.textures=d),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const d in a){const l=a[d];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Et.DEFAULT_UP=new P(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new P,bn=new P,zs=new P,En=new P,Ci=new P,Pi=new P,cc=new P,ks=new P,Gs=new P,Hs=new P,Vs=new lt,Ws=new lt,Xs=new lt;class tn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Qt.subVectors(e,t),r.cross(Qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Qt.subVectors(r,t),bn.subVectors(n,t),zs.subVectors(e,t);const o=Qt.dot(Qt),a=Qt.dot(bn),c=Qt.dot(zs),d=bn.dot(bn),l=bn.dot(zs),u=o*d-a*a;if(u===0)return s.set(0,0,0),null;const h=1/u,f=(d*c-a*l)*h,g=(o*l-a*c)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,En)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,En.x),c.addScaledVector(o,En.y),c.addScaledVector(a,En.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return Vs.setScalar(0),Ws.setScalar(0),Xs.setScalar(0),Vs.fromBufferAttribute(e,t),Ws.fromBufferAttribute(e,n),Xs.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Vs,s.x),o.addScaledVector(Ws,s.y),o.addScaledVector(Xs,s.z),o}static isFrontFacing(e,t,n,r){return Qt.subVectors(n,t),bn.subVectors(e,t),Qt.cross(bn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),Qt.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return tn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Ci.subVectors(r,n),Pi.subVectors(s,n),ks.subVectors(e,n);const c=Ci.dot(ks),d=Pi.dot(ks);if(c<=0&&d<=0)return t.copy(n);Gs.subVectors(e,r);const l=Ci.dot(Gs),u=Pi.dot(Gs);if(l>=0&&u<=l)return t.copy(r);const h=c*u-l*d;if(h<=0&&c>=0&&l<=0)return o=c/(c-l),t.copy(n).addScaledVector(Ci,o);Hs.subVectors(e,s);const f=Ci.dot(Hs),g=Pi.dot(Hs);if(g>=0&&f<=g)return t.copy(s);const _=f*d-c*g;if(_<=0&&d>=0&&g<=0)return a=d/(d-g),t.copy(n).addScaledVector(Pi,a);const m=l*g-f*u;if(m<=0&&u-l>=0&&f-g>=0)return cc.subVectors(s,r),a=(u-l)/(u-l+(f-g)),t.copy(r).addScaledVector(cc,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(n).addScaledVector(Ci,o).addScaledVector(Pi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ul={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},zr={h:0,s:0,l:0};function qs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=et.workingColorSpace){if(e=Ma(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=qs(o,s,e+1/3),this.g=qs(o,s,e),this.b=qs(o,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,t=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=Ul[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return et.workingToColorSpace(Ct.copy(this),e),Math.round(qe(Ct.r*255,0,255))*65536+Math.round(qe(Ct.g*255,0,255))*256+Math.round(qe(Ct.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Ct.copy(this),t);const n=Ct.r,r=Ct.g,s=Ct.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,d;const l=(a+o)/2;if(a===o)c=0,d=0;else{const u=o-a;switch(d=l<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return e.h=c,e.s=d,e.l=l,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Ot){et.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,r=Ct.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(zr);const n=mr(Nn.h,zr.h,t),r=mr(Nn.s,zr.s,t),s=mr(Nn.l,zr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Ke;Ke.NAMES=Ul;let qd=0;class Qi extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=Gi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=go,this.blendDst=_o,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$a,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==go&&(n.blendSrc=this.blendSrc),this.blendDst!==_o&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$a&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rn extends Qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new P,kr=new le;let $d=0;class sn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$d++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ya,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ya&&(e.usage=this.usage),e}}class Nl extends sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fl extends sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class it extends sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yd=0;const Yt=new tt,$s=new Et,Ii=new P,Ht=new Cn,sr=new Cn,bt=new P;class Pt extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dl(e)?Fl:Nl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ve().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return $s.lookAt(e),$s.updateMatrix(),this.applyMatrix4($s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new it(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(Ht.min,sr.min),Ht.expandByPoint(bt),bt.addVectors(Ht.max,sr.max),Ht.expandByPoint(bt)):(Ht.expandByPoint(sr.min),Ht.expandByPoint(sr.max))}Ht.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let d=0,l=a.count;d<l;d++)bt.fromBufferAttribute(a,d),c&&(Ii.fromBufferAttribute(e,d),bt.add(Ii)),r=Math.max(r,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new P,c[I]=new P;const d=new P,l=new P,u=new P,h=new le,f=new le,g=new le,_=new P,m=new P;function p(I,M,b){d.fromBufferAttribute(n,I),l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,b),h.fromBufferAttribute(s,I),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,b),l.sub(d),u.sub(d),f.sub(h),g.sub(h);const w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(_.copy(l).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(w),m.copy(u).multiplyScalar(f.x).addScaledVector(l,-g.x).multiplyScalar(w),a[I].add(_),a[M].add(_),a[b].add(_),c[I].add(m),c[M].add(m),c[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,M=y.length;I<M;++I){const b=y[I],w=b.start,N=b.count;for(let F=w,B=w+N;F<B;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new P,v=new P,E=new P,A=new P;function R(I){E.fromBufferAttribute(r,I),A.copy(E);const M=a[I];x.copy(M),x.sub(E.multiplyScalar(E.dot(M))).normalize(),v.crossVectors(A,M);const w=v.dot(c[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,w)}for(let I=0,M=y.length;I<M;++I){const b=y[I],w=b.start,N=b.count;for(let F=w,B=w+N;F<B;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const r=new P,s=new P,o=new P,a=new P,c=new P,d=new P,l=new P,u=new P;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),l.subVectors(o,s),u.subVectors(r,s),l.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),d.fromBufferAttribute(n,m),a.add(l),c.add(l),d.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,d.x,d.y,d.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),l.subVectors(o,s),u.subVectors(r,s),l.cross(u),n.setXYZ(h+0,l.x,l.y,l.z),n.setXYZ(h+1,l.x,l.y,l.z),n.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,c){const d=a.array,l=a.itemSize,u=a.normalized,h=new d.constructor(c.length*l);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*l;for(let p=0;p<l;p++)h[g++]=d[f++]}return new sn(h,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],d=e(c,n);t.setAttribute(a,d)}const s=this.morphAttributes;for(const a in s){const c=[],d=s[a];for(let l=0,u=d.length;l<u;l++){const h=d[l],f=e(h,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const d=o[a];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(e[d]=c[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const d=n[c];e.data.attributes[c]=d.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],l=[];for(let u=0,h=d.length;u<h;u++){const f=d[u];l.push(f.toJSON(e.data))}l.length>0&&(r[c]=l,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const d in r){const l=r[d];this.setAttribute(d,l.clone(t))}const s=e.morphAttributes;for(const d in s){const l=[],u=s[d];for(let h=0,f=u.length;h<f;h++)l.push(u[h].clone(t));this.morphAttributes[d]=l}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let d=0,l=o.length;d<l;d++){const u=o[d];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lc=new tt,ti=new bs,Gr=new Zi,uc=new P,Hr=new P,Vr=new P,Wr=new P,Ys=new P,Xr=new P,dc=new P,qr=new P;class Ee extends Et{constructor(e=new Pt,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Xr.set(0,0,0);for(let c=0,d=s.length;c<d;c++){const l=a[c],u=s[c];l!==0&&(Ys.fromBufferAttribute(u,e),o?Xr.addScaledVector(Ys,l):Xr.addScaledVector(Ys.sub(t),l))}t.add(Xr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(s),ti.copy(e.ray).recast(e.near),!(Gr.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Gr,uc)===null||ti.origin.distanceToSquared(uc)>(e.far-e.near)**2))&&(lc.copy(s).invert(),ti.copy(e.ray).applyMatrix4(lc),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,d=s.attributes.uv,l=s.attributes.uv1,u=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,E=x;v<E;v+=3){const A=a.getX(v),R=a.getX(v+1),I=a.getX(v+2);r=$r(this,p,e,n,d,l,u,A,R,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);r=$r(this,o,e,n,d,l,u,y,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,E=x;v<E;v+=3){const A=v,R=v+1,I=v+2;r=$r(this,p,e,n,d,l,u,A,R,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,x=m+1,v=m+2;r=$r(this,o,e,n,d,l,u,y,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function jd(i,e,t,n,r,s,o,a){let c;if(e.side===Bt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===jn,a),c===null)return null;qr.copy(a),qr.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(qr);return d<t.near||d>t.far?null:{distance:d,point:qr.clone(),object:i}}function $r(i,e,t,n,r,s,o,a,c,d){i.getVertexPosition(a,Hr),i.getVertexPosition(c,Vr),i.getVertexPosition(d,Wr);const l=jd(i,e,t,n,Hr,Vr,Wr,dc);if(l){const u=new P;tn.getBarycoord(dc,Hr,Vr,Wr,u),r&&(l.uv=tn.getInterpolatedAttribute(r,a,c,d,u,new le)),s&&(l.uv1=tn.getInterpolatedAttribute(s,a,c,d,u,new le)),o&&(l.normal=tn.getInterpolatedAttribute(o,a,c,d,u,new P),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const h={a,b:c,c:d,normal:new P,materialIndex:0};tn.getNormal(Hr,Vr,Wr,h.normal),l.face=h,l.barycoord=u}return l}class _t extends Pt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],d=[],l=[],u=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new it(d,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(u,2));function g(_,m,p,y,x,v,E,A,R,I,M){const b=v/R,w=E/I,N=v/2,F=E/2,B=A/2,G=R+1,H=I+1;let j=0,W=0;const ue=new P;for(let ge=0;ge<H;ge++){const Se=ge*w-F;for(let ke=0;ke<G;ke++){const He=ke*b-N;ue[_]=He*y,ue[m]=Se*x,ue[p]=B,d.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[p]=A>0?1:-1,l.push(ue.x,ue.y,ue.z),u.push(ke/R),u.push(1-ge/I),j+=1}}for(let ge=0;ge<I;ge++)for(let Se=0;Se<R;Se++){const ke=h+Se+G*ge,He=h+Se+G*(ge+1),Ye=h+(Se+1)+G*(ge+1),We=h+(Se+1)+G*ge;c.push(ke,He,We),c.push(He,Ye,We),W+=6}a.addGroup(f,W,M),f+=W,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ji(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ut(i){const e={};for(let t=0;t<i.length;t++){const n=ji(i[t]);for(const r in n)e[r]=n[r]}return e}function Jd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ol(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Kd={clone:ji,merge:Ut};var Zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends Qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zd,this.fragmentShader=Qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=Jd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bl extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fn=new P,hc=new le,fc=new le;class Vt extends Bl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z)}getViewSize(e,t){return this.getViewBounds(e,hc,fc),t.subVectors(fc,hc)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,d=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/d,r*=o.width/c,n*=o.height/d}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Di=-90,Li=1;class eh extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vt(Di,Li,e,t);r.layers=this.layers,this.add(r);const s=new Vt(Di,Li,e,t);s.layers=this.layers,this.add(s);const o=new Vt(Di,Li,e,t);o.layers=this.layers,this.add(o);const a=new Vt(Di,Li,e,t);a.layers=this.layers,this.add(a);const c=new Vt(Di,Li,e,t);c.layers=this.layers,this.add(c);const d=new Vt(Di,Li,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const d of t)this.remove(d);if(e===mn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,d,l]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,d),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class zl extends At{constructor(e=[],t=qi,n,r,s,o,a,c,d,l){super(e,t,n,r,s,o,a,c,d,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class th extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new zl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _t(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:Wn});s.uniforms.tEquirect.value=t;const o=new Ee(r,s),a=t.minFilter;return t.minFilter===ui&&(t.minFilter=fn),new eh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class st extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nh={type:"move"};class js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(d,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const l=d.joints["index-finger-tip"],u=d.joints["thumb-tip"],h=l.position.distanceTo(u.position),f=.02,g=.005;d.inputState.pinching&&h>f+g?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&h<=f-g&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nh)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),d!==null&&(d.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new st;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class wa{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ke(e),this.near=t,this.far=n}clone(){return new wa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ih extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jt,this.environmentIntensity=1,this.environmentRotation=new Jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class kl extends At{constructor(e=null,t=1,n=1,r,s,o,a,c,d=Wt,l=Wt,u,h){super(null,o,a,c,d,l,r,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pc extends sn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ui=new tt,mc=new tt,Yr=[],gc=new Cn,rh=new tt,or=new Ee,ar=new Zi;class si extends Ee{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,rh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ui),gc.copy(e.boundingBox).applyMatrix4(Ui),this.boundingBox.union(gc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ui),ar.copy(e.boundingSphere).applyMatrix4(Ui),this.boundingSphere.union(ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(n),e.ray.intersectsSphere(ar)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ui),mc.multiplyMatrices(n,Ui),or.matrixWorld=mc,or.raycast(e,Yr);for(let o=0,a=Yr.length;o<a;o++){const c=Yr[o];c.instanceId=s,c.object=this,t.push(c)}Yr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new pc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new kl(new Float32Array(r*this.count),r,this.count,va,pn));const s=this.morphTexture.source.data.data;let o=0;for(let d=0;d<n.length;d++)o+=n[d];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Js=new P,sh=new P,oh=new Ve;class Bn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Js.subVectors(n,t).cross(sh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Js),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||oh.getNormalMatrix(e),r=this.coplanarPoint(Js).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new Zi,ah=new le(.5,.5),jr=new P;class Ta{constructor(e=new Bn,t=new Bn,n=new Bn,r=new Bn,s=new Bn,o=new Bn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mn,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],d=s[3],l=s[4],u=s[5],h=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],y=s[12],x=s[13],v=s[14],E=s[15];if(r[0].setComponents(d-o,f-l,p-g,E-y).normalize(),r[1].setComponents(d+o,f+l,p+g,E+y).normalize(),r[2].setComponents(d+a,f+u,p+_,E+x).normalize(),r[3].setComponents(d-a,f-u,p-_,E-x).normalize(),n)r[4].setComponents(c,h,m,v).normalize(),r[5].setComponents(d-c,f-h,p-m,E-v).normalize();else if(r[4].setComponents(d-c,f-h,p-m,E-v).normalize(),t===mn)r[5].setComponents(d+c,f+h,p+m,E+v).normalize();else if(t===ms)r[5].setComponents(c,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){ni.center.set(0,0,0);const t=ah.distanceTo(e.center);return ni.radius=.7071067811865476+t,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(jr.x=r.normal.x>0?e.max.x:e.min.x,jr.y=r.normal.y>0?e.max.y:e.min.y,jr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gl extends Qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _s=new P,vs=new P,_c=new tt,cr=new bs,Jr=new Zi,Ks=new P,vc=new P;class ch extends Et{constructor(e=new Pt,t=new Gl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)_s.fromBufferAttribute(t,r-1),vs.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=_s.distanceTo(vs);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(r),Jr.radius+=s,e.ray.intersectsSphere(Jr)===!1)return;_c.copy(r).invert(),cr.copy(e.ray).applyMatrix4(_c);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,d=this.isLineSegments?2:1,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=d){const p=l.getX(_),y=l.getX(_+1),x=Kr(this,e,cr,c,p,y,_);x&&t.push(x)}if(this.isLineLoop){const _=l.getX(g-1),m=l.getX(f),p=Kr(this,e,cr,c,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=d){const p=Kr(this,e,cr,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Kr(this,e,cr,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Kr(i,e,t,n,r,s,o){const a=i.geometry.attributes.position;if(_s.fromBufferAttribute(a,r),vs.fromBufferAttribute(a,s),t.distanceSqToSegment(_s,vs,Ks,vc)>n)return;Ks.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(Ks);if(!(d<e.near||d>e.far))return{distance:d,point:vc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const xc=new P,yc=new P;class Hl extends ch{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)xc.fromBufferAttribute(t,r),yc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+xc.distanceTo(yc);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lh extends At{constructor(e,t,n,r,s,o,a,c,d){super(e,t,n,r,s,o,a,c,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vl extends At{constructor(e,t,n=pi,r,s,o,a=Wt,c=Wt,d,l=yr,u=1){if(l!==yr&&l!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,r,s,o,a,c,l,n,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ba(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Wl extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Aa extends Pt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],d=new P,l=new le;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){const f=n+u/t*r;d.x=e*Math.cos(f),d.y=e*Math.sin(f),o.push(d.x,d.y,d.z),a.push(0,0,1),l.x=(o[h]/e+1)/2,l.y=(o[h+1]/e+1)/2,c.push(l.x,l.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(a,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Tt extends Pt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const d=this;r=Math.floor(r),s=Math.floor(s);const l=[],u=[],h=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(l),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(f,2));function y(){const v=new P,E=new P;let A=0;const R=(t-e)/n;for(let I=0;I<=s;I++){const M=[],b=I/s,w=b*(t-e)+e;for(let N=0;N<=r;N++){const F=N/r,B=F*c+a,G=Math.sin(B),H=Math.cos(B);E.x=w*G,E.y=-b*n+m,E.z=w*H,u.push(E.x,E.y,E.z),v.set(G,R,H).normalize(),h.push(v.x,v.y,v.z),f.push(F,1-b),M.push(g++)}_.push(M)}for(let I=0;I<r;I++)for(let M=0;M<s;M++){const b=_[M][I],w=_[M+1][I],N=_[M+1][I+1],F=_[M][I+1];(e>0||M!==0)&&(l.push(b,w,F),A+=3),(t>0||M!==s-1)&&(l.push(w,N,F),A+=3)}d.addGroup(p,A,0),p+=A}function x(v){const E=g,A=new le,R=new P;let I=0;const M=v===!0?e:t,b=v===!0?1:-1;for(let N=1;N<=r;N++)u.push(0,m*b,0),h.push(0,b,0),f.push(.5,.5),g++;const w=g;for(let N=0;N<=r;N++){const B=N/r*c+a,G=Math.cos(B),H=Math.sin(B);R.x=M*H,R.y=m*b,R.z=M*G,u.push(R.x,R.y,R.z),h.push(0,b,0),A.x=G*.5+.5,A.y=H*.5*b+.5,f.push(A.x,A.y),g++}for(let N=0;N<r;N++){const F=E+N,B=w+N;v===!0?l.push(B,B+1,F):l.push(B+1,B,F),I+=3}d.addGroup(p,I,v===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ra extends Tt{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ra(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,c=s-1,d;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),d=n[r]-o,d<0)a=r+1;else if(d>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);const l=n[r],h=n[r+1]-l,f=(o-l)/h;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new le:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,r=[],s=[],o=[],a=new P,c=new tt;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new P)}s[0]=new P,o[0]=new P;let d=Number.MAX_VALUE;const l=Math.abs(r[0].x),u=Math.abs(r[0].y),h=Math.abs(r[0].z);l<=d&&(d=l,n.set(1,0,0)),u<=d&&(d=u,n.set(0,1,0)),h<=d&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(qe(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(qe(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ca extends xn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new le){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),d=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=c-this.aX,f=d-this.aY;c=h*l-f*u+this.aX,d=h*u+f*l+this.aY}return n.set(c,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class uh extends Ca{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Pa(){let i=0,e=0,t=0,n=0;function r(s,o,a,c){i=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,d){r(o,a,d*(a-s),d*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,d,l,u){let h=(o-s)/d-(a-s)/(d+l)+(a-o)/l,f=(a-o)/l-(c-o)/(l+u)+(c-a)/u;h*=l,f*=l,r(o,a,h,f)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const Zr=new P,Zs=new Pa,Qs=new Pa,eo=new Pa;class ls extends xn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new P){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let d,l;this.closed||a>0?d=r[(a-1)%s]:(Zr.subVectors(r[0],r[1]).add(r[0]),d=Zr);const u=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?l=r[(a+2)%s]:(Zr.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=Zr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(d.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(l),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Zs.initNonuniformCatmullRom(d.x,u.x,h.x,l.x,g,_,m),Qs.initNonuniformCatmullRom(d.y,u.y,h.y,l.y,g,_,m),eo.initNonuniformCatmullRom(d.z,u.z,h.z,l.z,g,_,m)}else this.curveType==="catmullrom"&&(Zs.initCatmullRom(d.x,u.x,h.x,l.x,this.tension),Qs.initCatmullRom(d.y,u.y,h.y,l.y,this.tension),eo.initCatmullRom(d.z,u.z,h.z,l.z,this.tension));return n.set(Zs.calc(c),Qs.calc(c),eo.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Sc(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,c=i*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*i+t}function dh(i,e){const t=1-i;return t*t*e}function hh(i,e){return 2*(1-i)*i*e}function fh(i,e){return i*i*e}function gr(i,e,t,n){return dh(i,e)+hh(i,t)+fh(i,n)}function ph(i,e){const t=1-i;return t*t*t*e}function mh(i,e){const t=1-i;return 3*t*t*i*e}function gh(i,e){return 3*(1-i)*i*i*e}function _h(i,e){return i*i*i*e}function _r(i,e,t,n,r){return ph(i,e)+mh(i,t)+gh(i,n)+_h(i,r)}class Xl extends xn{constructor(e=new le,t=new le,n=new le,r=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new le){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(_r(e,r.x,s.x,o.x,a.x),_r(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vh extends xn{constructor(e=new P,t=new P,n=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new P){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(_r(e,r.x,s.x,o.x,a.x),_r(e,r.y,s.y,o.y,a.y),_r(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ql extends xn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ia extends xn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $l extends xn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(gr(e,r.x,s.x,o.x),gr(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ia extends xn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(gr(e,r.x,s.x,o.x),gr(e,r.y,s.y,o.y),gr(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yl extends xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],d=r[o],l=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(Sc(a,c.x,d.x,l.x,u.x),Sc(a,c.y,d.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new le().fromArray(r))}return this}}var xs=Object.freeze({__proto__:null,ArcCurve:uh,CatmullRomCurve3:ls,CubicBezierCurve:Xl,CubicBezierCurve3:vh,EllipseCurve:Ca,LineCurve:ql,LineCurve3:ia,QuadraticBezierCurve:$l,QuadraticBezierCurve3:Ia,SplineCurve:Yl});class jl extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xs[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],c=a.getLength(),d=c===0?0:1-o/c;return a.getPointAt(d,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let d=0;d<c.length;d++){const l=c[d];n&&n.equals(l)||(t.push(l),n=l)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new xs[r.type]().fromJSON(r))}return this}}class kn extends jl{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ql(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new $l(this.currentPoint.clone(),new le(e,t),new le(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new Xl(this.currentPoint.clone(),new le(e,t),new le(n,r),new le(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Yl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,c){const d=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+d,t+l,n,r,s,o,a,c),this}absellipse(e,t,n,r,s,o,a,c){const d=new Ca(e,t,n,r,s,o,a,c);if(this.curves.length>0){const u=d.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(d);const l=d.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class jt extends kn{constructor(e){super(e),this.uuid=vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new kn().fromJSON(r))}return this}}function xh(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Jl(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,d;if(n&&(s=Eh(i,e,s,t)),i.length>80*t){a=1/0,c=1/0;let l=-1/0,u=-1/0;for(let h=t;h<r;h+=t){const f=i[h],g=i[h+1];f<a&&(a=f),g<c&&(c=g),f>l&&(l=f),g>u&&(u=g)}d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return Er(s,o,t,a,c,d,0),o}function Jl(i,e,t,n,r){let s;if(r===Nh(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=Mc(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=Mc(o/n|0,i[o],i[o+1],s);return s&&Ji(s,s.next)&&(Tr(s),s=s.next),s}function gi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ji(t,t.next)||mt(t.prev,t,t.next)===0)){if(Tr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Er(i,e,t,n,r,s,o){if(!i)return;!o&&s&&Ch(i,n,r,s);let a=i;for(;i.prev!==i.next;){const c=i.prev,d=i.next;if(s?Sh(i,n,r,s):yh(i)){e.push(c.i,i.i,d.i),Tr(i),i=d.next,a=d.next;continue}if(i=d,i===a){o?o===1?(i=Mh(gi(i),e),Er(i,e,t,n,r,s,2)):o===2&&bh(i,e,t,n,r,s):Er(gi(i),e,t,n,r,s,1);break}}}function yh(i){const e=i.prev,t=i,n=i.next;if(mt(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,c=t.y,d=n.y,l=Math.min(r,s,o),u=Math.min(a,c,d),h=Math.max(r,s,o),f=Math.max(a,c,d);let g=n.next;for(;g!==e;){if(g.x>=l&&g.x<=h&&g.y>=u&&g.y<=f&&dr(r,a,s,c,o,d,g.x,g.y)&&mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Sh(i,e,t,n){const r=i.prev,s=i,o=i.next;if(mt(r,s,o)>=0)return!1;const a=r.x,c=s.x,d=o.x,l=r.y,u=s.y,h=o.y,f=Math.min(a,c,d),g=Math.min(l,u,h),_=Math.max(a,c,d),m=Math.max(l,u,h),p=ra(f,g,e,t,n),y=ra(_,m,e,t,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=p&&v&&v.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&dr(a,l,c,u,d,h,x.x,x.y)&&mt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&dr(a,l,c,u,d,h,v.x,v.y)&&mt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&dr(a,l,c,u,d,h,x.x,x.y)&&mt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&dr(a,l,c,u,d,h,v.x,v.y)&&mt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Mh(i,e){let t=i;do{const n=t.prev,r=t.next.next;!Ji(n,r)&&Zl(n,t,t.next,r)&&wr(n,r)&&wr(r,n)&&(e.push(n.i,t.i,r.i),Tr(t),Tr(t.next),t=i=r),t=t.next}while(t!==i);return gi(t)}function bh(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Dh(o,a)){let c=Ql(o,a);o=gi(o,o.next),c=gi(c,c.next),Er(o,e,t,n,r,s,0),Er(c,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Eh(i,e,t,n){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*n,c=s<o-1?e[s+1]*n:i.length,d=Jl(i,a,c,n,!1);d===d.next&&(d.steiner=!0),r.push(Ih(d))}r.sort(wh);for(let s=0;s<r.length;s++)t=Th(r[s],t);return t}function wh(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function Th(i,e){const t=Ah(i,e);if(!t)return e;const n=Ql(t,i);return gi(n,n.next),gi(t,t.next)}function Ah(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,o;if(Ji(i,t))return t;do{if(Ji(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,d=o.y;let l=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Kl(r<d?n:s,r,c,d,r<d?s:n,r,t.x,t.y)){const u=Math.abs(r-t.y)/(n-t.x);wr(t,i)&&(u<l||u===l&&(t.x>o.x||t.x===o.x&&Rh(o,t)))&&(o=t,l=u)}t=t.next}while(t!==a);return o}function Rh(i,e){return mt(i.prev,i,e.prev)<0&&mt(e.next,i,i.next)<0}function Ch(i,e,t,n){let r=i;do r.z===0&&(r.z=ra(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Ph(r)}function Ph(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let d=0;d<t&&(a++,o=o.nextZ,!!o);d++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function ra(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Ih(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Kl(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function dr(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&Kl(i,e,t,n,r,s,o,a)}function Dh(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Lh(i,e)&&(wr(i,e)&&wr(e,i)&&Uh(i,e)&&(mt(i.prev,i,e.prev)||mt(i,e.prev,e))||Ji(i,e)&&mt(i.prev,i,i.next)>0&&mt(e.prev,e,e.next)>0)}function mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ji(i,e){return i.x===e.x&&i.y===e.y}function Zl(i,e,t,n){const r=es(mt(i,e,t)),s=es(mt(i,e,n)),o=es(mt(t,n,i)),a=es(mt(t,n,e));return!!(r!==s&&o!==a||r===0&&Qr(i,t,e)||s===0&&Qr(i,n,e)||o===0&&Qr(t,i,n)||a===0&&Qr(t,e,n))}function Qr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function es(i){return i>0?1:i<0?-1:0}function Lh(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Zl(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function wr(i,e){return mt(i.prev,i,i.next)<0?mt(i,e,i.next)>=0&&mt(i,i.prev,e)>=0:mt(i,e,i.prev)<0||mt(i,i.next,e)<0}function Uh(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ql(i,e){const t=sa(i.i,i.x,i.y),n=sa(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Mc(i,e,t,n){const r=sa(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Tr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function sa(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Nh(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Fh{static triangulate(e,t,n=2){return xh(e,t,n)}}class Tn{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Tn.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];bc(e),Ec(n,e);let o=e.length;t.forEach(bc);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,Ec(n,t[c]);const a=Fh.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function bc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ec(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class nn extends Pt{constructor(e=new jt([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const d=e[a];o(d)}this.setAttribute("position",new it(r,3)),this.setAttribute("uv",new it(s,2)),this.computeVertexNormals();function o(a){const c=[],d=t.curveSegments!==void 0?t.curveSegments:12,l=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Oh;let x,v=!1,E,A,R,I;p&&(x=p.getSpacedPoints(l),v=!0,h=!1,E=p.computeFrenetFrames(l,!1),A=new P,R=new P,I=new P),h||(m=0,f=0,g=0,_=0);const M=a.extractPoints(d);let b=M.shape;const w=M.holes;if(!Tn.isClockWise(b)){b=b.reverse();for(let ne=0,ee=w.length;ne<ee;ne++){const Q=w[ne];Tn.isClockWise(Q)&&(w[ne]=Q.reverse())}}function F(ne){const Q=10000000000000001e-36;let J=ne[0];for(let he=1;he<=ne.length;he++){const oe=he%ne.length,pe=ne[oe],Ge=pe.x-J.x,Le=pe.y-J.y,C=Ge*Ge+Le*Le,S=Math.max(Math.abs(pe.x),Math.abs(pe.y),Math.abs(J.x),Math.abs(J.y)),k=Q*S*S;if(C<=k){ne.splice(oe,1),he--;continue}J=pe}}F(b),w.forEach(F);const B=w.length,G=b;for(let ne=0;ne<B;ne++){const ee=w[ne];b=b.concat(ee)}function H(ne,ee,Q){return ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(ee,Q)}const j=b.length;function W(ne,ee,Q){let J,he,oe;const pe=ne.x-ee.x,Ge=ne.y-ee.y,Le=Q.x-ne.x,C=Q.y-ne.y,S=pe*pe+Ge*Ge,k=pe*C-Ge*Le;if(Math.abs(k)>Number.EPSILON){const q=Math.sqrt(S),ie=Math.sqrt(Le*Le+C*C),Y=ee.x-Ge/q,Ce=ee.y+pe/q,fe=Q.x-C/ie,Te=Q.y+Le/ie,Ae=((fe-Y)*C-(Te-Ce)*Le)/(pe*C-Ge*Le);J=Y+pe*Ae-ne.x,he=Ce+Ge*Ae-ne.y;const ce=J*J+he*he;if(ce<=2)return new le(J,he);oe=Math.sqrt(ce/2)}else{let q=!1;pe>Number.EPSILON?Le>Number.EPSILON&&(q=!0):pe<-Number.EPSILON?Le<-Number.EPSILON&&(q=!0):Math.sign(Ge)===Math.sign(C)&&(q=!0),q?(J=-Ge,he=pe,oe=Math.sqrt(S)):(J=pe,he=Ge,oe=Math.sqrt(S/2))}return new le(J/oe,he/oe)}const ue=[];for(let ne=0,ee=G.length,Q=ee-1,J=ne+1;ne<ee;ne++,Q++,J++)Q===ee&&(Q=0),J===ee&&(J=0),ue[ne]=W(G[ne],G[Q],G[J]);const ge=[];let Se,ke=ue.concat();for(let ne=0,ee=B;ne<ee;ne++){const Q=w[ne];Se=[];for(let J=0,he=Q.length,oe=he-1,pe=J+1;J<he;J++,oe++,pe++)oe===he&&(oe=0),pe===he&&(pe=0),Se[J]=W(Q[J],Q[oe],Q[pe]);ge.push(Se),ke=ke.concat(Se)}let He;if(m===0)He=Tn.triangulateShape(G,w);else{const ne=[],ee=[];for(let Q=0;Q<m;Q++){const J=Q/m,he=f*Math.cos(J*Math.PI/2),oe=g*Math.sin(J*Math.PI/2)+_;for(let pe=0,Ge=G.length;pe<Ge;pe++){const Le=H(G[pe],ue[pe],oe);De(Le.x,Le.y,-he),J===0&&ne.push(Le)}for(let pe=0,Ge=B;pe<Ge;pe++){const Le=w[pe];Se=ge[pe];const C=[];for(let S=0,k=Le.length;S<k;S++){const q=H(Le[S],Se[S],oe);De(q.x,q.y,-he),J===0&&C.push(q)}J===0&&ee.push(C)}}He=Tn.triangulateShape(ne,ee)}const Ye=He.length,We=g+_;for(let ne=0;ne<j;ne++){const ee=h?H(b[ne],ke[ne],We):b[ne];v?(R.copy(E.normals[0]).multiplyScalar(ee.x),A.copy(E.binormals[0]).multiplyScalar(ee.y),I.copy(x[0]).add(R).add(A),De(I.x,I.y,I.z)):De(ee.x,ee.y,0)}for(let ne=1;ne<=l;ne++)for(let ee=0;ee<j;ee++){const Q=h?H(b[ee],ke[ee],We):b[ee];v?(R.copy(E.normals[ne]).multiplyScalar(Q.x),A.copy(E.binormals[ne]).multiplyScalar(Q.y),I.copy(x[ne]).add(R).add(A),De(I.x,I.y,I.z)):De(Q.x,Q.y,u/l*ne)}for(let ne=m-1;ne>=0;ne--){const ee=ne/m,Q=f*Math.cos(ee*Math.PI/2),J=g*Math.sin(ee*Math.PI/2)+_;for(let he=0,oe=G.length;he<oe;he++){const pe=H(G[he],ue[he],J);De(pe.x,pe.y,u+Q)}for(let he=0,oe=w.length;he<oe;he++){const pe=w[he];Se=ge[he];for(let Ge=0,Le=pe.length;Ge<Le;Ge++){const C=H(pe[Ge],Se[Ge],J);v?De(C.x,C.y+x[l-1].y,x[l-1].x+Q):De(C.x,C.y,u+Q)}}}Z(),re();function Z(){const ne=r.length/3;if(h){let ee=0,Q=j*ee;for(let J=0;J<Ye;J++){const he=He[J];we(he[2]+Q,he[1]+Q,he[0]+Q)}ee=l+m*2,Q=j*ee;for(let J=0;J<Ye;J++){const he=He[J];we(he[0]+Q,he[1]+Q,he[2]+Q)}}else{for(let ee=0;ee<Ye;ee++){const Q=He[ee];we(Q[2],Q[1],Q[0])}for(let ee=0;ee<Ye;ee++){const Q=He[ee];we(Q[0]+j*l,Q[1]+j*l,Q[2]+j*l)}}n.addGroup(ne,r.length/3-ne,0)}function re(){const ne=r.length/3;let ee=0;Me(G,ee),ee+=G.length;for(let Q=0,J=w.length;Q<J;Q++){const he=w[Q];Me(he,ee),ee+=he.length}n.addGroup(ne,r.length/3-ne,1)}function Me(ne,ee){let Q=ne.length;for(;--Q>=0;){const J=Q;let he=Q-1;he<0&&(he=ne.length-1);for(let oe=0,pe=l+m*2;oe<pe;oe++){const Ge=j*oe,Le=j*(oe+1),C=ee+J+Ge,S=ee+he+Ge,k=ee+he+Le,q=ee+J+Le;$e(C,S,k,q)}}}function De(ne,ee,Q){c.push(ne),c.push(ee),c.push(Q)}function we(ne,ee,Q){nt(ne),nt(ee),nt(Q);const J=r.length/3,he=y.generateTopUV(n,r,J-3,J-2,J-1);D(he[0]),D(he[1]),D(he[2])}function $e(ne,ee,Q,J){nt(ne),nt(ee),nt(J),nt(ee),nt(Q),nt(J);const he=r.length/3,oe=y.generateSideWallUV(n,r,he-6,he-3,he-2,he-1);D(oe[0]),D(oe[1]),D(oe[3]),D(oe[1]),D(oe[2]),D(oe[3])}function nt(ne){r.push(c[ne*3+0]),r.push(c[ne*3+1]),r.push(c[ne*3+2])}function D(ne){s.push(ne.x),s.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Bh(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new xs[r.type]().fromJSON(r)),new nn(n,e.options)}}const Oh={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],d=e[r*3],l=e[r*3+1];return[new le(s,o),new le(a,c),new le(d,l)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],d=e[n*3],l=e[n*3+1],u=e[n*3+2],h=e[r*3],f=e[r*3+1],g=e[r*3+2],_=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-l)<Math.abs(o-d)?[new le(o,1-c),new le(d,1-u),new le(h,1-g),new le(_,1-p)]:[new le(a,1-c),new le(l,1-u),new le(f,1-g),new le(m,1-p)]}};function Bh(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class xi extends Pt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),d=a+1,l=c+1,u=e/a,h=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<l;p++){const y=p*h-o;for(let x=0;x<d;x++){const v=x*u-s;g.push(v,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const x=y+d*p,v=y+d*(p+1),E=y+1+d*(p+1),A=y+1+d*p;f.push(x,v,A),f.push(v,E,A)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Da extends Pt{constructor(e=new jt([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)d(e);else for(let l=0;l<e.length;l++)d(e[l]),this.addGroup(a,c,l),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(s,3)),this.setAttribute("uv",new it(o,2));function d(l){const u=r.length/3,h=l.extractPoints(t);let f=h.shape;const g=h.holes;Tn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];Tn.isClockWise(y)===!0&&(g[m]=y.reverse())}const _=Tn.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){const y=f[m];r.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=_.length;m<p;m++){const y=_[m],x=y[0]+u,v=y[1]+u,E=y[2]+u;n.push(x,v,E),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return zh(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];n.push(o)}return new Da(n,e.curveSegments)}}function zh(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class Es extends Pt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let d=0;const l=[],u=new P,h=new P,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){const A=E/t;u.x=-e*Math.cos(r+A*s)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(r+A*s)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),h.copy(u).normalize(),_.push(h.x,h.y,h.z),m.push(A+v,1-x),y.push(d++)}l.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const x=l[p][y+1],v=l[p][y],E=l[p+1][y],A=l[p+1][y+1];(p!==0||o>0)&&f.push(x,v,A),(p!==n-1||c<Math.PI)&&f.push(v,E,A)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class gn extends Pt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],c=[],d=[],l=new P,u=new P,h=new P;for(let f=0;f<=n;f++)for(let g=0;g<=r;g++){const _=g/r*s,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),l.x=e*Math.cos(_),l.y=e*Math.sin(_),h.subVectors(u,l).normalize(),c.push(h.x,h.y,h.z),d.push(g/r),d.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=r;g++){const _=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,p=(r+1)*(f-1)+g,y=(r+1)*f+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Bi extends Pt{constructor(e=new Ia(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,c=new P,d=new le;let l=new P;const u=[],h=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(f,2));function _(){for(let x=0;x<t;x++)m(x);m(s===!1?t:0),y(),p()}function m(x){l=e.getPointAt(x/t,l);const v=o.normals[x],E=o.binormals[x];for(let A=0;A<=r;A++){const R=A/r*Math.PI*2,I=Math.sin(R),M=-Math.cos(R);c.x=M*v.x+I*E.x,c.y=M*v.y+I*E.y,c.z=M*v.z+I*E.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=l.x+n*c.x,a.y=l.y+n*c.y,a.z=l.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=t;x++)for(let v=1;v<=r;v++){const E=(r+1)*(x-1)+(v-1),A=(r+1)*x+(v-1),R=(r+1)*x+v,I=(r+1)*(x-1)+v;g.push(E,A,I),g.push(A,R,I)}}function y(){for(let x=0;x<=t;x++)for(let v=0;v<=r;v++)d.x=x/t,d.y=v/r,f.push(d.x,d.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Bi(new xs[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Je extends Qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pl,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kh extends Qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gh extends Qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class La extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Hh extends La{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const to=new tt,wc=new P,Tc=new P;class eu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ta,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(wc),Tc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tc),t.updateMatrixWorld(),to.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(to,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(to)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ac=new tt,lr=new P,no=new P;class Vh extends eu{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),lr.setFromMatrixPosition(e.matrixWorld),n.position.copy(lr),no.copy(n.position),no.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(no),n.updateMatrixWorld(),r.makeTranslation(-lr.x,-lr.y,-lr.z),Ac.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ac,n.coordinateSystem,n.reversedDepth)}}class Wh extends La{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Vh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tu extends Bl{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,o=s+d*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xh extends eu{constructor(){super(new tu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rc extends La{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new Xh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qh extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Cc=new tt;class $h{constructor(e,t,n=0,r=1/0){this.ray=new bs(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ea,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Cc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cc),this}intersectObject(e,t=!0,n=[]){return oa(e,this,n,t),n.sort(Pc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)oa(e[r],this,n,t);return n.sort(Pc),n}}function Pc(i,e){return i.distance-e.distance}function oa(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)oa(s[o],e,t,!0)}}class Ic{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Yh extends _i{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Dc(i,e,t,n){const r=jh(n);switch(t){case Al:return i*e;case va:return i*e/r.components*r.byteLength;case xa:return i*e/r.components*r.byteLength;case Cl:return i*e*2/r.components*r.byteLength;case ya:return i*e*2/r.components*r.byteLength;case Rl:return i*e*3/r.components*r.byteLength;case rn:return i*e*4/r.components*r.byteLength;case Sa:return i*e*4/r.components*r.byteLength;case ss:case os:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case as:case cs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Co:case Io:return Math.max(i,16)*Math.max(e,8)/4;case Ro:case Po:return Math.max(i,8)*Math.max(e,8)/2;case Do:case Lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case No:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ko:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Go:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case qo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Yo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case jo:case Jo:case Ko:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zo:case Qo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ea:case ta:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jh(i){switch(i){case _n:case bl:return{byteLength:1,components:1};case vr:case El:case Ar:return{byteLength:2,components:1};case ga:case _a:return{byteLength:2,components:4};case pi:case ma:case pn:return{byteLength:4,components:1};case wl:case Tl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nu(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Jh(i){const e=new WeakMap;function t(a,c){const d=a.array,l=a.usage,u=d.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,d,l),a.onUploadCallback();let f;if(d instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)f=i.HALF_FLOAT;else if(d instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)f=i.SHORT;else if(d instanceof Uint32Array)f=i.UNSIGNED_INT;else if(d instanceof Int32Array)f=i.INT;else if(d instanceof Int8Array)f=i.BYTE;else if(d instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:h,type:f,bytesPerElement:d.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,d){const l=c.array,u=c.updateRanges;if(i.bindBuffer(d,a),u.length===0)i.bufferSubData(d,0,l);else{u.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<u.length;f++){const g=u[h],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,u[h]=_)}u.length=h+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(d,_.start*l.BYTES_PER_ELEMENT,l,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const l=e.get(a);(!l||l.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const d=e.get(a);if(d===void 0)e.set(a,t(a,c));else if(d.version<a.version){if(d.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,a,c),d.version=a.version}}return{get:r,remove:s,update:o}}var Kh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,of=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,af=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,df=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ef=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Df=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ap=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,up=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,om=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ym=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Am=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:Kh,alphahash_pars_fragment:Zh,alphamap_fragment:Qh,alphamap_pars_fragment:ef,alphatest_fragment:tf,alphatest_pars_fragment:nf,aomap_fragment:rf,aomap_pars_fragment:sf,batching_pars_vertex:of,batching_vertex:af,begin_vertex:cf,beginnormal_vertex:lf,bsdfs:uf,iridescence_fragment:df,bumpmap_pars_fragment:hf,clipping_planes_fragment:ff,clipping_planes_pars_fragment:pf,clipping_planes_pars_vertex:mf,clipping_planes_vertex:gf,color_fragment:_f,color_pars_fragment:vf,color_pars_vertex:xf,color_vertex:yf,common:Sf,cube_uv_reflection_fragment:Mf,defaultnormal_vertex:bf,displacementmap_pars_vertex:Ef,displacementmap_vertex:wf,emissivemap_fragment:Tf,emissivemap_pars_fragment:Af,colorspace_fragment:Rf,colorspace_pars_fragment:Cf,envmap_fragment:Pf,envmap_common_pars_fragment:If,envmap_pars_fragment:Df,envmap_pars_vertex:Lf,envmap_physical_pars_fragment:Wf,envmap_vertex:Uf,fog_vertex:Nf,fog_pars_vertex:Ff,fog_fragment:Of,fog_pars_fragment:Bf,gradientmap_pars_fragment:zf,lightmap_pars_fragment:kf,lights_lambert_fragment:Gf,lights_lambert_pars_fragment:Hf,lights_pars_begin:Vf,lights_toon_fragment:Xf,lights_toon_pars_fragment:qf,lights_phong_fragment:$f,lights_phong_pars_fragment:Yf,lights_physical_fragment:jf,lights_physical_pars_fragment:Jf,lights_fragment_begin:Kf,lights_fragment_maps:Zf,lights_fragment_end:Qf,logdepthbuf_fragment:ep,logdepthbuf_pars_fragment:tp,logdepthbuf_pars_vertex:np,logdepthbuf_vertex:ip,map_fragment:rp,map_pars_fragment:sp,map_particle_fragment:op,map_particle_pars_fragment:ap,metalnessmap_fragment:cp,metalnessmap_pars_fragment:lp,morphinstance_vertex:up,morphcolor_vertex:dp,morphnormal_vertex:hp,morphtarget_pars_vertex:fp,morphtarget_vertex:pp,normal_fragment_begin:mp,normal_fragment_maps:gp,normal_pars_fragment:_p,normal_pars_vertex:vp,normal_vertex:xp,normalmap_pars_fragment:yp,clearcoat_normal_fragment_begin:Sp,clearcoat_normal_fragment_maps:Mp,clearcoat_pars_fragment:bp,iridescence_pars_fragment:Ep,opaque_fragment:wp,packing:Tp,premultiplied_alpha_fragment:Ap,project_vertex:Rp,dithering_fragment:Cp,dithering_pars_fragment:Pp,roughnessmap_fragment:Ip,roughnessmap_pars_fragment:Dp,shadowmap_pars_fragment:Lp,shadowmap_pars_vertex:Up,shadowmap_vertex:Np,shadowmask_pars_fragment:Fp,skinbase_vertex:Op,skinning_pars_vertex:Bp,skinning_vertex:zp,skinnormal_vertex:kp,specularmap_fragment:Gp,specularmap_pars_fragment:Hp,tonemapping_fragment:Vp,tonemapping_pars_fragment:Wp,transmission_fragment:Xp,transmission_pars_fragment:qp,uv_pars_fragment:$p,uv_pars_vertex:Yp,uv_vertex:jp,worldpos_vertex:Jp,background_vert:Kp,background_frag:Zp,backgroundCube_vert:Qp,backgroundCube_frag:em,cube_vert:tm,cube_frag:nm,depth_vert:im,depth_frag:rm,distanceRGBA_vert:sm,distanceRGBA_frag:om,equirect_vert:am,equirect_frag:cm,linedashed_vert:lm,linedashed_frag:um,meshbasic_vert:dm,meshbasic_frag:hm,meshlambert_vert:fm,meshlambert_frag:pm,meshmatcap_vert:mm,meshmatcap_frag:gm,meshnormal_vert:_m,meshnormal_frag:vm,meshphong_vert:xm,meshphong_frag:ym,meshphysical_vert:Sm,meshphysical_frag:Mm,meshtoon_vert:bm,meshtoon_frag:Em,points_vert:wm,points_frag:Tm,shadow_vert:Am,shadow_frag:Rm,sprite_vert:Cm,sprite_frag:Pm},xe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},un={basic:{uniforms:Ut([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Ut([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Ut([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Ut([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Ut([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Ut([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Ut([xe.points,xe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Ut([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Ut([xe.common,xe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Ut([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Ut([xe.sprite,xe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Ut([xe.common,xe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Ut([xe.lights,xe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};un.physical={uniforms:Ut([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const ts={r:0,b:0,g:0},ii=new Jt,Im=new tt;function Dm(i,e,t,n,r,s,o){const a=new Ke(0);let c=s===!0?0:1,d,l,u=null,h=0,f=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const E=g(x);E===null?p(a,c):E&&E.isColor&&(p(E,1),v=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,v){const E=g(v);E&&(E.isCubeTexture||E.mapping===Ms)?(l===void 0&&(l=new Ee(new _t(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:ji(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),ii.copy(v.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),l.material.uniforms.envMap.value=E,l.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Im.makeRotationFromEuler(ii)),l.material.toneMapped=et.getTransfer(E.colorSpace)!==at,(u!==E||h!==E.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=E,h=E.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(d===void 0&&(d=new Ee(new xi(2,2),new Jn({name:"BackgroundMaterial",uniforms:ji(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=E,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.toneMapped=et.getTransfer(E.colorSpace)!==at,E.matrixAutoUpdate===!0&&E.updateMatrix(),d.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||h!==E.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,u=E,h=E.version,f=i.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null))}function p(x,v){x.getRGB(ts,Ol(i)),n.buffers.color.setClear(ts.r,ts.g,ts.b,v,o)}function y(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:_,addToRenderList:m,dispose:y}}function Lm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(b,w,N,F,B){let G=!1;const H=u(F,N,w);s!==H&&(s=H,d(s.object)),G=f(b,F,N,B),G&&g(b,F,N,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(b,w,N,F),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function d(b){return i.bindVertexArray(b)}function l(b){return i.deleteVertexArray(b)}function u(b,w,N){const F=N.wireframe===!0;let B=n[b.id];B===void 0&&(B={},n[b.id]=B);let G=B[w.id];G===void 0&&(G={},B[w.id]=G);let H=G[F];return H===void 0&&(H=h(c()),G[F]=H),H}function h(b){const w=[],N=[],F=[];for(let B=0;B<t;B++)w[B]=0,N[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:N,attributeDivisors:F,object:b,attributes:{},index:null}}function f(b,w,N,F){const B=s.attributes,G=w.attributes;let H=0;const j=N.getAttributes();for(const W in j)if(j[W].location>=0){const ge=B[W];let Se=G[W];if(Se===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(Se=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(Se=b.instanceColor)),ge===void 0||ge.attribute!==Se||Se&&ge.data!==Se.data)return!0;H++}return s.attributesNum!==H||s.index!==F}function g(b,w,N,F){const B={},G=w.attributes;let H=0;const j=N.getAttributes();for(const W in j)if(j[W].location>=0){let ge=G[W];ge===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(ge=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(ge=b.instanceColor));const Se={};Se.attribute=ge,ge&&ge.data&&(Se.data=ge.data),B[W]=Se,H++}s.attributes=B,s.attributesNum=H,s.index=F}function _(){const b=s.newAttributes;for(let w=0,N=b.length;w<N;w++)b[w]=0}function m(b){p(b,0)}function p(b,w){const N=s.newAttributes,F=s.enabledAttributes,B=s.attributeDivisors;N[b]=1,F[b]===0&&(i.enableVertexAttribArray(b),F[b]=1),B[b]!==w&&(i.vertexAttribDivisor(b,w),B[b]=w)}function y(){const b=s.newAttributes,w=s.enabledAttributes;for(let N=0,F=w.length;N<F;N++)w[N]!==b[N]&&(i.disableVertexAttribArray(N),w[N]=0)}function x(b,w,N,F,B,G,H){H===!0?i.vertexAttribIPointer(b,w,N,B,G):i.vertexAttribPointer(b,w,N,F,B,G)}function v(b,w,N,F){_();const B=F.attributes,G=N.getAttributes(),H=w.defaultAttributeValues;for(const j in G){const W=G[j];if(W.location>=0){let ue=B[j];if(ue===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor)),ue!==void 0){const ge=ue.normalized,Se=ue.itemSize,ke=e.get(ue);if(ke===void 0)continue;const He=ke.buffer,Ye=ke.type,We=ke.bytesPerElement,Z=Ye===i.INT||Ye===i.UNSIGNED_INT||ue.gpuType===ma;if(ue.isInterleavedBufferAttribute){const re=ue.data,Me=re.stride,De=ue.offset;if(re.isInstancedInterleavedBuffer){for(let we=0;we<W.locationSize;we++)p(W.location+we,re.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let we=0;we<W.locationSize;we++)m(W.location+we);i.bindBuffer(i.ARRAY_BUFFER,He);for(let we=0;we<W.locationSize;we++)x(W.location+we,Se/W.locationSize,Ye,ge,Me*We,(De+Se/W.locationSize*we)*We,Z)}else{if(ue.isInstancedBufferAttribute){for(let re=0;re<W.locationSize;re++)p(W.location+re,ue.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let re=0;re<W.locationSize;re++)m(W.location+re);i.bindBuffer(i.ARRAY_BUFFER,He);for(let re=0;re<W.locationSize;re++)x(W.location+re,Se/W.locationSize,Ye,ge,Se*We,Se/W.locationSize*re*We,Z)}}else if(H!==void 0){const ge=H[j];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(W.location,ge);break;case 3:i.vertexAttrib3fv(W.location,ge);break;case 4:i.vertexAttrib4fv(W.location,ge);break;default:i.vertexAttrib1fv(W.location,ge)}}}}y()}function E(){I();for(const b in n){const w=n[b];for(const N in w){const F=w[N];for(const B in F)l(F[B].object),delete F[B];delete w[N]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;const w=n[b.id];for(const N in w){const F=w[N];for(const B in F)l(F[B].object),delete F[B];delete w[N]}delete n[b.id]}function R(b){for(const w in n){const N=n[w];if(N[b.id]===void 0)continue;const F=N[b.id];for(const B in F)l(F[B].object),delete F[B];delete N[b.id]}}function I(){M(),o=!0,s!==r&&(s=r,d(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Um(i,e,t){let n;function r(d){n=d}function s(d,l){i.drawArrays(n,d,l),t.update(l,n,1)}function o(d,l,u){u!==0&&(i.drawArraysInstanced(n,d,l,u),t.update(l,n,u))}function a(d,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,l,0,u);let f=0;for(let g=0;g<u;g++)f+=l[g];t.update(f,n,1)}function c(d,l,u,h){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d.length;g++)o(d[g],l[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,d,0,l,0,h,0,u);let g=0;for(let _=0;_<u;_++)g+=l[_]*h[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Nm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==rn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const I=R===Ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==_n&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==pn&&!I)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const l=c(d);l!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",l,"instead."),d=l);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:d,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:E,maxSamples:A}}function Fm(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Bn,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||n!==0||r;return r=h,n=u.length,f},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=l(u,h,0)},this.setState=function(u,h,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?l(null):d();else{const y=s?0:n,x=y*4;let v=p.clippingState||null;c.value=v,v=l(g,h,x,f);for(let E=0;E!==x;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function d(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(u,h,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Om(i){let e=new WeakMap;function t(o,a){return a===wo?o.mapping=qi:a===To&&(o.mapping=$i),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===wo||a===To)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const d=new th(c.height);return d.fromEquirectangularTexture(i,o),e.set(o,d),o.addEventListener("dispose",r),t(d.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const zi=4,Lc=[.125,.215,.35,.446,.526,.582],ci=20,io=new tu,Uc=new Ke;let ro=null,so=0,oo=0,ao=!1;const oi=(1+Math.sqrt(5))/2,Ni=1/oi,Nc=[new P(-oi,Ni,0),new P(oi,Ni,0),new P(-Ni,0,oi),new P(Ni,0,oi),new P(0,oi,-Ni),new P(0,oi,Ni),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Bm=new P;class Fc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=Bm}=s;ro=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ro,so,oo),this._renderer.xr.enabled=ao,e.scissorTest=!1,ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ro=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Ar,format:rn,colorSpace:Yi,depthBuffer:!1},r=Oc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zm(s)),this._blurMaterial=km(s,e,t)}return r}_compileMaterial(e){const t=new Ee(this._lodPlanes[0],e);this._renderer.compile(t,io)}_sceneToCubeUV(e,t,n,r,s){const c=new Vt(90,1,t,n),d=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Uc),u.toneMapping=Xn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const _=new Rn({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),m=new Ee(new _t,_);let p=!1;const y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,p=!0):(_.color.copy(Uc),p=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(c.up.set(0,d[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+l[x],s.y,s.z)):v===1?(c.up.set(0,0,d[x]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+l[x],s.z)):(c.up.set(0,d[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+l[x]));const E=this._cubeSize;ns(r,v*E,x>2?E:0,E,E),u.setRenderTarget(r),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===qi||e.mapping===$i;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;ns(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,io)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Nc[(r-s-1)%Nc.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,d=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,u=new Ee(this._lodPlanes[r],d),h=d.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ci-1),_=s/g,m=isFinite(s)?1+Math.floor(l*_):ci;m>ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ci}`);const p=[];let y=0;for(let R=0;R<ci;++R){const I=R/_,M=Math.exp(-I*I/2);p.push(M),R===0?y+=M:R<m&&(y+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const v=this._sizeLods[r],E=3*v*(r>x-zi?r-x+zi:0),A=4*(this._cubeSize-v);ns(t,E,A,3*v,2*v),c.setRenderTarget(t),c.render(u,io)}}function zm(i){const e=[],t=[],n=[];let r=i;const s=i-zi+1+Lc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-zi?c=Lc[o-i+zi-1]:o===0&&(c=0),n.push(c);const d=1/(a-2),l=-d,u=1+d,h=[l,l,u,l,u,u,l,l,u,u,l,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,I=A>2?0:-1,M=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];y.set(M,_*g*A),x.set(h,m*g*A);const b=[A,A,A,A,A,A];v.set(b,p*g*A)}const E=new Pt;E.setAttribute("position",new sn(y,_)),E.setAttribute("uv",new sn(x,m)),E.setAttribute("faceIndex",new sn(v,p)),e.push(E),r>zi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Oc(i,e,t){const n=new mi(i,e,t);return n.texture.mapping=Ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ns(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function km(i,e,t){const n=new Float32Array(ci),r=new P(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Bc(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function zc(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Ua(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,d=c===wo||c===To,l=c===qi||c===$i;if(d||l){let u=e.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Fc(i)),u=d?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return d&&f&&f.height>0||l&&f&&r(f)?(t===null&&(t=new Fc(i)),u=d?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0;const d=6;for(let l=0;l<d;l++)a[l]!==void 0&&c++;return c===d}function s(a){const c=a.target;c.removeEventListener("dispose",s);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Hm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&br("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Vm(i,e,t,n){const r={},s=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(u){const h=u.attributes;for(const f in h)e.update(h[f],i.ARRAY_BUFFER)}function d(u){const h=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let x=0,v=y.length;x<v;x+=3){const E=y[x+0],A=y[x+1],R=y[x+2];h.push(E,A,A,R,R,E)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const E=x+0,A=x+1,R=x+2;h.push(E,A,A,R,R,E)}}else return;const m=new(Dl(h)?Fl:Nl)(h,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function l(u){const h=s.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&d(u)}else d(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:l}}function Wm(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){i.drawElements(n,f,s,h*o),t.update(f,n,1)}function d(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,h*o,g),t.update(f,n,g))}function l(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(h,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)d(h[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=d,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function Xm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function qm(i,e,t){const n=new WeakMap,r=new lt;function s(o,a,c){const d=o.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=l!==void 0?l.length:0;let h=n.get(a);if(h===void 0||h.count!==u){let b=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var f=b;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let E=a.attributes.position.count*v,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const R=new Float32Array(E*A*4*u),I=new Ll(R,E,A,u);I.type=pn,I.needsUpdate=!0;const M=v*4;for(let w=0;w<u;w++){const N=p[w],F=y[w],B=x[w],G=E*A*4*w;for(let H=0;H<N.count;H++){const j=H*M;g===!0&&(r.fromBufferAttribute(N,H),R[G+j+0]=r.x,R[G+j+1]=r.y,R[G+j+2]=r.z,R[G+j+3]=0),_===!0&&(r.fromBufferAttribute(F,H),R[G+j+4]=r.x,R[G+j+5]=r.y,R[G+j+6]=r.z,R[G+j+7]=0),m===!0&&(r.fromBufferAttribute(B,H),R[G+j+8]=r.x,R[G+j+9]=r.y,R[G+j+10]=r.z,R[G+j+11]=B.itemSize===4?r.w:1)}}h={count:u,texture:I,size:new le(E,A)},n.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<d.length;m++)g+=d[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",d)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function $m(i,e,t,n){let r=new WeakMap;function s(c){const d=n.render.frame,l=c.geometry,u=e.get(c,l);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==d&&(h.update(),r.set(h,d))}return u}function o(){r=new WeakMap}function a(c){const d=c.target;d.removeEventListener("dispose",a),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:o}}const iu=new At,kc=new Vl(1,1),ru=new Ll,su=new Bd,ou=new zl,Gc=[],Hc=[],Vc=new Float32Array(16),Wc=new Float32Array(9),Xc=new Float32Array(4);function er(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Gc[r];if(s===void 0&&(s=new Float32Array(r),Gc[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function St(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ws(i,e){let t=Hc[e];t===void 0&&(t=new Int32Array(e),Hc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ym(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function Jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function Km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function Zm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,n))return;Xc.set(n),i.uniformMatrix2fv(this.addr,!1,Xc),Mt(t,n)}}function Qm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,n))return;Wc.set(n),i.uniformMatrix3fv(this.addr,!1,Wc),Mt(t,n)}}function e0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,n))return;Vc.set(n),i.uniformMatrix4fv(this.addr,!1,Vc),Mt(t,n)}}function t0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function n0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function i0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function r0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function s0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function o0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function a0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function c0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function l0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(kc.compareFunction=Il,s=kc):s=iu,t.setTexture2D(e||s,r)}function u0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||su,r)}function d0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ou,r)}function h0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ru,r)}function f0(i){switch(i){case 5126:return Ym;case 35664:return jm;case 35665:return Jm;case 35666:return Km;case 35674:return Zm;case 35675:return Qm;case 35676:return e0;case 5124:case 35670:return t0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return r0;case 5125:return s0;case 36294:return o0;case 36295:return a0;case 36296:return c0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return h0}}function p0(i,e){i.uniform1fv(this.addr,e)}function m0(i,e){const t=er(e,this.size,2);i.uniform2fv(this.addr,t)}function g0(i,e){const t=er(e,this.size,3);i.uniform3fv(this.addr,t)}function _0(i,e){const t=er(e,this.size,4);i.uniform4fv(this.addr,t)}function v0(i,e){const t=er(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function x0(i,e){const t=er(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function y0(i,e){const t=er(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function S0(i,e){i.uniform1iv(this.addr,e)}function M0(i,e){i.uniform2iv(this.addr,e)}function b0(i,e){i.uniform3iv(this.addr,e)}function E0(i,e){i.uniform4iv(this.addr,e)}function w0(i,e){i.uniform1uiv(this.addr,e)}function T0(i,e){i.uniform2uiv(this.addr,e)}function A0(i,e){i.uniform3uiv(this.addr,e)}function R0(i,e){i.uniform4uiv(this.addr,e)}function C0(i,e,t){const n=this.cache,r=e.length,s=ws(t,r);St(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||iu,s[o])}function P0(i,e,t){const n=this.cache,r=e.length,s=ws(t,r);St(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||su,s[o])}function I0(i,e,t){const n=this.cache,r=e.length,s=ws(t,r);St(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ou,s[o])}function D0(i,e,t){const n=this.cache,r=e.length,s=ws(t,r);St(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ru,s[o])}function L0(i){switch(i){case 5126:return p0;case 35664:return m0;case 35665:return g0;case 35666:return _0;case 35674:return v0;case 35675:return x0;case 35676:return y0;case 5124:case 35670:return S0;case 35667:case 35671:return M0;case 35668:case 35672:return b0;case 35669:case 35673:return E0;case 5125:return w0;case 36294:return T0;case 36295:return A0;case 36296:return R0;case 35678:case 36198:case 36298:case 36306:case 35682:return C0;case 35679:case 36299:case 36307:return P0;case 35680:case 36300:case 36308:case 36293:return I0;case 36289:case 36303:case 36311:case 36292:return D0}}class U0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=f0(t.type)}}class N0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=L0(t.type)}}class F0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const co=/(\w+)(\])?(\[|\.)?/g;function qc(i,e){i.seq.push(e),i.map[e.id]=e}function O0(i,e,t){const n=i.name,r=n.length;for(co.lastIndex=0;;){const s=co.exec(n),o=co.lastIndex;let a=s[1];const c=s[2]==="]",d=s[3];if(c&&(a=a|0),d===void 0||d==="["&&o+2===r){qc(t,d===void 0?new U0(a,i,e):new N0(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new F0(a),qc(t,u)),t=u}}}class us{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);O0(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function $c(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const B0=37297;let z0=0;function k0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Yc=new Ve;function G0(i){et._getMatrix(Yc,et.workingColorSpace,i);const e=`mat3( ${Yc.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case ps:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function jc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+k0(i.getShaderSource(e),a)}else return s}function H0(i,e){const t=G0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function V0(i,e){let t;switch(e){case Zu:t="Linear";break;case Qu:t="Reinhard";break;case ed:t="Cineon";break;case Sl:t="ACESFilmic";break;case nd:t="AgX";break;case id:t="Neutral";break;case td:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const is=new P;function W0(){et.getLuminanceCoefficients(is);const i=is.x.toFixed(4),e=is.y.toFixed(4),t=is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function q0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function hr(i){return i!==""}function Jc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function aa(i){return i.replace(Y0,J0)}const j0=new Map;function J0(i,e){let t=Xe[e];if(t===void 0){const n=j0.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return aa(t)}const K0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(i){return i.replace(K0,Z0)}function Z0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Q0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===xl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function eg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qi:case $i:e="ENVMAP_TYPE_CUBE";break;case Ms:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $i:e="ENVMAP_MODE_REFRACTION";break}return e}function ng(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yl:e="ENVMAP_BLENDING_MULTIPLY";break;case Ju:e="ENVMAP_BLENDING_MIX";break;case Ku:e="ENVMAP_BLENDING_ADD";break}return e}function ig(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function rg(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Q0(t),d=eg(t),l=tg(t),u=ng(t),h=ig(t),f=X0(t),g=q0(s),_=r.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hr).join(`
`),p.length>0&&(p+=`
`)):(m=[Qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),p=[Qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Xn?V0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,H0("linearToOutputTexel",t.outputColorSpace),W0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hr).join(`
`)),o=aa(o),o=Jc(o,t),o=Kc(o,t),a=aa(a),a=Jc(a,t),a=Kc(a,t),o=Zc(o),a=Zc(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+o,v=y+p+a,E=$c(r,r.VERTEX_SHADER,x),A=$c(r,r.FRAGMENT_SHADER,v);r.attachShader(_,E),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(w){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(_)||"",F=r.getShaderInfoLog(E)||"",B=r.getShaderInfoLog(A)||"",G=N.trim(),H=F.trim(),j=B.trim();let W=!0,ue=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,E,A);else{const ge=jc(r,E,"vertex"),Se=jc(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+G+`
`+ge+`
`+Se)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(H===""||j==="")&&(ue=!1);ue&&(w.diagnostics={runnable:W,programLog:G,vertexShader:{log:H,prefix:m},fragmentShader:{log:j,prefix:p}})}r.deleteShader(E),r.deleteShader(A),I=new us(r,_),M=$0(r,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,B0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=z0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}let sg=0;class og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ag(e),t.set(e,n)),n}}class ag{constructor(e){this.id=sg++,this.code=e,this.usedTimes=0}}function cg(i,e,t,n,r,s,o){const a=new Ea,c=new og,d=new Set,l=[],u=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return d.add(M),M===0?"uv":`uv${M}`}function m(M,b,w,N,F){const B=N.fog,G=F.geometry,H=M.isMeshStandardMaterial?N.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),W=j&&j.mapping===Ms?j.image.height:null,ue=g[M.type];M.precision!==null&&(f=r.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const ge=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Se=ge!==void 0?ge.length:0;let ke=0;G.morphAttributes.position!==void 0&&(ke=1),G.morphAttributes.normal!==void 0&&(ke=2),G.morphAttributes.color!==void 0&&(ke=3);let He,Ye,We,Z;if(ue){const Ze=un[ue];He=Ze.vertexShader,Ye=Ze.fragmentShader}else He=M.vertexShader,Ye=M.fragmentShader,c.update(M),We=c.getVertexShaderID(M),Z=c.getFragmentShaderID(M);const re=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),De=F.isInstancedMesh===!0,we=F.isBatchedMesh===!0,$e=!!M.map,nt=!!M.matcap,D=!!j,ne=!!M.aoMap,ee=!!M.lightMap,Q=!!M.bumpMap,J=!!M.normalMap,he=!!M.displacementMap,oe=!!M.emissiveMap,pe=!!M.metalnessMap,Ge=!!M.roughnessMap,Le=M.anisotropy>0,C=M.clearcoat>0,S=M.dispersion>0,k=M.iridescence>0,q=M.sheen>0,ie=M.transmission>0,Y=Le&&!!M.anisotropyMap,Ce=C&&!!M.clearcoatMap,fe=C&&!!M.clearcoatNormalMap,Te=C&&!!M.clearcoatRoughnessMap,Ae=k&&!!M.iridescenceMap,ce=k&&!!M.iridescenceThicknessMap,ve=q&&!!M.sheenColorMap,Ne=q&&!!M.sheenRoughnessMap,L=!!M.specularMap,V=!!M.specularColorMap,_e=!!M.specularIntensityMap,U=ie&&!!M.transmissionMap,K=ie&&!!M.thicknessMap,ae=!!M.gradientMap,me=!!M.alphaMap,se=M.alphaTest>0,te=!!M.alphaHash,Re=!!M.extensions;let Be=Xn;M.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Be=i.toneMapping);const rt={shaderID:ue,shaderType:M.type,shaderName:M.name,vertexShader:He,fragmentShader:Ye,defines:M.defines,customVertexShaderID:We,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:we,batchingColor:we&&F._colorsTexture!==null,instancing:De,instancingColor:De&&F.instanceColor!==null,instancingMorph:De&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Yi,alphaToCoverage:!!M.alphaToCoverage,map:$e,matcap:nt,envMap:D,envMapMode:D&&j.mapping,envMapCubeUVHeight:W,aoMap:ne,lightMap:ee,bumpMap:Q,normalMap:J,displacementMap:h&&he,emissiveMap:oe,normalMapObjectSpace:J&&M.normalMapType===ad,normalMapTangentSpace:J&&M.normalMapType===Pl,metalnessMap:pe,roughnessMap:Ge,anisotropy:Le,anisotropyMap:Y,clearcoat:C,clearcoatMap:Ce,clearcoatNormalMap:fe,clearcoatRoughnessMap:Te,dispersion:S,iridescence:k,iridescenceMap:Ae,iridescenceThicknessMap:ce,sheen:q,sheenColorMap:ve,sheenRoughnessMap:Ne,specularMap:L,specularColorMap:V,specularIntensityMap:_e,transmission:ie,transmissionMap:U,thicknessMap:K,gradientMap:ae,opaque:M.transparent===!1&&M.blending===Gi&&M.alphaToCoverage===!1,alphaMap:me,alphaTest:se,alphaHash:te,combine:M.combine,mapUv:$e&&_(M.map.channel),aoMapUv:ne&&_(M.aoMap.channel),lightMapUv:ee&&_(M.lightMap.channel),bumpMapUv:Q&&_(M.bumpMap.channel),normalMapUv:J&&_(M.normalMap.channel),displacementMapUv:he&&_(M.displacementMap.channel),emissiveMapUv:oe&&_(M.emissiveMap.channel),metalnessMapUv:pe&&_(M.metalnessMap.channel),roughnessMapUv:Ge&&_(M.roughnessMap.channel),anisotropyMapUv:Y&&_(M.anisotropyMap.channel),clearcoatMapUv:Ce&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&_(M.sheenRoughnessMap.channel),specularMapUv:L&&_(M.specularMap.channel),specularColorMapUv:V&&_(M.specularColorMap.channel),specularIntensityMapUv:_e&&_(M.specularIntensityMap.channel),transmissionMapUv:U&&_(M.transmissionMap.channel),thicknessMapUv:K&&_(M.thicknessMap.channel),alphaMapUv:me&&_(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(J||Le),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&($e||me),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Me,skinning:F.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:ke,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Be,decodeVideoTexture:$e&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===at,decodeVideoTextureEmissive:oe&&M.emissiveMap.isVideoTexture===!0&&et.getTransfer(M.emissiveMap.colorSpace)===at,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===hn,flipSided:M.side===Bt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Re&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&M.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return rt.vertexUv1s=d.has(1),rt.vertexUv2s=d.has(2),rt.vertexUv3s=d.has(3),d.clear(),rt}function p(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const w in M.defines)b.push(w),b.push(M.defines[w]);return M.isRawShaderMaterial===!1&&(y(b,M),x(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function y(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function x(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const b=g[M.type];let w;if(b){const N=un[b];w=Kd.clone(N.uniforms)}else w=M.uniforms;return w}function E(M,b){let w;for(let N=0,F=l.length;N<F;N++){const B=l[N];if(B.cacheKey===b){w=B,++w.usedTimes;break}}return w===void 0&&(w=new rg(i,b,M,s),l.push(w)),w}function A(M){if(--M.usedTimes===0){const b=l.indexOf(M);l[b]=l[l.length-1],l.pop(),M.destroy()}}function R(M){c.remove(M)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:A,releaseShaderCache:R,programs:l,dispose:I}}function lg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function ug(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function el(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function tl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,h,f,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:h,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,h,f,g,_,m){const p=o(u,h,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(u,h,f,g,_,m){const p=o(u,h,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function d(u,h){t.length>1&&t.sort(u||ug),n.length>1&&n.sort(h||el),r.length>1&&r.sort(h||el)}function l(){for(let u=e,h=i.length;u<h;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:l,sort:d}}function dg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new tl,i.set(n,[o])):r>=s.length?(o=new tl,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function hg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ke};break;case"SpotLight":t={position:new P,direction:new P,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function fg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let pg=0;function mg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function gg(i){const e=new hg,t=fg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new P);const r=new P,s=new tt,o=new tt;function a(d){let l=0,u=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,x=0,v=0,E=0,A=0,R=0;d.sort(mg);for(let M=0,b=d.length;M<b;M++){const w=d[M],N=w.color,F=w.intensity,B=w.distance,G=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)l+=N.r*F,u+=N.g*F,h+=N.b*F;else if(w.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(w.sh.coefficients[H],F);R++}else if(w.isDirectionalLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const j=w.shadow,W=t.get(w);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=w.shadow.matrix,y++}n.directional[f]=H,f++}else if(w.isSpotLight){const H=e.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(N).multiplyScalar(F),H.distance=B,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,n.spot[_]=H;const j=w.shadow;if(w.map&&(n.spotLightMap[E]=w.map,E++,j.updateMatrices(w),w.castShadow&&A++),n.spotLightMatrix[_]=j.matrix,w.castShadow){const W=t.get(w);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=G,v++}_++}else if(w.isRectAreaLight){const H=e.get(w);H.color.copy(N).multiplyScalar(F),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=H,m++}else if(w.isPointLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){const j=w.shadow,W=t.get(w);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=w.shadow.matrix,x++}n.point[g]=H,g++}else if(w.isHemisphereLight){const H=e.get(w);H.skyColor.copy(w.color).multiplyScalar(F),H.groundColor.copy(w.groundColor).multiplyScalar(F),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=u,n.ambient[2]=h;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==y||I.numPointShadows!==x||I.numSpotShadows!==v||I.numSpotMaps!==E||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=y,I.numPointShadows=x,I.numSpotShadows=v,I.numSpotMaps=E,I.numLightProbes=R,n.version=pg++)}function c(d,l){let u=0,h=0,f=0,g=0,_=0;const m=l.matrixWorldInverse;for(let p=0,y=d.length;p<y;p++){const x=d[p];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function nl(i){const e=new gg(i),t=[],n=[];function r(l){d.camera=l,t.length=0,n.length=0}function s(l){t.push(l)}function o(l){n.push(l)}function a(){e.setup(t)}function c(l){e.setupView(t,l)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function _g(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new nl(i),e.set(r,[a])):s>=o.length?(a=new nl(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yg(i,e,t){let n=new Ta;const r=new le,s=new le,o=new lt,a=new kh({depthPacking:od}),c=new Gh,d={},l=t.maxTextureSize,u={[jn]:Bt,[Bt]:jn,[hn]:hn},h=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:vg,fragmentShader:xg}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Pt;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ee(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vl;let p=this.type;this.render=function(A,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=i.getRenderTarget(),b=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Wn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=p!==wn&&this.type===wn,B=p===wn&&this.type!==wn;for(let G=0,H=A.length;G<H;G++){const j=A[G],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ue=W.getFrameExtents();if(r.multiply(ue),s.copy(W.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(s.x=Math.floor(l/ue.x),r.x=s.x*ue.x,W.mapSize.x=s.x),r.y>l&&(s.y=Math.floor(l/ue.y),r.y=s.y*ue.y,W.mapSize.y=s.y)),W.map===null||F===!0||B===!0){const Se=this.type!==wn?{minFilter:Wt,magFilter:Wt}:{};W.map!==null&&W.map.dispose(),W.map=new mi(r.x,r.y,Se),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ge=W.getViewportCount();for(let Se=0;Se<ge;Se++){const ke=W.getViewport(Se);o.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),N.viewport(o),W.updateMatrices(j,Se),n=W.getFrustum(),v(R,I,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===wn&&y(W,I),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,b,w)};function y(A,R){const I=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new mi(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,I,h,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,I,f,_,null)}function x(A,R,I,M){let b=null;const w=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)b=w;else if(b=I.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=b.uuid,F=R.uuid;let B=d[N];B===void 0&&(B={},d[N]=B);let G=B[F];G===void 0&&(G=b.clone(),B[F]=G,R.addEventListener("dispose",E)),b=G}if(b.visible=R.visible,b.wireframe=R.wireframe,M===wn?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=i.properties.get(b);N.light=I}return b}function v(A,R,I,M,b){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===wn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const F=e.update(A),B=A.material;if(Array.isArray(B)){const G=F.groups;for(let H=0,j=G.length;H<j;H++){const W=G[H],ue=B[W.materialIndex];if(ue&&ue.visible){const ge=x(A,ue,M,b);A.onBeforeShadow(i,A,R,I,F,ge,W),i.renderBufferDirect(I,null,F,ge,A,W),A.onAfterShadow(i,A,R,I,F,ge,W)}}}else if(B.visible){const G=x(A,B,M,b);A.onBeforeShadow(i,A,R,I,F,G,null),i.renderBufferDirect(I,null,F,G,A,null),A.onAfterShadow(i,A,R,I,F,G,null)}}const N=A.children;for(let F=0,B=N.length;F<B;F++)v(N[F],R,I,M,b)}function E(A){A.target.removeEventListener("dispose",E);for(const I in d){const M=d[I],b=A.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const Sg={[vo]:xo,[yo]:bo,[So]:Eo,[Xi]:Mo,[xo]:vo,[bo]:yo,[Eo]:So,[Mo]:Xi};function Mg(i,e){function t(){let U=!1;const K=new lt;let ae=null;const me=new lt(0,0,0,0);return{setMask:function(se){ae!==se&&!U&&(i.colorMask(se,se,se,se),ae=se)},setLocked:function(se){U=se},setClear:function(se,te,Re,Be,rt){rt===!0&&(se*=Be,te*=Be,Re*=Be),K.set(se,te,Re,Be),me.equals(K)===!1&&(i.clearColor(se,te,Re,Be),me.copy(K))},reset:function(){U=!1,ae=null,me.set(-1,0,0,0)}}}function n(){let U=!1,K=!1,ae=null,me=null,se=null;return{setReversed:function(te){if(K!==te){const Re=e.get("EXT_clip_control");te?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),K=te;const Be=se;se=null,this.setClear(Be)}},getReversed:function(){return K},setTest:function(te){te?re(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(te){ae!==te&&!U&&(i.depthMask(te),ae=te)},setFunc:function(te){if(K&&(te=Sg[te]),me!==te){switch(te){case vo:i.depthFunc(i.NEVER);break;case xo:i.depthFunc(i.ALWAYS);break;case yo:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case So:i.depthFunc(i.EQUAL);break;case Mo:i.depthFunc(i.GEQUAL);break;case bo:i.depthFunc(i.GREATER);break;case Eo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=te}},setLocked:function(te){U=te},setClear:function(te){se!==te&&(K&&(te=1-te),i.clearDepth(te),se=te)},reset:function(){U=!1,ae=null,me=null,se=null,K=!1}}}function r(){let U=!1,K=null,ae=null,me=null,se=null,te=null,Re=null,Be=null,rt=null;return{setTest:function(Ze){U||(Ze?re(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(Ze){K!==Ze&&!U&&(i.stencilMask(Ze),K=Ze)},setFunc:function(Ze,Xt,It){(ae!==Ze||me!==Xt||se!==It)&&(i.stencilFunc(Ze,Xt,It),ae=Ze,me=Xt,se=It)},setOp:function(Ze,Xt,It){(te!==Ze||Re!==Xt||Be!==It)&&(i.stencilOp(Ze,Xt,It),te=Ze,Re=Xt,Be=It)},setLocked:function(Ze){U=Ze},setClear:function(Ze){rt!==Ze&&(i.clearStencil(Ze),rt=Ze)},reset:function(){U=!1,K=null,ae=null,me=null,se=null,te=null,Re=null,Be=null,rt=null}}}const s=new t,o=new n,a=new r,c=new WeakMap,d=new WeakMap;let l={},u={},h=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,x=null,v=null,E=null,A=null,R=new Ke(0,0,0),I=0,M=!1,b=null,w=null,N=null,F=null,B=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,j=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=j>=2);let ue=null,ge={};const Se=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),He=new lt().fromArray(Se),Ye=new lt().fromArray(ke);function We(U,K,ae,me){const se=new Uint8Array(4),te=i.createTexture();i.bindTexture(U,te),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<ae;Re++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(K+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return te}const Z={};Z[i.TEXTURE_2D]=We(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=We(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=We(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=We(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(i.DEPTH_TEST),o.setFunc(Xi),Q(!1),J(Va),re(i.CULL_FACE),ne(Wn);function re(U){l[U]!==!0&&(i.enable(U),l[U]=!0)}function Me(U){l[U]!==!1&&(i.disable(U),l[U]=!1)}function De(U,K){return u[U]!==K?(i.bindFramebuffer(U,K),u[U]=K,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=K),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=K),!0):!1}function we(U,K){let ae=f,me=!1;if(U){ae=h.get(K),ae===void 0&&(ae=[],h.set(K,ae));const se=U.textures;if(ae.length!==se.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let te=0,Re=se.length;te<Re;te++)ae[te]=i.COLOR_ATTACHMENT0+te;ae.length=se.length,me=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,me=!0);me&&i.drawBuffers(ae)}function $e(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const nt={[ai]:i.FUNC_ADD,[Lu]:i.FUNC_SUBTRACT,[Uu]:i.FUNC_REVERSE_SUBTRACT};nt[Nu]=i.MIN,nt[Fu]=i.MAX;const D={[Ou]:i.ZERO,[Bu]:i.ONE,[zu]:i.SRC_COLOR,[go]:i.SRC_ALPHA,[Xu]:i.SRC_ALPHA_SATURATE,[Vu]:i.DST_COLOR,[Gu]:i.DST_ALPHA,[ku]:i.ONE_MINUS_SRC_COLOR,[_o]:i.ONE_MINUS_SRC_ALPHA,[Wu]:i.ONE_MINUS_DST_COLOR,[Hu]:i.ONE_MINUS_DST_ALPHA,[qu]:i.CONSTANT_COLOR,[$u]:i.ONE_MINUS_CONSTANT_COLOR,[Yu]:i.CONSTANT_ALPHA,[ju]:i.ONE_MINUS_CONSTANT_ALPHA};function ne(U,K,ae,me,se,te,Re,Be,rt,Ze){if(U===Wn){_===!0&&(Me(i.BLEND),_=!1);return}if(_===!1&&(re(i.BLEND),_=!0),U!==Du){if(U!==m||Ze!==M){if((p!==ai||v!==ai)&&(i.blendEquation(i.FUNC_ADD),p=ai,v=ai),Ze)switch(U){case Gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wa:i.blendFunc(i.ONE,i.ONE);break;case Xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xa:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qa:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,x=null,E=null,A=null,R.set(0,0,0),I=0,m=U,M=Ze}return}se=se||K,te=te||ae,Re=Re||me,(K!==p||se!==v)&&(i.blendEquationSeparate(nt[K],nt[se]),p=K,v=se),(ae!==y||me!==x||te!==E||Re!==A)&&(i.blendFuncSeparate(D[ae],D[me],D[te],D[Re]),y=ae,x=me,E=te,A=Re),(Be.equals(R)===!1||rt!==I)&&(i.blendColor(Be.r,Be.g,Be.b,rt),R.copy(Be),I=rt),m=U,M=!1}function ee(U,K){U.side===hn?Me(i.CULL_FACE):re(i.CULL_FACE);let ae=U.side===Bt;K&&(ae=!ae),Q(ae),U.blending===Gi&&U.transparent===!1?ne(Wn):ne(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const me=U.stencilWrite;a.setTest(me),me&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),oe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(U){b!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),b=U)}function J(U){U!==Pu?(re(i.CULL_FACE),U!==w&&(U===Va?i.cullFace(i.BACK):U===Iu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),w=U}function he(U){U!==N&&(H&&i.lineWidth(U),N=U)}function oe(U,K,ae){U?(re(i.POLYGON_OFFSET_FILL),(F!==K||B!==ae)&&(i.polygonOffset(K,ae),F=K,B=ae)):Me(i.POLYGON_OFFSET_FILL)}function pe(U){U?re(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function Ge(U){U===void 0&&(U=i.TEXTURE0+G-1),ue!==U&&(i.activeTexture(U),ue=U)}function Le(U,K,ae){ae===void 0&&(ue===null?ae=i.TEXTURE0+G-1:ae=ue);let me=ge[ae];me===void 0&&(me={type:void 0,texture:void 0},ge[ae]=me),(me.type!==U||me.texture!==K)&&(ue!==ae&&(i.activeTexture(ae),ue=ae),i.bindTexture(U,K||Z[U]),me.type=U,me.texture=K)}function C(){const U=ge[ue];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(U){He.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),He.copy(U))}function Ne(U){Ye.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ye.copy(U))}function L(U,K){let ae=d.get(K);ae===void 0&&(ae=new WeakMap,d.set(K,ae));let me=ae.get(U);me===void 0&&(me=i.getUniformBlockIndex(K,U.name),ae.set(U,me))}function V(U,K){const me=d.get(K).get(U);c.get(K)!==me&&(i.uniformBlockBinding(K,me,U.__bindingPointIndex),c.set(K,me))}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},ue=null,ge={},u={},h=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,x=null,v=null,E=null,A=null,R=new Ke(0,0,0),I=0,M=!1,b=null,w=null,N=null,F=null,B=null,He.set(0,0,i.canvas.width,i.canvas.height),Ye.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:Me,bindFramebuffer:De,drawBuffers:we,useProgram:$e,setBlending:ne,setMaterial:ee,setFlipSided:Q,setCullFace:J,setLineWidth:he,setPolygonOffset:oe,setScissorTest:pe,activeTexture:Ge,bindTexture:Le,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:k,texImage2D:Ae,texImage3D:ce,updateUBOMapping:L,uniformBlockBinding:V,texStorage2D:fe,texStorage3D:Te,texSubImage2D:q,texSubImage3D:ie,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ce,scissor:ve,viewport:Ne,reset:_e}}function bg(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new le,l=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return f?new OffscreenCanvas(C,S):gs("canvas")}function _(C,S,k){let q=1;const ie=Le(C);if((ie.width>k||ie.height>k)&&(q=k/Math.max(ie.width,ie.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(q*ie.width),Ce=Math.floor(q*ie.height);u===void 0&&(u=g(Y,Ce));const fe=S?g(Y,Ce):u;return fe.width=Y,fe.height=Ce,fe.getContext("2d").drawImage(C,0,0,Y,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Y+"x"+Ce+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(C,S,k,q,ie=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=S;if(S===i.RED&&(k===i.FLOAT&&(Y=i.R32F),k===i.HALF_FLOAT&&(Y=i.R16F),k===i.UNSIGNED_BYTE&&(Y=i.R8)),S===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.R8UI),k===i.UNSIGNED_SHORT&&(Y=i.R16UI),k===i.UNSIGNED_INT&&(Y=i.R32UI),k===i.BYTE&&(Y=i.R8I),k===i.SHORT&&(Y=i.R16I),k===i.INT&&(Y=i.R32I)),S===i.RG&&(k===i.FLOAT&&(Y=i.RG32F),k===i.HALF_FLOAT&&(Y=i.RG16F),k===i.UNSIGNED_BYTE&&(Y=i.RG8)),S===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RG8UI),k===i.UNSIGNED_SHORT&&(Y=i.RG16UI),k===i.UNSIGNED_INT&&(Y=i.RG32UI),k===i.BYTE&&(Y=i.RG8I),k===i.SHORT&&(Y=i.RG16I),k===i.INT&&(Y=i.RG32I)),S===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),k===i.UNSIGNED_INT&&(Y=i.RGB32UI),k===i.BYTE&&(Y=i.RGB8I),k===i.SHORT&&(Y=i.RGB16I),k===i.INT&&(Y=i.RGB32I)),S===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),k===i.UNSIGNED_INT&&(Y=i.RGBA32UI),k===i.BYTE&&(Y=i.RGBA8I),k===i.SHORT&&(Y=i.RGBA16I),k===i.INT&&(Y=i.RGBA32I)),S===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),S===i.RGBA){const Ce=ie?ps:et.getTransfer(q);k===i.FLOAT&&(Y=i.RGBA32F),k===i.HALF_FLOAT&&(Y=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Y=Ce===at?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(C,S){let k;return C?S===null||S===pi||S===xr?k=i.DEPTH24_STENCIL8:S===pn?k=i.DEPTH32F_STENCIL8:S===vr&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===pi||S===xr?k=i.DEPTH_COMPONENT24:S===pn?k=i.DEPTH_COMPONENT32F:S===vr&&(k=i.DEPTH_COMPONENT16),k}function E(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Wt&&C.minFilter!==fn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){const S=C.target;S.removeEventListener("dispose",A),I(S),S.isVideoTexture&&l.delete(S)}function R(C){const S=C.target;S.removeEventListener("dispose",R),b(S)}function I(C){const S=n.get(C);if(S.__webglInit===void 0)return;const k=C.source,q=h.get(k);if(q){const ie=q[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&M(C),Object.keys(q).length===0&&h.delete(k)}n.remove(C)}function M(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const k=C.source,q=h.get(k);delete q[S.__cacheKey],o.memory.textures--}function b(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let ie=0;ie<S.__webglFramebuffer[q].length;ie++)i.deleteFramebuffer(S.__webglFramebuffer[q][ie]);else i.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)i.deleteFramebuffer(S.__webglFramebuffer[q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=C.textures;for(let q=0,ie=k.length;q<ie;q++){const Y=n.get(k[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(k[q])}n.remove(C)}let w=0;function N(){w=0}function F(){const C=w;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),w+=1,C}function B(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function G(C,S){const k=n.get(C);if(C.isVideoTexture&&pe(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const q=C.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(k,C,S);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+S)}function H(C,S){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Z(k,C,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+S)}function j(C,S){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Z(k,C,S);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+S)}function W(C,S){const k=n.get(C);if(C.version>0&&k.__version!==C.version){re(k,C,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+S)}const ue={[fs]:i.REPEAT,[li]:i.CLAMP_TO_EDGE,[Ao]:i.MIRRORED_REPEAT},ge={[Wt]:i.NEAREST,[rd]:i.NEAREST_MIPMAP_NEAREST,[Ir]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[Rs]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},Se={[cd]:i.NEVER,[pd]:i.ALWAYS,[ld]:i.LESS,[Il]:i.LEQUAL,[ud]:i.EQUAL,[fd]:i.GEQUAL,[dd]:i.GREATER,[hd]:i.NOTEQUAL};function ke(C,S){if(S.type===pn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===fn||S.magFilter===Rs||S.magFilter===Ir||S.magFilter===ui||S.minFilter===fn||S.minFilter===Rs||S.minFilter===Ir||S.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ue[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ue[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ue[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ge[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ge[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Wt||S.minFilter!==Ir&&S.minFilter!==ui||S.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function He(C,S){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));const q=S.source;let ie=h.get(q);ie===void 0&&(ie={},h.set(q,ie));const Y=B(S);if(Y!==C.__cacheKey){ie[Y]===void 0&&(ie[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ie[Y].usedTimes++;const Ce=ie[C.__cacheKey];Ce!==void 0&&(ie[C.__cacheKey].usedTimes--,Ce.usedTimes===0&&M(S)),C.__cacheKey=Y,C.__webglTexture=ie[Y].texture}return k}function Ye(C,S,k){return Math.floor(Math.floor(C/k)/S)}function We(C,S,k,q){const Y=C.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,k,q,S.data);else{Y.sort((ce,ve)=>ce.start-ve.start);let Ce=0;for(let ce=1;ce<Y.length;ce++){const ve=Y[Ce],Ne=Y[ce],L=ve.start+ve.count,V=Ye(Ne.start,S.width,4),_e=Ye(ve.start,S.width,4);Ne.start<=L+1&&V===_e&&Ye(Ne.start+Ne.count-1,S.width,4)===V?ve.count=Math.max(ve.count,Ne.start+Ne.count-ve.start):(++Ce,Y[Ce]=Ne)}Y.length=Ce+1;const fe=i.getParameter(i.UNPACK_ROW_LENGTH),Te=i.getParameter(i.UNPACK_SKIP_PIXELS),Ae=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let ce=0,ve=Y.length;ce<ve;ce++){const Ne=Y[ce],L=Math.floor(Ne.start/4),V=Math.ceil(Ne.count/4),_e=L%S.width,U=Math.floor(L/S.width),K=V,ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,_e,U,K,ae,k,q,S.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,fe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ae)}}function Z(C,S,k){let q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=i.TEXTURE_3D);const ie=He(C,S),Y=S.source;t.bindTexture(q,C.__webglTexture,i.TEXTURE0+k);const Ce=n.get(Y);if(Y.version!==Ce.__version||ie===!0){t.activeTexture(i.TEXTURE0+k);const fe=et.getPrimaries(et.workingColorSpace),Te=S.colorSpace===zn?null:et.getPrimaries(S.colorSpace),Ae=S.colorSpace===zn||fe===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ce=_(S.image,!1,r.maxTextureSize);ce=Ge(S,ce);const ve=s.convert(S.format,S.colorSpace),Ne=s.convert(S.type);let L=x(S.internalFormat,ve,Ne,S.colorSpace,S.isVideoTexture);ke(q,S);let V;const _e=S.mipmaps,U=S.isVideoTexture!==!0,K=Ce.__version===void 0||ie===!0,ae=Y.dataReady,me=E(S,ce);if(S.isDepthTexture)L=v(S.format===Sr,S.type),K&&(U?t.texStorage2D(i.TEXTURE_2D,1,L,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,L,ce.width,ce.height,0,ve,Ne,null));else if(S.isDataTexture)if(_e.length>0){U&&K&&t.texStorage2D(i.TEXTURE_2D,me,L,_e[0].width,_e[0].height);for(let se=0,te=_e.length;se<te;se++)V=_e[se],U?ae&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,V.width,V.height,ve,Ne,V.data):t.texImage2D(i.TEXTURE_2D,se,L,V.width,V.height,0,ve,Ne,V.data);S.generateMipmaps=!1}else U?(K&&t.texStorage2D(i.TEXTURE_2D,me,L,ce.width,ce.height),ae&&We(S,ce,ve,Ne)):t.texImage2D(i.TEXTURE_2D,0,L,ce.width,ce.height,0,ve,Ne,ce.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){U&&K&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,L,_e[0].width,_e[0].height,ce.depth);for(let se=0,te=_e.length;se<te;se++)if(V=_e[se],S.format!==rn)if(ve!==null)if(U){if(ae)if(S.layerUpdates.size>0){const Re=Dc(V.width,V.height,S.format,S.type);for(const Be of S.layerUpdates){const rt=V.data.subarray(Be*Re/V.data.BYTES_PER_ELEMENT,(Be+1)*Re/V.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,Be,V.width,V.height,1,ve,rt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,V.width,V.height,ce.depth,ve,V.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,L,V.width,V.height,ce.depth,0,V.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,V.width,V.height,ce.depth,ve,Ne,V.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,L,V.width,V.height,ce.depth,0,ve,Ne,V.data)}else{U&&K&&t.texStorage2D(i.TEXTURE_2D,me,L,_e[0].width,_e[0].height);for(let se=0,te=_e.length;se<te;se++)V=_e[se],S.format!==rn?ve!==null?U?ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,V.width,V.height,ve,V.data):t.compressedTexImage2D(i.TEXTURE_2D,se,L,V.width,V.height,0,V.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ae&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,V.width,V.height,ve,Ne,V.data):t.texImage2D(i.TEXTURE_2D,se,L,V.width,V.height,0,ve,Ne,V.data)}else if(S.isDataArrayTexture)if(U){if(K&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,L,ce.width,ce.height,ce.depth),ae)if(S.layerUpdates.size>0){const se=Dc(ce.width,ce.height,S.format,S.type);for(const te of S.layerUpdates){const Re=ce.data.subarray(te*se/ce.data.BYTES_PER_ELEMENT,(te+1)*se/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,ce.width,ce.height,1,ve,Ne,Re)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ve,Ne,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,L,ce.width,ce.height,ce.depth,0,ve,Ne,ce.data);else if(S.isData3DTexture)U?(K&&t.texStorage3D(i.TEXTURE_3D,me,L,ce.width,ce.height,ce.depth),ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ve,Ne,ce.data)):t.texImage3D(i.TEXTURE_3D,0,L,ce.width,ce.height,ce.depth,0,ve,Ne,ce.data);else if(S.isFramebufferTexture){if(K)if(U)t.texStorage2D(i.TEXTURE_2D,me,L,ce.width,ce.height);else{let se=ce.width,te=ce.height;for(let Re=0;Re<me;Re++)t.texImage2D(i.TEXTURE_2D,Re,L,se,te,0,ve,Ne,null),se>>=1,te>>=1}}else if(_e.length>0){if(U&&K){const se=Le(_e[0]);t.texStorage2D(i.TEXTURE_2D,me,L,se.width,se.height)}for(let se=0,te=_e.length;se<te;se++)V=_e[se],U?ae&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ve,Ne,V):t.texImage2D(i.TEXTURE_2D,se,L,ve,Ne,V);S.generateMipmaps=!1}else if(U){if(K){const se=Le(ce);t.texStorage2D(i.TEXTURE_2D,me,L,se.width,se.height)}ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Ne,ce)}else t.texImage2D(i.TEXTURE_2D,0,L,ve,Ne,ce);m(S)&&p(q),Ce.__version=Y.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function re(C,S,k){if(S.image.length!==6)return;const q=He(C,S),ie=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+k);const Y=n.get(ie);if(ie.version!==Y.__version||q===!0){t.activeTexture(i.TEXTURE0+k);const Ce=et.getPrimaries(et.workingColorSpace),fe=S.colorSpace===zn?null:et.getPrimaries(S.colorSpace),Te=S.colorSpace===zn||Ce===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ae=S.isCompressedTexture||S.image[0].isCompressedTexture,ce=S.image[0]&&S.image[0].isDataTexture,ve=[];for(let te=0;te<6;te++)!Ae&&!ce?ve[te]=_(S.image[te],!0,r.maxCubemapSize):ve[te]=ce?S.image[te].image:S.image[te],ve[te]=Ge(S,ve[te]);const Ne=ve[0],L=s.convert(S.format,S.colorSpace),V=s.convert(S.type),_e=x(S.internalFormat,L,V,S.colorSpace),U=S.isVideoTexture!==!0,K=Y.__version===void 0||q===!0,ae=ie.dataReady;let me=E(S,Ne);ke(i.TEXTURE_CUBE_MAP,S);let se;if(Ae){U&&K&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,_e,Ne.width,Ne.height);for(let te=0;te<6;te++){se=ve[te].mipmaps;for(let Re=0;Re<se.length;Re++){const Be=se[Re];S.format!==rn?L!==null?U?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,0,0,Be.width,Be.height,L,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,_e,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,0,0,Be.width,Be.height,L,V,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,_e,Be.width,Be.height,0,L,V,Be.data)}}}else{if(se=S.mipmaps,U&&K){se.length>0&&me++;const te=Le(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,_e,te.width,te.height)}for(let te=0;te<6;te++)if(ce){U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ve[te].width,ve[te].height,L,V,ve[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,_e,ve[te].width,ve[te].height,0,L,V,ve[te].data);for(let Re=0;Re<se.length;Re++){const rt=se[Re].image[te].image;U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,0,0,rt.width,rt.height,L,V,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,_e,rt.width,rt.height,0,L,V,rt.data)}}else{U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,L,V,ve[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,_e,L,V,ve[te]);for(let Re=0;Re<se.length;Re++){const Be=se[Re];U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,0,0,L,V,Be.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,_e,L,V,Be.image[te])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),Y.__version=ie.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Me(C,S,k,q,ie,Y){const Ce=s.convert(k.format,k.colorSpace),fe=s.convert(k.type),Te=x(k.internalFormat,Ce,fe,k.colorSpace),Ae=n.get(S),ce=n.get(k);if(ce.__renderTarget=S,!Ae.__hasExternalTextures){const ve=Math.max(1,S.width>>Y),Ne=Math.max(1,S.height>>Y);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,Y,Te,ve,Ne,S.depth,0,Ce,fe,null):t.texImage2D(ie,Y,Te,ve,Ne,0,Ce,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),oe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,ie,ce.__webglTexture,0,he(S)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,ie,ce.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(C,S,k){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const q=S.depthTexture,ie=q&&q.isDepthTexture?q.type:null,Y=v(S.stencilBuffer,ie),Ce=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=he(S);oe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,Y,S.width,S.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,Y,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Y,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,C)}else{const q=S.textures;for(let ie=0;ie<q.length;ie++){const Y=q[ie],Ce=s.convert(Y.format,Y.colorSpace),fe=s.convert(Y.type),Te=x(Y.internalFormat,Ce,fe,Y.colorSpace),Ae=he(S);k&&oe(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,Te,S.width,S.height):oe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,Te,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Te,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(S.depthTexture);q.__renderTarget=S,(!q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);const ie=q.__webglTexture,Y=he(S);if(S.depthTexture.format===yr)oe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(S.depthTexture.format===Sr)oe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function $e(C){const S=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const q=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const ie=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",ie)};q.addEventListener("dispose",ie),S.__depthDisposeCallback=ie}S.__boundDepthTexture=q}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const q=C.texture.mipmaps;q&&q.length>0?we(S.__webglFramebuffer[0],C):we(S.__webglFramebuffer,C)}else if(k){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=i.createRenderbuffer(),De(S.__webglDepthbuffer[q],C,!1);else{const ie=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Y)}}else{const q=C.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),De(S.__webglDepthbuffer,C,!1);else{const ie=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(C,S,k){const q=n.get(C);S!==void 0&&Me(q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&$e(C)}function D(C){const S=C.texture,k=n.get(C),q=n.get(S);C.addEventListener("dispose",R);const ie=C.textures,Y=C.isWebGLCubeRenderTarget===!0,Ce=ie.length>1;if(Ce||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=S.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[fe]=[];for(let Te=0;Te<S.mipmaps.length;Te++)k.__webglFramebuffer[fe][Te]=i.createFramebuffer()}else k.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)k.__webglFramebuffer[fe]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let fe=0,Te=ie.length;fe<Te;fe++){const Ae=n.get(ie[fe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&oe(C)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const Te=ie[fe];k.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[fe]);const Ae=s.convert(Te.format,Te.colorSpace),ce=s.convert(Te.type),ve=x(Te.internalFormat,Ae,ce,Te.colorSpace,C.isXRRenderTarget===!0),Ne=he(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,ve,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,k.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),De(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),ke(i.TEXTURE_CUBE_MAP,S);for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)Me(k.__webglFramebuffer[fe][Te],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Te);else Me(k.__webglFramebuffer[fe],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let fe=0,Te=ie.length;fe<Te;fe++){const Ae=ie[fe],ce=n.get(Ae);let ve=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ve=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,ce.__webglTexture),ke(ve,Ae),Me(k.__webglFramebuffer,C,Ae,i.COLOR_ATTACHMENT0+fe,ve,0),m(Ae)&&p(ve)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,q.__webglTexture),ke(fe,S),S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)Me(k.__webglFramebuffer[Te],C,S,i.COLOR_ATTACHMENT0,fe,Te);else Me(k.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,fe,0);m(S)&&p(fe),t.unbindTexture()}C.depthBuffer&&$e(C)}function ne(C){const S=C.textures;for(let k=0,q=S.length;k<q;k++){const ie=S[k];if(m(ie)){const Y=y(C),Ce=n.get(ie).__webglTexture;t.bindTexture(Y,Ce),p(Y),t.unbindTexture()}}}const ee=[],Q=[];function J(C){if(C.samples>0){if(oe(C)===!1){const S=C.textures,k=C.width,q=C.height;let ie=i.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(C),fe=S.length>1;if(fe)for(let Ae=0;Ae<S.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Te=C.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ae]);const ce=n.get(S[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,k,q,0,0,k,q,ie,i.NEAREST),c===!0&&(ee.length=0,Q.length=0,ee.push(i.COLOR_ATTACHMENT0+Ae),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ee.push(Y),Q.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let Ae=0;Ae<S.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ae]);const ce=n.get(S[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function he(C){return Math.min(r.maxSamples,C.samples)}function oe(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pe(C){const S=o.render.frame;l.get(C)!==S&&(l.set(C,S),C.update())}function Ge(C,S){const k=C.colorSpace,q=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Yi&&k!==zn&&(et.getTransfer(k)===at?(q!==rn||ie!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Le(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(d.width=C.naturalWidth||C.width,d.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(d.width=C.displayWidth,d.height=C.displayHeight):(d.width=C.width,d.height=C.height),d}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=nt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=oe}function Eg(i,e){function t(n,r=zn){let s;const o=et.getTransfer(r);if(n===_n)return i.UNSIGNED_BYTE;if(n===ga)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bl)return i.BYTE;if(n===El)return i.SHORT;if(n===vr)return i.UNSIGNED_SHORT;if(n===ma)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===Ar)return i.HALF_FLOAT;if(n===Al)return i.ALPHA;if(n===Rl)return i.RGB;if(n===rn)return i.RGBA;if(n===yr)return i.DEPTH_COMPONENT;if(n===Sr)return i.DEPTH_STENCIL;if(n===va)return i.RED;if(n===xa)return i.RED_INTEGER;if(n===Cl)return i.RG;if(n===ya)return i.RG_INTEGER;if(n===Sa)return i.RGBA_INTEGER;if(n===ss||n===os||n===as||n===cs)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ss)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===as)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ss)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===os)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===as)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ro||n===Co||n===Po||n===Io)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ro)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Co)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Po)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Io)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Do||n===Lo||n===Uo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Do||n===Lo)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Uo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===No||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Go||n===Ho||n===Vo||n===Wo||n===Xo||n===qo||n===$o||n===Yo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===No)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ko)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Go)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ho)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$o)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jo||n===Jo||n===Ko)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===jo)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ko)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zo||n===Qo||n===ea||n===ta)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Zo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Qo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ta)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const wg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ag{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Wl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Jn({vertexShader:wg,fragmentShader:Tg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ee(new xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rg extends _i{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,d=null,l=null,u=null,h=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Ag,p={},y=t.getContextAttributes();let x=null,v=null;const E=[],A=[],R=new le;let I=null;const M=new Vt;M.viewport=new lt;const b=new Vt;b.viewport=new lt;const w=[M,b],N=new qh;let F=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=E[Z];return re===void 0&&(re=new js,E[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=E[Z];return re===void 0&&(re=new js,E[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=E[Z];return re===void 0&&(re=new js,E[Z]=re),re.getHandSpace()};function G(Z){const re=A.indexOf(Z.inputSource);if(re===-1)return;const Me=E[re];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,d||o),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",j);for(let Z=0;Z<E.length;Z++){const re=A[Z];re!==null&&(A[Z]=null,E[Z].disconnect(re))}F=null,B=null,m.reset();for(const Z in p)delete p[Z];e.setRenderTarget(x),f=null,h=null,u=null,r=null,v=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||o},this.setReferenceSpace=function(Z){d=Z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",H),r.addEventListener("inputsourceschange",j),y.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,De=null,we=null;y.depth&&(we=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=y.stencil?Sr:yr,De=y.stencil?xr:pi);const $e={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer($e),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new mi(h.textureWidth,h.textureHeight,{format:rn,type:_n,depthTexture:new Vl(h.textureWidth,h.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,Me),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new mi(f.framebufferWidth,f.framebufferHeight,{format:rn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),d=null,o=await r.requestReferenceSpace(a),We.setContext(r),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(Z){for(let re=0;re<Z.removed.length;re++){const Me=Z.removed[re],De=A.indexOf(Me);De>=0&&(A[De]=null,E[De].disconnect(Me))}for(let re=0;re<Z.added.length;re++){const Me=Z.added[re];let De=A.indexOf(Me);if(De===-1){for(let $e=0;$e<E.length;$e++)if($e>=A.length){A.push(Me),De=$e;break}else if(A[$e]===null){A[$e]=Me,De=$e;break}if(De===-1)break}const we=E[De];we&&we.connect(Me)}}const W=new P,ue=new P;function ge(Z,re,Me){W.setFromMatrixPosition(re.matrixWorld),ue.setFromMatrixPosition(Me.matrixWorld);const De=W.distanceTo(ue),we=re.projectionMatrix.elements,$e=Me.projectionMatrix.elements,nt=we[14]/(we[10]-1),D=we[14]/(we[10]+1),ne=(we[9]+1)/we[5],ee=(we[9]-1)/we[5],Q=(we[8]-1)/we[0],J=($e[8]+1)/$e[0],he=nt*Q,oe=nt*J,pe=De/(-Q+J),Ge=pe*-Q;if(re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ge),Z.translateZ(pe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),we[10]===-1)Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Le=nt+pe,C=D+pe,S=he-Ge,k=oe+(De-Ge),q=ne*D/C*Le,ie=ee*D/C*Le;Z.projectionMatrix.makePerspective(S,k,q,ie,Le,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Se(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let re=Z.near,Me=Z.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),N.near=b.near=M.near=re,N.far=b.far=M.far=Me,(F!==N.near||B!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),F=N.near,B=N.far),N.layers.mask=Z.layers.mask|6,M.layers.mask=N.layers.mask&3,b.layers.mask=N.layers.mask&5;const De=Z.parent,we=N.cameras;Se(N,De);for(let $e=0;$e<we.length;$e++)Se(we[$e],De);we.length===2?ge(N,M,b):N.projectionMatrix.copy(M.projectionMatrix),ke(Z,N,De)};function ke(Z,re,Me){Me===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Mr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Z){return p[Z]};let He=null;function Ye(Z,re){if(l=re.getViewerPose(d||o),g=re,l!==null){const Me=l.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let De=!1;Me.length!==N.cameras.length&&(N.cameras.length=0,De=!0);for(let D=0;D<Me.length;D++){const ne=Me[D];let ee=null;if(f!==null)ee=f.getViewport(ne);else{const J=u.getViewSubImage(h,ne);ee=J.viewport,D===0&&(e.setRenderTargetTextures(v,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(v))}let Q=w[D];Q===void 0&&(Q=new Vt,Q.layers.enable(D),Q.viewport=new lt,w[D]=Q),Q.matrix.fromArray(ne.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(ne.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ee.x,ee.y,ee.width,ee.height),D===0&&(N.matrix.copy(Q.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),De===!0&&N.cameras.push(Q)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const D=u.getDepthInformation(Me[0]);D&&D.isValid&&D.texture&&m.init(D,r.renderState)}if(we&&we.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let D=0;D<Me.length;D++){const ne=Me[D].camera;if(ne){let ee=p[ne];ee||(ee=new Wl,p[ne]=ee);const Q=u.getCameraImage(ne);ee.sourceTexture=Q}}}}for(let Me=0;Me<E.length;Me++){const De=A[Me],we=E[Me];De!==null&&we!==void 0&&we.update(De,re,d||o)}He&&He(Z,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}const We=new nu;We.setAnimationLoop(Ye),this.setAnimationLoop=function(Z){He=Z},this.dispose=function(){}}}const ri=new Jt,Cg=new tt;function Pg(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ol(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),l(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,x):p.isSpriteMaterial?d(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Bt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Bt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),x=y.envMap,v=y.envMapRotation;x&&(m.envMap.value=x,ri.copy(v),ri.x*=-1,ri.y*=-1,ri.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),m.envMapRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(ri)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ig(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function d(y,x){let v=r[y.id];v===void 0&&(g(y),v=l(y),r[y.id]=v,y.addEventListener("dispose",m));const E=x.program;n.updateUBOMapping(y,E);const A=e.render.frame;s[y.id]!==A&&(h(y),s[y.id]=A)}function l(y){const x=u();y.__bindingPointIndex=x;const v=i.createBuffer(),E=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const x=r[y.id],v=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,R=v.length;A<R;A++){const I=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,b=I.length;M<b;M++){const w=I[M];if(f(w,A,M,E)===!0){const N=w.__offset,F=Array.isArray(w.value)?w.value:[w.value];let B=0;for(let G=0;G<F.length;G++){const H=F[G],j=_(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,N+B,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,B),B+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,x,v,E){const A=y.value,R=x+"_"+v;if(E[R]===void 0)return typeof A=="number"||typeof A=="boolean"?E[R]=A:E[R]=A.clone(),!0;{const I=E[R];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return E[R]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(y){const x=y.uniforms;let v=0;const E=16;for(let R=0,I=x.length;R<I;R++){const M=Array.isArray(x[R])?x[R]:[x[R]];for(let b=0,w=M.length;b<w;b++){const N=M[b],F=Array.isArray(N.value)?N.value:[N.value];for(let B=0,G=F.length;B<G;B++){const H=F[B],j=_(H),W=v%E,ue=W%j.boundary,ge=W+ue;v+=ue,ge!==0&&E-ge<j.storage&&(v+=E-ge),N.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=j.storage}}}const A=v%E;return A>0&&(v+=E-A),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:d,dispose:p}}class Dg{constructor(e={}){const{canvas:t=Id(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=Ot;let A=0,R=0,I=null,M=-1,b=null;const w=new lt,N=new lt;let F=null;const B=new Ke(0);let G=0,H=t.width,j=t.height,W=1,ue=null,ge=null;const Se=new lt(0,0,H,j),ke=new lt(0,0,H,j);let He=!1;const Ye=new Ta;let We=!1,Z=!1;const re=new tt,Me=new P,De=new lt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function nt(){return I===null?W:1}let D=n;function ne(T,O){return t.getContext(T,O)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pa}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",se,!1),D===null){const O="webgl2";if(D=ne(O,T),D===null)throw ne(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ee,Q,J,he,oe,pe,Ge,Le,C,S,k,q,ie,Y,Ce,fe,Te,Ae,ce,ve,Ne,L,V,_e;function U(){ee=new Hm(D),ee.init(),L=new Eg(D,ee),Q=new Nm(D,ee,e,L),J=new Mg(D,ee),Q.reversedDepthBuffer&&h&&J.buffers.depth.setReversed(!0),he=new Xm(D),oe=new lg,pe=new bg(D,ee,J,oe,Q,L,he),Ge=new Om(v),Le=new Gm(v),C=new Jh(D),V=new Lm(D,C),S=new Vm(D,C,he,V),k=new $m(D,S,C,he),ce=new qm(D,Q,pe),fe=new Fm(oe),q=new cg(v,Ge,Le,ee,Q,V,fe),ie=new Pg(v,oe),Y=new dg,Ce=new _g(ee),Ae=new Dm(v,Ge,Le,J,k,f,c),Te=new yg(v,k,Q),_e=new Ig(D,he,Q,J),ve=new Um(D,ee,he),Ne=new Wm(D,ee,he),he.programs=q.programs,v.capabilities=Q,v.extensions=ee,v.properties=oe,v.renderLists=Y,v.shadowMap=Te,v.state=J,v.info=he}U();const K=new Rg(v,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(H,j,!1))},this.getSize=function(T){return T.set(H,j)},this.setSize=function(T,O,X=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,j=O,t.width=Math.floor(T*W),t.height=Math.floor(O*W),X===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(H*W,j*W).floor()},this.setDrawingBufferSize=function(T,O,X){H=T,j=O,W=X,t.width=Math.floor(T*X),t.height=Math.floor(O*X),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(Se)},this.setViewport=function(T,O,X,$){T.isVector4?Se.set(T.x,T.y,T.z,T.w):Se.set(T,O,X,$),J.viewport(w.copy(Se).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(ke)},this.setScissor=function(T,O,X,$){T.isVector4?ke.set(T.x,T.y,T.z,T.w):ke.set(T,O,X,$),J.scissor(N.copy(ke).multiplyScalar(W).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(T){J.setScissorTest(He=T)},this.setOpaqueSort=function(T){ue=T},this.setTransparentSort=function(T){ge=T},this.getClearColor=function(T){return T.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,X=!0){let $=0;if(T){let z=!1;if(I!==null){const de=I.texture.format;z=de===Sa||de===ya||de===xa}if(z){const de=I.texture.type,ye=de===_n||de===pi||de===vr||de===xr||de===ga||de===_a,Pe=Ae.getClearColor(),be=Ae.getClearAlpha(),Oe=Pe.r,ze=Pe.g,Ue=Pe.b;ye?(g[0]=Oe,g[1]=ze,g[2]=Ue,g[3]=be,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Oe,_[1]=ze,_[2]=Ue,_[3]=be,D.clearBufferiv(D.COLOR,0,_))}else $|=D.COLOR_BUFFER_BIT}O&&($|=D.DEPTH_BUFFER_BIT),X&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",se,!1),Ae.dispose(),Y.dispose(),Ce.dispose(),oe.dispose(),Ge.dispose(),Le.dispose(),k.dispose(),V.dispose(),_e.dispose(),q.dispose(),K.dispose(),K.removeEventListener("sessionstart",It),K.removeEventListener("sessionend",Kn),an.stop()};function ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=he.autoReset,O=Te.enabled,X=Te.autoUpdate,$=Te.needsUpdate,z=Te.type;U(),he.autoReset=T,Te.enabled=O,Te.autoUpdate=X,Te.needsUpdate=$,Te.type=z}function se(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function te(T){const O=T.target;O.removeEventListener("dispose",te),Re(O)}function Re(T){Be(T),oe.remove(T)}function Be(T){const O=oe.get(T).programs;O!==void 0&&(O.forEach(function(X){q.releaseProgram(X)}),T.isShaderMaterial&&q.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,X,$,z,de){O===null&&(O=we);const ye=z.isMesh&&z.matrixWorld.determinant()<0,Pe=du(T,O,X,$,z);J.setMaterial($,ye);let be=X.index,Oe=1;if($.wireframe===!0){if(be=S.getWireframeAttribute(X),be===void 0)return;Oe=2}const ze=X.drawRange,Ue=X.attributes.position;let je=ze.start*Oe,ot=(ze.start+ze.count)*Oe;de!==null&&(je=Math.max(je,de.start*Oe),ot=Math.min(ot,(de.start+de.count)*Oe)),be!==null?(je=Math.max(je,0),ot=Math.min(ot,be.count)):Ue!=null&&(je=Math.max(je,0),ot=Math.min(ot,Ue.count));const gt=ot-je;if(gt<0||gt===1/0)return;V.setup(z,$,Pe,X,be);let dt,ut=ve;if(be!==null&&(dt=C.get(be),ut=Ne,ut.setIndex(dt)),z.isMesh)$.wireframe===!0?(J.setLineWidth($.wireframeLinewidth*nt()),ut.setMode(D.LINES)):ut.setMode(D.TRIANGLES);else if(z.isLine){let Fe=$.linewidth;Fe===void 0&&(Fe=1),J.setLineWidth(Fe*nt()),z.isLineSegments?ut.setMode(D.LINES):z.isLineLoop?ut.setMode(D.LINE_LOOP):ut.setMode(D.LINE_STRIP)}else z.isPoints?ut.setMode(D.POINTS):z.isSprite&&ut.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)br("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))ut.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Fe=z._multiDrawStarts,ht=z._multiDrawCounts,Qe=z._multiDrawCount,zt=be?C.get(be).bytesPerElement:1,yi=oe.get($).currentProgram.getUniforms();for(let kt=0;kt<Qe;kt++)yi.setValue(D,"_gl_DrawID",kt),ut.render(Fe[kt]/zt,ht[kt])}else if(z.isInstancedMesh)ut.renderInstances(je,gt,z.count);else if(X.isInstancedBufferGeometry){const Fe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ht=Math.min(X.instanceCount,Fe);ut.renderInstances(je,gt,ht)}else ut.render(je,gt)};function rt(T,O,X){T.transparent===!0&&T.side===hn&&T.forceSinglePass===!1?(T.side=Bt,T.needsUpdate=!0,Cr(T,O,X),T.side=jn,T.needsUpdate=!0,Cr(T,O,X),T.side=hn):Cr(T,O,X)}this.compile=function(T,O,X=null){X===null&&(X=T),p=Ce.get(X),p.init(O),x.push(p),X.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==X&&T.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const $=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const de=z.material;if(de)if(Array.isArray(de))for(let ye=0;ye<de.length;ye++){const Pe=de[ye];rt(Pe,X,z),$.add(Pe)}else rt(de,X,z),$.add(de)}),p=x.pop(),$},this.compileAsync=function(T,O,X=null){const $=this.compile(T,O,X);return new Promise(z=>{function de(){if($.forEach(function(ye){oe.get(ye).currentProgram.isReady()&&$.delete(ye)}),$.size===0){z(T);return}setTimeout(de,10)}ee.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Ze=null;function Xt(T){Ze&&Ze(T)}function It(){an.stop()}function Kn(){an.start()}const an=new nu;an.setAnimationLoop(Xt),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(T){Ze=T,K.setAnimationLoop(T),T===null?an.stop():an.start()},K.addEventListener("sessionstart",It),K.addEventListener("sessionend",Kn),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(O),O=K.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,O,I),p=Ce.get(T,x.length),p.init(O),x.push(p),re.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ye.setFromProjectionMatrix(re,mn,O.reversedDepth),Z=this.localClippingEnabled,We=fe.init(this.clippingPlanes,Z),m=Y.get(T,y.length),m.init(),y.push(m),K.enabled===!0&&K.isPresenting===!0){const de=v.xr.getDepthSensingMesh();de!==null&&wt(de,O,-1/0,v.sortObjects)}wt(T,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ue,ge),$e=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,$e&&Ae.addToRenderList(m,T),this.info.render.frame++,We===!0&&fe.beginShadows();const X=p.state.shadowsArray;Te.render(X,T,O),We===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,z=m.transmissive;if(p.setupLights(),O.isArrayCamera){const de=O.cameras;if(z.length>0)for(let ye=0,Pe=de.length;ye<Pe;ye++){const be=de[ye];Ba($,z,T,be)}$e&&Ae.render(T);for(let ye=0,Pe=de.length;ye<Pe;ye++){const be=de[ye];Oa(m,T,be,be.viewport)}}else z.length>0&&Ba($,z,T,O),$e&&Ae.render(T),Oa(m,T,O);I!==null&&R===0&&(pe.updateMultisampleRenderTarget(I),pe.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(v,T,O),V.resetDefaultState(),M=-1,b=null,x.pop(),x.length>0?(p=x[x.length-1],We===!0&&fe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function wt(T,O,X,$){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ye.intersectsSprite(T)){$&&De.setFromMatrixPosition(T.matrixWorld).applyMatrix4(re);const ye=k.update(T),Pe=T.material;Pe.visible&&m.push(T,ye,Pe,X,De.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ye.intersectsObject(T))){const ye=k.update(T),Pe=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),De.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),De.copy(ye.boundingSphere.center)),De.applyMatrix4(T.matrixWorld).applyMatrix4(re)),Array.isArray(Pe)){const be=ye.groups;for(let Oe=0,ze=be.length;Oe<ze;Oe++){const Ue=be[Oe],je=Pe[Ue.materialIndex];je&&je.visible&&m.push(T,ye,je,X,De.z,Ue)}}else Pe.visible&&m.push(T,ye,Pe,X,De.z,null)}}const de=T.children;for(let ye=0,Pe=de.length;ye<Pe;ye++)wt(de[ye],O,X,$)}function Oa(T,O,X,$){const z=T.opaque,de=T.transmissive,ye=T.transparent;p.setupLightsView(X),We===!0&&fe.setGlobalState(v.clippingPlanes,X),$&&J.viewport(w.copy($)),z.length>0&&Rr(z,O,X),de.length>0&&Rr(de,O,X),ye.length>0&&Rr(ye,O,X),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Ba(T,O,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new mi(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Ar:_n,minFilter:ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const de=p.state.transmissionRenderTarget[$.id],ye=$.viewport||w;de.setSize(ye.z*v.transmissionResolutionScale,ye.w*v.transmissionResolutionScale);const Pe=v.getRenderTarget(),be=v.getActiveCubeFace(),Oe=v.getActiveMipmapLevel();v.setRenderTarget(de),v.getClearColor(B),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),$e&&Ae.render(X);const ze=v.toneMapping;v.toneMapping=Xn;const Ue=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),We===!0&&fe.setGlobalState(v.clippingPlanes,$),Rr(T,X,$),pe.updateMultisampleRenderTarget(de),pe.updateRenderTargetMipmap(de),ee.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let ot=0,gt=O.length;ot<gt;ot++){const dt=O[ot],ut=dt.object,Fe=dt.geometry,ht=dt.material,Qe=dt.group;if(ht.side===hn&&ut.layers.test($.layers)){const zt=ht.side;ht.side=Bt,ht.needsUpdate=!0,za(ut,X,$,Fe,ht,Qe),ht.side=zt,ht.needsUpdate=!0,je=!0}}je===!0&&(pe.updateMultisampleRenderTarget(de),pe.updateRenderTargetMipmap(de))}v.setRenderTarget(Pe,be,Oe),v.setClearColor(B,G),Ue!==void 0&&($.viewport=Ue),v.toneMapping=ze}function Rr(T,O,X){const $=O.isScene===!0?O.overrideMaterial:null;for(let z=0,de=T.length;z<de;z++){const ye=T[z],Pe=ye.object,be=ye.geometry,Oe=ye.group;let ze=ye.material;ze.allowOverride===!0&&$!==null&&(ze=$),Pe.layers.test(X.layers)&&za(Pe,O,X,be,ze,Oe)}}function za(T,O,X,$,z,de){T.onBeforeRender(v,O,X,$,z,de),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(v,O,X,$,T,de),z.transparent===!0&&z.side===hn&&z.forceSinglePass===!1?(z.side=Bt,z.needsUpdate=!0,v.renderBufferDirect(X,O,$,z,T,de),z.side=jn,z.needsUpdate=!0,v.renderBufferDirect(X,O,$,z,T,de),z.side=hn):v.renderBufferDirect(X,O,$,z,T,de),T.onAfterRender(v,O,X,$,z,de)}function Cr(T,O,X){O.isScene!==!0&&(O=we);const $=oe.get(T),z=p.state.lights,de=p.state.shadowsArray,ye=z.state.version,Pe=q.getParameters(T,z.state,de,O,X),be=q.getProgramCacheKey(Pe);let Oe=$.programs;$.environment=T.isMeshStandardMaterial?O.environment:null,$.fog=O.fog,$.envMap=(T.isMeshStandardMaterial?Le:Ge).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",te),Oe=new Map,$.programs=Oe);let ze=Oe.get(be);if(ze!==void 0){if($.currentProgram===ze&&$.lightsStateVersion===ye)return Ga(T,Pe),ze}else Pe.uniforms=q.getUniforms(T),T.onBeforeCompile(Pe,v),ze=q.acquireProgram(Pe,be),Oe.set(be,ze),$.uniforms=Pe.uniforms;const Ue=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=fe.uniform),Ga(T,Pe),$.needsLights=fu(T),$.lightsStateVersion=ye,$.needsLights&&(Ue.ambientLightColor.value=z.state.ambient,Ue.lightProbe.value=z.state.probe,Ue.directionalLights.value=z.state.directional,Ue.directionalLightShadows.value=z.state.directionalShadow,Ue.spotLights.value=z.state.spot,Ue.spotLightShadows.value=z.state.spotShadow,Ue.rectAreaLights.value=z.state.rectArea,Ue.ltc_1.value=z.state.rectAreaLTC1,Ue.ltc_2.value=z.state.rectAreaLTC2,Ue.pointLights.value=z.state.point,Ue.pointLightShadows.value=z.state.pointShadow,Ue.hemisphereLights.value=z.state.hemi,Ue.directionalShadowMap.value=z.state.directionalShadowMap,Ue.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ue.spotShadowMap.value=z.state.spotShadowMap,Ue.spotLightMatrix.value=z.state.spotLightMatrix,Ue.spotLightMap.value=z.state.spotLightMap,Ue.pointShadowMap.value=z.state.pointShadowMap,Ue.pointShadowMatrix.value=z.state.pointShadowMatrix),$.currentProgram=ze,$.uniformsList=null,ze}function ka(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=us.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Ga(T,O){const X=oe.get(T);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function du(T,O,X,$,z){O.isScene!==!0&&(O=we),pe.resetTextureUnits();const de=O.fog,ye=$.isMeshStandardMaterial?O.environment:null,Pe=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Yi,be=($.isMeshStandardMaterial?Le:Ge).get($.envMap||ye),Oe=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ze=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ue=!!X.morphAttributes.position,je=!!X.morphAttributes.normal,ot=!!X.morphAttributes.color;let gt=Xn;$.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(gt=v.toneMapping);const dt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ut=dt!==void 0?dt.length:0,Fe=oe.get($),ht=p.state.lights;if(We===!0&&(Z===!0||T!==b)){const Dt=T===b&&$.id===M;fe.setState($,T,Dt)}let Qe=!1;$.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==ht.state.version||Fe.outputColorSpace!==Pe||z.isBatchedMesh&&Fe.batching===!1||!z.isBatchedMesh&&Fe.batching===!0||z.isBatchedMesh&&Fe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Fe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Fe.instancing===!1||!z.isInstancedMesh&&Fe.instancing===!0||z.isSkinnedMesh&&Fe.skinning===!1||!z.isSkinnedMesh&&Fe.skinning===!0||z.isInstancedMesh&&Fe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Fe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Fe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Fe.instancingMorph===!1&&z.morphTexture!==null||Fe.envMap!==be||$.fog===!0&&Fe.fog!==de||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==fe.numPlanes||Fe.numIntersection!==fe.numIntersection)||Fe.vertexAlphas!==Oe||Fe.vertexTangents!==ze||Fe.morphTargets!==Ue||Fe.morphNormals!==je||Fe.morphColors!==ot||Fe.toneMapping!==gt||Fe.morphTargetsCount!==ut)&&(Qe=!0):(Qe=!0,Fe.__version=$.version);let zt=Fe.currentProgram;Qe===!0&&(zt=Cr($,O,z));let yi=!1,kt=!1,tr=!1;const ft=zt.getUniforms(),qt=Fe.uniforms;if(J.useProgram(zt.program)&&(yi=!0,kt=!0,tr=!0),$.id!==M&&(M=$.id,kt=!0),yi||b!==T){J.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ft.setValue(D,"projectionMatrix",T.projectionMatrix),ft.setValue(D,"viewMatrix",T.matrixWorldInverse);const Nt=ft.map.cameraPosition;Nt!==void 0&&Nt.setValue(D,Me.setFromMatrixPosition(T.matrixWorld)),Q.logarithmicDepthBuffer&&ft.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ft.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,kt=!0,tr=!0)}if(z.isSkinnedMesh){ft.setOptional(D,z,"bindMatrix"),ft.setOptional(D,z,"bindMatrixInverse");const Dt=z.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),ft.setValue(D,"boneTexture",Dt.boneTexture,pe))}z.isBatchedMesh&&(ft.setOptional(D,z,"batchingTexture"),ft.setValue(D,"batchingTexture",z._matricesTexture,pe),ft.setOptional(D,z,"batchingIdTexture"),ft.setValue(D,"batchingIdTexture",z._indirectTexture,pe),ft.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&ft.setValue(D,"batchingColorTexture",z._colorsTexture,pe));const $t=X.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&ce.update(z,X,zt),(kt||Fe.receiveShadow!==z.receiveShadow)&&(Fe.receiveShadow=z.receiveShadow,ft.setValue(D,"receiveShadow",z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(qt.envMap.value=be,qt.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&O.environment!==null&&(qt.envMapIntensity.value=O.environmentIntensity),kt&&(ft.setValue(D,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&hu(qt,tr),de&&$.fog===!0&&ie.refreshFogUniforms(qt,de),ie.refreshMaterialUniforms(qt,$,W,j,p.state.transmissionRenderTarget[T.id]),us.upload(D,ka(Fe),qt,pe)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(us.upload(D,ka(Fe),qt,pe),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ft.setValue(D,"center",z.center),ft.setValue(D,"modelViewMatrix",z.modelViewMatrix),ft.setValue(D,"normalMatrix",z.normalMatrix),ft.setValue(D,"modelMatrix",z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Dt=$.uniformsGroups;for(let Nt=0,Ts=Dt.length;Nt<Ts;Nt++){const Zn=Dt[Nt];_e.update(Zn,zt),_e.bind(Zn,zt)}}return zt}function hu(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function fu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,O,X){const $=oe.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),oe.get(T.texture).__webglTexture=O,oe.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:X,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){const X=oe.get(T);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};const pu=D.createFramebuffer();this.setRenderTarget=function(T,O=0,X=0){I=T,A=O,R=X;let $=!0,z=null,de=!1,ye=!1;if(T){const be=oe.get(T);if(be.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(D.FRAMEBUFFER,null),$=!1;else if(be.__webglFramebuffer===void 0)pe.setupRenderTarget(T);else if(be.__hasExternalTextures)pe.rebindTextures(T,oe.get(T.texture).__webglTexture,oe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ue=T.depthTexture;if(be.__boundDepthTexture!==Ue){if(Ue!==null&&oe.has(Ue)&&(T.width!==Ue.image.width||T.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(T)}}const Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ye=!0);const ze=oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[O])?z=ze[O][X]:z=ze[O],de=!0):T.samples>0&&pe.useMultisampledRTT(T)===!1?z=oe.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?z=ze[X]:z=ze,w.copy(T.viewport),N.copy(T.scissor),F=T.scissorTest}else w.copy(Se).multiplyScalar(W).floor(),N.copy(ke).multiplyScalar(W).floor(),F=He;if(X!==0&&(z=pu),J.bindFramebuffer(D.FRAMEBUFFER,z)&&$&&J.drawBuffers(T,z),J.viewport(w),J.scissor(N),J.setScissorTest(F),de){const be=oe.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,be.__webglTexture,X)}else if(ye){const be=O;for(let Oe=0;Oe<T.textures.length;Oe++){const ze=oe.get(T.textures[Oe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Oe,ze.__webglTexture,X,be)}}else if(T!==null&&X!==0){const be=oe.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,be.__webglTexture,X)}M=-1},this.readRenderTargetPixels=function(T,O,X,$,z,de,ye,Pe=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be){J.bindFramebuffer(D.FRAMEBUFFER,be);try{const Oe=T.textures[Pe],ze=Oe.format,Ue=Oe.type;if(!Q.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-$&&X>=0&&X<=T.height-z&&(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Pe),D.readPixels(O,X,$,z,L.convert(ze),L.convert(Ue),de))}finally{const Oe=I!==null?oe.get(I).__webglFramebuffer:null;J.bindFramebuffer(D.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(T,O,X,$,z,de,ye,Pe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be)if(O>=0&&O<=T.width-$&&X>=0&&X<=T.height-z){J.bindFramebuffer(D.FRAMEBUFFER,be);const Oe=T.textures[Pe],ze=Oe.format,Ue=Oe.type;if(!Q.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Pe),D.readPixels(O,X,$,z,L.convert(ze),L.convert(Ue),0);const ot=I!==null?oe.get(I).__webglFramebuffer:null;J.bindFramebuffer(D.FRAMEBUFFER,ot);const gt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Dd(D,gt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de),D.deleteBuffer(je),D.deleteSync(gt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,X=0){const $=Math.pow(2,-X),z=Math.floor(T.image.width*$),de=Math.floor(T.image.height*$),ye=O!==null?O.x:0,Pe=O!==null?O.y:0;pe.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,ye,Pe,z,de),J.unbindTexture()};const mu=D.createFramebuffer(),gu=D.createFramebuffer();this.copyTextureToTexture=function(T,O,X=null,$=null,z=0,de=null){de===null&&(z!==0?(br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=z,z=0):de=0);let ye,Pe,be,Oe,ze,Ue,je,ot,gt;const dt=T.isCompressedTexture?T.mipmaps[de]:T.image;if(X!==null)ye=X.max.x-X.min.x,Pe=X.max.y-X.min.y,be=X.isBox3?X.max.z-X.min.z:1,Oe=X.min.x,ze=X.min.y,Ue=X.isBox3?X.min.z:0;else{const $t=Math.pow(2,-z);ye=Math.floor(dt.width*$t),Pe=Math.floor(dt.height*$t),T.isDataArrayTexture?be=dt.depth:T.isData3DTexture?be=Math.floor(dt.depth*$t):be=1,Oe=0,ze=0,Ue=0}$!==null?(je=$.x,ot=$.y,gt=$.z):(je=0,ot=0,gt=0);const ut=L.convert(O.format),Fe=L.convert(O.type);let ht;O.isData3DTexture?(pe.setTexture3D(O,0),ht=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(pe.setTexture2DArray(O,0),ht=D.TEXTURE_2D_ARRAY):(pe.setTexture2D(O,0),ht=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const Qe=D.getParameter(D.UNPACK_ROW_LENGTH),zt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),yi=D.getParameter(D.UNPACK_SKIP_PIXELS),kt=D.getParameter(D.UNPACK_SKIP_ROWS),tr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,dt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,dt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Oe),D.pixelStorei(D.UNPACK_SKIP_ROWS,ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ue);const ft=T.isDataArrayTexture||T.isData3DTexture,qt=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){const $t=oe.get(T),Dt=oe.get(O),Nt=oe.get($t.__renderTarget),Ts=oe.get(Dt.__renderTarget);J.bindFramebuffer(D.READ_FRAMEBUFFER,Nt.__webglFramebuffer),J.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ts.__webglFramebuffer);for(let Zn=0;Zn<be;Zn++)ft&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,oe.get(T).__webglTexture,z,Ue+Zn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,oe.get(O).__webglTexture,de,gt+Zn)),D.blitFramebuffer(Oe,ze,ye,Pe,je,ot,ye,Pe,D.DEPTH_BUFFER_BIT,D.NEAREST);J.bindFramebuffer(D.READ_FRAMEBUFFER,null),J.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||T.isRenderTargetTexture||oe.has(T)){const $t=oe.get(T),Dt=oe.get(O);J.bindFramebuffer(D.READ_FRAMEBUFFER,mu),J.bindFramebuffer(D.DRAW_FRAMEBUFFER,gu);for(let Nt=0;Nt<be;Nt++)ft?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$t.__webglTexture,z,Ue+Nt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,$t.__webglTexture,z),qt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Dt.__webglTexture,de,gt+Nt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Dt.__webglTexture,de),z!==0?D.blitFramebuffer(Oe,ze,ye,Pe,je,ot,ye,Pe,D.COLOR_BUFFER_BIT,D.NEAREST):qt?D.copyTexSubImage3D(ht,de,je,ot,gt+Nt,Oe,ze,ye,Pe):D.copyTexSubImage2D(ht,de,je,ot,Oe,ze,ye,Pe);J.bindFramebuffer(D.READ_FRAMEBUFFER,null),J.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else qt?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(ht,de,je,ot,gt,ye,Pe,be,ut,Fe,dt.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(ht,de,je,ot,gt,ye,Pe,be,ut,dt.data):D.texSubImage3D(ht,de,je,ot,gt,ye,Pe,be,ut,Fe,dt):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,de,je,ot,ye,Pe,ut,Fe,dt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,de,je,ot,dt.width,dt.height,ut,dt.data):D.texSubImage2D(D.TEXTURE_2D,de,je,ot,ye,Pe,ut,Fe,dt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Qe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,zt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,yi),D.pixelStorei(D.UNPACK_SKIP_ROWS,kt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,tr),de===0&&O.generateMipmaps&&D.generateMipmap(ht),J.unbindTexture()},this.initRenderTarget=function(T){oe.get(T).__webglFramebuffer===void 0&&pe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?pe.setTextureCube(T,0):T.isData3DTexture?pe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?pe.setTexture2DArray(T,0):pe.setTexture2D(T,0),J.unbindTexture()},this.resetState=function(){A=0,R=0,I=null,J.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}function il(i){const t=new Uint8Array(16384);for(let r=0;r<64;r++)for(let s=0;s<64;s++){const o=(r*64+s)*4,a=(s*73+r*151+s*r*13)%19,c=i==="pcb"&&(s%16===3&&r%32<25||r%16===6&&s%32<24),d=i==="metal"?220+a+(r%3===0?8:0):c?245:184+a;t[o]=t[o+1]=t[o+2]=d,t[o+3]=255}const n=new kl(t,64,64);return n.needsUpdate=!0,n.wrapS=n.wrapT=fs,n.repeat.set(3,3),n.colorSpace=Ot,n}function Ki(i,e=.1,t=.045){const n=new st;n.name=`${i}-port`;const r=new Je({color:"#84969d",metalness:.8,roughness:.3}),s=new Je({color:"#080d12",roughness:.8}),o=new Je({color:i==="usb"?"#3777a9":"#cbb16c",metalness:.4,roughness:.4}),a=(c,d,l,u,h,f,g)=>{const _=new Ee(new _t(c,d,l),g);_.position.set(u,h,f),n.add(_)};if(i==="audio"){const c=new Ee(new gn(e*.36,e*.08,8,20),r);n.add(c);const d=new Ee(new Aa(e*.3,20),s);d.position.z=-.004,n.add(d)}else{a(e,t,.008,0,0,-.008,s);for(const c of[-e/2,e/2])a(.007,t+.012,.02,c,0,0,r);for(const c of[-t/2,t/2])a(e,.006,.02,0,c,0,r);if(i==="power")for(const c of[-e*.25,0,e*.25])a(.01,t*.32,.012,c,0,0,o);else a(e*.72,.007,.012,0,-t*.15,0,o)}return n}function au(i){const e=new jt;e.moveTo(.28,-.1),e.bezierCurveTo(.55,-.16,.83,-.02,.96,.16),e.quadraticCurveTo(.95,.27,.88,.39),e.bezierCurveTo(.75,.2,.54,.04,.29,.045),e.closePath();const t=new nn(e,{depth:.025,steps:1,curveSegments:20,bevelEnabled:!0,bevelSegments:2,bevelSize:.004,bevelThickness:.004});t.translate(0,0,-.0125);const n=t.getAttribute("position");for(let r=0;r<n.count;r++){const s=n.getX(r),o=n.getY(r);n.setZ(r,n.getZ(r)+.2*o-.055*s*s)}return t.computeVertexNormals(),t.scale(i,i,i),t}function ca(i){const e=i==="E-ATX"?.44:i==="ATX"?.375:.36,t=i==="Micro-ATX"?.35:.4,n=-.18,r=-.175;return{width:e,depth:t,x:n+e/2,z:r+t/2,holes:[[n+.03,r+.025],[n+e-.03,r+.025],[n+.03,r+t-.025],[n+e-.03,r+t-.025]]}}function Lg(i="standard",e="ivory",t="plain",n=!1,r=!0,s=!0,o="solid",a="ATX",c=Wi([])){const d=new st,l=da(i),u=new st;u.name="chassis",d.add(u);let h=d;const f=new Je({color:Ss.find(L=>L.id===e).color,metalness:.72,roughness:.32}),g=new Je({color:"#34434b",metalness:.7,roughness:.4}),_=new Je({color:"#171f25",roughness:.86}),m=new Je({color:"#253c3f",roughness:.95}),p=new Je({color:"#a17c58",roughness:.74}),y=new Je({color:"#d5af63",metalness:.7,roughness:.32}),x=new Je({color:"#b4e5c5",emissive:"#4b916b",emissiveIntensity:.35});function v(L,V,_e,U,K,ae,me){const se=new Ee(new _t(L,V,_e),me);return se.position.set(U,K,ae),se.castShadow=!0,se.receiveShadow=!0,h.add(se),se}function E(L,V,_e,U,K,ae){const me=new Ee(new Tt(L,L,V,24),ae);return me.position.set(_e,U,K),me.castShadow=!0,h.add(me),me}const A=Math.max(4.7,c.right+.55),R=A+4.1,I=(A-4.1)/2;v(R,.18,5.5,I,0,0,p).name="workbench-top",v(R-.1,.1,5.4,I,-.13,0,g);for(const L of[-3.5,I,A-.6]){const V=new st;V.name="workbench-leg-frame",V.position.x=L,d.add(V),h=V;for(const _e of[-1.9,1.9])v(.15,1.9,.15,0,-1.1,_e,g).name="workbench-leg";v(.12,.1,3.8,0,-1.94,0,g).name="workbench-leg-brace"}h=d,v(3.7,.025,2.6,-.55,.105,0,m);const M=[];for(let L=0;L<19;L++)M.push(-2.3+L*.19,.121,-1.2,-2.3+L*.19,.121,1.2);for(let L=0;L<14;L++)M.push(-2.35,.121,-1.2+L*.19,1.25,.121,-1.2+L*.19);const b=new Hl(new Pt().setAttribute("position",new it(M,3)),new Gl({color:"#416263",transparent:!0,opacity:.4}));d.add(b);const w=-.55;h=u;for(const L of[w-1.04,w+1.04])for(const V of[-.47,.47])v(.24,.1,.25,L,.19,V,_);v(2.55,.09,1.28,w,.285,0,f);for(const L of[-.55,.55])v(2.55,.08,.18,w,2.72,L,f);for(const L of[w-1.17,w+1.17])v(.21,.08,.92,L,2.72,0,f);for(let L=0;L<16;L++)v(.062,.035,.91,w-1.02+L*.136,2.72,0,g);const N=new st;N.name="roof-grille",N.position.set(w,2.746,0),u.add(N);const F=2.14,B=.92,G=.0225,H=.0035,j=Math.floor(F/G),W=Math.floor(B/G),ue=new si(new _t(H,.006,B),g,j),ge=new si(new _t(F,.006,H),g,W),Se=new tt;for(let L=0;L<j;L++)ue.setMatrixAt(L,Se.makeTranslation((L-(j-1)/2)*G,0,0));for(let L=0;L<W;L++)ge.setMatrixAt(L,Se.makeTranslation(0,.002,(L-(W-1)/2)*G));ue.instanceMatrix.needsUpdate=!0,ge.instanceMatrix.needsUpdate=!0,ue.castShadow=ge.castShadow=!0,N.add(ue,ge);const ke=l.shape==="window"?new Je({color:"#8cb4c4",metalness:.1,roughness:.16,transparent:!0,opacity:.32}):f;v(.1,2.38,1.25,w+1.22,1.5,0,ke);for(const L of[-.59,.59])v(.085,2.39,.085,w-1.22,1.5,L,f);for(const L of[.34,2.66])v(2.46,.055,.055,w,L,.61,f);const He=new jt;He.moveTo(-1.19,-.58),He.lineTo(1.19,-.58),He.lineTo(1.19,.58),He.lineTo(-1.19,.58),He.closePath();const Ye=new kn;Ye.moveTo(-1.13,-.34),Ye.lineTo(-1.13,.34),Ye.lineTo(-.41,.34),Ye.lineTo(-.41,-.34),Ye.closePath(),He.holes.push(Ye);const We=new Ee(new nn(He,{depth:.035,bevelEnabled:!1}),_);We.rotation.x=-Math.PI/2,We.position.set(w,.73,0),We.name="psu-shroud",We.castShadow=!0,We.receiveShadow=!0,u.add(We);const Z=new st;Z.name="psu-top-grille",Z.position.set(w-.77,.753,0),u.add(Z);const re=.024,Me=.004,De=29,we=28,$e=new tt,nt=new si(new _t(Me,.009,.68),g,De),D=new si(new _t(.72,.009,Me),g,we);for(let L=0;L<De;L++)nt.setMatrixAt(L,$e.makeTranslation((L-(De-1)/2)*re,0,0));for(let L=0;L<we;L++)D.setMatrixAt(L,$e.makeTranslation(0,.001,(L-(we-1)/2)*re));nt.instanceMatrix.needsUpdate=D.instanceMatrix.needsUpdate=!0,nt.castShadow=D.castShadow=!0,Z.add(nt,D),h=d;const ne=new jt;ne.moveTo(-1.72,.76),ne.lineTo(.6,.76),ne.lineTo(.6,2.64),ne.lineTo(-1.72,2.64),ne.closePath();const ee=(L,V,_e,U)=>{const K=new kn;K.moveTo(L,V),K.lineTo(L,U),K.lineTo(_e,U),K.lineTo(_e,V),K.closePath(),ne.holes.push(K)};ee(w-.56,1.6,w+.07,2.28);for(const L of[1.04,1.66,2.3])ee(.2,L-.13,.44,L+.13);ee(-1.67,2.54,-1.48,2.62);const Q=new Ee(new nn(ne,{depth:.014,bevelEnabled:!1}),g);Q.name="cable-management-wall",Q.position.z=-.58,Q.castShadow=!0,Q.receiveShadow=!0,d.add(Q);for(const L of[-1.7,.58])v(.022,1.86,.035,L,1.7,-.585,g);for(const L of[.78,2.63])v(2.3,.022,.035,-.56,L,-.585,g);for(const L of[1.04,1.66,2.3]){for(const V of[.19,.45])v(.016,.29,.027,V,L,-.552,_);for(const V of[-.14,.14])v(.27,.016,.027,.32,L+V,-.552,_);for(const V of[-1,1])for(let _e=0;_e<4;_e++)v(.083,.05,.008,.32+V*.079,L-.09+_e*.06,-.548,_);v(.025,.1,.018,.51,L,-.613,_)}v(.58,.39,.025,.3,1.65,-.4525,g);const J=new jt;J.moveTo(-.765,-.81),J.lineTo(.765,-.81),J.lineTo(.765,.81),J.lineTo(-.765,.81),J.closePath();const he=new kn;he.moveTo(-.36,-.16),he.lineTo(-.36,.52),he.lineTo(.27,.52),he.lineTo(.27,-.16),he.closePath(),J.holes.push(he);const oe=new Ee(new nn(J,{depth:.025,bevelEnabled:!1}),f);oe.position.set(w-.2,1.76,-.56),oe.castShadow=!0,oe.receiveShadow=!0,d.add(oe);for(const[L,V]of ca(a).holes){const _e=-.75+L*4,U=1.76-V*4,K=E(.027,.07,_e,U,-.5,y);K.rotation.x=Math.PI/2}for(const L of[1.04,1.66,2.3]){for(const V of[w+.75,w+.99])v(.035,.32,.03,V,L,-.55,_);for(const V of[-.145,.145])v(.24,.03,.03,w+.87,L+V,-.55,_)}const pe=new st;pe.name="rear-expansion-cage",d.add(pe),h=pe;for(const L of[-.39,.43]){v(.035,.79,.05,-1.79,1.15,L,f);for(const V of[.79,1.51])v(.035,.045,.19,-1.79,V,L+(L<0?-.075:.075),f)}for(let L=0;L<7;L++){const V=.835+L*.105,_e=new jt;_e.moveTo(-.39,-.044),_e.lineTo(.43,-.044),_e.lineTo(.43,.044),_e.lineTo(-.39,.044),_e.closePath();for(let K=0;K<6;K++){const ae=-.29+K*.105,me=new kn;me.moveTo(ae,-.02),me.lineTo(ae,.02),me.lineTo(ae+.065,.02),me.lineTo(ae+.065,-.02),me.closePath(),_e.holes.push(me)}const U=new Ee(new nn(_e,{depth:.014,bevelEnabled:!1}),g);U.rotation.y=-Math.PI/2,U.position.set(-1.785,V,0),U.castShadow=!0,pe.add(U)}if(h=u,l.shape==="slats")for(let L=0;L<23;L++)v(.016,1.95,.015,w+1.276,1.5,-.49+L*.044,_);if(l.shape==="mesh")for(let L=0;L<12;L++)for(let V=0;V<6;V++)v(.018,.06,.065,w+1.276,.55+L*.16,-.4+V*.16,_);if(l.shape==="fans")for(const L of[.85,1.5,2.15]){const V=new Ee(new gn(.25,.026,12,64),x);V.rotation.y=Math.PI/2,V.position.set(w+1.282,L,0),u.add(V);const _e=au(.23);for(let K=0;K<9;K++){const ae=new Ee(_e,_);ae.position.set(w+1.285,L,0),ae.rotation.set(0,Math.PI/2,K*Math.PI*2/9,"YXZ"),u.add(ae)}const U=new Ee(new Tt(.065,.07,.03,48),x);U.rotation.z=Math.PI/2,U.position.set(w+1.29,L,0),u.add(U)}if(t==="stripe")for(const L of[-.25,.25])v(.022,2.05,.075,w+1.3,1.5,L,x),v(2.15,.012,.075,w,2.768,L,x);if(t==="checker")for(let L=0;L<10;L++)for(let V=0;V<6;V++)(L+V)%2===0&&v(.022,.14,.14,w+1.3,.68+L*.17,-.43+V*.17,x);if(t==="circuit")for(let L=0;L<5;L++)v(.022,1.1+L*.13,.018,w+1.3,1.4,-.4+L*.18,x),v(.022,.018,.14,w+1.3,.85+L*.26,-.34+L*.18,x),v(.023,.055,.055,w+1.3,1.95+L*.065,-.4+L*.18,x);E(.045,.014,w+1.17,2.768,.27,x.clone()).name="case-power-indicator";for(const L of[-.28,-.09]){const V=Ki("usb",.12,.045);V.rotation.x=-Math.PI/2,V.position.set(w+1.17,2.773,L),u.add(V)}for(const L of[.08,.17]){const V=Ki("audio",.065);V.rotation.x=-Math.PI/2,V.position.set(w+1.17,2.773,L),u.add(V)}for(const L of[w-1.2,w+1.2])v(.055,2.3,.055,L,1.5,.62,g);for(const L of[w-1.18,w+1.18])for(const V of[.4,2.61]){const _e=E(.022,.014,L,V,.665,g);_e.rotation.x=Math.PI/2}const Ge=new P(-1.825,.33,-.61);for(const L of u.children)L.position.sub(Ge);u.position.copy(Ge),u.scale.set(l.stretch[0],l.stretch[1],l.stretch[2]),h=d,v(c.width,.09,c.depth,c.centerX,.18,c.centerZ,_);for(const L of[c.centerX-c.width/2,c.centerX+c.width/2])v(.045,.1,c.depth,L,.26,c.centerZ,g);for(const L of[c.centerZ-c.depth/2,c.centerZ+c.depth/2])v(c.width,.1,.045,c.centerX,.26,L,g);const Le=new st;Le.name="side-panel",d.add(Le),h=Le;const C=2.46*l.stretch[0],S=2.36*l.stretch[1],k=v(C,S,.028,0,0,0,f);k.name="panel-sheet";for(const L of[-C/2+.035,C/2-.035])v(.055,S,.045,L,0,-.025,g);for(const L of[-S/2+.035,S/2-.035])v(C,.055,.045,0,L,-.025,g);for(const L of[-C/2+.075,C/2-.075])for(const V of[-S/2+.075,S/2-.075]){const _e=E(.02,.012,L,V,.023,g);_e.rotation.x=Math.PI/2}if(t==="stripe")for(const L of[-C*.25,C*.25])v(.07,S-.2,.008,L,0,.018,x);if(t==="checker")for(let L=0;L<6;L++)for(let V=0;V<4;V++)(L+V)%2===0&&v(.14,.14,.008,-.5+L*.2,-.3+V*.2,.018,x);if(t==="circuit")for(let L=0;L<5;L++)v(.018,S*.6,.008,-.5+L*.25,0,.018,x),v(.18,.018,.008,-.42+L*.25,.3-L*.12,.018,x);if(n?Le.position.set(-1.825+1.275*l.stretch[0],.33+1.17*l.stretch[1],-.61+1.29*l.stretch[2]):(Le.rotation.y=Math.PI/2,Le.position.set(-3.05,.2+S/2,0)),h=d,!n)for(const L of[-.8,.8])v(.55,.07,.18,-3.05,.145,L,_),v(.08,.16,.18,-3.13,.22,L,_);const q=Le.clone(!0);if(q.name="back-panel",d.add(q),o==="glass"&&(k.material=new Je({color:"#a6c9d4",metalness:.05,roughness:.12,transparent:!0,opacity:.2,depthWrite:!1}),k.castShadow=!1),r?(q.rotation.set(0,Math.PI,0),q.position.set(-1.825+1.275*l.stretch[0],.33+1.17*l.stretch[1],-.65)):(q.rotation.set(0,Math.PI/2,0),q.position.set(-3.7,.2+S/2,0)),!r)for(const L of[-.8,.8])v(.55,.07,.18,-3.7,.145,L,_),v(.08,.16,.18,-3.78,.22,L,_);const ie=new st;ie.name="rear-panel",d.add(ie);const Y=new jt,Ce=-.59,fe=-.61+1.2*l.stretch[2],Te=.34,Ae=.33+2.33*l.stretch[1];Y.moveTo(Ce,Te),Y.lineTo(fe,Te),Y.lineTo(fe,Ae),Y.lineTo(Ce,Ae),Y.closePath();const ce=(L,V,_e,U)=>{const K=new kn;K.moveTo(L,V),K.lineTo(L,U),K.lineTo(_e,U),K.lineTo(_e,V),K.closePath(),Y.holes.push(K)};ce(-.46,.755,.49,1.56),ce(-.48,.37,.48,.735),ce(-.48,1.65,-.2,2.43);for(let L=0;L<8;L++)ce(-.08,1.73+L*.08,.43,1.765+L*.08);const ve=new Ee(new nn(Y,{depth:.025,bevelEnabled:!1}),f);ve.castShadow=!0,ve.receiveShadow=!0,ie.add(ve);const Ne=(L,V,_e,U,K)=>{const ae=new st;ae.name=L,ie.add(ae),h=ae;const me=U-V,se=K-_e,te=(V+U)/2,Re=(_e+K)/2;for(const wt of[V,U])v(.016,se+.016,.018,wt,Re,.032,g);for(const wt of[_e,K])v(me,.016,.018,te,wt,.032,g);const Be=.0225,rt=.0035,Ze=Math.max(0,Math.ceil((me-.012)/Be)-1),Xt=Math.max(0,Math.ceil((se-.012)/Be)-1),It=new si(new _t(rt,se,.008),g,Ze),Kn=new si(new _t(me,rt,.008),g,Xt),an=new tt;for(let wt=0;wt<Ze;wt++)It.setMatrixAt(wt,an.makeTranslation(V+(wt+1)*Be,Re,.032));for(let wt=0;wt<Xt;wt++)Kn.setMatrixAt(wt,an.makeTranslation(te,_e+(wt+1)*Be,.034));It.instanceMatrix.needsUpdate=!0,Kn.instanceMatrix.needsUpdate=!0,It.castShadow=Kn.castShadow=!0,ae.add(It,Kn)};if(Ne("rear-vent-grille",-.08,1.73,.43,2.325),Ne("rear-psu-grille",-.48,.37,-.02,.735),Ne("rear-psu-edge-grille",.32,.37,.48,.735),h=d,ie.rotation.y=-Math.PI/2,ie.position.set(s?-1.815:-2.45,s?0:-.14,0),!s)for(const L of[-.35,.35])v(.42,.07,.18,-2.45,.145,L,_);return d}const rl={type:"change"},Na={type:"start"},cu={type:"end"},rs=new bs,sl=new Bn,Ug=Math.cos(70*na.DEG2RAD),xt=new P,Ft=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},lo=1e-6;class Ng extends Yh{constructor(e,t=null){super(e,t),this.state=ct.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ki.ROTATE,MIDDLE:ki.DOLLY,RIGHT:ki.PAN},this.touches={ONE:Oi.ROTATE,TWO:Oi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new vn,this._lastTargetPosition=new P,this._quat=new vn().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ic,this._sphericalDelta=new Ic,this._scale=1,this._panOffset=new P,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new P,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Og.bind(this),this._onPointerDown=Fg.bind(this),this._onPointerUp=Bg.bind(this),this._onContextMenu=Xg.bind(this),this._onMouseWheel=Gg.bind(this),this._onKeyDown=Hg.bind(this),this._onTouchStart=Vg.bind(this),this._onTouchMove=Wg.bind(this),this._onMouseDown=zg.bind(this),this._onMouseMove=kg.bind(this),this._interceptControlDown=qg.bind(this),this._interceptControlUp=$g.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(rl),this.update(),this.state=ct.NONE}update(e=null){const t=this.object.position;xt.copy(t).sub(this.target),xt.applyQuaternion(this._quat),this._spherical.setFromVector3(xt),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Ft:n>Math.PI&&(n-=Ft),r<-Math.PI?r+=Ft:r>Math.PI&&(r-=Ft),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(xt.setFromSpherical(this._spherical),xt.applyQuaternion(this._quatInverse),t.copy(this.target).add(xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=xt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const d=new P(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(a),this.object.updateMatrixWorld(),o=xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(rs.origin.copy(this.object.position),rs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(rs.direction))<Ug?this.object.lookAt(this.target):(sl.setFromNormalAndCoplanarPoint(this.object.up,this.target),rs.intersectPlane(sl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>lo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>lo||this._lastTargetPosition.distanceToSquared(this.target)>lo?(this.dispatchEvent(rl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ft/60*this.autoRotateSpeed*e:Ft/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){xt.setFromMatrixColumn(t,0),xt.multiplyScalar(-e),this._panOffset.add(xt)}_panUp(e,t){this.screenSpacePanning===!0?xt.setFromMatrixColumn(t,1):(xt.setFromMatrixColumn(t,0),xt.crossVectors(this.object.up,xt)),xt.multiplyScalar(e),this._panOffset.add(xt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;xt.copy(r).sub(this.target);let s=xt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ft*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ft*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ft*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ft*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Fg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Og(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Bg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cu),this.state=ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function zg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ct.DOLLY;break;case ki.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ct.ROTATE}break;case ki.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Na)}function kg(i){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Gg(i){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(i.preventDefault(),this.dispatchEvent(Na),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(cu))}function Hg(i){this.enabled!==!1&&this._handleKeyDown(i)}function Vg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Oi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ct.TOUCH_ROTATE;break;case Oi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case Oi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ct.TOUCH_DOLLY_PAN;break;case Oi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Na)}function Wg(i){switch(this._trackPointer(i),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ct.NONE}}function Xg(i){this.enabled!==!1&&i.preventDefault()}function qg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $g(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Yg(i,e){const t=new Ng(i,e);t.target.fromArray(Hn.camera.target),t.enableDamping=!0,t.dampingFactor=.09,t.enablePan=!1,t.mouseButtons.RIGHT=null,t.minDistance=Hn.camera.minDistance,t.maxDistance=110,t.minPolarAngle=Math.PI*.02,t.maxPolarAngle=Math.PI*.82,t.minAzimuthAngle=-1/0,t.maxAzimuthAngle=1/0,t.update(),t.saveState();const n=new Set;let r=performance.now();const s=()=>n.clear(),o=h=>h instanceof Element&&!!h.closest("input,textarea,select,[contenteditable]"),a=h=>n.delete(h.code);window.addEventListener("keyup",a),window.addEventListener("blur",s),window.addEventListener("focusin",s),document.addEventListener("visibilitychange",s);const c=()=>{s(),t.enableDamping=!1,t.reset(),i.position.copy(new P(...Hn.camera.position)),t.target.fromArray(Hn.camera.target),t.update(),t.enableDamping=!0},d=h=>{o(h.target)||h.ctrlKey||h.altKey||h.metaKey||((h.code==="KeyQ"||h.code==="KeyE")&&(h.preventDefault(),n.add(h.code)),h.code==="KeyR"&&!h.ctrlKey&&!h.altKey&&!h.metaKey&&c())};return window.addEventListener("keydown",d),{focusAt:(h,f)=>{s(),t.enableDamping=!1,t.reset(),t.target.copy(h),i.position.copy(h).add(new P(.2,.85,1).normalize().multiplyScalar(f)),t.update(),t.enableDamping=!0},update:()=>{const h=performance.now(),f=Math.min((h-r)/1e3,.05);r=h;const g=Number(n.has("KeyE"))-Number(n.has("KeyQ"));if(g&&!o(document.activeElement)){const _=new P(1,0,0).applyQuaternion(i.quaternion).multiplyScalar(g*1.5*f);i.position.add(_),t.target.add(_)}t.update()},reset:c,topView:()=>{s(),t.enableDamping=!1,t.reset(),t.target.set(-.55,1.3,0),i.position.set(-.55,8.3,.46),t.update(),t.enableDamping=!0},dispose(){window.removeEventListener("keyup",a),window.removeEventListener("blur",s),window.removeEventListener("focusin",s),document.removeEventListener("visibilitychange",s),window.removeEventListener("keydown",d),t.dispose()}}}function jg(){const i=new st;i.name="motherboard-connectors";const e=new Je({color:"#262f38",roughness:.6}),t=new Je({color:"#cab16b",metalness:.7,roughness:.35}),n=new Je({color:"#080e13",roughness:.9});for(const[r,s]of Object.entries(ur)){const o=new st;o.name=`board-port-${r}`,o.position.fromArray(s),i.add(o);const a=(f,g,_,m,p,y,x=e)=>{const v=new Ee(new _t(f,g,_),x);v.position.set(m,p,y),o.add(v)},c=r==="atx24"?2:r==="sata-data"?7:4,d=r==="atx24"?12:r==="eps"?2:1,l=r==="sata-data"?.012:.022,u=c*l+.012,h=d*l+.012;a(u,h,.008,0,0,-.053,n);for(const f of[-u/2,u/2])a(.006,h,.052,f,0,-.026);for(const f of[-h/2,h/2])a(u,.006,.052,0,f,-.026);for(let f=0;f<c;f++)for(let g=0;g<d;g++){const _=(f-(c-1)/2)*l,m=(g-(d-1)/2)*l;a(.004,.004,.033,_,m,-.025,t),(r==="atx24"||r==="eps")&&(a(.003,l,.038,_+l/2,m,-.029),a(l,.003,.038,_,m+l/2,-.029))}r==="sata-data"?a(.008,h*.65,.032,-u*.3,-h*.15,-.02):a(.012,h*.32,.012,u/2+.006,0,-.008)}return i.rotation.x=-Math.PI/2,i.scale.setScalar(.25),i}function Jg(){const i=new st;i.name="board-surface-detail";const e=new Je({color:"#253039",roughness:.72}),t=new Je({color:"#aab8b8",metalness:.75,roughness:.38}),n=new Je({color:"#a89973",roughness:.8}),r=new Je({color:"#aabfae",roughness:.9}),s=[],o=(a,c,d,l,u,h,f=e)=>s.push({size:[a,c,d],position:[l,u,h],material:f});for(const a of[-.101,.021])o(.005,.008,.122,a,.04,-.05,t);for(const a of[-.111,.011])o(.122,.008,.005,-.04,.04,a,t);o(.0025,.003,.108,.029,.041,-.051,t),o(.011,.003,.003,.025,.041,.004,t);for(const[a,c,d]of[[-.088,.143,.024],[-.038,.144,.02],[.014,.146,.02]]){o(d,.004,d,a,.035,c),o(d*.65,6e-4,.002,a,.0375,c,r);for(let l=0;l<6;l++)for(const u of[-1,1]){const h=(l-2.5)*d/7;o(.003,.0015,.0015,a+u*(d/2+.001),.034,c+h,t),o(.0015,.0015,.003,a+h,.034,c+u*(d/2+.001),t)}}for(const a of[-.166,.165])for(let c=0;c<15;c++){const d=-.117+c*.017;if(!(a<0&&d<.1)&&!(a>0&&d>-.055&&d<.045)){o(.005,.0025,.007,a,.034,d,c%3===0?n:e);for(const l of[-.0035,.0035])o(.005,.0028,.001,a,.034,d+l,t);o(.008,5e-4,7e-4,a,.0332,d+.006,r)}}for(let a=0;a<10;a++){const c=-.119+a*.015;o(6e-4,4e-4,.013,c,.0331,.117,r),o(.007,4e-4,6e-4,c+.0032,.0331,.1235,r),o(6e-4,4e-4,.006,c+.0064,.0331,.1265,r)}for(const a of[e,t,n,r]){const c=s.filter(u=>u.material===a),d=new si(new _t(1,1,1),a,c.length),l=new tt;c.forEach((u,h)=>{l.compose(new P(...u.position),new vn,new P(...u.size)),d.setMatrixAt(h,l)}),d.castShadow=!0,d.receiveShadow=!0,i.add(d)}return i}function Kg(){const i=new st;i.name="motherboard-rear-io";const e=new st;e.position.set(-1.065,-1.76,.5),e.rotation.y=-Math.PI/2,i.add(e);const t=new Je({color:"#a6b5bd",metalness:.8,roughness:.34}),n=new Je({color:"#1b252d",roughness:.65}),r=(s,o,a,c,d,l,u=t)=>{const h=new Ee(new _t(s,o,a),u);return h.position.set(c,d,l),h.castShadow=!0,h.receiveShadow=!0,e.add(h),h};r(.28,.78,.012,-.34,2.04,.018,n).name="io-shield";for(const[s,o]of[["display",2.32],["display",2.21],["usb",2.08],["usb",1.98]]){const a=Ki(s,.17,.065);a.position.set(-.34,o,.044),e.add(a);for(const c of[-.434,-.246])r(.008,.084,.36,c,o,-.151);for(const c of[-.042,.042])r(.196,.008,.36,-.34,o+c,-.151);r(.188,.072,.015,-.34,o,-.333,n);for(const c of[-.41,-.27])r(.018,.018,.024,c,o-.047,-.3);for(const c of[-.39,-.29])r(.028,.002,.055,c,o+.047,-.15,n)}for(const[s,o]of[1.85,1.74].entries()){const a=Ki("audio",.075);a.position.set(-.34,o,.044),e.add(a),r(.11,.095,.35,-.34,o,-.148,n);const c=new Ee(new gn(.028,.004,8,24),new Je({color:s?"#c48294":"#83b9a0",roughness:.5}));c.position.set(-.34,o,.047),e.add(c);for(const d of[-.397,-.283])r(.01,.022,.016,d,o-.03,-.3)}return i.rotation.x=-Math.PI/2,i.scale.setScalar(.25),i}function Zg(i){const e=new st,t=new Je({color:i.color,metalness:.35,roughness:.5}),n=new Je({color:"#17232c",roughness:.8}),r=new Je({color:"#d9dfde",metalness:.8,roughness:.3}),s=new Je({color:"#d5b36d",metalness:.7,roughness:.4});t.map=il(["Motherboard","RAM","SSD"].includes(i.type)?"pcb":"metal"),r.map=il("metal");const o=(u,h,f,g,_,m,p=t)=>{const y=new Ee(new _t(u,h,f),p);return y.position.set(g,_,m),y.castShadow=!0,y.receiveShadow=!0,e.add(y),y},a=i.type==="GPU"?i.id==="gpu-slot"?.7:i.id==="gpu-long"?1.25:i.fans?Math.max(.85,Math.min(1.4,i.lengthMm/240)):1:1,c=u=>-.2+(u+.2)*a,d=(u,h,f,g,_,m,p=t)=>o(u*a,h,f,c(g),_,m,p),l=(u,h,f,g)=>{const _=new Ee(new gn(g,.009,12,64),r);_.rotation.x=Math.PI/2,_.position.set(u,h,f),e.add(_);const m=new Ee(new Tt(g*.92,g*.92,.018,32),n);m.position.set(u,h-.014,f),e.add(m);const p=new st;p.name="fan-rotor",p.position.set(u,h,f),e.add(p);const y=au(g*.94),x=new Je({color:"#aab9bd",metalness:.25,roughness:.42});for(let R=0;R<9;R++){const I=new Ee(y,x);I.rotation.set(-Math.PI/2,0,R*Math.PI*2/9,"YXZ"),I.castShadow=!0,I.receiveShadow=!0,p.add(I)}const v=i.type==="GPU",E=new Ee(new Tt(g*.35,g*.37,v?.008:.025,48),n);E.position.y=v?0:.013,p.add(E);const A=new Ee(new Tt(g*.31,g*.32,.004,48),r);A.position.y=v?.006:.027,p.add(A)};switch(i.type){case"GPU Support":o(.13,.025,.13,0,.0125,0,n),o(.042,.24,.042,0,.145,0,r),o(.075,.04,.07,0,.23,0),o(.035,.07,.035,0,.28,0,r),o(.1,.018,.09,0,.312,0,n),o(.02,.025,.02,.044,.23,0,s);break;case"Motherboard":o(.15,.0075,.05,-.035,.03475,.0475,n).name="m2-carrier",o(.01375,.00875,.0425,.03625,.0465,.0475,n).name="m2-socket";for(let u=0;u<10;u++)o(.004,.0015,.002,.0295,.0505,.033+u*.003,s).name="m2-contact";{const u=new Ee(new Tt(.0045,.0045,.003,16),r);u.position.set(-.095,.04875,.0475),u.name="m2-screw",e.add(u)}{const u=ca(i.formFactor);o(u.width,.025,u.depth,u.x,.02,u.z).name="motherboard-pcb"}o(.11,.025,.11,-.04,.045,-.05,r).name="cpu-socket";for(const[u,h]of[.08,.13].entries()){const f=new st;f.name=`dimm-${u===0?"a":"b"}-mouth`,f.position.set(h,.065,-.04),e.add(f);for(const g of[-.0065,.0065])o(.005,.032,.22,h+g,.049,-.04,n);for(const g of[-.155,.075])o(.021,.025,.016,h,.063,g,r)}for(const u of[.092,.108])o(.23,.0275,.005,-.04,.04625,u,n);{const u=new st;u.name="pcie-mouth",u.position.set(-.04,.06,.1),e.add(u)}break;case"CPU":{o(.19,.028,.19,0,.025,0),o(.167,.003,.167,0,.04,0,n).name="cpu-lid-seal";const u=new jt,h=.078,f=i.socket==="AX5"?.018:.007;u.moveTo(-h+f,-h),u.lineTo(h-f,-h),u.lineTo(h,-h+f),u.lineTo(h,h-f),u.lineTo(h-f,h),u.lineTo(-h+f,h),u.lineTo(-h,h-f),u.lineTo(-h,-h+f),u.closePath();const g=new Ee(new nn(u,{depth:.014,bevelEnabled:!0,bevelThickness:.002,bevelSize:.002,bevelSegments:3}),r);g.rotation.x=-Math.PI/2,g.position.y=.043,g.name="cpu-heat-spreader",e.add(g);break}case"CPU Cooler":o(.12,.015,.12,0,.0125,0,r).name="cooler-base";for(let u=0;u<6;u++)o(.24,.018,.23,0,.035+u*.027,0,r);l(0,.21,0,.1),o(.035,.16,.035,.1,.085,0,s);break;case"RAM":o(.36,.025,.095,0,.035,0),o(.32,.012,.014,0,.036,.055,s);for(let u=0;u<4;u++)o(.055,.023,.055,-.13+u*.085,.058,0,n);break;case"GPU":{const u=i.fans??(i.id==="gpu-slot"?1:i.id==="gpu-long"?3:2),h=u===1?[-.04]:u===3?[-.12,0,.12]:[-.1,.1],f=u===3?.061:u===1?.073:.067,g=.39*a/2,_=i.id==="gpu-long"?.015:.007,m=new jt;m.moveTo(-g+_,-.09),m.lineTo(g-_,-.09),m.lineTo(g,-.09+_),m.lineTo(g,.09-_),m.lineTo(g-_,.09),m.lineTo(-g+_,.09),m.lineTo(-g,.09-_),m.lineTo(-g,-.09+_),m.closePath();for(const y of h){const x=new kn;x.absarc(c(y)-c(0),0,f+.007,0,Math.PI*2,!0),m.holes.push(x)}const p=new Ee(new nn(m,{depth:.009,bevelEnabled:!0,bevelSize:.0015,bevelThickness:.0015,bevelSegments:2,curveSegments:32}),t);p.rotation.x=-Math.PI/2,p.position.set(c(0),.072,0),p.name="gpu-open-fan-shroud",e.add(p);for(const y of h)l(c(y),.082,0,f);for(const y of[-.086,.086])d(.38,.012,.007,0,.061,y),d(.38,.01,.007,0,.013,y);for(const y of[-.184,.184])d(.014,.056,.168,y,.037,0);if(d(.36,.004,.146,0,.008,0,n).name="gpu-pcb",o(.018,.12,.21,-.2,.05,0,r),i.id==="gpu-long")for(const y of[-.08,.08]){const x=d(.35,.012,.012,0,.086,y,r);x.name="gpu-armored-rail"}if(i.id==="gpu-slot")for(let y=0;y<4;y++)d(.006,.0015,.04,.115+y*.017,.083,0,n);break}case"SSD":i.interface==="SATA"?(o(.26,.025,.18,0,.0325,0),o(.19,.004,.13,0,.047,0,r),o(.025,.014,.12,.13,.03,0,n)):(o(.26,.016,.075,0,.028,0),o(.16,.013,.06,0,.044,0,n),o(.025,.014,.06,.13,.03,0,s));break;case"PSU":o(.26,.19,.25,0,.1,0),l(0,.205,0,.085),o(.1,.07,.014,0,.11,.13,n);break}if(i.type==="Motherboard"){e.add(jg()),e.add(Kg()),e.add(Jg());for(const u of[-.087,-.054,-.021,.012])o(.022,.018,.018,u,.043,-.129,r);for(let u=0;u<5;u++){const h=new Ee(new Tt(.007,.007,.017,16),n);h.position.set(-.131,.043,-.1+u*.041),e.add(h);const f=new Ee(new Tt(.006,.006,.002,16),r);f.position.copy(h.position),f.position.y+=.009,e.add(f),o(.008,.001,.001,f.position.x,.053,f.position.z,n)}o(.052,.012,.03,.09,.041,.136,n);for(let u=0;u<6;u++)o(.003,.013,.028,.068+u*.009,.044,.136,r);for(let u=0;u<8;u++)o(.011,.005,.006,-.12+u*.03,.035,.167,n),o(.002,.002,.008,-.124+u*.03,.039,.167,s);o(.029,.048,.204,-.163,.045,-.02,r);for(const[u,h]of ca(i.formFactor).holes){const f=new Ee(new gn(.012,.003,5,12),s);f.rotation.x=Math.PI/2,f.position.set(u,.037,h),e.add(f)}}if(i.type==="CPU"){for(const f of[-.087,.087])for(let g=0;g<8;g++){const _=-.066+g*.019;o(.007,.003,.009,f,.041,_,n);for(const m of[-.004,.004])o(.007,.0035,.0015,f,.041,_+m,r)}for(let f=0;f<14;f++)o(.0018,5e-4,.012,-.032+f*.0048,.0595,.047,n);for(const f of[-.088,.088])o(.002,.001,.13,f,.0395,0,s);for(let f=0;f<7;f++)for(let g=0;g<7;g++)o(.012,.001,.012,-.066+f*.022,.0115,-.066+g*.022,s);for(const f of[-.086,.086])for(let g=0;g<5;g++)o(.008,.008,.012,f,.043,-.055+g*.027,r);const u=new jt;u.moveTo(0,0),u.lineTo(.018,0),u.lineTo(0,.018),u.closePath();const h=new Ee(new Da(u),s);h.rotation.x=-Math.PI/2,h.position.set(-.071,.06,-.071),e.add(h);for(let f=0;f<8;f++)for(const g of[-.09,.09])o(.01,.008,.013,-.07+f*.02,.045,g,s);o(.09,.003,.008,0,.061,0,n),o(.055,.003,.007,0,.061,.02,n)}if(i.type==="RAM"){for(const u of[-.038,.033])o(.326,.005,.01,0,.073,u,t);for(const u of[-.161,.161])o(.012,.011,.067,u,.064,0,t);for(let u=0;u<4;u++){const h=-.13+u*.085;o(.049,.008,.049,h,.019,0,n).name="ram-rear-memory-chip",o(.028,.001,.009,h,.07,.014,r);for(let f=0;f<5;f++)for(const g of[-.027,.027])o(.003,.003,.005,h-.018+f*.009,.05,g,r)}for(let u=0;u<18;u++)o(.009,.002,.018,-.15+u*.018,.029,.055,s);for(const u of[-.169,.169])o(.007,.006,.013,u,.049,-.027,n);for(const u of[-.035,.032])for(let h=0;h<12;h++)o(.003,.009,.008,-.145+h*.026,.066,u,r);for(let u=0;u<10;u++)o(.007,.004,.004,-.145+u*.03,.051,-.04,n);for(let u=0;u<4;u++){o(.06,.006,.014,-.13+u*.085,.075,-.025,r);for(const h of[-.012,.015])o(.012,.005,.006,-.1+u*.085,.074,h,s)}o(.082,.002,.026,-.03,.071,.005,r);for(let u=0;u<7;u++)o(.003,.001,.018,-.062+u*.009,.0725,.005,n);for(let u=0;u<18;u++)o(.009,.003,.02,-.15+u*.018,.044,.055,s);o(.3,.012,.012,0,.074,-.037,r)}if(i.type==="GPU"){for(const u of[-.091,.091]){d(.35,.004,.002,0,.069,u,n);for(const h of[-.176,.176])d(.009,.009,.003,h,.073,u,r),d(.005,.0015,.004,h,.073,u,n)}d(.37,.006,.165,0,.004,0,n);for(const u of[-.17,.17])for(const h of[-.069,.069])d(.012,.002,.012,u,5e-4,h,r),d(.008,.001,.002,u,-.001,h,n);for(let u=0;u<8;u++)d(.016,.002,.1,-.13+u*.035,-5e-4,0,r);if(i.requiresPower!==!1){const u=e.children.length,h=dl(i.id);o(.029,.036,.057,.203,.048,.018,n).name="gpu-power-socket";for(let f=0;f<2;f++)for(let g=0;g<4;g++)o(.003,.008,.008,.219,.037+f*.015,-.003+g*.014,s);for(const f of e.children.slice(u))f.position.x+=h.x,f.position.z+=h.z}for(const u of[-.05,.045]){const h=Ki("display",.055,.022);h.rotation.y=-Math.PI/2,h.position.set(-.221,.075,u),e.add(h)}for(let u=0;u<32;u++)d(.003,.039,.15,-.165+u*.0106,.033,0,r);for(const u of[-.061,.061]){const h=new Ee(new Tt(.004,.004,.33*a,12),r);h.rotation.z=Math.PI/2,h.position.set(c(0),.016,u),e.add(h)}o(.17,.014,.025,0,.014,.08,s);for(const u of[-.055,0,.055])o(.009,.025,.035,-.212,.066,u,n)}if(i.type==="CPU Cooler"){for(let u=0;u<6;u++)for(const h of[-.116,.116])o(.218,.004,.002,0,.035+u*.027,h,n);for(const u of[-.099,.099])for(const h of[-.098,.098]){const f=new Ee(new Tt(.005,.005,.005,12),r);f.position.set(u,.184,h),e.add(f)}for(const u of[-.075,.075]){const h=new Ee(new Tt(.013,.013,.19,10),s);h.position.set(u,.1,.08),e.add(h)}}if(i.type==="SSD"){if(i.interface==="SATA"){for(const u of[-.111,.111])for(const h of[-.071,.071])o(.008,.002,.008,u,.046,h,n);for(let u=0;u<9;u++)o(.003,.001,.033,-.06+u*.012,.05,.017,n)}else for(let u=0;u<8;u++)o(.006,.004,.004,-.1+u*.027,.04,-.029,s);if(i.interface==="M.2 NVMe")for(const u of[-.085,0,.08])o(.048,.006,.04,u,.055,0,r)}if(i.type==="PSU"){for(const h of[.036,.055,.074]){const f=new Ee(new gn(h,.0018,6,40),r);f.rotation.x=Math.PI/2,f.position.set(0,.226,0),e.add(f)}for(const h of[-.11,.11])for(const f of[-.105,.105]){const g=new Ee(new Tt(.005,.005,.003,12),r);g.position.set(h,.197,f),e.add(g)}for(let h=0;h<4;h++)for(let f=0;f<8;f++)o(.016,.009,.002,-.093+f*.026,.035+h*.035,-.126,n);for(let h=0;h<5;h++)o(.085,.007,.006,-.067,.045+h*.024,.129,n);const u=Ki("power",.065,.052);u.position.set(.06,.11,.137),e.add(u),o(.035,.025,.01,.06,.047,.133,n),o(.003,.012,.002,.06,.047,.139,r)}return e}function Qg(i){const e=new st,t=new Map;function n(s){const o=Wi(s.inventory,s.benchSelection),a=new Set([...o.visibleIds,...s.inventory.filter(c=>c.location==="installed").map(c=>c.instanceId),...s.operation?[s.operation.instanceId]:[]]);for(const[c,d]of t)if(!a.has(c)){const l=new Set,u=new Set;d.getObjectByName("visual").traverse(h=>{h instanceof Ee&&(h.geometry.dispose(),(Array.isArray(h.material)?h.material:[h.material]).forEach(f=>l.add(f)))}),l.forEach(h=>{h instanceof Je&&h.map&&u.add(h.map),h.dispose()}),u.forEach(h=>h.dispose()),d.removeFromParent(),t.delete(c)}for(const c of s.inventory){if(t.has(c.instanceId)||!a.has(c.instanceId))continue;const d=new st,l=Zg(Ie(c.catalogId));l.name="visual",l.scale.setScalar(Ie(c.catalogId).type==="GPU"?4:On.scale),d.add(l),d.position.fromArray(o.positions.get(c.instanceId)),d.userData.instanceId=c.instanceId,t.set(c.instanceId,d),e.add(d)}}n(i);const r=new Ee(new _t(.74,.008,.62),new Rn({color:"#90c995"}));return r.visible=!1,e.add(r),{root:e,models:t,reconcile:n,sync(s){const o=s.selectedInstanceId?t.get(s.selectedInstanceId):void 0;r.visible=!!o&&!s.operation&&s.inventory.find(c=>c.instanceId===s.selectedInstanceId)?.location==="tray";const a=s.inventory.find(c=>c.instanceId===s.selectedInstanceId);if(o&&a&&r.position.set(o.position.x,.238,o.position.z),r.scale.set(1,1,1),o&&a&&r.visible&&Ie(a.catalogId).type==="GPU"){const c=new Cn().setFromObject(o);r.position.x=(c.min.x+c.max.x)/2,r.position.z=(c.min.z+c.max.z)/2,r.scale.set((c.max.x-c.min.x+.04)/.74,1,(c.max.z-c.min.z+.04)/.62)}for(const[c,d]of t)d.traverse(l=>{l instanceof Ee&&l.material instanceof Je&&(l.material.emissive.set(c===s.selectedInstanceId?"#397347":"#000000"),l.material.emissiveIntensity=.6)});e.userData.selectedInstanceId=s.selectedInstanceId}}}const e_={"GPU Support":{scale:1,rotation:[0,0,0],contact:[0,0,0]},Motherboard:{scale:4,rotation:[Math.PI/2,0,0],contact:[0,0,0]},CPU:{scale:1.8,rotation:[Math.PI/2,0,0],contact:[0,.011,0]},"CPU Cooler":{scale:1.8,rotation:[Math.PI/2,0,0],contact:[0,.005,0]},RAM:{scale:2.3,rotation:[Math.PI,0,Math.PI/2],contact:[0,.036,.045]},GPU:{scale:4,rotation:[Math.PI,0,0],contact:[0,.014,.0675]},SSD:{scale:2,rotation:[Math.PI/2,0,0],contact:[0,.02,0]},PSU:{scale:1.65,rotation:[0,-Math.PI/2,0],contact:[0,.005,0]}};function t_(i,e){const t=e_[i],[n,r,s]=e?t.rotation:[0,0,0],o=new vn().setFromEuler(new Jt(n,r,s,"ZYX")),a=e||i==="GPU"?t.scale:On.scale,c=e?new P(...t.contact).multiplyScalar(-a).applyQuaternion(o):new P;return{scale:a,quaternion:o,offset:c}}function n_(i){const{root:e,models:t}=i,n=[];let r=null,s=null,o="",a,c=null,d=Wi([]);function l(_){return new P(...d.positions.get(_))}function u(_){const m=_.ownerId==="case"?e:t.get(_.ownerId),p=a.inventory.find(v=>v.instanceId===_.ownerId),y=p?Ie(p.catalogId):null,x=(y?.type==="Motherboard"?y.slots:qn(a.caseId).slots).find(v=>v.id===_.slotId);return{owner:m,position:new P(...x.position),rotation:new Jt(...x.rotation)}}function h(_,m){const p=a.inventory.find(v=>v.instanceId===_),y=Ie(p.catalogId).type,x=t_(y,m);return{...x,scaleY:y==="GPU Support"&&m?(1.086-qn(a.caseId).slots.find(v=>v.id==="support").position[1])/.321:x.scale}}function f(){r&&(r.removeFromParent(),r.traverse(_=>{_ instanceof Ee&&_.material.dispose()}),r=null,s=null)}function g(){if(!r||!a.selectedInstanceId)return;const _=Vn(a).filter(y=>Yn(a,a.selectedInstanceId,y.key)===null),m=_.find(y=>y.key===c)??_[0];if(r.visible=!!m&&!a.operation,!m)return;const p=u({ownerId:m.ownerId,slotId:m.id});p.owner.add(r),r.position.copy(p.position),r.rotation.copy(p.rotation)}return{hover(_){c=_,g()},sync(_){a=_,i.reconcile(_),d=Wi(_.inventory,_.benchSelection);const m=[..._.inventory].sort((v,E)=>+(Ie(E.catalogId).type==="Motherboard")-+(Ie(v.catalogId).type==="Motherboard"));for(const v of m){const E=t.get(v.instanceId);if(!E)continue;const A=E.getObjectByName("visual");if(v.placement){const I=u(v.placement);I.owner.add(E),E.position.copy(I.position),E.rotation.copy(I.rotation)}else e.add(E),E.position.copy(l(v.instanceId)),E.rotation.set(0,0,0);const R=h(v.instanceId,!!v.placement);A.scale.set(R.scale,R.scaleY,R.scale),A.quaternion.copy(R.quaternion),A.position.copy(R.offset)}const p=_.operation;if(p){const v=t.get(p.instanceId);e.updateWorldMatrix(!0,!0);const E=F=>{if(!F)return l(p.instanceId);const B=u(F);return e.worldToLocal(B.owner.localToWorld(B.position.clone()))},A=p.elapsed/p.duration,R=A*A*(3-2*A),I=E(p.from),M=E(p.to);e.add(v),v.position.lerpVectors(I,M,R),v.position.z+=Math.sin(A*Math.PI)*.5,v.rotation.set(0,0,0);const b=h(p.instanceId,!!p.from),w=h(p.instanceId,!!p.to),N=v.getObjectByName("visual");N.scale.setScalar(na.lerp(b.scale,w.scale,R)),N.scale.y=na.lerp(b.scaleY,w.scaleY,R),N.quaternion.slerpQuaternions(b.quaternion,w.quaternion,R),N.position.lerpVectors(b.offset,w.offset,R)}const y=JSON.stringify(Vn(_).map(v=>[v.key,v.position,v.rotation]));if(y!==o){for(const v of n)v.removeFromParent(),v.geometry.dispose(),v.material.dispose();n.length=0;for(const v of Vn(_)){const E=new Ee(new xi(v.kind==="board"?.7:.23,v.kind==="board"?.85:.23),new Rn({transparent:!0,opacity:.48,side:hn,depthWrite:!1})),A=u({ownerId:v.ownerId,slotId:v.id});A.owner.add(E),E.position.copy(A.position),E.rotation.copy(A.rotation),v.kind==="psu"||v.kind==="gpu-support"?(E.rotation.x=-Math.PI/2,E.position.y+=.008):E.position.z+=.12,E.userData.slotKey=v.key,E.userData.slotKind=v.kind,n.push(E)}o=y}const x=_.inventory.find(v=>v.instanceId===_.selectedInstanceId);for(const v of n){const A=!!x&&Ie(x.catalogId).type==="CPU"&&v.userData.slotKind==="cooler";v.scale.setScalar(A?.3:1),v.material.opacity=A?.15:.48,v.userData.ignoreSelection=A,v.visible=!!x&&x.location==="tray"&&!p,v.material.color.set(Yn(_,x?.instanceId??"",v.userData.slotKey)===null?"#80edb2":"#cb665e")}if((s!==_.selectedInstanceId||p||x?.location!=="tray")&&(f(),x?.location==="tray"&&!p)){r=new st;const v=t.get(x.instanceId).getObjectByName("visual").clone(!0),E=h(x.instanceId,!0);v.scale.set(E.scale,E.scaleY,E.scale),v.quaternion.copy(E.quaternion),v.position.copy(E.offset),v.traverse(A=>{A instanceof Ee&&(A.material=new Rn({color:"#85f5bc",transparent:!0,opacity:.23,depthWrite:!1}),A.castShadow=!1,A.receiveShadow=!1,A.raycast=()=>{})}),r.add(v),s=x.instanceId}g(),e.updateWorldMatrix(!0,!0)},dispose(){f();for(const _ of n)_.removeFromParent(),_.geometry.dispose(),_.material.dispose()}}}function i_(i,e,t){return e===0&&i<=5&&t<700}function r_(i,e,t){return e===2&&i<=5&&t<700}function s_(i,e,t,n,r,s=()=>{}){const o=new $h;let a=null;function c(_){const m=i.getBoundingClientRect();return t.updateWorldMatrix(!0,!0),e.updateWorldMatrix(!0,!1),o.setFromCamera(new le((_.clientX-m.left)/m.width*2-1,-(_.clientY-m.top)/m.height*2+1),e),o.intersectObject(t,!0).filter(p=>{let y=p.object;for(;y;){if(!y.visible||y.userData.ignoreSelection)return!1;y=y.parent}return!0})}function d(_){let m=_;for(;m;){if(m.userData.terminalKey)return{terminal:m.userData.terminalKey};if(m.userData.cableId)return{cable:m.userData.cableId};if(m.userData.slotKey)return{slot:m.userData.slotKey};if(m.userData.instanceId)return{part:m.userData.instanceId};m=m.parent}return{}}const l=_=>{if(s(null),!_.isPrimary||![0,2].includes(_.button)){a=null;return}a={id:_.pointerId,x:_.clientX,y:_.clientY,time:performance.now(),distance:0,button:_.button}},u=_=>{if(a&&(a.distance=Math.max(a.distance,Math.hypot(_.clientX-a.x,_.clientY-a.y))),!a&&!n.getState().operation){const m=c(_).map(p=>d(p.object)).find(p=>p.slot||p.part);r(m?.slot??null),s(m?.part??null,_.clientX,_.clientY)}},h=_=>{const m=a;if(a=null,!m||m.id!==_.pointerId||m.button!==_.button)return;const p=Math.max(m.distance,Math.hypot(_.clientX-m.x,_.clientY-m.y)),y=performance.now()-m.time,x=r_(p,m.button,y);if(!x&&!i_(p,m.button,y))return;const v=i.getBoundingClientRect();if(_.clientX<v.left||_.clientX>v.right||_.clientY<v.top||_.clientY>v.bottom)return;if(x){_.preventDefault(),r(null),s(null);const R=n.getState(),I=R.inventory.find(M=>M.instanceId===R.selectedInstanceId);R.operation||R.wiringMode||I?.location!=="installed"?n.cancel():n.remove();return}if(n.getState().operation)return;const E=c(_).map(R=>d(R.object));if(n.getState().wiringMode){const R=E.find(I=>I.terminal);R?.terminal&&n.chooseTerminal(R.terminal);return}const A=E.find(R=>R.slot||R.part);A?.slot?n.install(A.slot):A?.part&&n.select(A.part)},f=()=>{a=null,r(null),s(null)},g=_=>_.preventDefault();return i.addEventListener("contextmenu",g),i.addEventListener("pointerdown",l),i.addEventListener("pointermove",u),i.addEventListener("pointerup",h),i.addEventListener("pointercancel",f),i.addEventListener("pointerleave",f),{dispose(){i.removeEventListener("contextmenu",g),i.removeEventListener("pointerdown",l),i.removeEventListener("pointermove",u),i.removeEventListener("pointerup",h),i.removeEventListener("pointercancel",f),i.removeEventListener("pointerleave",f)}}}const ol={atx24:"#303943",eps:"#353942",pcie:"#343d45","sata-power":"#34383d","sata-data":"#663e39",fan:"#363a40",display:"#24292f"};function o_(i,e,t){if(i==="display")return[e,e.clone().add(new P(-.18,0,0)),new P(-2.12,e.y,.32),new P(-2.12,.16,-1.65),new P(-1.6,.16,-2.35),new P(2.5,.16,-2.35),new P(t.x,t.y,t.z-.15),t];if(i==="fan")return[e,e.clone().add(new P(-.1,.06,0)),new P(t.x,t.y,t.z+.1),t];const n=i==="eps"?-1.59:.32,r=-.607,s=i==="eps"?2.6:[1.04,1.66,2.3].reduce((d,l)=>Math.abs(l-t.y)<Math.abs(d-t.y)?l:d,1.04),o=e.y<.8?e.x+.24:.32,c=i==="atx24"||i==="eps"||i==="sata-data"?t.clone().add(new P(0,0,i==="atx24"||i==="eps"?.23:.12)):t.clone().add(new P(i==="pcie"?.2:.075,0,0));return i==="atx24"?[e,new P(e.x+.16,e.y,e.z),new P(o,e.y,r),new P(n,e.y,r),new P(n,2.3,r),new P(n,2.3,c.z),new P(t.x,2.3,c.z),c,t]:[e,new P(e.x+(e.y<.8?.16:.07),e.y,e.z),new P(o,e.y,r),new P(n,e.y,r),new P(n,s,r),new P(n,s,c.z),c,t].filter((d,l,u)=>l===0||d.distanceTo(u[l-1])>.005)}function a_(i){const e=new jl;let t=i[0];for(let n=1;n<i.length-1;n++){const r=i[n],s=Math.min(.055,r.distanceTo(i[n-1])*.3,r.distanceTo(i[n+1])*.3),o=r.clone().addScaledVector(i[n-1].clone().sub(r).normalize(),s),a=r.clone().addScaledVector(i[n+1].clone().sub(r).normalize(),s);e.add(new ia(t,o)),e.add(new Ia(o,r,a)),t=a}return e.add(new ia(t,i[i.length-1])),e}function c_(i){const e=new st;e.name="wiring",i.root.add(e);let t="";const n=()=>{e.traverse(r=>{r instanceof Ee&&(r.geometry.dispose(),r.material.dispose())}),e.clear()};return{sync(r){const s=JSON.stringify([r.cables,r.wiringMode,r.selectedTerminal,r.sidePanelInstalled,r.power,r.operation?.id,r.inventory.map(c=>c.placement)]);if(s===t)return;t=s,n(),i.root.updateWorldMatrix(!0,!0);const o=fi(r),a=c=>{const d=o.find(l=>l.key===c);return d.ownerId==="monitor"?new P(...d.position):i.root.worldToLocal(i.models.get(d.ownerId).localToWorld(new P(...d.position)))};for(const c of o){const d=r.inventory.find(u=>u.instanceId===c.ownerId);if(d&&Ie(d.catalogId).type==="Motherboard")continue;const l=new Ee(new _t(.025,c.kind==="atx24"?.12:.055,c.kind==="atx24"?.055:.045),new Je({color:"#151c22",roughness:.65}));l.position.copy(a(c.key)),l.name=`socket:${c.key}`,c.ownerId==="monitor"&&(l.rotation.y=Math.PI/2),e.add(l)}for(const c of r.cables){if(!o.some(_=>_.key===c.from)||!o.some(_=>_.key===c.to))continue;const d=a(c.from),l=a(c.to),u=o_(c.kind,d,l),h=a_(u),f=c.kind==="fan"?.007:c.kind==="atx24"?.021:.013,g=new Ee(new Bi(h,96,f,8,!1),new Je({color:ol[c.kind],roughness:.72}));g.userData.cableId=c.id,e.add(g);for(const[_,m]of[[d,u[1].clone().sub(d)],[l,u[u.length-2].clone().sub(l)]]){const p=_===l&&(c.kind==="atx24"||c.kind==="eps"),y=o.find(E=>E.key===(_===d?c.from:c.to)).ownerId,x=r.inventory.find(E=>E.instanceId===y),v=!!x&&Ie(x.catalogId).type==="PSU";{const E=new vn().setFromUnitVectors(new P(0,0,1),m.normalize()),A=c.kind==="fan"&&_===d?.45:1,R=(M,b,w,N=0)=>{const F=new Ee(M,new Je({color:w,metalness:N,roughness:N?.3:.7}));return F.scale.setScalar(A),F.position.copy(b.multiplyScalar(A).applyQuaternion(E).add(_)),F.quaternion.copy(E),F.name=`${c.kind}-plug-detail`,e.add(F),F},I=(M,b,w,N,F,B,G,H=0)=>R(new _t(M,b,w),new P(N,F,B),G,H);if(v){const M=I(.068,.06,.048,0,0,.014,"#1b242c");M.name="psu-cable-plug",I(.023,.008,.026,0,.032,.012,"#4b555e");const b=new Tt(.026,f+.002,.078,12);b.rotateX(Math.PI/2);const w=R(b,new P(0,0,.073),"#272f37");w.name="psu-cable-boot";for(let N=0;N<3;N++){const F=R(new gn(.024-N*.002,.002,6,12),new P(0,0,.046+N*.012),"#343d45");F.name="psu-boot-rib"}}else if(p){const M=c.kind==="atx24"?2:4,b=c.kind==="atx24"?12:2,w=.022,N=M*w+.012,F=b*w+.012;I(N,F,.068,0,0,.024,"#1b242c"),I(.01,F*.32,.042,N/2+.006,0,.018,"#59616a");for(let B=0;B<b;B++)for(let G=0;G<M;G++){const H=(G-(M-1)/2)*w,j=(B-(b-1)/2)*w;I(.016,.016,.018,H,j,-.014,"#39414a");const W=new ls([new P(H,j,.058),new P(H*.85,j*.85,.088),new P(H*.25,j*.25,.15),new P(0,0,.18)]),ue=R(new Bi(W,12,.004,6,!1),new P,"#303943");ue.name=`${c.kind}-plug-wire`}}else if(c.kind==="fan"||c.kind==="sata-data"||c.kind==="sata-power"||c.kind==="atx24"||c.kind==="eps"){const M=c.kind==="fan",b=c.kind==="sata-data"||c.kind==="sata-power",w=M?4:c.kind==="sata-data"?7:c.kind==="sata-power"?15:c.kind==="atx24"?12:8,N=b||M?1:2,F=w/N,B=M?.022:b?.012:.014,G=F*B+.012,H=M?.034:b?.024:N*B+.012,j=I(G,H,.054,0,0,.018,M?"#d1d2c7":"#202932");j.name=`${c.kind}-full-plug`,b?I(.008,H*.65,.025,-G*.3,-H*.15,-.011,"#414a51"):I(.01,H*.32,.03,G/2+.005,0,.015,"#667078");for(let W=0;W<w;W++){const ue=(W%F-(F-1)/2)*B,ge=(Math.floor(W/F)-(N-1)/2)*B;I(B*.65,.009,.014,ue,ge,-.014,"#414a51");const Se=new ls([new P(ue,ge,.046),new P(ue*.8,ge*.8,.071),new P(0,0,.1)]),ke=R(new Bi(Se,8,M?.003:.0025,5,!1),new P,ol[c.kind]);ke.name=`${c.kind}-bundle-wire`}}else if(c.kind==="display"){const M=new jt;M.moveTo(-.065,-.024),M.lineTo(.065,-.024),M.lineTo(.065,.012),M.lineTo(.05,.024),M.lineTo(-.065,.024),M.closePath(),R(new nn(M,{depth:.035,bevelEnabled:!1}),new P(0,0,-.008),"#adb6bd",.85),I(.15,.065,.095,0,0,.074,"#20262c"),I(.064,.009,.037,0,.036,.069,"#5b646d");for(const b of[-.064,.064])for(let w=0;w<4;w++)I(.009,.045,.005,b,0,.048+w*.016,"#3c454e")}else{I(.22,.12,.075,0,0,.03,"#141c23");for(let M=0;M<2;M++)for(let b=0;b<4;b++){const w=(b-1.5)*.048,N=(M-.5)*.05;I(.034,.035,.014,w,N,-.014,"#39414a"),I(.014,.016,.009,w,N,-.023,"#bd9e54",.7);const F=new ls([new P(w,N,.065),new P(w*.8,N*.8,.105),new P(0,0,.14)]);R(new Bi(F,10,.006,5,!1),new P,"#252e37")}I(.055,.016,.075,0,.068,.028,"#59616a")}for(let M=0;M<(v?0:5);M++){const b=R(new gn(.017-M*.001,.003,4,10),new P(0,0,.125+M*.009),"#343d45");b.name="plug-strain-relief"}continue}}}if(!(!r.wiringMode||r.operation||r.sidePanelInstalled||yt(r)))for(const c of o){if(!(r.selectedTerminal?di(r,r.selectedTerminal,c.key)===null:c.direction==="source"&&!r.cables.some(u=>u.from===c.key))&&c.key!==r.selectedTerminal)continue;const l=new Ee(new Es(.055,12,8),new Rn({color:c.key===r.selectedTerminal?"#ffdc71":"#8cffb9",depthTest:!1}));l.renderOrder=20,l.position.copy(a(c.key)),l.userData.terminalKey=c.key,e.add(l)}},dispose(){n(),e.removeFromParent()}}}function l_(){const i=new st;i.position.set(2.5,.1,-2.05);const e=new Je({color:"#202b32",roughness:.65}),t=(l,u,h,f)=>{const g=new Ee(new _t(l,u,h),e);g.position.y=f,i.add(g)};t(.75,.07,.45,.04),t(.09,.7,.08,.38),t(1.8,1.08,.1,1.05);const n=document.createElement("canvas");n.width=768,n.height=448;const r=n.getContext("2d"),s=new lh(n);s.colorSpace=Ot;const o=new Ee(new xi(1.68,.98),new Rn({map:s}));o.position.set(0,1.05,.056),i.add(o);const a=new Rn({color:"#38423c"}),c=new Ee(new Es(.025,10,6),a);c.position.set(.79,.55,.06),i.add(c);let d="";return{root:i,sync(l){const u=l.cables.some(f=>f.kind==="display"),h=JSON.stringify([l.power,u,l.inventory.map(f=>f.placement)]);if(h!==d){if(d=h,r.fillStyle="#0b141c",r.fillRect(0,0,768,448),r.fillStyle="#91efbc",r.font="bold 30px sans-serif",r.fillText("CTC / SIMULATED BOOT",28,48),r.font="24px sans-serif",r.fillText(l.power,28,90),a.color.set(l.power==="RUNNING"?"#75ff9b":l.power==="ERROR"?"#ff765c":"#38423c"),!u)r.font="24px sans-serif",r.fillText("NO SIGNAL / Connect GPU DisplayPort",28,150);else if(l.power==="RUNNING"||l.power==="BOOTING"){r.font="19px sans-serif";let f=135;for(const g of l.inventory.filter(_=>_.location==="installed")){const _=Ie(g.catalogId);if(_.type==="GPU Support")continue;const m="capacityGB"in _?` / ${_.capacityGB} GB`:"wattage"in _?` / ${_.wattage} W`:"cores"in _?` / ${_.cores} cores`:"vramGB"in _?` / ${_.vramGB} GB VRAM`:"";r.fillText(_.name+m,28,f),f+=30}}else r.font="21px sans-serif",r.fillText(l.power==="ERROR"?"Check Power / cables panel for errors.":l.power==="CHECKING"?"Checking hardware and required cables...":"Press Power to start.",28,150);s.needsUpdate=!0}},dispose(){s.dispose(),o.geometry.dispose(),o.material.dispose(),c.geometry.dispose(),a.dispose(),i.children.forEach(l=>{l instanceof Ee&&l.geometry.dispose()}),e.dispose(),i.removeFromParent()}}}function u_(i,e){const t=document.createElement("aside");t.className="hover-specs part-details",t.setAttribute("role","tooltip"),t.hidden=!0,i.append(t);let n=null;const r=()=>{t.hidden=!0,n=null},s=(c,d=0,l=0)=>{const u=e.getState().inventory.find(g=>g.instanceId===c);if(!u||e.getState().operation){r();return}if(n!==c){const g=Ie(u.catalogId);t.innerHTML=`<h3>${g.name}</h3>${_l(g)}`,n=c}t.hidden=!1;const h=t.offsetWidth,f=t.offsetHeight;t.style.left=`${Math.max(8,Math.min(d+18+h>innerWidth?d-h-18:d+18,innerWidth-h-8))}px`,t.style.top=`${Math.max(8,Math.min(l+16,innerHeight-f-8))}px`},o=c=>{const d=c.target.closest("[data-instance-id]");d?s(d.dataset.instanceId??null,c.clientX,c.clientY):c.target instanceof HTMLCanvasElement||r()};i.addEventListener("pointermove",o),i.addEventListener("pointerleave",r),i.addEventListener("pointerdown",r),i.addEventListener("wheel",r,{passive:!0}),window.addEventListener("keydown",r),window.addEventListener("blur",r);const a=e.subscribe(()=>r());return{show:s,dispose(){a(),i.removeEventListener("pointermove",o),i.removeEventListener("pointerleave",r),i.removeEventListener("pointerdown",r),i.removeEventListener("wheel",r),window.removeEventListener("keydown",r),window.removeEventListener("blur",r),t.remove()}}}function d_(i,e=new Audio){const t=document.createElement("div");t.className="tutorial-voice";const n=document.createElement("button");n.type="button",n.textContent="ฟังซ้ำ";const r=document.createElement("button");r.type="button",r.textContent="ปิดเสียงบรรยาย",r.setAttribute("aria-pressed","false");const s=document.createElement("small");s.setAttribute("role","status"),t.append(n,r,s),i.append(t),e.preload="auto",e.volume=.85;let o=!1,a=!1,c=!1,d=null,l=null,u=0;const h=()=>{u++,e.pause(),e.currentTime=0,s.textContent=""},f=()=>{if(h(),!o||a||!d||c)return;const m=u,p=new URL(`audio/tutorial-th/${d}.mp3`,document.baseURI).href;e.src!==p&&(e.src=p),s.textContent="กำลังโหลดเสียง…",e.play().then(()=>{m===u&&!c&&(s.textContent="กำลังบรรยายภาษาไทย")}).catch(y=>{m!==u||c||(s.textContent=y instanceof DOMException&&y.name==="NotAllowedError"?"กด “ฟังซ้ำ” เพื่ออนุญาตให้เล่นเสียง":"เล่นไฟล์เสียงไม่ได้ กด “ฟังซ้ำ” เพื่อลองอีกครั้ง")})},g=()=>{s.textContent=""},_=()=>{o&&!a&&!c&&(s.textContent="โหลดเสียงไม่สำเร็จ กด “ฟังซ้ำ” เพื่อลองใหม่")};return e.addEventListener("ended",g),e.addEventListener("error",_),n.onclick=()=>{if(a){s.textContent="กด “เปิดเสียงบรรยาย” ก่อนฟังซ้ำ";return}f()},r.onclick=()=>{a=!a,r.textContent=a?"เปิดเสียงบรรยาย":"ปิดเสียงบรรยาย",r.setAttribute("aria-pressed",String(a)),a?h():f()},{start(){o=!0,l=null},update(m){d=m,!(!o||m===l)&&(l=m,f())},suspend(){l!==null&&(l=null,h())},stop(){o=!1,l=null,h()},dispose(){c=!0,o=!1,h(),e.removeEventListener("ended",g),e.removeEventListener("error",_),e.removeAttribute("src"),e.load(),t.remove()}}}function h_(i,e,t){const n=new st;n.name="tutorial-arrow",n.visible=!1;const r=new Rn({color:"#ffdf78",depthTest:!1}),s=new Ee(new Tt(.022,.022,.25,12),r);s.position.y=.3;const o=new Ee(new Ra(.075,.14,20),r);o.rotation.z=Math.PI,o.position.y=.105,n.add(s,o),n.traverse(v=>{v.renderOrder=100,v.raycast=()=>{}});const a=document.createElement("section");a.className="tutorial-guide",a.hidden=!0,a.innerHTML='<strong></strong><p role="status"></p><button type="button">หยุดสอน / ข้าม</button>',i.append(a);let c=!1,d=()=>null;const l=d_(a),u=document.createElement("div");u.className="tutorial-ui-arrow",u.textContent="➜",u.hidden=!0,u.setAttribute("aria-hidden","true"),i.append(u);let h=null,f=null;const g=v=>()=>{const E=i.querySelector(".wiring-panel");return E?E.open?v?Array.from(E.querySelectorAll("[data-tutorial-sink]")).find(A=>A.dataset.tutorialSink===v)??null:E.querySelector('[data-tutorial-action="power"]'):E.querySelector("summary"):null},_=["Motherboard","CPU","CPU Cooler","RAM","GPU","SSD","PSU"],m=v=>()=>{const E=t.models.get(v);return E?new Cn().setFromObject(E.getObjectByName("visual")).getCenter(new P):null},p=()=>{const v=e.getState();if(n.visible=!1,d=()=>null,h=null,a.hidden=!c||v.tutorial.skipped,a.hidden){l.stop();return}let E=_.findIndex(I=>!v.inventory.some(M=>M.location==="installed"&&Ie(M.catalogId).type===I));E<0&&(E=$n(v).length?7:v.power==="RUNNING"?9:8),a.querySelector("strong").textContent=E<9?`ขั้น ${E+1}/9 · ${Gn[E][0]}`:"✓ สอนครบแล้ว · เปิดเครื่องสำเร็จ";let A=E<9?Gn[E][1]:"พร้อมรับงานลูกค้าและทดสอบ Benchmark ได้แล้ว",R=["board","cpu","cooler","ram","gpu","ssd","psu","check","power","complete"][E];if(E<7){const I={...v,sidePanelInstalled:!1},M=Vn(v),b=v.inventory.filter(F=>F.location==="tray"&&Ie(F.catalogId).type===_[E]);E===6&&b.sort((F,B)=>{const G=Ie(F.catalogId),H=Ie(B.catalogId);return(H.type==="PSU"?H.wattage:0)-(G.type==="PSU"?G.wattage:0)});const w=b.filter(F=>M.some(B=>Yn(I,F.instanceId,B.key)===null)),N=w.find(F=>F.instanceId===v.selectedInstanceId)??w[0];if(N)if(v.selectedInstanceId===N.instanceId){const F=M.find(B=>Yn(I,N.instanceId,B.key)===null);d=()=>(F.ownerId==="case"?t.root:t.models.get(F.ownerId))?.localToWorld(new P(...F.position))??null,A=v.sidePanelInstalled?"เปิดเมนูเคส แล้วถอดฝาข้างก่อนติดตั้ง":`คลิกช่องสีเขียวที่ลูกศรชี้ เพื่อใส่ ${Ie(N.catalogId).name}`,R=v.sidePanelInstalled?"open-case":"slot"}else t.models.has(N.instanceId)?(d=m(N.instanceId),A=`คลิก ${Ie(N.catalogId).name} ที่ลูกศรชี้ แล้วเลือกช่องติดตั้งสีเขียว`):(R=_[E]==="GPU"?"catalog":"inventory",h=()=>{if(!e.getState().inventoryOpen)return i.querySelector(_[E]==="GPU"?".gpu-catalog-toggle":".inventory-toggle");const F=i.querySelector(`[data-instance-id="${N.instanceId}"]`);return F&&!F.hidden?F:i.querySelector(".inventory-filter")},A=`เปิด${_[E]==="GPU"?"เมนูเลือกการ์ดจอ":"คลังชิ้นส่วน แล้วเลือกหมวด "+_[E]} กด ${Ie(N.catalogId).name} เพื่อนำมาวางบนถาด แล้วใส่ช่องสีเขียว`);else R="missing",A=v.operation?"รอชิ้นส่วนติดตั้งให้เสร็จ":`ยังไม่มี ${_[E]} ที่ติดตั้งได้ เปิดร้านค้าซื้อรุ่นที่เข้ากันได้ หรือเปลี่ยนเคสให้รองรับบอร์ด`}else if(E===7){const I=fi(v).find(M=>M.direction==="sink"&&M.kind!=="display"&&!v.cables.some(b=>b.to===M.key));I&&I.kind!=="display"&&(R=v.sidePanelInstalled?"open-case":`cable-${I.kind}`),I?(h=g(I.key),A=v.sidePanelInstalled?"ถอดฝาข้างในเมนูเคสก่อน แล้วกดปุ่มต่อสายที่ลูกศรชี้":`เปิดเมนู “ต่อสาย / เปิดเครื่อง” แล้วกด “＋ ต่อสายนี้” ที่ลูกศร 2D ชี้ เพื่อเชื่อม ${I.name}`):A=$n(v)[0]??A}else if(E===8){const I=v.power==="CHECKING"||v.power==="BOOTING";R=I?"booting":"power",I||(h=g()),A=I?"กำลังเปิดเครื่อง กรุณารอ…":"สายจำเป็นครบแล้ว กด “เปิดเครื่อง” ที่ลูกศร 2D ชี้ในเมนูด้านซ้าย"}a.querySelector("p").textContent=A,v.operation?l.suspend():l.update(R)},y=()=>{c=!0,l.start(),e.setTutorial(!1),p()};a.querySelector("button").onclick=()=>{c=!1,e.setTutorial(!0),p()},i.addEventListener("start-tutorial",y);const x=e.subscribe(p);return{root:n,update(v){const E=c&&!e.getState().tutorial.skipped&&!e.getState().operation,A=E?d():null;n.visible=!!A,A&&n.position.copy(A).add(new P(0,.12+Math.sin(v*.004)*.035,0));const R=E?h?.()??null:null;if(R!==f&&(f?.classList.remove("tutorial-ui-target"),f=R,R&&(R.classList.add("tutorial-ui-target"),R.scrollIntoView({block:"nearest",inline:"nearest"}))),u.hidden=!R,R){const I=R.getBoundingClientRect();let M=Math.max(0,I.left),b=Math.min(innerWidth,I.right),w=Math.max(0,I.top),N=Math.min(innerHeight,I.bottom);for(let B=R.parentElement;B;B=B.parentElement){const G=getComputedStyle(B),H=B.getBoundingClientRect();/auto|scroll|hidden|clip/.test(G.overflowX)&&(M=Math.max(M,H.left),b=Math.min(b,H.left+B.clientWidth)),/auto|scroll|hidden|clip/.test(G.overflowY)&&(w=Math.max(w,H.top),N=Math.min(N,H.top+B.clientHeight))}u.hidden=b<=M||N<=w;const F=b+50<=innerWidth;u.style.transform=F?"rotate(180deg)":"none",u.style.left=`${F?b+6:Math.max(0,M-50)}px`,u.style.top=`${Math.max(0,Math.min(innerHeight-48,(w+N)/2-24))}px`}},dispose(){l.dispose(),x(),i.removeEventListener("start-tutorial",y),f?.classList.remove("tutorial-ui-target"),u.remove(),a.remove(),n.removeFromParent(),s.geometry.dispose(),o.geometry.dispose(),r.dispose()}}}function f_(i,e,t){const n=new Dg({antialias:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(devicePixelRatio,Hn.pixelRatioLimit)),n.shadowMap.enabled=!0,n.shadowMap.type=xl,n.toneMapping=Sl,n.toneMappingExposure=1.05,i.prepend(n.domElement),n.domElement.setAttribute("aria-label","ฉากโต๊ะช่างและเคสคอมพิวเตอร์ 3D ใช้เมาส์ลากเพื่อหมุน เลื่อนล้อเพื่อซูม");const r=new ih;r.background=new Ke("#19252e"),r.fog=new wa("#19252e",45,100);const s=new Vt(40,1,.1,160);s.position.fromArray(Hn.camera.position);const o=Yg(s,n.domElement);r.add(new Hh("#e8f4ff","#6a6455",1.9));const a=new Rc("#fff0d7",2.7);a.position.set(-3,7,5),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),a.shadow.camera.left=-5,a.shadow.camera.right=5,a.shadow.camera.top=5,a.shadow.camera.bottom=-5,a.shadow.normalBias=.015,a.shadow.bias=-1e-4,r.add(a);const c=new Rc("#a6d7ff",1.8);c.position.set(4,4,-3),r.add(c);const d=new Wh("#d6fff0",9,8);d.position.set(0,2.3,3),r.add(d);let l,u="";function h(w){const N=new Set;w.traverse(B=>{(B instanceof Ee||B instanceof Hl)&&(B.geometry.dispose(),(Array.isArray(B.material)?B.material:[B.material]).forEach(G=>N.add(G)))});const F=new Set;N.forEach(B=>{"map"in B&&B.map instanceof At&&F.add(B.map),B.dispose()}),F.forEach(B=>B.dispose()),w.removeFromParent()}const f=Qg(t.getState());r.add(f.root);const g=n_(f),_=c_(f),m=l_();r.add(m.root);const p=t.subscribe(w=>{const N=w.inventory.filter(j=>j.location==="installed").map(j=>Ie(j.catalogId)).find(j=>j.type==="Motherboard"),F=N?.type==="Motherboard"?N.formFactor:"ATX",B=Wi(w.inventory),G=[w.caseId,w.finishId,w.patternId,w.sidePanelInstalled,w.backPanelInstalled,w.rearPanelInstalled,w.sidePanelStyle,F,JSON.stringify(B.sections)].join("/");G!==u&&(l&&h(l),l=Lg(w.caseId,w.finishId,w.patternId,w.sidePanelInstalled,w.backPanelInstalled,w.rearPanelInstalled,w.sidePanelStyle,F,B),r.add(l),u=G),g.sync(w),f.sync(w),_.sync(w),m.sync(w);const H=l.getObjectByName("case-power-indicator");H&&(H.material.color.set(w.power==="RUNNING"?"#80ffc1":w.power==="ERROR"?"#ff6f55":"#455454"),H.material.emissive.copy(H.material.color),H.material.emissiveIntensity=w.power==="RUNNING"?1.5:w.power==="ERROR"?.6:0)}),y=u_(i,t),x=document.createElement("button");x.className="tray-navigation",x.textContent="มองถาดอุปกรณ์",x.type="button",x.onclick=()=>o.focusAt(new P(2.65,.4,.5),6),i.querySelector(".control-dock").prepend(x);const v=h_(i,t,f);r.add(v.root);const E=s_(n.domElement,s,f.root,t,g.hover,y.show),A=new Ee(new xi(200,200),new Je({color:"#29363b",roughness:.92}));A.rotation.x=-Math.PI/2,A.position.y=-2.08,A.receiveShadow=!0,r.add(A);function R(){s.aspect=i.clientWidth/Math.max(i.clientHeight,1),s.updateProjectionMatrix(),n.setPixelRatio(Math.min(devicePixelRatio,Hn.pixelRatioLimit)),n.setSize(i.clientWidth,i.clientHeight)}const I=new ResizeObserver(R);I.observe(i),R();const M=w=>{w.preventDefault(),n.setAnimationLoop(null),e("การเชื่อมต่อกับกราฟิกหยุดทำงาน กรุณากด “ลองใหม่” เพื่อโหลดฉากอีกครั้ง")};n.domElement.addEventListener("webglcontextlost",M);let b=performance.now();return n.setAnimationLoop(w=>{const N=Math.min(Math.max((w-b)/1e3,0),.05);if(b=w,t.tick(N),t.getState().power==="RUNNING")for(const F of t.getState().inventory.filter(B=>B.location==="installed"))f.models.get(F.instanceId).traverse(B=>{B.name==="fan-rotor"&&(B.rotation.y+=N*18)});v.update(w),o.update(),n.render(r,s)}),{resetCamera:o.reset,topView:o.topView,dispose(){p(),y.dispose(),x.remove(),v.dispose(),E.dispose(),g.dispose(),_.dispose(),m.dispose(),I.disconnect(),o.dispose(),n.setAnimationLoop(null),n.domElement.removeEventListener("webglcontextlost",M),r.traverse(w=>{w instanceof Ee&&(w.geometry.dispose(),(Array.isArray(w.material)?w.material:[w.material]).forEach(F=>{F instanceof Je&&F.map?.dispose(),F.dispose()}))}),n.dispose(),n.domElement.remove()}}}function p_(i,e){const t=document.createElement("section");t.className="assembly-hud",t.innerHTML='<p class="assembly-message" role="status"></p><strong class="assembly-selected"></strong><div class="assembly-actions"><button class="remove-part">ถอดกลับถาด [เมาส์ขวา]</button><button class="cancel-part">ยกเลิก [เมาส์ขวา]</button></div><details class="slot-options"><summary>ตำแหน่งติดตั้งและเหตุผล</summary><div class="slot-buttons"></div></details>',i.append(t);const n=document.createElement("div");n.className="selected-cables",t.append(n);const r=t.querySelector(".remove-part"),s=t.querySelector(".cancel-part");r.onclick=()=>e.remove(),s.onclick=()=>e.cancel();let o="";const a=e.subscribe(c=>{const d=JSON.stringify([c.message,c.selectedInstanceId,c.operation?.id,c.inventory.map(f=>f.placement),c.cables,c.power,c.sidePanelInstalled]);if(o===d)return;o=d,t.querySelector(".assembly-message").textContent=c.message;const l=gl(c);if(t.querySelector(".assembly-selected").textContent=l?l.part.name:"",r.hidden=l?.instance.location!=="installed",r.disabled=!!c.operation,r.title=l?hl(c,l.instance.instanceId)??"ถอดกลับช่องเดิมบนถาด":"",n.replaceChildren(),l){const f=l.instance.instanceId,g=c.cables.filter(_=>_.from.startsWith(f+"/")||_.to.startsWith(f+"/"));if(g.length){const _=document.createElement("p");_.textContent=`ก่อนถอดชิ้นส่วนนี้ ให้ถอดสาย ${g.length} เส้นด้านล่าง`,n.append(_);for(const m of g){const p=document.createElement("button");p.textContent=`ถอด ${fo[m.kind]}`,p.disabled=yt(c)||!!c.operation||c.sidePanelInstalled,p.onclick=()=>e.disconnectCable(m.id),n.append(p)}}}s.hidden=!l&&!c.operation,s.textContent=l?.instance.location==="installed"&&!c.operation?"ยกเลิกการเลือก [Esc]":"ยกเลิก [เมาส์ขวา]";const u=t.querySelector(".slot-options");u.hidden=!l||l.instance.location!=="tray"||!!c.operation;const h=t.querySelector(".slot-buttons");if(h.replaceChildren(),l&&l.instance.location==="tray"&&!c.operation)for(const f of Vn(c)){const g=Yn(c,l.instance.instanceId,f.key),_=document.createElement("button");_.textContent=`${g?"×":"✓"} ${f.key}${g?` — ${g}`:""}`,_.onclick=()=>e.install(f.key),h.append(_)}});return{dispose(){a(),t.remove()}}}function m_(i,e){const t=document.createElement("details");t.className="machine-status",t.innerHTML='<summary></summary><p class="power-budget"></p><ul></ul><small>กฎจำลองของเกม: (ภาระอุปกรณ์ + 50 W) × 1.25 ปัดขึ้น · ต้องมีสายที่จำเป็นครบ</small>',i.append(t);let n="";const r=e.subscribe(s=>{const o=JSON.stringify([s.caseId,s.cables,s.inventory.map(l=>l.placement)]);if(o===n)return;n=o;const a=ha(s.inventory.filter(l=>l.location==="installed").map(l=>Ie(l.catalogId)),qn(s.caseId)),c=$n(s);t.querySelector("summary").textContent=c.length===0?"✓ สถานะเครื่อง · พร้อมเปิด Power":`สถานะเครื่อง · ต้องแก้ ${c.length} รายการ`,t.querySelector(".power-budget").textContent=`PSU ${a.availableWatts} W / ต้องการ ${a.requiredWatts} W ตามชิ้นส่วนที่ติดตั้ง`;const d=t.querySelector("ul");d.replaceChildren();for(const l of c){const u=document.createElement("li");u.textContent=l,d.append(u)}});return{dispose(){r(),t.remove()}}}function g_(i,e){const t=document.createElement("details");t.className="wiring-panel",t.innerHTML='<summary>Power / สาย</summary><p>กฎจำลองของเกม: ต้องมีอุปกรณ์หลักและสายที่จำเป็นครบ · M.2 ไม่ใช้สาย SATA</p><div class="power-actions"></div><p class="wire-state" role="status"></p><div class="wire-ports"></div><div class="wire-cables"></div><ul class="power-errors"></ul>',i.append(t);const n=(h,f,g)=>{const _=document.createElement("button");return _.textContent=h,_.onclick=f,g.append(_),_},r=t.querySelector(".power-actions"),s=t.querySelector(".power-errors");r.before(s);const o=n("⏻ เปิดเครื่อง",()=>e.pressPower(),r),a=n("ปิดเครื่องเพื่อแก้ไข",()=>e.powerOff(),r),c=n("เลือกหัวสายบนโมเดล",()=>e.toggleWiring(),r);o.dataset.tutorialAction="power";const d=n("ยกเลิกหัวสายที่เลือก",()=>e.cancel(),r);t.addEventListener("toggle",()=>{if(t.open){const h=i.querySelector(".machine-status");h&&(h.open=!1)}});let l="";const u=e.subscribe(h=>{const f=JSON.stringify([h.power,h.powerErrors,h.cables,h.selectedTerminal,h.wiringMode,h.operation?.id,h.sidePanelInstalled,h.inventory.map(E=>E.placement)]);if(f===l)return;l=f;const g=fi(h),_=g.filter(E=>E.direction==="sink"&&!h.cables.some(A=>A.to===E.key));t.querySelector("summary").textContent=`ต่อสาย / เปิดเครื่อง · ${wu[h.power]}`,o.disabled=!!h.operation||yt(h),a.disabled=h.power==="OFF",c.disabled=!!h.operation||yt(h),c.textContent=h.wiringMode?"หยุดเลือกหัวสายบนโมเดล":"เลือกหัวสายบนโมเดล",d.hidden=!h.selectedTerminal,t.querySelector(".wire-state").textContent=h.sidePanelInstalled?"ถอดฝาข้างก่อนต่อ/ถอดสาย":h.selectedTerminal?"เลือกปลายทางสีเขียว หรือกดคู่หัวต่อด้านล่าง":"กดคู่หัวต่อเพื่อต่อสาย · DisplayPort คือสายภาพ GPU → จอ ส่วน GPU power คือไฟจาก PSU · ถอดด้วยปุ่มถอด";const m=t.querySelector(".wire-ports");m.replaceChildren();const p=document.createElement("h3");p.textContent=_.length?`ยังไม่ได้ต่อ ${_.length} เส้น`:"สายครบแล้ว",m.append(p);for(const E of _){const A=g.find(M=>M.direction==="source"&&M.kind===E.kind&&!h.cables.some(b=>b.from===M.key)),R=document.createElement("div");R.className="wire-task",m.append(R);const I=document.createElement("span");if(I.textContent=fo[E.kind],R.append(I),A){const M=n("＋ ต่อสายนี้",()=>e.connectCable(A.key,E.key),R);M.dataset.tutorialSink=E.key,M.disabled=!!di(h,A.key,E.key),M.title=di(h,A.key,E.key)??"ต่อสายและจัดเก็บตามเส้นทางในเคส"}else{const M=document.createElement("p");M.textContent="ติดตั้งอุปกรณ์ต้นทางก่อน (PSU / cooler / SATA SSD)",R.append(M)}}if(!_.length){const E=document.createElement("p");E.textContent=g.length?"✓ สายของอุปกรณ์ที่ติดตั้งครบแล้ว":"ติดตั้งอุปกรณ์ก่อน แล้วคู่หัวต่อจะแสดงที่นี่",m.append(E)}if(h.wiringMode)for(const E of g)(h.selectedTerminal?di(h,h.selectedTerminal,E.key)===null:E.direction==="source"&&!h.cables.some(R=>R.from===E.key))&&(n(E.name,()=>e.chooseTerminal(E.key),m).disabled=h.sidePanelInstalled||!!h.operation||yt(h));const y=t.querySelector(".wire-cables");if(y.replaceChildren(),h.cables.length){const E=document.createElement("h3");E.textContent=`ต่อแล้ว ${h.cables.length} เส้น · ถอดได้ที่นี่`,y.append(E)}for(const E of h.cables){const A=document.createElement("div");A.className="connected-wire";const R=document.createElement("span");R.textContent=`✓ ${fo[E.kind]}`,A.append(R),n("ถอดสาย",()=>e.disconnectCable(E.id),A).disabled=yt(h)||!!h.operation||h.sidePanelInstalled,y.append(A)}const x=t.querySelector(".power-errors");x.replaceChildren();const v=$n(h);x.toggleAttribute("hidden",v.length===0);for(const E of v){const A=document.createElement("li");A.textContent=E,x.append(A)}});return{dispose(){u(),t.remove()}}}function __(i,e){const t=document.createElement("button");t.className="jobs-toggle",t.textContent="งาน / ร้านค้า / Benchmark",t.setAttribute("aria-expanded","false");const n=document.createElement("aside");n.className="jobs-panel",n.hidden=!0,n.id="jobs-panel",t.setAttribute("aria-controls",n.id),n.innerHTML='<div class="inventory-heading"><h2>งานลูกค้า</h2><button class="close-jobs">✕</button></div><p class="job-wallet" role="status"></p><p class="job-message" role="status"></p><div class="job-list"></div><section class="job-active"></section><section class="benchmark-result" aria-live="polite"></section><div class="job-actions"></div><details class="job-shop"><summary>ร้านชิ้นส่วน</summary><div class="shop-items"></div></details><details class="job-returns"><summary>คืนชิ้นส่วนบนถาด</summary><div class="return-items"></div></details><p class="job-rules">รับงานจะเริ่มโต๊ะว่าง ชิ้นส่วนทดลองไม่ใช้ในงาน · เคสและสายเป็นอุปกรณ์ที่ร้านจัดให้ ไม่หักงบ · ส่งงานแล้วคืนของบนถาดและงบเหลือให้ลูกค้า รางวัลเข้ากระเป๋าแยก · ยังไม่บันทึกเมื่อรีโหลด</p>',n.querySelector(".job-rules").textContent="รับงานจะเริ่มโต๊ะว่าง · เคสและสายไม่หักงบ · ส่งงานแล้วคืนของบนถาดและงบเหลือให้ลูกค้า รางวัลแยกจากงบงาน · บันทึกอัตโนมัติในเบราว์เซอร์นี้ หลังโหลดต้องเปิดเครื่องและทดสอบคะแนนใหม่",i.append(t,n),t.onclick=()=>{n.hidden=!n.hidden,t.setAttribute("aria-expanded",String(!n.hidden)),n.hidden||e.toggle(!1)},n.querySelector(".close-jobs").onclick=()=>{n.hidden=!0,t.setAttribute("aria-expanded","false"),t.focus()};const r=(c,d,l,u=!1)=>{const h=document.createElement("button");return h.textContent=c,h.onclick=d,h.disabled=u,l.append(h),h};let s="";const o=e.subscribe(c=>{c.inventoryOpen&&(n.hidden=!0,t.setAttribute("aria-expanded","false"));const d=JSON.stringify([c.activeJobId,c.jobBudget,c.rewardMoney,c.completedJobs,c.benchmark,c.power,c.operation?.id,c.inventory,c.cables,c.lastDelivery,c.message]);if(d===s)return;s=d;const l=hi(c.activeJobId??"");n.querySelector(".job-wallet").textContent=`งบงานคงเหลือ ${c.jobBudget.toLocaleString()} cr · รางวัลสะสม ${c.rewardMoney.toLocaleString()} cr`,n.querySelector(".job-message").textContent=c.message,t.textContent=`งาน / ซื้อของ / ทดสอบ (${c.completedJobs.length}/3)`;const u=n.querySelector(".job-list");if(u.replaceChildren(),!l)for(const y of ds){const x=document.createElement("article");x.innerHTML=`<strong>${y.name}</strong><p>${y.description}<br>งบ ${y.budget.toLocaleString()} cr · รางวัล ${y.reward.toLocaleString()} cr<br>คะแนน ≥ ${y.minScore} · RAM ≥ ${y.minRamGB} GB · SSD รวม ≥ ${y.minStorageGB} GB</p>`,r(c.completedJobs.includes(y.id)?"ส่งสำเร็จแล้ว":"รับงานและเริ่มโต๊ะว่าง",()=>e.acceptJob(y.id),x,c.completedJobs.includes(y.id)||!!c.operation||yt(c)),u.append(x)}if(c.completedJobs.length===ds.length){const y=document.createElement("p");y.textContent="✓ จบครบทั้ง 3 งานแล้ว!",u.prepend(y)}const h=n.querySelector(".job-active");if(h.replaceChildren(),l){const y=document.createElement("h3");y.textContent=l.name,h.append(y);const x=document.createElement("ul");for(const A of hs(c)){const R=document.createElement("li");R.textContent=`${A.passed?"✓":"○"} ${A.label}`,x.append(R)}h.append(x);const v=document.createElement("details");v.innerHTML="<summary>ดูชุดแนะนำที่ทำงานนี้สำเร็จได้</summary>";const E=document.createElement("p");E.textContent=l.referenceParts.map(A=>Ie(A).name).join(" + "),v.append(E),h.append(v)}else if(c.lastDelivery){const y=document.createElement("p");y.textContent=`ส่งสำเร็จ: คะแนน ${c.lastDelivery.score} · ค่าชิ้นส่วนส่งมอบ ${c.lastDelivery.cost} cr · รับรางวัล ${c.lastDelivery.reward} cr · คืนของเหลือ ${c.lastDelivery.returnedParts} ชิ้น`,h.append(y)}const f=n.querySelector(".benchmark-result"),g=c.benchmark&&c.benchmark.fingerprint===fa(c);f.textContent=g?`คะแนนจำลองของเกม ${c.benchmark.score} · ${l?hs(c).every(y=>y.passed)?"ผ่านข้อกำหนดงาน":"ไม่ผ่านข้อกำหนดงาน":"ผ่านการทดสอบเครื่อง"} · ภาระไฟประมาณ ${c.benchmark.estimatedWatts} W · PSU แนะนำ ≥ ${c.benchmark.recommendedPsuWatts} W`:"คะแนนจำลองของเกม · เปิดเครื่องให้สำเร็จก่อนกดทดสอบ";const _=n.querySelector(".job-actions");_.replaceChildren(),r("ทดสอบคะแนนเครื่อง",()=>e.runBenchmark(),_,c.power!=="RUNNING"||!!c.operation),r("ส่งงานและรับรางวัล",()=>e.deliverJob(),_,!ml(c));const m=n.querySelector(".shop-items");m.replaceChildren();for(const[y,x]of po){const v=document.createElement("h3");v.textContent=x,m.append(v);for(const E of cl.filter(A=>mo(A)===y).sort((A,R)=>A.price-R.price))r(`${E.name} — ${E.price.toLocaleString()} cr`,()=>e.buyPart(E.id),m,!l||E.price>c.jobBudget||!!c.operation||yt(c)||c.inventory.length>=fr)}const p=n.querySelector(".return-items");p.replaceChildren();for(const y of c.inventory.filter(x=>x.location==="tray"&&x.purchasedFor===c.activeJobId))r(`วางบนถาด: ${Ie(y.catalogId).name}`,()=>{e.select(y.instanceId),n.hidden=!0,t.setAttribute("aria-expanded","false")},p,!!c.operation),r(`คืน ${Ie(y.catalogId).name} (+${y.paidPrice} cr)`,()=>e.returnPart(y.instanceId),p,!!c.operation||yt(c))}),a=c=>{c.code==="Escape"&&(n.hidden=!0,t.setAttribute("aria-expanded","false"))};return window.addEventListener("keydown",a),{dispose(){o(),window.removeEventListener("keydown",a),t.remove(),n.remove()}}}function v_(i,e){const t=document.createElement("section");t.className="control-dock",t.setAttribute("aria-label","เมนูโต๊ะประกอบ"),i.append(t);const r=[".inventory-panel",".case-panel",".jobs-panel",".wiring-panel",".machine-status"].map(m=>i.querySelector(m)),s=i.querySelector(".workbench-toolbar");s.append(i.querySelector(".jobs-toggle"));const o=r[1],a=document.createElement("div");a.className="case-lid-actions",a.append(...i.querySelectorAll(".side-panel-toggle")),o.append(a);const c=i.querySelector(".case-toggle");c.classList.add("primary-case-toggle");const d=document.createElement("section");d.className="control-dock left-control-dock",d.setAttribute("aria-label","เคสและการต่อสายเปิดเครื่อง"),i.append(d);const l=document.createElement("nav");l.className="gpu-library-controls",l.setAttribute("aria-label","เลือกและจัดการการ์ดจอ"),l.append(i.querySelector(".gpu-catalog-toggle"),i.querySelector(".inventory-toggle")),d.append(c,o,r[3],l,r[0]),t.append(s,r[2],r[4],i.querySelector(".assembly-hud"));const u=m=>{for(const p of r)p!==m&&(p instanceof HTMLDetailsElement?p.open=!1:p.hidden=!0);for(const[p,y]of[[".case-toggle",r[1]],[".jobs-toggle",r[2]]])y!==m&&i.querySelector(p)?.setAttribute("aria-expanded","false");m!==r[0]&&e.getState().inventoryOpen&&e.toggle(!1)},h=m=>{const p=m.target,y=p.closest(".inventory-toggle,.gpu-catalog-toggle")?0:p.closest(".case-toggle")?1:p.closest(".jobs-toggle")?2:-1;if(y>=0)u(r[y]);else for(const x of r)x instanceof HTMLDetailsElement&&p.closest("summary")===x.querySelector("summary")&&u(x)};t.addEventListener("click",h,!0),d.addEventListener("click",h,!0);let f=!1;const g=e.subscribe(m=>{m.inventoryOpen&&!f&&(f=!0,u(r[0])),f=m.inventoryOpen}),_=m=>{if(m.key==="Escape")for(const p of r)p instanceof HTMLDetailsElement&&(p.open=!1)};return window.addEventListener("keydown",_),{dispose(){g(),t.removeEventListener("click",h,!0),d.removeEventListener("click",h,!0),window.removeEventListener("keydown",_),t.remove(),d.remove()}}}const Fa="ctc-pc-builder-save",lu=1;function uu(i){return JSON.stringify({schemaVersion:lu,data:{activeJobId:i.activeJobId,jobBudget:i.jobBudget,rewardMoney:i.rewardMoney,completedJobs:i.completedJobs,nextPurchaseId:i.nextPurchaseId,nextCableId:i.nextCableId,benchSelection:i.benchSelection,inventory:i.inventory.map(e=>({instanceId:e.instanceId,catalogId:e.catalogId,location:e.location,placement:e.placement?{ownerId:e.placement.ownerId,slotId:e.placement.slotId}:null,...e.purchasedFor?{purchasedFor:e.purchasedFor,paidPrice:e.paidPrice}:{}})),cables:i.cables.map(e=>({id:e.id,from:e.from,to:e.to,kind:e.kind})),caseId:i.caseId,finishId:i.finishId,patternId:i.patternId,sidePanelStyle:i.sidePanelStyle,sidePanelInstalled:i.sidePanelInstalled,backPanelInstalled:i.backPanelInstalled,rearPanelInstalled:i.rearPanelInstalled,tutorial:{step:i.tutorial.step,skipped:i.tutorial.skipped}}})}function x_(i){try{const e=JSON.parse(i);if(e?.schemaVersion!==lu)return{kind:"invalid",message:"เซฟเป็นเวอร์ชันที่เกมนี้ไม่รองรับ เก็บเซฟเดิมไว้แล้ว"};const t=e.data,n=l=>{if(!l)throw Error("invalid save")},r=l=>Number.isSafeInteger(l)&&Number(l)>=0;n(t&&r(t.jobBudget)&&r(t.rewardMoney)),n(Array.isArray(t.completedJobs)&&new Set(t.completedJobs).size===t.completedJobs.length&&t.completedJobs.every(l=>!!hi(l))),n(t.activeJobId===null||!!hi(t.activeJobId)),n(!t.completedJobs.includes(t.activeJobId)),n(t.rewardMoney===ds.filter(l=>t.completedJobs.includes(l.id)).reduce((l,u)=>l+u.reward,0)),n(ys.some(l=>l.id===t.caseId)&&Ss.some(l=>l.id===t.finishId)&&ua.some(l=>l.id===t.patternId)),n(["solid","glass"].includes(t.sidePanelStyle));for(const l of["sidePanelInstalled","backPanelInstalled","rearPanelInstalled"])n(typeof t[l]=="boolean");n(t.tutorial&&r(t.tutorial.step)&&t.tutorial.step<=Gn.length&&typeof t.tutorial.skipped=="boolean"),n(Array.isArray(t.inventory)&&t.inventory.length<=fr&&Array.isArray(t.cables)&&t.cables.length<=20),n(r(t.nextPurchaseId)&&t.nextPurchaseId>=1&&r(t.nextCableId)&&t.nextCableId>=1);const s=new Set,o=t.inventory.map(l=>(n(l&&typeof l.instanceId=="string"&&/^(part-\d{3}|purchase-\d+)$/.test(l.instanceId)&&!s.has(l.instanceId)),s.add(l.instanceId),n(on.some(u=>u.id===l.catalogId)),n(["tray","installed"].includes(l.location)),n(l.location==="tray"?l.placement===null:l.placement&&typeof l.placement.ownerId=="string"&&typeof l.placement.slotId=="string"),l.instanceId.startsWith("purchase-")&&n(Number(l.instanceId.slice(9))<t.nextPurchaseId),t.activeJobId?n(l.purchasedFor===t.activeJobId&&l.paidPrice===Ie(l.catalogId).price&&l.instanceId.startsWith("purchase-")):n(l.purchasedFor===void 0&&l.paidPrice===void 0),{instanceId:l.instanceId,catalogId:l.catalogId,location:l.location,placement:l.placement?{ownerId:l.placement.ownerId,slotId:l.placement.slotId}:null,...t.activeJobId?{purchasedFor:l.purchasedFor,paidPrice:l.paidPrice}:{}}));n(t.activeJobId?t.jobBudget+o.reduce((l,u)=>l+(u.paidPrice??0),0)===hi(t.activeJobId).budget:t.jobBudget===0);const a={...Vi(),activeJobId:t.activeJobId,jobBudget:t.jobBudget,rewardMoney:t.rewardMoney,completedJobs:[...t.completedJobs],nextPurchaseId:t.nextPurchaseId,nextCableId:t.nextCableId,caseId:t.caseId,finishId:t.finishId,patternId:t.patternId,sidePanelStyle:t.sidePanelStyle,backPanelInstalled:t.backPanelInstalled,rearPanelInstalled:t.rearPanelInstalled,tutorial:{step:t.tutorial.step,skipped:t.tutorial.skipped},inventory:o.map(l=>({...l,location:"tray",placement:null})),cables:[],message:"โหลดเกมแล้ว · เครื่องปิดอยู่ พร้อมประกอบต่อ"},c=["Motherboard","CPU","CPU Cooler","RAM","GPU","SSD","PSU","GPU Support"];for(const l of o.filter(u=>u.placement).sort((u,h)=>c.indexOf(Ie(u.catalogId).type)-c.indexOf(Ie(h.catalogId).type)))n(Yn(a,l.instanceId,`${l.placement.ownerId}/${l.placement.slotId}`)===null),a.inventory=a.inventory.map(u=>u.instanceId===l.instanceId?l:u);const d=new Set;for(const l of t.cables){n(l&&r(l.id)&&l.id>0&&l.id<t.nextCableId&&!d.has(l.id)),d.add(l.id),n(typeof l.from=="string"&&typeof l.to=="string"&&di(a,l.from,l.to)===null);const u=l.from.split("/")[1];n(l.kind===u||l.kind==="fan"&&u==="fan"),a.cables.push({id:l.id,from:l.from,to:l.to,kind:l.kind})}if(a.sidePanelInstalled=t.sidePanelInstalled,t.benchSelection!==void 0){n(t.benchSelection&&typeof t.benchSelection=="object"&&!Array.isArray(t.benchSelection)&&Object.keys(t.benchSelection).length<=8);for(const[l,u]of Object.entries(t.benchSelection))n(typeof u=="string"&&o.some(h=>h.instanceId===u&&Ie(h.catalogId).type===l)),a.benchSelection[l]=u}if(!a.activeJobId&&!a.completedJobs.length){a.inventory=a.inventory.map(l=>l.catalogId==="ram-d5-8"?{...l,catalogId:"ram-d5"}:l),a.inventory=a.inventory.filter(l=>l.location==="installed"||!al.has(l.catalogId));for(const l of["ram-d5","ram-d4"]){const u=a.inventory.filter(f=>f.catalogId===l).sort((f,g)=>+(g.location==="installed")-+(f.location==="installed")),h=new Set(u.slice(2).map(f=>f.instanceId));a.inventory=a.inventory.filter(f=>!h.has(f.instanceId));for(let f=Math.min(2,u.length);f<2&&a.inventory.length<fr;f++){let g=l==="ram-d4"?18:218;for(;s.has(`part-${String(g).padStart(3,"0")}`);)g++;const _=`part-${String(g).padStart(3,"0")}`;s.add(_),a.inventory.push({instanceId:_,catalogId:l,location:"tray",placement:null})}}for(const l of Vi().inventory.filter(u=>Number(u.instanceId.slice(5))>=100))a.inventory.length<fr&&!a.inventory.some(u=>u.catalogId===l.catalogId)&&!s.has(l.instanceId)&&(a.inventory.push(l),s.add(l.instanceId));for(const[l,u]of Object.entries(a.benchSelection))a.inventory.some(h=>h.instanceId===u)||delete a.benchSelection[l]}return{kind:"valid",state:a}}catch{return{kind:"invalid",message:"ข้อมูลเซฟเสียหรือไม่ครบ เก็บเซฟเดิมไว้แล้ว คุณเลือกเริ่มใหม่ได้"}}}function y_(i,e,t){let n="";return i.subscribe(r=>{const s=uu(r);if(s!==n)try{e.setItem(Fa,s),n=s,t("บันทึกอัตโนมัติแล้ว")}catch{t("บันทึกไม่สำเร็จ: พื้นที่เต็มหรือเบราว์เซอร์ปิดการจัดเก็บข้อมูล อย่าเพิ่งปิดหน้านี้")}})}async function S_(i){let e=null,t="";try{e=localStorage.getItem(Fa)}catch{t="อ่านเซฟไม่ได้ เบราว์เซอร์ไม่อนุญาตการจัดเก็บข้อมูล"}if(e===null&&!t)return Vi();const n=e!==null?x_(e):null;return new Promise(r=>{const s=document.createElement("section");s.className="save-start",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-label","เล่นต่อหรือเริ่มใหม่");const o=document.createElement("div");s.append(o);const a=document.createElement("h2");a.textContent="CTC · PC Builder",o.append(a);const c=document.createElement("p");c.textContent=t||(n?.kind==="invalid"?n.message:"พบเกมที่บันทึกไว้ เล่นต่อจากงานและชิ้นส่วนเดิมได้ เครื่องจะเริ่มในสถานะปิด"),o.append(c);const d=u=>{s.remove(),r(u)};if(n?.kind==="valid"){const u=document.createElement("button");u.textContent="เล่นต่อ · Continue Game",u.onclick=()=>d(n.state),o.append(u)}const l=document.createElement("button");l.textContent="เริ่มเกมใหม่ · New Game",l.onclick=()=>{window.confirm("เริ่มเกมใหม่และแทนที่เซฟเดิม? เงิน งาน ชิ้นส่วน และ tutorial เดิมจะถูกล้าง")&&d(Vi())},o.append(l),i.append(s),o.querySelector("button")?.focus()})}function M_(i,e){const t=document.createElement("details");t.className="save-panel",t.innerHTML='<summary>เซฟเกม / วิธีเล่น</summary><p class="save-message" role="status"></p><button class="new-game">เริ่มเกมใหม่</button><section class="tutorial"><h3></h3><p></p><button></button><details><summary>ดูคำแนะนำทุกขั้นอีกครั้ง</summary><ol></ol></details></section>',i.querySelector(".control-dock").append(t);const n=document.createElement("button");n.type="button",n.textContent="▶ Tutorial · เริ่มสอนด้วยลูกศร 3D",n.onclick=()=>i.dispatchEvent(new Event("start-tutorial")),t.before(n);const r=l=>{t.querySelector(".save-message").textContent=l,t.querySelector("summary").textContent=l.startsWith("บันทึกไม่สำเร็จ")?"⚠ เซฟไม่สำเร็จ / วิธีเล่น":"เซฟเกม / วิธีเล่น"},s={setItem(l,u){window.localStorage.setItem(l,u)}},o=y_(e,s,r),a=t.querySelector("ol");for(const[l,u]of Gn){const h=document.createElement("li");h.textContent=`${l}: ${u}`,a.append(h)}const c=t.querySelector(".tutorial"),d=e.subscribe(l=>{const u=Gn[l.tutorial.step];c.querySelector("h3").textContent=l.tutorial.skipped?"ข้าม tutorial แล้ว":u?`เป้าหมาย ${l.tutorial.step+1}/${Gn.length}: ${u[0]}`:"✓ เปิดเครื่องครั้งแรกสำเร็จ",c.querySelector("p").textContent=l.tutorial.skipped?"กดแสดงคำแนะนำเพื่อกลับมาดูได้ทุกเมื่อ":u?.[1]??"พร้อมรับงานและประกอบเครื่องลูกค้าแล้ว";const h=c.querySelector("button");h.textContent="เริ่ม / ดูคำแนะนำทีละขั้น",h.onclick=()=>i.dispatchEvent(new Event("start-tutorial"))});return t.open=!e.getState().tutorial.skipped&&e.getState().tutorial.step<Gn.length,t.querySelector(".new-game").onclick=()=>{if(window.confirm("ล้างเซฟและเริ่มเกมใหม่? เงิน งาน ชิ้นส่วน และ tutorial เดิมจะถูกแทนที่"))try{s.setItem(Fa,uu(Vi())),o(),location.reload()}catch{r("บันทึกไม่สำเร็จ: ยังไม่ได้เริ่มใหม่ เซฟเดิมไม่ได้ถูกลบ")}},{dispose(){o(),d(),t.remove(),n.remove()}}}const en=document.querySelector("#app");async function b_(){const i=await S_(en),e=Mu(i),t=Cu(en,e.getState()),n=Ru(en,e),r=p_(en,e),s=vu(en,e),o=m_(en,e),a=g_(en,e),c=__(en,e),d=v_(en,e),l=M_(en,e);try{const u=f_(en,t.showError,e);t.resetButton.addEventListener("click",u.resetCamera);const h=document.createElement("button");h.type="button",h.textContent="↓ มุมบน",h.style.marginRight="8px",t.resetButton.before(h),h.addEventListener("click",u.topView),window.addEventListener("pagehide",f=>{f.persisted||(l.dispose(),u.dispose(),n.dispose(),r.dispose(),s.dispose(),o.dispose(),a.dispose(),c.dispose(),d.dispose())})}catch(u){console.error("Could not initialize the workbench:",u),t.showError("เบราว์เซอร์เริ่ม WebGL ไม่ได้ ลองเปิดการเร่งกราฟิก (Hardware acceleration) ในการตั้งค่า หรือเปิดด้วย Chrome / Edge รุ่นใหม่ แล้วกด “ลองใหม่”")}}b_();
