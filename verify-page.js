const fs = require("fs");
const path = require("path");
const assert = require("assert");

const root = __dirname;

function read(file) {
  const filePath = path.join(root, file);
  assert.ok(fs.existsSync(filePath), `${file} should exist`);
  return fs.readFileSync(filePath, "utf8");
}

const html = read("index.html");
const css = read("styles.css");
const js = read("script.js");

assert.ok(
  html.includes("在烛光与酱汁香气里，享用一席从容的法式晚餐</h1>"),
  "hero title should not end with punctuation"
);
assert.ok(
  !html.includes("在烛光与酱汁香气里，享用一席从容的法式晚餐。</h1>"),
  "hero title should not end with a Chinese period"
);

[
  "Maison Lumiere",
  "现代法式餐厅",
  "精选菜单",
  "预约",
  "营业信息",
  "Chef's Tasting",
  "香煎北海道扇贝",
  "鸭胸佐樱桃红酒汁",
  "布列塔尼海盐焦糖舒芙蕾",
].forEach((text) => {
  assert.ok(html.includes(text), `index.html should include ${text}`);
});

[
  "styles.css",
  "script.js",
  "aria-label",
  "required",
  "placeholder-visual",
  "reservation-form",
  "type=\"date\"",
  "<select name=\"guests\"",
].forEach((text) => {
  assert.ok(html.includes(text), `index.html should include ${text}`);
});

["#experience", "#menu", "#space", "#reservation"].forEach((href) => {
  assert.ok(html.includes(`href="${href}"`), `navigation should include ${href}`);
});

[
  "@media",
  ":focus-visible",
  ".reservation",
  ".site-nav.is-open",
  ".placeholder-visual",
  "grid-template-columns: 1fr",
  "min-height: calc(100vh - 5rem)",
].forEach((text) => {
  assert.ok(css.includes(text), `styles.css should include ${text}`);
});

[
  "addEventListener",
  "checkValidity",
  "reportValidity",
  "is-open",
  "预约请求已记录",
  "请先填写姓名、电话、日期和人数。",
].forEach((text) => {
  assert.ok(js.includes(text), `script.js should include ${text}`);
});

console.log("Static restaurant page verification passed.");
