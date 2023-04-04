
let war = global.maxwarn
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {      
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `✳️ Tagga o menziona la persona da warnare\n\n📌 Esempio : ${usedPrefix + command} @user`
        if (!(who in global.db.data.users)) throw `✳️ Utente non riconosciuto`
        let name = conn.getName(m.sender)
        let warn = global.db.data.users[who].warn
        if (warn < war) {
            global.db.data.users[who].warn += 1
            m.reply(`
⚠️ *Utente warnato* ⚠️

▢ *Admin:* ${name}
▢ *Utente:* @${who.split`@`[0]}
▢ *Warn ricevuti:* ${warn + 1}/${war}
▢ *Motivo:* ${text}`, null, { mentions: [who] }) 
            m.reply(`
⚠️ *AVVISO* ⚠️
Hai ricevuto un warn da un amministratore

▢ *Warns:* ${warn + 1}/${war} 
Se riceverai *${war}* warn sarai rimosso dal gruppo`, who)
        } else if (warn == war) {
            global.db.data.users[who].warn = 0
            m.reply(`⛔ L'utente ha superato *${war}* warn quindi verrà rimosso`)
            await time(3000)
            await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
            m.reply(`♻️ Sei stato rimosso dal gruppo *${groupMetadata.subject}* perchè sei stato warnato *${war}* veces`, who)
        }
}
handler.help = ['warn @user']
handler.tags = ['group']
handler.command = ['warn'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
