/**
 * BSC CONTRACTS - Smart Contract Classifier Engine
 * Motor de Inteligencia Legal para Clasificación Automática de Contratos
 * Barcelona Sporting Club de Ecuador
 */

class BSCContractClassifier {
  constructor() {
    this.keywords = {
      jugadores: {
        high: [
          'futbolista', 'jugador profesional', 'derechos federativos', 'derechos deportivos', 
          'clausula de rescision', 'cláusula de rescisión', 'fichaje', 'cesion temporal', 
          'cesión temporal', 'opcion de compra', 'opción de compra', 'primer equipo', 
          'primer plantel', 'fef', 'ligapro', 'conmebol libertadores', 'prima de fichaje', 
          'pase deportivo', 'transferencia deportiva', 'salario mensual de jugador', 'dorsal', 
          'goles anotados', 'partidos jugados', 'camara de resolucion de disputas', 'tas/cas'
        ],
        medium: [
          'futbol', 'fútbol', 'temporadas', 'arbitro', 'director tecnico y jugador', 
          'convocatoria', 'entrenamientos', 'lesion deportiva', 'cuerpo medico'
        ],
        negative: ['proveedor de alimentos', 'linea de credito rotativa', 'naming rights']
      },

      auspicios: {
        high: [
          'patrocinador', 'patrocinio', 'auspicio', 'auspiciante', 'main sponsor', 
          'camiseta oficial', 'manga de la camiseta', 'pecho frontal', 'vallas led', 
          'vallas publicitarias', 'estadio banco pichincha', 'noche amarilla', 
          'exclusividad de categoria', 'exclusividad comercial', 'contraprestacion publicitaria', 
          'presencia de marca', 'backdrop de prensa', 'sponsor oficial', 'activacion de marca',
          'stand promocional', 'palcos de hospitalidad corporativa'
        ],
        medium: [
          'marca', 'publicidad', 'visibilidad', 'redes sociales oficiales', 'spots', 
          'exhibicion', 'logotipo en camiseta', 'marketing deportivo', 'campaña'
        ],
        negative: ['futbolista profesional', 'linea de credito', 'cesion de cuotas transaccionales']
      },

      administradores: {
        high: [
          'director tecnico', 'director técnico', 'cuerpo tecnico', 'cuerpo técnico', 
          'gerente general', 'gerente deportivo', 'secretaria tecnica', 'secretaría técnica', 
          'alta direccion', 'alta dirección', 'facultades estatutarias', 'representacion legal delegada', 
          'directorio de barcelona', 'asistente tecnico', 'preparador fisico', 'honorarios profesionales de direccion', 
          'pacto de no competencia', 'sigilo institucional', 'conduccion tecnica', 'estatuto social'
        ],
        medium: [
          'administrador', 'directorio', 'scouting', 'gerencia', 'junta directiva', 
          'apoderamiento', 'poder especial', 'representante legal', 'facultades delegadas'
        ],
        negative: ['indumentaria para la venta', 'linea de credito bancaria', 'proveedor de seguridad']
      },

      creditos: {
        high: [
          'linea de credito', 'línea de crédito', 'mutuo con interes', 'mutuo con interés', 
          'prestamo bancario', 'préstamo bancario', 'pagare a la orden', 'pagaré a la orden', 
          'tasa de interes', 'tasa de interés', 'fideicomiso mercantil', 'garantia fiduciaria', 
          'garantía fiduciaria', 'tabla de amortizacion', 'tabla de amortización', 'desembolso', 
          'superintendencia de bancos', 'saldo insoluto', 'operacion de descuento', 'banco bolivariano', 
          'banco guayaquil', 'banco del pacifico', 'fuente de pago', 'tasa activa'
        ],
        medium: [
          'banco', 'credito', 'crédito', 'financiamiento', 'cuotas de capital', 'intereses ordinarios', 
          'intereses de mora', 'pagare', 'gravamen', 'garantia hipotecaria', 'cartera'
        ],
        negative: ['jugador profesional', 'merchandising', 'vallas led estadio']
      },

      licencias: {
        high: [
          'licencia de marca', 'marcas y emblemas', 'escudo oficial', 'signos distintivos', 
          'senadi', 'royalties', 'regalias', 'regalías', 'merchandising oficial', 
          'tienda oficial', 'bsc store', 'indumentaria oficial con licencia', 'marathon sports', 
          'productos conmemorativos', 'derechos de explotacion comercial', 'derechos de explotación', 
          'propiedad intelectual', 'licenciatario', 'holograma de seguridad', 'ventas netas'
        ],
        medium: [
          'licencia', 'explotacion comercial', 'souvenirs', 'camisetas conmemorativas', 
          'derechos de imagen colectiva de club', 'diseño de prendas', 'patente', 'copyright'
        ],
        negative: ['mutuo bancario', 'proveedor de limpieza', 'director tecnico']
      },

      acuerdos_pago: {
        high: [
          'convenio transaccional', 'acuerdo de pago', 'reconocimiento de deuda', 
          'plan de cuotas', 'acta de mediacion', 'acta de mediación', 'centro de arbitraje y mediacion', 
          'acreedor', 'deudor', 'saldo transado', 'condonacion de intereses', 'condonación', 
          'paz y salvo', 'reestructuracion de pasivo', 'reestructuración', 'finiquito deportivo', 
          'comision disciplinaria fifa', 'comisión disciplinaria', 'sentencia ejecutoriada', 
          'aceleracion de plazos', 'moratoria'
        ],
        medium: [
          'deuda', 'cuotas', 'finiquito', 'conflicto economico', 'reclamo judicial', 
          'pagos diferidos', 'levantamiento de sancion', 'compromiso de pago'
        ],
        negative: ['licencia de marca', 'patrocinador oficial', 'nuevo fichaje']
      },

      proveedores: {
        high: [
          'proveedor', 'prestacion de servicios operativos', 'prestación de servicios', 
          'suministro de bienes', 'catering y alimentacion', 'seguridad privada', 
          'mantenimiento de cesped', 'mantenimiento de césped', 'vuelos charter', 
          'vuelos chárter', 'control de accesos estadio', 'guardias de seguridad', 
          'sla de servicio', 'poliza de fiel cumplimiento', 'póliza de fiel cumplimiento', 
          'poliza de responsabilidad civil', 'orden de compra', 'limpieza de graderias', 
          'iluminacion led estadio', 'sonido e infraestructura'
        ],
        medium: [
          'proveedores', 'servicio', 'mantenimiento', 'transporte del plantel', 
          'alimentacion de concentracion', 'facturacion electronica', 'entregables'
        ],
        negative: ['futbolista profesional', 'licencia de marca', 'linea de credito']
      }
    };
  }

