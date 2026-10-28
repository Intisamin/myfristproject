# MARKO P0.5 — Estado de integración (27 de octubre de 2026)

## Hechos verificados
- Proyecto Vercel `marko-orquestador-p04` con despliegue **READY** `dpl_BWUHAsBbKKTmsRwNTWKZuQsLdzSE`, protección Vercel Authentication aplicada a **todos** los despliegues.
- Interfaz P0.5 y APIs `/api/health`, `/api/agents`, `/api/publications`, `/api/readiness` y `/api/orchestrate` están en la estructura de archivos del despliegue. La llamada desde el navegador autenticado a `/api/publications` **aún requiere smoke test**.
- Código en `MARKO/backend-p04` del repositorio público, commit `bbf7d48fb46d5d20bbb5e57ec934f37718fb3a6b`; **ningún dato privado ni secreto** incluido.
- 12 agentes catalogados; **solo 3** son plugins instalados. Analiticoncio semanal existe en ChatGPT, **no** como worker en Vercel.
- 18/18 pruebas locales correctas. Las pruebas no sustituyen una integración extremo a extremo con Drive y Metricool.
- Variables de entorno cifradas de Vercel con **IDs de carpetas verificadas**, sin tokens OAuth; Drive sigue privado (propietario único).
- Fuente pública GitHub de lectura disponible por `/api/publications`; el inventario público contiene 4 Reels y está desactualizado respecto a Metricool (10 multired hasta 27/10). No se presenta como conteo total.
- API `/api/orchestrate` responde 503 y no puede lanzar acciones de pago o publicaciones, por diseño.

## Bloqueos
1. **Autorización de cuenta GitHub en Vercel:** Vercel rechazó vincular `Intisamin/myfristproject` con el mensaje de Login Connection faltante. El usuario debe autorizarla mediante Account Settings > Login Connections y luego vincular el proyecto en Settings > Git, Root Directory: `MARKO/backend-p04`.
2. **Base de datos privada transaccional:** no provisionada; no trasladar SQLite editable al filesystem de funciones Vercel. Consultas de Edge Config/integraciones devolvieron 403.
3. **Acceso servidor a Google Drive:** el conector ChatGPT y el acceso OAuth de Vercel son independientes. Falta consentir OAuth con privilegios mínimos y almacenar los secretos en variables seguras.
4. **Ejecución de los 12 agentes:** las skills y los GPTs dentro de ChatGPT no son invocables automáticamente desde un servicio Vercel usando la suscripción personal. El modo autónomo necesita conectores o APIs autorizadas; posibles gastos de modelos externos requieren presupuesto previo.

## Presupuesto y restricción de operación
- No se aprovisionó almacenamiento Vercel de pago, no hubo llamadas a modelos de pago, anuncios ni publicaciones.
- La cuenta está en Hobby y **solo se usa para prototipo personal no comercial**. Vercel Hobby no autoriza operar comercialmente MARKO.

## Próximo test recomendado
Con sesión autenticada en Vercel, abrir el dashboard y comprobar que el registro público de Github carga los 4 Reels. Luego conectar GitHub mediante Login Connection, evaluar una DB privada de costo 0, configurar OAuth Drive por el procedimiento oficial y ejecutar una prueba de lectura **sin modificar contenidos**.
