# MARKO · Cierre de jornada y punto de continuación

**Corte:** miércoles 21 de octubre de 2026 · **Reanudar:** jueves 22 de octubre de 2026 (Lima).  
**Estado:** MVP audiovisual validado; orquestación persistente e integración de subagentes pendiente.  
**Documento operativo:** versión pública de continuidad, sin guiones protegidos ni información secreta.

> **INSTRUCCIÓN DE REINICIO PARA MAÑANA:** No reconstruir MARKO ni crear plugins nuevos al comenzar. Leer primero este documento, la carpeta `MARKO/publico/` de este repositorio y el ZIP maestro privado P0.2. La tarea inmediata es implantar **registro de estados persistente por Reel**, partiendo del Reel ya publicado `DOLOR-CD-002`. Antes de tocar nada, comprobar el estado vivo y los permisos. No generar, modificar guiones ni publicar sin autorización nueva.

## 1. Resumen ejecutivo

MARKO es el orquestador interno de marketing; **Categorización Dental** es la marca pública de los Reels. La arquitectura aprobada tiene **11 subagentes más el orquestador central**. Tres agentes existen como **plugins privados verificados**; los otros ocho son procedimientos/skills documentados que pueden ejecutarse a través de un orquestador compartido sin necesidad de convertirlos necesariamente en otros ocho plugins.

El **MVP audiovisual ya se probó** con HeyGen, Magnific, Vercel Sandbox/FFmpeg y Metricool. Entre el 19 y 21 de octubre de 2026 se publicaron **tres Reels** en Instagram, TikTok y YouTube Shorts, es decir **nueve publicaciones con estado `PUBLISHED`** verificado. La producción aún requiere coordinación conversacional: no es una cadena autónoma con almacenamiento permanente ni garantía de reanudación.

**Lectura del avance:** completitud editorial de noviembre **12/12 guiones aprobados**, instalaciones de plugins **3/11**, publicación de pilotos **3/3 Reels × 3/3 redes**, pruebas de integridad del ZIP maestro **9/9**. La estimación orientativa anterior de **≈55 % de madurez integral** es un diagnóstico cualitativo, no una métrica formal; **no debe confundirse** con porcentaje de plugins instalados.

## 2. Fuente de verdad y repositorios

