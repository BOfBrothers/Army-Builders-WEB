(() => {
  const base = new URL('.',document.currentScript.src);
  const files = {
  "GER_V_PZ_IV": "images/23387e5a8e59e0bd7ed6.webp",
  "GER_V_251_1": "images/GER_V_251_1.webp",
  "SOV_V_BA10": "images/4b47ee9abe540154d3e9.webp",
  "PS_SOV_V_BA10": "images/4b47ee9abe540154d3e9.webp",
  "SOV_V_SU76": "images/409d500cbad2569f5a35.webp",
  "PS_SOV_V_SU76": "images/409d500cbad2569f5a35.webp",
  "GER_V_234_1": "images/1dc95a8736d62083a490.webp",
  "PS_GER_V_234_1": "images/1dc95a8736d62083a490.webp",
  "GER_V_HUMMEL": "images/7d79d9730b208d47836b.webp",
  "GER_V_231": "images/5ab5cc69d630ff8841f4.webp",
  "PS_GER_V_231": "images/5ab5cc69d630ff8841f4.webp",
  "GER_V_222": "images/GER_V_222.webp",
  "PS_GER_V_222": "images/GER_V_222.webp",
  "GER_V_221": "images/GER_V_221.webp",
  "PS_GER_V_221": "images/GER_V_221.webp",
  "GER_V_WESPE": "images/394bc222be493cf6ae65.webp",
  "GER_V_PANTHER": "images/GER_V_PANTHER.webp",
  "USA_V_SHERMAN": "images/USA_V_SHERMAN.webp",
  "PS_USA_V_SHERMAN": "images/USA_V_SHERMAN.webp",
  "PS_FR_S35": "images/PS_FR_S35.webp",
  "SOV_V_KV1": "images/SOV_V_KV1.webp",
  "PS_SOV_V_KV1": "images/SOV_V_KV1.webp",
  "PS_CAPTURE_PRISE001_PS_ITA_V_M1139": "images/PS_CAPTURE_PRISE001_PS_ITA_V_M1139.webp",
  "PS_GER_V_251": "images/GER_V_251_1.webp",
  "BRI_V_CHURCHILL": "images/BRI_V_CHURCHILL.webp",
  "PS_BRI_V_CHURCHILL": "images/BRI_V_CHURCHILL.webp",
  "USA_V_M8": "images/USA_V_M8.webp",
  "PS_USA_V_M8_GREYHOUND": "images/USA_V_M8.webp",
  "PS_BEL_INF_1940_MMG": "images/PS_BEL_INF_1940_MMG.webp"
};
  Object.assign(files, {
    GER_V_MOTO: "images/GER_V_MOTO.webp",
    PS_FR_AMD:'images/PS_FR_AMD.webp',
    SOV_V_T34_76:'images/SOV_V_T34_76.webp',
    PS_SOV_V_T34:'images/SOV_V_T34_76.webp',
    GER_V_PZ_III:'images/GER_V_PZ_III.webp',
    PS_BRI_V_MATILDA_II:'images/PS_BRI_V_MATILDA_II.webp',
    PS_SOV_V_T26:'images/PS_SOV_V_T26.webp',
    PS_CAPTURE_PRISE013_PS_BRI_V_MATILDA_II:'images/PS_CAPTURE_PRISE013_PS_BRI_V_MATILDA_II.webp',
    VICKERS_APPUI:'images/BRI_APPUI_VICKERS.webp',
    SOV_SNIPER_APPUI:'images/SOV_APPUI_SNIPER.webp'
  });
  const captions = {
    "images/GER_V_MOTO.webp": [
      "Italie, automne 1943",
      "Side-car allemand"
    ],
    "images/GER_V_PANTHER.webp": [
      "Près de Saint-Lô, juillet 1944",
      "Panther au combat"
    ],
    "images/USA_V_SHERMAN.webp": [
      "Normandie, été 1944",
      "Sherman"
    ],
    "images/GER_V_221.webp": [
      "Afrique du Nord, 1941",
      "Automitrailleuse Sd.Kfz. 221"
    ],
    "images/GER_V_222.webp": [
      "Afrique du Nord, 1942",
      "Automitrailleuse Sd.Kfz. 222"
    ],
    "images/GER_V_251_1.webp": [
      "Ardennes, hiver 1944–1945",
      "Sd.Kfz. 251/1"
    ],
    "images/PS_FR_S35.webp": [
      "Quelque part en France, printemps 1940",
      "Somua S35"
    ],
    "images/SOV_V_KV1.webp": [
      "Front de l’Est, 1942",
      "KV-1"
    ],
    "images/PS_CAPTURE_PRISE001_PS_ITA_V_M1139.webp": [
      "Près de Tobrouk, 1941",
      "Fiat M11/39 capturé par les Australiens"
    ],
    "images/BRI_V_CHURCHILL.webp": [
      "Normandie, été 1944",
      "Churchill"
    ],
    "images/USA_V_M8.webp": [
      "Normandie, été 1944",
      "M8 Greyhound"
    ],
    "images/PS_BEL_INF_1940_MMG.webp": [
      "Belgique, mai 1940",
      "Équipe de mitrailleuse belge en position"
    ],
    "images/PS_FR_AMD.webp": [
      "Quelque part en France, mai 1940",
      "Une automitrailleuse Panhard 178 interdit le passage d’un pont"
    ],
    "images/SOV_V_T34_76.webp": [
      "Front de l’Est, été 1943",
      "T-34/76"
    ],
    "images/GER_V_PZ_III.webp": [
      "Front de l’Est, 1943",
      "Panzer III"
    ],
    "images/PS_BRI_V_MATILDA_II.webp": [
      "Afrique du Nord, 1941",
      "Matilda II"
    ],
    "images/PS_SOV_V_T26.webp": [
      "Front de l’Est, 1941",
      "T-26"
    ],
    "images/PS_CAPTURE_PRISE013_PS_BRI_V_MATILDA_II.webp": [
      "Afrique du Nord, 1941",
      "Matilda II de prise allemand"
    ],
    "images/BRI_APPUI_VICKERS.webp": [
      "Europe occidentale, 1944",
      "Trois servants britanniques font une pause près de leur Vickers"
    ],
    "images/SOV_APPUI_SNIPER.webp": [
      "Stalingrad, hiver 1942–1943",
      "Équipe de sniper soviétique"
    ]
  };
  function image(id,label) {
    const file = files[id];
    return file ? renderFile(file,label) : '';
  }
  function renderFile(file,label) {
    const img = document.createElement('img');
    img.src = new URL(file,base);
    img.alt = 'Illustration : ' + label;
    img.loading = 'lazy';
    img.style.cssText = 'width:100%;max-height:180px;object-fit:contain;aspect-ratio:4/3';
    const caption = captions[file];
    if (!caption) return img.outerHTML;
    const figure = document.createElement('figure');
    figure.className = 'vfv-illustration';
    const band = document.createElement('figcaption');
    const place = document.createElement('strong');
    place.textContent = caption[0];
    figure.title = 'Reconstitution historique réalisée par IA';
    band.append(place, document.createElement('br'), caption[1]);
    figure.append(img, band);
    return figure.outerHTML;
  }
  const style = document.createElement('style');
  style.textContent = '.vfv-illustration{margin:0;width:100%;min-width:0;text-align:left}.vfv-illustration img{display:block;height:auto!important}.vfv-illustration figcaption{background:#171717;color:#fff;padding:5px 7px;font:12px/1.35 system-ui}#offers .card-visual:has(.vfv-illustration){height:auto;max-height:none}.vfv-gallery{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:16px}.vfv-gallery .vfv-illustration img{max-height:none!important}';
  document.head.append(style);
  window.VFVIllustrations = {image};
  const gallery = document.querySelector('.vfv-gallery');
  if (gallery) {
    for (const file of Object.keys(captions)) {
      gallery.insertAdjacentHTML('beforeend', renderFile(file, captions[file][1]));
    }
  }
  if (typeof vehicleIllustration !== 'function') return;
  const vehicle = vehicleIllustration;
  vehicleIllustration = v => {
    const html = image(v.id,v.nom_source);
    return html ? '<div class="vehicle-photo">'+html+'</div>' : vehicle(v);
  };
  const appui = appuiIllustration;
  appuiIllustration = o => {
    const nation = FORMATION_NATION[S.formation];
    const supportName = String(o.model?.modele || '') + ' ' + o.name;
    const fallbackId = !o.capture && (/Vickers/i.test(supportName) ? 'VICKERS_APPUI'
      : (nation === 'URSS' || S.formation.startsWith('PS_SOV_')) && /sniper/i.test(supportName) ? 'SOV_SNIPER_APPUI' : '');
    const html = image(S.formation+'_'+o.id,o.name) || image(fallbackId,o.name);
    if (html) return '<div class="card-visual">'+html+'</div>';
    if (FORMATION_NATION[S.formation]==='GER' && !o.capture && /pak\s*40/i.test(o.model?.modele || o.name))
      return '<div class="card-visual"><img loading="lazy" style="width:100%;height:100%;object-fit:contain" alt="Maquette de Pak 40" src="'+new URL('images/abecd68096d80e1b51cb.webp',base)+'"></div>';
    return appui(o);
  };
  render();
})();
