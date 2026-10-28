# MARKO — Estado de respaldos (13/10/2026)

## Terminología
- **Skill**: instrucciones y procedimientos del agente en `SKILL.md`.
- **Plugin de ChatGPT**: paquete instalado en una cuenta que permite invocar skills y, cuando corresponda, herramientas o interfaces. No sustituye el repositorio de código.
- **Repositorio GitHub**: fuente versionada y colaborativa de archivos. Los commits mantienen historial.

## Archivos respaldados en GitHub
- `MARKO/01-DESCUBRE/validadoncio/SKILL.md` — versión 1.3.0, recuperada directamente del plugin privado de ChatGPT.
- `MARKO/01-DESCUBRE/validadoncio/nicho_validado.schema.json` — contrato de validación.
- `MARKO/01-DESCUBRE/negocioncio/SKILL.md` — versión 1.8.0 aprobada.
- `MARKO/01-DESCUBRE/negocioncio/brief_para_ideoncio.schema.json` — contrato para el siguiente agente (versión anterior; deberá revisarse contra el mapa profundo de v1.8).

## Estado de instalaciones
- Validadoncio v1.3: creado como plugin privado de ChatGPT; ID `plugins_6acd3c25cf448191aac8a919fee64fbd`.
- Negocioncio v1.8: skill aprobada y archivada en GitHub; instalación/actualización del agente anterior en ChatGPT no confirmada. Evitar duplicarlo sin resolver el ID/permisos de edición.

## Privacidad y limitaciones
El repositorio `Intisamin/myfristproject` es **PÚBLICO**. No almacenar aquí registros de clientes, WhatsApp, hojas financieras confidenciales, ni PDFs con datos sensibles. Los expedientes comerciales de Categorización Dental continúan en archivos de conversación/respaldos descargables; NO forman parte de esta publicación. Este commit no los sincroniza.

Los archivos publicados actualmente incluyen las skills finales y contratos, no un sistema de orquestación ejecutable ni un proceso de backup automático. Sincronización futura = actualizar GitHub, validar la versión del plugin y verificar ambos.