- **P0.2 privado original:** `MARKO_GITHUB_PRIVADO_P0_2_LISTO_PARA_IMPORTAR(1).zip`, 72 entradas. Su README, `ESTADO_Y_RECUENTO.md`, `MATRIZ_ESTADO_AGENTES_P0_1.md`, `ROADMAP_PRIORIZADO.md`, `VERSIONES.md`, skills, contratos y guiones LOCKED son fuente histórica de implementación.
- **Pruebas del ZIP:** `python -m unittest discover -s tests -v` — **9/9 pasaron nuevamente el 21/10**.
- **GitHub activo:** [Intisamin/myfristproject](https://github.com/Intisamin/myfristproject), **PÚBLICO**; rama `main`. El commit de continuidad pública `a74b2f702f4865aee7c2a97fb7e371e49603c455` dejó **60 archivos**: 40 históricos preservados (39 idénticos y el README ampliado) y 20 fichas nuevas.
- **GitHub secundario:** [Intisamin/Marko](https://github.com/Intisamin/Marko), **PÚBLICO Y VACÍO**, no es fuente activa. **No borrar ni archivar sin una orden posterior.**
- **Importante:** el ZIP completo P0.2 fue diseñado para un **GitHub privado**. No se ha sincronizado íntegramente con GitHub porque el usuario eligió mantener el repo activo público. Los guiones literales de noviembre, borradores comerciales y registros confidenciales deben permanecer en almacenamiento privado. **No afirmar que P0.2 privado ya está completamente sincronizado.**
- **No fusionar estados históricos automáticamente:** documentos del 13–14/10 que mencionan 10 agentes o ideas piloto son históricos; la arquitectura vigente tiene 11 agentes.

## 3. Inventario y brechas de los 11 subagentes

| Orden | Agente | Estado al cierre | Qué falta integrar |
|---:|---|---|---|
| 1 | **Validadoncio v1.3.0** | Plugin privado verificado | Transferencia tipada y prueba de ficha real |
| 2 | **Negocioncio v1.8.0** | Plugin privado verificado | Contrato estable hacia Ficha Maestra e Ideoncio |
| 3 | **Ideoncio v1.3.0** | Plugin privado verificado | Dedupe automático y aprendizaje desde Analiticoncio |
| 4 | **Programoncio** | Skill P0.2, calendario aprobado | Estados de calendario, selección de ID y reprogramación |
| 5 | **Libretoncio** | Skill P0.2, 12 guiones LOCKED | Preservar hashes y transferencias automáticas |
| 6 | **Recursoncio** | Skill P0.2, recursos/planes documentados | Validación de portada, costos y recursos reutilizables |
| 7 | **Produccioncio** | Flujo HeyGen/Magnific probado | Gestión automática con autorización de gasto, proveedor e idempotencia |
| 8 | **Editoncio** | FFmpeg en Vercel Sandbox probado | Runner repetible, manifiesto y persistencia de MP4/PNG |
| 9 | **Revisioncio** | Correcciones de QC probadas | QA automático bloqueante y aprobación vinculada a hash |
| 10 | **Publiconcio** | Metricool probado con 9 publicaciones | Registro transaccional por red, detección de duplicados, recuperación |
| 11 | **Analiticoncio** | Conector Metricool disponible; lectura inicial | Métricas 24h/7d/30d, análisis de retención y realimentación |

**Orquestador central:** skill v2026.10.20 documentada; NO hay servicio MCP/servidor persistente unificado desplegado. La skill por sí sola no ejecuta a los otros agentes ni les proporciona memoria persistente.

**Secuencia aprobada:** DESCUBRE: Validadoncio → Negocioncio; CONECTA: Ideoncio → Programoncio → Libretoncio → Recursoncio → Produccioncio → Editoncio → Revisioncio; CRECE: Publiconcio → Analiticoncio. Programoncio debe trabajar **después de Ideoncio y antes de Libretoncio**.

## 4. Integraciones: hechos comprobados frente a pendientes

| Sistema | Comprobado | No comprobado / pendiente |
|---|---|---|
| ChatGPT + plugins | Tres plugins personales y trabajo coordinado en conversación | Ejecutor transaccional permanente que encadene once agentes |
| HeyGen | Avatar de Iván 2 y locución original utilizados en MP4 reales | Costos y versiones guardados automáticamente por Reel; comprobar elección de motor |
| Magnific | Animación real mediante recurso generado; prueba DOLOR-CD-002 | Política automática de selección de recursos y control de reintentos |
| Vercel Sandbox / FFmpeg | Edición vertical H.264/AAC 1080×1920, subtítulos, música y overlays | Sandbox efímero, runner no persistente y entrega automatizada estable |
| Metricool | Publicación con estado final `PUBLISHED` por red y URLs | Reconciliación automática, idempotencia y métricas periódicas |
| GitHub | Fuente pública de documentación/skills históricos y continuidad; permisos de escritura | P0.2 privado íntegro no importado; registro persistente de producción aún inexistente |
| Almacenamiento audiovisual | Algunos archivos finales recuperables desde proveedores | **No existe aún archivo maestro privado verificado** de MP4/PNG con hashes |
| Tarea `MARKO Reel diario` | Programada, habilitada para ~08:00 (Lima); ejecución del 21/10 consta | No produce/publica automáticamente; notificaciones deshabilitadas |

La tarea diaria **no es** el motor de orquestación. Puede preparar el paquete para aprobación, sin gastar créditos ni publicar.

## 5. Hitos editoriales y publicaciones — NO DUPLICAR

**Noviembre 2026:** 12 guiones y calendario aprobados y congelados; no editar una palabra del texto literal ni del CTA sin nueva autorización. **CD-I-0020 B** pertenecía al calendario de noviembre pero se adelantó y publicó el **19/10**. Programoncio debe resolver el hueco de noviembre con nueva decisión editorial.

**Publicado y confirmado en tres redes:**

| ID | Fecha | Pieza | Instagram | TikTok | YouTube |
|---|---|---|---|---|---|
| CD-I-0020 B | 19/10 | Tres datos antes de categorizar | [Reel](https://www.instagram.com/reel/Der8SFiFHT2/) | [Video](https://www.tiktok.com/@categorizacion.dental/video/7698453370847104264) | [Short](https://www.youtube.com/shorts/UWafd6e1K-E) |
| DOLOR-CD-001 | 20/10 | El local bonito que te puede salir caro | [Reel](https://www.instagram.com/reel/DeuoleiFYQF/) | [Video](https://www.tiktok.com/@categorizacion.dental/video/7698841101842664722) | [Short](https://www.youtube.com/shorts/jvvSRrgf7wI) |
| DOLOR-CD-002 | 21/10 | Corregir a ciegas sale caro | [Reel](https://www.instagram.com/reel/Dew4F9mHaXy/) | [Video](https://www.tiktok.com/@categorizacion.dental/video/7699164428222221575) | [Short](https://www.youtube.com/shorts/RhFbW1YDhgg) |

**DOLOR-CD-002:** Reel de dolor *fuera de los 12 guiones bloqueados*. Montaje 30,55 s, 1080×1920; avatar/voz de Iván 2, recurso animado de 6 s, música, subtítulos inferiores. **Se corrigió la portada a Categorización Dental ANTES de la publicación**. Metricool confirmó `PUBLISHED` 3/3. En el piloto, Magnific descontó **240 créditos** para esa animación; es una observación de producción, no una tarifa estándar. El costo final exacto de HeyGen no está conciliado. No ejecutar de nuevo ese contenido.

## 6. Estándares aprendidos que deben convertirse en QC

1. La marca visible de los videos, copies y portadas es **Categorización Dental**; **MARKO** es solo la oficina interna.
2. Gancho de portada legible desde el primer fotograma, con tiempo de presentación **≤ 0,3 s** y PNG final por separado. Titular breve, emoción, contraste, ortografía y zona segura en miniatura.
3. Recurso narrativo con **animación real**: un zoom sobre fotografía no sustituye el movimiento del clip.
4. Conservar la **voz original del avatar Iván 2**, sin reemplazo imprevisto, volumen musical subordinado a la voz.
5. Subtítulos blancos con contorno negro, **centrados abajo y sin cubrir cara/CTA**; comprobar fotogramas reales, no solo parámetros de libass.
6. H.264/AAC, vertical 9:16, 1080×1920; verificar duración, primer fotograma, clip animado y cierre.
7. No inventar inspectores, logos oficiales, testimonios reales, cifras o garantías regulatorias.
8. **Toda modificación del MP4 o la portada tras la aprobación humana invalida la aprobación anterior**, hasta volver a inspeccionar el archivo exacto y su SHA-256.
9. Mantener **aprobación del video final** y **autorización de publicación por fecha/red** como dos compuertas separadas.
10. No generar ni reintentar contenidos de pago sin autorización específica; **Descript Underlord permanece prohibido sin permiso**.

## 7. Diagnóstico de las brechas

**Completado:** definición funcional de 11 agentes; guiones del lote de noviembre; conectores suficientes para ejecutar un Reel; tres pilotos publicados; reparación de fallos reales en subtítulos y portada; referencia documental en GitHub; pruebas de integridad del ZIP maestro 9/9.

**Parcial:** control de cambios, gastos por acción, recuperación de activos, publicación por red y primera lectura de analítica. Esto funciona **con intervención en el chat**, no como sistema autocontenido.

**No implantado:** almacén privado duradero único; base de datos/registro `content_id`; estado transaccional y colas; reanudación por fallo; verificación QC bloqueante; aprobación vinculada al SHA; analítica en bucle y dashboard del orquestador.

**Riesgo n.º 1:** pérdida de sesiones temporales y de archivos finales si no se guardan en un almacén duradero, recuperable por un proceso posterior.  
**Riesgo n.º 2:** gastar dos veces al ejecutar nuevamente una orden cuyo proveedor ya creó el recurso.  
**Riesgo n.º 3:** publicar dos veces por interpretar `PENDING` como error y reintentar.  
**Riesgo n.º 4:** exponer guiones y datos internos en un repositorio GitHub público.  
**Riesgo n.º 5:** alterar un guion LOCKED, portada o marca después de aprobarlo.

## 8. Próximo trabajo por prioridad

### P0 · Mañana: registro persistente por Reel (PRIMER HITO)

**Objetivo:** que una nueva conversación pueda saber qué Reel existe, qué recursos se crearon, qué se aprobó, cuánto costó, dónde está el MP4 y qué redes lo publicaron, sin preguntar ni volver a generar.

**Pasos:**
1. Leer `shared/contracts/content_state.schema.json`, `shared/contracts/gates.json` y `orquestador/SKILL.md` del **P0.2 privado**. Compararlos con el contrato-resumen público, **no crear contratos paralelos**.
2. Elegir y verificar **un almacén persistente privado**: base de datos/Drive/Bucket para estados y MP4/PNG. GitHub público queda para código y documentación segura, NO secretos, videos pesados ni guiones protegidos.
3. Diseñar/implementar un registro por `content_id` con `script_hash`, `cover_hash`, `final_mp4_hash`, `phase`, `provider_job_ids`, `estimated_cost`, `actual_cost`, `approval_version`, `published_networks`, `error/retry`, enlaces de recursos y `updated_at`. Campos sensibles solo privados.
4. **Piloto sin gastar:** introducir `DOLOR-CD-002` como **PUBLISHED 3/3** desde sus URLs comprobadas, con marca Categorización Dental. Completar hashes mediante acceso a medios finales verificados; **no inventarlos**. Si falta un dato, registrar `UNKNOWN`.
5. Verificar que una segunda ejecución con el mismo `content_id` recupere el registro en vez de crear otro. No publicar ni regenerar nada.

**Criterio de cierre de mañana:** un registro persistente recuperable desde dos sesiones, con el mismo ID y estado; sin doble gasto, sin publicación duplicada y sin exponer información privada.

### P1 · Después de P0

- Empaquetar Editoncio/FFmpeg como runner que recibe manifests y almacena salida en repositorio de medios duradero.
- Montar Revisioncio automático de primeros fotogramas, voz/sync, portada, safe-area, errores y firma de hash.
- Encadenar los módulos con una máquina de estados y operaciones idempotentes; no requiere instalar ocho plugins por separado.
- Añadir consulta postpublicación a 24 horas, 7 y 30 días y aprendizaje desde Analiticoncio a Ideoncio/Programoncio.
- Resolver `CD-I-0020 B` en noviembre y la capacidad exacta de `CD-I-0034 A` de voz en off sin avatar.

### P2 · Oficina visual y escala

Dashboard interno de campañas, agentes, presupuestos, biblioteca de activos, QA, aprobaciones y estado real de Instagram/TikTok/YouTube; pruebas de regresión antes de escalar a 12 Reels mensuales.

## 9. Decisiones ya tomadas — no volver a debatir al iniciar

- **GitHub único activo:** `Intisamin/myfristproject`, permanece público, conservar historial. `Intisamin/Marko` vacío queda intacto.
- Mantener tres plugins existentes; **no crear ocho por obligación**: priorizar integración de skills como módulos.
- No rediseñar arquitectura ni textos aprobados de noviembre.
- No confundir MARKO con la marca comercial Categorización Dental.
- No duplicar `CD-I-0020 B`, `DOLOR-CD-001` ni `DOLOR-CD-002`.
- No iniciar nueva producción, compras, campañas ni publicaciones en este cierre.
- **El objetivo del 22/10 es infraestructura y memoria persistente, no otro Reel.**

## 10. Guía de arranque inmediato — copiar en el próximo chat

> **Continúa MARKO desde el cierre documentado del 21 de octubre de 2026.** Usa `Intisamin/myfristproject`, lee `MARKO/publico/CIERRE_Y_CONTINUIDAD_2026-10-21.md` y contrasta con el ZIP maestro privado P0.2. Conserva la arquitectura de 11 agentes, los 3 plugins instalados (Validadoncio 1.3, Negocioncio 1.8 e Ideoncio 1.3) y los 12 guiones bloqueados. Hay 3 Reels publicados en 3 redes; no los repitas. MARKO es interno, la marca pública es Categorización Dental. Empecemos por P0: definir el almacén persistente privado y materializar el registro `content_id` de DOLOR-CD-002 reutilizando `content_state.schema.json` y `gates.json`. Verifica las herramientas disponibles y el estado real antes de actualizar. No gastar créditos, editar guiones ni publicar sin autorización. Muéstrame primero qué se puede implementar en esta sesión y ejecuta solo cambios documentales/técnicos autorizados.

## 11. Verificación y regla de cierre

Al retomar, confirmar **GitHub, tres plugins, estado de la tarea diaria, almacenamiento y Metricool**, sin asumir que los saldos, permisos y URL firmadas siguen iguales. Este archivo es un **snapshot fechado**, no una conexión autónoma.

**Sin cambios de producción en este cierre:** no se han generado Reels, consumido créditos ni publicado contenido mediante esta actualización de continuidad.

**Referencias del repositorio:** [Resumen público](./README.md) · [Inventario de agentes](./INVENTARIO_11_AGENTES.json) · [Política de autorización](./POLITICA_AUTORIZACIONES.md) · [Roadmap](./ROADMAP_2026-10-21.md).
