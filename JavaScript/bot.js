
Save New Duplicate & Edit Just Text Twitter
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
221
222
223
224
225
226
227
228
229
230
231
232
233
234
235
236
237
238
239
240
241
242
243
244
245
246
247
248
249
250
251
252
253
254
255
256
257
258
259
260
261
262
263
264
265
266
267
268
269
270
271
272
273
274
275
276
277
278
279
280
281
282
283
284
285
286
287
288
289
290
291
292
293
294
295
296
297
298
299
300
301
302
303
304
305
306
307
308
309
310
311
312
313
314
315
316
317
318
319
320
321
322
323
324
325
326
327
328
329
330
331
332
333
334
335
336
337
338
339
340
341
342
343
344
345
346
347
348
349
350
351
352
353
354
355
356
357
358
const Discord = require('discord.js');
const client = new Discord.Client();


const fs = require('fs');

client.login('NjQ3OTUyNzA4NTczMDY5MzIy.Xe-_5w.iy9_gmc4BjPhrd89mBT1imjxttE');

var anno = false;

client.commands = new Discord.Collection();

fs.readdir('./Commandes/', (error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log('Aucune commande !');

    commandes.forEach((f) => {

        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commande chargée`);

    client.commands.set(commande.help.name, commande);

    });
});

fs.readdir('./Events/', (error, f) => {
    if (error) console.log('Erreur');
    console.log(`${f.length} event en chargement`);

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split('.')[0];

    client.on(event, events.bind(null, client));
    });
});

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

var updates = false;
var updatepn = false;
var updatepns = false;

client.on("message", message =>{
    if(message.author.bot) return;
    if(message.channel.id == "655429790785994772"){
        var msglower = message.content.toLowerCase();
        if(msglower.includes('vip')){
            if(message.guild.members.get(message.author.id).roles.find(r => r.id === "617461744180264984") == null){
                message.guild.members.get(message.author.id).addRoles("617461744180264984");
                updates = true
                message.react(message.guild.emojis.find(emoji => emoji.name === 'check'));
                message.channel.send("**Bonjour <@"+ message.author.id +">,** \n**Vous avez reçu le grade <@&617461744180264984>.\nN'oubliez pas de mettre votre nom RolePlay si ce n'est pas déjà le cas.\nSi vous n'avez pas le VIP mais que vous le prenez quand même vous receverez une sanction.**");
                return;
            } else {
                message.react(message.guild.emojis.find(emoji => emoji.name === 'nop'));
                message.react("⬇️");
                message.channel.send("**Bonjour <@"+ message.author.id +">,** \n**Vous ne pouvez pas avoir le grade <@&617461744180264984> car vous l'avez déjà.**").then(msg => {
                    setTimeout(function(){
                        msg.delete(msg)
                        message.delete(message)
                    }, 10000);
                })
                return;
            }
        }
        if(msglower.includes('pompier') || msglower.includes('pompiers')){
            message.react(message.guild.emojis.find(emoji => emoji.name === 'nop'));
            message.react("⬇️");
            message.channel.send("**Bonjour <@"+ message.author.id +">,** \n**Dans ce channel vous pouvez seulement avoir le grade <@&617461744180264984>. \nLes grades de pompiers ne sont pas disponibles sur le serveur.**")
            return;
        }
        if(msglower.includes('samu')){
            message.react(message.guild.emojis.find(emoji => emoji.name === 'nop'));
            message.react("⬇️");
            message.channel.send("**Bonjour <@"+ message.author.id +">,** \n**Dans ce channel vous pouvez seulement avoir le grade <@&617461744180264984>. \nLes grades de samu ne sont pas disponibles sur le serveur.**");
            return;
        }
        if(msglower.includes('policier') || msglower.includes('police')){
            message.react(message.guild.emojis.find(emoji => emoji.name === 'nop'));
            message.react("⬇️");
            message.channel.send("**Bonjour <@"+ message.author.id +">,** \n**Dans ce channel vous pouvez seulement avoir le grade <@&617461744180264984>. \nLes grades de policiers non Whitelist sont obtenable dans ce salon : <#653775365680005159>.**");
            return;
        }
        if(msglower.includes('raid')){
            message.react(message.guild.emojis.find(emoji => emoji.name === 'nop'));
            message.react("⬇️");
            message.channel.send("**Bonjour <@"+ message.author.id +">,** \n**Dans ce channel vous pouvez seulement avoir le grade <@&617461744180264984>. \nLes grades de raid ne sont pas disponibles sur le serveur.**");
            return;
        }

    }
});




client.on('messageReactionAdd', (reaction, user) => {
    var clt = client.guilds.get('616962092230115338').members.get(user.id);
    if (reaction.message.id == "653768943906848798"){
        if(reaction.emoji.name == "🚓") {
            if(clt.roles.find(r => r.id === "616988232370094101") == null){
                clt.addRoles("616988232370094101")
            }
        }
        if(reaction.emoji.name == "👮") {
            if(clt.roles.find(r => r.id === "616964452167843870") == null){
                clt.addRoles("616964452167843870")
                updatepn = true
            }
        }
        if(reaction.emoji.name == "📪"){
            if(clt.roles.find(r => r.id === "616988226111930398") != null){
                clt.removeRole("616988226111930398")
            }
        }
    }
    if (reaction.message.id == "653775983945711626"){
        if(reaction.emoji.name == "0️⃣"){
            if(clt.roles.find(r => r.id === "616965325866532884") == null){
                clt.addRoles("616965325866532884")
            }
        }
        if(reaction.emoji.name == "1️⃣"){
            if(clt.roles.find(r => r.id === "616965280979222528") == null){
                clt.addRoles("616965280979222528")
            }
        }
        if(reaction.emoji.name == "2️⃣"){
            if(clt.roles.find(r => r.id === "634500516839292929") == null){
                clt.addRoles("634500516839292929")
            }
        }
        if(reaction.emoji.name == "3️⃣"){
            if(clt.roles.find(r => r.id === "616965249207107595") == null){
                clt.addRoles("616965249207107595")
            }
        }
        if(reaction.emoji.name == "4️⃣"){
            if(clt.roles.find(r => r.id === "616965221218779136") == null){
                clt.addRoles("616965221218779136")
            }
        }
        if(reaction.emoji.name == "5️⃣"){
            if(clt.roles.find(r => r.id === "616965191887880201") == null){
                clt.addRoles("616965191887880201")
            }
        }
    }
    if(reaction.emoji.name == "🍆"){
        user.send("**Félicitations, vous venez de recevoir un avertissement.\nVotre Comportement sur le serveur Discord d'Oscar-Roleplay est inapproprié.**")
            .catch(console.error);
    }
    if(reaction.emoji == reaction.message.guild.emojis.find(emoji => emoji.name === 'nop') || reaction.emoji.name == "redTick"){
        if(reaction.message.channel.id == "655429790785994772") {
            if(user.id == "294423110604685312" || user.id == "301065913447481365" || user.id == "287667559124172802"){
                var clt = client.guilds.get('616962092230115338').members.get(reaction.message.author.id);
                clt.removeRole("617465867604852739")
                clt.removeRole("617461744180264984")
                reaction.message.channel.send("**Bonjour <@"+ reaction.message.author.id +">,** \n**Suite à une vérification vous avez perdu le grade <@&617461744180264984>.\nMerci de refaire votre demande en respectant le modèle ci-dessus.**")
                var mesg = client.guilds.get('616962092230115338').channels.get(`655429790785994772`).fetchMessage(reaction.message.id).then(async(msg) => {
                    await msg.clearReactions()
                    await msg.react(reaction.message.guild.emojis.find(emoji => emoji.name === 'nop'));
                });
            };
        };
    };
});

client.on('messageReactionRemove', (reaction, user) => {
    var clt = client.guilds.get('616962092230115338').members.get(user.id);
    if(reaction) {
        if (reaction.message.id == "653768943906848798"){
        if(reaction.emoji.name == "🚓") {
            if(clt.roles.find(r => r.id === "616988232370094101") != null){
                clt.removeRole("616988232370094101")
            }
        }
        if(reaction.emoji.name == "👮") {
            if(clt.roles.find(r => r.id === "616964452167843870") != null){
                clt.removeRole("616964452167843870")
                updatepns = true
            }
        }
        if(reaction.emoji.name == "📪"){
            if(clt.roles.find(r => r.id === "616988226111930398") == null){
                clt.addRoles("616988226111930398")
            }
        }
    }

    if (reaction.message.id == "653775983945711626"){
        if(reaction.emoji.name == "0️⃣"){
            if(clt.roles.find(r => r.id === "616965325866532884") != null){
                clt.removeRole("616965325866532884")
            }
        }
        if(reaction.emoji.name == "1️⃣"){
            if(clt.roles.find(r => r.id === "616965280979222528") != null){
                clt.removeRole("616965280979222528")
            }
        }
        if(reaction.emoji.name == "2️⃣"){
            if(clt.roles.find(r => r.id === "634500516839292929") != null){
                clt.removeRole("634500516839292929")
            }
        }
        if(reaction.emoji.name == "3️⃣"){
            if(clt.roles.find(r => r.id === "616965249207107595") != null){
                clt.removeRole("616965249207107595")
            }
        }
        if(reaction.emoji.name == "4️⃣"){
            if(clt.roles.find(r => r.id === "616965221218779136") != null){
                clt.removeRole("616965221218779136")
            }
        }
        if(reaction.emoji.name == "5️⃣"){
            if(clt.roles.find(r => r.id === "616965191887880201") != null){
                clt.removeRole("616965191887880201")
            }
        }
    }
    }
    console.log(reaction)
});




client.on('raw', (packet) => {
    if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)) return;
        const channel = client.channels.get(packet.d.channel_id);
        if (channel != undefined) {
        if (channel.messages.has(packet.d.message_id)) return;
        channel.fetchMessage(packet.d.message_id).then(message => {
            const emoji = packet.d.emoji.id ? `${packet.d.emoji.name}:${packet.d.emoji.id}` : packet.d.emoji.name;
            const reaction = message.reactions.get(emoji);
            if (reaction) reaction.users.set(packet.d.user_id, client.users.get(packet.d.user_id));
            if (packet.t === 'MESSAGE_REACTION_ADD') {
                client.emit('messageReactionAdd', reaction, client.users.get(packet.d.user_id));
            }
            if (packet.t === 'MESSAGE_REACTION_REMOVE') {
                client.emit('messageReactionRemove', reaction, client.users.get(packet.d.user_id));
            }
        });
    }
});

client.on("guildMemberUpdate", client =>{
    if(updates === true){
        client.guild.members.get(client.id).addRoles("617465867604852739");
        updates = false
    }
    if(updatepn === true){
        client.guild.members.get(client.id).addRoles("616963853841989642");
        updatepn = false
    }
    if(updatepns === true){
        client.guild.members.get(client.id).removeRole("616963853841989642");
        updatepns = false
    }
});

client.on("addMemberUpdate", client =>{
    if(client.guild.members.size-5 == 700) {
        client.guild.channels.get("616979409865408512").send('__**[ Information Présence sur Discord ]**__\n\n**Bonjour,\nMerci à tous nous sommes +700 sur ce serveur Discord.\n\nL\'équipe d\'Administration vous remercie de votre présence. En espérant vous voir bientôt en jeu ^^**')
    }
});

/*client.on("message", message =>{
    if(message.author.bot) return;
    if(message.channel.id == "617072849865277474") return;
    if(message.channel.id == "617072920140840971") return;
    if(message.channel.id == "617072989061644311") return;
    if(message.channel.id == "617072901061083137") return;
    var msglower = message.content.toLowerCase();
    if(msglower.includes('modo') || msglower.includes('staff') || msglower.includes('admin')){
        var joueur = message.guild.members.get(message.author.id).displayName;
        var cannal = "https://discordapp.com/channels/616962092230115338/"+message.channel.id;
        var msg1 = "\`\`\`diff\n+ Bonjour,\n+ En vue de votre message sur le Discord d'Oscar-RolePlay;\n+ Avez vous besoin d'un Staff ?\n\n- 👍 » Oui\n- 👎 » Non\n\`\`\`";
        var msg2 = "\`\`\`diff\n+ Très bien,\n+ Dans ce cas, je vous souhaite une bonne journée.\n\`\`\`";
        var msg3 = "\`\`\`diff\n+ Très bien,\n+ Dans quel est le grade du staff dont vous avez besoin?\n+ Merci de bien évaluer votre souci. si vous contactez un administrateur pour un problème légé vous pouvez recevoir une sanction.\n\n- 1️⃣ » Modérateur (Pour les petit problèmes)\n- 2️⃣ » Chef-Modérateur (Pour les problèmes un peu complexe et avec un Modérateur-TEST \n- 3️⃣ » Administrateur (Pour les gros problèmes et les problèmes avec un staff\n\`\`\`"
        var msg4 = "\`\`\`diff\n+ Très bien,\n+ Les Administrateurs sont maintenant au courant que vous avez un souci. S'ils sont disponibles, ils viendront vous aider.\n\`\`\`";
        var msg5 = "\`\`\`diff\n+ Très bien,\n+ Le Chef-Modérateur est maintenant au courant que vous avez un souci. S'il est disponible, il viendra vous aider.\n\`\`\`";
        var msg6 = "\`\`\`diff\n+ Très bien,\n+ Les Modérateurs sont maintenant au courant que vous avez un souci. S'ils sont disponibles, ils viendront vous aider.\n\`\`\`";
            message.channel.send(msg1).then(async sent => {
                await sent.react('👍');
                await sent.react('👎');
                client.on('messageReactionAdd', async(reaction, user) => {
                    if(reaction.emoji.name == "👎" && !user.bot){
                        sent.clearReactions();
                        sent.edit(msg2);
                        return;
                    }
                    if(reaction.emoji.name == "👍" && !user.bot){
                        await sent.clearReactions();
                        await sent.edit(msg3);
                        await sent.react('1️⃣');
                        await sent.react('2️⃣');
                        await sent.react('3️⃣');
                        return;
                    }
                    if(reaction.emoji.name == "1️⃣" && !user.bot){
                        sent.clearReactions();
                        sent.edit(msg6);
                        message.guild.members.get("245276684373327873").send("Salut,\n**"+joueur+"** à besoin de ton aide.\nIl se trouve actuellement dans le salon : <"+cannal+">");
                        message.guild.members.get("262164517465751552").send("Salut,\n**"+joueur+"** à besoin de ton aide.\nIl se trouve actuellement dans le salon : <"+cannal+">");
                        message.guild.members.get("545349591055466529").send("Salut,\n**"+joueur+"** à besoin de ton aide.\nIl se trouve actuellement dans le salon : <"+cannal+">");
                        message.guild.members.get("427149645748240394").send("Salut,\n**"+joueur+"** à besoin de ton aide.\nIl se trouve actuellement dans le salon : <"+cannal+">");
                        message.guild.members.get("336041965709819905").send("Salut,\n**"+joueur+"** à besoin de ton aide.\nIl se trouve actuellement dans le salon : <"+cannal+">");
                        message.guild.members.get("284026753972699137").send("Salut,\n**"+joueur+"** à besoin de ton aide.\nIl se trouve actuellement dans le salon : <"+cannal+">");
                        message.guild.members.get("268775882129276940").send("Salut,\n**"+joueur+"** à besoin de ton aide.\nIl se trouve actuellement dans le salon : <"+cannal+">");
                        message.guild.members.get("268775882129276940").send("Salut,\n**"+joueur+"** à besoin de ton aide.\nIl se trouve actuellement dans le salon : <"+cannal+">");
                        message.guild.members.get("252130743965319169").send("Salut,\n**"+joueur+"** à besoin de ton aide.\nIl se trouve actuellement dans le salon : <"+cannal+">");
                        message.guild.members.get("257875874723004418").send("Salut,\n**"+joueur+"** à besoin de ton aide.\nIl se trouve actuellement dans le salon : <"+cannal+">");
                        return;
                    }
                    if(reaction.emoji.name == "2️⃣" && !user.bot){
                        sent.clearReactions();
                        sent.edit(msg5);
                        message.guild.members.get("301065913447481365").send("Salut,\n**"+joueur+"** à besoin de ton aide.\nIl se trouve actuellement dans le salon : <"+cannal+">");
                        return;

                    }
                    if(reaction.emoji.name == "3️⃣" && !user.bot){
                        sent.clearReactions();
                        sent.edit(msg4);
                        message.guild.members.get("294423110604685312").send("Salut,\n**"+joueur+"** à besoin de ton aide.\nIl se trouve actuellement dans le salon : <"+cannal+">");
                        message.guild.members.get("501073780324696066").send("Salut,\n**"+joueur+"** à besoin de ton aide.\nIl se trouve actuellement dans le salon : <"+cannal+">");
                        return;
                    }
                });
            });
        }
});*/

client.on('messageReactionAdd', (reaction, user) => {
    if(reaction.message.id == "654766183630897153"){
        reaction.remove(user.id)
    }

});

client.on("message", message =>{
    if(message.content.includes('🍑')) message.delete(message)
});
