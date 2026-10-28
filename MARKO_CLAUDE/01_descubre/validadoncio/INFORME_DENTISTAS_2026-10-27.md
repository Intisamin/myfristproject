# Validadoncio v1.3 · Marko como agencia IA en la cuenta del cliente · Segmento: dentistas (Perú)

**Fecha:** 27/10/2026 · **Etapa:** idea_sin_ventas · **Territorio asumido:** Perú, con foco inicial en Lima.
**Veredicto:** `APTO_CON_HIPOTESIS`. Negocioncio solo puede elaborar una propuesta **PRELIMINAR**.

## 1. Diagnóstico ejecutivo
- **Hipótesis:** un dentista con consultorio privado pagaría por tener su propia agencia de marketing IA (plugin Marko en su cuenta Claude, con sus créditos) si le cuesta menos que una agencia tradicional y alguien se lo deja configurado.
- **Señales a favor:**
  - Existen agencias en Lima que venden marketing dental con precios públicos altos.
  - La pieza técnica más riesgosa (el avatar) tiene una vía oficial: el HeyGen Remote MCP.
  - Los costos de herramientas están verificados.
- **Vacíos:**
  - No hay evidencia de disposición a pagar por un modelo "hazlo tú con IA".
  - No está verificado el tamaño del mercado (número de dentistas y consultorios).
  - No está medida la capacidad real de los dentistas para configurar las cuentas.

## 2. Matriz de evidencia
| ID | Afirmación | Tipo | Fuente / fecha | Fuerza | Limitación |
|---|---|---|---|---|---|
| E1 | Una agencia de Lima publica manejo de redes para dentistas desde US$800/mes, pauta desde US$390/mes y una inversión mínima en anuncios de US$300/mes | observado | flamacreators.com, consultado 27/10/2026 | media | Una sola agencia, precios "desde", segmento alto |
| E2 | Iván declara que un dentista paga S/800–1000/mes con agencias o complementos | declarado por el usuario | Conversación 27/10/2026 | media | Sin fuente documental. Posible tramo bajo (freelancers) |
| E3 | Herramientas del cliente: Claude Pro US$20, HeyGen Creator US$29, Magnific Premium US$16, Metricool Starter US$25 (o gratis con 20 posts/mes) | observado | Páginas de precios y reseñas, 27/10/2026 | alta | Precios sujetos a cambio, más impuestos |
| E4 | HeyGen tiene un servidor MCP remoto oficial, conectable desde Claude por OAuth, disponible en todos los planes, que usa los créditos del plan y da acceso a los avatares de la cuenta | observado | docs.heygen.com/docs/heygen-remote-mcp-server, 27/10/2026 | alta | No probado en vivo |
| E5 | Magnific ofrece "avatar desde imagen + audio" (OmniHuman, audio ≤30 s; Veed Fabric, ≤300 s a 720p): alternativa sin HeyGen | observado | Catálogo de modelos de la cuenta, 27/10/2026 | alta | Calidad y costo no probados |
| E6 | Un plugin de Claude puede distribuirse desde un marketplace en un repositorio privado (solo acceden quienes tengan permiso) | observado | code.claude.com/docs/en/plugins/create-marketplace | alta | Documentado para Claude Code. El uso en el chat web está por confirmar |
| E7 | No se confirmó que el marketplace oficial de Anthropic permita cobrar a desarrolladores independientes | observado (ausencia) | dsebastien.net, 14/10/2026 | media | Fuente secundaria |
| E8 | HeyGen promociona directamente creadores de video para dentistas | observado | heygen.com | media | Sustituto directo, sin orquestación |
| E9 | El 42 % de los office managers dentales de EE. UU. dijo que el tiempo dedicado a redes no alcanza | observado | 1-800-DENTIST, 2012 | baja | Antiguo, otro país |
| E10 | En RENIPRESS, el 50.78 % de los establecimientos odontológicos está en Lima y el 68.14 % es privado | observado | UPCH, distribución 1957–2022 | media | Sin total absoluto en la fuente consultada |
| E11 | Número de dentistas habilitados en Perú | **desconocido** | Las fuentes del COP no fueron accesibles | — | Pedir el dato al Colegio |

