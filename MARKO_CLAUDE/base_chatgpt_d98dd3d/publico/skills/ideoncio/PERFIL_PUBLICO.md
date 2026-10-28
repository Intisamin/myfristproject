# ideoncio · Perfil público

**Área:** CONECTA · **Versión documental:** 1.3.0 · **Estado:** Plugin personal privado verificado.

**Función:** Administrar ideas originales y auditar duplicidades.

**Entrada:** Ficha Maestra aprobada.

**Salida:** Tarjeta de idea candidata de 18 campos.

**Interoperabilidad:** recibir `content_id`, `source_version`, `source_hash`, `approved` y `payload`; retornar `agent`, `status`, `evidence`, `errors`, `next_agent`. Contracto de referencia: [sobre general](../../contracts/agent_envelope.schema.json).

**Puerta obligatoria:** no ejecutar generación de pago o publicación sin la autorización humana correspondiente; no continuar cuando el estado sea `BLOCKED` o `NEEDS_REVIEW`.

**Importante:** esta ficha es un **resumen público** de la función del agente; no es el SKILL.md original del paquete P0.2 y no modifica el plugin instalado ni reescribe fuentes aprobadas. Consulta el paquete privado P0.2 para implementación precisa.
