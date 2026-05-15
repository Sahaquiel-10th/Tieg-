"use strict";

const ALLOWED_ORIGINS = [
  "https://tiego.aiarrival.cn",
  "http://tiego.aiarrival.cn",
  "http://localhost:8000",
  "http://127.0.0.1:8000",
];

exports.main = async (event) => {
  const method = event.httpMethod || event.requestContext?.http?.method || "POST";
  const headers = normalizeHeaders(event.headers || {});
  const origin = headers.origin || "";

  if (method === "OPTIONS") {
    return response(204, "", origin);
  }

  if (method !== "POST") {
    return response(405, { ok: false, error: "Method not allowed" }, origin);
  }

  const payload = parseBody(event.body, event.isBase64Encoded);
  const safeEvent = normalizePayload(payload, headers, event);

  if (!safeEvent.event) {
    return response(400, { ok: false, error: "Missing event" }, origin);
  }

  console.log("IRON_DOG_EVENT", JSON.stringify(safeEvent));
  return response(200, { ok: true }, origin);
};

function parseBody(body, isBase64Encoded) {
  if (!body) {
    return {};
  }

  try {
    const text = isBase64Encoded ? Buffer.from(body, "base64").toString("utf8") : body;
    return JSON.parse(text);
  } catch (error) {
    return {};
  }
}

function normalizePayload(payload, headers, event) {
  const now = new Date().toISOString();
  const sourceIp =
    event.requestContext?.http?.sourceIp ||
    event.requestContext?.identity?.sourceIp ||
    headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    "";

  return {
    app: "irondog-coffee-test",
    event: String(payload.event || "").slice(0, 64),
    session_id: String(payload.session_id || "").slice(0, 80),
    page: String(payload.page || "").slice(0, 200),
    referrer: String(payload.referrer || "").slice(0, 500),
    screen: String(payload.screen || "").slice(0, 32),
    client_ts: String(payload.ts || ""),
    server_ts: now,
    ua: String(headers["user-agent"] || "").slice(0, 500),
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

function response(statusCode, body, origin) {
  const allowOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];

  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Origin": allowOrigin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
    body: typeof body === "string" ? body : JSON.stringify(body),
  };
}

function normalizeHeaders(headers) {
  const normalized = {};
  Object.entries(headers).forEach(([key, value]) => {
    normalized[key.toLowerCase()] = value;
  });
  return normalized;
}