## 3. Evidencia contraria y riesgos
1. **Barrera de configuración:** 4 cuentas pagas, conexión OAuth y manejo de créditos. Es probable que el dentista promedio no lo haga solo (inferencia).
2. **Sustitutos directos y baratos:** HeyGen o Canva usados por el propio dentista, freelancers locales, ChatGPT.
3. **Dependencia de plataformas:** cambios de precio o de conectores en Claude, HeyGen o Magnific.
4. **Límites de uso de Claude Pro** frente a un ciclo de 12 Reels/mes: no medido.
5. **Publicidad en salud:** el COP vincula públicamente el exceso de odontólogos con la publicidad engañosa (título observado en cop.org.pe; contenido no accesible). Los guiones deben cumplir las reglas de publicidad sanitaria. Hay que verificar la norma vigente.
6. **Canal de cobro:** no se confirmó la vía oficial, así que la venta sería por canal propio.

## 4. Alternativas de nicho (juicio cualitativo)
| Nicho | Por qué | Riesgo | Siguiente prueba |
|---|---|---|---|
| **A. Dentistas con consultorio privado en Lima** (elegido) | Credibilidad de Iván, plantillas y conocimiento regulatorio | Barrera técnica | 10 entrevistas y preventa del escalón 2 |
| B. Clínicas dentales con 2 o más sillones que ya pagan agencia | Ya tienen presupuesto de marketing y comparan precios | Ciclo de venta más largo | 5 entrevistas con dueños o administradores |
| C. Profesionales independientes de salud (nutrición, fisioterapia, psicología) | Mismo problema, menos competencia dental | Iván con menos autoridad en esos rubros | Después de validar A |

## 5. Plan mínimo de validación
| Hipótesis | Experimento | Indicador | Regla de decisión |
|---|---|---|---|
| H1 · Avatar orquestable desde Claude | Conectar HeyGen Remote MCP y generar un video corto de prueba (requiere autorización de créditos) | Video generado sin pasos manuales | Si falla, probar Magnific OmniHuman. Si ambos fallan, NO_RECOMENDADO_AHORA |
| H3 · Gasto actual S/800–1000 | 10 entrevistas: "¿cuánto pagaste el último mes en marketing y a quién?" (comportamiento pasado, no opinión) | Mediana del gasto declarado | Si la mediana es menor a S/400, el argumento de ahorro se debilita |
| H4 · Pagan por configuración asistida | Ofrecer preventa del escalón 2 con adelanto reembolsable | Número de adelantos | 3 o más de 10 entrevistados: diseñar oferta definitiva. 0–1: revisar segmento u oferta |
| H2 · Cabe en Claude Pro | Piloto de 4 Reels en una cuenta Pro | Bloqueos por límite de uso | Si se bloquea, recalcular costo con un plan superior |
| H5 · Canal de venta | Probar instalación desde un marketplace privado en el chat web | Instalación exitosa | Si no funciona en web, distribuir como ZIP o Claude Code |

## 6. Puerta humana
Se requiere que Iván confirme el nicho A y autorice la prueba H1 (consume créditos de HeyGen) antes de pasar a Negocioncio.

## 7. Aprobación (27/10/2026, 21:24)
Iván confirma el nicho: **consultorios privados, empezando por los odontológicos en Lima, Perú, con expansión posterior a consultorios privados en general de habla hispana**. Autoriza la prueba del avatar "Iván 2" con unos pocos segundos de video.

## 8. Resultado H1 · Avatar orquestable desde Claude: SUPERADA (27/10/2026, 21:37)
- **Conector:** HeyGen Remote MCP, autorizado por Iván.
- **Avatar:** grupo "Ivan 2", look de tipo `photo_avatar`, voz por defecto, motor Avatar IV por defecto.
- **Salida:** MP4 de 4.26 s, 9:16, 720p. Render en unos 58 s. Guion: "Hola, soy Iván. Esta es una prueba de Marko desde Claude."
- **Pendiente:** el entorno de trabajo de Claude no puede descargar el MP4, porque la red bloquea el dominio de archivos de HeyGen. Para el archivo maestro con hash habrá que usar otra vía (descarga por Iván, transferencia vía Drive o runner en Vercel). Costo en créditos no registrado.
