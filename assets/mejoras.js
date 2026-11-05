/* Mejoras de experiencia compartidas: buscador del sitio + botón flotante de emergencias */
(function () {
  var INDEX = [
    ["Oficina Virtual (consultá tu cuenta)", "https://oficinavirtual.bagsa.com.ar/", "oficina virtual cuenta saldo consultar usuario"],
    ["Imprimir cupón de pago", "https://www.bagsa.com.ar/old/cupon/index.php", "cupon pago imprimir factura deuda"],
    ["Medios de pago", "oficina-virtual.html#pagos", "pagar rapipago pago facil link provincia net pagos mis cuentas"],
    ["Débito automático", "oficina-virtual.html#pagos", "debito automatico visa tarjeta"],
    ["Tarifas vigentes", "tarifas.html", "tarifa cuadro tarifario precio gas natural glp propano"],
    ["Subsidio Energético Focalizado (SEF)", "https://www.argentina.gob.ar/subsidios", "subsidio sef tarifa social beneficio"],
    ["Zona Fría", "tarifas.html", "zona fria regimen beneficio"],
    ["Conocé tu factura", "factura.html", "factura entender leer descargar electronica simulador"],
    ["Trámites", "tramites.html", "tramite gestion"],
    ["Alta del servicio (obtención)", "tramites.html#obtencion", "alta conexion nuevo servicio obtencion"],
    ["Baja del servicio", "tramites.html#baja", "baja cancelar servicio"],
    ["Cambio de titularidad", "tramites.html#titularidad", "titular titularidad nombre cambio"],
    ["Cambio de domicilio de facturación", "tramites.html#domicilio", "domicilio direccion factura cambio"],
    ["Reconexión del servicio", "tramites.html#reconexion", "reconexion corte reconectar"],
    ["Inquilinos", "tramites.html#inquilinos", "inquilino alquiler mudanza"],
    ["Emergencias 24 hs: 0800-333-2247", "tel:08003332247", "emergencia fuga olor gas telefono urgencia"],
    ["Monóxido de carbono: cómo prevenirlo", "guias-de-seguridad.html#monoxido", "monoxido co intoxicacion ventilacion calefon"],
    ["Manual de emergencias y falta de suministro", "guias-de-seguridad.html#manual", "manual emergencia falta suministro"],
    ["Consumo responsable", "guias-de-seguridad.html#consumo", "consumo ahorro eficiencia"],
    ["Medidas de seguridad", "guias-de-seguridad.html#medidas", "seguridad medidas instalacion"],
    ["Prevención de daños", "guias-de-seguridad.html#prevencion", "prevencion danos excavacion obra cañeria"],
    ["Gasistas matriculados", "seguridad.html#buscador", "gasista matriculado instalador buscar"],
    ["Portal de matriculados", "https://oficinamatriculados.bagsa.com.ar/", "portal matriculados gasista tramite"],
    ["Normativa", "seguridad.html#normativa", "normativa reglamento enargas ley"],
    ["Preguntas frecuentes (ENARGAS)", "https://www.enargas.gob.ar/", "preguntas frecuentes enargas reclamo"],
    ["Quiénes somos", "institucional.html", "institucional empresa historia bagsa"],
    ["Mapa de localidades y oficinas", "mapa.html", "mapa oficinas localidades donde estamos regional direccion horario"],
    ["¿Llega el gas a mi domicilio?", "index.html#llega-el-gas", "llega gas domicilio zona cobertura localidad red"],
    ["Contacto y atención comercial", "index.html#contacto", "contacto telefono whatsapp mail atencion 0800 consulta"],
    ["Novedades", "index.html#novedades", "novedades noticias avisos"],
    ["Cuidado con las estafas", "index.html#estafas", "estafa fraude falso descuento seguridad datos"]
  ];
  function norm(s) { return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }

  var css = document.createElement("style");
  css.textContent =
    ".bx-search-btn{all:unset;box-sizing:border-box;cursor:pointer;display:inline-flex;align-items:center;gap:8px;color:#fff;padding:8px 12px;border-radius:99px;border:1.5px solid rgba(255,255,255,.55);font:600 14px/1 var(--font-head,sans-serif)}" +
    ".bx-search-btn:hover,.bx-search-btn:focus-visible{background:rgba(255,255,255,.18)}" +
    ".bx-search-btn svg{width:18px;height:18px}" +
    ".bx-panel{position:fixed;inset:0;z-index:200;background:rgba(10,20,40,.55);display:none;padding:80px 16px 16px}" +
    ".bx-panel.on{display:block}" +
    ".bx-box{background:#fff;color:#1b1d24;border-radius:16px;max-width:620px;margin:0 auto;padding:18px;box-shadow:0 20px 60px rgba(0,0,0,.35)}" +
    ".bx-box label{font:700 16px var(--font-head,sans-serif);display:block;margin-bottom:10px}" +
    ".bx-box input{width:100%;box-sizing:border-box;font:inherit;font-size:17px;padding:12px 14px;border:1.5px solid #2b82e6;border-radius:12px}" +
    ".bx-res{list-style:none;margin:10px 0 0;padding:0;max-height:50vh;overflow:auto}" +
    ".bx-res a{display:block;padding:10px 12px;border-radius:10px;color:#00589b;text-decoration:none;font-weight:600}" +
    ".bx-res a:hover,.bx-res a:focus-visible{background:#eaf3ff}" +
    ".bx-hint{font-size:13px;color:#4d5360;margin:8px 0 0}" +
    ".bx-sos{display:none;position:fixed;right:14px;bottom:14px;z-index:90;background:#690000;color:#fff;text-decoration:none;border-radius:99px;padding:12px 18px;font:700 14px/1.1 var(--font-head,sans-serif);box-shadow:0 8px 24px rgba(0,0,0,.35);text-align:center}" +
    ".bx-sos small{display:block;font-weight:500;font-size:11px;opacity:.9}" +
    "@media(max-width:860px){.bx-sos{display:block}.bx-search-btn{margin:8px 0}}";
  document.head.appendChild(css);

  // Botón de búsqueda dentro del menú
  var menu = document.querySelector("ul.menu");
  var btn = document.createElement("button");
  btn.type = "button"; btn.className = "bx-search-btn"; btn.setAttribute("aria-label", "Buscar en el sitio");
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><span>Buscar</span>';
  if (menu) { var li = document.createElement("li"); li.appendChild(btn); menu.appendChild(li); }

  var panel = document.createElement("div");
  panel.className = "bx-panel"; panel.setAttribute("role", "dialog"); panel.setAttribute("aria-modal", "true"); panel.setAttribute("aria-label", "Buscador");
  panel.innerHTML = '<div class="bx-box"><label for="bx-q">¿Qué estás buscando hoy?</label><input id="bx-q" type="search" autocomplete="off" placeholder="Ej.: pagar factura, cambio de titularidad, gasista"><ul class="bx-res" id="bx-res"></ul><p class="bx-hint">Escribí una palabra o elegí una sugerencia. Esc para cerrar.</p></div>';
  document.body.appendChild(panel);
  var q = panel.querySelector("#bx-q"), res = panel.querySelector("#bx-res");
  var FREQ = [0, 2, 8, 15, 20, 25];
  function show(list) {
    res.innerHTML = "";
    if (!list.length) { res.innerHTML = '<li><span class="bx-hint">No encontramos resultados. Probá con otra palabra o llamá al 0800-122-5888.</span></li>'; return; }
    list.forEach(function (e) {
      var l = document.createElement("li"), a = document.createElement("a");
      a.href = e[1]; a.textContent = e[0];
      if (/^https?:/.test(e[1])) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
      l.appendChild(a); res.appendChild(l);
    });
  }
  function run() {
    var t = norm(q.value.trim());
    if (!t) { show(FREQ.map(function (i) { return INDEX[i]; })); return; }
    var words = t.split(/\s+/);
    show(INDEX.filter(function (e) { var h = norm(e[0] + " " + e[2]); return words.every(function (w) { return h.indexOf(w) > -1; }); }));
  }
  function open() { panel.classList.add("on"); q.value = ""; run(); setTimeout(function () { q.focus(); }, 30); }
  function close() { panel.classList.remove("on"); }
  btn.addEventListener("click", open);
  q.addEventListener("input", run);
  panel.addEventListener("click", function (e) { if (e.target === panel) close(); });
  res.addEventListener("click", function (e) { if (e.target.tagName === "A") close(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
    if (e.key === "/" && !/INPUT|TEXTAREA|SELECT/.test((document.activeElement || {}).tagName || "")) { e.preventDefault(); open(); }
  });

  // Botón flotante de emergencias (celular)
  var sos = document.createElement("a");
  sos.className = "bx-sos"; sos.href = "tel:08003332247"; sos.setAttribute("aria-label", "Llamar a emergencias, 0800-333-2247, las 24 horas");
  sos.innerHTML = "Emergencias<small>0800-333-2247 · 24 hs</small>";
  document.body.appendChild(sos);
})();
