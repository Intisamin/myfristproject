# MARKO_CLAUDE · Línea paralela de MARKO construida con Claude

**Creado:** 27/10/2026 (Lima) · **Base copiada de:** `MARKO/` en el commit `d98dd3d` (arquitectura v1.1, 12 agentes).

## Qué es
Copia de trabajo independiente de MARKO para desarrollarlo con Claude (skills, plugin, conectores, tareas programadas y artefactos), sin interferir con la línea que se construye en ChatGPT dentro de `MARKO/`.

## Regla principal
- **Claude escribe solo dentro de `MARKO_CLAUDE/`.** Nunca modifica `MARKO/`.
- ChatGPT trabaja en `MARKO/`. Si una mejora de una línea sirve a la otra, se copia de forma explícita y se registra en `00_gobierno/REGISTRO_INTERCAMBIO.md`.
- Repositorio **público**: aquí solo va documentación y código sin datos privados. Lo privado vive en Google Drive → `3 Negocios / MARKO / MARKO_CLAUDE`.

## Estructura
| Carpeta | Contenido |
|---|---|
| `00_gobierno/` | Visión, diagnóstico, plan por fases, protocolo de trabajo paralelo y registro de intercambio |
| `base_chatgpt_d98dd3d/` | Copia de solo lectura de `MARKO/` al 27/10/2026. Referencia, no se edita |
| (próximas) `plugin/`, `contratos/`, `proveedores/` | Plugin MARKO para Claude con 12 skills, contratos compartidos y adaptadores de proveedores |

## Estado al crear la carpeta
Ningún agente se ha migrado todavía. Siguiente paso: **Fase 0** de `00_gobierno/PLAN_FASES.md`.
