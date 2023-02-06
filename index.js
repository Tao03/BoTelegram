const { Telegraf } = require('telegraf');
const bot = new Telegraf('5103109267:AAETekZy96m2V0DOozQUiymQu9pvptL1794');
bot.start((ctx)=>{
    if(ctx.state.isRegistered){
    ctx.reply(`Ma salve a lei ${ctx.message.from.username}, sono un bot qualsiasi che riesce a mettere in contatto molte persone con interessi comuni.\nSe anche lei desidera partecipare a questo progetto, si iscriva, altrimenti le auguro una buona giornata!`, {
        reply_markup: {
            inline_keyboard: [
                [  { text: "CERCA", callback_data: "btn-2" } ],
                [ { text: "Informazioni", url: "telegraf.js.org" } ]
            ]
        }
    });}else{
        ctx.reply(`Ma salve a lei ${ctx.message.from.username}, sono un bot qualsiasi che riesce a mettere in contatto molte persone con interessi comuni.\nSe anche lei desidera partecipare a questo progetto, si iscriva, altrimenti le auguro una buona giornata!`, {
            reply_markup: {
                inline_keyboard: [
                    [ { text: "ISCRIVITI", callback_data: "iscrizione" }, { text: "CERCA", callback_data: "btn-2" } ],
                    [ { text: "Informazioni", url: "telegraf.js.org" } ]
                ]
            }
    });
}});
bot.action("iscrizione", (ctx)=>{
    ctx.state.name = `${ctx.from.username}`;
    ctx.reply("Benissimo, prima di iniziare ti chiederò di inserire età, hobby e il tuo nickname su instagram",
    {
        reply_markup: {
            inline_keyboard: [
                [{ text: "ETA'", callback_data: "eta" } ],
                [ {text: "HOBBY", callback_data:"hobby"} ],
                [{ text: "INSTAGRAM", callback_data: "instagram" }]
            ]
        }
    })
})
bot.action("eta",(ctx)=>{
    ctx.reply("Inserisci l'età")
    
    
})
bot.launch();
