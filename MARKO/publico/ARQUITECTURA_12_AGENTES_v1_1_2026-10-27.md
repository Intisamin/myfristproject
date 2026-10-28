# MARKO v1.1 · 12 agentes y ciclo de aprendizaje (27/10/2026)

> Documento público de arquitectura. Los contratos completos, código de skills, scripts aprobados, presupuestos, estados, claves, activos y grabaciones se conservan en respaldos privados; no están incluidos aquí.

## Estado operativo
- **12 agentes definidos + 1 orquestador central.** Plugins personales activos: Validadoncio, Negocioncio, Ideoncio (3/12).
- Otros 9 módulos se diseñan como skills intercambiables, pendientes de integración y pruebas de extremo a extremo.
- Google Drive tiene archivos privados respaldados y un directorio audiovisual todavía sin sincronización automática. Ledger P0 como snapshot; P0.3 (estado transaccional online + Drive) pendiente.
- Una automatización semanal específica **Analiticoncio** quedó activada para los lunes por la mañana a partir del 02/11/2026 (America/Lima). No concede por sí sola permisos publicitarios.

## Cadena editorial
DESCUBRE → Validadoncio → Negocioncio

CONECTA → Ideoncio → Programoncio → Libretoncio → **Recursoncio 1.1** → Produccioncio → Editoncio → Revisioncio

CRECE → Publiconcio → **Analiticoncio 1.1** → **Campañoncio (nuevo, 12.º agente)**

Retroalimentación: Analiticoncio devuelve **evidencia y propuestas** a Ideoncio/Programoncio, y propuestas de campaña a Campañoncio. Las propuestas nunca cambian de forma automática guiones/calendario LOCKED.

## Recursoncio 1.1 · Calidad fotorealista y movimiento
Una escena debe poseer continuidad verificable entre:
`fragmento de guion → función narrativa → prompt imagen → imagen base aprobada → prompt animación → clip animado → QA fotográfico/clínico y de movimiento`.

- Preferir **un recurso visual potente por objetivo narrativo**; no aumentar el número de escenas innecesariamente.
- Contexto clínico físicamente plausible, composición 9:16, movimiento natural, identidad/iluminación consistentes.
- No representar demos de IA, inspecciones o evaluaciones falsas como prueba real.
- No sustituir animación con zoom estático/Ken Burns sobre imágenes.
- Primero validar imagen y crédito/costo; recién entonces animación image-to-video. Presupuesto y licencia obligatorios.
- El guion aprobado se conserva por hash.

## Analiticoncio 1.1 · Informe semanal con evidencia
- Por publicación: fuente e ID comprobados, edad desde publicación, métricas accesibles por red, 7/30 días y fecha de medición.
- Separar métricas de atención, intención y conversiones atribuibles. **Visualizaciones ≠ clientes.**
- Atribución de diagnósticos, mensajes, reuniones y ventas solo con datos observados; faltante = no disponible, no cero.
- Salida: 3 aprendizajes, hipótesis para Ideoncio, segmento/calendario sugerido para Programoncio y hasta 3 Reels candidatos a prueba de pauta.

## Campañoncio 1.0 · Propuestas Meta Ads
- Recibe Reels publicados y métricas comprobadas. Recomienda si el objetivo debe ser tráfico hacia evaluación gratuita, o leads/mensajes cuando exista medición y acceso.
- Entrega: público propuesto, versiones creativas, URL con UTMs, ventana de prueba, monto máximo sugerido, KPIs, riesgos y estado de atribución.
- **No hay integración operativa confirmada para escribir campañas Meta en esta fase**. Las propuestas son borradores.
- Activar campaña requiere, **aparte de aprobar el Reel orgánico**, permiso específico de cuenta de anuncios, creativo exacto, público, fechas, objetivo, presupuesto total/moneda y autorización humana explícita. No ejecutar gastos automáticamente.

## Hitos técnicos
1. **P0.3 (siguiente):** estado remoto idempotente y archivo audiovisual de Drive por `content_id`.
2. P1: instalar o integrar los módulos necesarios, probar el par imagen+animación y su QA.
3. P2: validación de análisis semanal con métricas reales y realimentación del calendario sin alteraciones no autorizadas.
4. P3: conexión de lectura/escritura Meta Ads (cuando se apruebe), campaña piloto supervisada con presupuestos y conversiones medidos.

**Preservación:** contratos de P0.2 y los 12 guiones cerrados de noviembre de 2026 permanecen intactos. Esta v1.1 es aditiva.
