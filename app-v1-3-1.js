const LANGUAGES=[
{code:"auto",name:"Auto detect"},{code:"en",name:"English"},{code:"zh",name:"Chinese Simplified"},{code:"ja",name:"Japanese"},{code:"es",name:"Spanish"},{code:"az",name:"Azerbaijani"},{code:"tr",name:"Turkish"},{code:"ru",name:"Russian"},{code:"fr",name:"French"},{code:"de",name:"German"},{code:"it",name:"Italian"},{code:"pt",name:"Portuguese"},{code:"ar",name:"Arabic"},{code:"ko",name:"Korean"}];
const PHRASES=[{"region": "china", "category": "Taxi", "text": "Please take me to this address.", "translated": "请带我去这个地址。", "romanization": "qǐng dài wǒ qù zhè ge dì zhǐ.", "note": "Show the address after this."}, {"region": "china", "category": "Taxi", "text": "Please use the meter.", "translated": "请打表。", "romanization": "qǐng dǎ biǎo.", "note": "Useful in taxis."}, {"region": "china", "category": "Taxi", "text": "Can you wait here for five minutes?", "translated": "你能在这里等我五分钟吗？", "romanization": "nǐ néng zài zhè lǐ děng wǒ wǔ fēn zhōng ma?", "note": "Short waiting request."}, {"region": "china", "category": "Hotel", "text": "I have a reservation under this name.", "translated": "我用这个名字预订了房间。", "romanization": "wǒ yòng zhè ge míng zi yù dìng le fáng jiān.", "note": "Show your name/passport."}, {"region": "china", "category": "Hotel", "text": "Can I check in early?", "translated": "我可以提前入住吗？", "romanization": "wǒ kě yǐ tí qián rù zhù ma?", "note": "Hotel check-in."}, {"region": "china", "category": "Restaurant", "text": "Do you have an English menu?", "translated": "你们有英文菜单吗？", "romanization": "nǐ men yǒu yīng wén cài dān ma?", "note": "Restaurant basic."}, {"region": "china", "category": "Restaurant", "text": "I do not eat pork.", "translated": "我不吃猪肉。", "romanization": "wǒ bù chī zhū ròu.", "note": "Dietary need."}, {"region": "china", "category": "Restaurant", "text": "Can I have the bill, please?", "translated": "请给我账单。", "romanization": "qǐng gěi wǒ zhàng dān.", "note": "Paying."}, {"region": "china", "category": "Payments", "text": "Can I pay by card?", "translated": "我可以刷卡吗？", "romanization": "wǒ kě yǐ shuā kǎ ma?", "note": "Card payment."}, {"region": "china", "category": "Directions", "text": "Where is the nearest metro station?", "translated": "最近的地铁站在哪里？", "romanization": "zuì jìn de dì tiě zhàn zài nǎ lǐ?", "note": "Navigation."}, {"region": "china", "category": "Shopping", "text": "How much is this?", "translated": "这个多少钱？", "romanization": "zhè ge duō shǎo qián?", "note": "Price."}, {"region": "china", "category": "Emergency", "text": "I need help.", "translated": "我需要帮助。", "romanization": "wǒ xū yào bāng zhù.", "note": "Emergency."}, {"region": "china", "category": "Medical", "text": "I need a doctor.", "translated": "我需要医生。", "romanization": "wǒ xū yào yī shēng.", "note": "Medical."}, {"region": "china", "category": "General", "text": "Can you speak more slowly?", "translated": "你可以说慢一点吗？", "romanization": "nǐ kě yǐ shuō màn yì diǎn ma?", "note": "Conversation."}, {"region": "china", "category": "General", "text": "Please write it down.", "translated": "请写下来。", "romanization": "qǐng xiě xià lái.", "note": "When pronunciation is hard."}, {"region": "china", "category": "General", "text": "I do not understand.", "translated": "我不明白。", "romanization": "wǒ bù míng bai.", "note": "Basic."}, {"region": "japan", "category": "Taxi", "text": "Please take me to this address.", "translated": "この住所までお願いします。", "romanization": "kono jūsho made onegai shimasu.", "note": "Show the address after this."}, {"region": "japan", "category": "Taxi", "text": "Please use the meter.", "translated": "メーターを使ってください。", "romanization": "mētā o tsukatte kudasai.", "note": "Useful in taxis."}, {"region": "japan", "category": "Taxi", "text": "Can you wait here for five minutes?", "translated": "ここで5分待ってもらえますか？", "romanization": "koko de go-fun matte moraemasu ka?", "note": "Short waiting request."}, {"region": "japan", "category": "Hotel", "text": "I have a reservation under this name.", "translated": "この名前で予約しています。", "romanization": "kono namae de yoyaku shite imasu.", "note": "Show your name/passport."}, {"region": "japan", "category": "Hotel", "text": "Can I check in early?", "translated": "早めにチェックインできますか？", "romanization": "hayame ni chekku-in dekimasu ka?", "note": "Hotel check-in."}, {"region": "japan", "category": "Restaurant", "text": "Do you have an English menu?", "translated": "英語のメニューはありますか？", "romanization": "eigo no menyū wa arimasu ka?", "note": "Restaurant basic."}, {"region": "japan", "category": "Restaurant", "text": "I do not eat pork.", "translated": "豚肉は食べません。", "romanization": "butaniku wa tabemasen.", "note": "Dietary need."}, {"region": "japan", "category": "Restaurant", "text": "Can I have the bill, please?", "translated": "お会計をお願いします。", "romanization": "okaikei o onegai shimasu.", "note": "Paying."}, {"region": "japan", "category": "Payments", "text": "Can I pay by card?", "translated": "カードで払えますか？", "romanization": "kādo de haraemasu ka?", "note": "Card payment."}, {"region": "japan", "category": "Directions", "text": "Where is the nearest train station?", "translated": "一番近い駅はどこですか？", "romanization": "ichiban chikai eki wa doko desu ka?", "note": "Navigation."}, {"region": "japan", "category": "Shopping", "text": "How much is this?", "translated": "これはいくらですか？", "romanization": "kore wa ikura desu ka?", "note": "Price."}, {"region": "japan", "category": "Emergency", "text": "I need help.", "translated": "助けてください。", "romanization": "tasukete kudasai.", "note": "Emergency."}, {"region": "japan", "category": "Medical", "text": "I need a doctor.", "translated": "医者が必要です。", "romanization": "isha ga hitsuyō desu.", "note": "Medical."}, {"region": "japan", "category": "General", "text": "Can you speak more slowly?", "translated": "もっとゆっくり話してもらえますか？", "romanization": "motto yukkuri hanashite moraemasu ka?", "note": "Conversation."}, {"region": "japan", "category": "General", "text": "Please write it down.", "translated": "書いてください。", "romanization": "kaite kudasai.", "note": "When pronunciation is hard."}, {"region": "japan", "category": "General", "text": "I do not understand.", "translated": "わかりません。", "romanization": "wakarimasen.", "note": "Basic."}];
const $=id=>document.getElementById(id);
let recentTranslations=JSON.parse(localStorage.getItem("wayspeakRecent")||"[]");
let savedPhrases=JSON.parse(localStorage.getItem("wayspeakSaved")||"[]");
let conversationCards=JSON.parse(localStorage.getItem("wayspeakConversation")||"[]");
let theme=localStorage.getItem("wayspeakTheme")||"light";

