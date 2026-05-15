"use strict";

const http = require("http");

const PORT = Number(process.env.PORT || 9000);
const HOST = "0.0.0.0";
const ALLOWED_ORIGINS = [
  "https://tiego.aiarrival.cn",
  "http://tiego.aiarrival.cn",
  "http://localhost:8000",
  "http://127.0.0.1:8000",
];

const server = http.createServer(async (req, res) => {
  const origin = req.headers.origin || "";

  if (req.method === "OPTIONS") {
    send(res, 204, "", origin);
    return;
  }

  if (req.method !== "POST") {
    send(res, 405, { ok: false, error: "Method not allowed" }, origin);
    return;
  }

  try {
    const payload = JSON.parse(await readBody(req));
    const event = normalizePayload(payload, req);

    if (!event.event) {
      send(res, 400, { ok: false, error: "Missing event" }, origin);
      return;
    }

    console.log("IRON_DOG_EVENT", JSON.stringify(event));
    send(res, 200, { ok: true }, origin);
  } catch (error) {
    send(res, 400, { ok: false, error: "Bad request" }, origin);
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Iron dog analytics server listening on ${HOST}:${PORT}`);
});

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.setEncoding("utf8");
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 32 * 1024) {
        req.destroy();
        reject(new Error("Body too large"));
      }
    });
    req.on("end", () => resolve(body || "{}"));
    req.on("error", reject);
  });
}

function normalizePayload(payload, req) {
  const sourceIp = String(req.headers["x-forwarded-for"] || "")
    .split(",")[0]
    .trim();

  return {
    app: "irondog-coffee-test",
    event: String(payload.event || "").slice(0, 64),
    session_id: String(payload.session_id || "").slice(0, 80),
    page: String(payload.page || "").slice(0, 200),
    referrer: String(payload.referrer || "").slice(0, 500),
    screen: String(payload.screen || "").slice(0, 32),
    client_ts: String(payload.ts || ""),
    server_ts: new Date().toISOString(),
    ua: String(req.headers["user-agent"] || "").slice(0, 500),
    ip: sourceIp,
    data: sanitizeData(payload.data || {}),
  };
}

function sanitizeData(data) {
  const result = {};
  Object.entries(data).forEach(([key, value]) => {
    result[String(key).slice(0, 40)] = String(value).slice(0, 300);
  });
  return result;
}

function send(res, statusCode, body, origin) {
  const allowOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  res.writeHead(statusCode, {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  res.end(typeof body === "string" ? body : JSON.stringify(body));
}
