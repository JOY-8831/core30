/* Each stable exercise ID maps to videos/<id>.mp4 when video is set. */
const EXERCISES = {
 cocoon:['蠶蛹式捲腹','Cocoon crunch','軀幹屈曲','依來源影片確認動作版本，收腹捲起時吐氣，慢慢回到起始位置；不要甩腿或拉扯頸部。本站以小幅、可控制的動作練習。','改成小幅捲腹，雙腳踩地。'],
 twist:['俄羅斯轉體變式','Russian twist variation','旋轉','本站簡易版本：坐姿屈膝、腳跟著地，胸廓小幅左右轉動，骨盆穩定。左右各算一次，不用手臂快速甩動。','坐直並減少轉動幅度；不需抬腳或加重量。'],
 updown:['平板支撐起身','Up-down plank','抗伸展','從前臂棒式依序用手掌撐起，再依序回到前臂，算一次。每次交替先起身的手，骨盆不左右搖晃。','膝蓋著地；放慢速度，先保持骨盆穩定。'],
 vacuum:['跪姿真空腹','Kneeling abdominal draw-in','深層核心控制','本站採可持續呼吸的輕收腹版本：跪姿吐氣時輕收下腹，維持舒適的小幅呼吸。20 秒是練習區間，不是閉氣時間；不適就放鬆。','改仰躺屈膝呼吸，不強求收腹深度或持續 20 秒。'],
 breath:['呼吸與核心啟動','Breath & brace','啟動','仰躺屈膝。吸氣讓下肋向四周展開；吐氣時腹部輕收、骨盆底輕提，下一次吸氣放鬆。保持自然呼吸，不用力憋氣。','不必刻意提收骨盆底；先做舒適的呼吸。'],
 curl:['小幅捲腹','Controlled curl-up','軀幹屈曲','吐氣讓肩胛骨稍微離地，停 1 秒，再慢慢放下。眼睛看斜上方，不拉頸部。','縮小抬起幅度，雙手放大腿。'],
 reverse:['屈膝反向捲腹','Reverse crunch','骨盆控制','膝蓋彎曲，吐氣捲起尾骨一小段；用 3 秒放回。不是甩腿或把膝蓋拉到臉前。','雙腳踩地，只練骨盆前後小幅轉動。'],
 slide:['仰躺交替滑腿','Alternating heel slide','骨盆控制','仰躺屈膝，輕收下腹；一腳沿墊慢慢滑遠再收回，左右交替。腰部位置維持穩定。','腳跟只滑動一小段。'],
 bug:['死蟲式點地','Dead bug toe tap','抗伸展','髖膝彎曲約 90 度，左右腳尖輪流輕點地，吐氣回來。腰部不要隨腿拱起。','改成仰躺交替滑腿。'],
 reachbug:['對側伸展死蟲式','Opposite dead bug','抗伸展','對側手腳慢慢伸遠，再收回，左右交替。每次吐氣伸展；腰部離地就縮小幅度。','手不動，只做腳尖點地。'],
 bird:['鳥狗式交替伸展','Bird dog','抗旋轉','四足跪姿，對側手腳伸遠，停 2 秒再收回。想像骨盆上有一杯水，不側倒。','一次只移動一隻手或一隻腳。'],
 birdcurl:['鳥狗式收膝伸展','Bird dog knee-in','抗旋轉','對側手腳伸遠，停 2 秒後慢慢收向腹部，再伸展。左右交替，軀幹不要左右晃。','回到基本鳥狗式，或只滑動單腳。'],
 cross:['交替斜向捲腹','Alternating cross crunch','旋轉','仰躺屈膝、腳踩地，交替讓肩膀朝對側膝蓋小幅捲起。胸廓轉動，骨盆不晃。','雙腳保持踩地，減少捲起高度。'],
 march:['高棒式交替收膝','Slow plank knee drive','抗伸展','手掌在肩下，左右膝慢慢向前收再回去。骨盆不塌、不抬高；不是衝刺登山跑。','雙手撐穩固桌面，縮短收膝距離。'],
 taps:['棒式交替摸肩','Shoulder taps','抗旋轉','雙腳比髖寬，手掌在肩下；左右手交替輕摸對側肩膀，放回才換手，骨盆保持水平。','膝蓋著地，或雙手撐穩固桌面。'],
 step:['棒式交替側踏','Plank step-out','抗伸展','高棒式，一腳向旁踏出、收回再換腳。手掌推地，肋骨與骨盆保持對齊。','膝蓋著地，交替向旁滑腳。'],
 plank:['前臂棒式','Forearm plank','穩定','手肘在肩膀下，臀部輕收，頭到腳成一直線。持續呼吸，不塌腰。','膝蓋著地；每 10–15 秒可短暫放鬆。'],
 left:['左側棒式','Left side plank','側向穩定','左前臂支撐、手肘在肩下，抬起骨盆並保持身體對齊。可用屈膝版本。','雙膝彎曲著地，縮短支撐槓桿。'],
 right:['右側棒式','Right side plank','側向穩定','右前臂支撐、手肘在肩下，抬起骨盆並保持身體對齊。可用屈膝版本。','雙膝彎曲著地，縮短支撐槓桿。']
};
Object.entries(EXERCISES).forEach(([id,e])=> EXERCISES[id]={id,name:e[0],en:e[1],function:e[2],cue:e[3],easy:e[4],video:''});
const MONDAY_SOURCE={url:'https://www.youtube.com/watch?v=wMCFIixwgac',label:'週一五動作原始影片（YouTube）',note:'動作名稱、次數與順序依使用者提供的截圖；週一保留指定影片順序，反向捲腹後接真空腹。計時、休息與簡易版為本站改編，非原影片逐秒課表。'};
// Chapter labels/timestamps transcribed from the user's screenshot, not inferred durations.
const SECOND_SOURCE={url:'https://www.youtube.com/watch?v=v0b5HO1ozWQ',label:'核心循環原始影片（YouTube）',note:'動作名稱與示範時間點依使用者截圖；依使用者指定以搖擺登山者起頭，其餘依截圖順序，不套用六階段重排；秒數、休息及簡易版為本站改編，時間點不是動作時長。'};
const SECOND_CHAPTERS=[
 {id:'moon',name:'新月環繞',time:15,stamp:'0:15',function:'骨盆控制',easy:'改成仰躺交替滑腿，縮小活動範圍。'},
 {id:'rockclimber',name:'搖擺登山者',time:78,stamp:'1:18',function:'抗伸展',easy:'改成高棒式慢速交替收膝，雙手可撐穩固桌面。'},
 {id:'legclap',name:'抬腿合手',time:137,stamp:'2:17',function:'骨盆控制',easy:'改成屈膝交替抬腿，雙手不必合攏。'},
 {id:'sidebikeleft',name:'側單車式（左）',time:197,stamp:'3:17',function:'旋轉',easy:'縮小左側動作幅度；不拉扯頸部。'},
 {id:'sidebikeright',name:'側單車式（右）',time:260,stamp:'4:20',function:'旋轉',easy:'與左側採相同幅度及時間。'},
 {id:'climbertilt',name:'登山者側傾',time:317,stamp:'5:17',function:'抗旋轉',easy:'改成骨盆穩定的慢速交替收膝。'},
 {id:'frogv',name:'青蛙V型上舉',time:378,stamp:'6:18',function:'軀幹屈曲',easy:'改成腳踩地的小幅捲腹，避免甩動起身。'},
 {id:'scissorleft',name:'側剪刀捲腹（左）',time:437,stamp:'7:17',function:'軀幹屈曲',easy:'左側縮小捲起幅度，腿可彎曲。'},
 {id:'scissorright',name:'側剪刀捲腹（右）',time:499,stamp:'8:19',function:'軀幹屈曲',easy:'右側採與左側相同幅度，腿可彎曲。'},
 {id:'corpsecrunch',name:'屍體捲腹',time:558,stamp:'9:18',function:'軀幹屈曲',easy:'改成屈膝、腳踩地的小幅捲腹。'}
];
SECOND_CHAPTERS.forEach(c=>{EXERCISES[c.id]={id:c.id,name:c.name,en:`來源示範 ${c.stamp}`,function:c.function,cue:'請先開啟下方來源示範確認動作版本。以可控制的幅度練習，出力時吐氣；姿勢不穩就縮小幅度或換簡易版。',easy:c.easy,video:'',sourceUrl:`${SECOND_SOURCE.url}&t=${c.time}s`,stamp:c.stamp};});

