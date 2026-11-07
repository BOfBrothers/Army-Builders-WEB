/* V for Victory — presentation only, 2026-11-07.
   Prices come from the active engine. No state, rules or file format changes. */
(() => {
  'use strict';
  if (window.VFVRecruitmentCosts) return;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function snapshot() {
    const teams = selectedTeams(), purchases = [];
    for (const offer of selected()) {
      for (let instance = 0; instance < (S.owned[offer.id] || 0); instance++) {
        const prefix = offer.id + '_' + instance + '_';
        const teamKeys = teams.filter(t => t.key.startsWith(prefix) && /^\d+$/.test(t.key.slice(prefix.length))).map(t => t.key);
        purchases.push({id:offer.id + ':' + instance, offerId:offer.id, label:offer.name,
          cost:offer.cost, diamond:!!offer.diamond, exchangeCount:offer.diamond ? 2 : 0, teamKeys});
      }
    }
    const lots = Number(S.lots) || 0, unitCost = Number(F.renforts?.cout_etoiles) || 0;
    const typed = usesTypedLots() && Array.isArray(S.lotTypes) && S.lotTypes.length === lots;
    const counts = new Map();
    if (typed) for (const type of S.lotTypes) counts.set(type, (counts.get(type) || 0) + 1);
    const lotName = type => type === 'LMG' ? (S.formation === 'BETA_USMC' ? '2 BAR' : '1 LMG') : type === 'FAC' ? '1 F-AC + 1 FSL' : type === 'PM' ? '3 PM' : '3 FSL';
    const count = F.renforts?.figurines_par_lot || 3;
    const label = typed ? [...counts].map(([type,n]) => n + ' lot' + (n > 1 ? 's' : '') + ' de ' + lotName(type)).join(' · ')
      : lots + ' lot' + (lots > 1 ? 's' : '') + ' de ' + count + ' figurines';
    return {purchases, reinforcements:{lots, cost:lots * unitCost, unitCost, label}};
  }
  const price = p => p.diamond ? '◆ · échange de ' + p.exchangeCount + ' figurines' : p.cost + ' ★';
  // Captured gun crews cannot be converted. They must still be painted and listed.
  // Supplement presentation candidates without changing conversionCandidates().
  function paintCandidates() {
    const figs = conversionCandidates(), ids = new Set(figs.map(f => f.id));
    const captured = new Set(snapshot().purchases.filter(p => window.VFVCanonsCaptures?.isCaptured(p.offerId)).flatMap(p => p.teamKeys));
    const add = f => {if (!ids.has(f.id)) {figs.push(f); ids.add(f.id);}};
    for (const x of selectedTeams().filter(t => captured.has(t.key))) {
      [x.team.chef_armement,...x.team.autres_disponibles].forEach((weapon,i) => add({id:x.key+'_fsl_'+i,
        group:x.group,team:x.team.nom,teamKey:x.key,origin:'base',weapon,
        role:i===0?'chef':weapon==='SERVANT_SANS_ARME_INDIQUEE'?'servant':'figurine'}));
      for (const slot of slots().filter(s => s.key.startsWith(x.key+'_') && S.alloc[s.key])) add({id:slot.key+'_reinforced',
        group:x.group,team:x.team.nom,teamKey:x.key,origin:'renfort',weapon:slot.weapon,
        role:slot.weapon==='SERVANT_SANS_ARME_INDIQUEE'?'servant':'figurine'});
    }
    return figs;
  }
  const badge = p => '<span class="recruitment-cost" data-purchase="' + esc(p.id) + '">' + esc(price(p)) + '</span>';
  const teamPurchases = data => new Map(data.purchases.flatMap(p => p.teamKeys.map(key => [key,p])));
  function lotsHTML(r, inventory = false) {
    if (!r.lots) return '';
    if (inventory) return '<p class="muted recruitment-inventory-lots">Renforts : ' + esc(r.label) + ' <b>(' + r.cost + ' ★)</b></p>';
    return '<div class="item recruitment-lots"><div class="roster-entry-head"><strong>Renforts · lots achetés</strong><span class="recruitment-cost">' + r.cost + ' ★</span></div><p class="team-note">' + esc(r.label) + ' · ' + r.unitCost + ' ★ par lot</p></div>';
  }
  function annotateRoster() {
    const roster = document.getElementById('roster');
    if (!roster) return;
    roster.querySelectorAll('.recruitment-cost,.recruitment-included,.recruitment-lots').forEach(el => el.remove());
    const data = snapshot(), lookup = teamPurchases(data), seen = new Set(), teams = selectedTeams();
    [...roster.querySelectorAll('.roster-entry')].forEach((card, index) => {
      const p = lookup.get(teams[index]?.key), head = card.querySelector('.roster-entry-head');
      if (!p || !head) return;
      if (!seen.has(p.id)) {head.insertAdjacentHTML('beforeend', badge(p)); seen.add(p.id);}
      else head.insertAdjacentHTML('beforeend', '<span class="recruitment-included">Inclus dans le groupe</span>');
    });
    roster.insertAdjacentHTML('beforeend', lotsHTML(data.reinforcements));
  }
  const inventory = buildPaintInventory;
  buildPaintInventory = function (...args) {
    const doc = new DOMParser().parseFromString(inventory.apply(this,args), 'text/html');
    const data = snapshot(), lookup = teamPurchases(data), seen = new Set();
    for (const row of doc.querySelectorAll('[data-recruitment-team]')) {
      const p = lookup.get(row.dataset.recruitmentTeam);
      if (!p || seen.has(p.id)) continue;
      row.insertAdjacentHTML('beforeend', ' <span class="recruitment-inventory-cost">(' + esc(price(p)) + ')</span>');
      seen.add(p.id);
    }
    const head = doc.querySelector('.paint-inventory-head');
    if (head) head.insertAdjacentHTML('afterend', lotsHTML(data.reinforcements, true));
    return doc.body.innerHTML;
  };
  const print = printContent;
  printContent = function (...args) {
    const doc = new DOMParser().parseFromString(print.apply(this,args), 'text/html');
    const data = snapshot(), lookup = teamPurchases(data), seen = new Set(), groups = new Map();
    for (const team of selectedTeams()) {
      if (!groups.has(team.group)) groups.set(team.group, []);
      groups.get(team.group).push(team);
    }
    const ordered = printableTeams().flatMap(([name, list]) => list.map((_, i) => groups.get(name)?.[i]));
    const labels = doc.querySelectorAll('.p-main-org .p-team>b,.p-main-list tbody tr td:nth-child(2)');
    [...labels].forEach((label,i) => {
      const p = lookup.get(ordered[i]?.key); if (!p) return;
      label.insertAdjacentHTML('beforeend', seen.has(p.id) ? ' <small class="recruitment-included">(inclus dans le groupe)</small>' : ' ' + badge(p));
      seen.add(p.id);
    });
    const main = doc.querySelector('.p-main-org,.p-main-list');
    if (main && data.reinforcements.lots) main.insertAdjacentHTML('beforeend', lotsHTML(data.reinforcements));
    return doc.body.innerHTML;
  };
  const style = document.createElement('style');
  style.id = 'recruitment-costs-style';
  style.textContent = '.roster-entry-head{flex-wrap:wrap}.recruitment-cost{color:var(--accent,#405e4d);font-weight:700;white-space:nowrap;font-size:.92em}.roster-entry-head .recruitment-cost{margin-left:auto}.roster-entry-head .roster-remove{order:2}.recruitment-included{font-size:.78em;color:#66746a;margin-left:auto}.recruitment-lots .team-note{margin:7px 0 0}.recruitment-inventory-cost{font-size:.9em;color:#405e4d;white-space:nowrap}.recruitment-inventory-lots{margin:5px 0 10px}@media print{.recruitment-cost{font-size:inherit}.recruitment-lots{break-inside:avoid;border:1px solid #ccd6ce;padding:8px;margin:8px 0}.recruitment-included{font-size:.85em}}';
  document.head.append(style);
  window.VFVRecruitmentCosts = {snapshot, price, paintCandidates, refresh:annotateRoster};
  const draw = render;
  render = function (...args) { const result = draw.apply(this,args); annotateRoster(); return result; };
  render();
})();
