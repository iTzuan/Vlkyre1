// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const imdb = require("imdb-api");
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `imdb`,
  commandType: "Fun⚡",
  description: `This command was built to find any IMDB movie/series.`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc) {
    if (ᴍᴇᴇ6.chatId === "120363025343298860@g.us") {
      return await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          {
            url: ꜱɪɢɴ.ERROR,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: `*⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡*
𝐈 𝐚𝐦 𝐌𝐫𝐌𝐞𝐞𝟔🛸𝐋𝐨𝐨𝐤 𝐀𝐭 𝐌𝐞!
⧪ 𝙰𝚍𝚟𝚊𝚗𝚌𝚎 𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝚄𝚜𝚎𝚛𝚋𝚘𝚝 ⧪



*↱ 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗔𝗹𝗹𝗼𝘄𝗲𝗱 𝗛𝗲𝗿𝗲 ↰*
  *⬡${ꜱɪɢɴ.Mee6IX}uptime*  ᴄʜᴇᴄᴋ ᴍᴇᴇ6 ᴜᴘᴛɪᴍᴇ
  *⬡${ꜱɪɢɴ.Mee6IX}ping*  ᴄʜᴇᴄᴋ ᴍᴇᴇ6 ʀᴇꜱᴘᴏɴꜱᴇ ᴛɪᴍᴇ
  *⬡${ꜱɪɢɴ.Mee6IX}help*  ɢᴇᴛ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴀɴᴅ ɪɴꜰᴏ ᴏɴ ᴍᴏᴅᴜʟᴇꜱ
  *⬡${ꜱɪɢɴ.Mee6IX}alive*  ᴄʜᴇᴄᴋ ɪꜰ ʙᴏᴛ ɪꜱ ᴏɴʟɪɴᴇ ᴀɴᴅ ᴡᴏʀᴋɪɴɢ ꜰɪɴᴇ
  *⬡${ꜱɪɢɴ.Mee6IX}update*  ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ʙᴇ ᴜꜱᴇᴅ ᴛᴏ ᴜᴘᴅᴀᴛᴇ ᴛʜᴇ ʙᴏᴛ
*⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡*`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    }
    if (Arc.length === 0) {
      await υℓтяσηℓιєηт.sendMessage(ᴍᴇᴇ6.chatId, "❌", MessageType.text);
      await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          {
            url: ꜱɪɢɴ.ARC,
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            caption: `*⚠️Seems like someone forgot to give Movie/Series name!*
  
  *Usage Example*
  .imdb <movie/series>`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      return;
    }
    const imob = new imdb.Client({
      apiKey: ꜱɪɢɴ.IMDB,
    });
    let movie = await imob.get({
      name: Arc.join(" "),
    });
    const Litol = `*💡𝐓𝐢𝐭𝐥𝐞➛*  ${movie.title.toUpperCase()}
*🕜𝐓𝐢𝐦𝐞➛*  ${movie.runtime}
*📚𝐆𝐞𝐧𝐫𝐞𝐬➛*  ${movie.genres}
*😎𝐀𝐜𝐭𝐨𝐫𝐬➛*  ${movie.actors}
*🙋🏽𝐕𝐨𝐭𝐞𝐬➛*  ${movie.votes}
*⭐𝐑𝐚𝐭𝐢𝐧𝐠➛*  ${movie.rating}
*🔩𝐓𝐲𝐩𝐞➛*  ${movie.type}
*🌐𝐂𝐨𝐮𝐧𝐭𝐫𝐲➛*  ${movie.country}
*🎥𝐃𝐢𝐫𝐞𝐜𝐭𝐨𝐫➛*  ${movie.director}
*✒️𝐖𝐫𝐢𝐭𝐞𝐫➛*  ${movie.writer}
*📜𝐒𝐞𝐫𝐢𝐞𝐬➛*  ${movie.series}

*🔗𝐈𝐦𝐝𝐛𝐮𝐫𝐥➛*  ${movie.imdburl}
*❓𝐏𝐥𝐨𝐭➛*  ${movie.plot}`;
    console.log(Litol);
    await υℓтяσηℓιєηт
      .sendMessage(
        ᴍᴇᴇ6.chatId,
        {
          url: movie.poster,
        },
        MessageType.image,
        {
          mimetype: Mimetype.jpeg,
          caption: Litol,
        }
      )
      .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
