/**
 * BSC CONTRACTS - Contract Lifecycle Management (CLM)
 * Barcelona Sporting Club de Ecuador - Departamento Legal
 * Definición de Módulos y Datos de Muestra Oficiales
 */

const BSC_MODULES = {
  jugadores: {
    id: 'jugadores',
    number: 1,
    name: 'Jugadores',
    singular: 'Jugador',
    subtitle: 'Contratos Deportivos Profesionales y Derechos Federativos',
    icon: 'trophy',
    color: '#F5B800',
    badgeClass: 'badge-yellow',
    description: 'Gestión integral de contratos de futbolistas del primer equipo masculino, formativas y femenino. Incluye derechos federativos, cesiones temporales, opciones de compra, primas por objetivos y cláusulas de rescisión deportiva ante la FEF y FIFA.',
    keyFields: ['Dorsal / Posición', 'Cláusula de Rescisión', 'Registro FEF', 'Premios y Objetivos']
  },
  auspicios: {
    id: 'auspicios',
    number: 2,
    name: 'Auspicios',
    singular: 'Auspicio',
    subtitle: 'Patrocinios Comerciales, Naming Rights y Publicidad',
    icon: 'handshake',
    color: '#E5A910',
    badgeClass: 'badge-gold',
    description: 'Administración de alianzas corporativas, patrocinadores oficiales de indumentaria, vallas LED en Estadio Banco Pichincha, activaciones en Noche Amarilla, derechos digitales y exclusividad de categoría comercial.',
    keyFields: ['Categoría de Marca', 'Ubicación de Marca', 'Exclusividad', 'Cronograma de Pagos']
  },
  administradores: {
    id: 'administradores',
    number: 3,
    name: 'Administradores',
    singular: 'Administrador',
    subtitle: 'Cuerpo Técnico, Alta Dirección y Representación Estatutaria',
    icon: 'briefcase',
    color: '#D4AF37',
    badgeClass: 'badge-amber',
    description: 'Contratos de prestación de servicios para el Director Técnico, cuerpo multidisciplinario, Gerente General, Director Deportivo y apoderamientos legales con facultades delegadas del Directorio.',
    keyFields: ['Cargo Directivo', 'Límites de Representación', 'Pacto de No Competencia', 'Confidencialidad']
  },
  creditos: {
    id: 'creditos',
    number: 4,
    name: 'Créditos',
    singular: 'Crédito',
    subtitle: 'Líneas Bancarias, Mutuos, Pagarés y Fideicomisos',
    icon: 'landmark',
    color: '#38BDF8',
    badgeClass: 'badge-cyan',
    description: 'Gestión y seguimiento de pasivos bancarios, mutuos con interés, líneas de crédito rotativas para liquidez operativa, fideicomisos de garantía de taquilla / TV y pagarés institucionales.',
    keyFields: ['Entidad Financiera', 'Tasa Activa / Efectiva', 'Garantía Constituida', 'Próxima Cuota de Capital']
  },
  licencias: {
    id: 'licencias',
    number: 5,
    name: 'Licencias',
    singular: 'Licencia',
    subtitle: 'Uso de Marca, Merchandising Oficial y Derechos de Transmisión',
    icon: 'award',
    color: '#A855F7',
    badgeClass: 'badge-purple',
    description: 'Contratos de explotación comercial de signos distintivos, escudo y emblemas de Barcelona SC. Tiendas oficiales BSC Store, indumentaria técnica, derechos de transmisión y productos conmemorativos.',
    keyFields: ['Licenciatario', '% Regalías (Royalties)', 'Territorio Autorizado', 'Mínimo Garantizado']
  },
  acuerdos_pago: {
    id: 'acuerdos_pago',
    number: 6,
    name: 'Acuerdos de Pago',
    singular: 'Acuerdo de Pago',
    subtitle: 'Convenios Transaccionales, Mediaciones y Planes de Deuda',
    icon: 'file-spreadsheet',
    color: '#EF4444',
    badgeClass: 'badge-red',
    description: 'Instrumentación legal de convenios transaccionales con ex-acreedores, planes de cuotas homologados ante centros de mediación, convenios con la FEF/FIFA para levantamiento de sanciones y reestructuración de pasivos.',
    keyFields: ['Acreedor / Beneficiario', 'Monto Transado', 'Cuotas Pagadas / Saldo', 'Cláusula Penal por Mora']
  },
  proveedores: {
    id: 'proveedores',
    number: 7,
    name: 'Proveedores',
    singular: 'Proveedor',
    subtitle: 'Servicios Operativos, Logística, Seguridad y Mantenimiento',
    icon: 'truck',
    color: '#10B981',
    badgeClass: 'badge-emerald',
    description: 'Contratos de abastecimiento y servicios críticos para la operación de los partidos y concentración: seguridad privada en el Estadio Monumental, mantenimiento de césped híbrido, vuelos chárter y catering.',
    keyFields: ['RUC Proveedor', 'SLA de Servicio', 'Póliza de Cumplimiento', 'Modalidad de Pago']
  }
};

