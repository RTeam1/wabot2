
const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered) => { 
	return `
	/*
❏ INFO PENGGUNA BOT
 │ Nama : ${pushname}
 │ Tag     : @${sender.split("@s.whatsapp.net")[0]}
 │ Nomer : wa.me/${sender.split("@")[0]}
 │ Uang mu : Rp ${uangku}
 │ XP : ${getLevelingXp(sender)}/${reqXp} 
 │ Level : ${getLevelingLevel(sender)}
 │ Role : ${role}
 ╰• User terdaftar : ${_registered.length}


❏ CREATOR : ./RXT
❏ OWNER : ${ownername}

❏ INFO BOT & DEVICE
 │ • Name : ${client.user.name}
 │ • Prefix : ${prefix}
 │ • browser : ${client.browserDescription[1]}
 │ • server : ${client.browserDescription[0]}
 │ • version : ${client.browserDescription[2]}
 │ • speed : ${process.uptime()}
 │ • handphone : ${client.user.phone.device_manufacturer}
 ╰ • versi wa : ${client.user.phone.wa_version}

❏    ${prefix}rules

❏ INFO BOT
 │ •   ${prefix}info
 │ •   ${prefix}donasi
 ╰ •   ${prefix}owner

❏    ${prefix}hek 

❏ DAFTAR MENU
 │ •   ${prefix}makermenu
 │ •   ${prefix}funmenu
 │ •   ${prefix}mediamenu
 │ •   ${prefix}nsfwmenu
 │ •   ${prefix}limitmenu
 │ •   ${prefix}groupmenu
 │ •   ${prefix}toolsmenu
 │ •   ${prefix}storagemenu
 │ •   ${prefix}ownermenu
 ╰ •   ${prefix}tagmenu
 
❏ BIG SPESIAL THANKS TO :
 │
 │• ❏ Rey ( RXT )
 │• ❏ Affis Saputro (My Lord)
 │• ❏ J Bot
 ╰• ❏ Mhank BarBars (sc ori)


 ❏   ${namebot} ©2K21
 ❏   POWERED BY ${ownername} */
`
}
exports.help = help



  
