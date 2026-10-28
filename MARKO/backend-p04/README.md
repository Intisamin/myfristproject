# MARKO Orquestador P0.6 · Memoria central preparada

## Qué funciona hoy
- GitHub → Vercel con build probado (desde P0.5), panel de 12 agentes y consultas públicas acotadas.
- P0.6 incluye un **adaptador PostgreSQL** transaccional que puede registrar contenido y referencias a activos mediante `operation_key` idempotente.
- P0.6 incluye lectura **de metadatos** de carpetas Google Drive vía OAuth **solo cuando el administrador haya configurado credenciales válidas del servidor**.
- Sin conexión: la API devuelve un error controlado. No finge acceso, gastos ni autorización.

## Todavía pendiente
- Aprovisionar DB privada y migrar schema; secret `DATABASE_URL`.
- `MARKO_API_TOKEN` generado por el usuario / administrador en Vercel.
- Consentimiento OAuth Google offline, con scopes mínimos; tokens guardados del lado del servidor. No compartir tokens por chat.
- No existen endpoints de anuncios, generación pagada ni publicación. Los 12 agentes están definidos pero no se ejecutan automáticamente.

## Pruebas
Ejecutar `npm test`. No se necesita acceso a una base remota para tests unitarios. Esta versión no manipula archivos de Drive ni modifica autorizaciones históricas.

Consultar `docs/CONFIGURACION_SEGURA.md` para activar integraciones sin gastar accidentalmente.
