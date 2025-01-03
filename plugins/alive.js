const { cmd, commands } = require('../command');
const config = require('../config');
// repo info
cmd({
    pattern: "alive",
    alias: ["sc", "script", "info"],
    desc: "Info about the bot repository",
    category: "main",
    react: "🥷",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `*Hello there 𝗞𝗔𝗩𝗜-𝗘𝗫𝗘-𝗩1 User! 👋🏻* 

> Simple , Straight Forward But Loaded With Features 🎊, Meet 𝗞𝗔𝗩𝗜-𝗘𝗫𝗘-𝗩1 WhatsApp Bot.

*Thanks for using 𝗞𝗔𝗩𝗜-𝗘𝗫𝗘I ★* 

> Don't forget to frok the repo ⤵️

https://github.com/Baymaxff/KAVI-EXE`;

        await conn.sendMessage(from, { image: { url: `https://files.catbox.moe/5vp4rr.jpeg` }, caption: dec, contextInfo: { mentionedJid: [m.sender], forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: 'https://whatsapp.com/channel/0029Vb22FT9HFxOzBtWOwT0X', newsletterName: 'ᴋᴀᴠɪ-ᴇxᴇ', serverMessageId: 143 } } }, { quoted: mek });

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/repo.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