const VARIATIONS={
 heelreach:['仰躺交替摸腳跟','Heel reaches','旋轉','肩胛骨微離地，左右手輪流朝同側腳跟伸近；骨盆不晃，不拉頸部。','頭部放回墊上，縮短側伸距離。'],
 tabletopcurl:['桌面腿捲腹','Tabletop crunch','軀幹屈曲','髖膝約 90 度，吐氣小幅捲起肩胛骨；腿保持不動，慢慢放下。','雙腳踩地，做小幅捲腹。'],
 longcurl:['長手臂捲腹','Long-arm crunch','軀幹屈曲','雙手朝斜上方伸長，吐氣捲起肩胛骨；不要靠甩手起身。','雙手放大腿，縮小捲起幅度。'],
 toecrunch:['屈膝向上觸膝','Bent-knee reach crunch','軀幹屈曲','雙腿屈膝抬起，雙手往膝蓋方向伸，吐氣捲起肩胛骨再放下。','腳踩地，手沿大腿上滑。'],
 bentlower:['屈膝雙腿下放','Bent-knee lower','骨盆控制','髖膝約 90 度，兩腿慢慢下放一小段再回來；腰部開始拱起前就停止下放。','一次只放下一腳，另一腳保持不動。'],
 marchsupine:['仰躺交替抬膝','Supine march','骨盆控制','雙腳踩地，吐氣抬起一膝再放回，左右交替；骨盆不跟著傾斜。','腳掌僅離地少許。'],
 reversepause:['反向捲腹停頓','Paused reverse crunch','骨盆控制','屈膝吐氣捲起尾骨一小段，停 2 秒後慢慢放回；不要甩腿。','腳踩地，只練骨盆後傾。'],
 bugpress:['死蟲式對側推膝','Dead bug press','抗伸展','一手輕推對側膝，另一腿緩慢伸遠再收回；每次換邊，腰不拱起。','伸出的腳沿地滑動，縮短距離。'],
 plankreach:['跪姿棒式交替前伸','Kneeling plank reach','抗旋轉','膝蓋著地、雙手撐地，交替伸出一手再收回；胸口骨盆朝地。','手指沿地前滑，不離地。'],
 bearstep:['熊式交替後踏','Bear step-back','抗伸展','四足跪姿，膝蓋微離地；一腳往後踏再收回，左右交替，背部保持平穩。','膝蓋著地，只沿地向後滑腿。'],
 bicycle:['慢速單車捲腹','Slow bicycle crunch','旋轉','一側肩膀朝對側膝靠近，另一腿慢慢伸遠，左右交替；不用手拉頭。','伸出的腳踩地，減少轉動幅度。'],
 seatedknee:['坐姿屈膝收腿','Seated knee tuck','骨盆控制','坐在墊上雙手在身後輕撐，兩腳跟向前滑再收回，胸口抬起、下腹收穩。','一次滑動一腳，減少後傾。']
};
Object.entries(VARIATIONS).forEach(([id,e])=>EXERCISES[id]={id,name:e[0],en:e[1],function:e[2],cue:e[3],easy:e[4],video:''});
const HJ_SOURCE={url:'https://www.facebook.com/ourjyh57/videos/980665221394207/',label:'體結健身・四動作核心（Facebook）',note:'依影片動作整理；名稱為本站描述性命名，順序依六階段重排，計時、輪數與簡易版為本站改編。'};
const HJ_MOVES={
 hjsupported:['手撐地坐姿收膝','Supported seated knee tuck','軀幹屈曲','雙手撐在身後，雙腳懸空；慢慢伸腿再收膝，軀幹配合小幅前後移動，不甩腿。','雙腳跟沿地滑動，縮小伸腿距離。'],
 hjtwist:['坐姿交替轉體收膝','Seated alternating bicycle twist','旋轉','坐姿後傾，交替收一膝、伸另一腿，胸廓轉向收膝側；雙手放頭旁但不拉頸。','腳跟輪流踩地，手放胸前，縮小轉動幅度。'],
 hjflutter:['坐姿交替踢腿','Seated flutter kicks','骨盆控制','雙手撐在身後，雙腳懸空交替上下小幅踢動；腹部收穩，腰不塌，保持呼吸。','屈膝縮短槓桿，腳跟可交替點地。'],
 hjbalance:['懸空坐姿收膝','Hands-free seated knee tuck','軀幹屈曲','雙手離地向前伸，雙腿伸出後收膝，軀幹配合小幅靠近；慢慢控制，不靠甩動保持平衡。','雙手撐地，或改腳跟沿地滑動的坐姿收腿。']
};
Object.entries(HJ_MOVES).forEach(([id,e])=>EXERCISES[id]={id,name:e[0],en:e[1],function:e[2],cue:e[3],easy:e[4],video:'',sourceUrl:HJ_SOURCE.url,stamp:'體結健身原片'});
const RUN_SOURCE={url:'https://www.youtube.com/watch?v=nYnxjqaBLnw',label:'登山跑／掌撐抬膝循環（YouTube）',note:'動作名稱、順序與秒數依使用者提供；本站補充提示與簡易版。請先觀看原片確認掌撐抬膝版本。'};
const RUN_MOVES={
 climbrun:['登山跑','Mountain climber run','手掌在肩下，交替收膝；以腰不塌、骨盆不晃的速度進行，持續呼吸。','改慢速登山走，雙手可撐穩固桌面。'],
 climbwalk:['登山走','Slow mountain climber','交替慢慢收膝再回位，一腳回穩才換腳，維持軀幹穩定。','雙手撐穩固桌面，減少收膝幅度。'],
 palmrun:['掌撐抬膝跑','Palm-supported knee raise run','先依來源影片確認掌撐姿勢與抬膝方向；肩膀穩定、不聳肩，以可控制的節奏交替抬膝。','依原片支撐方式改慢速抬膝；不穩或手腕不適就停止。'],
 palmwalk:['掌撐抬膝走','Palm-supported knee raise walk','沿用前一動作的掌撐姿勢，放慢抬膝節奏，逐腳控制落回，保持呼吸。','減少抬膝幅度，必要時延長休息。']
};
Object.entries(RUN_MOVES).forEach(([id,e])=>EXERCISES[id]={id,name:e[0],en:e[1],function:'抗伸展',cue:e[2],easy:e[3],video:'',sourceUrl:RUN_SOURCE.url,stamp:'原片示範'});
const MUSCLE_FUNCTION={
 '軀幹屈曲':'腹直肌（捲起軀幹）', '骨盆控制':'腹直肌、深層核心（穩住骨盆）',
 '旋轉':'腹內／外斜肌（兩側腰腹）', '抗旋轉':'腹斜肌、腹橫肌（抵抗扭轉）',
 '抗伸展':'腹直肌、腹橫肌（防止塌腰）', '穩定':'腹直肌、腹斜肌、腹橫肌',
 '側向穩定':'支撐側腹斜肌、深層核心', '深層核心控制':'腹橫肌（深層收腹控制）', '啟動':'腹橫肌與骨盆底的呼吸協調'
};
Object.values(EXERCISES).forEach(e=>e.muscles=MUSCLE_FUNCTION[e.function]);
// Stage is a movement category, not an isolated muscle or a mandatory daily slot.
const TRAINING_STAGES=['下腹／抬腿控制','由下往上','腹斜肌','中段屈曲','由上往下旋轉','由上往下屈曲'];
const STAGE_IDS=[['hjflutter','slide','bug','reachbug','bentlower','marchsupine','bugpress','moon','legclap'],['reverse','reversepause'],['heelreach','sidebikeleft','sidebikeright','climbertilt','scissorleft','scissorright'],['hjsupported','hjbalance','cocoon','seatedknee','frogv'],['hjtwist','twist','cross','bicycle'],['curl','tabletopcurl','longcurl','toecrunch','corpsecrunch']];
STAGE_IDS.forEach((ids,i)=>ids.forEach(id=>EXERCISES[id].stage=i+1));
const SERRATUS_IDS=['climbrun','climbwalk','palmrun','palmwalk','updown','bird','birdcurl','march','taps','step','plank','left','right','plankreach','bearstep','rockclimber','climbertilt'];
Object.values(EXERCISES).forEach(e=>{
 const f=e.function;
 e.regions=f==='啟動'?['transverse','pelvic']:f==='深層核心控制'?['transverse']:f==='軀幹屈曲'?['rectus']:['旋轉','側向穩定','抗旋轉'].includes(f)?['external','internal','transverse']:f==='穩定'?['rectus','external','internal','transverse']:['rectus','transverse'];
 if(SERRATUS_IDS.includes(e.id))e.regions.push('serratus');
 e.muscles=e.regions.map(k=>({rectus:'腹直肌',external:'腹外斜肌',internal:'腹內斜肌',transverse:'腹橫肌',pelvic:'骨盆底',serratus:'前鋸肌（協助肩胛穩定）'}[k])).join('、');
});
function orderExercises(ids){return [...ids].sort((a,b)=>(EXERCISES[a].stage||7)-(EXERCISES[b].stage||7))}
Object.values(EXERCISES).forEach(e=>{e.rectusFocus=[1,2].includes(e.stage)?'偏下段控制':e.stage===6?'偏上段捲起':[4,5].includes(e.stage)?'上下段協作':'整體穩定';e.muscles=e.muscles.replace('腹直肌',`腹直肌（${e.rectusFocus}）`)});
function stageLabel(e){return e.stage?`${e.stage} · ${TRAINING_STAGES[e.stage-1]}`:e.id==='breath'?'啟動 · 呼吸協調':e.id==='vacuum'?'收尾 · 深層控制':'補充 · 穩定控制'}
const RESEARCH_SOURCES=[
 {url:'https://www.fitnessblender.com/videos/8-minute-abs-workout-quick-abs-and-obliques-workout',label:'Fitness Blender・8 分鐘腹肌循環',note:'參考短時、多動作、兩輪循環的編排；本站重新選動作，並加入休息。'},
 {url:'https://www.youtube.com/watch?v=f2HbWMSV9Go',label:'MadFit・10 分鐘 No Repeats 核心',note:'參考不同動作交替的編排方向；本站保留兩輪來練習控制，並非原影片課表或逐動作轉錄。'},
 {url:'https://leeyihugh.com/blog/post/181063003',label:'一休・TABATA 間歇安排',note:'只參考 20 秒動作／10 秒休息的節奏。本站為 3 輪核心控制循環，共 6:30，並非原版 4 分鐘全力 Tabata。'}
];
// Wed / Thu / Fri: a distinct combination in each phase; repetition within rounds is deliberate.
const WEEKDAY_SETS=[
 [['curl','marchsupine','bird','bug'],['tabletopcurl','slide','heelreach','reachbug'],['toecrunch','reverse','cross','bug']],
 [['longcurl','slide','birdcurl','bugpress'],['tabletopcurl','bentlower','heelreach','march'],['toecrunch','marchsupine','bicycle','reachbug']],
 [['toecrunch','seatedknee','plankreach','bug'],['longcurl','reversepause','bicycle','bearstep'],['tabletopcurl','bentlower','cross','step']],
 [['tabletopcurl','marchsupine','birdcurl','bugpress','heelreach'],['longcurl','seatedknee','bicycle','reachbug','step'],['toecrunch','reversepause','plankreach','bearstep']]
];

