// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9mu7C":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"8lqZg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _00KillerCloseWav = require("./audio/00_killer_close.wav");
var _00KillerCloseWavDefault = parcelHelpers.interopDefault(_00KillerCloseWav);
var _00KillerOpenWav = require("./audio/00_killer_open.wav");
var _00KillerOpenWavDefault = parcelHelpers.interopDefault(_00KillerOpenWav);
var _00UntrustyCloseWav = require("./audio/00_untrusty_close.wav");
var _00UntrustyCloseWavDefault = parcelHelpers.interopDefault(_00UntrustyCloseWav);
var _00UntrustyWav = require("./audio/00_untrusty.wav");
var _00UntrustyWavDefault = parcelHelpers.interopDefault(_00UntrustyWav);
var _0VestnicaCloseWav = require("./audio/0_vestnica_close.wav");
var _0VestnicaCloseWavDefault = parcelHelpers.interopDefault(_0VestnicaCloseWav);
var _0VestnicaWav = require("./audio/0_vestnica.wav");
var _0VestnicaWavDefault = parcelHelpers.interopDefault(_0VestnicaWav);
var _0VestnikCloseWav = require("./audio/0_vestnik_close.wav");
var _0VestnikCloseWavDefault = parcelHelpers.interopDefault(_0VestnikCloseWav);
var _0VestnikWav = require("./audio/0_vestnik.wav");
var _0VestnikWavDefault = parcelHelpers.interopDefault(_0VestnikWav);
var _1IntroWav = require("./audio/1_intro.wav");
var _1IntroWavDefault = parcelHelpers.interopDefault(_1IntroWav);
var _2EvilEndWav = require("./audio/2_evil_end.wav");
var _2EvilEndWavDefault = parcelHelpers.interopDefault(_2EvilEndWav);
var _2EvilWav = require("./audio/2_evil.wav");
var _2EvilWavDefault = parcelHelpers.interopDefault(_2EvilWav);
var _2Priest1Wav = require("./audio/2_priest_1.wav");
var _2Priest1WavDefault = parcelHelpers.interopDefault(_2Priest1Wav);
var _2Priest2Wav = require("./audio/2_priest_2.wav");
var _2Priest2WavDefault = parcelHelpers.interopDefault(_2Priest2Wav);
var _3EvilLancelotCloseWav = require("./audio/3_evil_lancelot_close.wav");
var _3EvilLancelotCloseWavDefault = parcelHelpers.interopDefault(_3EvilLancelotCloseWav);
var _3EvilLancelotOpenWav = require("./audio/3_Evil_Lancelot_open.wav");
var _3EvilLancelotOpenWavDefault = parcelHelpers.interopDefault(_3EvilLancelotOpenWav);
var _3EvilOpenEyesLancelotOberonWav = require("./audio/3_evil_open_eyes_lancelot_oberon.wav");
var _3EvilOpenEyesLancelotOberonWavDefault = parcelHelpers.interopDefault(_3EvilOpenEyesLancelotOberonWav);
var _3EvilOpenEyesLancelotWav = require("./audio/3_evil_open_eyes_lancelot.wav");
var _3EvilOpenEyesLancelotWavDefault = parcelHelpers.interopDefault(_3EvilOpenEyesLancelotWav);
var _3EvilOpenEyesOberonWav = require("./audio/3_evil_open_eyes_oberon.wav");
var _3EvilOpenEyesOberonWavDefault = parcelHelpers.interopDefault(_3EvilOpenEyesOberonWav);
var _3EvilOpenEyesRogueOberonLancelotWav = require("./audio/3_evil_open_eyes_rogue_oberon_lancelot.wav");
var _3EvilOpenEyesRogueOberonLancelotWavDefault = parcelHelpers.interopDefault(_3EvilOpenEyesRogueOberonLancelotWav);
var _3EvilOpenEyesRogueOberonWav = require("./audio/3_evil_open_eyes_rogue_oberon.wav");
var _3EvilOpenEyesRogueOberonWavDefault = parcelHelpers.interopDefault(_3EvilOpenEyesRogueOberonWav);
var _3EvilOpenEyesRogueWav = require("./audio/3_evil_open_eyes_rogue.wav");
var _3EvilOpenEyesRogueWavDefault = parcelHelpers.interopDefault(_3EvilOpenEyesRogueWav);
var _3EvilOpenEyesWav = require("./audio/3_evil_open_eyes.wav");
var _3EvilOpenEyesWavDefault = parcelHelpers.interopDefault(_3EvilOpenEyesWav);
var _4EvilCloseEyesWav = require("./audio/4_evil_close_eyes.wav");
var _4EvilCloseEyesWavDefault = parcelHelpers.interopDefault(_4EvilCloseEyesWav);
var _5EvilThumbMordredRogueWav = require("./audio/5_evil_thumb_mordred_rogue.wav");
var _5EvilThumbMordredRogueWavDefault = parcelHelpers.interopDefault(_5EvilThumbMordredRogueWav);
var _5EvilThumbMordredWav = require("./audio/5_evil_thumb_mordred.wav");
var _5EvilThumbMordredWavDefault = parcelHelpers.interopDefault(_5EvilThumbMordredWav);
var _5EvilThumbRogueWav = require("./audio/5_evil_thumb_rogue.wav");
var _5EvilThumbRogueWavDefault = parcelHelpers.interopDefault(_5EvilThumbRogueWav);
var _5EvilThumbWav = require("./audio/5_evil_thumb.wav");
var _5EvilThumbWavDefault = parcelHelpers.interopDefault(_5EvilThumbWav);
var _5EvilThumbSorcWav = require("./audio/5_evil_thumb_sorc.wav");
var _5EvilThumbSorcWavDefault = parcelHelpers.interopDefault(_5EvilThumbSorcWav);
var _5EvilThumbSorcMordredWav = require("./audio/5_evil_thumb_sorc_mordred.wav");
var _5EvilThumbSorcMordredWavDefault = parcelHelpers.interopDefault(_5EvilThumbSorcMordredWav);
var _5EvilThumbSorcMordredRogueWav = require("./audio/5_evil_thumb_sorc_mordred_rogue.wav");
var _5EvilThumbSorcMordredRogueWavDefault = parcelHelpers.interopDefault(_5EvilThumbSorcMordredRogueWav);
var _5EvilThumbRogueSorcWav = require("./audio/5_evil_thumb_rogue_sorc.wav");
var _5EvilThumbRogueSorcWavDefault = parcelHelpers.interopDefault(_5EvilThumbRogueSorcWav);
var _6MerlinWav = require("./audio/6_Merlin.wav");
var _6MerlinWavDefault = parcelHelpers.interopDefault(_6MerlinWav);
var _6UntrustyThumbWav = require("./audio/6_untrusty_thumb.wav");
var _6UntrustyThumbWavDefault = parcelHelpers.interopDefault(_6UntrustyThumbWav);
var _7EvilThumbDownWav = require("./audio/7_evil_thumb_down.wav");
var _7EvilThumbDownWavDefault = parcelHelpers.interopDefault(_7EvilThumbDownWav);
var _7UntrustyEvilThumbWav = require("./audio/7_untrusty_evil_thumb.wav");
var _7UntrustyEvilThumbWavDefault = parcelHelpers.interopDefault(_7UntrustyEvilThumbWav);
var _8MerlinCloseEyesWav = require("./audio/8_Merlin_close_eyes.wav");
var _8MerlinCloseEyesWavDefault = parcelHelpers.interopDefault(_8MerlinCloseEyesWav);
var _9MerlinCloseNumbNewWav = require("./audio/9_Merlin_close_numb_new.wav");
var _9MerlinCloseNumbNewWavDefault = parcelHelpers.interopDefault(_9MerlinCloseNumbNewWav);
var _9MorganaCloseNumbWav = require("./audio/9_Morgana_close_numb.wav");
var _9MorganaCloseNumbWavDefault = parcelHelpers.interopDefault(_9MorganaCloseNumbWav);
var _9PercivalCloseEyesWav = require("./audio/9_Percival_close_eyes.wav");
var _9PercivalCloseEyesWavDefault = parcelHelpers.interopDefault(_9PercivalCloseEyesWav);
var _9PercivalMorganaWav = require("./audio/9_Percival_Morgana.wav");
var _9PercivalMorganaWavDefault = parcelHelpers.interopDefault(_9PercivalMorganaWav);
var _9PercivalNoMorganaFixWav = require("./audio/9_Percival_no_Morgana_fix.wav");
var _9PercivalNoMorganaFixWavDefault = parcelHelpers.interopDefault(_9PercivalNoMorganaFixWav);
var _9PercivalWatchMorganaWav = require("./audio/9_Percival_watch_Morgana.wav");
var _9PercivalWatchMorganaWavDefault = parcelHelpers.interopDefault(_9PercivalWatchMorganaWav);
var _9PercivalWatchNoMorganaWav = require("./audio/9_Percival_watch_no_Morgana.wav");
var _9PercivalWatchNoMorganaWavDefault = parcelHelpers.interopDefault(_9PercivalWatchNoMorganaWav);
var _10LancelotCloseWav = require("./audio/10_Lancelot_close.wav");
var _10LancelotCloseWavDefault = parcelHelpers.interopDefault(_10LancelotCloseWav);
var _10LancelotOpenEvilWav = require("./audio/10_Lancelot_open_evil.wav");
var _10LancelotOpenEvilWavDefault = parcelHelpers.interopDefault(_10LancelotOpenEvilWav);
var _11OpenEyesWav = require("./audio/11_Open_eyes.wav");
var _11OpenEyesWavDefault = parcelHelpers.interopDefault(_11OpenEyesWav);
var _silenceWav = require("./audio/silence.wav");
var _silenceWavDefault = parcelHelpers.interopDefault(_silenceWav);
var _shortSilenceWav = require("./audio/shortSilence.wav");
var _shortSilenceWavDefault = parcelHelpers.interopDefault(_shortSilenceWav);
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const state = {
    assassin: true,
    merlin: true,
    cleric: false,
    percival: false,
    untrusty: false,
    lancelot: false,
    lancelotEvil: false,
    messengers: false,
    morgana: false,
    mordred: false,
    rogue: false,
    oberon: false,
    sorcerer: false
};
const evils = [
    "assasin",
    "lancelot",
    "morgana",
    "sorcerer",
    "oberon",
    "rogue",
    "mordred",
    "messengers"
];
const good = [
    "merlin",
    "cleric",
    "percival",
    "untrusty",
    "lancelot",
    "messengers",
    "rogue",
    "sorcerer"
];
let evilCount = 1;
let goodCount = 1;
const cards = document.querySelectorAll(".card");
cards.forEach((el)=>el.addEventListener("click", (event)=>{
        event.stopPropagation();
        const img = event.currentTarget.querySelector("img");
        const id = event.currentTarget.getAttribute("data-id");
        if (id === "morgana") {
            if (img.classList.contains("active")) {
                morgana.classList.remove("active");
                percival.classList.remove("active");
                state["morgana"] = false;
                state["percival"] = false;
                evilCount -= 1;
                goodCount -= 1;
            } else {
                morgana.classList.add("active");
                percival.classList.add("active");
                state["morgana"] = true;
                state["percival"] = true;
                evilCount += 1;
                goodCount += 1;
            }
            return;
        }
        if (id === "percival") {
            if (img.classList.contains("active")) {
                morgana.classList.remove("active");
                percival.classList.remove("active");
                state["morgana"] = false;
                state["percival"] = false;
                goodCount -= 1;
                evilCount -= 1;
            } else {
                img.classList.add("active");
                state[id] = true;
                goodCount += 1;
            }
            return;
        }
        if (id === "lancelot") {
            if (checkbox.classList.contains("hideCheckbox")) checkbox.classList.remove("hideCheckbox");
            else {
                lancelots.checked = false;
                checkbox.classList.add("hideCheckbox");
            }
        }
        if (img.classList.contains("active")) {
            img.classList.remove("active");
            state[id] = false;
            if (evils.includes(id)) evilCount -= 1;
            if (good.includes(id)) goodCount -= 1;
        } else {
            if (evils.includes(id)) evilCount += 1;
            if (good.includes(id)) goodCount += 1;
            img.classList.add("active");
            state[id] = true;
        }
    }));
