// 本件由 tools/assemble.py 生成·勿手改：首屏 JS 分片（进这一页那一刻才取），源＝js/ 那些拆分件
var HM_SCENES = {
free:    '窗户开着，屋里亮堂，什么都是慢慢来的样子。',
busy:    '桌上那盏台灯亮着，TA 在忙手头的事。',
rushed:  '屋子里的动静有点急，脚步声一趟一趟的。',
rest:    '灯暗了一半，TA 在里屋歇着。',
sleep:   '灯全灭了，门虚掩着，屋里只剩钟走的声音。',
unknown: '屋里静悄悄的，看不出动静。'
};
var HM_ROOM_SCENES = {
'':       ['窗开着，客厅里过堂风慢慢转。', '沙发上还留着刚坐过的印子。'],
bed:      ['被子掀开一角，窗帘没拉严。', '床头的灯留着，屋里很安静。'],
study:    ['书还摊着，笔搁在最后一行。', '窗边那把椅子坐过人了。'],
kitchen:  ['锅还温着，桌上摆了两只碗。', '灶台擦过了，屋里有点饭香。'],
dining:   ['碗筷摆了两副，灯是暖的那盏。', '桌上还剩半杯没喝完的水。'],
bath:     ['水汽还没散，镜子有点雾。', '毛巾搭在架子上，地上还是湿的。'],
balcony:  ['栏杆外面天已经暗下来了。', '晾着的衣服被风吹得轻轻晃。'],
entry:    ['门口的灯亮着，鞋摆了两双。', '门虚掩着，风从门缝里进来。']
};
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
+ '<stop offset="0" stop-color="#6b4a33" stop-opacity=".20"/>'
+ '<stop offset="1" stop-color="#6b4a33" stop-opacity="0"/></linearGradient>'
+ '<filter id="hmSoft" x="-30%" y="-30%" width="160%" height="170%">'
+ '<feDropShadow dx="1.5" dy="3" stdDeviation="2" flood-color="#6b4a33" flood-opacity=".14"/></filter>'
+ '<filter id="hmLift" x="-25%" y="-25%" width="160%" height="175%">'
+ '<feDropShadow dx="6" dy="8" stdDeviation="0" flood-color="#6b4a33" flood-opacity=".12"/>'
+ '<feDropShadow dx="1" dy="2.5" stdDeviation="1.5" flood-color="#6b4a33" flood-opacity=".16"/></filter>'
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
+ '<rect class="hm-r-rail" x="0" y="155" width="340" height="3" rx="1.5"/>';
var HM_ROOM_FLOOR = ''
+ '<path class="hm-r-floor" d="M0 206C40 201 74 209 112 205S188 210 228 205 306 208 340 204V310H0Z"/>'
+ '<rect class="hm-r-baseband" x="0" y="201" width="340" height="7"/>'
+ '<path class="hm-r-base" d="M0 206C40 201 74 209 112 205S188 210 228 205 306 208 340 204"/>'
+ '<path class="hm-r-plank" d="M62 212v92M142 208v98M222 212v92M302 208v98"/>'
+ '<path class="hm-r-board" d="M0 258h340"/>'
+ '<rect x="0" y="206" width="340" height="52" fill="url(#hmFloorSh)"/>';
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
return '<g filter="url(#hmLift)">'
+ '<rect class="hm-r-frame" x="' + (x - fr) + '" y="' + (y - fr) + '" width="' + (w + fr * 2) + '" height="' + (h + fr * 2) + '" rx="5"/>'
+ '<rect class="hm-r-glass" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="3"/>'
+ _hmSkyRel(x, y, w, h)
+ mul + sill
+ '</g>' + curtain;
}
function _hmRoundWin(o) {
const cx = o.x + o.w / 2, cy = o.y + o.h / 2, r = Math.min(o.w, o.h) / 2;
return '<g filter="url(#hmLift)">'
+ '<circle class="hm-r-frame" cx="' + cx + '" cy="' + cy + '" r="' + (r + 8) + '"/>'
+ '<circle class="hm-r-glass" cx="' + cx + '" cy="' + cy + '" r="' + r + '"/>'
+ '<path class="hm-r-cloud" d="M' + (cx - 22) + ' ' + (cy - 6) + 'c0-5 4-8 8-6 2-4 8-5 11-1 5-1 8 2 8 5 0 3-3 5-6 5h-16c-3 0-5-2-5-5Z"/>'
+ '<rect class="hm-r-mull" x="' + (cx - 1.5) + '" y="' + (cy - r) + '" width="3" height="' + (r * 2) + '" rx="1"/>'
+ '<rect class="hm-r-mull" x="' + (cx - r) + '" y="' + (cy - 1.5) + '" width="' + (r * 2) + '" height="3" rx="1"/>'
+ '</g>';
}
function _hmTwinWin(o) {
const x = o.x, y = o.y, w = o.w, h = o.h, gap = o.gap || 12;
const cw = (w - gap) / 2;
const one = (px) => '<g filter="url(#hmLift)">'
+ '<rect class="hm-r-frame" x="' + (px - 7) + '" y="' + (y - 7) + '" width="' + (cw + 14) + '" height="' + (h + 14) + '" rx="5"/>'
+ '<rect class="hm-r-glass" x="' + px + '" y="' + y + '" width="' + cw + '" height="' + h + '" rx="3"/>'
+ '<rect class="hm-r-mull" x="' + (px + cw / 2 - 1.5) + '" y="' + y + '" width="3" height="' + h + '" rx="1"/>'
+ '<rect class="hm-r-mull" x="' + px + '" y="' + (y + h / 2 - 1.5) + '" width="' + cw + '" height="3" rx="1"/>'
+ '<rect class="hm-r-sill" x="' + (px - 10) + '" y="' + (y + h + 6) + '" width="' + (cw + 20) + '" height="9" rx="3"/>'
+ '</g>';
return one(x) + one(x + cw + gap)
+ '<g filter="url(#hmSoft)"><path class="hm-r-curtain" d="M' + (x - 16) + ' ' + (y - 6) + 'h18c2 40 1 74-3 92-6 3-10 3-15 0-3-22-3-48 0-92Z"/></g>';
}
var HM_ROOM_WIN_LIVING = _hmWin({ x: 20, y: 30, w: 128, h: 150, pane: 'v', cw: 30 });
var HM_ROOM_WIN_BED = _hmWin({ x: 34, y: 34, w: 104, h: 96, pane: 'twin', gap: 14 });
var HM_ROOM_WIN_STUDY = _hmWin({ x: 30, y: 30, w: 116, h: 116, pane: 'grid', cw: 24 });
var HM_ROOM_WIN_KITCHEN = _hmWin({ x: 48, y: 34, w: 78, h: 64, pane: 'h', curtain: false });
var HM_ROOM_WIN_DINING = _hmWin({ x: 52, y: 30, w: 104, h: 104, pane: 'round' });
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
+ '<path class="hm-r-flag2" d="M246 34l11 1-5 13Z"/>'
+ '<path class="hm-r-flag" d="M273 35l11-1-4 13Z"/>'
+ '<path class="hm-r-flag2" d="M300 32l11-2-3 13Z"/>'
+ '<g filter="url(#hmLift)">'
+ '<rect class="hm-r-frame" x="226" y="46" width="34" height="42" rx="3"/>'
+ '<rect class="hm-r-vig-soft" x="231" y="51" width="24" height="32" rx="2"/>'
+ '<circle class="hm-r-bulb" cx="247" cy="60" r="4"/>'
+ '<path class="hm-r-hill" d="M231 74c4-5 8-5 12-1 3-3 7-3 12 0v10h-24Z"/>'
+ '<rect class="hm-r-frame" x="272" y="60" width="26" height="34" rx="3"/>'
+ '<rect class="hm-r-vig-soft" x="276" y="64" width="18" height="26" rx="2"/>'
+ '<path class="hm-r-leaf" d="M285 86c-4-3-5-8-2-12 3 2 4 7 2 12Z"/>'
+ '<path class="hm-r-leaf-deep" d="M285 86c4-3 5-8 2-12-3 2-4 7-2 12Z"/>'
+ '</g>';
var HM_ROOM_TABLE = ''
+ '<g filter="url(#hmLift)">'
+ '<rect class="hm-r-table" x="36" y="176" width="98" height="9" rx="3"/>'
+ '<rect class="hm-r-table" x="42" y="185" width="86" height="4" rx="2"/>'
+ '<rect class="hm-r-table" x="43" y="189" width="6" height="21" rx="2"/>'
+ '<rect class="hm-r-table" x="121" y="189" width="6" height="21" rx="2"/>'
+ '<rect class="hm-r-table-soft" x="50" y="193" width="70" height="3" rx="1.5"/>'
+ '</g>';
var HM_ROOM_DECOR_BED = ''
+ '<path class="hm-r-cord" d="M210 26Q270 40 330 30"/>'
+ '<g filter="url(#hmLift)">'
+ '<circle class="hm-r-frame" cx="274" cy="72" r="20"/>'
+ '<circle class="hm-r-vig-soft" cx="274" cy="72" r="15"/>'
+ '<path class="hm-r-leaf" d="M268 78c-3-4-3-9 0-13 3 4 3 9 0 13Z"/>'
+ '<rect class="hm-r-frame" x="226" y="52" width="22" height="28" rx="3"/>'
+ '<rect class="hm-r-vig-soft" x="230" y="56" width="14" height="20" rx="2"/>'
+ '<circle class="hm-r-bulb" cx="237" cy="63" r="3"/>'
+ '</g>';
var HM_ROOM_DRESSER = ''
+ '<g filter="url(#hmLift)">'
+ '<rect class="hm-r-table" x="36" y="176" width="98" height="9" rx="3"/>'
+ '<rect class="hm-r-table" x="40" y="185" width="90" height="23" rx="3"/>'
+ '<rect class="hm-r-table-soft" x="46" y="190" width="36" height="6" rx="2"/>'
+ '<rect class="hm-r-table-soft" x="88" y="190" width="36" height="6" rx="2"/>'
+ '<circle class="hm-r-vig" cx="64" cy="193" r="1.3"/>'
+ '<circle class="hm-r-vig" cx="106" cy="193" r="1.3"/>'
+ '<rect class="hm-r-table" x="42" y="205" width="6" height="5" rx="2"/>'
+ '<rect class="hm-r-table" x="122" y="205" width="6" height="5" rx="2"/>'
+ '</g>';
var HM_ROOM_BED = ''
+ '<g filter="url(#hmLift)">'
+ '<rect class="hm-r-vig" x="226" y="168" width="8" height="40" rx="3"/>'
+ '<rect class="hm-r-vig" x="230" y="186" width="72" height="16" rx="3"/>'
+ '<rect class="hm-r-vig-soft" x="234" y="180" width="64" height="10" rx="3"/>'
+ '<rect class="hm-r-vig-soft" x="236" y="174" width="20" height="9" rx="3"/>'
+ '<path class="hm-r-vig" d="M262 182h36v8h-36Z"/>'
+ '<rect class="hm-r-vig" x="296" y="186" width="6" height="22" rx="2"/>'
+ '</g>';
var HM_ROOM_NIGHTSTAND = ''
+ '<g filter="url(#hmSoft)">'
+ '<rect class="hm-r-table" x="204" y="188" width="20" height="18" rx="2"/>'
+ '<rect class="hm-r-table-soft" x="207" y="192" width="14" height="5" rx="1.5"/>'
+ '<path class="hm-r-cord" d="M214 188v-8"/>'
+ '<path class="hm-r-shade" d="M208 180h12l-2-6h-8Z"/>'
+ '<circle class="hm-r-bulb" cx="214" cy="181" r="2.5"/>'
+ '</g>';
var HM_ROOM_BASE = HM_ROOM_DEFS + HM_ROOM_SHELL + HM_ROOM_FLOOR;
var HM_ROOM_DECOR_STUDY = ''
+ '<path class="hm-r-cord" d="M214 24Q272 38 330 26"/>'
+ '<g filter="url(#hmLift)">'
+ '<rect class="hm-r-frame" x="232" y="48" width="30" height="38" rx="3"/>'
+ '<rect class="hm-r-vig-soft" x="237" y="53" width="20" height="28" rx="2"/>'
+ '<path class="hm-r-leaf" d="M247 74c-4-3-5-8-2-12 3 2 4 7 2 12Z"/>'
+ '<rect class="hm-r-frame" x="276" y="58" width="24" height="30" rx="3"/>'
+ '<rect class="hm-r-vig-soft" x="280" y="62" width="16" height="22" rx="2"/>'
+ '<path class="hm-r-hill" d="M280 78c3-4 6-4 9-1 2-2 5-2 7 0v7h-16Z"/>'
+ '</g>';
var HM_ROOM_DESK = ''
+ '<g filter="url(#hmLift)">'
+ '<rect class="hm-r-table" x="36" y="176" width="98" height="9" rx="3"/>'
+ '<rect class="hm-r-table" x="42" y="185" width="86" height="4" rx="2"/>'
+ '<rect class="hm-r-table" x="43" y="189" width="6" height="21" rx="2"/>'
+ '<rect class="hm-r-table" x="121" y="189" width="6" height="21" rx="2"/>'
+ '<rect class="hm-r-table-soft" x="92" y="189" width="28" height="12" rx="2"/>'
+ '<circle class="hm-r-vig" cx="106" cy="195" r="1.3"/>'
+ '</g>';
var HM_ROOM_BOOKCASE = ''
+ '<g filter="url(#hmLift)">'
+ '<rect class="hm-r-table" x="248" y="150" width="50" height="58" rx="3"/>'
+ '<rect class="hm-r-table-soft" x="253" y="156" width="40" height="12" rx="2"/>'
+ '<rect class="hm-r-table-soft" x="253" y="172" width="40" height="12" rx="2"/>'
+ '<rect class="hm-r-table-soft" x="253" y="188" width="40" height="12" rx="2"/>'
+ '<rect class="hm-r-vig" x="256" y="157" width="3" height="10" rx="1"/>'
+ '<rect class="hm-r-vig-soft" x="261" y="158" width="3" height="9" rx="1"/>'
+ '<rect class="hm-r-vig" x="266" y="156" width="3" height="11" rx="1"/>'
+ '<rect class="hm-r-vig-soft" x="271" y="158" width="4" height="9" rx="1"/>'
+ '<rect class="hm-r-vig" x="256" y="173" width="4" height="10" rx="1"/>'
+ '<rect class="hm-r-vig-soft" x="262" y="174" width="3" height="9" rx="1"/>'
+ '<rect class="hm-r-vig" x="267" y="172" width="3" height="11" rx="1"/>'
+ '<rect class="hm-r-vig-soft" x="272" y="174" width="4" height="9" rx="1"/>'
+ '<rect class="hm-r-vig" x="256" y="189" width="3" height="10" rx="1"/>'
+ '<rect class="hm-r-vig-soft" x="261" y="190" width="4" height="9" rx="1"/>'
+ '<rect class="hm-r-vig" x="267" y="188" width="3" height="11" rx="1"/>'
+ '</g>';
var HM_ROOM_BASE_BED = HM_ROOM_DEFS + HM_ROOM_SHELL + HM_ROOM_FLOOR;
var HM_ROOM_GRAIN = '<rect width="340" height="310" filter="url(#hmPaperGrain)" opacity=".1" style="mix-blend-mode:multiply"/>';
var HM_ROOM_VIG = {
free:    '<g filter="url(#hmLift)"><ellipse class="hm-r-vig-soft" cx="62" cy="175" rx="11" ry="2.5"/><path class="hm-r-vig" d="M54 159h16v9a8 8 0 0 1-16 0Z"/><path class="hm-r-vig-soft" d="M70 161h3a3.5 3.5 0 0 1 0 7h-3Z"/><path class="hm-r-steam" d="M58 154c-2-2 2-3 0-6M64 154c-2-2 2-3 0-6"/></g>',
busy:    '<g filter="url(#hmLift)"><ellipse class="hm-r-lampglow" cx="58" cy="173" rx="13" ry="4"/><rect class="hm-r-vig" x="47" y="172" width="20" height="4" rx="2"/><rect class="hm-r-vig-soft" x="56" y="160" width="3" height="12"/><path class="hm-r-vig" d="M49 160h17l-3-11H52Z"/></g>',
rushed:  '<g filter="url(#hmLift)"><rect class="hm-r-vig" x="193" y="47" width="6" height="4" rx="2"/><circle class="hm-r-vig" cx="196" cy="66" r="16"/><circle class="hm-r-vig-soft" cx="196" cy="66" r="12"/><path class="hm-r-clockhand" d="M196 59v7l5 4"/></g>',
rest:    '<g filter="url(#hmLift)"><path class="hm-r-vig" d="M250 206v-26a13 13 0 0 1 13-13h12a13 13 0 0 1 13 13v26Z"/><rect class="hm-r-vig-soft" x="255" y="185" width="28" height="9" rx="4"/></g>',
sleep:   '<g filter="url(#hmLift)"><rect class="hm-r-vig" x="242" y="177" width="8" height="29" rx="3"/><rect class="hm-r-vig" x="244" y="192" width="54" height="14" rx="3"/><rect class="hm-r-vig-soft" x="251" y="185" width="16" height="8" rx="3"/><rect class="hm-r-vig" x="267" y="189" width="31" height="9" rx="2"/><path class="hm-r-steam" d="M267 193h31"/></g>',
unknown: '<g filter="url(#hmLift)"><rect class="hm-r-vig" x="259" y="177" width="36" height="5" rx="2"/><rect class="hm-r-vig" x="262" y="182" width="30" height="24" rx="3"/><rect class="hm-r-vig-soft" x="266" y="186" width="22" height="7" rx="2"/><rect class="hm-r-vig-soft" x="266" y="196" width="22" height="7" rx="2"/><circle class="hm-r-vig" cx="277" cy="189.5" r="1.5"/><circle class="hm-r-vig" cx="277" cy="199.5" r="1.5"/></g>',
away:    '<g filter="url(#hmLift)"><rect class="hm-r-vig" x="306" y="148" width="28" height="58" rx="3"/><rect class="hm-r-vig-soft" x="310" y="152" width="20" height="50" rx="2"/><path class="hm-r-doorlight" d="M330 150l4-2v58h-4Z"/><circle class="hm-r-vig" cx="314" cy="180" r="1.8"/></g>'
};
var HM_SCENE_SVG = {
free:    '<svg ' + HM_ROOM_ATTR + '>' + HM_ROOM_BASE + HM_ROOM_VIG.free + HM_ROOM_GRAIN + '</svg>',
busy:    '<svg ' + HM_ROOM_ATTR + '>' + HM_ROOM_BASE + HM_ROOM_VIG.busy + HM_ROOM_GRAIN + '</svg>',
rushed:  '<svg ' + HM_ROOM_ATTR + '>' + HM_ROOM_BASE + HM_ROOM_VIG.rushed + HM_ROOM_GRAIN + '</svg>',
rest:    '<svg ' + HM_ROOM_ATTR + '>' + HM_ROOM_BASE + HM_ROOM_VIG.rest + HM_ROOM_GRAIN + '</svg>',
sleep:   '<svg ' + HM_ROOM_ATTR + '>' + HM_ROOM_BASE + HM_ROOM_VIG.sleep + HM_ROOM_GRAIN + '</svg>',
unknown: '<svg ' + HM_ROOM_ATTR + '>' + HM_ROOM_BASE + HM_ROOM_VIG.unknown + HM_ROOM_GRAIN + '</svg>',
away:    '<svg ' + HM_ROOM_ATTR + '>' + HM_ROOM_BASE + HM_ROOM_VIG.away + HM_ROOM_GRAIN + '</svg>'
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
+ '<path class="hm-r-cord" d="M212 26Q270 40 330 28"/>'
+ '<g filter="url(#hmLift)">'
+ '<rect class="hm-r-table" x="226" y="34" width="74" height="26" rx="3"/>'
+ '<rect class="hm-r-table-soft" x="232" y="40" width="28" height="14" rx="2"/>'
+ '<rect class="hm-r-table-soft" x="266" y="40" width="28" height="14" rx="2"/>'
+ '<circle class="hm-r-vig" cx="242" cy="47" r="1.2"/>'
+ '<circle class="hm-r-vig" cx="280" cy="47" r="1.2"/>'
+ '</g>'
+ '<g filter="url(#hmSoft)">'
+ '<path class="hm-r-cord" d="M244 66v8"/>'
+ '<path class="hm-r-pot" d="M239 74h10l-1.6 9h-6.8Z"/>'
+ '<path class="hm-r-cord" d="M264 66v10"/>'
+ '<path class="hm-r-pot" d="M259 76h10l-1.6 9h-6.8Z"/>'
+ '</g>';
var HM_ROOM_COUNTER = ''
+ '<g filter="url(#hmLift)">'
+ '<rect class="hm-r-table" x="36" y="176" width="98" height="9" rx="3"/>'
+ '<rect class="hm-r-table" x="40" y="185" width="90" height="23" rx="3"/>'
+ '<rect class="hm-r-table-soft" x="46" y="189" width="36" height="13" rx="2"/>'
+ '<circle class="hm-r-vig" cx="56" cy="195.5" r="2.6"/>'
+ '<circle class="hm-r-vig" cx="72" cy="195.5" r="2.6"/>'
+ '<rect class="hm-r-vig-soft" x="90" y="189" width="34" height="13" rx="2"/>'
+ '</g>';
var HM_ROOM_DECOR_DINING = ''
+ '<path class="hm-r-cord" d="M210 26Q270 42 330 28"/>'
+ '<g filter="url(#hmLift)">'
+ '<circle class="hm-r-frame" cx="240" cy="52" r="13"/>'
+ '<circle class="hm-r-vig-soft" cx="240" cy="52" r="9"/>'
+ '<circle class="hm-r-frame" cx="272" cy="56" r="11"/>'
+ '<circle class="hm-r-vig-soft" cx="272" cy="56" r="7.5"/>'
+ '<circle class="hm-r-frame" cx="300" cy="50" r="10"/>'
+ '<circle class="hm-r-vig-soft" cx="300" cy="50" r="6.5"/>'
+ '</g>';
var HM_ROOM_SIDEBOARD = ''
+ '<g filter="url(#hmLift)">'
+ '<rect class="hm-r-table" x="36" y="176" width="98" height="9" rx="3"/>'
+ '<rect class="hm-r-table" x="40" y="185" width="90" height="23" rx="3"/>'
+ '<rect class="hm-r-table-soft" x="46" y="190" width="36" height="12" rx="2"/>'
+ '<rect class="hm-r-table-soft" x="88" y="190" width="36" height="12" rx="2"/>'
+ '<circle class="hm-r-vig" cx="64" cy="196" r="1.3"/>'
+ '<circle class="hm-r-vig" cx="110" cy="196" r="1.3"/>'
+ '<rect class="hm-r-table" x="42" y="205" width="6" height="5" rx="2"/>'
+ '<rect class="hm-r-table" x="122" y="205" width="6" height="5" rx="2"/>'
+ '<path class="hm-r-pot" d="M60 170h10l-1.6 7h-6.8Z"/>'
+ '<path class="hm-r-leaf" d="M65 170c-4-3-5-8-2-11 3 2 4 7 2 11Z"/>'
+ '</g>';
var HM_ROOM_DECOR_BATH = ''
+ '<g filter="url(#hmLift)">'
+ '<rect class="hm-r-frame" x="234" y="32" width="36" height="42" rx="4"/>'
+ '<rect class="hm-r-vig-soft" x="239" y="37" width="26" height="32" rx="3"/>'
+ '<path class="hm-r-cord" d="M238 82h28"/>'
+ '<rect class="hm-r-table-soft" x="243" y="82" width="9" height="17" rx="2"/>'
+ '<rect class="hm-r-table-soft" x="255" y="82" width="9" height="17" rx="2"/>'
+ '</g>';
var HM_ROOM_WASHSTAND = ''
+ '<g filter="url(#hmLift)">'
+ '<rect class="hm-r-table" x="36" y="176" width="98" height="9" rx="3"/>'
+ '<ellipse class="hm-r-vig" cx="62" cy="172" rx="17" ry="5.5"/>'
+ '<ellipse class="hm-r-vig-soft" cx="62" cy="173" rx="12" ry="3.4"/>'
+ '<path class="hm-r-vig" d="M62 172v-9M57 163h10"/>'
+ '<rect class="hm-r-table" x="40" y="185" width="90" height="23" rx="3"/>'
+ '<rect class="hm-r-table-soft" x="92" y="190" width="32" height="12" rx="2"/>'
+ '</g>';
var HM_ROOM_WALLTILE = ''
+ '<g opacity=".55">'
+ '<path class="hm-r-plank" d="M0 62h340M0 94h340M0 126h340M0 158h340"/>'
+ '<path class="hm-r-plank" d="M28 30v32M84 30v32M140 30v32M196 30v32M252 30v32M308 30v32M0 62v32M56 62v32M112 62v32M168 62v32M224 62v32M280 62v32M336 62v32M28 94v32M84 94v32M140 94v32M196 94v32M252 94v32M308 94v32"/>'
+ '</g>';
var HM_ROOM_TILE = ''
+ '<path class="hm-r-plank" d="M0 236h340M0 272h340M28 206v104M76 206v104M124 206v104M172 206v104M220 206v104M268 206v104M316 206v104"/>';
var HM_ROOM_DECOR_BALCONY = ''
+ '<path class="hm-r-cord" d="M204 30Q268 48 334 26"/>'
+ '<g filter="url(#hmSoft)">'
+ '<rect class="hm-r-table-soft" x="226" y="42" width="18" height="28" rx="3"/>'
+ '<rect class="hm-r-table-soft" x="252" y="46" width="16" height="24" rx="3"/>'
+ '<rect class="hm-r-table-soft" x="276" y="40" width="20" height="30" rx="3"/>'
+ '</g>'
+ '<g filter="url(#hmLift)">'
+ '<rect class="hm-r-pot" x="252" y="70" width="24" height="12" rx="2"/>'
+ '<path class="hm-r-leaf" d="M258 70c-4-4-5-9-2-12 3 2 4 7 2 12Z"/>'
+ '<path class="hm-r-leaf-deep" d="M270 70c4-5 5-10 2-13-3 3-4 8-2 13Z"/>'
+ '</g>';
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
var HM_ROOM_SHOECAB = ''
+ '<g filter="url(#hmLift)">'
+ '<rect class="hm-r-table" x="36" y="176" width="98" height="9" rx="3"/>'
+ '<rect class="hm-r-table" x="40" y="185" width="90" height="23" rx="3"/>'
+ '<rect class="hm-r-table-soft" x="46" y="190" width="36" height="12" rx="2"/>'
+ '<rect class="hm-r-table-soft" x="88" y="190" width="36" height="12" rx="2"/>'
+ '<circle class="hm-r-vig" cx="64" cy="196" r="1.3"/>'
+ '<circle class="hm-r-vig" cx="106" cy="196" r="1.3"/>'
+ '</g>';
var HM_ROOM_BASE_STUDY = HM_ROOM_DEFS + HM_ROOM_SHELL + HM_ROOM_FLOOR;
var HM_ROOM_BASE_KITCHEN = HM_ROOM_DEFS + HM_ROOM_SHELL + HM_ROOM_FLOOR + HM_ROOM_CHECKER;
var HM_ROOM_BASE_DINING = HM_ROOM_DEFS + HM_ROOM_SHELL + HM_ROOM_FLOOR;
var HM_ROOM_BASE_BATH = HM_ROOM_DEFS + HM_ROOM_SHELL + HM_ROOM_FLOOR + HM_ROOM_TILE + HM_ROOM_WALLTILE;
var HM_ROOM_BASE_BALCONY = HM_ROOM_DEFS + HM_ROOM_BALCONY_SHELL + HM_ROOM_DECK;
var HM_ROOM_BASE_ENTRY = HM_ROOM_DEFS + HM_ROOM_SHELL + HM_ROOM_FLOOR + HM_ROOM_WAINSCOT;
var HM_ROOM_LAMPS = {
lampCeil:  '<g filter="url(#hmSoft)"><path class="hm-r-cord" d="M170 0v6"/><ellipse class="hm-r-bulb" cx="170" cy="9" rx="17" ry="5"/><ellipse class="hm-r-lampglow" cx="170" cy="14" rx="24" ry="8"/></g>',
lampDining:'<g filter="url(#hmSoft)"><path class="hm-r-cord" d="M170 0v28"/><path class="hm-r-shade" d="M155 44h30l-6-16h-18Z"/><ellipse class="hm-r-lampglow" cx="170" cy="46" rx="14" ry="5"/></g>',
lampWall: '<g filter="url(#hmSoft)"><rect class="hm-r-frame" x="300" y="34" width="6" height="16" rx="2"/><path class="hm-r-shade" d="M288 50h18l-4-8h-10Z"/><ellipse class="hm-r-lampglow" cx="297" cy="52" rx="10" ry="4"/></g>'
};
var HM_ROOM_MATS = {
rugL:   '<g filter="url(#hmSoft)"><rect class="hm-r-rug" x="96" y="222" width="150" height="48" rx="18"/><rect class="hm-r-rugb" x="106" y="231" width="130" height="30" rx="12"/><rect class="hm-r-rugp" x="158" y="240" width="30" height="12" rx="6"/></g>',
rugBed: '<g filter="url(#hmSoft)"><rect class="hm-r-rug" x="216" y="244" width="86" height="26" rx="11"/><rect class="hm-r-rugb" x="224" y="250" width="70" height="14" rx="6"/></g>',
matK:   '<g filter="url(#hmSoft)"><rect class="hm-r-rug" x="44" y="252" width="64" height="22" rx="8"/><rect class="hm-r-rugb" x="52" y="257" width="48" height="12" rx="5"/></g>',
rugD:   '<g filter="url(#hmSoft)"><ellipse class="hm-r-rug" cx="172" cy="246" rx="66" ry="26"/><ellipse class="hm-r-rugb" cx="172" cy="246" rx="50" ry="18"/></g>',
matB:   '<g filter="url(#hmSoft)"><rect class="hm-r-rug" x="46" y="256" width="58" height="18" rx="8"/><rect class="hm-r-rugb" x="53" y="261" width="44" height="9" rx="4"/></g>',
matE:   '<g filter="url(#hmSoft)"><rect class="hm-r-rug" x="52" y="258" width="54" height="16" rx="6"/><rect class="hm-r-rugb" x="60" y="262" width="38" height="8" rx="4"/></g>'
};
var HM_ROOM_DOOR = ''
+ '<g filter="url(#hmLift)">'
+ '<rect class="hm-r-frame" x="64" y="98" width="76" height="110" rx="3"/>'
+ '<rect class="hm-r-vig-soft" x="70" y="104" width="64" height="98" rx="2"/>'
+ '<rect class="hm-r-table-soft" x="78" y="112" width="48" height="42" rx="2"/>'
+ '<circle class="hm-r-vig" cx="126" cy="160" r="2.6"/>'
+ '<rect class="hm-r-table-soft" x="56" y="204" width="92" height="6" rx="2"/>'
+ '</g>';
function _hmPieceFromProp(id, box) {
const p = HM_PROPS[id];
if (!p) return null;
const m = /viewBox="([^"]+)"/.exec(p.svg || '');
const inner = String(p.svg || '').replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
return { svg: '<svg viewBox="' + (m ? m[1] : '0 0 40 26') + '">' + inner + '</svg>', box: box };
}
var HM_ROOM_VIG_COUNTER = {
rest:    '<g filter="url(#hmLift)"><circle class="hm-r-vig-soft" cx="64" cy="157" r="5.5"/><path class="hm-r-vig" d="M57 176v-10a7 7 0 0 1 14 0v10Z"/><path class="hm-r-steam" d="M78 164c-1.5-1.5 1.5-2 0-4"/></g>',
sleep:   '<g filter="url(#hmLift)"><rect class="hm-r-vig-soft" x="52" y="165" width="26" height="11" rx="5.5"/><circle class="hm-r-vig" cx="46" cy="168" r="4.5"/><path class="hm-r-steam" d="M84 158h8l-8 8h8"/></g>',
unknown: '<g filter="url(#hmLift)"><circle class="hm-r-vig-soft" cx="64" cy="149" r="5"/><path class="hm-r-vig" d="M58 176v-16a6 6 0 0 1 12 0v16Z"/><rect class="hm-r-vig-soft" x="70" y="156" width="4" height="14" rx="2"/></g>'
};
var HM_ROOMS = {
'':       { n: '客厅', props: ['sofa', 'cat', 'books', 'plant'], base: HM_ROOM_BASE, vig: null },
bed:      { n: '卧室', props: ['lamp', 'rug', 'plant', 'books'], base: HM_ROOM_BASE_BED, vig: HM_ROOM_VIG_BED },
study:    { n: '书房', props: ['lamp', 'cat', 'books', 'plant'], base: HM_ROOM_BASE_STUDY, vig: HM_ROOM_VIG_STUDY },
kitchen:  { n: '厨房', props: ['fridge', 'chair', 'plant'], base: HM_ROOM_BASE_KITCHEN, vig: HM_ROOM_VIG_COUNTER },
dining:   { n: '餐厅', props: ['dining', 'chair', 'plant'], base: HM_ROOM_BASE_DINING, vig: HM_ROOM_VIG_COUNTER },
bath:     { n: '浴室', props: ['bathtub', 'sink', 'plant'], base: HM_ROOM_BASE_BATH, vig: HM_ROOM_VIG_COUNTER },
balcony:  { n: '阳台', props: ['plantstand', 'plant', 'cat'], base: HM_ROOM_BASE_BALCONY, vig: HM_ROOM_VIG_COUNTER },
entry:    { n: '玄关', props: ['shoecab', 'mirror', 'doormat'], base: HM_ROOM_BASE_ENTRY, vig: HM_ROOM_VIG_COUNTER }
};
function _hmRoomOf(cid) {
const r = (_hmLookOf(cid) || {}).room;
return (typeof r === 'string' && Object.prototype.hasOwnProperty.call(HM_ROOMS, r)) ? r : '';
}
var HM_HELLOS = {
wee:       ['TA 那边还是凌晨，屋里静得很。', 'TA 那边的夜还长着，脚步放轻一点。', '凌晨了，窗外的黑还没退。', '这个点屋里最安静，连钟声都轻。', 'TA 那边正是夜里最沉的时候。'],
dawn:      ['TA 那边天刚亮，屋里泛着一点白。', '清晨的光斜进屋里，TA 该起了。', '天边刚亮，屋里还留着夜的凉。', '一早的屋子，窗子还没全打开。', 'TA 那边的早晨，安安静静的。'],
morning:   ['TA 那边是上午，屋里亮堂。', '上午的屋子，什么都慢慢来。', '日头升起来了，屋里一片亮。', '上午的光正好，落在桌角。', 'TA 那边的上午，事情一件件来。'],
noon:      ['TA 那边的午后，屋里有点暖。', '午后阳光正好，屋里安静。', '日头偏了一点，屋里暖起来。', '这个点屋里最容易犯困。', 'TA 那边的午后，慢得很。'],
afternoon: ['TA 那边是下午，屋里一切照旧。', '下午的屋子，光线正好。', '日头往西挪了，屋里还是静的。', '下午了，桌边的影子长了一截。', 'TA 那边的下午，不紧不慢。'],
evening:   ['TA 那边天擦黑，屋里点着灯。', '傍晚了，屋子慢慢暗下来。', '天色沉下去，屋里先亮了一盏。', '傍晚的风从窗缝里进来。', 'TA 那边的傍晚，灯刚点上。'],
night:     ['TA 那边是夜里，屋里亮着一盏灯。', '夜里的屋子，灯还亮着。', '天全黑了，屋里留着一圈光。', '夜里了，屋里比外面暖。', 'TA 那边的夜，慢慢静下来。']
};
var HM_HELLOS_BACK = {
wee:       ['又回来了。屋里还黑着，轻一点。'],
dawn:      ['又回来了。天刚亮，屋里还凉。'],
morning:   ['又回来了。上午的屋子，还是老样子。'],
noon:      ['又回来了。午后屋里暖着，坐一会儿吧。'],
afternoon: ['又回来了。下午的光还在，屋里没变。'],
evening:   ['又回来了。灯还亮着，屋里等你。'],
night:     ['又回来了。夜里的灯没灭。']
};
var HM_SKINS = [
{ k: '',       n: '素白', wall: '#f5f1ea', floor: '#eae3d6', wood: '#b9a48a', line: '#71695e', tone: '',        glow: 0,  props: ['shelf', 'books'] },
{ k: 'wood',   n: '木屋', wall: '#f2e9dc', floor: '#dfc8a6', wood: '#b08d63', line: '#6d5645', tone: '#8a6d5b', glow: 10, props: ['shelf', 'plant'] },
{ k: 'lamp',   n: '夜灯', wall: '#f7ecdf', floor: '#e7d2bb', wood: '#c19a6b', line: '#6b4f45', tone: '#a06d84', glow: 20, props: ['lamp', 'books'] },
{ k: 'rain',   n: '雨天', wall: '#e9eef3', floor: '#d7dfe5', wood: '#9aa7b0', line: '#4f5a63', tone: '#5e7d8c', glow: 4,  props: ['umbrella', 'rug'] },
{ k: 'winter', n: '冬日', wall: '#f3f4f7', floor: '#e2e4eb', wood: '#a9adba', line: '#565a66', tone: '#7a6ba0', glow: 6,  props: ['shelf', 'rug'] },
{ k: 'fest',   n: '节日', wall: '#f8eee6', floor: '#ecd8cb', wood: '#c08e78', line: '#6b4b48', tone: '#a06d84', glow: 16, props: ['cat', 'lamp'] }
];
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
shelf:    { n: '书架', w: 26, svg: '<svg viewBox="0.5 1.5 27 16" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="1" y="2" width="26" height="2.4" rx="1.2"/><rect class="hm-p-wood" x="1" y="8" width="26" height="1.8" rx=".9"/><rect class="hm-p-wood" x="1" y="14" width="26" height="2.4" rx="1.2"/><rect class="hm-p-wood" x="1" y="2" width="1.8" height="14.4" rx=".9"/><rect class="hm-p-wood" x="25.2" y="2" width="1.8" height="14.4" rx=".9"/><rect class="hm-p-soft" x="4" y="4.4" width="2.4" height="3.6" rx=".7"/><rect class="hm-p-line" x="7.2" y="3.8" width="1.5" height="4.2" rx=".5"/><rect class="hm-p-wood" x="9.4" y="4.4" width="2.8" height="3.6" rx=".7"/><rect class="hm-p-soft" x="13" y="3.4" width="1.8" height="4.6" rx=".5"/><rect class="hm-p-line" x="15.6" y="4.2" width="3" height="3.8" rx=".7"/><rect class="hm-p-wood" x="19.4" y="4.8" width="1.6" height="3.2" rx=".5"/><rect class="hm-p-soft" x="21.8" y="4" width="2.6" height="4" rx=".7"/><rect class="hm-p-line" x="4" y="9.8" width="2.2" height="4.2" rx=".7"/><rect class="hm-p-wood" x="7" y="9.2" width="1.6" height="4.8" rx=".5"/><rect class="hm-p-soft" x="9.4" y="9.8" width="3.2" height="4.2" rx=".7"/><rect class="hm-p-line" x="13.4" y="9.2" width="1.8" height="4.8" rx=".5"/><rect class="hm-p-wood" x="16" y="10" width="1.6" height="4" rx=".5"/><rect class="hm-p-soft" x="18.4" y="9.4" width="2.8" height="4.6" rx=".7"/><rect class="hm-p-line" x="22" y="9.8" width="2.4" height="4.2" rx=".7"/></svg>' },
plant:    { n: '落地绿植', w: 16, svg: '<svg viewBox="1 2 14 20" fill="none" aria-hidden="true"><path class="hm-p-leaf" d="M8 15c-5-2-6-7-3-11 4 2 5 7 3 11Z"/><path class="hm-p-leaf" d="M8 16c5-3 6-8 3-12-4 3-5 8-3 12Z"/><path class="hm-p-leaf" d="M8 13c-3-3-3-7 0-10 3 3 3 7 0 10Z"/><path class="hm-p-wood" d="M4 16h8l-1.4 5H5.4Z"/><rect class="hm-p-wood" x="3" y="15" width="10" height="2" rx="1"/></svg>' },
cat:      { n: '猫', w: 14, svg: '<svg viewBox="3 3 13 18" fill="none" aria-hidden="true"><path class="hm-p-soft" d="M4 20c0-6 1.8-9 4-9s4 3 4 9Z"/><circle class="hm-p-soft" cx="8" cy="9" r="3.6"/><path class="hm-p-line" d="M5.2 6.4 6 4l1.4 2.2M9.2 6.2 10.6 4l.8 2.6"/><circle cx="6.8" cy="9" r=".5" fill="currentColor"/><circle cx="9.2" cy="9" r=".5" fill="currentColor"/><path d="M11.6 16c2.4-.4 3.4-2 3.4-4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>' },
rug:      { n: '地毯', w: 30, svg: '<svg viewBox="1 13 14 9" fill="none" aria-hidden="true"><ellipse class="hm-p-soft" cx="8" cy="18" rx="6.4" ry="3"/><ellipse cx="8" cy="18" rx="4.6" ry="1.9" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" opacity=".5"/></svg>' },
lamp:     { n: '落地灯', w: 16, svg: '<svg viewBox="2 2 12 19" fill="none" aria-hidden="true"><path class="hm-p-wood" d="M4.4 8h7.2l-1.4-5H5.8Z"/><path d="M8 8v10.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><ellipse class="hm-p-line" cx="8" cy="19.4" rx="3.2" ry="1.2"/><ellipse class="hm-p-lampglow" cx="8" cy="8" rx="5" ry="1.6"/></svg>' },
books:    { n: '书堆', w: 16, svg: '<svg viewBox="2 4 12 16" fill="none" aria-hidden="true"><rect class="hm-p-soft" x="3" y="16" width="10" height="2.4" rx="1"/><rect class="hm-p-wood" x="3.6" y="13.4" width="8.8" height="2.4" rx="1"/><rect class="hm-p-soft" x="4.2" y="10.8" width="7.6" height="2.4" rx="1"/><rect class="hm-p-wood" x="5" y="8.2" width="6" height="2.4" rx="1"/><rect class="hm-p-soft" x="5.6" y="5.6" width="4.8" height="2.4" rx="1"/></svg>' },
umbrella: { n: '伞', w: 15, svg: '<svg viewBox="1 1 14 16" fill="none" aria-hidden="true"><path class="hm-p-wood" d="M2 9c1.4-4 3.6-6 6-6s4.6 2 6 6c-1.2-.8-2.4-.8-3.6 0-1.2-.8-2.4-.8-3.6 0C5.6 8.2 4.4 8.2 3.2 9Z"/><path d="M8 3.4V2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M8 9v7.4c0 1.8 2.4 1.8 2.4 0" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>' },
vase:     { n: '瓶花', w: 13, svg: '<svg viewBox="4 2 8 17" fill="none" aria-hidden="true"><path d="M8 12V6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><circle class="hm-p-soft" cx="8" cy="5" r="2.2"/><circle class="hm-p-wood" cx="5.8" cy="4.2" r="1.5"/><circle class="hm-p-wood" cx="10.2" cy="4.4" r="1.5"/><path class="hm-p-wood" d="M5.4 12h5.2l-.8 6H6.2Z"/><rect class="hm-p-wood" x="4.8" y="11" width="6.4" height="1.6" rx=".8"/></svg>' },
doormat:  { n: '门垫', w: 24, svg: '<svg viewBox="1 15 14 6" fill="none" aria-hidden="true"><rect class="hm-p-soft" x="2" y="16" width="12" height="4.4" rx="1.6"/><path d="M4 18.2h2M10 18.2h2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity=".5"/></svg>' },
sofa:     { n: '沙发', w: 42, svg: '<svg viewBox="1 3 38 22" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="5" y="4" width="30" height="11" rx="3"/><path d="M20 5.5v8" stroke="currentColor" stroke-width="1.1" opacity=".35"/><rect class="hm-p-soft" x="6" y="13" width="28" height="7" rx="2.5"/><path d="M20 13.5v6" stroke="currentColor" stroke-width="1.1" opacity=".3"/><rect class="hm-p-wood" x="2" y="9" width="6" height="12" rx="3"/><rect class="hm-p-wood" x="32" y="9" width="6" height="12" rx="3"/><path d="M7 21v3.4M33 21v3.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
bed:      { n: '床', w: 42, svg: '<svg viewBox="1 4 39 21" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="2" y="5" width="4.5" height="17" rx="2"/><rect class="hm-p-wood" x="35" y="12" width="3.5" height="10" rx="1.5"/><rect class="hm-p-soft" x="6" y="12" width="30" height="6" rx="2"/><path class="hm-p-line" d="M19 12h16a1 1 0 0 1 1 1v5H19Z"/><path d="M19 12.5v5.5" stroke="currentColor" stroke-width="1" opacity=".3"/><rect class="hm-p-soft" x="8" y="9" width="10" height="5" rx="2"/><rect class="hm-p-wood" x="6" y="18" width="30" height="3.5" rx="1.2"/><path d="M8 21.5v2.8M34 21.5v2.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
desk:     { n: '书桌', w: 40, svg: '<svg viewBox="2 5 36 19" fill="none" aria-hidden="true"><rect class="hm-p-line" x="7" y="6" width="9" height="4" rx="1"/><path d="M11.5 6.4v3.2" stroke="currentColor" stroke-width=".8" opacity=".4"/><rect class="hm-p-wood" x="3" y="10" width="34" height="3" rx="1.2"/><rect class="hm-p-soft" x="25" y="13" width="11" height="10" rx="1.5"/><path d="M25.5 18h10" stroke="currentColor" stroke-width="1" opacity=".4"/><circle cx="30.5" cy="15.6" r=".8" fill="currentColor"/><circle cx="30.5" cy="20.4" r=".8" fill="currentColor"/><path d="M6 13v10.5M12 13v10.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
armchair: { n: '单人椅', w: 26, svg: '<svg viewBox="1 3 26 21" fill="none" aria-hidden="true"><path class="hm-p-wood" d="M7 4h14a2 2 0 0 1 2 2v9H5V6a2 2 0 0 1 2-2Z"/><rect class="hm-p-soft" x="6" y="13" width="16" height="6" rx="2"/><rect class="hm-p-wood" x="2" y="10" width="5" height="10" rx="2.5"/><rect class="hm-p-wood" x="21" y="10" width="5" height="10" rx="2.5"/><path d="M6 20v3.4M22 20v3.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
bookcase: { n: '书柜', w: 26, svg: '<svg viewBox="2 1 24 32" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="3" y="2" width="22" height="28" rx="2"/><rect class="hm-p-soft" x="5" y="4" width="18" height="24" rx="1"/><rect class="hm-p-wood" x="5" y="11" width="18" height="1.6"/><rect class="hm-p-wood" x="5" y="19.4" width="18" height="1.6"/><rect class="hm-p-line" x="6.5" y="5.5" width="2.2" height="5.5" rx=".5"/><rect class="hm-p-wood" x="9.2" y="6" width="2" height="5" rx=".5"/><rect class="hm-p-leaf" x="11.6" y="5.2" width="2.4" height="5.8" rx=".5"/><rect class="hm-p-line" x="14.4" y="6.2" width="1.8" height="4.8" rx=".5"/><rect class="hm-p-wood" x="17" y="5.6" width="2.4" height="5.4" rx=".5"/><rect class="hm-p-line" x="6.5" y="13.5" width="2.4" height="5.9" rx=".5"/><rect class="hm-p-leaf" x="9.4" y="14" width="2" height="5.4" rx=".5"/><rect class="hm-p-wood" x="11.8" y="13.2" width="2.4" height="6.2" rx=".5"/><rect class="hm-p-line" x="15" y="14.2" width="2" height="5.2" rx=".5"/><rect class="hm-p-soft" x="6.5" y="22" width="14" height="5.4" rx="1"/><path d="M13.5 22.4v4.6" stroke="currentColor" stroke-width=".9" opacity=".35"/><path d="M6 30v2M22 30v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
tv:       { n: '电视柜', w: 40, svg: '<svg viewBox="3 2 34 24" fill="none" aria-hidden="true"><rect class="hm-p-line" x="9" y="3" width="22" height="12" rx="1.5"/><rect class="hm-p-soft" x="10.5" y="4.5" width="19" height="9" rx="1"/><path d="M17 15h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><rect class="hm-p-wood" x="4" y="16" width="32" height="7" rx="2"/><path d="M20 16.5v6" stroke="currentColor" stroke-width="1" opacity=".35"/><circle cx="15" cy="19.5" r=".8" fill="currentColor"/><circle cx="25" cy="19.5" r=".8" fill="currentColor"/><path d="M8 23v2M32 23v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
fireplace:{ n: '壁炉', w: 38, svg: '<svg viewBox="2 3 36 22" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="3" y="4" width="34" height="3" rx="1"/><rect class="hm-p-soft" x="5" y="7" width="30" height="17" rx="1.5"/><path class="hm-p-line" d="M13 24v-9a7 7 0 0 1 14 0v9Z"/><path class="hm-p-fire" d="M20 22c-2.4-.8-3.4-2.6-2.6-4.8.7 1 1.3 1 1.8.4-.6-1.8.2-3.6 1.8-4.6-.4 1.8.8 2.6 1.6 3.8.9 1.3.9 3.4-.6 4.6-.6.5-1.4.7-2 .6Z"/><path d="M15 23.4h10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity=".5"/></svg>' },
piano:    { n: '钢琴', w: 38, svg: '<svg viewBox="3 2 34 24" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="4" y="3" width="32" height="13" rx="2"/><rect class="hm-p-line" x="7" y="5.5" width="26" height="5.5" rx="1"/><rect class="hm-p-soft" x="5" y="15" width="30" height="4.5" rx="1"/><path d="M9 15.3v2.6M12.5 15.3v2.6M16 15.3v2.6M23 15.3v2.6M26.5 15.3v2.6M30 15.3v2.6" stroke="currentColor" stroke-width="1.5" opacity=".6"/><path d="M8 19.5v4.5M32 19.5v4.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M17 24h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity=".5"/></svg>' },
picture:  { n: '挂画', w: 22, svg: '<svg viewBox="0 0 30 24" fill="none" aria-hidden="true"><rect class="hm-p-frame" x="0.8" y="0.8" width="28.4" height="22.4" rx="1.5"/><rect class="hm-p-soft" x="3.6" y="3.6" width="22.8" height="16.8" rx="1"/><circle class="hm-p-line" cx="10.5" cy="8.6" r="2.4"/><path class="hm-p-leaf" d="M5.4 19c1.8-4.6 4.6-6.6 7.4-5.8 2.4.7 3.8 2.8 4.2 5.8H5.4Z"/><path class="hm-p-wood" d="M18 19c1.2-3.2 3-4.6 5-4.2 1.6.3 2.6 1.6 3 4.2H18Z"/></svg>' },
clock:    { n: '挂钟', w: 13, svg: '<svg viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle class="hm-p-frame" cx="11" cy="11" r="9.6"/><circle class="hm-p-soft" cx="11" cy="11" r="7.4"/><path d="M11 6.2V11l3.4 2.4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><circle class="hm-p-line" cx="11" cy="11" r="1.1"/></svg>' },
mirror:   { n: '镜子', w: 12, svg: '<svg viewBox="0 0 18 24" fill="none" aria-hidden="true"><ellipse class="hm-p-frame" cx="9" cy="12" rx="8.2" ry="11.4"/><ellipse class="hm-p-soft" cx="9" cy="12" rx="5.8" ry="8.8"/><path d="M6.4 17.6c1.6-3 3.2-5.4 4.8-7" stroke="currentColor" stroke-width="1.1" opacity=".4" stroke-linecap="round"/></svg>' },
sconce:   { n: '壁灯', w: 11, svg: '<svg viewBox="0 0 16 22" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="7" y="0" width="2" height="5" rx="1"/><path class="hm-p-soft" d="M4 6h8l-2 6H6Z"/><path d="M8 12v2.6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><ellipse class="hm-p-lampglow" cx="8" cy="16.6" rx="5.4" ry="2.3"/></svg>' },
coffee:   { n: '茶几', w: 26, svg: '<svg viewBox="0 0 36 16" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="1" y="2" width="34" height="3" rx="1.5"/><rect class="hm-p-soft" x="5" y="5" width="26" height="2" rx="1"/><rect class="hm-p-line" x="8" y="5.4" width="7" height="3.2" rx="1"/><path d="M6 7v7M30 7v7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
dining:   { n: '餐桌', w: 26, svg: '<svg viewBox="0 0 34 24" fill="none" aria-hidden="true"><ellipse class="hm-p-wood" cx="17" cy="8" rx="15" ry="4.4"/><ellipse class="hm-p-soft" cx="17" cy="7" rx="11.6" ry="3"/><rect class="hm-p-soft" x="6.4" y="2.6" width="5" height="4" rx="1"/><circle class="hm-p-leaf" cx="24" cy="4.2" r="2.2"/><path d="M17 12v8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><ellipse class="hm-p-line" cx="17" cy="21" rx="7" ry="2"/></svg>' },
chair:    { n: '餐椅', w: 15, svg: '<svg viewBox="0 0 20 26" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="3" y="1" width="14" height="9" rx="2"/><rect class="hm-p-soft" x="4.6" y="2.4" width="10.8" height="6.2" rx="1.4"/><rect class="hm-p-wood" x="2" y="10" width="16" height="3.4" rx="1.4"/><path d="M4 13.4v10M16 13.4v10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
wardrobe: { n: '衣柜', w: 18, svg: '<svg viewBox="0 0 24 32" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="2" y="1" width="20" height="29" rx="2"/><rect class="hm-p-soft" x="4" y="3" width="16" height="25" rx="1"/><path d="M12 3v25" stroke="currentColor" stroke-width="1" opacity=".28"/><circle class="hm-p-line" cx="10" cy="15" r="1.1"/><circle class="hm-p-line" cx="14" cy="15" r="1.1"/><path d="M4 30v2M20 30v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
shoecab:  { n: '鞋柜', w: 16, svg: '<svg viewBox="0 0 22 18" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="1" y="1" width="20" height="14" rx="2"/><rect class="hm-p-soft" x="3" y="3" width="16" height="10" rx="1"/><path d="M3 8h16" stroke="currentColor" stroke-width=".9" opacity=".28"/><circle class="hm-p-line" cx="8" cy="5.6" r=".9"/><circle class="hm-p-line" cx="14" cy="5.6" r=".9"/><path d="M3 15v2M19 15v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
fridge:   { n: '冰箱', w: 15, svg: '<svg viewBox="0 0 20 30" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="2" y="1" width="16" height="27" rx="2"/><rect class="hm-p-soft" x="4" y="3" width="12" height="11" rx="1.4"/><rect class="hm-p-soft" x="4" y="16" width="12" height="10" rx="1.4"/><path d="M4 15h12" stroke="currentColor" stroke-width="1" opacity=".3"/><rect class="hm-p-line" x="14" y="7" width="1.4" height="4" rx=".7"/><rect class="hm-p-line" x="14" y="19" width="1.4" height="4" rx=".7"/><path d="M4 28v2M16 28v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
washer:   { n: '洗衣机', w: 15, svg: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="1.5" y="1" width="17" height="16" rx="2"/><circle class="hm-p-soft" cx="10" cy="11" r="5"/><circle class="hm-p-line" cx="10" cy="11" r="3.4"/><path d="M7.4 8.4c1.4-1 3-1.2 4.4-.6" stroke="currentColor" stroke-width="1" opacity=".38" stroke-linecap="round"/><rect class="hm-p-line" x="3.6" y="3" width="4" height="2.2" rx="1"/><path d="M3.5 17v2M16.5 17v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
bathtub:  { n: '浴缸', w: 30, svg: '<svg viewBox="0 0 36 20" fill="none" aria-hidden="true"><path class="hm-p-soft" d="M3 6h30v4.6A6 6 0 0 1 27 17H9a6 6 0 0 1-6-6.4Z"/><path d="M3 6h30" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M30 6V2.6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M27.6 2.6h4.8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path class="hm-p-lampglow" d="M8 8.6h20v2.2H8Z"/><path d="M7 17v2M29 17v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
sink:     { n: '洗手台', w: 17, svg: '<svg viewBox="0 0 24 22" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="1" y="4" width="22" height="3" rx="1.4"/><path class="hm-p-soft" d="M4 7h16v3.6A4.4 4.4 0 0 1 15.6 15H8.4A4.4 4.4 0 0 1 4 10.6Z"/><path d="M12 7V3.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M9.6 3.2h4.8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M4 15v5M20 15v5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
plantstand:{ n: '花架', w: 16, svg: '<svg viewBox="0 0 18 26" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="5" y="6" width="8" height="4.4" rx="1"/><path class="hm-p-leaf" d="M9 6c-4-1.6-5.4-5-4-8.4 3.4 1.4 4.6 4.8 4 8.4Z"/><path class="hm-p-leaf" d="M9 6c4-1.8 5.4-5.4 3.6-8.6-3.4 1.6-4.4 5-3.6 8.6Z"/><rect class="hm-p-wood" x="1" y="10.4" width="16" height="2.4" rx="1.2"/><path d="M3 12.8V24M15 12.8V24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
toilet:   { n: '马桶', w: 16, svg: '<svg viewBox="0 0 22 26" fill="none" aria-hidden="true"><rect class="hm-p-soft" x="6" y="2" width="10" height="12" rx="2"/><rect class="hm-p-line" x="9" y="5" width="4" height="6" rx="1"/><path class="hm-p-soft" d="M3 16h16v3.6A4.4 4.4 0 0 1 14.6 24H7.4A4.4 4.4 0 0 1 3 19.6Z"/><path d="M11 14v5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>' },
coatrack: { n: '衣帽架', w: 16, svg: '<svg viewBox="0 0 22 26" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="10" y="2" width="2" height="21" rx="1"/><path d="M4 7h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path class="hm-p-line" d="M6.5 7h4v9h-4Z"/><circle class="hm-p-wood" cx="16" cy="7" r="1.4"/><path d="M6 25h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
dryer:    { n: '晾衣架', w: 20, svg: '<svg viewBox="0 0 30 26" fill="none" aria-hidden="true"><path d="M4 24L9 5M26 24L21 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M8 9h14M9 16h12" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><rect class="hm-p-soft" x="9" y="10" width="5" height="7" rx="1"/><rect class="hm-p-line" x="16" y="12" width="5" height="6" rx="1"/></svg>' },
microwave:{ n: '微波炉', w: 14, svg: '<svg viewBox="0 0 24 16" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="1" y="2" width="22" height="12" rx="2"/><rect class="hm-p-line" x="3.5" y="4.5" width="12" height="7" rx="1"/><circle class="hm-p-soft" cx="19" cy="8" r="2.4"/></svg>' },
cupboard: { n: '碗柜', w: 18, svg: '<svg viewBox="0 0 26 26" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="2" y="1" width="22" height="23" rx="2"/><rect class="hm-p-soft" x="4" y="3" width="18" height="20" rx="1"/><path d="M4 12h18" stroke="currentColor" stroke-width="1" opacity=".28"/><circle class="hm-p-line" cx="10" cy="8" r="1.1"/><circle class="hm-p-line" cx="16" cy="8" r="1.1"/></svg>' },
towelrack:{ n: '毛巾架', w: 12, svg: '<svg viewBox="0 0 18 14" fill="none" aria-hidden="true"><path d="M2 4h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><rect class="hm-p-soft" x="4" y="4" width="4" height="9" rx="1.5"/><rect class="hm-p-soft" x="10" y="4" width="4" height="7" rx="1.5"/></svg>' },
mirrorstand:{ n: '全身镜', w: 14, svg: '<svg viewBox="0 0 18 26" fill="none" aria-hidden="true"><ellipse class="hm-p-frame" cx="9" cy="9" rx="7" ry="8"/><ellipse class="hm-p-soft" cx="9" cy="9" rx="5" ry="6"/><path d="M9 17v7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M5 25h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
bench:    { n: '换鞋凳', w: 18, svg: '<svg viewBox="0 0 28 16" fill="none" aria-hidden="true"><rect class="hm-p-wood" x="2" y="4" width="24" height="3.5" rx="1.5"/><rect class="hm-p-soft" x="4" y="7.5" width="20" height="2.5" rx="1"/><path d="M5 10v5M23 10v5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>' },
rockingchair:{ n: '摇椅', w: 18, svg: '<svg viewBox="0 0 24 26" fill="none" aria-hidden="true"><path class="hm-p-wood" d="M7 3h10v10H7Z"/><rect class="hm-p-soft" x="8" y="5" width="8" height="6" rx="1"/><rect class="hm-p-wood" x="4" y="13" width="16" height="3" rx="1.2"/><path d="M6 16v7M18 16v7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M3 24c4-2 14-2 18 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>' },
tablelamp: { n: '台灯', w: 12, svg: '<svg viewBox="0 0 16 22" fill="none" aria-hidden="true"><path class="hm-p-soft" d="M3 8h10l-2-6H5Z"/><path d="M8 8v12" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><ellipse class="hm-p-line" cx="8" cy="20.4" rx="4" ry="1.5"/><ellipse class="hm-p-lampglow" cx="8" cy="9" rx="6" ry="2"/></svg>' },
fan:      { n: '落地扇', w: 15, svg: '<svg viewBox="0 0 18 26" fill="none" aria-hidden="true"><circle class="hm-p-soft" cx="9" cy="8" r="6.4"/><path d="M9 8 4.6 4.8M9 8l4.4-3.2M9 8V2M9 8l-4.4 3.2M9 8l4.4 3.2M9 8v5.8" stroke="currentColor" stroke-width="1" opacity=".4"/><circle class="hm-p-line" cx="9" cy="8" r="1.2"/><path d="M9 14.4v9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><ellipse class="hm-p-line" cx="9" cy="24" rx="5" ry="1.8"/></svg>' }
};
var HM_FURN_KEYS = ['sofa', 'bed', 'desk', 'armchair', 'bookcase', 'tv', 'fireplace', 'piano',
'wardrobe', 'fridge', 'washer', 'bathtub', 'dining', 'coffee', 'sink', 'shoecab', 'plantstand', 'fan', 'chair'];
var HM_WALL_KEYS = ['shelf', 'vase', 'umbrella', 'picture', 'clock', 'mirror', 'sconce'];
var HM_ROOM_PIECES = {
winLiving:  { svg: HM_ROOM_WIN_LIVING,   box: [0, 19, 172, 181] },
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
table:      { svg: HM_ROOM_TABLE,        box: [34, 174, 102, 38] },
dresser:    { svg: HM_ROOM_DRESSER,      box: [34, 174, 102, 38] },
desk:       { svg: HM_ROOM_DESK,         box: [34, 174, 102, 38] },
counter:    { svg: HM_ROOM_COUNTER,      box: [34, 174, 102, 38] },
sideboard:  { svg: HM_ROOM_SIDEBOARD,    box: [34, 157, 102, 55] },
washstand:  { svg: HM_ROOM_WASHSTAND,    box: [34, 161, 102, 50] },
flowerbox:  { svg: HM_ROOM_FLOWERBOX,    box: [34, 151, 102, 56] },
shoecab:    { svg: HM_ROOM_SHOECAB,      box: [34, 174, 102, 38] },
bed:        { svg: HM_ROOM_BED,          box: [224, 166, 82, 44] },
nightstand: { svg: HM_ROOM_NIGHTSTAND,   box: [202, 172, 24, 36] },
bookcase:   { svg: HM_ROOM_BOOKCASE,     box: [246, 148, 54, 64] },
door:       { svg: HM_ROOM_DOOR,         box: [56, 96, 92, 116] },
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
bathtubL:   _hmPieceFromProp('bathtub',    [150, 160, 140, 78]),
toiletL:    _hmPieceFromProp('toilet',     [282, 168, 50, 59]),
washerL:    _hmPieceFromProp('washer',     [184, 158, 94, 94]),
dryerL:     _hmPieceFromProp('dryer',      [246, 126, 84, 73]),
shoecabL:   _hmPieceFromProp('shoecab',    [190, 156, 116, 94]),
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
var HM_ROOM_POOL = {
'':       ['sofa', 'coffee', 'armchair', 'tv', 'fireplace', 'piano', 'rug', 'lamp', 'shelf', 'picture', 'clock', 'plant', 'cat', 'books', 'vase', 'sconce', 'umbrella', 'plantstand'],
bed:      ['bed', 'nightstand', 'wardrobe', 'dresser', 'armchair', 'rug', 'lamp', 'tablelamp', 'shelf', 'picture', 'mirror', 'clock', 'books', 'plant', 'vase', 'sconce', 'cat'],
study:    ['desk', 'bookcase', 'chair', 'shelf', 'tablelamp', 'armchair', 'rug', 'picture', 'clock', 'books', 'plant', 'vase', 'sconce', 'cat'],
kitchen:  ['fridge', 'cupboard', 'microwave', 'dining', 'chair', 'bench', 'rug', 'doormat', 'plant', 'shelf', 'picture', 'sconce', 'cat'],
dining:   ['dining', 'chair', 'sideboard', 'cupboard', 'fridge', 'bench', 'rug', 'picture', 'clock', 'plant', 'vase', 'sconce'],
bath:     ['bathtub', 'toilet', 'sink', 'washer', 'towelrack', 'mirrorstand', 'doormat', 'plant', 'rug', 'picture', 'sconce'],
balcony:  ['plantstand', 'washer', 'dryer', 'rockingchair', 'bench', 'shelf', 'books', 'doormat', 'rug', 'plant', 'umbrella', 'cat'],
entry:    ['shoecab', 'coatrack', 'mirrorstand', 'bench', 'umbrella', 'doormat', 'rug', 'plant', 'picture', 'sconce', 'books']
};
var HM_ROOM_POOL_COMMON = ['bookcase', 'piano', 'picture', 'clock', 'mirror', 'sconce', 'umbrella', 'plant', 'cat', 'books'];
function _hmPoolOf(cid) {
const rk = _hmRoomOf(cid);
const own = HM_ROOM_POOL[rk] || HM_ROOM_POOL[''];
const out = [];
own.concat(HM_ROOM_POOL_COMMON).forEach(k => { if (HM_PROPS[k] && out.indexOf(k) < 0) out.push(k); });
return out;
}
var HM_ROOM_LAYOUT = {
'': {
tvL:      [26, 4],
rugL:     [0, 0]
},
bed: {
bed:        [-68, 0],
nightstand: [-72, 0],
rugBed:     [-86, 0]
},
study: {
tablelampL: [0, 46]
},
kitchen: {
counter:    [70, -6],
matK:       [0, 2]
},
dining: {
diningL:  [-32, -2],
chairL:   [16, 8]
},
bath: {
bathtubL: [-42, 22],
toiletL:  [4, -10],
matB:      [-6, 2]
},
balcony: {
flowerbox:[152, -3],
washerL:  [-158, -2],
dryerL:   [-122, 14]
},
entry: {
shoecabL:  [-14, -4],
coatrackL: [-176, 6],
matE:      [-6, -2]
}
};
var HM_ROOM_PIECES_LIST = {
'':       ['winLiving', 'decorLiving', 'table', 'sofaL', 'tvL', 'rugL', 'lamp', 'hangplant'],
bed:      ['winBed', 'decorBed', 'dresser', 'bed', 'nightstand', 'wardrobeL', 'rugBed', 'lampCeil', 'hangplant'],
study:    ['winStudy', 'decorStudy', 'desk', 'bookcase', 'shelfL', 'tablelampL', 'rugL', 'hangplant'],
kitchen:  ['winKitchen', 'decorKitchen', 'counter', 'fridgeL', 'cupboardL', 'microwaveL', 'matK', 'lampCeil'],
dining:   ['winDining', 'decorDining', 'sideboard', 'diningL', 'chairL', 'rugD', 'lampDining'],
bath:     ['winFrost', 'decorBath', 'washstand', 'bathtubL', 'toiletL', 'matB', 'lampWall'],
balcony:  ['decorBalcony', 'flowerbox', 'washerL', 'dryerL', 'hangplant'],
entry:    ['door', 'decorEntry', 'shoecabL', 'coatrackL', 'matE', 'lampCeil']
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
var HM_KNOCK_LINES = [
'门开了一条缝，TA 探出头来。',
'门开了。TA 站在门里，像是刚听见。',
'TA 来开门了，屋里透出一点光。',
'门响了一下，TA 在里面应了一声。',
'TA 把门拉开，没说话，侧身让你进。',
'门后传来脚步声，TA 到了门口。'
];
var HM_NOTE_LINES = [
'门口那张纸条我看见了。',
'纸条收下了。',
'你塞的那张，我读过了。',
'门缝里那张纸，我捡起来了。'
];
var HM_WATER_LINES = [
'花喝饱了，叶子精神了一点。',
'浇过了，土是湿的。',
'这盆花又长高了一点。'
];
var HM_TEA_LINES = [
'茶泡上了，壶嘴冒着白气。',
'（把杯子摆好）这壶够喝一下午。',
'屋里暖了一点，是茶的热气。',
'茶叶舒展开了，水变了颜色。',
'（轻声）茶要趁热喝。'
];
var HM_FEED_LINES = [
'猫凑过来，尾巴竖得笔直。',
'（猫在脚边蹭）它饿了有一阵了。',
'猫吃得很急，胡子一动一动。',
'碗空了，猫舔了舔嘴。',
'猫吃完，跳上椅子蜷起来。'
];
var HM_TIDY_LINES = [
'屋子收拾过了，东西都回了原位。',
'（把散着的归拢）这样看着清爽。',
'地板露出来了，屋里亮堂了些。',
'东西摆整齐，走动也方便了。',
'（拍了拍靠垫）屋子又是原来的样子。'
];
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
photoFrame: '',
photoNote: '',
lampOn: true,
winOpen: false,
plant: { n: 0, day: '', at: 0, nm: '', born: '', kind: '' },
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
const sk = (skin ? HM_SKINS.find(x => x.k === skin) : null) || HM_SKINS[0];
if (skin && sk && sk.k === skin) view.setAttribute('data-hm-skin', skin);
else view.removeAttribute('data-hm-skin');
view.style.setProperty('--hm-room', sk.wall);
view.style.setProperty('--hm-wall', sk.wall);
view.style.setProperty('--hm-floor', sk.floor);
view.style.setProperty('--hm-wood', sk.wood);
view.style.setProperty('--hm-line', sk.line);
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
function _hmHelloOf(cid, en, n) {
let tp = '';
if (en && typeof _cjTimePartOf === 'function') tp = _cjTimePartOf(en) || '';
const back = (typeof n === 'number' && n >= 2 && HM_HELLOS_BACK[tp]) ? HM_HELLOS_BACK[tp] : null;
const pool = back || HM_HELLOS[tp] || HM_HELLOS.morning;
const dk = (typeof dressDayKey === 'function') ? dressDayKey() : new Date().toLocaleDateString('zh-CN');
let h = 0; const s = cid + '|' + dk + '|' + tp + (back ? '|b' : '|a');
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
if (u && HM_PROPS[u.id]) showToast('解锁了新摆件：' + HM_PROPS[u.id].n + '（去装扮面板看看）');
}
var HM_PROP_WHERE = { shelf: 'wall', lamp: 'floor', vase: 'wall', umbrella: 'wall', plant: 'floor', cat: 'floor', rug: 'floor', books: 'floor', doormat: 'floor',
sofa: 'floor', bed: 'floor', desk: 'floor', armchair: 'floor', bookcase: 'floor', tv: 'floor', fireplace: 'floor', piano: 'floor',
picture: 'wall', clock: 'wall', mirror: 'wall', sconce: 'wall',
coffee: 'floor', dining: 'floor', chair: 'floor', wardrobe: 'floor', shoecab: 'floor', fridge: 'floor', washer: 'floor',
bathtub: 'floor', sink: 'floor', plantstand: 'floor', fan: 'floor',
toilet: 'floor', coatrack: 'floor', dryer: 'floor', microwave: 'floor', cupboard: 'floor',
towelrack: 'wall', mirrorstand: 'floor', bench: 'floor', rockingchair: 'floor', tablelamp: 'floor' };
var HM_ROOM_W = 340, HM_ROOM_H = 310;
function _hmPropBox(id) {
const p = HM_PROPS[id];
const w = (p && typeof p.w === 'number' && p.w > 0) ? p.w : 16;
let r = 0.7;
if (p) {
const m = /viewBox="([-0-9. ]+)"/.exec(p.svg || '');
if (m) { const a = m[1].trim().split(/\s+/).map(Number); if (a.length === 4 && a[2] > 0) r = a[3] / a[2]; }
}
return { w: w, h: w * (HM_ROOM_W / HM_ROOM_H) * r };
}
var HM_PROP_BAND = { wall: [6, 52], floor: [66.5, 92] };
var HM_PROP_XBAND = { wall: [46, 92], floor: [4, 96] };
var HM_PROP_MAX = 12;
function _hmYBandOf(id) {
if (HM_PROP_WHERE[id] === 'wall') return HM_PROP_BAND.wall;
const h = _hmPropBox(id).h;
return [HM_PROP_BAND.floor[0] - h, HM_PROP_BAND.floor[1] - h];
}
function _hmXHiOf(id) {
return Math.min(HM_PROP_XBAND[HM_PROP_WHERE[id] === 'wall' ? 'wall' : 'floor'][1], 98 - _hmPropBox(id).w);
}
var _HM_PROP_SLOTS = {
wall:  [{ x: 46, y: 6 }, { x: 46, y: 30 }, { x: 54, y: 6 }, { x: 54, y: 30 }, { x: 46, y: 46 }, { x: 54, y: 46 }],
floor: [{ x: 46, y: 70 }, { x: 66, y: 74 }, { x: 86, y: 78 }, { x: 26, y: 82 }, { x: 56, y: 86 }, { x: 36, y: 90 }]
};
function _hmPropsNormalize(cid) {
const look = _hmLookOf(cid);
if (!look || !Array.isArray(look.props)) return false;
let changed = false;
const out = []; const used = { wall: 0, floor: 0 };
for (let i = 0; i < look.props.length && out.length < HM_PROP_MAX; i++) {
const it = look.props[i];
if (!it || typeof it !== 'object' || typeof it.id !== 'string' || !HM_PROPS[it.id]) { out.push(it); continue; }
const where = HM_PROP_WHERE[it.id] === 'wall' ? 'wall' : 'floor';
const box = _hmPropBox(it.id);
const slot = _HM_PROP_SLOTS[where][used[where]++ % 6];
const yb = _hmYBandOf(it.id);
const xhi = _hmXHiOf(it.id);
let x = (typeof it.x === 'number' && isFinite(it.x)) ? it.x : slot.x;
let y = (typeof it.y === 'number' && isFinite(it.y)) ? it.y : slot.y;
x = Math.round(Math.min(xhi, Math.max(HM_PROP_XBAND[where][0], x)) * 10) / 10;
if (x < HM_PROP_XBAND[where][0] || x > xhi) { x = Math.min(xhi, slot.x); changed = true; }
if (y < yb[0] || y > yb[1]) { y = (where === 'floor' ? slot.y - box.h : slot.y); changed = true; }
y = Math.round(Math.min(96, Math.max(2, y)) * 10) / 10;
out.push({ id: it.id, x: x, y: y });
}
if (changed) { look.props = out; if (typeof save === 'function') save(); }
return changed;
}
function _hmPropsOf(cid) {
const look = _hmLookOf(cid) || {};
const def = HM_SKINS.find(x => x.k === (look.skin || ''));
const roomKey = _hmRoomOf(cid);
const base = Array.isArray(look.props) ? look.props : (roomKey && HM_ROOMS[roomKey] ? HM_ROOMS[roomKey].props : ((def && def.props) || []));
const out = []; const seen = {}; const used = { wall: 0, floor: 0 };
for (let i = 0; i < base.length && out.length < HM_PROP_MAX; i++) {
const it = base[i];
const id = (typeof it === 'string') ? it : (it && typeof it === 'object' ? it.id : '');
if (!HM_PROPS[id] || seen[id]) continue;
seen[id] = 1;
const where = HM_PROP_WHERE[id] === 'wall' ? 'wall' : 'floor';
const box = _hmPropBox(id);
const slot = _HM_PROP_SLOTS[where][used[where]++ % 6];
const yb = _hmYBandOf(id);
const xhi = _hmXHiOf(id);
let x = (it && typeof it === 'object' && typeof it.x === 'number' && isFinite(it.x)) ? it.x : slot.x;
let y = (it && typeof it === 'object' && typeof it.y === 'number' && isFinite(it.y)) ? it.y : (where === 'floor' ? slot.y - box.h : slot.y);
if (x < HM_PROP_XBAND[where][0] || x > xhi) x = Math.min(xhi, slot.x);
if (y < yb[0] || y > yb[1]) y = (where === 'floor' ? slot.y - box.h : slot.y);
y = Math.min(96, Math.max(2, y));
const sc = (it && typeof it === 'object' && typeof it.sc === 'number' && isFinite(it.sc)) ? Math.min(1.6, Math.max(0.6, it.sc)) : 1;
out.push({ id: id, x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10, sc: sc });
}
return out;
}
function _hmPlantOf(cid) {
const look = _hmLookOf(cid) || {};
const p = (look.plant && typeof look.plant === 'object') ? look.plant : {};
return {
n: Math.max(0, Math.floor(+p.n || 0)),
day: (typeof p.day === 'string') ? p.day : '',
at: +p.at || 0,
nm: (typeof p.nm === 'string') ? p.nm : '',
born: (typeof p.born === 'string') ? p.born : '',
kind: (typeof p.kind === 'string' && HM_FLOWER[p.kind]) ? p.kind : ''
};
}
function _hmDayGap(a, b) {
const pa = String(a || '').split('-').map(Number), pb = String(b || '').split('-').map(Number);
if (pa.length < 3 || pb.length < 3 || !pa[0] || !pb[0]) return 0;
return Math.round((Date.UTC(pb[0], pb[1] - 1, pb[2]) - Date.UTC(pa[0], pa[1] - 1, pa[2])) / 86400000);
}
function _hmPlantThirst(p) {
if (!p.day) return 0;
const d = _hmDayGap(p.day, _hmToday());
if (d <= 1) return 0;
if (d === 2) return 2;
return 3;
}
var HM_FLOWER = {
'':      { n: '一盆花', lang: '没起名字，也好好长着。' },
daisy:   { n: '雏菊',   lang: '雏菊的花语是「藏在心里的喜欢」。' },
bell:    { n: '铃兰',   lang: '铃兰的花语是「幸福回来」。' },
rose:    { n: '小玫瑰', lang: '小玫瑰的花语是「慢慢喜欢你」。' }
};
var HM_FLOWER_HABIT = {
'':    { top3: 64, top7: 52, leafW: 1,    drop: 0 },
daisy: { top3: 54, top7: 40, leafW: 0.78, drop: -2 },
bell:  { top3: 70, top7: 52, leafW: 1,    drop: 7 },
rose:  { top3: 76, top7: 64, leafW: 1.28, drop: 2 }
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
const d = c - 44;
return '<circle class="hm-flower-p" cx="60" cy="' + (30 + d) + '" r="7.5"/><circle class="hm-flower-p" cx="74" cy="' + (44 + d) + '" r="7.5"/>'
+ '<circle class="hm-flower-p" cx="60" cy="' + (58 + d) + '" r="7.5"/><circle class="hm-flower-p" cx="46" cy="' + (44 + d) + '" r="7.5"/>'
+ '<circle class="hm-flower" cx="60" cy="' + c + '" r="7.5"/><circle class="hm-flower-c" cx="60" cy="' + c + '" r="3.2"/>';
}
function _hmPlantSVG(p) {
const n = p.n || 0;
const kind = HM_FLOWER[p.kind] ? p.kind : '';
const hb = HM_FLOWER_HABIT[kind] || HM_FLOWER_HABIT[''];
const cy = hb.top7 - 8;
const pot = '<path class="hm-pot" d="M38 118h44l-5 30H43Z"/><rect class="hm-pot" x="35" y="112" width="50" height="8" rx="4"/><path class="hm-soil" d="M44 120h32v3H44Z"/>';
let grow = '';
if (n >= 7) {
grow = '<path class="hm-stem" d="M60 112V' + hb.top7 + '"/>'
+ '<path class="hm-leaf" d="M60 94c-14-4-20-13-20-23 12 1 18 10 20 18Z"/>'
+ '<path class="hm-leaf" d="M60 86c13-4 19-13 19-23-11 1-17 10-19 18Z"/>'
+ '<path class="hm-leaf" d="M60 72c-9-2-13-9-13-16 8 1 12 7 13 12Z"/>'
+ _hmFlowerSVG(kind, cy);
} else if (n >= 3) {
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
return '<svg viewBox="0 0 120 156" fill="none" aria-hidden="true">'
+ '<g class="hm-leaves"><g class="hm-plant-habit" style="--leaf-w:' + hb.leafW + ';--leaf-drop:' + hb.drop + 'px"><g class="hm-plant-body">' + grow + '</g></g></g>' + pot + '</svg>';
}
function _hmFlowerLangHTML(p) {
const kind = (p.kind && HM_FLOWER[p.kind]) ? p.kind : '';
const fl = HM_FLOWER[kind] || HM_FLOWER[''];
return '<details class="hm-flower-lang"><summary>花语 · ' + (kind ? fl.n : '还没选品种') + '</summary><span>' + fl.lang + '</span></details>';
}
function _hmPlantHTML(cid) {
const p = _hmPlantOf(cid);
const watered = (p.day === _hmToday());
const th = _hmPlantThirst(p);
return '<div class="hm-plant-sec" id="hmPlantSec">'
+ '<button type="button" class="hm-sign" data-hmdo="plantcard">'
+ '<i>窗台那盆花</i>'
+ '<span id="hmPlantNote">' + _hmPlantLineText(p) + '</span>'
+ '<em>›</em></button>'
+ _hmFlowerLangHTML(p)
+ '</div>';
}
function _hmPlantPaint(cid) {
const slot = document.getElementById('hmPlantSlot');
if (!slot) return;
const p = _hmPlantOf(cid);
const watered = (p.day === _hmToday());
const th = _hmPlantThirst(p);
const html = '<button type="button" class="hm-plant-big hm-plant' + (watered ? ' is-watered' : '') + '" data-hmwater="1" data-hmplant="1" data-hm-thirst="' + th + '" data-hm-flower="' + (HM_FLOWER[p.kind] ? p.kind : '') + '" aria-label="给花浇水" title="' + (watered ? '今天已经浇过水了' : '浇点水') + '">'
+ _hmPlantSVG(p) + '<span class="hm-water-drops" aria-hidden="true"><i></i><i></i><i></i></span></button>';
if (slot.innerHTML !== html) slot.innerHTML = html;
}
function _hmPlantCard(cid) {
if (typeof openModal !== 'function') return;
const p = _hmPlantOf(cid);
const th = _hmPlantThirst(p);
const stage = p.n >= 7 ? '开了花' : (p.n >= 3 ? '长高、叶子密了' : (p.n ? '冒出了新芽' : '还是小苗'));
const thirst = th >= 3 ? '很渴了——土都发白了' : (th === 2 ? '有点渴了——叶尖垂着' : '不渴，喝饱了');
const fl = HM_FLOWER[p.kind] || HM_FLOWER[''];
const lines = [
'名字：' + (p.nm || '还没起名'),
'品种：' + fl.n,
'种下：' + (p.born || '还没浇过第一口水'),
'浇过：' + p.n + ' 次',
'现在：' + stage,
'此刻：' + thirst,
'花语：' + fl.lang
];
openModal('这盆花', '', () => {}, { noInput: true, staticText: lines.join('　·　'), okText: '知道了' });
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
const ta = _hmContact();
const frame = ta ? '<span class="hm-decor-i hm-frame" title="TA 的照片"><span class="hm-frame-in">'
+ _hmAvatarHTML(ta) + '</span></span>' : '';
const ho = homeOf(cid);
const teaHot = !!(ho && typeof ho.tea === 'number' && isFinite(ho.tea) && Date.now() >= ho.tea && Date.now() - ho.tea < 1800000);
const teapot = teaHot ? '<span class="hm-decor-i hm-teapot" title="一壶热茶">' + HM_TEAPOT_SVG
+ '<span class="hm-steam" aria-hidden="true"><i></i><i></i><i></i></span></span>' : '';
const html = '<span class="hm-decor-i hm-season" title="' + HM_SEASON_DECOR[season].n + '">' + HM_SEASON_DECOR[season].svg + '</span>'
+ (fest ? '<span class="hm-decor-i hm-fest" title="' + fest.n + '">' + fest.svg + '</span>' : '')
+ frame
+ teapot
+ _hmWxObjHTML(cid)
+ '<button type="button" class="hm-decor-i hm-actobj" data-hmobj="1" title="' + obj.n + '">' + obj.svg + '</button>';
if (host.innerHTML !== html) host.innerHTML = html;
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
const layer = document.getElementById('hmFurn');
if (!layer) return;
layer.style.setProperty('--hm-furn-ink', HM_FURN_TONE[_hmFurnToneOf(cid)] || HM_FURN_TONE.ink);
const view = document.getElementById('hmView');
if (view) {
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
return '<button type="button" class="hm-furn-i hm-furn-' + p.id + ' hm-furn-' + w + '" data-hmfurn="' + i + '" title="' + HM_PROPS[p.id].n + '" aria-label="' + HM_PROPS[p.id].n + '" style="left:' + p.x + '%;top:' + p.y + '%;width:' + bw + '%">' + HM_PROPS[p.id].svg + '</button>';
}).join('');
if (layer.innerHTML !== html) layer.innerHTML = html;
}
var _hmFurnOn = false;
var _hmDragW = 0;
function _hmSnapProp(id, x, y) {
const where = HM_PROP_WHERE[id] === 'wall' ? 'wall' : 'floor';
const band = _hmYBandOf(id);
const xb = HM_PROP_XBAND[where];
const hi = _hmDragW > 0 ? Math.min(xb[1], 98 - _hmDragW) : xb[1];
const nx = Math.round(Math.min(hi, Math.max(xb[0], x)));
let ny = y;
let snapped = false;
if (ny < band[0]) { ny = band[0]; snapped = true; }
else if (ny > band[1]) { ny = band[1]; snapped = true; }
ny = Math.round(Math.min(96, Math.max(2, ny)));
return { x: nx, y: ny, snapped: snapped };
}
function _hmFurnDrag(cid) {
const layer = document.getElementById('hmFurn');
if (!layer || layer._furnBound) return;
layer._furnBound = 1;
layer.addEventListener('pointerdown', e => {
const cid0 = _hmCid();
if (!cid0) return;
const el = e.target.closest('[data-hmfurn]');
if (!el || !el.dataset) return;
const idx = +el.dataset.hmfurn;
const rect = layer.getBoundingClientRect();
_hmDragW = rect.width > 0 ? (el.offsetWidth / rect.width) * 100 : 0;
const cur0 = _hmPropsOf(cid0);
const pid = (cur0[idx] && cur0[idx].id) || '';
const where = (pid && HM_PROP_WHERE[pid] === 'wall') ? 'wall' : 'floor';
const ghost = document.createElement('span');
ghost.className = 'hm-furn-ghost';
ghost.style.width = el.offsetWidth + 'px';
ghost.style.height = el.offsetHeight + 'px';
layer.appendChild(ghost);
let dragging = false;
const move = ev => {
if (!dragging) return;
ev.preventDefault();
const x = Math.min(98 - _hmDragW, Math.max(2, ((ev.clientX - rect.left) / rect.width) * 100));
const y = Math.min(94, Math.max(2, ((ev.clientY - rect.top) / rect.height) * 100));
el.style.left = x.toFixed(1) + '%';
el.style.top = y.toFixed(1) + '%';
el._hmPos = { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
const gs = _hmSnapProp(pid, el._hmPos.x, el._hmPos.y);
ghost.style.left = gs.x + '%';
ghost.style.top = gs.y + '%';
};
const up = () => {
document.removeEventListener('pointermove', move);
document.removeEventListener('pointerup', up);
document.removeEventListener('pointercancel', up);
clearTimeout(hold);
ghost.remove();
_hmDragW = 0;
if (!dragging) return;
dragging = false;
_hmFurnOn = false;
layer.classList.remove('hm-furn-on');
if (el._hmPos) {
const o = _hmEnsure(cid0);
const cur = _hmPropsOf(cid0);
if (cur[idx]) {
const snap = _hmSnapProp(cur[idx].id, el._hmPos.x, el._hmPos.y);
cur[idx].x = snap.x; cur[idx].y = snap.y;
o.look.props = cur; save();
el.style.left = snap.x + '%';
el.style.top = snap.y + '%';
showToast(snap.snapped ? (HM_PROP_WHERE[cur[idx].id] === 'wall' ? '摆好了，贴在墙上。' : '摆好了，落在地上。') : '摆好了。');
}
el._hmPos = null;
}
};
const hold = setTimeout(() => {
dragging = true;
_hmFurnOn = true;
layer.classList.add('hm-furn-on');
showToast('拖着摆件放到喜欢的位置');
}, 500);
if (e.pointerType === 'mouse') { clearTimeout(hold); dragging = true; _hmFurnOn = true; layer.classList.add('hm-furn-on'); }
document.addEventListener('pointermove', move);
document.addEventListener('pointerup', up);
document.addEventListener('pointercancel', up);
});
}
function _hmPhotosPaint(cid) {
const host = document.getElementById('hmPhotos');
if (!host) return;
const look = _hmLookOf(cid) || {};
const ps = Array.isArray(look.photos) ? look.photos.filter(x => typeof x === 'string' && x).slice(0, 3) : [];
const pf = (look.photoFrame === 'wood' || look.photoFrame === 'polaroid') ? look.photoFrame : '';
const note = (typeof look.photoNote === 'string') ? look.photoNote : '';
host.setAttribute('data-hm-pframe', pf);
if (!ps.length) { if (host.innerHTML) host.innerHTML = ''; host.hidden = true; return; }
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
const decoOn = (() => { const v = document.getElementById('hmView'); return !!(v && v.hasAttribute('data-hm-deco')); })();
return '<div class="hm-rooms" id="hmRooms">'
+ '<div class="hm-rooms-row">' + chips + '</div>'
+ '<div class="hm-rooms-hd"><p class="hm-rooms-note">换一间屋，家具跟着换；每间屋各自记得你摆的样子。</p>'
+ '<button type="button" class="hm-deco-btn" data-hmdo="deco" aria-label="装修模式">' + (decoOn ? '完成' : '装修') + '</button></div>'
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
const hasCat = _hmPropsOf(cid).some(p => p.id === 'cat');
const acts = [
_hmActBtn('deal', '递一张牌', 'data-hmdo="deal"'),
_hmActBtn('card', '放一张字卡', 'data-hmdo="card"'),
_hmActBtn('sit', '坐一会儿', 'data-hmdo="sit"' + (_hmSitOn ? ' hidden' : '')),
_hmActBtn('note', '留一张纸条', 'data-hmdo="note"'),
_hmActBtn('tea', '泡壶茶', 'data-hmdo="tea"'),
_hmActBtn('feed', '喂猫', 'data-hmdo="feed"' + (hasCat ? '' : ' disabled'), hasCat ? '' : '要先有猫'),
_hmActBtn('tidy', '收拾屋子', 'data-hmdo="tidy"')
].join('');
return '<div class="hm-do">'
+ '<div class="hm-acts" id="hmActs">' + acts + '</div>'
+ (notes.length ? '<button type="button" class="hm-note-pin" data-hmdo="notes" aria-label="看门口的纸条"><i>门口</i><span>' + escapeHTML(notes[notes.length - 1].t.slice(0, 26)) + (notes[notes.length - 1].t.length > 26 ? '…' : '') + '</span><em>' + notes.length + ' 张</em></button>' : '')
+ (card ? '<button type="button" class="hm-sign hm-tablecard" data-hmdo="readcard"><i>桌上</i><span>' + escapeHTML(card.text.slice(0, 30)) + (card.text.length > 30 ? '…' : '') + '</span><em>›</em></button>' : '')
+ (away ? '<p class="hm-do-hint">TA 出门了，今天不敲门。</p>' : '<p class="hm-do-hint">一起听、心情记录、清单和账本都在「我们的空间」——这一页只管这间屋。</p>')
+ '</div>';
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
var HM_SIT_LINES = [
'（椅子挪过来一点）……坐着吧。',
'（很轻）今天这屋里挺安静的。',
'（小声）茶在桌上，凉了自己倒。',
'（头也没抬）你坐着，我一会儿就好。',
'（窗外有风）……就坐一会儿吧。'
];
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
_hmSitSaid++;
_hmSitLast = Date.now();
_hmSayTA(cid, HM_SIT_LINES[Math.floor(Math.random() * HM_SIT_LINES.length)]);
}
function _hmSitTick(cid) {
if (!_hmSitOn || document.body.dataset.view !== 'home') { _hmSitEnd(true); return; }
if (Date.now() - _hmSitLast < 45000 || _hmSitSaid >= 2) return;
if (Math.random() < 0.25) _hmSitSay(cid);
}
var HM_DAY_LINES = {
free:    ['屋里摊着几本书，翻到一半就停在那儿。', 'TA 把窗开了一条缝，让风进来。', '桌上多了两只杯子，一只没动。', '椅子斜对着窗，像刚有人坐过。', '屋里一切照旧，安静得很。'],
busy:    ['桌上那杯水没动过，笔却没停。', '纸摊了一桌，TA 没抬头。', '台灯亮着，屋里只有翻页声。', '屋里很静，只有笔尖在响。', '门虚掩着，能听见写字的声音。'],
rushed:  ['椅子拖出了声响，纸散了一桌。', '屋里脚步来来回回，没停过。', '杯子挪了位置，纸折了一半。', '门开了又关，屋里一阵风。', '桌上乱糟糟的，像刚翻过一遍。'],
rest:    ['毯子搭在椅背上，屋里暖烘烘的。', 'TA 靠在椅子里，窗外的光正好。', '茶还温着，屋里慢慢悠悠。', '屋里光线软下来，什么也不急。', '坐垫挪到了窗边，晒着太阳。'],
sleep:   ['屋里灯留了一盏，被子盖得好好。', '月牙挂在窗角，屋里没声音。', '毯子铺好了，门轻轻带上了。', '屋里只剩钟表的走针声。', '灯暗着，窗外夜色正沉。'],
unknown: ['屋里没开灯，家具都在老位置。', '窗帘拉着，屋里静悄悄。', '屋里安静，像在等人回来。', '桌上的东西都没动过。', '屋里黑着，只有窗透进一点光。']
};
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
const act = (en && en.a && HM_DAY_LINES[en.a]) ? en.a : 'free';
let tp = '';
try { if (en && typeof _cjTimePartOf === 'function') tp = _cjTimePartOf(en) || ''; } catch (e) {}
const pool = HM_DAY_LINES[act];
let h = 0; const s = cid + '|' + dk + '|' + act + '|' + tp;
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
var HM_OBJ_LINES = {
free:    ['你碰了碰桌上的杯子，水纹晃了一下。', '你翻了翻摊开的书，还停在原来那页。', '你把椅子挪了挪，TA 抬头看了你一眼。'],
busy:    ['你碰了碰那支笔，TA 没抬头，只嗯了一声。', '你把杯子往 TA 手边推了推。', '你顺手把散开的纸叠好，TA 点了下头。'],
rushed:  ['你按住那张要被风吹走的纸。', '你把椅子往旁边让了让。', '你碰了碰杯子，才发现水早凉了。'],
rest:    ['你把毯子往 TA 那边拉了拉。', '你碰了碰茶沿，还温着。', '你在坐垫边坐下来，屋里很静。'],
sleep:   ['你把被角掖好，没出声。', '你把灯调暗了一点。', '你碰了碰杯子，又轻轻放下。'],
unknown: ['你碰了碰桌上的东西，屋里没什么动静。', '你随手翻了翻桌上的纸。', '你把杯子摆正了一点。'],
away:    ['屋里没人，你碰了碰桌上的东西。']
};
function _hmObjTalk(cid) {
const now = Date.now();
let last = 0; try { last = +localStorage.getItem('ordinal-hm-obj') || 0; } catch (e) {}
if (now - last < 60000) { showToast('刚碰过了，等一等。'); return; }
try { localStorage.setItem('ordinal-hm-obj', String(now)); } catch (e) {}
const en = (typeof _cjEntry === 'function') ? _cjEntry(cid) : null;
const away = (typeof _cjHiding === 'function' && _cjHiding(en));
const act = away ? 'away' : ((en && en.a && HM_ACT_OBJ[en.a]) ? en.a : 'unknown');
const pool = HM_OBJ_LINES[act] || HM_OBJ_LINES.unknown;
if (Math.random() < 0.5 && _hmDailyFlag('obj')) _hmSayTA(cid, pool[Math.floor(Math.random() * pool.length)]);
else showToast(pool[Math.floor(Math.random() * pool.length)]);
}
function _hmPlantLineText(p) {
const th = _hmPlantThirst(p);
const watered = (p.day === _hmToday());
const step = p.n >= 7 ? '开花了' : (p.n >= 3 ? '长高了' : (p.n > 0 ? '冒了新芽' : '刚栽下'));
const nm = p.nm ? escapeHTML(p.nm) : ((HM_FLOWER[p.kind] && p.kind) ? escapeHTML(HM_FLOWER[p.kind].n) : '还没起名字');
const thTxt = th >= 3 ? ' · 土都发白了，该浇水了' : (th === 2 ? ' · 叶尖有点垂' : '');
return nm + ' · ' + step + ' · 浇过 ' + p.n + ' 次 · ' + (watered ? '今天浇过了' : '今天还没浇') + thTxt;
}
function _hmPlantNoteText(p) {
const th = _hmPlantThirst(p);
const step = p.n >= 7 ? '开花了，屋里多了一点颜色' : (p.n >= 3 ? '长高了，叶子密了一层' : (p.n > 0 ? '冒出了新芽' : '刚栽下，还等着第一口水'));
const nm = p.nm ? ' · 它叫「' + escapeHTML(p.nm) + '」' : ((HM_FLOWER[p.kind] && p.kind) ? ' · 这是盆' + HM_FLOWER[p.kind].n : '');
const thTxt = th >= 3 ? ' · 土都发白了，该浇水了' : (th === 2 ? ' · 叶尖有点垂，两天没喝水了' : '');
return step + nm + thTxt;
}
function _hmWaterPaint(cid, p) {
const dk = _hmToday();
const watered = (p.day === dk);
const th = _hmPlantThirst(p);
const paint = sec => {
if (!sec) return;
const btn = sec.querySelector('.hm-plant-big');
if (btn) {
btn.innerHTML = _hmPlantSVG(p) + '<span class="hm-water-drops" aria-hidden="true"><i></i><i></i><i></i></span>';
btn.classList.toggle('is-watered', watered);
btn.setAttribute('data-hm-thirst', String(th));
btn.title = watered ? '今天已经浇过水了' : '浇点水';
btn.classList.remove('hm-watering');
void btn.offsetWidth;
btn.classList.add('hm-watering');
setTimeout(() => { if (btn) btn.classList.remove('hm-watering'); }, 1500);
}
const st = sec.querySelector('.hm-plant-st');
if (st) {
const short = '浇过 ' + p.n + ' 次 · ' + (watered ? '今天浇过了' : '今天还没浇');
st.textContent = (sec.id === 'hmSetPlant')
? ((p.n >= 7 ? '开花了' : (p.n >= 3 ? '长高了' : (p.n > 0 ? '冒出新芽' : '刚栽下'))) + ' · ' + short)
: short;
}
const nt = document.getElementById('hmPlantNote');
if (nt) nt.textContent = _hmPlantLineText(p);
};
paint(document.getElementById('hmPlantSec'));
paint(document.getElementById('hmSetPlant'));
paint(document.getElementById('hmPlantSlot'));
}
function _hmWater(cid) {
const o = _hmEnsure(cid);
const p = _hmPlantOf(cid);
const dk = _hmToday();
if (p.day === dk) { showToast('今天已经浇过水了。'); return; }
p.n = Math.min(999, p.n + 1); p.day = dk; p.at = Date.now();
if (!p.born) p.born = dk;
o.look.plant = p; save();
_hmWaterPaint(cid, p);
_hmStatsBump(cid, 'water');
showToast(p.n === 3 ? '花长出新叶了。' : (p.n === 7 ? '花开了。' : '浇过水了。'));
if (Math.random() < 0.12 && _hmDailyFlag('water')) _hmSayTA(cid, HM_WATER_LINES[Math.floor(Math.random() * HM_WATER_LINES.length)]);
}
var _hmDoorT = 0;
function _hmDoorNote(t) {
const el = document.getElementById('hmDoorNote');
if (!el) return;
el.textContent = t;
clearTimeout(_hmDoorT);
_hmDoorT = setTimeout(() => {
const e2 = document.getElementById('hmDoorNote');
if (e2) {
const v = document.getElementById('hmView');
e2.textContent = (v && v.getAttribute('data-hm-away')) ? 'TA 出门了，门铃没人应。' : '按一下，看看 TA 在不在。';
}
}, 3500);
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
_hmSayTA(cid, HM_KNOCK_LINES[Math.floor(Math.random() * HM_KNOCK_LINES.length)]);
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
if (Math.random() < 0.5 && _hmDailyFlag('tea')) _hmSayTA(cid, HM_TEA_LINES[Math.floor(Math.random() * HM_TEA_LINES.length)]);
}
function _hmFeed(cid) {
if (!_hmPropsOf(cid).some(p => p.id === 'cat')) { showToast('屋里还没有猫，先去装扮里摆一只。'); return; }
const now = Date.now();
let last = 0; try { last = +localStorage.getItem('ordinal-hm-feed') || 0; } catch (e) {}
if (now - last < 60000) { showToast('刚喂过，等一等。'); return; }
try { localStorage.setItem('ordinal-hm-feed', String(now)); } catch (e) {}
const cat = document.querySelector('#hmFurn .hm-furn-cat');
if (cat) {
cat.classList.remove('hm-furn-fed'); void cat.offsetWidth; cat.classList.add('hm-furn-fed');
setTimeout(() => { if (cat) cat.classList.remove('hm-furn-fed'); }, 2600);
}
showToast('猫凑过来吃了，尾巴竖着。');
if (Math.random() < 0.5 && _hmDailyFlag('feed')) _hmSayTA(cid, HM_FEED_LINES[Math.floor(Math.random() * HM_FEED_LINES.length)]);
}
function _hmTidy(cid) {
const cur = _hmPropsOf(cid);
const rk = _hmRoomOf(cid);
const bigsMoved = (() => { try { return Object.keys((homeOf(cid) || {}).look && homeOf(cid).look.bigs && homeOf(cid).look.bigs[rk] || {}).length > 0; } catch (e) { return false; } })();
if (!cur.length && !bigsMoved) { showToast('屋里空空的，没什么可收拾。'); return; }
const o = _hmEnsure(cid);
o.look.props = cur.map(p => ({ id: p.id }));
if (o.look.bigs && o.look.bigs[rk]) delete o.look.bigs[rk];
save(); _hmRepaint(cid);
showToast('把屋子收拾整齐了。');
if (Math.random() < 0.5 && _hmDailyFlag('tidy')) _hmSayTA(cid, HM_TIDY_LINES[Math.floor(Math.random() * HM_TIDY_LINES.length)]);
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
_hmSayTA(cid, HM_NOTE_LINES[Math.floor(Math.random() * HM_NOTE_LINES.length)]);
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
const o = _hmEnsure(cid);
if (!Array.isArray(o.look.photos)) o.look.photos = [];
if (o.look.photos.length >= 3) { showToast('最多三张。'); return; }
mochiFilePick({
id: 'hmphoto', accept: 'image/*',
onFiles: files => {
const f = files && files[0];
if (!f) return;
const rd = new FileReader();
rd.onload = () => {
const put = img => {
const o2 = _hmEnsure(cid);
if (!Array.isArray(o2.look.photos)) o2.look.photos = [];
o2.look.photos.push(String(img));
o2.look.photos = o2.look.photos.slice(-3);
save(); _hmRepaint(cid); _hmPaintDress(cid);
showToast('照片挂上墙了。');
};
if (typeof compressImageDataURL === 'function') compressImageDataURL(String(rd.result), 900, 0.82).then(put).catch(() => showToast('这张图读不出来。'));
else put(String(rd.result));
};
rd.readAsDataURL(f);
}
});
}
var HM_DOOR_SVG = '<svg viewBox="0 0 120 156" fill="none" shape-rendering="geometricPrecision" aria-hidden="true">'
+ '<defs>'
+ '<filter id="hmDoorLift" x="-25%" y="-25%" width="160%" height="175%">'
+ '<feDropShadow dx="4" dy="6" stdDeviation="0" flood-color="#6b4a33" flood-opacity=".12"/>'
+ '<feDropShadow dx="1" dy="2" stdDeviation="1.2" flood-color="#6b4a33" flood-opacity=".16"/></filter>'
+ '<filter id="hmDoorSoft" x="-30%" y="-30%" width="160%" height="170%">'
+ '<feDropShadow dx="1.2" dy="2.4" stdDeviation="1.6" flood-color="#6b4a33" flood-opacity=".14"/></filter>'
+ '<filter id="hmDoorGrain"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="11"/>'
+ '<feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope=".3"/></feComponentTransfer></filter>'
+ '</defs>'
+ '<rect class="hm-r-wall" x="0" y="0" width="120" height="156"/>'
+ '<rect class="hm-r-wall2" x="0" y="118" width="120" height="38"/>'
+ '<rect class="hm-r-rail" x="0" y="116" width="120" height="2.5" rx="1.2"/>'
+ '<rect class="hm-r-floor" x="0" y="138" width="120" height="18"/>'
+ '<rect class="hm-r-baseband" x="0" y="135" width="120" height="4"/>'
+ '<g filter="url(#hmDoorLift)">'
+ '<rect class="hm-r-frame" x="26" y="14" width="72" height="124" rx="4"/>'
+ '<rect class="hm-d-door" x="31" y="19" width="62" height="119" rx="3"/>'
+ '<rect class="hm-d-panel" x="38" y="27" width="48" height="44" rx="3"/>'
+ '<rect class="hm-d-panel-hi" x="40" y="29" width="44" height="40" rx="2"/>'
+ '<rect class="hm-d-panel" x="38" y="79" width="48" height="50" rx="3"/>'
+ '<rect class="hm-d-panel-hi" x="40" y="81" width="44" height="46" rx="2"/>'
+ '<circle class="hm-r-glass" cx="62" cy="49" r="15"/>'
+ '<circle class="hm-r-sun" cx="67" cy="44" r="5"/>'
+ '<path class="hm-r-moon" d="M66 42a6 6 0 1 0 5 9 7 7 0 0 1-5-9Z"/>'
+ '<path class="hm-d-mull" d="M62 34v30M47 49h30"/>'
+ '<circle class="hm-d-port" cx="62" cy="49" r="15"/>'
+ '<rect class="hm-d-knob-plate" x="82" y="88" width="7" height="12" rx="3"/>'
+ '<circle class="hm-d-knob" cx="85.5" cy="94" r="3.4"/>'
+ '<rect class="hm-d-hinge" x="31" y="34" width="3" height="9" rx="1.5"/>'
+ '<rect class="hm-d-hinge" x="31" y="112" width="3" height="9" rx="1.5"/>'
+ '</g>'
+ '<g filter="url(#hmDoorSoft)">'
+ '<path class="hm-r-cord" d="M13 0v13"/>'
+ '<path class="hm-r-shade" d="M5 26h16l-4-11H9Z"/>'
+ '<rect class="hm-r-shade" x="4" y="26" width="18" height="3.4" rx="1.7"/>'
+ '<circle class="hm-r-bulb" cx="13" cy="31" r="3"/>'
+ '<ellipse class="hm-r-lampglow hm-d-lampglow" cx="13" cy="35" rx="10" ry="4.5"/>'
+ '</g>'
+ '<g filter="url(#hmDoorSoft)">'
+ '<rect class="hm-r-rug" x="28" y="140" width="68" height="11" rx="3"/>'
+ '<rect class="hm-r-rugb" x="31" y="142.5" width="62" height="6" rx="2"/>'
+ '<path class="hm-d-shoe" d="M40 146h9a3 3 0 0 1 3 3v1H38v-1a3 3 0 0 1 2-3Z"/>'
+ '<path class="hm-d-shoe" d="M53 146h9a3 3 0 0 1 3 3v1H51v-1a3 3 0 0 1 2-3Z"/>'
+ '<path class="hm-d-shoe2" d="M66 147h8a2.6 2.6 0 0 1 2.6 2.6v.4H64v-.4A2.6 2.6 0 0 1 66 147Z"/>'
+ '<path class="hm-d-shoe2" d="M78 147h8a2.6 2.6 0 0 1 2.6 2.6v.4H76v-.4A2.6 2.6 0 0 1 78 147Z"/>'
+ '</g>'
+ '<g filter="url(#hmDoorSoft)">'
+ '<path class="hm-r-leaf" d="M108 126c-6-3-8-9-5-14 5 2 7 8 5 14Z"/>'
+ '<path class="hm-r-leaf-deep" d="M108 128c6-4 7-10 4-15-5 3-6 9-4 15Z"/>'
+ '<path class="hm-r-pot" d="M102 128h12l-2 11h-8Z"/>'
+ '<rect class="hm-r-pot" x="100" y="126" width="16" height="3.4" rx="1.7"/>'
+ '</g>'
+ '<rect width="120" height="156" filter="url(#hmDoorGrain)" opacity=".1" style="mix-blend-mode:multiply"/>'
+ '</svg>';
var HM_DOOR_ICON_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'
+ '<path d="M3.6 11.4 12 4.3l8.4 7.1"/><path d="M5.8 10.4v9.3h12.4v-9.3"/>'
+ '<path d="M10 19.7v-4.6h4v4.6"/><path d="M12 12.4v1.6"/>'
+ '</svg>';
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
const away = (typeof _cjHiding === 'function' && _cjHiding(en));
return '<div class="hm-hero">'
+ '<div class="hm-doorpanel">'
+ '<span class="hm-doorart" aria-hidden="true">' + HM_DOOR_SVG + '</span>'
+ '<div class="hm-doorside">'
+ '<div class="hm-card">'
+ '<span class="hm-door-icon" aria-hidden="true">' + HM_DOOR_ICON_SVG + '</span>'
+ '<div class="hm-id"><b class="hm-name">我们的家</b>'
+ '<span class="hm-hello">' + escapeHTML(hello) + '</span></div>'
+ '</div>'
+ '<button type="button" class="hm-door" data-hmdo="knock" aria-label="按门铃">'
+ '<span class="hm-door-bell"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4.2a5 5 0 0 0-5 5v3.1l-1.7 2.6h13.4L17 12.3V9.2a5 5 0 0 0-5-5z"/><path d="M9.9 18.4a2.2 2.2 0 0 0 4.2 0"/><path d="M12 2.6v1.6"/></svg></span>'
+ '<span class="hm-door-note" id="hmDoorNote">' + (away ? 'TA 出门了，门铃没人应。' : '按一下，看看 TA 在不在。') + '</span>'
+ '</button>'
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
const rsc = HM_ROOM_SCENES[rk0] || null;
const scene = rsc ? (rsc[(act === 'busy' || act === 'rushed') ? 1 : 0] || rsc[0]) : (HM_SCENES[act] || HM_SCENES.unknown);
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
const facts = fact('状态', en.status) + fact('此刻心情', mood) + wxFact + fact('离你', pres) + visitFact;
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
+ '<span class="hm-skin-sw" aria-hidden="true"></span><span class="hm-skin-n">' + s.n + '</span></button>';
const propOn = k => _hmPropsOf(cid).some(p => p.id === k);
const propChip = k => {
const ok = _hmUnlocked(k, cid);
return '<button type="button" class="hm-chip hm-prop-chip' + (propOn(k) ? ' on' : '') + (ok ? '' : ' lock') + '" data-prop="' + k + '"' + (ok ? '' : ' title="还没解锁"') + '>' + HM_PROPS[k].n + (ok ? '' : '<i class="lk">未解锁</i>') + '</button>';
};
const pool = _hmPoolOf(cid);
const inPool = k => pool.indexOf(k) >= 0;
const furnRow = HM_FURN_KEYS.filter(inPool).map(propChip).join('');
const wallRow = HM_WALL_KEYS.filter(inPool).map(propChip).join('');
const smallRow = Object.keys(HM_PROPS).filter(k => HM_FURN_KEYS.indexOf(k) < 0 && HM_WALL_KEYS.indexOf(k) < 0 && inPool(k)).map(propChip).join('');
const roomNow = _hmRoomOf(cid);
const roomChip = (k, label) => '<button type="button" class="hm-chip' + (roomNow === k ? ' on' : '') + '" data-room="' + k + '">' + label + '</button>';
const ps = Array.isArray(look.photos) ? look.photos.filter(x => typeof x === 'string' && x).slice(0, 3) : [];
const psRow = '<div class="hm-photos-set">'
+ [0, 1, 2].map(i => ps[i]
? '<span class="hm-photo-slot"><img src="' + escapeHTML(ps[i]) + '" alt="" loading="lazy" decoding="async"><button type="button" class="hm-photo-x" data-hmcmd="photoclear" data-i="' + i + '" aria-label="摘掉这张">×</button></span>'
: '<span class="hm-photo-slot hm-empty"><i>空</i></span>').join('')
+ (ps.length < 3 ? '<button type="button" class="hm-btn" data-hmcmd="photopick">' + (ps.length ? '再传一张' : '传一张') + '</button>'
+ '<button type="button" class="hm-btn" data-hmcmd="favphoto">从收藏</button>' : '')
+ '</div>';
const plant = _hmPlantOf(cid);
const watered = (plant.day === _hmToday());
const plantStep = plant.n >= 7 ? '开花了' : (plant.n >= 3 ? '长高了' : (plant.n > 0 ? '冒出新芽' : '刚栽下'));
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
+ '<div class="hm-dress-row"><span class="hm-dress-cap">家具</span><div class="hm-dress-main">' + furnRow + '</div></div>'
+ '<div class="hm-dress-row"><span class="hm-dress-cap">挂墙</span><div class="hm-dress-main">' + wallRow + '</div></div>'
+ '<div class="hm-dress-row"><span class="hm-dress-cap">小件</span><div class="hm-dress-main">' + smallRow + '</div></div>'
+ '<p class="hm-dress-note">这一间屋该有的家具（通用那几件排在后面）；最多十二件，点一下放、再点一下收；挂墙那一排钉在墙上，其余落地，长按可拖。</p>'
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
+ '<p class="hm-set-cap">窗台那盆花</p>'
+ '<div class="hm-dress-row" id="hmSetPlant"><span class="hm-dress-cap">花</span><div class="hm-dress-main">'
+ '<button type="button" class="hm-plant-big hm-plant small' + (watered ? ' is-watered' : '') + '" data-hmwater="1" data-hmplant="1" data-hm-thirst="' + _hmPlantThirst(plant) + '" data-hm-flower="' + (HM_FLOWER[plant.kind] ? plant.kind : '') + '" aria-label="给花浇水" title="' + (watered ? '今天已经浇过水了' : '浇点水') + '">'
+ _hmPlantSVG(plant) + '<span class="hm-water-drops" aria-hidden="true"><i></i><i></i><i></i></span></button>'
+ '<span class="hm-plant-st">' + plantStep + ' · 浇过 ' + plant.n + ' 次 · ' + (watered ? '今天浇过了' : '今天还没浇') + '</span>'
+ '</div></div>'
+ '<div class="hm-dress-row"><span class="hm-dress-cap">名字</span><div class="hm-dress-main">'
+ '<input class="hm-name-inp" id="hmPlantName" maxlength="12" placeholder="给它起个名字" value="' + escapeHTML(plant.nm || '') + '">'
+ '<button type="button" class="hm-btn" data-hmdo="plantcard">看记录</button>'
+ '</div></div>'
+ '<div class="hm-dress-row"><span class="hm-dress-cap">品种</span><div class="hm-dress-main">'
+ [['', '一盆花'], ['daisy', '雏菊'], ['bell', '铃兰'], ['rose', '小玫瑰']].map(t =>
'<button type="button" class="hm-chip' + ((plant.kind || '') === t[0] ? ' on' : '') + '" data-flower="' + t[0] + '">' + t[1] + '</button>').join('')
+ '</div></div>'
+ '<p class="hm-dress-note">点花就浇水，一天一次；浇 3 次长叶、7 次开花。两天没浇叶尖会垂，浇一次就回来。</p>'
+ '<p class="hm-set-cap">照片墙</p>'
+ '<div class="hm-dress-row"><span class="hm-dress-cap">墙上的照片</span><div class="hm-dress-main">' + psRow + '</div></div>'
+ '<p class="hm-dress-note">最多三张；会跟着备份走，别放太满。</p>'
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
const o = _hmEnsure(cid);
const p = _hmPlantOf(cid);
p.nm = inp.value.trim().slice(0, 12);
o.look.plant = p;
save();
const nt = document.getElementById('hmPlantNote');
if (nt) nt.textContent = _hmPlantLineText(p);
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
const szb = e.target.closest('[data-hmsz]');
if (szb) {
const d = szb.getAttribute('data-hmsz') || '';
if (d === 'bigger' || d === 'smaller' || d === 'reset') { _hmSelScale(d, cid); return; }
}
if (_hmSelPick(e, cid)) return;
if (_hmSel && !e.target.closest('.hm-deco-bar,.hm-size-bar')) { _hmSel = null; _hmSelPaint(cid); }
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
else if (a === 'plantcard') _hmPlantCard(cid);
else if (a === 'daylog') _hmDayLogOpen(cid);
else if (a === 'tea') _hmTea(cid);
else if (a === 'feed') _hmFeed(cid);
else if (a === 'tidy') _hmTidy(cid);
else if (a === 'deco') {
const vw = document.getElementById('hmView');
if (vw) {
const on = !vw.hasAttribute('data-hm-deco');
if (on) vw.setAttribute('data-hm-deco', '1'); else vw.removeAttribute('data-hm-deco');
const db = document.querySelector('.hm-deco-btn');
if (db) db.textContent = on ? '完成' : '装修';
if (!on) { _hmSel = null; _hmSelPaint(cid); }
if (on && typeof showToast === 'function') showToast('装修模式：拖动屋里任何东西，底下那排加家具。');
}
}
else if (a === 'readcard') {
const cd = (_hmLookOf(cid) || {}).card;
if (cd && typeof openModal === 'function') openModal('桌上那张字卡', '', () => {}, { noInput: true, staticText: cd.text, okText: '知道了' });
}
return;
}
if (e.target.closest('[data-hmplant]')) { _hmWater(cid); return; }
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
const ps = (_hmLookOf(cid) || {}).photos || [];
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
const o = _hmEnsure(cid);
if (!Array.isArray(o.look.photos)) o.look.photos = [];
if (o.look.photos.length >= 3) { showToast('最多三张，先摘一张。'); return; }
o.look.photos.push(String(img));
o.look.photos = o.look.photos.slice(-3);
save(); _hmPickClose(); _hmRepaint(cid); _hmPaintDress(cid);
showToast('挂到墙上了。');
}
return;
}
if (e.target.closest('#hmPickMask') && e.target.id === 'hmPickMask') { _hmPickClose(); return; }
const pr = e.target.closest('[data-prop]');
if (pr) {
const k = pr.dataset.prop || '';
if (!HM_PROPS[k]) return;
if (!_hmUnlocked(k, cid)) {
const u = HM_UNLOCK.find(x => x.id === k);
showToast(u ? '还没解锁：' + u.hint : '');
return;
}
const o = _hmEnsure(cid);
const cur = _hmPropsOf(cid).slice();
const i = cur.findIndex(p => p.id === k);
if (i >= 0) cur.splice(i, 1);
else {
if (cur.length >= HM_PROP_MAX) { showToast('屋里放不下了，先收一件。'); return; }
cur.push({ id: k });
}
o.look.props = cur;
save(); _hmRepaint(cid); _hmPaintDress(cid);
return;
}
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
const o = _hmEnsure(cid);
if (!o.look.plant || typeof o.look.plant !== 'object') o.look.plant = _hmPlantOf(cid);
const k = flw.getAttribute('data-flower') || '';
o.look.plant.kind = HM_FLOWER[k] ? k : '';
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
save(); _hmSwap(() => { _hmApplyLook(); _hmRepaint(cid); _hmPaintDress(cid); });
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
const o = _hmEnsure(cid);
const ps = Array.isArray(o.look.photos) ? o.look.photos.slice() : [];
if (ps.length < 2) { showToast('至少两张才能换位。'); return; }
ps.push(ps.shift());
o.look.photos = ps; save(); _hmRepaint(cid); _hmPaintDress(cid);
const box = document.querySelector('#hmStage .hm-photos');
if (box) { box.classList.add('is-swap'); setTimeout(() => { if (box) box.classList.remove('is-swap'); }, 340); }
showToast('换了个位置。');
return;
}
if (c === 'photopick') { _hmPhotoPick(cid); return; }
if (c === 'favcard') { _hmPickOpen(cid, 'fav'); return; }
if (c === 'favphoto') { _hmPickOpen(cid, 'favphoto'); return; }
if (c === 'photoclear') {
const o = _hmEnsure(cid);
const i = Math.max(0, +cmd.dataset.i || 0);
if (Array.isArray(o.look.photos) && i < o.look.photos.length) {
o.look.photos.splice(i, 1);
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
_hmFurnPaint(cid);
_hmPlantPaint(cid);
_hmTablePaint(cid, en);
_hmPhotosPaint(cid);
_hmDecoBarPaint(cid);
}
function _hmBigsOf(cid) {
const rk = _hmRoomOf(cid);
const list = HM_ROOM_PIECES_LIST[rk] || HM_ROOM_PIECES_LIST[''];
const o = homeOf(cid);
const saved = (o && o.look && o.look.bigs && !Array.isArray(o.look.bigs) && o.look.bigs[rk] && typeof o.look.bigs[rk] === 'object') ? o.look.bigs[rk] : {};
const lay = HM_ROOM_LAYOUT[rk] || null;
return list.map(id => {
const pc = HM_ROOM_PIECES[id];
if (!pc) return null;
const bx = pc.box.slice();
if (lay && lay[id]) { bx[0] += lay[id][0]; bx[1] += lay[id][1]; }
const def = { x: bx[0] / HM_ROOM_W * 100, y: bx[1] / HM_ROOM_H * 100, w: bx[2] / HM_ROOM_W * 100 };
const sv = saved[id];
const x = (sv && typeof sv.x === 'number' && isFinite(sv.x)) ? Math.min(97, Math.max(1, sv.x)) : Math.round(def.x * 10) / 10;
const y = (sv && typeof sv.y === 'number' && isFinite(sv.y)) ? Math.min(94, Math.max(0, sv.y)) : Math.round(def.y * 10) / 10;
const sc = (sv && typeof sv.sc === 'number' && isFinite(sv.sc)) ? Math.min(1.6, Math.max(0.6, sv.sc)) : 1;
return { id: id, x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10, w: Math.round(def.w * 10) / 10, sc: sc, vb: bx.join(' '), svg: pc.svg };
}).filter(Boolean);
}
function _hmBigsPaint(cid) {
const layer = document.getElementById('hmBigs');
if (!layer) return;
const items = _hmBigsOf(cid);
const html = items.map(p =>
'<svg class="hm-big" data-hmbig="' + p.id + '" viewBox="' + p.vb + '" preserveAspectRatio="xMinYMin meet" style="left:' + p.x + '%;top:' + p.y + '%;width:' + (p.w * p.sc) + '%" aria-hidden="true">' + p.svg + '</svg>').join('');
if (layer.innerHTML !== html) layer.innerHTML = html;
}
var _hmBigDrag = null;
function _hmBigsDrag(cid) {
const layer = document.getElementById('hmBigs');
if (!layer || layer._bigBound) return;
layer._bigBound = 1;
layer.addEventListener('pointerdown', e => {
const view = document.getElementById('hmView');
if (!view || !view.hasAttribute('data-hm-deco')) return;
const el = e.target.closest('[data-hmbig]');
if (!el) return;
e.preventDefault();
const cid0 = _hmCid();
if (!cid0) return;
const rect = layer.getBoundingClientRect();
const rk = _hmRoomOf(cid0);
const id = el.dataset.hmbig;
let dragging = false;
const move = ev => {
if (!dragging) return;
ev.preventDefault();
const x = Math.min(97, Math.max(1, ((ev.clientX - rect.left) / rect.width) * 100));
const y = Math.min(94, Math.max(0, ((ev.clientY - rect.top) / rect.height) * 100));
el.style.left = x.toFixed(1) + '%';
el.style.top = y.toFixed(1) + '%';
el._hmBigPos = { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
};
const up = () => {
document.removeEventListener('pointermove', move);
document.removeEventListener('pointerup', up);
document.removeEventListener('pointercancel', up);
if (!dragging) return;
dragging = false;
if (el._hmBigPos) {
const o = _hmEnsure(cid0);
if (!o.look.bigs || typeof o.look.bigs !== 'object' || Array.isArray(o.look.bigs)) o.look.bigs = {};
if (!o.look.bigs[rk] || typeof o.look.bigs[rk] !== 'object') o.look.bigs[rk] = {};
o.look.bigs[rk][id] = el._hmBigPos;
save();
el._hmBigPos = null;
}
};
const hold = setTimeout(() => { dragging = true; }, 400);
if (e.pointerType === 'mouse') { clearTimeout(hold); dragging = true; }
document.addEventListener('pointermove', move);
document.addEventListener('pointerup', up);
document.addEventListener('pointercancel', up);
});
}
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
var _hmSel = null;
function _hmSelPaint(cid) {
const view = document.getElementById('hmView');
const bar = document.getElementById('hmSizeBar');
const tx = document.getElementById('hmSizeTx');
if (!view || !bar) return;
document.querySelectorAll('#hmStage .hm-sel').forEach(el => el.classList.remove('hm-sel'));
if (!_hmSel) {
view.removeAttribute('data-hm-sel');
if (tx) tx.textContent = '拖着屋里任何东西换位置，点一件能改大小';
return;
}
view.setAttribute('data-hm-sel', '1');
const el = _hmSel.kind === 'big'
? document.querySelector('#hmBigs [data-hmbig="' + _hmSel.id + '"]')
: document.querySelector('#hmFurn [data-hmfurn="' + _hmSel.idx + '"]');
if (el) el.classList.add('hm-sel');
if (tx) tx.textContent = (el && el.getAttribute('title')) || (_hmSel.kind === 'big' ? '大件' : '家具');
}
function _hmSelPick(e, cid) {
const view = document.getElementById('hmView');
if (!view || !view.hasAttribute('data-hm-deco')) return false;
const big = e.target.closest('[data-hmbig]');
const furn = e.target.closest('[data-hmfurn]');
if (big) { _hmSel = { kind: 'big', id: big.getAttribute('data-hmbig') }; _hmSelPaint(cid); return true; }
if (furn) { _hmSel = { kind: 'furn', idx: +furn.getAttribute('data-hmfurn') }; _hmSelPaint(cid); return true; }
return false;
}
function _hmSelScale(dir, cid) {
if (!_hmSel) return;
const o = _hmEnsure(cid);
const step = 0.12;
if (_hmSel.kind === 'furn') {
const cur = _hmPropsOf(cid).slice();
const it = cur[_hmSel.idx];
if (!it) return;
const sc = dir === 'reset' ? 1 : Math.min(1.6, Math.max(0.6, (it.sc || 1) + (dir === 'bigger' ? step : -step)));
cur[_hmSel.idx] = { id: it.id, x: it.x, y: it.y, sc: Math.round(sc * 100) / 100 };
o.look.props = cur; save(); _hmRepaint(cid); _hmSelPaint(cid);
} else {
const rk = _hmRoomOf(cid);
if (!o.look.bigs || !o.look.bigs[rk] || !o.look.bigs[rk][_hmSel.id]) return;
const cur = o.look.bigs[rk][_hmSel.id];
const sc = dir === 'reset' ? 1 : Math.min(1.6, Math.max(0.6, (cur.sc || 1) + (dir === 'bigger' ? step : -step)));
o.look.bigs[rk][_hmSel.id] = { x: cur.x, y: cur.y, sc: Math.round(sc * 100) / 100 };
save(); _hmRepaint(cid); _hmSelPaint(cid);
}
}
function _hmDecoBarPaint(cid) {
const bar = document.getElementById('hmDecoBar');
if (!bar || !cid) return;
const on = k => _hmPropsOf(cid).some(p => p.id === k);
const chip = k => {
const ok = _hmUnlocked(k, cid);
return '<button type="button" class="hm-chip hm-deco-chip' + (on(k) ? ' on' : '') + (ok ? '' : ' lock') + '" data-prop="' + k + '">' + HM_PROPS[k].n + '</button>';
};
bar.innerHTML = '<div class="hm-size-bar" id="hmSizeBar">'
+ '<span class="hm-size-tx" id="hmSizeTx">拖着屋里任何东西换位置，点一件能改大小</span>'
+ '<button type="button" class="hm-btn" data-hmsz="smaller">小一点</button>'
+ '<button type="button" class="hm-btn" data-hmsz="bigger">大一点</button>'
+ '<button type="button" class="hm-btn" data-hmsz="reset">放回原样</button>'
+ '</div>'
+ '<div class="hm-deco-chips">' + _hmPoolOf(cid).map(chip).join('') + '</div>'
+ '<div class="hm-deco-acts">'
+ '<button type="button" class="hm-btn" data-hmdo="tidy">收拾</button>'
+ '<button type="button" class="hm-btn" data-hmdo="deco">完成</button>'
+ '</div>';
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
_hmPropsNormalize(cid);
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
_hmFurnDrag(cid);
_hmBigsDrag(cid);
page.scrollTop = st;
if (!_hmLiveT) { _hmLiveT = 1; hb30Add(_hmLiveTick); }
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
_hmPropsNormalize(cid);
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
