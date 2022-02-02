const {
	WAConnection
} = require("@adiwajshing/baileys")
const fs = require("fs")
const qrcode = require("qrcode-terminal")

async function bodwangsaff() {
const tytyd = new WAConnection()
tytyd.version = [2, 2123, 8]
tytyd.logger.level = "warn"
tytyd.on("qr", qr => {
	qrcode.generate(qr, {
		small: true
	})
	console.log("SCAN DONG")
})
fs.existsSync("./copyright.json") && tytyd.loadAuthInfo("./copyright.json")
tytyd.on("open", () => {
	console.log("200ok/berhasil")
})
await tytyd.connect({
	timeoutMs: 30*1000
})
fs.writeFileSync("./copyright.json", JSON.stringify(tytyd.base64EncodedAuthInfo(), null, "\t"))
} bodwangsaff();