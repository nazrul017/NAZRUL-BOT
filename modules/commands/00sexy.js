module.exports.config = {
  name: "s3xy video",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Romim",
  description: " sexy VEDIO",
  usePrefix:true,
  commandCategory: "Hình ảnh",
  usages: "s3xy vedio",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["𝐀𝐈 𝐍𝐀𝐖 𝐁𝐀𝐁𝐘 𝐓𝐎𝐌𝐀𝐑 𝐒𝐄𝐗𝐘 𝐕𝐈𝐃𝐄𝐎 🥵🌺"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
" https://i.imgur.com/vwi6WsW.mp4",
"https://i.imgur.com/8gbH029.mp4",
"https://i.imgur.com/VoEsdBp.mp4",
"https://i.imgur.com/3sEoTgN.mp4",
"https://i.imgur.com/s5n5mEc.mp4",
"https://i.imgur.com/iX6Oa8k.mp4",
"https://i.imgur.com/I7io22L.mp4",
"https://i.imgur.com/MPYt0t8.mp4",
"https://i.imgur.com/spdFB6C.mp4",
"https://i.imgur.com/WA1Y3tv.mp4",
"https://i.imgur.com/QmVd5ym.mp4",
"https://i.imgur.com/2sNTiC8.mp4",
"https://i.imgur.com/6DGOzuW.mp4",
"https://i.imgur.com/e8BOE3g.mp4",
"https://i.imgur.com/K8DtSaU.mp4",
"https://i.imgur.com/R5Ww4Dn.mp4",
"https://i.imgur.com/EAarHy2.mp4",
"https://i.imgur.com/fB782eU.mp4",
"https://i.imgur.com/R4wJ25Q.mp4",
"https://i.imgur.com/psXzYox.mp4",
"https://i.imgur.com/ijRkvmH.mp4",
"https://i.imgur.com/dmITLWs.mp4",
"https://i.imgur.com/jcDIVo1.mp4",
"https://i.imgur.com/Vex7jBQ.mp4",
"https://i.imgur.com/655zPdl.mp4",
"https://i.imgur.com/RwIKxMl.mp4",
"https://i.imgur.com/ZtqLXuB.mp4",
"https://i.imgur.com/JZl2Dzb.mp4",
"https://i.imgur.com/zhxe57L.mp4",
"https://i.imgur.com/LBJuhht.mp4",
"https://i.imgur.com/gCESzRZ.mp4",
"https://i.imgur.com/rOiqa3Y.mp4",
"https://i.imgur.com/yYCp53w.mp4",
"https://i.imgur.com/L4NpDoT.mp4",
"https://i.imgur.com/GDQqxCc.mp4",
"https://i.imgur.com/k12tSQ5.mp4",
"https://i.imgur.com/oJ1cph1.mp4",
"https://i.imgur.com/GzeoE00.mp4",
"https://i.imgur.com/zL5mfVp.mp4",
"https://i.imgur.com/dgV1KMu.mp4",
"https://i.imgur.com/h58zW1F.mp4",
"https://i.imgur.com/IJAJkNC.mp4",
"https://i.imgur.com/dDJptTk.mp4",
"https://i.imgur.com/p2FsCVm.mp4",
"https://i.imgur.com/tFjiK5C.mp4",
"https://i.imgur.com/Yu1VJrp.mp4",
"https://i.imgur.com/Wu8eGhA.mp4,"
"https://i.imgur.com/d9YEirE.mp4",
"https://i.imgur.com/l79Nly0.mp4",
"https://i.imgur.com/7C8UMAb.mp4",
"https://i.imgur.com/Yc3KMbs.mp4",
"https://i.imgur.com/AgLrhNu.mp4",
"https://i.imgur.com/MASIzch.mp4",
"https://i.imgur.com/PIc6Vpw.mp4",
"https://i.imgur.com/Yw7y6or.mp4",
"https://i.imgur.com/TPQELyy.mp4",
"https://i.imgur.com/Yw7y6or.mp4",
"https://i.imgur.com/fAYH27J.mp4",
"https://i.imgur.com/W2Hgw9q.mp4",
"https://i.imgur.com/7h1R667.mp4",
"https://i.imgur.com/pCI7UaG.mp4",
"https://i.imgur.com/pCI7UaG.mp4",
"https://i.imgur.com/pCI7UaG.mp4",
"https://i.imgur.com/jaCUB0Z.mp4",
"https://i.imgur.com/CzQ2avb.mp4",
"https://i.imgur.com/HEo4lBZ.mp4",
"https://i.imgur.com/HEo4lBZ.mp4",
"https://i.imgur.com/9Sz5B8F.mp4",
"https://i.imgur.com/7qZlVMN.mp4",
"https://i.imgur.com/kLpLMTm.mp4",
"https://i.imgur.com/kLpLMTm.mp4",
"https://i.imgur.com/kLpLMTm.mp4"
  
  ];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
