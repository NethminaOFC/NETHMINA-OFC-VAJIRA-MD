const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


global.thumb = fs.readFileSync('./lib/bugs/venom.jpg')
const BOTNAME = '𝙽ᴇᴛʜᴍɪɴᴀ 𝐎ꜰᴄ - ᴡᴀʙᴏᴛ';
const FOOTERNAME = '> ＶＡＪＩＲＡ -  ＭＤ - Ｖ4';
global.owner = process.env.OWNER_NUMBER  || '94773588634' ;  // ADD YOUR NUMBER WITHOUT +
    
module.exports = {
SESSION_ID: process.env.SESSION_ID || 'VAJIRA-MD=qBFyALAS#oEDf3rcWf1tPl95IqL4_qqtL38W6_KCVurfrLAyz-BA' ,
travaSend: process.env.TRAVA_SEND || '25' ,   
MODERATORS : process.env.MODERATORS === undefined ? "94772801923,94787820101" : process.env.MODERATORS ,    
MAX_SIZE: process.env.MAX_SIZE === undefined ? '1536': process.env.MAX_SIZE,/*add this in megabytes*/    
OWNER_NAME: process.env.OWNER_NAME || '𝙽ᴇᴛʜᴍɪɴᴀ 𝐎ꜰᴄ' ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
LOGO: process.env.LOGO || `https://telegra.ph/file/6437d9ac01c94cee08070.jpg` ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,
FOOTER: process.env.FOOTER || '‌👨‍💻 NETHMINC-OFC | WABOT 👨‍💻',    
PREFIX: process.env.PREFIX || '.' ,
LANG:  process.env.LANG || 'SI' ,
ANTI_BAD: process.env.ANTI_BAD || true  ,
AUTO_REACT:  process.env.AUTO_REACT  || true  ,    
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,       
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || true  ,
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,    
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,        
INBOX_USER: process.env.INBOX_USER === undefined ? '' : process.env.INBOX_USER,
BANNED_USER: process.env.BANNED_USER === undefined ? '' : process.env.BANNED_USER ,    
AI_MODE: process.env.AI_MODE === undefined ? 'true' : process.env.AI_MODE,
ANTI_LINK: process.env.ANTI_LINK || true  ,
BOT_DETECT: process.env.BOT_DETECT === undefined ? 'true' : process.env.BOT_DETECT,    
ANTI_BOT: process.env.ANTI_BOT || true  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
ALIVE: process.env.ALIVE || `*𝐍𝐄𝐓𝐇𝐌𝐈𝐍𝐀 𝐎𝐅𝐂 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓* 

*Hᴇʟʟᴏ....* @name👋
*I'ᴍ Aʟɪᴠᴇ Nᴏᴡ...🙋‍♂💗*

@gname @members Number of Members

*⏰ Now time is* @time
*📅 Date :* @date

*🟢 I am online still* @uptime
*🔄 Response Delay* : @ping Ms
*💻 Host* : @host
*🪢 Version* : @version

*☫ Work Mode* : @mode
*☫ Work Type* : @worktype

┌───────────────────────

*CONTACT NO* - https://wa.me/+94776369728?text=Hi

*GROUP LINK* - https://chat.whatsapp.com/FUGjjEbLPQp7KHL5jAUJb8

 🔥  *Ｆᴏʀ ＳᴛΔᵀᴜs Vɪᴇᴡs* ° 🔥
┌───────────────────────
├ 🍓 *Name* :-  *_BHASHITHA NETHMINA_* 
├ 🍓 *Nick Name* :-  *_NETHMINA OFC_*  
├ 🍓 *Age* :-  *_17  YEARS OLD_*
├ 🍓 *Live in* :- *_GALLE_*
├ 🍓 *Contact* :- 94776369728
└───────────────────────

*🗓 Type [.menu] for my command list.*

*🛜 𝚸𝚯𝐖𝚵𝚪𝚵𝐃 𝐁𝐘 𝐍𝐄𝐓𝐇𝐌𝐈𝐍𝐀 𝐎𝐅𝐂 𝐂𝐎𝐌𝐌𝐔𝐍𝐈𝐓𝐘*


> ♡ ㅤ      ❍ㅤ        ⎙ㅤ    ⌲ 
> ˡᶦᵏᵉ     ᶜᵒᵐᵐᵉⁿᵗ     ˢᵃᵛᵉ    ˢʰᵃʳᵉ`,     
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || true  ,    
AUTO_VOICE:  process.env.AUTO_VOICE  || true  ,
AUTO_STICKER: process.env.AUTO_STICKER || true  ,
WELCOME:  process.env.WELCOME  || false ,
ANTI_DELETE : process.env.ANTI_DELETE || true ,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO    
};
