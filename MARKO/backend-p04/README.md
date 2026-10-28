# MARKO P0.4 — Orquestador, primera infraestructura Vercel

Proyecto de **prueba protegido**. No almacena datos personales ni conecta servicios de IA.

## Objetivo
Demostrar que Vercel ejecuta una función Node.js del orquestador y que ninguna acción puede consumarse sin persistencia, autenticación y autorización humana.

## Endpoints
- `GET /api/health`: información fija sobre el servicio, sin datos privados.
- `GET /api/orchestrate`: `503 INTEGRATIONS_NOT_CONFIGURED`. No ejecuta ninguna acción.
- Métodos de escritura devuelven 405. No hay credenciales ni tokens en código.

## Seguridad y pendientes
- Configurar Vercel Authentication **all deployments**; no dejar un dominio productivo público.
- Utilizar base de datos transaccional privada (no guardar SQLite mutable en filesystem de functions).
- Conectar Google Drive mediante OAuth/delegación de permisos del lado del servidor; no reutilizar la sesión ChatGPT como token de Vercel.
- Preparar auditoría durable e idempotencia con `content_id`, `asset_sha256`, `provider_post_id`.
- Intercalar autorización explícita antes de consumir créditos, publicar o lanzar Meta Ads.
- Conectar los 12 módulos y el pipeline de edición cuando las dependencias estén validadas.
- Para modelos de IA llamados por Vercel puede haber cargos de API separados de ChatGPT.

## Tests
`npm test` (node >=20). Los tests validan controles lógicos, **no** integraciones reales.

**No son parte de este repositorio:** datos internos, bases privadas, claves, MP4 y respaldos. Permanecen en Drive restringido.
