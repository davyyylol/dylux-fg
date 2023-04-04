
let handler = async (m, { conn, args, groupMetadata}) => {
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `✳️ Tagga o scrivi il comando in risposta all'utente a cui resettare i warn`
        if (!(who in global.db.data.users)) throw `✳️ Utente non trovato`
       let warn = global.db.data.users[who].warn
       if (warn > 0) {
         global.db.data.users[who].warn -= 1
         m.reply(`✅ *Warn rimosso*
         
▢ Warn rimossi: *-1*
▢ Warn correnti: *${warn - 1}*`)
         m.reply(`✳️ Un amministratore del gruppo ha rimosso un warn, ora hai *${warn - 1}*`, who)
         } else if (warn == 0) {
            m.reply('✳️ Questo utente non ha warn')
        }

}
handler.help = ['rimwarn @user']
handler.tags = ['group']
handler.command = ['rimwarn', 'unwarn'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