const MONDAY_REPS={cocoon:'10–15 次',twist:'每邊 10 次',updown:'10–15 次',reverse:'15–20 次',vacuum:'5 組 × 20 秒'};
const PHASES=[
 {name:'建立控制',en:'FOUNDATION',note:'先穩住軀幹，再做小幅動作。每次約 3 秒，強度約 4–5 / 10。',work:30,rest:15},
 {name:'動態控制',en:'CONTROL',note:'維持呼吸，延長控制時間。伸展到腰部仍穩定的位置，強度約 5–6 / 10。',work:35,rest:15},
 {name:'穩定中移動',en:'INTEGRATE',note:'鳥狗伸展停 2 秒；棒式動作慢慢做，軀幹保持穩定。強度約 5–6 / 10。',work:40,rest:15},
 {name:'整合與鞏固',en:'BUILD',note:'5 個動作串聯，每次先穩住再移動；不要追求速度。強度約 6 / 10。',work:35,rest:10}
];
function localDate(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function dateAt(start,offset){const d=new Date(start+'T12:00:00');d.setDate(d.getDate()+offset);return d}
function makePlan(start){return Array.from({length:30},(_,i)=>{
 const date=dateAt(start,i),weekend=[0,6].includes(date.getDay()),phase=Math.min(3,Math.floor(i/7)),p=PHASES[phase];
 const light=!weekend&&date.getDay()===3;
 if(date.getDay()===1){
  const ids=['cocoon','twist','updown','reverse','vacuum'],work=45+phase*5,rest=20;
  const segments=[{type:'work',id:'breath',seconds:30,round:0},{type:'rest',seconds:5,round:0,transition:true,label:'換姿勢 · 準備第一個動作'}];
  ids.slice(0,4).forEach(id=>{segments.push({type:'work',id,seconds:work,round:1,target:MONDAY_REPS[id]});segments.push({type:'rest',seconds:rest,round:1,label:'休息 / 換動作'})});
  for(let set=1;set<=5;set++){segments.push({type:'work',id:'vacuum',seconds:20,round:0,set,target:`第 ${set} / 5 組 · 20 秒`});segments.push({type:'rest',seconds:10,round:0,label:set===5?'放鬆呼吸':'放鬆 / 組間休息'})}
  return {day:i+1,date:localDate(date),weekday:'一',weekend:false,monday:true,phase,light:false,ids,work,rest,rounds:1,segments,total:segments.reduce((sum,x)=>sum+x.seconds,0),title:'週一・五動作核心（建議早上做）',source:MONDAY_SOURCE};
 }
 if(date.getDay()===2){
  const ids=['rockclimber',...SECOND_CHAPTERS.filter(c=>c.id!=='rockclimber').map(c=>c.id)],work=30+Math.min(phase,2)*5,rest=10;
  const segments=[{type:'work',id:'breath',seconds:30,round:0},{type:'rest',seconds:5,round:0,transition:true,label:'換姿勢 · 準備第一個動作'}];
  ids.forEach((id,j)=>{segments.push({type:'work',id,seconds:work,round:1});segments.push({type:'rest',seconds:rest,round:1,label:j===ids.length-1?'放鬆呼吸':'休息 / 換動作'})});
  return {day:i+1,date:localDate(date),weekday:'二',weekend:false,tuesday:true,phase,light:false,ids,work,rest,rounds:1,segments,total:segments.reduce((sum,x)=>sum+x.seconds,0),title:'週二・影片核心循環',source:SECOND_SOURCE};
 }
 if(date.getDay()===5&&[1,2].includes(phase)){
  const ids=Object.keys(RUN_MOVES),segments=[];
  for(let round=1;round<=3;round++){ids.forEach(id=>segments.push({type:'work',id,seconds:20,round}));segments.push({type:'rest',seconds:40,round,label:round===3?'休息 / 放鬆':'組間休息'})}
  return {day:i+1,date:localDate(date),weekday:'五',weekend:false,phase,light:false,intervalFlow:true,ids,work:20,rest:40,rounds:3,segments,total:360,title:'登山跑・掌撐抬膝循環',source:RUN_SOURCE};
 }
 const friday=date.getDay()===5;
 const hj=friday&&phase===3;
 const ids=weekend?['plank','left','right','taps']:orderExercises(hj?Object.keys(HJ_MOVES):WEEKDAY_SETS[phase][date.getDay()-3]);
 const rounds=friday?3:2;
 const work=weekend?30:friday?20:(light?30:p.work),rest=weekend||friday?10:p.rest;
 const segments=[{type:'work',id:'breath',seconds:30,round:0},{type:'rest',seconds:5,round:0,transition:true,label:'換姿勢 · 準備第一個動作'}];
 for(let r=1;r<=rounds;r++)ids.forEach((id,j)=>{segments.push({type:'work',id,seconds:['plank','left','right'].includes(id)?45:work,round:r});segments.push({type:'rest',seconds:rest,round:r,label:r===rounds&&j===ids.length-1?'放鬆呼吸':'休息 / 換動作'})});
 return {day:i+1,date:localDate(date),weekday:['日','一','二','三','四','五','六'][date.getDay()],weekend,phase,light,hj,ids,work,rest,rounds,segments,total:segments.reduce((s,x)=>s+x.seconds,0),source:hj?HJ_SOURCE:weekend?null:RESEARCH_SOURCES[date.getDay()-3],title:hj?'體結健身・四動作核心':weekend?'週末穩定練習':friday?'20／10 核心循環':light?'輕量技術日':p.name};
})}
function clockText(seconds){return `${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`}

// Local video convention: drop matching MP4 files into videos/.
Object.values(EXERCISES).forEach(e=>{if(!e.video)e.video='videos/'+e.id+'.mp4'});
