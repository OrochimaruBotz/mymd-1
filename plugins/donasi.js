let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • Telkom [088804947282]
│ • Gopay  [088804947282]
│ • Dana  [088804947282]
│ • Saweria  [https://saweria.co/humanzboti]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6288804947282
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli Akun Heroku Prem agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
