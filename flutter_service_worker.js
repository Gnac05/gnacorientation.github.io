'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9b2854ce54973ff61733f393acff9fd1",
".git/config": "13917201f58517c6337718bf7ee824b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ee453b12a1040f23caed0593f0ace0e3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "43c55ff4a1c6b1dbb2434907a7f68413",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "276d0d0d1d468d090697b52a5f22f388",
".git/logs/refs/heads/main": "276d0d0d1d468d090697b52a5f22f388",
".git/logs/refs/remotes/origin/main": "19280c22616a65a03522f32576f510c5",
".git/objects/01/22198ad7a483023578b73a2c233e8d2d1c977f": "0258e51fc24ac9d667d52d2126e99d11",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/11/65592ecf0420515618ebf022caa816305b3dc0": "a1037886c87a92ac261b7a9924e2babc",
".git/objects/15/6cf7497d13dad08cbcb35c3820f2f8b4a45304": "a82eb7516c8d098712c2c1860339ab45",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/18/5353b86793068b9c3c18e5065fbb8c6a8c28d8": "c12c0d96d802433a8072a86dbf122845",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/8d9b1c0274ba222151ef438ba73531e5964cb1": "f79f664bf23b721035afa29b2dcfd562",
".git/objects/26/44f96bb64d0fb194a3ac218e8597b171c0fcba": "9b7a4be113beb097d527ec7689bfac6c",
".git/objects/26/83d604c2ebb3b3d8c04086d634169aeb905aa6": "6f7758f1886ad4d89dfa073a6b165fc7",
".git/objects/32/14fe66749c5e42857cc65ab063ee270b1fc1ee": "b765aa02dd4abc4f5632579f41fefec6",
".git/objects/3c/2c265d87f2b4965873d69bc2bc33e6da5e0182": "6aa30591d8c085d0279b2b23352a810e",
".git/objects/40/0e765b66ca6c4506eb69199c9f9a47b9098a3c": "89faec5235c5c71b3a82ee30eb676526",
".git/objects/47/3a0bb297ed08f0348405c241e50c074d5309e6": "eaf72f114075b0d08b30172e6f9e4ea9",
".git/objects/48/343382e25236fdf778896a4601f95f4ff42b32": "0c07e1ee27f7c6b111152b98bd4f799b",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4d/cda30565761a19de835cedc4832573de0cbb0f": "3a25a18e7aacfa9aa94d4d1da156910d",
".git/objects/51/ccf3f6c2d5ebe31d8eee8cf77a77dc192d636a": "dead309e399a117680f88afd81058a1c",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/14e87b34e9b61562fd97c6fa0d72185b17bc35": "dd402e947f84823ff69e2c5f11c0314c",
".git/objects/56/2435447cbbb3a82bb144b8733a48a944ff8926": "7d0941b2a5088a3769ef0a90c526029b",
".git/objects/56/6e060ec1593a2c4a0cbccbd4553149b655ffa0": "4f9cfcc94b75207ec2e4d4262efc3370",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/62/2062010f0b5719e45fc25d37884360d200dc64": "72d1b1293b940f8e87145050bdae18d9",
".git/objects/63/db4ce58a5c82691213d12210c3ef6c6a1a118d": "12bbd3a3476afd37f662076fc5e282ab",
".git/objects/63/e37c15313928d65b337d272d19b664895ddda9": "2001017705a5dab225642ddd22811990",
".git/objects/66/63b7e6174659ef98462cfd18444d45f9526eeb": "dee0a4656cdd185c3895d6720e0114d9",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/fa23dc1bb4d29638c3330c4cd9f98e9622da2d": "ae2a10cf4423d2b3bcf08e71ee4cf4a4",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/76/5bdcfd6ee5528b4ad63358830143f3dd46c38b": "91ddaea529320a03fd75817534f948cb",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/87/fa84d27e3ab24508024a8e24881e26d1ba2529": "ef5b398c15094801fdc2b4ec7aa45f54",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/15cbbb80cc9e4bde690083d00882805424c8b2": "5eee457220cbc700d66274c232ba1d8f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/2e74963a69b9790eced6cdd5c780fada0f83cd": "e21e0ee5f8ef8e64db2792777656a2d3",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/97/6510ed148ef3fbed699a463c4d54684dc74fdb": "121a523ca39e0061c1031ee745826260",
".git/objects/99/338e34662f94be882a1410aa8a9932fa721399": "7e17e763f7dfbe68b0d985b4f6601705",
".git/objects/a7/b4ac73ce80dbf3030652d7247947f5cf71cefa": "7d658286960cbdb3e7ea8e0fc7524729",
".git/objects/ab/8c705fc12c18fe77e87acf535e7cb95bf2b1b9": "da242228a57f7838998b14a9bfb0edda",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/598fb16f064b113d525bf58ef01466d71fc6aa": "5b9a69553d1f9bff0e26a2e1cd7fa57b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/f72b9a1f78f75f060367b10cebef5eb2984d9e": "e286b49f70db912225be6938c1142966",
".git/objects/bf/185105fbbb7bfff2c3115152f104b60d1d524f": "7b5f08c866e5b76d0617320463ab3f64",
".git/objects/c2/2f3b99b253a7309807f198508f178598a16ad7": "e0aec860f4276b2734b5fa398580854c",
".git/objects/c5/9c7315040fa0a8493ea0dffc56a47b51165139": "8328e2239f0175b572d6aff91fe1be2d",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c7/7d77ff105e9801553e71cf55fabe4c559d3153": "7ff600fab769f40d5576cd07e98515b0",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/12ac9177791af6864c6e8584de45b3a6902134": "837a41ddf579a576b09281699593b3a2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/de/45047323da8abd5a5a3e2ae6a5992d4c957a46": "b0e6bd8d579d953136f1093b801752f4",
".git/objects/e0/05f76ea4fb2fa256c68e3d82cba0c23bacb035": "8d505e9f03ef3233b29a29c344d39e69",
".git/objects/e4/9d60b0d1f3b8e71a655b86b693763052005bb9": "a5da8a4db032820a3a523e9ba8239cbc",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/4d7da5c3270ca96dda5581ba114184544fb253": "118780a8edbfc90c738509acbf84cfc5",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/ea1a1f8299f1226d57cc34264ed7c9aff739df": "d71fe49c4305aafe5b78aebbccae2a07",
".git/refs/heads/main": "bfe4fe513eb64b5ba54af47526aa433f",
".git/refs/remotes/origin/main": "788e4f3882a88bbcbd839cf187cf730a",
"assets/AssetManifest.bin": "a312c513cebf0bcca7fe2c9995351528",
"assets/AssetManifest.bin.json": "a23be7be66bd9930ebc64598a4cedeee",
"assets/AssetManifest.json": "91108e644b887124dc986ed7d5aa28f0",
"assets/assets/file/data.json": "ba22bb4aed0cac0103898ab7ea3ddd21",
"assets/assets/file/user_data.json": "69b2a011ccab44cbb5bcdc469e3a467c",
"assets/assets/gnac_orientation_icon.jpg": "dd8a3bdd7267ef2fc8468057b297fb55",
"assets/assets/images/icon.png": "2a8c2e8d217b3971066928bee593ba58",
"assets/assets/images/icon_small.png": "d3b76a5a33768fd566c54869ec3ab778",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "bccba48cd5108c8b580c09e97a55150b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "3b3807c6415711f3c9e497cbaa385849",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "8f39400e11f0f45e2a8c1569f21973d2",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "3800940853f2ac090c3b601d0f5d8d21",
"icons/Icon-512.png": "ef4f7e8df1cdcb0e253e1684a0d3d26c",
"icons/Icon-maskable-192.png": "3800940853f2ac090c3b601d0f5d8d21",
"icons/Icon-maskable-512.png": "ef4f7e8df1cdcb0e253e1684a0d3d26c",
"index.html": "4f29f76ebe20362bc97edf0c70c61b12",
"/": "4f29f76ebe20362bc97edf0c70c61b12",
"main.dart.js": "40c24c72baed895a8597e9d47d7fdfd9",
"manifest.json": "82441adadd0825c0f6d5a533f5a8e417",
"splash/img/dark-1x.png": "2c28e06e36fbb699a0797988b7452eb6",
"splash/img/dark-2x.png": "6a305cee21ed52169a8bf80923f72c9c",
"splash/img/dark-3x.png": "a9000b5d610d32fe0176c3d73c6fe7ff",
"splash/img/dark-4x.png": "e59ac785834169eca7b070fd390de5d1",
"splash/img/light-1x.png": "2c28e06e36fbb699a0797988b7452eb6",
"splash/img/light-2x.png": "6a305cee21ed52169a8bf80923f72c9c",
"splash/img/light-3x.png": "a9000b5d610d32fe0176c3d73c6fe7ff",
"splash/img/light-4x.png": "e59ac785834169eca7b070fd390de5d1",
"version.json": "8f36f9537e10f55bb27b019469d84900"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
