async function handleGrup(message, body, args) {
    if (body === '/kick' && message.isGroup) {
        const mentioned = await message.getMentions();
        if (mentioned.length) await message.client.groupRemove(message.from, [mentioned[0].id._serialized]);
    }
    if (body === '/ban' && message.isGroup) await message.reply('Fitur ban: [Implementasi database]');
    if (body === '/mute' && message.isGroup) await message.client.setGroupProperty(message.from, 'announce', true);
    if (body === '/unmute' && message.isGroup) await message.client.setGroupProperty(message.from, 'announce', false);
    if (body === '/info' && message.isGroup) {
        const chat = await message.getChat();
        await message.reply(`Grup: ${chat.name}, Anggota: ${chat.participants.length}`);
    }
    if (body === '/link' && message.isGroup) await message.reply(await message.client.getInviteCode(message.from));
    if (body.startsWith('/setdesc') && message.isGroup) await message.client.setGroupProperty(message.from, 'description', args.join(' '));
    if (body.startsWith('/setname') && message.isGroup) await message.client.setGroupProperty(message.from, 'subject', args.join(' '));
    if (body === '/warn' && message.isGroup) await message.reply('Peringatan diberikan.');
    if (body === '/rules') await message.reply('Aturan grup: Jangan spam, hormati ses
