# MARKO P0.5 — Integración segura de lectura

## Funcionando en el código de prueba

- 12 agentes catalogados sin confundir 3 plugins instalados con 9 agentes pendientes.
- Vercel API `/api/health` y `/api/agents`.
- **GitHub → Vercel** por consulta de solo lectura al registro público `/api/publications` (sin credenciales y sin datos privados). El registro público está incompleto respecto de Metricool; una llamada a esta API no implica que estén sincronizadas todas las publicaciones.
- `/api/readiness`: verifica que existan los IDs no secretos de Drive en variables de entorno; no finge autenticación de Google OAuth.
- `/api/orchestrate`: devuelve 503 por diseño hasta que haya almacenamiento transaccional, autenticación y permisos humanos.
- 18 pruebas automatizadas locales.

## Requisitos pendientes que requieren autorización/elección de infraestructura

1. GitHub Login Connection en Vercel para desplegar automáticamente las versiones, ya que el proyecto hoy está desplegado desde archivos manualmente.
2. Base de datos privada transaccional (cuota/coste aceptado); no usar SQLite mutable en funciones serverless.
3. OAuth de servidor Google Drive; no se puede reaprovechar el token del conector ChatGPT en Vercel y **no** debe pegarse en código público.
4. Definición y autorización de ejecutores de agentes en servidor. Las skills ChatGPT no se invocan desde Vercel sin integración explícita y, si se llaman modelos externos, pueden generar cargos de API.
5. Verificación funcional de `/api/publications` mediante sesión autenticada de Vercel; un despliegue `READY` por sí solo no comprueba llamadas externas.

## Normas de seguridad

**Prototipo personal; no lanzar actividades comerciales en Vercel Hobby.** Sin llamadas pagadas, publicaciones, campañas, writes o secretos en el código. Drive queda restringido al propietario. Cambiar `RUNNER_LOCKED` requiere aprobación humana y una base durable.
