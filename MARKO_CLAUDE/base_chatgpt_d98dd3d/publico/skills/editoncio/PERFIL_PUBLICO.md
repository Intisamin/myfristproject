# editoncio · Perfil público

**Área:** CONECTA · **Versión documental:** 2026.10.20 · **Estado:** Módulo metodológico; no consta como plugin instalado.

**Función:** Ensamblar MP4, voz original, animación y subtítulos inferiores.

**Entrada:** Fuentes y medios accesibles.

**Salida:** MP4 1080×1920 y pruebas técnicas.

**Interoperabilidad:** recibir `content_id`, `source_version`, `source_hash`, `approved` y `payload`; retornar `agent`, `status`, `evidence`, `errors`, `next_agent`. Contracto de referencia: [sobre general](../../contracts/agent_envelope.schema.json).

**Puerta obligatoria:** no ejecutar generación de pago o publicación sin la autorización humana correspondiente; no continuar cuando el estado sea `BLOCKED` o `NEEDS_REVIEW`.

**Importante:** esta ficha es un **resumen público** de la función del agente; no es el SKILL.md original del paquete P0.2 y no modifica el plugin instalado ni reescribe fuentes aprobadas. Consulta el paquete privado P0.2 para implementación precisa.
