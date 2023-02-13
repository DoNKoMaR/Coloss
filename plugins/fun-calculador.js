let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[❗ИНФО❗] ВЫБЕРИТЕ УЧАСНИКА ГРУППЫ @номер ИЛИ ВВЕДИТЕ ИМЯ УЧАСНИКА ГРУППЫ*`
if (command == 'дурак') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ДУРАК😵НА* *${(500).getRandom()}%* *ПОДТВЕРЖДЕННО*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'умный') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *УМНЫЙ 🤓 НА* *${(500).getRandom()}%* 
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})} 
if (command == 'развод') {
conn.reply(m.chat, `
 _*${text.toUpperCase()}* *ВЫ ДОЛЖНЫ РАЗВЕСТИСЬ 💔💔 ВАША ЛЮБОВЬ СОСТОИТ ИЗ💔💔* *${(500).getRandom()}%* *ВВОБЩЕ ДО ПИЗДЫ ЕБИТЕСЬ САМИ🖕🖕🖕*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})} 
if (command == 'свадьба2') {
conn.reply(m.chat, `
 _*${text.toUpperCase()}* *Добрый день, дорогие гости! Сегодня ответственный момент для молодоженов, ведь каждый из них решил взять ответственность за своего избранника.* *Так как регистрация брака фиксируется официальным документом, прошу молодоженов поставить свои подписи в нем для подтверждения решения. Теперь каждый из вас стал частью целого. И чтобы запомнить этот момент, можете поцеловать друг друга. Теперь ваш корабль под названием семья отправляется в долгое плавание. Все приглашенные надеются, что оно будет долгим. Так пусть каждый из них лично поздравит пару с новым статусом.*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'любит') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ОН ВАС 😍 ЛЮБИТ НА* *${(500).getRandom()}%* *ПОДТВЕРЖДЕННО*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}   
if (command == 'дура') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ДУРА 🙀 НА* *${(500).getRandom()}%* *ПОДТВЕРЖДЕННО*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}     
if (command == 'любит1') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ОНА ВАС 😍 ЛЮБИТ 😘НА* *${(500).getRandom()}%* *ПОДТВЕРЖДЕННО*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}     
if (command == 'правда') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ВОТ НА СКОЛЬКО ПРАВДА* *${(500).getRandom()}%* *ПОДТВЕРЖДЕННО*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}   
if (command == 'какашка') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *НА СТОЛЬКО ТЫ * *${(500).getRandom()}%* *КАКАШКА 💩*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'русский') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ТЫ РУССКИЙ НА* *${(500).getRandom()}%* *А ОСТАЛЬНОЕ ПОМЕСЬ РУССКИЙ АРМЯН*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}     
if (command == 'лучший') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *НЕТ Я ЛУЧШИ ТЕБЯ 😂😂 НА* *${(500).getRandom()}%* *ПОДТВЕРЖДЕННО*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'якрасивая') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ТЫ АФИГЕННАЯ НА* *${(500).getRandom()}%* *ПОДТВЕРЖДЕННО*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'хитрый') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ТЫ ХИТРЕЙ МЕНЯ НА* *${(500).getRandom()}%* *ПОДТВЕРЖДЕННО*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}         
}
handler.help = ['gay2', 'lesbiana', 'pajero', 'pajera', 'puto', 'puta', 'manco', 'manca', 'rata', 'prostituta', 'prostituto'].map(v => v + ' @tag | nombre')
handler.tags = ['calculator']
handler.command = /^дурак|умный|любит|дура|любит1|правда|какашка|русский|лучший|якрасивая|развод|свадьба2|хитрый/i
export default handler
