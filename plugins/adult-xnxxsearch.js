import axios from 'axios'
import fs from 'fs'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[โ๐๐๐๐โ] ๐ป๐พ๐ ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ๐ +๐ท๐พ ๐ด๐๐๐ฐ๐ฝ ๐ณ๐ด๐๐ฐ๐ฒ๐๐ธ๐๐ฐ๐ณ๐พ๐ ๐ด๐ฝ ๐ด๐๐๐ด ๐ถ๐๐๐ฟ๐พ, ๐๐ธ ๐ด๐ ๐ฐ๐ณ๐ผ๐ธ๐ฝ ๐ ๐ณ๐ด๐๐ด๐ฐ ๐ฐ๐ฒ๐๐ธ๐๐ฐ๐๐ป๐พ๐ ๐๐๐ด ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ #enable modohorny*'
if (!text) throw `*[โ๐๐๐๐โ] ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ ๐ณ๐ด ๐๐๐พ ๐ณ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ ${usedPrefix + command} Con mi prima*`
try {
//let res = await axios.get(`https://api.zahwazein.xyz/searching/xnxx?apikey=${keysxxx}&query=${text}`)
let res = await xnxxsearch(text)
//console.log(aaaa)
let json = res.result
let listSerch = []
let teskd = `๐ฉ๐ถ๐ฑ๐ฒ๐ผ๐ ๐ฟ๐ฒ๐น๐ฎ๐ฐ๐ถ๐ผ๐ป๐ฎ๐ฑ๐ผ๐ ๐๐จ๐ง: ${args.join(" ")}`
const sections = [{
title: `โกโโขโคโโฃโโโโข`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: '๐๐ฅ๐ข๐ฃ๐ ๐ฎ๐ง๐ ๐จ๐ฉ๐๐ข๐จ๐ง ๐ฒ ๐ฉ๐ซ๐๐๐ข๐จ๐ง๐ ๐๐ง๐ฏ๐ข๐๐ซ',
title: " ใ ๐ฉ๐๐๐๐ข๐ฆ ๐ฅ๐๐๐๐๐๐ข๐ก๐๐๐ข๐ฆ ใ",
buttonText: "[โฆ ๐๐๐๐๐๐๐๐๐๐ โฆ]",
sections}
for (let i of json) {
listSerch.push({title: i.title, description: 'โง sแดสแดแดแดษชแดษดแด แดsแดแด แดแดแดษชแดษด แดแดสแด แดแดsแดแดสษขแดส แดsแดแด แด ษชแดแดแด โง', rowId: `${usedPrefix}xnxxdl ${i.link}`})} 
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply('*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*')
}}
handler.command = /^porhubsearch|xvideossearch|xnxxsearch$/i
export default handler

async function xnxxsearch(query) {
return new Promise((resolve, reject) => {
const baseurl = 'https://www.xnxx.com'
fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, {method: 'get'}).then(res => res.text()).then(res => {
let $ = cheerio.load(res, { xmlMode: false });
let title = [];
let url = [];
let desc = [];
let results = [];
$('div.mozaique').each(function(a, b) {
$(b).find('div.thumb').each(function(c, d) {
url.push(baseurl+$(d).find('a').attr('href').replace("/THUMBNUM/", "/"))
})})
$('div.mozaique').each(function(a, b) {
$(b).find('div.thumb-under').each(function(c, d) {
desc.push($(d).find('p.metadata').text())
$(d).find('a').each(function(e,f) {
title.push($(f).attr('title'))
})})})
for (let i = 0; i < title.length; i++) {
results.push({ title: title[i], info: desc[i], link: url[i] })}
resolve({ code: 200, status: true, result: results
})}).catch(err => reject({code: 503, status: false, result: err }))})}
