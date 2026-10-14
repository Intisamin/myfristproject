# MARKO / IDEONCIO — Arquitectura v1.0.0 CANDIDATA
Fecha: 2026-10-14. **No aprobada todavía / no instalada**.

## Decisión de funcionamiento
Ideoncio administra un **Banco Maestro de ideas breves y trazables a la Ficha Maestra**. Libretoncio solicita una idea por rubro (DOLOR, CASO, TIP, PROCESO) y objetivo/segmento; Ideoncio consulta el banco, filtra exclusivamente ideas aprobadas y disponibles, reserva un ID, **genera EN ESA SOLICITUD** la tarjeta de 18 campos descriptivos + ID y la entrega al guionista. Libretoncio redacta el guion con su skill propia, pendiente de diseño. No se generan decenas de tarjetas completas por anticipado.

## Prueba Categorización Dental
- Fuente: Ficha Maestra final de Categorización Dental (8 págs), con histórico de 80 conceptos previos.
- Banco candidato: **40 ideas (12 DOLOR, 6 CASO, 12 TIP, 10 PROCESO)**. **34 candidatas sin aprobar**, 6 CASO bloqueadas por ausencia de recursos/testimonios autorizados.
- Cada idea tiene ID estable, tesis única, segmento, problema, causa, consecuencia, solución vinculada, ventaja, visual de 0–3 s, objetivo, fuente/páginas y referencia histórica.
- Nueve encabezados históricos vinculados a paquetes antiguos se archivan por incompatibilidad comercial; no se promocionan planes Básico/Completo/VIP.
- Decisión editorial del caso: no generar ideas relacionadas con **diagnóstico con IA** por ahora; no altera el catálogo del negocio.
- La simulación local devuelve tarjeta de 18 campos al pedir DOLOR (tras aprobar IDs solo dentro de una copia de prueba) y SIN_IDEA_ELEGIBLE para CASO por falta de recursos.

## Archivos de la candidatura
El paquete descargable se generó en la conversación ChatGPT (fecha 14/10/2026) como **MARKO_IDEONCIO_v1_0_CANDIDATA.zip** con SKILL.md completa, contratos `banco_maestro.schema.json`, `solicitud_idea.schema.json`, `tarjeta_a_libretoncio.schema.json`, banco candidato JSON, auditoría histórica, PDF índice e interfaz HTML offline. **Todavía no se han subido íntegros esos archivos a GitHub; se hará al aprobar la metodología.** Este archivo documenta el avance para no perder el contexto.

## Advertencias operativas
No existe conexión automática inter-plugin ni base de datos con bloqueo transaccional aún. La interfaz HTML es demostración estática para revisar el banco, no orquestador real. Los casos requieren evidencia y autorización; las hipótesis emocionales nunca se presentan como citas de clientes.

## Por aprobar
Confirmar si el banco y la metodología de generación bajo demanda cumplen lo esperado, ajustar superposiciones semánticas y autorizar creación de plugin privado IDEONCIO v1.0. Solo después se sincroniza SKILL.md final y contratos completos en GitHub y se inicia Libretoncio.
