//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('✅ Messaggio di benvenuto configurato')
  } else throw `✳️ Inserisci il messaggio di benvenuto\n\n@user (Menzione)\n@group (Nome del gruppo)\n@desc (Descrizione del gruppo)`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
handler.owner = false

export default handler
