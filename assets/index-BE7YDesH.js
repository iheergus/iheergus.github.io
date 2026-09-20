(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const nn=(i,e,t)=>({id:i,kind:e,position:t,rotation:[0,0,0]}),yr=()=>[nn("cpu","cpu",[-.16,.2,.23]),nn("cooler","cooler",[-.16,.2,.3227]),nn("dimm-a","dimm",[.32,.16,.26]),nn("dimm-b","dimm",[.52,.16,.26]),nn("gpu","pcie-x16",[-.16,-.4,.24]),nn("ssd","m2",[-.14,-.19,.154])],zn=[{id:"mb-ax",name:"ASORA Prime B650",type:"Motherboard",price:4200,mount:"board",color:"#287d72",socket:"AX5",ram:"DDR5",formFactor:"ATX",slots:yr()},{id:"mb-lx",name:"GIGAFORGE B760M",type:"Motherboard",price:3400,mount:"board",color:"#365d9b",socket:"LX170",ram:"DDR4",formFactor:"Micro-ATX",slots:yr()},{id:"mb-wide",name:"MSORA Titan X870",type:"Motherboard",price:9500,mount:"board",color:"#8c4365",socket:"AX5",ram:"DDR5",formFactor:"E-ATX",slots:yr()},{id:"cpu-ax",name:"AMBER Ryzora 5 7600",type:"CPU",price:6200,mount:"cpu",color:"#f1a660",socket:"AX5",cores:6,watts:65},{id:"cpu-lx",name:"INTERRA Coreon i5 13400",type:"CPU",price:6500,mount:"cpu",color:"#6fbbf3",socket:"LX170",cores:10,watts:100},{id:"cool-air",name:"NOCTERRA Air U12",type:"CPU Cooler",price:1500,mount:"cooler",color:"#c99469",sockets:["AX5","LX170"],heightMm:155,coolingWatts:180,watts:5},{id:"ram-d5",name:"CORVEX Vigor D5 16",type:"RAM",price:1600,mount:"dimm",color:"#bea7ed",generation:"DDR5",capacityGB:16,speedMT:5600,watts:5},{id:"ram-d4",name:"KINGFORGE Fury D4 8",type:"RAM",price:800,mount:"dimm",color:"#ec8e99",generation:"DDR4",capacityGB:8,speedMT:3200,watts:4},{id:"gpu-fit",name:"NOVERA GeForceon N4060",type:"GPU",price:10500,mount:"pcie-x16",color:"#88cc8b",lengthMm:240,watts:115,vramGB:8},{id:"gpu-long",name:"AMBER Radeora R7900 XT",type:"GPU",price:25e3,mount:"pcie-x16",color:"#e47465",lengthMm:360,watts:330,vramGB:20},{id:"ssd-1",name:"SAMSORA EVOX 1T",type:"SSD",price:2200,mount:"m2",color:"#77c8d7",interface:"M.2 NVMe",capacityGB:1e3,lengthMm:80,watts:6},{id:"psu-650",name:"SEASONOVA Focus 650",type:"PSU",price:2500,mount:"psu",color:"#c2c9d0",formFactor:"ATX",wattage:650,lengthMm:140},{id:"psu-180",name:"CORVEX Basic 180",type:"PSU",price:650,mount:"psu",color:"#cbaf6d",formFactor:"ATX",wattage:180,lengthMm:140}],iu={id:"support-1",name:"FORMA Lift S1",type:"GPU Support",price:350,mount:"gpu-support",color:"#73949d",optional:!0};zn.push(iu);zn.push({id:"ssd-sata",name:"SAMSORA Solid S500",type:"SSD",price:1200,mount:"sata",color:"#466e93",interface:"SATA",capacityGB:500,lengthMm:100,watts:5});zn.push({id:"gpu-slot",name:"NOVERA Mini N1030",type:"GPU",price:3500,mount:"pcie-x16",color:"#7db6ba",lengthMm:170,watts:30,vramGB:2,requiresPower:!1});function je(i){const e=zn.find(t=>t.id===i);if(!e)throw new Error(`Unknown catalog ID: ${i}`);return e}const rn={name:"FORMA C01",formFactors:["ATX","Micro-ATX"],gpuClearanceMm:320,coolerClearanceMm:165,psuClearanceMm:180,psuFormFactor:"ATX",slots:[nn("board","board",[-.75,1.76,-.5]),nn("psu","psu",[-1.5,.33,.05]),nn("support","gpu-support",[-.18,.765,.28]),nn("sata","sata",[.3,1.65,-.44])],standoffs:[[-1.39,1.06,-.5],[-.14,1.06,-.5],[-1.39,1.77,-.5],[-.14,1.77,-.5],[-1.39,2.45,-.5],[-.14,2.45,-.5]]},Ss=["mb-ax","cpu-ax","cool-air","ram-d5","gpu-fit","ssd-1","psu-650"],dr=[{id:"compact",name:"FORMA Mini C02",size:"Compact",dimensions:[210,400,350],stretch:[.96,1,1],shape:"mesh",forms:["Micro-ATX"],gpu:270,cooler:165},{id:"standard",name:"FORMA C01",size:"Mid Tower",dimensions:[220,450,420],stretch:[1,1,1],shape:"slats",forms:["ATX","Micro-ATX"],gpu:320,cooler:165},{id:"tower",name:"MONORA Air T80",size:"Full Tower",dimensions:[250,540,500],stretch:[1.18,1.18,1.15],shape:"fans",forms:["E-ATX","ATX","Micro-ATX"],gpu:400,cooler:190},{id:"wide",name:"AQUORA Cube W90",size:"Wide Chamber",dimensions:[320,480,510],stretch:[1.17,1.05,1.45],shape:"window",forms:["E-ATX","ATX","Micro-ATX"],gpu:420,cooler:210}],fr=[{id:"ivory",name:"งาช้าง",color:"#c6cec9"},{id:"black",name:"ดำกราไฟต์",color:"#303740"},{id:"red",name:"แดงไวน์",color:"#9d394b"},{id:"blue",name:"น้ำเงิน",color:"#477ca5"},{id:"mint",name:"เขียวมิ้นต์",color:"#79bba2"},{id:"pink",name:"ชมพู",color:"#d894b1"}],Zo=[{id:"plain",name:"เรียบ"},{id:"stripe",name:"แถบคู่"},{id:"circuit",name:"วงจร"},{id:"checker",name:"ตารางแข่ง"}],Qo=i=>dr.find(e=>e.id===i);function Nn(i){const e=Qo(i);return{...rn,slots:rn.slots.map(t=>t.id==="support"?{...t,position:[-.18,.33+.435*e.stretch[1],.28]}:t),name:e.name,formFactors:[...e.forms],gpuClearanceMm:e.gpu,coolerClearanceMm:e.cooler}}function su(i,e){const t=document.createElement("button");t.className="side-panel-toggle",t.onclick=()=>e.toggleSidePanel(),i.append(t);const n=document.createElement("button");n.className="side-panel-toggle back-panel-toggle",n.onclick=()=>e.toggleBackPanel(),i.append(n);const s=document.createElement("button");s.className="side-panel-toggle rear-panel-toggle",s.onclick=()=>e.toggleRearPanel(),i.append(s);const r=document.createElement("button");r.className="case-toggle",r.textContent="▣ เลือกเคส / สี / ลาย",r.setAttribute("aria-expanded","false");const o=document.createElement("aside");o.className="case-panel",o.hidden=!0,o.id="case-panel",r.setAttribute("aria-controls",o.id),o.innerHTML=`<div class="inventory-heading"><h2>เลือกเคส</h2><button type="button" aria-label="ปิดตัวเลือกเคส">✕</button></div><label>รุ่นและขนาด<select name="case">${dr.map(p=>`<option value="${p.id}">${p.name} · ${p.size}</option>`).join("")}</select></label><p class="case-spec"></p><label>สี<select name="finish">${fr.map(p=>`<option value="${p.id}">${p.name}</option>`).join("")}</select></label><label>ลาย<select name="pattern">${Zo.map(p=>`<option value="${p.id}">${p.name}</option>`).join("")}</select></label><p class="case-note" aria-live="polite"></p><p>เปลี่ยนสีและลายได้ทันที · ขนาดเป็นสเปกสมมติในเกม</p>`,i.append(r,o);const a=document.createElement("nav");a.className="workbench-toolbar",a.setAttribute("aria-label","เครื่องมือโต๊ะประกอบ");const c=i.querySelector(".inventory-toggle");c&&a.append(c),a.append(r),i.append(a);const l=document.createElement("label");l.textContent="ฝาข้าง";const h=document.createElement("select");h.innerHTML='<option value="solid">ธรรมดา (ทึบ)</option><option value="glass">กระจกใส</option>',l.append(h),o.append(l),h.onchange=()=>e.setSidePanelStyle(h.value);const u=o.querySelector("[name=case]"),d=o.querySelector("[name=finish]"),f=o.querySelector("[name=pattern]"),m=()=>{o.hidden=!0,r.setAttribute("aria-expanded","false")};r.onclick=()=>{o.hidden=!o.hidden,r.setAttribute("aria-expanded",String(!o.hidden)),o.hidden||e.toggle(!1)},o.querySelector("button").onclick=()=>{m(),r.focus()};for(const p of[u,d,f])p.onchange=()=>e.configureCase(u.value,d.value,f.value);const _=e.subscribe(p=>{h.value=p.sidePanelStyle,h.disabled=!!p.operation,t.textContent=p.sidePanelInstalled?"▣ ถอดฝาข้างเคส":"▣ ใส่ฝาข้างเคส",t.disabled=!!p.operation,t.setAttribute("aria-pressed",String(p.sidePanelInstalled)),n.textContent=p.backPanelInstalled?"▣ ถอดฝาหลังเคส":"▣ ใส่ฝาหลังเคส",n.disabled=!!p.operation,n.setAttribute("aria-pressed",String(p.backPanelInstalled)),s.textContent=p.rearPanelInstalled?"▣ ถอดแผงท้าย (พอร์ต)":"▣ ใส่แผงท้าย (พอร์ต)",s.disabled=!!p.operation,s.setAttribute("aria-pressed",String(p.rearPanelInstalled)),p.inventoryOpen&&m(),u.value=p.caseId,d.value=p.finishId,f.value=p.patternId,u.disabled=!!p.operation||p.inventory.some(x=>x.location==="installed"),d.disabled=f.disabled=!!p.operation;const v=Qo(p.caseId),y=Nn(p.caseId);o.querySelector(".case-spec").textContent=`${v.dimensions.join(" × ")} mm (กว้าง × สูง × ลึก) · ${y.formFactors.join(" / ")} · GPU ≤ ${y.gpuClearanceMm} mm · Cooler ≤ ${y.coolerClearanceMm} mm · PSU ATX ≤ ${y.psuClearanceMm} mm`,o.querySelector(".case-note").textContent=p.operation?"รอชิ้นส่วนเคลื่อนเสร็จก่อน":u.disabled?"ถอดชิ้นส่วนทั้งหมดก่อนเปลี่ยนรุ่นเคส":"เลือกรุ่นเพื่อเปลี่ยนเคสบนโต๊ะ",i.querySelector(".scene-label h2").textContent=v.name}),g=p=>{p.code==="Escape"&&m()};return window.addEventListener("keydown",g),{dispose(){_(),window.removeEventListener("keydown",g),o.remove(),r.remove(),t.remove(),n.remove(),s.remove(),c?.isConnected&&i.append(c),a.remove()}}}function $c(i){return Math.ceil((50+i.reduce((e,t)=>e+("watts"in t?t.watts:0),0))*1.25)}function Jc(i,e,t=rn){const n=[],s=(a,c,l)=>n.push({code:a,severity:"error",blocks:"installation",message:c,action:l,partId:i.id}),r=e.find(a=>a.type==="Motherboard"),o=e.find(a=>a.type==="CPU");return i.type==="Motherboard"&&!t.formFactors.includes(i.formFactor)&&s("BOARD_FORM_FACTOR","ขนาดเมนบอร์ดไม่รองรับโดยเคส",`เลือกเคสที่รองรับ ${i.formFactor}`),i.type==="CPU"&&r&&i.socket!==r.socket&&s("CPU_SOCKET","CPU socket ไม่ตรงกับ motherboard",`ใช้ CPU socket ${r.socket}`),i.type==="RAM"&&r&&i.generation!==r.ram&&s("RAM_GENERATION","RAM generation ไม่ตรงกับ motherboard",`ใช้ RAM ${r.ram}`),i.type==="GPU"&&i.lengthMm>t.gpuClearanceMm&&s("GPU_LENGTH",`GPU ยาวเกิน case clearance ${t.gpuClearanceMm} mm`,"ใช้ GPU สั้นลงหรือเปลี่ยนเคส"),i.type==="PSU"&&(i.formFactor!==t.psuFormFactor||i.lengthMm>t.psuClearanceMm)&&s("PSU_FIT","PSU ไม่พอดีเคส",`ใช้ PSU ${t.psuFormFactor} ยาวไม่เกิน ${t.psuClearanceMm} mm`),i.type==="CPU Cooler"&&(i.heightMm>t.coolerClearanceMm&&s("COOLER_FIT","Cooler สูงเกินเคส",`ใช้ cooler สูงไม่เกิน ${t.coolerClearanceMm} mm`),o&&(!i.sockets.includes(o.socket)||i.coolingWatts<o.watts)&&s("COOLER_FIT","Cooler ไม่รองรับ CPU นี้","เปลี่ยน cooler ให้รองรับ socket และภาระความร้อน CPU")),n}function ea(i,e=rn){const t=i.flatMap(a=>Jc(a,i,e)),n=["Motherboard","CPU","CPU Cooler","RAM","GPU","SSD","PSU"];for(const a of n){const c=i.filter(l=>l.type===a).length;c||t.push({code:"MISSING_PART",severity:"warning",blocks:"test",message:`ขาด ${a}`,action:`ติดตั้ง ${a}`,partType:a}),a!=="RAM"&&a!=="SSD"&&c>1&&t.push({code:"SLOT_CAPACITY",severity:"error",blocks:"installation",message:`${a} เกินจำนวน slot`,action:"ถอดชิ้นส่วนที่เกินออก",partType:a})}const s=i.find(a=>a.type==="Motherboard");s&&i.filter(a=>a.type==="RAM").length>s.slots.filter(a=>a.kind==="dimm").length&&t.push({code:"SLOT_CAPACITY",severity:"error",blocks:"installation",message:"เกินจำนวน slot dimm",action:"ลดจำนวนแรมให้พอดีสล็อต"});const r=$c(i),o=i.find(a=>a.type==="PSU");return o&&o.wattage<r&&t.push({code:"PSU_POWER",severity:"warning",blocks:"test",message:`PSU ไม่พอ: ต้องการอย่างน้อย ${r} W`,action:`เปลี่ยน PSU จาก ${o.wattage} W เป็นอย่างน้อย ${r} W`,partId:o.id}),{issues:t,requiredWatts:r,availableWatts:o?.wattage??0,canTest:t.length===0}}function jc(i){return i==="gpu-long"?{x:.09875,z:-.05}:{x:0,z:0}}const ns={atx24:[.65,.03,.19],eps:[-.5,.6,.19],fan:[-.12,.6,.2],"sata-data":[.58,-.53,.18]};function Ni(i){const e=[];for(const t of i.inventory.filter(n=>n.location==="installed")){const n=je(t.catalogId),s=(r,o,a,c,l)=>e.push({key:`${t.instanceId}/${r}`,ownerId:t.instanceId,name:`${n.name} · ${o}`,kind:a,direction:c,position:l});if(n.type==="PSU")for(const[r,o]of["atx24","eps","pcie","sata-power"].entries())s(o,o,o,"source",[.214,.12+r%2*.1,-.1+Math.floor(r/2)*.16]);if(n.type==="Motherboard"&&(s("atx24","24-pin","atx24","sink",ns.atx24),s("eps","CPU power","eps","sink",ns.eps),i.inventory.some(r=>r.location==="installed"&&je(r.catalogId).mount==="sata")&&s("sata-data","SATA data","sata-data","sink",ns["sata-data"]),s("fan","CPU fan header","fan","sink",ns.fan)),n.type==="GPU"){if(n.requiresPower!==!1){const r=jc(n.id);s("pcie","GPU power 8-pin","pcie","sink",[.884+r.x*4,-.136,.198-r.z*4])}s("display","DisplayPort → จอภาพ","display","source",[-.884,-.244,.47])}n.type==="SSD"&&n.interface==="SATA"&&(s("sata-power","SATA power","sata-power","sink",[.25,-.04,.06]),s("sata-data","SATA data","sata-data","source",[.25,.04,.06])),n.type==="CPU Cooler"&&s("fan","Fan cable 4-pin","fan","source",[-.18,.12,.33])}return e.some(t=>t.kind==="display")&&e.push({key:"monitor/display",ownerId:"monitor",name:"จอบนโต๊ะ · DisplayPort",kind:"display",direction:"sink",position:[2.5,.8,-2.112]}),e}const xt=i=>["CHECKING","BOOTING","RUNNING"].includes(i.power);function ti(i,e,t){if(xt(i))return"ปิด Power ก่อนแก้ไขสาย";if(i.operation)return"รอชิ้นส่วนเคลื่อนเสร็จก่อน";if(i.sidePanelInstalled)return"ถอดฝาข้างก่อนต่อสาย";const n=Ni(i),s=n.find(o=>o.key===e),r=n.find(o=>o.key===t);return!s||!r?"ติดตั้งอุปกรณ์ทั้งสองชิ้นก่อนต่อสาย":s.direction!=="source"||r.direction!=="sink"||s.kind!==r.kind||s.ownerId===r.ownerId?"ชนิดสายหรือต้นทาง–ปลายทางไม่ตรงกัน":i.cables.some(o=>[o.from,o.to].some(a=>a===e||a===t))?"connector นี้มีสายต่ออยู่แล้ว":null}function Fi(i){const e=ea(i.inventory.filter(t=>t.location==="installed").map(t=>je(t.catalogId)),Nn(i.caseId)).issues.map(t=>`${t.message} — ${t.action}`);for(const t of Ni(i).filter(n=>n.direction==="sink"&&n.kind!=="display"))i.cables.some(n=>n.to===t.key)||e.push(`ขาดสาย ${t.name}`);return e}function ni(i){const t=Nn(i.caseId).slots.map(n=>({...n,ownerId:"case",key:`case/${n.id}`}));for(const n of i.inventory){const s=je(n.catalogId);n.location==="installed"&&s.type==="Motherboard"&&t.push(...s.slots.map(r=>({...r,ownerId:n.instanceId,key:`${n.instanceId}/${r.id}`})))}return t}function io(i,e,t){return i.inventory.find(n=>n.placement?.ownerId===e&&n.placement.slotId===t)}function Oi(i,e,t){if(xt(i))return"ปิด Power ก่อนติดตั้งชิ้นส่วน";if(i.sidePanelInstalled)return"ถอดฝาข้างเคสก่อนติดตั้งชิ้นส่วน";const n=Nn(i.caseId);if(i.operation)return"กำลังเคลื่อนชิ้นส่วน กรุณารอ";const s=i.inventory.find(l=>l.instanceId===e);if(!s)return"ไม่พบชิ้นส่วน";if(s.location!=="tray")return"ชิ้นนี้ติดตั้งแล้ว ต้องถอดก่อน";const r=je(s.catalogId);if(r.type==="GPU Support"&&!i.inventory.some(l=>l.location==="installed"&&je(l.catalogId).type==="GPU"))return"ติดตั้ง GPU ก่อนใส่ขาตั้ง";const o=ni(i).find(l=>l.key===t);if(!o)return"ต้องติดตั้ง motherboard ก่อนเลือก slot บนบอร์ด";if(o.kind!==r.mount)return`slot ${o.kind} ไม่รองรับ ${r.type}`;if(io(i,o.ownerId,o.id))return"slot นี้มีชิ้นส่วนติดตั้งอยู่แล้ว";if(r.type==="CPU Cooler"&&!io(i,o.ownerId,"cpu"))return"ติดตั้ง CPU ก่อน cooler";const a=i.inventory.filter(l=>l.location==="installed").map(l=>je(l.catalogId)),c=Jc(r,a,n)[0];return c?`${c.message} · ${c.action}`:null}function Kc(i,e){if(xt(i))return"ปิด Power ก่อนถอดอุปกรณ์";if(i.cables.some(s=>s.from.startsWith(e+"/")||s.to.startsWith(e+"/")))return"ถอดสายที่ต่อกับอุปกรณ์นี้ก่อน";const t=i.inventory.find(s=>s.instanceId===e);if(t&&je(t.catalogId).type==="CPU"&&i.cables.some(s=>s.to===t.placement?.ownerId+"/eps"))return"ถอดสาย CPU power ก่อนถอด CPU";if(i.sidePanelInstalled)return"ถอดฝาข้างเคสก่อนถอดชิ้นส่วน";if(i.operation)return"กำลังเคลื่อนชิ้นส่วน กรุณารอ";const n=i.inventory.find(s=>s.instanceId===e);return!n||n.location!=="installed"?"เลือกชิ้นส่วนที่ติดตั้งแล้วเพื่อถอด":je(n.catalogId).type==="GPU"&&i.inventory.some(s=>s.location==="installed"&&je(s.catalogId).type==="GPU Support")?"ถอดขาตั้งก่อนถอด GPU":i.inventory.some(s=>s.placement?.ownerId===e)?"ถอดชิ้นส่วนลูกทั้งหมดก่อนถอด motherboard":je(n.catalogId).type==="CPU"&&io(i,n.placement.ownerId,"cooler")?"ถอด cooler ก่อน CPU":null}function ru(i,e){return{...i,location:e?"installed":"tray",placement:e}}const nr=[{id:"office",name:"01 · เครื่องสำนักงาน",description:"เครื่องทำงานประจำวันภายในงบ 20,000 cr",budget:2e4,reward:1800,minScore:1500,minRamGB:8,minStorageGB:500,referenceCase:"compact",referenceParts:["mb-lx","cpu-lx","cool-air","ram-d4","gpu-slot","ssd-sata","psu-650"]},{id:"gaming",name:"02 · เครื่องเล่นเกม",description:"ทำคะแนนจำลองอย่างน้อย 2,500 คะแนน",budget:31e3,reward:3200,minScore:2500,minRamGB:16,minStorageGB:1e3,referenceCase:"standard",referenceParts:["mb-ax","cpu-ax","cool-air","ram-d5","gpu-fit","ssd-1","psu-650"]},{id:"editing",name:"03 · เครื่องตัดต่อ",description:"RAM อย่างน้อย 32 GB และพื้นที่เก็บข้อมูลรวม 1,500 GB",budget:33e3,reward:4200,minScore:2500,minRamGB:32,minStorageGB:1500,referenceCase:"standard",referenceParts:["mb-ax","cpu-ax","cool-air","ram-d5","ram-d5","gpu-fit","ssd-1","ssd-sata","psu-650"]}],ii=i=>nr.find(e=>e.id===i);function Zc(i){const e=i.find(a=>a.type==="CPU"),t=i.find(a=>a.type==="GPU"),n=i.filter(a=>a.type==="RAM"),s=n.reduce((a,c)=>a+c.capacityGB,0),r=i.filter(a=>a.type==="SSD").reduce((a,c)=>a+c.capacityGB,0);return{score:(e?.cores??0)*120+(t?.vramGB??0)*180+s*12+Math.floor((n.length?Math.min(...n.map(a=>a.speedMT)):0)/20),ramGB:s,storageGB:r,estimatedWatts:50+i.reduce((a,c)=>a+("watts"in c?c.watts:0),0),recommendedPsuWatts:$c(i)}}function ta(i){return JSON.stringify([i.caseId,i.inventory.filter(e=>e.location==="installed").map(e=>[e.instanceId,e.catalogId,e.placement]).sort((e,t)=>String(e[0]).localeCompare(String(t[0]))),i.cables.map(e=>[e.from,e.to,e.kind]).sort((e,t)=>e.join().localeCompare(t.join()))])}const Qc=i=>i.inventory.filter(e=>e.location==="installed").map(e=>je(e.catalogId));function ir(i){const e=ii(i.activeJobId??"");if(!e)return[];const t=Zc(Qc(i)),n=!!i.benchmark&&i.benchmark.fingerprint===ta(i);return[{id:"budget",label:`ใช้งบ ${e.budget-i.jobBudget} / ${e.budget} cr`,passed:i.jobBudget>=0&&i.jobBudget<=e.budget},{id:"ownership",label:"ชิ้นส่วนในเครื่องซื้อด้วยงบงานนี้",passed:i.inventory.filter(s=>s.location==="installed").every(s=>s.purchasedFor===e.id)},{id:"hardware",label:"อุปกรณ์ สเปก และสายครบ",passed:Fi(i).length===0},{id:"running",label:"เครื่องอยู่ในสถานะ RUNNING",passed:i.power==="RUNNING"},{id:"ram",label:`RAM ${t.ramGB} / ${e.minRamGB} GB`,passed:t.ramGB>=e.minRamGB},{id:"storage",label:`พื้นที่เก็บข้อมูล ${t.storageGB} / ${e.minStorageGB} GB`,passed:t.storageGB>=e.minStorageGB},{id:"benchmark",label:"รัน benchmark ของเครื่องปัจจุบันแล้ว",passed:n},{id:"score",label:`คะแนนจำลอง ${n?i.benchmark.score:"—"} / ${e.minScore}`,passed:n&&i.benchmark.score>=e.minScore}]}function el(i){return!!i.activeJobId&&!i.operation&&!i.completedJobs.includes(i.activeJobId)&&ir(i).every(e=>e.passed)}const Ci=[["ติดตั้งเมนบอร์ด","เลือกเมนบอร์ดบนถาด แล้วคลิกสล็อตสีเขียวในเคส"],["ติดตั้ง CPU","เลือก CPU ที่ socket ตรงกับเมนบอร์ด แล้วใส่ช่อง CPU"],["ติดตั้งชุดระบายความร้อน","เลือก CPU Cooler แล้วติดตั้งบน CPU"],["ติดตั้ง RAM","เลือก RAM ที่ตรงกับเมนบอร์ด แล้วใส่ช่อง DIMM"],["ติดตั้งการ์ดจอ","เลือก GPU แล้วติดตั้งช่อง PCIe"],["ติดตั้ง SSD","ใส่ M.2 บนเมนบอร์ด หรือ SATA SSD ในเคส"],["ติดตั้ง PSU","เลือก PSU ที่กำลังไฟเพียงพอ แล้วติดตั้งด้านล่างเคส"],["ต่อสายและตรวจเครื่อง","เปิดเมนูต่อสาย ต่อสายที่ยังขาด และแก้รายการปัญหาเหนือปุ่มเปิดเครื่อง"],["เปิดเครื่องครั้งแรก","กดเปิดเครื่อง รอจนสถานะเป็น “เปิดแล้ว”"]];function ou(i){let e=i.tutorial.step;const t=["Motherboard","CPU","CPU Cooler","RAM","GPU","SSD","PSU"];for(;e<Ci.length&&(e<7?i.inventory.some(s=>s.location==="installed"&&je(s.catalogId).type===t[e]):e===7?Fi(i).length===0:i.power==="RUNNING");)e++;return{...i.tutorial,step:e}}function ls(){return{activeJobId:null,jobBudget:0,rewardMoney:0,completedJobs:[],nextPurchaseId:1,benchmark:null,lastDelivery:null,cables:[],nextCableId:1,wiringMode:!1,selectedTerminal:null,power:"OFF",powerElapsed:0,powerErrors:[],sidePanelStyle:"solid",rearPanelInstalled:!0,backPanelInstalled:!0,sidePanelInstalled:!1,caseId:"standard",finishId:"ivory",patternId:"plain",phase:"inventory",workstation:"01",selectedInstanceId:null,inventoryOpen:!1,tutorial:{step:0,skipped:!1},operation:null,nextOperationId:1,message:"คลิกชิ้นส่วนบนถาดหรือใน Inventory แล้วคลิก slot สีเขียว",inventory:[...zn.filter(i=>!["support-1","ssd-sata","gpu-slot"].includes(i.id)).map((i,e)=>({instanceId:`part-${String(e+1).padStart(3,"0")}`,catalogId:i.id,location:"tray",placement:null})),{instanceId:"part-014",catalogId:"ram-d5",location:"tray",placement:null},{instanceId:"part-015",catalogId:"support-1",location:"tray",placement:null},{instanceId:"part-016",catalogId:"ssd-sata",location:"tray",placement:null},{instanceId:"part-017",catalogId:"gpu-slot",location:"tray",placement:null}]}}function au(i,e){return i.operation||!i.inventory.some(t=>t.instanceId===e)?i:{...i,selectedInstanceId:e}}function cu(i=ls()){let e=i;const t=new Set,n=()=>{e={...e,tutorial:ou(e)},t.forEach(s=>s(e))};return{getState:()=>e,setTutorial(s){e={...e,tutorial:{...e.tutorial,skipped:s}},n()},acceptJob(s){const r=ii(s);!r||e.activeJobId||e.completedJobs.includes(s)||e.operation||xt(e)||(e={...e,activeJobId:s,jobBudget:r.budget,inventory:[],cables:[],selectedInstanceId:null,selectedTerminal:null,wiringMode:!1,power:"OFF",powerErrors:[],powerElapsed:0,benchmark:null,lastDelivery:null,sidePanelInstalled:!1,caseId:r.referenceCase,message:`รับงาน ${r.name} · ได้งบจัดซื้อ ${r.budget} cr · เลือกซื้อชิ้นส่วน`},n())},buyPart(s){const r=zn.find(a=>a.id===s);if(!r||!e.activeJobId||e.operation||xt(e))return;if(r.price>e.jobBudget){e={...e,message:"งบงานไม่พอ · คืนชิ้นส่วนที่ยังอยู่บนถาดเพื่อรับงบคืน"},n();return}if(e.inventory.length>=18){e={...e,message:"ถาดเต็ม · คืนชิ้นส่วนที่ไม่ใช้ก่อนซื้อเพิ่ม"},n();return}const o={instanceId:`purchase-${e.nextPurchaseId}`,catalogId:s,location:"tray",placement:null,purchasedFor:e.activeJobId,paidPrice:r.price};e={...e,inventory:[...e.inventory,o],jobBudget:e.jobBudget-r.price,nextPurchaseId:e.nextPurchaseId+1,message:`ซื้อ ${r.name} แล้ว`},n()},returnPart(s){const r=e.inventory.find(o=>o.instanceId===s);!e.activeJobId||!r||r.location!=="tray"||r.purchasedFor!==e.activeJobId||r.paidPrice===void 0||e.operation||xt(e)||(e={...e,inventory:e.inventory.filter(o=>o.instanceId!==s),jobBudget:e.jobBudget+r.paidPrice,selectedInstanceId:null,message:"คืนชิ้นส่วนแล้ว · เงินกลับเข้างบงาน"},n())},runBenchmark(){if(e.power!=="RUNNING"||e.operation||Fi(e).length){e={...e,message:"ต้องเปิดเครื่องจนเป็น RUNNING ก่อน benchmark"},n();return}const s={...Zc(Qc(e)),fingerprint:ta(e)};e={...e,benchmark:s,message:`Benchmark จำลอง: ${s.score} คะแนน · ดูผลในงาน / ร้านค้า`},n()},deliverJob(){if(!el(e)){e={...e,message:e.activeJobId?`ยังส่งไม่ได้: ${ir(e).filter(o=>!o.passed).map(o=>o.label).join(" · ")}`:"ไม่มีงานที่พร้อมส่ง"},n();return}const s=ii(e.activeJobId),r=e.inventory.filter(o=>o.location==="installed");e={...e,lastDelivery:{jobId:s.id,reward:s.reward,score:e.benchmark.score,cost:r.reduce((o,a)=>o+(a.paidPrice??0),0),returnedParts:e.inventory.length-r.length},rewardMoney:e.rewardMoney+s.reward,completedJobs:[...e.completedJobs,s.id],activeJobId:null,jobBudget:0,inventory:[],cables:[],selectedInstanceId:null,selectedTerminal:null,wiringMode:!1,power:"OFF",powerElapsed:0,powerErrors:[],benchmark:null,message:`ส่งงานสำเร็จ · รับรางวัล ${s.reward} cr · รับงานถัดไปได้เลย`},n()},toggleWiring(){e.operation||xt(e)||(e={...e,wiringMode:!e.wiringMode,selectedInstanceId:null,selectedTerminal:null},n())},connectCable(s,r){const o=ti(e,s,r);if(o){e={...e,message:o},n();return}const a=Ni(e).find(c=>c.key===r);e={...e,cables:[...e.cables,{id:e.nextCableId,from:s,to:r,kind:a.kind}],nextCableId:e.nextCableId+1,selectedTerminal:null,selectedInstanceId:null,powerErrors:[],message:"ต่อสายสำเร็จ · เก็บสายตามช่องเดินสายแล้ว"},n()},chooseTerminal(s){if(e.operation||xt(e))return;if(e.sidePanelInstalled){e={...e,message:"ถอดฝาข้างก่อนต่อสาย"},n();return}const r=Ni(e).find(o=>o.key===s);if(r){if(e.selectedTerminal){const o=ti(e,e.selectedTerminal,s);o?e={...e,message:o}:e={...e,cables:[...e.cables,{id:e.nextCableId,from:e.selectedTerminal,to:s,kind:r.kind}],nextCableId:e.nextCableId+1,selectedTerminal:null,message:"ต่อสายสำเร็จ"}}else{if(r.direction!=="source"||e.cables.some(o=>o.from===s)){e={...e,message:"เลือก connector ต้นทางที่ว่างก่อน"},n();return}e={...e,wiringMode:!0,selectedInstanceId:null,selectedTerminal:s,message:"เลือก connector ปลายทางที่ไฮไลต์"}}n()}},disconnectCable(s){if(xt(e)||e.operation||e.sidePanelInstalled){e={...e,message:"ปิด Power และเปิดฝาข้างก่อนถอดสาย"},n();return}e={...e,cables:e.cables.filter(r=>r.id!==s),selectedTerminal:null,message:"ถอดสายแล้ว"},n()},powerOff(){e={...e,benchmark:null,power:"OFF",powerElapsed:0,powerErrors:[],message:"ปิดเครื่องแล้ว · แก้ไขอุปกรณ์และสายได้"},n()},pressPower(){e.operation||xt(e)||(e={...e,benchmark:null,power:"CHECKING",powerElapsed:0,powerErrors:[],selectedInstanceId:null,selectedTerminal:null,wiringMode:!1,message:"กำลังตรวจอุปกรณ์และสาย…"},n())},setSidePanelStyle(s){e.operation||!["solid","glass"].includes(s)||(e={...e,sidePanelStyle:s,message:s==="glass"?"เปลี่ยนฝาข้างเป็นกระจกแล้ว":"เปลี่ยนฝาข้างเป็นแบบทึบแล้ว"},n())},toggleRearPanel(){if(e.operation)return;const s=!e.rearPanelInstalled;e={...e,rearPanelInstalled:s,message:s?"ใส่แผงท้ายแล้ว · ช่องโครงยึด GPU ยังเปิดอยู่":"ถอดแผงท้ายไว้บนแท่นแล้ว"},n()},toggleBackPanel(){if(e.operation)return;const s=!e.backPanelInstalled;e={...e,backPanelInstalled:s,message:s?"ใส่ฝาหลังแล้ว":"ถอดฝาหลังไว้บนแท่นแล้ว"},n()},toggleSidePanel(){if(e.operation)return;const s=!e.sidePanelInstalled;e={...e,sidePanelInstalled:s,selectedInstanceId:null,message:s?"ใส่ฝาข้างแล้ว · ถอดฝาก่อนประกอบหรือถอดชิ้นส่วน":"ถอดฝาข้างไว้บนแท่นแล้ว · พร้อมประกอบ"},n()},configureCase(s,r,o){if(!e.operation&&!(!dr.some(a=>a.id===s)||!fr.some(a=>a.id===r)||!Zo.some(a=>a.id===o))){if(s!==e.caseId&&e.inventory.some(a=>a.location==="installed")){e={...e,message:"ถอดชิ้นส่วนกลับถาดให้ครบก่อนเปลี่ยนรุ่นเคส (เปลี่ยนสีและลายได้ทันที)"},n();return}e={...e,caseId:s,finishId:r,patternId:o,selectedInstanceId:null,message:"เปลี่ยนเคส / สี / ลายแล้ว"},n()}},select(s){if(e.operation)return;e={...e,wiringMode:!1,selectedTerminal:null},e=au(e,s);const r=e.inventory.find(o=>o.instanceId===s);if(r){const a=ni(e).filter(c=>c.kind===je(r.catalogId).mount).map(c=>Oi(e,s,c.key));e={...e,message:r.location==="installed"?"เลือกแล้ว: กดถอดกลับถาด หรือ Delete":a.some(c=>c===null)?"คลิก slot สีเขียวเพื่อติดตั้ง · Escape ยกเลิก":a[0]??"ติดตั้ง motherboard ก่อนชิ้นส่วนบนบอร์ด"}}n()},cancel(){e={...e,selectedTerminal:null},e.operation?e={...e,operation:null,selectedInstanceId:null,message:"ยกเลิกการเคลื่อนแล้ว ชิ้นส่วนกลับตำแหน่งเดิม"}:e={...e,selectedInstanceId:null,message:"ยกเลิกการเลือกแล้ว"},n()},install(s){if(e.operation)return;const r=e.selectedInstanceId,o=r?Oi(e,r,s):"เลือกชิ้นส่วนก่อน";if(o){e={...e,message:o},n();return}const a=ni(e).find(c=>c.key===s);e={...e,operation:{id:e.nextOperationId,instanceId:r,from:null,to:{ownerId:a.ownerId,slotId:a.id},elapsed:0,duration:.65},nextOperationId:e.nextOperationId+1,message:"กำลังติดตั้ง… · Escape ยกเลิก"},n()},remove(){if(e.operation)return;const s=e.selectedInstanceId,r=s?Kc(e,s):"เลือกชิ้นส่วนก่อน";if(r){e={...e,message:r},n();return}const o=e.inventory.find(a=>a.instanceId===s);e={...e,operation:{id:e.nextOperationId,instanceId:s,from:o.placement,to:null,elapsed:0,duration:.65},nextOperationId:e.nextOperationId+1,message:"กำลังถอด… · Escape ยกเลิก"},n()},tick(s){if(!Number.isFinite(s)||s<=0)return;if(e.power==="CHECKING"||e.power==="BOOTING"){const a=e.powerElapsed+s;if(a>=1){const c=Fi(e);c.length?e={...e,power:"ERROR",powerElapsed:0,powerErrors:c,message:"เปิดไม่สำเร็จ · ดูสาเหตุใน Power / สาย"}:e.power==="CHECKING"?e={...e,power:"BOOTING",powerElapsed:0,message:"กำลังบูต…"}:e={...e,power:"RUNNING",powerElapsed:0,message:"เปิดเครื่องสำเร็จ"}}else e={...e,powerElapsed:a};n();return}const r=e.operation;if(!r||!Number.isFinite(s)||s<=0)return;const o=Math.min(r.duration,r.elapsed+s);o<r.duration-1e-9?e={...e,operation:{...r,elapsed:o}}:e={...e,inventory:e.inventory.map(a=>a.instanceId===r.instanceId?ru(a,r.to):a),operation:null,selectedInstanceId:null,message:r.to?"ติดตั้งสำเร็จ":"ถอดกลับถาดแล้ว"},n()},toggle(s=!e.inventoryOpen){e={...e,inventoryOpen:s},n()},subscribe(s){return t.add(s),s(e),()=>t.delete(s)}}}function tl(i){const e=i.inventory.find(t=>t.instanceId===i.selectedInstanceId);return e?{instance:e,part:je(e.catalogId)}:null}function lu(i){switch(i.type){case"GPU Support":return{การใช้งาน:"รองรับน้ำหนักการ์ดจอ",จำเป็นหรือไม่:"อุปกรณ์เสริม ไม่บังคับ",ตำแหน่ง:"บนฝาครอบ PSU · ปรับความสูงตามเคส"};case"Motherboard":return{"ซ็อกเก็ต CPU":i.socket,"ชนิด RAM":i.ram,ขนาดบอร์ด:i.formFactor,"ช่อง RAM":`${i.slots.filter(e=>e.kind==="dimm").length} ช่อง`,ช่องการ์ดจอ:"PCIe x16","ช่อง SSD":"M.2 NVMe"};case"CPU":return{ซ็อกเก็ต:i.socket,จำนวนคอร์:`${i.cores} คอร์`,กำลังไฟ:`${i.watts} W`};case"CPU Cooler":return{ซ็อกเก็ตที่รองรับ:i.sockets.join(" / "),ความสูง:`${i.heightMm} mm`,รองรับความร้อน:`${i.coolingWatts} W`,กำลังไฟพัดลม:`${i.watts} W`,สายที่ต้องต่อ:"CPU fan → เมนบอร์ด"};case"RAM":return{ชนิดหน่วยความจำ:i.generation,ความจุต่อแผง:`${i.capacityGB} GB`,ความเร็ว:`${i.speedMT.toLocaleString()} MT/s`,กำลังไฟ:`${i.watts} W`};case"GPU":return{หน่วยความจำภาพ:`${i.vramGB} GB`,ความยาว:`${i.lengthMm} mm`,กำลังไฟ:`${i.watts} W`,ไฟเลี้ยง:i.requiresPower===!1?"รับไฟจากสล็อต ไม่ต้องต่อสาย PSU":"ต้องต่อสาย PSU → GPU",สายภาพ:"DisplayPort → จอภาพ"};case"SSD":return{การเชื่อมต่อ:i.interface,ความจุ:`${i.capacityGB.toLocaleString()} GB`,ความยาว:`${i.lengthMm} mm`,กำลังไฟ:`${i.watts} W`,สายที่ต้องต่อ:i.interface==="SATA"?"SATA power + SATA data":"เสียบ M.2 บนเมนบอร์ด ไม่ใช้สาย SATA"};case"PSU":return{กำลังจ่ายสูงสุด:`${i.wattage} W`,ขนาดมาตรฐาน:i.formFactor,ความยาว:`${i.lengthMm} mm`}}}function nl(i){return`<p class="part-price">ราคา ${i.price.toLocaleString()} เครดิต</p><dl>${Object.entries(lu(i)).map(([e,t])=>`<dt>${e}</dt><dd>${t}</dd>`).join("")}</dl><small>สเปกและราคาเป็นข้อมูลจำลองของเกม</small>`}function Pa(i,e=rn){return ea(i,e).issues.map(t=>t.message)}function uu(i,e){const t=document.createElement("button");t.className="inventory-toggle",t.textContent=`▦ Inventory · ${e.getState().inventory.length}  [I]`,t.setAttribute("aria-controls","inventory-panel"),i.append(t);const n=document.createElement("aside");n.id="inventory-panel",n.className="inventory-panel",n.setAttribute("aria-label","คลังชิ้นส่วน"),n.hidden=!0,n.innerHTML='<div class="inventory-heading"><h2>คลังชิ้นส่วน</h2><button type="button" class="close-inventory" aria-label="ปิดคลัง">✕</button></div><p class="inventory-note">ชิ้นส่วนสมมติ · ราคาเป็นเครดิตในเกม<br>คลิกเพื่อดูสเปกและไฮไลต์บนถาด</p><div class="inventory-list"></div><section class="part-details" aria-live="polite"></section><details><summary>ชุดอ้างอิงและขนาดเคส</summary><div class="build-reference"></div></details>',i.append(n);const s=n.querySelector(".inventory-list"),r=n.querySelector(".part-details"),o=new Map;function a(){for(const[d,f]of o)e.getState().inventory.some(m=>m.instanceId===d)||(f.remove(),o.delete(d));for(const d of e.getState().inventory){if(o.has(d.instanceId))continue;const f=je(d.catalogId),m=document.createElement("button");m.type="button",m.dataset.instanceId=d.instanceId,m.innerHTML=`<span class="part-type">${f.type} · ${d.instanceId}</span><strong>${f.name}</strong><span>${f.price.toLocaleString()} cr</span>`,m.style.borderLeftColor=f.color,m.onclick=()=>e.select(d.instanceId),s.append(m),o.set(d.instanceId,m)}}a();const c=Pa(Ss.map(je)).length===0;n.querySelector(".build-reference").textContent=`${rn.name}: ${rn.formFactors.join(" / ")} · GPU ≤ ${rn.gpuClearanceMm} mm · Cooler ≤ ${rn.coolerClearanceMm} mm · PSU ≤ ${rn.psuClearanceMm} mm. ชุดอ้างอิง ${c?"สเปกเข้ากันได้":"ต้องตรวจสอบ"}: ${Ss.map(d=>je(d).name).join(" + ")}. ติดตั้ง motherboard → CPU → cooler; ถอดย้อนลำดับ`,t.onclick=()=>e.toggle(),n.querySelector(".close-inventory").onclick=()=>{e.toggle(!1),t.focus()};let l="";const h=e.subscribe(d=>{const f=JSON.stringify([d.caseId,d.inventoryOpen,d.selectedInstanceId,d.operation?.id,d.inventory.map(v=>[v.instanceId,v.location])]);if(f===l)return;l=f,a();const m=Nn(d.caseId);n.querySelector(".build-reference").textContent=`${m.name}: ${m.formFactors.join(" / ")} · GPU ≤ ${m.gpuClearanceMm} mm · Cooler ≤ ${m.coolerClearanceMm} mm. ชุดอ้างอิง: ${Pa(Ss.map(je),m).length?"ไม่รองรับกับเคสที่เลือก":"เข้ากันได้"} — ${Ss.map(v=>je(v).name).join(" + ")}`,n.hidden=!d.inventoryOpen,t.setAttribute("aria-expanded",String(d.inventoryOpen)),t.textContent=`▦ ชิ้นส่วนบนถาด ${d.inventory.filter(v=>v.location==="tray").length} ชิ้น [I]`;for(const[v,y]of o){y.setAttribute("aria-pressed",String(v===d.selectedInstanceId)),y.disabled=!!d.operation;const x=d.inventory.find(w=>w.instanceId===v);y.querySelector(".part-type").textContent=`${je(x.catalogId).type} · ${v} · ${x.location==="tray"?"บนถาด":"ติดตั้งแล้ว"}`}const _=tl(d);if(!_){r.textContent="เลือกชิ้นส่วนจากรายการเพื่อดูรายละเอียด";return}const{part:g,instance:p}=_;r.innerHTML=`<h3>${g.name}</h3><p>${g.type} · ${p.location==="tray"?"บนถาด":"ติดตั้งแล้ว"}</p>${nl(g)}`}),u=d=>{d.ctrlKey||d.altKey||d.metaKey||d.repeat||(d.code==="KeyI"&&e.toggle(),d.code==="Escape"&&(e.cancel(),e.getState().inventoryOpen&&(e.toggle(!1),t.focus())),d.code==="Delete"&&e.remove())};return window.addEventListener("keydown",u),{dispose(){h(),window.removeEventListener("keydown",u),n.remove(),t.remove()}}}const Mn={caseName:"FORMA / C01",camera:{position:[4.8,4.4,8.5],target:[.65,1.15,0],minDistance:3.6,maxDistance:12},pixelRatioLimit:1.75};function hu(i,e){return i.innerHTML=`<header class="brand"><img class="brand-logo" src="./ctc-logo.png" alt="โลโก้วิทยาลัยเทคโนโลยีชลบุรี" width="64" height="64"><div><h1>CTC <span>PC BUILDER</span></h1><p>พื้นที่เล็ก ๆ สำหรับเครื่องที่คุณจะสร้าง</p></div></header>
    <aside class="station"><span class="dot"></span> WORKBENCH ${e.workstation}</aside>
    <footer><div class="scene-label"><span class="eyebrow">CHASSIS STUDY / 001</span><h2>${Mn.caseName}</h2><p>เคสเปิดข้าง · สำรวจพื้นที่ประกอบ</p></div>
    <div class="controls"><p><span>ลากเมาส์ซ้าย</span> หมุนมุมมอง <i></i><span>เลื่อนล้อเมาส์</span> ซูม <i></i><span>Q / E</span> เลื่อนซ้าย / ขวา</p><button id="reset-camera" type="button">↺ &nbsp; Reset Camera <kbd>R</kbd></button></div></footer>
    <section class="error" role="alert" hidden><span class="eyebrow">DISPLAY UNAVAILABLE</span><h2>เปิดฉาก 3D ไม่สำเร็จ</h2><p id="error-message"></p><button id="reload" type="button">ลองใหม่</button></section>`,i.querySelector("#reload").addEventListener("click",()=>location.reload()),{resetButton:i.querySelector("#reset-camera"),showError(t){i.querySelector(".error").hidden=!1,i.querySelector("#error-message").textContent=t,i.querySelector("#reset-camera").disabled=!0}}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const na="180",Di={ROTATE:0,DOLLY:1,PAN:2},Ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},du=0,Ia=1,fu=2,il=1,sl=2,yn=3,Fn=0,Ft=1,on=2,Ln=0,Li=1,Da=2,La=3,Ua=4,pu=5,jn=100,mu=101,gu=102,_u=103,vu=104,xu=200,yu=201,Mu=202,Su=203,so=204,ro=205,Eu=206,bu=207,Tu=208,wu=209,Au=210,Cu=211,Ru=212,Pu=213,Iu=214,oo=0,ao=1,co=2,Bi=3,lo=4,uo=5,ho=6,fo=7,rl=0,Du=1,Lu=2,Un=0,Uu=1,Nu=2,Fu=3,ol=4,Ou=5,Bu=6,zu=7,al=300,zi=301,ki=302,po=303,mo=304,pr=306,sr=1e3,Zn=1001,go=1002,Ht=1003,ku=1004,Es=1005,an=1006,Mr=1007,Qn=1008,hn=1009,cl=1010,ll=1011,us=1012,ia=1013,si=1014,cn=1015,xs=1016,sa=1017,ra=1018,hs=1020,ul=35902,hl=35899,dl=1021,fl=1022,Zt=1023,ds=1026,fs=1027,oa=1028,aa=1029,pl=1030,ca=1031,la=1033,Ks=33776,Zs=33777,Qs=33778,er=33779,_o=35840,vo=35841,xo=35842,yo=35843,Mo=36196,So=37492,Eo=37496,bo=37808,To=37809,wo=37810,Ao=37811,Co=37812,Ro=37813,Po=37814,Io=37815,Do=37816,Lo=37817,Uo=37818,No=37819,Fo=37820,Oo=37821,Bo=36492,zo=36494,ko=36495,Go=36283,Ho=36284,Vo=36285,Wo=36286,Gu=3200,Hu=3201,ml=0,Vu=1,Dn="",Nt="srgb",Gi="srgb-linear",rr="linear",rt="srgb",di=7680,Na=519,Wu=512,Xu=513,qu=514,gl=515,Yu=516,$u=517,Ju=518,ju=519,Fa=35044,Oa="300 es",ln=2e3,or=2001;class ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ba=1234567;const rs=Math.PI/180,ps=180/Math.PI;function ci(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function ua(i,e){return(i%e+e)%e}function Ku(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Zu(i,e,t){return i!==e?(t-i)/(e-i):0}function os(i,e,t){return(1-t)*i+t*e}function Qu(i,e,t,n){return os(i,e,1-Math.exp(-t*n))}function eh(i,e=1){return e-Math.abs(ua(i,e*2)-e)}function th(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function nh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ih(i,e){return i+Math.floor(Math.random()*(e-i+1))}function sh(i,e){return i+Math.random()*(e-i)}function rh(i){return i*(.5-Math.random())}function oh(i){i!==void 0&&(Ba=i);let e=Ba+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ah(i){return i*rs}function ch(i){return i*ps}function lh(i){return(i&i-1)===0&&i!==0}function uh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dh(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Xo={DEG2RAD:rs,RAD2DEG:ps,generateUUID:ci,clamp:We,euclideanModulo:ua,mapLinear:Ku,inverseLerp:Zu,lerp:os,damp:Qu,pingpong:eh,smoothstep:th,smootherstep:nh,randInt:ih,randFloat:sh,randFloatSpread:rh,seededRandom:oh,degToRad:ah,radToDeg:ch,isPowerOfTwo:lh,ceilPowerOfTwo:uh,floorPowerOfTwo:hh,setQuaternionFromProperEuler:dh,normalize:Rt,denormalize:Ai};class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==m){let g=1-a;const p=c*d+l*f+h*m+u*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const w=Math.sqrt(y),T=Math.atan2(w,p*v);g=Math.sin(g*T)/w,a=Math.sin(a*T)/w}const x=a*v;if(c=c*g+d*x,l=l*g+f*x,h=h*g+m*x,u=u*g+_*x,g===1-a){const w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-a*f,e[t+2]=l*m+h*f+a*d-c*u,e[t+3]=h*m-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(za.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(za.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sr.copy(this).projectOnVector(e),this.sub(Sr)}reflect(e){return this.sub(Sr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sr=new R,za=new dn;class He{constructor(e,t,n,s,r,o,a,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],v=s[1],y=s[4],x=s[7],w=s[2],T=s[5],C=s[8];return r[0]=o*_+a*v+c*w,r[3]=o*g+a*y+c*T,r[6]=o*p+a*x+c*C,r[1]=l*_+h*v+u*w,r[4]=l*g+h*y+u*T,r[7]=l*p+h*x+u*C,r[2]=d*_+f*v+m*w,r[5]=d*g+f*y+m*T,r[8]=d*p+f*x+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Er.makeScale(e,t)),this}rotate(e){return this.premultiply(Er.makeRotation(-e)),this}translate(e,t){return this.premultiply(Er.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Er=new He;function _l(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fh(){const i=ar("canvas");return i.style.display="block",i}const ka={};function ms(i){i in ka||(ka[i]=!0,console.warn(i))}function ph(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Ga=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ha=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mh(){const i={enabled:!0,workingColorSpace:Gi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===rt&&(s.r=En(s.r),s.g=En(s.g),s.b=En(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Dn?rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ms("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ms("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gi]:{primaries:e,whitePoint:n,transfer:rr,toXYZ:Ga,fromXYZ:Ha,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:Ga,fromXYZ:Ha,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}const Qe=mh();function En(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let fi;class gh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fi===void 0&&(fi=ar("canvas")),fi.width=e.width,fi.height=e.height;const s=fi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=fi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ar("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=En(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(En(t[n]/255)*255):t[n]=En(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _h=0;class ha{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(br(s[o].image)):r.push(br(s[o]))}else r=br(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function br(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vh=0;const Tr=new R;class wt extends ai{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Zn,s=Zn,r=an,o=Qn,a=Zt,c=hn,l=wt.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=ci(),this.name="",this.source=new ha(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Tr).x}get height(){return this.source.getSize(Tr).y}get depth(){return this.source.getSize(Tr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sr:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sr:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=al;wt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,x=(f+1)/2,w=(p+1)/2,T=(h+d)/4,C=(u+_)/4,P=(m+g)/4;return y>x&&y>w?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=C/n):x>w?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=P/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=C/r,s=P/r),this.set(n,s,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xh extends ai{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new wt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ha(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends xh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class vl extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yh extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class li{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yt):Yt.fromBufferAttribute(r,o),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bs.copy(n.boundingBox)),bs.applyMatrix4(e.matrixWorld),this.union(bs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($i),Ts.subVectors(this.max,$i),pi.subVectors(e.a,$i),mi.subVectors(e.b,$i),gi.subVectors(e.c,$i),Tn.subVectors(mi,pi),wn.subVectors(gi,mi),Hn.subVectors(pi,gi);let t=[0,-Tn.z,Tn.y,0,-wn.z,wn.y,0,-Hn.z,Hn.y,Tn.z,0,-Tn.x,wn.z,0,-wn.x,Hn.z,0,-Hn.x,-Tn.y,Tn.x,0,-wn.y,wn.x,0,-Hn.y,Hn.x,0];return!wr(t,pi,mi,gi,Ts)||(t=[1,0,0,0,1,0,0,0,1],!wr(t,pi,mi,gi,Ts))?!1:(ws.crossVectors(Tn,wn),t=[ws.x,ws.y,ws.z],wr(t,pi,mi,gi,Ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mn=[new R,new R,new R,new R,new R,new R,new R,new R],Yt=new R,bs=new li,pi=new R,mi=new R,gi=new R,Tn=new R,wn=new R,Hn=new R,$i=new R,Ts=new R,ws=new R,Vn=new R;function wr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Vn.fromArray(i,r);const a=s.x*Math.abs(Vn.x)+s.y*Math.abs(Vn.y)+s.z*Math.abs(Vn.z),c=e.dot(Vn),l=t.dot(Vn),h=n.dot(Vn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Mh=new li,Ji=new R,Ar=new R;class Wi{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Mh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ji.subVectors(e,this.center);const t=Ji.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ji,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ji.copy(e.center).add(Ar)),this.expandByPoint(Ji.copy(e.center).sub(Ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const gn=new R,Cr=new R,As=new R,An=new R,Rr=new R,Cs=new R,Pr=new R;class mr{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Cr.copy(e).add(t).multiplyScalar(.5),As.copy(t).sub(e).normalize(),An.copy(this.origin).sub(Cr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(As),a=An.dot(this.direction),c=-An.dot(As),l=An.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Cr).addScaledVector(As,d),f}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const n=gn.dot(this.direction),s=gn.dot(gn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,n,s,r){Rr.subVectors(t,e),Cs.subVectors(n,e),Pr.crossVectors(Rr,Cs);let o=this.direction.dot(Pr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;An.subVectors(this.origin,e);const c=a*this.direction.dot(Cs.crossVectors(An,Cs));if(c<0)return null;const l=a*this.direction.dot(Rr.cross(An));if(l<0||c+l>o)return null;const h=-a*An.dot(Pr);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,m,_,g){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,m,_,g)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/_i.setFromMatrixColumn(e,0).length(),r=1/_i.setFromMatrixColumn(e,1).length(),o=1/_i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,m=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,m=l*h,_=l*u;t[0]=d+_*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,m=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,m=a*h,_=a*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sh,e,Eh)}lookAt(e,t,n){const s=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Cn.crossVectors(n,zt),Cn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Cn.crossVectors(n,zt)),Cn.normalize(),Rs.crossVectors(zt,Cn),s[0]=Cn.x,s[4]=Rs.x,s[8]=zt.x,s[1]=Cn.y,s[5]=Rs.y,s[9]=zt.y,s[2]=Cn.z,s[6]=Rs.z,s[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],v=n[3],y=n[7],x=n[11],w=n[15],T=s[0],C=s[4],P=s[8],E=s[12],S=s[1],I=s[5],B=s[9],G=s[13],J=s[2],X=s[6],Y=s[10],ne=s[14],V=s[3],fe=s[7],_e=s[11],Se=s[15];return r[0]=o*T+a*S+c*J+l*V,r[4]=o*C+a*I+c*X+l*fe,r[8]=o*P+a*B+c*Y+l*_e,r[12]=o*E+a*G+c*ne+l*Se,r[1]=h*T+u*S+d*J+f*V,r[5]=h*C+u*I+d*X+f*fe,r[9]=h*P+u*B+d*Y+f*_e,r[13]=h*E+u*G+d*ne+f*Se,r[2]=m*T+_*S+g*J+p*V,r[6]=m*C+_*I+g*X+p*fe,r[10]=m*P+_*B+g*Y+p*_e,r[14]=m*E+_*G+g*ne+p*Se,r[3]=v*T+y*S+x*J+w*V,r[7]=v*C+y*I+x*X+w*fe,r[11]=v*P+y*B+x*Y+w*_e,r[15]=v*E+y*G+x*ne+w*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+g*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],v=u*g*l-_*d*l+_*c*f-a*g*f-u*c*p+a*d*p,y=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,x=h*_*l-m*u*l+m*a*f-o*_*f-h*a*p+o*u*p,w=m*u*c-h*_*c-m*a*d+o*_*d+h*a*g-o*u*g,T=t*v+n*y+s*x+r*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=v*C,e[1]=(_*d*r-u*g*r-_*s*f+n*g*f+u*s*p-n*d*p)*C,e[2]=(a*g*r-_*c*r+_*s*l-n*g*l-a*s*p+n*c*p)*C,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*C,e[4]=y*C,e[5]=(h*g*r-m*d*r+m*s*f-t*g*f-h*s*p+t*d*p)*C,e[6]=(m*c*r-o*g*r-m*s*l+t*g*l+o*s*p-t*c*p)*C,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*C,e[8]=x*C,e[9]=(m*u*r-h*_*r-m*n*f+t*_*f+h*n*p-t*u*p)*C,e[10]=(o*_*r-m*a*r+m*n*l-t*_*l-o*n*p+t*a*p)*C,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*C,e[12]=w*C,e[13]=(h*_*s-m*u*s+m*n*d-t*_*d-h*n*g+t*u*g)*C,e[14]=(m*a*s-o*_*s-m*n*c+t*_*c+o*n*g-t*a*g)*C,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,_=o*h,g=o*u,p=a*u,v=c*l,y=c*h,x=c*u,w=n.x,T=n.y,C=n.z;return s[0]=(1-(_+p))*w,s[1]=(f+x)*w,s[2]=(m-y)*w,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(d+p))*T,s[6]=(g+v)*T,s[7]=0,s[8]=(m+y)*C,s[9]=(g-v)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=_i.set(s[0],s[1],s[2]).length();const o=_i.set(s[4],s[5],s[6]).length(),a=_i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],$t.copy(this);const l=1/r,h=1/o,u=1/a;return $t.elements[0]*=l,$t.elements[1]*=l,$t.elements[2]*=l,$t.elements[4]*=h,$t.elements[5]*=h,$t.elements[6]*=h,$t.elements[8]*=u,$t.elements[9]*=u,$t.elements[10]*=u,t.setFromRotationMatrix($t),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ln,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let m,_;if(c)m=r/(o-r),_=o*r/(o-r);else if(a===ln)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===or)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ln,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let m,_;if(c)m=1/(o-r),_=o/(o-r);else if(a===ln)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===or)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _i=new R,$t=new et,Sh=new R(0,0,0),Eh=new R(1,1,1),Cn=new R,Rs=new R,zt=new R,Va=new et,Wa=new dn;class qt{constructor(e=0,t=0,n=0,s=qt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Va.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Va,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wa.setFromEuler(this),this.setFromQuaternion(Wa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qt.DEFAULT_ORDER="XYZ";class da{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bh=0;const Xa=new R,vi=new dn,_n=new et,Ps=new R,ji=new R,Th=new R,wh=new dn,qa=new R(1,0,0),Ya=new R(0,1,0),$a=new R(0,0,1),Ja={type:"added"},Ah={type:"removed"},xi={type:"childadded",child:null},Ir={type:"childremoved",child:null};class Et extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new R,t=new qt,n=new dn,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new He}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(qa,e)}rotateY(e){return this.rotateOnAxis(Ya,e)}rotateZ(e){return this.rotateOnAxis($a,e)}translateOnAxis(e,t){return Xa.copy(e).applyQuaternion(this.quaternion),this.position.add(Xa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qa,e)}translateY(e){return this.translateOnAxis(Ya,e)}translateZ(e){return this.translateOnAxis($a,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ps.copy(e):Ps.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(ji,Ps,this.up):_n.lookAt(Ps,ji,this.up),this.quaternion.setFromRotationMatrix(_n),s&&(_n.extractRotation(s.matrixWorld),vi.setFromRotationMatrix(_n),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ja),xi.child=e,this.dispatchEvent(xi),xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ah),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ja),xi.child=e,this.dispatchEvent(xi),xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,Th),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,wh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Et.DEFAULT_UP=new R(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new R,vn=new R,Dr=new R,xn=new R,yi=new R,Mi=new R,ja=new R,Lr=new R,Ur=new R,Nr=new R,Fr=new at,Or=new at,Br=new at;class Kt{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Jt.subVectors(e,t),s.cross(Jt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Jt.subVectors(s,t),vn.subVectors(n,t),Dr.subVectors(e,t);const o=Jt.dot(Jt),a=Jt.dot(vn),c=Jt.dot(Dr),l=vn.dot(vn),h=vn.dot(Dr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xn.x),c.addScaledVector(o,xn.y),c.addScaledVector(a,xn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Fr.setScalar(0),Or.setScalar(0),Br.setScalar(0),Fr.fromBufferAttribute(e,t),Or.fromBufferAttribute(e,n),Br.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Fr,r.x),o.addScaledVector(Or,r.y),o.addScaledVector(Br,r.z),o}static isFrontFacing(e,t,n,s){return Jt.subVectors(n,t),vn.subVectors(e,t),Jt.cross(vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Jt.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Kt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;yi.subVectors(s,n),Mi.subVectors(r,n),Lr.subVectors(e,n);const c=yi.dot(Lr),l=Mi.dot(Lr);if(c<=0&&l<=0)return t.copy(n);Ur.subVectors(e,s);const h=yi.dot(Ur),u=Mi.dot(Ur);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(yi,o);Nr.subVectors(e,r);const f=yi.dot(Nr),m=Mi.dot(Nr);if(m>=0&&f<=m)return t.copy(r);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(Mi,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return ja.subVectors(r,s),a=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(ja,a);const p=1/(g+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(yi,o).addScaledVector(Mi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Is={h:0,s:0,l:0};function zr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=ua(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=zr(o,r,e+1/3),this.g=zr(o,r,e),this.b=zr(o,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=xl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=En(e.r),this.g=En(e.g),this.b=En(e.b),this}copyLinearToSRGB(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Qe.workingToColorSpace(Tt.copy(this),e),Math.round(We(Tt.r*255,0,255))*65536+Math.round(We(Tt.g*255,0,255))*256+Math.round(We(Tt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Tt.copy(this),t);const n=Tt.r,s=Tt.g,r=Tt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Nt){Qe.workingToColorSpace(Tt.copy(this),e);const t=Tt.r,n=Tt.g,s=Tt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(Is);const n=os(Rn.h,Is.h,t),s=os(Rn.s,Is.s,t),r=os(Rn.l,Is.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Je;Je.NAMES=xl;let Ch=0;class Xi extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=Li,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=so,this.blendDst=ro,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Na,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==so&&(n.blendSrc=this.blendSrc),this.blendDst!==ro&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Na&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class On extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.combine=rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new R,Ds=new le;let Rh=0;class en{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fa,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ds.fromBufferAttribute(this,t),Ds.applyMatrix3(e),this.setXY(t,Ds.x,Ds.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fa&&(e.usage=this.usage),e}}class yl extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ml extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class it extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ph=0;const Xt=new et,kr=new Et,Si=new R,kt=new li,Ki=new li,St=new R;class At extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_l(e)?Ml:yl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return kr.lookAt(e),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new it(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ki.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(kt.min,Ki.min),kt.expandByPoint(St),St.addVectors(kt.max,Ki.max),kt.expandByPoint(St)):(kt.expandByPoint(Ki.min),kt.expandByPoint(Ki.max))}kt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)St.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(St));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)St.fromBufferAttribute(a,l),c&&(Si.fromBufferAttribute(e,l),St.add(Si)),s=Math.max(s,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new R,c[P]=new R;const l=new R,h=new R,u=new R,d=new le,f=new le,m=new le,_=new R,g=new R;function p(P,E,S){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,S),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(I),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(I),a[P].add(_),a[E].add(_),a[S].add(_),c[P].add(g),c[E].add(g),c[S].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,E=v.length;P<E;++P){const S=v[P],I=S.start,B=S.count;for(let G=I,J=I+B;G<J;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const y=new R,x=new R,w=new R,T=new R;function C(P){w.fromBufferAttribute(s,P),T.copy(w);const E=a[P];y.copy(E),y.sub(w.multiplyScalar(w.dot(E))).normalize(),x.crossVectors(T,E);const I=x.dot(c[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,I)}for(let P=0,E=v.length;P<E;++P){const S=v[P],I=S.start,B=S.count;for(let G=I,J=I+B;G<J;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new en(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ka=new et,Wn=new mr,Ls=new Wi,Za=new R,Us=new R,Ns=new R,Fs=new R,Gr=new R,Os=new R,Qa=new R,Bs=new R;class Pe extends Et{constructor(e=new At,t=new On){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Os.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Gr.fromBufferAttribute(u,e),o?Os.addScaledVector(Gr,h):Os.addScaledVector(Gr.sub(t),h))}t.add(Os)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(r),Wn.copy(e.ray).recast(e.near),!(Ls.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Ls,Za)===null||Wn.origin.distanceToSquared(Za)>(e.far-e.near)**2))&&(Ka.copy(r).invert(),Wn.copy(e.ray).applyMatrix4(Ka),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,w=y;x<w;x+=3){const T=a.getX(x),C=a.getX(x+1),P=a.getX(x+2);s=zs(this,p,e,n,l,h,u,T,C,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);s=zs(this,o,e,n,l,h,u,v,y,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,w=y;x<w;x+=3){const T=x,C=x+1,P=x+2;s=zs(this,p,e,n,l,h,u,T,C,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=g,y=g+1,x=g+2;s=zs(this,o,e,n,l,h,u,v,y,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Ih(i,e,t,n,s,r,o,a){let c;if(e.side===Ft?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Fn,a),c===null)return null;Bs.copy(a),Bs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Bs);return l<t.near||l>t.far?null:{distance:l,point:Bs.clone(),object:i}}function zs(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Us),i.getVertexPosition(c,Ns),i.getVertexPosition(l,Fs);const h=Ih(i,e,t,n,Us,Ns,Fs,Qa);if(h){const u=new R;Kt.getBarycoord(Qa,Us,Ns,Fs,u),s&&(h.uv=Kt.getInterpolatedAttribute(s,a,c,l,u,new le)),r&&(h.uv1=Kt.getInterpolatedAttribute(r,a,c,l,u,new le)),o&&(h.normal=Kt.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new R,materialIndex:0};Kt.getNormal(Us,Ns,Fs,d.normal),h.face=d,h.barycoord=u}return h}class gt extends At{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2));function m(_,g,p,v,y,x,w,T,C,P,E){const S=x/C,I=w/P,B=x/2,G=w/2,J=T/2,X=C+1,Y=P+1;let ne=0,V=0;const fe=new R;for(let _e=0;_e<Y;_e++){const Se=_e*I-G;for(let ze=0;ze<X;ze++){const Xe=ze*S-B;fe[_]=Xe*v,fe[g]=Se*y,fe[p]=J,l.push(fe.x,fe.y,fe.z),fe[_]=0,fe[g]=0,fe[p]=T>0?1:-1,h.push(fe.x,fe.y,fe.z),u.push(ze/C),u.push(1-_e/P),ne+=1}}for(let _e=0;_e<P;_e++)for(let Se=0;Se<C;Se++){const ze=d+Se+X*_e,Xe=d+Se+X*(_e+1),Ke=d+(Se+1)+X*(_e+1),qe=d+(Se+1)+X*_e;c.push(ze,Xe,qe),c.push(Xe,Ke,qe),V+=6}a.addGroup(f,V,E),f+=V,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Pt(i){const e={};for(let t=0;t<i.length;t++){const n=Hi(i[t]);for(const s in n)e[s]=n[s]}return e}function Dh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Sl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Lh={clone:Hi,merge:Pt};var Uh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uh,this.fragmentShader=Nh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=Dh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class El extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new R,ec=new le,tc=new le;class Gt extends El{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z)}getViewSize(e,t){return this.getViewBounds(e,ec,tc),t.subVectors(tc,ec)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ei=-90,bi=1;class Fh extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Gt(Ei,bi,e,t);s.layers=this.layers,this.add(s);const r=new Gt(Ei,bi,e,t);r.layers=this.layers,this.add(r);const o=new Gt(Ei,bi,e,t);o.layers=this.layers,this.add(o);const a=new Gt(Ei,bi,e,t);a.layers=this.layers,this.add(a);const c=new Gt(Ei,bi,e,t);c.layers=this.layers,this.add(c);const l=new Gt(Ei,bi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class bl extends wt{constructor(e=[],t=zi,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Oh extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new bl(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gt(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:Ln});r.uniforms.tEquirect.value=t;const o=new Pe(s,r),a=t.minFilter;return t.minFilter===Qn&&(t.minFilter=an),new Fh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class ht extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bh={type:"move"};class Hr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bh)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class fa{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=t,this.far=n}clone(){return new fa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class zh extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qt,this.environmentIntensity=1,this.environmentRotation=new qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Tl extends wt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Ht,h=Ht,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nc extends en{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ti=new et,ic=new et,ks=[],sc=new li,kh=new et,Zi=new Pe,Qi=new Wi;class $n extends Pe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new nc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,kh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new li),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ti),sc.copy(e.boundingBox).applyMatrix4(Ti),this.boundingBox.union(sc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ti),Qi.copy(e.boundingSphere).applyMatrix4(Ti),this.boundingSphere.union(Qi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Zi.geometry=this.geometry,Zi.material=this.material,Zi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qi.copy(this.boundingSphere),Qi.applyMatrix4(n),e.ray.intersectsSphere(Qi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ti),ic.multiplyMatrices(n,Ti),Zi.matrixWorld=ic,Zi.raycast(e,ks);for(let o=0,a=ks.length;o<a;o++){const c=ks[o];c.instanceId=r,c.object=this,t.push(c)}ks.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new nc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tl(new Float32Array(s*this.count),s,this.count,oa,cn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Vr=new R,Gh=new R,Hh=new He;class In{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Vr.subVectors(n,t).cross(Gh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Vr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hh.getNormalMatrix(e),s=this.coplanarPoint(Vr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new Wi,Vh=new le(.5,.5),Gs=new R;class pa{constructor(e=new In,t=new In,n=new In,s=new In,r=new In,o=new In){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ln,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],v=r[12],y=r[13],x=r[14],w=r[15];if(s[0].setComponents(l-o,f-h,p-m,w-v).normalize(),s[1].setComponents(l+o,f+h,p+m,w+v).normalize(),s[2].setComponents(l+a,f+u,p+_,w+y).normalize(),s[3].setComponents(l-a,f-u,p-_,w-y).normalize(),n)s[4].setComponents(c,d,g,x).normalize(),s[5].setComponents(l-c,f-d,p-g,w-x).normalize();else if(s[4].setComponents(l-c,f-d,p-g,w-x).normalize(),t===ln)s[5].setComponents(l+c,f+d,p+g,w+x).normalize();else if(t===or)s[5].setComponents(c,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){Xn.center.set(0,0,0);const t=Vh.distanceTo(e.center);return Xn.radius=.7071067811865476+t,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Gs.x=s.normal.x>0?e.max.x:e.min.x,Gs.y=s.normal.y>0?e.max.y:e.min.y,Gs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wl extends Xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cr=new R,lr=new R,rc=new et,es=new mr,Hs=new Wi,Wr=new R,oc=new R;class Wh extends Et{constructor(e=new At,t=new wl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)cr.fromBufferAttribute(t,s-1),lr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=cr.distanceTo(lr);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(s),Hs.radius+=r,e.ray.intersectsSphere(Hs)===!1)return;rc.copy(s).invert(),es.copy(e.ray).applyMatrix4(rc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){const p=h.getX(_),v=h.getX(_+1),y=Vs(this,e,es,c,p,v,_);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(f),p=Vs(this,e,es,c,_,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){const p=Vs(this,e,es,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Vs(this,e,es,c,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Vs(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(cr.fromBufferAttribute(a,s),lr.fromBufferAttribute(a,r),t.distanceSqToSegment(cr,lr,Wr,oc)>n)return;Wr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Wr);if(!(l<e.near||l>e.far))return{distance:l,point:oc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const ac=new R,cc=new R;class Al extends Wh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ac.fromBufferAttribute(t,s),cc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ac.distanceTo(cc);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xh extends wt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cl extends wt{constructor(e,t,n=si,s,r,o,a=Ht,c=Ht,l,h=ds,u=1){if(h!==ds&&h!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ha(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Rl extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ma extends At{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new R,h=new le;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(a,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ut extends At{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const _=[],g=n/2;let p=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(f,2));function v(){const x=new R,w=new R;let T=0;const C=(t-e)/n;for(let P=0;P<=r;P++){const E=[],S=P/r,I=S*(t-e)+e;for(let B=0;B<=s;B++){const G=B/s,J=G*c+a,X=Math.sin(J),Y=Math.cos(J);w.x=I*X,w.y=-S*n+g,w.z=I*Y,u.push(w.x,w.y,w.z),x.set(X,C,Y).normalize(),d.push(x.x,x.y,x.z),f.push(G,1-S),E.push(m++)}_.push(E)}for(let P=0;P<s;P++)for(let E=0;E<r;E++){const S=_[E][P],I=_[E+1][P],B=_[E+1][P+1],G=_[E][P+1];(e>0||E!==0)&&(h.push(S,I,G),T+=3),(t>0||E!==r-1)&&(h.push(I,B,G),T+=3)}l.addGroup(p,T,0),p+=T}function y(x){const w=m,T=new le,C=new R;let P=0;const E=x===!0?e:t,S=x===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),m++;const I=m;for(let B=0;B<=s;B++){const J=B/s*c+a,X=Math.cos(J),Y=Math.sin(J);C.x=E*Y,C.y=g*S,C.z=E*X,u.push(C.x,C.y,C.z),d.push(0,S,0),T.x=X*.5+.5,T.y=Y*.5*S+.5,f.push(T.x,T.y),m++}for(let B=0;B<s;B++){const G=w+B,J=I+B;x===!0?h.push(J,J+1,G):h.push(J+1,J,G),P+=3}l.addGroup(p,P,x===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ut(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new le:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new R,s=[],r=[],o=[],a=new R,c=new et;for(let f=0;f<=e;f++){const m=f/e;s[f]=this.getTangentAt(m,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(We(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(We(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ga extends fn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new le){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class qh extends ga{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function _a(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Ws=new R,Xr=new _a,qr=new _a,Yr=new _a;class Pl extends fn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Ws.subVectors(s[0],s[1]).add(s[0]),l=Ws);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ws.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ws),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Xr.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,_,g),qr.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,_,g),Yr.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Xr.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),qr.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Yr.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Xr.calc(c),qr.calc(c),Yr.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function lc(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Yh(i,e){const t=1-i;return t*t*e}function $h(i,e){return 2*(1-i)*i*e}function Jh(i,e){return i*i*e}function as(i,e,t,n){return Yh(i,e)+$h(i,t)+Jh(i,n)}function jh(i,e){const t=1-i;return t*t*t*e}function Kh(i,e){const t=1-i;return 3*t*t*i*e}function Zh(i,e){return 3*(1-i)*i*i*e}function Qh(i,e){return i*i*i*e}function cs(i,e,t,n,s){return jh(i,e)+Kh(i,t)+Zh(i,n)+Qh(i,s)}class Il extends fn{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cs(e,s.x,r.x,o.x,a.x),cs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ed extends fn{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cs(e,s.x,r.x,o.x,a.x),cs(e,s.y,r.y,o.y,a.y),cs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Dl extends fn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qo extends fn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ll extends fn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(as(e,s.x,r.x,o.x),as(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class va extends fn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(as(e,s.x,r.x,o.x),as(e,s.y,r.y,o.y),as(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ul extends fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(lc(a,c.x,l.x,h.x,u.x),lc(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new le().fromArray(s))}return this}}var ur=Object.freeze({__proto__:null,ArcCurve:qh,CatmullRomCurve3:Pl,CubicBezierCurve:Il,CubicBezierCurve3:ed,EllipseCurve:ga,LineCurve:Dl,LineCurve3:qo,QuadraticBezierCurve:Ll,QuadraticBezierCurve3:va,SplineCurve:Ul});class Nl extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ur[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new ur[s.type]().fromJSON(s))}return this}}class ei extends Nl{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Dl(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Ll(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Il(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ul(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new ga(e,t,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Qt extends ei{constructor(e){super(e),this.uuid=ci(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new ei().fromJSON(s))}return this}}function td(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Fl(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=od(i,e,r,t)),i.length>80*t){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=t;d<s;d+=t){const f=i[d],m=i[d+1];f<a&&(a=f),m<c&&(c=m),f>h&&(h=f),m>u&&(u=m)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return gs(r,o,t,a,c,l,0),o}function Fl(i,e,t,n,s){let r;if(s===_d(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=uc(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=uc(o/n|0,i[o],i[o+1],r);return r&&Vi(r,r.next)&&(vs(r),r=r.next),r}function oi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Vi(t,t.next)||pt(t.prev,t,t.next)===0)){if(vs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function gs(i,e,t,n,s,r,o){if(!i)return;!o&&r&&hd(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?id(i,n,s,r):nd(i)){e.push(c.i,i.i,l.i),vs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=sd(oi(i),e),gs(i,e,t,n,s,r,2)):o===2&&rd(i,e,t,n,s,r):gs(oi(i),e,t,n,s,r,1);break}}}function nd(i){const e=i.prev,t=i,n=i.next;if(pt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l);let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&is(s,a,r,c,o,l,m.x,m.y)&&pt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function id(i,e,t,n){const s=i.prev,r=i,o=i.next;if(pt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,c,l),m=Math.min(h,u,d),_=Math.max(a,c,l),g=Math.max(h,u,d),p=Yo(f,m,e,t,n),v=Yo(_,g,e,t,n);let y=i.prevZ,x=i.nextZ;for(;y&&y.z>=p&&x&&x.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&is(a,h,c,u,l,d,y.x,y.y)&&pt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&is(a,h,c,u,l,d,x.x,x.y)&&pt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&is(a,h,c,u,l,d,y.x,y.y)&&pt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&is(a,h,c,u,l,d,x.x,x.y)&&pt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function sd(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Vi(n,s)&&Bl(n,t,t.next,s)&&_s(n,s)&&_s(s,n)&&(e.push(n.i,t.i,s.i),vs(t),vs(t.next),t=i=s),t=t.next}while(t!==i);return oi(t)}function rd(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&pd(o,a)){let c=zl(o,a);o=oi(o,o.next),c=oi(c,c.next),gs(o,e,t,n,s,r,0),gs(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function od(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Fl(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(fd(l))}s.sort(ad);for(let r=0;r<s.length;r++)t=cd(s[r],t);return t}function ad(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function cd(i,e){const t=ld(i,e);if(!t)return e;const n=zl(t,i);return oi(n,n.next),oi(t,t.next)}function ld(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(Vi(i,t))return t;do{if(Vi(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Ol(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){const u=Math.abs(s-t.y)/(n-t.x);_s(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&ud(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function ud(i,e){return pt(i.prev,i,e.prev)<0&&pt(e.next,i,i.next)<0}function hd(i,e,t,n){let s=i;do s.z===0&&(s.z=Yo(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,dd(s)}function dd(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Yo(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function fd(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ol(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function is(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Ol(i,e,t,n,s,r,o,a)}function pd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!md(i,e)&&(_s(i,e)&&_s(e,i)&&gd(i,e)&&(pt(i.prev,i,e.prev)||pt(i,e.prev,e))||Vi(i,e)&&pt(i.prev,i,i.next)>0&&pt(e.prev,e,e.next)>0)}function pt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Vi(i,e){return i.x===e.x&&i.y===e.y}function Bl(i,e,t,n){const s=qs(pt(i,e,t)),r=qs(pt(i,e,n)),o=qs(pt(t,n,i)),a=qs(pt(t,n,e));return!!(s!==r&&o!==a||s===0&&Xs(i,t,e)||r===0&&Xs(i,n,e)||o===0&&Xs(t,i,n)||a===0&&Xs(t,e,n))}function Xs(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function qs(i){return i>0?1:i<0?-1:0}function md(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Bl(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function _s(i,e){return pt(i.prev,i,i.next)<0?pt(i,e,i.next)>=0&&pt(i,i.prev,e)>=0:pt(i,e,i.prev)<0||pt(i,i.next,e)<0}function gd(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function zl(i,e){const t=$o(i.i,i.x,i.y),n=$o(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function uc(i,e,t,n){const s=$o(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $o(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _d(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class vd{static triangulate(e,t,n=2){return td(e,t,n)}}class Sn{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Sn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];hc(e),dc(n,e);let o=e.length;t.forEach(hc);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,dc(n,t[c]);const a=vd.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function hc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function dc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class un extends At{constructor(e=new Qt([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new it(s,3)),this.setAttribute("uv",new it(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:xd;let y,x=!1,w,T,C,P;p&&(y=p.getSpacedPoints(h),x=!0,d=!1,w=p.computeFrenetFrames(h,!1),T=new R,C=new R,P=new R),d||(g=0,f=0,m=0,_=0);const E=a.extractPoints(l);let S=E.shape;const I=E.holes;if(!Sn.isClockWise(S)){S=S.reverse();for(let K=0,Q=I.length;K<Q;K++){const j=I[K];Sn.isClockWise(j)&&(I[K]=j.reverse())}}function G(K){const j=10000000000000001e-36;let $=K[0];for(let pe=1;pe<=K.length;pe++){const re=pe%K.length,ue=K[re],Ue=ue.x-$.x,Oe=ue.y-$.y,A=Ue*Ue+Oe*Oe,M=Math.max(Math.abs(ue.x),Math.abs(ue.y),Math.abs($.x),Math.abs($.y)),O=j*M*M;if(A<=O){K.splice(re,1),pe--;continue}$=ue}}G(S),I.forEach(G);const J=I.length,X=S;for(let K=0;K<J;K++){const Q=I[K];S=S.concat(Q)}function Y(K,Q,j){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(Q,j)}const ne=S.length;function V(K,Q,j){let $,pe,re;const ue=K.x-Q.x,Ue=K.y-Q.y,Oe=j.x-K.x,A=j.y-K.y,M=ue*ue+Ue*Ue,O=ue*A-Ue*Oe;if(Math.abs(O)>Number.EPSILON){const W=Math.sqrt(M),ie=Math.sqrt(Oe*Oe+A*A),q=Q.x-Ue/W,L=Q.y+ue/W,z=j.x-A/ie,ae=j.y+Oe/ie,ge=((z-q)*A-(ae-L)*Oe)/(ue*A-Ue*Oe);$=q+ue*ge-K.x,pe=L+Ue*ge-K.y;const ee=$*$+pe*pe;if(ee<=2)return new le($,pe);re=Math.sqrt(ee/2)}else{let W=!1;ue>Number.EPSILON?Oe>Number.EPSILON&&(W=!0):ue<-Number.EPSILON?Oe<-Number.EPSILON&&(W=!0):Math.sign(Ue)===Math.sign(A)&&(W=!0),W?($=-Ue,pe=ue,re=Math.sqrt(M)):($=ue,pe=Ue,re=Math.sqrt(M/2))}return new le($/re,pe/re)}const fe=[];for(let K=0,Q=X.length,j=Q-1,$=K+1;K<Q;K++,j++,$++)j===Q&&(j=0),$===Q&&($=0),fe[K]=V(X[K],X[j],X[$]);const _e=[];let Se,ze=fe.concat();for(let K=0,Q=J;K<Q;K++){const j=I[K];Se=[];for(let $=0,pe=j.length,re=pe-1,ue=$+1;$<pe;$++,re++,ue++)re===pe&&(re=0),ue===pe&&(ue=0),Se[$]=V(j[$],j[re],j[ue]);_e.push(Se),ze=ze.concat(Se)}let Xe;if(g===0)Xe=Sn.triangulateShape(X,I);else{const K=[],Q=[];for(let j=0;j<g;j++){const $=j/g,pe=f*Math.cos($*Math.PI/2),re=m*Math.sin($*Math.PI/2)+_;for(let ue=0,Ue=X.length;ue<Ue;ue++){const Oe=Y(X[ue],fe[ue],re);Ce(Oe.x,Oe.y,-pe),$===0&&K.push(Oe)}for(let ue=0,Ue=J;ue<Ue;ue++){const Oe=I[ue];Se=_e[ue];const A=[];for(let M=0,O=Oe.length;M<O;M++){const W=Y(Oe[M],Se[M],re);Ce(W.x,W.y,-pe),$===0&&A.push(W)}$===0&&Q.push(A)}}Xe=Sn.triangulateShape(K,Q)}const Ke=Xe.length,qe=m+_;for(let K=0;K<ne;K++){const Q=d?Y(S[K],ze[K],qe):S[K];x?(C.copy(w.normals[0]).multiplyScalar(Q.x),T.copy(w.binormals[0]).multiplyScalar(Q.y),P.copy(y[0]).add(C).add(T),Ce(P.x,P.y,P.z)):Ce(Q.x,Q.y,0)}for(let K=1;K<=h;K++)for(let Q=0;Q<ne;Q++){const j=d?Y(S[Q],ze[Q],qe):S[Q];x?(C.copy(w.normals[K]).multiplyScalar(j.x),T.copy(w.binormals[K]).multiplyScalar(j.y),P.copy(y[K]).add(C).add(T),Ce(P.x,P.y,P.z)):Ce(j.x,j.y,u/h*K)}for(let K=g-1;K>=0;K--){const Q=K/g,j=f*Math.cos(Q*Math.PI/2),$=m*Math.sin(Q*Math.PI/2)+_;for(let pe=0,re=X.length;pe<re;pe++){const ue=Y(X[pe],fe[pe],$);Ce(ue.x,ue.y,u+j)}for(let pe=0,re=I.length;pe<re;pe++){const ue=I[pe];Se=_e[pe];for(let Ue=0,Oe=ue.length;Ue<Oe;Ue++){const A=Y(ue[Ue],Se[Ue],$);x?Ce(A.x,A.y+y[h-1].y,y[h-1].x+j):Ce(A.x,A.y,u+j)}}}Z(),se();function Z(){const K=s.length/3;if(d){let Q=0,j=ne*Q;for(let $=0;$<Ke;$++){const pe=Xe[$];Ee(pe[2]+j,pe[1]+j,pe[0]+j)}Q=h+g*2,j=ne*Q;for(let $=0;$<Ke;$++){const pe=Xe[$];Ee(pe[0]+j,pe[1]+j,pe[2]+j)}}else{for(let Q=0;Q<Ke;Q++){const j=Xe[Q];Ee(j[2],j[1],j[0])}for(let Q=0;Q<Ke;Q++){const j=Xe[Q];Ee(j[0]+ne*h,j[1]+ne*h,j[2]+ne*h)}}n.addGroup(K,s.length/3-K,0)}function se(){const K=s.length/3;let Q=0;Me(X,Q),Q+=X.length;for(let j=0,$=I.length;j<$;j++){const pe=I[j];Me(pe,Q),Q+=pe.length}n.addGroup(K,s.length/3-K,1)}function Me(K,Q){let j=K.length;for(;--j>=0;){const $=j;let pe=j-1;pe<0&&(pe=K.length-1);for(let re=0,ue=h+g*2;re<ue;re++){const Ue=ne*re,Oe=ne*(re+1),A=Q+$+Ue,M=Q+pe+Ue,O=Q+pe+Oe,W=Q+$+Oe;Ge(A,M,O,W)}}}function Ce(K,Q,j){c.push(K),c.push(Q),c.push(j)}function Ee(K,Q,j){tt(K),tt(Q),tt(j);const $=s.length/3,pe=v.generateTopUV(n,s,$-3,$-2,$-1);D(pe[0]),D(pe[1]),D(pe[2])}function Ge(K,Q,j,$){tt(K),tt(Q),tt($),tt(Q),tt(j),tt($);const pe=s.length/3,re=v.generateSideWallUV(n,s,pe-6,pe-3,pe-2,pe-1);D(re[0]),D(re[1]),D(re[3]),D(re[1]),D(re[2]),D(re[3])}function tt(K){s.push(c[K*3+0]),s.push(c[K*3+1]),s.push(c[K*3+2])}function D(K){r.push(K.x),r.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return yd(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ur[s.type]().fromJSON(s)),new un(n,e.options)}}const xd={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new le(r,o),new le(a,c),new le(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],_=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new le(o,1-c),new le(l,1-u),new le(d,1-m),new le(_,1-p)]:[new le(a,1-c),new le(h,1-u),new le(f,1-m),new le(g,1-p)]}};function yd(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ui extends At{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const v=p*d-o;for(let y=0;y<l;y++){const x=y*u-r;m.push(x,-v,0),_.push(0,0,1),g.push(y/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const y=v+l*p,x=v+l*(p+1),w=v+1+l*(p+1),T=v+1+l*p;f.push(y,x,T),f.push(x,w,T)}this.setIndex(f),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.width,e.height,e.widthSegments,e.heightSegments)}}class xa extends At{constructor(e=new Qt([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new it(s,3)),this.setAttribute("normal",new it(r,3)),this.setAttribute("uv",new it(o,2));function l(h){const u=s.length/3,d=h.extractPoints(t);let f=d.shape;const m=d.holes;Sn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const v=m[g];Sn.isClockWise(v)===!0&&(m[g]=v.reverse())}const _=Sn.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const v=m[g];f=f.concat(v)}for(let g=0,p=f.length;g<p;g++){const v=f[g];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let g=0,p=_.length;g<p;g++){const v=_[g],y=v[0]+u,x=v[1]+u,w=v[2]+u;n.push(y,x,w),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Md(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new xa(n,e.curveSegments)}}function Md(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class gr extends At{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new R,d=new R,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){const T=w/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+y*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(T+x,1-y),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const y=h[p][v+1],x=h[p][v],w=h[p+1][v],T=h[p+1][v+1];(p!==0||o>0)&&f.push(y,x,T),(p!==n-1||c<Math.PI)&&f.push(x,w,T)}this.setIndex(f),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bn extends At{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new R,u=new R,d=new R;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){const _=m/s*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){const _=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,v=(s+1)*f+m;o.push(_,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class hr extends At{constructor(e=new va(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,c=new R,l=new le;let h=new R;const u=[],d=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(f,2));function _(){for(let y=0;y<t;y++)g(y);g(r===!1?t:0),v(),p()}function g(y){h=e.getPointAt(y/t,h);const x=o.normals[y],w=o.binormals[y];for(let T=0;T<=s;T++){const C=T/s*Math.PI*2,P=Math.sin(C),E=-Math.cos(C);c.x=E*x.x+P*w.x,c.y=E*x.y+P*w.y,c.z=E*x.z+P*w.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let x=1;x<=s;x++){const w=(s+1)*(y-1)+(x-1),T=(s+1)*y+(x-1),C=(s+1)*y+x,P=(s+1)*(y-1)+x;m.push(w,T,P),m.push(T,C,P)}}function v(){for(let y=0;y<=t;y++)for(let x=0;x<=s;x++)l.x=y/t,l.y=x/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new hr(new ur[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class $e extends Xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sd extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ed extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ya extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class bd extends ya{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const $r=new et,fc=new R,pc=new R;class kl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pa,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;fc.setFromMatrixPosition(e.matrixWorld),t.position.copy(fc),pc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pc),t.updateMatrixWorld(),$r.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($r,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($r)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const mc=new et,ts=new R,Jr=new R;class Td extends kl{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ts.setFromMatrixPosition(e.matrixWorld),n.position.copy(ts),Jr.copy(n.position),Jr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Jr),n.updateMatrixWorld(),s.makeTranslation(-ts.x,-ts.y,-ts.z),mc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mc,n.coordinateSystem,n.reversedDepth)}}class wd extends ya{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Td}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Gl extends El{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ad extends kl{constructor(){super(new Gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gc extends ya{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new Ad}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Cd extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const _c=new et;class Rd{constructor(e,t,n=0,s=1/0){this.ray=new mr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new da,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return _c.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_c),this}intersectObject(e,t=!0,n=[]){return Jo(e,this,n,t),n.sort(vc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Jo(e[s],this,n,t);return n.sort(vc),n}}function vc(i,e){return i.distance-e.distance}function Jo(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Jo(r[o],e,t,!0)}}class xc{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Pd extends ai{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function yc(i,e,t,n){const s=Id(n);switch(t){case dl:return i*e;case oa:return i*e/s.components*s.byteLength;case aa:return i*e/s.components*s.byteLength;case pl:return i*e*2/s.components*s.byteLength;case ca:return i*e*2/s.components*s.byteLength;case fl:return i*e*3/s.components*s.byteLength;case Zt:return i*e*4/s.components*s.byteLength;case la:return i*e*4/s.components*s.byteLength;case Ks:case Zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qs:case er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vo:case yo:return Math.max(i,16)*Math.max(e,8)/4;case _o:case xo:return Math.max(i,8)*Math.max(e,8)/2;case Mo:case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case To:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case wo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Po:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Bo:case zo:case ko:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Go:case Ho:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Vo:case Wo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Id(i){switch(i){case hn:case cl:return{byteLength:1,components:1};case us:case ll:case xs:return{byteLength:2,components:1};case sa:case ra:return{byteLength:2,components:4};case si:case ia:case cn:return{byteLength:4,components:1};case ul:case hl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=na);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hl(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Dd(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ld=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ud=`#ifdef USE_ALPHAHASH
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
#endif`,Nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Od=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zd=`#ifdef USE_AOMAP
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
#endif`,kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gd=`#ifdef USE_BATCHING
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
#endif`,Hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qd=`#ifdef USE_IRIDESCENCE
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
#endif`,Yd=`#ifdef USE_BUMPMAP
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
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nf=`#define PI 3.141592653589793
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
} // validated`,sf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rf=`vec3 transformedNormal = objectNormal;
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
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",hf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,df=`#ifdef USE_ENVMAP
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
#endif`,ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pf=`#ifdef USE_ENVMAP
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
#endif`,mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mf=`#ifdef USE_GRADIENTMAP
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
}`,Sf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tf=`uniform bool receiveShadow;
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
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Af=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,If=`PhysicalMaterial material;
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
#endif`,Df=`struct PhysicalMaterial {
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
}`,Lf=`
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
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ff=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Of=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vf=`#if defined( USE_POINTS_UV )
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
#endif`,Wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jf=`#ifdef USE_MORPHTARGETS
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
#endif`,jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,np=`#ifdef USE_NORMALMAP
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
#endif`,ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vp=`float getShadowMask() {
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
}`,xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yp=`#ifdef USE_SKINNING
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
#endif`,Mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sp=`#ifdef USE_SKINNING
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
#endif`,Ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ap=`#ifdef USE_TRANSMISSION
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
#endif`,Cp=`#ifdef USE_TRANSMISSION
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
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Up=`uniform sampler2D t2D;
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`#include <common>
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
}`,kp=`#if DEPTH_PACKING == 3200
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
}`,Gp=`#define DISTANCE
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
}`,Hp=`#define DISTANCE
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
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`uniform float scale;
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
}`,qp=`uniform vec3 diffuse;
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
}`,Yp=`#include <common>
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
}`,$p=`uniform vec3 diffuse;
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
}`,Jp=`#define LAMBERT
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
}`,jp=`#define LAMBERT
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
}`,Kp=`#define MATCAP
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
}`,Zp=`#define MATCAP
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
}`,Qp=`#define NORMAL
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
}`,em=`#define NORMAL
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
}`,tm=`#define PHONG
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
}`,nm=`#define PHONG
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
}`,im=`#define STANDARD
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
}`,sm=`#define STANDARD
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
}`,rm=`#define TOON
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
}`,om=`#define TOON
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
}`,am=`uniform float size;
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
}`,cm=`uniform vec3 diffuse;
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
}`,lm=`#include <common>
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
}`,um=`uniform vec3 color;
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
}`,hm=`uniform float rotation;
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
}`,dm=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Ld,alphahash_pars_fragment:Ud,alphamap_fragment:Nd,alphamap_pars_fragment:Fd,alphatest_fragment:Od,alphatest_pars_fragment:Bd,aomap_fragment:zd,aomap_pars_fragment:kd,batching_pars_vertex:Gd,batching_vertex:Hd,begin_vertex:Vd,beginnormal_vertex:Wd,bsdfs:Xd,iridescence_fragment:qd,bumpmap_pars_fragment:Yd,clipping_planes_fragment:$d,clipping_planes_pars_fragment:Jd,clipping_planes_pars_vertex:jd,clipping_planes_vertex:Kd,color_fragment:Zd,color_pars_fragment:Qd,color_pars_vertex:ef,color_vertex:tf,common:nf,cube_uv_reflection_fragment:sf,defaultnormal_vertex:rf,displacementmap_pars_vertex:of,displacementmap_vertex:af,emissivemap_fragment:cf,emissivemap_pars_fragment:lf,colorspace_fragment:uf,colorspace_pars_fragment:hf,envmap_fragment:df,envmap_common_pars_fragment:ff,envmap_pars_fragment:pf,envmap_pars_vertex:mf,envmap_physical_pars_fragment:wf,envmap_vertex:gf,fog_vertex:_f,fog_pars_vertex:vf,fog_fragment:xf,fog_pars_fragment:yf,gradientmap_pars_fragment:Mf,lightmap_pars_fragment:Sf,lights_lambert_fragment:Ef,lights_lambert_pars_fragment:bf,lights_pars_begin:Tf,lights_toon_fragment:Af,lights_toon_pars_fragment:Cf,lights_phong_fragment:Rf,lights_phong_pars_fragment:Pf,lights_physical_fragment:If,lights_physical_pars_fragment:Df,lights_fragment_begin:Lf,lights_fragment_maps:Uf,lights_fragment_end:Nf,logdepthbuf_fragment:Ff,logdepthbuf_pars_fragment:Of,logdepthbuf_pars_vertex:Bf,logdepthbuf_vertex:zf,map_fragment:kf,map_pars_fragment:Gf,map_particle_fragment:Hf,map_particle_pars_fragment:Vf,metalnessmap_fragment:Wf,metalnessmap_pars_fragment:Xf,morphinstance_vertex:qf,morphcolor_vertex:Yf,morphnormal_vertex:$f,morphtarget_pars_vertex:Jf,morphtarget_vertex:jf,normal_fragment_begin:Kf,normal_fragment_maps:Zf,normal_pars_fragment:Qf,normal_pars_vertex:ep,normal_vertex:tp,normalmap_pars_fragment:np,clearcoat_normal_fragment_begin:ip,clearcoat_normal_fragment_maps:sp,clearcoat_pars_fragment:rp,iridescence_pars_fragment:op,opaque_fragment:ap,packing:cp,premultiplied_alpha_fragment:lp,project_vertex:up,dithering_fragment:hp,dithering_pars_fragment:dp,roughnessmap_fragment:fp,roughnessmap_pars_fragment:pp,shadowmap_pars_fragment:mp,shadowmap_pars_vertex:gp,shadowmap_vertex:_p,shadowmask_pars_fragment:vp,skinbase_vertex:xp,skinning_pars_vertex:yp,skinning_vertex:Mp,skinnormal_vertex:Sp,specularmap_fragment:Ep,specularmap_pars_fragment:bp,tonemapping_fragment:Tp,tonemapping_pars_fragment:wp,transmission_fragment:Ap,transmission_pars_fragment:Cp,uv_pars_fragment:Rp,uv_pars_vertex:Pp,uv_vertex:Ip,worldpos_vertex:Dp,background_vert:Lp,background_frag:Up,backgroundCube_vert:Np,backgroundCube_frag:Fp,cube_vert:Op,cube_frag:Bp,depth_vert:zp,depth_frag:kp,distanceRGBA_vert:Gp,distanceRGBA_frag:Hp,equirect_vert:Vp,equirect_frag:Wp,linedashed_vert:Xp,linedashed_frag:qp,meshbasic_vert:Yp,meshbasic_frag:$p,meshlambert_vert:Jp,meshlambert_frag:jp,meshmatcap_vert:Kp,meshmatcap_frag:Zp,meshnormal_vert:Qp,meshnormal_frag:em,meshphong_vert:tm,meshphong_frag:nm,meshphysical_vert:im,meshphysical_frag:sm,meshtoon_vert:rm,meshtoon_frag:om,points_vert:am,points_frag:cm,shadow_vert:lm,shadow_frag:um,sprite_vert:hm,sprite_frag:dm},xe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},sn={basic:{uniforms:Pt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Pt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Pt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Pt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Pt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Pt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Pt([xe.points,xe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Pt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Pt([xe.common,xe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Pt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Pt([xe.sprite,xe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Pt([xe.common,xe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Pt([xe.lights,xe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};sn.physical={uniforms:Pt([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Ys={r:0,b:0,g:0},qn=new qt,fm=new et;function pm(i,e,t,n,s,r,o){const a=new Je(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1;const w=m(y);w===null?p(a,c):w&&w.isColor&&(p(w,1),x=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,x){const w=m(x);w&&(w.isCubeTexture||w.mapping===pr)?(h===void 0&&(h=new Pe(new gt(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Hi(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),qn.copy(x.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fm.makeRotationFromEuler(qn)),h.material.toneMapped=Qe.getTransfer(w.colorSpace)!==rt,(u!==w||d!==w.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Pe(new ui(2,2),new Bn({name:"BackgroundMaterial",uniforms:Hi(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(w.colorSpace)!==rt,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=w,d=w.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,x){y.getRGB(Ys,Sl(i)),n.buffers.color.setClear(Ys.r,Ys.g,Ys.b,x,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:g,dispose:v}}function mm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(S,I,B,G,J){let X=!1;const Y=u(G,B,I);r!==Y&&(r=Y,l(r.object)),X=f(S,G,B,J),X&&m(S,G,B,J),J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(S,I,B,G),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,I,B){const G=B.wireframe===!0;let J=n[S.id];J===void 0&&(J={},n[S.id]=J);let X=J[I.id];X===void 0&&(X={},J[I.id]=X);let Y=X[G];return Y===void 0&&(Y=d(c()),X[G]=Y),Y}function d(S){const I=[],B=[],G=[];for(let J=0;J<t;J++)I[J]=0,B[J]=0,G[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:G,object:S,attributes:{},index:null}}function f(S,I,B,G){const J=r.attributes,X=I.attributes;let Y=0;const ne=B.getAttributes();for(const V in ne)if(ne[V].location>=0){const _e=J[V];let Se=X[V];if(Se===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(Se=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(Se=S.instanceColor)),_e===void 0||_e.attribute!==Se||Se&&_e.data!==Se.data)return!0;Y++}return r.attributesNum!==Y||r.index!==G}function m(S,I,B,G){const J={},X=I.attributes;let Y=0;const ne=B.getAttributes();for(const V in ne)if(ne[V].location>=0){let _e=X[V];_e===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(_e=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(_e=S.instanceColor));const Se={};Se.attribute=_e,_e&&_e.data&&(Se.data=_e.data),J[V]=Se,Y++}r.attributes=J,r.attributesNum=Y,r.index=G}function _(){const S=r.newAttributes;for(let I=0,B=S.length;I<B;I++)S[I]=0}function g(S){p(S,0)}function p(S,I){const B=r.newAttributes,G=r.enabledAttributes,J=r.attributeDivisors;B[S]=1,G[S]===0&&(i.enableVertexAttribArray(S),G[S]=1),J[S]!==I&&(i.vertexAttribDivisor(S,I),J[S]=I)}function v(){const S=r.newAttributes,I=r.enabledAttributes;for(let B=0,G=I.length;B<G;B++)I[B]!==S[B]&&(i.disableVertexAttribArray(B),I[B]=0)}function y(S,I,B,G,J,X,Y){Y===!0?i.vertexAttribIPointer(S,I,B,J,X):i.vertexAttribPointer(S,I,B,G,J,X)}function x(S,I,B,G){_();const J=G.attributes,X=B.getAttributes(),Y=I.defaultAttributeValues;for(const ne in X){const V=X[ne];if(V.location>=0){let fe=J[ne];if(fe===void 0&&(ne==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),ne==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),fe!==void 0){const _e=fe.normalized,Se=fe.itemSize,ze=e.get(fe);if(ze===void 0)continue;const Xe=ze.buffer,Ke=ze.type,qe=ze.bytesPerElement,Z=Ke===i.INT||Ke===i.UNSIGNED_INT||fe.gpuType===ia;if(fe.isInterleavedBufferAttribute){const se=fe.data,Me=se.stride,Ce=fe.offset;if(se.isInstancedInterleavedBuffer){for(let Ee=0;Ee<V.locationSize;Ee++)p(V.location+Ee,se.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ee=0;Ee<V.locationSize;Ee++)g(V.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Ee=0;Ee<V.locationSize;Ee++)y(V.location+Ee,Se/V.locationSize,Ke,_e,Me*qe,(Ce+Se/V.locationSize*Ee)*qe,Z)}else{if(fe.isInstancedBufferAttribute){for(let se=0;se<V.locationSize;se++)p(V.location+se,fe.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let se=0;se<V.locationSize;se++)g(V.location+se);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let se=0;se<V.locationSize;se++)y(V.location+se,Se/V.locationSize,Ke,_e,Se*qe,Se/V.locationSize*se*qe,Z)}}else if(Y!==void 0){const _e=Y[ne];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(V.location,_e);break;case 3:i.vertexAttrib3fv(V.location,_e);break;case 4:i.vertexAttrib4fv(V.location,_e);break;default:i.vertexAttrib1fv(V.location,_e)}}}}v()}function w(){P();for(const S in n){const I=n[S];for(const B in I){const G=I[B];for(const J in G)h(G[J].object),delete G[J];delete I[B]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const I=n[S.id];for(const B in I){const G=I[B];for(const J in G)h(G[J].object),delete G[J];delete I[B]}delete n[S.id]}function C(S){for(const I in n){const B=n[I];if(B[S.id]===void 0)continue;const G=B[S.id];for(const J in G)h(G[J].object),delete G[J];delete B[S.id]}}function P(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function gm(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function _m(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Zt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===xs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==hn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==cn&&!P)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:w,maxSamples:T}}function vm(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new In,a=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{const v=r?0:n,y=v*4;let x=p.clippingState||null;c.value=x,x=h(m,d,y,f);for(let w=0;w!==y;++w)x[w]=t[w];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function xm(i){let e=new WeakMap;function t(o,a){return a===po?o.mapping=zi:a===mo&&(o.mapping=ki),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===po||a===mo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Oh(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Pi=4,Mc=[.125,.215,.35,.446,.526,.582],Kn=20,jr=new Gl,Sc=new Je;let Kr=null,Zr=0,Qr=0,eo=!1;const Jn=(1+Math.sqrt(5))/2,wi=1/Jn,Ec=[new R(-Jn,wi,0),new R(Jn,wi,0),new R(-wi,0,Jn),new R(wi,0,Jn),new R(0,Jn,-wi),new R(0,Jn,wi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],ym=new R;class bc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=ym}=r;Kr=this._renderer.getRenderTarget(),Zr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kr,Zr,Qr),this._renderer.xr.enabled=eo,e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zi||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kr=this._renderer.getRenderTarget(),Zr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:xs,format:Zt,colorSpace:Gi,depthBuffer:!1},s=Tc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mm(r)),this._blurMaterial=Sm(r,e,t)}return s}_compileMaterial(e){const t=new Pe(this._lodPlanes[0],e);this._renderer.compile(t,jr)}_sceneToCubeUV(e,t,n,s,r){const c=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Sc),u.toneMapping=Un,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new On({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),g=new Pe(new gt,_);let p=!1;const v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,p=!0):(_.color.copy(Sc),p=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):x===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));const w=this._cubeSize;$s(s,x*w,y>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===zi||e.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;$s(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,jr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ec[(s-r-1)%Ec.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Pe(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Kn-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):Kn;g>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Kn}`);const p=[];let v=0;for(let C=0;C<Kn;++C){const P=C/_,E=Math.exp(-P*P/2);p.push(E),C===0?v+=E:C<g&&(v+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;const x=this._sizeLods[s],w=3*x*(s>y-Pi?s-y+Pi:0),T=4*(this._cubeSize-x);$s(t,w,T,3*x,2*x),c.setRenderTarget(t),c.render(u,jr)}}function Mm(i){const e=[],t=[],n=[];let s=i;const r=i-Pi+1+Mc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Pi?c=Mc[o-i+Pi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*f),y=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,P=T>2?0:-1,E=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];v.set(E,_*m*T),y.set(d,g*m*T);const S=[T,T,T,T,T,T];x.set(S,p*m*T)}const w=new At;w.setAttribute("position",new en(v,_)),w.setAttribute("uv",new en(y,g)),w.setAttribute("faceIndex",new en(x,p)),e.push(w),s>Pi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Tc(i,e,t){const n=new ri(i,e,t);return n.texture.mapping=pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $s(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Sm(i,e,t){const n=new Float32Array(Kn),s=new R(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ma(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function wc(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ma(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Ac(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Ma(){return`

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
	`}function Em(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===po||c===mo,h=c===zi||c===ki;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new bc(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new bc(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function bm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Tm(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let y=0,x=v.length;y<x;y+=3){const w=v[y+0],T=v[y+1],C=v[y+2];d.push(w,T,T,C,C,w)}}else if(m!==void 0){const v=m.array;_=m.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const w=y+0,T=y+1,C=y+2;d.push(w,T,T,C,C,w)}}else return;const g=new(_l(d)?Ml:yl)(d,1);g.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function wm(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*_[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Am(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Cm(i,e,t){const n=new WeakMap,s=new at;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let w=a.attributes.position.count*x,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*T*4*u),P=new vl(C,w,T,u);P.type=cn,P.needsUpdate=!0;const E=x*4;for(let I=0;I<u;I++){const B=p[I],G=v[I],J=y[I],X=w*T*4*I;for(let Y=0;Y<B.count;Y++){const ne=Y*E;m===!0&&(s.fromBufferAttribute(B,Y),C[X+ne+0]=s.x,C[X+ne+1]=s.y,C[X+ne+2]=s.z,C[X+ne+3]=0),_===!0&&(s.fromBufferAttribute(G,Y),C[X+ne+4]=s.x,C[X+ne+5]=s.y,C[X+ne+6]=s.z,C[X+ne+7]=0),g===!0&&(s.fromBufferAttribute(J,Y),C[X+ne+8]=s.x,C[X+ne+9]=s.y,C[X+ne+10]=s.z,C[X+ne+11]=J.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new le(w,T)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const _=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Rm(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Vl=new wt,Cc=new Cl(1,1),Wl=new vl,Xl=new yh,ql=new bl,Rc=[],Pc=[],Ic=new Float32Array(16),Dc=new Float32Array(9),Lc=new Float32Array(4);function qi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Rc[s];if(r===void 0&&(r=new Float32Array(s),Rc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function _r(i,e){let t=Pc[e];t===void 0&&(t=new Int32Array(e),Pc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Pm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function Dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function Lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function Um(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;Lc.set(n),i.uniformMatrix2fv(this.addr,!1,Lc),Mt(t,n)}}function Nm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;Dc.set(n),i.uniformMatrix3fv(this.addr,!1,Dc),Mt(t,n)}}function Fm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;Ic.set(n),i.uniformMatrix4fv(this.addr,!1,Ic),Mt(t,n)}}function Om(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function Gm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function Vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function Xm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Cc.compareFunction=gl,r=Cc):r=Vl,t.setTexture2D(e||r,s)}function qm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Xl,s)}function Ym(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ql,s)}function $m(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Wl,s)}function Jm(i){switch(i){case 5126:return Pm;case 35664:return Im;case 35665:return Dm;case 35666:return Lm;case 35674:return Um;case 35675:return Nm;case 35676:return Fm;case 5124:case 35670:return Om;case 35667:case 35671:return Bm;case 35668:case 35672:return zm;case 35669:case 35673:return km;case 5125:return Gm;case 36294:return Hm;case 36295:return Vm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return $m}}function jm(i,e){i.uniform1fv(this.addr,e)}function Km(i,e){const t=qi(e,this.size,2);i.uniform2fv(this.addr,t)}function Zm(i,e){const t=qi(e,this.size,3);i.uniform3fv(this.addr,t)}function Qm(i,e){const t=qi(e,this.size,4);i.uniform4fv(this.addr,t)}function e0(i,e){const t=qi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function t0(i,e){const t=qi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function n0(i,e){const t=qi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function i0(i,e){i.uniform1iv(this.addr,e)}function s0(i,e){i.uniform2iv(this.addr,e)}function r0(i,e){i.uniform3iv(this.addr,e)}function o0(i,e){i.uniform4iv(this.addr,e)}function a0(i,e){i.uniform1uiv(this.addr,e)}function c0(i,e){i.uniform2uiv(this.addr,e)}function l0(i,e){i.uniform3uiv(this.addr,e)}function u0(i,e){i.uniform4uiv(this.addr,e)}function h0(i,e,t){const n=this.cache,s=e.length,r=_r(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Vl,r[o])}function d0(i,e,t){const n=this.cache,s=e.length,r=_r(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Xl,r[o])}function f0(i,e,t){const n=this.cache,s=e.length,r=_r(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ql,r[o])}function p0(i,e,t){const n=this.cache,s=e.length,r=_r(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Wl,r[o])}function m0(i){switch(i){case 5126:return jm;case 35664:return Km;case 35665:return Zm;case 35666:return Qm;case 35674:return e0;case 35675:return t0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return o0;case 5125:return a0;case 36294:return c0;case 36295:return l0;case 36296:return u0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return p0}}class g0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jm(t.type)}}class _0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=m0(t.type)}}class v0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const to=/(\w+)(\])?(\[|\.)?/g;function Uc(i,e){i.seq.push(e),i.map[e.id]=e}function x0(i,e,t){const n=i.name,s=n.length;for(to.lastIndex=0;;){const r=to.exec(n),o=to.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Uc(t,l===void 0?new g0(a,i,e):new _0(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new v0(a),Uc(t,u)),t=u}}}class tr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);x0(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Nc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const y0=37297;let M0=0;function S0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Fc=new He;function E0(i){Qe._getMatrix(Fc,Qe.workingColorSpace,i);const e=`mat3( ${Fc.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case rr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Oc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+S0(i.getShaderSource(e),a)}else return r}function b0(i,e){const t=E0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function T0(i,e){let t;switch(e){case Uu:t="Linear";break;case Nu:t="Reinhard";break;case Fu:t="Cineon";break;case ol:t="ACESFilmic";break;case Bu:t="AgX";break;case zu:t="Neutral";break;case Ou:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Js=new R;function w0(){Qe.getLuminanceCoefficients(Js);const i=Js.x.toFixed(4),e=Js.y.toFixed(4),t=Js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function C0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function R0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ss(i){return i!==""}function Bc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const P0=/^[ \t]*#include +<([\w\d./]+)>/gm;function jo(i){return i.replace(P0,D0)}const I0=new Map;function D0(i,e){let t=Ve[e];if(t===void 0){const n=I0.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return jo(t)}const L0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kc(i){return i.replace(L0,U0)}function U0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function N0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===il?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===sl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function F0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zi:case ki:e="ENVMAP_TYPE_CUBE";break;case pr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function O0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ki:e="ENVMAP_MODE_REFRACTION";break}return e}function B0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case rl:e="ENVMAP_BLENDING_MULTIPLY";break;case Du:e="ENVMAP_BLENDING_MIX";break;case Lu:e="ENVMAP_BLENDING_ADD";break}return e}function z0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function k0(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=N0(t),l=F0(t),h=O0(t),u=B0(t),d=z0(t),f=A0(t),m=C0(r),_=s.createProgram();let g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ss).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ss).join(`
`),p.length>0&&(p+=`
`)):(g=[Gc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),p=[Gc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Un?T0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,b0("linearToOutputTexel",t.outputColorSpace),w0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ss).join(`
`)),o=jo(o),o=Bc(o,t),o=zc(o,t),a=jo(a),a=Bc(a,t),a=zc(a,t),o=kc(o),a=kc(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Oa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+g+o,x=v+p+a,w=Nc(s,s.VERTEX_SHADER,y),T=Nc(s,s.FRAGMENT_SHADER,x);s.attachShader(_,w),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(I){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(_)||"",G=s.getShaderInfoLog(w)||"",J=s.getShaderInfoLog(T)||"",X=B.trim(),Y=G.trim(),ne=J.trim();let V=!0,fe=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,T);else{const _e=Oc(s,w,"vertex"),Se=Oc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+X+`
`+_e+`
`+Se)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(Y===""||ne==="")&&(fe=!1);fe&&(I.diagnostics={runnable:V,programLog:X,vertexShader:{log:Y,prefix:g},fragmentShader:{log:ne,prefix:p}})}s.deleteShader(w),s.deleteShader(T),P=new tr(s,_),E=R0(s,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,y0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=M0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}let G0=0;class H0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new V0(e),t.set(e,n)),n}}class V0{constructor(e){this.id=G0++,this.code=e,this.usedTimes=0}}function W0(i,e,t,n,s,r,o){const a=new da,c=new H0,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function g(E,S,I,B,G){const J=B.fog,X=G.geometry,Y=E.isMeshStandardMaterial?B.environment:null,ne=(E.isMeshStandardMaterial?t:e).get(E.envMap||Y),V=ne&&ne.mapping===pr?ne.image.height:null,fe=m[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const _e=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Se=_e!==void 0?_e.length:0;let ze=0;X.morphAttributes.position!==void 0&&(ze=1),X.morphAttributes.normal!==void 0&&(ze=2),X.morphAttributes.color!==void 0&&(ze=3);let Xe,Ke,qe,Z;if(fe){const nt=sn[fe];Xe=nt.vertexShader,Ke=nt.fragmentShader}else Xe=E.vertexShader,Ke=E.fragmentShader,c.update(E),qe=c.getVertexShaderID(E),Z=c.getFragmentShaderID(E);const se=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),Ce=G.isInstancedMesh===!0,Ee=G.isBatchedMesh===!0,Ge=!!E.map,tt=!!E.matcap,D=!!ne,K=!!E.aoMap,Q=!!E.lightMap,j=!!E.bumpMap,$=!!E.normalMap,pe=!!E.displacementMap,re=!!E.emissiveMap,ue=!!E.metalnessMap,Ue=!!E.roughnessMap,Oe=E.anisotropy>0,A=E.clearcoat>0,M=E.dispersion>0,O=E.iridescence>0,W=E.sheen>0,ie=E.transmission>0,q=Oe&&!!E.anisotropyMap,L=A&&!!E.clearcoatMap,z=A&&!!E.clearcoatNormalMap,ae=A&&!!E.clearcoatRoughnessMap,ge=O&&!!E.iridescenceMap,ee=O&&!!E.iridescenceThicknessMap,de=W&&!!E.sheenColorMap,Te=W&&!!E.sheenRoughnessMap,be=!!E.specularMap,ve=!!E.specularColorMap,ke=!!E.specularIntensityMap,U=ie&&!!E.transmissionMap,ce=ie&&!!E.thicknessMap,me=!!E.gradientMap,we=!!E.alphaMap,oe=E.alphaTest>0,te=!!E.alphaHash,Re=!!E.extensions;let De=Un;E.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(De=i.toneMapping);const lt={shaderID:fe,shaderType:E.type,shaderName:E.name,vertexShader:Xe,fragmentShader:Ke,defines:E.defines,customVertexShaderID:qe,customFragmentShaderID:Z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&G._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&G.instanceColor!==null,instancingMorph:Ce&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Gi,alphaToCoverage:!!E.alphaToCoverage,map:Ge,matcap:tt,envMap:D,envMapMode:D&&ne.mapping,envMapCubeUVHeight:V,aoMap:K,lightMap:Q,bumpMap:j,normalMap:$,displacementMap:d&&pe,emissiveMap:re,normalMapObjectSpace:$&&E.normalMapType===Vu,normalMapTangentSpace:$&&E.normalMapType===ml,metalnessMap:ue,roughnessMap:Ue,anisotropy:Oe,anisotropyMap:q,clearcoat:A,clearcoatMap:L,clearcoatNormalMap:z,clearcoatRoughnessMap:ae,dispersion:M,iridescence:O,iridescenceMap:ge,iridescenceThicknessMap:ee,sheen:W,sheenColorMap:de,sheenRoughnessMap:Te,specularMap:be,specularColorMap:ve,specularIntensityMap:ke,transmission:ie,transmissionMap:U,thicknessMap:ce,gradientMap:me,opaque:E.transparent===!1&&E.blending===Li&&E.alphaToCoverage===!1,alphaMap:we,alphaTest:oe,alphaHash:te,combine:E.combine,mapUv:Ge&&_(E.map.channel),aoMapUv:K&&_(E.aoMap.channel),lightMapUv:Q&&_(E.lightMap.channel),bumpMapUv:j&&_(E.bumpMap.channel),normalMapUv:$&&_(E.normalMap.channel),displacementMapUv:pe&&_(E.displacementMap.channel),emissiveMapUv:re&&_(E.emissiveMap.channel),metalnessMapUv:ue&&_(E.metalnessMap.channel),roughnessMapUv:Ue&&_(E.roughnessMap.channel),anisotropyMapUv:q&&_(E.anisotropyMap.channel),clearcoatMapUv:L&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:z&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(E.sheenRoughnessMap.channel),specularMapUv:be&&_(E.specularMap.channel),specularColorMapUv:ve&&_(E.specularColorMap.channel),specularIntensityMapUv:ke&&_(E.specularIntensityMap.channel),transmissionMapUv:U&&_(E.transmissionMap.channel),thicknessMapUv:ce&&_(E.thicknessMap.channel),alphaMapUv:we&&_(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&($||Oe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!X.attributes.uv&&(Ge||we),fog:!!J,useFog:E.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Me,skinning:G.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:ze,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:Ge&&E.map.isVideoTexture===!0&&Qe.getTransfer(E.map.colorSpace)===rt,decodeVideoTextureEmissive:re&&E.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(E.emissiveMap.colorSpace)===rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===on,flipSided:E.side===Ft,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Re&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&E.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return lt.vertexUv1s=l.has(1),lt.vertexUv2s=l.has(2),lt.vertexUv3s=l.has(3),l.clear(),lt}function p(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)S.push(I),S.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(v(S,E),y(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function v(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function y(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const S=m[E.type];let I;if(S){const B=sn[S];I=Lh.clone(B.uniforms)}else I=E.uniforms;return I}function w(E,S){let I;for(let B=0,G=h.length;B<G;B++){const J=h[B];if(J.cacheKey===S){I=J,++I.usedTimes;break}}return I===void 0&&(I=new k0(i,S,E,r),h.push(I)),I}function T(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function C(E){c.remove(E)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:P}}function X0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function q0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Hc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,m,_,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),e++,p}function a(u,d,f,m,_,g){const p=o(u,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,m,_,g){const p=o(u,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||q0),n.length>1&&n.sort(d||Hc),s.length>1&&s.sort(d||Hc)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Y0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Vc,i.set(n,[o])):s>=r.length?(o=new Vc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function $0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Je};break;case"SpotLight":t={position:new R,direction:new R,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function J0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let j0=0;function K0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Z0(i){const e=new $0,t=J0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new et,o=new et;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,v=0,y=0,x=0,w=0,T=0,C=0;l.sort(K0);for(let E=0,S=l.length;E<S;E++){const I=l[E],B=I.color,G=I.intensity,J=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=B.r*G,u+=B.g*G,d+=B.b*G;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],G);C++}else if(I.isDirectionalLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ne=I.shadow,V=t.get(I);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=I.shadow.matrix,v++}n.directional[f]=Y,f++}else if(I.isSpotLight){const Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(B).multiplyScalar(G),Y.distance=J,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[_]=Y;const ne=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,ne.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[_]=ne.matrix,I.castShadow){const V=t.get(I);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=X,x++}_++}else if(I.isRectAreaLight){const Y=e.get(I);Y.color.copy(B).multiplyScalar(G),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=Y,g++}else if(I.isPointLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const ne=I.shadow,V=t.get(I);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,V.shadowCameraNear=ne.camera.near,V.shadowCameraFar=ne.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=I.shadow.matrix,y++}n.point[m]=Y,m++}else if(I.isHemisphereLight){const Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(G),Y.groundColor.copy(I.groundColor).multiplyScalar(G),n.hemi[p]=Y,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==y||P.numSpotShadows!==x||P.numSpotMaps!==w||P.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,P.directionalLength=f,P.pointLength=m,P.spotLength=_,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=y,P.numSpotShadows=x,P.numSpotMaps=w,P.numLightProbes=C,n.version=j0++)}function c(l,h){let u=0,d=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const y=l[p];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function Wc(i){const e=new Z0(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Q0(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Wc(i),e.set(s,[a])):r>=o.length?(a=new Wc(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tg=`uniform sampler2D shadow_pass;
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
}`;function ng(i,e,t){let n=new pa;const s=new le,r=new le,o=new at,a=new Sd({depthPacking:Hu}),c=new Ed,l={},h=t.maxTextureSize,u={[Fn]:Ft,[Ft]:Fn,[on]:on},d=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:eg,fragmentShader:tg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new At;m.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pe(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=il;let p=this.type;this.render=function(T,C,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const E=i.getRenderTarget(),S=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Ln),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const G=p!==yn&&this.type===yn,J=p===yn&&this.type!==yn;for(let X=0,Y=T.length;X<Y;X++){const ne=T[X],V=ne.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const fe=V.getFrameExtents();if(s.multiply(fe),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/fe.x),s.x=r.x*fe.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/fe.y),s.y=r.y*fe.y,V.mapSize.y=r.y)),V.map===null||G===!0||J===!0){const Se=this.type!==yn?{minFilter:Ht,magFilter:Ht}:{};V.map!==null&&V.map.dispose(),V.map=new ri(s.x,s.y,Se),V.map.texture.name=ne.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const _e=V.getViewportCount();for(let Se=0;Se<_e;Se++){const ze=V.getViewport(Se);o.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),B.viewport(o),V.updateMatrices(ne,Se),n=V.getFrustum(),x(C,P,V.camera,ne,this.type)}V.isPointLightShadow!==!0&&this.type===yn&&v(V,P),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,S,I)};function v(T,C){const P=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ri(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,P,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,P,f,_,null)}function y(T,C,P,E){let S=null;const I=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)S=I;else if(S=P.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const B=S.uuid,G=C.uuid;let J=l[B];J===void 0&&(J={},l[B]=J);let X=J[G];X===void 0&&(X=S.clone(),J[G]=X,C.addEventListener("dispose",w)),S=X}if(S.visible=C.visible,S.wireframe=C.wireframe,E===yn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=i.properties.get(S);B.light=P}return S}function x(T,C,P,E,S){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===yn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const G=e.update(T),J=T.material;if(Array.isArray(J)){const X=G.groups;for(let Y=0,ne=X.length;Y<ne;Y++){const V=X[Y],fe=J[V.materialIndex];if(fe&&fe.visible){const _e=y(T,fe,E,S);T.onBeforeShadow(i,T,C,P,G,_e,V),i.renderBufferDirect(P,null,G,_e,T,V),T.onAfterShadow(i,T,C,P,G,_e,V)}}}else if(J.visible){const X=y(T,J,E,S);T.onBeforeShadow(i,T,C,P,G,X,null),i.renderBufferDirect(P,null,G,X,T,null),T.onAfterShadow(i,T,C,P,G,X,null)}}const B=T.children;for(let G=0,J=B.length;G<J;G++)x(B[G],C,P,E,S)}function w(T){T.target.removeEventListener("dispose",w);for(const P in l){const E=l[P],S=T.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const ig={[oo]:ao,[co]:ho,[lo]:fo,[Bi]:uo,[ao]:oo,[ho]:co,[fo]:lo,[uo]:Bi};function sg(i,e){function t(){let U=!1;const ce=new at;let me=null;const we=new at(0,0,0,0);return{setMask:function(oe){me!==oe&&!U&&(i.colorMask(oe,oe,oe,oe),me=oe)},setLocked:function(oe){U=oe},setClear:function(oe,te,Re,De,lt){lt===!0&&(oe*=De,te*=De,Re*=De),ce.set(oe,te,Re,De),we.equals(ce)===!1&&(i.clearColor(oe,te,Re,De),we.copy(ce))},reset:function(){U=!1,me=null,we.set(-1,0,0,0)}}}function n(){let U=!1,ce=!1,me=null,we=null,oe=null;return{setReversed:function(te){if(ce!==te){const Re=e.get("EXT_clip_control");te?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ce=te;const De=oe;oe=null,this.setClear(De)}},getReversed:function(){return ce},setTest:function(te){te?se(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(te){me!==te&&!U&&(i.depthMask(te),me=te)},setFunc:function(te){if(ce&&(te=ig[te]),we!==te){switch(te){case oo:i.depthFunc(i.NEVER);break;case ao:i.depthFunc(i.ALWAYS);break;case co:i.depthFunc(i.LESS);break;case Bi:i.depthFunc(i.LEQUAL);break;case lo:i.depthFunc(i.EQUAL);break;case uo:i.depthFunc(i.GEQUAL);break;case ho:i.depthFunc(i.GREATER);break;case fo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=te}},setLocked:function(te){U=te},setClear:function(te){oe!==te&&(ce&&(te=1-te),i.clearDepth(te),oe=te)},reset:function(){U=!1,me=null,we=null,oe=null,ce=!1}}}function s(){let U=!1,ce=null,me=null,we=null,oe=null,te=null,Re=null,De=null,lt=null;return{setTest:function(nt){U||(nt?se(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(nt){ce!==nt&&!U&&(i.stencilMask(nt),ce=nt)},setFunc:function(nt,pn,tn){(me!==nt||we!==pn||oe!==tn)&&(i.stencilFunc(nt,pn,tn),me=nt,we=pn,oe=tn)},setOp:function(nt,pn,tn){(te!==nt||Re!==pn||De!==tn)&&(i.stencilOp(nt,pn,tn),te=nt,Re=pn,De=tn)},setLocked:function(nt){U=nt},setClear:function(nt){lt!==nt&&(i.clearStencil(nt),lt=nt)},reset:function(){U=!1,ce=null,me=null,we=null,oe=null,te=null,Re=null,De=null,lt=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,y=null,x=null,w=null,T=null,C=new Je(0,0,0),P=0,E=!1,S=null,I=null,B=null,G=null,J=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ne=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(V)[1]),Y=ne>=1):V.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Y=ne>=2);let fe=null,_e={};const Se=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),Xe=new at().fromArray(Se),Ke=new at().fromArray(ze);function qe(U,ce,me,we){const oe=new Uint8Array(4),te=i.createTexture();i.bindTexture(U,te),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<me;Re++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(ce+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return te}const Z={};Z[i.TEXTURE_2D]=qe(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(Bi),j(!1),$(Ia),se(i.CULL_FACE),K(Ln);function se(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Me(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Ce(U,ce){return u[U]!==ce?(i.bindFramebuffer(U,ce),u[U]=ce,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ce),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ee(U,ce){let me=f,we=!1;if(U){me=d.get(ce),me===void 0&&(me=[],d.set(ce,me));const oe=U.textures;if(me.length!==oe.length||me[0]!==i.COLOR_ATTACHMENT0){for(let te=0,Re=oe.length;te<Re;te++)me[te]=i.COLOR_ATTACHMENT0+te;me.length=oe.length,we=!0}}else me[0]!==i.BACK&&(me[0]=i.BACK,we=!0);we&&i.drawBuffers(me)}function Ge(U){return m!==U?(i.useProgram(U),m=U,!0):!1}const tt={[jn]:i.FUNC_ADD,[mu]:i.FUNC_SUBTRACT,[gu]:i.FUNC_REVERSE_SUBTRACT};tt[_u]=i.MIN,tt[vu]=i.MAX;const D={[xu]:i.ZERO,[yu]:i.ONE,[Mu]:i.SRC_COLOR,[so]:i.SRC_ALPHA,[Au]:i.SRC_ALPHA_SATURATE,[Tu]:i.DST_COLOR,[Eu]:i.DST_ALPHA,[Su]:i.ONE_MINUS_SRC_COLOR,[ro]:i.ONE_MINUS_SRC_ALPHA,[wu]:i.ONE_MINUS_DST_COLOR,[bu]:i.ONE_MINUS_DST_ALPHA,[Cu]:i.CONSTANT_COLOR,[Ru]:i.ONE_MINUS_CONSTANT_COLOR,[Pu]:i.CONSTANT_ALPHA,[Iu]:i.ONE_MINUS_CONSTANT_ALPHA};function K(U,ce,me,we,oe,te,Re,De,lt,nt){if(U===Ln){_===!0&&(Me(i.BLEND),_=!1);return}if(_===!1&&(se(i.BLEND),_=!0),U!==pu){if(U!==g||nt!==E){if((p!==jn||x!==jn)&&(i.blendEquation(i.FUNC_ADD),p=jn,x=jn),nt)switch(U){case Li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFunc(i.ONE,i.ONE);break;case La:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ua:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case La:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ua:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,y=null,w=null,T=null,C.set(0,0,0),P=0,g=U,E=nt}return}oe=oe||ce,te=te||me,Re=Re||we,(ce!==p||oe!==x)&&(i.blendEquationSeparate(tt[ce],tt[oe]),p=ce,x=oe),(me!==v||we!==y||te!==w||Re!==T)&&(i.blendFuncSeparate(D[me],D[we],D[te],D[Re]),v=me,y=we,w=te,T=Re),(De.equals(C)===!1||lt!==P)&&(i.blendColor(De.r,De.g,De.b,lt),C.copy(De),P=lt),g=U,E=!1}function Q(U,ce){U.side===on?Me(i.CULL_FACE):se(i.CULL_FACE);let me=U.side===Ft;ce&&(me=!me),j(me),U.blending===Li&&U.transparent===!1?K(Ln):K(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const we=U.stencilWrite;a.setTest(we),we&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),re(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(U){S!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),S=U)}function $(U){U!==du?(se(i.CULL_FACE),U!==I&&(U===Ia?i.cullFace(i.BACK):U===fu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),I=U}function pe(U){U!==B&&(Y&&i.lineWidth(U),B=U)}function re(U,ce,me){U?(se(i.POLYGON_OFFSET_FILL),(G!==ce||J!==me)&&(i.polygonOffset(ce,me),G=ce,J=me)):Me(i.POLYGON_OFFSET_FILL)}function ue(U){U?se(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function Ue(U){U===void 0&&(U=i.TEXTURE0+X-1),fe!==U&&(i.activeTexture(U),fe=U)}function Oe(U,ce,me){me===void 0&&(fe===null?me=i.TEXTURE0+X-1:me=fe);let we=_e[me];we===void 0&&(we={type:void 0,texture:void 0},_e[me]=we),(we.type!==U||we.texture!==ce)&&(fe!==me&&(i.activeTexture(me),fe=me),i.bindTexture(U,ce||Z[U]),we.type=U,we.texture=ce)}function A(){const U=_e[fe];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function L(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(U){Xe.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Xe.copy(U))}function Te(U){Ke.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ke.copy(U))}function be(U,ce){let me=l.get(ce);me===void 0&&(me=new WeakMap,l.set(ce,me));let we=me.get(U);we===void 0&&(we=i.getUniformBlockIndex(ce,U.name),me.set(U,we))}function ve(U,ce){const we=l.get(ce).get(U);c.get(ce)!==we&&(i.uniformBlockBinding(ce,we,U.__bindingPointIndex),c.set(ce,we))}function ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},fe=null,_e={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,y=null,x=null,w=null,T=null,C=new Je(0,0,0),P=0,E=!1,S=null,I=null,B=null,G=null,J=null,Xe.set(0,0,i.canvas.width,i.canvas.height),Ke.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:Me,bindFramebuffer:Ce,drawBuffers:Ee,useProgram:Ge,setBlending:K,setMaterial:Q,setFlipSided:j,setCullFace:$,setLineWidth:pe,setPolygonOffset:re,setScissorTest:ue,activeTexture:Ue,bindTexture:Oe,unbindTexture:A,compressedTexImage2D:M,compressedTexImage3D:O,texImage2D:ge,texImage3D:ee,updateUBOMapping:be,uniformBlockBinding:ve,texStorage2D:z,texStorage3D:ae,texSubImage2D:W,texSubImage3D:ie,compressedTexSubImage2D:q,compressedTexSubImage3D:L,scissor:de,viewport:Te,reset:ke}}function rg(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new le,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,M){return f?new OffscreenCanvas(A,M):ar("canvas")}function _(A,M,O){let W=1;const ie=Oe(A);if((ie.width>O||ie.height>O)&&(W=O/Math.max(ie.width,ie.height)),W<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(W*ie.width),L=Math.floor(W*ie.height);u===void 0&&(u=m(q,L));const z=M?m(q,L):u;return z.width=q,z.height=L,z.getContext("2d").drawImage(A,0,0,q,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+q+"x"+L+")."),z}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,M,O,W,ie=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=M;if(M===i.RED&&(O===i.FLOAT&&(q=i.R32F),O===i.HALF_FLOAT&&(q=i.R16F),O===i.UNSIGNED_BYTE&&(q=i.R8)),M===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.R8UI),O===i.UNSIGNED_SHORT&&(q=i.R16UI),O===i.UNSIGNED_INT&&(q=i.R32UI),O===i.BYTE&&(q=i.R8I),O===i.SHORT&&(q=i.R16I),O===i.INT&&(q=i.R32I)),M===i.RG&&(O===i.FLOAT&&(q=i.RG32F),O===i.HALF_FLOAT&&(q=i.RG16F),O===i.UNSIGNED_BYTE&&(q=i.RG8)),M===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RG8UI),O===i.UNSIGNED_SHORT&&(q=i.RG16UI),O===i.UNSIGNED_INT&&(q=i.RG32UI),O===i.BYTE&&(q=i.RG8I),O===i.SHORT&&(q=i.RG16I),O===i.INT&&(q=i.RG32I)),M===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(q=i.RGB16UI),O===i.UNSIGNED_INT&&(q=i.RGB32UI),O===i.BYTE&&(q=i.RGB8I),O===i.SHORT&&(q=i.RGB16I),O===i.INT&&(q=i.RGB32I)),M===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),O===i.UNSIGNED_INT&&(q=i.RGBA32UI),O===i.BYTE&&(q=i.RGBA8I),O===i.SHORT&&(q=i.RGBA16I),O===i.INT&&(q=i.RGBA32I)),M===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),M===i.RGBA){const L=ie?rr:Qe.getTransfer(W);O===i.FLOAT&&(q=i.RGBA32F),O===i.HALF_FLOAT&&(q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(q=L===rt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(A,M){let O;return A?M===null||M===si||M===hs?O=i.DEPTH24_STENCIL8:M===cn?O=i.DEPTH32F_STENCIL8:M===us&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===si||M===hs?O=i.DEPTH_COMPONENT24:M===cn?O=i.DEPTH_COMPONENT32F:M===us&&(O=i.DEPTH_COMPONENT16),O}function w(A,M){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ht&&A.minFilter!==an?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function T(A){const M=A.target;M.removeEventListener("dispose",T),P(M),M.isVideoTexture&&h.delete(M)}function C(A){const M=A.target;M.removeEventListener("dispose",C),S(M)}function P(A){const M=n.get(A);if(M.__webglInit===void 0)return;const O=A.source,W=d.get(O);if(W){const ie=W[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&E(A),Object.keys(W).length===0&&d.delete(O)}n.remove(A)}function E(A){const M=n.get(A);i.deleteTexture(M.__webglTexture);const O=A.source,W=d.get(O);delete W[M.__cacheKey],o.memory.textures--}function S(A){const M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(M.__webglFramebuffer[W]))for(let ie=0;ie<M.__webglFramebuffer[W].length;ie++)i.deleteFramebuffer(M.__webglFramebuffer[W][ie]);else i.deleteFramebuffer(M.__webglFramebuffer[W]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[W])}else{if(Array.isArray(M.__webglFramebuffer))for(let W=0;W<M.__webglFramebuffer.length;W++)i.deleteFramebuffer(M.__webglFramebuffer[W]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let W=0;W<M.__webglColorRenderbuffer.length;W++)M.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[W]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=A.textures;for(let W=0,ie=O.length;W<ie;W++){const q=n.get(O[W]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(O[W])}n.remove(A)}let I=0;function B(){I=0}function G(){const A=I;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),I+=1,A}function J(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function X(A,M){const O=n.get(A);if(A.isVideoTexture&&ue(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const W=A.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(O,A,M);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+M)}function Y(A,M){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Z(O,A,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+M)}function ne(A,M){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Z(O,A,M);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+M)}function V(A,M){const O=n.get(A);if(A.version>0&&O.__version!==A.version){se(O,A,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+M)}const fe={[sr]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[go]:i.MIRRORED_REPEAT},_e={[Ht]:i.NEAREST,[ku]:i.NEAREST_MIPMAP_NEAREST,[Es]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Mr]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},Se={[Wu]:i.NEVER,[ju]:i.ALWAYS,[Xu]:i.LESS,[gl]:i.LEQUAL,[qu]:i.EQUAL,[Ju]:i.GEQUAL,[Yu]:i.GREATER,[$u]:i.NOTEQUAL};function ze(A,M){if(M.type===cn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===an||M.magFilter===Mr||M.magFilter===Es||M.magFilter===Qn||M.minFilter===an||M.minFilter===Mr||M.minFilter===Es||M.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,fe[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,fe[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,fe[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,_e[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,_e[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Se[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ht||M.minFilter!==Es&&M.minFilter!==Qn||M.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Xe(A,M){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",T));const W=M.source;let ie=d.get(W);ie===void 0&&(ie={},d.set(W,ie));const q=J(M);if(q!==A.__cacheKey){ie[q]===void 0&&(ie[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ie[q].usedTimes++;const L=ie[A.__cacheKey];L!==void 0&&(ie[A.__cacheKey].usedTimes--,L.usedTimes===0&&E(M)),A.__cacheKey=q,A.__webglTexture=ie[q].texture}return O}function Ke(A,M,O){return Math.floor(Math.floor(A/O)/M)}function qe(A,M,O,W){const q=A.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,O,W,M.data);else{q.sort((ee,de)=>ee.start-de.start);let L=0;for(let ee=1;ee<q.length;ee++){const de=q[L],Te=q[ee],be=de.start+de.count,ve=Ke(Te.start,M.width,4),ke=Ke(de.start,M.width,4);Te.start<=be+1&&ve===ke&&Ke(Te.start+Te.count-1,M.width,4)===ve?de.count=Math.max(de.count,Te.start+Te.count-de.start):(++L,q[L]=Te)}q.length=L+1;const z=i.getParameter(i.UNPACK_ROW_LENGTH),ae=i.getParameter(i.UNPACK_SKIP_PIXELS),ge=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let ee=0,de=q.length;ee<de;ee++){const Te=q[ee],be=Math.floor(Te.start/4),ve=Math.ceil(Te.count/4),ke=be%M.width,U=Math.floor(be/M.width),ce=ve,me=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ke),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,ke,U,ce,me,O,W,M.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,z),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),i.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function Z(A,M,O){let W=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(W=i.TEXTURE_3D);const ie=Xe(A,M),q=M.source;t.bindTexture(W,A.__webglTexture,i.TEXTURE0+O);const L=n.get(q);if(q.version!==L.__version||ie===!0){t.activeTexture(i.TEXTURE0+O);const z=Qe.getPrimaries(Qe.workingColorSpace),ae=M.colorSpace===Dn?null:Qe.getPrimaries(M.colorSpace),ge=M.colorSpace===Dn||z===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let ee=_(M.image,!1,s.maxTextureSize);ee=Ue(M,ee);const de=r.convert(M.format,M.colorSpace),Te=r.convert(M.type);let be=y(M.internalFormat,de,Te,M.colorSpace,M.isVideoTexture);ze(W,M);let ve;const ke=M.mipmaps,U=M.isVideoTexture!==!0,ce=L.__version===void 0||ie===!0,me=q.dataReady,we=w(M,ee);if(M.isDepthTexture)be=x(M.format===fs,M.type),ce&&(U?t.texStorage2D(i.TEXTURE_2D,1,be,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,be,ee.width,ee.height,0,de,Te,null));else if(M.isDataTexture)if(ke.length>0){U&&ce&&t.texStorage2D(i.TEXTURE_2D,we,be,ke[0].width,ke[0].height);for(let oe=0,te=ke.length;oe<te;oe++)ve=ke[oe],U?me&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ve.width,ve.height,de,Te,ve.data):t.texImage2D(i.TEXTURE_2D,oe,be,ve.width,ve.height,0,de,Te,ve.data);M.generateMipmaps=!1}else U?(ce&&t.texStorage2D(i.TEXTURE_2D,we,be,ee.width,ee.height),me&&qe(M,ee,de,Te)):t.texImage2D(i.TEXTURE_2D,0,be,ee.width,ee.height,0,de,Te,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){U&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,be,ke[0].width,ke[0].height,ee.depth);for(let oe=0,te=ke.length;oe<te;oe++)if(ve=ke[oe],M.format!==Zt)if(de!==null)if(U){if(me)if(M.layerUpdates.size>0){const Re=yc(ve.width,ve.height,M.format,M.type);for(const De of M.layerUpdates){const lt=ve.data.subarray(De*Re/ve.data.BYTES_PER_ELEMENT,(De+1)*Re/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,De,ve.width,ve.height,1,de,lt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,ve.width,ve.height,ee.depth,de,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,be,ve.width,ve.height,ee.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,ve.width,ve.height,ee.depth,de,Te,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,be,ve.width,ve.height,ee.depth,0,de,Te,ve.data)}else{U&&ce&&t.texStorage2D(i.TEXTURE_2D,we,be,ke[0].width,ke[0].height);for(let oe=0,te=ke.length;oe<te;oe++)ve=ke[oe],M.format!==Zt?de!==null?U?me&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,ve.width,ve.height,de,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,be,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?me&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ve.width,ve.height,de,Te,ve.data):t.texImage2D(i.TEXTURE_2D,oe,be,ve.width,ve.height,0,de,Te,ve.data)}else if(M.isDataArrayTexture)if(U){if(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,be,ee.width,ee.height,ee.depth),me)if(M.layerUpdates.size>0){const oe=yc(ee.width,ee.height,M.format,M.type);for(const te of M.layerUpdates){const Re=ee.data.subarray(te*oe/ee.data.BYTES_PER_ELEMENT,(te+1)*oe/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,ee.width,ee.height,1,de,Te,Re)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,de,Te,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,ee.width,ee.height,ee.depth,0,de,Te,ee.data);else if(M.isData3DTexture)U?(ce&&t.texStorage3D(i.TEXTURE_3D,we,be,ee.width,ee.height,ee.depth),me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,de,Te,ee.data)):t.texImage3D(i.TEXTURE_3D,0,be,ee.width,ee.height,ee.depth,0,de,Te,ee.data);else if(M.isFramebufferTexture){if(ce)if(U)t.texStorage2D(i.TEXTURE_2D,we,be,ee.width,ee.height);else{let oe=ee.width,te=ee.height;for(let Re=0;Re<we;Re++)t.texImage2D(i.TEXTURE_2D,Re,be,oe,te,0,de,Te,null),oe>>=1,te>>=1}}else if(ke.length>0){if(U&&ce){const oe=Oe(ke[0]);t.texStorage2D(i.TEXTURE_2D,we,be,oe.width,oe.height)}for(let oe=0,te=ke.length;oe<te;oe++)ve=ke[oe],U?me&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,de,Te,ve):t.texImage2D(i.TEXTURE_2D,oe,be,de,Te,ve);M.generateMipmaps=!1}else if(U){if(ce){const oe=Oe(ee);t.texStorage2D(i.TEXTURE_2D,we,be,oe.width,oe.height)}me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Te,ee)}else t.texImage2D(i.TEXTURE_2D,0,be,de,Te,ee);g(M)&&p(W),L.__version=q.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function se(A,M,O){if(M.image.length!==6)return;const W=Xe(A,M),ie=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);const q=n.get(ie);if(ie.version!==q.__version||W===!0){t.activeTexture(i.TEXTURE0+O);const L=Qe.getPrimaries(Qe.workingColorSpace),z=M.colorSpace===Dn?null:Qe.getPrimaries(M.colorSpace),ae=M.colorSpace===Dn||L===z?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const ge=M.isCompressedTexture||M.image[0].isCompressedTexture,ee=M.image[0]&&M.image[0].isDataTexture,de=[];for(let te=0;te<6;te++)!ge&&!ee?de[te]=_(M.image[te],!0,s.maxCubemapSize):de[te]=ee?M.image[te].image:M.image[te],de[te]=Ue(M,de[te]);const Te=de[0],be=r.convert(M.format,M.colorSpace),ve=r.convert(M.type),ke=y(M.internalFormat,be,ve,M.colorSpace),U=M.isVideoTexture!==!0,ce=q.__version===void 0||W===!0,me=ie.dataReady;let we=w(M,Te);ze(i.TEXTURE_CUBE_MAP,M);let oe;if(ge){U&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,ke,Te.width,Te.height);for(let te=0;te<6;te++){oe=de[te].mipmaps;for(let Re=0;Re<oe.length;Re++){const De=oe[Re];M.format!==Zt?be!==null?U?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,0,0,De.width,De.height,be,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,ke,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,0,0,De.width,De.height,be,ve,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,ke,De.width,De.height,0,be,ve,De.data)}}}else{if(oe=M.mipmaps,U&&ce){oe.length>0&&we++;const te=Oe(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,ke,te.width,te.height)}for(let te=0;te<6;te++)if(ee){U?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,de[te].width,de[te].height,be,ve,de[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ke,de[te].width,de[te].height,0,be,ve,de[te].data);for(let Re=0;Re<oe.length;Re++){const lt=oe[Re].image[te].image;U?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,0,0,lt.width,lt.height,be,ve,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,ke,lt.width,lt.height,0,be,ve,lt.data)}}else{U?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,be,ve,de[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ke,be,ve,de[te]);for(let Re=0;Re<oe.length;Re++){const De=oe[Re];U?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,0,0,be,ve,De.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,ke,be,ve,De.image[te])}}}g(M)&&p(i.TEXTURE_CUBE_MAP),q.__version=ie.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Me(A,M,O,W,ie,q){const L=r.convert(O.format,O.colorSpace),z=r.convert(O.type),ae=y(O.internalFormat,L,z,O.colorSpace),ge=n.get(M),ee=n.get(O);if(ee.__renderTarget=M,!ge.__hasExternalTextures){const de=Math.max(1,M.width>>q),Te=Math.max(1,M.height>>q);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,q,ae,de,Te,M.depth,0,L,z,null):t.texImage2D(ie,q,ae,de,Te,0,L,z,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),re(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,ie,ee.__webglTexture,0,pe(M)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,ie,ee.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(A,M,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){const W=M.depthTexture,ie=W&&W.isDepthTexture?W.type:null,q=x(M.stencilBuffer,ie),L=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=pe(M);re(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,z,q,M.width,M.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,z,q,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,q,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,L,i.RENDERBUFFER,A)}else{const W=M.textures;for(let ie=0;ie<W.length;ie++){const q=W[ie],L=r.convert(q.format,q.colorSpace),z=r.convert(q.type),ae=y(q.internalFormat,L,z,q.colorSpace),ge=pe(M);O&&re(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ae,M.width,M.height):re(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,ae,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ae,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=n.get(M.depthTexture);W.__renderTarget=M,(!W.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const ie=W.__webglTexture,q=pe(M);if(M.depthTexture.format===ds)re(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(M.depthTexture.format===fs)re(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ge(A){const M=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const W=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),W){const ie=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,W.removeEventListener("dispose",ie)};W.addEventListener("dispose",ie),M.__depthDisposeCallback=ie}M.__boundDepthTexture=W}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const W=A.texture.mipmaps;W&&W.length>0?Ee(M.__webglFramebuffer[0],A):Ee(M.__webglFramebuffer,A)}else if(O){M.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[W]),M.__webglDepthbuffer[W]===void 0)M.__webglDepthbuffer[W]=i.createRenderbuffer(),Ce(M.__webglDepthbuffer[W],A,!1);else{const ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,q)}}else{const W=A.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Ce(M.__webglDepthbuffer,A,!1);else{const ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(A,M,O){const W=n.get(A);M!==void 0&&Me(W.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ge(A)}function D(A){const M=A.texture,O=n.get(A),W=n.get(M);A.addEventListener("dispose",C);const ie=A.textures,q=A.isWebGLCubeRenderTarget===!0,L=ie.length>1;if(L||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=M.version,o.memory.textures++),q){O.__webglFramebuffer=[];for(let z=0;z<6;z++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[z]=[];for(let ae=0;ae<M.mipmaps.length;ae++)O.__webglFramebuffer[z][ae]=i.createFramebuffer()}else O.__webglFramebuffer[z]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let z=0;z<M.mipmaps.length;z++)O.__webglFramebuffer[z]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(L)for(let z=0,ae=ie.length;z<ae;z++){const ge=n.get(ie[z]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&re(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let z=0;z<ie.length;z++){const ae=ie[z];O.__webglColorRenderbuffer[z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[z]);const ge=r.convert(ae.format,ae.colorSpace),ee=r.convert(ae.type),de=y(ae.internalFormat,ge,ee,ae.colorSpace,A.isXRRenderTarget===!0),Te=pe(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,de,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.RENDERBUFFER,O.__webglColorRenderbuffer[z])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Ce(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),ze(i.TEXTURE_CUBE_MAP,M);for(let z=0;z<6;z++)if(M.mipmaps&&M.mipmaps.length>0)for(let ae=0;ae<M.mipmaps.length;ae++)Me(O.__webglFramebuffer[z][ae],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+z,ae);else Me(O.__webglFramebuffer[z],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);g(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(L){for(let z=0,ae=ie.length;z<ae;z++){const ge=ie[z],ee=n.get(ge);let de=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,ee.__webglTexture),ze(de,ge),Me(O.__webglFramebuffer,A,ge,i.COLOR_ATTACHMENT0+z,de,0),g(ge)&&p(de)}t.unbindTexture()}else{let z=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(z=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(z,W.__webglTexture),ze(z,M),M.mipmaps&&M.mipmaps.length>0)for(let ae=0;ae<M.mipmaps.length;ae++)Me(O.__webglFramebuffer[ae],A,M,i.COLOR_ATTACHMENT0,z,ae);else Me(O.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,z,0);g(M)&&p(z),t.unbindTexture()}A.depthBuffer&&Ge(A)}function K(A){const M=A.textures;for(let O=0,W=M.length;O<W;O++){const ie=M[O];if(g(ie)){const q=v(A),L=n.get(ie).__webglTexture;t.bindTexture(q,L),p(q),t.unbindTexture()}}}const Q=[],j=[];function $(A){if(A.samples>0){if(re(A)===!1){const M=A.textures,O=A.width,W=A.height;let ie=i.COLOR_BUFFER_BIT;const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=n.get(A),z=M.length>1;if(z)for(let ge=0;ge<M.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,L.__webglMultisampledFramebuffer);const ae=A.texture.mipmaps;ae&&ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,L.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,L.__webglFramebuffer);for(let ge=0;ge<M.length;ge++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,L.__webglColorRenderbuffer[ge]);const ee=n.get(M[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,O,W,0,0,O,W,ie,i.NEAREST),c===!0&&(Q.length=0,j.length=0,Q.push(i.COLOR_ATTACHMENT0+ge),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Q.push(q),j.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),z)for(let ge=0;ge<M.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,L.__webglColorRenderbuffer[ge]);const ee=n.get(M[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,L.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function pe(A){return Math.min(s.maxSamples,A.samples)}function re(A){const M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ue(A){const M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Ue(A,M){const O=A.colorSpace,W=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Gi&&O!==Dn&&(Qe.getTransfer(O)===rt?(W!==Zt||ie!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function Oe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=B,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=ne,this.setTextureCube=V,this.rebindTextures=tt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=re}function og(i,e){function t(n,s=Dn){let r;const o=Qe.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===sa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ra)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ul)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===cl)return i.BYTE;if(n===ll)return i.SHORT;if(n===us)return i.UNSIGNED_SHORT;if(n===ia)return i.INT;if(n===si)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===xs)return i.HALF_FLOAT;if(n===dl)return i.ALPHA;if(n===fl)return i.RGB;if(n===Zt)return i.RGBA;if(n===ds)return i.DEPTH_COMPONENT;if(n===fs)return i.DEPTH_STENCIL;if(n===oa)return i.RED;if(n===aa)return i.RED_INTEGER;if(n===pl)return i.RG;if(n===ca)return i.RG_INTEGER;if(n===la)return i.RGBA_INTEGER;if(n===Ks||n===Zs||n===Qs||n===er)if(o===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_o||n===vo||n===xo||n===yo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mo||n===So||n===Eo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Mo||n===So)return o===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Eo)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bo||n===To||n===wo||n===Ao||n===Co||n===Ro||n===Po||n===Io||n===Do||n===Lo||n===Uo||n===No||n===Fo||n===Oo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bo)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===To)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wo)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ao)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Co)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ro)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Po)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Io)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Do)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lo)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uo)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===No)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fo)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oo)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bo||n===zo||n===ko)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Bo)return o===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ko)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Go||n===Ho||n===Vo||n===Wo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cg=`
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

}`;class lg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Rl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Bn({vertexShader:ag,fragmentShader:cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pe(new ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ug extends ai{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",g=new lg,p={},v=t.getContextAttributes();let y=null,x=null;const w=[],T=[],C=new le;let P=null;const E=new Gt;E.viewport=new at;const S=new Gt;S.viewport=new at;const I=[E,S],B=new Cd;let G=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let se=w[Z];return se===void 0&&(se=new Hr,w[Z]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Z){let se=w[Z];return se===void 0&&(se=new Hr,w[Z]=se),se.getGripSpace()},this.getHand=function(Z){let se=w[Z];return se===void 0&&(se=new Hr,w[Z]=se),se.getHandSpace()};function X(Z){const se=T.indexOf(Z.inputSource);if(se===-1)return;const Me=w[se];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,l||o),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ne);for(let Z=0;Z<w.length;Z++){const se=T[Z];se!==null&&(T[Z]=null,w[Z].disconnect(se))}G=null,J=null,g.reset();for(const Z in p)delete p[Z];e.setRenderTarget(y),f=null,d=null,u=null,s=null,x=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ne),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ce=null,Ee=null;v.depth&&(Ee=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=v.stencil?fs:ds,Ce=v.stencil?hs:si);const Ge={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ge),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new ri(d.textureWidth,d.textureHeight,{format:Zt,type:hn,depthTexture:new Cl(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Me={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ri(f.framebufferWidth,f.framebufferHeight,{format:Zt,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),qe.setContext(s),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ne(Z){for(let se=0;se<Z.removed.length;se++){const Me=Z.removed[se],Ce=T.indexOf(Me);Ce>=0&&(T[Ce]=null,w[Ce].disconnect(Me))}for(let se=0;se<Z.added.length;se++){const Me=Z.added[se];let Ce=T.indexOf(Me);if(Ce===-1){for(let Ge=0;Ge<w.length;Ge++)if(Ge>=T.length){T.push(Me),Ce=Ge;break}else if(T[Ge]===null){T[Ge]=Me,Ce=Ge;break}if(Ce===-1)break}const Ee=w[Ce];Ee&&Ee.connect(Me)}}const V=new R,fe=new R;function _e(Z,se,Me){V.setFromMatrixPosition(se.matrixWorld),fe.setFromMatrixPosition(Me.matrixWorld);const Ce=V.distanceTo(fe),Ee=se.projectionMatrix.elements,Ge=Me.projectionMatrix.elements,tt=Ee[14]/(Ee[10]-1),D=Ee[14]/(Ee[10]+1),K=(Ee[9]+1)/Ee[5],Q=(Ee[9]-1)/Ee[5],j=(Ee[8]-1)/Ee[0],$=(Ge[8]+1)/Ge[0],pe=tt*j,re=tt*$,ue=Ce/(-j+$),Ue=ue*-j;if(se.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ue),Z.translateZ(ue),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ee[10]===-1)Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Oe=tt+ue,A=D+ue,M=pe-Ue,O=re+(Ce-Ue),W=K*D/A*Oe,ie=Q*D/A*Oe;Z.projectionMatrix.makePerspective(M,O,W,ie,Oe,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Se(Z,se){se===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(se.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let se=Z.near,Me=Z.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(Me=g.depthFar)),B.near=S.near=E.near=se,B.far=S.far=E.far=Me,(G!==B.near||J!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),G=B.near,J=B.far),B.layers.mask=Z.layers.mask|6,E.layers.mask=B.layers.mask&3,S.layers.mask=B.layers.mask&5;const Ce=Z.parent,Ee=B.cameras;Se(B,Ce);for(let Ge=0;Ge<Ee.length;Ge++)Se(Ee[Ge],Ce);Ee.length===2?_e(B,E,S):B.projectionMatrix.copy(E.projectionMatrix),ze(Z,B,Ce)};function ze(Z,se,Me){Me===null?Z.matrix.copy(se.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(se.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ps*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(Z){return p[Z]};let Xe=null;function Ke(Z,se){if(h=se.getViewerPose(l||o),m=se,h!==null){const Me=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ce=!1;Me.length!==B.cameras.length&&(B.cameras.length=0,Ce=!0);for(let D=0;D<Me.length;D++){const K=Me[D];let Q=null;if(f!==null)Q=f.getViewport(K);else{const $=u.getViewSubImage(d,K);Q=$.viewport,D===0&&(e.setRenderTargetTextures(x,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(x))}let j=I[D];j===void 0&&(j=new Gt,j.layers.enable(D),j.viewport=new at,I[D]=j),j.matrix.fromArray(K.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(K.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Q.x,Q.y,Q.width,Q.height),D===0&&(B.matrix.copy(j.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ce===!0&&B.cameras.push(j)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const D=u.getDepthInformation(Me[0]);D&&D.isValid&&D.texture&&g.init(D,s.renderState)}if(Ee&&Ee.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let D=0;D<Me.length;D++){const K=Me[D].camera;if(K){let Q=p[K];Q||(Q=new Rl,p[K]=Q);const j=u.getCameraImage(K);Q.sourceTexture=j}}}}for(let Me=0;Me<w.length;Me++){const Ce=T[Me],Ee=w[Me];Ce!==null&&Ee!==void 0&&Ee.update(Ce,se,l||o)}Xe&&Xe(Z,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),m=null}const qe=new Hl;qe.setAnimationLoop(Ke),this.setAnimationLoop=function(Z){Xe=Z},this.dispose=function(){}}}const Yn=new qt,hg=new et;function dg(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Sl(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,v,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ft&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ft&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,x=v.envMapRotation;y&&(g.envMap.value=y,Yn.copy(x),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),g.envMapRotation.value.setFromMatrix4(hg.makeRotationFromEuler(Yn)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ft&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fg(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function l(v,y){let x=s[v.id];x===void 0&&(m(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",g));const w=y.program;n.updateUBOMapping(v,w);const T=e.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function h(v){const y=u();v.__bindingPointIndex=y;const x=i.createBuffer(),w=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,w,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=s[v.id],x=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,C=x.length;T<C;T++){const P=Array.isArray(x[T])?x[T]:[x[T]];for(let E=0,S=P.length;E<S;E++){const I=P[E];if(f(I,T,E,w)===!0){const B=I.__offset,G=Array.isArray(I.value)?I.value:[I.value];let J=0;for(let X=0;X<G.length;X++){const Y=G[X],ne=_(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,B+J,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,J),J+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,x,w){const T=v.value,C=y+"_"+x;if(w[C]===void 0)return typeof T=="number"||typeof T=="boolean"?w[C]=T:w[C]=T.clone(),!0;{const P=w[C];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return w[C]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function m(v){const y=v.uniforms;let x=0;const w=16;for(let C=0,P=y.length;C<P;C++){const E=Array.isArray(y[C])?y[C]:[y[C]];for(let S=0,I=E.length;S<I;S++){const B=E[S],G=Array.isArray(B.value)?B.value:[B.value];for(let J=0,X=G.length;J<X;J++){const Y=G[J],ne=_(Y),V=x%w,fe=V%ne.boundary,_e=V+fe;x+=fe,_e!==0&&w-_e<ne.storage&&(x+=w-_e),B.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=ne.storage}}}const T=x%w;return T>0&&(x+=w-T),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class pg{constructor(e={}){const{canvas:t=fh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let w=!1;this._outputColorSpace=Nt;let T=0,C=0,P=null,E=-1,S=null;const I=new at,B=new at;let G=null;const J=new Je(0);let X=0,Y=t.width,ne=t.height,V=1,fe=null,_e=null;const Se=new at(0,0,Y,ne),ze=new at(0,0,Y,ne);let Xe=!1;const Ke=new pa;let qe=!1,Z=!1;const se=new et,Me=new R,Ce=new at,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function tt(){return P===null?V:1}let D=n;function K(b,N){return t.getContext(b,N)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${na}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",oe,!1),D===null){const N="webgl2";if(D=K(N,b),D===null)throw K(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Q,j,$,pe,re,ue,Ue,Oe,A,M,O,W,ie,q,L,z,ae,ge,ee,de,Te,be,ve,ke;function U(){Q=new bm(D),Q.init(),be=new og(D,Q),j=new _m(D,Q,e,be),$=new sg(D,Q),j.reversedDepthBuffer&&d&&$.buffers.depth.setReversed(!0),pe=new Am(D),re=new X0,ue=new rg(D,Q,$,re,j,be,pe),Ue=new xm(x),Oe=new Em(x),A=new Dd(D),ve=new mm(D,A),M=new Tm(D,A,pe,ve),O=new Rm(D,M,A,pe),ee=new Cm(D,j,ue),z=new vm(re),W=new W0(x,Ue,Oe,Q,j,ve,z),ie=new dg(x,re),q=new Y0,L=new Q0(Q),ge=new pm(x,Ue,Oe,$,O,f,c),ae=new ng(x,O,j),ke=new fg(D,pe,j,$),de=new gm(D,Q,pe),Te=new wm(D,Q,pe),pe.programs=W.programs,x.capabilities=j,x.extensions=Q,x.properties=re,x.renderLists=q,x.shadowMap=ae,x.state=$,x.info=pe}U();const ce=new ug(x,D);this.xr=ce,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=Q.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Q.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(Y,ne,!1))},this.getSize=function(b){return b.set(Y,ne)},this.setSize=function(b,N,k=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,ne=N,t.width=Math.floor(b*V),t.height=Math.floor(N*V),k===!0&&(t.style.width=b+"px",t.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(Y*V,ne*V).floor()},this.setDrawingBufferSize=function(b,N,k){Y=b,ne=N,V=k,t.width=Math.floor(b*k),t.height=Math.floor(N*k),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(Se)},this.setViewport=function(b,N,k,H){b.isVector4?Se.set(b.x,b.y,b.z,b.w):Se.set(b,N,k,H),$.viewport(I.copy(Se).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(ze)},this.setScissor=function(b,N,k,H){b.isVector4?ze.set(b.x,b.y,b.z,b.w):ze.set(b,N,k,H),$.scissor(B.copy(ze).multiplyScalar(V).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(b){$.setScissorTest(Xe=b)},this.setOpaqueSort=function(b){fe=b},this.setTransparentSort=function(b){_e=b},this.getClearColor=function(b){return b.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,k=!0){let H=0;if(b){let F=!1;if(P!==null){const he=P.texture.format;F=he===la||he===ca||he===aa}if(F){const he=P.texture.type,ye=he===hn||he===si||he===us||he===hs||he===sa||he===ra,Ie=ge.getClearColor(),Ae=ge.getClearAlpha(),Fe=Ie.r,Be=Ie.g,Le=Ie.b;ye?(m[0]=Fe,m[1]=Be,m[2]=Le,m[3]=Ae,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=Fe,_[1]=Be,_[2]=Le,_[3]=Ae,D.clearBufferiv(D.COLOR,0,_))}else H|=D.COLOR_BUFFER_BIT}N&&(H|=D.DEPTH_BUFFER_BIT),k&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ge.dispose(),q.dispose(),L.dispose(),re.dispose(),Ue.dispose(),Oe.dispose(),O.dispose(),ve.dispose(),ke.dispose(),W.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",tn),ce.removeEventListener("sessionend",ba),kn.stop()};function me(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const b=pe.autoReset,N=ae.enabled,k=ae.autoUpdate,H=ae.needsUpdate,F=ae.type;U(),pe.autoReset=b,ae.enabled=N,ae.autoUpdate=k,ae.needsUpdate=H,ae.type=F}function oe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function te(b){const N=b.target;N.removeEventListener("dispose",te),Re(N)}function Re(b){De(b),re.remove(b)}function De(b){const N=re.get(b).programs;N!==void 0&&(N.forEach(function(k){W.releaseProgram(k)}),b.isShaderMaterial&&W.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,k,H,F,he){N===null&&(N=Ee);const ye=F.isMesh&&F.matrixWorld.determinant()<0,Ie=Kl(b,N,k,H,F);$.setMaterial(H,ye);let Ae=k.index,Fe=1;if(H.wireframe===!0){if(Ae=M.getWireframeAttribute(k),Ae===void 0)return;Fe=2}const Be=k.drawRange,Le=k.attributes.position;let Ye=Be.start*Fe,st=(Be.start+Be.count)*Fe;he!==null&&(Ye=Math.max(Ye,he.start*Fe),st=Math.min(st,(he.start+he.count)*Fe)),Ae!==null?(Ye=Math.max(Ye,0),st=Math.min(st,Ae.count)):Le!=null&&(Ye=Math.max(Ye,0),st=Math.min(st,Le.count));const mt=st-Ye;if(mt<0||mt===1/0)return;ve.setup(F,H,Ie,k,Ae);let ut,ct=de;if(Ae!==null&&(ut=A.get(Ae),ct=Te,ct.setIndex(ut)),F.isMesh)H.wireframe===!0?($.setLineWidth(H.wireframeLinewidth*tt()),ct.setMode(D.LINES)):ct.setMode(D.TRIANGLES);else if(F.isLine){let Ne=H.linewidth;Ne===void 0&&(Ne=1),$.setLineWidth(Ne*tt()),F.isLineSegments?ct.setMode(D.LINES):F.isLineLoop?ct.setMode(D.LINE_LOOP):ct.setMode(D.LINE_STRIP)}else F.isPoints?ct.setMode(D.POINTS):F.isSprite&&ct.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))ct.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ne=F._multiDrawStarts,dt=F._multiDrawCounts,Ze=F._multiDrawCount,Ot=Ae?A.get(Ae).bytesPerElement:1,hi=re.get(H).currentProgram.getUniforms();for(let Bt=0;Bt<Ze;Bt++)hi.setValue(D,"_gl_DrawID",Bt),ct.render(Ne[Bt]/Ot,dt[Bt])}else if(F.isInstancedMesh)ct.renderInstances(Ye,mt,F.count);else if(k.isInstancedBufferGeometry){const Ne=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,dt=Math.min(k.instanceCount,Ne);ct.renderInstances(Ye,mt,dt)}else ct.render(Ye,mt)};function lt(b,N,k){b.transparent===!0&&b.side===on&&b.forceSinglePass===!1?(b.side=Ft,b.needsUpdate=!0,Ms(b,N,k),b.side=Fn,b.needsUpdate=!0,Ms(b,N,k),b.side=on):Ms(b,N,k)}this.compile=function(b,N,k=null){k===null&&(k=b),p=L.get(k),p.init(N),y.push(p),k.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),b!==k&&b.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const H=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const he=F.material;if(he)if(Array.isArray(he))for(let ye=0;ye<he.length;ye++){const Ie=he[ye];lt(Ie,k,F),H.add(Ie)}else lt(he,k,F),H.add(he)}),p=y.pop(),H},this.compileAsync=function(b,N,k=null){const H=this.compile(b,N,k);return new Promise(F=>{function he(){if(H.forEach(function(ye){re.get(ye).currentProgram.isReady()&&H.delete(ye)}),H.size===0){F(b);return}setTimeout(he,10)}Q.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let nt=null;function pn(b){nt&&nt(b)}function tn(){kn.stop()}function ba(){kn.start()}const kn=new Hl;kn.setAnimationLoop(pn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(b){nt=b,ce.setAnimationLoop(b),b===null?kn.stop():kn.start()},ce.addEventListener("sessionstart",tn),ce.addEventListener("sessionend",ba),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(N),N=ce.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,N,P),p=L.get(b,y.length),p.init(N),y.push(p),se.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ke.setFromProjectionMatrix(se,ln,N.reversedDepth),Z=this.localClippingEnabled,qe=z.init(this.clippingPlanes,Z),g=q.get(b,v.length),g.init(),v.push(g),ce.enabled===!0&&ce.isPresenting===!0){const he=x.xr.getDepthSensingMesh();he!==null&&vr(he,N,-1/0,x.sortObjects)}vr(b,N,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(fe,_e),Ge=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ge&&ge.addToRenderList(g,b),this.info.render.frame++,qe===!0&&z.beginShadows();const k=p.state.shadowsArray;ae.render(k,b,N),qe===!0&&z.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=g.opaque,F=g.transmissive;if(p.setupLights(),N.isArrayCamera){const he=N.cameras;if(F.length>0)for(let ye=0,Ie=he.length;ye<Ie;ye++){const Ae=he[ye];wa(H,F,b,Ae)}Ge&&ge.render(b);for(let ye=0,Ie=he.length;ye<Ie;ye++){const Ae=he[ye];Ta(g,b,Ae,Ae.viewport)}}else F.length>0&&wa(H,F,b,N),Ge&&ge.render(b),Ta(g,b,N);P!==null&&C===0&&(ue.updateMultisampleRenderTarget(P),ue.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(x,b,N),ve.resetDefaultState(),E=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],qe===!0&&z.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function vr(b,N,k,H){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ke.intersectsSprite(b)){H&&Ce.setFromMatrixPosition(b.matrixWorld).applyMatrix4(se);const ye=O.update(b),Ie=b.material;Ie.visible&&g.push(b,ye,Ie,k,Ce.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ke.intersectsObject(b))){const ye=O.update(b),Ie=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ce.copy(b.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ce.copy(ye.boundingSphere.center)),Ce.applyMatrix4(b.matrixWorld).applyMatrix4(se)),Array.isArray(Ie)){const Ae=ye.groups;for(let Fe=0,Be=Ae.length;Fe<Be;Fe++){const Le=Ae[Fe],Ye=Ie[Le.materialIndex];Ye&&Ye.visible&&g.push(b,ye,Ye,k,Ce.z,Le)}}else Ie.visible&&g.push(b,ye,Ie,k,Ce.z,null)}}const he=b.children;for(let ye=0,Ie=he.length;ye<Ie;ye++)vr(he[ye],N,k,H)}function Ta(b,N,k,H){const F=b.opaque,he=b.transmissive,ye=b.transparent;p.setupLightsView(k),qe===!0&&z.setGlobalState(x.clippingPlanes,k),H&&$.viewport(I.copy(H)),F.length>0&&ys(F,N,k),he.length>0&&ys(he,N,k),ye.length>0&&ys(ye,N,k),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function wa(b,N,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new ri(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?xs:hn,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const he=p.state.transmissionRenderTarget[H.id],ye=H.viewport||I;he.setSize(ye.z*x.transmissionResolutionScale,ye.w*x.transmissionResolutionScale);const Ie=x.getRenderTarget(),Ae=x.getActiveCubeFace(),Fe=x.getActiveMipmapLevel();x.setRenderTarget(he),x.getClearColor(J),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),Ge&&ge.render(k);const Be=x.toneMapping;x.toneMapping=Un;const Le=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),qe===!0&&z.setGlobalState(x.clippingPlanes,H),ys(b,k,H),ue.updateMultisampleRenderTarget(he),ue.updateRenderTargetMipmap(he),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let st=0,mt=N.length;st<mt;st++){const ut=N[st],ct=ut.object,Ne=ut.geometry,dt=ut.material,Ze=ut.group;if(dt.side===on&&ct.layers.test(H.layers)){const Ot=dt.side;dt.side=Ft,dt.needsUpdate=!0,Aa(ct,k,H,Ne,dt,Ze),dt.side=Ot,dt.needsUpdate=!0,Ye=!0}}Ye===!0&&(ue.updateMultisampleRenderTarget(he),ue.updateRenderTargetMipmap(he))}x.setRenderTarget(Ie,Ae,Fe),x.setClearColor(J,X),Le!==void 0&&(H.viewport=Le),x.toneMapping=Be}function ys(b,N,k){const H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,he=b.length;F<he;F++){const ye=b[F],Ie=ye.object,Ae=ye.geometry,Fe=ye.group;let Be=ye.material;Be.allowOverride===!0&&H!==null&&(Be=H),Ie.layers.test(k.layers)&&Aa(Ie,N,k,Ae,Be,Fe)}}function Aa(b,N,k,H,F,he){b.onBeforeRender(x,N,k,H,F,he),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(x,N,k,H,b,he),F.transparent===!0&&F.side===on&&F.forceSinglePass===!1?(F.side=Ft,F.needsUpdate=!0,x.renderBufferDirect(k,N,H,F,b,he),F.side=Fn,F.needsUpdate=!0,x.renderBufferDirect(k,N,H,F,b,he),F.side=on):x.renderBufferDirect(k,N,H,F,b,he),b.onAfterRender(x,N,k,H,F,he)}function Ms(b,N,k){N.isScene!==!0&&(N=Ee);const H=re.get(b),F=p.state.lights,he=p.state.shadowsArray,ye=F.state.version,Ie=W.getParameters(b,F.state,he,N,k),Ae=W.getProgramCacheKey(Ie);let Fe=H.programs;H.environment=b.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(b.isMeshStandardMaterial?Oe:Ue).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Fe===void 0&&(b.addEventListener("dispose",te),Fe=new Map,H.programs=Fe);let Be=Fe.get(Ae);if(Be!==void 0){if(H.currentProgram===Be&&H.lightsStateVersion===ye)return Ra(b,Ie),Be}else Ie.uniforms=W.getUniforms(b),b.onBeforeCompile(Ie,x),Be=W.acquireProgram(Ie,Ae),Fe.set(Ae,Be),H.uniforms=Ie.uniforms;const Le=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Le.clippingPlanes=z.uniform),Ra(b,Ie),H.needsLights=Ql(b),H.lightsStateVersion=ye,H.needsLights&&(Le.ambientLightColor.value=F.state.ambient,Le.lightProbe.value=F.state.probe,Le.directionalLights.value=F.state.directional,Le.directionalLightShadows.value=F.state.directionalShadow,Le.spotLights.value=F.state.spot,Le.spotLightShadows.value=F.state.spotShadow,Le.rectAreaLights.value=F.state.rectArea,Le.ltc_1.value=F.state.rectAreaLTC1,Le.ltc_2.value=F.state.rectAreaLTC2,Le.pointLights.value=F.state.point,Le.pointLightShadows.value=F.state.pointShadow,Le.hemisphereLights.value=F.state.hemi,Le.directionalShadowMap.value=F.state.directionalShadowMap,Le.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Le.spotShadowMap.value=F.state.spotShadowMap,Le.spotLightMatrix.value=F.state.spotLightMatrix,Le.spotLightMap.value=F.state.spotLightMap,Le.pointShadowMap.value=F.state.pointShadowMap,Le.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Be,H.uniformsList=null,Be}function Ca(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=tr.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Ra(b,N){const k=re.get(b);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function Kl(b,N,k,H,F){N.isScene!==!0&&(N=Ee),ue.resetTextureUnits();const he=N.fog,ye=H.isMeshStandardMaterial?N.environment:null,Ie=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Gi,Ae=(H.isMeshStandardMaterial?Oe:Ue).get(H.envMap||ye),Fe=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Be=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Le=!!k.morphAttributes.position,Ye=!!k.morphAttributes.normal,st=!!k.morphAttributes.color;let mt=Un;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(mt=x.toneMapping);const ut=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ct=ut!==void 0?ut.length:0,Ne=re.get(H),dt=p.state.lights;if(qe===!0&&(Z===!0||b!==S)){const Ct=b===S&&H.id===E;z.setState(H,b,Ct)}let Ze=!1;H.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==dt.state.version||Ne.outputColorSpace!==Ie||F.isBatchedMesh&&Ne.batching===!1||!F.isBatchedMesh&&Ne.batching===!0||F.isBatchedMesh&&Ne.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ne.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ne.instancing===!1||!F.isInstancedMesh&&Ne.instancing===!0||F.isSkinnedMesh&&Ne.skinning===!1||!F.isSkinnedMesh&&Ne.skinning===!0||F.isInstancedMesh&&Ne.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ne.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ne.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ne.instancingMorph===!1&&F.morphTexture!==null||Ne.envMap!==Ae||H.fog===!0&&Ne.fog!==he||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==z.numPlanes||Ne.numIntersection!==z.numIntersection)||Ne.vertexAlphas!==Fe||Ne.vertexTangents!==Be||Ne.morphTargets!==Le||Ne.morphNormals!==Ye||Ne.morphColors!==st||Ne.toneMapping!==mt||Ne.morphTargetsCount!==ct)&&(Ze=!0):(Ze=!0,Ne.__version=H.version);let Ot=Ne.currentProgram;Ze===!0&&(Ot=Ms(H,N,F));let hi=!1,Bt=!1,Yi=!1;const ft=Ot.getUniforms(),Vt=Ne.uniforms;if($.useProgram(Ot.program)&&(hi=!0,Bt=!0,Yi=!0),H.id!==E&&(E=H.id,Bt=!0),hi||S!==b){$.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ft.setValue(D,"projectionMatrix",b.projectionMatrix),ft.setValue(D,"viewMatrix",b.matrixWorldInverse);const Dt=ft.map.cameraPosition;Dt!==void 0&&Dt.setValue(D,Me.setFromMatrixPosition(b.matrixWorld)),j.logarithmicDepthBuffer&&ft.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ft.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Bt=!0,Yi=!0)}if(F.isSkinnedMesh){ft.setOptional(D,F,"bindMatrix"),ft.setOptional(D,F,"bindMatrixInverse");const Ct=F.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),ft.setValue(D,"boneTexture",Ct.boneTexture,ue))}F.isBatchedMesh&&(ft.setOptional(D,F,"batchingTexture"),ft.setValue(D,"batchingTexture",F._matricesTexture,ue),ft.setOptional(D,F,"batchingIdTexture"),ft.setValue(D,"batchingIdTexture",F._indirectTexture,ue),ft.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&ft.setValue(D,"batchingColorTexture",F._colorsTexture,ue));const Wt=k.morphAttributes;if((Wt.position!==void 0||Wt.normal!==void 0||Wt.color!==void 0)&&ee.update(F,k,Ot),(Bt||Ne.receiveShadow!==F.receiveShadow)&&(Ne.receiveShadow=F.receiveShadow,ft.setValue(D,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Vt.envMap.value=Ae,Vt.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(Vt.envMapIntensity.value=N.environmentIntensity),Bt&&(ft.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ne.needsLights&&Zl(Vt,Yi),he&&H.fog===!0&&ie.refreshFogUniforms(Vt,he),ie.refreshMaterialUniforms(Vt,H,V,ne,p.state.transmissionRenderTarget[b.id]),tr.upload(D,Ca(Ne),Vt,ue)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(tr.upload(D,Ca(Ne),Vt,ue),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ft.setValue(D,"center",F.center),ft.setValue(D,"modelViewMatrix",F.modelViewMatrix),ft.setValue(D,"normalMatrix",F.normalMatrix),ft.setValue(D,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ct=H.uniformsGroups;for(let Dt=0,xr=Ct.length;Dt<xr;Dt++){const Gn=Ct[Dt];ke.update(Gn,Ot),ke.bind(Gn,Ot)}}return Ot}function Zl(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Ql(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,N,k){const H=re.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),re.get(b.texture).__webglTexture=N,re.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:k,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){const k=re.get(b);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0};const eu=D.createFramebuffer();this.setRenderTarget=function(b,N=0,k=0){P=b,T=N,C=k;let H=!0,F=null,he=!1,ye=!1;if(b){const Ae=re.get(b);if(Ae.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(D.FRAMEBUFFER,null),H=!1;else if(Ae.__webglFramebuffer===void 0)ue.setupRenderTarget(b);else if(Ae.__hasExternalTextures)ue.rebindTextures(b,re.get(b.texture).__webglTexture,re.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Le=b.depthTexture;if(Ae.__boundDepthTexture!==Le){if(Le!==null&&re.has(Le)&&(b.width!==Le.image.width||b.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(b)}}const Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ye=!0);const Be=re.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Be[N])?F=Be[N][k]:F=Be[N],he=!0):b.samples>0&&ue.useMultisampledRTT(b)===!1?F=re.get(b).__webglMultisampledFramebuffer:Array.isArray(Be)?F=Be[k]:F=Be,I.copy(b.viewport),B.copy(b.scissor),G=b.scissorTest}else I.copy(Se).multiplyScalar(V).floor(),B.copy(ze).multiplyScalar(V).floor(),G=Xe;if(k!==0&&(F=eu),$.bindFramebuffer(D.FRAMEBUFFER,F)&&H&&$.drawBuffers(b,F),$.viewport(I),$.scissor(B),$.setScissorTest(G),he){const Ae=re.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ae.__webglTexture,k)}else if(ye){const Ae=N;for(let Fe=0;Fe<b.textures.length;Fe++){const Be=re.get(b.textures[Fe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Fe,Be.__webglTexture,k,Ae)}}else if(b!==null&&k!==0){const Ae=re.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ae.__webglTexture,k)}E=-1},this.readRenderTargetPixels=function(b,N,k,H,F,he,ye,Ie=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){$.bindFramebuffer(D.FRAMEBUFFER,Ae);try{const Fe=b.textures[Ie],Be=Fe.format,Le=Fe.type;if(!j.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-H&&k>=0&&k<=b.height-F&&(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ie),D.readPixels(N,k,H,F,be.convert(Be),be.convert(Le),he))}finally{const Fe=P!==null?re.get(P).__webglFramebuffer:null;$.bindFramebuffer(D.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(b,N,k,H,F,he,ye,Ie=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae)if(N>=0&&N<=b.width-H&&k>=0&&k<=b.height-F){$.bindFramebuffer(D.FRAMEBUFFER,Ae);const Fe=b.textures[Ie],Be=Fe.format,Le=Fe.type;if(!j.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ye),D.bufferData(D.PIXEL_PACK_BUFFER,he.byteLength,D.STREAM_READ),b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ie),D.readPixels(N,k,H,F,be.convert(Be),be.convert(Le),0);const st=P!==null?re.get(P).__webglFramebuffer:null;$.bindFramebuffer(D.FRAMEBUFFER,st);const mt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await ph(D,mt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ye),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,he),D.deleteBuffer(Ye),D.deleteSync(mt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,k=0){const H=Math.pow(2,-k),F=Math.floor(b.image.width*H),he=Math.floor(b.image.height*H),ye=N!==null?N.x:0,Ie=N!==null?N.y:0;ue.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,ye,Ie,F,he),$.unbindTexture()};const tu=D.createFramebuffer(),nu=D.createFramebuffer();this.copyTextureToTexture=function(b,N,k=null,H=null,F=0,he=null){he===null&&(F!==0?(ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=F,F=0):he=0);let ye,Ie,Ae,Fe,Be,Le,Ye,st,mt;const ut=b.isCompressedTexture?b.mipmaps[he]:b.image;if(k!==null)ye=k.max.x-k.min.x,Ie=k.max.y-k.min.y,Ae=k.isBox3?k.max.z-k.min.z:1,Fe=k.min.x,Be=k.min.y,Le=k.isBox3?k.min.z:0;else{const Wt=Math.pow(2,-F);ye=Math.floor(ut.width*Wt),Ie=Math.floor(ut.height*Wt),b.isDataArrayTexture?Ae=ut.depth:b.isData3DTexture?Ae=Math.floor(ut.depth*Wt):Ae=1,Fe=0,Be=0,Le=0}H!==null?(Ye=H.x,st=H.y,mt=H.z):(Ye=0,st=0,mt=0);const ct=be.convert(N.format),Ne=be.convert(N.type);let dt;N.isData3DTexture?(ue.setTexture3D(N,0),dt=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(ue.setTexture2DArray(N,0),dt=D.TEXTURE_2D_ARRAY):(ue.setTexture2D(N,0),dt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Ze=D.getParameter(D.UNPACK_ROW_LENGTH),Ot=D.getParameter(D.UNPACK_IMAGE_HEIGHT),hi=D.getParameter(D.UNPACK_SKIP_PIXELS),Bt=D.getParameter(D.UNPACK_SKIP_ROWS),Yi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ut.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Fe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Be),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Le);const ft=b.isDataArrayTexture||b.isData3DTexture,Vt=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){const Wt=re.get(b),Ct=re.get(N),Dt=re.get(Wt.__renderTarget),xr=re.get(Ct.__renderTarget);$.bindFramebuffer(D.READ_FRAMEBUFFER,Dt.__webglFramebuffer),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,xr.__webglFramebuffer);for(let Gn=0;Gn<Ae;Gn++)ft&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,re.get(b).__webglTexture,F,Le+Gn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,re.get(N).__webglTexture,he,mt+Gn)),D.blitFramebuffer(Fe,Be,ye,Ie,Ye,st,ye,Ie,D.DEPTH_BUFFER_BIT,D.NEAREST);$.bindFramebuffer(D.READ_FRAMEBUFFER,null),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(F!==0||b.isRenderTargetTexture||re.has(b)){const Wt=re.get(b),Ct=re.get(N);$.bindFramebuffer(D.READ_FRAMEBUFFER,tu),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,nu);for(let Dt=0;Dt<Ae;Dt++)ft?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Wt.__webglTexture,F,Le+Dt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Wt.__webglTexture,F),Vt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ct.__webglTexture,he,mt+Dt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ct.__webglTexture,he),F!==0?D.blitFramebuffer(Fe,Be,ye,Ie,Ye,st,ye,Ie,D.COLOR_BUFFER_BIT,D.NEAREST):Vt?D.copyTexSubImage3D(dt,he,Ye,st,mt+Dt,Fe,Be,ye,Ie):D.copyTexSubImage2D(dt,he,Ye,st,Fe,Be,ye,Ie);$.bindFramebuffer(D.READ_FRAMEBUFFER,null),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Vt?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(dt,he,Ye,st,mt,ye,Ie,Ae,ct,Ne,ut.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(dt,he,Ye,st,mt,ye,Ie,Ae,ct,ut.data):D.texSubImage3D(dt,he,Ye,st,mt,ye,Ie,Ae,ct,Ne,ut):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,he,Ye,st,ye,Ie,ct,Ne,ut.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,he,Ye,st,ut.width,ut.height,ct,ut.data):D.texSubImage2D(D.TEXTURE_2D,he,Ye,st,ye,Ie,ct,Ne,ut);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ze),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ot),D.pixelStorei(D.UNPACK_SKIP_PIXELS,hi),D.pixelStorei(D.UNPACK_SKIP_ROWS,Bt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Yi),he===0&&N.generateMipmaps&&D.generateMipmap(dt),$.unbindTexture()},this.initRenderTarget=function(b){re.get(b).__webglFramebuffer===void 0&&ue.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ue.setTextureCube(b,0):b.isData3DTexture?ue.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ue.setTexture2DArray(b,0):ue.setTexture2D(b,0),$.unbindTexture()},this.resetState=function(){T=0,C=0,P=null,$.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const It={centerX:2.65,centerZ:.5,width:2.8,depth:4.3,scale:1.65,columns:3,startX:1.8,startZ:-1.15,gapX:.85,gapZ:.66};function Xc(i){const t=new Uint8Array(16384);for(let s=0;s<64;s++)for(let r=0;r<64;r++){const o=(s*64+r)*4,a=(r*73+s*151+r*s*13)%19,c=i==="pcb"&&(r%16===3&&s%32<25||s%16===6&&r%32<24),l=i==="metal"?220+a+(s%3===0?8:0):c?245:184+a;t[o]=t[o+1]=t[o+2]=l,t[o+3]=255}const n=new Tl(t,64,64);return n.needsUpdate=!0,n.wrapS=n.wrapT=sr,n.repeat.set(3,3),n.colorSpace=Nt,n}function Ii(i,e=.1,t=.045){const n=new ht;n.name=`${i}-port`;const s=new $e({color:"#84969d",metalness:.8,roughness:.3}),r=new $e({color:"#080d12",roughness:.8}),o=new $e({color:i==="usb"?"#3777a9":"#cbb16c",metalness:.4,roughness:.4}),a=(c,l,h,u,d,f,m)=>{const _=new Pe(new gt(c,l,h),m);_.position.set(u,d,f),n.add(_)};if(i==="audio"){const c=new Pe(new bn(e*.36,e*.08,8,20),s);n.add(c);const l=new Pe(new ma(e*.3,20),r);l.position.z=-.004,n.add(l)}else{a(e,t,.008,0,0,-.008,r);for(const c of[-e/2,e/2])a(.007,t+.012,.02,c,0,0,s);for(const c of[-t/2,t/2])a(e,.006,.02,0,c,0,s);if(i==="power")for(const c of[-e*.25,0,e*.25])a(.01,t*.32,.012,c,0,0,o);else a(e*.72,.007,.012,0,-t*.15,0,o)}return n}function Yl(i){const e=new Qt;e.moveTo(.28,-.1),e.bezierCurveTo(.55,-.16,.83,-.02,.96,.16),e.quadraticCurveTo(.95,.27,.88,.39),e.bezierCurveTo(.75,.2,.54,.04,.29,.045),e.closePath();const t=new un(e,{depth:.025,steps:1,curveSegments:20,bevelEnabled:!0,bevelSegments:2,bevelSize:.004,bevelThickness:.004});t.translate(0,0,-.0125);const n=t.getAttribute("position");for(let s=0;s<n.count;s++){const r=n.getX(s),o=n.getY(s);n.setZ(s,n.getZ(s)+.2*o-.055*r*r)}return t.computeVertexNormals(),t.scale(i,i,i),t}function mg(i="standard",e="ivory",t="plain",n=!1,s=!0,r=!0,o="solid"){const a=new ht,c=Qo(i),l=new ht;l.name="chassis",a.add(l);let h=a;const u=new $e({color:fr.find(L=>L.id===e).color,metalness:.72,roughness:.32}),d=new $e({color:"#34434b",metalness:.7,roughness:.4}),f=new $e({color:"#171f25",roughness:.86}),m=new $e({color:"#253c3f",roughness:.95}),_=new $e({color:"#a17c58",roughness:.74}),g=new $e({color:"#d5af63",metalness:.7,roughness:.32}),p=new $e({color:"#b4e5c5",emissive:"#4b916b",emissiveIntensity:.35});function v(L,z,ae,ge,ee,de,Te){const be=new Pe(new gt(L,z,ae),Te);return be.position.set(ge,ee,de),be.castShadow=!0,be.receiveShadow=!0,h.add(be),be}function y(L,z,ae,ge,ee,de){const Te=new Pe(new Ut(L,L,z,24),de);return Te.position.set(ae,ge,ee),Te.castShadow=!0,h.add(Te),Te}v(8.8,.18,5.5,.3,0,0,_),v(8.7,.1,5.4,.3,-.13,0,d);for(const L of[-2.9,2.9])for(const z of[-1.35,1.35])v(.13,1.9,.13,L,-1.1,z,d);v(3.7,.025,2.6,-.55,.105,0,m);const x=[];for(let L=0;L<19;L++)x.push(-2.3+L*.19,.121,-1.2,-2.3+L*.19,.121,1.2);for(let L=0;L<14;L++)x.push(-2.35,.121,-1.2+L*.19,1.25,.121,-1.2+L*.19);const w=new Al(new At().setAttribute("position",new it(x,3)),new wl({color:"#416263",transparent:!0,opacity:.4}));a.add(w);const T=-.55;h=l;for(const L of[T-1.04,T+1.04])for(const z of[-.47,.47])v(.24,.1,.25,L,.19,z,f);v(2.55,.09,1.28,T,.285,0,u);for(const L of[-.55,.55])v(2.55,.08,.18,T,2.72,L,u);for(const L of[T-1.17,T+1.17])v(.21,.08,.92,L,2.72,0,u);for(let L=0;L<16;L++)v(.062,.035,.91,T-1.02+L*.136,2.72,0,d);const C=new ht;C.name="roof-grille",C.position.set(T,2.746,0),l.add(C);const P=2.14,E=.92,S=.0225,I=.0035,B=Math.floor(P/S),G=Math.floor(E/S),J=new $n(new gt(I,.006,E),d,B),X=new $n(new gt(P,.006,I),d,G),Y=new et;for(let L=0;L<B;L++)J.setMatrixAt(L,Y.makeTranslation((L-(B-1)/2)*S,0,0));for(let L=0;L<G;L++)X.setMatrixAt(L,Y.makeTranslation(0,.002,(L-(G-1)/2)*S));J.instanceMatrix.needsUpdate=!0,X.instanceMatrix.needsUpdate=!0,J.castShadow=X.castShadow=!0,C.add(J,X);const ne=c.shape==="window"?new $e({color:"#8cb4c4",metalness:.1,roughness:.16,transparent:!0,opacity:.32}):u;v(.1,2.38,1.25,T+1.22,1.5,0,ne);for(const L of[-.59,.59])v(.085,2.39,.085,T-1.22,1.5,L,u);for(const L of[.34,2.66])v(2.46,.055,.055,T,L,.61,u);const V=new Qt;V.moveTo(-1.19,-.58),V.lineTo(1.19,-.58),V.lineTo(1.19,.58),V.lineTo(-1.19,.58),V.closePath();const fe=new ei;fe.moveTo(-1.13,-.34),fe.lineTo(-1.13,.34),fe.lineTo(-.41,.34),fe.lineTo(-.41,-.34),fe.closePath(),V.holes.push(fe);const _e=new Pe(new un(V,{depth:.035,bevelEnabled:!1}),f);_e.rotation.x=-Math.PI/2,_e.position.set(T,.73,0),_e.name="psu-shroud",_e.castShadow=!0,_e.receiveShadow=!0,l.add(_e);const Se=new ht;Se.name="psu-top-grille",Se.position.set(T-.77,.753,0),l.add(Se);const ze=.024,Xe=.004,Ke=29,qe=28,Z=new et,se=new $n(new gt(Xe,.009,.68),d,Ke),Me=new $n(new gt(.72,.009,Xe),d,qe);for(let L=0;L<Ke;L++)se.setMatrixAt(L,Z.makeTranslation((L-(Ke-1)/2)*ze,0,0));for(let L=0;L<qe;L++)Me.setMatrixAt(L,Z.makeTranslation(0,.001,(L-(qe-1)/2)*ze));se.instanceMatrix.needsUpdate=Me.instanceMatrix.needsUpdate=!0,se.castShadow=Me.castShadow=!0,Se.add(se,Me),h=a,v(.58,.39,.025,.3,1.65,-.4525,d);const Ce=new Qt;Ce.moveTo(-.765,-.81),Ce.lineTo(.765,-.81),Ce.lineTo(.765,.81),Ce.lineTo(-.765,.81),Ce.closePath();const Ee=new ei;Ee.moveTo(-.36,-.16),Ee.lineTo(-.36,.52),Ee.lineTo(.27,.52),Ee.lineTo(.27,-.16),Ee.closePath(),Ce.holes.push(Ee);const Ge=new Pe(new un(Ce,{depth:.025,bevelEnabled:!1}),u);Ge.position.set(T-.2,1.76,-.56),Ge.castShadow=!0,Ge.receiveShadow=!0,a.add(Ge);for(const L of[T-.84,T+.41])for(const z of[1.06,1.77,2.45]){const ae=y(.027,.07,L,z,-.5,g);ae.rotation.x=Math.PI/2}for(const L of[1.04,1.66,2.3]){for(const z of[T+.75,T+.99])v(.035,.32,.03,z,L,-.55,f);for(const z of[-.145,.145])v(.24,.03,.03,T+.87,L+z,-.55,f)}const tt=new ht;tt.name="rear-expansion-cage",a.add(tt),h=tt;for(const L of[-.39,.43]){v(.035,.79,.05,-1.79,1.15,L,u);for(const z of[.79,1.51])v(.035,.045,.19,-1.79,z,L+(L<0?-.075:.075),u)}for(let L=0;L<7;L++){const z=.835+L*.105,ae=new Qt;ae.moveTo(-.39,-.044),ae.lineTo(.43,-.044),ae.lineTo(.43,.044),ae.lineTo(-.39,.044),ae.closePath();for(let ee=0;ee<6;ee++){const de=-.29+ee*.105,Te=new ei;Te.moveTo(de,-.02),Te.lineTo(de,.02),Te.lineTo(de+.065,.02),Te.lineTo(de+.065,-.02),Te.closePath(),ae.holes.push(Te)}const ge=new Pe(new un(ae,{depth:.014,bevelEnabled:!1}),d);ge.rotation.y=-Math.PI/2,ge.position.set(-1.785,z,0),ge.castShadow=!0,tt.add(ge)}if(h=l,c.shape==="slats")for(let L=0;L<23;L++)v(.016,1.95,.015,T+1.276,1.5,-.49+L*.044,f);if(c.shape==="mesh")for(let L=0;L<12;L++)for(let z=0;z<6;z++)v(.018,.06,.065,T+1.276,.55+L*.16,-.4+z*.16,f);if(c.shape==="fans")for(const L of[.85,1.5,2.15]){const z=new Pe(new bn(.25,.026,12,64),p);z.rotation.y=Math.PI/2,z.position.set(T+1.282,L,0),l.add(z);const ae=Yl(.23);for(let ee=0;ee<9;ee++){const de=new Pe(ae,f);de.position.set(T+1.285,L,0),de.rotation.set(0,Math.PI/2,ee*Math.PI*2/9,"YXZ"),l.add(de)}const ge=new Pe(new Ut(.065,.07,.03,48),p);ge.rotation.z=Math.PI/2,ge.position.set(T+1.29,L,0),l.add(ge)}if(t==="stripe")for(const L of[-.25,.25])v(.022,2.05,.075,T+1.3,1.5,L,p),v(2.15,.012,.075,T,2.768,L,p);if(t==="checker")for(let L=0;L<10;L++)for(let z=0;z<6;z++)(L+z)%2===0&&v(.022,.14,.14,T+1.3,.68+L*.17,-.43+z*.17,p);if(t==="circuit")for(let L=0;L<5;L++)v(.022,1.1+L*.13,.018,T+1.3,1.4,-.4+L*.18,p),v(.022,.018,.14,T+1.3,.85+L*.26,-.34+L*.18,p),v(.023,.055,.055,T+1.3,1.95+L*.065,-.4+L*.18,p);y(.045,.014,T+1.17,2.768,.27,p.clone()).name="case-power-indicator";for(const L of[-.28,-.09]){const z=Ii("usb",.12,.045);z.rotation.x=-Math.PI/2,z.position.set(T+1.17,2.773,L),l.add(z)}for(const L of[.08,.17]){const z=Ii("audio",.065);z.rotation.x=-Math.PI/2,z.position.set(T+1.17,2.773,L),l.add(z)}for(const L of[T-1.2,T+1.2])v(.055,2.3,.055,L,1.5,.62,d);for(const L of[T-1.18,T+1.18])for(const z of[.4,2.61]){const ae=y(.022,.014,L,z,.665,d);ae.rotation.x=Math.PI/2}const D=new R(-1.825,.33,-.61);for(const L of l.children)L.position.sub(D);l.position.copy(D),l.scale.set(c.stretch[0],c.stretch[1],c.stretch[2]),h=a;const K=It;v(K.width,.09,K.depth,K.centerX,.18,K.centerZ,f);for(const L of[K.centerX-K.width/2,K.centerX+K.width/2])v(.045,.1,K.depth,L,.26,K.centerZ,d);for(const L of[K.centerZ-K.depth/2,K.centerZ+K.depth/2])v(K.width,.1,.045,K.centerX,.26,L,d);const Q=new ht;Q.name="side-panel",a.add(Q),h=Q;const j=2.46*c.stretch[0],$=2.36*c.stretch[1],pe=v(j,$,.028,0,0,0,u);pe.name="panel-sheet";for(const L of[-j/2+.035,j/2-.035])v(.055,$,.045,L,0,-.025,d);for(const L of[-$/2+.035,$/2-.035])v(j,.055,.045,0,L,-.025,d);for(const L of[-j/2+.075,j/2-.075])for(const z of[-$/2+.075,$/2-.075]){const ae=y(.02,.012,L,z,.023,d);ae.rotation.x=Math.PI/2}if(t==="stripe")for(const L of[-j*.25,j*.25])v(.07,$-.2,.008,L,0,.018,p);if(t==="checker")for(let L=0;L<6;L++)for(let z=0;z<4;z++)(L+z)%2===0&&v(.14,.14,.008,-.5+L*.2,-.3+z*.2,.018,p);if(t==="circuit")for(let L=0;L<5;L++)v(.018,$*.6,.008,-.5+L*.25,0,.018,p),v(.18,.018,.008,-.42+L*.25,.3-L*.12,.018,p);if(n?Q.position.set(-1.825+1.275*c.stretch[0],.33+1.17*c.stretch[1],-.61+1.29*c.stretch[2]):(Q.rotation.y=Math.PI/2,Q.position.set(-3.05,.2+$/2,0)),h=a,!n)for(const L of[-.8,.8])v(.55,.07,.18,-3.05,.145,L,f),v(.08,.16,.18,-3.13,.22,L,f);const re=Q.clone(!0);if(re.name="back-panel",a.add(re),o==="glass"&&(pe.material=new $e({color:"#a6c9d4",metalness:.05,roughness:.12,transparent:!0,opacity:.2,depthWrite:!1}),pe.castShadow=!1),s?(re.rotation.set(0,Math.PI,0),re.position.set(-1.825+1.275*c.stretch[0],.33+1.17*c.stretch[1],-.65)):(re.rotation.set(0,Math.PI/2,0),re.position.set(-3.7,.2+$/2,0)),!s)for(const L of[-.8,.8])v(.55,.07,.18,-3.7,.145,L,f),v(.08,.16,.18,-3.78,.22,L,f);const ue=new ht;ue.name="rear-panel",a.add(ue);const Ue=new Qt,Oe=-.59,A=-.61+1.2*c.stretch[2],M=.34,O=.33+2.33*c.stretch[1];Ue.moveTo(Oe,M),Ue.lineTo(A,M),Ue.lineTo(A,O),Ue.lineTo(Oe,O),Ue.closePath();const W=(L,z,ae,ge)=>{const ee=new ei;ee.moveTo(L,z),ee.lineTo(L,ge),ee.lineTo(ae,ge),ee.lineTo(ae,z),ee.closePath(),Ue.holes.push(ee)};W(-.46,.755,.49,1.56),W(-.48,.37,.48,.735),W(-.48,1.65,-.2,2.43);for(let L=0;L<8;L++)W(-.08,1.73+L*.08,.43,1.765+L*.08);const ie=new Pe(new un(Ue,{depth:.025,bevelEnabled:!1}),u);ie.castShadow=!0,ie.receiveShadow=!0,ue.add(ie);const q=(L,z,ae,ge,ee)=>{const de=new ht;de.name=L,ue.add(de),h=de;const Te=ge-z,be=ee-ae,ve=(z+ge)/2,ke=(ae+ee)/2;for(const De of[z,ge])v(.016,be+.016,.018,De,ke,.032,d);for(const De of[ae,ee])v(Te,.016,.018,ve,De,.032,d);const U=.0225,ce=.0035,me=Math.max(0,Math.ceil((Te-.012)/U)-1),we=Math.max(0,Math.ceil((be-.012)/U)-1),oe=new $n(new gt(ce,be,.008),d,me),te=new $n(new gt(Te,ce,.008),d,we),Re=new et;for(let De=0;De<me;De++)oe.setMatrixAt(De,Re.makeTranslation(z+(De+1)*U,ke,.032));for(let De=0;De<we;De++)te.setMatrixAt(De,Re.makeTranslation(ve,ae+(De+1)*U,.034));oe.instanceMatrix.needsUpdate=!0,te.instanceMatrix.needsUpdate=!0,oe.castShadow=te.castShadow=!0,de.add(oe,te)};h=ue,v(.28,.78,.015,-.34,2.04,.024,d);for(const[L,z]of[["display",2.32],["display",2.21],["usb",2.08],["usb",1.98]]){const ae=Ii(L,.17,.065);ae.position.set(-.34,z,.044),ue.add(ae)}for(const L of[1.85,1.74]){const z=Ii("audio",.075);z.position.set(-.34,L,.044),ue.add(z)}if(q("rear-vent-grille",-.08,1.73,.43,2.325),q("rear-psu-grille",-.48,.37,-.02,.735),q("rear-psu-edge-grille",.32,.37,.48,.735),h=a,ue.rotation.y=-Math.PI/2,ue.position.set(r?-1.815:-2.45,r?0:-.14,0),!r)for(const L of[-.35,.35])v(.42,.07,.18,-2.45,.145,L,f);return a}const qc={type:"change"},Sa={type:"start"},$l={type:"end"},js=new mr,Yc=new In,gg=Math.cos(70*Xo.DEG2RAD),vt=new R,Lt=2*Math.PI,ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},no=1e-6;class _g extends Pd{constructor(e,t=null){super(e,t),this.state=ot.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Di.ROTATE,MIDDLE:Di.DOLLY,RIGHT:Di.PAN},this.touches={ONE:Ri.ROTATE,TWO:Ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new dn,this._lastTargetPosition=new R,this._quat=new dn().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xc,this._sphericalDelta=new xc,this._scale=1,this._panOffset=new R,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new R,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xg.bind(this),this._onPointerDown=vg.bind(this),this._onPointerUp=yg.bind(this),this._onContextMenu=Ag.bind(this),this._onMouseWheel=Eg.bind(this),this._onKeyDown=bg.bind(this),this._onTouchStart=Tg.bind(this),this._onTouchMove=wg.bind(this),this._onMouseDown=Mg.bind(this),this._onMouseMove=Sg.bind(this),this._interceptControlDown=Cg.bind(this),this._interceptControlUp=Rg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qc),this.update(),this.state=ot.NONE}update(e=null){const t=this.object.position;vt.copy(t).sub(this.target),vt.applyQuaternion(this._quat),this._spherical.setFromVector3(vt),this.autoRotate&&this.state===ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Lt:n>Math.PI&&(n-=Lt),s<-Math.PI?s+=Lt:s>Math.PI&&(s-=Lt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(vt.setFromSpherical(this._spherical),vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=vt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new R(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(js.origin.copy(this.object.position),js.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(js.direction))<gg?this.object.lookAt(this.target):(Yc.setFromNormalAndCoplanarPoint(this.object.up,this.target),js.intersectPlane(Yc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>no||8*(1-this._lastQuaternion.dot(this.object.quaternion))>no||this._lastTargetPosition.distanceToSquared(this.target)>no?(this.dispatchEvent(qc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Lt/60*this.autoRotateSpeed*e:Lt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){vt.setFromMatrixColumn(t,0),vt.multiplyScalar(-e),this._panOffset.add(vt)}_panUp(e,t){this.screenSpacePanning===!0?vt.setFromMatrixColumn(t,1):(vt.setFromMatrixColumn(t,0),vt.crossVectors(this.object.up,vt)),vt.multiplyScalar(e),this._panOffset.add(vt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;vt.copy(s).sub(this.target);let r=vt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Lt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Lt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Lt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Lt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Lt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Lt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Lt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Lt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function vg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function xg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function yg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($l),this.state=ot.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Mg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Di.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ot.DOLLY;break;case Di.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ot.ROTATE}break;case Di.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ot.PAN}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(Sa)}function Sg(i){switch(this.state){case ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Eg(i){this.enabled===!1||this.enableZoom===!1||this.state!==ot.NONE||(i.preventDefault(),this.dispatchEvent(Sa),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent($l))}function bg(i){this.enabled!==!1&&this._handleKeyDown(i)}function Tg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ri.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ot.TOUCH_ROTATE;break;case Ri.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ot.TOUCH_PAN;break;default:this.state=ot.NONE}break;case 2:switch(this.touches.TWO){case Ri.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ot.TOUCH_DOLLY_PAN;break;case Ri.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ot.TOUCH_DOLLY_ROTATE;break;default:this.state=ot.NONE}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(Sa)}function wg(i){switch(this._trackPointer(i),this.state){case ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ot.NONE}}function Ag(i){this.enabled!==!1&&i.preventDefault()}function Cg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Rg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Pg(i,e){const t=new _g(i,e);t.target.fromArray(Mn.camera.target),t.enableDamping=!0,t.dampingFactor=.09,t.enablePan=!1,t.minDistance=Mn.camera.minDistance,t.maxDistance=Mn.camera.maxDistance,t.minPolarAngle=Math.PI*.02,t.maxPolarAngle=Math.PI*.82,t.minAzimuthAngle=-1/0,t.maxAzimuthAngle=1/0,t.update(),t.saveState();const n=new Set;let s=performance.now();const r=()=>n.clear(),o=u=>u instanceof Element&&!!u.closest("input,textarea,select,[contenteditable]"),a=u=>n.delete(u.code);window.addEventListener("keyup",a),window.addEventListener("blur",r),window.addEventListener("focusin",r),document.addEventListener("visibilitychange",r);const c=()=>{r(),t.enableDamping=!1,t.reset(),i.position.copy(new R(...Mn.camera.position)),t.target.fromArray(Mn.camera.target),t.update(),t.enableDamping=!0},l=u=>{o(u.target)||u.ctrlKey||u.altKey||u.metaKey||((u.code==="KeyQ"||u.code==="KeyE")&&(u.preventDefault(),n.add(u.code)),u.code==="KeyR"&&!u.ctrlKey&&!u.altKey&&!u.metaKey&&c())};return window.addEventListener("keydown",l),{update:()=>{const u=performance.now(),d=Math.min((u-s)/1e3,.05);s=u;const f=Number(n.has("KeyE"))-Number(n.has("KeyQ"));if(f&&!o(document.activeElement)){const m=new R(1,0,0).applyQuaternion(i.quaternion).multiplyScalar(f*1.5*d);i.position.add(m),t.target.add(m)}t.update()},reset:c,topView:()=>{r(),t.enableDamping=!1,t.reset(),t.target.set(-.55,1.3,0),i.position.set(-.55,8.3,.46),t.update(),t.enableDamping=!0},dispose(){window.removeEventListener("keyup",a),window.removeEventListener("blur",r),window.removeEventListener("focusin",r),document.removeEventListener("visibilitychange",r),window.removeEventListener("keydown",l),t.dispose()}}}function Ig(){const i=new ht;i.name="motherboard-connectors";const e=new $e({color:"#262f38",roughness:.6}),t=new $e({color:"#cab16b",metalness:.7,roughness:.35}),n=new $e({color:"#080e13",roughness:.9});for(const[s,r]of Object.entries(ns)){const o=new ht;o.name=`board-port-${s}`,o.position.fromArray(r),i.add(o);const a=(f,m,_,g,p,v,y=e)=>{const x=new Pe(new gt(f,m,_),y);x.position.set(g,p,v),o.add(x)},c=s==="atx24"?2:s==="sata-data"?7:4,l=s==="atx24"?12:s==="eps"?2:1,h=s==="sata-data"?.012:.022,u=c*h+.012,d=l*h+.012;a(u,d,.008,0,0,-.053,n);for(const f of[-u/2,u/2])a(.006,d,.052,f,0,-.026);for(const f of[-d/2,d/2])a(u,.006,.052,0,f,-.026);for(let f=0;f<c;f++)for(let m=0;m<l;m++){const _=(f-(c-1)/2)*h,g=(m-(l-1)/2)*h;a(.004,.004,.033,_,g,-.025,t),(s==="atx24"||s==="eps")&&(a(.003,h,.038,_+h/2,g,-.029),a(h,.003,.038,_,g+h/2,-.029))}s==="sata-data"?a(.008,d*.65,.032,-u*.3,-d*.15,-.02):a(.012,d*.32,.012,u/2+.006,0,-.008)}return i.rotation.x=-Math.PI/2,i.scale.setScalar(.25),i}function Dg(){const i=new ht;i.name="board-surface-detail";const e=new $e({color:"#253039",roughness:.72}),t=new $e({color:"#aab8b8",metalness:.75,roughness:.38}),n=new $e({color:"#a89973",roughness:.8}),s=new $e({color:"#aabfae",roughness:.9}),r=[],o=(a,c,l,h,u,d,f=e)=>r.push({size:[a,c,l],position:[h,u,d],material:f});for(const a of[-.101,.021])o(.005,.008,.122,a,.04,-.05,t);for(const a of[-.111,.011])o(.122,.008,.005,-.04,.04,a,t);o(.0025,.003,.108,.029,.041,-.051,t),o(.011,.003,.003,.025,.041,.004,t);for(const[a,c,l]of[[-.088,.134,.028],[-.038,.137,.02],[.014,.139,.023]]){o(l,.004,l,a,.035,c),o(l*.65,6e-4,.002,a,.0375,c,s);for(let h=0;h<6;h++)for(const u of[-1,1]){const d=(h-2.5)*l/7;o(.003,.0015,.0015,a+u*(l/2+.001),.034,c+d,t),o(.0015,.0015,.003,a+d,.034,c+u*(l/2+.001),t)}}for(const a of[-.166,.165])for(let c=0;c<15;c++){const l=-.117+c*.017;if(!(a<0&&l<.1)){o(.005,.0025,.007,a,.034,l,c%3===0?n:e);for(const h of[-.0035,.0035])o(.005,.0028,.001,a,.034,l+h,t);o(.008,5e-4,7e-4,a,.0332,l+.006,s)}}for(let a=0;a<10;a++){const c=-.119+a*.015;o(6e-4,4e-4,.013,c,.0331,.117,s),o(.007,4e-4,6e-4,c+.0032,.0331,.1235,s),o(6e-4,4e-4,.006,c+.0064,.0331,.1265,s)}for(let a=0;a<8;a++){const c=-.09+a*.014;o(.007,.003,.005,c,.035,-.157,n);for(const l of[-.004,.004])o(.002,.003,.005,c+l,.035,-.157,t)}for(const a of[e,t,n,s]){const c=r.filter(u=>u.material===a),l=new $n(new gt(1,1,1),a,c.length),h=new et;c.forEach((u,d)=>{h.compose(new R(...u.position),new dn,new R(...u.size)),l.setMatrixAt(d,h)}),l.castShadow=!0,l.receiveShadow=!0,i.add(l)}return i}function Lg(i){const e=new ht,t=new $e({color:i.color,metalness:.35,roughness:.5}),n=new $e({color:"#17232c",roughness:.8}),s=new $e({color:"#d9dfde",metalness:.8,roughness:.3}),r=new $e({color:"#d5b36d",metalness:.7,roughness:.4});t.map=Xc(["Motherboard","RAM","SSD"].includes(i.type)?"pcb":"metal"),s.map=Xc("metal");const o=(u,d,f,m,_,g,p=t)=>{const v=new Pe(new gt(u,d,f),p);return v.position.set(m,_,g),v.castShadow=!0,v.receiveShadow=!0,e.add(v),v},a=i.id==="gpu-slot"?.7:i.id==="gpu-long"?1.25:1,c=u=>-.2+(u+.2)*a,l=(u,d,f,m,_,g,p=t)=>o(u*a,d,f,c(m),_,g,p),h=(u,d,f,m)=>{const _=new Pe(new bn(m,.009,12,64),s);_.rotation.x=Math.PI/2,_.position.set(u,d,f),e.add(_);const g=new Pe(new Ut(m*.92,m*.92,.018,32),n);g.position.set(u,d-.014,f),e.add(g);const p=new ht;p.name="fan-rotor",p.position.set(u,d,f),e.add(p);const v=Yl(m*.94),y=new $e({color:"#aab9bd",metalness:.25,roughness:.42});for(let C=0;C<9;C++){const P=new Pe(v,y);P.rotation.set(-Math.PI/2,0,C*Math.PI*2/9,"YXZ"),P.castShadow=!0,P.receiveShadow=!0,p.add(P)}const x=i.type==="GPU",w=new Pe(new Ut(m*.35,m*.37,x?.008:.025,48),n);w.position.y=x?0:.013,p.add(w);const T=new Pe(new Ut(m*.31,m*.32,.004,48),s);T.position.y=x?.006:.027,p.add(T)};switch(i.type){case"GPU Support":o(.13,.025,.13,0,.0125,0,n),o(.042,.24,.042,0,.145,0,s),o(.075,.04,.07,0,.23,0),o(.035,.07,.035,0,.28,0,s),o(.1,.018,.09,0,.312,0,n),o(.02,.025,.02,.044,.23,0,r);break;case"Motherboard":o(.15,.0075,.05,-.035,.03475,.0475,n).name="m2-carrier",o(.01375,.00875,.0425,.03625,.0465,.0475,n).name="m2-socket";for(let u=0;u<10;u++)o(.004,.0015,.002,.0295,.0505,.033+u*.003,r).name="m2-contact";{const u=new Pe(new Ut(.0045,.0045,.003,16),s);u.position.set(-.095,.04875,.0475),u.name="m2-screw",e.add(u)}o(.36,.025,.35,0,.02,0),o(.11,.025,.11,-.04,.045,-.05,s).name="cpu-socket";for(const[u,d]of[.08,.13].entries()){const f=new ht;f.name=`dimm-${u===0?"a":"b"}-mouth`,f.position.set(d,.065,-.04),e.add(f);for(const m of[-.0065,.0065])o(.005,.032,.22,d+m,.049,-.04,n);for(const m of[-.155,.075])o(.021,.025,.016,d,.063,m,s)}for(const u of[.092,.108])o(.23,.0275,.005,-.04,.04625,u,n);{const u=new ht;u.name="pcie-mouth",u.position.set(-.04,.06,.1),e.add(u)}break;case"CPU":{o(.19,.028,.19,0,.025,0),o(.167,.003,.167,0,.04,0,n).name="cpu-lid-seal";const u=new Qt,d=.078,f=i.id==="cpu-ax"?.018:.007;u.moveTo(-d+f,-d),u.lineTo(d-f,-d),u.lineTo(d,-d+f),u.lineTo(d,d-f),u.lineTo(d-f,d),u.lineTo(-d+f,d),u.lineTo(-d,d-f),u.lineTo(-d,-d+f),u.closePath();const m=new Pe(new un(u,{depth:.014,bevelEnabled:!0,bevelThickness:.002,bevelSize:.002,bevelSegments:3}),s);m.rotation.x=-Math.PI/2,m.position.y=.043,m.name="cpu-heat-spreader",e.add(m);break}case"CPU Cooler":o(.12,.015,.12,0,.0125,0,s).name="cooler-base";for(let u=0;u<6;u++)o(.24,.018,.23,0,.035+u*.027,0,s);h(0,.21,0,.1),o(.035,.16,.035,.1,.085,0,r);break;case"RAM":o(.36,.025,.095,0,.035,0),o(.32,.012,.014,0,.036,.055,r);for(let u=0;u<4;u++)o(.055,.023,.055,-.13+u*.085,.058,0,n);break;case"GPU":{const u=i.id==="gpu-slot"?[-.04]:i.id==="gpu-long"?[-.12,0,.12]:[-.1,.1],d=i.id==="gpu-long"?.061:i.id==="gpu-slot"?.073:.067,f=.39*a/2,m=i.id==="gpu-long"?.015:.007,_=new Qt;_.moveTo(-f+m,-.09),_.lineTo(f-m,-.09),_.lineTo(f,-.09+m),_.lineTo(f,.09-m),_.lineTo(f-m,.09),_.lineTo(-f+m,.09),_.lineTo(-f,.09-m),_.lineTo(-f,-.09+m),_.closePath();for(const p of u){const v=new ei;v.absarc(c(p)-c(0),0,d+.007,0,Math.PI*2,!0),_.holes.push(v)}const g=new Pe(new un(_,{depth:.009,bevelEnabled:!0,bevelSize:.0015,bevelThickness:.0015,bevelSegments:2,curveSegments:32}),t);g.rotation.x=-Math.PI/2,g.position.set(c(0),.072,0),g.name="gpu-open-fan-shroud",e.add(g);for(const p of u)h(c(p),.082,0,d);for(const p of[-.086,.086])l(.38,.012,.007,0,.061,p),l(.38,.01,.007,0,.013,p);for(const p of[-.184,.184])l(.014,.056,.168,p,.037,0);if(l(.36,.004,.146,0,.008,0,n).name="gpu-pcb",o(.018,.12,.21,-.2,.05,0,s),i.id==="gpu-long")for(const p of[-.08,.08]){const v=l(.35,.012,.012,0,.086,p,s);v.name="gpu-armored-rail"}if(i.id==="gpu-slot")for(let p=0;p<4;p++)l(.006,.0015,.04,.115+p*.017,.083,0,n);break}case"SSD":i.interface==="SATA"?(o(.26,.025,.18,0,.0325,0),o(.19,.004,.13,0,.047,0,s),o(.025,.014,.12,.13,.03,0,n)):(o(.26,.016,.075,0,.028,0),o(.16,.013,.06,0,.044,0,n),o(.025,.014,.06,.13,.03,0,r));break;case"PSU":o(.26,.19,.25,0,.1,0),h(0,.205,0,.085),o(.1,.07,.014,0,.11,.13,n);break}if(i.type==="Motherboard"){e.add(Ig()),e.add(Dg());for(let u=0;u<10;u++)o(.008,.025,.026,-.13+u*.027,.049,-.135,s);for(let u=0;u<5;u++){const d=new Pe(new Ut(.007,.007,.017,16),n);d.position.set(-.113,.043,-.1+u*.041),e.add(d);const f=new Pe(new Ut(.006,.006,.002,16),s);f.position.copy(d.position),f.position.y+=.009,e.add(f),o(.008,.001,.001,f.position.x,.053,f.position.z,n)}o(.057,.012,.04,.09,.041,.127,n);for(let u=0;u<6;u++)o(.003,.013,.038,.068+u*.009,.044,.127,s);for(let u=0;u<8;u++)o(.011,.005,.006,-.12+u*.03,.035,.156,n),o(.002,.002,.008,-.124+u*.03,.039,.156,r);for(let u=0;u<7;u++)u<5&&o(.024,.023,.023,-.14+u*.045,.045,-.135,s);o(.04,.065,.23,-.16,.05,-.025,s);for(const u of[-.15,.15])for(const d of[-.15,.15]){const f=new Pe(new bn(.012,.003,5,12),r);f.rotation.x=Math.PI/2,f.position.set(u,.037,d),e.add(f)}}if(i.type==="CPU"){for(const f of[-.087,.087])for(let m=0;m<8;m++){const _=-.066+m*.019;o(.007,.003,.009,f,.041,_,n);for(const g of[-.004,.004])o(.007,.0035,.0015,f,.041,_+g,s)}for(let f=0;f<14;f++)o(.0018,5e-4,.012,-.032+f*.0048,.0595,.047,n);for(const f of[-.088,.088])o(.002,.001,.13,f,.0395,0,r);for(let f=0;f<7;f++)for(let m=0;m<7;m++)o(.012,.001,.012,-.066+f*.022,.0115,-.066+m*.022,r);for(const f of[-.086,.086])for(let m=0;m<5;m++)o(.008,.008,.012,f,.043,-.055+m*.027,s);const u=new Qt;u.moveTo(0,0),u.lineTo(.018,0),u.lineTo(0,.018),u.closePath();const d=new Pe(new xa(u),r);d.rotation.x=-Math.PI/2,d.position.set(-.071,.06,-.071),e.add(d);for(let f=0;f<8;f++)for(const m of[-.09,.09])o(.01,.008,.013,-.07+f*.02,.045,m,r);o(.09,.003,.008,0,.061,0,n),o(.055,.003,.007,0,.061,.02,n)}if(i.type==="RAM"){for(const u of[-.038,.033])o(.326,.005,.01,0,.073,u,t);for(const u of[-.161,.161])o(.012,.011,.067,u,.064,0,t);for(let u=0;u<4;u++){const d=-.13+u*.085;o(.049,.008,.049,d,.019,0,n).name="ram-rear-memory-chip",o(.028,.001,.009,d,.07,.014,s);for(let f=0;f<5;f++)for(const m of[-.027,.027])o(.003,.003,.005,d-.018+f*.009,.05,m,s)}for(let u=0;u<18;u++)o(.009,.002,.018,-.15+u*.018,.029,.055,r);for(const u of[-.169,.169])o(.007,.006,.013,u,.049,-.027,n);for(const u of[-.035,.032])for(let d=0;d<12;d++)o(.003,.009,.008,-.145+d*.026,.066,u,s);for(let u=0;u<10;u++)o(.007,.004,.004,-.145+u*.03,.051,-.04,n);for(let u=0;u<4;u++){o(.06,.006,.014,-.13+u*.085,.075,-.025,s);for(const d of[-.012,.015])o(.012,.005,.006,-.1+u*.085,.074,d,r)}o(.082,.002,.026,-.03,.071,.005,s);for(let u=0;u<7;u++)o(.003,.001,.018,-.062+u*.009,.0725,.005,n);for(let u=0;u<18;u++)o(.009,.003,.02,-.15+u*.018,.044,.055,r);o(.3,.012,.012,0,.074,-.037,s)}if(i.type==="GPU"){for(const u of[-.091,.091]){l(.35,.004,.002,0,.069,u,n);for(const d of[-.176,.176])l(.009,.009,.003,d,.073,u,s),l(.005,.0015,.004,d,.073,u,n)}l(.37,.006,.165,0,.004,0,n);for(const u of[-.17,.17])for(const d of[-.069,.069])l(.012,.002,.012,u,5e-4,d,s),l(.008,.001,.002,u,-.001,d,n);for(let u=0;u<8;u++)l(.016,.002,.1,-.13+u*.035,-5e-4,0,s);if(i.requiresPower!==!1){const u=e.children.length,d=jc(i.id);o(.029,.036,.057,.203,.048,.018,n).name="gpu-power-socket";for(let f=0;f<2;f++)for(let m=0;m<4;m++)o(.003,.008,.008,.219,.037+f*.015,-.003+m*.014,r);for(const f of e.children.slice(u))f.position.x+=d.x,f.position.z+=d.z}for(const u of[-.05,.045]){const d=Ii("display",.055,.022);d.rotation.y=-Math.PI/2,d.position.set(-.221,.075,u),e.add(d)}for(let u=0;u<32;u++)l(.003,.039,.15,-.165+u*.0106,.033,0,s);for(const u of[-.061,.061]){const d=new Pe(new Ut(.004,.004,.33*a,12),s);d.rotation.z=Math.PI/2,d.position.set(c(0),.016,u),e.add(d)}o(.17,.014,.025,0,.014,.08,r);for(const u of[-.055,0,.055])o(.009,.025,.035,-.212,.066,u,n)}if(i.type==="CPU Cooler"){for(let u=0;u<6;u++)for(const d of[-.116,.116])o(.218,.004,.002,0,.035+u*.027,d,n);for(const u of[-.099,.099])for(const d of[-.098,.098]){const f=new Pe(new Ut(.005,.005,.005,12),s);f.position.set(u,.184,d),e.add(f)}for(const u of[-.075,.075]){const d=new Pe(new Ut(.013,.013,.19,10),r);d.position.set(u,.1,.08),e.add(d)}}if(i.type==="SSD"){if(i.interface==="SATA"){for(const u of[-.111,.111])for(const d of[-.071,.071])o(.008,.002,.008,u,.046,d,n);for(let u=0;u<9;u++)o(.003,.001,.033,-.06+u*.012,.05,.017,n)}else for(let u=0;u<8;u++)o(.006,.004,.004,-.1+u*.027,.04,-.029,r);if(i.interface==="M.2 NVMe")for(const u of[-.085,0,.08])o(.048,.006,.04,u,.055,0,s)}if(i.type==="PSU"){for(const d of[.036,.055,.074]){const f=new Pe(new bn(d,.0018,6,40),s);f.rotation.x=Math.PI/2,f.position.set(0,.226,0),e.add(f)}for(const d of[-.11,.11])for(const f of[-.105,.105]){const m=new Pe(new Ut(.005,.005,.003,12),s);m.position.set(d,.197,f),e.add(m)}for(let d=0;d<4;d++)for(let f=0;f<8;f++)o(.016,.009,.002,-.093+f*.026,.035+d*.035,-.126,n);for(let d=0;d<5;d++)o(.085,.007,.006,-.067,.045+d*.024,.129,n);const u=Ii("power",.065,.052);u.position.set(.06,.11,.137),e.add(u),o(.035,.025,.01,.06,.047,.133,n),o(.003,.012,.002,.06,.047,.139,s)}return e}function Ug(i){const e=new ht,t=new Map;function n(r){for(const[o,a]of t)if(!r.inventory.some(c=>c.instanceId===o)){const c=new Set,l=new Set;a.getObjectByName("visual").traverse(h=>{h instanceof Pe&&(h.geometry.dispose(),(Array.isArray(h.material)?h.material:[h.material]).forEach(u=>c.add(u)))}),c.forEach(h=>{h instanceof $e&&h.map&&l.add(h.map),h.dispose()}),l.forEach(h=>h.dispose()),a.removeFromParent(),t.delete(o)}for(const[o,a]of r.inventory.entries()){if(t.has(a.instanceId))continue;const c=new ht,l=Lg(je(a.catalogId));l.name="visual",l.scale.setScalar(It.scale),c.add(l),c.position.set(It.startX+o%It.columns*It.gapX,.25,It.startZ+Math.floor(o/It.columns)*It.gapZ),c.userData.instanceId=a.instanceId,t.set(a.instanceId,c),e.add(c)}}n(i);const s=new Pe(new gt(.74,.008,.62),new On({color:"#90c995"}));return s.visible=!1,e.add(s),{root:e,models:t,reconcile:n,sync(r){const o=r.selectedInstanceId?t.get(r.selectedInstanceId):void 0;s.visible=!!o&&!r.operation&&r.inventory.find(a=>a.instanceId===r.selectedInstanceId)?.location==="tray",o&&s.position.set(o.position.x,.238,o.position.z);for(const[a,c]of t)c.traverse(l=>{l instanceof Pe&&l.material instanceof $e&&(l.material.emissive.set(a===r.selectedInstanceId?"#397347":"#000000"),l.material.emissiveIntensity=.6)});e.userData.selectedInstanceId=r.selectedInstanceId}}}const Ng={"GPU Support":{scale:1,rotation:[0,0,0],contact:[0,0,0]},Motherboard:{scale:4,rotation:[Math.PI/2,0,0],contact:[0,0,0]},CPU:{scale:1.8,rotation:[Math.PI/2,0,0],contact:[0,.011,0]},"CPU Cooler":{scale:1.8,rotation:[Math.PI/2,0,0],contact:[0,.005,0]},RAM:{scale:2.3,rotation:[Math.PI,0,Math.PI/2],contact:[0,.036,.045]},GPU:{scale:4,rotation:[Math.PI,0,0],contact:[0,.014,.0675]},SSD:{scale:2,rotation:[Math.PI/2,0,0],contact:[0,.02,0]},PSU:{scale:1.65,rotation:[0,-Math.PI/2,0],contact:[0,.005,0]}};function Fg(i,e){const t=Ng[i],[n,s,r]=e?t.rotation:[0,0,0],o=new dn().setFromEuler(new qt(n,s,r,"ZYX")),a=e?t.scale:It.scale,c=e?new R(...t.contact).multiplyScalar(-a).applyQuaternion(o):new R;return{scale:a,quaternion:o,offset:c}}function Og(i){const{root:e,models:t}=i,n=[];let s=null,r=null,o="",a,c=null;function l(m){const _=a.inventory.findIndex(g=>g.instanceId===m);return new R(It.startX+_%It.columns*It.gapX,.25,It.startZ+Math.floor(_/It.columns)*It.gapZ)}function h(m){const _=m.ownerId==="case"?e:t.get(m.ownerId),g=a.inventory.find(y=>y.instanceId===m.ownerId),p=g?je(g.catalogId):null,v=(p?.type==="Motherboard"?p.slots:Nn(a.caseId).slots).find(y=>y.id===m.slotId);return{owner:_,position:new R(...v.position),rotation:new qt(...v.rotation)}}function u(m,_){const g=a.inventory.find(y=>y.instanceId===m),p=je(g.catalogId).type,v=Fg(p,_);return{...v,scaleY:p==="GPU Support"&&_?(1.086-Nn(a.caseId).slots.find(y=>y.id==="support").position[1])/.321:v.scale}}function d(){s&&(s.removeFromParent(),s.traverse(m=>{m instanceof Pe&&m.material.dispose()}),s=null,r=null)}function f(){if(!s||!a.selectedInstanceId)return;const m=ni(a).filter(p=>Oi(a,a.selectedInstanceId,p.key)===null),_=m.find(p=>p.key===c)??m[0];if(s.visible=!!_&&!a.operation,!_)return;const g=h({ownerId:_.ownerId,slotId:_.id});g.owner.add(s),s.position.copy(g.position),s.rotation.copy(g.rotation)}return{hover(m){c=m,f()},sync(m){a=m;const _=[...m.inventory].sort((y,x)=>+(je(x.catalogId).type==="Motherboard")-+(je(y.catalogId).type==="Motherboard"));for(const y of _){const x=t.get(y.instanceId),w=x.getObjectByName("visual");if(y.placement){const C=h(y.placement);C.owner.add(x),x.position.copy(C.position),x.rotation.copy(C.rotation)}else e.add(x),x.position.copy(l(y.instanceId)),x.rotation.set(0,0,0);const T=u(y.instanceId,!!y.placement);w.scale.set(T.scale,T.scaleY,T.scale),w.quaternion.copy(T.quaternion),w.position.copy(T.offset)}const g=m.operation;if(g){const y=t.get(g.instanceId);e.updateWorldMatrix(!0,!0);const x=B=>{if(!B)return l(g.instanceId);const G=h(B);return e.worldToLocal(G.owner.localToWorld(G.position.clone()))},w=g.elapsed/g.duration,T=w*w*(3-2*w),C=x(g.from),P=x(g.to);e.add(y),y.position.lerpVectors(C,P,T),y.position.z+=Math.sin(w*Math.PI)*.5,y.rotation.set(0,0,0);const E=u(g.instanceId,!!g.from),S=u(g.instanceId,!!g.to),I=y.getObjectByName("visual");I.scale.setScalar(Xo.lerp(E.scale,S.scale,T)),I.scale.y=Xo.lerp(E.scaleY,S.scaleY,T),I.quaternion.slerpQuaternions(E.quaternion,S.quaternion,T),I.position.lerpVectors(E.offset,S.offset,T)}const p=ni(m).map(y=>y.key).join("|");if(p!==o){for(const y of n)y.removeFromParent(),y.geometry.dispose(),y.material.dispose();n.length=0;for(const y of ni(m)){const x=new Pe(new ui(y.kind==="board"?.7:.23,y.kind==="board"?.85:.23),new On({transparent:!0,opacity:.48,side:on,depthWrite:!1})),w=h({ownerId:y.ownerId,slotId:y.id});w.owner.add(x),x.position.copy(w.position),x.position.z+=.12,x.rotation.copy(w.rotation),x.userData.slotKey=y.key,n.push(x)}o=p}const v=m.inventory.find(y=>y.instanceId===m.selectedInstanceId);for(const y of n)y.visible=!!v&&v.location==="tray"&&!g,y.material.color.set(Oi(m,v?.instanceId??"",y.userData.slotKey)===null?"#80edb2":"#cb665e");if((r!==m.selectedInstanceId||g||v?.location!=="tray")&&(d(),v?.location==="tray"&&!g)){s=new ht;const y=t.get(v.instanceId).getObjectByName("visual").clone(!0),x=u(v.instanceId,!0);y.scale.set(x.scale,x.scaleY,x.scale),y.quaternion.copy(x.quaternion),y.position.copy(x.offset),y.traverse(w=>{w instanceof Pe&&(w.material=new On({color:"#85f5bc",transparent:!0,opacity:.23,depthWrite:!1}),w.castShadow=!1,w.receiveShadow=!1,w.raycast=()=>{})}),s.add(y),r=v.instanceId}f(),e.updateWorldMatrix(!0,!0)},dispose(){d();for(const m of n)m.removeFromParent(),m.geometry.dispose(),m.material.dispose()}}}function Bg(i,e,t){return e===0&&i<=5&&t<700}function zg(i,e,t,n,s){const r=new Rd;let o=null;function a(f){const m=i.getBoundingClientRect();return t.updateWorldMatrix(!0,!0),e.updateWorldMatrix(!0,!1),r.setFromCamera(new le((f.clientX-m.left)/m.width*2-1,-(f.clientY-m.top)/m.height*2+1),e),r.intersectObject(t,!0).filter(_=>{let g=_.object;for(;g;){if(!g.visible)return!1;g=g.parent}return!0})}function c(f){let m=f;for(;m;){if(m.userData.terminalKey)return{terminal:m.userData.terminalKey};if(m.userData.cableId)return{cable:m.userData.cableId};if(m.userData.slotKey)return{slot:m.userData.slotKey};if(m.userData.instanceId)return{part:m.userData.instanceId};m=m.parent}return{}}const l=f=>{if(!f.isPrimary){o=null;return}o={id:f.pointerId,x:f.clientX,y:f.clientY,time:performance.now(),distance:0,button:f.button}},h=f=>{if(o&&(o.distance=Math.max(o.distance,Math.hypot(f.clientX-o.x,f.clientY-o.y))),!o&&!n.getState().operation){const m=a(f).map(_=>c(_.object)).find(_=>_.slot||_.part);s(m?.slot??null)}},u=f=>{const m=o;if(o=null,!m||m.id!==f.pointerId||!Bg(Math.max(m.distance,Math.hypot(f.clientX-m.x,f.clientY-m.y)),m.button,performance.now()-m.time)||n.getState().operation)return;const _=i.getBoundingClientRect();if(f.clientX<_.left||f.clientX>_.right||f.clientY<_.top||f.clientY>_.bottom)return;const g=a(f).map(v=>c(v.object));if(n.getState().wiringMode){const v=g.find(y=>y.terminal);v?.terminal&&n.chooseTerminal(v.terminal);return}const p=g.find(v=>v.slot||v.part);p?.slot?n.install(p.slot):p?.part&&n.select(p.part)},d=()=>{o=null,s(null)};return i.addEventListener("pointerdown",l),i.addEventListener("pointermove",h),i.addEventListener("pointerup",u),i.addEventListener("pointercancel",d),i.addEventListener("pointerleave",d),{dispose(){i.removeEventListener("pointerdown",l),i.removeEventListener("pointermove",h),i.removeEventListener("pointerup",u),i.removeEventListener("pointercancel",d),i.removeEventListener("pointerleave",d)}}}const kg={atx24:"#303943",eps:"#353942",pcie:"#343d45","sata-power":"#34383d","sata-data":"#663e39",fan:"#363a40",display:"#24292f"};function Gg(i,e,t){if(i==="display")return[e,e.clone().add(new R(-.18,0,0)),new R(-2.12,e.y,.32),new R(-2.12,.16,-1.65),new R(-1.6,.16,-2.35),new R(2.5,.16,-2.35),new R(t.x,t.y,t.z-.15),t];if(i==="fan")return[e,e.clone().add(new R(-.1,.06,0)),new R(t.x,t.y,t.z+.1),t];const n=i==="eps"?-1.59:.32,s=-.607,r=i==="eps"?2.6:[1.04,1.66,2.3].reduce((l,h)=>Math.abs(h-t.y)<Math.abs(l-t.y)?h:l,1.04),o=e.y<.8?e.x+(i==="pcie"?.24:.12):.32,c=i==="atx24"||i==="eps"||i==="sata-data"?t.clone().add(new R(0,0,.12)):t.clone().add(new R(i==="pcie"?.2:.075,0,0));return[e,new R(e.x+(i==="pcie"?.2:.07),e.y,e.z),new R(o,e.y,s),new R(n,e.y,s),new R(n,r,s),new R(n,r,c.z),c,t].filter((l,h,u)=>h===0||l.distanceTo(u[h-1])>.005)}function Hg(i){const e=new Nl;let t=i[0];for(let n=1;n<i.length-1;n++){const s=i[n],r=Math.min(.055,s.distanceTo(i[n-1])*.3,s.distanceTo(i[n+1])*.3),o=s.clone().addScaledVector(i[n-1].clone().sub(s).normalize(),r),a=s.clone().addScaledVector(i[n+1].clone().sub(s).normalize(),r);e.add(new qo(t,o)),e.add(new va(o,s,a)),t=a}return e.add(new qo(t,i[i.length-1])),e}function Vg(i){const e=new ht;e.name="wiring",i.root.add(e);let t="";const n=()=>{e.traverse(s=>{s instanceof Pe&&(s.geometry.dispose(),s.material.dispose())}),e.clear()};return{sync(s){const r=JSON.stringify([s.cables,s.wiringMode,s.selectedTerminal,s.sidePanelInstalled,s.power,s.operation?.id,s.inventory.map(c=>c.placement)]);if(r===t)return;t=r,n(),i.root.updateWorldMatrix(!0,!0);const o=Ni(s),a=c=>{const l=o.find(h=>h.key===c);return l.ownerId==="monitor"?new R(...l.position):i.root.worldToLocal(i.models.get(l.ownerId).localToWorld(new R(...l.position)))};for(const c of o){const l=s.inventory.find(u=>u.instanceId===c.ownerId);if(l&&je(l.catalogId).type==="Motherboard")continue;const h=new Pe(new gt(.025,c.kind==="atx24"?.12:.055,c.kind==="atx24"?.055:.045),new $e({color:"#151c22",roughness:.65}));h.position.copy(a(c.key)),h.name=`socket:${c.key}`,c.ownerId==="monitor"&&(h.rotation.y=Math.PI/2),e.add(h)}for(const c of s.cables){if(!o.some(_=>_.key===c.from)||!o.some(_=>_.key===c.to))continue;const l=a(c.from),h=a(c.to),u=Gg(c.kind,l,h),d=Hg(u),f=c.kind==="fan"?.007:c.kind==="atx24"?.021:.013,m=new Pe(new hr(d,96,f,8,!1),new $e({color:kg[c.kind],roughness:.72}));m.userData.cableId=c.id,e.add(m);for(const[_,g]of[[l,u[1].clone().sub(l)],[h,u[u.length-2].clone().sub(h)]]){if(c.kind==="display"||c.kind==="pcie"){const v=new dn().setFromUnitVectors(new R(0,0,1),g.normalize()),y=(w,T,C,P=0)=>{const E=new Pe(w,new $e({color:C,metalness:P,roughness:P?.3:.7}));return E.position.copy(T.applyQuaternion(v).add(_)),E.quaternion.copy(v),E.name=`${c.kind}-plug-detail`,e.add(E),E},x=(w,T,C,P,E,S,I,B=0)=>y(new gt(w,T,C),new R(P,E,S),I,B);if(c.kind==="display"){const w=new Qt;w.moveTo(-.065,-.024),w.lineTo(.065,-.024),w.lineTo(.065,.012),w.lineTo(.05,.024),w.lineTo(-.065,.024),w.closePath(),y(new un(w,{depth:.035,bevelEnabled:!1}),new R(0,0,-.008),"#adb6bd",.85),x(.15,.065,.095,0,0,.074,"#20262c"),x(.064,.009,.037,0,.036,.069,"#5b646d");for(const T of[-.064,.064])for(let C=0;C<4;C++)x(.009,.045,.005,T,0,.048+C*.016,"#3c454e")}else{x(.22,.12,.075,0,0,.03,"#141c23");for(let w=0;w<2;w++)for(let T=0;T<4;T++){const C=(T-1.5)*.048,P=(w-.5)*.05;x(.034,.035,.014,C,P,-.014,"#39414a"),x(.014,.016,.009,C,P,-.023,"#bd9e54",.7);const E=new Pl([new R(C,P,.065),new R(C*.8,P*.8,.105),new R(0,0,.14)]);y(new hr(E,10,.006,5,!1),new R,"#252e37")}x(.055,.016,.075,0,.068,.028,"#59616a")}for(let w=0;w<5;w++){const T=y(new bn(.017-w*.001,.003,4,10),new R(0,0,.125+w*.009),"#343d45");T.name="plug-strain-relief"}continue}const p=new Pe(new gt(f*3.2,f*2.6,.06),new $e({color:"#1e252b",roughness:.65}));p.position.copy(_),p.quaternion.setFromUnitVectors(new R(0,0,1),g.normalize()),e.add(p);for(let v=1;v<=3;v++){const y=new Pe(new bn(f*1.08,.003,4,8),new $e({color:"#535a60",roughness:.8}));y.position.copy(_).addScaledVector(g,.03+v*.009),y.quaternion.copy(p.quaternion),e.add(y)}}}if(!(!s.wiringMode||s.operation||s.sidePanelInstalled||xt(s)))for(const c of o){if(!(s.selectedTerminal?ti(s,s.selectedTerminal,c.key)===null:c.direction==="source"&&!s.cables.some(u=>u.from===c.key))&&c.key!==s.selectedTerminal)continue;const h=new Pe(new gr(.055,12,8),new On({color:c.key===s.selectedTerminal?"#ffdc71":"#8cffb9",depthTest:!1}));h.renderOrder=20,h.position.copy(a(c.key)),h.userData.terminalKey=c.key,e.add(h)}},dispose(){n(),e.removeFromParent()}}}function Wg(){const i=new ht;i.position.set(2.5,.1,-2.05);const e=new $e({color:"#202b32",roughness:.65}),t=(h,u,d,f)=>{const m=new Pe(new gt(h,u,d),e);m.position.y=f,i.add(m)};t(.75,.07,.45,.04),t(.09,.7,.08,.38),t(1.8,1.08,.1,1.05);const n=document.createElement("canvas");n.width=768,n.height=448;const s=n.getContext("2d"),r=new Xh(n);r.colorSpace=Nt;const o=new Pe(new ui(1.68,.98),new On({map:r}));o.position.set(0,1.05,.056),i.add(o);const a=new On({color:"#38423c"}),c=new Pe(new gr(.025,10,6),a);c.position.set(.79,.55,.06),i.add(c);let l="";return{root:i,sync(h){const u=h.cables.some(f=>f.kind==="display"),d=JSON.stringify([h.power,u,h.inventory.map(f=>f.placement)]);if(d!==l){if(l=d,s.fillStyle="#0b141c",s.fillRect(0,0,768,448),s.fillStyle="#91efbc",s.font="bold 30px sans-serif",s.fillText("CTC / SIMULATED BOOT",28,48),s.font="24px sans-serif",s.fillText(h.power,28,90),a.color.set(h.power==="RUNNING"?"#75ff9b":h.power==="ERROR"?"#ff765c":"#38423c"),!u)s.font="24px sans-serif",s.fillText("NO SIGNAL / Connect GPU DisplayPort",28,150);else if(h.power==="RUNNING"||h.power==="BOOTING"){s.font="19px sans-serif";let f=135;for(const m of h.inventory.filter(_=>_.location==="installed")){const _=je(m.catalogId);if(_.type==="GPU Support")continue;const g="capacityGB"in _?` / ${_.capacityGB} GB`:"wattage"in _?` / ${_.wattage} W`:"cores"in _?` / ${_.cores} cores`:"vramGB"in _?` / ${_.vramGB} GB VRAM`:"";s.fillText(_.name+g,28,f),f+=30}}else s.font="21px sans-serif",s.fillText(h.power==="ERROR"?"Check Power / cables panel for errors.":h.power==="CHECKING"?"Checking hardware and required cables...":"Press Power to start.",28,150);r.needsUpdate=!0}},dispose(){r.dispose(),o.geometry.dispose(),o.material.dispose(),c.geometry.dispose(),a.dispose(),i.children.forEach(h=>{h instanceof Pe&&h.geometry.dispose()}),e.dispose(),i.removeFromParent()}}}function Xg(i,e,t){const n=new pg({antialias:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(devicePixelRatio,Mn.pixelRatioLimit)),n.shadowMap.enabled=!0,n.shadowMap.type=sl,n.toneMapping=ol,n.toneMappingExposure=1.05,i.prepend(n.domElement),n.domElement.setAttribute("aria-label","ฉากโต๊ะช่างและเคสคอมพิวเตอร์ 3D ใช้เมาส์ลากเพื่อหมุน เลื่อนล้อเพื่อซูม");const s=new zh;s.background=new Je("#19252e"),s.fog=new fa("#19252e",13,28);const r=new Gt(40,1,.1,50);r.position.fromArray(Mn.camera.position);const o=Pg(r,n.domElement);s.add(new bd("#e8f4ff","#6a6455",1.9));const a=new gc("#fff0d7",2.7);a.position.set(-3,7,5),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),a.shadow.camera.left=-5,a.shadow.camera.right=5,a.shadow.camera.top=5,a.shadow.camera.bottom=-5,a.shadow.normalBias=.015,a.shadow.bias=-1e-4,s.add(a);const c=new gc("#a6d7ff",1.8);c.position.set(4,4,-3),s.add(c);const l=new wd("#d6fff0",9,8);l.position.set(0,2.3,3),s.add(l);let h,u="";function d(P){const E=new Set;P.traverse(I=>{(I instanceof Pe||I instanceof Al)&&(I.geometry.dispose(),(Array.isArray(I.material)?I.material:[I.material]).forEach(B=>E.add(B)))});const S=new Set;E.forEach(I=>{I instanceof $e&&I.map&&S.add(I.map),I.dispose()}),S.forEach(I=>I.dispose()),P.removeFromParent()}const f=Ug(t.getState());s.add(f.root);const m=Og(f),_=Vg(f),g=Wg();s.add(g.root);const p=t.subscribe(P=>{const E=[P.caseId,P.finishId,P.patternId,P.sidePanelInstalled,P.backPanelInstalled,P.rearPanelInstalled,P.sidePanelStyle].join("/");E!==u&&(h&&d(h),h=mg(P.caseId,P.finishId,P.patternId,P.sidePanelInstalled,P.backPanelInstalled,P.rearPanelInstalled,P.sidePanelStyle),s.add(h),u=E),f.reconcile(P),m.sync(P),f.sync(P),_.sync(P),g.sync(P);const S=h.getObjectByName("case-power-indicator");S&&(S.material.color.set(P.power==="RUNNING"?"#80ffc1":P.power==="ERROR"?"#ff6f55":"#455454"),S.material.emissive.copy(S.material.color),S.material.emissiveIntensity=P.power==="RUNNING"?1.5:P.power==="ERROR"?.6:0)}),v=zg(n.domElement,r,f.root,t,m.hover),y=new Pe(new ui(200,200),new $e({color:"#29363b",roughness:.92}));y.rotation.x=-Math.PI/2,y.position.y=-2.08,y.receiveShadow=!0,s.add(y);function x(){r.aspect=i.clientWidth/Math.max(i.clientHeight,1),r.updateProjectionMatrix(),n.setPixelRatio(Math.min(devicePixelRatio,Mn.pixelRatioLimit)),n.setSize(i.clientWidth,i.clientHeight)}const w=new ResizeObserver(x);w.observe(i),x();const T=P=>{P.preventDefault(),n.setAnimationLoop(null),e("การเชื่อมต่อกับกราฟิกหยุดทำงาน กรุณากด “ลองใหม่” เพื่อโหลดฉากอีกครั้ง")};n.domElement.addEventListener("webglcontextlost",T);let C=performance.now();return n.setAnimationLoop(P=>{const E=Math.min(Math.max((P-C)/1e3,0),.05);if(C=P,t.tick(E),t.getState().power==="RUNNING")for(const S of t.getState().inventory.filter(I=>I.location==="installed"))f.models.get(S.instanceId).traverse(I=>{I.name==="fan-rotor"&&(I.rotation.y+=E*18)});o.update(),n.render(s,r)}),{resetCamera:o.reset,topView:o.topView,dispose(){p(),v.dispose(),m.dispose(),_.dispose(),g.dispose(),w.disconnect(),o.dispose(),n.setAnimationLoop(null),n.domElement.removeEventListener("webglcontextlost",T),s.traverse(P=>{P instanceof Pe&&(P.geometry.dispose(),(Array.isArray(P.material)?P.material:[P.material]).forEach(S=>{S instanceof $e&&S.map?.dispose(),S.dispose()}))}),n.dispose(),n.domElement.remove()}}}const Ko={atx24:"ไฟเมนบอร์ด · 24-pin",eps:"ไฟ CPU · EPS",pcie:"ไฟการ์ดจอ · 8-pin","sata-power":"ไฟ SSD · SATA","sata-data":"ข้อมูล SSD → เมนบอร์ด",fan:"พัดลม CPU → เมนบอร์ด",display:"ภาพจากการ์ดจอ → จอ"},qg={OFF:"ปิดอยู่",CHECKING:"กำลังตรวจเครื่อง",BOOTING:"กำลังบูต",RUNNING:"เปิดแล้ว",ERROR:"เปิดไม่สำเร็จ"};function Yg(i,e){const t=document.createElement("section");t.className="assembly-hud",t.innerHTML='<p class="assembly-message" role="status"></p><strong class="assembly-selected"></strong><div class="assembly-actions"><button class="remove-part">ถอดกลับถาด [Delete]</button><button class="cancel-part">ยกเลิก [Esc]</button></div><details class="slot-options"><summary>ตำแหน่งติดตั้งและเหตุผล</summary><div class="slot-buttons"></div></details>',i.append(t);const n=document.createElement("section");n.className="part-details selected-specs",n.setAttribute("aria-label","สเปกชิ้นส่วนที่เลือก"),t.querySelector(".assembly-selected").after(n);const s=document.createElement("div");s.className="selected-cables",t.append(s);const r=t.querySelector(".remove-part"),o=t.querySelector(".cancel-part");r.onclick=()=>e.remove(),o.onclick=()=>e.cancel();let a="";const c=e.subscribe(l=>{const h=JSON.stringify([l.message,l.selectedInstanceId,l.operation?.id,l.inventory.map(m=>m.placement),l.cables,l.power,l.sidePanelInstalled]);if(a===h)return;a=h,t.querySelector(".assembly-message").textContent=l.message;const u=tl(l);if(n.hidden=!u,n.innerHTML=u?nl(u.part):"",t.querySelector(".assembly-selected").textContent=u?u.part.name:"",r.hidden=u?.instance.location!=="installed",r.disabled=!!l.operation,r.title=u?Kc(l,u.instance.instanceId)??"ถอดกลับช่องเดิมบนถาด":"",s.replaceChildren(),u){const m=u.instance.instanceId,_=l.cables.filter(g=>g.from.startsWith(m+"/")||g.to.startsWith(m+"/"));if(_.length){const g=document.createElement("p");g.textContent=`ก่อนถอดชิ้นส่วนนี้ ให้ถอดสาย ${_.length} เส้นด้านล่าง`,s.append(g);for(const p of _){const v=document.createElement("button");v.textContent=`ถอด ${Ko[p.kind]}`,v.disabled=xt(l)||!!l.operation||l.sidePanelInstalled,v.onclick=()=>e.disconnectCable(p.id),s.append(v)}}}o.hidden=!u&&!l.operation;const d=t.querySelector(".slot-options");d.hidden=!u||u.instance.location!=="tray"||!!l.operation;const f=t.querySelector(".slot-buttons");if(f.replaceChildren(),u&&u.instance.location==="tray"&&!l.operation)for(const m of ni(l)){const _=Oi(l,u.instance.instanceId,m.key),g=document.createElement("button");g.textContent=`${_?"×":"✓"} ${m.key}${_?` — ${_}`:""}`,g.onclick=()=>e.install(m.key),f.append(g)}});return{dispose(){c(),t.remove()}}}function $g(i,e){const t=document.createElement("details");t.className="machine-status",t.innerHTML='<summary></summary><p class="power-budget"></p><ul></ul><small>กฎจำลองของเกม: (ภาระอุปกรณ์ + 50 W) × 1.25 ปัดขึ้น · ต้องมีสายที่จำเป็นครบ</small>',i.append(t);let n="";const s=e.subscribe(r=>{const o=JSON.stringify([r.caseId,r.cables,r.inventory.map(h=>h.placement)]);if(o===n)return;n=o;const a=ea(r.inventory.filter(h=>h.location==="installed").map(h=>je(h.catalogId)),Nn(r.caseId)),c=Fi(r);t.querySelector("summary").textContent=c.length===0?"✓ สถานะเครื่อง · พร้อมเปิด Power":`สถานะเครื่อง · ต้องแก้ ${c.length} รายการ`,t.querySelector(".power-budget").textContent=`PSU ${a.availableWatts} W / ต้องการ ${a.requiredWatts} W ตามชิ้นส่วนที่ติดตั้ง`;const l=t.querySelector("ul");l.replaceChildren();for(const h of c){const u=document.createElement("li");u.textContent=h,l.append(u)}});return{dispose(){s(),t.remove()}}}function Jg(i,e){const t=document.createElement("details");t.className="wiring-panel",t.innerHTML='<summary>Power / สาย</summary><p>กฎจำลองของเกม: ต้องมีอุปกรณ์หลักและสายที่จำเป็นครบ · M.2 ไม่ใช้สาย SATA</p><div class="power-actions"></div><p class="wire-state" role="status"></p><div class="wire-ports"></div><div class="wire-cables"></div><ul class="power-errors"></ul>',i.append(t);const n=(d,f,m)=>{const _=document.createElement("button");return _.textContent=d,_.onclick=f,m.append(_),_},s=t.querySelector(".power-actions"),r=t.querySelector(".power-errors");s.before(r);const o=n("⏻ เปิดเครื่อง",()=>e.pressPower(),s),a=n("ปิดเครื่องเพื่อแก้ไข",()=>e.powerOff(),s),c=n("เลือกหัวสายบนโมเดล",()=>e.toggleWiring(),s),l=n("ยกเลิกหัวสายที่เลือก",()=>e.cancel(),s);t.addEventListener("toggle",()=>{if(t.open){const d=i.querySelector(".machine-status");d&&(d.open=!1)}});let h="";const u=e.subscribe(d=>{const f=JSON.stringify([d.power,d.powerErrors,d.cables,d.selectedTerminal,d.wiringMode,d.operation?.id,d.sidePanelInstalled,d.inventory.map(w=>w.placement)]);if(f===h)return;h=f;const m=Ni(d),_=m.filter(w=>w.direction==="sink"&&!d.cables.some(T=>T.to===w.key));t.querySelector("summary").textContent=`ต่อสาย / เปิดเครื่อง · ${qg[d.power]}`,o.disabled=!!d.operation||xt(d),a.disabled=d.power==="OFF",c.disabled=!!d.operation||xt(d),c.textContent=d.wiringMode?"หยุดเลือกหัวสายบนโมเดล":"เลือกหัวสายบนโมเดล",l.hidden=!d.selectedTerminal,t.querySelector(".wire-state").textContent=d.sidePanelInstalled?"ถอดฝาข้างก่อนต่อ/ถอดสาย":d.selectedTerminal?"เลือกปลายทางสีเขียว หรือกดคู่หัวต่อด้านล่าง":"กดคู่หัวต่อเพื่อต่อสาย · DisplayPort คือสายภาพ GPU → จอ ส่วน GPU power คือไฟจาก PSU · ถอดด้วยปุ่มถอด";const g=t.querySelector(".wire-ports");g.replaceChildren();const p=document.createElement("h3");p.textContent=_.length?`ยังไม่ได้ต่อ ${_.length} เส้น`:"สายครบแล้ว",g.append(p);for(const w of _){const T=m.find(E=>E.direction==="source"&&E.kind===w.kind&&!d.cables.some(S=>S.from===E.key)),C=document.createElement("div");C.className="wire-task",g.append(C);const P=document.createElement("span");if(P.textContent=Ko[w.kind],C.append(P),T){const E=n("＋ ต่อสายนี้",()=>e.connectCable(T.key,w.key),C);E.disabled=!!ti(d,T.key,w.key),E.title=ti(d,T.key,w.key)??"ต่อสายและจัดเก็บตามเส้นทางในเคส"}else{const E=document.createElement("p");E.textContent="ติดตั้งอุปกรณ์ต้นทางก่อน (PSU / cooler / SATA SSD)",C.append(E)}}if(!_.length){const w=document.createElement("p");w.textContent=m.length?"✓ สายของอุปกรณ์ที่ติดตั้งครบแล้ว":"ติดตั้งอุปกรณ์ก่อน แล้วคู่หัวต่อจะแสดงที่นี่",g.append(w)}if(d.wiringMode)for(const w of m)(d.selectedTerminal?ti(d,d.selectedTerminal,w.key)===null:w.direction==="source"&&!d.cables.some(C=>C.from===w.key))&&(n(w.name,()=>e.chooseTerminal(w.key),g).disabled=d.sidePanelInstalled||!!d.operation||xt(d));const v=t.querySelector(".wire-cables");if(v.replaceChildren(),d.cables.length){const w=document.createElement("h3");w.textContent=`ต่อแล้ว ${d.cables.length} เส้น · ถอดได้ที่นี่`,v.append(w)}for(const w of d.cables){const T=document.createElement("div");T.className="connected-wire";const C=document.createElement("span");C.textContent=`✓ ${Ko[w.kind]}`,T.append(C),n("ถอดสาย",()=>e.disconnectCable(w.id),T).disabled=xt(d)||!!d.operation||d.sidePanelInstalled,v.append(T)}const y=t.querySelector(".power-errors");y.replaceChildren();const x=Fi(d);y.toggleAttribute("hidden",x.length===0);for(const w of x){const T=document.createElement("li");T.textContent=w,y.append(T)}});return{dispose(){u(),t.remove()}}}function jg(i,e){const t=document.createElement("button");t.className="jobs-toggle",t.textContent="งาน / ร้านค้า / Benchmark",t.setAttribute("aria-expanded","false");const n=document.createElement("aside");n.className="jobs-panel",n.hidden=!0,n.id="jobs-panel",t.setAttribute("aria-controls",n.id),n.innerHTML='<div class="inventory-heading"><h2>งานลูกค้า</h2><button class="close-jobs">✕</button></div><p class="job-wallet" role="status"></p><p class="job-message" role="status"></p><div class="job-list"></div><section class="job-active"></section><section class="benchmark-result" aria-live="polite"></section><div class="job-actions"></div><details class="job-shop"><summary>ร้านชิ้นส่วน</summary><div class="shop-items"></div></details><details class="job-returns"><summary>คืนชิ้นส่วนบนถาด</summary><div class="return-items"></div></details><p class="job-rules">รับงานจะเริ่มโต๊ะว่าง ชิ้นส่วนทดลองไม่ใช้ในงาน · เคสและสายเป็นอุปกรณ์ที่ร้านจัดให้ ไม่หักงบ · ส่งงานแล้วคืนของบนถาดและงบเหลือให้ลูกค้า รางวัลเข้ากระเป๋าแยก · ยังไม่บันทึกเมื่อรีโหลด</p>',n.querySelector(".job-rules").textContent="รับงานจะเริ่มโต๊ะว่าง · เคสและสายไม่หักงบ · ส่งงานแล้วคืนของบนถาดและงบเหลือให้ลูกค้า รางวัลแยกจากงบงาน · บันทึกอัตโนมัติในเบราว์เซอร์นี้ หลังโหลดต้องเปิดเครื่องและทดสอบคะแนนใหม่",i.append(t,n),t.onclick=()=>{n.hidden=!n.hidden,t.setAttribute("aria-expanded",String(!n.hidden)),n.hidden||e.toggle(!1)},n.querySelector(".close-jobs").onclick=()=>{n.hidden=!0,t.setAttribute("aria-expanded","false"),t.focus()};const s=(c,l,h,u=!1)=>{const d=document.createElement("button");return d.textContent=c,d.onclick=l,d.disabled=u,h.append(d),d};let r="";const o=e.subscribe(c=>{c.inventoryOpen&&(n.hidden=!0,t.setAttribute("aria-expanded","false"));const l=JSON.stringify([c.activeJobId,c.jobBudget,c.rewardMoney,c.completedJobs,c.benchmark,c.power,c.operation?.id,c.inventory,c.cables,c.lastDelivery,c.message]);if(l===r)return;r=l;const h=ii(c.activeJobId??"");n.querySelector(".job-wallet").textContent=`งบงานคงเหลือ ${c.jobBudget.toLocaleString()} cr · รางวัลสะสม ${c.rewardMoney.toLocaleString()} cr`,n.querySelector(".job-message").textContent=c.message,t.textContent=`งาน / ซื้อของ / ทดสอบ (${c.completedJobs.length}/3)`;const u=n.querySelector(".job-list");if(u.replaceChildren(),!h)for(const v of nr){const y=document.createElement("article");y.innerHTML=`<strong>${v.name}</strong><p>${v.description}<br>งบ ${v.budget.toLocaleString()} cr · รางวัล ${v.reward.toLocaleString()} cr<br>คะแนน ≥ ${v.minScore} · RAM ≥ ${v.minRamGB} GB · SSD รวม ≥ ${v.minStorageGB} GB</p>`,s(c.completedJobs.includes(v.id)?"ส่งสำเร็จแล้ว":"รับงานและเริ่มโต๊ะว่าง",()=>e.acceptJob(v.id),y,c.completedJobs.includes(v.id)||!!c.operation||xt(c)),u.append(y)}if(c.completedJobs.length===nr.length){const v=document.createElement("p");v.textContent="✓ จบครบทั้ง 3 งานแล้ว!",u.prepend(v)}const d=n.querySelector(".job-active");if(d.replaceChildren(),h){const v=document.createElement("h3");v.textContent=h.name,d.append(v);const y=document.createElement("ul");for(const T of ir(c)){const C=document.createElement("li");C.textContent=`${T.passed?"✓":"○"} ${T.label}`,y.append(C)}d.append(y);const x=document.createElement("details");x.innerHTML="<summary>ดูชุดแนะนำที่ทำงานนี้สำเร็จได้</summary>";const w=document.createElement("p");w.textContent=h.referenceParts.map(T=>je(T).name).join(" + "),x.append(w),d.append(x)}else if(c.lastDelivery){const v=document.createElement("p");v.textContent=`ส่งสำเร็จ: คะแนน ${c.lastDelivery.score} · ค่าชิ้นส่วนส่งมอบ ${c.lastDelivery.cost} cr · รับรางวัล ${c.lastDelivery.reward} cr · คืนของเหลือ ${c.lastDelivery.returnedParts} ชิ้น`,d.append(v)}const f=n.querySelector(".benchmark-result"),m=c.benchmark&&c.benchmark.fingerprint===ta(c);f.textContent=m?`คะแนนจำลองของเกม ${c.benchmark.score} · ${h?ir(c).every(v=>v.passed)?"ผ่านข้อกำหนดงาน":"ไม่ผ่านข้อกำหนดงาน":"ผ่านการทดสอบเครื่อง"} · ภาระไฟประมาณ ${c.benchmark.estimatedWatts} W · PSU แนะนำ ≥ ${c.benchmark.recommendedPsuWatts} W`:"คะแนนจำลองของเกม · เปิดเครื่องให้สำเร็จก่อนกดทดสอบ";const _=n.querySelector(".job-actions");_.replaceChildren(),s("ทดสอบคะแนนเครื่อง",()=>e.runBenchmark(),_,c.power!=="RUNNING"||!!c.operation),s("ส่งงานและรับรางวัล",()=>e.deliverJob(),_,!el(c));const g=n.querySelector(".shop-items");g.replaceChildren();for(const v of zn)s(`${v.type} · ${v.name} — ${v.price.toLocaleString()} cr`,()=>e.buyPart(v.id),g,!h||v.price>c.jobBudget||!!c.operation||xt(c)||c.inventory.length>=18);const p=n.querySelector(".return-items");p.replaceChildren();for(const v of c.inventory.filter(y=>y.location==="tray"&&y.purchasedFor===c.activeJobId))s(`คืน ${je(v.catalogId).name} (+${v.paidPrice} cr)`,()=>e.returnPart(v.instanceId),p,!!c.operation||xt(c))}),a=c=>{c.code==="Escape"&&(n.hidden=!0,t.setAttribute("aria-expanded","false"))};return window.addEventListener("keydown",a),{dispose(){o(),window.removeEventListener("keydown",a),t.remove(),n.remove()}}}function Kg(i,e){const t=document.createElement("section");t.className="control-dock",t.setAttribute("aria-label","เมนูโต๊ะประกอบ"),i.append(t);const s=[".inventory-panel",".case-panel",".jobs-panel",".wiring-panel",".machine-status"].map(m=>i.querySelector(m)),r=i.querySelector(".workbench-toolbar");r.append(i.querySelector(".jobs-toggle"));const o=s[1],a=document.createElement("div");a.className="case-lid-actions",a.append(...i.querySelectorAll(".side-panel-toggle")),o.append(a),t.append(r,...s,i.querySelector(".assembly-hud"));const c=document.createElement("section");c.className="case-dock",c.setAttribute("aria-label","ปรับแต่งเคส"),c.append(i.querySelector(".case-toggle"),o),i.append(c);const l=m=>{for(const _ of s)_!==m&&(_ instanceof HTMLDetailsElement?_.open=!1:_.hidden=!0);for(const[_,g]of[[".case-toggle",s[1]],[".jobs-toggle",s[2]]])g!==m&&i.querySelector(_)?.setAttribute("aria-expanded","false");m!==s[0]&&e.getState().inventoryOpen&&e.toggle(!1)},h=m=>{const _=m.target,g=_.closest(".inventory-toggle")?0:_.closest(".case-toggle")?1:_.closest(".jobs-toggle")?2:-1;if(g>=0)l(s[g]);else for(const p of s)p instanceof HTMLDetailsElement&&_.closest("summary")===p.querySelector("summary")&&l(p)};t.addEventListener("click",h,!0),c.addEventListener("click",h,!0);let u=!1;const d=e.subscribe(m=>{m.inventoryOpen&&!u&&(u=!0,l(s[0])),u=m.inventoryOpen}),f=m=>{if(m.key==="Escape")for(const _ of s)_ instanceof HTMLDetailsElement&&(_.open=!1)};return window.addEventListener("keydown",f),{dispose(){d(),t.removeEventListener("click",h,!0),c.removeEventListener("click",h,!0),window.removeEventListener("keydown",f),t.remove(),c.remove()}}}const Ea="ctc-pc-builder-save",Jl=1;function jl(i){return JSON.stringify({schemaVersion:Jl,data:{activeJobId:i.activeJobId,jobBudget:i.jobBudget,rewardMoney:i.rewardMoney,completedJobs:i.completedJobs,nextPurchaseId:i.nextPurchaseId,nextCableId:i.nextCableId,inventory:i.inventory.map(e=>({instanceId:e.instanceId,catalogId:e.catalogId,location:e.location,placement:e.placement?{ownerId:e.placement.ownerId,slotId:e.placement.slotId}:null,...e.purchasedFor?{purchasedFor:e.purchasedFor,paidPrice:e.paidPrice}:{}})),cables:i.cables.map(e=>({id:e.id,from:e.from,to:e.to,kind:e.kind})),caseId:i.caseId,finishId:i.finishId,patternId:i.patternId,sidePanelStyle:i.sidePanelStyle,sidePanelInstalled:i.sidePanelInstalled,backPanelInstalled:i.backPanelInstalled,rearPanelInstalled:i.rearPanelInstalled,tutorial:{step:i.tutorial.step,skipped:i.tutorial.skipped}}})}function Zg(i){try{const e=JSON.parse(i);if(e?.schemaVersion!==Jl)return{kind:"invalid",message:"เซฟเป็นเวอร์ชันที่เกมนี้ไม่รองรับ เก็บเซฟเดิมไว้แล้ว"};const t=e.data,n=h=>{if(!h)throw Error("invalid save")},s=h=>Number.isSafeInteger(h)&&Number(h)>=0;n(t&&s(t.jobBudget)&&s(t.rewardMoney)),n(Array.isArray(t.completedJobs)&&new Set(t.completedJobs).size===t.completedJobs.length&&t.completedJobs.every(h=>!!ii(h))),n(t.activeJobId===null||!!ii(t.activeJobId)),n(!t.completedJobs.includes(t.activeJobId)),n(t.rewardMoney===nr.filter(h=>t.completedJobs.includes(h.id)).reduce((h,u)=>h+u.reward,0)),n(dr.some(h=>h.id===t.caseId)&&fr.some(h=>h.id===t.finishId)&&Zo.some(h=>h.id===t.patternId)),n(["solid","glass"].includes(t.sidePanelStyle));for(const h of["sidePanelInstalled","backPanelInstalled","rearPanelInstalled"])n(typeof t[h]=="boolean");n(t.tutorial&&s(t.tutorial.step)&&t.tutorial.step<=Ci.length&&typeof t.tutorial.skipped=="boolean"),n(Array.isArray(t.inventory)&&t.inventory.length<=18&&Array.isArray(t.cables)&&t.cables.length<=20),n(s(t.nextPurchaseId)&&t.nextPurchaseId>=1&&s(t.nextCableId)&&t.nextCableId>=1);const r=new Set,o=t.inventory.map(h=>(n(h&&typeof h.instanceId=="string"&&/^(part-\d{3}|purchase-\d+)$/.test(h.instanceId)&&!r.has(h.instanceId)),r.add(h.instanceId),n(zn.some(u=>u.id===h.catalogId)),n(["tray","installed"].includes(h.location)),n(h.location==="tray"?h.placement===null:h.placement&&typeof h.placement.ownerId=="string"&&typeof h.placement.slotId=="string"),h.instanceId.startsWith("purchase-")&&n(Number(h.instanceId.slice(9))<t.nextPurchaseId),t.activeJobId?n(h.purchasedFor===t.activeJobId&&h.paidPrice===je(h.catalogId).price&&h.instanceId.startsWith("purchase-")):n(h.purchasedFor===void 0&&h.paidPrice===void 0),{instanceId:h.instanceId,catalogId:h.catalogId,location:h.location,placement:h.placement?{ownerId:h.placement.ownerId,slotId:h.placement.slotId}:null,...t.activeJobId?{purchasedFor:h.purchasedFor,paidPrice:h.paidPrice}:{}}));n(t.activeJobId?t.jobBudget+o.reduce((h,u)=>h+(u.paidPrice??0),0)===ii(t.activeJobId).budget:t.jobBudget===0);const a={...ls(),activeJobId:t.activeJobId,jobBudget:t.jobBudget,rewardMoney:t.rewardMoney,completedJobs:[...t.completedJobs],nextPurchaseId:t.nextPurchaseId,nextCableId:t.nextCableId,caseId:t.caseId,finishId:t.finishId,patternId:t.patternId,sidePanelStyle:t.sidePanelStyle,backPanelInstalled:t.backPanelInstalled,rearPanelInstalled:t.rearPanelInstalled,tutorial:{step:t.tutorial.step,skipped:t.tutorial.skipped},inventory:o.map(h=>({...h,location:"tray",placement:null})),cables:[],message:"โหลดเกมแล้ว · เครื่องปิดอยู่ พร้อมประกอบต่อ"},c=["Motherboard","CPU","CPU Cooler","RAM","GPU","SSD","PSU","GPU Support"];for(const h of o.filter(u=>u.placement).sort((u,d)=>c.indexOf(je(u.catalogId).type)-c.indexOf(je(d.catalogId).type)))n(Oi(a,h.instanceId,`${h.placement.ownerId}/${h.placement.slotId}`)===null),a.inventory=a.inventory.map(u=>u.instanceId===h.instanceId?h:u);const l=new Set;for(const h of t.cables){n(h&&s(h.id)&&h.id>0&&h.id<t.nextCableId&&!l.has(h.id)),l.add(h.id),n(typeof h.from=="string"&&typeof h.to=="string"&&ti(a,h.from,h.to)===null);const u=h.from.split("/")[1];n(h.kind===u||h.kind==="fan"&&u==="fan"),a.cables.push({id:h.id,from:h.from,to:h.to,kind:h.kind})}return a.sidePanelInstalled=t.sidePanelInstalled,{kind:"valid",state:a}}catch{return{kind:"invalid",message:"ข้อมูลเซฟเสียหรือไม่ครบ เก็บเซฟเดิมไว้แล้ว คุณเลือกเริ่มใหม่ได้"}}}function Qg(i,e,t){let n="";return i.subscribe(s=>{const r=jl(s);if(r!==n)try{e.setItem(Ea,r),n=r,t("บันทึกอัตโนมัติแล้ว")}catch{t("บันทึกไม่สำเร็จ: พื้นที่เต็มหรือเบราว์เซอร์ปิดการจัดเก็บข้อมูล อย่าเพิ่งปิดหน้านี้")}})}async function e_(i){let e=null,t="";try{e=localStorage.getItem(Ea)}catch{t="อ่านเซฟไม่ได้ เบราว์เซอร์ไม่อนุญาตการจัดเก็บข้อมูล"}if(e===null&&!t)return ls();const n=e!==null?Zg(e):null;return new Promise(s=>{const r=document.createElement("section");r.className="save-start",r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-label","เล่นต่อหรือเริ่มใหม่");const o=document.createElement("div");r.append(o);const a=document.createElement("h2");a.textContent="CTC · PC Builder",o.append(a);const c=document.createElement("p");c.textContent=t||(n?.kind==="invalid"?n.message:"พบเกมที่บันทึกไว้ เล่นต่อจากงานและชิ้นส่วนเดิมได้ เครื่องจะเริ่มในสถานะปิด"),o.append(c);const l=u=>{r.remove(),s(u)};if(n?.kind==="valid"){const u=document.createElement("button");u.textContent="เล่นต่อ · Continue Game",u.onclick=()=>l(n.state),o.append(u)}const h=document.createElement("button");h.textContent="เริ่มเกมใหม่ · New Game",h.onclick=()=>{window.confirm("เริ่มเกมใหม่และแทนที่เซฟเดิม? เงิน งาน ชิ้นส่วน และ tutorial เดิมจะถูกล้าง")&&l(ls())},o.append(h),i.append(r),o.querySelector("button")?.focus()})}function t_(i,e){const t=document.createElement("details");t.className="save-panel",t.innerHTML='<summary>เซฟเกม / วิธีเล่น</summary><p class="save-message" role="status"></p><button class="new-game">เริ่มเกมใหม่</button><section class="tutorial"><h3></h3><p></p><button></button><details><summary>ดูคำแนะนำทุกขั้นอีกครั้ง</summary><ol></ol></details></section>',i.querySelector(".control-dock").prepend(t);const n=l=>{t.querySelector(".save-message").textContent=l,t.querySelector("summary").textContent=l.startsWith("บันทึกไม่สำเร็จ")?"⚠ เซฟไม่สำเร็จ / วิธีเล่น":"เซฟเกม / วิธีเล่น"},s={setItem(l,h){window.localStorage.setItem(l,h)}},r=Qg(e,s,n),o=t.querySelector("ol");for(const[l,h]of Ci){const u=document.createElement("li");u.textContent=`${l}: ${h}`,o.append(u)}const a=t.querySelector(".tutorial"),c=e.subscribe(l=>{const h=Ci[l.tutorial.step];a.querySelector("h3").textContent=l.tutorial.skipped?"ข้าม tutorial แล้ว":h?`เป้าหมาย ${l.tutorial.step+1}/${Ci.length}: ${h[0]}`:"✓ เปิดเครื่องครั้งแรกสำเร็จ",a.querySelector("p").textContent=l.tutorial.skipped?"กดแสดงคำแนะนำเพื่อกลับมาดูได้ทุกเมื่อ":h?.[1]??"พร้อมรับงานและประกอบเครื่องลูกค้าแล้ว";const u=a.querySelector("button");u.textContent=l.tutorial.skipped?"แสดงคำแนะนำ":"ข้าม tutorial",u.onclick=()=>e.setTutorial(!e.getState().tutorial.skipped)});return t.open=!e.getState().tutorial.skipped&&e.getState().tutorial.step<Ci.length,t.querySelector(".new-game").onclick=()=>{if(window.confirm("ล้างเซฟและเริ่มเกมใหม่? เงิน งาน ชิ้นส่วน และ tutorial เดิมจะถูกแทนที่"))try{s.setItem(Ea,jl(ls())),r(),location.reload()}catch{n("บันทึกไม่สำเร็จ: ยังไม่ได้เริ่มใหม่ เซฟเดิมไม่ได้ถูกลบ")}},{dispose(){r(),c(),t.remove()}}}const jt=document.querySelector("#app");async function n_(){const i=await e_(jt),e=cu(i),t=hu(jt,e.getState()),n=uu(jt,e),s=Yg(jt,e),r=su(jt,e),o=$g(jt,e),a=Jg(jt,e),c=jg(jt,e),l=Kg(jt,e),h=t_(jt,e);try{const u=Xg(jt,t.showError,e);t.resetButton.addEventListener("click",u.resetCamera);const d=document.createElement("button");d.type="button",d.textContent="↓ มุมบน",d.style.marginRight="8px",t.resetButton.before(d),d.addEventListener("click",u.topView),window.addEventListener("pagehide",f=>{f.persisted||(h.dispose(),u.dispose(),n.dispose(),s.dispose(),r.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose())})}catch(u){console.error("Could not initialize the workbench:",u),t.showError("เบราว์เซอร์เริ่ม WebGL ไม่ได้ ลองเปิดการเร่งกราฟิก (Hardware acceleration) ในการตั้งค่า หรือเปิดด้วย Chrome / Edge รุ่นใหม่ แล้วกด “ลองใหม่”")}}n_();
