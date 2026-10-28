# Libretoncio v0.3 — piloto de revisión por lotes (14 oct 2026)

## Decisiones aprobadas
- Presentar **dos** variantes A/B por idea, no tres.
- Revisor interno con criterios cuantificados (100 puntos orientativos) y puertas de seguridad eliminatorias.
- Revisión humana en lote, mensual o semanal: APROBAR_A, APROBAR_B, CORREGIR, COMBINAR, DESCARTAR.
- Guardar elección y referencias inmutables de guion por ID de idea + tarea Programoncio.
- Exportar/importar decisiones JSON para que el orquestador pueda persistirlas en etapa posterior.
- Ideoncio conserva el banco; Programoncio administra fechas y calendario; Libretoncio escribe los guiones; Recursoncio prepara recursos solo a partir de guion autorizado.

## Piloto local
Paquete creado: MARKO_LIBRETONCIO_v0_3_PILOTO.zip, con SKILL.md, contratos y demostración HTML de cuatro ideas del banco aprobado (CD-I-0001 a CD-I-0004), dos guiones por idea.
El usuario aprobó **CD-I-0001 versión B** con CTA «Ve al link de mi perfil y agenda una sesión informativa gratuita». Las otras tres ideas no tienen libreto aprobado.
Las puntuaciones y fechas del piloto son ilustrativas, no mediciones empíricas ni programación efectiva.

## Estado
**Candidata no instalada.** Pendiente de que el usuario revise el tablero, exporte un archivo de decisiones y confirme la metodología.
Un archivo HTML estático no invoca otros plugins ni guarda información en GitHub; necesita importación manual o futuro orquestador persistente. Se debe verificar el enlace de reserva antes de publicar.
