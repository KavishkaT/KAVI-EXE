
//============= menu command ================
const {readEnv} = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')



//==================== all menu command =====================

cmd({
    pattern: "menu",
    desc: "To get the menu.",
    react: "📄",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
ai: '',
tools: '',
search: '',
fun: '',
voice: '',
other: '',
movie:'',
news:''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = `
🧑‍💻𝙆𝘼𝙑𝙄-𝙀𝙓𝙀-𝙑1 - 𝗔𝗟𝗟 𝗠𝗘𝙉𝙐🧑‍💻

      👋 𝐇𝐄𝐋𝐋𝐎, ${pushname}!

 ❙ 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 𝗞𝗔𝗩𝗜-𝗘𝗫𝗘-𝙑1! 🖐️ 

╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ 」
│◈ 𝐑𝐔𝐍 𝐓𝐈𝐌𝐄 * ${runtime(process.uptime())}
│◈ 𝐎𝐖𝐍𝐄𝐑 𝐍𝐀𝐌𝐄 * 𝙆𝘼𝙑𝙄-𝙀𝙓𝙀 
│◈ 𝐎𝐖𝐍𝐄𝐑 𝐍𝐔𝐌𝐁𝐄𝐑 * +94760383959
╰──────────●●►
╭──────────●●►
 📥 *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.download}
╰───────────●●►
╭──────────●●►
 👾 *𝐀𝐢 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.ai}
╰───────────●●►
╭──────────●●►
 🔧 *𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.main}
╰───────────●●►
╭──────────●●►
 🎉 *𝐅𝐮𝐧 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.fun}
╰───────────●●►
╭──────────●●►
 🔄 *𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.convert}
╰───────────●●►
╭──────────●●►
 🔍 *𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.search}
╰───────────●●►
╭──────────●●►
 👥 *𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.group}
╰───────────●●►
╭──────────●●►
 🔒 *𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.owner}
╰───────────●●►
╭──────────●●►
 ⚙️ *𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.other}
╰───────────●●►
╭──────────●●►
 🛠️ *𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.tools}
╰───────────●●►
╭──────────●●►
 🎬 *𝐌𝐨𝐯𝐢𝐞 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.movie}
╰───────────●●►
📄 *𝐍𝐞𝐰𝐬 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.news}
╰───────────●●►


> *𝙋𝙊𝙒𝙀𝙍𝘿 𝘽𝙔 𝙆𝘼𝙑𝙄 𝙀𝙓𝙀 𝙑1 *`

return await conn.sendMessage(from,{image: {url:`https://files.catbox.moe/nwcnys.jpeg`},caption:madeMenu},{quoted: mek})
}catch(e){
console.log(e)
reply(`𝔼𝕣𝕣𝕣𝕠𝕣`)
}
})



