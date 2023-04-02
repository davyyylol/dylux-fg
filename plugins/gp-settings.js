let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'aperto': 'not_announcement',
        'chiuso': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*✳️ Scegli un opzione:*
  *▢ ${usedPrefix + command} chiuso*
  *▢ ${usedPrefix + command} aperto*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group *aperto/chiuso*']
handler.tags = ['group']
handler.command = ['group', 'gruppo'] 
handler.admin = true
handler.botAdmin = true

export default handler
