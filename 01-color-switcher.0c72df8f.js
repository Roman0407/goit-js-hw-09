var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o.register("kBMfg",(function(e,t){const n=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]"),r=document.querySelector("body");let l;return n.addEventListener("click",(function(){n.style.pointerEvents="none",l=setInterval((()=>r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`),1e3)})),o.addEventListener("click",(function(){n.style.pointerEvents="auto",clearInterval(l)})),`#${Math.floor(16777215*Math.random()).toString(16)}`})),o("kBMfg");
//# sourceMappingURL=01-color-switcher.0c72df8f.js.map