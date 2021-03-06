// Load using JSDelivr so that the origin is different (github,com vs github.io) and CORS/MIME is handled
import * as dflt from 'https://cdn.jsdelivr.net/gh/TomasHubelbauer/js-import-external/mod.js';
import mod from 'https://cdn.jsdelivr.net/gh/TomasHubelbauer/js-import-external/mod.js';

console.log(dflt);
console.log(mod);

try {
  console.log(dflt());
} catch (error) {
  console.log(error);
}

try {
  console.log(mod());
} catch (error) {
  console.log(error);
}

try {
  void async function() {
    // https://github.com/cozmo/jsQR/issues/107
    const jsQr = await import('https://unpkg.com/jsqr/dist/jsQR.js');
    console.log(jsQr);
    console.log(jsQr());
  }()
} catch (error) {
  console.log(error);
}

try {
  void async function() {
    // https://github.com/kazuhikoarase/qrcode-generator/issues/65
    const qrcode = await import('https://unpkg.com/qrcode-generator/qrcode.js');
    console.log(qrcode);
    console.log(qrcode());

    const code = new qrcode(0, 'L');
    code.addData('QRCODE', 'Alphanumeric');
    code.make();
    console.log(code.createASCII());
  }()
} catch (error) {
  console.log(error);
}
