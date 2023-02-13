let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]

if (/^hola$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   

if (!chat.isBanned && chat.audios && m.text.match(/(Страшная|страшная)/gi)) {
let vn = './media/страшная.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Скучаю|скучаю)/gi)) {    
let vn = './media/скучаю.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (!chat.isBanned && chat.audios && m.text.match(/(Солнышко|солнышко)/gi)) {    
let vn = './media/солнышко.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (!chat.isBanned && chat.audios && m.text.match(/(похуй|Похуй)/gi)) {    
let vn = './media/похуй.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (!chat.isBanned && chat.audios && m.text.match(/(сладких снов|Сладких снов)/gi)) {    
let vn = './media/сладких.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (!chat.isBanned && chat.audios && m.text.match(/(очень приятно|Очень приятно)/gi)) {    
let vn = './media/добра.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (!chat.isBanned && chat.audios && m.text.match(/(Согласен|согласен|Согласин|согласин)/gi)) {    
let vn = './media/согласин.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (!chat.isBanned && chat.audios && m.text.match(/(ты что|Ты что)/gi)) {    
let vn = './media/ты что.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (!chat.isBanned && chat.audios && m.text.match(/(Сучка|сучка|Врешь|врешь)/gi)) {    
let vn = './media/ффцц.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
    
if (!chat.isBanned && chat.audios && m.text.match(/(🖕|🤬)/gi)) {    
let vn = './media/ах ты.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
    
if (!chat.isBanned && chat.audios && m.text.match(/(24 года|25 лет|26 лет|27 лет|28 лет|29 лет|30 лет|31 год|32 года|33 года|34 года|35 лет|36 лет|37 лет|38 лет|39 лет|40 лет)/gi)) {    
let vn = './media/100.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   
   
if (!chat.isBanned && chat.audios && m.text.match(/(Удалите бота|удалите бота|Надоел этот бот|надоел этот бот|На доел этот бот)/gi)) {    
let vn = './media/нерад.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}  
    
if (!chat.isBanned && chat.audios && m.text.match(/(Собираюсь|собираюсь)/gi)) {    
let vn = './media/собираюсь.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (!chat.isBanned && chat.audios && m.text.match(/(Пошли в лс|пошли в лс)/gi)) {    
let vn = './media/пошли в лс.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Брат|брат)/gi)) {    
let vn = './media/брат.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(бот ты здесь|Бот ты здесь|бот ты тут|Бот ты тут)/gi)) {    
let vn = './media/храп.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(дайте ссылку|Дайте ссылку)/gi)) {    
let vn = './media/ссылка.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(удалю|Удалю)/gi)) {    
let vn = './media/чистка.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(я худею|Я худею)/gi)) {    
let vn = './media/я худею.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(стирка|Стирка|стираюсь|Стираюсь)/gi)) {    
let vn = './media/люблю.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (!chat.isBanned && chat.audios && m.text.match(/(не понял|Не понял)/gi)) {    
let vn = './media/привет.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Ты кто|ты кто)/gi)) {    
let vn = './media/пол.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(чистка|Чистка)/gi)) {    
let vn = './media/досвидания.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (!chat.isBanned && chat.audios && m.text.match(/(сиськи|Сиськи)/gi)) {    
let vn = './media/отвалии.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (!chat.isBanned && chat.audios && m.text.match(/(Ахуеть|ахуеть)/gi)) {    
let vn = './media/ахуеть.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Доброе утро|доброе утро)/gi)) {    
let vn = './media/доброе утро.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(пока|Пока)/gi)) {    
let vn = './media/отсталлый.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Выходи|выходи)/gi)) {    
let vn = './media/выходи.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Это что|это что)/gi)) {    
let vn = './media/это что.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Ха ха|ха ха)/gi)) {    
let vn = './media/ха ха.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Фу свои|фу свои)/gi)) {    
let vn = './media/фу свои.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Суки|суки)/gi)) {    
let vn = './media/суки.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Спокойной ночи|спокойной ночи)/gi)) {    
let vn = './media/спокойной ночи.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Секс|секс)/gi)) {    
let vn = './media/секс.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(пидор|Пидор)/gi)) {    
let vn = './media/ржу.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Правила|правила)/gi)) {    
let vn = './media/правила.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Отвали|отвали)/gi)) {    
let vn = './media/отвали.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Ты где|ты где)/gi)) {    
let vn = './media/на собачку.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Люблю|люблю|любовь|Любовь)/gi)) {    
let vn = './media/а1.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Личкоеб|личкоеб)/gi)) {    
let vn = './media/личкоеб.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Личка|личка)/gi)) {    
let vn = './media/личка.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Как дела|как дела)/gi)) {    
let vn = './media/как дела.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Иди нахуй|иди нахуй|На хуй|на хуй)/gi)) {    
let vn = './media/иди нахуй.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (!chat.isBanned && chat.audios && m.text.match(/(Приветик|приветик|Привет|привет)/gi)) {    
let vn = './media/приветик.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (!chat.isBanned && chat.audios && m.text.match(/(Здарова|Здорова|здарова|здорова)/gi)) {    
let vn = './media/здарова.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (!chat.isBanned && chat.audios && m.text.match(/(дурак|Дурак|Уебище|уебище)/gi)) {    
let vn = './media/дурак.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (!chat.isBanned && chat.audios && m.text.match(/(Иди на хуй|иди на хуй)/gi)) {    
let vn = './media/иди на хуй.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Сьебись|сьебись)/gi)) {    
let vn = './media/сье.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (!chat.isBanned && chat.audios && m.text.match(/(Заебал|заебал)/gi)) {   
let vn = './media/заебал.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(shitpost)/gi)) {    
    let vn = './media/shitpost.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
       
    return !0 }
    export default handler
