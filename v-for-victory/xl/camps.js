/* Team compatibility for the current published orders of battle, not a
   chronology/theatre model. France entries represent 1940/FFL here; no Vichy
   variant is silently inferred. Finland's listed Continuation force joins Axis. */
window.VFVXLCamps=Object.freeze({
 labels:Object.freeze({axe:'Axe',allies:'Alliés'}),
 defaults:Object.freeze({axe:['GER_INF','GER_INF'],allies:['USA_INF','BRI_INF']}),
 side(id){if(/^(?:PS_)?(?:GER|ITA|FIN)_/.test(id))return 'axe';if(/^(?:PS_)?(?:USA|BRI|SOV|FR|BEL|POL)_/.test(id)||/^RES_/.test(id))return 'allies';return null;}
});