  /**
   * Normaliza texto para análisis insensible a mayúsculas y acentos
   */
  normalizeText(text) {
    if (!text) return '';
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  /**
   * Evalúa y clasifica el texto de un contrato
   */
  classify(text) {
    if (!text || text.trim().length === 0) {
      return {
        module: 'jugadores',
        confidence: 0,
        scores: {},
        rationale: 'No se detectó contenido de texto suficiente para analizar.',
        extractedData: {}
      };
    }

    const normText = this.normalizeText(text);
    const scores = {};
    const matchesFound = {};

    // 1. Evaluar pesos para cada uno de los 7 módulos
    for (const [modKey, kwObj] of Object.entries(this.keywords)) {
      let score = 0;
      const matched = [];

      // Términos de alto peso (10 puntos cada coincidencia)
      for (const phrase of kwObj.high) {
        const normPhrase = this.normalizeText(phrase);
        const occurrences = (normText.match(new RegExp(normPhrase, 'g')) || []).length;
        if (occurrences > 0) {
          score += occurrences * 12;
          matched.push(phrase);
        }
      }

      // Términos de peso medio (4 puntos)
      for (const phrase of kwObj.medium) {
        const normPhrase = this.normalizeText(phrase);
        const occurrences = (normText.match(new RegExp(normPhrase, 'g')) || []).length;
        if (occurrences > 0) {
          score += occurrences * 4;
          if (matched.length < 5) matched.push(phrase);
        }
      }

      // Penalización por términos negativos (-15 puntos)
      for (const phrase of kwObj.negative) {
        const normPhrase = this.normalizeText(phrase);
        const occurrences = (normText.match(new RegExp(normPhrase, 'g')) || []).length;
        if (occurrences > 0) {
          score = Math.max(0, score - occurrences * 15);
        }
      }

      scores[modKey] = score;
      matchesFound[modKey] = matched;
    }

    // 2. Determinar categoría con mayor puntuación
    let bestModule = 'jugadores';
    let maxScore = -1;
    let totalScore = 0;

    for (const [modKey, score] of Object.entries(scores)) {
      totalScore += score;
      if (score > maxScore) {
        maxScore = score;
        bestModule = modKey;
      }
    }

    // Calcular confianza porcentual (mínimo 78% si hay match, hasta 99%)
    let confidence = 80;
    if (totalScore > 0 && maxScore > 0) {
      const dominance = maxScore / (totalScore || 1);
      confidence = Math.min(99, Math.round(75 + dominance * 24));
    } else {
      confidence = 65;
    }

    // Generar justificación jurídica
    const topKeywords = matchesFound[bestModule] ? matchesFound[bestModule].slice(0, 4) : [];
    const moduleName = BSC_MODULES[bestModule]?.name || bestModule;
    let rationale = `Clasificado con alta precisión como módulo "${moduleName}". `;
    if (topKeywords.length > 0) {
      rationale += `Se identificaron cláusulas y términos determinantes: "${topKeywords.join('", "')}".`;
    } else {
      rationale += `Asignado por correspondencia estructural con la categoría ${moduleName}.`;
    }

    // Extraer metadatos automáticamente
    const extractedData = this.extractMetadata(text, bestModule);

    return {
      module: bestModule,
      confidence,
      scores,
      rationale,
      topKeywords,
      extractedData
    };
  }

  /**
   * Extrae automáticamente información clave del texto del contrato
   */
  extractMetadata(text, moduleKey) {
    const data = {
      title: '',
      counterparty: '',
      value: 0,
      currency: 'USD',
      startDate: new Date().toISOString().split('T')[0],
      endDate: '',
      typeDetail: '',
      riskLevel: 'low',
      responsibleLawyer: 'Abg. Carlos Mendoza (Director Jurídico)',
      detectedClauses: []
    };

    // 1. Detección de Título sugerido
    const titleMatch = text.match(/(?:CONTRATO|CONVENIO|ACUERDO|ACTA|OPERACIÓN)[^\n\r]{10,90}/i);
    if (titleMatch) {
      data.title = titleMatch[0].trim().replace(/\.$/, '');
    } else {
      const modObj = BSC_MODULES[moduleKey];
      data.title = `Contrato de ${modObj.name} - Barcelona SC`;
    }

    // 2. Detección de Contraparte
    const partyPatterns = [
      /(?:otra parte|patrocinador|jugador|licenciatario|acreedor|proveedor|banco|prestador)[,:\s]+(?:el señor|la empresa|la sociedad|la compañía)?\s*([A-ZÁÉÍÓÚÑa-záéíóúñ0-9\.\s\&]{3,50}?)(?:,|\.|\ben calidad\b|\bcon RUC\b|\bde nacionalidad\b|\ba quien\b)/i,
      /(?:COMPARECIENTES|REUNIDOS|ENTRE)[^\n\r]*[\n\r]+(?:[^\n\r]*[\n\r]+)?(?:Por una parte[^\n\r]+[\n\r]+)?(?:Por otra parte|Y por otra parte)[,:\s]+(?:el señor|la compañía)?\s*([A-ZÁÉÍÓÚÑa-záéíóúñ0-9\.\s\&]{3,50}?)(?:,|\.|\bcon\b|\ba quien\b)/i,
      /TELECOMUNICACIONES\s+[A-Z0-9\s]+/i,
      /BANCO\s+[A-ZÁÉÍÓÚÑa-záéíóúñ\s]+/i,
      /MARATHON\s+SPORTS/i,
      /CERVECERÍA\s+NACIONAL/i
    ];

    for (const pattern of partyPatterns) {
      const match = text.match(pattern);
      if (match) {
        let cp = (match[1] || match[0]).trim();
        // Limpiar contraparte
        cp = cp.replace(/^(el|la|los|las|de|y)\s+/i, '').replace(/^(señor|señora|licenciado|ingeniero)\s+/i, '');
        if (cp.length > 3 && cp.length < 55 && !cp.toLowerCase().includes('barcelona sporting')) {
          data.counterparty = cp;
          break;
        }
      }
    }

    if (!data.counterparty) {
      const defaults = {
        jugadores: 'Futbolista Profesional Contratado',
        auspicios: 'Corporación Patrocinadora Oficial',
        administradores: 'Profesional de Dirección Técnica',
        creditos: 'Institución Financiera Bancaria',
        licencias: 'Licenciatario Comercial Oficial',
        acuerdos_pago: 'Acreedor Transaccional',
        proveedores: 'Empresa Proveedora de Servicios'
      };
      data.counterparty = defaults[moduleKey] || 'Contraparte Institucional';
    }

    // 3. Detección de Valores Monetarios
    // Buscar USD $xxx,xxx o $xxx,xxx o millones
    const valueMatch = text.match(/(?:USD\s*\$|\$)\s*([\d]{1,3}(?:[,\.][\d]{3})*(?:\.[\d]{2})?)/i);
    if (valueMatch) {
      const cleanNum = valueMatch[1].replace(/,/g, '');
      data.value = parseFloat(cleanNum) || 0;
    } else {
      // Buscar si menciona millones
      const millionMatch = text.match(/([\d]+(?:\.[\d]+)?)\s*(?:millones|millón)/i);
      if (millionMatch) {
        data.value = parseFloat(millionMatch[1]) * 1000000;
      } else {
        data.value = 150000; // Valor de referencia por defecto
      }
    }

    // 4. Fechas estimadas
    const yearMatch = text.match(/\b(202[4-9]|203[0-5])\b/g);
    if (yearMatch && yearMatch.length >= 2) {
      const startYear = Math.min(...yearMatch.map(Number));
      const endYear = Math.max(...yearMatch.map(Number));
      data.startDate = `${startYear}-01-01`;
      data.endDate = `${endYear}-12-31`;
    } else {
      const currYear = new Date().getFullYear();
      data.startDate = `${currYear}-01-01`;
      data.endDate = `${currYear + 2}-12-31`;
    }

    // 5. Nivel de Riesgo Legal
    const highRiskSignals = [
      'sanción fifa', 'sancion fifa', 'cláusula penal', 'tribunal arbitral', 'mora superior',
      'ejecución coactiva', 'aceleración de plazos', 'conflicto', 'vencimiento perentorio'
    ];
    const norm = this.normalizeText(text);
    let riskPoints = 0;
    for (const signal of highRiskSignals) {
      if (norm.includes(this.normalizeText(signal))) {
        riskPoints++;
      }
    }

    if (data.value > 1500000 || riskPoints >= 2) {
      data.riskLevel = 'high';
    } else if (data.value > 400000 || riskPoints === 1) {
      data.riskLevel = 'medium';
    } else {
      data.riskLevel = 'low';
    }

    // 6. Extracción de Cláusulas Principales
    const clauseRegex = /(?:CLÁUSULA\s+(?:PRIMERA|SEGUNDA|TERCERA|CUARTA|QUINTA|SEXTA|[0-9]+)|PRIMERA|SEGUNDA|TERCERA|CUARTA|QUINTA|SEXTA)[^:\n\r]+[:\.\-][^\n\r]+/gi;
    const clauseMatches = text.match(clauseRegex);
    if (clauseMatches) {
      data.detectedClauses = clauseMatches.slice(0, 5).map((cl, idx) => ({
        number: `${idx + 1}`,
        title: cl.split(/[:\.\-]/)[0].trim(),
        text: cl.trim()
      }));
    }

    return data;
  }
}

// Instancia global del clasificador
const bscClassifier = new BSCContractClassifier();
