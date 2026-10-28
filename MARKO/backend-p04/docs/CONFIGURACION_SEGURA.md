# MARKO P0.6 — Conexiones privadas sin activar gastos

## Alcance real
Vercel despliega la aplicación, y **no** guarda una base de datos. Google Drive del ChatGPT está conectado **solo a ChatGPT**, no al servidor Vercel. Esta versión integra adaptadores que se activan exclusivamente con permisos explícitos; no se autoprovisionan ni simulan.

## PostgreSQL (recomendación: Neon Free)
1. Crear personalmente un proyecto privado de PostgreSQL en un plan gratuito, sin activar modalidad pagada. Verificar cuotas actuales antes de aceptar.
2. En el editor SQL del proveedor ejecutar `sql/001_marko_p06.sql` una sola vez.
3. En **Vercel → marko-orquestador-p04 → Settings → Environment Variables**, crear `DATABASE_URL` como **secret**, en entornos necesarios. No compartir URL ni contraseñas por chat ni incluirlas en GitHub.
4. Generar `MARKO_API_TOKEN` aleatorio de mínimo 32 bytes y guardarlo como secreto del mismo modo. No compartirlo por chat. Usar Bearer solo en clientes de servidor permitidos.
5. Re-desplegar para heredar variables. `GET /api/readiness` revela solo booleanos de configuración (nunca valores).
6. `POST /api/state` registra solo contenido/activos **no verificados** de forma transaccional con `operation_key` e idempotencia; no importa aprobaciones desde publicaciones pasadas.

## Google Drive OAuth
1. Crear un proyecto en Google Cloud (solo configuración, comprobar condiciones de cuota) y habilitar Google Drive API.
2. Configurar pantalla de consentimiento OAuth y un cliente **Web application** con redirección acorde con el flujo implementado cuando se habilite. Evitar publicar credenciales o pegar tokens en ChatGPT.
3. Solicitar únicamente el alcance `https://www.googleapis.com/auth/drive.metadata.readonly` para el primer test.
4. Para el servicio de lectura por refresh, las variables `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_REFRESH_TOKEN` deberán guardarse en Vercel como secretos. La obtención del refresh token requiere consentimiento OAuth del usuario; P0.6 **no incluye una pantalla de consentimiento** y no puede obtenerlo sin esa acción. No añadir variables manualmente con un token de acceso temporal.
5. `GET /api/drive-status?folder=pilot` requiere API token válido, obtiene un token de acceso temporal, y verifica la carpeta permitida por ID. No enumera el Drive completo ni modifica archivos. Para descargar MP4 necesitaremos otro alcance explícito y validaciones de contenido.

## Ejemplo seguro: operaciones (solo cuando conectados y autentificados)
`POST /api/state` JSON: `{"type":"register_content","content_id":"TIP-CD-20261022-IA-V2","operation_key":"p06:pilot:register:v1","title":"Reel piloto","source":"P0.3_verified_snapshot"}`.
**No usar como señal de aprobación editorial ni autorización de pago/publicación**.

## Seguridad
- Vercel Authentication debe permanecer activa para *todos* los despliegues.
- Las APIs privadas requieren también Bearer de servidor (`MARKO_API_TOKEN`).
- No hay métodos para lanzar campañas, publicar, ejecutar modelos ni incurrir en gastos.
- El plan Vercel Hobby solo sirve para prueba personal no comercial, no para operar comercialmente la agencia.
- Si la base falla, responde `503` sin escribir al almacenamiento efímero de Vercel.
