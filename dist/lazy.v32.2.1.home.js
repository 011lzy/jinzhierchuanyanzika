// 本件由 tools/assemble.py 生成·勿手改：首屏 JS 分片（进这一页那一刻才取），源＝js/ 那些拆分件
var HM_ROOM_LBL = { '': '客厅', bed: '卧室', study: '书房', kitchen: '厨房', dining: '餐厅', bath: '浴室', balcony: '阳台', entry: '玄关' };
var HM_ACT_LBL = { free: '空闲', busy: '忙碌', rushed: '赶时间', rest: '休息', sleep: '睡着', unknown: '未知', away: '不在家' };
var HM_TP_LBL = { wee: '凌晨', dawn: '清晨', morning: '上午', noon: '午后', afternoon: '下午', evening: '傍晚', night: '夜里' };
var HM_GREEN_LBL = { plant: '落地绿植', plantstand: '花架', vase: '瓶花', hangplant: '吊兰', flowerbox: '花槽' };
var HM_STAGE_LBL = { 0: '小苗', 1: '长叶', 2: '花期' };
function _hmRoomLbl(rk) { return HM_ROOM_LBL[rk] || HM_ROOM_LBL['']; }
function _hmPsList(name, label) {
return (typeof presetSayList === 'function') ? presetSayList(name, label) : [];
}
function _hmPsPick(name, label) {
return (typeof presetSayPick === 'function') ? presetSayPick(name, label) : '';
}
var HM_ROOM_ATTR = 'viewBox="0 0 340 310" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="geometricPrecision" aria-hidden="true"';
function _hmPxRect(x, y, w, h, cls, op) {
return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '"'
+ (cls ? ' class="' + cls + '"' : '') + ' stroke="none" shape-rendering="crispEdges"'
+ (op !== undefined ? ' opacity="' + op + '"' : '') + '/>';
}
function _hmPx(list, s) {
s = s || 1;
return list.map(function (a) {
return _hmPxRect(a[0] * s, a[1] * s, a[2] * s, a[3] * s, a[4], a[5]);
}).join('');
}
function _hmPropSvg(list) {
return '<svg viewBox="0 0 16 22" fill="none" shape-rendering="crispEdges" aria-hidden="true">' + _hmPx(list) + '</svg>';
}
function _hmPropSvgWide(list) {
return '<svg viewBox="0 0 24 20" fill="none" shape-rendering="crispEdges" aria-hidden="true">' + _hmPx(list) + '</svg>';
}
function _hmObjSvg(list) {
return '<svg viewBox="0 0 10 10" fill="none" shape-rendering="crispEdges" aria-hidden="true">' + _hmPx(list) + '</svg>';
}
function _hmIcoSvg(list) {
return '<svg viewBox="0 0 12 12" fill="none" shape-rendering="crispEdges" aria-hidden="true">' + _hmPx(list) + '</svg>';
}
var HM_ROOM_DEFS = ''
+ '<defs>'
+ '<linearGradient id="hmFloorSh" x1="0" y1="0" x2="0" y2="1">'
+ '<stop offset="0" stop-color="#6b4a33" stop-opacity="0"/>'
+ '<stop offset=".12" stop-color="#6b4a33" stop-opacity=".13"/>'
+ '<stop offset="1" stop-color="#6b4a33" stop-opacity="0"/></linearGradient>'
+ '<linearGradient id="hmFootSh" x1="0" y1="0" x2="0" y2="1">'
+ '<stop offset="0" stop-color="#6b4a33" stop-opacity="0"/>'
+ '<stop offset=".45" stop-color="#6b4a33" stop-opacity=".10"/>'
+ '<stop offset="1" stop-color="#6b4a33" stop-opacity="0"/></linearGradient>'
+ '<linearGradient id="hmFrontSh" x1="0" y1="0" x2="0" y2="1">'
+ '<stop offset="0" stop-color="#6b4a33" stop-opacity="0"/>'
+ '<stop offset="1" stop-color="#6b4a33" stop-opacity=".11"/></linearGradient>'
+ '<linearGradient id="hmSideL" x1="0" y1="0" x2="1" y2="0">'
+ '<stop offset="0" stop-color="#6b4a33" stop-opacity=".13"/>'
+ '<stop offset="1" stop-color="#6b4a33" stop-opacity="0"/></linearGradient>'
+ '<linearGradient id="hmSideR" x1="1" y1="0" x2="0" y2="0">'
+ '<stop offset="0" stop-color="#6b4a33" stop-opacity=".13"/>'
+ '<stop offset="1" stop-color="#6b4a33" stop-opacity="0"/></linearGradient>'
+ '<linearGradient id="hmTopSh" x1="0" y1="0" x2="0" y2="1">'
+ '<stop offset="0" stop-color="#6b4a33" stop-opacity=".10"/>'
+ '<stop offset="1" stop-color="#6b4a33" stop-opacity="0"/></linearGradient>'
+ '<filter id="hmSoft" x="-30%" y="-30%" width="160%" height="170%">'
+ '<feDropShadow dx="1.5" dy="3" stdDeviation="2.5" flood-color="#6b4a33" flood-opacity=".13"/></filter>'
+ '<filter id="hmLift" x="-25%" y="-25%" width="160%" height="175%">'
+ '<feDropShadow dx="2.5" dy="3.5" stdDeviation="3.2" flood-color="#6b4a33" flood-opacity=".13"/>'
+ '<feDropShadow dx="1" dy="2" stdDeviation="1.6" flood-color="#6b4a33" flood-opacity=".08"/></filter>'
+ '<filter id="hmPaperGrain">'
+ '<feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="7"/>'
+ '<feColorMatrix type="saturate" values="0"/>'
+ '<feComponentTransfer><feFuncA type="linear" slope=".3"/></feComponentTransfer>'
+ '</filter>'
+ '</defs>';
var HM_ROOM_WIN_FROST = ''
+ '<g filter="url(#hmLift)">'
+ '<rect class="hm-r-frame" x="44" y="44" width="92" height="76" rx="5"/>'
+ '<rect class="hm-r-vig-soft" x="52" y="52" width="76" height="60" rx="3"/>'
+ '<rect class="hm-r-mull" x="86" y="52" width="5" height="60" rx="1"/>'
+ '<rect class="hm-r-mull" x="52" y="80" width="76" height="5" rx="1"/>'
+ '<rect class="hm-r-sill" x="40" y="120" width="100" height="9" rx="3"/>'
+ '</g>';
var HM_ROOM_CHECKER = ''
+ '<g opacity=".5">'
+ '<rect class="hm-r-vig-soft" x="0" y="206" width="28" height="26"/><rect class="hm-r-vig-soft" x="56" y="206" width="28" height="26"/><rect class="hm-r-vig-soft" x="112" y="206" width="28" height="26"/><rect class="hm-r-vig-soft" x="168" y="206" width="28" height="26"/><rect class="hm-r-vig-soft" x="224" y="206" width="28" height="26"/><rect class="hm-r-vig-soft" x="280" y="206" width="28" height="26"/>'
+ '<rect class="hm-r-vig-soft" x="28" y="232" width="28" height="26"/><rect class="hm-r-vig-soft" x="84" y="232" width="28" height="26"/><rect class="hm-r-vig-soft" x="140" y="232" width="28" height="26"/><rect class="hm-r-vig-soft" x="196" y="232" width="28" height="26"/><rect class="hm-r-vig-soft" x="252" y="232" width="28" height="26"/><rect class="hm-r-vig-soft" x="308" y="232" width="28" height="26"/>'
+ '<rect class="hm-r-vig-soft" x="0" y="258" width="28" height="26"/><rect class="hm-r-vig-soft" x="56" y="258" width="28" height="26"/><rect class="hm-r-vig-soft" x="112" y="258" width="28" height="26"/><rect class="hm-r-vig-soft" x="168" y="258" width="28" height="26"/><rect class="hm-r-vig-soft" x="224" y="258" width="28" height="26"/><rect class="hm-r-vig-soft" x="280" y="258" width="28" height="26"/>'
+ '<rect class="hm-r-vig-soft" x="28" y="284" width="28" height="26"/><rect class="hm-r-vig-soft" x="84" y="284" width="28" height="26"/><rect class="hm-r-vig-soft" x="140" y="284" width="28" height="26"/><rect class="hm-r-vig-soft" x="196" y="284" width="28" height="26"/><rect class="hm-r-vig-soft" x="252" y="284" width="28" height="26"/><rect class="hm-r-vig-soft" x="308" y="284" width="28" height="26"/>'
+ '</g>';
var HM_ROOM_WAINSCOT = ''
+ '<g opacity=".8">'
+ '<path class="hm-r-plank" d="M34 158v48M102 158v48M170 158v48M238 158v48M306 158v48"/>'
+ '<path class="hm-r-board" d="M0 178h340"/>'
+ '</g>';
var HM_ROOM_BALCONY_SHELL = ''
+ '<rect class="hm-r-glass" x="0" y="0" width="340" height="206"/>'
+ '<g class="hm-r-sun"><circle cx="272" cy="56" r="16" opacity=".25"/><circle cx="272" cy="56" r="11"/></g>'
+ '<path class="hm-r-cloud" d="M48 62c0-5 4-8 8-6 2-4 8-5 11-1 5-1 8 2 8 5 0 3-3 5-6 5H53c-3 0-5-2-5-3Z"/>'
+ '<path class="hm-r-cloud" d="M120 84c0-4 3-6 6-5 2-3 6-4 9-1 4-1 7 2 7 4 0 3-2 4-5 4h-14c-2 0-3-1-3-2Z" opacity=".72"/>'
+ '<path class="hm-r-hill" d="M0 128c24-16 48-18 72-6 16-14 40-14 56-3 14-7 28-6 40-2v89H0Z"/>'
+ '<path class="hm-r-hill-deep" d="M0 142c20 5 44-2 62 2s40 5 56-1 30-3 42 1v66H0Z"/>'
+ '<rect class="hm-r-frame" x="0" y="128" width="340" height="7"/>'
+ '<rect class="hm-r-frame" x="0" y="196" width="340" height="7"/>'
+ '<rect class="hm-r-frame" x="10" y="135" width="6" height="61"/>'
+ '<rect class="hm-r-frame" x="58" y="135" width="6" height="61"/>'
+ '<rect class="hm-r-frame" x="106" y="135" width="6" height="61"/>'
+ '<rect class="hm-r-frame" x="154" y="135" width="6" height="61"/>'
+ '<rect class="hm-r-frame" x="202" y="135" width="6" height="61"/>'
+ '<rect class="hm-r-frame" x="250" y="135" width="6" height="61"/>'
+ '<rect class="hm-r-frame" x="298" y="135" width="6" height="61"/>'
+ '<rect class="hm-r-frame" x="338" y="135" width="2" height="61"/>';
var HM_ROOM_SHELL = ''
+ '<rect class="hm-r-wall" x="0" y="0" width="340" height="260"/>'
+ '<rect class="hm-r-wall2" x="0" y="158" width="340" height="48"/>'
+ '<rect class="hm-r-rail" x="0" y="155" width="340" height="3" rx="1.5"/>'
+ '<rect class="hm-r-cornice" x="0" y="0" width="340" height="10"/>'
+ '<path class="hm-r-cornice-line" d="M0 10h340"/>'
+ '<rect class="hm-r-side-l" x="0" y="0" width="34" height="208"/>'
+ '<rect class="hm-r-side-r" x="306" y="0" width="34" height="208"/>'
+ '<rect class="hm-r-topsh" x="0" y="10" width="340" height="30"/>';
var HM_ROOM_FLOOR_BASE = ''
+ '<rect class="hm-r-floor" x="0" y="206" width="340" height="104"/>'
+ '<rect class="hm-r-baseband" x="0" y="196" width="340" height="10"/>'
+ '<path class="hm-r-base" d="M0 197C40 194 74 199 112 196S188 200 228 196 306 198 340 196"/>'
+ '<rect class="hm-r-footsh" x="0" y="208" width="340" height="18"/>';
var HM_ROOM_FLOOR_SHADOW = '<rect x="0" y="206" width="340" height="52" fill="url(#hmFloorSh)"/>'
+ '<rect class="hm-r-front" x="0" y="252" width="340" height="58"/>';
var HM_ROOM_FLOOR = HM_ROOM_FLOOR_BASE
+ HM_ROOM_FLOOR_PLANKS
+ HM_ROOM_FLOOR_SHADOW;
var HM_ROOM_FLOOR_PLANKS = ''
+ '<path class="hm-r-seam" d="M80 206 39.5 310M130 206 112 310M180 206 184.5 310M230 206 257 310M280 206 329.5 310"/>'
+ '<path class="hm-r-seam" d="M0 224h340M0 248h340M0 278h340"/>';
var HM_ROOM_FLOOR_PLANKS_FINE = ''
+ '<path class="hm-r-seam" d="M60 206 22 310M100 206 80 310M140 206 138 310M180 206 196 310M220 206 254 310M260 206 312 310M300 206 340 310"/>'
+ '<path class="hm-r-seam" d="M0 222h340M0 244h340M0 272h340"/>';
var HM_ROOM_FLOOR_BED = HM_ROOM_FLOOR_BASE
+ '<path class="hm-r-seam" d="M0 238h340M0 274h340M56 208v30M168 208v30M280 208v30M22 238v36M134 238v36M246 238v36M78 274v36M190 274v36M302 274v36"/>'
+ HM_ROOM_FLOOR_SHADOW;
var HM_ROOM_FLOOR_STUDY = HM_ROOM_FLOOR_BASE
+ HM_ROOM_FLOOR_PLANKS_FINE
+ '<path class="hm-r-seam" d="M0 228h340M0 250h340M0 272h340M0 294h340'
+ 'M34 206v22M74 206v22M114 206v22M154 206v22M194 206v22M234 206v22M274 206v22M314 206v22'
+ 'M18 228v22M58 228v22M98 228v22M138 228v22M178 228v22M218 228v22M258 228v22M298 228v22'
+ 'M40 250v22M80 250v22M120 250v22M160 250v22M200 250v22M240 250v22M280 250v22M320 250v22'
+ 'M8 272v22M48 272v22M88 272v22M128 272v22M168 272v22M208 272v22M248 272v22M288 272v22"/>'
+ HM_ROOM_FLOOR_SHADOW;
var HM_ROOM_FLOOR_DINING = HM_ROOM_FLOOR_BASE
+ HM_ROOM_FLOOR_PLANKS
+ '<path class="hm-r-seam" d="M0 262h340M92 262v48M252 262v48"/>'
+ HM_ROOM_FLOOR_SHADOW;
var HM_ROOM_FLOOR_ENTRY = HM_ROOM_FLOOR_BASE
+ '<path class="hm-r-seam" d="M0 226h340M0 248h340M0 270h340M0 292h340'
+ 'M30 206v20M110 206v20M190 206v20M270 206v20M70 226v22M150 226v22M230 226v22M310 226v22'
+ 'M20 248v22M100 248v22M180 248v22M260 248v22M60 270v22M140 270v22M220 270v22M300 270v22"/>'
+ HM_ROOM_FLOOR_SHADOW;
var HM_ROOM_WALL_BED = ''
+ '<path class="hm-r-stripe" d="M16 160v44M40 160v44M64 160v44M88 160v44M112 160v44M136 160v44M160 160v44M184 160v44M208 160v44M232 160v44M256 160v44M280 160v44M304 160v44M328 160v44"/>'
+ '<rect class="hm-r-rail" x="0" y="158" width="340" height="2.5" rx="1"/>'
+ '<rect class="hm-r-rail" x="0" y="200" width="340" height="2" rx="1"/>';
var HM_ROOM_WALL_STUDY = ''
+ '<path class="hm-r-stripe" d="M12 0v152M32 0v152M52 0v152M72 0v152M92 0v152M112 0v152M132 0v152M152 0v152M172 0v152M192 0v152M212 0v152M232 0v152M252 0v152M272 0v152M292 0v152M312 0v152M332 0v152"/>';
var HM_ROOM_WALL_KITCHEN = ''
+ '<g opacity=".7">'
+ '<path class="hm-r-seam" d="M0 150h340M0 178h340"/>'
+ '<path class="hm-r-plank" d="M24 150v28M72 150v28M120 150v28M168 150v28M216 150v28M264 150v28M312 150v28M48 178v28M96 178v28M144 178v28M192 178v28M240 178v28M288 178v28"/>'
+ '</g>';
var HM_ROOM_WALL_DINING = ''
+ '<path class="hm-r-stripe" d="M0 174h340M0 192h340M40 158v48M100 158v48M160 158v48M220 158v48M280 158v48M330 158v48"/>'
+ '<rect class="hm-r-rail" x="0" y="158" width="340" height="2" rx="1"/>';
function _hmClip(id, shape) {
return '<defs><clipPath id="' + id + '">' + shape + '</clipPath></defs>';
}
function _hmSkyNear(x, y, w, h, kinds, clipId) {
if (!kinds || !kinds.length) return '';
const s = h / 92;
let g = '';
for (const k of kinds) {
if (k === 'tree') {
g += '<path class="hm-r-near" d="M24 92V60h6v32Z"/>'
+ '<ellipse class="hm-r-near" cx="21" cy="48" rx="16" ry="14"/>'
+ '<ellipse class="hm-r-near" cx="37" cy="54" rx="12" ry="10"/>'
+ '<ellipse class="hm-r-near2" cx="27" cy="35" rx="13" ry="12"/>';
} else if (k === 'lamp') {
g += '<path class="hm-r-near" d="M101 92V42h4v50Z"/>'
+ '<path class="hm-r-near" d="M105 42H89v4h16Z"/>'
+ '<ellipse class="hm-r-near2" cx="86" cy="50" rx="7" ry="3"/>'
+ '<ellipse class="hm-r-lampglow" cx="86" cy="54" rx="13" ry="7"/>';
} else if (k === 'roof') {
g += '<path class="hm-r-near2" d="M0 92V76h30v16Z"/>'
+ '<path class="hm-r-near" d="M34 92V58h34v34Z"/>'
+ '<rect class="hm-r-glass" x="40" y="66" width="6" height="7" rx="1"/>'
+ '<rect class="hm-r-glass" x="53" y="66" width="6" height="7" rx="1"/>'
+ '<rect class="hm-r-glass" x="40" y="78" width="6" height="7" rx="1"/>'
+ '<rect class="hm-r-glass" x="53" y="78" width="6" height="7" rx="1"/>';
} else if (k === 'line') {
g += '<path d="M0 24q29 12 58 0t58 0" fill="none" stroke="currentColor" stroke-width="1.4" opacity=".32"/>'
+ '<rect class="hm-r-near" x="15" y="31" width="11" height="18" rx="1.5"/>'
+ '<rect class="hm-r-near2" x="42" y="34" width="9" height="15" rx="1.5"/>'
+ '<rect class="hm-r-near" x="63" y="30" width="12" height="20" rx="1.5"/>';
}
}
return '<g clip-path="url(#' + clipId + ')"><g transform="translate(' + x + ',' + y + ') scale(' + s.toFixed(3) + ')">' + g + '</g></g>';
}
function _hmSkyRel(x, y, w, h) {
const s = Math.min(w / 116, h / 92);
return '<g transform="translate(' + x + ',' + y + ') scale(' + s.toFixed(3) + ')">'
+ '<g class="hm-r-sun"><circle cx="88" cy="23" r="14" opacity=".25"/><circle cx="88" cy="23" r="10"/></g>'
+ '<path class="hm-r-moon" d="M92 13a11 11 0 1 0 8 18 13 13 0 0 1-8-18Z"/>'
+ '<path class="hm-r-cloud" d="M12 25c0-5 4-8 8-6 2-4 8-5 11-1 5-1 8 2 8 5 0 3-3 5-6 5H17c-3 0-5-2-5-3Z"/>'
+ '<path class="hm-r-cloud" d="M66 36c0-4 3-6 6-5 2-3 6-4 9-1 4-1 7 2 7 4 0 3-2 4-5 4H69c-2 0-3-1-3-2Z" opacity=".72"/>'
+ '<path class="hm-r-hill" d="M0 74c16-15 30-16 44-5 12-12 28-12 40-2 10-6 20-5 32-1v16H0Z"/>'
+ '<path class="hm-r-hill-deep" d="M0 80c14 4 30-2 44 2s28 4 40-1 22-3 32 1v10H0Z"/>'
+ '</g>';
}
function _hmWin(o) {
if (o.pane === 'round') return _hmRoundWin(o);
if (o.pane === 'twin') return _hmTwinWin(o);
const x = o.x, y = o.y, w = o.w, h = o.h;
const fr = o.frame || 8;
let mul = '';
if (o.pane === 'v') mul = '<rect class="hm-r-mull" x="' + (x + w / 2 - 2.5) + '" y="' + y + '" width="5" height="' + h + '" rx="1"/>';
else if (o.pane === 'h') mul = '<rect class="hm-r-mull" x="' + x + '" y="' + (y + h / 2 - 2.5) + '" width="' + w + '" height="5" rx="1"/>';
else if (o.pane === 'grid') {
for (let i = 1; i < 3; i++) mul += '<rect class="hm-r-mull" x="' + (x + (w * i / 3) - 1.5) + '" y="' + y + '" width="3" height="' + h + '" rx="1"/>';
for (let j = 1; j < 4; j++) mul += '<rect class="hm-r-mull" x="' + x + '" y="' + (y + (h * j / 4) - 1.5) + '" width="' + w + '" height="3" rx="1"/>';
} else if (o.pane === 'arch') {
mul = '<rect class="hm-r-mull" x="' + (x + w / 2 - 2.5) + '" y="' + (y + 14) + '" width="5" height="' + (h - 14) + '" rx="1"/>';
mul += '<path class="hm-r-mull" d="M' + x + ' ' + (y + 22) + 'a' + (w / 2) + ' ' + (w / 2) + ' 0 0 1 ' + w + ' 0" fill="none" stroke-width="3"/>';
}
const sill = o.sill === false ? ''
: '<rect class="hm-r-sill" x="' + (x - fr - 6) + '" y="' + (y + h + fr) + '" width="' + (w + fr * 2 + 12) + '" height="10" rx="3"/>'
+ '<rect class="hm-r-sill2" x="' + (x - fr - 3) + '" y="' + (y + h + fr + 8) + '" width="' + (w + fr * 2 + 6) + '" height="4" rx="2"/>';
const cw = o.cw || 26;
const chH = Math.round(h + 26);
const cTop = y - 6;
const cBot = cTop + chH;
const c1 = Math.round(chH * 0.4), c2 = Math.round(chH * 0.75), c3 = Math.round(chH * 0.95);
const curtain = o.curtain === false ? ''
: '<g filter="url(#hmSoft)">'
+ '<rect class="hm-r-rod" x="' + (x - fr - 12) + '" y="' + (y - 10) + '" width="' + (w + fr * 2 + 24) + '" height="4" rx="2"/>'
+ '<circle class="hm-r-rodcap" cx="' + (x - fr - 11) + '" cy="' + (y - 8) + '" r="3"/>'
+ '<circle class="hm-r-rodcap" cx="' + (x + w + fr + 11) + '" cy="' + (y - 8) + '" r="3"/>'
+ '<path class="hm-r-curtain" d="M' + (x - fr - 8) + ' ' + cTop + 'h' + cw + 'c3 ' + c1 + ' 1 ' + c2 + ' -4 ' + c3 + ' -8 4 -15 4 -22 0 -4-' + c1 + ' -4-' + c2 + ' 0-' + c3 + 'Z"/>'
+ '<path class="hm-r-fold" d="M' + (x - fr + 2) + ' ' + (cTop + 4) + 'v' + (chH - 6) + 'M' + (x - fr + 11) + ' ' + (cTop + 4) + 'v' + (chH - 6) + '"/>'
+ '<path class="hm-r-curtain" d="M' + (x + w + fr + 8) + ' ' + cTop + 'h-' + cw + 'c-3 ' + c1 + ' -1 ' + c2 + ' 4 ' + c3 + ' 8 4 15 4 22 0 4-' + c1 + ' 4-' + c2 + ' 0-' + c3 + 'Z"/>'
+ '<path class="hm-r-fold" d="M' + (x + w + fr - 2) + ' ' + (cTop + 4) + 'v' + (chH - 6) + 'M' + (x + w + fr - 11) + ' ' + (cTop + 4) + 'v' + (chH - 6) + '"/>'
+ '</g>';
const cid = 'hmwN' + Math.round(x) + '_' + Math.round(y);
const near = _hmSkyNear(x, y, w, h, o.near, cid);
return '<g filter="url(#hmLift)">'
+ (near ? _hmClip(cid, '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="3"/>') : '')
+ '<rect class="hm-r-frame" x="' + (x - fr) + '" y="' + (y - fr) + '" width="' + (w + fr * 2) + '" height="' + (h + fr * 2) + '" rx="5"/>'
+ '<rect class="hm-r-glass" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="3"/>'
+ _hmSkyRel(x, y, w, h)
+ near
+ mul + sill
+ '</g>' + curtain;
}
function _hmRoundWin(o) {
const cx = o.x + o.w / 2, cy = o.y + o.h / 2, r = Math.min(o.w, o.h) / 2;
const cid = 'hmwN' + Math.round(cx) + '_' + Math.round(cy);
const near = _hmSkyNear(cx - r, cy - r, r * 2, r * 2, o.near, cid);
return '<g filter="url(#hmLift)">'
+ (near ? _hmClip(cid, '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '"/>') : '')
+ '<circle class="hm-r-frame" cx="' + cx + '" cy="' + cy + '" r="' + (r + 8) + '"/>'
+ '<circle class="hm-r-glass" cx="' + cx + '" cy="' + cy + '" r="' + r + '"/>'
+ near
+ '<path class="hm-r-cloud" d="M' + (cx - 22) + ' ' + (cy - 6) + 'c0-5 4-8 8-6 2-4 8-5 11-1 5-1 8 2 8 5 0 3-3 5-6 5h-16c-3 0-5-2-5-5Z"/>'
+ '<rect class="hm-r-mull" x="' + (cx - 1.5) + '" y="' + (cy - r) + '" width="3" height="' + (r * 2) + '" rx="1"/>'
+ '<rect class="hm-r-mull" x="' + (cx - r) + '" y="' + (cy - 1.5) + '" width="' + (r * 2) + '" height="3" rx="1"/>'
+ '</g>';
}
function _hmTwinWin(o) {
const x = o.x, y = o.y, w = o.w, h = o.h, gap = o.gap || 12;
const cw = (w - gap) / 2;
const one = (px, k) => {
const cid = 'hmwN' + Math.round(px) + '_' + Math.round(y);
const near = _hmSkyNear(px, y, cw, h, o.near, cid);
return '<g filter="url(#hmLift)">'
+ (near ? _hmClip(cid, '<rect x="' + px + '" y="' + y + '" width="' + cw + '" height="' + h + '" rx="3"/>') : '')
+ '<rect class="hm-r-frame" x="' + (px - 7) + '" y="' + (y - 7) + '" width="' + (cw + 14) + '" height="' + (h + 14) + '" rx="5"/>'
+ '<rect class="hm-r-glass" x="' + px + '" y="' + y + '" width="' + cw + '" height="' + h + '" rx="3"/>'
+ near
+ '<rect class="hm-r-mull" x="' + (px + cw / 2 - 1.5) + '" y="' + y + '" width="3" height="' + h + '" rx="1"/>'
+ '<rect class="hm-r-mull" x="' + px + '" y="' + (y + h / 2 - 1.5) + '" width="' + cw + '" height="3" rx="1"/>'
+ '<rect class="hm-r-sill" x="' + (px - 10) + '" y="' + (y + h + 6) + '" width="' + (cw + 20) + '" height="9" rx="3"/>'
+ '</g>';
};
return one(x) + one(x + cw + gap)
+ '<g filter="url(#hmSoft)"><path class="hm-r-curtain" d="M' + (x - 16) + ' ' + (y - 6) + 'h18c2 40 1 74-3 92-6 3-10 3-15 0-3-22-3-48 0-92Z"/></g>';
}
var HM_ROOM_WIN_LIVING = _hmWin({ x: 20, y: 30, w: 128, h: 150, pane: 'v', cw: 22, near: ['tree', 'lamp'] });
var HM_ROOM_WIN_BED = _hmWin({ x: 34, y: 34, w: 104, h: 96, pane: 'twin', gap: 14, near: ['tree'] });
var HM_ROOM_WIN_STUDY = _hmWin({ x: 30, y: 30, w: 116, h: 116, pane: 'grid', cw: 22, near: ['roof'] });
var HM_ROOM_WIN_KITCHEN = _hmWin({ x: 48, y: 34, w: 78, h: 64, pane: 'h', curtain: false, near: ['line', 'roof'] });
var HM_ROOM_WIN_DINING = _hmWin({ x: 52, y: 30, w: 104, h: 104, pane: 'round', near: ['tree'] });
var HM_ROOM_WIN = ''
+ '<g filter="url(#hmLift)">'
+ '<rect class="hm-r-frame" x="22" y="30" width="132" height="108" rx="6"/>'
+ '<rect class="hm-r-glass" x="30" y="38" width="116" height="92" rx="4"/>'
+ '<g class="hm-r-sun"><circle cx="118" cy="61" r="14" opacity=".25"/><circle cx="118" cy="61" r="10"/></g>'
+ '<path class="hm-r-moon" d="M122 51a11 11 0 1 0 8 18 13 13 0 0 1-8-18Z"/>'
+ '<path class="hm-r-cloud" d="M42 63c0-5 4-8 8-6 2-4 8-5 11-1 5-1 8 2 8 5 0 3-3 5-6 5H47c-3 0-5-2-5-3Z"/>'
+ '<path class="hm-r-cloud" d="M96 74c0-4 3-6 6-5 2-3 6-4 9-1 4-1 7 2 7 4 0 3-2 4-5 4H99c-2 0-3-1-3-2Z" opacity=".72"/>'
+ '<path class="hm-r-hill" d="M30 112c16-15 30-16 44-5 12-12 28-12 40-2 10-6 20-5 32-1v16H30Z"/>'
+ '<path class="hm-r-hill-deep" d="M30 118c14 4 30-2 44 2s28 4 40-1 22-3 32 1v10H30Z"/>'
+ '<rect class="hm-r-mull" x="86" y="38" width="5" height="92" rx="1"/>'
+ '<rect class="hm-r-mull" x="30" y="84" width="116" height="5" rx="1"/>'
+ '<rect class="hm-r-sill" x="16" y="136" width="144" height="11" rx="3"/>'
+ '<rect class="hm-r-sill2" x="19" y="145" width="138" height="4" rx="2"/>'
+ '</g>'
+ '<g filter="url(#hmSoft)">'
+ '<rect class="hm-r-rod" x="8" y="21" width="160" height="4" rx="2"/>'
+ '<circle class="hm-r-rodcap" cx="9" cy="23" r="3"/>'
+ '<circle class="hm-r-rodcap" cx="167" cy="23" r="3"/>'
+ '<path class="hm-r-curtain" d="M12 26h26c3 40 1 86-4 118-8 4-15 4-22 0-4-34-4-80 0-118Z"/>'
+ '<path class="hm-r-fold" d="M20 30v112M29 30v112"/>'
+ '<path class="hm-r-curtain" d="M156 26h-26c-3 40-1 86 4 118 8 4 15 4 22 0 4-34 4-80 0-118Z"/>'
+ '<path class="hm-r-fold" d="M148 30v112M139 30v112"/>'
+ '</g>';
var HM_ROOM_RUG = ''
+ '<g filter="url(#hmSoft)">'
+ '<rect class="hm-r-rug" x="104" y="230" width="132" height="40" rx="15"/>'
+ '<rect class="hm-r-rugb" x="112" y="238" width="116" height="26" rx="10"/>'
+ '<rect class="hm-r-rugp" x="156" y="246" width="28" height="11" rx="5.5"/>'
+ '</g>';
var HM_ROOM_LAMP = ''
+ '<g filter="url(#hmSoft)">'
+ '<path class="hm-r-cord" d="M170 0v26"/>'
+ '<path class="hm-r-shade" d="M153 44h34l-7-16h-20Z"/>'
+ '<rect class="hm-r-shade" x="151" y="44" width="38" height="5" rx="2.5"/>'
+ '<circle class="hm-r-bulb" cx="170" cy="51" r="4"/>'
+ '<ellipse class="hm-r-lampglow" cx="170" cy="56" rx="13" ry="5"/>'
+ '</g>';
var HM_ROOM_HANGPLANT = ''
+ '<g filter="url(#hmSoft)">'
+ '<path class="hm-r-hang" d="M306 0v18"/>'
+ '<path class="hm-r-leaf" d="M306 20c-9-5-12-14-8-22 8 3 11 10 8 22Z"/>'
+ '<path class="hm-r-leaf" d="M306 24c8-6 10-15 6-22-7 4-9 11-6 22Z"/>'
+ '<path class="hm-r-leaf-deep" d="M306 30c-7-4-10-10-8-17 6 2 9 8 8 17Z"/>'
+ '<path class="hm-r-pot" d="M297 34h18l-3 18h-12Z"/>'
+ '<rect class="hm-r-pot" x="294" y="31" width="24" height="5" rx="2.5"/>'
+ '</g>';
var HM_ROOM_DECOR_LIVING = ''
+ '<path class="hm-r-cord" d="M196 24Q264 42 332 28"/>'
+ '<path class="hm-r-flag" d="M219 30l11 2-5 13Z"/>'
+ '<path class="hm-r-flag2" d="M250 34l11 1-5 13Z"/>'
+ '<path class="hm-r-flag" d="M300 32l11-2-3 13Z"/>'
+ '<g filter="url(#hmLift)">'
+ '<rect class="hm-r-frame" x="226" y="46" width="34" height="42" rx="3"/>'
+ '<rect class="hm-r-vig-soft" x="231" y="51" width="24" height="32" rx="2"/>'
+ '<circle class="hm-r-bulb" cx="247" cy="60" r="4"/>'
+ '<path class="hm-r-hill" d="M231 74c4-5 8-5 12-1 3-3 7-3 12 0v10h-24Z"/>'
+ '</g>';
var HM_FLOOR_BIGS = ['sofaL', 'tvL', 'fridgeL', 'diningL', 'chairL', 'bathtubL', 'toiletL', 'washerL', 'dryerL',
'shoecabL', 'coatrackL', 'wardrobeL', 'cupboardL', 'table', 'dresser', 'desk', 'counter', 'sideboard',
'washstand', 'bed', 'nightstand', 'bookcase', 'flowerbox'];
var HM_ROOM_DECOR_BED = ''
+ '<g filter="url(#hmLift)">'
+ '<circle class="hm-r-frame" cx="264" cy="66" r="20"/>'
+ '<circle class="hm-r-vig-soft" cx="264" cy="66" r="15"/>'
+ '<path class="hm-r-leaf" d="M258 73c-4-4-4-9 0-13 4 4 4 9 0 13Z"/>'
+ '</g>';
var HM_ROOM_BED = ''
+ '<g filter="url(#hmLift)">'
+ '<path class="hm-p-wood" d="M74 164h24a6 6 0 0 1 6 6v36H74Z"/>'
+ '<rect class="hm-p-soft" x="104" y="178" width="120" height="26" rx="3"/>'
+ '<rect class="hm-p-acc" x="142" y="178" width="82" height="26" rx="3"/>'
+ '<path d="M142 178v26" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3"/>'
+ '<rect class="hm-p-light" x="108" y="168" width="26" height="16" rx="4"/>'
+ '<rect class="hm-p-wood" x="102" y="204" width="122" height="8" rx="2"/>'
+ '<rect class="hm-p-wood" x="224" y="164" width="7" height="58" rx="3"/>'
+ '<path class="hm-p-line" d="M108 212h6v10h-6zM210 212h6v10h-6z"/>'
+ '</g>';
var HM_ROOM_MATS = {
rugL:   '<g filter="url(#hmSoft)"><rect class="hm-r-rug" x="82" y="230" width="180" height="48" rx="8"/><rect class="hm-r-rugb" x="92" y="239" width="160" height="30" rx="6"/><path class="hm-r-rugb" d="M126 242v26M168 242v26"/></g>',
rugS:   '<g filter="url(#hmSoft)"><rect class="hm-r-rug" x="96" y="226" width="146" height="44" rx="8"/><rect class="hm-r-rugb" x="106" y="235" width="126" height="27" rx="6"/><path class="hm-r-rugb" d="M134 237v22M176 237v22"/></g>',
rugBed: '<g filter="url(#hmSoft)"><rect class="hm-r-rug" x="120" y="246" width="120" height="36" rx="12"/><rect class="hm-r-rugb" x="130" y="254" width="100" height="20" rx="7"/></g>',
matK:   '<g filter="url(#hmSoft)"><rect class="hm-r-rug" x="44" y="252" width="64" height="22" rx="8"/><rect class="hm-r-rugb" x="52" y="257" width="48" height="12" rx="5"/></g>',
rugD:   '<g filter="url(#hmSoft)"><rect class="hm-r-rug" x="100" y="222" width="150" height="52" rx="10"/><rect class="hm-r-rugb" x="110" y="231" width="130" height="34" rx="7"/></g>',
matB:   '<g filter="url(#hmSoft)"><rect class="hm-r-rug" x="46" y="256" width="58" height="18" rx="8"/><rect class="hm-r-rugb" x="53" y="261" width="44" height="9" rx="4"/></g>',
matE:   '<g filter="url(#hmSoft)"><rect class="hm-r-rug" x="46" y="222" width="56" height="18" rx="7"/><rect class="hm-r-rugb" x="54" y="227" width="40" height="9" rx="4"/></g>'
};
function _hmWallBits(list) {
let out = '';
for (const it of (list || [])) {
const k = it[0], x = it[1], y = it[2];
if (k === 'sw') {
out += '<g filter="url(#hmSoft)"><rect class="hm-r-vig-soft" x="' + x + '" y="' + y + '" width="9" height="12" rx="1.5"/>'
+ '<rect class="hm-r-vig" x="' + (x + 2) + '" y="' + (y + 4) + '" width="5" height="3" rx="1"/></g>';
} else if (k === 'ac') {
out += '<g filter="url(#hmSoft)"><rect class="hm-r-vig-soft" x="' + x + '" y="' + y + '" width="56" height="15" rx="3"/>'
+ '<path class="hm-r-cord" d="M' + (x + 7) + ' ' + (y + 10) + 'h42"/>'
+ '<rect class="hm-r-vig" x="' + (x + 5) + '" y="' + (y + 4) + '" width="9" height="2.6" rx="1.3"/></g>';
} else if (k === 'sh') {
out += '<g filter="url(#hmLift)"><rect class="hm-r-table" x="' + x + '" y="' + y + '" width="34" height="4" rx="1.5"/>'
+ '<path class="hm-r-pot" d="M' + (x + 8) + ' ' + (y - 12) + 'h9l-1.4 12h-6.2Z"/>'
+ '<rect class="hm-r-vig-soft" x="' + (x + 7) + '" y="' + (y - 13) + '" width="11" height="2.4" rx="1"/>'
+ '<path class="hm-r-leaf" d="M' + (x + 21) + ' ' + (y - 4) + 'c-4-4-4-9 0-12 4 3 4 8 0 12Z"/></g>';
} else if (k === 'pic') {
out += '<g filter="url(#hmLift)"><rect class="hm-r-frame" x="' + x + '" y="' + y + '" width="20" height="24" rx="2"/>'
+ '<rect class="hm-r-vig-soft" x="' + (x + 3) + '" y="' + (y + 3) + '" width="14" height="18" rx="1"/>'
+ '<circle class="hm-r-bulb" cx="' + (x + 8) + '" cy="' + (y + 8) + '" r="2.4"/></g>';
}
}
return out;
}
var HM_FLOOR_BIT = {
slipper: '<g><rect class="hm-r-floor" x="0" y="0" width="11" height="7" rx="3.5"/><rect class="hm-r-floor" x="15" y="2" width="11" height="7" rx="3.5"/></g>',
cord:    '<g><path d="M0 0c9 5 3 12 12 16s15-5 21 1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" opacity=".3"/><circle class="hm-r-floor" cx="0" cy="0" r="2"/></g>',
book:    '<g><rect class="hm-r-floor" x="0" y="0" width="17" height="12" rx="1.5"/><path d="M2.5 4h12" fill="none" stroke="currentColor" stroke-width="0.9" stroke-linecap="round" opacity=".3"/></g>',
cup:     '<g><rect class="hm-r-floor" x="0" y="0" width="9" height="11" rx="2"/><path d="M9 3h3a2 2 0 0 1 0 4H9" fill="none" stroke="currentColor" stroke-width="1.2" opacity=".3"/></g>'
};
function _hmFloorBits(list) {
let out = '';
for (const it of (list || [])) {
const k = it[0], x = it[1], y = it[2];
const art = HM_FLOOR_BIT[k];
if (!art) continue;
out += '<g transform="translate(' + x + ',' + y + ')">' + art + '</g>';
}
return out;
}
var HM_ROOM_FLOOR_BITS = {
'':       [['cord',244,240], ['book',40,254]],
bed:      [['slipper',168,268]],
study:    [['book',150,262], ['cord',250,238]],
kitchen:  [['slipper',166,262]],
dining:   [['cord',52,250]],
bath:     [['slipper',96,270], ['cup',118,272]],
balcony:  [['book',196,262]],
entry:    [['slipper',126,256], ['cup',146,260]]
};
var HM_ROOM_WALL_BITS = {
'':       [['sw',158,130]],
bed:      [['sw',150,132]],
study:    [['sw',158,132]],
kitchen:  [['sw',128,132]],
dining:   [['sw',162,132]],
bath:     [['sw',148,132]],
balcony:  [],
entry:    [['sw',212,132]]
};
var HM_ROOM_BASE = HM_ROOM_DEFS + HM_ROOM_SHELL + HM_ROOM_FLOOR + HM_ROOM_MATS.rugL;
var HM_ROOM_DECOR_STUDY = ''
+ '<g filter="url(#hmLift)">'
+ '<rect class="hm-r-frame" x="232" y="48" width="30" height="38" rx="3"/>'
+ '<rect class="hm-r-vig-soft" x="237" y="53" width="20" height="28" rx="2"/>'
+ '<path class="hm-r-leaf" d="M247 74c-4-3-5-8-2-12 3 2 4 7 2 12Z"/>'
+ '</g>';
var HM_ROOM_BASE_BED = HM_ROOM_DEFS + HM_ROOM_SHELL + HM_ROOM_WALL_BED + HM_ROOM_FLOOR_BED;
var HM_ROOM_GRAIN = '<rect width="340" height="310" filter="url(#hmPaperGrain)" opacity=".1" style="mix-blend-mode:multiply"/>';
var HM_ROOM_VIG = {
free:    '<g filter="url(#hmLift)"><ellipse class="hm-r-vig-soft" cx="62" cy="202" rx="12" ry="3"/><circle class="hm-r-vig-soft" cx="62" cy="168" r="6.5"/><path class="hm-r-vig" d="M55 176h14v19H55z"/><path class="hm-r-vig" d="M55 195h5v9h-5zM64 195h5v9h-5z"/><path class="hm-r-vig-soft" d="M70 179h3.5a3.5 3.5 0 0 1 0 7H70Z"/><path class="hm-r-steam" d="M58 158c-2-2 2-3 0-6M66 158c-2-2 2-3 0-6"/></g>',
busy:    '<g filter="url(#hmLift)"><ellipse class="hm-r-vig-soft" cx="60" cy="204" rx="13" ry="3"/><circle class="hm-r-vig-soft" cx="55" cy="171" r="6.6"/><path class="hm-r-vig" d="M49 179h12l4 21H45z"/><path class="hm-r-vig" d="M61 184l11 6-11 4z"/><rect class="hm-r-vig-soft" x="66" y="189" width="15" height="10" rx="1.5"/><rect class="hm-r-vig" x="40" y="199" width="44" height="5" rx="1.5"/></g>',
rushed:  '<g filter="url(#hmLift)"><rect class="hm-r-vig" x="193" y="47" width="6" height="4" rx="2"/><circle class="hm-r-vig" cx="196" cy="66" r="16"/><circle class="hm-r-vig-soft" cx="196" cy="66" r="12"/><path class="hm-r-clockhand" d="M196 59v7l5 4"/><ellipse class="hm-r-vig-soft" cx="196" cy="204" rx="12" ry="3"/><circle class="hm-r-vig-soft" cx="196" cy="172" r="6.6"/><path class="hm-r-vig" d="M190 180h12l5 22h-21z"/><path class="hm-r-vig" d="M189 187l-11 6 11 4z"/><path class="hm-r-steam" d="M174 178h13M171 184h11"/></g>',
rest:    '<g filter="url(#hmLift)"><ellipse class="hm-r-vig-soft" cx="258" cy="204" rx="15" ry="3"/><path class="hm-r-vig" d="M244 202v-22a13 13 0 0 1 13-13h9a13 13 0 0 1 13 13v22Z"/><circle class="hm-r-vig-soft" cx="260" cy="176" r="6.6"/><path class="hm-r-vig" d="M252 185h15l3 15h-21z"/><rect class="hm-r-vig-soft" x="250" y="196" width="24" height="6" rx="3"/></g>',
sleep:   '<g filter="url(#hmLift)"><rect class="hm-r-vig" x="242" y="177" width="8" height="29" rx="3"/><rect class="hm-r-vig" x="244" y="192" width="54" height="14" rx="3"/><circle class="hm-r-vig-soft" cx="255" cy="188" r="6"/><rect class="hm-r-vig-soft" x="261" y="183" width="17" height="9" rx="4"/><rect class="hm-r-vig" x="268" y="189" width="30" height="10" rx="3"/><path class="hm-r-steam" d="M269 194h28"/></g>',
unknown: '<g filter="url(#hmLift)"><ellipse class="hm-r-vig-soft" cx="62" cy="202" rx="12" ry="3"/><circle class="hm-r-vig-soft" cx="62" cy="168" r="6.5"/><path class="hm-r-vig" d="M55 176h14v19H55z"/><path class="hm-r-vig" d="M55 195h5v9h-5zM64 195h5v9h-5z"/></g>',
away:    '<g filter="url(#hmLift)"><rect class="hm-r-vig" x="126" y="148" width="28" height="58" rx="3"/><rect class="hm-r-vig-soft" x="130" y="152" width="20" height="50" rx="2"/><path class="hm-r-doorlight" d="M150 150l4-2v58h-4Z"/><circle class="hm-r-vig" cx="134" cy="180" r="1.8"/></g>'
};
var HM_SCENE_SVG = {
free:    '<svg ' + HM_ROOM_ATTR + '>' + HM_ROOM_BASE + _hmWallBits(HM_ROOM_WALL_BITS['']) + _hmFloorBits(HM_ROOM_FLOOR_BITS['']) + HM_ROOM_VIG.free + HM_ROOM_GRAIN + '</svg>',
busy:    '<svg ' + HM_ROOM_ATTR + '>' + HM_ROOM_BASE + _hmWallBits(HM_ROOM_WALL_BITS['']) + _hmFloorBits(HM_ROOM_FLOOR_BITS['']) + HM_ROOM_VIG.busy + HM_ROOM_GRAIN + '</svg>',
rushed:  '<svg ' + HM_ROOM_ATTR + '>' + HM_ROOM_BASE + _hmWallBits(HM_ROOM_WALL_BITS['']) + _hmFloorBits(HM_ROOM_FLOOR_BITS['']) + HM_ROOM_VIG.rushed + HM_ROOM_GRAIN + '</svg>',
rest:    '<svg ' + HM_ROOM_ATTR + '>' + HM_ROOM_BASE + _hmWallBits(HM_ROOM_WALL_BITS['']) + _hmFloorBits(HM_ROOM_FLOOR_BITS['']) + HM_ROOM_VIG.rest + HM_ROOM_GRAIN + '</svg>',
sleep:   '<svg ' + HM_ROOM_ATTR + '>' + HM_ROOM_BASE + _hmWallBits(HM_ROOM_WALL_BITS['']) + _hmFloorBits(HM_ROOM_FLOOR_BITS['']) + HM_ROOM_VIG.sleep + HM_ROOM_GRAIN + '</svg>',
unknown: '<svg ' + HM_ROOM_ATTR + '>' + HM_ROOM_BASE + _hmWallBits(HM_ROOM_WALL_BITS['']) + _hmFloorBits(HM_ROOM_FLOOR_BITS['']) + HM_ROOM_VIG.unknown + HM_ROOM_GRAIN + '</svg>',
away:    '<svg ' + HM_ROOM_ATTR + '>' + HM_ROOM_BASE + _hmWallBits(HM_ROOM_WALL_BITS['']) + _hmFloorBits(HM_ROOM_FLOOR_BITS['']) + HM_ROOM_VIG.away + HM_ROOM_GRAIN + '</svg>'
};
var HM_ROOM_VIG_BED = {
rest:    '<g filter="url(#hmLift)"><path class="hm-r-vig-soft" d="M244 178h44v10h-44Z"/><path class="hm-r-vig" d="M250 176h16v8h-16Z"/><path class="hm-r-steam" d="M262 184h22"/></g>',
sleep:   '<g filter="url(#hmLift)"><rect class="hm-r-vig-soft" x="236" y="172" width="22" height="10" rx="3"/><path class="hm-r-steam" d="M276 160h8l-8 8h8M288 150h6l-6 6h6"/></g>',
unknown: '<g filter="url(#hmLift)"><path class="hm-r-vig" d="M209 178h10v8a5 5 0 0 1-10 0Z"/><path class="hm-r-vig-soft" d="M219 180h2.5a2.5 2.5 0 0 1 0 5h-2.5Z"/><path class="hm-r-steam" d="M212 174c-1.5-1.5 1.5-2 0-4"/></g>'
};
var HM_ROOM_VIG_STUDY = {
rest:    '<g filter="url(#hmLift)"><path class="hm-r-vig" d="M150 208v-22a11 11 0 0 1 11-11h10a11 11 0 0 1 11 11v22Z"/><rect class="hm-r-vig-soft" x="155" y="190" width="22" height="8" rx="4"/></g>',
sleep:   '<g filter="url(#hmLift)"><rect class="hm-r-vig-soft" x="150" y="198" width="40" height="12" rx="5"/><path class="hm-r-vig" d="M156 196h28v6h-28Z"/><path class="hm-r-steam" d="M176 184h7l-7 7h7"/></g>',
unknown: '<g filter="url(#hmLift)"><rect class="hm-r-vig" x="156" y="186" width="28" height="4" rx="2"/><rect class="hm-r-vig" x="160" y="190" width="4" height="18" rx="2"/><rect class="hm-r-vig" x="176" y="190" width="4" height="18" rx="2"/><path class="hm-r-leaf" d="M170 186c-4-3-5-8-2-12 3 2 4 7 2 12Z"/><path class="hm-r-pot" d="M165 186h10l-1.5 6h-7Z"/></g>'
};
var HM_ROOM_DECOR_KITCHEN = ''
+ '<g filter="url(#hmLift)">'
+ '<rect class="hm-r-table" x="226" y="34" width="74" height="26" rx="3"/>'
+ '<rect class="hm-r-table-soft" x="232" y="40" width="28" height="14" rx="2"/>'
+ '<rect class="hm-r-table-soft" x="266" y="40" width="28" height="14" rx="2"/>'
+ '<circle class="hm-r-vig" cx="242" cy="47" r="1.2"/>'
+ '<circle class="hm-r-vig" cx="280" cy="47" r="1.2"/>'
+ '</g>';
var HM_ROOM_COUNTER = ''
+ '<g filter="url(#hmLift)">'
+ '<rect class="hm-p-wood2" x="34" y="150" width="140" height="7" rx="2.5"/>'
+ '<rect class="hm-p-wood" x="38" y="157" width="132" height="56" rx="2"/>'
+ '<rect class="hm-p-wood2" x="43" y="162" width="56" height="46" rx="2"/>'
+ '<rect class="hm-p-wood2" x="107" y="162" width="56" height="46" rx="2"/>'
+ '<rect class="hm-r-vig-soft" x="46" y="165" width="50" height="10" rx="3"/>'
+ '<path d="M71 160v-5M64 155h14" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>'
+ '<circle class="hm-p-line" cx="95" cy="185" r="1.6"/>'
+ '<circle class="hm-p-line" cx="135" cy="185" r="1.6"/>'
+ '<path class="hm-p-line" d="M44 213h6v9h-6zM158 213h6v9h-6z"/>'
+ '</g>';
var HM_ROOM_DECOR_DINING = ''
+ '<g filter="url(#hmLift)">'
+ '<circle class="hm-r-frame" cx="236" cy="52" r="12"/>'
+ '<circle class="hm-r-vig-soft" cx="236" cy="52" r="8"/>'
+ '<circle class="hm-r-frame" cx="300" cy="44" r="9"/>'
+ '<circle class="hm-r-vig-soft" cx="300" cy="44" r="6"/>'
+ '</g>';
var HM_ROOM_DECOR_BATH = ''
+ '<g filter="url(#hmLift)">'
+ '<rect class="hm-r-frame" x="234" y="32" width="36" height="42" rx="4"/>'
+ '<rect class="hm-r-mirror" x="239" y="37" width="26" height="32" rx="3"/><path class="hm-r-steam" d="M242 60l7-9M247 63l9-11"/>'
+ '</g>';
var HM_ROOM_WALLTILE = ''
+ '<g opacity=".55">'
+ '<path class="hm-r-plank" d="M0 62h340M0 94h340M0 126h340M0 158h340"/>'
+ '<path class="hm-r-plank" d="M28 30v32M84 30v32M140 30v32M196 30v32M252 30v32M308 30v32M0 62v32M56 62v32M112 62v32M168 62v32M224 62v32M280 62v32M336 62v32M28 94v32M84 94v32M140 94v32M196 94v32M252 94v32M308 94v32"/>'
+ '</g>';
var HM_ROOM_TILE = ''
+ '<path class="hm-r-plank" d="M0 236h340M0 272h340M28 206v104M76 206v104M124 206v104M172 206v104M220 206v104M268 206v104M316 206v104"/>';
var HM_ROOM_DECOR_BALCONY = '';
var HM_ROOM_FLOWERBOX = ''
+ '<g filter="url(#hmLift)">'
+ '<rect class="hm-r-table" x="36" y="176" width="98" height="9" rx="3"/>'
+ '<rect class="hm-r-table" x="40" y="185" width="90" height="20" rx="3"/>'
+ '<rect class="hm-r-pot" x="48" y="166" width="52" height="11" rx="2"/>'
+ '<path class="hm-r-leaf" d="M58 168c-4-7-2-13 3-15 3 4 3 10 0 15Z"/>'
+ '<path class="hm-r-leaf-deep" d="M74 168c4-8 3-14-2-16-3 5-3 11 2 16Z"/>'
+ '<path class="hm-r-leaf" d="M90 168c-3-6-1-11 4-13 2 4 2 9-1 13Z"/>'
+ '</g>';
var HM_ROOM_DECK = ''
+ '<rect class="hm-r-floor" x="0" y="206" width="340" height="104"/>'
+ '<path class="hm-r-plank" d="M0 244h340M0 282h340M24 206v38M70 206v38M116 206v38M162 206v38M208 206v38M254 206v38M300 206v38M12 244v38M58 244v38M104 244v38M150 244v38M196 244v38M242 244v38M288 244v38M0 282v28M46 282v28M92 282v28M138 282v28M184 282v28M230 282v28M276 282v28M322 282v28"/>';
var HM_ROOM_DECOR_ENTRY = ''
+ '<g filter="url(#hmLift)">'
+ '<rect class="hm-r-table" x="224" y="34" width="78" height="6" rx="3"/>'
+ '<path class="hm-r-vig-soft" d="M238 40h18l-3 20h-12Z"/>'
+ '<path class="hm-r-cord" d="M266 40v9"/>'
+ '<circle class="hm-r-bulb" cx="266" cy="53" r="4"/>'
+ '<path class="hm-r-cord" d="M288 40v11"/>'
+ '<rect class="hm-r-table-soft" x="283" y="51" width="10" height="9" rx="2"/>'
+ '</g>';
var HM_ROOM_BASE_STUDY = HM_ROOM_DEFS + HM_ROOM_SHELL + HM_ROOM_WALL_STUDY + HM_ROOM_FLOOR_STUDY;
var HM_ROOM_BASE_KITCHEN = HM_ROOM_DEFS + HM_ROOM_SHELL + HM_ROOM_WALL_KITCHEN + HM_ROOM_FLOOR + HM_ROOM_CHECKER;
var HM_ROOM_BASE_DINING = HM_ROOM_DEFS + HM_ROOM_SHELL + HM_ROOM_WALL_DINING + HM_ROOM_FLOOR_DINING;
var HM_ROOM_BASE_BATH = HM_ROOM_DEFS + HM_ROOM_SHELL + HM_ROOM_FLOOR + HM_ROOM_TILE + HM_ROOM_WALLTILE;
var HM_ROOM_BASE_BALCONY = HM_ROOM_DEFS + HM_ROOM_BALCONY_SHELL + HM_ROOM_DECK;
var HM_ROOM_BASE_ENTRY = HM_ROOM_DEFS + HM_ROOM_SHELL + HM_ROOM_FLOOR_ENTRY + HM_ROOM_WAINSCOT;
var HM_ROOM_LAMPS = {
lampCeil:  '<g filter="url(#hmSoft)"><path class="hm-r-cord" d="M170 0v6"/><ellipse class="hm-r-bulb" cx="170" cy="9" rx="17" ry="5"/><ellipse class="hm-r-lampglow" cx="170" cy="14" rx="24" ry="8"/></g>',
lampDining:'<g filter="url(#hmSoft)"><path class="hm-r-cord" d="M170 0v28"/><path class="hm-r-shade" d="M155 44h30l-6-16h-18Z"/><ellipse class="hm-r-lampglow" cx="170" cy="46" rx="14" ry="5"/></g>',
lampWall: '<g filter="url(#hmSoft)"><rect class="hm-r-frame" x="300" y="34" width="6" height="16" rx="2"/><path class="hm-r-shade" d="M288 50h18l-4-8h-10Z"/><ellipse class="hm-r-lampglow" cx="297" cy="52" rx="10" ry="4"/></g>'
};
var HM_ROOM_DOOR = ''
+ '<g filter="url(#hmLift)">'
+ '<rect class="hm-p-wood" x="55" y="96" width="76" height="150" rx="4"/>'
+ '<rect class="hm-p-wood2" x="63" y="104" width="60" height="134" rx="2"/>'
+ '<rect class="hm-p-wood2" x="68" y="112" width="50" height="46" rx="2"/>'
+ '<rect class="hm-p-wood2" x="68" y="166" width="50" height="64" rx="2"/>'
+ '<circle class="hm-p-line" cx="112" cy="178" r="2.6"/>'
+ '<rect class="hm-p-wood2" x="68" y="236" width="50" height="6" rx="2"/>'
+ '</g>';
function _hmPieceFromProp(id, box) {
const p = HM_PROPS[id];
if (!p) return null;
const m = /viewBox="([^"]+)"/.exec(p.svg || '');
const vb = m ? m[1] : '0 0 40 26';
const inner = String(p.svg || '').replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
return { svg: inner, vb: vb, box: box };
}
var HM_ROOM_VIG_COUNTER = {
rest:    '<g filter="url(#hmLift)"><circle class="hm-r-vig-soft" cx="64" cy="157" r="5.5"/><path class="hm-r-vig" d="M57 176v-10a7 7 0 0 1 14 0v10Z"/><path class="hm-r-steam" d="M78 164c-1.5-1.5 1.5-2 0-4"/></g>',
sleep:   '<g filter="url(#hmLift)"><rect class="hm-r-vig-soft" x="52" y="165" width="26" height="11" rx="5.5"/><circle class="hm-r-vig" cx="46" cy="168" r="4.5"/><path class="hm-r-steam" d="M84 158h8l-8 8h8"/></g>',
unknown: '<g filter="url(#hmLift)"><circle class="hm-r-vig-soft" cx="64" cy="149" r="5"/><path class="hm-r-vig" d="M58 176v-16a6 6 0 0 1 12 0v16Z"/><rect class="hm-r-vig-soft" x="70" y="156" width="4" height="14" rx="2"/></g>'
};
var HM_ROOMS = {
'':       { n: '客厅', props: ['sofa', 'books', 'plant'], base: HM_ROOM_BASE + _hmWallBits(HM_ROOM_WALL_BITS['']), vig: null },
bed:      { n: '卧室', props: ['lamp', 'plant', 'books'], base: HM_ROOM_BASE_BED + HM_ROOM_MATS.rugBed + _hmWallBits(HM_ROOM_WALL_BITS.bed) + _hmFloorBits(HM_ROOM_FLOOR_BITS.bed), vig: HM_ROOM_VIG_BED },
study:    { n: '书房', props: ['lamp', 'books', 'plant'], base: HM_ROOM_BASE_STUDY + HM_ROOM_MATS.rugS + _hmWallBits(HM_ROOM_WALL_BITS.study) + _hmFloorBits(HM_ROOM_FLOOR_BITS.study), vig: HM_ROOM_VIG_STUDY },
kitchen:  { n: '厨房', props: ['fridge', 'chair', 'plant'], base: HM_ROOM_BASE_KITCHEN + HM_ROOM_MATS.matK + _hmWallBits(HM_ROOM_WALL_BITS.kitchen) + _hmFloorBits(HM_ROOM_FLOOR_BITS.kitchen), vig: HM_ROOM_VIG_COUNTER },
dining:   { n: '餐厅', props: ['dining', 'chair', 'plant'], base: HM_ROOM_BASE_DINING + HM_ROOM_MATS.rugD + _hmWallBits(HM_ROOM_WALL_BITS.dining) + _hmFloorBits(HM_ROOM_FLOOR_BITS.dining), vig: HM_ROOM_VIG_COUNTER },
bath:     { n: '浴室', props: ['bathtub', 'sink', 'plant'], base: HM_ROOM_BASE_BATH + HM_ROOM_MATS.matB + _hmWallBits(HM_ROOM_WALL_BITS.bath) + _hmFloorBits(HM_ROOM_FLOOR_BITS.bath), vig: HM_ROOM_VIG_COUNTER },
balcony:  { n: '阳台', props: ['plantstand', 'plant'], base: HM_ROOM_BASE_BALCONY, vig: HM_ROOM_VIG_COUNTER },
entry:    { n: '玄关', props: ['shoecab', 'mirror', 'doormat'], base: HM_ROOM_BASE_ENTRY + HM_ROOM_MATS.matE + _hmWallBits(HM_ROOM_WALL_BITS.entry) + _hmFloorBits(HM_ROOM_FLOOR_BITS.entry), vig: HM_ROOM_VIG_COUNTER }
};
function _hmRoomOf(cid) {
const r = (_hmLookOf(cid) || {}).room;
return (typeof r === 'string' && Object.prototype.hasOwnProperty.call(HM_ROOMS, r)) ? r : '';
}
var HM_SKINS = [
{ k: '',       n: '素白', wall: '#f5f1ea', floor: '#eae3d6', wood: '#b9a48a', line: '#71695e', tone: '',        glow: 0,  props: ['shelf', 'books'] },
{ k: 'wood',   n: '木屋', wall: '#f2e9dc', floor: '#dfc8a6', wood: '#b08d63', line: '#6d5645', tone: '#8a6d5b', glow: 10, props: ['shelf', 'plant'] },
{ k: 'lamp',   n: '夜灯', wall: '#f7ecdf', floor: '#e7d2bb', wood: '#c19a6b', line: '#6b4f45', tone: '#a06d84', glow: 20, props: ['lamp', 'books'] },
{ k: 'rain',   n: '雨天', wall: '#e9eef3', floor: '#d7dfe5', wood: '#9aa7b0', line: '#4f5a63', tone: '#5e7d8c', glow: 4,  props: ['umbrella', 'books'] },
{ k: 'winter', n: '冬日', wall: '#f3f4f7', floor: '#e2e4eb', wood: '#a9adba', line: '#565a66', tone: '#7a6ba0', glow: 6,  props: ['shelf', 'plant'] },
{ k: 'fest',   n: '节日', wall: '#f8eee6', floor: '#ecd8cb', wood: '#c08e78', line: '#6b4b48', tone: '#a06d84', glow: 16, props: ['lamp'] }
];
var HM_ROOM_PAL = {
'':       { n: '客厅', wall: '#f4efe6', wall2: '#e7dfd2', floor: '#e2d6c1', wood: '#b09272', line: '#6b6055', acc: '#b06f55' },
bed:      { n: '卧室', wall: '#f1eaeb', wall2: '#e5dadb', floor: '#e0d4d4', wood: '#a98a7d', line: '#655a5a', acc: '#a9736e' },
study:    { n: '书房', wall: '#ebeee8', wall2: '#dde3db', floor: '#d9d5c6', wood: '#a08a68', line: '#5f6154', acc: '#798b68' },
kitchen:  { n: '厨房', wall: '#f0efe5', wall2: '#e3e3d5', floor: '#dcdcd0', wood: '#a3a289', line: '#5f6055', acc: '#8a9166' },
dining:   { n: '餐厅', wall: '#f4efe0', wall2: '#e8e1cd', floor: '#e0d2b8', wood: '#ad8b62', line: '#665a4c', acc: '#9a6a4c' },
bath:     { n: '浴室', wall: '#e9eef0', wall2: '#dbe3e6', floor: '#d9e0e1', wood: '#93a0a2', line: '#556063', acc: '#5f8794' },
balcony:  { n: '阳台', wall: '#dfe8ea', wall2: '#cfdde0', floor: '#d5c9b3', wood: '#a08a71', line: '#5f5a52', acc: '#798a63' },
entry:    { n: '玄关', wall: '#efeae3', wall2: '#e2dbd1', floor: '#dad1c2', wood: '#a68e76', line: '#605a51', acc: '#8d7059' }
};
function _hmMixHex(a, b, t) {
const _p = v => {
const s = String(v || '');
if (!/^#[0-9a-fA-F]{6}$/.test(s)) return null;
const n = parseInt(s.slice(1), 16);
return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};
const pa = _p(a), pb = _p(b);
if (!pa || !pb) return a;
const k = Math.max(0, Math.min(1, typeof t === 'number' && isFinite(t) ? t : 0));
const c = pa.map((v, i) => Math.round(v * (1 - k) + pb[i] * k));
return '#' + c.map(v => ('0' + v.toString(16)).slice(-2)).join('');
}
var HM_LIGHT = {
day:   ['morning', 'noon', 'afternoon'],
dusk:  ['dawn', 'evening'],
night: ['wee', 'night']
};
function _hmLightOf(tp) {
for (const k in HM_LIGHT) if (HM_LIGHT[k].indexOf(tp) >= 0) return k;
return 'day';
}
var HM_PROPS = {
shelf:    { n: '书架', w: 19, svg: '<svg viewBox="0 0 64 34" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="0" y="6" width="64" height="4" rx="1.5"/><rect class="hm-p-wood" x="0" y="28" width="64" height="4" rx="1.5"/><path class="hm-p-line" d="M4 0h5v6H4zM11 1.6h5V6h-5zM18 0h5v6h-5z"/><path class="hm-p-soft" d="M26 1.6h5V6h-5z"/><path class="hm-p-leaf" d="M33 0h5v6h-5z"/><path class="hm-p-wood" d="M40 1.6h5V6h-5z"/><path class="hm-p-line" d="M47 0h5v6h-5z"/><path class="hm-p-soft" d="M6 13h5v15H6z"/><path class="hm-p-frame" d="M14 14h5v14h-5z"/><path class="hm-p-leaf" d="M22 11h5v17h-5z"/><path class="hm-p-line" d="M30 14h5v14h-5z"/><path class="hm-p-soft" d="M38 12h5v16h-5z"/><path class="hm-p-line" d="M46 15h5v13h-5z"/></svg>' },
plant:    { n: '落地绿植', w: 11, h: 17, svg: '<svg viewBox="0 0 38 50" fill="none" aria-hidden="true"><path class="hm-p-leaf" d="M19 34C9 30 6 18 14 10c7 7 9 17 5 24Z"/><path class="hm-p-leaf" d="M19 34c10-4 13-16 5-24-7 7-9 17-5 24Z"/><path class="hm-p-leaf" d="M19 30c-5-6-5-15 0-21 5 6 5 15 0 21Z"/><path d="M19 34v6" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity="0.4"/><rect class="hm-p-wood2" x="9" y="36" width="20" height="5" rx="2"/><path class="hm-p-wood" d="M11 41h16l-2 9h-12Z"/></svg>' },
lamp:     { n: '落地灯', w: 9, h: 24, svg: '<svg viewBox="0 0 30 70" fill="none" aria-hidden="true"><path class="hm-p-wood" d="M6 14h18l-4-14H10Z"/><ellipse class="hm-p-lampglow" cx="15" cy="14" rx="11" ry="3"/><path d="M15 14v50" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><ellipse class="hm-p-line" cx="15" cy="67" rx="8" ry="3"/></svg>' },
books:    { n: '书堆', w: 9, h: 15, svg: '<svg viewBox="0 0 30 24" fill="none" aria-hidden="true"><rect class="hm-p-soft" x="2" y="17" width="26" height="5" rx="1.5"/><rect class="hm-p-wood" x="4" y="12" width="22" height="5" rx="1.5"/><rect class="hm-p-soft" x="3" y="7" width="24" height="5" rx="1.5"/><rect class="hm-p-line" x="6" y="1" width="18" height="6" rx="1.5"/><path d="M4 19.5h22M6 14.5h18M5 9.5h20" fill="none" stroke="currentColor" stroke-width="0.7" opacity="0.3"/></svg>' },
umbrella: { n: '伞', w: 8, h: 15, svg: '<svg viewBox="0 0 26 40" fill="none" aria-hidden="true"><path class="hm-p-wood" d="M2 16C4 7 8 3 13 3s9 4 11 13c-2-2-4-2-6 0-2-2-4-2-6 0-2-2-4-2-6 0-2-2-4-2-6 0Z"/><path d="M13 3V0.5" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M13 16v20c0 2.6 4 2.6 4 0" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>' },
vase:     { n: '瓶花', w: 7, h: 15, svg: '<svg viewBox="0 0 20 40" fill="none" aria-hidden="true"><path d="M10 26V10" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M10 14 6.4 10.6M10 14l3.6-3.4" fill="none" stroke="currentColor" stroke-width="0.9" stroke-linecap="round" opacity="0.5"/><circle class="hm-p-acc" cx="5.6" cy="8.6" r="2.4"/><circle class="hm-p-soft" cx="13.8" cy="9" r="2"/><circle class="hm-p-acc" cx="9.6" cy="5.4" r="2.6"/><path class="hm-p-leaf" d="M8.4 24.6h3.2l-.8 2.2H9.2Z"/><path class="hm-p-wood" d="M5 26h10l-1.6 14H6.6Z"/><rect class="hm-p-wood2" x="4" y="24" width="12" height="2.6" rx="1.2"/></svg>' },
doormat:  { n: '门垫', w: 18, svg: '<svg viewBox="0 0 60 18" fill="none" aria-hidden="true"><rect class="hm-p-soft" x="0" y="2" width="60" height="14" rx="4"/><path d="M7 9h6M20 9h6M33 9h6M46 9h6" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.45"/></svg>' },
sofa:     { n: '沙发', w: 38, svg: '<svg viewBox="0 0 128 54" fill="none" aria-hidden="true"><path class="hm-p-wood" d="M8 0h112A8 8 0 0 1 128 8v12H0V8A8 8 0 0 1 8 8Z"/><rect class="hm-p-wood2" x="18" y="5" width="42" height="12" rx="3"/><rect class="hm-p-wood2" x="64" y="5" width="42" height="12" rx="3"/><rect class="hm-p-acc" x="24" y="7" width="24" height="8" rx="3"/><rect class="hm-p-wood" x="0" y="16" width="16" height="28" rx="5"/><rect class="hm-p-wood" x="112" y="16" width="16" height="28" rx="5"/><rect class="hm-p-wood2" x="16" y="22" width="96" height="14" rx="4"/><path d="M64 22v14" fill="none" stroke="currentColor" stroke-width="1" opacity="0.25"/><path class="hm-p-wood" d="M8 36h112v6H8z"/><path class="hm-p-line" d="M14 42h7v12h-7zM107 42h7v12h-7z"/></svg>' },
desk:     { n: '书桌', w: 35, svg: '<svg viewBox="0 0 120 58" fill="none" aria-hidden="true"><rect class="hm-p-wood2" x="0" y="0" width="120" height="6" rx="2.5"/><rect class="hm-p-wood" x="6" y="6" width="38" height="52" rx="2"/><rect class="hm-p-wood2" x="10" y="10" width="30" height="12" rx="1.5"/><rect class="hm-p-wood2" x="10" y="26" width="30" height="12" rx="1.5"/><rect class="hm-p-wood2" x="10" y="42" width="30" height="12" rx="1.5"/><circle class="hm-p-line" cx="25" cy="16" r="1.3"/><circle class="hm-p-line" cx="25" cy="32" r="1.3"/><circle class="hm-p-line" cx="25" cy="48" r="1.3"/><path class="hm-p-line" d="M60 6v52M112 6v52"/><path class="hm-p-line" d="M60 50h52"/></svg>' },
dresser:  { n: '梳妆台', w: 29, svg: '<svg viewBox="0 0 100 52" fill="none" aria-hidden="true"><rect class="hm-p-wood2" x="0" y="0" width="100" height="6" rx="2.5"/><rect class="hm-p-wood" x="4" y="6" width="92" height="38" rx="2"/><rect class="hm-p-wood2" x="9" y="11" width="82" height="9" rx="1.5"/><rect class="hm-p-wood2" x="9" y="23" width="82" height="9" rx="1.5"/><rect class="hm-p-wood2" x="9" y="35" width="82" height="6" rx="1.5"/><circle class="hm-p-line" cx="50" cy="15.5" r="1.4"/><circle class="hm-p-line" cx="50" cy="27.5" r="1.4"/><path class="hm-p-line" d="M10 44v8M90 44v8"/></svg>' },
sideboard:{ n: '餐边柜', w: 32, svg: '<svg viewBox="0 0 110 58" fill="none" aria-hidden="true"><rect class="hm-p-wood2" x="0" y="0" width="110" height="6" rx="2.5"/><rect class="hm-p-wood" x="3" y="6" width="104" height="42" rx="2"/><rect class="hm-p-wood2" x="8" y="11" width="45" height="32" rx="2"/><rect class="hm-p-wood2" x="57" y="11" width="45" height="32" rx="2"/><circle class="hm-p-line" cx="49" cy="27" r="1.6"/><circle class="hm-p-line" cx="61" cy="27" r="1.6"/><path class="hm-p-line" d="M10 48v10M100 48v10"/></svg>' },
nightstand:{ n: '床头柜', w: 12, svg: '<svg viewBox="0 0 40 34" fill="none" aria-hidden="true"><rect class="hm-p-wood2" x="0" y="0" width="40" height="5" rx="2"/><rect class="hm-p-wood" x="3" y="5" width="34" height="22" rx="2"/><rect class="hm-p-wood2" x="7" y="9" width="26" height="8" rx="1.5"/><circle class="hm-p-line" cx="20" cy="13" r="1.3"/><path class="hm-p-line" d="M6 27v7M34 27v7"/></svg>' },
armchair: { n: '单人椅', w: 15, svg: '<svg viewBox="0 0 52 52" fill="none" aria-hidden="true"><path class="hm-p-wood" d="M12 0h28a4 4 0 0 1 4 4v20H8V4a4 4 0 0 1 4-4Z"/><rect class="hm-p-wood2" x="16" y="5" width="20" height="11" rx="3"/><rect class="hm-p-wood" x="0" y="16" width="11" height="24" rx="4"/><rect class="hm-p-wood" x="41" y="16" width="11" height="24" rx="4"/><rect class="hm-p-wood2" x="11" y="20" width="30" height="13" rx="4"/><rect class="hm-p-acc" x="15" y="22" width="14" height="9" rx="3"/><path class="hm-p-wood" d="M8 33h36v6H8z"/><path class="hm-p-line" d="M12 39h6v13h-6zM34 39h6v13h-6z"/></svg>' },
bookcase: { n: '书柜', w: 18, svg: '<svg viewBox="0 0 60 112" fill="none" aria-hidden="true"><path class="hm-p-wood" d="M2 0h56a2 2 0 0 1 2 2v100H0V2a2 2 0 0 1 2-2Z"/><rect class="hm-p-soft" x="6" y="5" width="48" height="92" rx="2"/><rect class="hm-p-wood" x="5" y="30" width="50" height="4" rx="1"/><rect class="hm-p-wood" x="5" y="58" width="50" height="4" rx="1"/><rect class="hm-p-wood" x="5" y="86" width="50" height="4" rx="1"/><path class="hm-p-line" d="M10 8h6v22h-6zM18 9h6v21h-6z"/><path class="hm-p-soft" d="M26 7h6v23h-6z"/><path class="hm-p-leaf" d="M34 10h6v20h-6z"/><path class="hm-p-frame" d="M42 8h6v22h-6z"/><path class="hm-p-soft" d="M10 36h6v22h-6z"/><path class="hm-p-frame" d="M18 34h6v24h-6z"/><path class="hm-p-line" d="M26 38h6v20h-6z"/><path class="hm-p-leaf" d="M34 35h6v23h-6z"/><path class="hm-p-soft" d="M42 37h6v21h-6z"/><path class="hm-p-line" d="M10 64h6v22h-6z"/><path class="hm-p-soft" d="M18 62h6v24h-6z"/><path class="hm-p-leaf" d="M26 66h6v20h-6z"/><path class="hm-p-frame" d="M34 63h6v23h-6z"/><path class="hm-p-line" d="M42 65h6v21h-6z"/><path class="hm-p-line" d="M8 102v10M52 102v10"/></svg>' },
tv:       { n: '电视柜', w: 31, svg: '<svg viewBox="0 0 104 44" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="22" y="0" width="60" height="18" rx="2.5"/><rect class="hm-p-metal" x="26" y="3.5" width="52" height="11" rx="1.5"/><path d="M50 18v5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><rect class="hm-p-wood" x="4" y="23" width="96" height="15" rx="2"/><path d="M52 23v15" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3"/><circle class="hm-p-line" cx="48" cy="30.5" r="1.5"/><path class="hm-p-line" d="M12 38v6M92 38v6"/></svg>' },
fireplace:{ n: '壁炉', w: 27, svg: '<svg viewBox="0 0 92 62" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="0" y="0" width="92" height="8" rx="2"/><path class="hm-p-soft" d="M6 8h80v46H6z"/><path class="hm-p-line" d="M28 54V34a18 18 0 0 1 36 0v20Z"/><path class="hm-p-fire" d="M46 51c-4-1.4-5.4-4.4-4-8 1 1.6 2 1.6 2.8.6-1-2.8.4-5.6 2.8-7.2-.6 2.8 1.4 4.2 2.4 6.2 1-2 2.4-2.8 3.4-2.4-1 2.8-.6 4.8-2 6.8 1 0 1.8.8 2 1.8-.6 2.8-3.2 4.6-7.4 5.2Z"/><path d="M33 54h26" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>' },
piano:    { n: '钢琴', w: 31, svg: '<svg viewBox="0 0 104 56" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="8" y="0" width="88" height="20" rx="2.5"/><rect class="hm-p-soft" x="12" y="3" width="80" height="6" rx="1.5"/><rect class="hm-p-wood2" x="4" y="20" width="96" height="12" rx="2"/><path class="hm-p-line" d="M12 21.5h4v9h-4zM20 21.5h4v9h-4zM36 21.5h4v9h-4zM44 21.5h4v9h-4zM60 21.5h4v9h-4zM68 21.5h4v9h-4zM84 21.5h4v9h-4z"/><path class="hm-p-line" d="M10 32v24M94 32v24"/></svg>' },
picture:  { n: '挂画', w: 13, svg: '<svg viewBox="0 0 44 34" fill="none" aria-hidden="true"><rect class="hm-p-frame" x="1" y="1" width="42" height="32" rx="2"/><rect class="hm-p-soft" x="5" y="5" width="34" height="24" rx="1.5"/><circle class="hm-p-lampglow" cx="15" cy="11" r="3.4"/><path class="hm-p-leaf" d="M5 29l9-13 6 8 5-6 9 11H5Z"/><path class="hm-p-leaf-deep" d="M5 29l7-9 5 6-3 3h-9Z"/></svg>' },
clock:    { n: '挂钟', w: 9, svg: '<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle class="hm-p-frame" cx="16" cy="16" r="15"/><circle class="hm-p-soft" cx="16" cy="16" r="11.4"/><path d="M16 8.5V16l5.5 3.6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle class="hm-p-line" cx="16" cy="16" r="1.6"/></svg>' },
mirror:   { n: '镜子', w: 7, svg: '<svg viewBox="0 0 24 32" fill="none" aria-hidden="true"><ellipse class="hm-p-frame" cx="12" cy="16" rx="11" ry="15"/><ellipse class="hm-p-soft" cx="12" cy="16" rx="8" ry="11.6"/><path d="M8 23c2-4 4-7.4 6-9.6" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" opacity="0.4"/></svg>' },
sconce:   { n: '壁灯', w: 7, h: 11, svg: '<svg viewBox="0 0 22 30" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="9.5" y="0" width="3" height="7" rx="1"/><path class="hm-p-soft" d="M4 7h14l-3.5 9H7.5Z"/><path d="M11 16v3" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><ellipse class="hm-p-lampglow" cx="11" cy="22" rx="8" ry="3"/></svg>' },
coffee:   { n: '茶几', w: 28, svg: '<svg viewBox="0 0 96 36" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="0" y="0" width="96" height="7" rx="2.5"/><rect class="hm-p-wood2" x="4" y="7" width="88" height="5" rx="2"/><rect class="hm-p-wood" x="8" y="16" width="80" height="4" rx="1.5"/><path class="hm-p-line" d="M9 7v29M87 7v29"/></svg>' },
dining:   { n: '餐桌', w: 33, svg: '<svg viewBox="0 0 112 68" fill="none" aria-hidden="true"><ellipse class="hm-p-wood" cx="56" cy="16" rx="54" ry="15"/><ellipse class="hm-p-wood2" cx="56" cy="14" rx="44" ry="11"/><path class="hm-p-wood" d="M50 28h12v26H50z"/><ellipse class="hm-p-wood" cx="56" cy="56" rx="30" ry="8"/></svg>' },
chair:    { n: '餐椅', w: 13, h: 19, svg: '<svg viewBox="0 0 38 52" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="9" y="0" width="4.5" height="52" rx="2"/><rect class="hm-p-wood" x="24.5" y="0" width="4.5" height="52" rx="2"/><rect class="hm-p-wood2" x="13" y="4" width="12" height="10" rx="2"/><rect class="hm-p-wood2" x="2" y="19" width="34" height="6" rx="3"/><rect class="hm-p-wood" x="4" y="24" width="4.5" height="28" rx="2"/><rect class="hm-p-wood" x="29.5" y="24" width="4.5" height="28" rx="2"/><path class="hm-p-line" d="M8.5 46h21"/></svg>' },
wardrobe: { n: '衣柜', w: 19, svg: '<svg viewBox="0 0 64 116" fill="none" aria-hidden="true"><path class="hm-p-wood" d="M2 0h60v108H2Z"/><rect class="hm-p-wood2" x="6" y="5" width="25" height="98" rx="2"/><rect class="hm-p-wood2" x="33" y="5" width="25" height="98" rx="2"/><path d="M32 5v98" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3"/><circle class="hm-p-line" cx="27" cy="54" r="1.8"/><circle class="hm-p-line" cx="37" cy="54" r="1.8"/><path class="hm-p-line" d="M8 108v8M56 108v8"/></svg>' },
shoecab:  { n: '鞋柜', w: 21, svg: '<svg viewBox="0 0 70 58" fill="none" aria-hidden="true"><path class="hm-p-wood" d="M2 0h66v50H2Z"/><rect class="hm-p-soft" x="6" y="5" width="58" height="18" rx="2"/><rect class="hm-p-soft" x="6" y="27" width="58" height="18" rx="2"/><path class="hm-p-line" d="M14 26h9a3 3 0 0 1 0 6h-9a3 3 0 0 1 0-6Z"/><path class="hm-p-soft" d="M26 28h9a3 3 0 0 1 0 4h-9a3 3 0 0 1 0-4Z"/><path class="hm-p-line" d="M8 50v8M62 50v8"/></svg>' },
fridge:   { n: '冰箱', w: 14, svg: '<svg viewBox="0 0 48 116" fill="none" aria-hidden="true"><path class="hm-p-metal" d="M2 0h44a2 2 0 0 1 2 2v112a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2Z"/><rect class="hm-p-metal" x="5" y="6" width="38" height="40" rx="2.5"/><rect class="hm-p-metal" x="5" y="50" width="38" height="58" rx="2.5"/><path d="M4 48h40" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.35"/><rect class="hm-p-line" x="37" y="12" width="3.4" height="20" rx="1.7"/><rect class="hm-p-line" x="37" y="56" width="3.4" height="26" rx="1.7"/></svg>' },
washer:   { n: '洗衣机', w: 16, svg: '<svg viewBox="0 0 54 58" fill="none" aria-hidden="true"><path class="hm-p-porcelain" d="M2 0h50v52H2Z"/><rect class="hm-p-light" x="4" y="4" width="46" height="10" rx="2"/><circle class="hm-p-line" cx="43" cy="9" r="2.6"/><circle class="hm-p-soft" cx="27" cy="33" r="15"/><circle class="hm-p-line" cx="27" cy="33" r="10"/><path d="M21 26c3-2 6-2.4 9-1" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" opacity="0.35"/><path class="hm-p-line" d="M8 52v6M46 52v6"/></svg>' },
bathtub:  { n: '浴缸', w: 41, svg: '<svg viewBox="0 0 138 44" fill="none" aria-hidden="true"><path class="hm-p-soft" d="M4 8h130v14A22 22 0 0 1 112 44H26A22 22 0 0 1 4 30Z"/><path class="hm-p-light" d="M12 10h114v10A18 18 0 0 1 108 38H30A18 18 0 0 1 12 20Z"/><path d="M4 8h130" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M124 8V1" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M119 1h10" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>' },
sink:     { n: '洗手台', w: 27, svg: '<svg viewBox="0 0 92 58" fill="none" aria-hidden="true"><path d="M46 13V3M40 3h12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><rect class="hm-p-wood2" x="0" y="13" width="92" height="7" rx="2"/><rect class="hm-p-soft" x="28" y="9" width="36" height="13" rx="6"/><path d="M33 12h26" fill="none" stroke="currentColor" stroke-width="1" opacity="0.25"/><rect class="hm-p-wood" x="5" y="20" width="82" height="32" rx="2"/><rect class="hm-p-wood2" x="10" y="25" width="33" height="22" rx="2"/><rect class="hm-p-wood2" x="49" y="25" width="33" height="22" rx="2"/><circle class="hm-p-line" cx="26.5" cy="36" r="1.7"/><circle class="hm-p-line" cx="65.5" cy="36" r="1.7"/><path class="hm-p-line" d="M11 52v6M81 52v6"/></svg>' },
plantstand:{ n: '花架', w: 10, h: 18, svg: '<svg viewBox="0 0 34 56" fill="none" aria-hidden="true"><path class="hm-p-leaf" d="M17 20C11 16 10 9 14 3c5 3 6 11 3 17Z"/><path class="hm-p-leaf" d="M17 20c6-4 7-11 3-17-5 3-6 11-3 17Z"/><path class="hm-p-leaf" d="M17 18c-4-3-4-8 0-11 4 3 4 8 0 11Z"/><path class="hm-p-wood" d="M9 20h16l-2 8H11Z"/><rect class="hm-p-wood2" x="2" y="27" width="30" height="4" rx="2"/><path class="hm-p-line" d="M17 31v21M8 31v21M26 31v21"/><path class="hm-p-line" d="M6 52h22"/></svg>' },
toilet:   { n: '马桶', w: 11, svg: '<svg viewBox="0 0 38 54" fill="none" aria-hidden="true"><rect class="hm-p-porcelain" x="6" y="2" width="26" height="20" rx="3"/><path d="M6 8h26" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3"/><circle class="hm-p-line" cx="19" cy="10" r="2.2"/><path class="hm-p-porcelain" d="M4 30h30v6a15 15 0 0 1-15 15h0a15 15 0 0 1-15-15Z"/><ellipse class="hm-p-light" cx="19" cy="29" rx="15" ry="5.5"/><ellipse class="hm-p-soft" cx="19" cy="29" rx="9" ry="2.6"/></svg>' },
coatrack: { n: '衣帽架', w: 14, h: 24, svg: '<svg viewBox="0 0 46 72" fill="none" aria-hidden="true"><path class="hm-p-wood" d="M21 0h4v62h-4z"/><path d="M5 10h36" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><ellipse class="hm-p-wood" cx="12" cy="12" rx="7" ry="2.6"/><path class="hm-p-wood" d="M6 12c0-6 1.4-8.6 3.6-8.6S13.2 6 13.2 12Z"/><path class="hm-p-soft" d="M28 10h7l-1.4 26h-4.2Z"/><path class="hm-p-line" d="M12 62h22l3 8H9Z"/></svg>' },
dryer:    { n: '晾衣架', w: 21, svg: '<svg viewBox="0 0 72 72" fill="none" aria-hidden="true"><path d="M8 70 20 4M64 70 52 4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M16 12h40M18 32h36" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path class="hm-p-soft" d="M19 14h16v18H19z"/><path class="hm-p-acc" d="M37 34h15v20H37z"/></svg>' },
microwave:{ n: '微波炉', w: 15, svg: '<svg viewBox="0 0 52 30" fill="none" aria-hidden="true"><path class="hm-p-wood" d="M2 0h48a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2Z"/><rect class="hm-p-line" x="5" y="5" width="30" height="16" rx="2"/><rect class="hm-p-light" x="8" y="8" width="24" height="10" rx="1"/><path d="M41 8v10" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><circle class="hm-p-soft" cx="45" cy="9" r="2.2"/><path class="hm-p-line" d="M9 26v4M43 26v4"/></svg>' },
cupboard: { n: '碗柜', w: 25, svg: '<svg viewBox="0 0 84 74" fill="none" aria-hidden="true"><path class="hm-p-lacquer" d="M2 0h80v66H2Z"/><rect class="hm-p-light" x="6" y="5" width="34" height="27" rx="2"/><rect class="hm-p-light" x="44" y="5" width="34" height="27" rx="2"/><rect class="hm-p-light" x="6" y="36" width="34" height="24" rx="2"/><rect class="hm-p-light" x="44" y="36" width="34" height="24" rx="2"/><circle class="hm-p-line" cx="36" cy="18" r="1.6"/><circle class="hm-p-line" cx="48" cy="18" r="1.6"/><circle class="hm-p-line" cx="36" cy="48" r="1.6"/><circle class="hm-p-line" cx="48" cy="48" r="1.6"/><path class="hm-p-line" d="M8 66v8M76 66v8"/></svg>' },
towelrack:{ n: '毛巾架', w: 8, svg: '<svg viewBox="0 0 26 24" fill="none" aria-hidden="true"><path d="M2 5h22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path class="hm-p-acc" d="M6 5h6a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/><path class="hm-p-soft" d="M16 5h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/></svg>' },
mirrorstand:{ n: '全身镜', w: 10, svg: '<svg viewBox="0 0 30 66" fill="none" aria-hidden="true"><ellipse class="hm-p-wood" cx="15" cy="20" rx="13" ry="18"/><ellipse class="hm-p-light" cx="15" cy="20" rx="9.6" ry="14"/><path d="M11 12c2-2.2 4-2.8 6-2.2" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" opacity="0.4"/><path class="hm-p-wood" d="M12 38h6v20h-6z"/><path class="hm-p-line" d="M6 58h18l3 8H3z"/></svg>' },
bench:    { n: '换鞋凳', w: 15, svg: '<svg viewBox="0 0 50 28" fill="none" aria-hidden="true"><rect class="hm-p-rattan" x="4" y="0" width="42" height="7" rx="3"/><rect class="hm-p-wood" x="2" y="7" width="46" height="5" rx="2"/><path class="hm-p-line" d="M8 12v16M42 12v16"/></svg>' },
rockingchair:{ n: '摇椅', w: 14, h: 20, svg: '<svg viewBox="0 0 48 60" fill="none" aria-hidden="true"><path class="hm-p-wood" d="M18 2h12a3 3 0 0 1 3 3v18H15V5a3 3 0 0 1 3-3Z"/><rect class="hm-p-wood2" x="19" y="6" width="10" height="12" rx="2"/><rect class="hm-p-wood2" x="10" y="23" width="28" height="6" rx="2.5"/><path class="hm-p-line" d="M13 29v18M35 29v18"/><path d="M6 56c8-4 28-4 36 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>' },
tablelamp: { n: '台灯', w: 7, h: 13, svg: '<svg viewBox="0 0 24 34" fill="none" aria-hidden="true"><path class="hm-p-soft" d="M4 12h16l-3.5-12h-9Z"/><ellipse class="hm-p-lampglow" cx="12" cy="13" rx="9" ry="3"/><path d="M12 12v18" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><ellipse class="hm-p-line" cx="12" cy="32" rx="7" ry="2.4"/></svg>' },
fan:      { n: '落地扇', w: 9, svg: '<svg viewBox="0 0 30 72" fill="none" aria-hidden="true"><circle class="hm-p-soft" cx="15" cy="16" r="13"/><path d="M15 16 8 10M15 16l7-6M15 16V4M15 16l-7 6M15 16l7 6M15 16v10" fill="none" stroke="currentColor" stroke-width="1" opacity="0.35"/><circle class="hm-p-line" cx="15" cy="16" r="2.2"/><path d="M15 29v38" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><ellipse class="hm-p-line" cx="15" cy="69" rx="9" ry="3.2"/></svg>' },
cushion: { n: '靠垫', w: 8, svg: '<svg viewBox="0 0 24 22" fill="none" aria-hidden="true"><path class="hm-p-acc" d="M4 3h16a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z"/><path d="M6 8c3 2.4 9 2.4 12 0" fill="none" stroke="currentColor" stroke-width="0.9" opacity="0.35"/><path class="hm-p-line" d="M2 7c1.6 1 2.6 2.4 3 4M22 7c-1.6 1-2.6 2.4-3 4"/></svg>' },
stool: { n: '小圆凳', w: 10, svg: '<svg viewBox="0 0 28 30" fill="none" aria-hidden="true"><ellipse class="hm-p-wood" cx="14" cy="7" rx="12" ry="5"/><ellipse class="hm-p-wood2" cx="14" cy="6" rx="8.6" ry="3.2"/><path d="M6 10 8 30M22 10l-2 20M14 12v18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>' },
basket: { n: '收纳筐', w: 10, svg: '<svg viewBox="0 0 32 30" fill="none" aria-hidden="true"><path class="hm-p-wood" d="M4 11h24l-3 19H7Z"/><rect class="hm-p-wood2" x="2" y="8" width="28" height="4.5" rx="2"/><path class="hm-p-soft" d="M9 2c2.4-2.2 5.2-2.4 7.4-.6 2 1.6 4 1.2 5.6-.6v6.4c-2.2 1.8-4.6 2-6.6.6-1.8-1.2-4-1.2-6.4.8Z"/><path d="M9 17h14M10 22h12" fill="none" stroke="currentColor" stroke-width="0.9" opacity="0.3"/></svg>' },
broom: { n: '扫帚', w: 7, svg: '<svg viewBox="0 0 20 50" fill="none" aria-hidden="true"><path d="M12 2 5 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path class="hm-p-wood" d="M4 31h12l-2 19H6Z"/><path d="M6 34v14M9 34v14M12 34v14" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.4"/></svg>' },
};
var HM_ROOM_PIECES = {
winLiving:  { svg: HM_ROOM_WIN_LIVING,   box: [20, 19, 152, 181] },
winBed:     { svg: HM_ROOM_WIN_BED,      box: [15, 27, 133, 118] },
winStudy:   { svg: HM_ROOM_WIN_STUDY,    box: [8, 19, 160, 147] },
winKitchen: { svg: HM_ROOM_WIN_KITCHEN,  box: [34, 26, 106, 92] },
winDining:  { svg: HM_ROOM_WIN_DINING,   box: [44, 22, 120, 120] },
winFrost:   { svg: HM_ROOM_WIN_FROST,    box: [40, 44, 100, 85] },
rug:        { svg: HM_ROOM_RUG,          box: [102, 228, 136, 44] },
lamp:       { svg: HM_ROOM_LAMP,         box: [149, 0, 42, 63] },
hangplant:  { svg: HM_ROOM_HANGPLANT,    box: [292, 0, 28, 56] },
decorLiving:{ svg: HM_ROOM_DECOR_LIVING, box: [194, 22, 142, 74] },
decorBed:   { svg: HM_ROOM_DECOR_BED,    box: [208, 24, 126, 70] },
decorStudy: { svg: HM_ROOM_DECOR_STUDY,  box: [210, 22, 124, 68] },
decorKitchen:{ svg: HM_ROOM_DECOR_KITCHEN, box: [208, 22, 126, 64] },
decorDining:{ svg: HM_ROOM_DECOR_DINING, box: [206, 22, 128, 46] },
decorBath:  { svg: HM_ROOM_DECOR_BATH,   box: [230, 28, 74, 74] },
decorBalcony:{ svg: HM_ROOM_DECOR_BALCONY, box: [200, 22, 138, 62] },
decorEntry: { svg: HM_ROOM_DECOR_ENTRY,  box: [220, 30, 86, 32] },
table:      _hmPieceFromProp('coffee',     [34, 174, 102, 38]),
dresser:    _hmPieceFromProp('dresser',    [34, 174, 102, 38]),
desk:       _hmPieceFromProp('desk',       [34, 174, 102, 38]),
counter:    { svg: HM_ROOM_COUNTER,          box: [34, 150, 140, 72] },
sideboard:  _hmPieceFromProp('sideboard',  [34, 157, 102, 55]),
washstand:  _hmPieceFromProp('sink',       [34, 161, 102, 50]),
flowerbox:  { svg: HM_ROOM_FLOWERBOX,        box: [34, 151, 102, 56] },
shoecab:    _hmPieceFromProp('shoecab',    [34, 174, 102, 38]),
bed:        { svg: HM_ROOM_BED,              box: [74, 164, 157, 58] },
nightstand: _hmPieceFromProp('nightstand', [202, 172, 24, 36]),
bookcase:   _hmPieceFromProp('bookcase',   [246, 148, 54, 64]),
door:       { svg: HM_ROOM_DOOR,             box: [55, 96, 76, 150] },
rugL:       { svg: HM_ROOM_MATS.rugL,     box: [96, 222, 150, 48] },
rugBed:     { svg: HM_ROOM_MATS.rugBed,   box: [216, 244, 86, 26] },
matK:       { svg: HM_ROOM_MATS.matK,     box: [44, 252, 64, 22] },
rugD:       { svg: HM_ROOM_MATS.rugD,     box: [106, 220, 132, 52] },
matB:       { svg: HM_ROOM_MATS.matB,     box: [46, 256, 58, 18] },
matE:       { svg: HM_ROOM_MATS.matE,     box: [52, 258, 54, 16] },
sofaL:      _hmPieceFromProp('sofa',       [126, 124, 140, 81]),
tvL:        _hmPieceFromProp('tv',         [186, 176, 118, 83]),
fridgeL:    _hmPieceFromProp('fridge',     [286, 150, 46, 69]),
diningL:    _hmPieceFromProp('dining',     [128, 132, 126, 89]),
chairL:     _hmPieceFromProp('chair',      [206, 158, 74, 96]),
bathtubL:   _hmPieceFromProp('bathtub',    [150, 160, 120, 78]),
toiletL:    _hmPieceFromProp('toilet',     [282, 168, 50, 59]),
washerL:    _hmPieceFromProp('washer',     [184, 158, 94, 94]),
dryerL:     _hmPieceFromProp('dryer',      [246, 126, 84, 73]),
shoecabL:  _hmPieceFromProp('shoecab',    [214, 182, 74, 60]),
coatrackL:  _hmPieceFromProp('coatrack',   [272, 120, 60, 72]),
wardrobeL:  _hmPieceFromProp('wardrobe',   [286, 136, 48, 64]),
shelfL:     _hmPieceFromProp('shelf',      [216, 62, 96, 55]),
tablelampL: _hmPieceFromProp('tablelamp',  [128, 74, 76, 105]),
microwaveL: _hmPieceFromProp('microwave',  [138, 120, 74, 49]),
lampCeil:   { svg: HM_ROOM_LAMPS.lampCeil,   box: [148, 0, 44, 22] },
lampDining: { svg: HM_ROOM_LAMPS.lampDining, box: [148, 0, 44, 50] },
lampWall:   { svg: HM_ROOM_LAMPS.lampWall,   box: [284, 30, 26, 26] },
cupboardL:  _hmPieceFromProp('cupboard',   [236, 138, 86, 86])
};
var HM_ROOM_FIXED = {
'': {
pieces: { winLiving:[16,22,136], decorLiving:[196,26,140], lamp:[149,0,41], hangplant:[290,4,28],
tvL:[246,214,62,'foot'], sofaL:[48,214,116,'foot'], table:[100,262,76,'foot'],
},
props:  [['lamp',56,78], ['books',84,90]]
},
bed: {
pieces: { winBed:[14,26,122], decorBed:[228,30,62], lampCeil:[145,0,44],
dresser:[10,214,76,'foot'], nightstand:[92,240,30,'foot'], bed:[134,240,120,'foot'],
},
props:  [['tablelamp',27,68]]
},
study: {
pieces: { winStudy:[6,14,145], decorStudy:[188,24,56],
desk:[10,214,118,'foot'], bookcase:[258,214,54,'foot'], tablelampL:[88,157,20,'foot'],
},
props:  [['chair',18,84], ['plant',78,90]]
},
kitchen: {
pieces: { winKitchen:[30,28,105], decorKitchen:[210,26,85],
counter:[6,214,140,'foot'], microwaveL:[92,142,48,'foot'], fridgeL:[276,214,46,'foot'],
},
props:  [['plantstand',46,84], ['broom',82,86]]
},
dining: {
pieces: { winDining:[40,22,112], decorDining:[225,38,68], lampDining:[148,0,44],
sideboard:[8,214,84,'foot'], diningL:[128,276,92,'foot'], chairL:[246,276,38,'foot'],
},
props:  [['vase',15,55]]
},
bath: {
pieces: { winFrost:[38,44,99], decorBath:[236,26,40], lampWall:[288,30,20],
washstand:[8,214,88,'foot'], bathtubL:[116,244,116,'foot'], toiletL:[268,214,44,'foot'],
},
props:  [['towelrack',74,26]]
},
balcony: {
pieces: { decorBalcony:[225,40,68],
flowerbox:[250,224,80,'foot'], washerL:[20,248,52,'foot'], dryerL:[100,248,62,'foot'],
},
props:  [['basket',24,90]]
},
entry: {
pieces: { door:[44,212,56,'foot'], decorEntry:[222,30,75], lampCeil:[145,0,44],
shoecabL:[244,214,68,'foot'],
},
props:  [['umbrella',62,20]]
}
};
var HM_ROOM_TABLE_DY = { dining: 2.6 };
var HM_ROOM_TABLE_ID = {
'':       'table',
bed:      'dresser',
study:    'desk',
kitchen:  'counter',
dining:   'diningL',
bath:     'washstand',
balcony:  'flowerbox',
entry:    'shoecabL'
};
var HM_ROOM_PIECES_LIST = {
'':       ['winLiving', 'decorLiving', 'lamp', 'hangplant', 'tvL', 'sofaL', 'table'],
bed:      ['winBed', 'decorBed', 'lampCeil', 'dresser', 'nightstand', 'bed'],
study:    ['winStudy', 'decorStudy', 'desk', 'bookcase', 'tablelampL'],
kitchen:  ['winKitchen', 'decorKitchen', 'counter', 'microwaveL', 'fridgeL'],
dining:   ['winDining', 'decorDining', 'lampDining', 'sideboard', 'diningL', 'chairL'],
bath:     ['winFrost', 'decorBath', 'lampWall', 'washstand', 'bathtubL', 'toiletL'],
balcony:  ['decorBalcony', 'flowerbox', 'washerL', 'dryerL'],
entry:    ['decorEntry', 'lampCeil', 'door', 'shoecabL']
};
var HM_SEASON_DECOR = {
spring: { n: '春天', svg: '<svg viewBox="0 0 40 40"><path d="M7 35c9 0 15-7 19-15"/><path d="M17 27c-3-1-5-3-5-6 3 0 4 2 5 4"/><path d="M23 21c3-1 5-3 5-6-3 0-4 2-5 4"/><circle cx="13" cy="17" r="2.2"/><circle cx="27" cy="12" r="2.2"/></svg>' },
summer: { n: '夏天', svg: '<svg viewBox="0 0 40 40"><path d="M13 31l13-17"/><path d="M22 34a11 11 0 0 0 9-15l-2-3-7 18z"/></svg>' },
autumn: { n: '秋天', svg: '<svg viewBox="0 0 40 40"><path d="M20 34V13"/><path d="M20 19c-6-2-9-6-9-11 5 0 8 4 9 8"/><path d="M20 24c6-3 8-7 8-12-4 1-7 5-8 9"/></svg>' },
winter: { n: '冬天', svg: '<svg viewBox="0 0 40 40"><path d="M20 7v26M9 13l22 14M31 13L9 27"/><path d="M17 9l3 3 3-3M17 31l3-3 3 3"/></svg>' }
};
var HM_ACT_OBJ = {
free:    { n: '桌上摊着一本书', svg: '<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path class="hm-p-soft" d="M8 22h12v10H8Z"/><path class="hm-p-wood" d="M20 22h12v10H20Z"/><path d="M20 22v10M8 22h24" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M12 18h16v4H12Z" class="hm-p-soft"/></svg>' },
busy:    { n: '桌上一杯水', svg: '<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path class="hm-p-soft" d="M13 18h12v12a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4Z"/><path d="M25 21h3a3 3 0 0 1 0 6h-3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M16 13c0-2 2-2 2-4M22 13c0-2 2-2 2-4" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" opacity=".45"/></svg>' },
rushed:  { n: '几张纸散着', svg: '<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect class="hm-p-soft" x="8" y="12" width="24" height="5" rx="2.5"/><rect class="hm-p-soft" x="8" y="19" width="18" height="5" rx="2.5"/><rect class="hm-p-soft" x="8" y="26" width="22" height="5" rx="2.5"/></svg>' },
rest:    { n: '一条毯子搭着', svg: '<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path class="hm-p-soft" d="M8 20c7-4 17-4 24 0v10c-7 3-17 3-24 0Z"/><path d="M13 23c4 2 10 2 14 0" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" opacity=".5"/></svg>' },
sleep:   { n: '毯子铺好了', svg: '<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path class="hm-p-soft" d="M8 22c7-4 17-4 24 0v10c-7 3-17 3-24 0Z"/><path class="hm-p-wood" d="M27 10a5 5 0 1 0 4 9 6 6 0 0 1-4-9Z"/></svg>' },
unknown: { n: '灯没开', svg: '<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path class="hm-p-soft" d="M15 16h10l-2 9h-6Z"/><rect class="hm-p-wood" x="11" y="32" width="18" height="3" rx="1.5"/><path d="M20 8v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>' },
away:    { n: '椅子空着', svg: '<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M13 15v18M27 15v18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><rect class="hm-p-soft" x="13" y="23" width="14" height="3" rx="1.5"/><rect class="hm-p-soft" x="13" y="15" width="14" height="3" rx="1.5"/></svg>' }
};
var _hmVisit = null;
function _hmCid() { const c = currentContact(); return (c && c.kind !== 'group') ? c.id : ''; }
function _hmContact() { const c = currentContact(); return (c && c.kind !== 'group') ? c : null; }
function homeOf(cid) {
return (data.home && data.home[cid] && typeof data.home[cid] === 'object' && !Array.isArray(data.home[cid])) ? data.home[cid] : null;
}
function _hmLookDefault() {
return {
bg: '', bgLuma: null, tone: '', glow: 0, skin: '',
props: null,
photos: [],
photosBy: {},
photoFrame: '',
photoNote: '',
lampOn: true,
winOpen: false,
plant: { n: 0, day: '', at: 0, nm: '', born: '', kind: '', log: [], soil: '', sun: '', seed: 0 },
propTone: '',
wall: '', floor: '', wood: '', line: '',
room: '',
roomProps: {},
card: null
};
}
function _hmEnsure(cid) {
if (!data.home || typeof data.home !== 'object') data.home = {};
let o = data.home[cid];
if (!o || typeof o !== 'object' || Array.isArray(o)) { o = { look: _hmLookDefault(), notes: [] }; data.home[cid] = o; }
if (!o.look || typeof o.look !== 'object' || Array.isArray(o.look)) o.look = _hmLookDefault();
const d = _hmLookDefault();
for (const k of Object.keys(d)) if (!(k in o.look)) o.look[k] = d[k];
if (!Array.isArray(o.notes)) o.notes = [];
return o;
}
function _hmApplyLook() {
const view = document.getElementById('hmView');
if (!view) return;
const o = homeOf(_hmCid());
const look = (o && o.look) || {};
if (look.bg) {
view.style.setProperty('--hm-bg', 'url("' + look.bg + '")');
const l = (typeof look.bgLuma === 'number' && isFinite(look.bgLuma)) ? look.bgLuma : null;
const a = l === null ? 0.55 : (l <= 0.28 ? 0.72 : (l >= 0.72 ? 0.42 : 0.55));
view.style.setProperty('--hm-veils', 'linear-gradient(rgba(255,255,255,' + a + '),rgba(255,255,255,' + Math.max(0.35, a - 0.12) + '))');
} else {
view.style.removeProperty('--hm-bg');
view.style.removeProperty('--hm-veils');
}
if (look.tone && /^#[0-9a-fA-F]{6}$/.test(look.tone)) view.style.setProperty('--hm-accent', look.tone);
else view.style.removeProperty('--hm-accent');
const glow = (typeof look.glow === 'number' && isFinite(look.glow)) ? Math.min(30, Math.max(0, look.glow)) : 0;
if (glow > 0) view.style.setProperty('--hm-glow-a', String(glow / 30));
else view.style.removeProperty('--hm-glow-a');
const skin = (typeof look.skin === 'string') ? look.skin : '';
const pal = HM_ROOM_PAL[_hmRoomOf(_hmCid())] || HM_ROOM_PAL[''];
const skSel = skin ? HM_SKINS.find(x => x.k === skin) : null;
const sk0 = skSel || HM_SKINS[0];
const bl = skSel ? 0.45 : 0;
const sk = {
k: sk0.k, n: sk0.n, tone: sk0.tone, glow: sk0.glow, props: sk0.props,
wall:  _hmMixHex(pal.wall,  sk0.wall,  bl),
floor: _hmMixHex(pal.floor, sk0.floor, bl),
wood:  _hmMixHex(pal.wood,  sk0.wood,  bl),
line:  pal.line,
wall2: pal.wall2,
acc:   pal.acc
};
if (skin && sk && sk.k === skin) view.setAttribute('data-hm-skin', skin);
else view.removeAttribute('data-hm-skin');
view.style.setProperty('--hm-room', sk.wall);
view.style.setProperty('--hm-wall', sk.wall);
view.style.setProperty('--hm-floor', sk.floor);
view.style.setProperty('--hm-wood', sk.wood);
view.style.setProperty('--hm-line', sk.line);
view.style.setProperty('--hm-wall2', sk.wall2);
view.style.setProperty('--hm-acc', sk.acc);
const _hmHex = v => (typeof v === 'string' && /^#[0-9a-fA-F]{6}$/.test(v)) ? v : '';
const cw = _hmHex(look.wall), cf = _hmHex(look.floor), cwo = _hmHex(look.wood), cl = _hmHex(look.line);
view.style.setProperty('--hm-wall', cw || sk.wall);
view.style.setProperty('--hm-floor', cf || sk.floor);
view.style.setProperty('--hm-wood', cwo || sk.wood);
view.style.setProperty('--hm-line', cl || sk.line);
view.style.setProperty('--hm-room', cw || sk.wall);
if (look.lampOn === false) view.setAttribute('data-hm-lamp', 'off');
else view.removeAttribute('data-hm-lamp');
if (look.winOpen === true) view.setAttribute('data-hm-win', 'open');
else view.removeAttribute('data-hm-win');
}
function _hmWorldClock(en) {
if (!en) return '';
if ((!en.world || !en.world.last) && typeof _cjRollWorld === 'function') en.world = _cjRollWorld(en, Date.now());
if (!en.world) return '';
return _cjPad(en.world.hh) + ':' + _cjPad(en.world.mm);
}
function _hmNightAttr(en) {
const view = document.getElementById('hmView');
if (!view || !en || !en.world) { if (view) view.removeAttribute('data-hm-night'); return; }
const hh = en.world.hh;
if (hh >= 22 || hh < 6) view.setAttribute('data-hm-night', '1');
else view.removeAttribute('data-hm-night');
}
function _hmWxAttr(cid) {
const view = document.getElementById('hmView');
if (!view) return;
let k = '';
if (cid && typeof cjSkyFor === 'function') {
try { const s = cjSkyFor(cid); k = (s && s.weather) ? String(s.weather) : ''; } catch (e) {}
}
const prev = view.getAttribute('data-hm-wx') || '';
if (k) view.setAttribute('data-hm-wx', k);
else view.removeAttribute('data-hm-wx');
if (k !== prev) {
const wx = view.querySelector('.hm-wx');
if (wx) { wx.style.opacity = '0'; void wx.offsetWidth; wx.style.opacity = '1'; }
}
}
function _hmAnnToday(cid) {
if (!cid || typeof annMainFor !== 'function') return null;
let a = null;
try { a = annMainFor(cid); } catch (e) { return null; }
if (!a || !a.date) return null;
const p = String(a.date).split('-');
if (p.length < 2) return null;
const mo = +p[p.length - 2], d = +p[p.length - 1];
if (!(mo >= 1 && mo <= 12 && d >= 1 && d <= 31)) return null;
const now = new Date();
return (now.getMonth() + 1 === mo && now.getDate() === d) ? a : null;
}
function _hmAnnAttr(cid) {
const view = document.getElementById('hmView');
if (!view) return;
if (_hmAnnToday(cid)) view.setAttribute('data-hm-ann', '1');
else view.removeAttribute('data-hm-ann');
}
function _hmAnnPaint(cid) {
const el = document.getElementById('hmAnnTop');
if (!el) return;
const a = _hmAnnToday(cid);
if (a) { el.textContent = '今天 · ' + (a.name || '纪念日'); el.hidden = false; }
else { el.textContent = ''; el.hidden = true; }
}
function _hmPageAttrs(en, cid) {
_hmNightAttr(en);
_hmWxAttr(cid);
_hmAnnAttr(cid);
_hmAnnPaint(cid);
const view = document.getElementById('hmView');
if (view) view.setAttribute('data-hm-season', _hmSeason());
if (view) {
let tp = '';
try { if (en && typeof _cjTimePartOf === 'function') tp = _cjTimePartOf(en) || ''; } catch (e) {}
if (tp) view.setAttribute('data-hm-tp', tp);
else view.removeAttribute('data-hm-tp');
view.setAttribute('data-hm-light', _hmLightOf(tp || 'morning'));
}
if (view) {
if (typeof _cjHiding === 'function' && _cjHiding(en)) view.setAttribute('data-hm-away', '1');
else view.removeAttribute('data-hm-away');
}
if (view) {
const rk = cid ? _hmRoomOf(cid) : '';
if (rk) view.setAttribute('data-hm-room', rk);
else view.removeAttribute('data-hm-room');
}
}
function _hmVisitBump(cid) {
const dk = (typeof dressDayKey === 'function') ? dressDayKey() : new Date().toLocaleDateString('zh-CN');
const key = cid + '|' + dk;
if (!_hmVisit || _hmVisit.key !== key) _hmVisit = { key: key, n: 0 };
_hmVisit.n++;
return _hmVisit.n;
}
var HM_ROOM_TOKEN = {
bed:      { n: '窗台那只杯子', line: '早上倒的，还温着。',
svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
+ '<path class="hm-p-soft" d="M6.4 8.2h9v6.4a4 4 0 0 1-4 4h-1a4 4 0 0 1-4-4Z"/>'
+ '<path d="M15.4 9.4h2.1a2 2 0 0 1 0 4h-2.1"/><path d="M4.4 20.4h12.6"/></svg>' },
study:    { n: '窗台那摞书', line: '翻到第 47 页。',
svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
+ '<rect class="hm-p-soft" x="3.4" y="16" width="17.2" height="3.4" rx="1.2"/>'
+ '<rect class="hm-p-wood" x="5.2" y="12.4" width="14" height="3.2" rx="1.2"/>'
+ '<path class="hm-p-line" d="M8.4 7.6h7.6v4.4H8.4Z"/><path d="M8.4 9.8h7.6" opacity=".3"/></svg>' },
kitchen:  { n: '窗台那只小罐', line: '里面是昨天买的盐。',
svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
+ '<rect class="hm-p-soft" x="7.4" y="9.4" width="9.2" height="10.6" rx="2"/>'
+ '<rect class="hm-p-wood" x="6.2" y="6.4" width="11.6" height="3" rx="1.4"/>'
+ '<path d="M9.8 12.6v5M12 12.6v5M14.2 12.6v5" stroke-width=".9" opacity=".35"/></svg>' },
dining:   { n: '窗台那盘果子', line: '两个，还剩一个。',
svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
+ '<ellipse class="hm-p-soft" cx="12" cy="16.6" rx="8.4" ry="2.8"/>'
+ '<circle class="hm-p-line" cx="9.4" cy="11.6" r="3.2"/><circle class="hm-p-line" cx="14.6" cy="12.4" r="2.6"/></svg>' },
bath:     { n: '窗台那块香皂', line: '用了一半。',
svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
+ '<rect class="hm-p-soft" x="5.2" y="10.4" width="13.6" height="6.2" rx="2.4"/>'
+ '<path d="M8.6 13.6h6.8" stroke-width=".9" opacity=".35"/><path d="M4 19.4h16"/></svg>' },
balcony:  { n: '窗台那顶草帽', line: '出门前忘了拿。',
svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
+ '<path class="hm-p-soft" d="M6.4 14.8a5.6 5.6 0 0 1 11.2 0Z"/>'
+ '<ellipse class="hm-p-wood" cx="12" cy="14.8" rx="9" ry="2.6"/>'
+ '<path d="M8.2 11.4h7.6" stroke-width=".9" opacity=".35"/></svg>' },
entry:    { n: '门口那串钥匙', line: '三把，都在这儿。',
svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
+ '<circle cx="8" cy="8.6" r="3.4"/>'
+ '<path d="M10.4 11 15 15.6M13.4 14l1.8 1.8M11.8 12.6l1.8 1.8"/></svg>' }
};
function _hmHelloOf(cid, en, n) {
let tp = '';
if (en && typeof _cjTimePartOf === 'function') tp = _cjTimePartOf(en) || '';
const tpL = HM_TP_LBL[tp] || '';
const rmL = _hmRoomLbl(_hmRoomOf(cid));
let pool = _hmPsList('回家的问候', rmL);
if (!pool.length && n >= 2 && tpL) pool = _hmPsList('回家的问候', '又回·' + tpL);
if (!pool.length && tpL) pool = _hmPsList('回家的问候', '按时·' + tpL);
if (!pool.length) return '';
const dk = (typeof dressDayKey === 'function') ? dressDayKey() : new Date().toLocaleDateString('zh-CN');
let h = 0; const s = cid + '|' + dk + '|' + tp + '|' + rmL;
for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
return pool[h % pool.length];
}
function _hmLookOf(cid) { const o = homeOf(cid); return (o && o.look && typeof o.look === 'object') ? o.look : null; }
function _hmToday() { return (typeof dressDayKey === 'function') ? dressDayKey() : new Date().toLocaleDateString('zh-CN'); }
function _hmSeason() {
const m = new Date().getMonth() + 1;
if (m >= 3 && m <= 5) return 'spring';
if (m >= 6 && m <= 8) return 'summer';
if (m >= 9 && m <= 11) return 'autumn';
return 'winter';
}
var HM_FEST_DECOR = [
{ md: '01-01', n: '元旦', svg: '<svg viewBox="0 0 40 40"><path d="M6 11c9 3 19 3 28 0"/><path d="M10 12l2 6 3-5M18 13l1 6 3-5M26 13l-1 6 3-5"/></svg>' },
{ md: '02-14', n: '情人节', svg: '<svg viewBox="0 0 40 40"><path d="M20 32C12 26 8 21 8 16c0-4 3-6 6-6 3 0 5 2 6 4 1-2 3-4 6-4 3 0 6 2 6 6 0 5-4 10-12 16z"/></svg>' },
{ md: '06-01', n: '儿童节', svg: '<svg viewBox="0 0 40 40"><ellipse cx="14" cy="13" rx="6" ry="7"/><ellipse cx="26" cy="10" rx="5" ry="6"/><path d="M14 20c-1 4-1 8 0 14M26 16c1 5 1 11-2 18"/></svg>' },
{ md: '10-31', n: '万圣前夜', svg: '<svg viewBox="0 0 40 40"><path d="M12 26c0-8 4-13 8-13s8 5 8 13c-5 2-11 2-16 0z"/><path d="M20 13v-5"/><path d="M17 22h.01M23 22h.01M20 25v2"/></svg>' },
{ md: '12-25', n: '圣诞节', svg: '<svg viewBox="0 0 40 40"><path d="M20 6l9 12h-18z"/><path d="M20 14l10 13H10z"/><path d="M20 27v7M16 34h8"/></svg>' }
];
function _hmFestOf() {
const d = new Date();
const md = ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
return HM_FEST_DECOR.find(f => f.md === md) || null;
}
var HM_UNLOCK = [
{ id: 'vase', key: 'water', n: 3, hint: '给花浇 3 次水' },
{ id: 'doormat', key: 'knock', n: 5, hint: '敲 5 次门' }
];
function _hmStatsOf(cid) {
const o = _hmEnsure(cid);
if (!o.stats || typeof o.stats !== 'object' || Array.isArray(o.stats)) o.stats = { water: 0, knock: 0 };
return o.stats;
}
function _hmUnlocked(id, cid) {
const u = HM_UNLOCK.find(x => x.id === id);
if (!u) return true;
return (+_hmStatsOf(cid)[u.key] || 0) >= u.n;
}
function _hmStatsBump(cid, key) {
const st = _hmStatsOf(cid);
const before = +st[key] || 0;
st[key] = Math.min(9999, before + 1);
save();
const u = HM_UNLOCK.find(x => x.key === key && x.n > before && x.n <= st[key]);
if (u && HM_PROPS[u.id]) showToast('解锁了一样东西：' + HM_PROPS[u.id].n + '（它会出现在屋里）');
}
var HM_PHOTO_MAX = 3;
function _hmPhotoList(v) {
return Array.isArray(v) ? v.filter(x => typeof x === 'string' && x).slice(0, HM_PHOTO_MAX) : [];
}
function _hmPhotosOf(cid, room) {
const look = _hmLookOf(cid) || {};
const rk = (typeof room === 'string') ? room : _hmRoomOf(cid);
const by = (look.photosBy && typeof look.photosBy === 'object' && !Array.isArray(look.photosBy)) ? look.photosBy : null;
if (by && Object.prototype.hasOwnProperty.call(by, rk)) return _hmPhotoList(by[rk]);
return rk === '' ? _hmPhotoList(look.photos) : [];
}
function _hmPhotosSet(cid, room, arr) {
const o = _hmEnsure(cid);
const rk = (typeof room === 'string') ? room : _hmRoomOf(cid);
if (!o.look.photosBy || typeof o.look.photosBy !== 'object' || Array.isArray(o.look.photosBy)) o.look.photosBy = {};
const list = _hmPhotoList(arr);
if (list.length) o.look.photosBy[rk] = list;
else delete o.look.photosBy[rk];
if (rk === '') o.look.photos = list.slice();
return list;
}
var HM_PROP_WHERE = { shelf: 'wall', lamp: 'floor', vase: 'wall', umbrella: 'wall', plant: 'floor', books: 'floor', doormat: 'floor',
sofa: 'floor', bed: 'floor', desk: 'floor', armchair: 'floor', bookcase: 'floor', tv: 'floor', fireplace: 'floor', piano: 'floor',
picture: 'wall', clock: 'wall', mirror: 'wall', sconce: 'wall',
coffee: 'floor', dining: 'floor', chair: 'floor', wardrobe: 'floor', shoecab: 'floor', fridge: 'floor', washer: 'floor',
bathtub: 'floor', sink: 'floor', plantstand: 'floor', fan: 'floor',
toilet: 'floor', coatrack: 'floor', dryer: 'floor', microwave: 'floor', cupboard: 'floor',
towelrack: 'wall', mirrorstand: 'floor', bench: 'floor', rockingchair: 'floor', tablelamp: 'floor',
cushion: 'floor', stool: 'floor', basket: 'floor', broom: 'floor' };
var HM_ROOM_W = 340, HM_ROOM_H = 310;
function _hmPropBox(id) {
const p = HM_PROPS[id];
let w = (p && typeof p.w === 'number' && p.w > 0) ? p.w : 16;
let r = 0.7;
if (p) {
const m = /viewBox="([-0-9. ]+)"/.exec(p.svg || '');
if (m) { const a = m[1].trim().split(/\s+/).map(Number); if (a.length === 4 && a[2] > 0) r = a[3] / a[2]; }
}
let h = w * (HM_ROOM_W / HM_ROOM_H) * r;
if (p && typeof p.h === 'number' && p.h > 0 && h > p.h) {
const k = p.h / h;
h = p.h; w = w * k;
}
return { w: w, h: h };
}
var HM_PROP_BAND = { wall: [6, 52], floor: [66.5, 92] };
var HM_PROP_XBAND = { wall: [46, 92], floor: [4, 96] };
function _hmYBandOf(id, sc) {
if (HM_PROP_WHERE[id] === 'wall') return HM_PROP_BAND.wall;
const h = _hmPropBox(id).h * (typeof sc === 'number' && isFinite(sc) ? sc : 1);
return [HM_PROP_BAND.floor[0] - h, HM_PROP_BAND.floor[1] - h];
}
function _hmXHiOf(id, sc) {
return Math.min(HM_PROP_XBAND[HM_PROP_WHERE[id] === 'wall' ? 'wall' : 'floor'][1], 98 - _hmPropBox(id).w * (typeof sc === 'number' && isFinite(sc) ? sc : 1));
}
function _hmPropsOf(cid) {
_hmEnsure(cid);
const rk = _hmRoomOf(cid);
const fx = HM_ROOM_FIXED[rk] || HM_ROOM_FIXED[''];
const out = [];
for (const it of (fx && fx.props) || []) {
const id = it && it[0];
if (!id || !HM_PROPS[id]) continue;
if (!_hmUnlocked(id, cid)) continue;
const box = _hmPropBox(id);
const wall = HM_PROP_WHERE[id] === 'wall';
const foot = (+it[2] || 0);
const k = wall ? 1 : _hmDepthK(foot / 100 * HM_ROOM_H);
const x0 = +it[1] || 0;
const x = Math.max(2, Math.min(98 - box.w * k, x0 - box.w * (k - 1) / 2));
const y = wall ? foot : (foot - box.h * k);
out.push({ id: id, x: Math.round(x * 10) / 10, y: Math.round(Math.max(2, Math.min(96, y)) * 10) / 10, sc: k });
}
return out;
}
var HM_PLANT_ROOMS = ['', 'bed', 'study', 'kitchen', 'dining', 'bath', 'balcony', 'entry'];
function _hmPlantOf(cid, room) {
const look = _hmLookOf(cid) || {};
let p = null;
if (room === 'balcony' || (room && room !== '')) {
p = (look.plantBy && typeof look.plantBy === 'object' && look.plantBy[room] && typeof look.plantBy[room] === 'object') ? look.plantBy[room] : {};
} else {
p = (look.plant && typeof look.plant === 'object') ? look.plant : {};
}
return {
n: Math.max(0, Math.floor(+p.n || 0)),
day: (typeof p.day === 'string') ? p.day : '',
at: +p.at || 0,
nm: (typeof p.nm === 'string') ? p.nm : '',
born: (typeof p.born === 'string') ? p.born : '',
kind: (typeof p.kind === 'string' && HM_FLOWER[p.kind]) ? p.kind : '',
soil: (typeof p.soil === 'string') ? p.soil : '',
sun: (typeof p.sun === 'string') ? p.sun : '',
seed: Math.min(2, Math.max(0, Math.floor(+p.seed || 0))),
log: (Array.isArray(p.log) ? p.log : []).filter(x => x && typeof x === 'object' && typeof x.t === 'string').slice(-20)
};
}
function _hmPlantAcc(cid, room) {
const o = _hmEnsure(cid);
const fresh = () => ({ n: 0, day: '', at: 0, nm: '', born: '', kind: '', log: [], soil: '', sun: '', seed: 0 });
if (room === 'balcony' || (room && room !== '')) {
if (!o.look.plantBy || typeof o.look.plantBy !== 'object') o.look.plantBy = {};
if (!o.look.plantBy[room] || typeof o.look.plantBy[room] !== 'object') o.look.plantBy[room] = fresh();
return { o: o, p: o.look.plantBy[room] };
}
if (!o.look.plant || typeof o.look.plant !== 'object') o.look.plant = fresh();
return { o: o, p: o.look.plant };
}
function _hmPlantLogAdd(p, t) {
if (!p || typeof p !== 'object') return;
if (!Array.isArray(p.log)) p.log = [];
p.log.push({ d: _hmToday(), t: String(t).slice(0, 60) });
if (p.log.length > 20) p.log = p.log.slice(-20);
}
function _hmDayGap(a, b) {
const pa = String(a || '').split('-').map(Number), pb = String(b || '').split('-').map(Number);
if (pa.length < 3 || pb.length < 3 || !pa[0] || !pb[0]) return 0;
return Math.round((Date.UTC(pb[0], pb[1] - 1, pb[2]) - Date.UTC(pa[0], pa[1] - 1, pa[2])) / 86400000);
}
function _hmGrowDays() {
const s = _hmSeason();
if (s === 'winter') return { leaf: 4, bloom: 9 };
if (s === 'spring') return { leaf: 2, bloom: 5 };
return { leaf: 3, bloom: 7 };
}
function _hmPlantStage(p) {
if (!p || !p.born) return 0;
const g = _hmGrowDays();
const s = Math.min(_hmDayGap(p.born, _hmToday()), p.n || 0);
return s >= g.bloom ? 2 : (s >= g.leaf ? 1 : 0);
}
function _hmFlowerLocked(kind, cid) {
const need = HM_FLOWER_LOCK[kind];
if (!need) return 0;
const have = _hmPlantOf(cid, '').n;
return have < need ? need : 0;
}
function _hmPlantRainToday(cid) {
if (typeof cjSkyFor !== 'function') return false;
try { const s = cjSkyFor(cid); return !!(s && s.weather === 'rain'); } catch (e) { return false; }
}
function _hmPlantSnowToday(cid) {
if (typeof cjSkyFor !== 'function') return false;
try { const s = cjSkyFor(cid); return !!(s && s.weather === 'snow'); } catch (e) { return false; }
}
function _hmPlantThirst(p, cid) {
if (!p.day) return 0;
let d = _hmDayGap(p.day, _hmToday());
if (d <= 1) return 0;
if (_hmSoilFresh(p)) d -= 1;
if (d <= 1) return 0;
if (d === 2 && cid && _hmPlantRainToday(cid)) return 0;
if (d === 2) return 2;
return 3;
}
function _hmSoilFresh(p) { return !!(p.soil && _hmDayGap(p.soil, _hmToday()) <= 3); }
function _hmSunFresh(p) { return !!(p.sun && _hmDayGap(p.sun, _hmToday()) <= 2); }
function _hmBloomGap(p) {
const lg = Array.isArray(p.log) ? p.log : [];
let d = '';
for (const x of lg) if (x && typeof x.t === 'string' && x.t.indexOf('开花了') >= 0 && typeof x.d === 'string') d = x.d;
return d ? _hmDayGap(d, _hmToday()) : -1;
}
function _hmSeedCheck(cid, room) {
const p = _hmPlantOf(cid, room);
if (!p.born || p.seed || _hmPlantStage(p) !== 2) return;
if (_hmBloomGap(p) < 3) return;
const acc = _hmPlantAcc(cid, room);
if (acc.p.seed) return;
acc.p.seed = 1;
_hmPlantLogAdd(acc.p, '它结了一粒种子——开花满三天了。');
_hmPlantTalk(cid, '它结了一粒种子——盆沿上那颗金点就是。', room);
save();
}
var HM_FLOWER = {
'':        { n: '一盆花',   lang: '没起名字，也好好长着。' },
daisy:     { n: '雏菊',     lang: '雏菊的花语是「藏在心里的喜欢」。' },
bell:      { n: '铃兰',     lang: '铃兰的花语是「幸福回来」。' },
rose:      { n: '小玫瑰',   lang: '小玫瑰的花语是「慢慢喜欢你」。' },
sunflower: { n: '向日葵',   lang: '向日葵的花语是「一直朝着你」。' },
hyacinth:  { n: '风信子',   lang: '风信子的花语是「只要点燃，就有值得期待的事」。' },
lavender:  { n: '薰衣草',   lang: '薰衣草的花语是「等一句回答」。' },
succulent: { n: '多肉',     lang: '多肉的花语是「慢一点也没关系」。' }
};
var HM_FLOWER_LOCK = { sunflower: 10, hyacinth: 14, lavender: 20 };
var HM_FLOWER_HABIT = {
'':        { top3: 64, top7: 52, leafW: 1,    drop: 0 },
daisy:     { top3: 54, top7: 40, leafW: 0.78, drop: -2 },
bell:      { top3: 70, top7: 52, leafW: 1,    drop: 7 },
rose:      { top3: 76, top7: 64, leafW: 1.28, drop: 2 },
sunflower: { top3: 48, top7: 30, leafW: 1.15, drop: 0 },
hyacinth:  { top3: 58, top7: 46, leafW: 0.92, drop: 0 },
lavender:  { top3: 60, top7: 48, leafW: 0.8,  drop: 0 },
succulent: { top3: 94, top7: 92, leafW: 1.5,  drop: 0 }
};
function _hmFlowerSVG(kind, cy) {
const c = (typeof cy === 'number') ? cy : 44;
if (kind === 'daisy') {
let s = '';
for (let i = 0; i < 8; i++) {
const a = (i * 45) * Math.PI / 180;
const x = 60 + Math.cos(a) * 13, y = c + Math.sin(a) * 13;
s += '<ellipse class="hm-petal" cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" rx="5.4" ry="2.6" transform="rotate(' + (i * 45) + ' ' + x.toFixed(1) + ' ' + y.toFixed(1) + ')"/>';
}
return s + '<circle class="hm-flower-c" cx="60" cy="' + c + '" r="5"/>';
}
if (kind === 'bell') {
const d = c - 44;
return '<path class="hm-bell" d="M60 ' + (40 + d) + 'c0 6-7 8-7 14 0 4 3 6 7 6s7-2 7-6c0-6-7-8-7-14Z"/>'
+ '<path class="hm-bell" d="M46 ' + (50 + d) + 'c0 5-5 7-5 11 0 3 2 5 5 5s5-2 5-5c0-4-5-6-5-11Z"/>'
+ '<path class="hm-bell" d="M74 ' + (52 + d) + 'c0 5-5 7-5 11 0 3 2 5 5 5s5-2 5-5c0-4-5-6-5-11Z"/>';
}
if (kind === 'rose') {
const d = c - 44;
return '<circle class="hm-rose" cx="60" cy="' + c + '" r="12"/>'
+ '<path class="hm-rose" d="M60 ' + (53 + d) + 'c-5 0-8-4-8-9s4-8 8-8 7 3 7 7-3 7-6 7"/>'
+ '<path class="hm-rose" d="M60 ' + (49 + d) + 'c-3 0-4-2-4-5s2-4 4-4 4 1 4 3-1 4-3 4"/>';
}
if (kind === 'sunflower') {
const d = c - 44;
let s = '';
for (let i = 0; i < 12; i++) {
const a = (i * 30) * Math.PI / 180;
const x = 60 + Math.cos(a) * 16, y = c + Math.sin(a) * 16;
s += '<ellipse class="hm-petal" cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" rx="7" ry="3" transform="rotate(' + (i * 30) + ' ' + x.toFixed(1) + ' ' + y.toFixed(1) + ')"/>';
}
return s + '<circle class="hm-flower-c" cx="60" cy="' + c + '" r="8.5"/>';
}
if (kind === 'hyacinth') {
let s = '<circle class="hm-flower-p" cx="60" cy="' + (c - 14) + '" r="4.8"/>';
for (let i = 0; i < 6; i++) {
const y = c - 6 + i * 6.5, x = 60 + (i % 2 ? 6 : -6);
s += '<circle class="hm-flower-p" cx="' + x + '" cy="' + y.toFixed(1) + '" r="4.4"/>';
}
return s;
}
if (kind === 'lavender') {
let s = '';
for (let i = 0; i < 5; i++) {
const w = 5.2 - i * 0.6;
s += '<ellipse class="hm-petal" cx="60" cy="' + (c - 10 + i * 7.5) + '" rx="' + w.toFixed(1) + '" ry="3.4"/>';
}
return s;
}
if (kind === 'succulent') {
let s = '';
for (let i = 0; i < 8; i++) {
const a = (i * 45 + 22) * Math.PI / 180;
const x = 60 + Math.cos(a) * 12, y = 104 + Math.sin(a) * 8;
s += '<ellipse class="hm-petal" cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" rx="7.5" ry="4.6" transform="rotate(' + Math.round(i * 45 + 22) + ' ' + x.toFixed(1) + ' ' + y.toFixed(1) + ')"/>';
}
return s + '<circle class="hm-petal" cx="60" cy="102" r="5.5"/>';
}
const d = c - 44;
return '<circle class="hm-flower-p" cx="60" cy="' + (30 + d) + '" r="7.5"/><circle class="hm-flower-p" cx="74" cy="' + (44 + d) + '" r="7.5"/>'
+ '<circle class="hm-flower-p" cx="60" cy="' + (58 + d) + '" r="7.5"/><circle class="hm-flower-p" cx="46" cy="' + (44 + d) + '" r="7.5"/>'
+ '<circle class="hm-flower" cx="60" cy="' + c + '" r="7.5"/><circle class="hm-flower-c" cx="60" cy="' + c + '" r="3.2"/>';
}
function _hmPlantSVG(p, snow) {
const st = _hmPlantStage(p);
const kind = HM_FLOWER[p.kind] ? p.kind : '';
const hb = HM_FLOWER_HABIT[kind] || HM_FLOWER_HABIT[''];
const cy = hb.top7 - 8;
const pot = '<path class="hm-pot" d="M38 118h44l-5 30H43Z"/><rect class="hm-pot" x="35" y="112" width="50" height="8" rx="4"/><path class="hm-soil" d="M44 120h32v3H44Z"/>';
let grow = '';
if (st >= 2) {
grow = '<path class="hm-stem" d="M60 112V' + hb.top7 + '"/>'
+ '<path class="hm-leaf" d="M60 94c-14-4-20-13-20-23 12 1 18 10 20 18Z"/>'
+ '<path class="hm-leaf" d="M60 86c13-4 19-13 19-23-11 1-17 10-19 18Z"/>'
+ '<path class="hm-leaf" d="M60 72c-9-2-13-9-13-16 8 1 12 7 13 12Z"/>'
+ _hmFlowerSVG(kind, cy);
} else if (st >= 1) {
grow = '<path class="hm-stem" d="M60 112V' + hb.top3 + '"/>'
+ '<path class="hm-leaf" d="M60 98c-13-4-18-12-18-21 11 1 16 9 18 16Z"/>'
+ '<path class="hm-leaf" d="M60 90c12-4 17-12 17-21-10 1-15 9-17 16Z"/>'
+ '<path class="hm-leaf" d="M60 78c-8-2-12-8-12-14 7 1 11 6 12 10Z"/>'
+ '<path class="hm-leaf" d="M60 70c8-2 11-8 11-13-6 1-10 5-11 9Z"/>';
} else {
grow = '<path class="hm-stem" d="M60 112V88"/>'
+ '<path class="hm-leaf" d="M60 104c-10-3-14-9-14-16 9 1 13 7 14 12Z"/>'
+ '<path class="hm-leaf" d="M60 98c9-3 13-9 13-16-8 1-12 7-13 12Z"/>';
}
const cap = snow ? '<g class="hm-snowcap"><ellipse cx="52" cy="82" rx="6" ry="2.4"/>'
+ '<ellipse cx="66" cy="76" rx="5" ry="2.2"/><ellipse cx="60" cy="60" rx="4.4" ry="2"/>'
+ '<ellipse cx="46" cy="92" rx="4" ry="1.8"/></g>' : '';
return '<svg viewBox="0 0 120 156" fill="none" aria-hidden="true">'
+ '<g class="hm-leaves"><g class="hm-plant-habit" style="--leaf-w:' + hb.leafW + ';--leaf-drop:' + hb.drop + 'px"><g class="hm-plant-body">' + grow + '</g></g></g>' + cap + pot + '</svg>';
}
function _hmFlowerLangHTML(p) {
const kind = (p.kind && HM_FLOWER[p.kind]) ? p.kind : '';
const fl = HM_FLOWER[kind] || HM_FLOWER[''];
return '<details class="hm-flower-lang"><summary>花语 · ' + (kind ? fl.n : '还没选品种') + '</summary><span>' + fl.lang + '</span></details>';
}
function _hmPlantHTML(cid) {
const room = _hmRoomOf(cid);
const tok = HM_ROOM_TOKEN[room] || null;
const p = _hmPlantOf(cid, room);
if (p.born || room === '') {
const cap = (room === '') ? '窗台那盆花' : (room === 'balcony' ? '花架上那盆' : '屋里那盆');
const un = _hmTalkUnread(cid);
return '<div class="hm-plant-sec" id="hmPlantSec">'
+ '<button type="button" class="hm-sign" data-hmdo="plantcard" data-hmroom="' + room + '">'
+ '<i>' + cap + '</i>'
+ '<span id="hmPlantNote">' + _hmPlantLineText(p, cid) + '</span>'
+ (un ? '<b class="hm-talk-dot" aria-hidden="true"></b>' : '')
+ '<em>›</em></button>'
+ _hmFlowerLangHTML(p)
+ '</div>';
}
if (tok) {
return '<div class="hm-plant-sec" id="hmPlantSec"><span class="hm-sign">'
+ '<i>' + tok.n + '</i><span id="hmPlantNote">' + tok.line + '</span></span></div>';
}
return '<div class="hm-plant-sec" id="hmPlantSec"><span class="hm-sign">'
+ '<i>窗台那盆花</i><span id="hmPlantNote">还没有——浇第一口水就算种下了。</span></span></div>';
}
function _hmPlantPaint(cid) {
const room = _hmRoomOf(cid);
_hmSeedCheck(cid, room);
const snow = _hmPlantSnowToday(cid);
const slot = document.getElementById('hmPlantSlot');
if (slot) {
const tok = HM_ROOM_TOKEN[room] || null;
if (room !== '' && tok) {
const th2 = '<span class="hm-token-sill">' + tok.svg + '</span>';
if (slot.innerHTML !== th2) slot.innerHTML = th2;
} else if (room === '') {
const p = _hmPlantOf(cid, '');
const html = _hmPotHTML(p, p.day === _hmToday(), _hmPlantThirst(p, cid), snow, '');
if (slot.innerHTML !== html) slot.innerHTML = html;
}
}
const bp = document.getElementById('hmBalconyPot');
if (bp) {
const p2 = _hmPlantOf(cid, 'balcony');
const html2 = p2.born ? _hmPotHTML(p2, p2.day === _hmToday(), _hmPlantThirst(p2, cid), snow, 'balcony') : '';
if (bp.innerHTML !== html2) bp.innerHTML = html2;
}
const fp = document.getElementById('hmPotFloor');
if (fp) {
const p3 = (room !== '' && room !== 'balcony') ? _hmPlantOf(cid, room) : { born: '' };
const html3 = p3.born ? _hmPotHTML(p3, p3.day === _hmToday(), _hmPlantThirst(p3, cid), snow, room) : '';
if (fp.innerHTML !== html3) fp.innerHTML = html3;
}
}
function _hmPotHTML(p, watered, th, snow, room) {
return '<button type="button" class="hm-plant-big hm-plant' + (watered ? ' is-watered' : '') + '" data-hmwater="1" data-hmplant="1" data-hmroom="' + (room || '') + '" data-hm-thirst="' + th + '"' + (snow ? ' data-hm-snow="1"' : '') + (_hmSunFresh(p) ? ' data-hm-sun="1"' : '') + (p.seed === 1 ? ' data-hm-seed="1"' : '') + (_hmPlantStage(p) >= 2 ? ' data-hm-bloom="1"' : '') + ' data-hm-flower="' + (HM_FLOWER[p.kind] ? p.kind : '') + '" aria-label="给花浇水" title="' + (watered ? '今天已经浇过水了' : '浇点水') + '">'
+ _hmPlantSVG(p, snow) + '<span class="hm-water-drops" aria-hidden="true"><i></i><i></i><i></i></span>'
+ '<span class="hm-soil-dots" aria-hidden="true"><i></i><i></i><i></i><i></i></span>'
+ '<span class="hm-fall" aria-hidden="true"><i></i><i></i><i></i></span></button>';
}
function _hmTalkUnread(cid) {
const o = homeOf(cid);
const n = (o && Array.isArray(o.talks)) ? o.talks.length : 0;
let seen = 0;
try { seen = +localStorage.getItem('ordinal-hm-talk-seen-' + cid) || 0; } catch (e) {}
return Math.max(0, n - seen);
}
function _hmTalkSeen(cid) {
const o = homeOf(cid);
const n = (o && Array.isArray(o.talks)) ? o.talks.length : 0;
try { localStorage.setItem('ordinal-hm-talk-seen-' + cid, String(n)); } catch (e) {}
document.querySelectorAll('#hmPlantSec .hm-talk-dot').forEach(x => x.remove());
}
function _hmPlantCard(cid, room) {
if (typeof openModal !== 'function') return;
const p = _hmPlantOf(cid, room || '');
const th = _hmPlantThirst(p, cid);
const st = _hmPlantStage(p);
const stage = st >= 2 ? '开了花' : (st >= 1 ? '长高、叶子密了' : (p.born ? '冒出了新芽' : '还是小苗'));
const thirst = th >= 3 ? '很渴了——土都发白了' : (th === 2 ? '有点渴了——叶尖垂着' : (th === 0 && p.day && _hmPlantRainToday(cid) && p.day !== _hmToday() ? '不渴——今天下雨，天替你浇了' : '不渴，喝饱了'));
const fl = HM_FLOWER[p.kind] || HM_FLOWER[''];
const head = [
'名字：' + (p.nm || '还没起名'),
'品种：' + fl.n,
'种下：' + (p.born || '还没浇过第一口水'),
'浇过：' + p.n + ' 次',
'种子：' + (p.seed === 1 ? '结好了，可以收' : (p.seed === 2 ? '收过了（一生一粒）' : '还没结')),
'现在：' + stage,
'此刻：' + thirst,
'花语：' + fl.lang
];
const log = Array.isArray(p.log) ? p.log.slice(-20) : [];
const o = homeOf(cid);
const talks = (o && Array.isArray(o.talks) ? o.talks : []).filter(x =>
x && typeof x.t === 'string' && (x.room || '') === (room || ''));
const tl = talks.slice(-8);
const talkTxt = tl.length ? tl.map(x => (x.d || '') + ' · ' + x.t).join('\n') : '还没有播报。';
const body = head.join('\n')
+ (log.length ? '\n' + '——它的流水账——\n' + log.map(x => (x.d || '') + ' · ' + x.t).join('\n') : '')
+ '\n' + '——TA 的播报——\n' + talkTxt;
openModal('这盆花', '', () => {}, { noInput: true, staticText: body, okText: '知道了' });
_hmTalkSeen(cid);
}
function _hmNotesOf(cid) { const o = homeOf(cid); return (o && Array.isArray(o.notes)) ? o.notes : []; }
function _hmWxObjHTML(cid) {
let wx = '';
const season = _hmSeason();
if (typeof cjSkyFor === 'function') { const s = cjSkyFor(cid); if (s) wx = s.weather || ''; }
let o = null;
if (wx === 'rain') {
o = { n: '门口放着一把伞', svg: '<svg viewBox="0 0 40 40"><path class="hm-p-wood" d="M6 19c4-6 8-9 14-9s10 3 14 9Z"/><path fill="none" d="M6 19c3-3 5-3 7 0 2-3 4-3 7 0 3-3 5-3 7 0 2-3 4-3 7 0"/><path fill="none" stroke-width="1.5" d="M20 19v12c0 3 4 3 4 0"/></svg>' };
} else if (wx === 'snow') {
o = { n: '窗台外堆了个小雪人', svg: '<svg viewBox="0 0 40 40"><circle class="hm-p-paper" cx="20" cy="28" r="7"/><circle class="hm-p-paper" cx="20" cy="16" r="5"/><rect class="hm-p-wood" x="16.6" y="19.8" width="6.8" height="2" rx="1"/><circle cx="18.4" cy="14.6" r=".6" fill="currentColor" stroke="none"/><circle cx="21.6" cy="14.6" r=".6" fill="currentColor" stroke="none"/><path fill="none" d="M20 11V8M13 26l-4-1M27 26l4-1"/></svg>' };
} else if (season === 'winter') {
o = { n: '椅背上搭着毯子', svg: '<svg viewBox="0 0 40 40"><rect class="hm-p-soft" x="8" y="12" width="24" height="18" rx="2"/><path fill="none" opacity=".7" d="M8 18h24M8 24h24"/><path fill="none" d="M12 30v3M20 30v3M28 30v3"/></svg>' };
} else if (season === 'summer') {
o = { n: '窗台晾着一只杯子', svg: '<svg viewBox="0 0 40 40"><path class="hm-p-soft" d="M11 14h16v11a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6z"/><path fill="none" d="M27 18h3a3 3 0 0 1 0 6h-3"/><path fill="none" opacity=".6" d="M15 11c0-2 2-2 2-4M21 11c0-2 2-2 2-4"/></svg>' };
} else if (wx === 'wind') {
o = { n: '窗边挂了一串风铃', svg: '<svg viewBox="0 0 40 40"><path fill="none" d="M20 6v6M13 13h14M17 13v1M23 13v1M16 13v10"/><rect class="hm-p-leaf" x="15" y="14" width="4" height="7" rx="1"/><rect class="hm-p-wood" x="21" y="14" width="4" height="9" rx="1"/><rect class="hm-p-leaf" x="14" y="23" width="4" height="6" rx="1"/></svg>' };
}
return o ? '<span class="hm-decor-i hm-wxobj" title="' + o.n + '">' + o.svg + '</span>' : '';
}
var HM_ROOM_TABLE_OBJ = {
'':       { n: '遥控器', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect class="hm-p-soft" x="8.2" y="3" width="7.6" height="18" rx="2.4"/><circle class="hm-p-line" cx="12" cy="7.4" r="1.2"/><circle class="hm-p-line" cx="10.3" cy="12.4" r=".9"/><circle class="hm-p-line" cx="13.7" cy="12.4" r=".9"/><circle class="hm-p-line" cx="10.3" cy="15.8" r=".9"/><circle class="hm-p-line" cx="13.7" cy="15.8" r=".9"/></svg>' },
bed:      { n: '闹钟', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle class="hm-p-soft" cx="12" cy="13.6" r="6.8"/><path d="M12 10.2v3.4l2.3 1.5"/><path d="M6.6 5.8 4.3 7.6M17.4 5.8l2.3 1.8"/><path d="M9.1 4.6 10.7 2.9M14.9 4.6 13.3 2.9"/></svg>' },
study:    { n: '钢笔', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path class="hm-p-soft" d="M4.6 19.4 15.2 8.8l3 3L7.6 22.4H4.6Z"/><path d="M15.2 8.8 17 7a1.3 1.3 0 0 1 1.8 0l1.2 1.2a1.3 1.3 0 0 1 0 1.8L18 12"/><path d="M4.6 19.4 7.6 22.4"/></svg>' },
kitchen:  { n: '锅铲', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect class="hm-p-soft" x="9" y="3.2" width="6" height="8.6" rx="1.8"/><path d="M9 6.4h6"/><path d="M12 11.8v8.6"/><path class="hm-p-line" d="M10.4 20.4h3.2"/></svg>' },
dining:   { n: '高脚杯', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path class="hm-p-soft" d="M6.6 4h10.8l-1.2 6.1A4.4 4.4 0 0 1 12 13.6a4.4 4.4 0 0 1-4.2-3.5Z"/><path d="M12 13.6V18.6"/><path d="M8.6 21.2h6.8"/></svg>' },
bath:     { n: '牙刷', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path class="hm-p-wood" d="M9.4 4.2h3.4v11h-3.4Z"/><path class="hm-p-soft" d="M9.4 2.6h3.4v2h-3.4Z"/><path d="M11.1 15.2v5.2"/><path d="M9.9 6.4h2.4M9.9 8.6h2.4M9.9 10.8h2.4"/></svg>' }
};
var HM_TEAPOT_SVG = '<svg viewBox="0 0 40 40" fill="none" aria-hidden="true">'
+ '<path class="hm-p-soft" d="M11 19h18v7a7 7 0 0 1-7 7h-4a7 7 0 0 1-7-7Z"/>'
+ '<path d="M29 20.5h2.5a3.5 3.5 0 0 1 0 7H29" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>'
+ '<path d="M11 21l-5-2 1.5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>'
+ '<path class="hm-p-wood" d="M13.5 19v-1.2a6.5 6.5 0 0 1 13 0V19Z"/>'
+ '<path d="M20 11.5V9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
function _hmTablePaint(cid, en) {
const host = document.getElementById('hmTable');
if (!host) return;
const season = _hmSeason();
const fest = _hmFestOf();
const away = (typeof _cjHiding === 'function' && _cjHiding(en));
const act = away ? 'away' : ((en && en.a && HM_ACT_OBJ[en.a]) ? en.a : 'unknown');
const obj = HM_ACT_OBJ[act] || HM_ACT_OBJ.unknown;
const room = _hmRoomOf(cid);
const ho = homeOf(cid);
const teaHot = !!(ho && typeof ho.tea === 'number' && isFinite(ho.tea) && Date.now() >= ho.tea && Date.now() - ho.tea < 1800000);
const teapot = teaHot ? '<span class="hm-decor-i hm-teapot" title="一壶热茶">' + HM_TEAPOT_SVG
+ '<span class="hm-steam" aria-hidden="true"><i></i><i></i><i></i></span></span>' : '';
const tok = (room === 'balcony' || room === 'entry') ? (HM_ROOM_TOKEN[room] || null) : null;
const tokHtml = tok ? '<span class="hm-decor-i hm-token" title="' + tok.n + '">' + tok.svg + '</span>' : '';
const robj = (tok ? null : (HM_ROOM_TABLE_OBJ[room] || null));
const robjHtml = robj ? '<span class="hm-decor-i hm-robj" title="' + robj.n + '">' + robj.svg + '</span>' : '';
const bits = [
'<span class="hm-decor-i hm-season" title="' + HM_SEASON_DECOR[season].n + '">' + HM_SEASON_DECOR[season].svg + '</span>',
fest ? '<span class="hm-decor-i hm-fest" title="' + fest.n + '">' + fest.svg + '</span>' : '',
tokHtml,
robjHtml,
teapot,
_hmWxObjHTML(cid),
'<button type="button" class="hm-decor-i hm-actobj" data-hmobj="1" title="' + obj.n + '">' + obj.svg + '</button>'
].filter(Boolean);
const html = bits.join('');
if (host.innerHTML !== html) host.innerHTML = html;
const tid = HM_ROOM_TABLE_ID[room] || HM_ROOM_TABLE_ID[''];
const tp = _hmBigsOf(cid).filter(x => x.id === tid)[0];
if (tp) {
host.style.left = tp.x + '%';
host.style.height = '8.4%';
const dy = HM_ROOM_TABLE_DY[room] || 0;
host.style.top = Math.max(0, Math.round((tp.y - 8.4 + dy) * 10) / 10) + '%';
host.style.width = tp.w + '%';
const stageW = (host.parentElement && host.parentElement.clientWidth) || 390;
const avail = stageW * Math.min(100, tp.w) / 100;
const sz = Math.max(15, Math.min(26, Math.floor(avail / Math.max(1, bits.length)) - 1));
host.style.setProperty('--hm-dobj', sz + 'px');
}
}
function _hmAvatarHTML(ta) {
const av = chatAvatarOf(ta);
if (av) return avatarHTML(av);
const nm = String((ta && ta.name) || '').trim();
const ch = nm ? nm.slice(0, 1) : '';
return '<span class="hm-av-fallback" aria-hidden="true">'
+ '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">'
+ '<path d="M12 52V30a20 20 0 0 1 40 0v22"/><path d="M25 52V32a7 7 0 0 1 14 0v20"/><path d="M32 40v12"/></svg>'
+ (ch ? '<b>' + escapeHTML(ch) + '</b>' : '')
+ '</span>';
}
var HM_FURN_TONE = {
ink:  'color-mix(in srgb,var(--ink) 58%,transparent)',
wood: '#8b7355',
warm: '#a07850'
};
function _hmFurnToneOf(cid) {
const o = _hmLookOf(cid) || {};
if (o.propTone === 'wood' || o.propTone === 'ink' || o.propTone === 'warm') return o.propTone;
if (o.skin === 'wood') return 'wood';
if (o.skin === 'lamp') return 'warm';
return 'ink';
}
function _hmFurnInkApply(cid) {
const view = document.getElementById('hmView');
if (view) view.style.setProperty('--hm-furn-ink', HM_FURN_TONE[_hmFurnToneOf(cid)] || HM_FURN_TONE.ink);
const layer = document.getElementById('hmFurn');
if (!layer) return;
layer.style.setProperty('--hm-furn-ink', HM_FURN_TONE[_hmFurnToneOf(cid)] || HM_FURN_TONE.ink);
{
const o = _hmLookOf(cid) || {};
if (o.propTone) view.setAttribute('data-hm-user-tone', o.propTone);
else view.removeAttribute('data-hm-user-tone');
}
}
function _hmFurnPaint(cid) {
const layer = document.getElementById('hmFurn');
if (!layer) return;
const props = _hmPropsOf(cid);
const ink = HM_FURN_TONE[_hmFurnToneOf(cid)] || HM_FURN_TONE.ink;
layer.style.setProperty('--hm-furn-ink', ink);
if (!props.length) { if (layer.innerHTML) layer.innerHTML = ''; return; }
const html = props.map((p, i) => {
const w = HM_PROP_WHERE[p.id] === 'wall' ? 'w' : 'f';
const bw = _hmPropBox(p.id).w * (typeof p.sc === 'number' && isFinite(p.sc) ? p.sc : 1);
const grn = HM_GREEN_IDS.indexOf(p.id) >= 0 ? ' data-hmgreen="' + p.id + '"' : '';
return '<button type="button" class="hm-furn-i hm-furn-' + p.id + ' hm-furn-' + w + '" data-hmfurn="' + i + '"' + grn + ' title="' + HM_PROPS[p.id].n + '" aria-label="' + HM_PROPS[p.id].n + '" style="left:' + p.x + '%;top:' + p.y + '%;width:' + bw + '%">' + HM_PROPS[p.id].svg + '</button>';
}).join('');
if (layer.innerHTML !== html) layer.innerHTML = html;
}
function _hmPhotosPaint(cid) {
const host = document.getElementById('hmPhotos');
if (!host) return;
const look = _hmLookOf(cid) || {};
const rk = _hmRoomOf(cid);
const ps = _hmPhotosOf(cid, rk);
const pf = (look.photoFrame === 'wood' || look.photoFrame === 'polaroid') ? look.photoFrame : '';
const note = (typeof look.photoNote === 'string') ? look.photoNote : '';
host.setAttribute('data-hm-pframe', pf);
if (!ps.length) {
if (rk !== '') { host.hidden = true; host.innerHTML = ''; return; }
const html = '<button type="button" class="hm-photo hm-photo-0 hm-photo-default" data-hmphoto="add" aria-label="挂一张我们的照片" title="挂一张我们的照片">'
+ '<svg viewBox="0 0 32 38" fill="none" aria-hidden="true">'
+ '<rect class="pd-sky" x="0" y="0" width="32" height="38" rx="1"/>'
+ '<circle class="pd-sun" cx="22" cy="9" r="4.2"/>'
+ '<path class="pd-hill" d="M0 27c6-8 11-8 16 0s11 6 16-2v13H0Z"/>'
+ '<circle class="pd-dot" cx="11" cy="23" r="2.6"/><circle class="pd-dot2" cx="18" cy="24" r="2.4"/>'
+ '</svg></button>';
if (host.innerHTML !== html) host.innerHTML = html;
host.hidden = false;
return;
}
host.hidden = false;
const html = ps.map((s, i) => '<button type="button" class="hm-photo hm-photo-' + i + '" data-hmphoto="' + i + '" aria-label="看这张照片"><img src="' + escapeHTML(s) + '" alt="" loading="lazy" decoding="async"></button>').join('')
+ ((pf === 'polaroid' && note) ? '<span class="hm-photo-note">' + escapeHTML(note) + '</span>' : '');
if (host.innerHTML !== html) host.innerHTML = html;
}
var HM_OBJ_ICON = {
deal:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="7.4" y="3.6" width="12.4" height="16" rx="2" transform="rotate(7 13.6 11.6)"/><rect x="4.2" y="4.6" width="12.4" height="16" rx="2" transform="rotate(-7 10.4 12.6)"/><path d="M12.4 9.6l2.8 2-2.8 2z"/></svg>',
card:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3.4" y="4.4" width="17.2" height="15.2" rx="2.2"/><path d="M6.6 9h10.8M6.6 13h7.2"/></svg>',
knock:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 20.6V4.4A1.6 1.6 0 0 1 6.6 2.8h11.8v17.8z"/><circle cx="14.6" cy="12" r="1.9"/><path d="M8 5.8h6.4"/></svg>',
sit:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3.6h10v7.2H7z"/><path d="M4.6 10.8h14.8"/><path d="M7.4 10.8v9.6M16.6 10.8v9.6"/></svg>',
note:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4.4 4.4h15.2v9.2L13 20.6H4.4z"/><path d="M13 20.6v-7h6.6"/><path d="M7.4 8.4h9M7.4 12h6"/></svg>',
tea:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 11.5h11v3.5a4.5 4.5 0 0 1-4.5 4.5h-2A4.5 4.5 0 0 1 6.5 15Z"/><path d="M17.5 12.5H19a2 2 0 0 1 0 4h-1.5"/><path d="M6.5 12.5L3.5 11l1.5 4"/><path d="M9 11.5v-1a3 3 0 0 1 6 0v1"/><path d="M12 7.5V6"/><path d="M10 4.2c0-.7.7-.7.7-1.4M13.6 4.2c0-.7.7-.7.7-1.4" opacity=".55"/></svg>',
feed:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5h16a8 8 0 0 1-16 0Z"/><path d="M8 12.5c0-2.2 1.8-4 4-4s4 1.8 4 4"/><circle cx="9.8" cy="11" r=".5"/><circle cx="14.2" cy="11" r=".5"/></svg>',
tidy:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M16.5 4.5L10 12"/><path d="M6.5 13.5l4-3 3 3.5-4 3Z"/><path d="M6.8 16.5L5.5 20M9.2 17.5l-.5 3.3M11.6 16.8l1 3"/></svg>'
};
function _hmObjBtn(kind, label, attr, extra, tag) {
const ic = HM_OBJ_ICON[kind] || HM_OBJ_ICON.card;
return '<button type="button" class="hm-obj' + (extra || '') + '" ' + attr + '>'
+ '<span class="hm-obj-ic" aria-hidden="true">' + ic + '</span>'
+ '<span class="hm-obj-tx">' + label + (tag ? '<i>' + tag + '</i>' : '') + '</span></button>';
}
function _hmRoomsHTML(cid) {
const now = _hmRoomOf(cid);
const chips = Object.keys(HM_ROOMS).map(k =>
'<button type="button" class="hm-chip hm-room-chip' + (k === now ? ' on' : '') + '" data-room="' + k + '" aria-pressed="' + (k === now ? 'true' : 'false') + '">' + HM_ROOMS[k].n + '</button>').join('');
return '<div class="hm-rooms" id="hmRooms">'
+ '<div class="hm-rooms-row">' + chips + '</div>'
+ '<div class="hm-rooms-hd"><p class="hm-rooms-note">换一间屋，家具也跟着换——每间屋都是摆好的那一份。</p>'
+ '</div>'
+ '</div>';
}
var _hmRoomTagT = null;
function _hmRoomTagShow(n) {
const el = document.getElementById('hmRoomTag');
if (!el) return;
el.textContent = n;
el.hidden = false;
el.classList.remove('is-on');
void el.offsetWidth;
el.classList.add('is-on');
clearTimeout(_hmRoomTagT);
_hmRoomTagT = setTimeout(() => { el.hidden = true; el.classList.remove('is-on'); }, 1700);
}
function _hmActsHTML(cid) {
const roomAct = HM_ROOM_ACT[_hmRoomOf(cid)] || null;
return [
(roomAct ? _hmActBtn('roomact', roomAct.n, 'data-hmdo="roomact"') : ''),
_hmActBtn('deal', '递一张牌', 'data-hmdo="deal"'),
_hmActBtn('card', '放一张字卡', 'data-hmdo="card"'),
_hmActBtn('sit', '坐一会儿', 'data-hmdo="sit"' + (_hmSitOn ? ' hidden' : '')),
_hmActBtn('note', '留一张纸条', 'data-hmdo="note"'),
_hmActBtn('tea', '泡壶茶', 'data-hmdo="tea"'),
_hmActBtn('tidy', '收拾屋子', 'data-hmdo="tidy"')
].join('');
}
function _hmActsPaint(cid) {
const el = document.getElementById('hmActs');
if (!el) return;
const html = _hmActsHTML(cid);
if (el.innerHTML !== html) el.innerHTML = html;
}
function _hmActBtn(kind, label, attr, extra) {
const ic = HM_OBJ_ICON[kind] || HM_OBJ_ICON.card;
return '<button type="button" class="hm-act" ' + attr + (extra ? ' title="' + extra + '"' : '') + '>'
+ '<span class="hm-obj-ic hm-act-ic" aria-hidden="true">' + ic + '</span>'
+ '<span class="hm-act-tx">' + label + '</span></button>';
}
function _hmDoHTML(cid, en) {
const notes = _hmNotesOf(cid);
const look = _hmLookOf(cid) || {};
const card = (look.card && typeof look.card.text === 'string' && look.card.text) ? look.card : null;
const away = (typeof _cjHiding === 'function' && _cjHiding(en));
const acts = _hmActsHTML(cid);
return '<div class="hm-do">'
+ '<div class="hm-acts" id="hmActs">' + acts + '</div>'
+ (notes.length ? '<button type="button" class="hm-note-pin" data-hmdo="notes" aria-label="看门口的纸条"><i>门口</i><span>' + escapeHTML(notes[notes.length - 1].t.slice(0, 26)) + (notes[notes.length - 1].t.length > 26 ? '…' : '') + '</span><em>' + notes.length + ' 张</em></button>' : '')
+ (card ? '<button type="button" class="hm-sign hm-tablecard" data-hmdo="readcard"><i>桌上</i><span>' + escapeHTML(card.text.slice(0, 30)) + (card.text.length > 30 ? '…' : '') + '</span><em>›</em></button>' : '')
+ (away ? '<p class="hm-do-hint">TA 出门了，今天不敲门。</p>' : '<p class="hm-do-hint">一起听、心情记录、清单和账本都在「我们的空间」——这一页只管这间屋。</p>')
+ '</div>';
}
function _hmRoomAct(cid) {
const rk = _hmRoomOf(cid);
const act = HM_ROOM_ACT[rk];
if (!act) return;
const rmL = _hmRoomLbl(rk);
const line = _hmPsPick('屋里的样子', rmL + '·动静');
if (act.state === 'curtain') {
const o = _hmEnsure(cid);
o.look.winOpen = !(o.look.winOpen === true);
save();
_hmRepaint(cid);
}
if (line) showToast(line);
const ta = _hmPsPick('屋里 TA 的话', rmL);
if (ta && _hmDailyFlag('roomact-' + rk)) _hmSayTA(cid, ta);
}
function _hmSayTA(cid, text) {
if (!cid || !text || typeof _deliverToChat !== 'function' || typeof nextId !== 'function') return false;
try { return _deliverToChat({ id: nextId(), from: 'partner', text: String(text), unread: true, src: 'cjian', cjLine: 'home' }, cid); } catch (e) { return false; }
}
function _hmDailyFlag(key) {
const k = 'ordinal-hm-said-' + key;
const dk = _hmToday();
let last = '';
try { last = localStorage.getItem(k) || ''; } catch (e) {}
if (last === dk) return false;
try { localStorage.setItem(k, dk); } catch (e) {}
return true;
}
var _hmSitOn = false, _hmSitT = null, _hmSitSaid = 0, _hmSitLast = 0;
var _hmRoomSound = '';
function _hmAmbStop() {
if (_hmRoomSound) {
try {
if (typeof window.__srRoomAmbient === 'function') { window.__srRoomAmbient('rain', false); window.__srRoomAmbient('fire', false); }
} catch (e) {}
_hmRoomSound = '';
}
const host = document.querySelector('#hmView .hm-sit-sound');
if (host) {
const bs = host.querySelectorAll('[data-hmamb]');
for (let i = 0; i < bs.length; i++) bs[i].classList.toggle('on', !bs[i].getAttribute('data-hmamb'));
}
}
function _hmAmbSet(cid, kind) {
kind = (kind === 'rain' || kind === 'fire') ? kind : '';
if (kind && kind === _hmRoomSound) kind = '';
const apply = () => {
if (typeof window.__srRoomAmbient !== 'function') { showToast('屋里的声音还没准备好。'); return; }
try { window.__srRoomAmbient('rain', false); window.__srRoomAmbient('fire', false); } catch (e) {}
_hmRoomSound = kind;
if (kind) { try { window.__srRoomAmbient(kind, true); } catch (e) {} }
const host = document.querySelector('#hmView .hm-sit-sound');
if (host) {
const bs = host.querySelectorAll('[data-hmamb]');
for (let i = 0; i < bs.length; i++) bs[i].classList.toggle('on', (bs[i].getAttribute('data-hmamb') || '') === kind);
}
showToast(kind ? (kind === 'rain' ? '开了一点雨声。' : '开了一点炉火声。') : '屋里的声音关了。');
};
if (typeof window.__srRoomAmbient !== 'function' && typeof ensureChunk === 'function') {
ensureChunk('sleeproom', 12000).then(ok => { if (!ok) { showToast('声音还没准备好。'); return; } apply(); });
} else apply();
}
function _hmSitStart(cid) {
const view = document.getElementById('hmView');
if (!view || _hmSitOn) return;
_hmSitOn = true; _hmSitSaid = 0; _hmSitLast = Date.now();
view.setAttribute('data-hm-sit', '1');
const amb = view.querySelector('.hm-sit-sound');
if (amb) amb.hidden = false;
showToast('你坐了下来。');
if (Math.random() < 0.3) setTimeout(() => { if (_hmSitOn) _hmSitSay(cid); }, 2500);
_hmSitT = setInterval(() => _hmSitTick(cid), 45000);
}
function _hmSitEnd(quiet) {
const view = document.getElementById('hmView');
if (view) {
view.removeAttribute('data-hm-sit');
const amb = view.querySelector('.hm-sit-sound');
if (amb) amb.hidden = true;
}
_hmAmbStop();
if (_hmSitT) { clearInterval(_hmSitT); _hmSitT = null; }
if (_hmSitOn && quiet !== true) showToast('你起身了。');
_hmSitOn = false;
}
function _hmSitSay(cid) {
if (!_hmSitOn || _hmSitSaid >= 2) return;
const say = _hmPsPick('屋里的小动作', '坐下');
if (!say) return;
_hmSitSaid++;
_hmSitLast = Date.now();
_hmSayTA(cid, say);
}
function _hmSitTick(cid) {
if (!_hmSitOn || document.body.dataset.view !== 'home') { _hmSitEnd(true); return; }
if (Date.now() - _hmSitLast < 45000 || _hmSitSaid >= 2) return;
if (Math.random() < 0.25) _hmSitSay(cid);
}
function _hmDayLogPush(store, cid, dk, line) {
const log = Array.isArray(store._log) ? store._log : [];
const others = log.filter(x => x && x.cid !== cid);
let mine = log.filter(x => x && x.cid === cid);
if (!mine.some(x => x.dk === dk)) mine.push({ cid: cid, dk: dk, line: line });
store._log = others.concat(mine.slice(-7)).slice(-60);
}
function _hmDayLog(cid) {
let store = {};
try { store = JSON.parse(localStorage.getItem('ordinal-hm-day') || '{}') || {}; } catch (e) { store = {}; }
const log = Array.isArray(store._log) ? store._log : [];
return log.filter(x => x && x.cid === cid).slice(-7).reverse();
}
function _hmDayLogOpen(cid) {
if (typeof openModal !== 'function') return;
const log = _hmDayLog(cid);
const lines = log.length ? log.map(x => {
const p = String(x.dk || '').split('-');
const d = (p.length === 3) ? (p[1] + '月' + p[2] + '日') : x.dk;
return d + ' · ' + x.line;
}) : ['还没有留下几天，明天再来看看。'];
openModal('小屋日志', '', () => {}, { noInput: true, staticText: lines.join('　·　'), okText: '知道了' });
}
function _hmDayLine(cid, en) {
let store = {};
try { store = JSON.parse(localStorage.getItem('ordinal-hm-day') || '{}') || {}; } catch (e) { store = {}; }
const dk = _hmToday();
const hit = store[cid] && store[cid].dk === dk ? store[cid].line : '';
if (hit) return hit;
const act = (en && en.a && HM_ACT_LBL[en.a]) ? en.a : 'free';
let tp = '';
try { if (en && typeof _cjTimePartOf === 'function') tp = _cjTimePartOf(en) || ''; } catch (e) {}
const rk = _hmRoomOf(cid);
let pool = _hmPsList('屋里的样子', _hmRoomLbl(rk) + '·今天');
if (!pool.length) pool = _hmPsList('屋里的样子', '一天·' + (HM_ACT_LBL[act] || '空闲'));
if (!pool.length) return '';
let h = 0; const s = cid + '|' + dk + '|' + act + '|' + tp + '|' + rk;
for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
const line = pool[h % pool.length];
store[cid] = { dk, line };
_hmDayLogPush(store, cid, dk, line);
try { localStorage.setItem('ordinal-hm-day', JSON.stringify(store)); } catch (e) {}
return line;
}
function _hmDayHTML(cid, en) {
return '<div class="hm-sec hm-sec-plain hm-day-sec"><div class="hm-sec-hd">' + _hmSecIcon('day')
+ '<span class="hm-sec-t">今天屋里的事</span></div>'
+ '<p class="hm-day" data-hmdo="daylog" aria-label="看最近七天">'
+ '<span>' + escapeHTML(_hmDayLine(cid, en)) + '</span>'
+ '<em class="hm-day-more">最近七天 ›</em></p></div>';
}
function _hmCalNoteHTML(cid) {
if (typeof calDayPeek !== 'function' || typeof calTodayKey !== 'function') return '';
let day = null;
try { day = calDayPeek(calTodayKey()); } catch (e) { return ''; }
const items = (day && Array.isArray(day.items)) ? day.items.filter(x => x && x.text) : [];
if (!items.length) return '';
const top = items[0];
const kn = { trip: '行程', memo: '备忘', event: '事件' }[top.kind] || '今天';
const tm = top.tm ? ' · ' + top.tm : '';
const more = items.length > 1 ? ' · 还有 ' + (items.length - 1) + ' 件' : '';
return '<button type="button" class="hm-sign hm-cal-note" data-hmcalgo="1" title="打开日历看今天">'
+ '<i>日历</i>'
+ '<span class="hm-cal-note-t">' + kn + tm + ' · ' + escapeHTML(String(top.text).slice(0, 40)) + more + '</span>'
+ '<em>›</em></button>';
}
function _hmObjTalk(cid) {
const now = Date.now();
let last = 0; try { last = +localStorage.getItem('ordinal-hm-obj') || 0; } catch (e) {}
if (now - last < 60000) { showToast('刚碰过了，等一等。'); return; }
try { localStorage.setItem('ordinal-hm-obj', String(now)); } catch (e) {}
const en = (typeof _cjEntry === 'function') ? _cjEntry(cid) : null;
const away = (typeof _cjHiding === 'function' && _cjHiding(en));
const act = away ? 'away' : ((en && en.a && HM_ACT_OBJ[en.a]) ? en.a : 'unknown');
const line = _hmPsPick('桌上小物', HM_ACT_LBL[act] || '未知');
if (!line) return;
if (Math.random() < 0.5 && _hmDailyFlag('obj')) _hmSayTA(cid, line);
else showToast(line);
}
function _hmPlantLineText(p, cid) {
const st = _hmPlantStage(p);
const watered = (p.day === _hmToday());
const rain = (!watered && cid && _hmPlantRainToday(cid));
const step = st >= 2 ? '开花了' : (st >= 1 ? '长高了' : (p.born ? '冒了新芽' : '刚栽下'));
const nm = p.nm ? escapeHTML(p.nm) : ((HM_FLOWER[p.kind] && p.kind) ? escapeHTML(HM_FLOWER[p.kind].n) : '还没起名字');
const th = _hmPlantThirst(p, cid);
const thTxt = th >= 3 ? ' · 土都发白了，该浇水了' : (th === 2 ? ' · 叶尖有点垂' : '');
return nm + ' · ' + step + ' · 浇过 ' + p.n + ' 次 · ' + (watered ? '今天浇过了' : (rain ? '今天下雨，天替你浇了' : '今天还没浇')) + thTxt;
}
function _hmPlantNoteText(p, cid) {
const st = _hmPlantStage(p);
const watered = (p.day === _hmToday());
const rain = (!watered && cid && _hmPlantRainToday(cid));
const step = st >= 2 ? '开花了，屋里多了一点颜色' : (st >= 1 ? '长高了，叶子密了一层' : (p.born ? '冒出了新芽' : '刚栽下，还等着第一口水'));
const nm = p.nm ? ' · 它叫「' + escapeHTML(p.nm) + '」' : ((HM_FLOWER[p.kind] && p.kind) ? ' · 这是盆' + HM_FLOWER[p.kind].n : '');
const th = _hmPlantThirst(p, cid);
const thTxt = th >= 3 ? ' · 土都发白了，该浇水了' : (th === 2 ? ' · 叶尖有点垂，两天没喝水了' : '');
return step + nm + (rain ? ' · 今天下雨，天替你浇了' : '') + thTxt;
}
function _hmWaterPaint(cid, p, room) {
room = room || '';
const watered = (p.day === _hmToday());
const th = _hmPlantThirst(p, cid);
const snow = _hmPlantSnowToday(cid);
const st = _hmPlantStage(p);
const stTxt = st >= 2 ? '开花了' : (st >= 1 ? '长高了' : (p.born ? '冒出新芽' : '刚栽下'));
const refresh = btn => {
if (!btn) return;
btn.innerHTML = _hmPlantSVG(p, snow) + '<span class="hm-water-drops" aria-hidden="true"><i></i><i></i><i></i></span>'
+ '<span class="hm-soil-dots" aria-hidden="true"><i></i><i></i><i></i><i></i></span>'
+ '<span class="hm-fall" aria-hidden="true"><i></i><i></i><i></i></span>';
btn.classList.toggle('is-watered', watered);
btn.setAttribute('data-hm-thirst', String(th));
btn.setAttribute('data-hmroom', room);
if (snow) btn.setAttribute('data-hm-snow', '1'); else btn.removeAttribute('data-hm-snow');
if (_hmPlantStage(p) >= 2) btn.setAttribute('data-hm-bloom', '1'); else btn.removeAttribute('data-hm-bloom');
if (_hmSunFresh(p)) btn.setAttribute('data-hm-sun', '1'); else btn.removeAttribute('data-hm-sun');
if (p.seed === 1) btn.setAttribute('data-hm-seed', '1'); else btn.removeAttribute('data-hm-seed');
btn.title = watered ? '今天已经浇过水了' : '浇点水';
btn.classList.remove('hm-watering');
void btn.offsetWidth;
btn.classList.add('hm-watering');
setTimeout(() => { if (btn) btn.classList.remove('hm-watering'); }, 1500);
};
const roomNow = _hmRoomOf(cid);
if (roomNow === room) {
refresh(document.querySelector((room === 'balcony' ? '#hmBalconyPot' : (room === '' ? '#hmPlantSlot' : '#hmPotFloor')) + ' .hm-plant-big'));
const sec = document.getElementById('hmSetPlant');
if (sec) {
refresh(sec.querySelector('.hm-plant-big'));
const stEl = sec.querySelector('.hm-plant-st');
if (stEl) stEl.textContent = stTxt + ' · 浇过 ' + p.n + ' 次 · ' + (watered ? '今天浇过了' : '今天还没浇');
}
const nt = document.getElementById('hmPlantNote');
if (nt) nt.textContent = _hmPlantLineText(p, cid);
}
}
function _hmWater(cid, room, byTA) {
room = room || '';
const acc = _hmPlantAcc(cid, room);
const o = acc.o, p = acc.p;
const dk = _hmToday();
if (p.day === dk) { if (!byTA) showToast('今天已经浇过水了。'); return; }
const st0 = _hmPlantStage(p);
const fresh = !p.born;
p.n = Math.min(999, Math.floor(+p.n || 0) + 1); p.day = dk; p.at = Date.now();
if (fresh) p.born = dk;
const st1 = _hmPlantStage(p);
if (fresh) _hmPlantLogAdd(p, (p.nm ? '「' + p.nm + '」' : '它') + '喝到第一口水，种下了' + (p.kind && HM_FLOWER[p.kind] ? '，是盆' + HM_FLOWER[p.kind].n : ''));
else if (byTA === 2) _hmPlantLogAdd(p, st1 > st0 ? 'TA 自己给它浇了水，它趁今天长了新芽。' : 'TA 自己给它浇了水，像每天顺手的事。');
else if (byTA) _hmPlantLogAdd(p, st1 > st0 ? 'TA 替你浇了水，它趁今天长了新芽。' : 'TA 看它渴了，替你浇了水。');
else if (st1 > st0) _hmPlantLogAdd(p, st1 >= 2 ? '开花了。' : '冒出新芽，长高了一截。');
save();
_hmWaterPaint(cid, p, room);
_hmStatsBump(cid, 'water');
if (byTA) return;
const nmT = p.nm ? '「' + p.nm + '」' : '花';
showToast(st1 > st0 ? (st1 >= 2 ? nmT + '开花了。' : nmT + '长出新叶了。') : '浇过水了。');
if (Math.random() < 0.12 && _hmDailyFlag('water')) {
const say = _hmPsPick('屋里的小动作', '浇水');
if (say) _hmPlantTalk(cid, say, room);
}
}
function _hmPotAnim(cid, p, room, cls) {
const roomNow = _hmRoomOf(cid);
const sel = (room === 'balcony') ? '#hmBalconyPot .hm-plant-big'
: (room === '' ? '#hmPlantSlot .hm-plant-big' : '#hmPotFloor .hm-plant-big');
const btns = [];
const b = document.querySelector(sel);
if (b) btns.push(b);
if (roomNow === room) {
const sec = document.getElementById('hmSetPlant');
if (sec) { const b2 = sec.querySelector('.hm-plant-big'); if (b2) btns.push(b2); }
}
btns.forEach(btn => {
btn.classList.remove('hm-soiling', 'hm-sunning');
void btn.offsetWidth;
btn.classList.add(cls);
if (_hmSunFresh(p)) btn.setAttribute('data-hm-sun', '1'); else btn.removeAttribute('data-hm-sun');
setTimeout(() => { if (btn) btn.classList.remove(cls); }, 1500);
});
}
function _hmSoil(cid, room) {
room = room || '';
const acc = _hmPlantAcc(cid, room);
const p = acc.p;
if (!p.born) { showToast('先种下它再说。'); return; }
if (p.soil && _hmDayGap(p.soil, _hmToday()) < 3) { showToast('前两天才松过，让它缓缓。'); return; }
p.soil = _hmToday();
_hmPlantLogAdd(p, '松了土——接下来三天土是松的，更保水。');
save();
_hmPotAnim(cid, p, room, 'hm-soiling');
showToast('土松了。接下来三天更保水，渴得慢。');
}
function _hmSun(cid, room) {
room = room || '';
const acc = _hmPlantAcc(cid, room);
const p = acc.p;
if (!p.born) { showToast('先种下它再说。'); return; }
if (p.sun && _hmDayGap(p.sun, _hmToday()) < 2) { showToast('刚晒过，别晒蔫了。'); return; }
p.sun = _hmToday();
_hmPlantLogAdd(p, '晒了太阳——花瓣这两天会更亮。');
save();
_hmPotAnim(cid, p, room, 'hm-sunning');
showToast('晒过了。花瓣这两天会更亮。');
}
function _hmSeedPick(cid, room) {
room = room || '';
const acc = _hmPlantAcc(cid, room);
const o = acc.o, p = acc.p;
if (p.seed !== 1) { showToast('它还没结种子。'); return; }
p.seed = 2;
o.seedN = Math.min(9, (+o.seedN || 0) + 1);
if (p.kind && HM_FLOWER[p.kind]) o.seedKind = p.kind;
_hmPlantLogAdd(p, '你收下了它结的那粒种子。');
save();
_hmRepaint(cid); _hmPaintDress(cid);
showToast('收下一粒种子' + (o.seedKind && HM_FLOWER[o.seedKind] ? '（' + HM_FLOWER[o.seedKind].n + '）' : '') + '——去别的屋可以种下。');
}
function _hmSeedSow(cid, room) {
room = room || '';
const o = homeOf(cid) || {};
const seedN = (+o.seedN || 0);
const acc = _hmPlantAcc(cid, room);
const p = acc.p;
if (seedN <= 0) { showToast('手里还没有种子。'); return; }
if (p.born) { showToast('这间屋已经有花在长。'); return; }
o.seedN = seedN - 1;
if (o.seedN <= 0) o.seedKind = '';
const dk = _hmToday();
p.born = dk; p.day = dk; p.at = Date.now(); p.n = 1; p.seed = 0;
p.kind = (o.seedKind && HM_FLOWER[o.seedKind]) ? o.seedKind : '';
_hmPlantLogAdd(p, '一粒种子落进土里，种下了' + (p.kind && HM_FLOWER[p.kind] ? '，是盆' + HM_FLOWER[p.kind].n : '') + '。');
save();
_hmRepaint(cid); _hmPaintDress(cid);
showToast('种下了。今天算它喝的第一口水。');
}
var HM_GREEN_IDS = ['plant', 'plantstand', 'vase', 'hangplant', 'flowerbox'];
function _hmGreenTalk(cid, id) {
const now = Date.now();
let last = 0; try { last = +localStorage.getItem('ordinal-hm-green') || 0; } catch (e) {}
if (now - last < 60000) { showToast('刚碰过了，等一等。'); return; }
try { localStorage.setItem('ordinal-hm-green', String(now)); } catch (e) {}
const line = _hmPsPick('绿植小物', HM_GREEN_LBL[id] || '落地绿植');
if (!line) return;
if (Math.random() < 0.5 && _hmDailyFlag('green')) _hmSayTA(cid, line);
else showToast(line);
}
var _hmCareT = 0;
var _hmTaAct = null;
function _hmPlantTalk(cid, t, room) {
if (!cid || !t) return;
const o = _hmEnsure(cid);
if (!Array.isArray(o.talks)) o.talks = [];
o.talks.push({ d: _hmToday(), t: String(t).slice(0, 60), room: (room === 'balcony') ? 'balcony' : '' });
if (o.talks.length > 30) o.talks = o.talks.slice(-30);
save();
}
function _hmCareTick() {
const cid = (typeof data !== 'undefined' && data && data.activeChat) ? data.activeChat : '';
if (!cid) return;
if (typeof nightOn === 'function') { try { if (nightOn()) return; } catch (e) {} }
let en = null;
if (typeof _cjEntry === 'function') { try { en = _cjEntry(cid); } catch (e) { en = null; } }
if (typeof _cjHiding === 'function' && _cjHiding(en)) return;
let best = null, bestGap = 0;
for (const room of HM_PLANT_ROOMS) {
_hmSeedCheck(cid, room);
const p = _hmPlantOf(cid, room);
if (!p.born || !p.day || p.day === _hmToday()) continue;
const gap = _hmDayGap(p.day, _hmToday());
if (gap >= 2 && gap > bestGap) { best = room; bestGap = gap; }
}
if (best !== null) {
if (Math.random() < 0.4 && _hmDailyFlag('ta-water-' + cid)) {
_hmWater(cid, best, 1);
const say = _hmPsPick('花的话', best === 'balcony' ? '阳台' : '替浇');
if (say) _hmPlantTalk(cid, say, best);
_hmTaAct = { cid: cid, room: best, at: Date.now() };
return;
}
if (Math.random() < 0.5 && _hmDailyFlag('ptalk-remind-' + cid)) {
const say = _hmPsPick('花的话', '提醒');
if (say) _hmPlantTalk(cid, say, best);
}
return;
}
const tendNew = _hmDailyFlag('ta-tend-' + cid);
let tended = false;
if (tendNew && Math.random() < 0.35) {
const cands = HM_PLANT_ROOMS.filter(room => {
const p = _hmPlantOf(cid, room);
return p.born && p.day !== _hmToday();
});
if (cands.length) {
const room = cands[Math.floor(Math.random() * cands.length)];
_hmWater(cid, room, 2);
const say = _hmPsPick('花的话', room === 'balcony' ? '阳台' : '随手');
if (say) _hmPlantTalk(cid, say, room);
_hmTaAct = { cid: cid, room: room, at: Date.now() };
tended = true;
}
}
if (tended) return;
const today = _hmToday();
const saidNear = (lg, word) => (Array.isArray(lg) ? lg : []).some(x =>
x && typeof x.t === 'string' && x.t.indexOf(word) >= 0 && typeof x.d === 'string' &&
_hmDayGap(x.d, today) >= 0 && _hmDayGap(x.d, today) <= 1);
const bornRooms = HM_PLANT_ROOMS.filter(r => _hmPlantOf(cid, r).born);
const roomsWith = word => bornRooms.filter(r => saidNear(_hmPlantOf(cid, r).log, word));
const bl = roomsWith('开花了');
if (bl.length && _hmDailyFlag('ptalk-bloom-' + cid)) {
const say = _hmPsPick('花的话', '开花');
if (say) _hmPlantTalk(cid, say, bl[0]);
return;
}
const sp = roomsWith('新芽');
if (sp.length && _hmDailyFlag('ptalk-sprout-' + cid)) {
const say = _hmPsPick('花的话', '新芽');
if (say) _hmPlantTalk(cid, say, sp[0]);
return;
}
if (Math.random() < 0.2 && _hmDailyFlag('ptalk-chat-' + cid) && bornRooms.length) {
const room = bornRooms[Math.floor(Math.random() * bornRooms.length)];
const p = _hmPlantOf(cid, room);
const say = _hmPsPick('花的话', HM_STAGE_LBL[_hmPlantStage(p)] || '小苗');
if (say) _hmPlantTalk(cid, say, room);
}
}
var _hmDoorT = 0;
function _hmDoorNote(t) {
if (typeof showToast === 'function') showToast(t);
}
function _hmKnock(cid) {
const en = (typeof _cjEntry === 'function') ? _cjEntry(cid) : null;
if (typeof _cjHiding === 'function' && _cjHiding(en)) { showToast('屋里没人应门。'); _hmDoorNote('TA 出门了，门铃没人应。'); return; }
const now = Date.now();
let last = 0; try { last = +localStorage.getItem('ordinal-hm-knock') || 0; } catch (e) {}
if (now - last < 60000) { showToast('刚敲过，等一等。'); _hmDoorNote('刚敲过，过一会儿再来。'); return; }
try { localStorage.setItem('ordinal-hm-knock', String(now)); } catch (e) {}
_hmStatsBump(cid, 'knock');
if (Math.random() < 0.35) {
const say = _hmPsPick('门口的话', '敲门');
if (say) _hmSayTA(cid, say);
_hmDoorNote('门开了，TA 来应门。');
} else {
showToast('敲了两下，屋里没动静。');
_hmDoorNote('屋里没动静。');
}
}
function _hmTea(cid) {
const o = _hmEnsure(cid);
const now = Date.now();
if (typeof o.tea === 'number' && isFinite(o.tea) && now >= o.tea && now - o.tea < 1800000) { showToast('茶还温着，先喝这壶。'); return; }
o.tea = now; save();
_hmRepaint(cid);
showToast('泡了一壶茶，屋里暖了一点。');
if (Math.random() < 0.5 && _hmDailyFlag('tea')) {
const say = _hmPsPick('屋里的小动作', '泡茶');
if (say) _hmSayTA(cid, say);
}
}function _hmTidy(cid) {
const cur = _hmPropsOf(cid);
const rk = _hmRoomOf(cid);
const bigsMoved = (() => { try { return Object.keys((homeOf(cid) || {}).look && homeOf(cid).look.bigs && homeOf(cid).look.bigs[rk] || {}).length > 0; } catch (e) { return false; } })();
if (!cur.length && !bigsMoved) { showToast('屋里空空的，没什么可收拾。'); return; }
const o = _hmEnsure(cid);
o.look.props = cur.map(p => ({ id: p.id }));
if (o.look.bigs && o.look.bigs[rk]) delete o.look.bigs[rk];
save(); _hmRepaint(cid);
showToast('把屋子收拾整齐了。');
if (Math.random() < 0.5 && _hmDailyFlag('tidy')) {
const say = _hmPsPick('屋里的小动作', '收拾');
if (say) _hmSayTA(cid, say);
}
}
function _hmNoteOpen(cid) {
if (typeof openModal !== 'function') return;
openModal('留一张纸条', '', v => {
const t = String(v || '').trim().slice(0, 80);
if (!t) return;
const o = _hmEnsure(cid);
if (!Array.isArray(o.notes)) o.notes = [];
if (o.notes.length >= 20) o.notes.shift();
o.notes.push({ t, at: Date.now(), replied: 0 });
save(); _hmRepaint(cid);
showToast('纸条塞进门缝了。');
}, { okText: '塞进门缝' });
}
function _hmNotesOpen(cid) {
const notes = _hmNotesOf(cid);
if (!notes.length || typeof openModal !== 'function') return;
openModal('门口的纸条', '', () => {}, { noInput: true, staticText: notes.map((n, i) => (i + 1) + '. ' + n.t).join('　·　'), okText: '知道了' });
}
function _hmNoteReplyTick(cid) {
const o = homeOf(cid);
if (!o || !Array.isArray(o.notes) || !o.notes.length) return;
const pending = o.notes.filter(n => n && !n.replied && Date.now() - (+n.at || 0) > 30 * 60000);
if (!pending.length) return;
if (Math.random() >= 0.4) return;
if (!_hmDailyFlag('note')) return;
pending[0].replied = 1; save();
const say = _hmPsPick('门口的话', '纸条');
if (say) _hmSayTA(cid, say);
}
function _hmDoDeal(cid) {
const go = ok => {
if (!ok) { showToast('牌桌还没准备好。'); return; }
if (typeof showView === 'function') showView('chat');
setTimeout(() => { try { if (typeof dealEnter === 'function') dealEnter(); } catch (e) {} }, 80);
};
if (typeof ensureChunk === 'function') ensureChunk('deal', 12000).then(go);
else go(true);
}
function _hmPickOpen(cid, mode) {
const mask = document.getElementById('hmPickMask');
const body = document.getElementById('hmPickBody');
const title = document.getElementById('hmPickTitle');
if (!mask || !body) return;
mode = (mode === 'fav' || mode === 'favphoto') ? mode : 'card';
body._mode = mode;
body._pool = null;
const favSnaps = () => {
const raw = (typeof collectGet === 'function') ? collectGet(cid) : [];
return raw.map(f => (typeof _favSnapOf === 'function') ? _favSnapOf(f) : null).filter(Boolean);
};
if (mode === 'fav') {
const list = favSnaps().filter(s => s.text).slice(0, 60);
if (!list.length) { showToast('收藏里还没有摘句。'); return; }
if (title) title.textContent = '从收藏放一句';
body._pool = list;
body.innerHTML = '<div class="hm-picklist">' + list.map((s, i) => '<button type="button" class="hm-pick" data-cardpick="' + i + '">' + escapeHTML(String(s.text).slice(0, 40)) + '</button>').join('') + '</div>';
mask.hidden = false;
return;
}
if (mode === 'favphoto') {
const list = favSnaps().filter(s => s.imgs && s.imgs.length).slice(0, 60);
if (!list.length) { showToast('收藏里还没有图。'); return; }
if (title) title.textContent = '从收藏挑一张图';
body._pool = list;
body.innerHTML = '<div class="hm-picklist hm-pickimgs">' + list.map((s, i) => '<button type="button" class="hm-pick-img" data-favimg="' + i + '"><img src="' + escapeHTML(s.imgs[0]) + '" alt="" loading="lazy" decoding="async"></button>').join('') + '</div>';
mask.hidden = false;
return;
}
const pool = (typeof _categoryCards === 'function') ? _categoryCards('主字卡', cid).slice(0, 60) : [];
if (!pool.length) { showToast('这一位还没有字卡。'); return; }
if (title) title.textContent = '放一张字卡';
body._pool = pool;
body.innerHTML = '<div class="hm-picklist">' + pool.map((t, i) => '<button type="button" class="hm-pick" data-cardpick="' + i + '">' + escapeHTML(t.slice(0, 40)) + '</button>').join('') + '</div>';
mask.hidden = false;
}
function _hmPickClose() { const m = document.getElementById('hmPickMask'); if (m) m.hidden = true; }
function _hmSvgImg(svg) {
return new Promise(resolve => {
try {
const b = svg.getBoundingClientRect();
if (!b.width || !b.height) return resolve(null);
const c = svg.cloneNode(true);
c.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
c.setAttribute('width', String(Math.round(b.width)));
c.setAttribute('height', String(Math.round(b.height)));
const host = svg.closest('.hm-plant-big,.hm-furn-i,.hm-decor-i,.hm-scene-art,.hm-big') || svg;
const cs = getComputedStyle(host);
const color = cs.color || '#333';
const fl = cs.getPropertyValue('--hm-flower') || '';
c.setAttribute('style', 'color:' + color + (fl ? ';--hm-flower:' + fl : ''));
const srcEls = svg.querySelectorAll('*'), dstEls = c.querySelectorAll('*');
const SKEYS = ['fill', 'stroke', 'stroke-width', 'opacity', 'display', 'stroke-dasharray', 'stroke-linecap', 'stroke-linejoin', 'mix-blend-mode'];
for (let i = 0; i < srcEls.length && i < dstEls.length; i++) {
const sc = getComputedStyle(srcEls[i]);
let st = '';
for (let k = 0; k < SKEYS.length; k++) {
const v = sc.getPropertyValue(SKEYS[k]);
if (v && v !== 'normal') st += SKEYS[k] + ':' + v + ';';
}
if (st) dstEls[i].setAttribute('style', (dstEls[i].getAttribute('style') || '') + st);
}
const str = new XMLSerializer().serializeToString(c);
const img = new Image();
img.onload = () => resolve(img);
img.onerror = () => resolve(null);
img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(str);
} catch (e) { resolve(null); }
});
}
async function _hmShotRoom(cid, mode) {
const pageMode = (mode === 'page');
const room = document.getElementById('hmStage');
const view = document.getElementById('hmView');
if (!room || !view) { showToast('屋子还没画好。'); return; }
const r = room.getBoundingClientRect();
const TOP = pageMode ? 104 : 58;
const W = Math.max(280, Math.round(r.width));
const H = Math.max(360, Math.round(r.height)) + TOP;
const cv = document.createElement('canvas');
cv.width = W * 2; cv.height = H * 2;
const g = cv.getContext('2d');
if (!g) { showToast('这张图没画成。'); return; }
g.scale(2, 2);
const vcs = getComputedStyle(view);
const wall = vcs.getPropertyValue('--hm-room').trim() || '#f5f1ea';
g.fillStyle = '#ffffff'; g.fillRect(0, 0, W, TOP);
g.fillStyle = wall; g.fillRect(0, TOP, W, H - TOP);
g.save();
g.globalAlpha = .55;
g.fillStyle = vcs.getPropertyValue('--hm-floor').trim() || '#eae3d6';
g.fillRect(0, H - 24, W, 24);
g.restore();
const svgs = room.querySelectorAll('svg');
for (let i = 0; i < svgs.length; i++) {
const svg = svgs[i];
if (!svg.closest('.hm-plant-big,.hm-furn-i,.hm-decor-i,.hm-scene-art,.hm-big')) continue;
const b = svg.getBoundingClientRect();
const img = await _hmSvgImg(svg);
if (img) g.drawImage(img, b.left - r.left, TOP + (b.top - r.top), b.width, b.height);
}
const phs = room.querySelectorAll('.hm-photo img');
for (let i = 0; i < phs.length; i++) {
const b = phs[i].getBoundingClientRect();
try {
const im = new Image();
im.src = phs[i].src;
if (im.decode) await im.decode(); else await new Promise(ok => { im.onload = ok; im.onerror = ok; });
g.drawImage(im, b.left - r.left, TOP + (b.top - r.top), b.width, b.height);
} catch (e) {}
}
const ta = _hmContact();
g.fillStyle = 'rgba(30,26,22,.88)';
g.font = '700 17px "Microsoft YaHei", system-ui, sans-serif';
g.fillText('我们的家', 16, 28);
g.fillStyle = 'rgba(30,26,22,.55)';
g.font = '400 11px "Microsoft YaHei", system-ui, sans-serif';
g.fillText((ta ? (fixedNameOf(ta) || chatNameOf(ta) || 'TA') : 'TA') + ' · ' + _hmToday(), 16, 47);
if (pageMode) {
const en = (typeof _cjEntry === 'function') ? _cjEntry(cid) : null;
let hello = '';
try { hello = _hmHelloOf(cid, en, 1) || ''; } catch (e) {}
let day = '';
try { day = _hmDayLine(cid, en) || ''; } catch (e) {}
const clip = (s, n) => (String(s).length > n ? String(s).slice(0, n) + '…' : String(s));
g.fillStyle = 'rgba(30,26,22,.74)';
g.font = '400 12px "Microsoft YaHei", system-ui, sans-serif';
g.fillText(clip(hello, 24), 16, 70);
g.fillStyle = 'rgba(30,26,22,.52)';
g.font = '400 11px "Microsoft YaHei", system-ui, sans-serif';
g.fillText(clip(day, 28), 16, 90);
}
try {
_hmShotShow(cv.toDataURL('image/png'));
} catch (e) { showToast('这张图没画成。'); }
}
var _hmShotUrl = '';
function _hmDataUrlBlob(url) {
const h = String(url || '');
const cut = h.indexOf(',');
if (cut < 0) return null;
const mime = (h.slice(0, cut).match(/data:([^;]+)/) || [])[1] || 'image/png';
const bin = atob(h.slice(cut + 1));
const u8 = new Uint8Array(bin.length);
for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
return new Blob([u8], { type: mime });
}
function _hmShotBind() {
const mask = document.getElementById('hmShotMask');
if (!mask || mask._bound) return;
mask._bound = 1;
const close = () => { mask.hidden = true; _hmShotUrl = ''; const img = document.getElementById('hmShotPrev'); if (img) img.removeAttribute('src'); };
const cl = document.getElementById('hmShotClose'), cn = document.getElementById('hmShotCancel');
if (cl) cl.onclick = close;
if (cn) cn.onclick = close;
mask.addEventListener('click', e => { if (e.target === mask) close(); });
const sv = document.getElementById('hmShotSave');
if (sv) sv.onclick = () => _hmShotSave();
const sh = document.getElementById('hmShotShare');
if (sh) sh.onclick = () => _hmShotShare();
}
function _hmShotShow(url) {
if (!url) { showToast('这张图没画成。'); return; }
_hmShotUrl = url;
_hmShotBind();
const img = document.getElementById('hmShotPrev');
if (img) img.src = url;
const mask = document.getElementById('hmShotMask');
if (mask) mask.hidden = false;
}
function _hmShotSave() {
if (!_hmShotUrl) return;
try {
const a = document.createElement('a');
a.href = _hmShotUrl;
a.download = '我们的家.png';
document.body.appendChild(a); a.click(); a.remove();
showToast('存好了。');
} catch (e) { showToast('这张图没画成。'); }
}
async function _hmShotShare() {
if (!_hmShotUrl) return;
try {
const blob = _hmDataUrlBlob(_hmShotUrl);
const file = blob ? new File([blob], '我们的家.png', { type: blob.type || 'image/png' }) : null;
if (file && navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
await navigator.share({ files: [file], title: '我们的家' });
return;
}
} catch (e) {}
_hmShotSave();
showToast('这台设备不能直接分享，已经存下来了。');
}
function _hmPhotoPick(cid) {
if (typeof mochiFilePick !== 'function') return;
const rk = _hmRoomOf(cid);
if (_hmPhotosOf(cid, rk).length >= HM_PHOTO_MAX) { showToast('这面墙最多三张。'); return; }
mochiFilePick({
id: 'hmphoto', accept: 'image/*',
onFiles: files => {
const f = files && files[0];
if (!f) return;
const rd = new FileReader();
rd.onload = () => {
const put = img => {
_hmPhotosSet(cid, rk, _hmPhotosOf(cid, rk).concat([String(img)]).slice(-HM_PHOTO_MAX));
save(); _hmRepaint(cid); _hmPaintDress(cid);
showToast('照片挂到这面墙上了。');
};
if (typeof compressImageDataURL === 'function') compressImageDataURL(String(rd.result), 900, 0.82).then(put).catch(() => showToast('这张图读不出来。'));
else put(String(rd.result));
};
rd.readAsDataURL(f);
}
});
}
var HM_DOOR_SVG = '<svg viewBox="0 0 120 156" fill="none" shape-rendering="geometricPrecision" aria-hidden="true">'
+ '<rect class="hm-d-door" x="6" y="4" width="108" height="150" rx="5"/>'
+ '<rect class="hm-d-panel" x="20" y="16" width="80" height="126" rx="3"/>'
+ '<rect class="hm-d-panel-hi" x="29" y="24" width="62" height="52" rx="2"/>'
+ '<circle class="hm-d-panel-hi" cx="60" cy="50" r="15"/>'
+ '<circle class="hm-d-port" cx="60" cy="50" r="15"/>'
+ '<path class="hm-d-mull" d="M60 35v30M45 50h30"/>'
+ '<rect class="hm-d-hinge" x="13" y="38" width="5" height="12" rx="2"/>'
+ '<rect class="hm-d-hinge" x="13" y="76" width="5" height="12" rx="2"/>'
+ '<rect class="hm-d-hinge" x="13" y="114" width="5" height="12" rx="2"/>'
+ '<circle class="hm-d-knob-plate" cx="87" cy="94" r="6"/>'
+ '<circle class="hm-d-knob" cx="87" cy="94" r="3.4"/>'
+ '<path class="hm-d-cord" d="M24 4v10"/>'
+ '<path class="hm-d-shade" d="M16 14h16l-4-7h-8Z"/>'
+ '<ellipse class="hm-d-lampglow" cx="24" cy="16" rx="9" ry="3"/>'
+ '<path class="hm-d-shoe" d="M30 146c0-3 2-5 5-5s5 2 5 5v4H30Z"/>'
+ '<path class="hm-d-shoe2" d="M74 146c0-3 2-5 5-5s5 2 5 5v4H74Z"/>'
+ '</svg>';
var HM_ROOM_DOORS = {
bed: '<svg viewBox="0 0 120 156" fill="none" shape-rendering="geometricPrecision" aria-hidden="true"><rect class="hm-d-door" x="14" y="8" width="92" height="144" rx="4"/><rect class="hm-d-panel" x="26" y="20" width="68" height="50" rx="2"/><rect class="hm-d-panel" x="26" y="82" width="68" height="54" rx="2"/><circle class="hm-d-knob-plate" cx="92" cy="74" r="5.4"/><circle class="hm-d-knob" cx="92" cy="74" r="3"/><path class="hm-d-cord" d="M92 80v9"/><rect class="hm-d-sign" x="84" y="89" width="16" height="12" rx="2"/></svg>',
study: '<svg viewBox="0 0 120 156" fill="none" shape-rendering="geometricPrecision" aria-hidden="true"><rect class="hm-d-door" x="10" y="6" width="100" height="146" rx="4"/><rect class="hm-d-glass" x="26" y="18" width="68" height="80" rx="3"/><path class="hm-d-mull" d="M60 18v80"/><rect class="hm-d-panel" x="26" y="110" width="68" height="30" rx="2"/><circle class="hm-d-knob-plate" cx="94" cy="102" r="5.4"/><circle class="hm-d-knob" cx="94" cy="102" r="3"/></svg>',
kitchen: '<svg viewBox="0 0 120 156" fill="none" shape-rendering="geometricPrecision" aria-hidden="true"><rect class="hm-d-door" x="12" y="6" width="96" height="146" rx="4"/><rect class="hm-d-panel" x="24" y="16" width="72" height="112" rx="2"/><path class="hm-d-mull" d="M29 26h62M29 36h62M29 46h62M29 56h62M29 66h62M29 76h62M29 86h62M29 96h62M29 106h62M29 116h62" stroke-width="1.6"/><rect class="hm-d-panel-hi" x="24" y="134" width="72" height="8" rx="2"/><circle class="hm-d-knob-plate" cx="94" cy="126" r="5.4"/><circle class="hm-d-knob" cx="94" cy="126" r="3"/></svg>',
dining: '<svg viewBox="0 0 120 156" fill="none" shape-rendering="geometricPrecision" aria-hidden="true"><rect class="hm-d-door" x="6" y="10" width="52" height="142" rx="4"/><rect class="hm-d-door" x="62" y="10" width="52" height="142" rx="4"/><path class="hm-d-mull" d="M60 10v142"/><circle class="hm-d-port" cx="32" cy="48" r="13"/><circle class="hm-d-glass" cx="32" cy="48" r="11"/><circle class="hm-d-port" cx="88" cy="48" r="13"/><circle class="hm-d-glass" cx="88" cy="48" r="11"/><circle class="hm-d-knob-plate" cx="48" cy="94" r="5.4"/><circle class="hm-d-knob" cx="48" cy="94" r="3"/><circle class="hm-d-knob-plate" cx="72" cy="94" r="5.4"/><circle class="hm-d-knob" cx="72" cy="94" r="3"/></svg>',
bath: '<svg viewBox="0 0 120 156" fill="none" shape-rendering="geometricPrecision" aria-hidden="true"><rect class="hm-d-door" x="16" y="8" width="88" height="144" rx="4"/><circle class="hm-d-port" cx="60" cy="46" r="16"/><circle class="hm-d-frost" cx="60" cy="46" r="14"/><rect class="hm-d-panel" x="28" y="80" width="64" height="54" rx="2"/><circle class="hm-d-knob-plate" cx="90" cy="74" r="5.4"/><circle class="hm-d-knob" cx="90" cy="74" r="3"/><path class="hm-d-cord" d="M100 104h12"/><rect class="hm-d-shoe" x="98" y="104" width="14" height="28" rx="3"/></svg>',
balcony: '<svg viewBox="0 0 120 156" fill="none" shape-rendering="geometricPrecision" aria-hidden="true"><rect class="hm-d-door" x="6" y="6" width="108" height="146" rx="4"/><rect class="hm-d-glass" x="16" y="18" width="42" height="120" rx="2"/><rect class="hm-d-glass" x="62" y="18" width="42" height="120" rx="2"/><path class="hm-d-mull" d="M60 14v128"/><rect class="hm-d-knob-plate" x="54" y="70" width="5" height="20" rx="2.5"/><rect class="hm-d-knob" x="55" y="74" width="3" height="12" rx="1.5"/></svg>',
entry: '<svg viewBox="0 0 120 156" fill="none" shape-rendering="geometricPrecision" aria-hidden="true"><rect class="hm-d-door" x="8" y="4" width="104" height="150" rx="5"/><rect class="hm-d-panel" x="20" y="14" width="80" height="118" rx="3"/><rect class="hm-d-panel-hi" x="26" y="20" width="68" height="46" rx="2"/><circle class="hm-d-port" cx="60" cy="43" r="9"/><circle class="hm-d-knob" cx="60" cy="43" r="3.4"/><rect class="hm-d-plate" x="44" y="78" width="32" height="18" rx="2"/><circle class="hm-d-panel-hi" cx="53" cy="87" r="2.4"/><circle class="hm-d-panel-hi" cx="67" cy="87" r="2.4"/><circle class="hm-d-knob-plate" cx="92" cy="102" r="6"/><circle class="hm-d-knob" cx="92" cy="102" r="3.4"/><rect class="hm-d-slot" x="30" y="118" width="32" height="7" rx="3.5"/><path class="hm-d-shoe" d="M26 146c0-3 2-5 5-5s5 2 5 5v4H26Z"/><path class="hm-d-shoe2" d="M70 146c0-3 2-5 5-5s5 2 5 5v4H70Z"/></svg>',
};
var HM_ROOM_ACT = {
'':      { n: '调个台' },
bed:     { n: '拉一下窗帘', state: 'curtain' },
study:   { n: '随手翻一页' },
kitchen: { n: '烧壶水' },
dining:  { n: '摆好碗筷' },
bath:    { n: '放一缸水' },
balcony: { n: '收件衣服' },
entry:   { n: '翻信箱' }
};
function _hmHeroHTML(ta, cid, en, visitN) {
const clock = _hmWorldClock(en);
let clockHTML = '';
if (clock && typeof cjTimeOnOf === 'function' && cjTimeOnOf(cid)) {
const hideClock = (typeof cjHideTimeOnOf === 'function' && cjHideTimeOnOf() && typeof _cjHiding === 'function' && _cjHiding(en));
if (!hideClock) {
const pct = (en && en.world) ? ((en.world.hh * 60 + en.world.mm) / 1440) * 100 : 0;
clockHTML = '<span class="hm-clock">TA那边 ' + clock + '</span>'
+ '<span class="hm-daybar" aria-hidden="true"><i style="left:' + pct.toFixed(2) + '%"></i></span>';
}
}
const hello = _hmHelloOf(cid, en, visitN);
const tok = HM_ROOM_TOKEN[_hmRoomOf(cid)] || null;
const away = (typeof _cjHiding === 'function' && _cjHiding(en));
return '<div class="hm-hero">'
+ '<div class="hm-doorpanel">'
+ '<span class="hm-doorart" aria-hidden="true">' + (HM_ROOM_DOORS[_hmRoomOf(cid)] || HM_DOOR_SVG) + '</span>'
+ '<div class="hm-doorside">'
+ '<div class="hm-card">'
+ '<span class="hm-door-photo"><span class="hm-pin" aria-hidden="true"></span><span class="hm-av">'
+ (tok ? tok.svg : _hmAvatarHTML(ta)) + '</span></span>'
+ '<div class="hm-id"><b class="hm-name">我们的家</b>'
+ '<span class="hm-hello">' + escapeHTML(hello) + '</span></div>'
+ '<button type="button" class="hm-door" data-hmdo="knock" aria-label="按门铃">'
+ '<span class="hm-door-bell"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4.2a5 5 0 0 0-5 5v3.1l-1.7 2.6h13.4L17 12.3V9.2a5 5 0 0 0-5-5z"/><path d="M9.9 18.4a2.2 2.2 0 0 0 4.2 0"/><path d="M12 2.6v1.6"/></svg></span>'
+ '</button>'
+ '</div>'
+ '</div>'
+ '</div>'
+ (clockHTML ? '<div class="hm-meta">' + clockHTML + '</div>' : '')
+ '</div>';
}
var HM_SEC_ICON = {
live:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.6"/></svg>',
plant: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21v-7.5"/><path d="M12 13.5C12 9.6 9 7.5 5 7.5c0 3.9 3 6 7 6z"/><path d="M12 12c0-3.4 2.6-5.2 6-5.2 0 3.4-2.6 5.2-6 5.2z"/><path d="M7.5 21h9l-1.3-3.2H8.8z"/></svg>',
day:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M12 7v5.4l3.4 2"/></svg>',
do:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.5h16l-1.5 4.3a2 2 0 0 1-1.9 1.3H7.4a2 2 0 0 1-1.9-1.3z"/><path d="M6.5 14.5c0-2.8 1.6-4.7 3.5-4.7s3.5 1.9 3.5 4.7"/><path d="M13.5 14.5c0-2.3 1.3-3.8 2.9-3.8s2.6 1.5 2.6 3.8"/><path d="M3.5 20.6h17"/></svg>'
};
function _hmSecIcon(k) { return HM_SEC_ICON[k] ? '<span class="hm-sec-ic" aria-hidden="true">' + HM_SEC_ICON[k] + '</span>' : ''; }
function _hmLiveHTML(en, cid) {
if (typeof _cjHiding === 'function' && _cjHiding(en)) {
return '<div class="hm-sec" id="hmLiveSec"><div class="hm-sec-hd">' + _hmSecIcon('live') + '<span class="hm-sec-t">TA 正在…</span></div>'
+ '<p class="hm-away">TA 出门了，屋里没人。等 TA 回来再说吧。</p></div>';
}
if (!en || typeof CJ_ACTIVITY === 'undefined') {
return '<div class="hm-sec" id="hmLiveSec"><div class="hm-sec-hd">' + _hmSecIcon('live') + '<span class="hm-sec-t">TA 正在…</span></div>'
+ '<p class="hm-away">……</p></div>';
}
const act = (en.a && CJ_ACTIVITY[en.a]) ? en.a : 'free';
const actLbl = (typeof _cjActLabelOf === 'function') ? _cjActLabelOf(en) : CJ_ACTIVITY[act].label;
const doing = (typeof _cjDoText === 'function') ? _cjDoText(en) : '';
const mood = (data.cjian && data.cjian.moodOn !== false && typeof _cjMoodPairLabel === 'function') ? _cjMoodPairLabel(en.mo, '') : '';
let sky = '', wxK = '';
if (typeof cjSkyFor === 'function') { const s = cjSkyFor(cid); if (s) { sky = s.weatherName || ''; wxK = s.weather || ''; } }
const pres = (en.p && CJ_PRESENCE[en.p]) ? CJ_PRESENCE[en.p].label : '';
const rk0 = _hmRoomOf(cid);
const rsc = _hmPsList('屋里的样子', _hmRoomLbl(rk0) + '·样子');
let scene = '';
if (rsc.length) scene = rsc[(act === 'busy' || act === 'rushed') ? 1 : 0] || rsc[0];
else {
const gsc = _hmPsList('屋里的样子', '通用·' + (HM_ACT_LBL[act] || '未知'));
scene = gsc.length ? gsc[0] : '';
}
const roomNow = HM_ROOMS[rk0] ? HM_ROOMS[rk0].n : '';
const nowTx = actLbl + (doing ? ' · ' + doing : '');
const fact = (k, v) => v ? '<span class="hm-fact"><i>' + k + '</i>' + escapeHTML(v) + '</span>' : '';
const wxExtra = (sky && typeof _cjWxSVG === 'function' && wxK) ? _cjWxSVG(wxK) : '';
const wxFact = sky ? '<span class="hm-fact"><i>那边的天</i><span class="hm-wx-line">' + wxExtra + escapeHTML(sky) + '</span></span>' : '';
let visits = 0;
try {
const dkToday = _hmToday();
const hx = (en && Array.isArray(en.hist)) ? en.hist : [];
hx.forEach(h => {
if (h && h.k === 'n' && /我们的家/.test(h.t || '') && typeof h.ts === 'number'
&& (typeof dressDayKey === 'function' ? new Date(h.ts).toLocaleDateString('zh-CN') === dkToday
: new Date(h.ts).toDateString() === new Date().toDateString())) visits++;
});
} catch (e) {}
const visitFact = visits ? fact('TA 察觉', '你今天来过 ' + visits + ' 次') : '';
const taAct = (_hmTaAct && _hmTaAct.cid === cid && Date.now() - _hmTaAct.at < 8 * 60000) ? _hmTaAct : null;
const plantFact = taAct ? fact('花草', '刚给' + (taAct.room === 'balcony' ? '花架上' : (taAct.room === '' ? '窗台上' : '屋里')) + '那盆浇了水') : '';
const facts = plantFact + fact('状态', en.status) + fact('此刻心情', mood) + wxFact + fact('离你', pres) + visitFact;
return '<div class="hm-sec" id="hmLiveSec"><div class="hm-sec-hd">' + _hmSecIcon('live') + '<span class="hm-sec-t">TA 正在…</span></div>'
+ '<button type="button" class="hm-sit-exit" data-hmdo="stand" hidden>起身 · 回到屋里</button>'
+ '<div class="hm-sit-sound" hidden>'
+ '<span class="hm-sit-sound-t">屋里的声音</span>'
+ '<button type="button" class="hm-sound-chip' + (_hmRoomSound === 'rain' ? ' on' : '') + '" data-hmamb="rain">雨声</button>'
+ '<button type="button" class="hm-sound-chip' + (_hmRoomSound === 'fire' ? ' on' : '') + '" data-hmamb="fire">炉火</button>'
+ '<button type="button" class="hm-sound-chip' + (_hmRoomSound ? '' : ' on') + '" data-hmamb="">关</button>'
+ '</div>'
+ '<p class="hm-now"><span class="hm-now-cap">TA 正在' + (roomNow ? ' · ' + escapeHTML(roomNow) : '') + '</span><b class="hm-now-tx">' + escapeHTML(nowTx) + '</b></p>'
+ (facts ? '<div class="hm-facts">' + facts + '</div>' : '')
+ '<p class="hm-scene">' + escapeHTML(scene) + '</p>'
+ '</div>';
}
var HM_TONES = ['', '#8a6d5b', '#7a6ba0', '#5e7d8c', '#a06d84', '#5f7d5a', '#4a4a4a'];
function _hmRoomSwap(cid) {
const stage = document.getElementById('hmStage');
const run = () => { _hmApplyLook(); _hmRepaint(cid); _hmPaintDress(cid); _hmActsPaint(cid); };
if (!stage || !stage.classList) { run(); return; }
stage.classList.add('hm-room-swap');
setTimeout(() => {
run();
requestAnimationFrame(() => requestAnimationFrame(() => { try { stage.classList.remove('hm-room-swap'); } catch (e) {} }));
}, 170);
}
function _hmSwap(fn) {
if (typeof apSwapFade === 'function') { try { apSwapFade(fn); return; } catch (e) {} }
fn();
}
function _hmDressHTML(cid) {
const o = homeOf(cid) || {};
const look = o.look || {};
const skinOn = (typeof look.skin === 'string') ? look.skin : '';
const sk = (skinOn ? HM_SKINS.find(x => x.k === skinOn) : null) || HM_SKINS[0];
const hex = v => (typeof v === 'string' && /^#[0-9a-fA-F]{6}$/.test(v)) ? v : '';
const eff = {
wall: hex(look.wall) || sk.wall, floor: hex(look.floor) || sk.floor,
wood: hex(look.wood) || sk.wood, line: hex(look.line) || sk.line,
tone: hex(look.tone) || hex(sk.tone) || '#4a4a4a'
};
const colCell = (k, label, resetAttr) => {
const id = (k === 'tone') ? 'hmTone' : ('hmCol' + k.charAt(0).toUpperCase() + k.slice(1));
const custom = !!hex(look[k]);
return '<span class="hm-deck-col' + (custom ? ' is-custom' : '') + '">'
+ '<input type="color" id="' + id + '" data-hmcol="' + k + '" value="' + eff[k] + '" aria-label="' + label + '">'
+ '<span class="hm-deck-col-n">' + label + '</span>'
+ '<button type="button" class="hm-deck-col-x" ' + resetAttr + ' aria-label="' + label + '跟样子" title="跟样子">↺</button>'
+ '</span>';
};
const glowNow = (typeof look.glow === 'number' && isFinite(look.glow)) ? Math.min(30, Math.max(0, Math.round(look.glow))) : 0;
const glowChip = (v, label) => '<button type="button" class="hm-chip' + (glowNow === v ? ' on' : '') + '" data-glow="' + v + '">' + label + '</button>';
const skinSw = s => '<button type="button" class="hm-skin' + (skinOn === s.k ? ' on' : '') + '" data-skin="' + s.k + '" aria-label="' + s.n + '"'
+ ' style="--sk-wall:' + s.wall + ';--sk-floor:' + s.floor + ';--sk-wood:' + s.wood + ';--sk-tone:' + (s.tone || 'transparent') + ';--sk-glow:' + (s.glow / 30).toFixed(2) + '">'
+ '<span class="hm-skin-sw" aria-hidden="true"></span><span class="hm-skin-n">' + s.n + '</span></button>';  const roomNow = _hmRoomOf(cid);
const roomChip = (k, label) => '<button type="button" class="hm-chip' + (roomNow === k ? ' on' : '') + '" data-room="' + k + '">' + label + '</button>';
const ps = _hmPhotosOf(cid, roomNow);
const psRow = '<div class="hm-photos-set">'
+ [0, 1, 2].map(i => ps[i]
? '<span class="hm-photo-slot"><img src="' + escapeHTML(ps[i]) + '" alt="" loading="lazy" decoding="async"><button type="button" class="hm-photo-x" data-hmcmd="photoclear" data-i="' + i + '" aria-label="摘掉这张">×</button></span>'
: '<span class="hm-photo-slot hm-empty"><i>空</i></span>').join('')
+ (ps.length < 3 ? '<button type="button" class="hm-btn" data-hmcmd="photopick">' + (ps.length ? '再传一张' : '传一张') + '</button>'
+ '<button type="button" class="hm-btn" data-hmcmd="favphoto">从收藏</button>' : '')
+ '</div>';
const plantRoom = roomNow;
const plant = _hmPlantOf(cid, plantRoom);
const watered = (plant.day === _hmToday());
const plantSt = _hmPlantStage(plant);
const plantStep = plantSt >= 2 ? '开花了' : (plantSt >= 1 ? '长高了' : (plant.born ? '冒出新芽' : '刚栽下'));
const rainNow = (!watered && _hmPlantRainToday(cid));
const plantCap = (plantRoom === '') ? '窗台那盆花' : (plantRoom === 'balcony' ? '花架上那盆' : '屋里那盆');
const soilWait = Math.max(0, 3 - (plant.soil ? _hmDayGap(plant.soil, _hmToday()) : 99));
const sunWait = Math.max(0, 2 - (plant.sun ? _hmDayGap(plant.sun, _hmToday()) : 99));
const seedN = +((homeOf(cid) || {}).seedN) || 0;
const seedKind = (homeOf(cid) || {}).seedKind || '';
const seedNk = (seedKind && HM_FLOWER[seedKind]) ? '（' + HM_FLOWER[seedKind].n + '）' : '';
const flChip = t => {
const k = t[0];
const need = _hmFlowerLocked(k, cid);
if (need) {
const diff = Math.max(1, need - _hmPlantOf(cid, '').n);
return '<button type="button" class="hm-chip is-lock" data-flower="' + k + '" data-hmroom="' + plantRoom + '" aria-disabled="true" title="照顾满 ' + need + ' 天解锁">'
+ t[1] + '<i>还差 ' + diff + ' 天</i></button>';
}
return '<button type="button" class="hm-chip' + ((plant.kind || '') === k ? ' on' : '') + '" data-flower="' + k + '" data-hmroom="' + plantRoom + '">' + t[1] + '</button>';
};
return '<div class="hm-dress">'
+ '<p class="hm-set-cap">屋子</p>'
+ '<div class="hm-dress-row"><span class="hm-dress-cap">房间</span><div class="hm-dress-main">'
+ Object.keys(HM_ROOMS).map(k => roomChip(k, HM_ROOMS[k].n)).join('')
+ '</div></div>'
+ '<p class="hm-dress-note">换一间屋，家具跟着换；每间屋各自记得你摆的样子。</p>'
+ '<div class="hm-dress-row"><span class="hm-dress-cap">样子</span><div class="hm-dress-main"><div class="hm-skins">'
+ HM_SKINS.map(skinSw).join('')
+ '</div></div></div>'
+ '<p class="hm-dress-note">一套会改主色调和暖光，不动背景图；下面四色与暖光可以单独改。</p>'
+ '<div class="hm-dress-row"><span class="hm-dress-cap">颜色</span><div class="hm-dress-main hm-deck-cols">'
+ colCell('wall', '墙', 'data-hmcolor="wall"') + colCell('floor', '地', 'data-hmcolor="floor"')
+ colCell('wood', '木', 'data-hmcolor="wood"') + colCell('line', '线', 'data-hmcolor="line"')
+ colCell('tone', '主色', 'data-tone=""')
+ '</div></div>'
+ '<p class="hm-dress-note">改了就盖过样子那一档，点右上角 ↺ 回到「跟样子」。</p>'
+ '<div class="hm-dress-row"><span class="hm-dress-cap">暖光</span><div class="hm-dress-main">'
+ glowChip(0, '关') + glowChip(10, '弱') + glowChip(20, '中') + glowChip(30, '强')
+ '</div></div>'
+ '<div class="hm-dress-row"><span class="hm-dress-cap">背景</span><div class="hm-dress-main">'
+ '<button type="button" class="hm-btn" data-hmcmd="bgpick">' + (look.bg ? '换一张图' : '传一张图') + '</button>'
+ (look.bg ? '<button type="button" class="hm-btn" data-hmcmd="bgclear">清掉</button>' : '<span class="hm-plant-hint">不传＝用墙色</span>')
+ '</div></div>'
+ '<div class="hm-dress-row"><span class="hm-dress-cap">家具色</span><div class="hm-dress-main">'
+ [['', '跟屋子'], ['wood', '木色'], ['ink', '墨色'], ['warm', '暖色']].map(t =>
'<button type="button" class="hm-chip' + ((look.propTone || '') === t[0] ? ' on' : '') + '" data-proptone="' + t[0] + '">' + t[1] + '</button>').join('')
+ '</div></div>'
+ '<div class="hm-dress-row"><span class="hm-dress-cap">字体</span><div class="hm-dress-main">'
+ '<button type="button" class="hm-btn" data-hmgo="couple">去「我们的空间」换字体</button>'
+ '</div></div>'
+ '<p class="hm-set-cap">灯与窗</p>'
+ '<div class="hm-dress-row"><span class="hm-dress-cap">灯</span><div class="hm-dress-main">'
+ '<button type="button" class="hm-chip' + (look.lampOn !== false ? ' on' : '') + '" data-lamp="on">开</button>'
+ '<button type="button" class="hm-chip' + (look.lampOn === false ? ' on' : '') + '" data-lamp="off">关</button>'
+ '</div></div>'
+ '<div class="hm-dress-row"><span class="hm-dress-cap">窗</span><div class="hm-dress-main">'
+ '<button type="button" class="hm-chip' + (look.winOpen === true ? ' on' : '') + '" data-win="open">开</button>'
+ '<button type="button" class="hm-chip' + (look.winOpen !== true ? ' on' : '') + '" data-win="closed">拉帘</button>'
+ '</div></div>'
+ '<p class="hm-dress-note">灯关掉＝夜里不再有灯晕、白天暖光也收掉；拉上帘子窗外就隔一层纱。</p>'
+ '<p class="hm-set-cap">' + plantCap + '</p>'
+ '<div class="hm-dress-row" id="hmSetPlant"><span class="hm-dress-cap">花</span><div class="hm-dress-main">'
+ '<button type="button" class="hm-plant-big hm-plant small' + (watered ? ' is-watered' : '') + '" data-hmwater="1" data-hmplant="1" data-hmroom="' + plantRoom + '" data-hm-thirst="' + _hmPlantThirst(plant, cid) + '"' + (_hmPlantSnowToday(cid) ? ' data-hm-snow="1"' : '') + (_hmSunFresh(plant) ? ' data-hm-sun="1"' : '') + (plant.seed === 1 ? ' data-hm-seed="1"' : '') + (plantSt >= 2 ? ' data-hm-bloom="1"' : '') + ' data-hm-flower="' + (HM_FLOWER[plant.kind] ? plant.kind : '') + '" aria-label="给花浇水" title="' + (watered ? '今天已经浇过水了' : '浇点水') + '">'
+ _hmPlantSVG(plant, _hmPlantSnowToday(cid)) + '<span class="hm-water-drops" aria-hidden="true"><i></i><i></i><i></i></span><span class="hm-fall" aria-hidden="true"><i></i><i></i><i></i></span></button>'
+ '<span class="hm-plant-st">' + plantStep + ' · 浇过 ' + plant.n + ' 次 · ' + (watered ? '今天浇过了' : (rainNow ? '今天下雨，天替你浇了' : '今天还没浇')) + '</span>'
+ '</div></div>'
+ '<div class="hm-dress-row"><span class="hm-dress-cap">名字</span><div class="hm-dress-main">'
+ '<input class="hm-name-inp" id="hmPlantName" data-hmroom="' + plantRoom + '" maxlength="12" placeholder="给它起个名字" value="' + escapeHTML(plant.nm || '') + '">'
+ '<button type="button" class="hm-btn" data-hmdo="plantcard" data-hmroom="' + plantRoom + '">看记录</button>'
+ '</div></div>'
+ '<div class="hm-dress-row"><span class="hm-dress-cap">品种</span><div class="hm-dress-main">'
+ Object.keys(HM_FLOWER).map(k => flChip([k, HM_FLOWER[k].n])).join('')
+ '</div></div>'
+ '<div class="hm-dress-row"><span class="hm-dress-cap">照顾</span><div class="hm-dress-main">'
+ '<button type="button" class="hm-chip' + (soilWait ? ' is-lock' : '') + '" data-hmdo="soil" data-hmroom="' + plantRoom + '">松土<i>' + (soilWait ? '等 ' + soilWait + ' 天' : '三天保水') + '</i></button>'
+ '<button type="button" class="hm-chip' + (sunWait ? ' is-lock' : '') + '" data-hmdo="sun" data-hmroom="' + plantRoom + '">晒太阳<i>' + (sunWait ? '等 ' + sunWait + ' 天' : '花色更亮') + '</i></button>'
+ '</div></div>'
+ '<p class="hm-dress-note">松土三天保水（渴得慢一拍），晒太阳两天花瓣更亮；都要隔几天才再来一次。</p>'
+ (plant.seed === 1 || seedN > 0
? '<div class="hm-dress-row"><span class="hm-dress-cap">种子</span><div class="hm-dress-main">'
+ (plant.seed === 1 ? '<button type="button" class="hm-btn" data-hmdo="seedpick" data-hmroom="' + plantRoom + '">收一粒种子</button>' : '')
+ (!plant.born && seedN > 0 ? '<button type="button" class="hm-btn" data-hmdo="seedsow" data-hmroom="' + plantRoom + '">用一粒种子种下</button>' : '')
+ '<span class="hm-plant-hint">手里 ' + seedN + ' 粒' + seedNk + (plant.seed === 1 ? ' · 它结了种子' : (plant.seed === 2 ? ' · 它的种子收过了' : '')) + '</span>'
+ '</div></div>'
+ '<p class="hm-dress-note">开花满三天结一粒（一生一粒）；种子跟着收它那盆的品种走，去别的屋「用一粒种子种下」就是那间屋的新盆。</p>'
: '')
+ '<p class="hm-dress-note">点花就浇水，一天一次；种下第 3 天长叶、第 7 天开花（冬天慢些、春天快些），渴着的那几天不算成长。两天没浇叶尖会垂，浇一次就回来；下雨天不用浇。向日葵/风信子/薰衣草要照顾够天数才解锁。</p>'
+ '<p class="hm-set-cap">照片墙 · ' + (HM_ROOMS[roomNow] ? HM_ROOMS[roomNow].n : '客厅') + '</p>'
+ '<div class="hm-dress-row"><span class="hm-dress-cap">墙上的照片</span><div class="hm-dress-main">' + psRow + '</div></div>'
+ '<p class="hm-dress-note">每间屋各有一面墙：挂在这里就只出现在「' + (HM_ROOMS[roomNow] ? HM_ROOMS[roomNow].n : '客厅') + '」，最多三张；会跟着备份走，别放太满。</p>'
+ '<div class="hm-dress-row"><span class="hm-dress-cap">相框</span><div class="hm-dress-main">'
+ [['', '白边'], ['wood', '木框'], ['polaroid', '拍立得']].map(t =>
'<button type="button" class="hm-chip' + (((look.photoFrame || '') === t[0]) ? ' on' : '') + '" data-pframe="' + t[0] + '">' + t[1] + '</button>').join('')
+ '<button type="button" class="hm-btn" data-hmcmd="photoswap">换位</button>'
+ '</div></div>'
+ '<div class="hm-dress-row"><span class="hm-dress-cap">那行字</span><div class="hm-dress-main">'
+ '<input class="hm-name-inp" id="hmPhotoNote" maxlength="16" placeholder="拍立得下面写一句" value="' + escapeHTML(look.photoNote || '') + '">'
+ '</div></div>'
+ '<p class="hm-set-cap">桌上</p>'
+ '<div class="hm-dress-row"><span class="hm-dress-cap">那张卡</span><div class="hm-dress-main">'
+ (look.card ? '<span class="hm-card-cut">' + escapeHTML(String(look.card.text).slice(0, 22)) + '</span>' : '<span class="hm-plant-hint">桌上空着</span>')
+ '<button type="button" class="hm-btn" data-hmdo="card">放一张字卡</button>'
+ '<button type="button" class="hm-btn" data-hmcmd="favcard">从收藏放一句</button>'
+ '</div></div>'
+ '<p class="hm-dress-note">' + (look.card && look.card.fav ? '这一句来自收藏，点桌上那张卡能回去看。' : '字卡与收藏摘句都行；桌上只放一张。') + '</p>'
+ '<p class="hm-set-cap">其他</p>'
+ '<div class="hm-dress-row"><span class="hm-dress-cap">换一套</span><div class="hm-dress-main">'
+ '<button type="button" class="hm-btn" data-hmcmd="hmrandom">随机换一套</button>'
+ '<span class="hm-plant-hint">样子 · 颜色 · 暖光一起换</span>'
+ '</div></div>'
+ '<div class="hm-dress-row"><span class="hm-dress-cap">存一张</span><div class="hm-dress-main">'
+ '<button type="button" class="hm-btn" data-hmcmd="shot">只存屋子</button>'
+ '<button type="button" class="hm-btn" data-hmcmd="shotpage">连门口一起</button>'
+ '</div></div>'
+ '<div class="hm-dress-row"><span class="hm-dress-cap">恢复出厂</span><div class="hm-dress-main">'
+ '<button type="button" class="hm-btn" data-hmcmd="hmreset">整间屋子回出厂</button>'
+ '</div></div>'
+ '<p class="hm-dress-note">恢复出厂只清这间屋的长相（背景/主色调/暖光/样子/摆件/照片/灯窗/贴纸/花），不动纸条、聊天与「我们的空间」那边。</p>'
+ '</div>';
}
function _hmPaintDress(cid) {
const body = document.getElementById('hmSetBody');
if (body) body.innerHTML = _hmDressHTML(cid);
_hmBindPlantInput(cid);
_hmBindPhotoNote(cid);
_hmBindDeck(cid);
}
function _hmBindDeck(cid) {
const deck = document.getElementById('hmSetBody');
if (!deck || !cid) return;
deck.querySelectorAll('input[data-hmcol]').forEach(inp => {
if (inp._hmBound) return;
inp._hmBound = 1;
const k = inp.getAttribute('data-hmcol');
inp.addEventListener('input', () => {
if (!/^#[0-9a-fA-F]{6}$/.test(inp.value)) return;
const o = _hmEnsure(cid);
o.look[k] = inp.value;
save(); _hmApplyLook();
const cell = inp.closest('.hm-deck-col');
if (cell) cell.classList.add('is-custom');
});
});
}
function _hmBindPlantInput(cid) {
const inp = document.getElementById('hmPlantName');
if (!inp) return;
inp.oninput = () => {
const room = inp.getAttribute('data-hmroom') || '';
const acc = _hmPlantAcc(cid, room);
acc.p.nm = inp.value.trim().slice(0, 12);
save();
const nt = document.getElementById('hmPlantNote');
if (nt && _hmRoomOf(cid) === room) nt.textContent = _hmPlantLineText(acc.p, cid);
};
}
function _hmBindPhotoNote(cid) {
const inp = document.getElementById('hmPhotoNote');
if (!inp) return;
inp.oninput = () => {
const o = _hmEnsure(cid);
const v = inp.value.replace(/\s+/g, ' ').slice(0, 16);
o.look.photoNote = v;
save();
const box = document.querySelector('#hmStage .hm-photos');
if (!box) return;
let n = box.querySelector('.hm-photo-note');
const want = (box.getAttribute('data-hm-pframe') === 'polaroid' && v);
if (want && !n) { n = document.createElement('span'); n.className = 'hm-photo-note'; box.appendChild(n); }
if (want) n.textContent = v;
else if (n) n.remove();
};
}
function _hmSetOpen() {
const m = document.getElementById('hmSetMask');
if (!m) return;
const cid = _hmCid();
if (!cid) return;
_hmPaintDress(cid);
_hmBind(document.getElementById('hmPage'), cid);
m.hidden = false;
}
function _hmSetClose() { const m = document.getElementById('hmSetMask'); if (m) m.hidden = true; }
function _hmCommand(e, cid) {
if (e.currentTarget && e.currentTarget.id === 'hmSetMask' && e.target === e.currentTarget) { _hmSetClose(); return; }
const go = e.target.closest('[data-hmgo]');
if (go) {
const to = go.dataset.hmgo || '';
if (to && typeof showView === 'function') showView(to);
return;
}
if (!cid) return;
const du = e.target.closest('[data-hmdo]');
if (du) {
const a = du.dataset.hmdo || '';
if (a === 'deal') _hmDoDeal(cid);
else if (a === 'card') _hmPickOpen(cid);
else if (a === 'knock') _hmKnock(cid);
else if (a === 'note') _hmNoteOpen(cid);
else if (a === 'notes') _hmNotesOpen(cid);
else if (a === 'sit') _hmSitStart(cid);
else if (a === 'stand') _hmSitEnd(cid);
else if (a === 'plantcard') _hmPlantCard(cid, du.getAttribute('data-hmroom') || '');
else if (a === 'soil') _hmSoil(cid, du.getAttribute('data-hmroom') || '');
else if (a === 'sun') _hmSun(cid, du.getAttribute('data-hmroom') || '');
else if (a === 'seedpick') _hmSeedPick(cid, du.getAttribute('data-hmroom') || '');
else if (a === 'seedsow') _hmSeedSow(cid, du.getAttribute('data-hmroom') || '');
else if (a === 'daylog') _hmDayLogOpen(cid);
else if (a === 'roomact') _hmRoomAct(cid);
else if (a === 'tea') _hmTea(cid);
else if (a === 'tidy') _hmTidy(cid);
else if (a === 'readcard') {
const cd = (_hmLookOf(cid) || {}).card;
if (cd && typeof openModal === 'function') openModal('桌上那张字卡', '', () => {}, { noInput: true, staticText: cd.text, okText: '知道了' });
}
return;
}
if (e.target.closest('[data-hmplant]')) { _hmWater(cid, e.target.closest('[data-hmplant]').getAttribute('data-hmroom') || ''); return; }
const gr = e.target.closest('[data-hmgreen]');
if (gr) { _hmGreenTalk(cid, gr.getAttribute('data-hmgreen') || '绿植'); return; }
const amb = e.target.closest('[data-hmamb]');
if (amb) { _hmAmbSet(cid, amb.getAttribute('data-hmamb') || ''); return; }
if (e.target.closest('[data-hmcalgo]')) {
if (typeof calJumpToDay === 'function' && typeof calTodayKey === 'function') calJumpToDay(calTodayKey());
else if (typeof showView === 'function') showView('calendar');
return;
}
if (e.target.closest('[data-hmobj]')) { _hmObjTalk(cid); return; }
const phv = e.target.closest('[data-hmphoto]');
if (phv) {
if (phv.dataset.hmphoto === 'add') { _hmPhotoPick(cid); return; }
const ps = _hmPhotosOf(cid);
const s = ps[+phv.dataset.hmphoto];
if (s && typeof openLightbox === 'function') openLightbox(s);
return;
}
const cp = e.target.closest('[data-cardpick]');
if (cp) {
const body = document.getElementById('hmPickBody');
const isFav = !!(body && body._mode === 'fav');
const it = (body && body._pool) ? body._pool[+cp.dataset.cardpick] : null;
const t = isFav ? (it && it.text) : it;
if (t) {
const o = _hmEnsure(cid);
o.look.card = { id: '', text: String(t).slice(0, 200), cat: isFav ? '收藏摘句' : '主字卡', at: Date.now(), fav: isFav ? 1 : 0 };
save(); _hmPickClose(); _hmRepaint(cid); _hmPaintDress(cid);
showToast(isFav ? '从收藏放到桌上了。' : '放到桌上了。');
}
return;
}
const fimg = e.target.closest('[data-favimg]');
if (fimg) {
const body = document.getElementById('hmPickBody');
const s = (body && body._pool) ? body._pool[+fimg.dataset.favimg] : null;
const img = s && s.imgs && s.imgs[0];
if (img) {
const rk = _hmRoomOf(cid);
if (_hmPhotosOf(cid, rk).length >= HM_PHOTO_MAX) { showToast('这面墙最多三张，先摘一张。'); return; }
_hmPhotosSet(cid, rk, _hmPhotosOf(cid, rk).concat([String(img)]).slice(-HM_PHOTO_MAX));
save(); _hmPickClose(); _hmRepaint(cid); _hmPaintDress(cid);
showToast('挂到这面墙上了。');
}
return;
}
if (e.target.closest('#hmPickMask') && e.target.id === 'hmPickMask') { _hmPickClose(); return; }
const pf = e.target.closest('[data-pframe]');
if (pf) {
const o = _hmEnsure(cid);
const k = pf.getAttribute('data-pframe') || '';
o.look.photoFrame = (k === 'wood' || k === 'polaroid') ? k : '';
save(); _hmRepaint(cid); _hmPaintDress(cid);
return;
}
const flw = e.target.closest('[data-flower]');
if (flw) {
const room = flw.getAttribute('data-hmroom') || '';
const k = flw.getAttribute('data-flower') || '';
if (k && _hmFlowerLocked(k, cid)) { showToast('这一档还没解锁——照顾满 ' + HM_FLOWER_LOCK[k] + ' 天再来。'); return; }
const acc = _hmPlantAcc(cid, room);
acc.p.kind = HM_FLOWER[k] ? k : '';
save(); _hmRepaint(cid); _hmPaintDress(cid);
return;
}
const pt = e.target.closest('[data-proptone]');
if (pt) {
const o = _hmEnsure(cid);
o.look.propTone = pt.getAttribute('data-proptone') || '';
save(); _hmFurnInkApply(cid); _hmPaintDress(cid);
return;
}
const lm = e.target.closest('[data-lamp]');
if (lm) {
const o = _hmEnsure(cid);
o.look.lampOn = lm.dataset.lamp !== 'off';
save(); _hmApplyLook(); _hmPaintDress(cid);
return;
}
const wn = e.target.closest('[data-win]');
if (wn) {
const o = _hmEnsure(cid);
o.look.winOpen = wn.dataset.win === 'open';
save(); _hmApplyLook(); _hmPaintDress(cid);
return;
}
const sk = e.target.closest('[data-skin]');
if (sk) {
const k = sk.dataset.skin || '';
const def = HM_SKINS.find(x => x.k === k) || HM_SKINS[0];
const o = _hmEnsure(cid);
o.look.skin = def.k; o.look.tone = def.tone; o.look.glow = def.glow;
o.look.wall = ''; o.look.floor = ''; o.look.wood = ''; o.look.line = '';
save(); _hmSwap(() => { _hmApplyLook(); _hmRepaint(cid); _hmPaintDress(cid); });
return;
}
const rm = e.target.closest('[data-room]');
if (rm) {
const k = rm.getAttribute('data-room') || '';
const nk = Object.prototype.hasOwnProperty.call(HM_ROOMS, k) ? k : '';
const old = _hmRoomOf(cid);
if (nk === old) return;
const o = _hmEnsure(cid);
if (!o.look.roomProps || typeof o.look.roomProps !== 'object' || Array.isArray(o.look.roomProps)) o.look.roomProps = {};
o.look.roomProps[old] = _hmPropsOf(cid).map(p => ({ id: p.id, x: p.x, y: p.y }));
o.look.room = nk;
const saved = o.look.roomProps[nk];
o.look.props = Array.isArray(saved) ? saved.map(p => ({ id: p.id, x: p.x, y: p.y })) : (HM_ROOMS[nk] ? HM_ROOMS[nk].props.slice() : null);
save(); _hmRoomSwap(cid);
showToast('换到了' + HM_ROOMS[nk].n + '。');
_hmRoomTagShow(HM_ROOMS[nk].n);
return;
}
const tn = e.target.closest('[data-tone]');
if (tn) {
const o = _hmEnsure(cid);
o.look.tone = tn.dataset.tone || '';
save(); _hmSwap(() => { _hmApplyLook(); _hmRepaint(cid); _hmPaintDress(cid); });
return;
}
const hc = e.target.closest('[data-hmcolor]');
if (hc) {
const k = hc.getAttribute('data-hmcolor') || '';
if (['wall', 'floor', 'wood', 'line'].indexOf(k) < 0) return;
const o = _hmEnsure(cid);
o.look[k] = '';
save(); _hmApplyLook(); _hmPaintDress(cid);
return;
}
const gl = e.target.closest('[data-glow]');
if (gl) {
const o = _hmEnsure(cid);
o.look.glow = Math.min(30, Math.max(0, Math.round(+gl.getAttribute('data-glow') || 0)));
save(); _hmApplyLook(); _hmPaintDress(cid);
return;
}
const hs = e.target.closest('[data-hmset]');
if (hs) { _hmSetOpen(); return; }
const cmd = e.target.closest('[data-hmcmd]');
if (!cmd) return;
const c = cmd.dataset.hmcmd;
if (c === 'shot') { try { _hmShotRoom(cid, 'room'); } catch (e) {} return; }
if (c === 'shotpage') { try { _hmShotRoom(cid, 'page'); } catch (e) {} return; }
if (c === 'hmrandom') {
const o = _hmEnsure(cid);
const pool = HM_SKINS.filter(s => s.k !== (o.look.skin || ''));
const def = pool[Math.floor(Math.random() * pool.length)] || HM_SKINS[0];
o.look.skin = def.k; o.look.tone = def.tone; o.look.glow = def.glow;
o.look.wall = ''; o.look.floor = ''; o.look.wood = ''; o.look.line = '';
save(); _hmSwap(() => { _hmApplyLook(); _hmRepaint(cid); _hmPaintDress(cid); });
showToast('换了一套：' + def.n);
return;
}
if (c === 'photoswap') {
const rk = _hmRoomOf(cid);
const ps = _hmPhotosOf(cid, rk).slice();
if (ps.length < 2) { showToast('这面墙至少两张才能换位。'); return; }
ps.push(ps.shift());
_hmPhotosSet(cid, rk, ps); save(); _hmRepaint(cid); _hmPaintDress(cid);
const box = document.querySelector('#hmStage .hm-photos');
if (box) { box.classList.add('is-swap'); setTimeout(() => { if (box) box.classList.remove('is-swap'); }, 340); }
showToast('换了个位置。');
return;
}
if (c === 'photopick') { _hmPhotoPick(cid); return; }
if (c === 'favcard') { _hmPickOpen(cid, 'fav'); return; }
if (c === 'favphoto') { _hmPickOpen(cid, 'favphoto'); return; }
if (c === 'photoclear') {
const rk = _hmRoomOf(cid);
const i = Math.max(0, +cmd.dataset.i || 0);
const ps = _hmPhotosOf(cid, rk);
if (i < ps.length) {
ps.splice(i, 1);
_hmPhotosSet(cid, rk, ps);
save(); _hmRepaint(cid); _hmPaintDress(cid);
showToast('照片摘下来了。');
}
return;
}
if (c === 'bgpick') { const f = document.getElementById('hmFile'); if (f) f.click(); return; }
if (c === 'bgclear') {
const o = _hmEnsure(cid);
o.look.bg = ''; o.look.bgLuma = null;
save(); _hmSwap(() => { _hmApplyLook(); _hmRepaint(cid); _hmPaintDress(cid); });
return;
}
if (c === 'hmreset') {
const o = _hmEnsure(cid);
o.look = _hmLookDefault();
save(); _hmSwap(() => { _hmApplyLook(); _hmRepaint(cid); _hmPaintDress(cid); });
return;
}
}
function _hmBind(page, cid) {
if (!page || !cid) return;
const _hmClick = e => _hmCommand(e, cid);
page.onclick = _hmClick;
const setMask = document.getElementById('hmSetMask');
if (setMask) setMask.onclick = _hmClick;
const pickMask = document.getElementById('hmPickMask');
if (pickMask) pickMask.onclick = _hmClick;
const pickClose = document.getElementById('hmPickClose');
if (pickClose) pickClose.onclick = () => _hmPickClose();
const setBtn = document.getElementById('hmSetBtn');
if (setBtn) setBtn.onclick = () => _hmSetOpen();
const setClose = document.getElementById('hmSetClose');
if (setClose) setClose.onclick = () => _hmSetClose();
_hmBindPlantInput(cid);
_hmBindPhotoNote(cid);
const toneInp = document.getElementById('hmTone');
if (toneInp && !toneInp._hmBound) {
toneInp._hmBound = 1;
toneInp.addEventListener('input', () => {
if (!/^#[0-9a-fA-F]{6}$/.test(toneInp.value)) return;
const o = _hmEnsure(cid);
o.look.tone = toneInp.value;
save(); _hmApplyLook();
});
}
const glowInp = document.getElementById('hmGlow');
if (glowInp && !glowInp._hmBound) {
glowInp._hmBound = 1;
glowInp.addEventListener('input', () => {
const o = _hmEnsure(cid);
const v = Number(glowInp.value);
o.look.glow = isFinite(v) ? Math.min(30, Math.max(0, Math.round(v))) : 0;
save(); _hmApplyLook();
});
}
const fileInp = document.getElementById('hmFile');
if (fileInp && !fileInp._hmBound) {
fileInp._hmBound = 1;
fileInp.addEventListener('change', () => {
const f = fileInp.files && fileInp.files[0];
fileInp.value = '';
if (!f) return;
const rd = new FileReader();
rd.onload = () => {
const put = img => {
const o = _hmEnsure(cid);
o.look.bg = img;
save(); _hmSwap(() => { _hmApplyLook(); _hmRepaint(cid); _hmPaintDress(cid); });
if (typeof _imgLuma === 'function') {
try {
_imgLuma(img).then(l => {
o.look.bgLuma = (typeof l === 'number' && isFinite(l)) ? Math.round(l * 1000) / 1000 : null;
save(); _hmApplyLook();
}).catch(() => {});
} catch (e) {}
}
};
if (typeof compressImageDataURL === 'function') compressImageDataURL(String(rd.result), 1600, 0.85).then(put);
else put(String(rd.result));
};
rd.readAsDataURL(f);
});
}
}
function homeApproach(cid) {
if (!cid || typeof _cjEntry !== 'function' || typeof _cjHist !== 'function' || typeof _cjHiding !== 'function') return;
const c = (data.contacts || []).find(x => x.id === cid);
if (!c || c.kind === 'group') return;
const root = (data.cjian && typeof data.cjian === 'object') ? data.cjian : null;
if (!root || root.enabled === false) return;
const en = _cjEntry(cid);
if (_cjHiding(en)) return;
const now = Date.now();
if (en.p !== 'near') {
en.p = 'near'; en.sinceP = now;
if (typeof _cjRollDir === 'function') { en.dir = _cjRollDir('near'); en.sinceD = now; }
}
const hist = Array.isArray(en.hist) ? en.hist : [];
let lastN = null;
for (let i = hist.length - 1; i >= 0; i--) { if (hist[i] && hist[i].k === 'n') { lastN = hist[i]; break; } }
if (!lastN || now - (lastN.ts || 0) >= 30 * 60000) {
_cjHist(cid, { k: 'n', t: '……你来到了我们的家。', ts: now });
save();
}
}
function _hmStagePaint(cid, en) {
const art = document.getElementById('hmStageArt');
if (art) {
const away = (typeof _cjHiding === 'function' && _cjHiding(en));
const act = away ? 'away' : ((en && en.a && HM_ACT_OBJ[en.a]) ? en.a : 'unknown');
const rk = _hmRoomOf(cid);
const room = HM_ROOMS[rk];
const svg = (rk && room)
? '<svg ' + HM_ROOM_ATTR + '>' + room.base + ((room.vig && room.vig[act]) || HM_ROOM_VIG[act] || HM_ROOM_VIG.unknown) + HM_ROOM_GRAIN + '</svg>'
: (HM_SCENE_SVG[act] || HM_SCENE_SVG.unknown);
if (art.innerHTML !== svg) art.innerHTML = svg;
}
_hmBigsPaint(cid);
_hmShadowPaint(cid);
_hmFurnPaint(cid);
_hmPlantPaint(cid);
_hmTablePaint(cid, en);
_hmPhotosPaint(cid);
}
function _hmDepthK(footRoom) {
const t = Math.max(0, Math.min(1, (footRoom - 210) / (292 - 210)));
return 1 + t * 0.36;
}
function _hmBigsOf(cid) {
const rk = _hmRoomOf(cid);
const list = HM_ROOM_PIECES_LIST[rk] || HM_ROOM_PIECES_LIST[''];
const fx = HM_ROOM_FIXED[rk] || null;
return list.map(id => {
const pc = HM_ROOM_PIECES[id];
if (!pc) return null;
const fix = (fx && fx.pieces && fx.pieces[id]) ? fx.pieces[id] : null;
const bx = fix ? fix.slice() : pc.box.slice();
const isFoot = !!(fix && fix.length > 3 && fix[3] === 'foot');
const wRoom0 = bx[2];
const k = isFoot ? _hmDepthK(bx[1]) : 1;
const wRoom = wRoom0 * k;
const xRoom = bx[0] - (wRoom - wRoom0) / 2;
const vbp = String(_hmArtVb(id, pc) || '').trim().split(/\s+/);
const vbw = (+vbp[2]) || 1, vbh = (+vbp[3]) || 1;
const hRoom = wRoom * (vbh / vbw);
const hPct = hRoom / HM_ROOM_H * 100;
const x = Math.round((xRoom / HM_ROOM_W) * 1000) / 10;
const w = Math.round((wRoom / HM_ROOM_W) * 1000) / 10;
const yRaw = Math.round((bx[1] / HM_ROOM_H) * 1000) / 10;
const yy = Math.round((isFoot ? yRaw - hPct : yRaw) * 10) / 10;
return { id: id, x: x, y: yy, w: w, sc: 1,
h: Math.round(hPct * 10) / 10, foot: Math.round((yy + hPct) * 10) / 10,
vb: _hmArtVb(id, pc), svg: pc.svg };
}).filter(Boolean);
}
function _hmShadowPaint(cid) {
const host = document.getElementById('hmShadows');
if (!host) return;
const items = _hmBigsOf(cid);
const html = items.filter(p => HM_FLOOR_BIGS.indexOf(p.id) >= 0).map(p =>
'<span class="hm-shadow" style="left:' + (p.x + p.w / 2).toFixed(2) + '%;top:' + p.foot.toFixed(2)
+ '%;width:' + (p.w * 0.84).toFixed(2) + '%"></span>').join('');
if (host.innerHTML !== html) host.innerHTML = html;
}
var _hmArtVbCache = {};
function _hmArtVb(id, pc) {
if (pc.vb) return pc.vb;
if (_hmArtVbCache[id]) return _hmArtVbCache[id];
var vb = null;
try {
var s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
s.setAttribute('style', 'position:absolute;left:-99999px;top:0;width:2400px;height:2400px;visibility:hidden;pointer-events:none');
s.innerHTML = pc.svg || '';
document.body.appendChild(s);
var b = s.getBBox();
if (b && (b.width > 0 || b.height > 0)) vb = [b.x - 1, b.y - 1, b.width + 2, b.height + 2].join(' ');
s.remove();
} catch (e) { vb = null; }
_hmArtVbCache[id] = vb || (pc.box || []).join(' ');
return _hmArtVbCache[id];
}
function _hmBigsPaint(cid) {
const layer = document.getElementById('hmBigs');
if (!layer) return;
const items = _hmBigsOf(cid);
const html = items.map(p =>
'<svg class="hm-big" data-hmbig="' + p.id + '"' + (HM_GREEN_IDS.indexOf(p.id) >= 0 ? ' data-hmgreen="' + p.id + '"' : '') + ' viewBox="' + p.vb + '" preserveAspectRatio="xMinYMin meet" style="left:' + p.x + '%;top:' + p.y + '%;width:' + (p.w * p.sc) + '%" aria-hidden="true">' + p.svg + '</svg>').join('');
if (layer.innerHTML !== html) layer.innerHTML = html;
}
var _hmBigDrag = null;
function _hmPlaquePaint(cid) {
const el = document.getElementById('hmPlaque');
if (!el) return;
const rk = _hmRoomOf(cid);
const nm = rk ? (HM_ROOMS[rk] ? HM_ROOMS[rk].n : '') : '客厅';
const tx = rk ? nm : '客厅';
const sp = el.querySelector('span');
if (sp && sp.textContent !== tx) sp.textContent = tx;
el.hidden = false;
}
function _hmFootHTML() {
return '<div class="hm-foot">'
+ '<button type="button" class="hm-go" data-hmgo="chat">回聊天</button>'
+ '<span class="hm-dot" aria-hidden="true">·</span>'
+ '<button type="button" class="hm-go" data-hmgo="couple">去我们的空间</button>'
+ '</div>';
}
function renderHomePage() {
const page = document.getElementById('hmPage');
if (!page) return;
const host = document.getElementById('hmBody') || page;
const cid = _hmCid();
const ta = _hmContact();
const st = page.scrollTop;
if (!cid || !ta) {
_hmApplyLook();
_hmPageAttrs(null, '');
host.classList.remove('hm-anim');
const top0 = document.getElementById('hmBodyTop'); if (top0) top0.innerHTML = '';
const stg0 = document.getElementById('hmStage');
if (stg0) stg0.hidden = true;
host.innerHTML = '<div class="hm-none"><span class="e">'
+ '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="16" cy="24" r="6"/><path d="M22 24h18M34 24v6M40 24v4"/></svg>'
+ '</span><p>我们的家按联系人一份。<br>从一位联系人（单聊）的聊天页左滑进来，或回首页长按那一位会话、在动作单里点「我们的家」。</p>'
+ '<button type="button" class="hm-btn hm-none-go" data-hmgo="chats">去聊天页</button></div>';
page.onclick = e => _hmCommand(e, '');
const sb0 = document.getElementById('hmSetBtn');
if (sb0) sb0.hidden = true;
page.scrollTop = st;
return;
}
_hmApplyLook();
const stg1 = document.getElementById('hmStage');
if (stg1) stg1.hidden = false;
const sb1 = document.getElementById('hmSetBtn');
if (sb1) sb1.hidden = false;
if (typeof _cjEntry !== 'function' && typeof ensureChunk === 'function') {
ensureChunk('cjian', 9000).then(ok => { if (ok && typeof _cjEntry === 'function') _hmRepaint(cid); });
}
const visitN = _hmVisitBump(cid);
const en = (typeof _cjEntry === 'function') ? _cjEntry(cid) : null;
_hmPageAttrs(en, cid);
const hostTop = document.getElementById('hmBodyTop') || host;
hostTop.innerHTML = _hmHeroHTML(ta, cid, en, visitN);
host.innerHTML = _hmRoomsHTML(cid)
+ _hmLiveHTML(en, cid)
+ _hmPlantHTML(cid)
+ _hmDayHTML(cid, en) + _hmCalNoteHTML(cid) + _hmDoHTML(cid, en) + _hmFootHTML();
_hmStagePaint(cid, en);
_hmPlaquePaint(cid);
host.classList.add('hm-anim');
_hmPaintDress(cid);
_hmBind(page, cid);
_hmShotBind();
homeApproach(cid);
_hmNoteReplyTick(cid);
page.scrollTop = st;
if (!_hmLiveT) { _hmLiveT = 1; hb30Add(_hmLiveTick); }
if (!_hmCareT) { _hmCareT = 1; hb30Add(_hmCareTick); }
_hmCareTick();
}
var _hmLiveT = null;
function _hmLiveTick() {
if (document.body.dataset.view !== 'home') {
if (_hmLiveT) { hb30Del(_hmLiveTick); _hmLiveT = 0; }
_hmSitEnd(true);
return;
}
const cid = _hmCid();
if (!cid) return;
const en = (typeof _cjEntry === 'function') ? _cjEntry(cid) : null;
_hmPageAttrs(en, cid);
const host = document.getElementById('hmLiveSec');
if (!host) return;
const wrap = document.createElement('div');
wrap.innerHTML = _hmLiveHTML(en, cid);
const fresh = wrap.firstChild;
if (fresh && host.innerHTML !== fresh.innerHTML) {
host.innerHTML = fresh.innerHTML;
host.classList.remove('hm-fade');
void host.offsetWidth;
host.classList.add('hm-fade');
}
const actObj = document.querySelector('.hm-table .hm-actobj');
if (actObj) {
const away = (typeof _cjHiding === 'function' && _cjHiding(en));
const act = away ? 'away' : ((en && en.a && HM_ACT_OBJ[en.a]) ? en.a : 'unknown');
const obj = HM_ACT_OBJ[act] || HM_ACT_OBJ.unknown;
if (actObj.title !== obj.n) { actObj.innerHTML = obj.svg; actObj.title = obj.n; }
}
_hmStagePaint(cid, en);
_hmPlaquePaint(cid);
}
function _hmRepaint(cid) {
const page = document.getElementById('hmPage');
if (!page || document.body.dataset.view !== 'home') return;
const ta = _hmContact();
if (!ta || ta.id !== cid) return;
const host = document.getElementById('hmBody') || page;
const st = page.scrollTop;
host.classList.remove('hm-anim');
const en = (typeof _cjEntry === 'function') ? _cjEntry(cid) : null;
_hmPageAttrs(en, cid);
const hostTop2 = document.getElementById('hmBodyTop') || host;
hostTop2.innerHTML = _hmHeroHTML(ta, cid, en, (_hmVisit && _hmVisit.n) || 1);
host.innerHTML = _hmRoomsHTML(cid)
+ _hmLiveHTML(en, cid)
+ _hmPlantHTML(cid)
+ _hmDayHTML(cid, en) + _hmCalNoteHTML(cid) + _hmDoHTML(cid, en) + _hmFootHTML();
_hmStagePaint(cid, en);
_hmPlaquePaint(cid);
_hmPaintDress(cid);
_hmBind(page, cid);
_hmShotBind();
page.scrollTop = st;
}
(window.__CHUNK_OK__ = window.__CHUNK_OK__ || {})['home'] = true;