async function loadAudioFiles(fileUrls) {
    return Promise.all(fileUrls.map(async (url)=>{
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        return audioContext.decodeAudioData(arrayBuffer);
    }));
}
function concatenateBuffers(audioBuffers) {
    if (audioBuffers.length === 0) throw new Error("No buffers to concatenate");
    const sampleRate = audioBuffers[0].sampleRate;
    const numberOfChannels = audioBuffers[0].numberOfChannels;
    audioBuffers.forEach((buffer)=>{
        if (buffer.sampleRate !== sampleRate) throw new Error("Sample rates do not match");
    });
    const totalLength = audioBuffers.reduce((sum, buffer)=>sum + buffer.length, 0);
    const combinedBuffer = audioContext.createBuffer(numberOfChannels, totalLength, sampleRate);
    for(let channel = 0; channel < numberOfChannels; channel++){
        let offset = 0;
        const channelData = combinedBuffer.getChannelData(channel);
        for (const buffer of audioBuffers){
            const data = buffer.getChannelData(channel);
            channelData.set(data, offset);
            offset += data.length;
        }
    }
    return combinedBuffer;
}
async function mergeMultipleFiles(fileUrls) {
    try {
        const audioBuffers = await loadAudioFiles(fileUrls);
        const combinedBuffer = concatenateBuffers(audioBuffers);
        const wavBlob = audioBufferToWav(combinedBuffer);
        const url = URL.createObjectURL(wavBlob);
        audio.src = url;
        audio.classList.remove("hide");
    } catch (error) {
        console.error("Error merging files:", error);
        throw error;
    }
}
function audioBufferToWav(buffer) {
    function writeString(view, offset, string) {
        for(let i = 0; i < string.length; i++)view.setUint8(offset + i, string.charCodeAt(i));
    }
    const numChannels = buffer.numberOfChannels;
    const sampleRate = buffer.sampleRate;
    const length = buffer.length * numChannels * 2 + 44;
    const view = new DataView(new ArrayBuffer(length));
    writeString(view, 0, "RIFF");
    view.setUint32(4, 36 + buffer.length * numChannels * 2, true);
    writeString(view, 8, "WAVE");
    writeString(view, 12, "fmt ");
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * numChannels * 2, true);
    view.setUint16(32, numChannels * 2, true);
    view.setUint16(34, 16, true);
    writeString(view, 36, "data");
    view.setUint32(40, buffer.length * numChannels * 2, true);
    let offset = 44;
    for(let i = 0; i < buffer.numberOfChannels; i++){
        const channel = buffer.getChannelData(i);
        for(let j = 0; j < channel.length; j++){
            const sample = Math.max(-1, Math.min(1, channel[j]));
            view.setInt16(offset, sample * (sample < 0 ? 0x8000 : 0x7fff), true);
            offset += 2;
        }
    }
    return new Blob([
        view
    ], {
        type: "audio/wav"
    });
}
function generateFileList() {
    const files = [
        (0, _1IntroWavDefault.default)
    ];
    if (state.messengers) {
        files.push((0, _0VestnicaWavDefault.default));
        files.push((0, _0VestnikWavDefault.default));
        files.push((0, _shortSilenceWavDefault.default));
        files.push((0, _0VestnikCloseWavDefault.default));
        files.push((0, _0VestnicaCloseWavDefault.default));
    }
    if (state.cleric) {
        files.push((0, _2EvilWavDefault.default));
        files.push((0, _shortSilenceWavDefault.default));
        files.push((0, _2Priest1WavDefault.default));
        files.push((0, _shortSilenceWavDefault.default));
        files.push((0, _2Priest2WavDefault.default));
    }
    if (!state.rogue && !state.oberon && !state.lancelotEvil) files.push((0, _3EvilOpenEyesWavDefault.default));
    // rogue
    if (state.rogue && !state.oberon && !state.lancelotEvil) files.push((0, _3EvilOpenEyesRogueWavDefault.default));
    if (state.rogue && state.oberon && !state.lancelotEvil) files.push((0, _3EvilOpenEyesRogueOberonWavDefault.default));
    if (state.rogue && state.oberon && state.lancelotEvil) files.push((0, _3EvilOpenEyesRogueOberonLancelotWavDefault.default));
    // oberon
    if (!state.rogue && state.oberon && !state.lancelotEvil) files.push((0, _3EvilOpenEyesOberonWavDefault.default));
    // lancelotEvil
    if (!state.rogue && !state.oberon && state.lancelotEvil) files.push((0, _3EvilOpenEyesLancelotWavDefault.default));
    // lancelot oberon
    if (!state.rogue && state.oberon && state.lancelotEvil) files.push((0, _3EvilOpenEyesLancelotOberonWavDefault.default));
    files.push(...[
        (0, _silenceWavDefault.default),
        (0, _4EvilCloseEyesWavDefault.default)
    ]);
    if (!state.mordred && !state.rogue && !state.sorcerer) files.push((0, _5EvilThumbWavDefault.default));
    if (state.mordred && state.rogue && !state.sorcerer) files.push((0, _5EvilThumbMordredRogueWavDefault.default));
    if (!state.mordred && state.rogue && !state.sorcerer) files.push((0, _5EvilThumbRogueWavDefault.default));
    if (state.mordred && !state.rogue && !state.sorcerer) files.push((0, _5EvilThumbMordredWavDefault.default));
    if (!state.mordred && !state.rogue && state.sorcerer) files.push((0, _5EvilThumbSorcWavDefault.default));
    if (!state.mordred && state.rogue && state.sorcerer) files.push((0, _5EvilThumbRogueSorcWavDefault.default));
    if (state.mordred && state.rogue && state.sorcerer) files.push((0, _5EvilThumbMordredRogueWavDefault.default));
    if (state.mordred && !state.rogue && state.sorcerer) files.push((0, _5EvilThumbSorcMordredWavDefault.default));
    if (state.untrusty) files.push(...[
        (0, _6UntrustyThumbWavDefault.default)
    ]);
    if (state.merlin) files.push(...[
        (0, _6MerlinWavDefault.default),
        (0, _silenceWavDefault.default)
    ]);
    if (state.untrusty) files.push((0, _7UntrustyEvilThumbWavDefault.default));
    else files.push((0, _7EvilThumbDownWavDefault.default));
    files.push((0, _8MerlinCloseEyesWavDefault.default));
    if (state.percival && state.morgana) files.push((0, _9PercivalMorganaWavDefault.default));
    if (state.percival && state.morgana) files.push((0, _9PercivalWatchMorganaWavDefault.default));
    if (state.percival && !state.morgana) files.push((0, _9PercivalNoMorganaFixWavDefault.default));
    if (state.percival && !state.morgana) files.push((0, _9PercivalWatchNoMorganaWavDefault.default));
    if (state.percival) files.push(...[
        (0, _shortSilenceWavDefault.default),
        (0, _9PercivalCloseEyesWavDefault.default)
    ]);
    if (!state.lancelotEvil && state.lancelot) files.push(...[
        (0, _10LancelotOpenEvilWavDefault.default),
        (0, _silenceWavDefault.default),
        (0, _10LancelotCloseWavDefault.default)
    ]);
    if (state.untrusty) {
        files.push((0, _00KillerOpenWavDefault.default));
        files.push((0, _00UntrustyWavDefault.default));
        files.push((0, _shortSilenceWavDefault.default));
        files.push((0, _00UntrustyCloseWavDefault.default));
        files.push((0, _00KillerCloseWavDefault.default));
    }
    files.push(...[
        (0, _shortSilenceWavDefault.default),
        (0, _11OpenEyesWavDefault.default)
    ]);
    return files;
}
async function generateStory() {
    const files = generateFileList();
    if (state.merlin && !state.morgana && !state.assassin && !state.mordred && !state.oberon) {
        alert("\u041F\u0440\u0438 \u0438\u0433\u0440\u0435 \u0441 \u041C\u0435\u0440\u043B\u0438\u043D\u043E\u043C, \u0443 \u043F\u0440\u0438\u0441\u043F\u0435\u0448\u043D\u0438\u043A\u043E\u0432 \u0437\u043B\u0430 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0443\u0431\u0438\u0439\u0446\u0430 (\u0423\u0431\u0438\u0439\u0446\u0430, \u041C\u043E\u0440\u0434\u0440\u0435\u0434, \u041E\u0431\u0435\u0440\u043E\u043D \u0438\u043B\u0438 \u041C\u043E\u0440\u0433\u0430\u043D\u0430)");
        audio.classList.add("hide");
        return;
    }
    if (Object.values(state).every((v)=>v === false)) {
        alert("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0430");
        audio.classList.add("hide");
        return;
    }
    if (evilCount > 4) {
        alert("\u041F\u0440\u0438\u0441\u043F\u0435\u0448\u043D\u0438\u043A\u043E\u0432 \u0437\u043B\u0430 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 4");
        audio.classList.add("hide");
        return;
    }
    if (goodCount > 6) {
        alert("\u0421\u0438\u043B \u0434\u043E\u0431\u0440\u0430 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 6");
        audio.classList.add("hide");
        return;
    }
    try {
        await mergeMultipleFiles(files);
        window.scrollTo({
            left: 0,
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    } catch (error) {
        console.log(`\u{41E}\u{448}\u{438}\u{431}\u{43A}\u{430}: ${error.message}`);
    }
}
button.addEventListener("click", ()=>{
    generateStory();
});
lancelots.addEventListener("change", function() {
    if (this.checked) state["lancelotEvil"] = true;
    else state["lancelotEvil"] = false;
});

},{"./audio/00_killer_close.wav":"lLnHy","./audio/00_killer_open.wav":"bonQj","./audio/00_untrusty_close.wav":"YgWFe","./audio/00_untrusty.wav":"bhIlt","./audio/0_vestnica_close.wav":"6E6bM","./audio/0_vestnica.wav":"j1h5P","./audio/0_vestnik_close.wav":"dTvaQ","./audio/0_vestnik.wav":"76OxP","./audio/1_intro.wav":"3V59m","./audio/2_evil_end.wav":"dTUAf","./audio/2_evil.wav":"f5zUv","./audio/2_priest_1.wav":"d4hEe","./audio/2_priest_2.wav":"7Ikbk","./audio/3_evil_lancelot_close.wav":"7a4zg","./audio/3_Evil_Lancelot_open.wav":"g54zI","./audio/3_evil_open_eyes_lancelot_oberon.wav":"c5fHb","./audio/3_evil_open_eyes_lancelot.wav":"ij0Cb","./audio/3_evil_open_eyes_oberon.wav":"dsFym","./audio/3_evil_open_eyes_rogue_oberon_lancelot.wav":"fGo0e","./audio/3_evil_open_eyes_rogue_oberon.wav":"akQa3","./audio/3_evil_open_eyes_rogue.wav":"3hcwe","./audio/3_evil_open_eyes.wav":"8604Y","./audio/4_evil_close_eyes.wav":"9S3JC","./audio/5_evil_thumb_mordred_rogue.wav":"7U19q","./audio/5_evil_thumb_mordred.wav":"dNoAE","./audio/5_evil_thumb_rogue.wav":"fJ6Pg","./audio/5_evil_thumb.wav":"41pKL","./audio/5_evil_thumb_sorc.wav":"hwW7o","./audio/5_evil_thumb_sorc_mordred.wav":"aOIm5","./audio/5_evil_thumb_sorc_mordred_rogue.wav":"kzAx0","./audio/5_evil_thumb_rogue_sorc.wav":"j4ZZK","./audio/6_Merlin.wav":"2PmGV","./audio/6_untrusty_thumb.wav":"iZemZ","./audio/7_evil_thumb_down.wav":"iVyYT","./audio/7_untrusty_evil_thumb.wav":"7wF5n","./audio/8_Merlin_close_eyes.wav":"7TiNn","./audio/9_Merlin_close_numb_new.wav":"33EKO","./audio/9_Morgana_close_numb.wav":"7IlBT","./audio/9_Percival_close_eyes.wav":"lYe81","./audio/9_Percival_Morgana.wav":"7rxP3","./audio/9_Percival_no_Morgana_fix.wav":"lMS0X","./audio/9_Percival_watch_Morgana.wav":"gCumq","./audio/9_Percival_watch_no_Morgana.wav":"aLuUH","./audio/10_Lancelot_close.wav":"8rsOy","./audio/10_Lancelot_open_evil.wav":"6Mo74","./audio/11_Open_eyes.wav":"5i8w3","./audio/silence.wav":"bD8PT","./audio/shortSilence.wav":"7pr7H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lLnHy":[function(require,module,exports,__globalThis) {
module.exports = require("7fd8bbbceed0b63e").getBundleURL('bLxZJ') + "00_killer_close.8ffe8337.wav" + "?" + Date.now();

},{"7fd8bbbceed0b63e":"lgJ39"}],"lgJ39":[function(require,module,exports,__globalThis) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"bonQj":[function(require,module,exports,__globalThis) {
module.exports = require("768467041c3e8a37").getBundleURL('bLxZJ') + "00_killer_open.44a628d9.wav" + "?" + Date.now();

},{"768467041c3e8a37":"lgJ39"}],"YgWFe":[function(require,module,exports,__globalThis) {
module.exports = require("d486a22906a5f9d").getBundleURL('bLxZJ') + "00_untrusty_close.be642a60.wav" + "?" + Date.now();

},{"d486a22906a5f9d":"lgJ39"}],"bhIlt":[function(require,module,exports,__globalThis) {
module.exports = require("321ea49e6894aa84").getBundleURL('bLxZJ') + "00_untrusty.6a11e3ba.wav" + "?" + Date.now();

},{"321ea49e6894aa84":"lgJ39"}],"6E6bM":[function(require,module,exports,__globalThis) {
module.exports = require("cfe2a67c90c26219").getBundleURL('bLxZJ') + "0_vestnica_close.b5a958bb.wav" + "?" + Date.now();

},{"cfe2a67c90c26219":"lgJ39"}],"j1h5P":[function(require,module,exports,__globalThis) {
module.exports = require("9b5c2895bc6448b2").getBundleURL('bLxZJ') + "0_vestnica.e6b083f4.wav" + "?" + Date.now();

},{"9b5c2895bc6448b2":"lgJ39"}],"dTvaQ":[function(require,module,exports,__globalThis) {
module.exports = require("2097eb81e675170f").getBundleURL('bLxZJ') + "0_vestnik_close.3ae95a5a.wav" + "?" + Date.now();

},{"2097eb81e675170f":"lgJ39"}],"76OxP":[function(require,module,exports,__globalThis) {
module.exports = require("7e9f1f383d6f3bf6").getBundleURL('bLxZJ') + "0_vestnik.d944213f.wav" + "?" + Date.now();

},{"7e9f1f383d6f3bf6":"lgJ39"}],"3V59m":[function(require,module,exports,__globalThis) {
module.exports = require("14f12807ac6a7075").getBundleURL('bLxZJ') + "1_intro.d93b1c93.wav" + "?" + Date.now();

},{"14f12807ac6a7075":"lgJ39"}],"dTUAf":[function(require,module,exports,__globalThis) {
module.exports = require("446560369be9fa6a").getBundleURL('bLxZJ') + "2_evil_end.36d78bdf.wav" + "?" + Date.now();

},{"446560369be9fa6a":"lgJ39"}],"f5zUv":[function(require,module,exports,__globalThis) {
module.exports = require("5f61f155b05abc03").getBundleURL('bLxZJ') + "2_evil.905324e0.wav" + "?" + Date.now();

},{"5f61f155b05abc03":"lgJ39"}],"d4hEe":[function(require,module,exports,__globalThis) {
module.exports = require("6c9470e64d7224d").getBundleURL('bLxZJ') + "2_priest_1.1f25fb00.wav" + "?" + Date.now();

},{"6c9470e64d7224d":"lgJ39"}],"7Ikbk":[function(require,module,exports,__globalThis) {
module.exports = require("21bd96a184978a7d").getBundleURL('bLxZJ') + "2_priest_2.c96830b1.wav" + "?" + Date.now();

},{"21bd96a184978a7d":"lgJ39"}],"7a4zg":[function(require,module,exports,__globalThis) {
module.exports = require("c3235cc562d8a664").getBundleURL('bLxZJ') + "3_evil_lancelot_close.bb5b07bb.wav" + "?" + Date.now();

},{"c3235cc562d8a664":"lgJ39"}],"g54zI":[function(require,module,exports,__globalThis) {
module.exports = require("f7b8a69de95633f").getBundleURL('bLxZJ') + "3_Evil_Lancelot_open.380bd481.wav" + "?" + Date.now();

},{"f7b8a69de95633f":"lgJ39"}],"c5fHb":[function(require,module,exports,__globalThis) {
module.exports = require("84fc0ba22a727c6d").getBundleURL('bLxZJ') + "3_evil_open_eyes_lancelot_oberon.46e6f0e0.wav" + "?" + Date.now();

},{"84fc0ba22a727c6d":"lgJ39"}],"ij0Cb":[function(require,module,exports,__globalThis) {
module.exports = require("6523bcf3c7418c0e").getBundleURL('bLxZJ') + "3_evil_open_eyes_lancelot.2d8fa311.wav" + "?" + Date.now();

},{"6523bcf3c7418c0e":"lgJ39"}],"dsFym":[function(require,module,exports,__globalThis) {
module.exports = require("d7821c18639de134").getBundleURL('bLxZJ') + "3_evil_open_eyes_oberon.cb6e361b.wav" + "?" + Date.now();

},{"d7821c18639de134":"lgJ39"}],"fGo0e":[function(require,module,exports,__globalThis) {
module.exports = require("f3e864958dbbc26c").getBundleURL('bLxZJ') + "3_evil_open_eyes_rogue_oberon_lancelot.e0a93145.wav" + "?" + Date.now();

},{"f3e864958dbbc26c":"lgJ39"}],"akQa3":[function(require,module,exports,__globalThis) {
module.exports = require("c3534d8a9d843027").getBundleURL('bLxZJ') + "3_evil_open_eyes_rogue_oberon.42b2f01b.wav" + "?" + Date.now();

},{"c3534d8a9d843027":"lgJ39"}],"3hcwe":[function(require,module,exports,__globalThis) {
module.exports = require("a408ee80485731b7").getBundleURL('bLxZJ') + "3_evil_open_eyes_rogue.056892ed.wav" + "?" + Date.now();

},{"a408ee80485731b7":"lgJ39"}],"8604Y":[function(require,module,exports,__globalThis) {
module.exports = require("d2a9e469ecfb00cc").getBundleURL('bLxZJ') + "3_evil_open_eyes.e84d8165.wav" + "?" + Date.now();

},{"d2a9e469ecfb00cc":"lgJ39"}],"9S3JC":[function(require,module,exports,__globalThis) {
module.exports = require("bd9863080ebcac02").getBundleURL('bLxZJ') + "4_evil_close_eyes.8eef97ea.wav" + "?" + Date.now();

},{"bd9863080ebcac02":"lgJ39"}],"7U19q":[function(require,module,exports,__globalThis) {
module.exports = require("8fcc491b3061f4ba").getBundleURL('bLxZJ') + "5_evil_thumb_mordred_rogue.14113fbf.wav" + "?" + Date.now();

},{"8fcc491b3061f4ba":"lgJ39"}],"dNoAE":[function(require,module,exports,__globalThis) {
module.exports = require("8ef0e2b36afa07bf").getBundleURL('bLxZJ') + "5_evil_thumb_mordred.c6263f28.wav" + "?" + Date.now();

},{"8ef0e2b36afa07bf":"lgJ39"}],"fJ6Pg":[function(require,module,exports,__globalThis) {
module.exports = require("d2d59b8b0691416").getBundleURL('bLxZJ') + "5_evil_thumb_rogue.6a9c54d1.wav" + "?" + Date.now();

},{"d2d59b8b0691416":"lgJ39"}],"41pKL":[function(require,module,exports,__globalThis) {
module.exports = require("662c3f121e24c7e1").getBundleURL('bLxZJ') + "5_evil_thumb.569064a3.wav" + "?" + Date.now();

},{"662c3f121e24c7e1":"lgJ39"}],"hwW7o":[function(require,module,exports,__globalThis) {
module.exports = require("b81de6fc872cb4b6").getBundleURL('bLxZJ') + "5_evil_thumb_sorc.4d6c0a92.wav" + "?" + Date.now();

},{"b81de6fc872cb4b6":"lgJ39"}],"aOIm5":[function(require,module,exports,__globalThis) {
module.exports = require("74d0d301e2319600").getBundleURL('bLxZJ') + "5_evil_thumb_sorc_mordred.e4e8ab40.wav" + "?" + Date.now();

},{"74d0d301e2319600":"lgJ39"}],"kzAx0":[function(require,module,exports,__globalThis) {
module.exports = require("759d6108247803d5").getBundleURL('bLxZJ') + "5_evil_thumb_sorc_mordred_rogue.42960627.wav" + "?" + Date.now();

},{"759d6108247803d5":"lgJ39"}],"j4ZZK":[function(require,module,exports,__globalThis) {
module.exports = require("7891b79624abd730").getBundleURL('bLxZJ') + "5_evil_thumb_rogue_sorc.4b5cd49b.wav" + "?" + Date.now();

},{"7891b79624abd730":"lgJ39"}],"2PmGV":[function(require,module,exports,__globalThis) {
module.exports = require("b3b43dc71db577e2").getBundleURL('bLxZJ') + "6_Merlin.729ad838.wav" + "?" + Date.now();

},{"b3b43dc71db577e2":"lgJ39"}],"iZemZ":[function(require,module,exports,__globalThis) {
module.exports = require("3b054ea69a47bfd8").getBundleURL('bLxZJ') + "6_untrusty_thumb.151cb3dd.wav" + "?" + Date.now();

},{"3b054ea69a47bfd8":"lgJ39"}],"iVyYT":[function(require,module,exports,__globalThis) {
module.exports = require("64adc0a97b780453").getBundleURL('bLxZJ') + "7_evil_thumb_down.30be693e.wav" + "?" + Date.now();

},{"64adc0a97b780453":"lgJ39"}],"7wF5n":[function(require,module,exports,__globalThis) {
module.exports = require("61535c143ac7f24b").getBundleURL('bLxZJ') + "7_untrusty_evil_thumb.47c3d9d3.wav" + "?" + Date.now();

},{"61535c143ac7f24b":"lgJ39"}],"7TiNn":[function(require,module,exports,__globalThis) {
module.exports = require("1ed44508596747f4").getBundleURL('bLxZJ') + "8_Merlin_close_eyes.9e1f0fc4.wav" + "?" + Date.now();

},{"1ed44508596747f4":"lgJ39"}],"33EKO":[function(require,module,exports,__globalThis) {
module.exports = require("b9871104e24d07ea").getBundleURL('bLxZJ') + "9_Merlin_close_numb_new.22ffdb1f.wav" + "?" + Date.now();

},{"b9871104e24d07ea":"lgJ39"}],"7IlBT":[function(require,module,exports,__globalThis) {
module.exports = require("8a34867fc804f3a").getBundleURL('bLxZJ') + "9_Morgana_close_numb.1e01a559.wav" + "?" + Date.now();

},{"8a34867fc804f3a":"lgJ39"}],"lYe81":[function(require,module,exports,__globalThis) {
module.exports = require("ba15345b65fc06c6").getBundleURL('bLxZJ') + "9_Percival_close_eyes.6638abb9.wav" + "?" + Date.now();

},{"ba15345b65fc06c6":"lgJ39"}],"7rxP3":[function(require,module,exports,__globalThis) {
module.exports = require("503296fab1a776c4").getBundleURL('bLxZJ') + "9_Percival_Morgana.d3869126.wav" + "?" + Date.now();

},{"503296fab1a776c4":"lgJ39"}],"lMS0X":[function(require,module,exports,__globalThis) {
module.exports = require("bd47d039e85166fd").getBundleURL('bLxZJ') + "9_Percival_no_Morgana_fix.818b8da6.wav" + "?" + Date.now();

},{"bd47d039e85166fd":"lgJ39"}],"gCumq":[function(require,module,exports,__globalThis) {
module.exports = require("b20a9d5c72eeaa5c").getBundleURL('bLxZJ') + "9_Percival_watch_Morgana.fe1f8f63.wav" + "?" + Date.now();

},{"b20a9d5c72eeaa5c":"lgJ39"}],"aLuUH":[function(require,module,exports,__globalThis) {
module.exports = require("76cc33ee84b82aa5").getBundleURL('bLxZJ') + "9_Percival_watch_no_Morgana.55cde345.wav" + "?" + Date.now();

},{"76cc33ee84b82aa5":"lgJ39"}],"8rsOy":[function(require,module,exports,__globalThis) {
module.exports = require("4d787da8802b1227").getBundleURL('bLxZJ') + "10_Lancelot_close.569e830d.wav" + "?" + Date.now();

},{"4d787da8802b1227":"lgJ39"}],"6Mo74":[function(require,module,exports,__globalThis) {
module.exports = require("83a7add5540d6d8e").getBundleURL('bLxZJ') + "10_Lancelot_open_evil.fe88afb9.wav" + "?" + Date.now();

},{"83a7add5540d6d8e":"lgJ39"}],"5i8w3":[function(require,module,exports,__globalThis) {
module.exports = require("4cf0fe3fce59c675").getBundleURL('bLxZJ') + "11_Open_eyes.0f65244b.wav" + "?" + Date.now();

},{"4cf0fe3fce59c675":"lgJ39"}],"bD8PT":[function(require,module,exports,__globalThis) {
module.exports = require("4ce0ceebe3346648").getBundleURL('bLxZJ') + "silence.6a86aaa8.wav" + "?" + Date.now();

},{"4ce0ceebe3346648":"lgJ39"}],"7pr7H":[function(require,module,exports,__globalThis) {
module.exports = require("77834315c6604fe1").getBundleURL('bLxZJ') + "shortSilence.435beb68.wav" + "?" + Date.now();

},{"77834315c6604fe1":"lgJ39"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["9mu7C","8lqZg"], "8lqZg", "parcelRequire94c2")

//# sourceMappingURL=index.975ef6c8.js.map
