import cp, { exec as _exec } from 'child_process'
import { promisify } from 'util'
import fs from 'fs'
let exec = promisify(_exec).bind(cp)
let handler = async (m, { conn, isROwner, usedPrefix, command, text }) => {
let ar = Object.keys(plugins)
let ar1 = ar.map(v => v.replace('.js', ''))
if (!text) throw `*[β] πΈπ½πΆππ΄ππ° π΄π» π½πΎπΌπ±ππ΄ π³π΄ π°π»πΆππ½ πΏπ»ππΆπΈπ½ (π°ππ²π·πΈππΎ) π΄ππΈπππ΄π½ππ΄*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ*\n*β ${usedPrefix + command}* info-infobot\n\n*ββ π»πΈπππ° π³π΄ πΏπ»ππΆπΈπ½π (π°ππ²π·πΈππΎπ) π΄ππΈπππ΄π½ππ΄π:*\n*β* ${ar1.map(v => ' ' + v).join`\n*β*`}`
if (!ar1.includes(text)) return m.reply(`*[β] π½πΎ ππ΄ π΄π½π²πΎπ½πππΎ π½πΈπ½πΆππ½ πΏπ»ππΆπΈπ½ (π°ππ²π·πΈππΎ) π»π»π°πΌπ°π³πΎ "${text}", πΈπ½πΆππ΄ππ° π°π»πΆππ½πΎ π΄ππΈπππ΄π½ππ΄*\n\n*==================================*\n\n*ββ π»πΈπππ° π³π΄ πΏπ»ππΆπΈπ½π (π°ππ²π·πΈππΎπ) π΄ππΈπππ΄π½ππ΄π:*\n*β* ${ar1.map(v => ' ' + v).join`\n*β*`}`)
let o
try {
o = await exec('cat plugins/' + text + '.js')
} catch (e) {
o = e
} finally {
let { stdout, stderr } = o
if (stdout.trim()) { 
let aa = await conn.sendMessage(m.chat, { text: stdout }, { quoted: m })
await conn.sendMessage(m.chat, { document: fs.readFileSync(`./plugins/${text}.js`), mimetype: 'application/javascript', fileName: `${text}.js`}, { quoted: aa })} 
if (stderr.trim()) { 
let aa2 = await conn.sendMessage(m.chat, { text: stderr }, { quoted: m })
await conn.sendMessage(m.chat, { document: fs.readFileSync(`./plugins/${text}.js`), mimetype: 'application/javascript', fileName: `${text}.js`}, { quoted: aa2 })}}
}
handler.help = ['getplugin'].map(v => v + ' *<nombre>*')
handler.tags = ['owner']
handler.command = /^(getplugin|gp)$/i
handler.rowner = true
export default handler
