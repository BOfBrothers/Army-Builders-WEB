/* Campaign ledger. Prices and units are supplied by the validated engine;
   saved files contain events, never trusted balances or editable tariffs. */
(()=>{'use strict';
 const titles={1:'Première rencontre',2:'Chaque objectif compte',5:'La croisée des chemins',8:'Échappatoire',10:'Il faut tenir',11:'Mieux vaut un bon plan',12:'Les cartes vont parler…'};
 const integer=(n,max=100)=>Number.isSafeInteger(n)&&n>=0&&n<=max;
 const need=(ok,message)=>{if(!ok)throw Error(message);};
 function routes(s){if(!s.battles.length)return [1];const b=s.battles.at(-1);if([8,10].includes(b.scenario))return [];if(s.battles.length>=4)return [8,10];if(b.scenario===1)return [2,5];if(b.scenario===11)return [5];if(b.scenario===12)return [2];const attackWon=b.role==='B'&&b.result==='victory'||b.role==='A'&&b.result==='defeat';if(b.scenario===2)return b.result==='draw'?[11,8,10]:attackWon?[8,10]:[11];if(b.scenario===5)return b.result==='draw'?[12,8,10]:attackWon?[8,10]:[12];return [];}
 function eligible(s,u){if(u.leader||u.current>=u.reference)return false;const group=s.groups.find(g=>g.id===u.purchaseGroup);const wiped=group&&group.units.every(id=>s.units.find(x=>x.id===id).current===0);return !(wiped&&(group.kind==='support'||group.cost>0));}
 function replay(template,events){need(Array.isArray(events)&&events.length<=500,'Journal de campagne invalide.');const s={phase:'battle',scenario:1,role:'N',reserve:10,units:template.units.map(u=>({...u,current:u.reference})),groups:structuredClone(template.groups),vehicles:template.vehicles.map((v,i)=>({...v,key:'initial-'+i,status:'operational'})),battles:[],journal:[],freeBought:0,finished:null};
  const active=()=>s.vehicles.filter(v=>v.status!=='destroyed');
  function spend(cost){need(integer(cost,99)&&cost<=s.reserve,'Réserve de campagne insuffisante.');s.reserve-=cost;}
  function unit(id){const u=s.units.find(x=>x.id===id);need(u,'Unité inconnue.');return u;}
  function vehicle(key){const v=s.vehicles.find(x=>x.key===key);need(v,'Véhicule inconnu.');return v;}
  for(const [index,e]of events.entries()){
   need(e&&typeof e.type==='string'&&(!e.note||typeof e.note==='string'&&e.note.length<=500),'Événement de campagne invalide.');const before=s.reserve;let label='';
   if(e.type==='battle'){
    need(s.phase==='battle'&&e.scenario===s.scenario&&['A','B','N'].includes(e.role)&&['victory','defeat','draw'].includes(e.result),'Bataille ou résultat incompatible.');need(![2,5,8,10].includes(s.scenario)||e.role!=='N','Précisez votre rôle attaquant ou défenseur.');need(!active().some(v=>v.status==='damaged'),'Résolvez les réparations avant de jouer.');need(integer(e.penalty,8)&&(e.result==='defeat'?e.penalty>=1:e.penalty===0),'Indiquez le D8 supplémentaire du perdant (1–8), sinon zéro.');
    need(Array.isArray(e.losses)&&e.losses.length<=s.units.length,'Pertes invalides.');const seen=new Set();let lost=0,dead=0;
    for(const l of e.losses){const u=unit(l.id);need(!seen.has(l.id)&&integer(l.lost,u.current)&&integer(l.returned,l.lost),'Pertes ou retours supérieurs aux effectifs.');seen.add(l.id);u.current-=l.lost-l.returned;lost+=l.lost;dead+=l.lost-l.returned;}
    need(lost>=e.penalty,'Les pertes saisies doivent inclure les pertes supplémentaires du D8.');need(Array.isArray(e.vehicles)&&e.vehicles.length<=active().length,'Résultats de véhicules invalides.');const vs=new Set();for(const r of e.vehicles){const v=vehicle(r.key);need(v.status==='operational'&&!vs.has(r.key)&&['operational','damaged','destroyed'].includes(r.status),'Résultat de véhicule incompatible.');vs.add(r.key);v.status=r.status;}
    s.battles.push({scenario:e.scenario,role:e.role,result:e.result,lost,returned:lost-dead,dead,penalty:e.penalty,reserve:s.reserve});s.phase='between';s.freeBought=0;label='Bataille '+s.battles.length+' · '+titles[e.scenario]+' · '+dead+' perte(s) définitive(s)';
   }else if(e.type==='lot'){
    need(s.phase==='between','Les remplacements se font entre deux batailles.');need(Array.isArray(e.targets)&&e.targets.length>0&&e.targets.length<=s.units.length,'Choisissez les unités à compléter.');const seen=new Set();let n=0;for(const t of e.targets){const u=unit(t.id);need(!seen.has(t.id)&&eligible(s,u)&&integer(t.count,u.reference-u.current)&&t.count>0,'Complément de lot incompatible.');seen.add(t.id);n+=t.count;}
    need(n>0&&n<=template.lot.count,'Le lot apporte au maximum '+template.lot.count+' figurines.');spend(template.lot.cost);for(const t of e.targets)unit(t.id).current+=t.count;label='Lot complet · '+n+'/'+template.lot.count+' figurines replacées';
   }else if(e.type==='restore'){
    need(s.phase==='between','Recrutement réservé à l’entre-deux-batailles.');const g=s.groups.find(g=>g.id===e.group);need(g&&g.cost>0&&g.units.some(id=>unit(id).current<unit(id).baseReference),'Achat complet indisponible.');spend(g.cost);for(const id of g.units)unit(id).current=Math.max(unit(id).current,unit(id).baseReference);label='Achat complet · '+g.label;
   }else if(e.type==='leader'){
    need(s.phase==='between','Remplacement réservé à l’entre-deux-batailles.');const u=s.units.find(x=>x.leader);need(u&&u.current===0,'Le Leader est déjà présent.');spend(1);u.current=1;label='Remplacement du Leader';
   }else if(e.type==='vehicle'){
    need(s.phase==='between'&&active().filter(v=>!v.organic).length<3,'Maximum trois véhicules divisionnaires en service ou à réparer.');const profile=template.quote(e.id,e.options),surcharge=!s.vehicles.some(v=>!v.organic)?template.firstVehicleSurcharge||0:0,q={...profile,cost:profile.cost+surcharge};need(q&&integer(q.cost,99),'Profil de véhicule invalide.');need(q.cost!==0||s.freeBought<1,'Un seul véhicule gratuit peut être acquis entre deux batailles.');need(q.cost!==0||active().filter(v=>!v.organic&&v.cost===0).length<3,'Maximum trois véhicules gratuits en service.');
    const domains=new Map();for(const v of [...active(),q]){const a=v.availability;if(!a?.codes?.length)continue;const k=a.domain;if(!domains.has(k))domains.set(k,[...a.codes]);else domains.set(k,domains.get(k).filter(c=>a.codes.includes(c)));}need([...domains.values()].every(a=>a.length),'Ces véhicules n’ont aucune période disponible commune.');spend(q.cost);if(q.cost===0)s.freeBought++;s.vehicles.push({...q,options:[...e.options],key:'purchase-'+index,status:'operational'});label='Véhicule · '+q.name;
   }else if(e.type==='repair'){
    need(s.phase==='between'&&['success','failure'].includes(e.result),'Réparation invalide.');const v=vehicle(e.key);need(v.status==='damaged','Ce véhicule n’attend pas de réparation.');v.status=e.result==='success'?'operational':'destroyed';label=v.name+' · réparation '+(e.result==='success'?'réussie':'échouée');
   }else if(e.type==='next'){
    need(s.phase==='between'&&routes(s).includes(e.scenario)&&['A','B','N'].includes(e.role),'Prochain scénario incompatible avec le parcours.');need(!active().some(v=>v.status==='damaged'),'Résolvez d’abord le D12 des véhicules endommagés.');need(![2,5,8,10].includes(e.scenario)||e.role!=='N','Choisissez votre rôle pour ce scénario.');s.phase='battle';s.scenario=e.scenario;s.role=e.role;label='Préparation · '+titles[e.scenario];
   }else if(e.type==='finish'){
    need(s.phase==='between'&&!routes(s).length,'La campagne n’est pas encore à son dénouement.');const b=s.battles.at(-1),attackWon=b.role==='B'&&b.result==='victory'||b.role==='A'&&b.result==='defeat';if(attackWon)s.finished=b.role==='B'?'victory':'defeat';else{need(integer(e.opponentSpent,10),'Indiquez les étoiles de réserve dépensées par l’adversaire.');const own=10-s.reserve;s.finished=own<e.opponentSpent?'victory':own>e.opponentSpent?'defeat':'draw';}s.phase='finished';label='Campagne terminée';
   }else throw Error('Type d’événement inconnu.');
   s.journal.push({index,type:e.type,label,cost:before-s.reserve,reserve:s.reserve,note:e.note||''});
  }return s;
 }
 window.CampaignModel={titles,routes,eligible,replay};
})();
