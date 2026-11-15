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
    PS_FIN_V_T26:'images/PS_FIN_V_T26-20261114.2.webp',
    PS_CAPTURE_PRISE013_PS_BRI_V_MATILDA_II:'images/PS_CAPTURE_PRISE013_PS_BRI_V_MATILDA_II.webp',
    VICKERS_APPUI:'images/BRI_APPUI_VICKERS.webp',
    SOV_SNIPER_APPUI:'images/SOV_APPUI_SNIPER.webp'
  });
  Object.assign(files, {
  "GER_V_231": "images/GER_V_231-v2.webp",
  "PS_GER_V_231": "images/GER_V_231-v2.webp",
  "GER_V_234_1": "images/GER_V_234_1-v2.webp",
  "PS_GER_V_234_1": "images/GER_V_234_1-v2.webp",
  "GER_V_234_4": "images/GER_V_234_4-v2.webp",
  "GER_V_251_10": "images/GER_V_251_10-v2.webp"
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
    "Désert occidental, 1942",
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
  "images/PS_FIN_V_T26-20261114.2.webp": [
    "Front finlandais, hiver 1942–1943",
    "L’équipage débâche un T-26 de prise"
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
  ],
  "images/GER_V_231-v2.webp": [
    "France, 1940",
    "Sd.Kfz. 231 8-Rad"
  ],
  "images/GER_V_234_1-v2.webp": [
    "Europe occidentale, 1944",
    "Sd.Kfz. 234/1"
  ],
  "images/GER_V_234_4-v2.webp": [
    "Europe occidentale, 1945",
    "Sd.Kfz. 234/4"
  ],
  "images/GER_V_251_10-v2.webp": [
    "Europe occidentale, 1944",
    "Sd.Kfz. 251/10"
  ]
};
  Object.assign(files, {
  "GER_V_LUCHS": "images/GER_V_LUCHS-visuels03.webp",
  "GER_V_KUBEL": "images/GER_V_KUBEL-visuels04.webp",
  "PS_GER_V_KUBEL": "images/GER_V_KUBEL-visuels04.webp",
  "GER_V_MARDER": "images/GER_V_MARDER-visuels03.webp",
  "PS_GER_V_MARDER": "images/GER_V_MARDER-visuels03.webp",
  "GER_V_HETZER": "images/GER_V_HETZER-visuels04.webp"
});
  Object.assign(captions, {
  "images/GER_V_LUCHS-visuels03.webp": [
    "Normandie, été 1944",
    "Panzer II Ausf. L Luchs"
  ],
  "images/GER_V_KUBEL-visuels04.webp": [
    "Afrique du Nord, 1942",
    "Kübelwagen"
  ],
  "images/GER_V_MARDER-visuels03.webp": [
    "Front de l’Est, hiver 1943–1944",
    "Marder III"
  ],
  "images/GER_V_HETZER-visuels04.webp": [
    "Europe, hiver 1944–1945",
    "Jagdpanzer 38(t) Hetzer"
  ]
});
  Object.assign(files, {
  "PS_BEL_V_CARDEN_LOYD": "images/PS_BEL_V_CARDEN_LOYD-20261115.webp",
  "USA_V_M7": "images/USA_V_M7-20261115.webp",
  "PS_USA_V_PRIEST": "images/USA_V_M7-20261115.webp",
  "USA_V_JUMBO": "images/USA_V_JUMBO-20261115.webp",
  "USA_V_WOLVERINE": "images/USA_V_WOLVERINE-20261115.webp",
  "PS_USA_V_M10": "images/USA_V_WOLVERINE-20261115.webp",
  "USA_APPUI_BAZOOKA": "images/USA_APPUI_BAZOOKA-20261115.webp"
});
  Object.assign(captions, {
  "images/PS_BEL_V_CARDEN_LOYD-20261115.webp": [
    "Belgique, 1940",
    "Carden-Loyd Mark VI de 47 mm à l’atelier"
  ],
  "images/USA_V_M7-20261115.webp": [
    "France, automne 1944",
    "M7 Priest américain"
  ],
  "images/USA_V_JUMBO-20261115.webp": [
    "Près de Bastogne, décembre 1944",
    "L’équipage du Sherman Jumbo « First in Bastogne »"
  ],
  "images/USA_V_WOLVERINE-20261115.webp": [
    "Europe occidentale, hiver 1944–1945",
    "Chasseurs de chars M10"
  ],
  "images/USA_APPUI_BAZOOKA-20261115.webp": [
    "France, 1944",
    "Une équipe de bazooka américaine fait une pause"
  ]
});
  Object.assign(files, {"CAPTURE_PRISE022_GER_V_PANTHER":"images/CAPTURE_PRISE022_GER_V_PANTHER-20261115.2.webp","GRE_APPUI_MORTIER_81":"images/GRE_APPUI_MORTIER_81-20261115.2.webp"});
  Object.assign(captions, {"images/CAPTURE_PRISE022_GER_V_PANTHER-20261115.2.webp":["Secteur Traby–Lida, juillet 1944","Panther de prise soviétique"],"images/GRE_APPUI_MORTIER_81-20261115.2.webp":["Environs de Konitsa, octobre 1940","Une équipe grecque charge son mortier de 81 mm"]});
  const captureSources = {
  "PRISE001": {
    "url": "https://www.awm.gov.au/collection/005042",
    "title": "AWM 005042 — chars italiens réemployés à Tobrouk"
  },
  "PRISE002": {
    "url": "https://tanks-encyclopedia.com/ww2/france/char_b1_bis.php",
    "title": "Char B1 bis — service allemand et retour en France"
  },
  "PRISE003": {
    "url": "https://commons.wikimedia.org/wiki/File%3ABundesarchiv_Bild_101I-212-0209-32%2C_Russland-Nord%2C_Panzer_und_Soldat.jpg",
    "title": "Bundesarchiv — Somua S35 allemand au front nord"
  },
  "PRISE011": {
    "url": "https://commons.wikimedia.org/wiki/File%3AThe_British_Army_in_North-west_Europe_1944-45_B12184.jpg",
    "title": "IWM — Cuckoo à Geijsteren"
  },
  "PRISE012": {
    "url": "https://commons.wikimedia.org/wiki/File%3ABundesarchiv_Bild_101III-Hoffmann-023-11%2C_Russland%2C_bei_Charkow%2C_Himmler_bei_SS-Division_%22Das_Reich%22.jpg",
    "title": "Bundesarchiv — T34/76 de prise près de Kharkiv"
  },
  "PRISE013": {
    "url": "https://www.awm.gov.au/collection/010860",
    "title": "AWM — équipage allemand d’un Matilda repris par les Néo-Zélandais"
  },
  "PRISE014": {
    "url": "https://commons.wikimedia.org/wiki/File%3AAirborne_troops_cross_back_over_the_Rhine_in_a_captured_German_Kubelwagen_car%2C_March_1945._BU2549.jpg",
    "title": "IWM — Kübelwagen capturée utilisée par des aéroportés britanniques"
  },
  "PRISE016": {
    "url": "https://www.ospreypublishing.com/ca/discover/osprey-publishing/machine-of-the-month/beutepanzers-of-world-war-ii/",
    "title": "Osprey — Beutepanzers of World War II"
  },
  "PRISE017": {
    "url": "https://www.ospreypublishing.com/ca/discover/osprey-publishing/machine-of-the-month/beutepanzers-of-world-war-ii/",
    "title": "Osprey — Beutepanzers of World War II"
  },
  "PRISE018": {
    "url": "https://www.ospreypublishing.com/ca/discover/osprey-publishing/machine-of-the-month/beutepanzers-of-world-war-ii/",
    "title": "Osprey — Beutepanzers of World War II"
  },
  "PRISE019": {
    "url": "https://www.ospreypublishing.com/ca/discover/osprey-publishing/machine-of-the-month/beutepanzers-of-world-war-ii/",
    "title": "Osprey — Beutepanzers of World War II"
  },
  "PRISE022": {
    "url": "https://www.tankarchives.com/2013/10/valentines-and-panthers.html?m=0",
    "title": "Tank Archives — Valentines and Panthers"
  },
  "PRISE024": {
    "url": "https://www.assocarri.it/old/Storia/Storia_Parri.pdf",
    "title": "Maurizio Parri — Tracce di cingolo, histoire des carristes"
  },
  "PRISE025": {
    "url": "https://www.assocarri.it/old/Storia/Storia_Parri.pdf",
    "title": "Maurizio Parri — Tracce di cingolo, histoire des carristes"
  },
  "PRISE029": {
    "url": "https://edukacja.ipn.gov.pl/download/210/1184957/BitwaoPabianicestronainternetowa.pdf",
    "title": "IPN — Bitwa o Pabianice"
  },
  "PRISE033": {
    "url": "https://www.ospreypublishing.com/ca/discover/osprey-publishing/machine-of-the-month/beutepanzers-of-world-war-ii/",
    "title": "Osprey — Beutepanzers, tableau juin 1943"
  },
  "PRISE037": {
    "url": "https://collection.nam.ac.uk/detail.php?acc=1975-03-63-19-104",
    "title": "National Army Museum — Firefly repris près de Trun"
  }
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
    band.append(place, ' · ', caption[1]);
    const reference = captureSources[file.match(/CAPTURE_(PRISE\d+)_/)?.[1]];
    if (reference) {
      const link = document.createElement('a');
      link.href = reference.url;
      link.title = reference.title;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.style.color = 'inherit';
      link.textContent = 'Source historique';
      band.append(' · ', link);
    }
    figure.append(img, band);
    return figure.outerHTML;
  }
  const style = document.createElement('style');
  style.textContent = '.vfv-illustration{position:relative;margin:0;width:100%;min-width:0;aspect-ratio:4/3;overflow:hidden;border-radius:inherit;text-align:left}.vfv-illustration img{display:block;width:100%!important;height:100%!important;max-height:none!important;object-fit:cover!important}.vfv-illustration figcaption{position:absolute;inset:auto 0 0;box-sizing:border-box;background:linear-gradient(transparent,rgba(0,0,0,.66));color:#fff;padding:8px 5px 4px;font:10px/1.2 system-ui;text-shadow:0 1px 2px #111;white-space:normal;overflow-wrap:anywhere}.vfv-illustration figcaption strong{font-weight:500}#offers .card-visual:has(.vfv-illustration){height:auto;max-height:none}.vfv-gallery{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:16px}.garage-card .vehicle-photo .vfv-illustration{height:100%;aspect-ratio:auto}';
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
      : (nation === 'USA' || S.formation.startsWith('PS_USA_')) && /bazooka/i.test(supportName) ? 'USA_APPUI_BAZOOKA'
      : (nation === 'URSS' || S.formation.startsWith('PS_SOV_')) && /sniper/i.test(supportName) ? 'SOV_SNIPER_APPUI' : '');
    const html = image(S.formation+'_'+o.id,o.name) || image(fallbackId,o.name);
    if (html) return '<div class="card-visual">'+html+'</div>';
    if (FORMATION_NATION[S.formation]==='GER' && !o.capture && /pak\s*40/i.test(o.model?.modele || o.name))
      return '<div class="card-visual"><img loading="lazy" style="width:100%;height:100%;object-fit:contain" alt="Maquette de Pak 40" src="'+new URL('images/abecd68096d80e1b51cb.webp',base)+'"></div>';
    return appui(o);
  };
  render();
})();