const sourceLang=$("sourceLang"),targetLang=$("targetLang"),inputText=$("inputText"),outputText=$("outputText");
const romanizationBox=$("romanizationBox"),romanizationLabel=$("romanizationLabel"),romanizationText=$("romanizationText");
const engineSelect=$("engineSelect"),engineStatus=$("engineStatus"),settingsPanel=$("settingsPanel");
const libreEndpointInput=$("libreEndpointInput"),libreApiKeyInput=$("libreApiKeyInput");
const phraseRegionSelect=$("phraseRegionSelect"),phraseCategorySelect=$("phraseCategorySelect"),phraseGrid=$("phraseGrid");
const recentList=$("recentList"),savedList=$("savedList"),conversationList=$("conversationList"),largeModal=$("largeModal"),largeText=$("largeText"),themeToggle=$("themeToggle");
const presetButtons=[...document.querySelectorAll(".preset")],tabButtons=[...document.querySelectorAll(".tab-button")];

function escapeHTML(v){return String(v||"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}
function populateLanguages(){
  sourceLang.innerHTML=LANGUAGES.map(l=>`<option value="${l.code}">${l.name}</option>`).join("");
  targetLang.innerHTML=LANGUAGES.filter(l=>l.code!=="auto").map(l=>`<option value="${l.code}">${l.name}</option>`).join("");
  sourceLang.value=localStorage.getItem("wayspeakSource")||"en";
  targetLang.value=localStorage.getItem("wayspeakTarget")||"zh";
}
function checkEngineSupport(){
  const has=!!(window.Translator||window.translation?.createTranslator);
  engineStatus.textContent=has?"Browser translation may be available. MyMemory is also available as fallback.":"MyMemory Free API is selected as the live fallback.";
  engineSelect.value=localStorage.getItem("wayspeakEngine")||"mymemory";
}
function saveLang(){localStorage.setItem("wayspeakSource",sourceLang.value);localStorage.setItem("wayspeakTarget",targetLang.value)}
function containsChinese(t){return /[\u3400-\u9FFF]/.test(t||"")}
function containsJapanese(t){return /[\u3040-\u30ff]/.test(t||"")}
function exactRomanization(text){const p=PHRASES.find(x=>x.translated===text.trim());return p?.romanization||""}
const PINYIN_MAP={"你":"nǐ","好":"hǎo","请":"qǐng","带":"dài","我":"wǒ","去":"qù","这":"zhè","个":"ge","地":"dì","址":"zhǐ","打":"dǎ","表":"biǎo","能":"néng","在":"zài","里":"lǐ","等":"děng","五":"wǔ","分":"fēn","钟":"zhōng","吗":"ma","用":"yòng","名":"míng","字":"zi","预":"yù","订":"dìng","了":"le","房":"fáng","间":"jiān","可":"kě","以":"yǐ","提":"tí","前":"qián","入":"rù","住":"zhù","中":"zhōng","文":"wén","写":"xiě","一":"yí","下":"xià","们":"men","有":"yǒu","英":"yīng","菜":"cài","单":"dān","不":"bù","吃":"chī","猪":"zhū","肉":"ròu","给":"gěi","账":"zhàng","刷":"shuā","卡":"kǎ","付":"fù","现":"xiàn","金":"jīn","最":"zuì","近":"jìn","的":"de","铁":"tiě","站":"zhàn","哪":"nǎ","多":"duō","少":"shǎo","钱":"qián","需":"xū","要":"yào","帮":"bāng","助":"zhù","医":"yī","生":"shēng","说":"shuō","慢":"màn","明":"míng","白":"bai"};
const ROMAJI_MAP={"こ":"ko","の":"no","住":"jū","所":"sho","ま":"ma","で":"de","お":"o","願":"nega","い":"i","し":"shi","す":"su","メ":"me","ー":"-","タ":"ta","を":"o","使":"tsuka","っ":"t","て":"te","く":"ku","だ":"da","さ":"sa","こ":"ko","こ":"ko","分":"fun","待":"ma","も":"mo","ら":"ra","え":"e","か":"ka","名":"na","前":"mae","予":"yo","約":"yaku","早":"haya","チ":"chi","ェ":"e","ッ":"k","ク":"ku","イ":"i","ン":"n","英":"ei","語":"go","は":"wa","あ":"a","り":"ri","ま":"ma","豚":"buta","肉":"niku","食":"ta","べ":"be","せ":"se","会":"kai","計":"kei","カ":"ka","ド":"do","払":"hara","駅":"eki","ど":"do","れ":"re","助":"tasuke","警":"kei","察":"satsu","呼":"yo","医":"i","者":"sha","必":"hitsu","要":"yō","ゆ":"yu","っ":"k","話":"hana","書":"ka","わ":"wa"};
function roughRomanize(text,kind){const exact=exactRomanization(text);if(exact)return exact;const map=kind==="zh"?PINYIN_MAP:ROMAJI_MAP;return Array.from(text).map(ch=>map[ch]||(/[，。？！、,.?!]/.test(ch)?ch:(/\s/.test(ch)?" ":(/[\u3040-\u30ff\u3400-\u9fff]/.test(ch)?"?":ch)))).join(" ").replace(/\s+([，。？！、,.?!])/g,"$1").replace(/\s+/g," ").trim()}
function updateRomanization(){
  const text=outputText.textContent.trim();
  if(targetLang.value==="zh"&&containsChinese(text)){
    romanizationLabel.textContent="Pinyin";
    const r=roughRomanize(text,"zh");
    romanizationText.textContent=r.includes("?")?`${r} · rough pinyin`:r;
    romanizationBox.hidden=false;
  }else if(targetLang.value==="ja"&&(containsJapanese(text)||containsChinese(text))){
    romanizationLabel.textContent="Romaji";
    const r=roughRomanize(text,"ja");
    romanizationText.textContent=r.includes("?")?`${r} · rough romaji`:r;
    romanizationBox.hidden=false;
  }else{
    romanizationBox.hidden=true;
    romanizationText.textContent="";
  }
}
async function translateWithMyMemory(text){
  const source=sourceLang.value==="auto"?"en":sourceLang.value,target=targetLang.value;
  const url=`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${encodeURIComponent(source+"|"+target)}`;
  const res=await fetch(url);
  if(!res.ok)throw new Error("MyMemory failed");
  const data=await res.json();
  return data.responseData?.translatedText||"";
}
async function translateWithBrowser(text){
  const from=sourceLang.value==="auto"?"en":sourceLang.value,to=targetLang.value;
  if(window.Translator?.create){const tr=await window.Translator.create({sourceLanguage:from,targetLanguage:to});return await tr.translate(text)}
  if(window.translation?.createTranslator){const tr=await window.translation.createTranslator({sourceLanguage:from,targetLanguage:to});return await tr.translate(text)}
  throw new Error("Browser Translator unavailable");
}
async function translateWithLibre(text){
  const endpoint=localStorage.getItem("wayspeakLibreEndpoint")||"",key=localStorage.getItem("wayspeakLibreApiKey")||"";
  if(!endpoint)throw new Error("Libre endpoint missing");
  const body={q:text,source:sourceLang.value==="auto"?"auto":sourceLang.value,target:targetLang.value,format:"text"};
  if(key)body.api_key=key;
  const res=await fetch(endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
  if(!res.ok)throw new Error("Libre failed");
  const data=await res.json();
  return data.translatedText||"";
}
function phrasebookTranslate(text){
  const n=text.trim().toLowerCase();
  const region=(targetLang.value==="ja"||sourceLang.value==="ja")?"japan":"china";
  const p=PHRASES.find(x=>x.region===region&&(x.text.toLowerCase()===n||x.translated.toLowerCase()===n));
  if(!p)return"Phrasebook mode only translates built-in travel phrases. Try selecting a phrase below.";
  if(targetLang.value==="zh"||targetLang.value==="ja")return p.translated;
  return p.text;
}
async function translateText(){
  const text=inputText.value.trim();
  if(!text){outputText.textContent="Type something first.";updateRomanization();return}
  outputText.textContent="Translating...";
  updateRomanization();
  try{
    let result="";
    if(engineSelect.value==="mymemory")result=await translateWithMyMemory(text);
    else if(engineSelect.value==="browser")result=await translateWithBrowser(text);
    else if(engineSelect.value==="libre")result=await translateWithLibre(text);
    else result=phrasebookTranslate(text);
    outputText.textContent=result||"No translation available.";
    updateRomanization();
    saveRecent(text,outputText.textContent);
  }catch(err){
    console.error(err);
    outputText.textContent="Translation failed. Try MyMemory, another engine, or the phrasebook.";
    updateRomanization();
  }
}
function saveRecent(input,output){recentTranslations=recentTranslations.filter(i=>i.input!==input||i.output!==output);recentTranslations.unshift({input,output,from:sourceLang.value,to:targetLang.value,date:new Date().toISOString()});recentTranslations=recentTranslations.slice(0,30);localStorage.setItem("wayspeakRecent",JSON.stringify(recentTranslations));renderRecent()}
function saveCurrentPhrase(){const input=inputText.value.trim(),output=outputText.textContent.trim();if(!input||!output||output==="Your translation will appear here.")return;savedPhrases=savedPhrases.filter(i=>i.input!==input||i.output!==output);savedPhrases.unshift({input,output,from:sourceLang.value,to:targetLang.value,date:new Date().toISOString()});localStorage.setItem("wayspeakSaved",JSON.stringify(savedPhrases));renderSaved()}
function addConversationCard(){const output=outputText.textContent.trim(),input=inputText.value.trim();if(!output||output==="Your translation will appear here.")return;conversationCards.unshift({input,output,from:sourceLang.value,to:targetLang.value,date:new Date().toISOString()});conversationCards=conversationCards.slice(0,20);localStorage.setItem("wayspeakConversation",JSON.stringify(conversationCards));renderConversation()}
function renderPhrasebook(){
  const region=phraseRegionSelect.value||"china";
  const arr=PHRASES.filter(p=>p.region===region);
  const old=phraseCategorySelect.value||"All";
  const cats=["All",...new Set(arr.map(p=>p.category))];
  phraseCategorySelect.innerHTML=cats.map(c=>`<option value="${c}">${c}</option>`).join("");
  phraseCategorySelect.value=cats.includes(old)?old:"All";
  const filtered=phraseCategorySelect.value==="All"?arr:arr.filter(p=>p.category===phraseCategorySelect.value);
  phraseGrid.innerHTML=filtered.map(p=>`<article class="phrase-card" data-index="${PHRASES.indexOf(p)}"><span class="badge">${escapeHTML(p.category)}</span><strong>${escapeHTML(p.text)}</strong><span>${escapeHTML(p.translated)}</span><span>${escapeHTML(p.romanization)}</span><span>${escapeHTML(p.note)}</span></article>`).join("");
  phraseGrid.querySelectorAll(".phrase-card").forEach(card=>card.onclick=()=>loadPhrase(PHRASES[Number(card.dataset.index)]));
}
function loadPhrase(p){inputText.value=p.text;outputText.textContent=p.translated;sourceLang.value="en";targetLang.value=p.region==="japan"?"ja":"zh";updateRomanization();saveLang();saveRecent(inputText.value,outputText.textContent)}
function renderStackItem(item,index){return`<article class="stack-item" data-index="${index}"><span class="badge">${escapeHTML(item.from)} → ${escapeHTML(item.to)}</span><strong>${escapeHTML(item.input)}</strong><span>${escapeHTML(item.output)}</span></article>`}
function bindStack(container,items){container.querySelectorAll(".stack-item").forEach(card=>card.onclick=()=>{const i=items[Number(card.dataset.index)];inputText.value=i.input;outputText.textContent=i.output;sourceLang.value=i.from;targetLang.value=i.to;updateRomanization();})}
function renderRecent(){recentList.innerHTML=recentTranslations.length?recentTranslations.map(renderStackItem).join(""):`<div class="phrase-card"><strong>No recent translations yet.</strong><span>Translate something and it will appear here.</span></div>`;bindStack(recentList,recentTranslations)}
function renderSaved(){savedList.innerHTML=savedPhrases.length?savedPhrases.map(renderStackItem).join(""):`<div class="phrase-card"><strong>No saved phrases yet.</strong><span>Save useful translations for later.</span></div>`;bindStack(savedList,savedPhrases)}
function renderConversation(){conversationList.innerHTML=conversationCards.length?conversationCards.map(i=>`<article class="conversation-card"><div class="small">${escapeHTML(i.from)} → ${escapeHTML(i.to)}</div><div class="big">${escapeHTML(i.output)}</div></article>`).join(""):`<div class="phrase-card"><strong>No conversation cards yet.</strong><span>Add the current translation to show it quickly later.</span></div>`}
function setTab(tab){tabButtons.forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));["phrasebook","recent","saved","conversation"].forEach(k=>$(k+"Tab").hidden=k!==tab)}
function swapLanguages(){if(sourceLang.value==="auto"){sourceLang.value=targetLang.value;targetLang.value="en"}else{const a=sourceLang.value;sourceLang.value=targetLang.value;targetLang.value=a}const old=inputText.value;inputText.value=outputText.textContent==="Your translation will appear here."?"":outputText.textContent;outputText.textContent=old||"Your translation will appear here.";saveLang();updateRomanization()}
function applyPreset(button){presetButtons.forEach(b=>b.classList.remove("active"));button.classList.add("active");sourceLang.value=button.dataset.source;targetLang.value=button.dataset.target;saveLang();updateRomanization()}
function clearInput(){inputText.value="";outputText.textContent="Your translation will appear here.";updateRomanization()}
async function copyText(text){if(text)await navigator.clipboard.writeText(text)}
function showLarge(){const text=outputText.textContent.trim();if(!text||text==="Your translation will appear here.")return;largeText.textContent=romanizationText.textContent?`${text}\n\n${romanizationText.textContent}`:text;largeModal.hidden=false}
function saveSettings(){localStorage.setItem("wayspeakLibreEndpoint",libreEndpointInput.value.trim());localStorage.setItem("wayspeakLibreApiKey",libreApiKeyInput.value.trim());localStorage.setItem("wayspeakEngine",engineSelect.value);settingsPanel.hidden=true}
function loadSettings(){libreEndpointInput.value=localStorage.getItem("wayspeakLibreEndpoint")||"";libreApiKeyInput.value=localStorage.getItem("wayspeakLibreApiKey")||""}
function applyTheme(next){theme=next==="dark"?"dark":"light";document.body.classList.toggle("dark",theme==="dark");themeToggle.textContent=theme==="dark"?"Light Mode":"Dark Mode";localStorage.setItem("wayspeakTheme",theme)}
function speakOutput(){const text=outputText.textContent.trim();if(!text||text==="Your translation will appear here.")return;if(!("speechSynthesis" in window)){alert("Speech is not supported in this browser.");return}const u=new SpeechSynthesisUtterance(text);u.lang=targetLang.value==="zh"?"zh-CN":targetLang.value==="ja"?"ja-JP":targetLang.value;u.rate=.9;window.speechSynthesis.cancel();window.speechSynthesis.speak(u)}

$("translateButton").onclick=translateText;$("swapButton").onclick=swapLanguages;$("clearButton").onclick=clearInput;$("copyInputButton").onclick=()=>copyText(inputText.value);$("copyOutputButton").onclick=()=>copyText(outputText.textContent);$("copyRomanizationButton").onclick=()=>copyText(romanizationText.textContent);$("savePhraseButton").onclick=saveCurrentPhrase;$("showLargeButton").onclick=showLarge;$("closeLargeButton").onclick=()=>largeModal.hidden=true;$("speakButton").onclick=speakOutput;
themeToggle.onclick=()=>applyTheme(theme==="dark"?"light":"dark");sourceLang.onchange=()=>{saveLang();updateRomanization()};targetLang.onchange=()=>{saveLang();updateRomanization()};engineSelect.onchange=()=>localStorage.setItem("wayspeakEngine",engineSelect.value);$("settingsButton").onclick=()=>settingsPanel.hidden=!settingsPanel.hidden;$("saveSettingsButton").onclick=saveSettings;phraseRegionSelect.onchange=renderPhrasebook;phraseCategorySelect.onchange=renderPhrasebook;$("clearRecentButton").onclick=()=>{recentTranslations=[];localStorage.setItem("wayspeakRecent","[]");renderRecent()};$("clearSavedButton").onclick=()=>{savedPhrases=[];localStorage.setItem("wayspeakSaved","[]");renderSaved()};$("addConversationButton").onclick=addConversationCard;presetButtons.forEach(b=>b.onclick=()=>applyPreset(b));tabButtons.forEach(b=>b.onclick=()=>setTab(b.dataset.tab));
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js").catch(console.warn));
populateLanguages();checkEngineSupport();loadSettings();applyTheme(theme);renderPhrasebook();renderRecent();renderSaved();renderConversation();updateRomanization();
