# BSC CONTRACTS - Sistema CLM (Contract Lifecycle Management)
### Barcelona Sporting Club de Ecuador - Departamento Legal

**BSC CONTRACTS** es una plataforma integral de **Contract Lifecycle Management (CLM)** diseñada específicamente para el departamento jurídico y directivo de **Barcelona Sporting Club Deportivo de Ecuador**. La plataforma está inspirada en la arquitectura de **Ironclad**, adaptada con la identidad visual oficial del club (oro/amarillo y negro obsidiana, acorde al modelo de comunicado oficial y el escudo oficial del club).

---

## 🌟 Características Principales

### 1. Los 7 Módulos Oficiales de Contratación
El sistema organiza, clasifica y gestiona de forma centralizada todos los instrumentos jurídicos del club en sus 7 categorías:

1. **Jugadores (Módulo 1)**:
   - Contratos deportivos profesionales del primer plantel, formativas y equipo femenino.
   - Cesiones temporales, opciones de compra, primas por objetivos, transferencias y cláusulas de rescisión deportiva ante la FEF, LigaPro y FIFA.
2. **Auspicios (Módulo 2)**:
   - Contratos de patrocinio comercial, main sponsor de camiseta (ej. Cervecería Nacional / Pilsener), naming rights del Estadio Banco Pichincha.
   - Vallas publicitarias LED, activaciones de marca en la Noche Amarilla y exclusividad comercial por categorías.
3. **Administradores (Módulo 3)**:
   - Contratos civiles de prestación de servicios para el Director Técnico, cuerpo técnico multidisciplinario.
   - Gerencia General, Dirección Deportiva, pactos de no competencia, límites estatutarios y cláusulas de sigilo y confidencialidad.
4. **Créditos (Módulo 4)**:
   - Facilidades de crédito bancario, mutuos con interés, líneas rotativas de capital de trabajo (ej. Banco Bolivariano, Banco Guayaquil).
   - Estructuración de fideicomisos mercantiles sobre flujos de taquilla y derechos de televisión, pagarés institucionales y tablas de amortización.
5. **Licencias (Módulo 5)**:
   - Explotación de marcas, escudos y signos distintivos registrados ante el SENADI.
   - Licencia de indumentaria técnica oficial (Marathon Sports), regalías sobre ventas netas, tiendas oficiales BSC Store y derechos de videojuegos.
6. **Acuerdos de Pago (Módulo 6)**:
   - Convenios transaccionales extrajudiciales y actas de mediación homologadas.
   - Planes de cuotas con ex-acreedores y personal técnico, cronogramas de pago y cláusulas de paz y salvo para evitar sanciones disciplinarias en FEF o FIFA.
7. **Proveedores (Módulo 7)**:
   - Contratos de abastecimiento operativo y logística de eventos en el Estadio Monumental Isidro Romero Carbo.
   - Seguridad privada y control de accesos, mantenimiento agronómico de césped híbrido, vuelos chárter para competiciones internacionales y catering deportivo.

---

### 2. Clasificador Inteligente de Contratos (Smart AI Engine)
El sistema incluye un motor heurístico y de análisis de lenguaje natural (NLP) legal que:
- **Detecta y clasifica automáticamente** a cuál de los 7 módulos corresponde cualquier contrato subido (PDF, DOCX, TXT o texto pegado).
- **Calcula un índice de certeza / confianza porcentual** (ej. 98% Certeza).
- **Justifica jurídicamente la clasificación** explicando qué cláusulas y términos determinantes fueron encontrados (ej. *"Detectado por mención de patrocinio en indumentaria oficial, exclusividad de categoría y vallas en Estadio Banco Pichincha"*).
- **Extrae metadatos clave**:
  - Título sugerido y código de referencia autonumerado (`BSC-JUG-2026-001`, `BSC-AUS-2026-001`, etc.)
  - Contraparte identificada (jugador, patrocinador, entidad bancaria o proveedor)
  - Cuantía monetaria en USD ($)
  - Fechas de inicio y vencimiento
  - Nivel de riesgo legal (Bajo, Medio, Alto/Crítico)
  - Cláusulas principales para revisión inmediata.
- **Botón de prueba en 1-clic**: Permite probar la clasificación instantáneamente con 7 contratos reales de ejemplo representativos de cada categoría de Barcelona SC.

---

### 3. Flujo de Ciclo de Vida Contractual (Inspiración Ironclad)
Cada contrato avanza de manera interactiva a través de sus etapas de ciclo de vida:
- `Borrador (Draft)` ➔ `Revisión Legal` ➔ `Aprobación de Directorio` ➔ `Pendiente de Firma` ➔ `Vigente / Activo` ➔ `Próximo a Vencer / Renovación`.
- **Drawer Inspector de Cláusulas (Redlining)**: Vista detallada lateral con resumen ejecutivo, inspección de cláusulas destacadas y registro inmutable de auditoría (Audit Trail) que documenta qué usuario realizó cada cambio con fecha y hora.
- **Ficha Imprimible Oficial**: Generación de ficha técnica contractual con el encabezado institucional y escudo del club.

---

### 4. Identidad Visual y Paleta de Colores
Diseñada estrictamente bajo los lineamientos gráficos institucionales de **Barcelona Sporting Club**:
- **Negro Obsidiana Profundo (`#08080A`, `#0F1015`)**: Fondo elegante de alta gama con sutiles destellos dorados.
- **Amarillo Oro Oficial BSC (`#FFD100` / `#F5B800`)**: Resaltes primarios, botones de acción, porcentajes de certeza y badges.
- **Acentos Institucionales**: Rojo (`#D91A2A`) y Azul (`#0A3580`), correspondientes a la franja y cuadrantes del escudo.
- **Tipografía**: `Montserrat` (Sans-serif geométrica con gran legibilidad, idéntica a la utilizada en los comunicados oficiales del club).
- **Escudo Oficial**: Incorporado vectorizado en alta definición en la barra lateral y ficha técnica.

---

## 🚀 Cómo Usar el Sistema

No requiere configuraciones complejas de servidores ni dependencias externas:
1. Abre el archivo `index.html` en cualquier navegador web moderno (Google Chrome, Microsoft Edge, Mozilla Firefox, Opera, etc.).
2. **Explora los Módulos**: Haz clic en cualquiera de las 7 categorías en la barra lateral o en los chips superiores.
3. **Clasifica un Contrato**:
   - Haz clic en el botón dorado superior **"+ Subir / Clasificar Contrato"**.
   - Puedes arrastrar un archivo, pegar texto o presionar cualquiera de los 7 botones de prueba en 1-clic (ej. *⚽ 1. Jugador*, *🤝 2. Auspicio*, etc.).
   - Observa la animación de escaneo radar y la determinación automática del módulo con su justificación.
   - Presiona **"Confirmar y Guardar en Módulo"** para almacenarlo en el repositorio.
4. **Inspecciona y Avanza Etapas**:
   - Haz clic en **"Ver Ficha"** en cualquier fila de la tabla para abrir el drawer lateral.
   - Haz clic en las etapas del ciclo de vida para avanzar o retroceder el contrato.
5. **Exporta Datos**:
   - Presiona el botón **"Descargar CSV"** para exportar el portafolio completo a formato Excel/CSV.

---

**Departamento Legal de Barcelona Sporting Club**  
*El Ídolo del Ecuador — 100 Años de Grandeza*