const INITIAL_CONTRACTS = [
  // 1. JUGADORES
  {
    id: 'BSC-JUG-2026-001',
    title: 'Contrato de Trabajo Deportivo y Derechos Federativos',
    module: 'jugadores',
    counterparty: 'Joao Joshimar Rojas López',
    typeDetail: 'Futbolista Profesional - Primer Plantel Masculino',
    value: 540000,
    currency: 'USD',
    startDate: '2025-01-15',
    endDate: '2027-12-31',
    status: 'active',
    riskLevel: 'medium',
    responsibleLawyer: 'Abg. Roberto Manzur (Legal BSC)',
    description: 'Vínculo laboral deportivo exclusivo para competiciones LigaPro Serie A, Copa Ecuador y Copa CONMEBOL Libertadores. Incluye cesión de derechos federativos y económicos.',
    clauses: [
      { number: '1', title: 'Objeto Contractual', text: 'El JUGADOR se compromete a prestar sus servicios profesionales deportivos de manera exclusiva y a tiempo completo en favor de BARCELONA SPORTING CLUB en el primer equipo de fútbol masculino.' },
      { number: '2', title: 'Remuneración y Premios', text: 'El CLUB pagará al JUGADOR una remuneración mensual de USD $22,500 netos, más bonificaciones extraordinarias por coronarse campeón nacional o clasificar a fases finales de torneos Conmebol.' },
      { number: '3', title: 'Cláusula de Rescisión Unilateral', text: 'Se fija una cláusula de rescisión de USD $5,000,000 netos para clubes del exterior y USD $7,500,000 para instituciones deportivas del fútbol ecuatoriano.' },
      { number: '4', title: 'Derechos de Imagen', text: 'El JUGADOR autoriza el uso de su imagen colectiva e individual asociada a la indumentaria oficial y eventos de patrocinio organizados por el CLUB.' },
      { number: '5', title: 'Jurisdicción y Disputas', text: 'Las partes se someten a la Cámara de Mediación y Resolución de Disputas de la FEF y subsidiariamente al Tribunal Arbitral del Deporte (TAS/CAS) en Lausana, Suiza.' }
    ],
    auditTrail: [
      { date: '2025-01-10 11:20', user: 'Abg. Roberto Manzur', action: 'Generación del borrador conforme estatutos FEF' },
      { date: '2025-01-13 17:00', user: 'Comisión de Fútbol BSC', action: 'Aprobación de montos salariales y bonos' },
      { date: '2025-01-15 10:30', user: 'Presidencia BSC & Jugador', action: 'Firma electrónica y depósito en LigaPro Ecuador' }
    ],
    metadata: {
      posicion: 'Extremo / Volante Ofensivo',
      dorsal: 11,
      nacionalidad: 'Ecuatoriana',
      clausulaRescision: 'USD $5,000,000',
      registroFEF: 'FEF-DEP-2025-0419'
    }
  },
  {
    id: 'BSC-JUG-2026-002',
    title: 'Extensión Contractual y Derechos de Imagen Capitán',
    module: 'jugadores',
    counterparty: 'Javier Agustín Burrai',
    typeDetail: 'Guardameta Titular - Primer Equipo',
    value: 460000,
    currency: 'USD',
    startDate: '2024-02-01',
    endDate: '2027-12-31',
    status: 'active',
    riskLevel: 'low',
    responsibleLawyer: 'Abg. Roberto Manzur (Legal BSC)',
    description: 'Renovación plurianual con blindaje contractual y derechos de imagen para campañas institucionales.',
    clauses: [
      { number: '1', title: 'Vigencia de la Extensión', text: 'Las partes acuerdan extender el vínculo laboral deportivo por tres temporadas completas hasta el 31 de diciembre de 2027.' },
      { number: '2', title: 'Blindaje y Transferencia', text: 'Cualquier cesión o transferencia requerirá el consentimiento expreso y por escrito del Directorio del CLUB.' }
    ],
    auditTrail: [
      { date: '2024-01-20 09:15', user: 'Abg. Roberto Manzur', action: 'Adenda elaborada por extensión de vigencia' },
      { date: '2024-02-01 12:00', user: 'Presidencia BSC', action: 'Formalización de contrato y presentación a medios' }
    ],
    metadata: {
      posicion: 'Guardameta',
      dorsal: 1,
      nacionalidad: 'Ecuatoriano (Nacionalizado)',
      clausulaRescision: 'USD $3,500,000',
      registroFEF: 'FEF-DEP-2024-0102'
    }
  },
  {
    id: 'BSC-JUG-2026-003',
    title: 'Cesión Temporal con Opción de Compra de Derechos',
    module: 'jugadores',
    counterparty: 'Janner Corozo Alman',
    typeDetail: 'Jugador Profesional - Préstamo Deportivo',
    value: 380000,
    currency: 'USD',
    startDate: '2025-01-01',
    endDate: '2026-12-31',
    status: 'expiring',
    riskLevel: 'high',
    responsibleLawyer: 'Abg. Carlos Mendoza (Director Jurídico)',
    description: 'Contrato de préstamo con opción preferente de compra del 70% de derechos económicos antes del 15 de diciembre de 2026.',
    clauses: [
      { number: '1', title: 'Opción Preferente de Compra', text: 'El CLUB posee el derecho exclusivo e irrevocable de adquirir el 70% de los derechos económicos por la suma de USD $1,200,000 notificando antes de diciembre de 2026.' }
    ],
    auditTrail: [
      { date: '2024-12-28 15:40', user: 'Abg. Carlos Mendoza', action: 'Borrador de cesión temporal revisado con club cedente' },
      { date: '2025-01-02 11:00', user: 'Directorio BSC', action: 'Ejecución y registro federativo' }
    ],
    metadata: {
      posicion: 'Delantero / Extremo',
      dorsal: 7,
      nacionalidad: 'Ecuatoriana',
      clausulaRescision: 'Opción Compra USD $1,200,000',
      registroFEF: 'FEF-DEP-2025-0087'
    }
  },

  // 2. AUSPICIOS
  {
    id: 'BSC-AUS-2026-001',
    title: 'Contrato de Patrocinio Principal y Presencia en Indumentaria (Main Sponsor)',
    module: 'auspicios',
    counterparty: 'Cervecería Nacional CN S.A. (Pilsener)',
    typeDetail: 'Main Sponsor Oficial - Frontal Camiseta',
    value: 3400000,
    currency: 'USD',
    startDate: '2024-01-01',
    endDate: '2027-12-31',
    status: 'active',
    riskLevel: 'low',
    responsibleLawyer: 'Abg. Carlos Mendoza (Director Jurídico)',
    description: 'Auspiciante principal de Barcelona Sporting Club. Incluye visibilidad prioritaria en el pecho de la camiseta oficial, vallas perimetrales LED del Estadio Banco Pichincha, backdrop de prensa y derechos en Noche Amarilla.',
    clauses: [
      { number: '1', title: 'Exclusividad de Categoría', text: 'El CLUB garantiza a favor de PILSENER exclusividad absoluta en la categoría de cervezas y bebidas con contenido alcohólico moderado en todas sus instalaciones, indumentarias y medios oficiales.' },
      { number: '2', title: 'Contraprestación Económica', text: 'El PATROCINADOR abonará la suma anual de USD $3,400,000 pagaderos en cuatro cuotas trimestrales de USD $850,000 cada una contra presentación de factura autorizada por el SRI.' },
      { number: '3', title: 'Activaciones en Noche Amarilla', text: 'El CLUB otorgará dos palcos de hospitalidad corporativa para 30 invitados en la Noche Amarilla y presencia protagónica de marca en la camiseta del astro invitado.' },
      { number: '4', title: 'Derechos de Imagen Institucional', text: 'El PATROCINADOR podrá utilizar la denominación "Cerveza Oficial del Ídolo del Ecuador" en sus campañas publicitarias a nivel nacional.' }
    ],
    auditTrail: [
      { date: '2023-11-15 14:00', user: 'Comisión Comercial BSC', action: 'Negociación de términos económicos y exclusividad' },
      { date: '2023-12-05 10:30', user: 'Abg. Carlos Mendoza', action: 'Dictamen legal favorable de no conflicto de marcas' },
      { date: '2023-12-20 18:00', user: 'Presidencia BSC & Gerencia CN', action: 'Suscripción notarial del contrato plurianual' }
    ],
    metadata: {
      categoriaMarca: 'Cervezas y Licores',
      ubicacion: 'Pecho Frontal Camiseta Oficial + Vallas LED',
      modalidadPago: 'Trimestral (4 cuotas de $850,000)',
      exclusividad: 'Absoluta en Categoría Bebidas Alcohólicas'
    }
  },
  {
    id: 'BSC-AUS-2026-002',
    title: 'Contrato de Naming Rights Estadio Monumental y Auspicio Bancario',
    module: 'auspicios',
    counterparty: 'Banco Pichincha C.A.',
    typeDetail: 'Naming Rights Oficial de Estadio y Sponsor Plataforma',
    value: 2800000,
    currency: 'USD',
    startDate: '2022-01-01',
    endDate: '2026-12-31',
    status: 'expiring',
    riskLevel: 'high',
    responsibleLawyer: 'Abg. Carlos Mendoza (Director Jurídico)',
    description: 'Denominación oficial del escenario deportivo como "Estadio Banco Pichincha", exclusividad en emisión de tarjetas de crédito y débito de afinidad para socios BSC.',
    clauses: [
      { number: '1', title: 'Denominación Oficial', text: 'El CLUB mantendrá en todas sus comunicaciones oficiales, boletos, credenciales y ruedas de prensa el nombre oficial "Estadio Banco Pichincha".' },
      { number: '2', title: 'Prórroga y Renovación Preferente', text: 'El PATROCINADOR tendrá un plazo preferente de 90 días antes del vencimiento (1 de octubre de 2026) para igualar cualquier oferta de terceros y renovar el contrato.' }
    ],
    auditTrail: [
      { date: '2022-01-05 10:00', user: 'Directorio BSC', action: 'Aprobación de Naming Rights en asamblea' },
      { date: '2026-10-01 09:00', user: 'Sistema Legal BSC', action: 'Alerta automática: Activado periodo de renegociación preferente' }
    ],
    metadata: {
      categoriaMarca: 'Servicios Financieros y Banca',
      ubicacion: 'Nombre Oficial Estadio + Fachada + Vallas',
      modalidadPago: 'Semestral adelantado',
      exclusividad: 'Banca y Emisión de Tarjetas'
    }
  },
  {
    id: 'BSC-AUS-2026-003',
    title: 'Auspicio Corporativo Dorsal Superior y Canales Digitales',
    module: 'auspicios',
    counterparty: 'Discover Financial Services / Diners Club Ecuador',
    typeDetail: 'Auspiciante Oficial Indumentaria',
    value: 950000,
    currency: 'USD',
    startDate: '2025-01-01',
    endDate: '2026-12-31',
    status: 'active',
    riskLevel: 'low',
    responsibleLawyer: 'Abg. Daniela Cevallos (Legal BSC)',
    description: 'Presencia en la parte posterior superior de la camiseta oficial y menciones semanales en canales de streaming BSC TV.',
    clauses: [
      { number: '1', title: 'Visibilidad de Marca', text: 'La marca Discover figurará sobre los números dorsales de todos los partidos oficiales de LigaPro y torneos internacionales.' }
    ],
    auditTrail: [
      { date: '2024-12-10 16:00', user: 'Abg. Daniela Cevallos', action: 'Revisión de cláusulas de cumplimiento de imagen corporativa' }
    ],
    metadata: {
      categoriaMarca: 'Tarjetas de Crédito',
      ubicacion: 'Espalda Superior sobre Dorsal',
      modalidadPago: 'Trimestral',
      exclusividad: 'Red de Pagos Corporativos'
    }
  },

  // 3. ADMINISTRADORES
  {
    id: 'BSC-ADM-2026-001',
    title: 'Contrato de Prestación de Servicios Técnicos y Deportivos - Cuerpo Técnico',
    module: 'administradores',
    counterparty: 'Prof. Segundo Alejandro Castillo & Asistentes',
    typeDetail: 'Director Técnico y Cuerpo Técnico Primer Equipo',
    value: 680000,
    currency: 'USD',
    startDate: '2025-01-01',
    endDate: '2026-12-31',
    status: 'active',
    riskLevel: 'medium',
    responsibleLawyer: 'Abg. Carlos Mendoza (Director Jurídico)',
    description: 'Contrato civil de prestación de servicios para la conducción técnica integral, preparación física y planificación táctica del plantel profesional.',
    clauses: [
      { number: '1', title: 'Objeto de Servicios', text: 'El DIRECTOR TÉCNICO dirigirá las sesiones de entrenamiento, convocatorias y conducción técnica en todos los encuentros del primer plantel masculino.' },
      { number: '2', title: 'Cláusula de Desvinculación', text: 'En caso de terminación anticipada por decisión unilateral del CLUB sin justa causa, se indemnizará el equivalente a tres meses de honorarios mensuales.' },
      { number: '3', title: 'Objetivos Deportivos', text: 'Se pactan bonos de USD $50,000 por obtención del título de LigaPro y USD $100,000 por alcanzar semifinales de Copa Libertadores.' },
      { number: '4', title: 'Sigilo y Código de Ética', text: 'El profesional guardará estricta confidencialidad sobre alineaciones tácticas, reportes médicos y deliberaciones internas del Directorio.' }
    ],
    auditTrail: [
      { date: '2024-12-20 18:30', user: 'Comisión de Fútbol BSC', action: 'Aprobación unánime del proyecto técnico' },
      { date: '2025-01-02 09:00', user: 'Abg. Carlos Mendoza', action: 'Elaboración y legalización del contrato de servicios' }
    ],
    metadata: {
      cargo: 'Director Técnico Principal',
      facultades: 'Conducción Deportiva y Táctica',
      sigilo: 'Cláusula de Confidencialidad por 3 años',
      registroFEF: 'CT-FEF-2025-0012'
    }
  },
  {
    id: 'BSC-ADM-2026-002',
    title: 'Contrato de Gerencia General y Representación Legal Delegada',
    module: 'administradores',
    counterparty: 'Ing. Fernando Yánez Moreno',
    typeDetail: 'Gerente General Administrativo de BSC',
    value: 144000,
    currency: 'USD',
    startDate: '2024-06-01',
    endDate: '2028-05-31',
    status: 'active',
    riskLevel: 'low',
    responsibleLawyer: 'Abg. Carlos Mendoza (Director Jurídico)',
    description: 'Administración operativa, presupuestaria y financiera del club con facultades delegadas del Directorio.',
    clauses: [
      { number: '1', title: 'Facultades Delegadas', text: 'El GERENTE podrá autorizar adquisiciones operativas hasta el límite de USD $25,000. Cuantías superiores requerirán autorización expresa del Presidente o Directorio.' }
    ],
    auditTrail: [
      { date: '2024-05-25 15:00', user: 'Directorio General BSC', action: 'Designación de cargo y formalización estatutaria' }
    ],
    metadata: {
      cargo: 'Gerente General',
      facultades: 'Operativas hasta $25,000 USD',
      sigilo: 'Sigilo Bancario y Financiero Indefinido'
    }
  },

  // 4. CRÉDITOS
  {
    id: 'BSC-CRE-2026-001',
    title: 'Contrato de Apertura de Línea de Crédito Rotativa para Capital Operativo',
    module: 'creditos',
    counterparty: 'Banco Bolivariano C.A.',
    typeDetail: 'Línea de Crédito Bancaria Institucional',
    value: 2500000,
    currency: 'USD',
    startDate: '2024-04-10',
    endDate: '2027-04-10',
    status: 'active',
    riskLevel: 'medium',
    responsibleLawyer: 'Abg. Roberto Manzur (Legal BSC)',
    description: 'Facilidad de crédito rotativa para atender flujos de caja y descalces de tesorería institucional, garantizada mediante cesión fiduciaria de derechos de televisión LigaPro.',
    clauses: [
      { number: '1', title: 'Monto y Plazo', text: 'El BANCO concede una línea de crédito rotativa hasta por USD $2,500,000 renovable cada doce meses sujeta a cumplimiento de ratios financieros.' },
      { number: '2', title: 'Tasa de Interés', text: 'Aplica una tasa activa corporativa del 9.75% anual nominal pagadera de forma vencida al corte de cada desembolso.' },
      { number: '3', title: 'Garantía Fiduciaria', text: 'Se constituye gravamen y cesión preferente e irrevocable en el Fideicomiso Mercantil de Derechos Audiovisuales LigaPro.' }
    ],
    auditTrail: [
      { date: '2024-03-15 11:00', user: 'Directorio BSC', action: 'Autorización unánime para contratación de facilidad crediticia' },
      { date: '2024-04-10 16:30', user: 'Abg. Roberto Manzur & Notaría 17 Guayaquil', action: 'Elevación a escritura pública de la garantía' }
    ],
    metadata: {
      institucionFinanciera: 'Banco Bolivariano C.A.',
      tasaInteres: '9.75% Tasa Activa Corporativa',
      garantia: 'Fideicomiso Flujos Derechos Audiovisuales',
      saldoPendiente: 'USD $1,850,000'
    }
  },
  {
    id: 'BSC-CRE-2026-002',
    title: 'Operación de Descuento de Cartera y Pagaré a la Orden',
    module: 'creditos',
    counterparty: 'Banco Guayaquil S.A.',
    typeDetail: 'Descuento de Facturas de Auspicios Comerciales',
    value: 1200000,
    currency: 'USD',
    startDate: '2025-03-01',
    endDate: '2026-03-01',
    status: 'expiring',
    riskLevel: 'medium',
    responsibleLawyer: 'Abg. Roberto Manzur (Legal BSC)',
    description: 'Descuento de pagaré estructurado contra contratos de publicidad corporativa para afrontar inicio de temporada.',
    clauses: [
      { number: '1', title: 'Amortización de Capital', text: 'El capital se amortizará mediante retención directa de las cuotas de auspicio transferidas por los patrocinadores.' }
    ],
    auditTrail: [
      { date: '2025-02-18 10:00', user: 'Tesorero General BSC', action: 'Solicitud de descuento y calificación crediticia' }
    ],
    metadata: {
      institucionFinanciera: 'Banco Guayaquil S.A.',
      tasaInteres: '8.90% Efectiva Anual',
      garantia: 'Pagaré con Firma Solidaria',
      saldoPendiente: 'USD $320,000'
    }
  },

  // 5. LICENCIAS
  {
    id: 'BSC-LIC-2026-001',
    title: 'Contrato de Licencia Exclusiva de Indumentaria Oficial y Explotación Comercial',
    module: 'licencias',
    counterparty: 'Marathon Sports (Comercializadora de Deportes S.A.)',
    typeDetail: 'Sponsor Técnico e Indumentaria Deportiva Oficial',
    value: 2900000,
    currency: 'USD',
    startDate: '2023-01-01',
    endDate: '2028-12-31',
    status: 'active',
    riskLevel: 'low',
    responsibleLawyer: 'Abg. Daniela Cevallos (Legal BSC)',
    description: 'Concesión de licencia de marcas, escudos y signos distintivos de BSC para el diseño, fabricación y comercialización exclusiva de indumentaria deportiva de competencia y entrenamiento, garantizando un royalty sobre ventas netas.',
    clauses: [
      { number: '1', title: 'Licencia de Marca y Emblemas', text: 'El CLUB otorga al LICENCIATARIO el derecho exclusivo para confeccionar, comercializar y distribuir la indumentaria oficial que porta el escudo oficial de Barcelona Sporting Club en el territorio del Ecuador y a nivel internacional.' },
      { number: '2', title: 'Regalías (Royalties) y Mínimo Anual', text: 'El LICENCIATARIO pagará al CLUB una regalía del 12% sobre el volumen de ventas netas de productos oficiales, garantizando un piso mínimo de USD $2,900,000 por año calendario.' },
      { number: '3', title: 'Dotación Gratuita de Prendas', text: 'El LICENCIATARIO dotará gratuitamente de 8,500 piezas técnicas anuales para el primer equipo, divisiones formativas y equipo femenino.' },
      { number: '4', title: 'Control de Calidad y Anti-Piratería', text: 'Toda prenda contará con holograma oficial de seguridad numerado y certificado de autenticidad emitido por el CLUB.' }
    ],
    auditTrail: [
      { date: '2022-10-15 11:30', user: 'Comisión Comercial BSC', action: 'Negociación del pliego técnico y regalías' },
      { date: '2022-11-20 15:45', user: 'Abg. Daniela Cevallos', action: 'Inscripción de contrato de licencia ante el SENADI' },
      { date: '2022-12-01 10:00', user: 'Presidencia BSC & Marathon', action: 'Suscripción notarial' }
    ],
    metadata: {
      licenciatario: 'Marathon Sports S.A.',
      regaliasPorcentaje: '12% sobre ventas netas',
      minimoGarantizado: 'USD $2,900,000 anuales',
      registroSENADI: 'SENADI-PI-2022-90184'
    }
  },
  {
    id: 'BSC-LIC-2026-002',
    title: 'Licencia de Explotación de Merchandising Digital y Videojuegos',
    module: 'licencias',
    counterparty: 'Electronic Arts Inc. (EA SPORTS FC)',
    typeDetail: 'Licencia de Propiedad Intelectual en Software Deportivo',
    value: 180000,
    currency: 'USD',
    startDate: '2024-07-01',
    endDate: '2027-06-30',
    status: 'active',
    riskLevel: 'low',
    responsibleLawyer: 'Abg. Daniela Cevallos (Legal BSC)',
    description: 'Inclusión oficial del escudo, estadio Monumental, indumentaria y cantos de hinchada en el videojuego EA SPORTS FC.',
    clauses: [
      { number: '1', title: 'Territorio Global', text: 'Licencia no exclusiva a escala mundial para plataformas de consola, PC y dispositivos móviles.' }
    ],
    auditTrail: [
      { date: '2024-06-15 16:20', user: 'Abg. Daniela Cevallos', action: 'Revisión de ley aplicable (Derecho de Nueva York con arbitraje ICDR)' }
    ],
    metadata: {
      licenciatario: 'Electronic Arts Inc.',
      regaliasPorcentaje: 'Tarifa fija anual USD $60,000',
      minimoGarantizado: 'USD $180,000 en 3 años'
    }
  },

  // 6. ACUERDOS DE PAGO
  {
    id: 'BSC-ACP-2026-001',
    title: 'Convenio Transaccional y Reconocimiento de Obligaciones con Plan de Cuotas',
    module: 'acuerdos_pago',
    counterparty: 'Ex-Cuerpo Técnico / DT Extranjero',
    typeDetail: 'Acuerdo Transaccional Homologado ante Centro de Arbitraje',
    value: 480000,
    currency: 'USD',
    startDate: '2024-05-15',
    endDate: '2026-11-30',
    status: 'active',
    riskLevel: 'high',
    responsibleLawyer: 'Abg. Carlos Mendoza (Director Jurídico)',
    description: 'Plan estructurado de reestructuración de haberes pendientes de finiquito deportivo, dividido en 24 cuotas mensuales consecutivas de USD $20,000, con cláusula de paz y salvo.',
    clauses: [
      { number: '1', title: 'Reconocimiento y Condonación de Intereses', text: 'Las partes acuerdan liquidar la obligación total por USD $480,000, con condonación expresa de USD $95,000 por concepto de intereses moratorios e indemnizaciones extraordinarias.' },
      { number: '2', title: 'Cronograma de Cuotas', text: 'El CLUB abonará la suma fija de USD $20,000 mensuales los primeros 5 días laborables de cada mes calendario hasta noviembre de 2026.' },
      { number: '3', title: 'Cláusula Penal y Aceleración de Plazos', text: 'El retraso injustificado superior a 15 días calendario facultará al ACREEDOR a declarar vencida la totalidad de la deuda y notificar a la Comisión Disciplinaria de la FIFA.' },
      { number: '4', title: 'Paz y Salvo Condicionado', text: 'Con el pago total de la cuota 24, el ACREEDOR emitirá renuncia irrevocable a cualquier reclamo federativo o judicial ordinario.' }
    ],
    auditTrail: [
      { date: '2024-05-01 10:00', user: 'Centro de Arbitraje Cámara de Comercio Guayaquil', action: 'Audiencia de mediación transaccional' },
      { date: '2024-05-15 15:30', user: 'Abg. Carlos Mendoza', action: 'Suscripción de acta de transacción con valor de sentencia ejecutoriada' },
      { date: '2026-11-05 09:00', user: 'Tesorero BSC', action: 'Pago registrado: Cuota 18/24 al día' }
    ],
    metadata: {
      acreedor: 'Representación Legal Ex-DT',
      cuotasPactadas: '24 cuotas de USD $20,000',
      cuotasPagadas: '18 pagadas / 6 pendientes',
      saldoPendiente: 'USD $120,000',
      riesgoSancion: 'Riesgo FIFA si hay mora superior a 15 días'
    }
  },
  {
    id: 'BSC-ACP-2026-002',
    title: 'Acuerdo Conciliatorio de Pago de Pasivo Comercial con Acreedor de Infraestructura',
    module: 'acuerdos_pago',
    counterparty: 'Construcciones e Iluminación del Litoral Cía. Ltda.',
    typeDetail: 'Convenio de Pago Extrajudicial por Obras en Estadio',
    value: 210000,
    currency: 'USD',
    startDate: '2025-02-01',
    endDate: '2026-08-31',
    status: 'active',
    riskLevel: 'medium',
    responsibleLawyer: 'Abg. Roberto Manzur (Legal BSC)',
    description: 'Financiamiento de adecuaciones de luminarias LED Monumental pagadero con abonos derivados de taquilla de partidos estelares.',
    clauses: [
      { number: '1', title: 'Fórmula de Amortización', text: 'Se fija una retención del 8% de la taquilla neta de cada encuentro de Copa Libertadores hasta completar el saldo de USD $210,000.' }
    ],
    auditTrail: [
      { date: '2025-01-20 12:00', user: 'Abg. Roberto Manzur', action: 'Convenio suscrito y levantamiento de medida preventiva' }
    ],
    metadata: {
      acreedor: 'Construcciones del Litoral Cía. Ltda.',
      cuotasPactadas: 'Abonos por taquilla partidos internacionales',
      saldoPendiente: 'USD $85,000'
    }
  },

  // 7. PROVEEDORES
  {
    id: 'BSC-PRO-2026-001',
    title: 'Contrato de Servicios de Seguridad Integral, Control de Accesos y Operativo Estadio',
    module: 'proveedores',
    counterparty: 'Seguridad y Vigilancia Guayas Security Cía. Ltda.',
    typeDetail: 'Servicio Crítico de Seguridad Privada para Partidos Oficiales',
    value: 360000,
    currency: 'USD',
    startDate: '2025-01-01',
    endDate: '2026-12-31',
    status: 'active',
    riskLevel: 'medium',
    responsibleLawyer: 'Abg. Daniela Cevallos (Legal BSC)',
    description: 'Despliegue de 280 guardias de seguridad privada uniformados para cada partido oficial en el Estadio Monumental Isidro Romero Carbo, anillos de control perimetral, custodia de camerinos y salas VIP.',
    clauses: [
      { number: '1', title: 'Alcance del Servicio Operativo', text: 'El PROVEEDOR suministrará el contingente humano y tecnológico (detectores de metales, cámaras portátiles) para garantizar el orden y seguridad en graderías, accesos y zona mixta conforme regulaciones de LigaPro y Policía Nacional.' },
      { number: '2', title: 'Póliza de Responsabilidad Civil', text: 'El PROVEEDOR mantendrá vigente una póliza de responsabilidad civil por USD $500,000 para responder por daños a terceros en el desarrollo del espectáculo deportivo.' },
      { number: '3', title: 'Tarifa y Facturación por Evento', text: 'El costo por partido de alta convocatoria se fija en USD $12,500 y para partidos de convocatoria regular en USD $8,200, cancelables a 30 días contra informe del Coordinador de Seguridad BSC.' },
      { number: '4', title: 'Sanciones por Faltas de Personal', text: 'Toda inasistencia de personal respecto al cupo coordinado implicará un descuento del 150% del valor hora/hombre proporcional.' }
    ],
    auditTrail: [
      { date: '2024-12-15 11:00', user: 'Comisión de Seguridad BSC', action: 'Calificación de oferentes y homologación de permisos ministeriales' },
      { date: '2024-12-28 17:00', user: 'Abg. Daniela Cevallos', action: 'Aprobación de pólizas de seguro y firma de contrato' }
    ],
    metadata: {
      ruc: '0992384759001',
      slaServicio: '280 guardias en clásicos / 180 en partidos regulares',
      polizaSeguro: 'Vigente USD $500,000 en Aseguradora del Sur',
      modalidadPago: 'Factura por partido a 30 días fecha'
    }
  },
  {
    id: 'BSC-PRO-2026-002',
    title: 'Contrato de Mantenimiento Agronómico y Césped de Canchas de Entrenamiento',
    module: 'proveedores',
    counterparty: 'Agrícola Césped Verde & Paisajismo S.A.',
    typeDetail: 'Mantenimiento de Canchas Alternas y Complejo Canchas Formativas',
    value: 110000,
    currency: 'USD',
    startDate: '2025-01-01',
    endDate: '2026-12-31',
    status: 'active',
    riskLevel: 'low',
    responsibleLawyer: 'Abg. Roberto Manzur (Legal BSC)',
    description: 'Tratamiento fitosanitario, nivelación láser, fertilización y corte con estándares FIFA del gramado principal y 3 canchas alternas.',
    clauses: [
      { number: '1', title: 'Frecuencia de Mantenimiento', text: 'El servicio incluye personal permanente de campo y auditorías mensuales de compactación de suelo y drenaje.' }
    ],
    auditTrail: [
      { date: '2024-12-18 10:30', user: 'Abg. Roberto Manzur', action: 'Renovación de servicio conforme plan agronómico' }
    ],
    metadata: {
      ruc: '0991823746001',
      slaServicio: 'Corte a 22mm para partidos oficiales',
      polizaSeguro: 'Póliza de fiel cumplimiento por USD $20,000'
    }
  },
  {
    id: 'BSC-PRO-2026-003',
    title: 'Contrato de Transporte Aéreo Chárter para Delegación Oficial',
    module: 'proveedores',
    counterparty: 'AeroTransportes del Ecuador VIP S.A.',
    typeDetail: 'Vuelos Privados para LigaPro y Conmebol Libertadores',
    value: 520000,
    currency: 'USD',
    startDate: '2026-01-10',
    endDate: '2026-12-31',
    status: 'approval',
    riskLevel: 'medium',
    responsibleLawyer: 'Abg. Carlos Mendoza (Director Jurídico)',
    description: 'Servicio de traslado aéreo de 45 pasajeros (jugadores, cuerpo técnico, directivos) a ciudades sedes de torneos.',
    clauses: [
      { number: '1', title: 'Disponibilidad de Aeronave', text: 'Confirmación de vuelo con mínimo 48 horas de anticipación con catering nutricional autorizado por el departamento médico de BSC.' }
    ],
    auditTrail: [
      { date: '2026-01-05 14:00', user: 'Abg. Carlos Mendoza', action: 'Pendiente de aprobación final en Directorio BSC' }
    ],
    metadata: {
      ruc: '1792837465001',
      slaServicio: 'Aeronave Boeing 737 / Embraer 190',
      polizaSeguro: 'Póliza aeronáutica internacional'
    }
  }
];

