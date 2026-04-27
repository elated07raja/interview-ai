const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']); // Google + Cloudflare
dns.setDefaultResultOrder('ipv4first');

require('dotenv').config();
const mongoose = require('mongoose');

console.log("Connecting with:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected successfully"))
  .catch(err => console.error("❌ Connection failed:", err));
