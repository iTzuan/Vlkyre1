`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
import { MessageType } from "../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/message-type";
import { proto } from "@adiwajshing/baileys";
import Client from "../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/TUF";
import AʀƈȶɨӼ from "../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/msb";
import ʟᴀʏᴏᴜᴛ from "../../𝐀𝐫𝐜𝐭𝐢𝐱🀄𝐕𝐞𝐧𝐭/ʟᴀʏᴏᴜᴛ";
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
import * as fs from 'fs';
import path from 'path';
var scriptName = path.basename(__filename);
var dotScrpt = scriptName.slice(0, -3).toLowerCase();
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
export = {
name: dotScrpt,
category: path.basename(__dirname),
async handle(
TUF: Client,
Fox: proto.IWebMessageInfo,
AʀƈȶɨӼ: AʀƈȶɨӼ,
ǟʀɢʊʍɛռȶ: string[],
ӄʀʏȶɛӄ
): Promise<void> {
const ʟɴᴀᴍᴇ = AʀƈȶɨӼ.sender;
const ᴅꜰɴᴀᴍᴇ = AʀƈȶɨӼ.commandName;
const ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.replace(/[^\d+]/g, "");
await TUF.getGroupMetaData(AʀƈȶɨӼ.chatId, AʀƈȶɨӼ);
const ꜰɪɴᴀᴍᴇ = ᴅꜰɴᴀᴍᴇ.charAt(0).toUpperCase() + ᴅꜰɴᴀᴍᴇ.slice(1);
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
await TUF.sendMessage(
AʀƈȶɨӼ.chatId,
{
quoted: Fox,
timestamp: Date(),
contextInfo: { mentionedJid: [AʀƈȶɨӼ.sender] },
image: { url: "./𝐀𝐫𝐜𝐭𝐢𝐱👜𝐁𝐚𝐠/AʀƈȶɨӼ_Sky.jpg" },
caption: `┌─「 𝐀𝐫𝐜𝐭𝐢𝐱 𝐏𝐫𝐨𝐭𝐨® 」
├• *ɴᴀᴍᴇ:* ${Fox.pushName}
├• *ᴍᴇɴᴛɪᴏɴ:* @${AʀƈȶɨӼ.sender.replace(/[^\d+]/g, "")}
├• *ᴄᴏᴍᴍᴀɴᴅ:* ${AʀƈȶɨӼ.commandName}
└────────────────◇

┌─「 🔰 𝐆𝐫𝐨𝐮𝐩𝐬/𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}antilink:*  _remove any person who sends any links_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}autorank:*  _turn on auto ranking per gc_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}delete:* _delete msgs sent by Vlkyre Bot_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}setwelcome:*  _welcome new members with custom message_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}promote:*  _promote member to admin_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}demote:*  _demote member from admin_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}warn:*  _warn a person_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}unwarn:*  _remove warnings from a warned person_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}invite:*  _get group invite link_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}admins:*  _get all admins of a group_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}getdesc:*  _get group description_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}groupdp:*  _change group profile picture_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}kick:*  _ʀᴇᴍᴏᴠᴇ ᴀ ᴘᴇʀꜱᴏɴ ꜰʀᴏᴍ ᴀ ɢʀᴏᴜᴘ_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}tagall:*  _tag everyone in group_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}unmute:*  _unmute a group chat_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}mute:*  _mute group chat_
└────────────◇`,
footer: "*⦓ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 𝐁𝐞𝐭𝐚❗ ⦔*",
buttons: [
{
buttonId: `${ʟᴀʏᴏᴜᴛ.MuveOn}help`,
buttonText: { displayText: `${ʟᴀʏᴏᴜᴛ.MuveOn}help` },
type: 1,
},
{
buttonId: `${ʟᴀʏᴏᴜᴛ.MuveOn}menu`,
buttonText: { displayText: `${ʟᴀʏᴏᴜᴛ.MuveOn}menu` },
type: 1,
},
],
headerType: 4,
},
MessageType.buttonsMessage
);
},
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
