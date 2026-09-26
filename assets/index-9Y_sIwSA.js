(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const mt=(i,e,t,n,s,r,o,a,c,l="เล่นเกม / สร้างสรรค์งาน")=>({id:i,name:`${t==="green"?"NOVERA":t==="red"?"AMBER":"INTERRA"} ${e}`,type:"GPU",mount:"pcie-x16",color:t==="green"?"#88cc8b":t==="red"?"#e47465":"#6fbbf3",team:t,vramGB:n,watts:s,lengthMm:r,fans:o,price:a,performance:c,role:l}),ho=[mt("gpu-4060ti8","RTX 4060 Ti 8GB","green",8,160,255,2,13900,1740),mt("gpu-4060ti16","RTX 4060 Ti 16GB","green",16,165,265,2,16900,1810),mt("gpu-4070","RTX 4070","green",12,200,280,2,19900,2200),mt("gpu-4070s","RTX 4070 SUPER","green",12,220,295,3,22900,2500),mt("gpu-4070ti","RTX 4070 Ti","green",12,285,310,3,26900,2750),mt("gpu-4070tis","RTX 4070 Ti SUPER","green",16,285,315,3,29900,3e3),mt("gpu-4080","RTX 4080","green",16,320,335,3,35900,3400),mt("gpu-4080s","RTX 4080 SUPER","green",16,320,340,3,37900,3600),mt("gpu-4090","RTX 4090","green",24,450,360,3,55900,4500),mt("gpu-4090d","RTX 4090 D","green",24,425,355,3,52900,4250),mt("gpu-6600","RX 6600","red",8,132,210,2,6500,1e3),mt("gpu-6650xt","RX 6650 XT","red",8,176,235,2,8500,1250),mt("gpu-6700xt","RX 6700 XT","red",12,230,270,2,11900,1800),mt("gpu-6750xt","RX 6750 XT","red",12,250,280,2,13900,1950),mt("gpu-7600","RX 7600","red",8,165,240,2,9500,1430),mt("gpu-7600xt","RX 7600 XT","red",16,190,260,2,12500,1610),mt("gpu-7700xt","RX 7700 XT","red",12,245,290,3,16900,2250),mt("gpu-7800xt","RX 7800 XT","red",16,263,305,3,19900,2750),mt("gpu-7900gre","RX 7900 GRE","red",16,260,320,3,22900,3e3),mt("gpu-7900xtx","RX 7900 XTX","red",24,355,365,3,32900,4e3),mt("gpu-a770","Arc A770 Compact 16GB","blue",16,225,220,2,11900,1750,"เน้นงานสร้างสรรค์ · ขนาดเล็ก (แบบจำลองเกม)"),mt("gpu-b58012","Arc B580 12GB · 2 พัดลม","blue",12,190,260,2,10900,2050,"ทำงาน / เล่นเกม · ขนาดเล็ก–กลาง"),{...mt("gpu-b58016","Arc B580 16GB · 3 พัดลม [รุ่นสมมติ]","blue",16,210,315,3,14900,2200,"ทำงาน / เล่นเกม · ขนาดกลาง–ใหญ่"),fictional:!0},{id:"psu-850",name:"SEASONOVA Focus 850",type:"PSU",mount:"psu",color:"#b9c4cd",price:3900,wattage:850,lengthMm:160,formFactor:"ATX"},{id:"psu-1000",name:"SEASONOVA Focus 1000",type:"PSU",mount:"psu",color:"#8b98a5",price:4900,wattage:1e3,lengthMm:170,formFactor:"ATX"}],cn=(i,e,t,n,s,r)=>({id:i,name:e,type:"CPU",mount:"cpu",socket:t,cores:n,watts:s,price:r,color:t==="AX5"?"#f1a660":"#6fbbf3"}),Pn=(i,e,t,n,s,r)=>({id:i,name:e,type:"RAM",mount:"dimm",generation:t,capacityGB:n,speedMT:s,price:r,watts:n>=32?7:5,color:t==="DDR5"?"#bea7ed":"#ec8e99"}),la=[cn("cpu-ax-7500f","AMBER Ryzora 5 7500F","AX5",6,65,4900),cn("cpu-ax-7700","AMBER Ryzora 7 7700","AX5",8,65,8900),cn("cpu-ax-7800x3d","AMBER Ryzora 7 7800X3D","AX5",8,120,13900),cn("cpu-ax-7900","AMBER Ryzora 9 7900","AX5",12,90,14900),cn("cpu-ax-7950x","AMBER Ryzora 9 7950X","AX5",16,170,19900),cn("cpu-lx-13100","INTERRA Coreon i3 13100","LX170",4,60,3900),cn("cpu-lx-13500","INTERRA Coreon i5 13500","LX170",14,110,7900),cn("cpu-lx-14400","INTERRA Coreon i5 14400","LX170",10,100,7200),cn("cpu-lx-13700","INTERRA Coreon i7 13700","LX170",16,150,12900),cn("cpu-lx-14900","INTERRA Coreon i9 14900","LX170",24,170,18900),Pn("ram-d4-16","KINGFORGE Fury D4 16 / 3200","DDR4",16,3200,1300),Pn("ram-d4-16-fast","KINGFORGE Fury D4 16 / 3600","DDR4",16,3600,1600),Pn("ram-d4-32","KINGFORGE Fury D4 32 / 3200","DDR4",32,3200,2400),Pn("ram-d5-8","CORVEX Vigor D5 8 / 4800","DDR5",8,4800,950),Pn("ram-d5-16-base","CORVEX Vigor D5 16 / 5200","DDR5",16,5200,1450),Pn("ram-d5-16-fast","CORVEX Vigor D5 16 / 6000","DDR5",16,6e3,2e3),Pn("ram-d5-32","CORVEX Vigor D5 32 / 5600","DDR5",32,5600,2900),Pn("ram-d5-32-fast","CORVEX Vigor D5 32 / 6000","DDR5",32,6e3,3400)],ps=96,ln=(i,e,t)=>({id:i,kind:e,position:t,rotation:[0,0,0]}),Rr=()=>[ln("cpu","cpu",[-.16,.2,.23]),ln("cooler","cooler",[-.16,.2,.3227]),ln("dimm-a","dimm",[.32,.16,.26]),ln("dimm-b","dimm",[.52,.16,.26]),ln("gpu","pcie-x16",[-.16,-.4,.24]),ln("ssd","m2",[-.14,-.19,.154])],on=[{id:"mb-ax",name:"ASORA Prime B650",type:"Motherboard",price:4200,mount:"board",color:"#287d72",socket:"AX5",ram:"DDR5",formFactor:"ATX",slots:Rr()},{id:"mb-lx",name:"GIGAFORGE B760M",type:"Motherboard",price:3400,mount:"board",color:"#365d9b",socket:"LX170",ram:"DDR4",formFactor:"Micro-ATX",slots:Rr()},{id:"mb-wide",name:"MSORA Titan X870",type:"Motherboard",price:9500,mount:"board",color:"#8c4365",socket:"AX5",ram:"DDR5",formFactor:"E-ATX",slots:Rr()},{id:"cpu-ax",name:"AMBER Ryzora 5 7600",type:"CPU",price:6200,mount:"cpu",color:"#f1a660",socket:"AX5",cores:6,watts:65},{id:"cpu-lx",name:"INTERRA Coreon i5 13400",type:"CPU",price:6500,mount:"cpu",color:"#6fbbf3",socket:"LX170",cores:10,watts:100},{id:"cool-air",name:"NOCTERRA Air U12",type:"CPU Cooler",price:1500,mount:"cooler",color:"#c99469",sockets:["AX5","LX170"],heightMm:155,coolingWatts:180,watts:5},{id:"ram-d5",name:"CORVEX Vigor D5 16",type:"RAM",price:1600,mount:"dimm",color:"#bea7ed",generation:"DDR5",capacityGB:16,speedMT:5600,watts:5},{id:"ram-d4",name:"KINGFORGE Fury D4 8",type:"RAM",price:800,mount:"dimm",color:"#ec8e99",generation:"DDR4",capacityGB:8,speedMT:3200,watts:4},{id:"gpu-fit",name:"NOVERA GeForceon N4060",type:"GPU",price:10500,mount:"pcie-x16",color:"#88cc8b",lengthMm:240,watts:115,vramGB:8},{id:"gpu-long",name:"AMBER Radeora R7900 XT",type:"GPU",price:25e3,mount:"pcie-x16",color:"#e47465",lengthMm:360,watts:330,vramGB:20},{id:"ssd-1",name:"SAMSORA EVOX 1T",type:"SSD",price:2200,mount:"m2",color:"#77c8d7",interface:"M.2 NVMe",capacityGB:1e3,lengthMm:80,watts:6},{id:"psu-650",name:"SEASONOVA Focus 650",type:"PSU",price:2500,mount:"psu",color:"#c2c9d0",formFactor:"ATX",wattage:650,lengthMm:140},{id:"psu-180",name:"CORVEX Basic 180",type:"PSU",price:650,mount:"psu",color:"#cbaf6d",formFactor:"ATX",wattage:180,lengthMm:140}],xu={id:"support-1",name:"FORMA Lift S1",type:"GPU Support",price:350,mount:"gpu-support",color:"#73949d",optional:!0};on.push(xu);on.push({id:"ssd-sata",name:"SAMSORA Solid S500",type:"SSD",price:1200,mount:"sata",color:"#466e93",interface:"SATA",capacityGB:500,lengthMm:100,watts:5});on.push({id:"gpu-slot",name:"NOVERA Mini N1030",type:"GPU",price:3500,mount:"pcie-x16",color:"#7db6ba",lengthMm:170,watts:30,vramGB:2,requiresPower:!1});Object.assign(on.find(i=>i.id==="gpu-fit"),{name:"NOVERA RTX 4060",team:"green",fans:2});Object.assign(on.find(i=>i.id==="gpu-long"),{name:"AMBER RX 7900 XT",team:"red",fans:3});on.push(...ho);on.push(...la);const cl=new Set(la.map(i=>i.id)),ll=on.filter(i=>!cl.has(i.id));function Pe(i){const e=on.find(t=>t.id===i);if(!e)throw new Error(`Unknown catalog ID: ${i}`);return e}const dn={name:"FORMA C01",formFactors:["ATX","Micro-ATX"],gpuClearanceMm:320,coolerClearanceMm:165,psuClearanceMm:180,psuFormFactor:"ATX",slots:[ln("board","board",[-.75,1.76,-.5]),ln("psu","psu",[-1.5,.33,.05]),ln("support","gpu-support",[-.18,.765,.28]),ln("sata","sata",[.3,1.65,-.44])],standoffs:[[-1.39,1.06,-.5],[-.14,1.06,-.5],[-1.39,1.77,-.5],[-.14,1.77,-.5],[-1.39,2.45,-.5],[-.14,2.45,-.5]]},Ds=["mb-ax","cpu-ax","cool-air","ram-d5","gpu-fit","ssd-1","psu-650"],Mr=[{id:"compact",name:"FORMA Mini C02",size:"Compact",dimensions:[210,400,350],stretch:[.96,1,1],shape:"mesh",forms:["Micro-ATX"],gpu:270,cooler:165},{id:"standard",name:"FORMA C01",size:"Mid Tower",dimensions:[220,450,420],stretch:[1,1,1],shape:"slats",forms:["ATX","Micro-ATX"],gpu:320,cooler:165},{id:"tower",name:"MONORA Air T80",size:"Full Tower",dimensions:[250,540,500],stretch:[1.18,1.18,1.15],shape:"fans",forms:["E-ATX","ATX","Micro-ATX"],gpu:400,cooler:190},{id:"wide",name:"AQUORA Cube W90",size:"Wide Chamber",dimensions:[320,480,510],stretch:[1.17,1.05,1.45],shape:"window",forms:["E-ATX","ATX","Micro-ATX"],gpu:420,cooler:210}],br=[{id:"ivory",name:"งาช้าง",color:"#c6cec9"},{id:"black",name:"ดำกราไฟต์",color:"#303740"},{id:"red",name:"แดงไวน์",color:"#9d394b"},{id:"blue",name:"น้ำเงิน",color:"#477ca5"},{id:"mint",name:"เขียวมิ้นต์",color:"#79bba2"},{id:"pink",name:"ชมพู",color:"#d894b1"}],ua=[{id:"plain",name:"เรียบ"},{id:"stripe",name:"แถบคู่"},{id:"circuit",name:"วงจร"},{id:"checker",name:"ตารางแข่ง"}],da=i=>Mr.find(e=>e.id===i);function $n(i){const e=da(i);return{...dn,slots:dn.slots.map(t=>t.id==="support"?{...t,position:[-.18,.33+.435*e.stretch[1],.28]}:t),name:e.name,formFactors:[...e.forms],gpuClearanceMm:e.gpu,coolerClearanceMm:e.cooler}}function yu(i,e){const t=document.createElement("button");t.className="side-panel-toggle",t.onclick=()=>e.toggleSidePanel(),i.append(t);const n=document.createElement("button");n.className="side-panel-toggle back-panel-toggle",n.onclick=()=>e.toggleBackPanel(),i.append(n);const s=document.createElement("button");s.className="side-panel-toggle rear-panel-toggle",s.onclick=()=>e.toggleRearPanel(),i.append(s);const r=document.createElement("button");r.className="case-toggle",r.textContent="▣ เลือกเคส / สี / ลาย",r.setAttribute("aria-expanded","false");const o=document.createElement("aside");o.className="case-panel",o.hidden=!0,o.id="case-panel",r.setAttribute("aria-controls",o.id),o.innerHTML=`<div class="inventory-heading"><h2>เลือกเคส</h2><button type="button" aria-label="ปิดตัวเลือกเคส">✕</button></div><label>รุ่นและขนาด<select name="case">${Mr.map(f=>`<option value="${f.id}">${f.name} · ${f.size}</option>`).join("")}</select></label><p class="case-spec"></p><label>สี<select name="finish">${br.map(f=>`<option value="${f.id}">${f.name}</option>`).join("")}</select></label><label>ลาย<select name="pattern">${ua.map(f=>`<option value="${f.id}">${f.name}</option>`).join("")}</select></label><p class="case-note" aria-live="polite"></p><p>เปลี่ยนสีและลายได้ทันที · ขนาดเป็นสเปกสมมติในเกม</p>`,i.append(r,o);const a=document.createElement("nav");a.className="workbench-toolbar",a.setAttribute("aria-label","เครื่องมือโต๊ะประกอบ");const c=i.querySelector(".inventory-toggle");c&&a.append(c),a.append(r),i.append(a);const l=document.createElement("label");l.textContent="ฝาข้าง";const u=document.createElement("select");u.innerHTML='<option value="solid">ธรรมดา (ทึบ)</option><option value="glass">กระจกใส</option>',l.append(u),o.append(l),u.onchange=()=>e.setSidePanelStyle(u.value);const d=o.querySelector("[name=case]"),h=o.querySelector("[name=finish]"),p=o.querySelector("[name=pattern]"),g=()=>{o.hidden=!0,r.setAttribute("aria-expanded","false")};r.onclick=()=>{o.hidden=!o.hidden,r.setAttribute("aria-expanded",String(!o.hidden)),o.hidden||e.toggle(!1)},o.querySelector("button").onclick=()=>{g(),r.focus()};for(const f of[d,h,p])f.onchange=()=>e.configureCase(d.value,h.value,p.value);const _=e.subscribe(f=>{u.value=f.sidePanelStyle,u.disabled=!!f.operation,t.textContent=f.sidePanelInstalled?"▣ ถอดฝาข้างเคส":"▣ ใส่ฝาข้างเคส",t.disabled=!!f.operation,t.setAttribute("aria-pressed",String(f.sidePanelInstalled)),n.textContent=f.backPanelInstalled?"▣ ถอดฝาหลังเคส":"▣ ใส่ฝาหลังเคส",n.disabled=!!f.operation,n.setAttribute("aria-pressed",String(f.backPanelInstalled)),s.textContent=f.rearPanelInstalled?"▣ ถอดแผงท้าย (พอร์ต)":"▣ ใส่แผงท้าย (พอร์ต)",s.disabled=!!f.operation,s.setAttribute("aria-pressed",String(f.rearPanelInstalled)),f.inventoryOpen&&g(),d.value=f.caseId,h.value=f.finishId,p.value=f.patternId,d.disabled=!!f.operation||f.inventory.some(v=>v.location==="installed"),h.disabled=p.disabled=!!f.operation;const y=da(f.caseId),x=$n(f.caseId);o.querySelector(".case-spec").textContent=`${y.dimensions.join(" × ")} mm (กว้าง × สูง × ลึก) · ${x.formFactors.join(" / ")} · GPU ≤ ${x.gpuClearanceMm} mm · Cooler ≤ ${x.coolerClearanceMm} mm · PSU ATX ≤ ${x.psuClearanceMm} mm`,o.querySelector(".case-note").textContent=f.operation?"รอชิ้นส่วนเคลื่อนเสร็จก่อน":d.disabled?"ถอดชิ้นส่วนทั้งหมดก่อนเปลี่ยนรุ่นเคส":"เลือกรุ่นเพื่อเปลี่ยนเคสบนโต๊ะ",i.querySelector(".scene-label h2").textContent=y.name}),m=f=>{f.code==="Escape"&&g()};return window.addEventListener("keydown",m),{dispose(){_(),window.removeEventListener("keydown",m),o.remove(),r.remove(),t.remove(),n.remove(),s.remove(),c?.isConnected&&i.append(c),a.remove()}}}function ul(i){return Math.ceil((50+i.reduce((e,t)=>e+("watts"in t?t.watts:0),0))*1.25)}function dl(i,e,t=dn){const n=[],s=(a,c,l)=>n.push({code:a,severity:"error",blocks:"installation",message:c,action:l,partId:i.id}),r=e.find(a=>a.type==="Motherboard"),o=e.find(a=>a.type==="CPU");return i.type==="Motherboard"&&!t.formFactors.includes(i.formFactor)&&s("BOARD_FORM_FACTOR","ขนาดเมนบอร์ดไม่รองรับโดยเคส",`เลือกเคสที่รองรับ ${i.formFactor}`),i.type==="CPU"&&r&&i.socket!==r.socket&&s("CPU_SOCKET","CPU socket ไม่ตรงกับ motherboard",`ใช้ CPU socket ${r.socket}`),i.type==="RAM"&&r&&i.generation!==r.ram&&s("RAM_GENERATION","RAM generation ไม่ตรงกับ motherboard",`ใช้ RAM ${r.ram}`),i.type==="GPU"&&i.lengthMm>t.gpuClearanceMm&&s("GPU_LENGTH",`GPU ยาวเกิน case clearance ${t.gpuClearanceMm} mm`,"ใช้ GPU สั้นลงหรือเปลี่ยนเคส"),i.type==="PSU"&&(i.formFactor!==t.psuFormFactor||i.lengthMm>t.psuClearanceMm)&&s("PSU_FIT","PSU ไม่พอดีเคส",`ใช้ PSU ${t.psuFormFactor} ยาวไม่เกิน ${t.psuClearanceMm} mm`),i.type==="CPU Cooler"&&(i.heightMm>t.coolerClearanceMm&&s("COOLER_FIT","Cooler สูงเกินเคส",`ใช้ cooler สูงไม่เกิน ${t.coolerClearanceMm} mm`),o&&(!i.sockets.includes(o.socket)||i.coolingWatts<o.watts)&&s("COOLER_FIT","Cooler ไม่รองรับ CPU นี้","เปลี่ยน cooler ให้รองรับ socket และภาระความร้อน CPU")),n}function ha(i,e=dn){const t=i.flatMap(a=>dl(a,i,e)),n=["Motherboard","CPU","CPU Cooler","RAM","GPU","SSD","PSU"];for(const a of n){const c=i.filter(l=>l.type===a).length;c||t.push({code:"MISSING_PART",severity:"warning",blocks:"test",message:`ขาด ${a}`,action:`ติดตั้ง ${a}`,partType:a}),a!=="RAM"&&a!=="SSD"&&c>1&&t.push({code:"SLOT_CAPACITY",severity:"error",blocks:"installation",message:`${a} เกินจำนวน slot`,action:"ถอดชิ้นส่วนที่เกินออก",partType:a})}const s=i.find(a=>a.type==="Motherboard");s&&i.filter(a=>a.type==="RAM").length>s.slots.filter(a=>a.kind==="dimm").length&&t.push({code:"SLOT_CAPACITY",severity:"error",blocks:"installation",message:"เกินจำนวน slot dimm",action:"ลดจำนวนแรมให้พอดีสล็อต"});const r=ul(i),o=i.find(a=>a.type==="PSU");return o&&o.wattage<r&&t.push({code:"PSU_POWER",severity:"warning",blocks:"test",message:`PSU ไม่พอ: ต้องการอย่างน้อย ${r} W`,action:`เปลี่ยน PSU จาก ${o.wattage} W เป็นอย่างน้อย ${r} W`,partId:o.id}),{issues:t,requiredWatts:r,availableWatts:o?.wattage??0,canTest:t.length===0}}function hl(i){const e=Pe(i);return i==="gpu-long"?{x:.09875,z:-.05}:{x:.395*((e.type==="GPU"&&e.fans?Math.max(.85,Math.min(1.4,e.lengthMm/240)):1)-1),z:e.type==="GPU"&&e.fans===3?-.05:0}}const ds={atx24:[.65,.03,.19],eps:[-.5,.6,.19],fan:[-.12,.6,.2],"sata-data":[.58,-.53,.18]};function fi(i){const e=[];for(const t of i.inventory.filter(n=>n.location==="installed")){const n=Pe(t.catalogId),s=(r,o,a,c,l)=>e.push({key:`${t.instanceId}/${r}`,ownerId:t.instanceId,name:`${n.name} · ${o}`,kind:a,direction:c,position:l});if(n.type==="PSU")for(const[r,o]of["atx24","eps","pcie","sata-power"].entries())s(o,o,o,"source",[.214,.12+r%2*.1,-.1+Math.floor(r/2)*.16]);if(n.type==="Motherboard"&&(s("atx24","24-pin","atx24","sink",ds.atx24),s("eps","CPU power","eps","sink",ds.eps),i.inventory.some(r=>r.location==="installed"&&Pe(r.catalogId).mount==="sata")&&s("sata-data","SATA data","sata-data","sink",ds["sata-data"]),s("fan","CPU fan header","fan","sink",ds.fan)),n.type==="GPU"){if(n.requiresPower!==!1){const r=hl(n.id);s("pcie","GPU power 8-pin","pcie","sink",[.884+r.x*4,-.136,.198-r.z*4])}s("display","DisplayPort → จอภาพ","display","source",[-.884,-.244,.47])}n.type==="SSD"&&n.interface==="SATA"&&(s("sata-power","SATA power","sata-power","sink",[.25,-.04,.06]),s("sata-data","SATA data","sata-data","source",[.25,.04,.06])),n.type==="CPU Cooler"&&s("fan","Fan cable 4-pin","fan","source",[-.18,.12,.33])}return e.some(t=>t.kind==="display")&&e.push({key:"monitor/display",ownerId:"monitor",name:"จอบนโต๊ะ · DisplayPort",kind:"display",direction:"sink",position:[2.5,.8,-2.112]}),e}const yt=i=>["CHECKING","BOOTING","RUNNING"].includes(i.power);function di(i,e,t){if(yt(i))return"ปิด Power ก่อนแก้ไขสาย";if(i.operation)return"รอชิ้นส่วนเคลื่อนเสร็จก่อน";if(i.sidePanelInstalled)return"ถอดฝาข้างก่อนต่อสาย";const n=fi(i),s=n.find(o=>o.key===e),r=n.find(o=>o.key===t);return!s||!r?"ติดตั้งอุปกรณ์ทั้งสองชิ้นก่อนต่อสาย":s.direction!=="source"||r.direction!=="sink"||s.kind!==r.kind||s.ownerId===r.ownerId?"ชนิดสายหรือต้นทาง–ปลายทางไม่ตรงกัน":i.cables.some(o=>[o.from,o.to].some(a=>a===e||a===t))?"connector นี้มีสายต่ออยู่แล้ว":null}function Yn(i){const e=ha(i.inventory.filter(t=>t.location==="installed").map(t=>Pe(t.catalogId)),$n(i.caseId)).issues.map(t=>`${t.message} — ${t.action}`);for(const t of fi(i).filter(n=>n.direction==="sink"&&n.kind!=="display"))i.cables.some(n=>n.to===t.key)||e.push(`ขาดสาย ${t.name}`);return e}function Wn(i){const t=$n(i.caseId).slots.map(n=>({...n,ownerId:"case",key:`case/${n.id}`}));for(const n of i.inventory){const s=Pe(n.catalogId);n.location==="installed"&&s.type==="Motherboard"&&t.push(...s.slots.map(r=>({...r,ownerId:n.instanceId,key:`${n.instanceId}/${r.id}`})))}return t}function fo(i,e,t){return i.inventory.find(n=>n.placement?.ownerId===e&&n.placement.slotId===t)}function Jn(i,e,t){if(yt(i))return"ปิด Power ก่อนติดตั้งชิ้นส่วน";if(i.sidePanelInstalled)return"ถอดฝาข้างเคสก่อนติดตั้งชิ้นส่วน";const n=$n(i.caseId);if(i.operation)return"กำลังเคลื่อนชิ้นส่วน กรุณารอ";const s=i.inventory.find(l=>l.instanceId===e);if(!s)return"ไม่พบชิ้นส่วน";if(s.location!=="tray")return"ชิ้นนี้ติดตั้งแล้ว ต้องถอดก่อน";const r=Pe(s.catalogId);if(r.type==="GPU Support"&&!i.inventory.some(l=>l.location==="installed"&&Pe(l.catalogId).type==="GPU"))return"ติดตั้ง GPU ก่อนใส่ขาตั้ง";const o=Wn(i).find(l=>l.key===t);if(!o)return"ต้องติดตั้ง motherboard ก่อนเลือก slot บนบอร์ด";if(o.kind!==r.mount)return`slot ${o.kind} ไม่รองรับ ${r.type}`;if(fo(i,o.ownerId,o.id))return"slot นี้มีชิ้นส่วนติดตั้งอยู่แล้ว";if(r.type==="CPU Cooler"&&!fo(i,o.ownerId,"cpu"))return"ติดตั้ง CPU ก่อน cooler";const a=i.inventory.filter(l=>l.location==="installed").map(l=>Pe(l.catalogId)),c=dl(r,a,n)[0];return c?`${c.message} · ${c.action}`:null}function fl(i,e){if(yt(i))return"ปิด Power ก่อนถอดอุปกรณ์";if(i.cables.some(s=>s.from.startsWith(e+"/")||s.to.startsWith(e+"/")))return"ถอดสายที่ต่อกับอุปกรณ์นี้ก่อน";const t=i.inventory.find(s=>s.instanceId===e);if(t&&Pe(t.catalogId).type==="CPU"&&i.cables.some(s=>s.to===t.placement?.ownerId+"/eps"))return"ถอดสาย CPU power ก่อนถอด CPU";if(i.sidePanelInstalled)return"ถอดฝาข้างเคสก่อนถอดชิ้นส่วน";if(i.operation)return"กำลังเคลื่อนชิ้นส่วน กรุณารอ";const n=i.inventory.find(s=>s.instanceId===e);return!n||n.location!=="installed"?"เลือกชิ้นส่วนที่ติดตั้งแล้วเพื่อถอด":Pe(n.catalogId).type==="GPU"&&i.inventory.some(s=>s.location==="installed"&&Pe(s.catalogId).type==="GPU Support")?"ถอดขาตั้งก่อนถอด GPU":i.inventory.some(s=>s.placement?.ownerId===e)?"ถอดชิ้นส่วนลูกทั้งหมดก่อนถอด motherboard":Pe(n.catalogId).type==="CPU"&&fo(i,n.placement.ownerId,"cooler")?"ถอด cooler ก่อน CPU":null}function Su(i,e){return{...i,location:e?"installed":"tray",placement:e}}const fr=[{id:"office",name:"01 · เครื่องสำนักงาน",description:"เครื่องทำงานประจำวันภายในงบ 20,000 cr",budget:2e4,reward:1800,minScore:1500,minRamGB:8,minStorageGB:500,referenceCase:"compact",referenceParts:["mb-lx","cpu-lx","cool-air","ram-d4","gpu-slot","ssd-sata","psu-650"]},{id:"gaming",name:"02 · เครื่องเล่นเกม",description:"ทำคะแนนจำลองอย่างน้อย 2,500 คะแนน",budget:31e3,reward:3200,minScore:2500,minRamGB:16,minStorageGB:1e3,referenceCase:"standard",referenceParts:["mb-ax","cpu-ax","cool-air","ram-d5","gpu-fit","ssd-1","psu-650"]},{id:"editing",name:"03 · เครื่องตัดต่อ",description:"RAM อย่างน้อย 32 GB และพื้นที่เก็บข้อมูลรวม 1,500 GB",budget:33e3,reward:4200,minScore:2500,minRamGB:32,minStorageGB:1500,referenceCase:"standard",referenceParts:["mb-ax","cpu-ax","cool-air","ram-d5","ram-d5","gpu-fit","ssd-1","ssd-sata","psu-650"]}],hi=i=>fr.find(e=>e.id===i);function pl(i){const e=i.find(a=>a.type==="CPU"),t=i.find(a=>a.type==="GPU"),n=i.filter(a=>a.type==="RAM"),s=n.reduce((a,c)=>a+c.capacityGB,0),r=i.filter(a=>a.type==="SSD").reduce((a,c)=>a+c.capacityGB,0);return{score:(e?.cores??0)*120+(t?.performance??(t?.vramGB??0)*180)+s*12+Math.floor((n.length?Math.min(...n.map(a=>a.speedMT)):0)/20),ramGB:s,storageGB:r,estimatedWatts:50+i.reduce((a,c)=>a+("watts"in c?c.watts:0),0),recommendedPsuWatts:ul(i)}}function fa(i){return JSON.stringify([i.caseId,i.inventory.filter(e=>e.location==="installed").map(e=>[e.instanceId,e.catalogId,e.placement]).sort((e,t)=>String(e[0]).localeCompare(String(t[0]))),i.cables.map(e=>[e.from,e.to,e.kind]).sort((e,t)=>e.join().localeCompare(t.join()))])}const ml=i=>i.inventory.filter(e=>e.location==="installed").map(e=>Pe(e.catalogId));function pr(i){const e=hi(i.activeJobId??"");if(!e)return[];const t=pl(ml(i)),n=!!i.benchmark&&i.benchmark.fingerprint===fa(i);return[{id:"budget",label:`ใช้งบ ${e.budget-i.jobBudget} / ${e.budget} cr`,passed:i.jobBudget>=0&&i.jobBudget<=e.budget},{id:"ownership",label:"ชิ้นส่วนในเครื่องซื้อด้วยงบงานนี้",passed:i.inventory.filter(s=>s.location==="installed").every(s=>s.purchasedFor===e.id)},{id:"hardware",label:"อุปกรณ์ สเปก และสายครบ",passed:Yn(i).length===0},{id:"running",label:"เครื่องอยู่ในสถานะ RUNNING",passed:i.power==="RUNNING"},{id:"ram",label:`RAM ${t.ramGB} / ${e.minRamGB} GB`,passed:t.ramGB>=e.minRamGB},{id:"storage",label:`พื้นที่เก็บข้อมูล ${t.storageGB} / ${e.minStorageGB} GB`,passed:t.storageGB>=e.minStorageGB},{id:"benchmark",label:"รัน benchmark ของเครื่องปัจจุบันแล้ว",passed:n},{id:"score",label:`คะแนนจำลอง ${n?i.benchmark.score:"—"} / ${e.minScore}`,passed:n&&i.benchmark.score>=e.minScore}]}function gl(i){return!!i.activeJobId&&!i.operation&&!i.completedJobs.includes(i.activeJobId)&&pr(i).every(e=>e.passed)}const Hn=[["ติดตั้งเมนบอร์ด","เลือกเมนบอร์ดบนถาด แล้วคลิกสล็อตสีเขียวในเคส"],["ติดตั้ง CPU","เลือก CPU ที่ socket ตรงกับเมนบอร์ด แล้วใส่ช่อง CPU"],["ติดตั้งชุดระบายความร้อน","เลือก CPU Cooler แล้วติดตั้งบน CPU"],["ติดตั้ง RAM","เลือก RAM ที่ตรงกับเมนบอร์ด แล้วใส่ช่อง DIMM"],["ติดตั้งการ์ดจอ","เลือก GPU แล้วติดตั้งช่อง PCIe"],["ติดตั้ง SSD","ใส่ M.2 บนเมนบอร์ด หรือ SATA SSD ในเคส"],["ติดตั้ง PSU","เลือก PSU ที่กำลังไฟเพียงพอ แล้วติดตั้งด้านล่างเคส"],["ต่อสายและตรวจเครื่อง","เปิดเมนูต่อสาย ต่อสายที่ยังขาด และแก้รายการปัญหาเหนือปุ่มเปิดเครื่อง"],["เปิดเครื่องครั้งแรก","กดเปิดเครื่อง รอจนสถานะเป็น “เปิดแล้ว”"]];function Mu(i){let e=i.tutorial.step;const t=["Motherboard","CPU","CPU Cooler","RAM","GPU","SSD","PSU"];for(;e<Hn.length&&(e<7?i.inventory.some(s=>s.location==="installed"&&Pe(s.catalogId).type===t[e]):e===7?Yn(i).length===0:i.power==="RUNNING");)e++;return{...i.tutorial,step:e}}function Vi(){return{activeJobId:null,jobBudget:0,rewardMoney:0,completedJobs:[],nextPurchaseId:1,benchmark:null,lastDelivery:null,cables:[],nextCableId:1,wiringMode:!1,selectedTerminal:null,power:"OFF",powerElapsed:0,powerErrors:[],sidePanelStyle:"solid",rearPanelInstalled:!0,backPanelInstalled:!0,sidePanelInstalled:!1,caseId:"standard",finishId:"ivory",patternId:"plain",phase:"inventory",workstation:"01",selectedInstanceId:null,inventoryOpen:!1,benchSelection:{},tutorial:{step:0,skipped:!1},operation:null,nextOperationId:1,message:"เลือก CPU/RAM และอุปกรณ์จากถาด · เลือกการ์ดจอจากคลังด้านซ้าย",inventory:[...on.filter(i=>!["support-1","ssd-sata","gpu-slot",...ho.map(e=>e.id),...la.map(e=>e.id)].includes(i.id)).map((i,e)=>({instanceId:`part-${String(e+1).padStart(3,"0")}`,catalogId:i.id,location:"tray",placement:null})),{instanceId:"part-014",catalogId:"ram-d5",location:"tray",placement:null},{instanceId:"part-015",catalogId:"support-1",location:"tray",placement:null},{instanceId:"part-016",catalogId:"ssd-sata",location:"tray",placement:null},{instanceId:"part-017",catalogId:"gpu-slot",location:"tray",placement:null},{instanceId:"part-018",catalogId:"ram-d4",location:"tray",placement:null},...ho.map((i,e)=>({instanceId:`part-${100+e}`,catalogId:i.id,location:"tray",placement:null}))]}}function bu(i,e){if(i.operation||!i.inventory.some(n=>n.instanceId===e))return i;const t=i.inventory.find(n=>n.instanceId===e);return{...i,selectedInstanceId:e,benchSelection:t.location==="tray"?{...i.benchSelection,[Pe(t.catalogId).type]:e}:i.benchSelection}}function Eu(i=Vi()){let e=i;const t=new Set,n=()=>{e={...e,tutorial:Mu(e)},t.forEach(s=>s(e))};return{getState:()=>e,setTutorial(s){e={...e,tutorial:{...e.tutorial,skipped:s}},n()},acceptJob(s){const r=hi(s);!r||e.activeJobId||e.completedJobs.includes(s)||e.operation||yt(e)||(e={...e,benchSelection:{},activeJobId:s,jobBudget:r.budget,inventory:[],cables:[],selectedInstanceId:null,selectedTerminal:null,wiringMode:!1,power:"OFF",powerErrors:[],powerElapsed:0,benchmark:null,lastDelivery:null,sidePanelInstalled:!1,caseId:r.referenceCase,message:`รับงาน ${r.name} · ได้งบจัดซื้อ ${r.budget} cr · เลือกซื้อชิ้นส่วน`},n())},buyPart(s){const r=ll.find(a=>a.id===s);if(!r||!e.activeJobId||e.operation||yt(e))return;if(r.price>e.jobBudget){e={...e,message:"งบงานไม่พอ · คืนชิ้นส่วนที่ยังอยู่บนถาดเพื่อรับงบคืน"},n();return}if(e.inventory.length>=ps){e={...e,message:"คลังเต็ม · คืนชิ้นส่วนที่ไม่ใช้ก่อนซื้อเพิ่ม"},n();return}const o={instanceId:`purchase-${e.nextPurchaseId}`,catalogId:s,location:"tray",placement:null,purchasedFor:e.activeJobId,paidPrice:r.price};e={...e,benchSelection:{...e.benchSelection,[r.type]:o.instanceId},inventory:[...e.inventory,o],jobBudget:e.jobBudget-r.price,nextPurchaseId:e.nextPurchaseId+1,message:`ซื้อ ${r.name} แล้ว · วางในช่องบนถาดแล้ว`},n()},returnPart(s){const r=e.inventory.find(a=>a.instanceId===s);if(!e.activeJobId||!r||r.location!=="tray"||r.purchasedFor!==e.activeJobId||r.paidPrice===void 0||e.operation||yt(e))return;const o={...e.benchSelection};o[Pe(r.catalogId).type]===s&&delete o[Pe(r.catalogId).type],e={...e,benchSelection:o,inventory:e.inventory.filter(a=>a.instanceId!==s),jobBudget:e.jobBudget+r.paidPrice,selectedInstanceId:null,message:"คืนชิ้นส่วนแล้ว · เงินกลับเข้างบงาน"},n()},runBenchmark(){if(e.power!=="RUNNING"||e.operation||Yn(e).length){e={...e,message:"ต้องเปิดเครื่องจนเป็น RUNNING ก่อน benchmark"},n();return}const s={...pl(ml(e)),fingerprint:fa(e)};e={...e,benchmark:s,message:`Benchmark จำลอง: ${s.score} คะแนน · ดูผลในงาน / ร้านค้า`},n()},deliverJob(){if(!gl(e)){e={...e,message:e.activeJobId?`ยังส่งไม่ได้: ${pr(e).filter(o=>!o.passed).map(o=>o.label).join(" · ")}`:"ไม่มีงานที่พร้อมส่ง"},n();return}const s=hi(e.activeJobId),r=e.inventory.filter(o=>o.location==="installed");e={...e,benchSelection:{},lastDelivery:{jobId:s.id,reward:s.reward,score:e.benchmark.score,cost:r.reduce((o,a)=>o+(a.paidPrice??0),0),returnedParts:e.inventory.length-r.length},rewardMoney:e.rewardMoney+s.reward,completedJobs:[...e.completedJobs,s.id],activeJobId:null,jobBudget:0,inventory:[],cables:[],selectedInstanceId:null,selectedTerminal:null,wiringMode:!1,power:"OFF",powerElapsed:0,powerErrors:[],benchmark:null,message:`ส่งงานสำเร็จ · รับรางวัล ${s.reward} cr · รับงานถัดไปได้เลย`},n()},toggleWiring(){e.operation||yt(e)||(e={...e,wiringMode:!e.wiringMode,selectedInstanceId:null,selectedTerminal:null},n())},connectCable(s,r){const o=di(e,s,r);if(o){e={...e,message:o},n();return}const a=fi(e).find(c=>c.key===r);e={...e,cables:[...e.cables,{id:e.nextCableId,from:s,to:r,kind:a.kind}],nextCableId:e.nextCableId+1,selectedTerminal:null,selectedInstanceId:null,powerErrors:[],message:"ต่อสายสำเร็จ · เก็บสายตามช่องเดินสายแล้ว"},n()},chooseTerminal(s){if(e.operation||yt(e))return;if(e.sidePanelInstalled){e={...e,message:"ถอดฝาข้างก่อนต่อสาย"},n();return}const r=fi(e).find(o=>o.key===s);if(r){if(e.selectedTerminal){const o=di(e,e.selectedTerminal,s);o?e={...e,message:o}:e={...e,cables:[...e.cables,{id:e.nextCableId,from:e.selectedTerminal,to:s,kind:r.kind}],nextCableId:e.nextCableId+1,selectedTerminal:null,message:"ต่อสายสำเร็จ"}}else{if(r.direction!=="source"||e.cables.some(o=>o.from===s)){e={...e,message:"เลือก connector ต้นทางที่ว่างก่อน"},n();return}e={...e,wiringMode:!0,selectedInstanceId:null,selectedTerminal:s,message:"เลือก connector ปลายทางที่ไฮไลต์"}}n()}},disconnectCable(s){if(yt(e)||e.operation||e.sidePanelInstalled){e={...e,message:"ปิด Power และเปิดฝาข้างก่อนถอดสาย"},n();return}e={...e,cables:e.cables.filter(r=>r.id!==s),selectedTerminal:null,message:"ถอดสายแล้ว"},n()},powerOff(){e={...e,benchmark:null,power:"OFF",powerElapsed:0,powerErrors:[],message:"ปิดเครื่องแล้ว · แก้ไขอุปกรณ์และสายได้"},n()},pressPower(){e.operation||yt(e)||(e={...e,benchmark:null,power:"CHECKING",powerElapsed:0,powerErrors:[],selectedInstanceId:null,selectedTerminal:null,wiringMode:!1,message:"กำลังตรวจอุปกรณ์และสาย…"},n())},setSidePanelStyle(s){e.operation||!["solid","glass"].includes(s)||(e={...e,sidePanelStyle:s,message:s==="glass"?"เปลี่ยนฝาข้างเป็นกระจกแล้ว":"เปลี่ยนฝาข้างเป็นแบบทึบแล้ว"},n())},toggleRearPanel(){if(e.operation)return;const s=!e.rearPanelInstalled;e={...e,rearPanelInstalled:s,message:s?"ใส่แผงท้ายแล้ว · ช่องโครงยึด GPU ยังเปิดอยู่":"ถอดแผงท้ายไว้บนแท่นแล้ว"},n()},toggleBackPanel(){if(e.operation)return;const s=!e.backPanelInstalled;e={...e,backPanelInstalled:s,message:s?"ใส่ฝาหลังแล้ว":"ถอดฝาหลังไว้บนแท่นแล้ว"},n()},toggleSidePanel(){if(e.operation)return;const s=!e.sidePanelInstalled;e={...e,sidePanelInstalled:s,selectedInstanceId:null,message:s?"ใส่ฝาข้างแล้ว · ถอดฝาก่อนประกอบหรือถอดชิ้นส่วน":"ถอดฝาข้างไว้บนแท่นแล้ว · พร้อมประกอบ"},n()},configureCase(s,r,o){if(!e.operation&&!(!Mr.some(a=>a.id===s)||!br.some(a=>a.id===r)||!ua.some(a=>a.id===o))){if(s!==e.caseId&&e.inventory.some(a=>a.location==="installed")){e={...e,message:"ถอดชิ้นส่วนกลับถาดให้ครบก่อนเปลี่ยนรุ่นเคส (เปลี่ยนสีและลายได้ทันที)"},n();return}e={...e,caseId:s,finishId:r,patternId:o,selectedInstanceId:null,message:"เปลี่ยนเคส / สี / ลายแล้ว"},n()}},select(s){if(e.operation)return;e={...e,wiringMode:!1,selectedTerminal:null},e=bu(e,s);const r=e.inventory.find(o=>o.instanceId===s);if(r){const a=Wn(e).filter(c=>c.kind===Pe(r.catalogId).mount).map(c=>Jn(e,s,c.key));e={...e,message:r.location==="installed"?"เลือกแล้ว: คลิกเมาส์ขวาบนฉากเพื่อถอดกลับถาด":a.some(c=>c===null)?"คลิก slot สีเขียวเพื่อติดตั้ง · คลิกเมาส์ขวายกเลิก":a[0]??"ติดตั้ง motherboard ก่อนชิ้นส่วนบนบอร์ด"}}n()},cancel(){e={...e,selectedTerminal:null},e.operation?e={...e,operation:null,selectedInstanceId:null,message:"ยกเลิกการเคลื่อนแล้ว ชิ้นส่วนกลับตำแหน่งเดิม"}:e={...e,selectedInstanceId:null,message:"ยกเลิกการเลือกแล้ว"},n()},install(s){if(e.operation)return;const r=e.selectedInstanceId,o=r?Jn(e,r,s):"เลือกชิ้นส่วนก่อน";if(o){e={...e,message:o},n();return}const a=Wn(e).find(c=>c.key===s);e={...e,operation:{id:e.nextOperationId,instanceId:r,from:null,to:{ownerId:a.ownerId,slotId:a.id},elapsed:0,duration:.65},nextOperationId:e.nextOperationId+1,message:"กำลังติดตั้ง… · คลิกเมาส์ขวายกเลิก"},n()},remove(){if(e.operation)return;const s=e.selectedInstanceId,r=s?fl(e,s):"เลือกชิ้นส่วนก่อน";if(r){e={...e,message:r},n();return}const o=e.inventory.find(a=>a.instanceId===s);e={...e,benchSelection:{...e.benchSelection,[Pe(o.catalogId).type]:s},operation:{id:e.nextOperationId,instanceId:s,from:o.placement,to:null,elapsed:0,duration:.65},nextOperationId:e.nextOperationId+1,message:"กำลังถอด… · คลิกเมาส์ขวายกเลิก"},n()},tick(s){if(!Number.isFinite(s)||s<=0)return;if(e.power==="CHECKING"||e.power==="BOOTING"){const a=e.powerElapsed+s;if(a>=1){const c=Yn(e);c.length?e={...e,power:"ERROR",powerElapsed:0,powerErrors:c,message:"เปิดไม่สำเร็จ · ดูสาเหตุใน Power / สาย"}:e.power==="CHECKING"?e={...e,power:"BOOTING",powerElapsed:0,message:"กำลังบูต…"}:e={...e,power:"RUNNING",powerElapsed:0,message:"เปิดเครื่องสำเร็จ"}}else e={...e,powerElapsed:a};n();return}const r=e.operation;if(!r||!Number.isFinite(s)||s<=0)return;const o=Math.min(r.duration,r.elapsed+s);o<r.duration-1e-9?e={...e,operation:{...r,elapsed:o}}:e={...e,inventory:e.inventory.map(a=>a.instanceId===r.instanceId?Su(a,r.to):a),operation:null,selectedInstanceId:null,message:r.to?"ติดตั้งสำเร็จ":"ถอดกลับถาดแล้ว"},n()},toggle(s=!e.inventoryOpen){e={...e,inventoryOpen:s},n()},subscribe(s){return t.add(s),s(e),()=>t.delete(s)}}}function _l(i){const e=i.inventory.find(t=>t.instanceId===i.selectedInstanceId);return e?{instance:e,part:Pe(e.catalogId)}:null}const wu={Motherboard:"เมนบอร์ด",CPU:"CPU","CPU Cooler":"ชุดระบายความร้อน CPU",RAM:"หน่วยความจำ RAM",GPU:"การ์ดจอ",SSD:"ไดรฟ์ SSD",PSU:"พาวเวอร์ซัพพลาย","GPU Support":"ขาตั้งการ์ดจอ"};function Tu(i){return wu[i.type]+(i.type==="GPU"&&i.team?` · ฝั่ง${{green:"เขียว",red:"แดง",blue:"ฟ้า"}[i.team]}`:"")}const po={atx24:"ไฟเมนบอร์ด · 24-pin",eps:"ไฟ CPU · EPS",pcie:"ไฟการ์ดจอ · 8-pin","sata-power":"ไฟ SSD · SATA","sata-data":"ข้อมูล SSD → เมนบอร์ด",fan:"พัดลม CPU → เมนบอร์ด",display:"ภาพจากการ์ดจอ → จอ"},Au={OFF:"ปิดอยู่",CHECKING:"กำลังตรวจเครื่อง",BOOTING:"กำลังบูต",RUNNING:"เปิดแล้ว",ERROR:"เปิดไม่สำเร็จ"};function Ru(i){switch(i.type){case"GPU Support":return{การใช้งาน:"รองรับน้ำหนักการ์ดจอ",จำเป็นหรือไม่:"อุปกรณ์เสริม ไม่บังคับ",ตำแหน่ง:"บนฝาครอบ PSU · ปรับความสูงตามเคส"};case"Motherboard":return{"ซ็อกเก็ต CPU":i.socket,"ชนิด RAM":i.ram,ขนาดบอร์ด:i.formFactor,"ช่อง RAM":`${i.slots.filter(e=>e.kind==="dimm").length} ช่อง`,ช่องการ์ดจอ:"PCIe x16","ช่อง SSD":"M.2 NVMe"};case"CPU":return{ซ็อกเก็ต:i.socket,จำนวนคอร์:`${i.cores} คอร์`,กำลังไฟ:`${i.watts} W`};case"CPU Cooler":return{ซ็อกเก็ตที่รองรับ:i.sockets.join(" / "),ความสูง:`${i.heightMm} mm`,รองรับความร้อน:`${i.coolingWatts} W`,กำลังไฟพัดลม:`${i.watts} W`,สายที่ต้องต่อ:"CPU fan → เมนบอร์ด"};case"RAM":return{ชนิดหน่วยความจำ:i.generation,ความจุต่อแผง:`${i.capacityGB} GB`,ความเร็ว:`${i.speedMT.toLocaleString()} MT/s`,กำลังไฟ:`${i.watts} W`};case"GPU":return{หน่วยความจำภาพ:`${i.vramGB} GB`,ความยาว:`${i.lengthMm} mm`,กำลังไฟ:`${i.watts} W`,ไฟเลี้ยง:i.requiresPower===!1?"รับไฟจากสล็อต ไม่ต้องต่อสาย PSU":"ต้องต่อสาย PSU → GPU",สายภาพ:"DisplayPort → จอภาพ"};case"SSD":return{การเชื่อมต่อ:i.interface,ความจุ:`${i.capacityGB.toLocaleString()} GB`,ความยาว:`${i.lengthMm} mm`,กำลังไฟ:`${i.watts} W`,สายที่ต้องต่อ:i.interface==="SATA"?"SATA power + SATA data":"เสียบ M.2 บนเมนบอร์ด ไม่ใช้สาย SATA"};case"PSU":return{กำลังจ่ายสูงสุด:`${i.wattage} W`,ขนาดมาตรฐาน:i.formFactor,ความยาว:`${i.lengthMm} mm`}}}function vl(i){const e=i.type==="GPU"?`<p>${i.fans??(i.requiresPower===!1?1:2)} พัดลม${i.role?` · ${i.role}`:""}${i.fictional?" · รุ่นออกแบบพิเศษในเกม ไม่ใช่สเปกสินค้าจริง":""}</p>`:"";return`<p class="part-category">ประเภท: ${Tu(i)}</p><p class="part-price">ราคา ${i.price.toLocaleString()} เครดิต</p>${e}<dl>${Object.entries(Ru(i)).map(([t,n])=>`<dt>${t}</dt><dd>${n}</dd>`).join("")}</dl><small>สเปกและราคาเป็นข้อมูลจำลองของเกม</small>`}function Ha(i,e=dn){return ha(i,e).issues.map(t=>t.message)}const On={centerX:2.65,centerZ:.5,width:2.8,depth:4.3,scale:1.65},mo=[["Motherboard","เมนบอร์ด"],["CPU","CPU"],["CPU Cooler","ระบายความร้อน"],["RAM","RAM"],["GPU-green","GPU · ฝั่งเขียว"],["GPU-red","GPU · ฝั่งแดง"],["GPU-blue","GPU · ฝั่งฟ้า"],["GPU","GPU · รุ่นพื้นฐาน"],["SSD","SSD"],["PSU","PSU"],["GPU Support","ขาตั้ง GPU"]],go=i=>i.type==="GPU"&&i.team?`GPU-${i.team}`:i.type,Cu=[{key:"Motherboard",xs:[1.795,2.695,3.595],z:-1.21,left:1.29,width:2.74,top:-1.55,depth:.76},{key:"CPU",xs:[1.62,2.17,2.72],z:-.55,left:1.29,width:1.67,top:-.76,depth:.43},{key:"CPU Cooler",xs:[3.55],z:-.55,left:3.15,width:.85,top:-.76,depth:.43},{key:"RAM",xs:[1.62,2.3,2.98,3.66,1.62,2.3,2.98,3.66],zs:[-.1,-.1,-.1,-.1,.14,.14,.14,.14],z:-.1,left:1.29,width:2.74,top:-.2,depth:.45},{key:"GPU",xs:[2.25],z:2,left:1.29,width:2.74,top:1.4,depth:1.2},{key:"GPU Support",xs:[3.5],z:.42,left:3.15,width:.85,top:.19,depth:.47},{key:"SSD",xs:[1.8,2.65],z:.42,left:1.29,width:1.7,top:.19,depth:.47},{key:"PSU",xs:[1.59,2.28,2.97,3.66],z:1.02,left:1.29,width:2.74,top:.75,depth:.55}];function Wi(i,e={}){const t=new Map,n=new Set,s=Cu.map(({key:r,xs:o,zs:a,z:c,left:l,top:u,width:d,depth:h})=>{const p=l+d/2,g=u+h/2,_=i.filter(x=>Pe(x.catalogId).type===r),m=_.findIndex(x=>x.instanceId===e[r]),f=Math.min(Math.floor(Math.max(0,m)/o.length)*o.length,Math.max(0,_.length-o.length)),y=r==="GPU"?.267:.25;for(const[x,v]of _.entries())t.set(v.instanceId,[o[x%o.length],y,a?.[x%o.length]??c]);if(r!=="GPU"||m>=0)for(const[x,v]of _.slice(f,f+o.length).entries())t.set(v.instanceId,[o[x],y,a?.[x]??c]),v.location==="tray"&&n.add(v.instanceId);return{key:r,left:l,top:u,width:d,depth:h,centerX:p,centerZ:g,capacity:o.length}});return{positions:t,visibleIds:n,sections:s,width:On.width,centerX:On.centerX,centerZ:On.centerZ,depth:On.depth,right:On.centerX+On.width/2}}function Pu(i,e){const t=document.createElement("button");t.className="inventory-toggle",t.textContent=`▦ Inventory · ${e.getState().inventory.length}  [I]`,t.setAttribute("aria-controls","inventory-panel"),i.append(t);const n=document.createElement("button");n.type="button",n.className="gpu-catalog-toggle",n.textContent="เลือกการ์ดจอ [G]",n.setAttribute("aria-controls","inventory-panel"),i.append(n);const s=document.createElement("aside");s.id="inventory-panel",s.className="inventory-panel",s.setAttribute("aria-label","คลังการ์ดจอ"),s.hidden=!0,s.innerHTML='<div class="inventory-heading"><h2>คลังชิ้นส่วน</h2><button type="button" class="close-inventory" aria-label="ปิดคลัง">✕</button></div><p class="inventory-note">ชิ้นส่วนสมมติ · ราคาเป็นเครดิตในเกม<br>คลิกเพื่อดูสเปกและไฮไลต์บนถาด</p><div class="inventory-list"></div><section class="part-details" aria-live="polite"></section><details><summary>ชุดอ้างอิงและขนาดเคส</summary><div class="build-reference"></div></details>',i.append(s),s.querySelector("h2").textContent="คลังการ์ดจอ";const r=s.querySelector(".inventory-list"),o=document.createElement("select");o.className="inventory-filter",o.setAttribute("aria-label","หมวดชิ้นส่วน"),o.append(new Option("การ์ดจอทั้งหมด","GPU-all"),...mo.filter(([y])=>y==="GPU"||y.startsWith("GPU-")).map(([y,x])=>new Option(x,y)));const a=document.createElement("input");a.className="inventory-search",a.type="search",a.placeholder="ค้นหาการ์ดจอ เช่น 4070, B580",a.setAttribute("aria-label","ค้นหาการ์ดจอ");const c=document.createElement("p");c.className="inventory-result",c.setAttribute("role","status"),r.before(o,a,c);const l=s.querySelector(".part-details"),u=new Map;function d(){for(const[y,x]of u)e.getState().inventory.some(v=>v.instanceId===y)||(x.remove(),u.delete(y));for(const y of e.getState().inventory){if(Pe(y.catalogId).type!=="GPU"||u.has(y.instanceId))continue;const x=Pe(y.catalogId),v=document.createElement("button");v.type="button",v.dataset.instanceId=y.instanceId,v.innerHTML=`<span class="part-type"></span><strong>${x.name}</strong><span class="part-brief"></span><span class="part-action"></span>`,v.querySelector(".part-brief").textContent=x.type==="GPU"?`${x.vramGB} GB · ${x.fans??1} พัดลม · ${x.watts} W`:x.type==="CPU"?`${x.socket} · ${x.cores} คอร์ · ${x.watts} W`:x.type==="RAM"?`${x.generation} · ${x.capacityGB} GB · ${x.speedMT} MT/s`:`${x.price.toLocaleString()} cr`,v.style.borderLeftColor=x.color,v.onclick=()=>{e.select(y.instanceId),e.getState().selectedInstanceId===y.instanceId&&e.toggle(!1)},r.append(v),u.set(y.instanceId,v)}}d(),s.querySelector(".inventory-note").textContent="เลือกการ์ดจอเพื่อนำมาวางบนถาด · CPU, RAM และอุปกรณ์อื่นเลือกจากโมเดลบนถาดได้เลย";const h=Ha(Ds.map(Pe)).length===0;s.querySelector(".build-reference").textContent=`${dn.name}: ${dn.formFactors.join(" / ")} · GPU ≤ ${dn.gpuClearanceMm} mm · Cooler ≤ ${dn.coolerClearanceMm} mm · PSU ≤ ${dn.psuClearanceMm} mm. ชุดอ้างอิง ${h?"สเปกเข้ากันได้":"ต้องตรวจสอบ"}: ${Ds.map(y=>Pe(y).name).join(" + ")}. ติดตั้ง motherboard → CPU → cooler; ถอดย้อนลำดับ`;const p=()=>{const y=e.getState(),x=Wi(y.inventory,y.benchSelection);let v=0;for(const[E,A]of u){const R=y.inventory.find(b=>b.instanceId===E),P=Pe(R.catalogId),M=(o.value==="all"||o.value==="GPU-all"&&P.type==="GPU"||go(P)===o.value)&&P.name.toLowerCase().includes(a.value.trim().toLowerCase());A.hidden=!M,M&&v++,A.querySelector(".part-type").textContent=`${P.type} · ${R.location==="installed"?"ติดตั้งแล้ว":x.visibleIds.has(E)?"บนถาด":"ในคลัง"}`,A.querySelector(".part-action").textContent=R.location==="installed"?"เลือกชิ้นส่วนในเครื่อง":x.visibleIds.has(E)?"เลือกเพื่อติดตั้ง":"นำมาวางบนถาด"}for(const E of r.querySelectorAll("h3")){let A=E.nextElementSibling,R=!1;for(;A&&A.tagName!=="H3";)A.hidden||(R=!0),A=A.nextElementSibling;E.hidden=!R}c.textContent=v?`${v} การ์ดจอ · กดรุ่นที่ต้องการเพื่อวางบนถาด`:"ไม่มีการ์ดจอในหมวดนี้ · งานลูกค้าเลือกซื้อได้ในเมนูงาน / ร้านค้า",s.dataset.category=o.value};o.onchange=p,a.oninput=p;const g=y=>{o.value=y,a.value="",p(),e.toggle(!0)};t.onclick=()=>{e.getState().inventoryOpen?e.toggle(!1):g("GPU-all")},n.onclick=()=>g("GPU-all"),s.querySelector(".close-inventory").onclick=()=>{e.toggle(!1),t.focus()};let _="";const m=e.subscribe(y=>{const x=JSON.stringify([y.caseId,y.inventoryOpen,y.selectedInstanceId,y.benchSelection,y.operation?.id,y.inventory.map(P=>[P.instanceId,P.location])]);if(x===_)return;_=x,d(),r.querySelectorAll("h3").forEach(P=>P.remove());for(const[P,M]of mo.filter(([b])=>b==="GPU"||b.startsWith("GPU-"))){const b=y.inventory.filter(N=>go(Pe(N.catalogId))===P).sort((N,F)=>Pe(N.catalogId).price-Pe(F.catalogId).price);if(!b.length)continue;const w=document.createElement("h3");w.textContent=M,r.append(w,...b.map(N=>u.get(N.instanceId)))}const v=$n(y.caseId);s.querySelector(".build-reference").textContent=`${v.name}: ${v.formFactors.join(" / ")} · GPU ≤ ${v.gpuClearanceMm} mm · Cooler ≤ ${v.coolerClearanceMm} mm. ชุดอ้างอิง: ${Ha(Ds.map(Pe),v).length?"ไม่รองรับกับเคสที่เลือก":"เข้ากันได้"} — ${Ds.map(P=>Pe(P).name).join(" + ")}`,s.hidden=!y.inventoryOpen,t.setAttribute("aria-expanded",String(y.inventoryOpen)),t.textContent=`▦ คลังการ์ดจอ ${y.inventory.filter(P=>Pe(P.catalogId).type==="GPU").length} ชิ้น [I]`,n.setAttribute("aria-expanded",String(y.inventoryOpen&&o.value==="GPU-all"));for(const[P,M]of u)M.setAttribute("aria-pressed",String(P===y.selectedInstanceId)),M.disabled=!!y.operation;p();const E=_l(y);if(!E){l.textContent="เลือกชิ้นส่วนจากรายการเพื่อดูรายละเอียด";return}const{part:A,instance:R}=E;l.innerHTML=`<h3>${A.name}</h3><p>${A.type} · ${R.location==="tray"?"บนถาด":"ติดตั้งแล้ว"}</p>${vl(A)}`}),f=y=>{y.ctrlKey||y.altKey||y.metaKey||y.repeat||y.code!=="Escape"&&y.target instanceof Element&&y.target.closest("input,textarea,select,[contenteditable]")||(y.code==="KeyI"&&(e.getState().inventoryOpen?e.toggle(!1):g("GPU-all")),y.code==="KeyG"&&g("GPU-all"),y.code==="Escape"&&(e.cancel(),e.getState().inventoryOpen&&(e.toggle(!1),t.focus())),y.code==="Delete"&&e.remove())};return window.addEventListener("keydown",f),{dispose(){m(),window.removeEventListener("keydown",f),s.remove(),t.remove(),n.remove()}}}const Vn={caseName:"FORMA / C01",camera:{position:[4.8,4.4,8.5],target:[.65,1.15,0],minDistance:3.6},pixelRatioLimit:1.75};function Iu(i,e){return i.innerHTML=`<header class="brand"><img class="brand-logo" src="./ctc-logo.png" alt="โลโก้วิทยาลัยเทคโนโลยีชลบุรี" width="64" height="64"><div><h1>CTC <span>PC BUILDER</span></h1><p>พื้นที่เล็ก ๆ สำหรับเครื่องที่คุณจะสร้าง</p></div></header>
    <aside class="station"><span class="dot"></span> WORKBENCH ${e.workstation}</aside>
    <footer><div class="scene-label"><span class="eyebrow">CHASSIS STUDY / 001</span><h2>${Vn.caseName}</h2><p>เคสเปิดข้าง · สำรวจพื้นที่ประกอบ</p></div>
    <div class="controls"><p><span>ลากเมาส์ซ้าย</span> หมุนมุมมอง <i></i><span>เลื่อนล้อเมาส์</span> ซูม <i></i><span>Q / E</span> เลื่อนซ้าย / ขวา <i></i><span>เมาส์ขวา</span> ยกเลิก / ถอดชิ้นที่เลือก</p><button id="reset-camera" type="button">↺ &nbsp; Reset Camera <kbd>R</kbd></button></div></footer>
    <section class="error" role="alert" hidden><span class="eyebrow">DISPLAY UNAVAILABLE</span><h2>เปิดฉาก 3D ไม่สำเร็จ</h2><p id="error-message"></p><button id="reload" type="button">ลองใหม่</button></section>`,i.querySelector("#reload").addEventListener("click",()=>location.reload()),{resetButton:i.querySelector("#reset-camera"),showError(t){i.querySelector(".error").hidden=!1,i.querySelector("#error-message").textContent=t,i.querySelector("#reset-camera").disabled=!0}}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pa="180",ki={ROTATE:0,DOLLY:1,PAN:2},Oi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Du=0,Va=1,Lu=2,xl=1,yl=2,wn=3,jn=0,Bt=1,hn=2,Xn=0,Gi=1,Wa=2,Xa=3,qa=4,Uu=5,ai=100,Nu=101,Fu=102,Ou=103,Bu=104,zu=200,ku=201,Gu=202,Hu=203,_o=204,vo=205,Vu=206,Wu=207,Xu=208,qu=209,$u=210,Yu=211,Ju=212,ju=213,Ku=214,xo=0,yo=1,So=2,Xi=3,Mo=4,bo=5,Eo=6,wo=7,Sl=0,Zu=1,Qu=2,qn=0,ed=1,td=2,nd=3,Ml=4,id=5,sd=6,rd=7,bl=300,qi=301,$i=302,To=303,Ao=304,Er=306,mr=1e3,li=1001,Ro=1002,Xt=1003,od=1004,Ls=1005,fn=1006,Cr=1007,ui=1008,_n=1009,El=1010,wl=1011,xs=1012,ma=1013,pi=1014,pn=1015,Rs=1016,ga=1017,_a=1018,ys=1020,Tl=35902,Al=35899,Rl=1021,Cl=1022,sn=1023,Ss=1026,Ms=1027,va=1028,xa=1029,Pl=1030,ya=1031,Sa=1033,ar=33776,cr=33777,lr=33778,ur=33779,Co=35840,Po=35841,Io=35842,Do=35843,Lo=36196,Uo=37492,No=37496,Fo=37808,Oo=37809,Bo=37810,zo=37811,ko=37812,Go=37813,Ho=37814,Vo=37815,Wo=37816,Xo=37817,qo=37818,$o=37819,Yo=37820,Jo=37821,jo=36492,Ko=36494,Zo=36495,Qo=36283,ea=36284,ta=36285,na=36286,ad=3200,cd=3201,Il=0,ld=1,kn="",Ot="srgb",Yi="srgb-linear",gr="linear",at="srgb",Si=7680,$a=519,ud=512,dd=513,hd=514,Dl=515,fd=516,pd=517,md=518,gd=519,Ya=35044,Ja="300 es",mn=2e3,_r=2001;class _i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ja=1234567;const ms=Math.PI/180,bs=180/Math.PI;function vi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function Ma(i,e){return(i%e+e)%e}function _d(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function vd(i,e,t){return i!==e?(t-i)/(e-i):0}function gs(i,e,t){return(1-t)*i+t*e}function xd(i,e,t,n){return gs(i,e,1-Math.exp(-t*n))}function yd(i,e=1){return e-Math.abs(Ma(i,e*2)-e)}function Sd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Md(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function bd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ed(i,e){return i+Math.random()*(e-i)}function wd(i){return i*(.5-Math.random())}function Td(i){i!==void 0&&(ja=i);let e=ja+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ad(i){return i*ms}function Rd(i){return i*bs}function Cd(i){return(i&i-1)===0&&i!==0}function Pd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Id(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dd(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),h=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*d,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ji={DEG2RAD:ms,RAD2DEG:bs,generateUUID:vi,clamp:qe,euclideanModulo:Ma,mapLinear:_d,inverseLerp:vd,lerp:gs,damp:xd,pingpong:yd,smoothstep:Sd,smootherstep:Md,randInt:bd,randFloat:Ed,randFloatSpread:wd,seededRandom:Td,degToRad:Ad,radToDeg:Rd,isPowerOfTwo:Cd,ceilPowerOfTwo:Pd,floorPowerOfTwo:Id,setQuaternionFromProperEuler:Dd,normalize:Lt,denormalize:Fi};class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3];const h=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==h||l!==p||u!==g){let m=1-a;const f=c*h+l*p+u*g+d*_,y=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const E=Math.sqrt(x),A=Math.atan2(E,f*y);m=Math.sin(m*A)/E,a=Math.sin(a*A)/E}const v=a*y;if(c=c*m+h*v,l=l*m+p*v,u=u*m+g*v,d=d*m+_*v,m===1-a){const E=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=E,l*=E,u*=E,d*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*d+c*p-l*h,e[t+1]=c*g+u*h+l*d-a*p,e[t+2]=l*g+u*p+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),h=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"YZX":this._x=h*u*d+l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d-h*p*g;break;case"XZY":this._x=h*u*d-l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ka.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ka.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pr.copy(this).projectOnVector(e),this.sub(Pr)}reflect(e){return this.sub(Pr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pr=new I,Ka=new vn;class Ve{constructor(e,t,n,s,r,o,a,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],y=s[1],x=s[4],v=s[7],E=s[2],A=s[5],R=s[8];return r[0]=o*_+a*y+c*E,r[3]=o*m+a*x+c*A,r[6]=o*f+a*v+c*R,r[1]=l*_+u*y+d*E,r[4]=l*m+u*x+d*A,r[7]=l*f+u*v+d*R,r[2]=h*_+p*y+g*E,r[5]=h*m+p*x+g*A,r[8]=h*f+p*v+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*r,p=l*r-o*c,g=t*d+n*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=h*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ir.makeScale(e,t)),this}rotate(e){return this.premultiply(Ir.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ir.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ir=new Ve;function Ll(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ld(){const i=vr("canvas");return i.style.display="block",i}const Za={};function Es(i){i in Za||(Za[i]=!0,console.warn(i))}function Ud(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Qa=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ec=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nd(){const i={enabled:!0,workingColorSpace:Yi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===at&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===kn?gr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Es("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Es("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Yi]:{primaries:e,whitePoint:n,transfer:gr,toXYZ:Qa,fromXYZ:ec,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:at,toXYZ:Qa,fromXYZ:ec,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),i}const tt=Nd();function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Mi;class Fd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mi===void 0&&(Mi=vr("canvas")),Mi.width=e.width,Mi.height=e.height;const s=Mi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Mi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=An(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(An(t[n]/255)*255):t[n]=An(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Od=0;class ba{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Dr(s[o].image)):r.push(Dr(s[o]))}else r=Dr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Dr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bd=0;const Lr=new I;class At extends _i{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=li,s=li,r=fn,o=ui,a=sn,c=_n,l=At.DEFAULT_ANISOTROPY,u=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=vi(),this.name="",this.source=new ba(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Lr).x}get height(){return this.source.getSize(Lr).y}get depth(){return this.source.getSize(Lr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mr:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case Ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mr:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case Ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=bl;At.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,v=(p+1)/2,E=(f+1)/2,A=(u+h)/4,R=(d+_)/4,P=(g+m)/4;return x>v&&x>E?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=A/n,r=R/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=P/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=R/r,s=P/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(h-u)/y,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zd extends _i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new At(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ba(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends zd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ul extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kd extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zt):Zt.fromBufferAttribute(r,o),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Us.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Us.copy(n.boundingBox)),Us.applyMatrix4(e.matrixWorld),this.union(Us)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(is),Ns.subVectors(this.max,is),bi.subVectors(e.a,is),Ei.subVectors(e.b,is),wi.subVectors(e.c,is),In.subVectors(Ei,bi),Dn.subVectors(wi,Ei),ei.subVectors(bi,wi);let t=[0,-In.z,In.y,0,-Dn.z,Dn.y,0,-ei.z,ei.y,In.z,0,-In.x,Dn.z,0,-Dn.x,ei.z,0,-ei.x,-In.y,In.x,0,-Dn.y,Dn.x,0,-ei.y,ei.x,0];return!Ur(t,bi,Ei,wi,Ns)||(t=[1,0,0,0,1,0,0,0,1],!Ur(t,bi,Ei,wi,Ns))?!1:(Fs.crossVectors(In,Dn),t=[Fs.x,Fs.y,Fs.z],Ur(t,bi,Ei,wi,Ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yn=[new I,new I,new I,new I,new I,new I,new I,new I],Zt=new I,Us=new Cn,bi=new I,Ei=new I,wi=new I,In=new I,Dn=new I,ei=new I,is=new I,Ns=new I,Fs=new I,ti=new I;function Ur(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ti.fromArray(i,r);const a=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),c=e.dot(ti),l=t.dot(ti),u=n.dot(ti);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Gd=new Cn,ss=new I,Nr=new I;class Qi{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ss.subVectors(e,this.center);const t=ss.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ss,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ss.copy(e.center).add(Nr)),this.expandByPoint(ss.copy(e.center).sub(Nr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Sn=new I,Fr=new I,Os=new I,Ln=new I,Or=new I,Bs=new I,Br=new I;class wr{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fr.copy(e).add(t).multiplyScalar(.5),Os.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(Fr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Os),a=Ln.dot(this.direction),c=-Ln.dot(Os),l=Ln.lengthSq(),u=Math.abs(1-o*o);let d,h,p,g;if(u>0)if(d=o*c-a,h=o*a-c,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,p=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Fr).addScaledVector(Os,h),p}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,s,r){Or.subVectors(t,e),Bs.subVectors(n,e),Br.crossVectors(Or,Bs);let o=this.direction.dot(Br),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ln.subVectors(this.origin,e);const c=a*this.direction.dot(Bs.crossVectors(Ln,Bs));if(c<0)return null;const l=a*this.direction.dot(Or.cross(Ln));if(l<0||c+l>o)return null;const u=-a*Ln.dot(Br);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,n,s,r,o,a,c,l,u,d,h,p,g,_,m){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,d,h,p,g,_,m)}set(e,t,n,s,r,o,a,c,l,u,d,h,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ti.setFromMatrixColumn(e,0).length(),r=1/Ti.setFromMatrixColumn(e,1).length(),o=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,p=c*d,g=l*u,_=l*d;t[0]=h+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,p=c*d,g=l*u,_=l*d;t[0]=h-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,p=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=g*l-p,t[8]=h*l+_,t[1]=c*d,t[5]=_*l+h,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-h*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+_,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hd,e,Vd)}lookAt(e,t,n){const s=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Un.crossVectors(n,Gt),Un.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Un.crossVectors(n,Gt)),Un.normalize(),zs.crossVectors(Gt,Un),s[0]=Un.x,s[4]=zs.x,s[8]=Gt.x,s[1]=Un.y,s[5]=zs.y,s[9]=Gt.y,s[2]=Un.z,s[6]=zs.z,s[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],y=n[3],x=n[7],v=n[11],E=n[15],A=s[0],R=s[4],P=s[8],M=s[12],b=s[1],w=s[5],N=s[9],F=s[13],O=s[2],G=s[6],H=s[10],J=s[14],W=s[3],ue=s[7],ge=s[11],Me=s[15];return r[0]=o*A+a*b+c*O+l*W,r[4]=o*R+a*w+c*G+l*ue,r[8]=o*P+a*N+c*H+l*ge,r[12]=o*M+a*F+c*J+l*Me,r[1]=u*A+d*b+h*O+p*W,r[5]=u*R+d*w+h*G+p*ue,r[9]=u*P+d*N+h*H+p*ge,r[13]=u*M+d*F+h*J+p*Me,r[2]=g*A+_*b+m*O+f*W,r[6]=g*R+_*w+m*G+f*ue,r[10]=g*P+_*N+m*H+f*ge,r[14]=g*M+_*F+m*J+f*Me,r[3]=y*A+x*b+v*O+E*W,r[7]=y*R+x*w+v*G+E*ue,r[11]=y*P+x*N+v*H+E*ge,r[15]=y*M+x*F+v*J+E*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*c*d-s*l*d-r*a*h+n*l*h+s*a*p-n*c*p)+_*(+t*c*p-t*l*h+r*o*h-s*o*p+s*l*u-r*c*u)+m*(+t*l*d-t*a*p-r*o*d+n*o*p+r*a*u-n*l*u)+f*(-s*a*u-t*c*d+t*a*h+s*o*d-n*o*h+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],y=d*m*l-_*h*l+_*c*p-a*m*p-d*c*f+a*h*f,x=g*h*l-u*m*l-g*c*p+o*m*p+u*c*f-o*h*f,v=u*_*l-g*d*l+g*a*p-o*_*p-u*a*f+o*d*f,E=g*d*c-u*_*c-g*a*h+o*_*h+u*a*m-o*d*m,A=t*y+n*x+s*v+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=y*R,e[1]=(_*h*r-d*m*r-_*s*p+n*m*p+d*s*f-n*h*f)*R,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*f+n*c*f)*R,e[3]=(d*c*r-a*h*r-d*s*l+n*h*l+a*s*p-n*c*p)*R,e[4]=x*R,e[5]=(u*m*r-g*h*r+g*s*p-t*m*p-u*s*f+t*h*f)*R,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*f-t*c*f)*R,e[7]=(o*h*r-u*c*r+u*s*l-t*h*l-o*s*p+t*c*p)*R,e[8]=v*R,e[9]=(g*d*r-u*_*r-g*n*p+t*_*p+u*n*f-t*d*f)*R,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*f+t*a*f)*R,e[11]=(u*a*r-o*d*r-u*n*l+t*d*l+o*n*p-t*a*p)*R,e[12]=E*R,e[13]=(u*_*s-g*d*s+g*n*h-t*_*h-u*n*m+t*d*m)*R,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*R,e[15]=(o*d*s-u*a*s+u*n*c-t*d*c-o*n*h+t*a*h)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,h=r*l,p=r*u,g=r*d,_=o*u,m=o*d,f=a*d,y=c*l,x=c*u,v=c*d,E=n.x,A=n.y,R=n.z;return s[0]=(1-(_+f))*E,s[1]=(p+v)*E,s[2]=(g-x)*E,s[3]=0,s[4]=(p-v)*A,s[5]=(1-(h+f))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(g+x)*R,s[9]=(m-y)*R,s[10]=(1-(h+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ti.set(s[0],s[1],s[2]).length();const o=Ti.set(s[4],s[5],s[6]).length(),a=Ti.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Qt.copy(this);const l=1/r,u=1/o,d=1/a;return Qt.elements[0]*=l,Qt.elements[1]*=l,Qt.elements[2]*=l,Qt.elements[4]*=u,Qt.elements[5]*=u,Qt.elements[6]*=u,Qt.elements[8]*=d,Qt.elements[9]*=d,Qt.elements[10]*=d,t.setFromRotationMatrix(Qt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=mn,c=!1){const l=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),p=(n+s)/(n-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===mn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===_r)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=mn,c=!1){const l=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),p=-(n+s)/(n-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===mn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===_r)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ti=new I,Qt=new Qe,Hd=new I(0,0,0),Vd=new I(1,1,1),Un=new I,zs=new I,Gt=new I,tc=new Qe,nc=new vn;class Kt{constructor(e=0,t=0,n=0,s=Kt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nc.setFromEuler(this),this.setFromQuaternion(nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kt.DEFAULT_ORDER="XYZ";class Ea{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wd=0;const ic=new I,Ai=new vn,Mn=new Qe,ks=new I,rs=new I,Xd=new I,qd=new vn,sc=new I(1,0,0),rc=new I(0,1,0),oc=new I(0,0,1),ac={type:"added"},$d={type:"removed"},Ri={type:"childadded",child:null},zr={type:"childremoved",child:null};class wt extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new I,t=new Kt,n=new vn,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Ve}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(sc,e)}rotateY(e){return this.rotateOnAxis(rc,e)}rotateZ(e){return this.rotateOnAxis(oc,e)}translateOnAxis(e,t){return ic.copy(e).applyQuaternion(this.quaternion),this.position.add(ic.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sc,e)}translateY(e){return this.translateOnAxis(rc,e)}translateZ(e){return this.translateOnAxis(oc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ks.copy(e):ks.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(rs,ks,this.up):Mn.lookAt(ks,rs,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),Ai.setFromRotationMatrix(Mn),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ac),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($d),zr.child=e,this.dispatchEvent(zr),zr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ac),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,e,Xd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,qd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}wt.DEFAULT_UP=new I(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new I,bn=new I,kr=new I,En=new I,Ci=new I,Pi=new I,cc=new I,Gr=new I,Hr=new I,Vr=new I,Wr=new lt,Xr=new lt,qr=new lt;class nn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),en.subVectors(e,t),s.cross(en);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){en.subVectors(s,t),bn.subVectors(n,t),kr.subVectors(e,t);const o=en.dot(en),a=en.dot(bn),c=en.dot(kr),l=bn.dot(bn),u=bn.dot(kr),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,En)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,En.x),c.addScaledVector(o,En.y),c.addScaledVector(a,En.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Wr.setScalar(0),Xr.setScalar(0),qr.setScalar(0),Wr.fromBufferAttribute(e,t),Xr.fromBufferAttribute(e,n),qr.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Wr,r.x),o.addScaledVector(Xr,r.y),o.addScaledVector(qr,r.z),o}static isFrontFacing(e,t,n,s){return en.subVectors(n,t),bn.subVectors(e,t),en.cross(bn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),en.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return nn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Ci.subVectors(s,n),Pi.subVectors(r,n),Gr.subVectors(e,n);const c=Ci.dot(Gr),l=Pi.dot(Gr);if(c<=0&&l<=0)return t.copy(n);Hr.subVectors(e,s);const u=Ci.dot(Hr),d=Pi.dot(Hr);if(u>=0&&d<=u)return t.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ci,o);Vr.subVectors(e,r);const p=Ci.dot(Vr),g=Pi.dot(Vr);if(g>=0&&p<=g)return t.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Pi,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return cc.subVectors(r,s),a=(d-u)/(d-u+(p-g)),t.copy(s).addScaledVector(cc,a);const f=1/(m+_+h);return o=_*f,a=h*f,t.copy(n).addScaledVector(Ci,o).addScaledVector(Pi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function $r(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=Ma(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=$r(o,r,e+1/3),this.g=$r(o,r,e),this.b=$r(o,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=Nl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return tt.workingToColorSpace(Ct.copy(this),e),Math.round(qe(Ct.r*255,0,255))*65536+Math.round(qe(Ct.g*255,0,255))*256+Math.round(qe(Ct.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Ct.copy(this),t);const n=Ct.r,s=Ct.g,r=Ct.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Ot){tt.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,s=Ct.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(Gs);const n=gs(Nn.h,Gs.h,t),s=gs(Nn.s,Gs.s,t),r=gs(Nn.l,Gs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Ke;Ke.NAMES=Nl;let Yd=0;class es extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=Gi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_o,this.blendDst=vo,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$a,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_o&&(n.blendSrc=this.blendSrc),this.blendDst!==vo&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$a&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rn extends es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=Sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new I,Hs=new le;let Jd=0;class rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ya,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hs.fromBufferAttribute(this,t),Hs.applyMatrix3(e),this.setXY(t,Hs.x,Hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ya&&(e.usage=this.usage),e}}class Fl extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ol extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class st extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jd=0;const Jt=new Qe,Yr=new wt,Ii=new I,Ht=new Cn,os=new Cn,bt=new I;class Pt extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ll(e)?Ol:Fl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Yr.lookAt(e),Yr.updateMatrix(),this.applyMatrix4(Yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new st(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];os.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(Ht.min,os.min),Ht.expandByPoint(bt),bt.addVectors(Ht.max,os.max),Ht.expandByPoint(bt)):(Ht.expandByPoint(os.min),Ht.expandByPoint(os.max))}Ht.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)bt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(bt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)bt.fromBufferAttribute(a,l),c&&(Ii.fromBufferAttribute(e,l),bt.add(Ii)),s=Math.max(s,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new I,c[P]=new I;const l=new I,u=new I,d=new I,h=new le,p=new le,g=new le,_=new I,m=new I;function f(P,M,b){l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,b),h.fromBufferAttribute(r,P),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,b),u.sub(l),d.sub(l),p.sub(h),g.sub(h);const w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(w),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(w),a[P].add(_),a[M].add(_),a[b].add(_),c[P].add(m),c[M].add(m),c[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,M=y.length;P<M;++P){const b=y[P],w=b.start,N=b.count;for(let F=w,O=w+N;F<O;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new I,v=new I,E=new I,A=new I;function R(P){E.fromBufferAttribute(s,P),A.copy(E);const M=a[P];x.copy(M),x.sub(E.multiplyScalar(E.dot(M))).normalize(),v.crossVectors(A,M);const w=v.dot(c[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,w)}for(let P=0,M=y.length;P<M;++P){const b=y[P],w=b.start,N=b.count;for(let F=w,O=w+N;F<O;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,u=new I,d=new I;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let f=0;f<u;f++)h[g++]=l[p++]}return new rn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],p=e(h,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lc=new Qe,ni=new wr,Vs=new Qi,uc=new I,Ws=new I,Xs=new I,qs=new I,Jr=new I,$s=new I,dc=new I,Ys=new I;class Se extends wt{constructor(e=new Pt,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){$s.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(Jr.fromBufferAttribute(d,e),o?$s.addScaledVector(Jr,u):$s.addScaledVector(Jr.sub(t),u))}t.add($s)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(r),ni.copy(e.ray).recast(e.near),!(Vs.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Vs,uc)===null||ni.origin.distanceToSquared(uc)>(e.far-e.near)**2))&&(lc.copy(r).invert(),ni.copy(e.ray).applyMatrix4(lc),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,E=x;v<E;v+=3){const A=a.getX(v),R=a.getX(v+1),P=a.getX(v+2);s=Js(this,f,e,n,l,u,d,A,R,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=Js(this,o,e,n,l,u,d,y,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,E=x;v<E;v+=3){const A=v,R=v+1,P=v+2;s=Js(this,f,e,n,l,u,d,A,R,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=m,x=m+1,v=m+2;s=Js(this,o,e,n,l,u,d,y,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Kd(i,e,t,n,s,r,o,a){let c;if(e.side===Bt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===jn,a),c===null)return null;Ys.copy(a),Ys.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ys);return l<t.near||l>t.far?null:{distance:l,point:Ys.clone(),object:i}}function Js(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Ws),i.getVertexPosition(c,Xs),i.getVertexPosition(l,qs);const u=Kd(i,e,t,n,Ws,Xs,qs,dc);if(u){const d=new I;nn.getBarycoord(dc,Ws,Xs,qs,d),s&&(u.uv=nn.getInterpolatedAttribute(s,a,c,l,d,new le)),r&&(u.uv1=nn.getInterpolatedAttribute(r,a,c,l,d,new le)),o&&(u.normal=nn.getInterpolatedAttribute(o,a,c,l,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new I,materialIndex:0};nn.getNormal(Ws,Xs,qs,h.normal),u.face=h,u.barycoord=d}return u}class dt extends Pt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(d,2));function g(_,m,f,y,x,v,E,A,R,P,M){const b=v/R,w=E/P,N=v/2,F=E/2,O=A/2,G=R+1,H=P+1;let J=0,W=0;const ue=new I;for(let ge=0;ge<H;ge++){const Me=ge*w-F;for(let ke=0;ke<G;ke++){const He=ke*b-N;ue[_]=He*y,ue[m]=Me*x,ue[f]=O,l.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[f]=A>0?1:-1,u.push(ue.x,ue.y,ue.z),d.push(ke/R),d.push(1-ge/P),J+=1}}for(let ge=0;ge<P;ge++)for(let Me=0;Me<R;Me++){const ke=h+Me+G*ge,He=h+Me+G*(ge+1),Je=h+(Me+1)+G*(ge+1),We=h+(Me+1)+G*ge;c.push(ke,He,We),c.push(He,Je,We),W+=6}a.addGroup(p,W,M),p+=W,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ji(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ut(i){const e={};for(let t=0;t<i.length;t++){const n=ji(i[t]);for(const s in n)e[s]=n[s]}return e}function Zd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Qd={clone:ji,merge:Ut};var eh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,th=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eh,this.fragmentShader=th,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=Zd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class zl extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fn=new I,hc=new le,fc=new le;class Vt extends zl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z)}getViewSize(e,t){return this.getViewBounds(e,hc,fc),t.subVectors(fc,hc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ms*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Di=-90,Li=1;class nh extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Vt(Di,Li,e,t);s.layers=this.layers,this.add(s);const r=new Vt(Di,Li,e,t);r.layers=this.layers,this.add(r);const o=new Vt(Di,Li,e,t);o.layers=this.layers,this.add(o);const a=new Vt(Di,Li,e,t);a.layers=this.layers,this.add(a);const c=new Vt(Di,Li,e,t);c.layers=this.layers,this.add(c);const l=new Vt(Di,Li,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_r)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class kl extends At{constructor(e=[],t=qi,n,s,r,o,a,c,l,u){super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ih extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new kl(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dt(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:Xn});r.uniforms.tEquirect.value=t;const o=new Se(s,r),a=t.minFilter;return t.minFilter===ui&&(t.minFilter=fn),new nh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class nt extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sh={type:"move"};class jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sh)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class wa{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ke(e),this.near=t,this.far=n}clone(){return new wa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class rh extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kt,this.environmentIntensity=1,this.environmentRotation=new Kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gl extends At{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Xt,u=Xt,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pc extends rn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ui=new Qe,mc=new Qe,js=[],gc=new Cn,oh=new Qe,as=new Se,cs=new Qi;class Bn extends Se{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,oh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ui),gc.copy(e.boundingBox).applyMatrix4(Ui),this.boundingBox.union(gc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ui),cs.copy(e.boundingSphere).applyMatrix4(Ui),this.boundingSphere.union(cs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(as.geometry=this.geometry,as.material=this.material,as.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cs.copy(this.boundingSphere),cs.applyMatrix4(n),e.ray.intersectsSphere(cs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ui),mc.multiplyMatrices(n,Ui),as.matrixWorld=mc,as.raycast(e,js);for(let o=0,a=js.length;o<a;o++){const c=js[o];c.instanceId=r,c.object=this,t.push(c)}js.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new pc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gl(new Float32Array(s*this.count),s,this.count,va,pn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Kr=new I,ah=new I,ch=new Ve;class zn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Kr.subVectors(n,t).cross(ah.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Kr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ch.getNormalMatrix(e),s=this.coplanarPoint(Kr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new Qi,lh=new le(.5,.5),Ks=new I;class Ta{constructor(e=new zn,t=new zn,n=new zn,s=new zn,r=new zn,o=new zn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],y=r[12],x=r[13],v=r[14],E=r[15];if(s[0].setComponents(l-o,p-u,f-g,E-y).normalize(),s[1].setComponents(l+o,p+u,f+g,E+y).normalize(),s[2].setComponents(l+a,p+d,f+_,E+x).normalize(),s[3].setComponents(l-a,p-d,f-_,E-x).normalize(),n)s[4].setComponents(c,h,m,v).normalize(),s[5].setComponents(l-c,p-h,f-m,E-v).normalize();else if(s[4].setComponents(l-c,p-h,f-m,E-v).normalize(),t===mn)s[5].setComponents(l+c,p+h,f+m,E+v).normalize();else if(t===_r)s[5].setComponents(c,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){ii.center.set(0,0,0);const t=lh.distanceTo(e.center);return ii.radius=.7071067811865476+t,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ks.x=s.normal.x>0?e.max.x:e.min.x,Ks.y=s.normal.y>0?e.max.y:e.min.y,Ks.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hl extends es{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xr=new I,yr=new I,_c=new Qe,ls=new wr,Zs=new Qi,Zr=new I,vc=new I;class uh extends wt{constructor(e=new Pt,t=new Hl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)xr.fromBufferAttribute(t,s-1),yr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=xr.distanceTo(yr);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(s),Zs.radius+=r,e.ray.intersectsSphere(Zs)===!1)return;_c.copy(s).invert(),ls.copy(e.ray).applyMatrix4(_c);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=u.getX(_),y=u.getX(_+1),x=Qs(this,e,ls,c,f,y,_);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),f=Qs(this,e,ls,c,_,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=Qs(this,e,ls,c,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){const _=Qs(this,e,ls,c,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Qs(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(xr.fromBufferAttribute(a,s),yr.fromBufferAttribute(a,r),t.distanceSqToSegment(xr,yr,Zr,vc)>n)return;Zr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Zr);if(!(l<e.near||l>e.far))return{distance:l,point:vc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const xc=new I,yc=new I;class Vl extends uh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)xc.fromBufferAttribute(t,s),yc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+xc.distanceTo(yc);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dh extends At{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wl extends At{constructor(e,t,n=pi,s,r,o,a=Xt,c=Xt,l,u=Ss,d=1){if(u!==Ss&&u!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ba(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Xl extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Aa extends Pt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new I,u=new le;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const p=n+d/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(a,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Et extends Pt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],p=[];let g=0;const _=[],m=n/2;let f=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new st(d,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(p,2));function y(){const v=new I,E=new I;let A=0;const R=(t-e)/n;for(let P=0;P<=r;P++){const M=[],b=P/r,w=b*(t-e)+e;for(let N=0;N<=s;N++){const F=N/s,O=F*c+a,G=Math.sin(O),H=Math.cos(O);E.x=w*G,E.y=-b*n+m,E.z=w*H,d.push(E.x,E.y,E.z),v.set(G,R,H).normalize(),h.push(v.x,v.y,v.z),p.push(F,1-b),M.push(g++)}_.push(M)}for(let P=0;P<s;P++)for(let M=0;M<r;M++){const b=_[M][P],w=_[M+1][P],N=_[M+1][P+1],F=_[M][P+1];(e>0||M!==0)&&(u.push(b,w,F),A+=3),(t>0||M!==r-1)&&(u.push(w,N,F),A+=3)}l.addGroup(f,A,0),f+=A}function x(v){const E=g,A=new le,R=new I;let P=0;const M=v===!0?e:t,b=v===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*b,0),h.push(0,b,0),p.push(.5,.5),g++;const w=g;for(let N=0;N<=s;N++){const O=N/s*c+a,G=Math.cos(O),H=Math.sin(O);R.x=M*H,R.y=m*b,R.z=M*G,d.push(R.x,R.y,R.z),h.push(0,b,0),A.x=G*.5+.5,A.y=H*.5*b+.5,p.push(A.x,A.y),g++}for(let N=0;N<s;N++){const F=E+N,O=w+N;v===!0?u.push(O,O+1,F):u.push(O+1,O,F),P+=3}l.addGroup(f,P,v===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Et(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ra extends Et{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ra(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,p=(o-u)/h;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new le:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new I,s=[],r=[],o=[],a=new I,c=new Qe;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(qe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(qe(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ca extends xn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new le){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,p=l-this.aY;c=h*u-p*d+this.aX,l=h*d+p*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class hh extends Ca{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Pa(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,p*=u,s(o,a,h,p)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const er=new I,Qr=new Pa,eo=new Pa,to=new Pa;class dr extends xn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(er.subVectors(s[0],s[1]).add(s[0]),l=er);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(er.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=er),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Qr.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,_,m),eo.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,_,m),to.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Qr.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),eo.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),to.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(Qr.calc(c),eo.calc(c),to.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Sc(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function fh(i,e){const t=1-i;return t*t*e}function ph(i,e){return 2*(1-i)*i*e}function mh(i,e){return i*i*e}function _s(i,e,t,n){return fh(i,e)+ph(i,t)+mh(i,n)}function gh(i,e){const t=1-i;return t*t*t*e}function _h(i,e){const t=1-i;return 3*t*t*i*e}function vh(i,e){return 3*(1-i)*i*i*e}function xh(i,e){return i*i*i*e}function vs(i,e,t,n,s){return gh(i,e)+_h(i,t)+vh(i,n)+xh(i,s)}class ql extends xn{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vs(e,s.x,r.x,o.x,a.x),vs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class yh extends xn{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vs(e,s.x,r.x,o.x,a.x),vs(e,s.y,r.y,o.y,a.y),vs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $l extends xn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ia extends xn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yl extends xn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(_s(e,s.x,r.x,o.x),_s(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ia extends xn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(_s(e,s.x,r.x,o.x),_s(e,s.y,r.y,o.y),_s(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jl extends xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Sc(a,c.x,l.x,u.x,d.x),Sc(a,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new le().fromArray(s))}return this}}var Sr=Object.freeze({__proto__:null,ArcCurve:hh,CatmullRomCurve3:dr,CubicBezierCurve:ql,CubicBezierCurve3:yh,EllipseCurve:Ca,LineCurve:$l,LineCurve3:ia,QuadraticBezierCurve:Yl,QuadraticBezierCurve3:Ia,SplineCurve:Jl});class jl extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sr[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Sr[s.type]().fromJSON(s))}return this}}class Gn extends jl{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new $l(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Yl(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new ql(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Jl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Ca(e,t,n,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Wt extends Gn{constructor(e){super(e),this.uuid=vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Gn().fromJSON(s))}return this}}function Sh(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Kl(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Th(i,e,r,t)),i.length>80*t){a=1/0,c=1/0;let u=-1/0,d=-1/0;for(let h=t;h<s;h+=t){const p=i[h],g=i[h+1];p<a&&(a=p),g<c&&(c=g),p>u&&(u=p),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return ws(r,o,t,a,c,l,0),o}function Kl(i,e,t,n,s){let r;if(s===Oh(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Mc(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Mc(o/n|0,i[o],i[o+1],r);return r&&Ki(r,r.next)&&(As(r),r=r.next),r}function gi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ki(t,t.next)||gt(t.prev,t,t.next)===0)){if(As(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ws(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Ih(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?bh(i,n,s,r):Mh(i)){e.push(c.i,i.i,l.i),As(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Eh(gi(i),e),ws(i,e,t,n,s,r,2)):o===2&&wh(i,e,t,n,s,r):ws(gi(i),e,t,n,s,r,1);break}}}function Mh(i){const e=i.prev,t=i,n=i.next;if(gt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(s,r,o),d=Math.min(a,c,l),h=Math.max(s,r,o),p=Math.max(a,c,l);let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=p&&hs(s,a,r,c,o,l,g.x,g.y)&&gt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function bh(i,e,t,n){const s=i.prev,r=i,o=i.next;if(gt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,h=o.y,p=Math.min(a,c,l),g=Math.min(u,d,h),_=Math.max(a,c,l),m=Math.max(u,d,h),f=sa(p,g,e,t,n),y=sa(_,m,e,t,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=f&&v&&v.z<=y;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&hs(a,u,c,d,l,h,x.x,x.y)&&gt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&hs(a,u,c,d,l,h,v.x,v.y)&&gt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&hs(a,u,c,d,l,h,x.x,x.y)&&gt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&hs(a,u,c,d,l,h,v.x,v.y)&&gt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Eh(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Ki(n,s)&&Ql(n,t,t.next,s)&&Ts(n,s)&&Ts(s,n)&&(e.push(n.i,t.i,s.i),As(t),As(t.next),t=i=s),t=t.next}while(t!==i);return gi(t)}function wh(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Uh(o,a)){let c=eu(o,a);o=gi(o,o.next),c=gi(c,c.next),ws(o,e,t,n,s,r,0),ws(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Th(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Kl(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Lh(l))}s.sort(Ah);for(let r=0;r<s.length;r++)t=Rh(s[r],t);return t}function Ah(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Rh(i,e){const t=Ch(i,e);if(!t)return e;const n=eu(t,i);return gi(n,n.next),gi(t,t.next)}function Ch(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(Ki(i,t))return t;do{if(Ki(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Zl(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){const d=Math.abs(s-t.y)/(n-t.x);Ts(t,i)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&Ph(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function Ph(i,e){return gt(i.prev,i,e.prev)<0&&gt(e.next,i,i.next)<0}function Ih(i,e,t,n){let s=i;do s.z===0&&(s.z=sa(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Dh(s)}function Dh(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function sa(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Lh(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Zl(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function hs(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Zl(i,e,t,n,s,r,o,a)}function Uh(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Nh(i,e)&&(Ts(i,e)&&Ts(e,i)&&Fh(i,e)&&(gt(i.prev,i,e.prev)||gt(i,e.prev,e))||Ki(i,e)&&gt(i.prev,i,i.next)>0&&gt(e.prev,e,e.next)>0)}function gt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ki(i,e){return i.x===e.x&&i.y===e.y}function Ql(i,e,t,n){const s=nr(gt(i,e,t)),r=nr(gt(i,e,n)),o=nr(gt(t,n,i)),a=nr(gt(t,n,e));return!!(s!==r&&o!==a||s===0&&tr(i,t,e)||r===0&&tr(i,n,e)||o===0&&tr(t,i,n)||a===0&&tr(t,e,n))}function tr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function nr(i){return i>0?1:i<0?-1:0}function Nh(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ql(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ts(i,e){return gt(i.prev,i,i.next)<0?gt(i,e,i.next)>=0&&gt(i,i.prev,e)>=0:gt(i,e,i.prev)<0||gt(i,i.next,e)<0}function Fh(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function eu(i,e){const t=ra(i.i,i.x,i.y),n=ra(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Mc(i,e,t,n){const s=ra(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function As(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ra(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Oh(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Bh{static triangulate(e,t,n=2){return Sh(e,t,n)}}class Tn{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Tn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];bc(e),Ec(n,e);let o=e.length;t.forEach(bc);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Ec(n,t[c]);const a=Bh.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function bc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ec(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class jt extends Pt{constructor(e=new Wt([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new st(s,3)),this.setAttribute("uv",new st(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:zh;let x,v=!1,E,A,R,P;f&&(x=f.getSpacedPoints(u),v=!0,h=!1,E=f.computeFrenetFrames(u,!1),A=new I,R=new I,P=new I),h||(m=0,p=0,g=0,_=0);const M=a.extractPoints(l);let b=M.shape;const w=M.holes;if(!Tn.isClockWise(b)){b=b.reverse();for(let ne=0,ee=w.length;ne<ee;ne++){const Q=w[ne];Tn.isClockWise(Q)&&(w[ne]=Q.reverse())}}function F(ne){const Q=10000000000000001e-36;let j=ne[0];for(let he=1;he<=ne.length;he++){const oe=he%ne.length,pe=ne[oe],Ge=pe.x-j.x,Le=pe.y-j.y,C=Ge*Ge+Le*Le,S=Math.max(Math.abs(pe.x),Math.abs(pe.y),Math.abs(j.x),Math.abs(j.y)),k=Q*S*S;if(C<=k){ne.splice(oe,1),he--;continue}j=pe}}F(b),w.forEach(F);const O=w.length,G=b;for(let ne=0;ne<O;ne++){const ee=w[ne];b=b.concat(ee)}function H(ne,ee,Q){return ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(ee,Q)}const J=b.length;function W(ne,ee,Q){let j,he,oe;const pe=ne.x-ee.x,Ge=ne.y-ee.y,Le=Q.x-ne.x,C=Q.y-ne.y,S=pe*pe+Ge*Ge,k=pe*C-Ge*Le;if(Math.abs(k)>Number.EPSILON){const q=Math.sqrt(S),ie=Math.sqrt(Le*Le+C*C),Y=ee.x-Ge/q,Ce=ee.y+pe/q,fe=Q.x-C/ie,Te=Q.y+Le/ie,Ae=((fe-Y)*C-(Te-Ce)*Le)/(pe*C-Ge*Le);j=Y+pe*Ae-ne.x,he=Ce+Ge*Ae-ne.y;const ce=j*j+he*he;if(ce<=2)return new le(j,he);oe=Math.sqrt(ce/2)}else{let q=!1;pe>Number.EPSILON?Le>Number.EPSILON&&(q=!0):pe<-Number.EPSILON?Le<-Number.EPSILON&&(q=!0):Math.sign(Ge)===Math.sign(C)&&(q=!0),q?(j=-Ge,he=pe,oe=Math.sqrt(S)):(j=pe,he=Ge,oe=Math.sqrt(S/2))}return new le(j/oe,he/oe)}const ue=[];for(let ne=0,ee=G.length,Q=ee-1,j=ne+1;ne<ee;ne++,Q++,j++)Q===ee&&(Q=0),j===ee&&(j=0),ue[ne]=W(G[ne],G[Q],G[j]);const ge=[];let Me,ke=ue.concat();for(let ne=0,ee=O;ne<ee;ne++){const Q=w[ne];Me=[];for(let j=0,he=Q.length,oe=he-1,pe=j+1;j<he;j++,oe++,pe++)oe===he&&(oe=0),pe===he&&(pe=0),Me[j]=W(Q[j],Q[oe],Q[pe]);ge.push(Me),ke=ke.concat(Me)}let He;if(m===0)He=Tn.triangulateShape(G,w);else{const ne=[],ee=[];for(let Q=0;Q<m;Q++){const j=Q/m,he=p*Math.cos(j*Math.PI/2),oe=g*Math.sin(j*Math.PI/2)+_;for(let pe=0,Ge=G.length;pe<Ge;pe++){const Le=H(G[pe],ue[pe],oe);De(Le.x,Le.y,-he),j===0&&ne.push(Le)}for(let pe=0,Ge=O;pe<Ge;pe++){const Le=w[pe];Me=ge[pe];const C=[];for(let S=0,k=Le.length;S<k;S++){const q=H(Le[S],Me[S],oe);De(q.x,q.y,-he),j===0&&C.push(q)}j===0&&ee.push(C)}}He=Tn.triangulateShape(ne,ee)}const Je=He.length,We=g+_;for(let ne=0;ne<J;ne++){const ee=h?H(b[ne],ke[ne],We):b[ne];v?(R.copy(E.normals[0]).multiplyScalar(ee.x),A.copy(E.binormals[0]).multiplyScalar(ee.y),P.copy(x[0]).add(R).add(A),De(P.x,P.y,P.z)):De(ee.x,ee.y,0)}for(let ne=1;ne<=u;ne++)for(let ee=0;ee<J;ee++){const Q=h?H(b[ee],ke[ee],We):b[ee];v?(R.copy(E.normals[ne]).multiplyScalar(Q.x),A.copy(E.binormals[ne]).multiplyScalar(Q.y),P.copy(x[ne]).add(R).add(A),De(P.x,P.y,P.z)):De(Q.x,Q.y,d/u*ne)}for(let ne=m-1;ne>=0;ne--){const ee=ne/m,Q=p*Math.cos(ee*Math.PI/2),j=g*Math.sin(ee*Math.PI/2)+_;for(let he=0,oe=G.length;he<oe;he++){const pe=H(G[he],ue[he],j);De(pe.x,pe.y,d+Q)}for(let he=0,oe=w.length;he<oe;he++){const pe=w[he];Me=ge[he];for(let Ge=0,Le=pe.length;Ge<Le;Ge++){const C=H(pe[Ge],Me[Ge],j);v?De(C.x,C.y+x[u-1].y,x[u-1].x+Q):De(C.x,C.y,d+Q)}}}Z(),se();function Z(){const ne=s.length/3;if(h){let ee=0,Q=J*ee;for(let j=0;j<Je;j++){const he=He[j];we(he[2]+Q,he[1]+Q,he[0]+Q)}ee=u+m*2,Q=J*ee;for(let j=0;j<Je;j++){const he=He[j];we(he[0]+Q,he[1]+Q,he[2]+Q)}}else{for(let ee=0;ee<Je;ee++){const Q=He[ee];we(Q[2],Q[1],Q[0])}for(let ee=0;ee<Je;ee++){const Q=He[ee];we(Q[0]+J*u,Q[1]+J*u,Q[2]+J*u)}}n.addGroup(ne,s.length/3-ne,0)}function se(){const ne=s.length/3;let ee=0;be(G,ee),ee+=G.length;for(let Q=0,j=w.length;Q<j;Q++){const he=w[Q];be(he,ee),ee+=he.length}n.addGroup(ne,s.length/3-ne,1)}function be(ne,ee){let Q=ne.length;for(;--Q>=0;){const j=Q;let he=Q-1;he<0&&(he=ne.length-1);for(let oe=0,pe=u+m*2;oe<pe;oe++){const Ge=J*oe,Le=J*(oe+1),C=ee+j+Ge,S=ee+he+Ge,k=ee+he+Le,q=ee+j+Le;$e(C,S,k,q)}}}function De(ne,ee,Q){c.push(ne),c.push(ee),c.push(Q)}function we(ne,ee,Q){it(ne),it(ee),it(Q);const j=s.length/3,he=y.generateTopUV(n,s,j-3,j-2,j-1);D(he[0]),D(he[1]),D(he[2])}function $e(ne,ee,Q,j){it(ne),it(ee),it(j),it(ee),it(Q),it(j);const he=s.length/3,oe=y.generateSideWallUV(n,s,he-6,he-3,he-2,he-1);D(oe[0]),D(oe[1]),D(oe[3]),D(oe[1]),D(oe[2]),D(oe[3])}function it(ne){s.push(c[ne*3+0]),s.push(c[ne*3+1]),s.push(c[ne*3+2])}function D(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return kh(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Sr[s.type]().fromJSON(s)),new jt(n,e.options)}}const zh={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new le(r,o),new le(a,c),new le(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[s*3],p=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new le(o,1-c),new le(l,1-d),new le(h,1-g),new le(_,1-f)]:[new le(a,1-c),new le(u,1-d),new le(p,1-g),new le(m,1-f)]}};function kh(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class xi extends Pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,d=e/a,h=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const y=f*h-o;for(let x=0;x<l;x++){const v=x*d-r;g.push(v,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<a;y++){const x=y+l*f,v=y+l*(f+1),E=y+1+l*(f+1),A=y+1+l*f;p.push(x,v,A),p.push(v,E,A)}this.setIndex(p),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Da extends Pt{constructor(e=new Wt([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new st(s,3)),this.setAttribute("normal",new st(r,3)),this.setAttribute("uv",new st(o,2));function l(u){const d=s.length/3,h=u.extractPoints(t);let p=h.shape;const g=h.holes;Tn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){const y=g[m];Tn.isClockWise(y)===!0&&(g[m]=y.reverse())}const _=Tn.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){const y=g[m];p=p.concat(y)}for(let m=0,f=p.length;m<f;m++){const y=p[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,f=_.length;m<f;m++){const y=_[m],x=y[0]+d,v=y[1]+d,E=y[2]+d;n.push(x,v,E),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Gh(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new Da(n,e.curveSegments)}}function Gh(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class Cs extends Pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new I,h=new I,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const y=[],x=f/n;let v=0;f===0&&o===0?v=.5/t:f===n&&c===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){const A=E/t;d.x=-e*Math.cos(s+A*r)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(s+A*r)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(A+v,1-x),y.push(l++)}u.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){const x=u[f][y+1],v=u[f][y],E=u[f+1][y],A=u[f+1][y+1];(f!==0||o>0)&&p.push(x,v,A),(f!==n-1||c<Math.PI)&&p.push(v,E,A)}this.setIndex(p),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class gn extends Pt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new I,d=new I,h=new I;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,y=(s+1)*p+g;o.push(_,m,y),o.push(m,f,y)}this.setIndex(o),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Bi extends Pt{constructor(e=new Ia(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,c=new I,l=new le;let u=new I;const d=[],h=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new st(d,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(p,2));function _(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),y(),f()}function m(x){u=e.getPointAt(x/t,u);const v=o.normals[x],E=o.binormals[x];for(let A=0;A<=s;A++){const R=A/s*Math.PI*2,P=Math.sin(R),M=-Math.cos(R);c.x=M*v.x+P*E.x,c.y=M*v.y+P*E.y,c.z=M*v.z+P*E.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,d.push(a.x,a.y,a.z)}}function f(){for(let x=1;x<=t;x++)for(let v=1;v<=s;v++){const E=(s+1)*(x-1)+(v-1),A=(s+1)*x+(v-1),R=(s+1)*x+v,P=(s+1)*(x-1)+v;g.push(E,A,P),g.push(A,R,P)}}function y(){for(let x=0;x<=t;x++)for(let v=0;v<=s;v++)l.x=x/t,l.y=v/s,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Bi(new Sr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ye extends es{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Il,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hh extends es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vh extends es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class La extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Wh extends La{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const no=new Qe,wc=new I,Tc=new I;class tu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ta,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(wc),Tc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tc),t.updateMatrixWorld(),no.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(no,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(no)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ac=new Qe,us=new I,io=new I;class Xh extends tu{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),us.setFromMatrixPosition(e.matrixWorld),n.position.copy(us),io.copy(n.position),io.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(io),n.updateMatrixWorld(),s.makeTranslation(-us.x,-us.y,-us.z),Ac.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ac,n.coordinateSystem,n.reversedDepth)}}class qh extends La{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Xh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class nu extends zl{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $h extends tu{constructor(){super(new nu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rc extends La{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new $h}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Yh extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Cc=new Qe;class Jh{constructor(e,t,n=0,s=1/0){this.ray=new wr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ea,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Cc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cc),this}intersectObject(e,t=!0,n=[]){return oa(e,this,n,t),n.sort(Pc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)oa(e[s],this,n,t);return n.sort(Pc),n}}function Pc(i,e){return i.distance-e.distance}function oa(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)oa(r[o],e,t,!0)}}class Ic{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jh extends _i{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Dc(i,e,t,n){const s=Kh(n);switch(t){case Rl:return i*e;case va:return i*e/s.components*s.byteLength;case xa:return i*e/s.components*s.byteLength;case Pl:return i*e*2/s.components*s.byteLength;case ya:return i*e*2/s.components*s.byteLength;case Cl:return i*e*3/s.components*s.byteLength;case sn:return i*e*4/s.components*s.byteLength;case Sa:return i*e*4/s.components*s.byteLength;case ar:case cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lr:case ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Po:case Do:return Math.max(i,16)*Math.max(e,8)/4;case Co:case Io:return Math.max(i,8)*Math.max(e,8)/2;case Lo:case Uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case No:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ko:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case qo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $o:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Yo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Jo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case jo:case Ko:case Zo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qo:case ea:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ta:case na:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kh(i){switch(i){case _n:case El:return{byteLength:1,components:1};case xs:case wl:case Rs:return{byteLength:2,components:1};case ga:case _a:return{byteLength:2,components:4};case pi:case ma:case pn:return{byteLength:4,components:1};case Tl:case Al:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function iu(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Zh(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Qh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ef=`#ifdef USE_ALPHAHASH
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
#endif`,tf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,of=`#ifdef USE_AOMAP
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
#endif`,af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cf=`#ifdef USE_BATCHING
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
#endif`,lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ff=`#ifdef USE_IRIDESCENCE
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
#endif`,pf=`#ifdef USE_BUMPMAP
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
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bf=`#define PI 3.141592653589793
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
} // validated`,Ef=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wf=`vec3 transformedNormal = objectNormal;
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
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",If=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Df=`#ifdef USE_ENVMAP
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
#endif`,Lf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Nf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
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
#endif`,Of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gf=`#ifdef USE_GRADIENTMAP
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
}`,Hf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xf=`uniform bool receiveShadow;
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
#endif`,qf=`#ifdef USE_ENVMAP
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
#endif`,$f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kf=`PhysicalMaterial material;
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
#endif`,Zf=`struct PhysicalMaterial {
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
}`,Qf=`
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
#endif`,ep=`#if defined( RE_IndirectDiffuse )
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
#endif`,tp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,np=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lp=`#if defined( USE_POINTS_UV )
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
#endif`,up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mp=`#ifdef USE_MORPHTARGETS
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
#endif`,gp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mp=`#ifdef USE_NORMALMAP
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
#endif`,bp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Op=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bp=`float getShadowMask() {
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
}`,zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kp=`#ifdef USE_SKINNING
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
#endif`,Gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hp=`#ifdef USE_SKINNING
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
#endif`,Vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$p=`#ifdef USE_TRANSMISSION
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
#endif`,Yp=`#ifdef USE_TRANSMISSION
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,em=`uniform sampler2D t2D;
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`#include <common>
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
}`,om=`#if DEPTH_PACKING == 3200
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
}`,am=`#define DISTANCE
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
}`,cm=`#define DISTANCE
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`uniform float scale;
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
}`,hm=`uniform vec3 diffuse;
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
}`,fm=`#include <common>
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
}`,pm=`uniform vec3 diffuse;
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
}`,mm=`#define LAMBERT
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
}`,gm=`#define LAMBERT
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
}`,_m=`#define MATCAP
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
}`,vm=`#define MATCAP
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
}`,xm=`#define NORMAL
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
}`,ym=`#define NORMAL
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
}`,Sm=`#define PHONG
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
}`,Mm=`#define PHONG
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
}`,bm=`#define STANDARD
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
}`,Em=`#define STANDARD
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
}`,wm=`#define TOON
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
}`,Tm=`#define TOON
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
}`,Am=`uniform float size;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Cm=`#include <common>
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
}`,Pm=`uniform vec3 color;
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
}`,Im=`uniform float rotation;
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
}`,Dm=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Qh,alphahash_pars_fragment:ef,alphamap_fragment:tf,alphamap_pars_fragment:nf,alphatest_fragment:sf,alphatest_pars_fragment:rf,aomap_fragment:of,aomap_pars_fragment:af,batching_pars_vertex:cf,batching_vertex:lf,begin_vertex:uf,beginnormal_vertex:df,bsdfs:hf,iridescence_fragment:ff,bumpmap_pars_fragment:pf,clipping_planes_fragment:mf,clipping_planes_pars_fragment:gf,clipping_planes_pars_vertex:_f,clipping_planes_vertex:vf,color_fragment:xf,color_pars_fragment:yf,color_pars_vertex:Sf,color_vertex:Mf,common:bf,cube_uv_reflection_fragment:Ef,defaultnormal_vertex:wf,displacementmap_pars_vertex:Tf,displacementmap_vertex:Af,emissivemap_fragment:Rf,emissivemap_pars_fragment:Cf,colorspace_fragment:Pf,colorspace_pars_fragment:If,envmap_fragment:Df,envmap_common_pars_fragment:Lf,envmap_pars_fragment:Uf,envmap_pars_vertex:Nf,envmap_physical_pars_fragment:qf,envmap_vertex:Ff,fog_vertex:Of,fog_pars_vertex:Bf,fog_fragment:zf,fog_pars_fragment:kf,gradientmap_pars_fragment:Gf,lightmap_pars_fragment:Hf,lights_lambert_fragment:Vf,lights_lambert_pars_fragment:Wf,lights_pars_begin:Xf,lights_toon_fragment:$f,lights_toon_pars_fragment:Yf,lights_phong_fragment:Jf,lights_phong_pars_fragment:jf,lights_physical_fragment:Kf,lights_physical_pars_fragment:Zf,lights_fragment_begin:Qf,lights_fragment_maps:ep,lights_fragment_end:tp,logdepthbuf_fragment:np,logdepthbuf_pars_fragment:ip,logdepthbuf_pars_vertex:sp,logdepthbuf_vertex:rp,map_fragment:op,map_pars_fragment:ap,map_particle_fragment:cp,map_particle_pars_fragment:lp,metalnessmap_fragment:up,metalnessmap_pars_fragment:dp,morphinstance_vertex:hp,morphcolor_vertex:fp,morphnormal_vertex:pp,morphtarget_pars_vertex:mp,morphtarget_vertex:gp,normal_fragment_begin:_p,normal_fragment_maps:vp,normal_pars_fragment:xp,normal_pars_vertex:yp,normal_vertex:Sp,normalmap_pars_fragment:Mp,clearcoat_normal_fragment_begin:bp,clearcoat_normal_fragment_maps:Ep,clearcoat_pars_fragment:wp,iridescence_pars_fragment:Tp,opaque_fragment:Ap,packing:Rp,premultiplied_alpha_fragment:Cp,project_vertex:Pp,dithering_fragment:Ip,dithering_pars_fragment:Dp,roughnessmap_fragment:Lp,roughnessmap_pars_fragment:Up,shadowmap_pars_fragment:Np,shadowmap_pars_vertex:Fp,shadowmap_vertex:Op,shadowmask_pars_fragment:Bp,skinbase_vertex:zp,skinning_pars_vertex:kp,skinning_vertex:Gp,skinnormal_vertex:Hp,specularmap_fragment:Vp,specularmap_pars_fragment:Wp,tonemapping_fragment:Xp,tonemapping_pars_fragment:qp,transmission_fragment:$p,transmission_pars_fragment:Yp,uv_pars_fragment:Jp,uv_pars_vertex:jp,uv_vertex:Kp,worldpos_vertex:Zp,background_vert:Qp,background_frag:em,backgroundCube_vert:tm,backgroundCube_frag:nm,cube_vert:im,cube_frag:sm,depth_vert:rm,depth_frag:om,distanceRGBA_vert:am,distanceRGBA_frag:cm,equirect_vert:lm,equirect_frag:um,linedashed_vert:dm,linedashed_frag:hm,meshbasic_vert:fm,meshbasic_frag:pm,meshlambert_vert:mm,meshlambert_frag:gm,meshmatcap_vert:_m,meshmatcap_frag:vm,meshnormal_vert:xm,meshnormal_frag:ym,meshphong_vert:Sm,meshphong_frag:Mm,meshphysical_vert:bm,meshphysical_frag:Em,meshtoon_vert:wm,meshtoon_frag:Tm,points_vert:Am,points_frag:Rm,shadow_vert:Cm,shadow_frag:Pm,sprite_vert:Im,sprite_frag:Dm},xe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},un={basic:{uniforms:Ut([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Ut([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Ut([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Ut([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Ut([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Ut([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Ut([xe.points,xe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Ut([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Ut([xe.common,xe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Ut([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Ut([xe.sprite,xe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Ut([xe.common,xe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Ut([xe.lights,xe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};un.physical={uniforms:Ut([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const ir={r:0,b:0,g:0},si=new Kt,Lm=new Qe;function Um(i,e,t,n,s,r,o){const a=new Ke(0);let c=r===!0?0:1,l,u,d=null,h=0,p=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const E=g(x);E===null?f(a,c):E&&E.isColor&&(f(E,1),v=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,v){const E=g(v);E&&(E.isCubeTexture||E.mapping===Er)?(u===void 0&&(u=new Se(new dt(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:ji(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),si.copy(v.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Lm.makeRotationFromEuler(si)),u.material.toneMapped=tt.getTransfer(E.colorSpace)!==at,(d!==E||h!==E.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=E,h=E.version,p=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Se(new xi(2,2),new Kn({name:"BackgroundMaterial",uniforms:ji(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=tt.getTransfer(E.colorSpace)!==at,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=E,h=E.version,p=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function f(x,v){x.getRGB(ir,Bl(i)),n.buffers.color.setClear(ir.r,ir.g,ir.b,v,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),c=v,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,f(a,c)},render:_,addToRenderList:m,dispose:y}}function Nm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(b,w,N,F,O){let G=!1;const H=d(F,N,w);r!==H&&(r=H,l(r.object)),G=p(b,F,N,O),G&&g(b,F,N,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(b,w,N,F),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function d(b,w,N){const F=N.wireframe===!0;let O=n[b.id];O===void 0&&(O={},n[b.id]=O);let G=O[w.id];G===void 0&&(G={},O[w.id]=G);let H=G[F];return H===void 0&&(H=h(c()),G[F]=H),H}function h(b){const w=[],N=[],F=[];for(let O=0;O<t;O++)w[O]=0,N[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:N,attributeDivisors:F,object:b,attributes:{},index:null}}function p(b,w,N,F){const O=r.attributes,G=w.attributes;let H=0;const J=N.getAttributes();for(const W in J)if(J[W].location>=0){const ge=O[W];let Me=G[W];if(Me===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(Me=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(Me=b.instanceColor)),ge===void 0||ge.attribute!==Me||Me&&ge.data!==Me.data)return!0;H++}return r.attributesNum!==H||r.index!==F}function g(b,w,N,F){const O={},G=w.attributes;let H=0;const J=N.getAttributes();for(const W in J)if(J[W].location>=0){let ge=G[W];ge===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(ge=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(ge=b.instanceColor));const Me={};Me.attribute=ge,ge&&ge.data&&(Me.data=ge.data),O[W]=Me,H++}r.attributes=O,r.attributesNum=H,r.index=F}function _(){const b=r.newAttributes;for(let w=0,N=b.length;w<N;w++)b[w]=0}function m(b){f(b,0)}function f(b,w){const N=r.newAttributes,F=r.enabledAttributes,O=r.attributeDivisors;N[b]=1,F[b]===0&&(i.enableVertexAttribArray(b),F[b]=1),O[b]!==w&&(i.vertexAttribDivisor(b,w),O[b]=w)}function y(){const b=r.newAttributes,w=r.enabledAttributes;for(let N=0,F=w.length;N<F;N++)w[N]!==b[N]&&(i.disableVertexAttribArray(N),w[N]=0)}function x(b,w,N,F,O,G,H){H===!0?i.vertexAttribIPointer(b,w,N,O,G):i.vertexAttribPointer(b,w,N,F,O,G)}function v(b,w,N,F){_();const O=F.attributes,G=N.getAttributes(),H=w.defaultAttributeValues;for(const J in G){const W=G[J];if(W.location>=0){let ue=O[J];if(ue===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor)),ue!==void 0){const ge=ue.normalized,Me=ue.itemSize,ke=e.get(ue);if(ke===void 0)continue;const He=ke.buffer,Je=ke.type,We=ke.bytesPerElement,Z=Je===i.INT||Je===i.UNSIGNED_INT||ue.gpuType===ma;if(ue.isInterleavedBufferAttribute){const se=ue.data,be=se.stride,De=ue.offset;if(se.isInstancedInterleavedBuffer){for(let we=0;we<W.locationSize;we++)f(W.location+we,se.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let we=0;we<W.locationSize;we++)m(W.location+we);i.bindBuffer(i.ARRAY_BUFFER,He);for(let we=0;we<W.locationSize;we++)x(W.location+we,Me/W.locationSize,Je,ge,be*We,(De+Me/W.locationSize*we)*We,Z)}else{if(ue.isInstancedBufferAttribute){for(let se=0;se<W.locationSize;se++)f(W.location+se,ue.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let se=0;se<W.locationSize;se++)m(W.location+se);i.bindBuffer(i.ARRAY_BUFFER,He);for(let se=0;se<W.locationSize;se++)x(W.location+se,Me/W.locationSize,Je,ge,Me*We,Me/W.locationSize*se*We,Z)}}else if(H!==void 0){const ge=H[J];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(W.location,ge);break;case 3:i.vertexAttrib3fv(W.location,ge);break;case 4:i.vertexAttrib4fv(W.location,ge);break;default:i.vertexAttrib1fv(W.location,ge)}}}}y()}function E(){P();for(const b in n){const w=n[b];for(const N in w){const F=w[N];for(const O in F)u(F[O].object),delete F[O];delete w[N]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;const w=n[b.id];for(const N in w){const F=w[N];for(const O in F)u(F[O].object),delete F[O];delete w[N]}delete n[b.id]}function R(b){for(const w in n){const N=n[w];if(N[b.id]===void 0)continue;const F=N[b.id];for(const O in F)u(F[O].object),delete F[O];delete N[b.id]}}function P(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Fm(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),t.update(u,n,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,n,1)}function c(l,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*h[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Om(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const P=R===Rs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==_n&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==pn&&!P)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:E,maxSamples:A}}function Bm(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new zn,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||s;return s=h,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const y=r?0:n,x=y*4;let v=f.clippingState||null;c.value=v,v=u(g,h,x,p);for(let E=0;E!==x;++E)v[E]=t[E];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,v=p;x!==_;++x,v+=4)o.copy(d[x]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function zm(i){let e=new WeakMap;function t(o,a){return a===To?o.mapping=qi:a===Ao&&(o.mapping=$i),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===To||a===Ao)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ih(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const zi=4,Lc=[.125,.215,.35,.446,.526,.582],ci=20,so=new nu,Uc=new Ke;let ro=null,oo=0,ao=0,co=!1;const oi=(1+Math.sqrt(5))/2,Ni=1/oi,Nc=[new I(-oi,Ni,0),new I(oi,Ni,0),new I(-Ni,0,oi),new I(Ni,0,oi),new I(0,oi,-Ni),new I(0,oi,Ni),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],km=new I;class Fc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=km}=r;ro=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ro,oo,ao),this._renderer.xr.enabled=co,e.scissorTest=!1,sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ro=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Rs,format:sn,colorSpace:Yi,depthBuffer:!1},s=Oc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gm(r)),this._blurMaterial=Hm(r,e,t)}return s}_compileMaterial(e){const t=new Se(this._lodPlanes[0],e);this._renderer.compile(t,so)}_sceneToCubeUV(e,t,n,s,r){const c=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Uc),d.toneMapping=qn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const _=new Rn({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),m=new Se(new dt,_);let f=!1;const y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,f=!0):(_.color.copy(Uc),f=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[x],r.y,r.z)):v===1?(c.up.set(0,0,l[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[x],r.z)):(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[x]));const E=this._cubeSize;sr(s,v*E,x>2?E:0,E,E),d.setRenderTarget(s),f&&d.render(m,c),d.render(e,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===qi||e.mapping===$i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Se(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;sr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,so)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nc[(s-r-1)%Nc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Se(this._lodPlanes[s],l),h=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ci-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ci;m>ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ci}`);const f=[];let y=0;for(let R=0;R<ci;++R){const P=R/_,M=Math.exp(-P*P/2);f.push(M),R===0?y+=M:R<m&&(y+=2*M)}for(let R=0;R<f.length;R++)f[R]=f[R]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const v=this._sizeLods[s],E=3*v*(s>x-zi?s-x+zi:0),A=4*(this._cubeSize-v);sr(t,E,A,3*v,2*v),c.setRenderTarget(t),c.render(d,so)}}function Gm(i){const e=[],t=[],n=[];let s=i;const r=i-zi+1+Lc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-zi?c=Lc[o-i+zi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*p),x=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,P=A>2?0:-1,M=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];y.set(M,_*g*A),x.set(h,m*g*A);const b=[A,A,A,A,A,A];v.set(b,f*g*A)}const E=new Pt;E.setAttribute("position",new rn(y,_)),E.setAttribute("uv",new rn(x,m)),E.setAttribute("faceIndex",new rn(v,f)),e.push(E),s>zi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Oc(i,e,t){const n=new mi(i,e,t);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Hm(i,e,t){const n=new Float32Array(ci),s=new I(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Bc(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function zc(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ua(){return`

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
	`}function Vm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===To||c===Ao,u=c===qi||c===$i;if(l||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Fc(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Fc(i)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Wm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Es("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Xm(i,e,t,n){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const p in h)e.update(h[p],i.ARRAY_BUFFER)}function l(d){const h=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let x=0,v=y.length;x<v;x+=3){const E=y[x+0],A=y[x+1],R=y[x+2];h.push(E,A,A,R,R,E)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const E=x+0,A=x+1,R=x+2;h.push(E,A,A,R,R,E)}}else return;const m=new(Ll(h)?Ol:Fl)(h,1);m.version=_;const f=r.get(d);f&&e.remove(f),r.set(d,m)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function qm(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,p){i.drawElements(n,p,r,h*o),t.update(p,n,1)}function l(h,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,h*o,g),t.update(p,n,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function d(h,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)l(h[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,h,0,_,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y]*_[y];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function $m(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ym(i,e,t){const n=new WeakMap,s=new lt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let b=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var p=b;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let E=a.attributes.position.count*v,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const R=new Float32Array(E*A*4*d),P=new Ul(R,E,A,d);P.type=pn,P.needsUpdate=!0;const M=v*4;for(let w=0;w<d;w++){const N=f[w],F=y[w],O=x[w],G=E*A*4*w;for(let H=0;H<N.count;H++){const J=H*M;g===!0&&(s.fromBufferAttribute(N,H),R[G+J+0]=s.x,R[G+J+1]=s.y,R[G+J+2]=s.z,R[G+J+3]=0),_===!0&&(s.fromBufferAttribute(F,H),R[G+J+4]=s.x,R[G+J+5]=s.y,R[G+J+6]=s.z,R[G+J+7]=0),m===!0&&(s.fromBufferAttribute(O,H),R[G+J+8]=s.x,R[G+J+9]=s.y,R[G+J+10]=s.z,R[G+J+11]=O.itemSize===4?s.w:1)}}h={count:d,texture:P,size:new le(E,A)},n.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Jm(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const su=new At,kc=new Wl(1,1),ru=new Ul,ou=new kd,au=new kl,Gc=[],Hc=[],Vc=new Float32Array(16),Wc=new Float32Array(9),Xc=new Float32Array(4);function ts(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Gc[s];if(r===void 0&&(r=new Float32Array(s),Gc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function St(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Tr(i,e){let t=Hc[e];t===void 0&&(t=new Int32Array(e),Hc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function jm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function Zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function Qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function e0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,n))return;Xc.set(n),i.uniformMatrix2fv(this.addr,!1,Xc),Mt(t,n)}}function t0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,n))return;Wc.set(n),i.uniformMatrix3fv(this.addr,!1,Wc),Mt(t,n)}}function n0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,n))return;Vc.set(n),i.uniformMatrix4fv(this.addr,!1,Vc),Mt(t,n)}}function i0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function s0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function r0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function o0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function a0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function c0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function l0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function u0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function d0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kc.compareFunction=Dl,r=kc):r=su,t.setTexture2D(e||r,s)}function h0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ou,s)}function f0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||au,s)}function p0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ru,s)}function m0(i){switch(i){case 5126:return jm;case 35664:return Km;case 35665:return Zm;case 35666:return Qm;case 35674:return e0;case 35675:return t0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return o0;case 5125:return a0;case 36294:return c0;case 36295:return l0;case 36296:return u0;case 35678:case 36198:case 36298:case 36306:case 35682:return d0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return p0}}function g0(i,e){i.uniform1fv(this.addr,e)}function _0(i,e){const t=ts(e,this.size,2);i.uniform2fv(this.addr,t)}function v0(i,e){const t=ts(e,this.size,3);i.uniform3fv(this.addr,t)}function x0(i,e){const t=ts(e,this.size,4);i.uniform4fv(this.addr,t)}function y0(i,e){const t=ts(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function S0(i,e){const t=ts(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function M0(i,e){const t=ts(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function b0(i,e){i.uniform1iv(this.addr,e)}function E0(i,e){i.uniform2iv(this.addr,e)}function w0(i,e){i.uniform3iv(this.addr,e)}function T0(i,e){i.uniform4iv(this.addr,e)}function A0(i,e){i.uniform1uiv(this.addr,e)}function R0(i,e){i.uniform2uiv(this.addr,e)}function C0(i,e){i.uniform3uiv(this.addr,e)}function P0(i,e){i.uniform4uiv(this.addr,e)}function I0(i,e,t){const n=this.cache,s=e.length,r=Tr(t,s);St(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||su,r[o])}function D0(i,e,t){const n=this.cache,s=e.length,r=Tr(t,s);St(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ou,r[o])}function L0(i,e,t){const n=this.cache,s=e.length,r=Tr(t,s);St(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||au,r[o])}function U0(i,e,t){const n=this.cache,s=e.length,r=Tr(t,s);St(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ru,r[o])}function N0(i){switch(i){case 5126:return g0;case 35664:return _0;case 35665:return v0;case 35666:return x0;case 35674:return y0;case 35675:return S0;case 35676:return M0;case 5124:case 35670:return b0;case 35667:case 35671:return E0;case 35668:case 35672:return w0;case 35669:case 35673:return T0;case 5125:return A0;case 36294:return R0;case 36295:return C0;case 36296:return P0;case 35678:case 36198:case 36298:case 36306:case 35682:return I0;case 35679:case 36299:case 36307:return D0;case 35680:case 36300:case 36308:case 36293:return L0;case 36289:case 36303:case 36311:case 36292:return U0}}class F0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=m0(t.type)}}class O0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=N0(t.type)}}class B0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const lo=/(\w+)(\])?(\[|\.)?/g;function qc(i,e){i.seq.push(e),i.map[e.id]=e}function z0(i,e,t){const n=i.name,s=n.length;for(lo.lastIndex=0;;){const r=lo.exec(n),o=lo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){qc(t,l===void 0?new F0(a,i,e):new O0(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new B0(a),qc(t,d)),t=d}}}class hr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);z0(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function $c(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const k0=37297;let G0=0;function H0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Yc=new Ve;function V0(i){tt._getMatrix(Yc,tt.workingColorSpace,i);const e=`mat3( ${Yc.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case gr:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+H0(i.getShaderSource(e),a)}else return r}function W0(i,e){const t=V0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function X0(i,e){let t;switch(e){case ed:t="Linear";break;case td:t="Reinhard";break;case nd:t="Cineon";break;case Ml:t="ACESFilmic";break;case sd:t="AgX";break;case rd:t="Neutral";break;case id:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const rr=new I;function q0(){tt.getLuminanceCoefficients(rr);const i=rr.x.toFixed(4),e=rr.y.toFixed(4),t=rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function Y0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function J0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function fs(i){return i!==""}function jc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const j0=/^[ \t]*#include +<([\w\d./]+)>/gm;function aa(i){return i.replace(j0,Z0)}const K0=new Map;function Z0(i,e){let t=Xe[e];if(t===void 0){const n=K0.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return aa(t)}const Q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(i){return i.replace(Q0,eg)}function eg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function tg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===yl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function ng(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qi:case $i:e="ENVMAP_TYPE_CUBE";break;case Er:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ig(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $i:e="ENVMAP_MODE_REFRACTION";break}return e}function sg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Sl:e="ENVMAP_BLENDING_MULTIPLY";break;case Zu:e="ENVMAP_BLENDING_MIX";break;case Qu:e="ENVMAP_BLENDING_ADD";break}return e}function rg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function og(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=tg(t),l=ng(t),u=ig(t),d=sg(t),h=rg(t),p=$0(t),g=Y0(r),_=s.createProgram();let m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fs).join(`
`),f.length>0&&(f+=`
`)):(m=[Qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),f=[Qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==qn?X0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,W0("linearToOutputTexel",t.outputColorSpace),q0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fs).join(`
`)),o=aa(o),o=jc(o,t),o=Kc(o,t),a=aa(a),a=jc(a,t),a=Kc(a,t),o=Zc(o),a=Zc(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=y+m+o,v=y+f+a,E=$c(s,s.VERTEX_SHADER,x),A=$c(s,s.FRAGMENT_SHADER,v);s.attachShader(_,E),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(w){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(E)||"",O=s.getShaderInfoLog(A)||"",G=N.trim(),H=F.trim(),J=O.trim();let W=!0,ue=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,A);else{const ge=Jc(s,E,"vertex"),Me=Jc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+G+`
`+ge+`
`+Me)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(H===""||J==="")&&(ue=!1);ue&&(w.diagnostics={runnable:W,programLog:G,vertexShader:{log:H,prefix:m},fragmentShader:{log:J,prefix:f}})}s.deleteShader(E),s.deleteShader(A),P=new hr(s,_),M=J0(s,_)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,k0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=G0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}let ag=0;class cg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lg(e),t.set(e,n)),n}}class lg{constructor(e){this.id=ag++,this.code=e,this.usedTimes=0}}function ug(i,e,t,n,s,r,o){const a=new Ea,c=new cg,l=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,b,w,N,F){const O=N.fog,G=F.geometry,H=M.isMeshStandardMaterial?N.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),W=J&&J.mapping===Er?J.image.height:null,ue=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ge=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Me=ge!==void 0?ge.length:0;let ke=0;G.morphAttributes.position!==void 0&&(ke=1),G.morphAttributes.normal!==void 0&&(ke=2),G.morphAttributes.color!==void 0&&(ke=3);let He,Je,We,Z;if(ue){const Ze=un[ue];He=Ze.vertexShader,Je=Ze.fragmentShader}else He=M.vertexShader,Je=M.fragmentShader,c.update(M),We=c.getVertexShaderID(M),Z=c.getFragmentShaderID(M);const se=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),De=F.isInstancedMesh===!0,we=F.isBatchedMesh===!0,$e=!!M.map,it=!!M.matcap,D=!!J,ne=!!M.aoMap,ee=!!M.lightMap,Q=!!M.bumpMap,j=!!M.normalMap,he=!!M.displacementMap,oe=!!M.emissiveMap,pe=!!M.metalnessMap,Ge=!!M.roughnessMap,Le=M.anisotropy>0,C=M.clearcoat>0,S=M.dispersion>0,k=M.iridescence>0,q=M.sheen>0,ie=M.transmission>0,Y=Le&&!!M.anisotropyMap,Ce=C&&!!M.clearcoatMap,fe=C&&!!M.clearcoatNormalMap,Te=C&&!!M.clearcoatRoughnessMap,Ae=k&&!!M.iridescenceMap,ce=k&&!!M.iridescenceThicknessMap,ve=q&&!!M.sheenColorMap,Ne=q&&!!M.sheenRoughnessMap,L=!!M.specularMap,V=!!M.specularColorMap,_e=!!M.specularIntensityMap,U=ie&&!!M.transmissionMap,K=ie&&!!M.thicknessMap,ae=!!M.gradientMap,me=!!M.alphaMap,re=M.alphaTest>0,te=!!M.alphaHash,Re=!!M.extensions;let Be=qn;M.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Be=i.toneMapping);const rt={shaderID:ue,shaderType:M.type,shaderName:M.name,vertexShader:He,fragmentShader:Je,defines:M.defines,customVertexShaderID:We,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:we,batchingColor:we&&F._colorsTexture!==null,instancing:De,instancingColor:De&&F.instanceColor!==null,instancingMorph:De&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Yi,alphaToCoverage:!!M.alphaToCoverage,map:$e,matcap:it,envMap:D,envMapMode:D&&J.mapping,envMapCubeUVHeight:W,aoMap:ne,lightMap:ee,bumpMap:Q,normalMap:j,displacementMap:h&&he,emissiveMap:oe,normalMapObjectSpace:j&&M.normalMapType===ld,normalMapTangentSpace:j&&M.normalMapType===Il,metalnessMap:pe,roughnessMap:Ge,anisotropy:Le,anisotropyMap:Y,clearcoat:C,clearcoatMap:Ce,clearcoatNormalMap:fe,clearcoatRoughnessMap:Te,dispersion:S,iridescence:k,iridescenceMap:Ae,iridescenceThicknessMap:ce,sheen:q,sheenColorMap:ve,sheenRoughnessMap:Ne,specularMap:L,specularColorMap:V,specularIntensityMap:_e,transmission:ie,transmissionMap:U,thicknessMap:K,gradientMap:ae,opaque:M.transparent===!1&&M.blending===Gi&&M.alphaToCoverage===!1,alphaMap:me,alphaTest:re,alphaHash:te,combine:M.combine,mapUv:$e&&_(M.map.channel),aoMapUv:ne&&_(M.aoMap.channel),lightMapUv:ee&&_(M.lightMap.channel),bumpMapUv:Q&&_(M.bumpMap.channel),normalMapUv:j&&_(M.normalMap.channel),displacementMapUv:he&&_(M.displacementMap.channel),emissiveMapUv:oe&&_(M.emissiveMap.channel),metalnessMapUv:pe&&_(M.metalnessMap.channel),roughnessMapUv:Ge&&_(M.roughnessMap.channel),anisotropyMapUv:Y&&_(M.anisotropyMap.channel),clearcoatMapUv:Ce&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&_(M.sheenRoughnessMap.channel),specularMapUv:L&&_(M.specularMap.channel),specularColorMapUv:V&&_(M.specularColorMap.channel),specularIntensityMapUv:_e&&_(M.specularIntensityMap.channel),transmissionMapUv:U&&_(M.transmissionMap.channel),thicknessMapUv:K&&_(M.thicknessMap.channel),alphaMapUv:me&&_(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(j||Le),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&($e||me),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:be,skinning:F.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:ke,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Be,decodeVideoTexture:$e&&M.map.isVideoTexture===!0&&tt.getTransfer(M.map.colorSpace)===at,decodeVideoTextureEmissive:oe&&M.emissiveMap.isVideoTexture===!0&&tt.getTransfer(M.emissiveMap.colorSpace)===at,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===hn,flipSided:M.side===Bt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Re&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&M.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function f(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const w in M.defines)b.push(w),b.push(M.defines[w]);return M.isRawShaderMaterial===!1&&(y(b,M),x(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function y(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function x(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const b=g[M.type];let w;if(b){const N=un[b];w=Qd.clone(N.uniforms)}else w=M.uniforms;return w}function E(M,b){let w;for(let N=0,F=u.length;N<F;N++){const O=u[N];if(O.cacheKey===b){w=O,++w.usedTimes;break}}return w===void 0&&(w=new og(i,b,M,r),u.push(w)),w}function A(M){if(--M.usedTimes===0){const b=u.indexOf(M);u[b]=u[u.length-1],u.pop(),M.destroy()}}function R(M){c.remove(M)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:E,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:P}}function dg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function hg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function el(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function tl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,h,p,g,_,m){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function a(d,h,p,g,_,m){const f=o(d,h,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(d,h,p,g,_,m){const f=o(d,h,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(d,h){t.length>1&&t.sort(d||hg),n.length>1&&n.sort(h||el),s.length>1&&s.sort(h||el)}function u(){for(let d=e,h=i.length;d<h;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function fg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new tl,i.set(n,[o])):s>=r.length?(o=new tl,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function pg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ke};break;case"SpotLight":t={position:new I,direction:new I,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function mg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let gg=0;function _g(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vg(i){const e=new pg,t=mg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new Qe,o=new Qe;function a(l){let u=0,d=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,y=0,x=0,v=0,E=0,A=0,R=0;l.sort(_g);for(let M=0,b=l.length;M<b;M++){const w=l[M],N=w.color,F=w.intensity,O=w.distance,G=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=N.r*F,d+=N.g*F,h+=N.b*F;else if(w.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(w.sh.coefficients[H],F);R++}else if(w.isDirectionalLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const J=w.shadow,W=t.get(w);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=G,n.directionalShadowMatrix[p]=w.shadow.matrix,y++}n.directional[p]=H,p++}else if(w.isSpotLight){const H=e.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(N).multiplyScalar(F),H.distance=O,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,n.spot[_]=H;const J=w.shadow;if(w.map&&(n.spotLightMap[E]=w.map,E++,J.updateMatrices(w),w.castShadow&&A++),n.spotLightMatrix[_]=J.matrix,w.castShadow){const W=t.get(w);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=G,v++}_++}else if(w.isRectAreaLight){const H=e.get(w);H.color.copy(N).multiplyScalar(F),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=H,m++}else if(w.isPointLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){const J=w.shadow,W=t.get(w);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,W.shadowCameraNear=J.camera.near,W.shadowCameraFar=J.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=w.shadow.matrix,x++}n.point[g]=H,g++}else if(w.isHemisphereLight){const H=e.get(w);H.skyColor.copy(w.color).multiplyScalar(F),H.groundColor.copy(w.groundColor).multiplyScalar(F),n.hemi[f]=H,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==y||P.numPointShadows!==x||P.numSpotShadows!==v||P.numSpotMaps!==E||P.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=y,P.numPointShadows=x,P.numSpotShadows=v,P.numSpotMaps=E,P.numLightProbes=R,n.version=gg++)}function c(l,u){let d=0,h=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let f=0,y=l.length;f<y;f++){const x=l[f];if(x.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(x.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function nl(i){const e=new vg(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function xg(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new nl(i),e.set(s,[a])):r>=o.length?(a=new nl(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sg=`uniform sampler2D shadow_pass;
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
}`;function Mg(i,e,t){let n=new Ta;const s=new le,r=new le,o=new lt,a=new Hh({depthPacking:cd}),c=new Vh,l={},u=t.maxTextureSize,d={[jn]:Bt,[Bt]:jn,[hn]:hn},h=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:yg,fragmentShader:Sg}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Pt;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Se(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xl;let f=this.type;this.render=function(A,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=i.getRenderTarget(),b=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Xn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=f!==wn&&this.type===wn,O=f===wn&&this.type!==wn;for(let G=0,H=A.length;G<H;G++){const J=A[G],W=J.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ue=W.getFrameExtents();if(s.multiply(ue),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ue.x),s.x=r.x*ue.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ue.y),s.y=r.y*ue.y,W.mapSize.y=r.y)),W.map===null||F===!0||O===!0){const Me=this.type!==wn?{minFilter:Xt,magFilter:Xt}:{};W.map!==null&&W.map.dispose(),W.map=new mi(s.x,s.y,Me),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ge=W.getViewportCount();for(let Me=0;Me<ge;Me++){const ke=W.getViewport(Me);o.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),N.viewport(o),W.updateMatrices(J,Me),n=W.getFrustum(),v(R,P,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===wn&&y(W,P),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,b,w)};function y(A,R){const P=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new mi(s.x,s.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,P,h,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,P,p,_,null)}function x(A,R,P,M){let b=null;const w=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)b=w;else if(b=P.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=b.uuid,F=R.uuid;let O=l[N];O===void 0&&(O={},l[N]=O);let G=O[F];G===void 0&&(G=b.clone(),O[F]=G,R.addEventListener("dispose",E)),b=G}if(b.visible=R.visible,b.wireframe=R.wireframe,M===wn?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:d[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=i.properties.get(b);N.light=P}return b}function v(A,R,P,M,b){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===wn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const F=e.update(A),O=A.material;if(Array.isArray(O)){const G=F.groups;for(let H=0,J=G.length;H<J;H++){const W=G[H],ue=O[W.materialIndex];if(ue&&ue.visible){const ge=x(A,ue,M,b);A.onBeforeShadow(i,A,R,P,F,ge,W),i.renderBufferDirect(P,null,F,ge,A,W),A.onAfterShadow(i,A,R,P,F,ge,W)}}}else if(O.visible){const G=x(A,O,M,b);A.onBeforeShadow(i,A,R,P,F,G,null),i.renderBufferDirect(P,null,F,G,A,null),A.onAfterShadow(i,A,R,P,F,G,null)}}const N=A.children;for(let F=0,O=N.length;F<O;F++)v(N[F],R,P,M,b)}function E(A){A.target.removeEventListener("dispose",E);for(const P in l){const M=l[P],b=A.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const bg={[xo]:yo,[So]:Eo,[Mo]:wo,[Xi]:bo,[yo]:xo,[Eo]:So,[wo]:Mo,[bo]:Xi};function Eg(i,e){function t(){let U=!1;const K=new lt;let ae=null;const me=new lt(0,0,0,0);return{setMask:function(re){ae!==re&&!U&&(i.colorMask(re,re,re,re),ae=re)},setLocked:function(re){U=re},setClear:function(re,te,Re,Be,rt){rt===!0&&(re*=Be,te*=Be,Re*=Be),K.set(re,te,Re,Be),me.equals(K)===!1&&(i.clearColor(re,te,Re,Be),me.copy(K))},reset:function(){U=!1,ae=null,me.set(-1,0,0,0)}}}function n(){let U=!1,K=!1,ae=null,me=null,re=null;return{setReversed:function(te){if(K!==te){const Re=e.get("EXT_clip_control");te?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),K=te;const Be=re;re=null,this.setClear(Be)}},getReversed:function(){return K},setTest:function(te){te?se(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(te){ae!==te&&!U&&(i.depthMask(te),ae=te)},setFunc:function(te){if(K&&(te=bg[te]),me!==te){switch(te){case xo:i.depthFunc(i.NEVER);break;case yo:i.depthFunc(i.ALWAYS);break;case So:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case Mo:i.depthFunc(i.EQUAL);break;case bo:i.depthFunc(i.GEQUAL);break;case Eo:i.depthFunc(i.GREATER);break;case wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=te}},setLocked:function(te){U=te},setClear:function(te){re!==te&&(K&&(te=1-te),i.clearDepth(te),re=te)},reset:function(){U=!1,ae=null,me=null,re=null,K=!1}}}function s(){let U=!1,K=null,ae=null,me=null,re=null,te=null,Re=null,Be=null,rt=null;return{setTest:function(Ze){U||(Ze?se(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Ze){K!==Ze&&!U&&(i.stencilMask(Ze),K=Ze)},setFunc:function(Ze,qt,It){(ae!==Ze||me!==qt||re!==It)&&(i.stencilFunc(Ze,qt,It),ae=Ze,me=qt,re=It)},setOp:function(Ze,qt,It){(te!==Ze||Re!==qt||Be!==It)&&(i.stencilOp(Ze,qt,It),te=Ze,Re=qt,Be=It)},setLocked:function(Ze){U=Ze},setClear:function(Ze){rt!==Ze&&(i.clearStencil(Ze),rt=Ze)},reset:function(){U=!1,K=null,ae=null,me=null,re=null,te=null,Re=null,Be=null,rt=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,p=[],g=null,_=!1,m=null,f=null,y=null,x=null,v=null,E=null,A=null,R=new Ke(0,0,0),P=0,M=!1,b=null,w=null,N=null,F=null,O=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=J>=2);let ue=null,ge={};const Me=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),He=new lt().fromArray(Me),Je=new lt().fromArray(ke);function We(U,K,ae,me){const re=new Uint8Array(4),te=i.createTexture();i.bindTexture(U,te),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<ae;Re++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(K+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return te}const Z={};Z[i.TEXTURE_2D]=We(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=We(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=We(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=We(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(Xi),Q(!1),j(Va),se(i.CULL_FACE),ne(Xn);function se(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function be(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function De(U,K){return d[U]!==K?(i.bindFramebuffer(U,K),d[U]=K,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=K),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=K),!0):!1}function we(U,K){let ae=p,me=!1;if(U){ae=h.get(K),ae===void 0&&(ae=[],h.set(K,ae));const re=U.textures;if(ae.length!==re.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let te=0,Re=re.length;te<Re;te++)ae[te]=i.COLOR_ATTACHMENT0+te;ae.length=re.length,me=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,me=!0);me&&i.drawBuffers(ae)}function $e(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const it={[ai]:i.FUNC_ADD,[Nu]:i.FUNC_SUBTRACT,[Fu]:i.FUNC_REVERSE_SUBTRACT};it[Ou]=i.MIN,it[Bu]=i.MAX;const D={[zu]:i.ZERO,[ku]:i.ONE,[Gu]:i.SRC_COLOR,[_o]:i.SRC_ALPHA,[$u]:i.SRC_ALPHA_SATURATE,[Xu]:i.DST_COLOR,[Vu]:i.DST_ALPHA,[Hu]:i.ONE_MINUS_SRC_COLOR,[vo]:i.ONE_MINUS_SRC_ALPHA,[qu]:i.ONE_MINUS_DST_COLOR,[Wu]:i.ONE_MINUS_DST_ALPHA,[Yu]:i.CONSTANT_COLOR,[Ju]:i.ONE_MINUS_CONSTANT_COLOR,[ju]:i.CONSTANT_ALPHA,[Ku]:i.ONE_MINUS_CONSTANT_ALPHA};function ne(U,K,ae,me,re,te,Re,Be,rt,Ze){if(U===Xn){_===!0&&(be(i.BLEND),_=!1);return}if(_===!1&&(se(i.BLEND),_=!0),U!==Uu){if(U!==m||Ze!==M){if((f!==ai||v!==ai)&&(i.blendEquation(i.FUNC_ADD),f=ai,v=ai),Ze)switch(U){case Gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wa:i.blendFunc(i.ONE,i.ONE);break;case Xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xa:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qa:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,x=null,E=null,A=null,R.set(0,0,0),P=0,m=U,M=Ze}return}re=re||K,te=te||ae,Re=Re||me,(K!==f||re!==v)&&(i.blendEquationSeparate(it[K],it[re]),f=K,v=re),(ae!==y||me!==x||te!==E||Re!==A)&&(i.blendFuncSeparate(D[ae],D[me],D[te],D[Re]),y=ae,x=me,E=te,A=Re),(Be.equals(R)===!1||rt!==P)&&(i.blendColor(Be.r,Be.g,Be.b,rt),R.copy(Be),P=rt),m=U,M=!1}function ee(U,K){U.side===hn?be(i.CULL_FACE):se(i.CULL_FACE);let ae=U.side===Bt;K&&(ae=!ae),Q(ae),U.blending===Gi&&U.transparent===!1?ne(Xn):ne(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const me=U.stencilWrite;a.setTest(me),me&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),oe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(U){b!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),b=U)}function j(U){U!==Du?(se(i.CULL_FACE),U!==w&&(U===Va?i.cullFace(i.BACK):U===Lu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),w=U}function he(U){U!==N&&(H&&i.lineWidth(U),N=U)}function oe(U,K,ae){U?(se(i.POLYGON_OFFSET_FILL),(F!==K||O!==ae)&&(i.polygonOffset(K,ae),F=K,O=ae)):be(i.POLYGON_OFFSET_FILL)}function pe(U){U?se(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function Ge(U){U===void 0&&(U=i.TEXTURE0+G-1),ue!==U&&(i.activeTexture(U),ue=U)}function Le(U,K,ae){ae===void 0&&(ue===null?ae=i.TEXTURE0+G-1:ae=ue);let me=ge[ae];me===void 0&&(me={type:void 0,texture:void 0},ge[ae]=me),(me.type!==U||me.texture!==K)&&(ue!==ae&&(i.activeTexture(ae),ue=ae),i.bindTexture(U,K||Z[U]),me.type=U,me.texture=K)}function C(){const U=ge[ue];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(U){He.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),He.copy(U))}function Ne(U){Je.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Je.copy(U))}function L(U,K){let ae=l.get(K);ae===void 0&&(ae=new WeakMap,l.set(K,ae));let me=ae.get(U);me===void 0&&(me=i.getUniformBlockIndex(K,U.name),ae.set(U,me))}function V(U,K){const me=l.get(K).get(U);c.get(K)!==me&&(i.uniformBlockBinding(K,me,U.__bindingPointIndex),c.set(K,me))}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ue=null,ge={},d={},h=new WeakMap,p=[],g=null,_=!1,m=null,f=null,y=null,x=null,v=null,E=null,A=null,R=new Ke(0,0,0),P=0,M=!1,b=null,w=null,N=null,F=null,O=null,He.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:be,bindFramebuffer:De,drawBuffers:we,useProgram:$e,setBlending:ne,setMaterial:ee,setFlipSided:Q,setCullFace:j,setLineWidth:he,setPolygonOffset:oe,setScissorTest:pe,activeTexture:Ge,bindTexture:Le,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:k,texImage2D:Ae,texImage3D:ce,updateUBOMapping:L,uniformBlockBinding:V,texStorage2D:fe,texStorage3D:Te,texSubImage2D:q,texSubImage3D:ie,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ce,scissor:ve,viewport:Ne,reset:_e}}function wg(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new le,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return p?new OffscreenCanvas(C,S):vr("canvas")}function _(C,S,k){let q=1;const ie=Le(C);if((ie.width>k||ie.height>k)&&(q=k/Math.max(ie.width,ie.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(q*ie.width),Ce=Math.floor(q*ie.height);d===void 0&&(d=g(Y,Ce));const fe=S?g(Y,Ce):d;return fe.width=Y,fe.height=Ce,fe.getContext("2d").drawImage(C,0,0,Y,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Y+"x"+Ce+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){i.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(C,S,k,q,ie=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=S;if(S===i.RED&&(k===i.FLOAT&&(Y=i.R32F),k===i.HALF_FLOAT&&(Y=i.R16F),k===i.UNSIGNED_BYTE&&(Y=i.R8)),S===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.R8UI),k===i.UNSIGNED_SHORT&&(Y=i.R16UI),k===i.UNSIGNED_INT&&(Y=i.R32UI),k===i.BYTE&&(Y=i.R8I),k===i.SHORT&&(Y=i.R16I),k===i.INT&&(Y=i.R32I)),S===i.RG&&(k===i.FLOAT&&(Y=i.RG32F),k===i.HALF_FLOAT&&(Y=i.RG16F),k===i.UNSIGNED_BYTE&&(Y=i.RG8)),S===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RG8UI),k===i.UNSIGNED_SHORT&&(Y=i.RG16UI),k===i.UNSIGNED_INT&&(Y=i.RG32UI),k===i.BYTE&&(Y=i.RG8I),k===i.SHORT&&(Y=i.RG16I),k===i.INT&&(Y=i.RG32I)),S===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),k===i.UNSIGNED_INT&&(Y=i.RGB32UI),k===i.BYTE&&(Y=i.RGB8I),k===i.SHORT&&(Y=i.RGB16I),k===i.INT&&(Y=i.RGB32I)),S===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),k===i.UNSIGNED_INT&&(Y=i.RGBA32UI),k===i.BYTE&&(Y=i.RGBA8I),k===i.SHORT&&(Y=i.RGBA16I),k===i.INT&&(Y=i.RGBA32I)),S===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),S===i.RGBA){const Ce=ie?gr:tt.getTransfer(q);k===i.FLOAT&&(Y=i.RGBA32F),k===i.HALF_FLOAT&&(Y=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Y=Ce===at?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(C,S){let k;return C?S===null||S===pi||S===ys?k=i.DEPTH24_STENCIL8:S===pn?k=i.DEPTH32F_STENCIL8:S===xs&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===pi||S===ys?k=i.DEPTH_COMPONENT24:S===pn?k=i.DEPTH_COMPONENT32F:S===xs&&(k=i.DEPTH_COMPONENT16),k}function E(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Xt&&C.minFilter!==fn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){const S=C.target;S.removeEventListener("dispose",A),P(S),S.isVideoTexture&&u.delete(S)}function R(C){const S=C.target;S.removeEventListener("dispose",R),b(S)}function P(C){const S=n.get(C);if(S.__webglInit===void 0)return;const k=C.source,q=h.get(k);if(q){const ie=q[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&M(C),Object.keys(q).length===0&&h.delete(k)}n.remove(C)}function M(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const k=C.source,q=h.get(k);delete q[S.__cacheKey],o.memory.textures--}function b(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let ie=0;ie<S.__webglFramebuffer[q].length;ie++)i.deleteFramebuffer(S.__webglFramebuffer[q][ie]);else i.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)i.deleteFramebuffer(S.__webglFramebuffer[q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=C.textures;for(let q=0,ie=k.length;q<ie;q++){const Y=n.get(k[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(k[q])}n.remove(C)}let w=0;function N(){w=0}function F(){const C=w;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),w+=1,C}function O(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function G(C,S){const k=n.get(C);if(C.isVideoTexture&&pe(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const q=C.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(k,C,S);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+S)}function H(C,S){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Z(k,C,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+S)}function J(C,S){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Z(k,C,S);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+S)}function W(C,S){const k=n.get(C);if(C.version>0&&k.__version!==C.version){se(k,C,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+S)}const ue={[mr]:i.REPEAT,[li]:i.CLAMP_TO_EDGE,[Ro]:i.MIRRORED_REPEAT},ge={[Xt]:i.NEAREST,[od]:i.NEAREST_MIPMAP_NEAREST,[Ls]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[Cr]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},Me={[ud]:i.NEVER,[gd]:i.ALWAYS,[dd]:i.LESS,[Dl]:i.LEQUAL,[hd]:i.EQUAL,[md]:i.GEQUAL,[fd]:i.GREATER,[pd]:i.NOTEQUAL};function ke(C,S){if(S.type===pn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===fn||S.magFilter===Cr||S.magFilter===Ls||S.magFilter===ui||S.minFilter===fn||S.minFilter===Cr||S.minFilter===Ls||S.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ue[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ue[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ue[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ge[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ge[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Xt||S.minFilter!==Ls&&S.minFilter!==ui||S.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function He(C,S){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));const q=S.source;let ie=h.get(q);ie===void 0&&(ie={},h.set(q,ie));const Y=O(S);if(Y!==C.__cacheKey){ie[Y]===void 0&&(ie[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ie[Y].usedTimes++;const Ce=ie[C.__cacheKey];Ce!==void 0&&(ie[C.__cacheKey].usedTimes--,Ce.usedTimes===0&&M(S)),C.__cacheKey=Y,C.__webglTexture=ie[Y].texture}return k}function Je(C,S,k){return Math.floor(Math.floor(C/k)/S)}function We(C,S,k,q){const Y=C.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,k,q,S.data);else{Y.sort((ce,ve)=>ce.start-ve.start);let Ce=0;for(let ce=1;ce<Y.length;ce++){const ve=Y[Ce],Ne=Y[ce],L=ve.start+ve.count,V=Je(Ne.start,S.width,4),_e=Je(ve.start,S.width,4);Ne.start<=L+1&&V===_e&&Je(Ne.start+Ne.count-1,S.width,4)===V?ve.count=Math.max(ve.count,Ne.start+Ne.count-ve.start):(++Ce,Y[Ce]=Ne)}Y.length=Ce+1;const fe=i.getParameter(i.UNPACK_ROW_LENGTH),Te=i.getParameter(i.UNPACK_SKIP_PIXELS),Ae=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let ce=0,ve=Y.length;ce<ve;ce++){const Ne=Y[ce],L=Math.floor(Ne.start/4),V=Math.ceil(Ne.count/4),_e=L%S.width,U=Math.floor(L/S.width),K=V,ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,_e,U,K,ae,k,q,S.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,fe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ae)}}function Z(C,S,k){let q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=i.TEXTURE_3D);const ie=He(C,S),Y=S.source;t.bindTexture(q,C.__webglTexture,i.TEXTURE0+k);const Ce=n.get(Y);if(Y.version!==Ce.__version||ie===!0){t.activeTexture(i.TEXTURE0+k);const fe=tt.getPrimaries(tt.workingColorSpace),Te=S.colorSpace===kn?null:tt.getPrimaries(S.colorSpace),Ae=S.colorSpace===kn||fe===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ce=_(S.image,!1,s.maxTextureSize);ce=Ge(S,ce);const ve=r.convert(S.format,S.colorSpace),Ne=r.convert(S.type);let L=x(S.internalFormat,ve,Ne,S.colorSpace,S.isVideoTexture);ke(q,S);let V;const _e=S.mipmaps,U=S.isVideoTexture!==!0,K=Ce.__version===void 0||ie===!0,ae=Y.dataReady,me=E(S,ce);if(S.isDepthTexture)L=v(S.format===Ms,S.type),K&&(U?t.texStorage2D(i.TEXTURE_2D,1,L,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,L,ce.width,ce.height,0,ve,Ne,null));else if(S.isDataTexture)if(_e.length>0){U&&K&&t.texStorage2D(i.TEXTURE_2D,me,L,_e[0].width,_e[0].height);for(let re=0,te=_e.length;re<te;re++)V=_e[re],U?ae&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,V.width,V.height,ve,Ne,V.data):t.texImage2D(i.TEXTURE_2D,re,L,V.width,V.height,0,ve,Ne,V.data);S.generateMipmaps=!1}else U?(K&&t.texStorage2D(i.TEXTURE_2D,me,L,ce.width,ce.height),ae&&We(S,ce,ve,Ne)):t.texImage2D(i.TEXTURE_2D,0,L,ce.width,ce.height,0,ve,Ne,ce.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){U&&K&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,L,_e[0].width,_e[0].height,ce.depth);for(let re=0,te=_e.length;re<te;re++)if(V=_e[re],S.format!==sn)if(ve!==null)if(U){if(ae)if(S.layerUpdates.size>0){const Re=Dc(V.width,V.height,S.format,S.type);for(const Be of S.layerUpdates){const rt=V.data.subarray(Be*Re/V.data.BYTES_PER_ELEMENT,(Be+1)*Re/V.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,Be,V.width,V.height,1,ve,rt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,V.width,V.height,ce.depth,ve,V.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,L,V.width,V.height,ce.depth,0,V.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,V.width,V.height,ce.depth,ve,Ne,V.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,L,V.width,V.height,ce.depth,0,ve,Ne,V.data)}else{U&&K&&t.texStorage2D(i.TEXTURE_2D,me,L,_e[0].width,_e[0].height);for(let re=0,te=_e.length;re<te;re++)V=_e[re],S.format!==sn?ve!==null?U?ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,V.width,V.height,ve,V.data):t.compressedTexImage2D(i.TEXTURE_2D,re,L,V.width,V.height,0,V.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ae&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,V.width,V.height,ve,Ne,V.data):t.texImage2D(i.TEXTURE_2D,re,L,V.width,V.height,0,ve,Ne,V.data)}else if(S.isDataArrayTexture)if(U){if(K&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,L,ce.width,ce.height,ce.depth),ae)if(S.layerUpdates.size>0){const re=Dc(ce.width,ce.height,S.format,S.type);for(const te of S.layerUpdates){const Re=ce.data.subarray(te*re/ce.data.BYTES_PER_ELEMENT,(te+1)*re/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,ce.width,ce.height,1,ve,Ne,Re)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ve,Ne,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,L,ce.width,ce.height,ce.depth,0,ve,Ne,ce.data);else if(S.isData3DTexture)U?(K&&t.texStorage3D(i.TEXTURE_3D,me,L,ce.width,ce.height,ce.depth),ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ve,Ne,ce.data)):t.texImage3D(i.TEXTURE_3D,0,L,ce.width,ce.height,ce.depth,0,ve,Ne,ce.data);else if(S.isFramebufferTexture){if(K)if(U)t.texStorage2D(i.TEXTURE_2D,me,L,ce.width,ce.height);else{let re=ce.width,te=ce.height;for(let Re=0;Re<me;Re++)t.texImage2D(i.TEXTURE_2D,Re,L,re,te,0,ve,Ne,null),re>>=1,te>>=1}}else if(_e.length>0){if(U&&K){const re=Le(_e[0]);t.texStorage2D(i.TEXTURE_2D,me,L,re.width,re.height)}for(let re=0,te=_e.length;re<te;re++)V=_e[re],U?ae&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ve,Ne,V):t.texImage2D(i.TEXTURE_2D,re,L,ve,Ne,V);S.generateMipmaps=!1}else if(U){if(K){const re=Le(ce);t.texStorage2D(i.TEXTURE_2D,me,L,re.width,re.height)}ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Ne,ce)}else t.texImage2D(i.TEXTURE_2D,0,L,ve,Ne,ce);m(S)&&f(q),Ce.__version=Y.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function se(C,S,k){if(S.image.length!==6)return;const q=He(C,S),ie=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+k);const Y=n.get(ie);if(ie.version!==Y.__version||q===!0){t.activeTexture(i.TEXTURE0+k);const Ce=tt.getPrimaries(tt.workingColorSpace),fe=S.colorSpace===kn?null:tt.getPrimaries(S.colorSpace),Te=S.colorSpace===kn||Ce===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ae=S.isCompressedTexture||S.image[0].isCompressedTexture,ce=S.image[0]&&S.image[0].isDataTexture,ve=[];for(let te=0;te<6;te++)!Ae&&!ce?ve[te]=_(S.image[te],!0,s.maxCubemapSize):ve[te]=ce?S.image[te].image:S.image[te],ve[te]=Ge(S,ve[te]);const Ne=ve[0],L=r.convert(S.format,S.colorSpace),V=r.convert(S.type),_e=x(S.internalFormat,L,V,S.colorSpace),U=S.isVideoTexture!==!0,K=Y.__version===void 0||q===!0,ae=ie.dataReady;let me=E(S,Ne);ke(i.TEXTURE_CUBE_MAP,S);let re;if(Ae){U&&K&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,_e,Ne.width,Ne.height);for(let te=0;te<6;te++){re=ve[te].mipmaps;for(let Re=0;Re<re.length;Re++){const Be=re[Re];S.format!==sn?L!==null?U?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,0,0,Be.width,Be.height,L,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,_e,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,0,0,Be.width,Be.height,L,V,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,_e,Be.width,Be.height,0,L,V,Be.data)}}}else{if(re=S.mipmaps,U&&K){re.length>0&&me++;const te=Le(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,_e,te.width,te.height)}for(let te=0;te<6;te++)if(ce){U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ve[te].width,ve[te].height,L,V,ve[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,_e,ve[te].width,ve[te].height,0,L,V,ve[te].data);for(let Re=0;Re<re.length;Re++){const rt=re[Re].image[te].image;U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,0,0,rt.width,rt.height,L,V,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,_e,rt.width,rt.height,0,L,V,rt.data)}}else{U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,L,V,ve[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,_e,L,V,ve[te]);for(let Re=0;Re<re.length;Re++){const Be=re[Re];U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,0,0,L,V,Be.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,_e,L,V,Be.image[te])}}}m(S)&&f(i.TEXTURE_CUBE_MAP),Y.__version=ie.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function be(C,S,k,q,ie,Y){const Ce=r.convert(k.format,k.colorSpace),fe=r.convert(k.type),Te=x(k.internalFormat,Ce,fe,k.colorSpace),Ae=n.get(S),ce=n.get(k);if(ce.__renderTarget=S,!Ae.__hasExternalTextures){const ve=Math.max(1,S.width>>Y),Ne=Math.max(1,S.height>>Y);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,Y,Te,ve,Ne,S.depth,0,Ce,fe,null):t.texImage2D(ie,Y,Te,ve,Ne,0,Ce,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),oe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,ie,ce.__webglTexture,0,he(S)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,ie,ce.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(C,S,k){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const q=S.depthTexture,ie=q&&q.isDepthTexture?q.type:null,Y=v(S.stencilBuffer,ie),Ce=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=he(S);oe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,Y,S.width,S.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,Y,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Y,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,C)}else{const q=S.textures;for(let ie=0;ie<q.length;ie++){const Y=q[ie],Ce=r.convert(Y.format,Y.colorSpace),fe=r.convert(Y.type),Te=x(Y.internalFormat,Ce,fe,Y.colorSpace),Ae=he(S);k&&oe(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,Te,S.width,S.height):oe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,Te,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Te,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(S.depthTexture);q.__renderTarget=S,(!q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);const ie=q.__webglTexture,Y=he(S);if(S.depthTexture.format===Ss)oe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(S.depthTexture.format===Ms)oe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function $e(C){const S=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const q=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const ie=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",ie)};q.addEventListener("dispose",ie),S.__depthDisposeCallback=ie}S.__boundDepthTexture=q}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const q=C.texture.mipmaps;q&&q.length>0?we(S.__webglFramebuffer[0],C):we(S.__webglFramebuffer,C)}else if(k){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=i.createRenderbuffer(),De(S.__webglDepthbuffer[q],C,!1);else{const ie=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Y)}}else{const q=C.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),De(S.__webglDepthbuffer,C,!1);else{const ie=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(C,S,k){const q=n.get(C);S!==void 0&&be(q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&$e(C)}function D(C){const S=C.texture,k=n.get(C),q=n.get(S);C.addEventListener("dispose",R);const ie=C.textures,Y=C.isWebGLCubeRenderTarget===!0,Ce=ie.length>1;if(Ce||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=S.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[fe]=[];for(let Te=0;Te<S.mipmaps.length;Te++)k.__webglFramebuffer[fe][Te]=i.createFramebuffer()}else k.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)k.__webglFramebuffer[fe]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let fe=0,Te=ie.length;fe<Te;fe++){const Ae=n.get(ie[fe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&oe(C)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const Te=ie[fe];k.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[fe]);const Ae=r.convert(Te.format,Te.colorSpace),ce=r.convert(Te.type),ve=x(Te.internalFormat,Ae,ce,Te.colorSpace,C.isXRRenderTarget===!0),Ne=he(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,ve,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,k.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),De(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),ke(i.TEXTURE_CUBE_MAP,S);for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)be(k.__webglFramebuffer[fe][Te],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Te);else be(k.__webglFramebuffer[fe],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(S)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let fe=0,Te=ie.length;fe<Te;fe++){const Ae=ie[fe],ce=n.get(Ae);let ve=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ve=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,ce.__webglTexture),ke(ve,Ae),be(k.__webglFramebuffer,C,Ae,i.COLOR_ATTACHMENT0+fe,ve,0),m(Ae)&&f(ve)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,q.__webglTexture),ke(fe,S),S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)be(k.__webglFramebuffer[Te],C,S,i.COLOR_ATTACHMENT0,fe,Te);else be(k.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,fe,0);m(S)&&f(fe),t.unbindTexture()}C.depthBuffer&&$e(C)}function ne(C){const S=C.textures;for(let k=0,q=S.length;k<q;k++){const ie=S[k];if(m(ie)){const Y=y(C),Ce=n.get(ie).__webglTexture;t.bindTexture(Y,Ce),f(Y),t.unbindTexture()}}}const ee=[],Q=[];function j(C){if(C.samples>0){if(oe(C)===!1){const S=C.textures,k=C.width,q=C.height;let ie=i.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(C),fe=S.length>1;if(fe)for(let Ae=0;Ae<S.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Te=C.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ae]);const ce=n.get(S[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,k,q,0,0,k,q,ie,i.NEAREST),c===!0&&(ee.length=0,Q.length=0,ee.push(i.COLOR_ATTACHMENT0+Ae),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ee.push(Y),Q.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let Ae=0;Ae<S.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ae]);const ce=n.get(S[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function he(C){return Math.min(s.maxSamples,C.samples)}function oe(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pe(C){const S=o.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function Ge(C,S){const k=C.colorSpace,q=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Yi&&k!==kn&&(tt.getTransfer(k)===at?(q!==sn||ie!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Le(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=W,this.rebindTextures=it,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=be,this.useMultisampledRTT=oe}function Tg(i,e){function t(n,s=kn){let r;const o=tt.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===ga)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Al)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===El)return i.BYTE;if(n===wl)return i.SHORT;if(n===xs)return i.UNSIGNED_SHORT;if(n===ma)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===Rs)return i.HALF_FLOAT;if(n===Rl)return i.ALPHA;if(n===Cl)return i.RGB;if(n===sn)return i.RGBA;if(n===Ss)return i.DEPTH_COMPONENT;if(n===Ms)return i.DEPTH_STENCIL;if(n===va)return i.RED;if(n===xa)return i.RED_INTEGER;if(n===Pl)return i.RG;if(n===ya)return i.RG_INTEGER;if(n===Sa)return i.RGBA_INTEGER;if(n===ar||n===cr||n===lr||n===ur)if(o===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Co||n===Po||n===Io||n===Do)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Co)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Po)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lo||n===Uo||n===No)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lo||n===Uo)return o===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===No)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Go||n===Ho||n===Vo||n===Wo||n===Xo||n===qo||n===$o||n===Yo||n===Jo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fo)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oo)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bo)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zo)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ko)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Go)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ho)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vo)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wo)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xo)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qo)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$o)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yo)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jo)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jo||n===Ko||n===Zo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===jo)return o===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qo||n===ea||n===ta||n===na)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rg=`
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

}`;class Cg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Xl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Kn({vertexShader:Ag,fragmentShader:Rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Se(new xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pg extends _i{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Cg,f={},y=t.getContextAttributes();let x=null,v=null;const E=[],A=[],R=new le;let P=null;const M=new Vt;M.viewport=new lt;const b=new Vt;b.viewport=new lt;const w=[M,b],N=new Yh;let F=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let se=E[Z];return se===void 0&&(se=new jr,E[Z]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Z){let se=E[Z];return se===void 0&&(se=new jr,E[Z]=se),se.getGripSpace()},this.getHand=function(Z){let se=E[Z];return se===void 0&&(se=new jr,E[Z]=se),se.getHandSpace()};function G(Z){const se=A.indexOf(Z.inputSource);if(se===-1)return;const be=E[se];be!==void 0&&(be.update(Z.inputSource,Z.frame,l||o),be.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",J);for(let Z=0;Z<E.length;Z++){const se=A[Z];se!==null&&(A[Z]=null,E[Z].disconnect(se))}F=null,O=null,m.reset();for(const Z in f)delete f[Z];e.setRenderTarget(x),p=null,h=null,d=null,s=null,v=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",H),s.addEventListener("inputsourceschange",J),y.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,De=null,we=null;y.depth&&(we=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=y.stencil?Ms:Ss,De=y.stencil?ys:pi);const $e={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer($e),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new mi(h.textureWidth,h.textureHeight,{format:sn,type:_n,depthTexture:new Wl(h.textureWidth,h.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const be={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new mi(p.framebufferWidth,p.framebufferHeight,{format:sn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),We.setContext(s),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(Z){for(let se=0;se<Z.removed.length;se++){const be=Z.removed[se],De=A.indexOf(be);De>=0&&(A[De]=null,E[De].disconnect(be))}for(let se=0;se<Z.added.length;se++){const be=Z.added[se];let De=A.indexOf(be);if(De===-1){for(let $e=0;$e<E.length;$e++)if($e>=A.length){A.push(be),De=$e;break}else if(A[$e]===null){A[$e]=be,De=$e;break}if(De===-1)break}const we=E[De];we&&we.connect(be)}}const W=new I,ue=new I;function ge(Z,se,be){W.setFromMatrixPosition(se.matrixWorld),ue.setFromMatrixPosition(be.matrixWorld);const De=W.distanceTo(ue),we=se.projectionMatrix.elements,$e=be.projectionMatrix.elements,it=we[14]/(we[10]-1),D=we[14]/(we[10]+1),ne=(we[9]+1)/we[5],ee=(we[9]-1)/we[5],Q=(we[8]-1)/we[0],j=($e[8]+1)/$e[0],he=it*Q,oe=it*j,pe=De/(-Q+j),Ge=pe*-Q;if(se.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ge),Z.translateZ(pe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),we[10]===-1)Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Le=it+pe,C=D+pe,S=he-Ge,k=oe+(De-Ge),q=ne*D/C*Le,ie=ee*D/C*Le;Z.projectionMatrix.makePerspective(S,k,q,ie,Le,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Me(Z,se){se===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(se.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let se=Z.near,be=Z.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(be=m.depthFar)),N.near=b.near=M.near=se,N.far=b.far=M.far=be,(F!==N.near||O!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),F=N.near,O=N.far),N.layers.mask=Z.layers.mask|6,M.layers.mask=N.layers.mask&3,b.layers.mask=N.layers.mask&5;const De=Z.parent,we=N.cameras;Me(N,De);for(let $e=0;$e<we.length;$e++)Me(we[$e],De);we.length===2?ge(N,M,b):N.projectionMatrix.copy(M.projectionMatrix),ke(Z,N,De)};function ke(Z,se,be){be===null?Z.matrix.copy(se.matrixWorld):(Z.matrix.copy(be.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(se.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=bs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Z){return f[Z]};let He=null;function Je(Z,se){if(u=se.getViewerPose(l||o),g=se,u!==null){const be=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let De=!1;be.length!==N.cameras.length&&(N.cameras.length=0,De=!0);for(let D=0;D<be.length;D++){const ne=be[D];let ee=null;if(p!==null)ee=p.getViewport(ne);else{const j=d.getViewSubImage(h,ne);ee=j.viewport,D===0&&(e.setRenderTargetTextures(v,j.colorTexture,j.depthStencilTexture),e.setRenderTarget(v))}let Q=w[D];Q===void 0&&(Q=new Vt,Q.layers.enable(D),Q.viewport=new lt,w[D]=Q),Q.matrix.fromArray(ne.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(ne.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ee.x,ee.y,ee.width,ee.height),D===0&&(N.matrix.copy(Q.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),De===!0&&N.cameras.push(Q)}const we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const D=d.getDepthInformation(be[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(we&&we.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let D=0;D<be.length;D++){const ne=be[D].camera;if(ne){let ee=f[ne];ee||(ee=new Xl,f[ne]=ee);const Q=d.getCameraImage(ne);ee.sourceTexture=Q}}}}for(let be=0;be<E.length;be++){const De=A[be],we=E[be];De!==null&&we!==void 0&&we.update(De,se,l||o)}He&&He(Z,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}const We=new iu;We.setAnimationLoop(Je),this.setAnimationLoop=function(Z){He=Z},this.dispose=function(){}}}const ri=new Kt,Ig=new Qe;function Dg(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Bl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,x,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,y,x):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Bt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Bt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f),x=y.envMap,v=y.envMapRotation;x&&(m.envMap.value=x,ri.copy(v),ri.x*=-1,ri.y*=-1,ri.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),m.envMapRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(ri)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,y,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Bt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Lg(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function l(y,x){let v=s[y.id];v===void 0&&(g(y),v=u(y),s[y.id]=v,y.addEventListener("dispose",m));const E=x.program;n.updateUBOMapping(y,E);const A=e.render.frame;r[y.id]!==A&&(h(y),r[y.id]=A)}function u(y){const x=d();y.__bindingPointIndex=x;const v=i.createBuffer(),E=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const x=s[y.id],v=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,R=v.length;A<R;A++){const P=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,b=P.length;M<b;M++){const w=P[M];if(p(w,A,M,E)===!0){const N=w.__offset,F=Array.isArray(w.value)?w.value:[w.value];let O=0;for(let G=0;G<F.length;G++){const H=F[G],J=_(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,N+O,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,O),O+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,x,v,E){const A=y.value,R=x+"_"+v;if(E[R]===void 0)return typeof A=="number"||typeof A=="boolean"?E[R]=A:E[R]=A.clone(),!0;{const P=E[R];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return E[R]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(y){const x=y.uniforms;let v=0;const E=16;for(let R=0,P=x.length;R<P;R++){const M=Array.isArray(x[R])?x[R]:[x[R]];for(let b=0,w=M.length;b<w;b++){const N=M[b],F=Array.isArray(N.value)?N.value:[N.value];for(let O=0,G=F.length;O<G;O++){const H=F[O],J=_(H),W=v%E,ue=W%J.boundary,ge=W+ue;v+=ue,ge!==0&&E-ge<J.storage&&(v+=E-ge),N.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=J.storage}}}const A=v%E;return A>0&&(v+=E-A),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class Ug{constructor(e={}){const{canvas:t=Ld(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=Ot;let A=0,R=0,P=null,M=-1,b=null;const w=new lt,N=new lt;let F=null;const O=new Ke(0);let G=0,H=t.width,J=t.height,W=1,ue=null,ge=null;const Me=new lt(0,0,H,J),ke=new lt(0,0,H,J);let He=!1;const Je=new Ta;let We=!1,Z=!1;const se=new Qe,be=new I,De=new lt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function it(){return P===null?W:1}let D=n;function ne(T,B){return t.getContext(T,B)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pa}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",re,!1),D===null){const B="webgl2";if(D=ne(B,T),D===null)throw ne(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ee,Q,j,he,oe,pe,Ge,Le,C,S,k,q,ie,Y,Ce,fe,Te,Ae,ce,ve,Ne,L,V,_e;function U(){ee=new Wm(D),ee.init(),L=new Tg(D,ee),Q=new Om(D,ee,e,L),j=new Eg(D,ee),Q.reversedDepthBuffer&&h&&j.buffers.depth.setReversed(!0),he=new $m(D),oe=new dg,pe=new wg(D,ee,j,oe,Q,L,he),Ge=new zm(v),Le=new Vm(v),C=new Zh(D),V=new Nm(D,C),S=new Xm(D,C,he,V),k=new Jm(D,S,C,he),ce=new Ym(D,Q,pe),fe=new Bm(oe),q=new ug(v,Ge,Le,ee,Q,V,fe),ie=new Dg(v,oe),Y=new fg,Ce=new xg(ee),Ae=new Um(v,Ge,Le,j,k,p,c),Te=new Mg(v,k,Q),_e=new Lg(D,he,Q,j),ve=new Fm(D,ee,he),Ne=new qm(D,ee,he),he.programs=q.programs,v.capabilities=Q,v.extensions=ee,v.properties=oe,v.renderLists=Y,v.shadowMap=Te,v.state=j,v.info=he}U();const K=new Pg(v,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(H,J,!1))},this.getSize=function(T){return T.set(H,J)},this.setSize=function(T,B,X=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,J=B,t.width=Math.floor(T*W),t.height=Math.floor(B*W),X===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(H*W,J*W).floor()},this.setDrawingBufferSize=function(T,B,X){H=T,J=B,W=X,t.width=Math.floor(T*X),t.height=Math.floor(B*X),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(Me)},this.setViewport=function(T,B,X,$){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,B,X,$),j.viewport(w.copy(Me).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(ke)},this.setScissor=function(T,B,X,$){T.isVector4?ke.set(T.x,T.y,T.z,T.w):ke.set(T,B,X,$),j.scissor(N.copy(ke).multiplyScalar(W).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(T){j.setScissorTest(He=T)},this.setOpaqueSort=function(T){ue=T},this.setTransparentSort=function(T){ge=T},this.getClearColor=function(T){return T.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,X=!0){let $=0;if(T){let z=!1;if(P!==null){const de=P.texture.format;z=de===Sa||de===ya||de===xa}if(z){const de=P.texture.type,ye=de===_n||de===pi||de===xs||de===ys||de===ga||de===_a,Ie=Ae.getClearColor(),Ee=Ae.getClearAlpha(),Oe=Ie.r,ze=Ie.g,Ue=Ie.b;ye?(g[0]=Oe,g[1]=ze,g[2]=Ue,g[3]=Ee,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Oe,_[1]=ze,_[2]=Ue,_[3]=Ee,D.clearBufferiv(D.COLOR,0,_))}else $|=D.COLOR_BUFFER_BIT}B&&($|=D.DEPTH_BUFFER_BIT),X&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",re,!1),Ae.dispose(),Y.dispose(),Ce.dispose(),oe.dispose(),Ge.dispose(),Le.dispose(),k.dispose(),V.dispose(),_e.dispose(),q.dispose(),K.dispose(),K.removeEventListener("sessionstart",It),K.removeEventListener("sessionend",Zn),an.stop()};function ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=he.autoReset,B=Te.enabled,X=Te.autoUpdate,$=Te.needsUpdate,z=Te.type;U(),he.autoReset=T,Te.enabled=B,Te.autoUpdate=X,Te.needsUpdate=$,Te.type=z}function re(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function te(T){const B=T.target;B.removeEventListener("dispose",te),Re(B)}function Re(T){Be(T),oe.remove(T)}function Be(T){const B=oe.get(T).programs;B!==void 0&&(B.forEach(function(X){q.releaseProgram(X)}),T.isShaderMaterial&&q.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,X,$,z,de){B===null&&(B=we);const ye=z.isMesh&&z.matrixWorld.determinant()<0,Ie=fu(T,B,X,$,z);j.setMaterial($,ye);let Ee=X.index,Oe=1;if($.wireframe===!0){if(Ee=S.getWireframeAttribute(X),Ee===void 0)return;Oe=2}const ze=X.drawRange,Ue=X.attributes.position;let je=ze.start*Oe,ot=(ze.start+ze.count)*Oe;de!==null&&(je=Math.max(je,de.start*Oe),ot=Math.min(ot,(de.start+de.count)*Oe)),Ee!==null?(je=Math.max(je,0),ot=Math.min(ot,Ee.count)):Ue!=null&&(je=Math.max(je,0),ot=Math.min(ot,Ue.count));const _t=ot-je;if(_t<0||_t===1/0)return;V.setup(z,$,Ie,X,Ee);let ht,ut=ve;if(Ee!==null&&(ht=C.get(Ee),ut=Ne,ut.setIndex(ht)),z.isMesh)$.wireframe===!0?(j.setLineWidth($.wireframeLinewidth*it()),ut.setMode(D.LINES)):ut.setMode(D.TRIANGLES);else if(z.isLine){let Fe=$.linewidth;Fe===void 0&&(Fe=1),j.setLineWidth(Fe*it()),z.isLineSegments?ut.setMode(D.LINES):z.isLineLoop?ut.setMode(D.LINE_LOOP):ut.setMode(D.LINE_STRIP)}else z.isPoints?ut.setMode(D.POINTS):z.isSprite&&ut.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Es("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))ut.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Fe=z._multiDrawStarts,ft=z._multiDrawCounts,et=z._multiDrawCount,zt=Ee?C.get(Ee).bytesPerElement:1,yi=oe.get($).currentProgram.getUniforms();for(let kt=0;kt<et;kt++)yi.setValue(D,"_gl_DrawID",kt),ut.render(Fe[kt]/zt,ft[kt])}else if(z.isInstancedMesh)ut.renderInstances(je,_t,z.count);else if(X.isInstancedBufferGeometry){const Fe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ft=Math.min(X.instanceCount,Fe);ut.renderInstances(je,_t,ft)}else ut.render(je,_t)};function rt(T,B,X){T.transparent===!0&&T.side===hn&&T.forceSinglePass===!1?(T.side=Bt,T.needsUpdate=!0,Is(T,B,X),T.side=jn,T.needsUpdate=!0,Is(T,B,X),T.side=hn):Is(T,B,X)}this.compile=function(T,B,X=null){X===null&&(X=T),f=Ce.get(X),f.init(B),x.push(f),X.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),T!==X&&T.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();const $=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const de=z.material;if(de)if(Array.isArray(de))for(let ye=0;ye<de.length;ye++){const Ie=de[ye];rt(Ie,X,z),$.add(Ie)}else rt(de,X,z),$.add(de)}),f=x.pop(),$},this.compileAsync=function(T,B,X=null){const $=this.compile(T,B,X);return new Promise(z=>{function de(){if($.forEach(function(ye){oe.get(ye).currentProgram.isReady()&&$.delete(ye)}),$.size===0){z(T);return}setTimeout(de,10)}ee.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Ze=null;function qt(T){Ze&&Ze(T)}function It(){an.stop()}function Zn(){an.start()}const an=new iu;an.setAnimationLoop(qt),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(T){Ze=T,K.setAnimationLoop(T),T===null?an.stop():an.start()},K.addEventListener("sessionstart",It),K.addEventListener("sessionend",Zn),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(B),B=K.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,B,P),f=Ce.get(T,x.length),f.init(B),x.push(f),se.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Je.setFromProjectionMatrix(se,mn,B.reversedDepth),Z=this.localClippingEnabled,We=fe.init(this.clippingPlanes,Z),m=Y.get(T,y.length),m.init(),y.push(m),K.enabled===!0&&K.isPresenting===!0){const de=v.xr.getDepthSensingMesh();de!==null&&Tt(de,B,-1/0,v.sortObjects)}Tt(T,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ue,ge),$e=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,$e&&Ae.addToRenderList(m,T),this.info.render.frame++,We===!0&&fe.beginShadows();const X=f.state.shadowsArray;Te.render(X,T,B),We===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,z=m.transmissive;if(f.setupLights(),B.isArrayCamera){const de=B.cameras;if(z.length>0)for(let ye=0,Ie=de.length;ye<Ie;ye++){const Ee=de[ye];Ba($,z,T,Ee)}$e&&Ae.render(T);for(let ye=0,Ie=de.length;ye<Ie;ye++){const Ee=de[ye];Oa(m,T,Ee,Ee.viewport)}}else z.length>0&&Ba($,z,T,B),$e&&Ae.render(T),Oa(m,T,B);P!==null&&R===0&&(pe.updateMultisampleRenderTarget(P),pe.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(v,T,B),V.resetDefaultState(),M=-1,b=null,x.pop(),x.length>0?(f=x[x.length-1],We===!0&&fe.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Tt(T,B,X,$){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Je.intersectsSprite(T)){$&&De.setFromMatrixPosition(T.matrixWorld).applyMatrix4(se);const ye=k.update(T),Ie=T.material;Ie.visible&&m.push(T,ye,Ie,X,De.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Je.intersectsObject(T))){const ye=k.update(T),Ie=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),De.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),De.copy(ye.boundingSphere.center)),De.applyMatrix4(T.matrixWorld).applyMatrix4(se)),Array.isArray(Ie)){const Ee=ye.groups;for(let Oe=0,ze=Ee.length;Oe<ze;Oe++){const Ue=Ee[Oe],je=Ie[Ue.materialIndex];je&&je.visible&&m.push(T,ye,je,X,De.z,Ue)}}else Ie.visible&&m.push(T,ye,Ie,X,De.z,null)}}const de=T.children;for(let ye=0,Ie=de.length;ye<Ie;ye++)Tt(de[ye],B,X,$)}function Oa(T,B,X,$){const z=T.opaque,de=T.transmissive,ye=T.transparent;f.setupLightsView(X),We===!0&&fe.setGlobalState(v.clippingPlanes,X),$&&j.viewport(w.copy($)),z.length>0&&Ps(z,B,X),de.length>0&&Ps(de,B,X),ye.length>0&&Ps(ye,B,X),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Ba(T,B,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[$.id]===void 0&&(f.state.transmissionRenderTarget[$.id]=new mi(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Rs:_n,minFilter:ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const de=f.state.transmissionRenderTarget[$.id],ye=$.viewport||w;de.setSize(ye.z*v.transmissionResolutionScale,ye.w*v.transmissionResolutionScale);const Ie=v.getRenderTarget(),Ee=v.getActiveCubeFace(),Oe=v.getActiveMipmapLevel();v.setRenderTarget(de),v.getClearColor(O),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),$e&&Ae.render(X);const ze=v.toneMapping;v.toneMapping=qn;const Ue=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),f.setupLightsView($),We===!0&&fe.setGlobalState(v.clippingPlanes,$),Ps(T,X,$),pe.updateMultisampleRenderTarget(de),pe.updateRenderTargetMipmap(de),ee.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let ot=0,_t=B.length;ot<_t;ot++){const ht=B[ot],ut=ht.object,Fe=ht.geometry,ft=ht.material,et=ht.group;if(ft.side===hn&&ut.layers.test($.layers)){const zt=ft.side;ft.side=Bt,ft.needsUpdate=!0,za(ut,X,$,Fe,ft,et),ft.side=zt,ft.needsUpdate=!0,je=!0}}je===!0&&(pe.updateMultisampleRenderTarget(de),pe.updateRenderTargetMipmap(de))}v.setRenderTarget(Ie,Ee,Oe),v.setClearColor(O,G),Ue!==void 0&&($.viewport=Ue),v.toneMapping=ze}function Ps(T,B,X){const $=B.isScene===!0?B.overrideMaterial:null;for(let z=0,de=T.length;z<de;z++){const ye=T[z],Ie=ye.object,Ee=ye.geometry,Oe=ye.group;let ze=ye.material;ze.allowOverride===!0&&$!==null&&(ze=$),Ie.layers.test(X.layers)&&za(Ie,B,X,Ee,ze,Oe)}}function za(T,B,X,$,z,de){T.onBeforeRender(v,B,X,$,z,de),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(v,B,X,$,T,de),z.transparent===!0&&z.side===hn&&z.forceSinglePass===!1?(z.side=Bt,z.needsUpdate=!0,v.renderBufferDirect(X,B,$,z,T,de),z.side=jn,z.needsUpdate=!0,v.renderBufferDirect(X,B,$,z,T,de),z.side=hn):v.renderBufferDirect(X,B,$,z,T,de),T.onAfterRender(v,B,X,$,z,de)}function Is(T,B,X){B.isScene!==!0&&(B=we);const $=oe.get(T),z=f.state.lights,de=f.state.shadowsArray,ye=z.state.version,Ie=q.getParameters(T,z.state,de,B,X),Ee=q.getProgramCacheKey(Ie);let Oe=$.programs;$.environment=T.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(T.isMeshStandardMaterial?Le:Ge).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",te),Oe=new Map,$.programs=Oe);let ze=Oe.get(Ee);if(ze!==void 0){if($.currentProgram===ze&&$.lightsStateVersion===ye)return Ga(T,Ie),ze}else Ie.uniforms=q.getUniforms(T),T.onBeforeCompile(Ie,v),ze=q.acquireProgram(Ie,Ee),Oe.set(Ee,ze),$.uniforms=Ie.uniforms;const Ue=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=fe.uniform),Ga(T,Ie),$.needsLights=mu(T),$.lightsStateVersion=ye,$.needsLights&&(Ue.ambientLightColor.value=z.state.ambient,Ue.lightProbe.value=z.state.probe,Ue.directionalLights.value=z.state.directional,Ue.directionalLightShadows.value=z.state.directionalShadow,Ue.spotLights.value=z.state.spot,Ue.spotLightShadows.value=z.state.spotShadow,Ue.rectAreaLights.value=z.state.rectArea,Ue.ltc_1.value=z.state.rectAreaLTC1,Ue.ltc_2.value=z.state.rectAreaLTC2,Ue.pointLights.value=z.state.point,Ue.pointLightShadows.value=z.state.pointShadow,Ue.hemisphereLights.value=z.state.hemi,Ue.directionalShadowMap.value=z.state.directionalShadowMap,Ue.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ue.spotShadowMap.value=z.state.spotShadowMap,Ue.spotLightMatrix.value=z.state.spotLightMatrix,Ue.spotLightMap.value=z.state.spotLightMap,Ue.pointShadowMap.value=z.state.pointShadowMap,Ue.pointShadowMatrix.value=z.state.pointShadowMatrix),$.currentProgram=ze,$.uniformsList=null,ze}function ka(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=hr.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Ga(T,B){const X=oe.get(T);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function fu(T,B,X,$,z){B.isScene!==!0&&(B=we),pe.resetTextureUnits();const de=B.fog,ye=$.isMeshStandardMaterial?B.environment:null,Ie=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Yi,Ee=($.isMeshStandardMaterial?Le:Ge).get($.envMap||ye),Oe=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ze=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ue=!!X.morphAttributes.position,je=!!X.morphAttributes.normal,ot=!!X.morphAttributes.color;let _t=qn;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(_t=v.toneMapping);const ht=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ut=ht!==void 0?ht.length:0,Fe=oe.get($),ft=f.state.lights;if(We===!0&&(Z===!0||T!==b)){const Dt=T===b&&$.id===M;fe.setState($,T,Dt)}let et=!1;$.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==ft.state.version||Fe.outputColorSpace!==Ie||z.isBatchedMesh&&Fe.batching===!1||!z.isBatchedMesh&&Fe.batching===!0||z.isBatchedMesh&&Fe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Fe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Fe.instancing===!1||!z.isInstancedMesh&&Fe.instancing===!0||z.isSkinnedMesh&&Fe.skinning===!1||!z.isSkinnedMesh&&Fe.skinning===!0||z.isInstancedMesh&&Fe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Fe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Fe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Fe.instancingMorph===!1&&z.morphTexture!==null||Fe.envMap!==Ee||$.fog===!0&&Fe.fog!==de||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==fe.numPlanes||Fe.numIntersection!==fe.numIntersection)||Fe.vertexAlphas!==Oe||Fe.vertexTangents!==ze||Fe.morphTargets!==Ue||Fe.morphNormals!==je||Fe.morphColors!==ot||Fe.toneMapping!==_t||Fe.morphTargetsCount!==ut)&&(et=!0):(et=!0,Fe.__version=$.version);let zt=Fe.currentProgram;et===!0&&(zt=Is($,B,z));let yi=!1,kt=!1,ns=!1;const pt=zt.getUniforms(),$t=Fe.uniforms;if(j.useProgram(zt.program)&&(yi=!0,kt=!0,ns=!0),$.id!==M&&(M=$.id,kt=!0),yi||b!==T){j.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),pt.setValue(D,"projectionMatrix",T.projectionMatrix),pt.setValue(D,"viewMatrix",T.matrixWorldInverse);const Nt=pt.map.cameraPosition;Nt!==void 0&&Nt.setValue(D,be.setFromMatrixPosition(T.matrixWorld)),Q.logarithmicDepthBuffer&&pt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&pt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,kt=!0,ns=!0)}if(z.isSkinnedMesh){pt.setOptional(D,z,"bindMatrix"),pt.setOptional(D,z,"bindMatrixInverse");const Dt=z.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),pt.setValue(D,"boneTexture",Dt.boneTexture,pe))}z.isBatchedMesh&&(pt.setOptional(D,z,"batchingTexture"),pt.setValue(D,"batchingTexture",z._matricesTexture,pe),pt.setOptional(D,z,"batchingIdTexture"),pt.setValue(D,"batchingIdTexture",z._indirectTexture,pe),pt.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&pt.setValue(D,"batchingColorTexture",z._colorsTexture,pe));const Yt=X.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&ce.update(z,X,zt),(kt||Fe.receiveShadow!==z.receiveShadow)&&(Fe.receiveShadow=z.receiveShadow,pt.setValue(D,"receiveShadow",z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&($t.envMap.value=Ee,$t.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&($t.envMapIntensity.value=B.environmentIntensity),kt&&(pt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&pu($t,ns),de&&$.fog===!0&&ie.refreshFogUniforms($t,de),ie.refreshMaterialUniforms($t,$,W,J,f.state.transmissionRenderTarget[T.id]),hr.upload(D,ka(Fe),$t,pe)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(hr.upload(D,ka(Fe),$t,pe),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&pt.setValue(D,"center",z.center),pt.setValue(D,"modelViewMatrix",z.modelViewMatrix),pt.setValue(D,"normalMatrix",z.normalMatrix),pt.setValue(D,"modelMatrix",z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Dt=$.uniformsGroups;for(let Nt=0,Ar=Dt.length;Nt<Ar;Nt++){const Qn=Dt[Nt];_e.update(Qn,zt),_e.bind(Qn,zt)}}return zt}function pu(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function mu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,B,X){const $=oe.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),oe.get(T.texture).__webglTexture=B,oe.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:X,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){const X=oe.get(T);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};const gu=D.createFramebuffer();this.setRenderTarget=function(T,B=0,X=0){P=T,A=B,R=X;let $=!0,z=null,de=!1,ye=!1;if(T){const Ee=oe.get(T);if(Ee.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(D.FRAMEBUFFER,null),$=!1;else if(Ee.__webglFramebuffer===void 0)pe.setupRenderTarget(T);else if(Ee.__hasExternalTextures)pe.rebindTextures(T,oe.get(T.texture).__webglTexture,oe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ue=T.depthTexture;if(Ee.__boundDepthTexture!==Ue){if(Ue!==null&&oe.has(Ue)&&(T.width!==Ue.image.width||T.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(T)}}const Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ye=!0);const ze=oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[B])?z=ze[B][X]:z=ze[B],de=!0):T.samples>0&&pe.useMultisampledRTT(T)===!1?z=oe.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?z=ze[X]:z=ze,w.copy(T.viewport),N.copy(T.scissor),F=T.scissorTest}else w.copy(Me).multiplyScalar(W).floor(),N.copy(ke).multiplyScalar(W).floor(),F=He;if(X!==0&&(z=gu),j.bindFramebuffer(D.FRAMEBUFFER,z)&&$&&j.drawBuffers(T,z),j.viewport(w),j.scissor(N),j.setScissorTest(F),de){const Ee=oe.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ee.__webglTexture,X)}else if(ye){const Ee=B;for(let Oe=0;Oe<T.textures.length;Oe++){const ze=oe.get(T.textures[Oe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Oe,ze.__webglTexture,X,Ee)}}else if(T!==null&&X!==0){const Ee=oe.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ee.__webglTexture,X)}M=-1},this.readRenderTargetPixels=function(T,B,X,$,z,de,ye,Ie=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){j.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const Oe=T.textures[Ie],ze=Oe.format,Ue=Oe.type;if(!Q.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-$&&X>=0&&X<=T.height-z&&(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ie),D.readPixels(B,X,$,z,L.convert(ze),L.convert(Ue),de))}finally{const Oe=P!==null?oe.get(P).__webglFramebuffer:null;j.bindFramebuffer(D.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(T,B,X,$,z,de,ye,Ie=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee)if(B>=0&&B<=T.width-$&&X>=0&&X<=T.height-z){j.bindFramebuffer(D.FRAMEBUFFER,Ee);const Oe=T.textures[Ie],ze=Oe.format,Ue=Oe.type;if(!Q.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ie),D.readPixels(B,X,$,z,L.convert(ze),L.convert(Ue),0);const ot=P!==null?oe.get(P).__webglFramebuffer:null;j.bindFramebuffer(D.FRAMEBUFFER,ot);const _t=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ud(D,_t,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de),D.deleteBuffer(je),D.deleteSync(_t),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,X=0){const $=Math.pow(2,-X),z=Math.floor(T.image.width*$),de=Math.floor(T.image.height*$),ye=B!==null?B.x:0,Ie=B!==null?B.y:0;pe.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,ye,Ie,z,de),j.unbindTexture()};const _u=D.createFramebuffer(),vu=D.createFramebuffer();this.copyTextureToTexture=function(T,B,X=null,$=null,z=0,de=null){de===null&&(z!==0?(Es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=z,z=0):de=0);let ye,Ie,Ee,Oe,ze,Ue,je,ot,_t;const ht=T.isCompressedTexture?T.mipmaps[de]:T.image;if(X!==null)ye=X.max.x-X.min.x,Ie=X.max.y-X.min.y,Ee=X.isBox3?X.max.z-X.min.z:1,Oe=X.min.x,ze=X.min.y,Ue=X.isBox3?X.min.z:0;else{const Yt=Math.pow(2,-z);ye=Math.floor(ht.width*Yt),Ie=Math.floor(ht.height*Yt),T.isDataArrayTexture?Ee=ht.depth:T.isData3DTexture?Ee=Math.floor(ht.depth*Yt):Ee=1,Oe=0,ze=0,Ue=0}$!==null?(je=$.x,ot=$.y,_t=$.z):(je=0,ot=0,_t=0);const ut=L.convert(B.format),Fe=L.convert(B.type);let ft;B.isData3DTexture?(pe.setTexture3D(B,0),ft=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(pe.setTexture2DArray(B,0),ft=D.TEXTURE_2D_ARRAY):(pe.setTexture2D(B,0),ft=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const et=D.getParameter(D.UNPACK_ROW_LENGTH),zt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),yi=D.getParameter(D.UNPACK_SKIP_PIXELS),kt=D.getParameter(D.UNPACK_SKIP_ROWS),ns=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ht.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Oe),D.pixelStorei(D.UNPACK_SKIP_ROWS,ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ue);const pt=T.isDataArrayTexture||T.isData3DTexture,$t=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){const Yt=oe.get(T),Dt=oe.get(B),Nt=oe.get(Yt.__renderTarget),Ar=oe.get(Dt.__renderTarget);j.bindFramebuffer(D.READ_FRAMEBUFFER,Nt.__webglFramebuffer),j.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ar.__webglFramebuffer);for(let Qn=0;Qn<Ee;Qn++)pt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,oe.get(T).__webglTexture,z,Ue+Qn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,oe.get(B).__webglTexture,de,_t+Qn)),D.blitFramebuffer(Oe,ze,ye,Ie,je,ot,ye,Ie,D.DEPTH_BUFFER_BIT,D.NEAREST);j.bindFramebuffer(D.READ_FRAMEBUFFER,null),j.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||T.isRenderTargetTexture||oe.has(T)){const Yt=oe.get(T),Dt=oe.get(B);j.bindFramebuffer(D.READ_FRAMEBUFFER,_u),j.bindFramebuffer(D.DRAW_FRAMEBUFFER,vu);for(let Nt=0;Nt<Ee;Nt++)pt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Yt.__webglTexture,z,Ue+Nt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Yt.__webglTexture,z),$t?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Dt.__webglTexture,de,_t+Nt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Dt.__webglTexture,de),z!==0?D.blitFramebuffer(Oe,ze,ye,Ie,je,ot,ye,Ie,D.COLOR_BUFFER_BIT,D.NEAREST):$t?D.copyTexSubImage3D(ft,de,je,ot,_t+Nt,Oe,ze,ye,Ie):D.copyTexSubImage2D(ft,de,je,ot,Oe,ze,ye,Ie);j.bindFramebuffer(D.READ_FRAMEBUFFER,null),j.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else $t?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(ft,de,je,ot,_t,ye,Ie,Ee,ut,Fe,ht.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(ft,de,je,ot,_t,ye,Ie,Ee,ut,ht.data):D.texSubImage3D(ft,de,je,ot,_t,ye,Ie,Ee,ut,Fe,ht):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,de,je,ot,ye,Ie,ut,Fe,ht.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,de,je,ot,ht.width,ht.height,ut,ht.data):D.texSubImage2D(D.TEXTURE_2D,de,je,ot,ye,Ie,ut,Fe,ht);D.pixelStorei(D.UNPACK_ROW_LENGTH,et),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,zt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,yi),D.pixelStorei(D.UNPACK_SKIP_ROWS,kt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ns),de===0&&B.generateMipmaps&&D.generateMipmap(ft),j.unbindTexture()},this.initRenderTarget=function(T){oe.get(T).__webglFramebuffer===void 0&&pe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?pe.setTextureCube(T,0):T.isData3DTexture?pe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?pe.setTexture2DArray(T,0):pe.setTexture2D(T,0),j.unbindTexture()},this.resetState=function(){A=0,R=0,P=null,j.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}function il(i){const t=new Uint8Array(16384);for(let s=0;s<64;s++)for(let r=0;r<64;r++){const o=(s*64+r)*4,a=(r*73+s*151+r*s*13)%19,c=i==="pcb"&&(r%16===3&&s%32<25||s%16===6&&r%32<24),l=i==="metal"?220+a+(s%3===0?8:0):c?245:184+a;t[o]=t[o+1]=t[o+2]=l,t[o+3]=255}const n=new Gl(t,64,64);return n.needsUpdate=!0,n.wrapS=n.wrapT=mr,n.repeat.set(3,3),n.colorSpace=Ot,n}function Zi(i,e=.1,t=.045){const n=new nt;n.name=`${i}-port`;const s=new Ye({color:"#84969d",metalness:.8,roughness:.3}),r=new Ye({color:"#080d12",roughness:.8}),o=new Ye({color:i==="usb"?"#3777a9":"#cbb16c",metalness:.4,roughness:.4}),a=(c,l,u,d,h,p,g)=>{const _=new Se(new dt(c,l,u),g);_.position.set(d,h,p),n.add(_)};if(i==="audio"){const c=new Se(new gn(e*.36,e*.08,8,20),s);n.add(c);const l=new Se(new Aa(e*.3,20),r);l.position.z=-.004,n.add(l)}else{a(e,t,.008,0,0,-.008,r);for(const c of[-e/2,e/2])a(.007,t+.012,.02,c,0,0,s);for(const c of[-t/2,t/2])a(e,.006,.02,0,c,0,s);if(i==="power")for(const c of[-e*.25,0,e*.25])a(.01,t*.32,.012,c,0,0,o);else a(e*.72,.007,.012,0,-t*.15,0,o)}return n}function cu(i){const e=new Wt;e.moveTo(.28,-.1),e.bezierCurveTo(.55,-.16,.83,-.02,.96,.16),e.quadraticCurveTo(.95,.27,.88,.39),e.bezierCurveTo(.75,.2,.54,.04,.29,.045),e.closePath();const t=new jt(e,{depth:.025,steps:1,curveSegments:20,bevelEnabled:!0,bevelSegments:2,bevelSize:.004,bevelThickness:.004});t.translate(0,0,-.0125);const n=t.getAttribute("position");for(let s=0;s<n.count;s++){const r=n.getX(s),o=n.getY(s);n.setZ(s,n.getZ(s)+.2*o-.055*r*r)}return t.computeVertexNormals(),t.scale(i,i,i),t}function ca(i){const e=i==="E-ATX"?.44:i==="ATX"?.375:.36,t=i==="Micro-ATX"?.35:.4,n=-.18,s=-.175;return{width:e,depth:t,x:n+e/2,z:s+t/2,holes:[[n+.03,s+.025],[n+e-.03,s+.025],[n+.03,s+t-.025],[n+e-.03,s+t-.025]]}}function Ng(i="standard",e="ivory",t="plain",n=!1,s=!0,r=!0,o="solid",a="ATX",c=Wi([])){const l=new nt,u=da(i),d=new nt;d.name="chassis",l.add(d);let h=l;const p=new Ye({color:br.find(L=>L.id===e).color,metalness:.72,roughness:.32}),g=new Ye({color:"#34434b",metalness:.7,roughness:.4}),_=new Ye({color:"#171f25",roughness:.86}),m=new Ye({color:"#253c3f",roughness:.95}),f=new Ye({color:"#a17c58",roughness:.74}),y=new Ye({color:"#d5af63",metalness:.7,roughness:.32}),x=new Ye({color:"#b4e5c5",emissive:"#4b916b",emissiveIntensity:.35});function v(L,V,_e,U,K,ae,me){const re=new Se(new dt(L,V,_e),me);return re.position.set(U,K,ae),re.castShadow=!0,re.receiveShadow=!0,h.add(re),re}function E(L,V,_e,U,K,ae){const me=new Se(new Et(L,L,V,24),ae);return me.position.set(_e,U,K),me.castShadow=!0,h.add(me),me}const A=Math.max(4.7,c.right+.55),R=A+4.1,P=(A-4.1)/2;v(R,.18,5.5,P,0,0,f).name="workbench-top",v(R-.1,.1,5.4,P,-.13,0,g);for(const L of[-3.5,P,A-.6]){const V=new nt;V.name="workbench-leg-frame",V.position.x=L,l.add(V),h=V;for(const _e of[-1.9,1.9])v(.15,1.9,.15,0,-1.1,_e,g).name="workbench-leg";v(.12,.1,3.8,0,-1.94,0,g).name="workbench-leg-brace"}h=l,v(3.7,.025,2.6,-.55,.105,0,m);const M=[];for(let L=0;L<19;L++)M.push(-2.3+L*.19,.121,-1.2,-2.3+L*.19,.121,1.2);for(let L=0;L<14;L++)M.push(-2.35,.121,-1.2+L*.19,1.25,.121,-1.2+L*.19);const b=new Vl(new Pt().setAttribute("position",new st(M,3)),new Hl({color:"#416263",transparent:!0,opacity:.4}));l.add(b);const w=-.55;h=d;for(const L of[w-1.04,w+1.04])for(const V of[-.47,.47])v(.24,.1,.25,L,.19,V,_);v(2.55,.09,1.28,w,.285,0,p);for(const L of[-.55,.55])v(2.55,.08,.18,w,2.72,L,p);for(const L of[w-1.17,w+1.17])v(.21,.08,.92,L,2.72,0,p);for(let L=0;L<16;L++)v(.062,.035,.91,w-1.02+L*.136,2.72,0,g);const N=new nt;N.name="roof-grille",N.position.set(w,2.746,0),d.add(N);const F=2.14,O=.92,G=.0225,H=.0035,J=Math.floor(F/G),W=Math.floor(O/G),ue=new Bn(new dt(H,.006,O),g,J),ge=new Bn(new dt(F,.006,H),g,W),Me=new Qe;for(let L=0;L<J;L++)ue.setMatrixAt(L,Me.makeTranslation((L-(J-1)/2)*G,0,0));for(let L=0;L<W;L++)ge.setMatrixAt(L,Me.makeTranslation(0,.002,(L-(W-1)/2)*G));ue.instanceMatrix.needsUpdate=!0,ge.instanceMatrix.needsUpdate=!0,ue.castShadow=ge.castShadow=!0,N.add(ue,ge);const ke=u.shape==="window"?new Ye({color:"#8cb4c4",metalness:.1,roughness:.16,transparent:!0,opacity:.32}):p;v(.1,2.38,1.25,w+1.22,1.5,0,ke);for(const L of[-.59,.59])v(.085,2.39,.085,w-1.22,1.5,L,p);for(const L of[.34,2.66])v(2.46,.055,.055,w,L,.61,p);const He=new Wt;He.moveTo(-1.19,-.58),He.lineTo(1.19,-.58),He.lineTo(1.19,.58),He.lineTo(-1.19,.58),He.closePath();const Je=new Gn;Je.moveTo(-1.13,-.34),Je.lineTo(-1.13,.34),Je.lineTo(-.41,.34),Je.lineTo(-.41,-.34),Je.closePath(),He.holes.push(Je);const We=new Se(new jt(He,{depth:.035,bevelEnabled:!1}),_);We.rotation.x=-Math.PI/2,We.position.set(w,.73,0),We.name="psu-shroud",We.castShadow=!0,We.receiveShadow=!0,d.add(We);const Z=new nt;Z.name="psu-top-grille",Z.position.set(w-.77,.753,0),d.add(Z);const se=.024,be=.004,De=29,we=28,$e=new Qe,it=new Bn(new dt(be,.009,.68),g,De),D=new Bn(new dt(.72,.009,be),g,we);for(let L=0;L<De;L++)it.setMatrixAt(L,$e.makeTranslation((L-(De-1)/2)*se,0,0));for(let L=0;L<we;L++)D.setMatrixAt(L,$e.makeTranslation(0,.001,(L-(we-1)/2)*se));it.instanceMatrix.needsUpdate=D.instanceMatrix.needsUpdate=!0,it.castShadow=D.castShadow=!0,Z.add(it,D),h=l;const ne=new Wt;ne.moveTo(-1.72,.76),ne.lineTo(.6,.76),ne.lineTo(.6,2.64),ne.lineTo(-1.72,2.64),ne.closePath();const ee=(L,V,_e,U)=>{const K=new Gn;K.moveTo(L,V),K.lineTo(L,U),K.lineTo(_e,U),K.lineTo(_e,V),K.closePath(),ne.holes.push(K)};ee(w-.56,1.6,w+.07,2.28);for(const L of[1.04,1.66,2.3])ee(.2,L-.13,.44,L+.13);ee(-1.67,2.54,-1.48,2.62);const Q=new Se(new jt(ne,{depth:.014,bevelEnabled:!1}),g);Q.name="cable-management-wall",Q.position.z=-.58,Q.castShadow=!0,Q.receiveShadow=!0,l.add(Q);for(const L of[-1.7,.58])v(.022,1.86,.035,L,1.7,-.585,g);for(const L of[.78,2.63])v(2.3,.022,.035,-.56,L,-.585,g);for(const L of[1.04,1.66,2.3]){for(const V of[.19,.45])v(.016,.29,.027,V,L,-.552,_);for(const V of[-.14,.14])v(.27,.016,.027,.32,L+V,-.552,_);for(const V of[-1,1])for(let _e=0;_e<4;_e++)v(.083,.05,.008,.32+V*.079,L-.09+_e*.06,-.548,_);v(.025,.1,.018,.51,L,-.613,_)}v(.58,.39,.025,.3,1.65,-.4525,g);const j=new Wt;j.moveTo(-.765,-.81),j.lineTo(.765,-.81),j.lineTo(.765,.81),j.lineTo(-.765,.81),j.closePath();const he=new Gn;he.moveTo(-.36,-.16),he.lineTo(-.36,.52),he.lineTo(.27,.52),he.lineTo(.27,-.16),he.closePath(),j.holes.push(he);const oe=new Se(new jt(j,{depth:.025,bevelEnabled:!1}),p);oe.position.set(w-.2,1.76,-.56),oe.castShadow=!0,oe.receiveShadow=!0,l.add(oe);for(const[L,V]of ca(a).holes){const _e=-.75+L*4,U=1.76-V*4,K=E(.027,.07,_e,U,-.5,y);K.rotation.x=Math.PI/2}for(const L of[1.04,1.66,2.3]){for(const V of[w+.75,w+.99])v(.035,.32,.03,V,L,-.55,_);for(const V of[-.145,.145])v(.24,.03,.03,w+.87,L+V,-.55,_)}const pe=new nt;pe.name="rear-expansion-cage",l.add(pe),h=pe;for(const L of[-.39,.43]){v(.035,.79,.05,-1.79,1.15,L,p);for(const V of[.79,1.51])v(.035,.045,.19,-1.79,V,L+(L<0?-.075:.075),p)}for(let L=0;L<7;L++){const V=.835+L*.105,_e=new Wt;_e.moveTo(-.39,-.044),_e.lineTo(.43,-.044),_e.lineTo(.43,.044),_e.lineTo(-.39,.044),_e.closePath();for(let K=0;K<6;K++){const ae=-.29+K*.105,me=new Gn;me.moveTo(ae,-.02),me.lineTo(ae,.02),me.lineTo(ae+.065,.02),me.lineTo(ae+.065,-.02),me.closePath(),_e.holes.push(me)}const U=new Se(new jt(_e,{depth:.014,bevelEnabled:!1}),g);U.rotation.y=-Math.PI/2,U.position.set(-1.785,V,0),U.castShadow=!0,pe.add(U)}if(h=d,u.shape==="slats")for(let L=0;L<23;L++)v(.016,1.95,.015,w+1.276,1.5,-.49+L*.044,_);if(u.shape==="mesh")for(let L=0;L<12;L++)for(let V=0;V<6;V++)v(.018,.06,.065,w+1.276,.55+L*.16,-.4+V*.16,_);if(u.shape==="fans")for(const L of[.85,1.5,2.15]){const V=new Se(new gn(.25,.026,12,64),x);V.rotation.y=Math.PI/2,V.position.set(w+1.282,L,0),d.add(V);const _e=cu(.23);for(let K=0;K<9;K++){const ae=new Se(_e,_);ae.position.set(w+1.285,L,0),ae.rotation.set(0,Math.PI/2,K*Math.PI*2/9,"YXZ"),d.add(ae)}const U=new Se(new Et(.065,.07,.03,48),x);U.rotation.z=Math.PI/2,U.position.set(w+1.29,L,0),d.add(U)}if(t==="stripe")for(const L of[-.25,.25])v(.022,2.05,.075,w+1.3,1.5,L,x),v(2.15,.012,.075,w,2.768,L,x);if(t==="checker")for(let L=0;L<10;L++)for(let V=0;V<6;V++)(L+V)%2===0&&v(.022,.14,.14,w+1.3,.68+L*.17,-.43+V*.17,x);if(t==="circuit")for(let L=0;L<5;L++)v(.022,1.1+L*.13,.018,w+1.3,1.4,-.4+L*.18,x),v(.022,.018,.14,w+1.3,.85+L*.26,-.34+L*.18,x),v(.023,.055,.055,w+1.3,1.95+L*.065,-.4+L*.18,x);E(.045,.014,w+1.17,2.768,.27,x.clone()).name="case-power-indicator";for(const L of[-.28,-.09]){const V=Zi("usb",.12,.045);V.rotation.x=-Math.PI/2,V.position.set(w+1.17,2.773,L),d.add(V)}for(const L of[.08,.17]){const V=Zi("audio",.065);V.rotation.x=-Math.PI/2,V.position.set(w+1.17,2.773,L),d.add(V)}for(const L of[w-1.2,w+1.2])v(.055,2.3,.055,L,1.5,.62,g);for(const L of[w-1.18,w+1.18])for(const V of[.4,2.61]){const _e=E(.022,.014,L,V,.665,g);_e.rotation.x=Math.PI/2}const Ge=new I(-1.825,.33,-.61);for(const L of d.children)L.position.sub(Ge);d.position.copy(Ge),d.scale.set(u.stretch[0],u.stretch[1],u.stretch[2]),h=l,v(c.width,.09,c.depth,c.centerX,.18,c.centerZ,_);for(const L of[c.centerX-c.width/2,c.centerX+c.width/2])v(.045,.1,c.depth,L,.26,c.centerZ,g);for(const L of[c.centerZ-c.depth/2,c.centerZ+c.depth/2])v(c.width,.1,.045,c.centerX,.26,L,g);const Le=new nt;Le.name="side-panel",l.add(Le),h=Le;const C=2.46*u.stretch[0],S=2.36*u.stretch[1],k=v(C,S,.028,0,0,0,p);k.name="panel-sheet";for(const L of[-C/2+.035,C/2-.035])v(.055,S,.045,L,0,-.025,g);for(const L of[-S/2+.035,S/2-.035])v(C,.055,.045,0,L,-.025,g);for(const L of[-C/2+.075,C/2-.075])for(const V of[-S/2+.075,S/2-.075]){const _e=E(.02,.012,L,V,.023,g);_e.rotation.x=Math.PI/2}if(t==="stripe")for(const L of[-C*.25,C*.25])v(.07,S-.2,.008,L,0,.018,x);if(t==="checker")for(let L=0;L<6;L++)for(let V=0;V<4;V++)(L+V)%2===0&&v(.14,.14,.008,-.5+L*.2,-.3+V*.2,.018,x);if(t==="circuit")for(let L=0;L<5;L++)v(.018,S*.6,.008,-.5+L*.25,0,.018,x),v(.18,.018,.008,-.42+L*.25,.3-L*.12,.018,x);if(n?Le.position.set(-1.825+1.275*u.stretch[0],.33+1.17*u.stretch[1],-.61+1.29*u.stretch[2]):(Le.rotation.y=Math.PI/2,Le.position.set(-3.05,.2+S/2,0)),h=l,!n)for(const L of[-.8,.8])v(.55,.07,.18,-3.05,.145,L,_),v(.08,.16,.18,-3.13,.22,L,_);const q=Le.clone(!0);if(q.name="back-panel",l.add(q),o==="glass"&&(k.material=new Ye({color:"#a6c9d4",metalness:.05,roughness:.12,transparent:!0,opacity:.2,depthWrite:!1}),k.castShadow=!1),s?(q.rotation.set(0,Math.PI,0),q.position.set(-1.825+1.275*u.stretch[0],.33+1.17*u.stretch[1],-.65)):(q.rotation.set(0,Math.PI/2,0),q.position.set(-3.7,.2+S/2,0)),!s)for(const L of[-.8,.8])v(.55,.07,.18,-3.7,.145,L,_),v(.08,.16,.18,-3.78,.22,L,_);const ie=new nt;ie.name="rear-panel",l.add(ie);const Y=new Wt,Ce=-.59,fe=-.61+1.2*u.stretch[2],Te=.34,Ae=.33+2.33*u.stretch[1];Y.moveTo(Ce,Te),Y.lineTo(fe,Te),Y.lineTo(fe,Ae),Y.lineTo(Ce,Ae),Y.closePath();const ce=(L,V,_e,U)=>{const K=new Gn;K.moveTo(L,V),K.lineTo(L,U),K.lineTo(_e,U),K.lineTo(_e,V),K.closePath(),Y.holes.push(K)};ce(-.46,.755,.49,1.56),ce(-.48,.37,.48,.735),ce(-.48,1.65,-.2,2.43);for(let L=0;L<8;L++)ce(-.08,1.73+L*.08,.43,1.765+L*.08);const ve=new Se(new jt(Y,{depth:.025,bevelEnabled:!1}),p);ve.castShadow=!0,ve.receiveShadow=!0,ie.add(ve);const Ne=(L,V,_e,U,K)=>{const ae=new nt;ae.name=L,ie.add(ae),h=ae;const me=U-V,re=K-_e,te=(V+U)/2,Re=(_e+K)/2;for(const Tt of[V,U])v(.016,re+.016,.018,Tt,Re,.032,g);for(const Tt of[_e,K])v(me,.016,.018,te,Tt,.032,g);const Be=.0225,rt=.0035,Ze=Math.max(0,Math.ceil((me-.012)/Be)-1),qt=Math.max(0,Math.ceil((re-.012)/Be)-1),It=new Bn(new dt(rt,re,.008),g,Ze),Zn=new Bn(new dt(me,rt,.008),g,qt),an=new Qe;for(let Tt=0;Tt<Ze;Tt++)It.setMatrixAt(Tt,an.makeTranslation(V+(Tt+1)*Be,Re,.032));for(let Tt=0;Tt<qt;Tt++)Zn.setMatrixAt(Tt,an.makeTranslation(te,_e+(Tt+1)*Be,.034));It.instanceMatrix.needsUpdate=!0,Zn.instanceMatrix.needsUpdate=!0,It.castShadow=Zn.castShadow=!0,ae.add(It,Zn)};if(Ne("rear-vent-grille",-.08,1.73,.43,2.325),Ne("rear-psu-grille",-.48,.37,-.02,.735),Ne("rear-psu-edge-grille",.32,.37,.48,.735),h=l,ie.rotation.y=-Math.PI/2,ie.position.set(r?-1.815:-2.45,r?0:-.14,0),!r)for(const L of[-.35,.35])v(.42,.07,.18,-2.45,.145,L,_);return l}const sl={type:"change"},Na={type:"start"},lu={type:"end"},or=new wr,rl=new zn,Fg=Math.cos(70*Ji.DEG2RAD),xt=new I,Ft=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},uo=1e-6;class Og extends jh{constructor(e,t=null){super(e,t),this.state=ct.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ki.ROTATE,MIDDLE:ki.DOLLY,RIGHT:ki.PAN},this.touches={ONE:Oi.ROTATE,TWO:Oi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new vn,this._lastTargetPosition=new I,this._quat=new vn().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ic,this._sphericalDelta=new Ic,this._scale=1,this._panOffset=new I,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new I,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zg.bind(this),this._onPointerDown=Bg.bind(this),this._onPointerUp=kg.bind(this),this._onContextMenu=$g.bind(this),this._onMouseWheel=Vg.bind(this),this._onKeyDown=Wg.bind(this),this._onTouchStart=Xg.bind(this),this._onTouchMove=qg.bind(this),this._onMouseDown=Gg.bind(this),this._onMouseMove=Hg.bind(this),this._interceptControlDown=Yg.bind(this),this._interceptControlUp=Jg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sl),this.update(),this.state=ct.NONE}update(e=null){const t=this.object.position;xt.copy(t).sub(this.target),xt.applyQuaternion(this._quat),this._spherical.setFromVector3(xt),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ft:n>Math.PI&&(n-=Ft),s<-Math.PI?s+=Ft:s>Math.PI&&(s-=Ft),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(xt.setFromSpherical(this._spherical),xt.applyQuaternion(this._quatInverse),t.copy(this.target).add(xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=xt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(or.origin.copy(this.object.position),or.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(or.direction))<Fg?this.object.lookAt(this.target):(rl.setFromNormalAndCoplanarPoint(this.object.up,this.target),or.intersectPlane(rl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>uo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>uo||this._lastTargetPosition.distanceToSquared(this.target)>uo?(this.dispatchEvent(sl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ft/60*this.autoRotateSpeed*e:Ft/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){xt.setFromMatrixColumn(t,0),xt.multiplyScalar(-e),this._panOffset.add(xt)}_panUp(e,t){this.screenSpacePanning===!0?xt.setFromMatrixColumn(t,1):(xt.setFromMatrixColumn(t,0),xt.crossVectors(this.object.up,xt)),xt.multiplyScalar(e),this._panOffset.add(xt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;xt.copy(s).sub(this.target);let r=xt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ft*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ft*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ft*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ft*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Bg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function zg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function kg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lu),this.state=ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Gg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ct.DOLLY;break;case ki.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ct.ROTATE}break;case ki.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Na)}function Hg(i){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Vg(i){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(i.preventDefault(),this.dispatchEvent(Na),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(lu))}function Wg(i){this.enabled!==!1&&this._handleKeyDown(i)}function Xg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Oi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ct.TOUCH_ROTATE;break;case Oi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case Oi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ct.TOUCH_DOLLY_PAN;break;case Oi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Na)}function qg(i){switch(this._trackPointer(i),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ct.NONE}}function $g(i){this.enabled!==!1&&i.preventDefault()}function Yg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Jg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jg(i,e){const t=new Og(i,e);t.target.fromArray(Vn.camera.target),t.enableDamping=!0,t.dampingFactor=.09,t.enablePan=!1,t.mouseButtons.RIGHT=null,t.minDistance=Vn.camera.minDistance,t.maxDistance=110,t.minPolarAngle=Math.PI*.02,t.maxPolarAngle=Math.PI*.82,t.minAzimuthAngle=-1/0,t.maxAzimuthAngle=1/0,t.update(),t.saveState();const n=new Set;let s=performance.now();const r=()=>n.clear(),o=h=>h instanceof Element&&!!h.closest("input,textarea,select,[contenteditable]"),a=h=>n.delete(h.code);window.addEventListener("keyup",a),window.addEventListener("blur",r),window.addEventListener("focusin",r),document.addEventListener("visibilitychange",r);const c=()=>{r(),t.enableDamping=!1,t.reset(),i.position.copy(new I(...Vn.camera.position)),t.target.fromArray(Vn.camera.target),t.update(),t.enableDamping=!0},l=h=>{o(h.target)||h.ctrlKey||h.altKey||h.metaKey||((h.code==="KeyQ"||h.code==="KeyE")&&(h.preventDefault(),n.add(h.code)),h.code==="KeyR"&&!h.ctrlKey&&!h.altKey&&!h.metaKey&&c())};return window.addEventListener("keydown",l),{focusAt:(h,p)=>{r(),t.enableDamping=!1,t.reset(),t.target.copy(h),i.position.copy(h).add(new I(.2,.85,1).normalize().multiplyScalar(p)),t.update(),t.enableDamping=!0},update:()=>{const h=performance.now(),p=Math.min((h-s)/1e3,.05);s=h;const g=Number(n.has("KeyE"))-Number(n.has("KeyQ"));if(g&&!o(document.activeElement)){const _=new I(1,0,0).applyQuaternion(i.quaternion).multiplyScalar(g*1.5*p);i.position.add(_),t.target.add(_)}t.update()},reset:c,topView:()=>{r(),t.enableDamping=!1,t.reset(),t.target.set(-.55,1.3,0),i.position.set(-.55,8.3,.46),t.update(),t.enableDamping=!0},dispose(){window.removeEventListener("keyup",a),window.removeEventListener("blur",r),window.removeEventListener("focusin",r),document.removeEventListener("visibilitychange",r),window.removeEventListener("keydown",l),t.dispose()}}}function Kg(){const i=new nt;i.name="motherboard-connectors";const e=new Ye({color:"#262f38",roughness:.6}),t=new Ye({color:"#cab16b",metalness:.7,roughness:.35}),n=new Ye({color:"#080e13",roughness:.9});for(const[s,r]of Object.entries(ds)){const o=new nt;o.name=`board-port-${s}`,o.position.fromArray(r),i.add(o);const a=(p,g,_,m,f,y,x=e)=>{const v=new Se(new dt(p,g,_),x);v.position.set(m,f,y),o.add(v)},c=s==="atx24"?2:s==="sata-data"?7:4,l=s==="atx24"?12:s==="eps"?2:1,u=s==="sata-data"?.012:.022,d=c*u+.012,h=l*u+.012;a(d,h,.008,0,0,-.053,n);for(const p of[-d/2,d/2])a(.006,h,.052,p,0,-.026);for(const p of[-h/2,h/2])a(d,.006,.052,0,p,-.026);for(let p=0;p<c;p++)for(let g=0;g<l;g++){const _=(p-(c-1)/2)*u,m=(g-(l-1)/2)*u;a(.004,.004,.033,_,m,-.025,t),(s==="atx24"||s==="eps")&&(a(.003,u,.038,_+u/2,m,-.029),a(u,.003,.038,_,m+u/2,-.029))}s==="sata-data"?a(.008,h*.65,.032,-d*.3,-h*.15,-.02):a(.012,h*.32,.012,d/2+.006,0,-.008)}return i.rotation.x=-Math.PI/2,i.scale.setScalar(.25),i}function Zg(){const i=new nt;i.name="board-surface-detail";const e=new Ye({color:"#253039",roughness:.72}),t=new Ye({color:"#aab8b8",metalness:.75,roughness:.38}),n=new Ye({color:"#a89973",roughness:.8}),s=new Ye({color:"#aabfae",roughness:.9}),r=[],o=(a,c,l,u,d,h,p=e)=>r.push({size:[a,c,l],position:[u,d,h],material:p});for(const a of[-.101,.021])o(.005,.008,.122,a,.04,-.05,t);for(const a of[-.111,.011])o(.122,.008,.005,-.04,.04,a,t);o(.0025,.003,.108,.029,.041,-.051,t),o(.011,.003,.003,.025,.041,.004,t);for(const[a,c,l]of[[-.088,.143,.024],[-.038,.144,.02],[.014,.146,.02]]){o(l,.004,l,a,.035,c),o(l*.65,6e-4,.002,a,.0375,c,s);for(let u=0;u<6;u++)for(const d of[-1,1]){const h=(u-2.5)*l/7;o(.003,.0015,.0015,a+d*(l/2+.001),.034,c+h,t),o(.0015,.0015,.003,a+h,.034,c+d*(l/2+.001),t)}}for(const a of[-.166,.165])for(let c=0;c<15;c++){const l=-.117+c*.017;if(!(a<0&&l<.1)&&!(a>0&&l>-.055&&l<.045)){o(.005,.0025,.007,a,.034,l,c%3===0?n:e);for(const u of[-.0035,.0035])o(.005,.0028,.001,a,.034,l+u,t);o(.008,5e-4,7e-4,a,.0332,l+.006,s)}}for(let a=0;a<10;a++){const c=-.119+a*.015;o(6e-4,4e-4,.013,c,.0331,.117,s),o(.007,4e-4,6e-4,c+.0032,.0331,.1235,s),o(6e-4,4e-4,.006,c+.0064,.0331,.1265,s)}for(const a of[e,t,n,s]){const c=r.filter(d=>d.material===a),l=new Bn(new dt(1,1,1),a,c.length),u=new Qe;c.forEach((d,h)=>{u.compose(new I(...d.position),new vn,new I(...d.size)),l.setMatrixAt(h,u)}),l.castShadow=!0,l.receiveShadow=!0,i.add(l)}return i}function Qg(){const i=new nt;i.name="motherboard-rear-io";const e=new nt;e.position.set(-1.065,-1.76,.5),e.rotation.y=-Math.PI/2,i.add(e);const t=new Ye({color:"#a6b5bd",metalness:.8,roughness:.34}),n=new Ye({color:"#1b252d",roughness:.65}),s=(r,o,a,c,l,u,d=t)=>{const h=new Se(new dt(r,o,a),d);return h.position.set(c,l,u),h.castShadow=!0,h.receiveShadow=!0,e.add(h),h};s(.28,.78,.012,-.34,2.04,.018,n).name="io-shield";for(const[r,o]of[["display",2.32],["display",2.21],["usb",2.08],["usb",1.98]]){const a=Zi(r,.17,.065);a.position.set(-.34,o,.044),e.add(a);for(const c of[-.434,-.246])s(.008,.084,.36,c,o,-.151);for(const c of[-.042,.042])s(.196,.008,.36,-.34,o+c,-.151);s(.188,.072,.015,-.34,o,-.333,n);for(const c of[-.41,-.27])s(.018,.018,.024,c,o-.047,-.3);for(const c of[-.39,-.29])s(.028,.002,.055,c,o+.047,-.15,n)}for(const[r,o]of[1.85,1.74].entries()){const a=Zi("audio",.075);a.position.set(-.34,o,.044),e.add(a),s(.11,.095,.35,-.34,o,-.148,n);const c=new Se(new gn(.028,.004,8,24),new Ye({color:r?"#c48294":"#83b9a0",roughness:.5}));c.position.set(-.34,o,.047),e.add(c);for(const l of[-.397,-.283])s(.01,.022,.016,l,o-.03,-.3)}return i.rotation.x=-Math.PI/2,i.scale.setScalar(.25),i}const uu=Ji.degToRad(12),ol=i=>{const e=Ji.clamp(i,0,1);return e*e*(3-2*e)};function e_(i,e){const t=new nt;t.name=`${i}-latches`;const n=new Ye({color:"#cbd2c9",roughness:.62,metalness:.03}),s=new Ye({color:"#7b8888",roughness:.8});for(const r of[-1,1]){const o=new nt;o.name=`${i}-latch-${r<0?"top":"bottom"}`,o.position.set(e,.041,-.04+r*.11),o.userData.latchSide=r;const a=new Wt;[[-.003,0],[.003,0],[.003,.022],[.002,.028],[-.003,.028],[-.0045,.026],[-.0045,.02],[-.002,.018]].forEach(([_,m],f)=>f?a.lineTo(r*_,m):a.moveTo(r*_,m)),a.closePath();const l=new jt(a,{depth:.005,bevelEnabled:!0,bevelSize:5e-4,bevelThickness:5e-4,bevelSegments:2,steps:1});l.translate(0,0,-.0025),l.rotateY(-Math.PI/2);const u=new nt;u.name="dimm-latch-lever",o.add(u);for(const _ of[-.011,.011]){const m=new Se(l,n);m.name="dimm-latch-channel-cheek",m.position.x=_,m.castShadow=!0,m.receiveShadow=!0,u.add(m)}const d=new Se(new dt(.027,.006,.006),n);d.position.y=.003,u.add(d);const h=new Se(new dt(.027,.023,.0015),n);h.position.set(0,.0165,r*.0028),h.name="dimm-latch-channel-back",u.add(h);const p=new Se(new dt(.015,8e-4,.005),s);p.position.set(0,.0064,-r*5e-4),p.name="dimm-latch-channel-floor",u.add(p);for(let _=0;_<3;_++){const m=new Se(new dt(.022,.0012,.001),s);m.position.set(0,.021+_*.0018,r*.0037),o.add(m)}const g=new Se(new Et(.0045,.0045,.026,12),s);g.rotation.z=Math.PI/2,g.position.copy(o.position),g.name="dimm-latch-hinge",t.add(g,o),o.rotation.x=r*uu}return t}function t_(i,e,t){const n=r=>r?.ownerId===e&&r.slotId===t,s=i.operation;return s&&n(s.to)?ol((s.elapsed/s.duration-.78)/.22):s&&n(s.from)?1-ol(s.elapsed/s.duration/.22):i.inventory.some(r=>r.location==="installed"&&n(r.placement))?1:0}function n_(i,e,t){for(const n of["dimm-a","dimm-b"]){const s=i.getObjectByName(`${n}-latches`);if(!s)continue;const r=t_(t,e,n);for(const o of s.children)o.userData.latchSide&&(o.rotation.x=o.userData.latchSide*uu*(1-r),o.userData.closed=r===1)}}function i_(i,e){return Ji.clamp(e?i/.78:(i-.22)/.78,0,1)}function s_(i){const e=new nt,t=new Ye({color:i.color,metalness:.35,roughness:.5}),n=new Ye({color:"#17232c",roughness:.8}),s=new Ye({color:"#d9dfde",metalness:.8,roughness:.3}),r=new Ye({color:"#d5b36d",metalness:.7,roughness:.4});t.map=il(["Motherboard","RAM","SSD"].includes(i.type)?"pcb":"metal"),s.map=il("metal");const o=(d,h,p,g,_,m,f=t)=>{const y=new Se(new dt(d,h,p),f);return y.position.set(g,_,m),y.castShadow=!0,y.receiveShadow=!0,e.add(y),y},a=i.type==="GPU"?i.id==="gpu-slot"?.7:i.id==="gpu-long"?1.25:i.fans?Math.max(.85,Math.min(1.4,i.lengthMm/240)):1:1,c=d=>-.2+(d+.2)*a,l=(d,h,p,g,_,m,f=t)=>o(d*a,h,p,c(g),_,m,f),u=(d,h,p,g)=>{const _=new Se(new gn(g,.009,12,64),s);_.rotation.x=Math.PI/2,_.position.set(d,h,p),e.add(_);const m=new Se(new Et(g*.92,g*.92,.018,32),n);m.position.set(d,h-.014,p),e.add(m);const f=new nt;f.name="fan-rotor",f.position.set(d,h,p),e.add(f);const y=cu(g*.94),x=new Ye({color:"#aab9bd",metalness:.25,roughness:.42});for(let R=0;R<9;R++){const P=new Se(y,x);P.rotation.set(-Math.PI/2,0,R*Math.PI*2/9,"YXZ"),P.castShadow=!0,P.receiveShadow=!0,f.add(P)}const v=i.type==="GPU",E=new Se(new Et(g*.35,g*.37,v?.008:.025,48),n);E.position.y=v?0:.013,f.add(E);const A=new Se(new Et(g*.31,g*.32,.004,48),s);A.position.y=v?.006:.027,f.add(A)};switch(i.type){case"GPU Support":o(.13,.025,.13,0,.0125,0,n),o(.042,.24,.042,0,.145,0,s),o(.075,.04,.07,0,.23,0),o(.035,.07,.035,0,.28,0,s),o(.1,.018,.09,0,.312,0,n),o(.02,.025,.02,.044,.23,0,r);break;case"Motherboard":o(.15,.0075,.05,-.035,.03475,.0475,n).name="m2-carrier",o(.01375,.00875,.0425,.03625,.0465,.0475,n).name="m2-socket";for(let d=0;d<10;d++)o(.004,.0015,.002,.0295,.0505,.033+d*.003,r).name="m2-contact";{const d=new Se(new Et(.0045,.0045,.003,16),s);d.position.set(-.095,.04875,.0475),d.name="m2-screw",e.add(d)}{const d=ca(i.formFactor);o(d.width,.025,d.depth,d.x,.02,d.z).name="motherboard-pcb"}o(.11,.025,.11,-.04,.045,-.05,s).name="cpu-socket";for(const[d,h]of[.08,.13].entries()){const p=new nt;p.name=`dimm-${d===0?"a":"b"}-mouth`,p.position.set(h,.065,-.04),e.add(p);for(const g of[-.0065,.0065])o(.005,.032,.22,h+g,.049,-.04,n);e.add(e_(d===0?"dimm-a":"dimm-b",h))}for(const d of[.092,.108])o(.23,.0275,.005,-.04,.04625,d,n);{const d=new nt;d.name="pcie-mouth",d.position.set(-.04,.06,.1),e.add(d)}break;case"CPU":{o(.19,.028,.19,0,.025,0),o(.167,.003,.167,0,.04,0,n).name="cpu-lid-seal";const d=new Wt,h=.078,p=i.socket==="AX5"?.018:.007;d.moveTo(-h+p,-h),d.lineTo(h-p,-h),d.lineTo(h,-h+p),d.lineTo(h,h-p),d.lineTo(h-p,h),d.lineTo(-h+p,h),d.lineTo(-h,h-p),d.lineTo(-h,-h+p),d.closePath();const g=new Se(new jt(d,{depth:.014,bevelEnabled:!0,bevelThickness:.002,bevelSize:.002,bevelSegments:3}),s);g.rotation.x=-Math.PI/2,g.position.y=.043,g.name="cpu-heat-spreader",e.add(g);break}case"CPU Cooler":o(.12,.015,.12,0,.0125,0,s).name="cooler-base";for(let d=0;d<6;d++)o(.24,.018,.23,0,.035+d*.027,0,s);u(0,.21,0,.1),o(.035,.16,.035,.1,.085,0,r);break;case"RAM":o(.381,.025,.095,0,.035,0).name="ram-pcb",o(.32,.012,.014,0,.036,.055,r);for(let d=0;d<4;d++)o(.055,.023,.055,-.13+d*.085,.058,0,n);break;case"GPU":{const d=i.fans??(i.id==="gpu-slot"?1:i.id==="gpu-long"?3:2),h=d===1?[-.04]:d===3?[-.12,0,.12]:[-.1,.1],p=d===3?.061:d===1?.073:.067,g=.39*a/2,_=i.id==="gpu-long"?.015:.007,m=new Wt;m.moveTo(-g+_,-.09),m.lineTo(g-_,-.09),m.lineTo(g,-.09+_),m.lineTo(g,.09-_),m.lineTo(g-_,.09),m.lineTo(-g+_,.09),m.lineTo(-g,.09-_),m.lineTo(-g,-.09+_),m.closePath();for(const y of h){const x=new Gn;x.absarc(c(y)-c(0),0,p+.007,0,Math.PI*2,!0),m.holes.push(x)}const f=new Se(new jt(m,{depth:.009,bevelEnabled:!0,bevelSize:.0015,bevelThickness:.0015,bevelSegments:2,curveSegments:32}),t);f.rotation.x=-Math.PI/2,f.position.set(c(0),.072,0),f.name="gpu-open-fan-shroud",e.add(f);for(const y of h)u(c(y),.082,0,p);for(const y of[-.086,.086])l(.38,.012,.007,0,.061,y),l(.38,.01,.007,0,.013,y);for(const y of[-.184,.184])l(.014,.056,.168,y,.037,0);if(l(.36,.004,.146,0,.008,0,n).name="gpu-pcb",o(.018,.12,.21,-.2,.05,0,s),i.id==="gpu-long")for(const y of[-.08,.08]){const x=l(.35,.012,.012,0,.086,y,s);x.name="gpu-armored-rail"}if(i.id==="gpu-slot")for(let y=0;y<4;y++)l(.006,.0015,.04,.115+y*.017,.083,0,n);break}case"SSD":i.interface==="SATA"?(o(.26,.025,.18,0,.0325,0),o(.19,.004,.13,0,.047,0,s),o(.025,.014,.12,.13,.03,0,n)):(o(.26,.016,.075,0,.028,0),o(.16,.013,.06,0,.044,0,n),o(.025,.014,.06,.13,.03,0,r));break;case"PSU":o(.26,.19,.25,0,.1,0),u(0,.205,0,.085),o(.1,.07,.014,0,.11,.13,n);break}if(i.type==="Motherboard"){o(.022,.004,.019,.04,.035,-.158,n).name="board-status-led-base";const d=new Se(new Cs(.0065,16,10),new Ye({color:"#384544",emissive:"#000000",emissiveIntensity:0,roughness:.35}));d.name="board-status-led",d.position.set(.04,.041,-.158),d.scale.y=.65,e.add(d),e.add(Kg()),e.add(Qg()),e.add(Zg());for(const h of[-.087,-.054,-.021,.012])o(.022,.018,.018,h,.043,-.129,s);for(let h=0;h<5;h++){const p=new Se(new Et(.007,.007,.017,16),n);p.position.set(-.131,.043,-.1+h*.041),e.add(p);const g=new Se(new Et(.006,.006,.002,16),s);g.position.copy(p.position),g.position.y+=.009,e.add(g),o(.008,.001,.001,g.position.x,.053,g.position.z,n)}o(.052,.012,.03,.09,.041,.136,n);for(let h=0;h<6;h++)o(.003,.013,.028,.068+h*.009,.044,.136,s);for(let h=0;h<8;h++)o(.011,.005,.006,-.12+h*.03,.035,.167,n),o(.002,.002,.008,-.124+h*.03,.039,.167,r);o(.029,.048,.204,-.163,.045,-.02,s);for(const[h,p]of ca(i.formFactor).holes){const g=new Se(new gn(.012,.003,5,12),r);g.rotation.x=Math.PI/2,g.position.set(h,.037,p),e.add(g)}}if(i.type==="CPU"){for(const p of[-.087,.087])for(let g=0;g<8;g++){const _=-.066+g*.019;o(.007,.003,.009,p,.041,_,n);for(const m of[-.004,.004])o(.007,.0035,.0015,p,.041,_+m,s)}for(let p=0;p<14;p++)o(.0018,5e-4,.012,-.032+p*.0048,.0595,.047,n);for(const p of[-.088,.088])o(.002,.001,.13,p,.0395,0,r);for(let p=0;p<7;p++)for(let g=0;g<7;g++)o(.012,.001,.012,-.066+p*.022,.0115,-.066+g*.022,r);for(const p of[-.086,.086])for(let g=0;g<5;g++)o(.008,.008,.012,p,.043,-.055+g*.027,s);const d=new Wt;d.moveTo(0,0),d.lineTo(.018,0),d.lineTo(0,.018),d.closePath();const h=new Se(new Da(d),r);h.rotation.x=-Math.PI/2,h.position.set(-.071,.06,-.071),e.add(h);for(let p=0;p<8;p++)for(const g of[-.09,.09])o(.01,.008,.013,-.07+p*.02,.045,g,r);o(.09,.003,.008,0,.061,0,n),o(.055,.003,.007,0,.061,.02,n)}if(i.type==="RAM"){for(const d of[-.038,.033])o(.326,.005,.01,0,.073,d,t);for(const d of[-.161,.161])o(.012,.011,.067,d,.064,0,t);for(let d=0;d<4;d++){const h=-.13+d*.085;o(.049,.008,.049,h,.019,0,n).name="ram-rear-memory-chip",o(.028,.001,.009,h,.07,.014,s);for(let p=0;p<5;p++)for(const g of[-.027,.027])o(.003,.003,.005,h-.018+p*.009,.05,g,s)}for(let d=0;d<18;d++)o(.009,.002,.018,-.15+d*.018,.029,.055,r);for(const d of[-.169,.169])o(.007,.006,.013,d,.049,-.027,n);for(const d of[-.035,.032])for(let h=0;h<12;h++)o(.003,.009,.008,-.145+h*.026,.066,d,s);for(let d=0;d<10;d++)o(.007,.004,.004,-.145+d*.03,.051,-.04,n);for(let d=0;d<4;d++){o(.06,.006,.014,-.13+d*.085,.075,-.025,s);for(const h of[-.012,.015])o(.012,.005,.006,-.1+d*.085,.074,h,r)}o(.082,.002,.026,-.03,.071,.005,s);for(let d=0;d<7;d++)o(.003,.001,.018,-.062+d*.009,.0725,.005,n);for(let d=0;d<18;d++)o(.009,.003,.02,-.15+d*.018,.044,.055,r);o(.3,.012,.012,0,.074,-.037,s)}if(i.type==="GPU"){for(const g of[-.091,.091]){l(.35,.004,.002,0,.069,g,n);for(const _ of[-.176,.176])l(.009,.009,.003,_,.073,g,s),l(.005,.0015,.004,_,.073,g,n)}l(.37,.006,.165,0,.004,0,n);for(const g of[-.17,.17])for(const _ of[-.069,.069])l(.012,.002,.012,g,5e-4,_,s),l(.008,.001,.002,g,-.001,_,n);for(let g=0;g<8;g++)l(.016,.002,.1,-.13+g*.035,-5e-4,0,s);if(i.requiresPower!==!1){const g=e.children.length,_=hl(i.id);o(.029,.036,.057,.203,.048,.018,n).name="gpu-power-socket";for(let m=0;m<2;m++)for(let f=0;f<4;f++)o(.003,.008,.008,.219,.037+m*.015,-.003+f*.014,r);for(const m of e.children.slice(g))m.position.x+=_.x,m.position.z+=_.z}for(const g of[-.05,.045]){const _=Zi("display",.055,.022);_.rotation.y=-Math.PI/2,_.position.set(-.221,.075,g),e.add(_)}l(.065,.004,.06,0,.012,0,n).name="gpu-processor-package";for(const g of[-.075,0,.075])for(const _ of[-.052,.052])l(.027,.004,.02,g,.012,_,n).name="gpu-memory-package";for(const g of[-.144,-.122,.122,.144])l(.014,.006,.024,g,.013,0,s).name="gpu-power-choke";l(.12,.01,.082,0,.019,0,s).name="gpu-cold-plate",l(.344,.004,.142,0,.025,0,s).name="gpu-heatsink-base";const d=Math.round(84*a),h=new Bn(new dt(.0026,.03,.15),s,d),p=new Qe;for(let g=0;g<d;g++)p.makeTranslation(c(-.17+g*.34/(d-1)),.042,0),h.setMatrixAt(g,p);h.name="gpu-heatsink-fins",h.castShadow=!0,h.receiveShadow=!0,h.instanceMatrix.needsUpdate=!0,h.computeBoundingBox(),h.computeBoundingSphere(),e.add(h);for(const g of[-.061,-.021,.021,.061]){const _=new Se(new Et(.004,.004,.33*a,12),s);_.rotation.z=Math.PI/2,_.position.set(c(0),.02,g),_.name="gpu-heatpipe",e.add(_)}o(.17,.014,.025,0,.014,.08,r);for(const g of[-.055,0,.055])o(.009,.025,.035,-.212,.066,g,n)}if(i.type==="CPU Cooler"){for(let d=0;d<6;d++)for(const h of[-.116,.116])o(.218,.004,.002,0,.035+d*.027,h,n);for(const d of[-.099,.099])for(const h of[-.098,.098]){const p=new Se(new Et(.005,.005,.005,12),s);p.position.set(d,.184,h),e.add(p)}for(const d of[-.075,.075]){const h=new Se(new Et(.013,.013,.19,10),r);h.position.set(d,.1,.08),e.add(h)}}if(i.type==="SSD"){if(i.interface==="SATA"){for(const d of[-.111,.111])for(const h of[-.071,.071])o(.008,.002,.008,d,.046,h,n);for(let d=0;d<9;d++)o(.003,.001,.033,-.06+d*.012,.05,.017,n)}else for(let d=0;d<8;d++)o(.006,.004,.004,-.1+d*.027,.04,-.029,r);if(i.interface==="M.2 NVMe")for(const d of[-.085,0,.08])o(.048,.006,.04,d,.055,0,s)}if(i.type==="PSU"){for(const h of[.036,.055,.074]){const p=new Se(new gn(h,.0018,6,40),s);p.rotation.x=Math.PI/2,p.position.set(0,.226,0),e.add(p)}for(const h of[-.11,.11])for(const p of[-.105,.105]){const g=new Se(new Et(.005,.005,.003,12),s);g.position.set(h,.197,p),e.add(g)}for(let h=0;h<4;h++)for(let p=0;p<8;p++)o(.016,.009,.002,-.093+p*.026,.035+h*.035,-.126,n);for(let h=0;h<5;h++)o(.085,.007,.006,-.067,.045+h*.024,.129,n);const d=Zi("power",.065,.052);d.position.set(.06,.11,.137),e.add(d),o(.035,.025,.01,.06,.047,.133,n),o(.003,.012,.002,.06,.047,.139,s)}return e}function r_(i){const e=new nt,t=new Map;function n(r){const o=Wi(r.inventory,r.benchSelection),a=new Set([...o.visibleIds,...r.inventory.filter(c=>c.location==="installed").map(c=>c.instanceId),...r.operation?[r.operation.instanceId]:[]]);for(const[c,l]of t)if(!a.has(c)){const u=new Set,d=new Set;l.getObjectByName("visual").traverse(h=>{h instanceof Se&&(h.geometry.dispose(),(Array.isArray(h.material)?h.material:[h.material]).forEach(p=>u.add(p)))}),u.forEach(h=>{h instanceof Ye&&h.map&&d.add(h.map),h.dispose()}),d.forEach(h=>h.dispose()),l.removeFromParent(),t.delete(c)}for(const c of r.inventory){if(t.has(c.instanceId)||!a.has(c.instanceId))continue;const l=new nt,u=s_(Pe(c.catalogId));u.name="visual",u.scale.setScalar(Pe(c.catalogId).type==="GPU"?4:On.scale),l.add(u),l.position.fromArray(o.positions.get(c.instanceId)),l.userData.instanceId=c.instanceId,t.set(c.instanceId,l),e.add(l)}}n(i);const s=new Se(new dt(.74,.008,.62),new Rn({color:"#90c995"}));return s.visible=!1,e.add(s),{root:e,models:t,reconcile:n,sync(r){const o=r.selectedInstanceId?t.get(r.selectedInstanceId):void 0;s.visible=!!o&&!r.operation&&r.inventory.find(c=>c.instanceId===r.selectedInstanceId)?.location==="tray";const a=r.inventory.find(c=>c.instanceId===r.selectedInstanceId);if(o&&a&&s.position.set(o.position.x,.238,o.position.z),s.scale.set(1,1,1),o&&a&&s.visible&&Pe(a.catalogId).type==="GPU"){const c=new Cn().setFromObject(o);s.position.x=(c.min.x+c.max.x)/2,s.position.z=(c.min.z+c.max.z)/2,s.scale.set((c.max.x-c.min.x+.04)/.74,1,(c.max.z-c.min.z+.04)/.62)}for(const[c,l]of t)l.traverse(u=>{if(u instanceof Se&&u.material instanceof Ye){if(u.name==="board-status-led"){const h=r.inventory.find(g=>g.instanceId===c)?.location==="installed"&&(r.power==="RUNNING"||r.power==="ERROR"),p=h?r.power==="RUNNING"?"#43ed88":"#ef4949":"#384544";u.material.color.set(p),u.material.emissive.set(h?p:"#000000"),u.material.emissiveIntensity=h?.9:0,u.userData.status=h?r.power:"OFF";return}u.material.emissive.set(c===r.selectedInstanceId?"#397347":"#000000"),u.material.emissiveIntensity=.6}});e.userData.selectedInstanceId=r.selectedInstanceId}}}const o_={"GPU Support":{scale:1,rotation:[0,0,0],contact:[0,0,0]},Motherboard:{scale:4,rotation:[Math.PI/2,0,0],contact:[0,0,0]},CPU:{scale:1.8,rotation:[Math.PI/2,0,0],contact:[0,.011,0]},"CPU Cooler":{scale:1.8,rotation:[Math.PI/2,0,0],contact:[0,.005,0]},RAM:{scale:2.3,rotation:[Math.PI,0,Math.PI/2],contact:[0,.036,.045]},GPU:{scale:4,rotation:[Math.PI,0,0],contact:[0,.014,.0675]},SSD:{scale:2,rotation:[Math.PI/2,0,0],contact:[0,.02,0]},PSU:{scale:1.65,rotation:[0,-Math.PI/2,0],contact:[0,.005,0]}};function a_(i,e){const t=o_[i],[n,s,r]=e?t.rotation:[0,0,0],o=new vn().setFromEuler(new Kt(n,s,r,"ZYX")),a=e||i==="GPU"?t.scale:On.scale,c=e?new I(...t.contact).multiplyScalar(-a).applyQuaternion(o):new I;return{scale:a,quaternion:o,offset:c}}function c_(i){const{root:e,models:t}=i,n=[];let s=null,r=null,o="",a,c=null,l=Wi([]);function u(_){return new I(...l.positions.get(_))}function d(_){const m=_.ownerId==="case"?e:t.get(_.ownerId),f=a.inventory.find(v=>v.instanceId===_.ownerId),y=f?Pe(f.catalogId):null,x=(y?.type==="Motherboard"?y.slots:$n(a.caseId).slots).find(v=>v.id===_.slotId);return{owner:m,position:new I(...x.position),rotation:new Kt(...x.rotation)}}function h(_,m){const f=a.inventory.find(v=>v.instanceId===_),y=Pe(f.catalogId).type,x=a_(y,m);return{...x,scaleY:y==="GPU Support"&&m?(1.086-$n(a.caseId).slots.find(v=>v.id==="support").position[1])/.321:x.scale}}function p(){s&&(s.removeFromParent(),s.traverse(_=>{_ instanceof Se&&_.material.dispose()}),s=null,r=null)}function g(){if(!s||!a.selectedInstanceId)return;const _=Wn(a).filter(y=>Jn(a,a.selectedInstanceId,y.key)===null),m=_.find(y=>y.key===c)??_[0];if(s.visible=!!m&&!a.operation,!m)return;const f=d({ownerId:m.ownerId,slotId:m.id});f.owner.add(s),s.position.copy(f.position),s.rotation.copy(f.rotation)}return{hover(_){c=_,g()},sync(_){a=_,i.reconcile(_),l=Wi(_.inventory,_.benchSelection);const m=[..._.inventory].sort((v,E)=>+(Pe(E.catalogId).type==="Motherboard")-+(Pe(v.catalogId).type==="Motherboard"));for(const v of m){const E=t.get(v.instanceId);if(!E)continue;const A=E.getObjectByName("visual");if(v.placement){const P=d(v.placement);P.owner.add(E),E.position.copy(P.position),E.rotation.copy(P.rotation)}else e.add(E),E.position.copy(u(v.instanceId)),E.rotation.set(0,0,0);const R=h(v.instanceId,!!v.placement);A.scale.set(R.scale,R.scaleY,R.scale),A.quaternion.copy(R.quaternion),A.position.copy(R.offset),Pe(v.catalogId).type==="Motherboard"&&n_(A,v.instanceId,_)}const f=_.operation;if(f){const v=t.get(f.instanceId);e.updateWorldMatrix(!0,!0);const E=O=>{if(!O)return u(f.instanceId);const G=d(O);return e.worldToLocal(G.owner.localToWorld(G.position.clone()))},R=Pe(_.inventory.find(O=>O.instanceId===f.instanceId).catalogId).type==="RAM"?i_(f.elapsed/f.duration,!!f.to):f.elapsed/f.duration,P=R*R*(3-2*R),M=E(f.from),b=E(f.to);e.add(v),v.position.lerpVectors(M,b,P),v.position.z+=Math.sin(R*Math.PI)*.5,v.rotation.set(0,0,0);const w=h(f.instanceId,!!f.from),N=h(f.instanceId,!!f.to),F=v.getObjectByName("visual");F.scale.setScalar(Ji.lerp(w.scale,N.scale,P)),F.scale.y=Ji.lerp(w.scaleY,N.scaleY,P),F.quaternion.slerpQuaternions(w.quaternion,N.quaternion,P),F.position.lerpVectors(w.offset,N.offset,P)}const y=JSON.stringify(Wn(_).map(v=>[v.key,v.position,v.rotation]));if(y!==o){for(const v of n)v.removeFromParent(),v.geometry.dispose(),v.material.dispose();n.length=0;for(const v of Wn(_)){const E=new Se(new xi(v.kind==="board"?.7:.23,v.kind==="board"?.85:.23),new Rn({transparent:!0,opacity:.48,side:hn,depthWrite:!1})),A=d({ownerId:v.ownerId,slotId:v.id});A.owner.add(E),E.position.copy(A.position),E.rotation.copy(A.rotation),v.kind==="psu"||v.kind==="gpu-support"?(E.rotation.x=-Math.PI/2,E.position.y+=.008):E.position.z+=.12,E.userData.slotKey=v.key,E.userData.slotKind=v.kind,n.push(E)}o=y}const x=_.inventory.find(v=>v.instanceId===_.selectedInstanceId);for(const v of n){const A=!!x&&Pe(x.catalogId).type==="CPU"&&v.userData.slotKind==="cooler";v.scale.setScalar(A?.3:1),v.material.opacity=A?.15:.48,v.userData.ignoreSelection=A,v.visible=!!x&&x.location==="tray"&&!f,v.material.color.set(Jn(_,x?.instanceId??"",v.userData.slotKey)===null?"#80edb2":"#cb665e")}if((r!==_.selectedInstanceId||f||x?.location!=="tray")&&(p(),x?.location==="tray"&&!f)){s=new nt;const v=t.get(x.instanceId).getObjectByName("visual").clone(!0),E=h(x.instanceId,!0);v.scale.set(E.scale,E.scaleY,E.scale),v.quaternion.copy(E.quaternion),v.position.copy(E.offset),v.traverse(A=>{A instanceof Se&&(A.material=new Rn({color:"#85f5bc",transparent:!0,opacity:.23,depthWrite:!1}),A.castShadow=!1,A.receiveShadow=!1,A.raycast=()=>{})}),s.add(v),r=x.instanceId}g(),e.updateWorldMatrix(!0,!0)},dispose(){p();for(const _ of n)_.removeFromParent(),_.geometry.dispose(),_.material.dispose()}}}function l_(i,e,t){return e===0&&i<=5&&t<700}function u_(i,e,t){return e===2&&i<=5&&t<700}function d_(i,e,t,n,s,r=()=>{}){const o=new Jh;let a=null;function c(_){const m=i.getBoundingClientRect();return t.updateWorldMatrix(!0,!0),e.updateWorldMatrix(!0,!1),o.setFromCamera(new le((_.clientX-m.left)/m.width*2-1,-(_.clientY-m.top)/m.height*2+1),e),o.intersectObject(t,!0).filter(f=>{let y=f.object;for(;y;){if(!y.visible||y.userData.ignoreSelection)return!1;y=y.parent}return!0})}function l(_){let m=_;for(;m;){if(m.userData.terminalKey)return{terminal:m.userData.terminalKey};if(m.userData.cableId)return{cable:m.userData.cableId};if(m.userData.slotKey)return{slot:m.userData.slotKey};if(m.userData.instanceId)return{part:m.userData.instanceId};m=m.parent}return{}}const u=_=>{if(r(null),!_.isPrimary||![0,2].includes(_.button)){a=null;return}a={id:_.pointerId,x:_.clientX,y:_.clientY,time:performance.now(),distance:0,button:_.button}},d=_=>{if(a&&(a.distance=Math.max(a.distance,Math.hypot(_.clientX-a.x,_.clientY-a.y))),!a&&!n.getState().operation){const m=c(_).map(f=>l(f.object)).find(f=>f.slot||f.part);s(m?.slot??null),r(m?.part??null,_.clientX,_.clientY)}},h=_=>{const m=a;if(a=null,!m||m.id!==_.pointerId||m.button!==_.button)return;const f=Math.max(m.distance,Math.hypot(_.clientX-m.x,_.clientY-m.y)),y=performance.now()-m.time,x=u_(f,m.button,y);if(!x&&!l_(f,m.button,y))return;const v=i.getBoundingClientRect();if(_.clientX<v.left||_.clientX>v.right||_.clientY<v.top||_.clientY>v.bottom)return;if(x){_.preventDefault(),s(null),r(null);const R=n.getState(),P=R.inventory.find(M=>M.instanceId===R.selectedInstanceId);R.operation||R.wiringMode||P?.location!=="installed"?n.cancel():n.remove();return}if(n.getState().operation)return;const E=c(_).map(R=>l(R.object));if(n.getState().wiringMode){const R=E.find(P=>P.terminal);R?.terminal&&n.chooseTerminal(R.terminal);return}const A=E.find(R=>R.slot||R.part);A?.slot?n.install(A.slot):A?.part&&n.select(A.part)},p=()=>{a=null,s(null),r(null)},g=_=>_.preventDefault();return i.addEventListener("contextmenu",g),i.addEventListener("pointerdown",u),i.addEventListener("pointermove",d),i.addEventListener("pointerup",h),i.addEventListener("pointercancel",p),i.addEventListener("pointerleave",p),{dispose(){i.removeEventListener("contextmenu",g),i.removeEventListener("pointerdown",u),i.removeEventListener("pointermove",d),i.removeEventListener("pointerup",h),i.removeEventListener("pointercancel",p),i.removeEventListener("pointerleave",p)}}}const al={atx24:"#303943",eps:"#353942",pcie:"#343d45","sata-power":"#34383d","sata-data":"#663e39",fan:"#363a40",display:"#24292f"};function h_(i,e,t){if(i==="display")return[e,e.clone().add(new I(-.18,0,0)),new I(-2.12,e.y,.32),new I(-2.12,.16,-1.65),new I(-1.6,.16,-2.35),new I(2.5,.16,-2.35),new I(t.x,t.y,t.z-.15),t];if(i==="fan")return[e,e.clone().add(new I(-.1,.06,0)),new I(t.x,t.y,t.z+.1),t];const n=i==="eps"?-1.59:.32,s=-.607,r=i==="eps"?2.6:[1.04,1.66,2.3].reduce((l,u)=>Math.abs(u-t.y)<Math.abs(l-t.y)?u:l,1.04),o=e.y<.8?e.x+.24:.32,c=i==="atx24"||i==="eps"||i==="sata-data"?t.clone().add(new I(0,0,i==="atx24"||i==="eps"?.23:.12)):t.clone().add(new I(i==="pcie"?.2:.075,0,0));return i==="atx24"?[e,new I(e.x+.16,e.y,e.z),new I(o,e.y,s),new I(n,e.y,s),new I(n,2.3,s),new I(n,2.3,c.z),new I(t.x,2.3,c.z),c,t]:[e,new I(e.x+(e.y<.8?.16:.07),e.y,e.z),new I(o,e.y,s),new I(n,e.y,s),new I(n,r,s),new I(n,r,c.z),c,t].filter((l,u,d)=>u===0||l.distanceTo(d[u-1])>.005)}function f_(i){const e=new jl;let t=i[0];for(let n=1;n<i.length-1;n++){const s=i[n],r=Math.min(.055,s.distanceTo(i[n-1])*.3,s.distanceTo(i[n+1])*.3),o=s.clone().addScaledVector(i[n-1].clone().sub(s).normalize(),r),a=s.clone().addScaledVector(i[n+1].clone().sub(s).normalize(),r);e.add(new ia(t,o)),e.add(new Ia(o,s,a)),t=a}return e.add(new ia(t,i[i.length-1])),e}function p_(i){const e=new nt;e.name="wiring",i.root.add(e);let t="";const n=()=>{e.traverse(s=>{s instanceof Se&&(s.geometry.dispose(),s.material.dispose())}),e.clear()};return{sync(s){const r=JSON.stringify([s.cables,s.wiringMode,s.selectedTerminal,s.sidePanelInstalled,s.power,s.operation?.id,s.inventory.map(c=>c.placement)]);if(r===t)return;t=r,n(),i.root.updateWorldMatrix(!0,!0);const o=fi(s),a=c=>{const l=o.find(u=>u.key===c);return l.ownerId==="monitor"?new I(...l.position):i.root.worldToLocal(i.models.get(l.ownerId).localToWorld(new I(...l.position)))};for(const c of o){const l=s.inventory.find(d=>d.instanceId===c.ownerId);if(l&&Pe(l.catalogId).type==="Motherboard")continue;const u=new Se(new dt(.025,c.kind==="atx24"?.12:.055,c.kind==="atx24"?.055:.045),new Ye({color:"#151c22",roughness:.65}));u.position.copy(a(c.key)),u.name=`socket:${c.key}`,c.ownerId==="monitor"&&(u.rotation.y=Math.PI/2),e.add(u)}for(const c of s.cables){if(!o.some(_=>_.key===c.from)||!o.some(_=>_.key===c.to))continue;const l=a(c.from),u=a(c.to),d=h_(c.kind,l,u),h=f_(d),p=c.kind==="fan"?.007:c.kind==="atx24"?.021:.013,g=new Se(new Bi(h,96,p,8,!1),new Ye({color:al[c.kind],roughness:.72}));g.userData.cableId=c.id,e.add(g);for(const[_,m]of[[l,d[1].clone().sub(l)],[u,d[d.length-2].clone().sub(u)]]){const f=_===u&&(c.kind==="atx24"||c.kind==="eps"),y=o.find(E=>E.key===(_===l?c.from:c.to)).ownerId,x=s.inventory.find(E=>E.instanceId===y),v=!!x&&Pe(x.catalogId).type==="PSU";{const E=new vn().setFromUnitVectors(new I(0,0,1),m.normalize()),A=c.kind==="fan"&&_===l?.45:1,R=(M,b,w,N=0)=>{const F=new Se(M,new Ye({color:w,metalness:N,roughness:N?.3:.7}));return F.scale.setScalar(A),F.position.copy(b.multiplyScalar(A).applyQuaternion(E).add(_)),F.quaternion.copy(E),F.name=`${c.kind}-plug-detail`,e.add(F),F},P=(M,b,w,N,F,O,G,H=0)=>R(new dt(M,b,w),new I(N,F,O),G,H);if(v){const M=P(.068,.06,.048,0,0,.014,"#1b242c");M.name="psu-cable-plug",P(.023,.008,.026,0,.032,.012,"#4b555e");const b=new Et(.026,p+.002,.078,12);b.rotateX(Math.PI/2);const w=R(b,new I(0,0,.073),"#272f37");w.name="psu-cable-boot";for(let N=0;N<3;N++){const F=R(new gn(.024-N*.002,.002,6,12),new I(0,0,.046+N*.012),"#343d45");F.name="psu-boot-rib"}}else if(f){const M=c.kind==="atx24"?2:4,b=c.kind==="atx24"?12:2,w=.022,N=M*w+.012,F=b*w+.012;P(N,F,.068,0,0,.024,"#1b242c"),P(.01,F*.32,.042,N/2+.006,0,.018,"#59616a");for(let O=0;O<b;O++)for(let G=0;G<M;G++){const H=(G-(M-1)/2)*w,J=(O-(b-1)/2)*w;P(.016,.016,.018,H,J,-.014,"#39414a");const W=new dr([new I(H,J,.058),new I(H*.85,J*.85,.088),new I(H*.25,J*.25,.15),new I(0,0,.18)]),ue=R(new Bi(W,12,.004,6,!1),new I,"#303943");ue.name=`${c.kind}-plug-wire`}}else if(c.kind==="fan"||c.kind==="sata-data"||c.kind==="sata-power"||c.kind==="atx24"||c.kind==="eps"){const M=c.kind==="fan",b=c.kind==="sata-data"||c.kind==="sata-power",w=M?4:c.kind==="sata-data"?7:c.kind==="sata-power"?15:c.kind==="atx24"?12:8,N=b||M?1:2,F=w/N,O=M?.022:b?.012:.014,G=F*O+.012,H=M?.034:b?.024:N*O+.012,J=P(G,H,.054,0,0,.018,M?"#d1d2c7":"#202932");J.name=`${c.kind}-full-plug`,b?P(.008,H*.65,.025,-G*.3,-H*.15,-.011,"#414a51"):P(.01,H*.32,.03,G/2+.005,0,.015,"#667078");for(let W=0;W<w;W++){const ue=(W%F-(F-1)/2)*O,ge=(Math.floor(W/F)-(N-1)/2)*O;P(O*.65,.009,.014,ue,ge,-.014,"#414a51");const Me=new dr([new I(ue,ge,.046),new I(ue*.8,ge*.8,.071),new I(0,0,.1)]),ke=R(new Bi(Me,8,M?.003:.0025,5,!1),new I,al[c.kind]);ke.name=`${c.kind}-bundle-wire`}}else if(c.kind==="display"){const M=new Wt;M.moveTo(-.065,-.024),M.lineTo(.065,-.024),M.lineTo(.065,.012),M.lineTo(.05,.024),M.lineTo(-.065,.024),M.closePath(),R(new jt(M,{depth:.035,bevelEnabled:!1}),new I(0,0,-.008),"#adb6bd",.85),P(.15,.065,.095,0,0,.074,"#20262c"),P(.064,.009,.037,0,.036,.069,"#5b646d");for(const b of[-.064,.064])for(let w=0;w<4;w++)P(.009,.045,.005,b,0,.048+w*.016,"#3c454e")}else{P(.22,.12,.075,0,0,.03,"#141c23");for(let M=0;M<2;M++)for(let b=0;b<4;b++){const w=(b-1.5)*.048,N=(M-.5)*.05;P(.034,.035,.014,w,N,-.014,"#39414a"),P(.014,.016,.009,w,N,-.023,"#bd9e54",.7);const F=new dr([new I(w,N,.065),new I(w*.8,N*.8,.105),new I(0,0,.14)]);R(new Bi(F,10,.006,5,!1),new I,"#252e37")}P(.055,.016,.075,0,.068,.028,"#59616a")}for(let M=0;M<(v?0:5);M++){const b=R(new gn(.017-M*.001,.003,4,10),new I(0,0,.125+M*.009),"#343d45");b.name="plug-strain-relief"}continue}}}if(!(!s.wiringMode||s.operation||s.sidePanelInstalled||yt(s)))for(const c of o){if(!(s.selectedTerminal?di(s,s.selectedTerminal,c.key)===null:c.direction==="source"&&!s.cables.some(d=>d.from===c.key))&&c.key!==s.selectedTerminal)continue;const u=new Se(new Cs(.055,12,8),new Rn({color:c.key===s.selectedTerminal?"#ffdc71":"#8cffb9",depthTest:!1}));u.renderOrder=20,u.position.copy(a(c.key)),u.userData.terminalKey=c.key,e.add(u)}},dispose(){n(),e.removeFromParent()}}}function m_(){const i=new nt;i.position.set(2.5,.1,-2.05);const e=new Ye({color:"#202b32",roughness:.65}),t=(h,p,g,_)=>{const m=new Se(new dt(h,p,g),e);m.position.y=_,i.add(m)},n=1.25*1.35,s=.51+1.08*n/2;t(.9*1.35,.07,.5*1.35,.04),t(.09,.7,.08,.38),t(1.8*n,1.08*n,.1,s);const r=document.createElement("canvas");r.width=768,r.height=448;const o=r.getContext("2d"),a=new dh(r);a.colorSpace=Ot;const c=new Se(new xi(1.68*n,.98*n),new Rn({map:a}));c.position.set(0,s,.056),i.add(c);const l=new Rn({color:"#38423c"}),u=new Se(new Cs(.025,10,6),l);u.position.set(.9*n-.11,.55,.06),i.add(u);let d="";return{root:i,sync(h){const p=h.cables.some(_=>_.kind==="display"),g=JSON.stringify([h.power,p,h.inventory.map(_=>_.placement)]);if(g!==d){if(d=g,o.fillStyle="#0b141c",o.fillRect(0,0,768,448),o.fillStyle="#91efbc",o.font="bold 30px sans-serif",o.fillText("CTC / SIMULATED BOOT",28,48),o.font="24px sans-serif",o.fillText(h.power,28,90),l.color.set(h.power==="RUNNING"?"#75ff9b":h.power==="ERROR"?"#ff765c":"#38423c"),!p)o.font="24px sans-serif",o.fillText("NO SIGNAL / Connect GPU DisplayPort",28,150);else if(h.power==="RUNNING"||h.power==="BOOTING"){o.font="19px sans-serif";let _=135;for(const m of h.inventory.filter(f=>f.location==="installed")){const f=Pe(m.catalogId);if(f.type==="GPU Support")continue;const y="capacityGB"in f?` / ${f.capacityGB} GB`:"wattage"in f?` / ${f.wattage} W`:"cores"in f?` / ${f.cores} cores`:"vramGB"in f?` / ${f.vramGB} GB VRAM`:"";o.fillText(f.name+y,28,_),_+=30}}else o.font="21px sans-serif",o.fillText(h.power==="ERROR"?"Check Power / cables panel for errors.":h.power==="CHECKING"?"Checking hardware and required cables...":"Press Power to start.",28,150);a.needsUpdate=!0}},dispose(){a.dispose(),c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),l.dispose(),i.children.forEach(h=>{h instanceof Se&&h.geometry.dispose()}),e.dispose(),i.removeFromParent()}}}function g_(i,e){const t=document.createElement("aside");t.className="hover-specs part-details",t.setAttribute("role","tooltip"),t.hidden=!0,i.append(t);let n=null;const s=()=>{t.hidden=!0,n=null},r=(c,l=0,u=0)=>{const d=e.getState().inventory.find(g=>g.instanceId===c);if(!d||e.getState().operation){s();return}if(n!==c){const g=Pe(d.catalogId);t.innerHTML=`<h3>${g.name}</h3>${vl(g)}`,n=c}t.hidden=!1;const h=t.offsetWidth,p=t.offsetHeight;t.style.left=`${Math.max(8,Math.min(l+18+h>innerWidth?l-h-18:l+18,innerWidth-h-8))}px`,t.style.top=`${Math.max(8,Math.min(u+16,innerHeight-p-8))}px`},o=c=>{const l=c.target.closest("[data-instance-id]");l?r(l.dataset.instanceId??null,c.clientX,c.clientY):c.target instanceof HTMLCanvasElement||s()};i.addEventListener("pointermove",o),i.addEventListener("pointerleave",s),i.addEventListener("pointerdown",s),i.addEventListener("wheel",s,{passive:!0}),window.addEventListener("keydown",s),window.addEventListener("blur",s);const a=e.subscribe(()=>s());return{show:r,dispose(){a(),i.removeEventListener("pointermove",o),i.removeEventListener("pointerleave",s),i.removeEventListener("pointerdown",s),i.removeEventListener("wheel",s),window.removeEventListener("keydown",s),window.removeEventListener("blur",s),t.remove()}}}function __(i,e=new Audio){const t=document.createElement("div");t.className="tutorial-voice";const n=document.createElement("button");n.type="button",n.textContent="ฟังซ้ำ";const s=document.createElement("button");s.type="button",s.textContent="ปิดเสียงบรรยาย",s.setAttribute("aria-pressed","false");const r=document.createElement("small");r.setAttribute("role","status"),t.append(n,s,r),i.append(t),e.preload="auto",e.volume=.85;let o=!1,a=!1,c=!1,l=null,u=null,d=0;const h=()=>{d++,e.pause(),e.currentTime=0,r.textContent=""},p=()=>{if(h(),!o||a||!l||c)return;const m=d,f=new URL(`audio/tutorial-th/${l}.mp3`,document.baseURI).href;e.src!==f&&(e.src=f),r.textContent="กำลังโหลดเสียง…",e.play().then(()=>{m===d&&!c&&(r.textContent="กำลังบรรยายภาษาไทย")}).catch(y=>{m!==d||c||(r.textContent=y instanceof DOMException&&y.name==="NotAllowedError"?"กด “ฟังซ้ำ” เพื่ออนุญาตให้เล่นเสียง":"เล่นไฟล์เสียงไม่ได้ กด “ฟังซ้ำ” เพื่อลองอีกครั้ง")})},g=()=>{r.textContent=""},_=()=>{o&&!a&&!c&&(r.textContent="โหลดเสียงไม่สำเร็จ กด “ฟังซ้ำ” เพื่อลองใหม่")};return e.addEventListener("ended",g),e.addEventListener("error",_),n.onclick=()=>{if(a){r.textContent="กด “เปิดเสียงบรรยาย” ก่อนฟังซ้ำ";return}p()},s.onclick=()=>{a=!a,s.textContent=a?"เปิดเสียงบรรยาย":"ปิดเสียงบรรยาย",s.setAttribute("aria-pressed",String(a)),a?h():p()},{start(){o=!0,u=null},update(m){l=m,!(!o||m===u)&&(u=m,p())},suspend(){u!==null&&(u=null,h())},stop(){o=!1,u=null,h()},dispose(){c=!0,o=!1,h(),e.removeEventListener("ended",g),e.removeEventListener("error",_),e.removeAttribute("src"),e.load(),t.remove()}}}function v_(i,e,t){const n=new nt;n.name="tutorial-arrow",n.visible=!1;const s=new Rn({color:"#ffdf78",depthTest:!1}),r=new Se(new Et(.022,.022,.25,12),s);r.position.y=.3;const o=new Se(new Ra(.075,.14,20),s);o.rotation.z=Math.PI,o.position.y=.105,n.add(r,o),n.traverse(v=>{v.renderOrder=100,v.raycast=()=>{}});const a=document.createElement("section");a.className="tutorial-guide",a.hidden=!0,a.innerHTML='<strong></strong><p role="status"></p><button type="button">หยุดสอน / ข้าม</button>',i.append(a);let c=!1,l=()=>null;const u=__(a),d=document.createElement("div");d.className="tutorial-ui-arrow",d.textContent="➜",d.hidden=!0,d.setAttribute("aria-hidden","true"),i.append(d);let h=null,p=null;const g=v=>()=>{const E=i.querySelector(".wiring-panel");return E?E.open?v?Array.from(E.querySelectorAll("[data-tutorial-sink]")).find(A=>A.dataset.tutorialSink===v)??null:E.querySelector('[data-tutorial-action="power"]'):E.querySelector("summary"):null},_=["Motherboard","CPU","CPU Cooler","RAM","GPU","SSD","PSU"],m=v=>()=>{const E=t.models.get(v);return E?new Cn().setFromObject(E.getObjectByName("visual")).getCenter(new I):null},f=()=>{const v=e.getState();if(n.visible=!1,l=()=>null,h=null,a.hidden=!c||v.tutorial.skipped,a.hidden){u.stop();return}let E=_.findIndex(P=>!v.inventory.some(M=>M.location==="installed"&&Pe(M.catalogId).type===P));E<0&&(E=Yn(v).length?7:v.power==="RUNNING"?9:8),a.querySelector("strong").textContent=E<9?`ขั้น ${E+1}/9 · ${Hn[E][0]}`:"✓ สอนครบแล้ว · เปิดเครื่องสำเร็จ";let A=E<9?Hn[E][1]:"พร้อมรับงานลูกค้าและทดสอบ Benchmark ได้แล้ว",R=["board","cpu","cooler","ram","gpu","ssd","psu","check","power","complete"][E];if(E<7){const P={...v,sidePanelInstalled:!1},M=Wn(v),b=v.inventory.filter(F=>F.location==="tray"&&Pe(F.catalogId).type===_[E]);E===6&&b.sort((F,O)=>{const G=Pe(F.catalogId),H=Pe(O.catalogId);return(H.type==="PSU"?H.wattage:0)-(G.type==="PSU"?G.wattage:0)});const w=b.filter(F=>M.some(O=>Jn(P,F.instanceId,O.key)===null)),N=w.find(F=>F.instanceId===v.selectedInstanceId)??w[0];if(N)if(v.selectedInstanceId===N.instanceId){const F=M.find(O=>Jn(P,N.instanceId,O.key)===null);l=()=>(F.ownerId==="case"?t.root:t.models.get(F.ownerId))?.localToWorld(new I(...F.position))??null,A=v.sidePanelInstalled?"เปิดเมนูเคส แล้วถอดฝาข้างก่อนติดตั้ง":`คลิกช่องสีเขียวที่ลูกศรชี้ เพื่อใส่ ${Pe(N.catalogId).name}`,R=v.sidePanelInstalled?"open-case":"slot"}else t.models.has(N.instanceId)?(l=m(N.instanceId),A=`คลิก ${Pe(N.catalogId).name} ที่ลูกศรชี้ แล้วเลือกช่องติดตั้งสีเขียว`):(R=_[E]==="GPU"?"catalog":"inventory",h=()=>{if(!e.getState().inventoryOpen)return i.querySelector(_[E]==="GPU"?".gpu-catalog-toggle":".inventory-toggle");const F=i.querySelector(`[data-instance-id="${N.instanceId}"]`);return F&&!F.hidden?F:i.querySelector(".inventory-filter")},A=`เปิด${_[E]==="GPU"?"เมนูเลือกการ์ดจอ":"คลังชิ้นส่วน แล้วเลือกหมวด "+_[E]} กด ${Pe(N.catalogId).name} เพื่อนำมาวางบนถาด แล้วใส่ช่องสีเขียว`);else R="missing",A=v.operation?"รอชิ้นส่วนติดตั้งให้เสร็จ":`ยังไม่มี ${_[E]} ที่ติดตั้งได้ เปิดร้านค้าซื้อรุ่นที่เข้ากันได้ หรือเปลี่ยนเคสให้รองรับบอร์ด`}else if(E===7){const P=fi(v).find(M=>M.direction==="sink"&&M.kind!=="display"&&!v.cables.some(b=>b.to===M.key));P&&P.kind!=="display"&&(R=v.sidePanelInstalled?"open-case":`cable-${P.kind}`),P?(h=g(P.key),A=v.sidePanelInstalled?"ถอดฝาข้างในเมนูเคสก่อน แล้วกดปุ่มต่อสายที่ลูกศรชี้":`เปิดเมนู “ต่อสาย / เปิดเครื่อง” แล้วกด “＋ ต่อสายนี้” ที่ลูกศร 2D ชี้ เพื่อเชื่อม ${P.name}`):A=Yn(v)[0]??A}else if(E===8){const P=v.power==="CHECKING"||v.power==="BOOTING";R=P?"booting":"power",P||(h=g()),A=P?"กำลังเปิดเครื่อง กรุณารอ…":"สายจำเป็นครบแล้ว กด “เปิดเครื่อง” ที่ลูกศร 2D ชี้ในเมนูด้านซ้าย"}a.querySelector("p").textContent=A,v.operation?u.suspend():u.update(R)},y=()=>{c=!0,u.start(),e.setTutorial(!1),f()};a.querySelector("button").onclick=()=>{c=!1,e.setTutorial(!0),f()},i.addEventListener("start-tutorial",y);const x=e.subscribe(f);return{root:n,update(v){const E=c&&!e.getState().tutorial.skipped&&!e.getState().operation,A=E?l():null;n.visible=!!A,A&&n.position.copy(A).add(new I(0,.12+Math.sin(v*.004)*.035,0));const R=E?h?.()??null:null;if(R!==p&&(p?.classList.remove("tutorial-ui-target"),p=R,R&&(R.classList.add("tutorial-ui-target"),R.scrollIntoView({block:"nearest",inline:"nearest"}))),d.hidden=!R,R){const P=R.getBoundingClientRect();let M=Math.max(0,P.left),b=Math.min(innerWidth,P.right),w=Math.max(0,P.top),N=Math.min(innerHeight,P.bottom);for(let O=R.parentElement;O;O=O.parentElement){const G=getComputedStyle(O),H=O.getBoundingClientRect();/auto|scroll|hidden|clip/.test(G.overflowX)&&(M=Math.max(M,H.left),b=Math.min(b,H.left+O.clientWidth)),/auto|scroll|hidden|clip/.test(G.overflowY)&&(w=Math.max(w,H.top),N=Math.min(N,H.top+O.clientHeight))}d.hidden=b<=M||N<=w;const F=b+50<=innerWidth;d.style.transform=F?"rotate(180deg)":"none",d.style.left=`${F?b+6:Math.max(0,M-50)}px`,d.style.top=`${Math.max(0,Math.min(innerHeight-48,(w+N)/2-24))}px`}},dispose(){u.dispose(),x(),i.removeEventListener("start-tutorial",y),p?.classList.remove("tutorial-ui-target"),d.remove(),a.remove(),n.removeFromParent(),r.geometry.dispose(),o.geometry.dispose(),s.dispose()}}}function x_(i,e,t){const n=new Ug({antialias:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(devicePixelRatio,Vn.pixelRatioLimit)),n.shadowMap.enabled=!0,n.shadowMap.type=yl,n.toneMapping=Ml,n.toneMappingExposure=1.05,i.prepend(n.domElement),n.domElement.setAttribute("aria-label","ฉากโต๊ะช่างและเคสคอมพิวเตอร์ 3D ใช้เมาส์ลากเพื่อหมุน เลื่อนล้อเพื่อซูม");const s=new rh;s.background=new Ke("#19252e"),s.fog=new wa("#19252e",45,100);const r=new Vt(40,1,.1,160);r.position.fromArray(Vn.camera.position);const o=jg(r,n.domElement);s.add(new Wh("#e8f4ff","#6a6455",1.9));const a=new Rc("#fff0d7",2.7);a.position.set(-3,7,5),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),a.shadow.camera.left=-5,a.shadow.camera.right=5,a.shadow.camera.top=5,a.shadow.camera.bottom=-5,a.shadow.normalBias=.015,a.shadow.bias=-1e-4,s.add(a);const c=new Rc("#a6d7ff",1.8);c.position.set(4,4,-3),s.add(c);const l=new qh("#d6fff0",9,8);l.position.set(0,2.3,3),s.add(l);let u,d="";function h(w){const N=new Set;w.traverse(O=>{(O instanceof Se||O instanceof Vl)&&(O.geometry.dispose(),(Array.isArray(O.material)?O.material:[O.material]).forEach(G=>N.add(G)))});const F=new Set;N.forEach(O=>{"map"in O&&O.map instanceof At&&F.add(O.map),O.dispose()}),F.forEach(O=>O.dispose()),w.removeFromParent()}const p=r_(t.getState());s.add(p.root);const g=c_(p),_=p_(p),m=m_();s.add(m.root);const f=t.subscribe(w=>{const N=w.inventory.filter(J=>J.location==="installed").map(J=>Pe(J.catalogId)).find(J=>J.type==="Motherboard"),F=N?.type==="Motherboard"?N.formFactor:"ATX",O=Wi(w.inventory),G=[w.caseId,w.finishId,w.patternId,w.sidePanelInstalled,w.backPanelInstalled,w.rearPanelInstalled,w.sidePanelStyle,F,JSON.stringify(O.sections)].join("/");G!==d&&(u&&h(u),u=Ng(w.caseId,w.finishId,w.patternId,w.sidePanelInstalled,w.backPanelInstalled,w.rearPanelInstalled,w.sidePanelStyle,F,O),s.add(u),d=G),g.sync(w),p.sync(w),_.sync(w),m.sync(w);const H=u.getObjectByName("case-power-indicator");H&&(H.material.color.set(w.power==="RUNNING"?"#80ffc1":w.power==="ERROR"?"#ff6f55":"#455454"),H.material.emissive.copy(H.material.color),H.material.emissiveIntensity=w.power==="RUNNING"?1.5:w.power==="ERROR"?.6:0)}),y=g_(i,t),x=document.createElement("button");x.className="tray-navigation",x.textContent="มองถาดอุปกรณ์",x.type="button",x.onclick=()=>o.focusAt(new I(2.65,.4,.5),6),i.querySelector(".control-dock").prepend(x);const v=v_(i,t,p);s.add(v.root);const E=d_(n.domElement,r,p.root,t,g.hover,y.show),A=new Se(new xi(200,200),new Ye({color:"#29363b",roughness:.92}));A.rotation.x=-Math.PI/2,A.position.y=-2.08,A.receiveShadow=!0,s.add(A);function R(){r.aspect=i.clientWidth/Math.max(i.clientHeight,1),r.updateProjectionMatrix(),n.setPixelRatio(Math.min(devicePixelRatio,Vn.pixelRatioLimit)),n.setSize(i.clientWidth,i.clientHeight)}const P=new ResizeObserver(R);P.observe(i),R();const M=w=>{w.preventDefault(),n.setAnimationLoop(null),e("การเชื่อมต่อกับกราฟิกหยุดทำงาน กรุณากด “ลองใหม่” เพื่อโหลดฉากอีกครั้ง")};n.domElement.addEventListener("webglcontextlost",M);let b=performance.now();return n.setAnimationLoop(w=>{const N=Math.min(Math.max((w-b)/1e3,0),.05);if(b=w,t.tick(N),t.getState().power==="RUNNING")for(const F of t.getState().inventory.filter(O=>O.location==="installed"))p.models.get(F.instanceId).traverse(O=>{O.name==="fan-rotor"&&(O.rotation.y+=N*18)});v.update(w),o.update(),n.render(s,r)}),{resetCamera:o.reset,topView:o.topView,dispose(){f(),y.dispose(),x.remove(),v.dispose(),E.dispose(),g.dispose(),_.dispose(),m.dispose(),P.disconnect(),o.dispose(),n.setAnimationLoop(null),n.domElement.removeEventListener("webglcontextlost",M),s.traverse(w=>{w instanceof Se&&(w.geometry.dispose(),(Array.isArray(w.material)?w.material:[w.material]).forEach(F=>{F instanceof Ye&&F.map?.dispose(),F.dispose()}))}),n.dispose(),n.domElement.remove()}}}function y_(i,e){const t=document.createElement("section");t.className="assembly-hud",t.innerHTML='<p class="assembly-message" role="status"></p><strong class="assembly-selected"></strong><div class="assembly-actions"><button class="remove-part">ถอดกลับถาด [เมาส์ขวา]</button><button class="cancel-part">ยกเลิก [เมาส์ขวา]</button></div><details class="slot-options"><summary>ตำแหน่งติดตั้งและเหตุผล</summary><div class="slot-buttons"></div></details>',i.append(t);const n=document.createElement("div");n.className="selected-cables",t.append(n);const s=t.querySelector(".remove-part"),r=t.querySelector(".cancel-part");s.onclick=()=>e.remove(),r.onclick=()=>e.cancel();let o="";const a=e.subscribe(c=>{const l=JSON.stringify([c.message,c.selectedInstanceId,c.operation?.id,c.inventory.map(p=>p.placement),c.cables,c.power,c.sidePanelInstalled]);if(o===l)return;o=l,t.querySelector(".assembly-message").textContent=c.message;const u=_l(c);if(t.querySelector(".assembly-selected").textContent=u?u.part.name:"",s.hidden=u?.instance.location!=="installed",s.disabled=!!c.operation,s.title=u?fl(c,u.instance.instanceId)??"ถอดกลับช่องเดิมบนถาด":"",n.replaceChildren(),u){const p=u.instance.instanceId,g=c.cables.filter(_=>_.from.startsWith(p+"/")||_.to.startsWith(p+"/"));if(g.length){const _=document.createElement("p");_.textContent=`ก่อนถอดชิ้นส่วนนี้ ให้ถอดสาย ${g.length} เส้นด้านล่าง`,n.append(_);for(const m of g){const f=document.createElement("button");f.textContent=`ถอด ${po[m.kind]}`,f.disabled=yt(c)||!!c.operation||c.sidePanelInstalled,f.onclick=()=>e.disconnectCable(m.id),n.append(f)}}}r.hidden=!u&&!c.operation,r.textContent=u?.instance.location==="installed"&&!c.operation?"ยกเลิกการเลือก [Esc]":"ยกเลิก [เมาส์ขวา]";const d=t.querySelector(".slot-options");d.hidden=!u||u.instance.location!=="tray"||!!c.operation;const h=t.querySelector(".slot-buttons");if(h.replaceChildren(),u&&u.instance.location==="tray"&&!c.operation)for(const p of Wn(c)){const g=Jn(c,u.instance.instanceId,p.key),_=document.createElement("button");_.textContent=`${g?"×":"✓"} ${p.key}${g?` — ${g}`:""}`,_.onclick=()=>e.install(p.key),h.append(_)}});return{dispose(){a(),t.remove()}}}function S_(i,e){const t=document.createElement("details");t.className="machine-status",t.innerHTML='<summary></summary><p class="power-budget"></p><ul></ul><small>กฎจำลองของเกม: (ภาระอุปกรณ์ + 50 W) × 1.25 ปัดขึ้น · ต้องมีสายที่จำเป็นครบ</small>',i.append(t);let n="";const s=e.subscribe(r=>{const o=JSON.stringify([r.caseId,r.cables,r.inventory.map(u=>u.placement)]);if(o===n)return;n=o;const a=ha(r.inventory.filter(u=>u.location==="installed").map(u=>Pe(u.catalogId)),$n(r.caseId)),c=Yn(r);t.querySelector("summary").textContent=c.length===0?"✓ สถานะเครื่อง · พร้อมเปิด Power":`สถานะเครื่อง · ต้องแก้ ${c.length} รายการ`,t.querySelector(".power-budget").textContent=`PSU ${a.availableWatts} W / ต้องการ ${a.requiredWatts} W ตามชิ้นส่วนที่ติดตั้ง`;const l=t.querySelector("ul");l.replaceChildren();for(const u of c){const d=document.createElement("li");d.textContent=u,l.append(d)}});return{dispose(){s(),t.remove()}}}function M_(i,e){const t=document.createElement("details");t.className="wiring-panel",t.innerHTML='<summary>Power / สาย</summary><p>กฎจำลองของเกม: ต้องมีอุปกรณ์หลักและสายที่จำเป็นครบ · M.2 ไม่ใช้สาย SATA</p><div class="power-actions"></div><p class="wire-state" role="status"></p><div class="wire-ports"></div><div class="wire-cables"></div><ul class="power-errors"></ul>',i.append(t);const n=(h,p,g)=>{const _=document.createElement("button");return _.textContent=h,_.onclick=p,g.append(_),_},s=t.querySelector(".power-actions"),r=t.querySelector(".power-errors");s.before(r);const o=n("⏻ เปิดเครื่อง",()=>e.pressPower(),s),a=n("ปิดเครื่องเพื่อแก้ไข",()=>e.powerOff(),s),c=n("เลือกหัวสายบนโมเดล",()=>e.toggleWiring(),s);o.dataset.tutorialAction="power";const l=n("ยกเลิกหัวสายที่เลือก",()=>e.cancel(),s);t.addEventListener("toggle",()=>{if(t.open){const h=i.querySelector(".machine-status");h&&(h.open=!1)}});let u="";const d=e.subscribe(h=>{const p=JSON.stringify([h.power,h.powerErrors,h.cables,h.selectedTerminal,h.wiringMode,h.operation?.id,h.sidePanelInstalled,h.inventory.map(E=>E.placement)]);if(p===u)return;u=p;const g=fi(h),_=g.filter(E=>E.direction==="sink"&&!h.cables.some(A=>A.to===E.key));t.querySelector("summary").textContent=`ต่อสาย / เปิดเครื่อง · ${Au[h.power]}`,o.disabled=!!h.operation||yt(h),a.disabled=h.power==="OFF",c.disabled=!!h.operation||yt(h),c.textContent=h.wiringMode?"หยุดเลือกหัวสายบนโมเดล":"เลือกหัวสายบนโมเดล",l.hidden=!h.selectedTerminal,t.querySelector(".wire-state").textContent=h.sidePanelInstalled?"ถอดฝาข้างก่อนต่อ/ถอดสาย":h.selectedTerminal?"เลือกปลายทางสีเขียว หรือกดคู่หัวต่อด้านล่าง":"กดคู่หัวต่อเพื่อต่อสาย · DisplayPort คือสายภาพ GPU → จอ ส่วน GPU power คือไฟจาก PSU · ถอดด้วยปุ่มถอด";const m=t.querySelector(".wire-ports");m.replaceChildren();const f=document.createElement("h3");f.textContent=_.length?`ยังไม่ได้ต่อ ${_.length} เส้น`:"สายครบแล้ว",m.append(f);for(const E of _){const A=g.find(M=>M.direction==="source"&&M.kind===E.kind&&!h.cables.some(b=>b.from===M.key)),R=document.createElement("div");R.className="wire-task",m.append(R);const P=document.createElement("span");if(P.textContent=po[E.kind],R.append(P),A){const M=n("＋ ต่อสายนี้",()=>e.connectCable(A.key,E.key),R);M.dataset.tutorialSink=E.key,M.disabled=!!di(h,A.key,E.key),M.title=di(h,A.key,E.key)??"ต่อสายและจัดเก็บตามเส้นทางในเคส"}else{const M=document.createElement("p");M.textContent="ติดตั้งอุปกรณ์ต้นทางก่อน (PSU / cooler / SATA SSD)",R.append(M)}}if(!_.length){const E=document.createElement("p");E.textContent=g.length?"✓ สายของอุปกรณ์ที่ติดตั้งครบแล้ว":"ติดตั้งอุปกรณ์ก่อน แล้วคู่หัวต่อจะแสดงที่นี่",m.append(E)}if(h.wiringMode)for(const E of g)(h.selectedTerminal?di(h,h.selectedTerminal,E.key)===null:E.direction==="source"&&!h.cables.some(R=>R.from===E.key))&&(n(E.name,()=>e.chooseTerminal(E.key),m).disabled=h.sidePanelInstalled||!!h.operation||yt(h));const y=t.querySelector(".wire-cables");if(y.replaceChildren(),h.cables.length){const E=document.createElement("h3");E.textContent=`ต่อแล้ว ${h.cables.length} เส้น · ถอดได้ที่นี่`,y.append(E)}for(const E of h.cables){const A=document.createElement("div");A.className="connected-wire";const R=document.createElement("span");R.textContent=`✓ ${po[E.kind]}`,A.append(R),n("ถอดสาย",()=>e.disconnectCable(E.id),A).disabled=yt(h)||!!h.operation||h.sidePanelInstalled,y.append(A)}const x=t.querySelector(".power-errors");x.replaceChildren();const v=Yn(h);x.toggleAttribute("hidden",v.length===0);for(const E of v){const A=document.createElement("li");A.textContent=E,x.append(A)}});return{dispose(){d(),t.remove()}}}function b_(i,e){const t=document.createElement("button");t.className="jobs-toggle",t.textContent="งาน / ร้านค้า / Benchmark",t.setAttribute("aria-expanded","false");const n=document.createElement("aside");n.className="jobs-panel",n.hidden=!0,n.id="jobs-panel",t.setAttribute("aria-controls",n.id),n.innerHTML='<div class="inventory-heading"><h2>งานลูกค้า</h2><button class="close-jobs">✕</button></div><p class="job-wallet" role="status"></p><p class="job-message" role="status"></p><div class="job-list"></div><section class="job-active"></section><section class="benchmark-result" aria-live="polite"></section><div class="job-actions"></div><details class="job-shop"><summary>ร้านชิ้นส่วน</summary><div class="shop-items"></div></details><details class="job-returns"><summary>คืนชิ้นส่วนบนถาด</summary><div class="return-items"></div></details><p class="job-rules">รับงานจะเริ่มโต๊ะว่าง ชิ้นส่วนทดลองไม่ใช้ในงาน · เคสและสายเป็นอุปกรณ์ที่ร้านจัดให้ ไม่หักงบ · ส่งงานแล้วคืนของบนถาดและงบเหลือให้ลูกค้า รางวัลเข้ากระเป๋าแยก · ยังไม่บันทึกเมื่อรีโหลด</p>',n.querySelector(".job-rules").textContent="รับงานจะเริ่มโต๊ะว่าง · เคสและสายไม่หักงบ · ส่งงานแล้วคืนของบนถาดและงบเหลือให้ลูกค้า รางวัลแยกจากงบงาน · บันทึกอัตโนมัติในเบราว์เซอร์นี้ หลังโหลดต้องเปิดเครื่องและทดสอบคะแนนใหม่",i.append(t,n),t.onclick=()=>{n.hidden=!n.hidden,t.setAttribute("aria-expanded",String(!n.hidden)),n.hidden||e.toggle(!1)},n.querySelector(".close-jobs").onclick=()=>{n.hidden=!0,t.setAttribute("aria-expanded","false"),t.focus()};const s=(c,l,u,d=!1)=>{const h=document.createElement("button");return h.textContent=c,h.onclick=l,h.disabled=d,u.append(h),h};let r="";const o=e.subscribe(c=>{c.inventoryOpen&&(n.hidden=!0,t.setAttribute("aria-expanded","false"));const l=JSON.stringify([c.activeJobId,c.jobBudget,c.rewardMoney,c.completedJobs,c.benchmark,c.power,c.operation?.id,c.inventory,c.cables,c.lastDelivery,c.message]);if(l===r)return;r=l;const u=hi(c.activeJobId??"");n.querySelector(".job-wallet").textContent=`งบงานคงเหลือ ${c.jobBudget.toLocaleString()} cr · รางวัลสะสม ${c.rewardMoney.toLocaleString()} cr`,n.querySelector(".job-message").textContent=c.message,t.textContent=`งาน / ซื้อของ / ทดสอบ (${c.completedJobs.length}/3)`;const d=n.querySelector(".job-list");if(d.replaceChildren(),!u)for(const y of fr){const x=document.createElement("article");x.innerHTML=`<strong>${y.name}</strong><p>${y.description}<br>งบ ${y.budget.toLocaleString()} cr · รางวัล ${y.reward.toLocaleString()} cr<br>คะแนน ≥ ${y.minScore} · RAM ≥ ${y.minRamGB} GB · SSD รวม ≥ ${y.minStorageGB} GB</p>`,s(c.completedJobs.includes(y.id)?"ส่งสำเร็จแล้ว":"รับงานและเริ่มโต๊ะว่าง",()=>e.acceptJob(y.id),x,c.completedJobs.includes(y.id)||!!c.operation||yt(c)),d.append(x)}if(c.completedJobs.length===fr.length){const y=document.createElement("p");y.textContent="✓ จบครบทั้ง 3 งานแล้ว!",d.prepend(y)}const h=n.querySelector(".job-active");if(h.replaceChildren(),u){const y=document.createElement("h3");y.textContent=u.name,h.append(y);const x=document.createElement("ul");for(const A of pr(c)){const R=document.createElement("li");R.textContent=`${A.passed?"✓":"○"} ${A.label}`,x.append(R)}h.append(x);const v=document.createElement("details");v.innerHTML="<summary>ดูชุดแนะนำที่ทำงานนี้สำเร็จได้</summary>";const E=document.createElement("p");E.textContent=u.referenceParts.map(A=>Pe(A).name).join(" + "),v.append(E),h.append(v)}else if(c.lastDelivery){const y=document.createElement("p");y.textContent=`ส่งสำเร็จ: คะแนน ${c.lastDelivery.score} · ค่าชิ้นส่วนส่งมอบ ${c.lastDelivery.cost} cr · รับรางวัล ${c.lastDelivery.reward} cr · คืนของเหลือ ${c.lastDelivery.returnedParts} ชิ้น`,h.append(y)}const p=n.querySelector(".benchmark-result"),g=c.benchmark&&c.benchmark.fingerprint===fa(c);p.textContent=g?`คะแนนจำลองของเกม ${c.benchmark.score} · ${u?pr(c).every(y=>y.passed)?"ผ่านข้อกำหนดงาน":"ไม่ผ่านข้อกำหนดงาน":"ผ่านการทดสอบเครื่อง"} · ภาระไฟประมาณ ${c.benchmark.estimatedWatts} W · PSU แนะนำ ≥ ${c.benchmark.recommendedPsuWatts} W`:"คะแนนจำลองของเกม · เปิดเครื่องให้สำเร็จก่อนกดทดสอบ";const _=n.querySelector(".job-actions");_.replaceChildren(),s("ทดสอบคะแนนเครื่อง",()=>e.runBenchmark(),_,c.power!=="RUNNING"||!!c.operation),s("ส่งงานและรับรางวัล",()=>e.deliverJob(),_,!gl(c));const m=n.querySelector(".shop-items");m.replaceChildren();for(const[y,x]of mo){const v=document.createElement("h3");v.textContent=x,m.append(v);for(const E of ll.filter(A=>go(A)===y).sort((A,R)=>A.price-R.price))s(`${E.name} — ${E.price.toLocaleString()} cr`,()=>e.buyPart(E.id),m,!u||E.price>c.jobBudget||!!c.operation||yt(c)||c.inventory.length>=ps)}const f=n.querySelector(".return-items");f.replaceChildren();for(const y of c.inventory.filter(x=>x.location==="tray"&&x.purchasedFor===c.activeJobId))s(`วางบนถาด: ${Pe(y.catalogId).name}`,()=>{e.select(y.instanceId),n.hidden=!0,t.setAttribute("aria-expanded","false")},f,!!c.operation),s(`คืน ${Pe(y.catalogId).name} (+${y.paidPrice} cr)`,()=>e.returnPart(y.instanceId),f,!!c.operation||yt(c))}),a=c=>{c.code==="Escape"&&(n.hidden=!0,t.setAttribute("aria-expanded","false"))};return window.addEventListener("keydown",a),{dispose(){o(),window.removeEventListener("keydown",a),t.remove(),n.remove()}}}function E_(i,e){const t=document.createElement("section");t.className="control-dock",t.setAttribute("aria-label","เมนูโต๊ะประกอบ"),i.append(t);const s=[".inventory-panel",".case-panel",".jobs-panel",".wiring-panel",".machine-status"].map(m=>i.querySelector(m)),r=i.querySelector(".workbench-toolbar");r.append(i.querySelector(".jobs-toggle"));const o=s[1],a=document.createElement("div");a.className="case-lid-actions",a.append(...i.querySelectorAll(".side-panel-toggle")),o.append(a);const c=i.querySelector(".case-toggle");c.classList.add("primary-case-toggle");const l=document.createElement("section");l.className="control-dock left-control-dock",l.setAttribute("aria-label","เคสและการต่อสายเปิดเครื่อง"),i.append(l);const u=document.createElement("nav");u.className="gpu-library-controls",u.setAttribute("aria-label","เลือกและจัดการการ์ดจอ"),u.append(i.querySelector(".gpu-catalog-toggle"),i.querySelector(".inventory-toggle")),l.append(c,o,s[3],u,s[0]),t.append(r,s[2],s[4],i.querySelector(".assembly-hud"));const d=m=>{for(const f of s)f!==m&&(f instanceof HTMLDetailsElement?f.open=!1:f.hidden=!0);for(const[f,y]of[[".case-toggle",s[1]],[".jobs-toggle",s[2]]])y!==m&&i.querySelector(f)?.setAttribute("aria-expanded","false");m!==s[0]&&e.getState().inventoryOpen&&e.toggle(!1)},h=m=>{const f=m.target,y=f.closest(".inventory-toggle,.gpu-catalog-toggle")?0:f.closest(".case-toggle")?1:f.closest(".jobs-toggle")?2:-1;if(y>=0)d(s[y]);else for(const x of s)x instanceof HTMLDetailsElement&&f.closest("summary")===x.querySelector("summary")&&d(x)};t.addEventListener("click",h,!0),l.addEventListener("click",h,!0);let p=!1;const g=e.subscribe(m=>{m.inventoryOpen&&!p&&(p=!0,d(s[0])),p=m.inventoryOpen}),_=m=>{if(m.key==="Escape")for(const f of s)f instanceof HTMLDetailsElement&&(f.open=!1)};return window.addEventListener("keydown",_),{dispose(){g(),t.removeEventListener("click",h,!0),l.removeEventListener("click",h,!0),window.removeEventListener("keydown",_),t.remove(),l.remove()}}}const Fa="ctc-pc-builder-save",du=1;function hu(i){return JSON.stringify({schemaVersion:du,data:{activeJobId:i.activeJobId,jobBudget:i.jobBudget,rewardMoney:i.rewardMoney,completedJobs:i.completedJobs,nextPurchaseId:i.nextPurchaseId,nextCableId:i.nextCableId,benchSelection:i.benchSelection,inventory:i.inventory.map(e=>({instanceId:e.instanceId,catalogId:e.catalogId,location:e.location,placement:e.placement?{ownerId:e.placement.ownerId,slotId:e.placement.slotId}:null,...e.purchasedFor?{purchasedFor:e.purchasedFor,paidPrice:e.paidPrice}:{}})),cables:i.cables.map(e=>({id:e.id,from:e.from,to:e.to,kind:e.kind})),caseId:i.caseId,finishId:i.finishId,patternId:i.patternId,sidePanelStyle:i.sidePanelStyle,sidePanelInstalled:i.sidePanelInstalled,backPanelInstalled:i.backPanelInstalled,rearPanelInstalled:i.rearPanelInstalled,tutorial:{step:i.tutorial.step,skipped:i.tutorial.skipped}}})}function w_(i){try{const e=JSON.parse(i);if(e?.schemaVersion!==du)return{kind:"invalid",message:"เซฟเป็นเวอร์ชันที่เกมนี้ไม่รองรับ เก็บเซฟเดิมไว้แล้ว"};const t=e.data,n=u=>{if(!u)throw Error("invalid save")},s=u=>Number.isSafeInteger(u)&&Number(u)>=0;n(t&&s(t.jobBudget)&&s(t.rewardMoney)),n(Array.isArray(t.completedJobs)&&new Set(t.completedJobs).size===t.completedJobs.length&&t.completedJobs.every(u=>!!hi(u))),n(t.activeJobId===null||!!hi(t.activeJobId)),n(!t.completedJobs.includes(t.activeJobId)),n(t.rewardMoney===fr.filter(u=>t.completedJobs.includes(u.id)).reduce((u,d)=>u+d.reward,0)),n(Mr.some(u=>u.id===t.caseId)&&br.some(u=>u.id===t.finishId)&&ua.some(u=>u.id===t.patternId)),n(["solid","glass"].includes(t.sidePanelStyle));for(const u of["sidePanelInstalled","backPanelInstalled","rearPanelInstalled"])n(typeof t[u]=="boolean");n(t.tutorial&&s(t.tutorial.step)&&t.tutorial.step<=Hn.length&&typeof t.tutorial.skipped=="boolean"),n(Array.isArray(t.inventory)&&t.inventory.length<=ps&&Array.isArray(t.cables)&&t.cables.length<=20),n(s(t.nextPurchaseId)&&t.nextPurchaseId>=1&&s(t.nextCableId)&&t.nextCableId>=1);const r=new Set,o=t.inventory.map(u=>(n(u&&typeof u.instanceId=="string"&&/^(part-\d{3}|purchase-\d+)$/.test(u.instanceId)&&!r.has(u.instanceId)),r.add(u.instanceId),n(on.some(d=>d.id===u.catalogId)),n(["tray","installed"].includes(u.location)),n(u.location==="tray"?u.placement===null:u.placement&&typeof u.placement.ownerId=="string"&&typeof u.placement.slotId=="string"),u.instanceId.startsWith("purchase-")&&n(Number(u.instanceId.slice(9))<t.nextPurchaseId),t.activeJobId?n(u.purchasedFor===t.activeJobId&&u.paidPrice===Pe(u.catalogId).price&&u.instanceId.startsWith("purchase-")):n(u.purchasedFor===void 0&&u.paidPrice===void 0),{instanceId:u.instanceId,catalogId:u.catalogId,location:u.location,placement:u.placement?{ownerId:u.placement.ownerId,slotId:u.placement.slotId}:null,...t.activeJobId?{purchasedFor:u.purchasedFor,paidPrice:u.paidPrice}:{}}));n(t.activeJobId?t.jobBudget+o.reduce((u,d)=>u+(d.paidPrice??0),0)===hi(t.activeJobId).budget:t.jobBudget===0);const a={...Vi(),activeJobId:t.activeJobId,jobBudget:t.jobBudget,rewardMoney:t.rewardMoney,completedJobs:[...t.completedJobs],nextPurchaseId:t.nextPurchaseId,nextCableId:t.nextCableId,caseId:t.caseId,finishId:t.finishId,patternId:t.patternId,sidePanelStyle:t.sidePanelStyle,backPanelInstalled:t.backPanelInstalled,rearPanelInstalled:t.rearPanelInstalled,tutorial:{step:t.tutorial.step,skipped:t.tutorial.skipped},inventory:o.map(u=>({...u,location:"tray",placement:null})),cables:[],message:"โหลดเกมแล้ว · เครื่องปิดอยู่ พร้อมประกอบต่อ"},c=["Motherboard","CPU","CPU Cooler","RAM","GPU","SSD","PSU","GPU Support"];for(const u of o.filter(d=>d.placement).sort((d,h)=>c.indexOf(Pe(d.catalogId).type)-c.indexOf(Pe(h.catalogId).type)))n(Jn(a,u.instanceId,`${u.placement.ownerId}/${u.placement.slotId}`)===null),a.inventory=a.inventory.map(d=>d.instanceId===u.instanceId?u:d);const l=new Set;for(const u of t.cables){n(u&&s(u.id)&&u.id>0&&u.id<t.nextCableId&&!l.has(u.id)),l.add(u.id),n(typeof u.from=="string"&&typeof u.to=="string"&&di(a,u.from,u.to)===null);const d=u.from.split("/")[1];n(u.kind===d||u.kind==="fan"&&d==="fan"),a.cables.push({id:u.id,from:u.from,to:u.to,kind:u.kind})}if(a.sidePanelInstalled=t.sidePanelInstalled,t.benchSelection!==void 0){n(t.benchSelection&&typeof t.benchSelection=="object"&&!Array.isArray(t.benchSelection)&&Object.keys(t.benchSelection).length<=8);for(const[u,d]of Object.entries(t.benchSelection))n(typeof d=="string"&&o.some(h=>h.instanceId===d&&Pe(h.catalogId).type===u)),a.benchSelection[u]=d}if(!a.activeJobId&&!a.completedJobs.length){a.inventory=a.inventory.map(u=>u.catalogId==="ram-d5-8"?{...u,catalogId:"ram-d5"}:u),a.inventory=a.inventory.filter(u=>u.location==="installed"||!cl.has(u.catalogId));for(const u of["ram-d5","ram-d4"]){const d=a.inventory.filter(p=>p.catalogId===u).sort((p,g)=>+(g.location==="installed")-+(p.location==="installed")),h=new Set(d.slice(2).map(p=>p.instanceId));a.inventory=a.inventory.filter(p=>!h.has(p.instanceId));for(let p=Math.min(2,d.length);p<2&&a.inventory.length<ps;p++){let g=u==="ram-d4"?18:218;for(;r.has(`part-${String(g).padStart(3,"0")}`);)g++;const _=`part-${String(g).padStart(3,"0")}`;r.add(_),a.inventory.push({instanceId:_,catalogId:u,location:"tray",placement:null})}}for(const u of Vi().inventory.filter(d=>Number(d.instanceId.slice(5))>=100))a.inventory.length<ps&&!a.inventory.some(d=>d.catalogId===u.catalogId)&&!r.has(u.instanceId)&&(a.inventory.push(u),r.add(u.instanceId));for(const[u,d]of Object.entries(a.benchSelection))a.inventory.some(h=>h.instanceId===d)||delete a.benchSelection[u]}return{kind:"valid",state:a}}catch{return{kind:"invalid",message:"ข้อมูลเซฟเสียหรือไม่ครบ เก็บเซฟเดิมไว้แล้ว คุณเลือกเริ่มใหม่ได้"}}}function T_(i,e,t){let n="";return i.subscribe(s=>{const r=hu(s);if(r!==n)try{e.setItem(Fa,r),n=r,t("บันทึกอัตโนมัติแล้ว")}catch{t("บันทึกไม่สำเร็จ: พื้นที่เต็มหรือเบราว์เซอร์ปิดการจัดเก็บข้อมูล อย่าเพิ่งปิดหน้านี้")}})}async function A_(i){let e=null,t="";try{e=localStorage.getItem(Fa)}catch{t="อ่านเซฟไม่ได้ เบราว์เซอร์ไม่อนุญาตการจัดเก็บข้อมูล"}if(e===null&&!t)return Vi();const n=e!==null?w_(e):null;return new Promise(s=>{const r=document.createElement("section");r.className="save-start",r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-label","เล่นต่อหรือเริ่มใหม่");const o=document.createElement("div");r.append(o);const a=document.createElement("h2");a.textContent="CTC · PC Builder",o.append(a);const c=document.createElement("p");c.textContent=t||(n?.kind==="invalid"?n.message:"พบเกมที่บันทึกไว้ เล่นต่อจากงานและชิ้นส่วนเดิมได้ เครื่องจะเริ่มในสถานะปิด"),o.append(c);const l=d=>{r.remove(),s(d)};if(n?.kind==="valid"){const d=document.createElement("button");d.textContent="เล่นต่อ · Continue Game",d.onclick=()=>l(n.state),o.append(d)}const u=document.createElement("button");u.textContent="เริ่มเกมใหม่ · New Game",u.onclick=()=>{window.confirm("เริ่มเกมใหม่และแทนที่เซฟเดิม? เงิน งาน ชิ้นส่วน และ tutorial เดิมจะถูกล้าง")&&l(Vi())},o.append(u),i.append(r),o.querySelector("button")?.focus()})}function R_(i,e){const t=document.createElement("details");t.className="save-panel",t.innerHTML='<summary>เซฟเกม / วิธีเล่น</summary><p class="save-message" role="status"></p><button class="new-game">เริ่มเกมใหม่</button><section class="tutorial"><h3></h3><p></p><button></button><details><summary>ดูคำแนะนำทุกขั้นอีกครั้ง</summary><ol></ol></details></section>',i.querySelector(".control-dock").append(t);const n=document.createElement("button");n.type="button",n.textContent="▶ Tutorial · เริ่มสอนด้วยลูกศร 3D",n.onclick=()=>i.dispatchEvent(new Event("start-tutorial")),t.before(n);const s=u=>{t.querySelector(".save-message").textContent=u,t.querySelector("summary").textContent=u.startsWith("บันทึกไม่สำเร็จ")?"⚠ เซฟไม่สำเร็จ / วิธีเล่น":"เซฟเกม / วิธีเล่น"},r={setItem(u,d){window.localStorage.setItem(u,d)}},o=T_(e,r,s),a=t.querySelector("ol");for(const[u,d]of Hn){const h=document.createElement("li");h.textContent=`${u}: ${d}`,a.append(h)}const c=t.querySelector(".tutorial"),l=e.subscribe(u=>{const d=Hn[u.tutorial.step];c.querySelector("h3").textContent=u.tutorial.skipped?"ข้าม tutorial แล้ว":d?`เป้าหมาย ${u.tutorial.step+1}/${Hn.length}: ${d[0]}`:"✓ เปิดเครื่องครั้งแรกสำเร็จ",c.querySelector("p").textContent=u.tutorial.skipped?"กดแสดงคำแนะนำเพื่อกลับมาดูได้ทุกเมื่อ":d?.[1]??"พร้อมรับงานและประกอบเครื่องลูกค้าแล้ว";const h=c.querySelector("button");h.textContent="เริ่ม / ดูคำแนะนำทีละขั้น",h.onclick=()=>i.dispatchEvent(new Event("start-tutorial"))});return t.open=!e.getState().tutorial.skipped&&e.getState().tutorial.step<Hn.length,t.querySelector(".new-game").onclick=()=>{if(window.confirm("ล้างเซฟและเริ่มเกมใหม่? เงิน งาน ชิ้นส่วน และ tutorial เดิมจะถูกแทนที่"))try{r.setItem(Fa,hu(Vi())),o(),location.reload()}catch{s("บันทึกไม่สำเร็จ: ยังไม่ได้เริ่มใหม่ เซฟเดิมไม่ได้ถูกลบ")}},{dispose(){o(),l(),t.remove(),n.remove()}}}const tn=document.querySelector("#app");async function C_(){const i=await A_(tn),e=Eu(i),t=Iu(tn,e.getState()),n=Pu(tn,e),s=y_(tn,e),r=yu(tn,e),o=S_(tn,e),a=M_(tn,e),c=b_(tn,e),l=E_(tn,e),u=R_(tn,e);try{const d=x_(tn,t.showError,e);t.resetButton.addEventListener("click",d.resetCamera);const h=document.createElement("button");h.type="button",h.textContent="↓ มุมบน",h.style.marginRight="8px",t.resetButton.before(h),h.addEventListener("click",d.topView),window.addEventListener("pagehide",p=>{p.persisted||(u.dispose(),d.dispose(),n.dispose(),s.dispose(),r.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose())})}catch(d){console.error("Could not initialize the workbench:",d),t.showError("เบราว์เซอร์เริ่ม WebGL ไม่ได้ ลองเปิดการเร่งกราฟิก (Hardware acceleration) ในการตั้งค่า หรือเปิดด้วย Chrome / Edge รุ่นใหม่ แล้วกด “ลองใหม่”")}}C_();
