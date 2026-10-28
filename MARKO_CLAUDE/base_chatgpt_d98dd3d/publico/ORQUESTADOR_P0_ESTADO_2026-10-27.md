# MARKO P0 — Registro persistente de contenidos (27/10/2026)

**Estado:** IMPLEMENTADO COMO SNAPSHOT PRIVADO Y MÓDULO LOCAL; **NO** es todavía un servicio autónomo.

## Entregables comprobados
- Recuperados **sin modificar** los contratos `shared/contracts/content_state.schema.json`, `shared/contracts/gates.json` y `shared/CONTROL_ESTADOS_PERMISOS.md` de la versión maestra privada P0.2.
- Conciliadas **10 publicaciones multired** de Categorización Dental de Metricool, del 19 al 27 de octubre: **34 publicaciones por plataforma**, todas en estado `PUBLISHED` observado. Estas cifras incluyen cuatro registros previamente archivados en este GitHub.
- Diferenciadas las **7 fichas del Reel diario** existentes en la Biblioteca privada como `PLANNED_ONLY`, sin confundirlas con Reels producidos o publicados.
- Seis publicaciones multired tienen títulos y copies de requisitos/diseño similares; **la identidad real de sus MP4 no está verificada**. Requiere comparación de medios.
- Implementado módulo Python + SQLite con claves únicas y verificación idempotente de importación, controles de permiso y bloqueo de republicación o regeneración de contenidos ya publicados.
- **10/10 pruebas unitarias correctas**, **10/10 estados validados** con el JSON Schema P0.2 y `PRAGMA integrity_check` SQLite: `ok`.
- Dashboard local HTML de consulta, no conector activo de producción.

## Ubicación PRIVADA de los entregables
`Biblioteca personal → MARKO → Repositorio_Operativo → Estado_Persistente_P0`.

La carpeta contiene el ZIP del módulo, SQLite, JSON de estado, tablero HTML y README. **No se adjuntan a GitHub público** ni los datos operativos, ni guiones del lote de noviembre, ni información interna de proveedores.

## Cuánto falta para automatización real
1. Desplegar servicio privado para leer/escribir el ledger de forma transaccional y conservar versiones sin subir a mano nuevos snapshots.
2. Conectar conciliación de Metricool por ID, red y fecha; solo lectura para no crear duplicados.
3. Conectar el resto de las skills/11 agentes al mismo almacenamiento y al orquestador central.
4. Archivo privado persistente de MP4 y PNG con hashes comprobados sobre el fichero original.
5. QC bloqueante y dos autorizaciones diferenciadas: revisión final de MP4 y publicación por redes/fecha.
6. Analiticoncio: métricas a 24h, 7d y 30d.

**Siguiente paso recomendado:** implementar una base transaccional remota segura y conectarla al runner Vercel/FFmpeg, manteniendo los controles P0.2. No desplegar ni programar publicaciones sin nueva autorización.

**Contención:** No se han generado materiales, gastado créditos o programado contenidos mediante este P0. 
