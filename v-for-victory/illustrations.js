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
  function image(id,label) {
    const file = files[id];
    if (!file) return '';
    const img = document.createElement('img');
    img.src = new URL(file,base);
    img.alt = 'Illustration : ' + label;
    img.loading = 'lazy';
    img.style.cssText = 'width:100%;max-height:180px;object-fit:contain;aspect-ratio:4/3';
    return img.outerHTML;
  }
  window.VFVIllustrations = {image};
  if (typeof vehicleIllustration !== 'function') return;
  const vehicle = vehicleIllustration;
  vehicleIllustration = v => {
    const html = image(v.id,v.nom_source);
    return html ? '<div class="vehicle-photo">'+html+'</div>' : vehicle(v);
  };
  const appui = appuiIllustration;
  appuiIllustration = o => {
    const html = image(S.formation+'_'+o.id,o.name);
    if (html) return '<div class="card-visual">'+html+'</div>';
    if (FORMATION_NATION[S.formation]==='GER' && !o.capture && /pak\s*40/i.test(o.model?.modele || o.name))
      return '<div class="card-visual"><img loading="lazy" style="width:100%;height:100%;object-fit:contain" alt="Maquette de Pak 40" src="'+new URL('images/abecd68096d80e1b51cb.webp',base)+'"></div>';
    return appui(o);
  };
  render();
})();