// Muestras de texto para pruebas rápidas del Clasificador Inteligente
const TEST_CONTRACT_SAMPLES = {
  jugadores: {
    title: 'Contrato de Trabajo Deportivo Profesional - Fichaje Delantero',
    text: `CONTRATO DE TRABAJO DEPORTIVO PROFESIONAL DE FÚTBOL
COMPARECIENTES:
Por una parte, BARCELONA SPORTING CLUB, legalmente representado por su Presidente, a quien en adelante se denominará EL CLUB; y por otra parte, el señor MATÍAS NICOLÁS RODRÍGUEZ, de nacionalidad argentina, futbolista profesional en funciones de Delantero, a quien en adelante se denominará EL JUGADOR.
PRIMERA: ANTECEDENTES Y OBJETO.-
EL JUGADOR se obliga a prestar sus servicios como futbolista profesional federado exclusivamente para EL CLUB en el primer equipo masculino, acatando las órdenes impartidas por el Director Técnico, así como las normas disciplinarias de la Federación Ecuatoriana de Fútbol (FEF), Liga Profesional de Fútbol del Ecuador (LigaPro) y la Confederación Sudamericana de Fútbol (CONMEBOL).
SEGUNDA: PLAZO Y VIGENCIA.-
El presente contrato deportivo tendrá una duración de 3 (tres) temporadas consecutivas, iniciando el 1 de enero de 2026 y feneciendo de pleno derecho el 31 de diciembre de 2028.
TERCERA: CONTRAPRESTACIÓN Y REMUNERACIÓN.-
EL CLUB abonará al JUGADOR un salario mensual fijo de USD $25,000 (VEINTICINCO MIL DÓLARES DE LOS ESTADOS UNIDOS DE AMÉRICA), más los premios económicos estipulados por partido ganado, clasificación a Copa Libertadores y prima por gol anotado.
CUARTA: CLÁUSULA DE RESCISIÓN UNILATERAL.-
Las partes fijan libre y voluntariamente una cláusula de rescisión de derechos federativos y económicos de USD $6,000,000 (SEIS MILLONES DE DÓLARES DE LOS ESTADOS UNIDOS DE AMÉRICA) para transferencias al exterior.
QUINTA: DERECHOS DE IMAGEN Y CAMISETA.-
EL JUGADOR cede de forma no exclusiva sus derechos de imagen comercial al CLUB para campañas en conjunto con los patrocinadores oficiales de la indumentaria de Barcelona SC.
SEXTA: JURISDICCIÓN DEPORTIVA.-
Toda controversia se someterá a la Cámara de Resolución de Disputas de la FEF y subsidiariamente al Tribunal Arbitral del Deporte (TAS/CAS) en Lausana.
Para constancia firman en la ciudad de Guayaquil.`
  },

  auspicios: {
    title: 'Contrato de Patrocinio Deportivo y Publicidad Exclusiva Camiseta',
    text: `CONTRATO DE AUSPICIO Y PATROCINIO COMERCIAL DEPORTIVO
En la ciudad de Guayaquil, a los 10 días del mes de enero de 2026, celebran el presente instrumento privado:
De una parte, BARCELONA SPORTING CLUB, debidamente representado por su Directorio, en calidad de EL CLUB; y de otra parte, TELECOMUNICACIONES XTRIM S.A., con RUC 0991478291001, en calidad de EL PATROCINADOR OFICIAL.
CLÁUSULA PRIMERA: OBJETO DEL PATROCINIO.-
EL CLUB concede a EL PATROCINADOR los derechos de publicidad y presencia de marca exclusiva en la manga izquierda de la camiseta oficial del primer equipo de fútbol, así como 200 metros lineales de vallas publicitarias LED en el Estadio Banco Pichincha durante todos los partidos del campeonato nacional.
CLÁUSULA SEGUNDA: EXCLUSIVIDAD DE CATEGORÍA COMERCIAL.-
EL CLUB garantiza a favor de EL PATROCINADOR la exclusividad total en el rubro de servicios de telecomunicaciones, telefonía móvil e internet de fibra óptica. Ninguna otra empresa de este sector podrá exhibir marcas ni realizar activaciones en el escenario deportivo.
CLÁUSULA TERCERA: VALOR Y CONDICIONES DE PAGO.-
EL PATROCINADOR pagará a EL CLUB la contraprestación publicitaria anual de USD $1,200,000 (UN MILLÓN DOSCIENTOS MIL DÓLARES DE LOS ESTADOS UNIDOS DE AMÉRICA), distribuidos en cuatro pagos trimestrales iguales de USD $300,000.
CLÁUSULA CUARTA: ACTIVACIONES Y NOCHE AMARILLA.-
EL PATROCINADOR contará con un stand promocional preferencial en la explanada del Estadio Monumental durante la presentación de la plantilla en la Noche Amarilla, además de 40 pases VIP de hospitalidad para sus clientes corporativos.
CLÁUSULA QUINTA: VIGENCIA.-
El contrato rige desde el 1 de enero de 2026 hasta el 31 de diciembre de 2027, con opción de renovación prioritaria.`
  },

  administradores: {
    title: 'Contrato de Prestación de Servicios de Gerencia y Dirección Deportiva',
    text: `CONTRATO CIVIL DE PRESTACIÓN DE SERVICIOS DE ALTA DIRECCIÓN DEPORTIVA
COMPARECIENTES:
Por una parte, BARCELONA SPORTING CLUB (BSC); y por otra parte, el Licenciado ANDRÉS SEBASTIÁN LARREA, profesional en Gestión Deportiva, a quien se denominará EL GERENTE DEPORTIVO.
PRIMERA: NATURALEZA Y FACULTADES ESTATUTARIAS.-
EL GERENTE DEPORTIVO ejercerá la conducción de la secretaría técnica institucional, coordinando los procesos de visoría (scouting), fichajes del primer plantel, supervisión del cuerpo técnico y metodologías de las formativas, rindiendo cuentas trimestrales al Directorio de Barcelona Sporting Club.
SEGUNDA: LÍMITES DE AUTORIZACIÓN Y FIRMA.-
EL GERENTE DEPORTIVO podrá acordar términos preliminares de contratación de futbolistas sin que estos sean vinculantes hasta contar con la ratificación expresa del Presidente y Directorio de BSC.
TERCERA: HONORARIOS PROFESIONALES.-
Por los servicios de alta dirección, EL CLUB cancelará honorarios profesionales de USD $10,000 mensuales más IVA contra entrega de informe de gestión deportiva mensual.
CUARTA: PACTO DE NO COMPETENCIA Y CONFIDENCIALIDAD ESTRICTA.-
EL GERENTE DEPORTIVO se compromete expresamente a no prestar servicios directos ni indirectos para otros clubes de la LigaPro durante la vigencia del contrato y hasta un año posterior a su culminación, bajo apercibimiento de sanción indemnizatoria de USD $100,000.
QUINTA: PLAZO.-
El plazo del contrato será de 2 años improrrogables contados a partir del 1 de febrero de 2026.`
  },

  creditos: {
    title: 'Contrato de Apertura de Crédito con Garantía Fiduciaria',
    text: `CONTRATO DE MUTUO Y APERTURA DE LÍNEA DE CRÉDITO BANCARIO
Entre el BANCO DEL PACÍFICO S.A., entidad financiera debidamente autorizada por la Superintendencia de Bancos, denominada EL BANCO; y BARCELONA SPORTING CLUB, corporación deportiva de derecho privado con RUC 0990284751001, denominada LA PARTE DEUDORA.
PRIMERA: DESEMBOLSO Y FINALIDAD DEL CRÉDITO.-
EL BANCO otorga a favor de LA PARTE DEUDORA una línea de crédito de consumo e inversión institucional por la suma de USD $1,800,000 (UN MILLÓN OCHOCIENTOS MIL DÓLARES DE LOS ESTADOS UNIDOS DE AMÉRICA), destinados a la cancelación de pasivos de corto plazo y modernización de infraestructura.
SEGUNDA: TASA DE INTERÉS Y TABLA DE AMORTIZACIÓN.-
El crédito devengará una tasa de interés activa fija del 9.50% anual. El capital e intereses serán cancelados mediante 36 cuotas mensuales consecutivas de capital e interés de acuerdo a la tabla de amortización adjunta.
TERCERA: GARANTÍA MERCANTIL Y FIDEICOMISO.-
LA PARTE DEUDORA suscribe un Pagaré a la Orden con renuncia a fuero y domicilio, y constituye un Fideicomiso Mercantil de Administración y Fuente de Pago sobre los flujos de taquilla de los encuentros de LigaPro en el Estadio Monumental.
CUARTA: EVENTOS DE MORA Y ACELERACIÓN.-
La falta de pago de dos cuotas consecutivas facultará al BANCO a declarar de plazo vencido el saldo insoluto del crédito e iniciar la ejecución coactiva o cobro judicial en Guayaquil.`
  },

  licencias: {
    title: 'Contrato de Licencia de Marca y Explotación Comercial de Tiendas Oficiales',
    text: `CONTRATO DE LICENCIA COMERCIAL DE MARCA Y SIGNOS DISTINTIVOS
REUNIDOS:
De una parte, BARCELONA SPORTING CLUB, propietario exclusivo del registro de marca "BARCELONA S.C.", el escudo oficial y signos distintivos registrados ante el SENADI; y de otra parte, RETAIL STORE ECUADOR S.A., en calidad de EL LICENCIATARIO.
CLÁUSULA PRIMERA: CONCESIÓN DE LICENCIA COMERCIAL.-
EL CLUB concede una licencia no exclusiva pero prioritaria para la apertura de 4 locales comerciales denominados "BSC STORE" en los centros comerciales de Guayaquil, Quito y Machala, autorizándolo a comercializar productos conmemorativos, camisetas históricas, souvenirs y artículos de vestir licenciados.
CLÁUSULA SEGUNDA: REGALÍAS (ROYALTIES) Y RETRIBUCIÓN.-
EL LICENCIATARIO pagará en favor de EL CLUB el 10% (diez por ciento) del monto total de ventas netas mensuales. Se establece un pago mínimo garantizado de USD $15,000 mensuales independientemente del volumen facturado.
CLÁUSULA TERCERA: MANUAL DE IDENTIDAD Y CONTROL DE CALIDAD.-
El uso del escudo de Barcelona SC deberá apegarse estrictamente a los colores pantone oficiales (Amarillo Oro #FFD100, Negro Obsidian, Rojo y Azul). Todo diseño requerirá aprobación previa por escrito del Departamento de Marketing de Barcelona SC.
CLÁUSULA CUARTA: DURACIÓN.-
El plazo del contrato es de 4 años, iniciando el 1 de marzo de 2026 hasta el 28 de febrero de 2030.`
  },

  acuerdos_pago: {
    title: 'Convenio Transaccional y Acta de Mediación de Deuda Pendiente',
    text: `CONVENIO DE TRANSACCIÓN EXTRAJUDICIAL Y PLAN DE CUOTAS
COMPARECENCIA:
En el Centro de Arbitraje y Mediación de la Cámara de Comercio de Guayaquil, comparecen:
Por una parte, la sociedad PROMOTORA DE ESPECTÁCULOS GUAYAQUIL S.A. en calidad de ACREEDOR; y por otra parte, BARCELONA SPORTING CLUB, legalmente representado, en calidad de DEUDOR.
ANTECEDENTES:
Las partes mantienen controversias económicas derivadas de servicios de montaje de tarima y pirotecnia de eventos pasados, por un monto reclamado de USD $310,000.
ACUERDOS TRANSACCIONALES:
PRIMERA: MONTO TRANSADO Y CONDONACIÓN.-
Las partes fijan como monto único, definitivo y total de la obligación la suma de USD $240,000 (DOSCIENTOS CUARENTA MIL DÓLARES DE LOS ESTADOS UNIDOS DE AMÉRICA), condonando el ACREEDOR cualquier reclamo de intereses o costas judiciales.
SEGUNDA: FORMA DE PAGO EN CUOTAS.-
EL DEUDOR pagará la suma pactada en 12 cuotas mensuales, iguales y sucesivas de USD $20,000 cada una, mediante transferencia bancaria a la cuenta corriente del ACREEDOR antes del día 15 de cada mes.
TERCERA: EFECTO DE SENTENCIA Y PAZ Y SALVO.-
La presente acta tiene el efecto vinculante de sentencia ejecutoriada de última instancia. El cumplimiento íntegro extinguirá de forma definitiva las obligaciones entre las partes.
CUARTA: CLÁUSULA RESOLUTORIA.-
La mora de dos cuotas dará derecho al ACREEDOR a cobrar judicialmente el saldo pendiente por la vía ejecutiva.`
  },

  proveedores: {
    title: 'Contrato de Suministro de Servicios de Catering y Nutrición Deportiva',
    text: `CONTRATO DE PRESTACIÓN DE SERVICIOS DE CATERING Y ALIMENTACIÓN
COMPARECIENTES:
BARCELONA SPORTING CLUB (EL CLUB); y la empresa NUTRICIÓN & DIETA DEPORTIVA DEL PACÍFICO CIA. LTDA. (EL PROVEEDOR), con RUC 0992764839001.
CLÁUSULA PRIMERA: OBJETO DEL SERVICIO.-
EL PROVEEDOR prestará el servicio integral de nutrición deportiva, preparación de menús balanceados y catering para el primer plantel de fútbol, cuerpo técnico y concentraciones oficiales en el edificio de concentración del Estadio Monumental Banco Pichincha, así como viandas para traslados nacionales.
CLÁUSULA SEGUNDA: ESTÁNDARES BROMATOLÓGICOS Y SUPERVISIÓN.-
Los alimentos deberán cumplir con las especificaciones calóricas y macros emitidas por el médico nutricionista de Barcelona SC. Se prohíbe taxativamente el uso de condimentos no autorizados o sustancias que puedan generar falsos positivos en controles antidopaje de FEF/CONMEBOL.
CLÁUSULA TERCERA: PRECIO Y FORMA DE PAGO.-
EL CLUB cancelará la tarifa de USD $18 por menú/día por atleta. El valor estimado mensual es de USD $12,500 pagaderos a 30 días contra presentación de factura electrónica aprobada por la Gerencia Deportiva.
CLÁUSULA CUARTA: DURACIÓN DEL CONTRATO.-
El plazo del presente contrato es de un año calendario renovable, iniciando el 1 de enero de 2026.`
  }
};
