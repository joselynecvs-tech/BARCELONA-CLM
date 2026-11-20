/**
 * BSC CONTRACTS - Contract Lifecycle Management (CLM)
 * Barcelona Sporting Club de Ecuador - Legal Department
 * Main Application Controller
 */

class BSCContractsApp {
  constructor() {
    this.storageKey = 'bsc_contracts_v1';
    this.contracts = this.loadContracts();
    this.activeModule = 'all';
    this.activeStatus = 'all';
    this.searchQuery = '';
    this.selectedContract = null;
    this.currentClassification = null;

    this.init();
  }

  loadContracts() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Error reading from localStorage, using initial sample data', e);
    }
    return JSON.parse(JSON.stringify(INITIAL_CONTRACTS));
  }

  saveContracts() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.contracts));
    } catch (e) {
      console.warn('Error saving to localStorage', e);
    }
    this.updateMetrics();
    this.renderSidebarCounts();
    this.renderModuleChips();
    this.renderContractsTable();
  }

  init() {
    this.setupDateDisplay();
    this.renderSidebar();
    this.renderModuleChips();
    this.renderContractsTable();
    this.updateMetrics();
    this.setupEventListeners();
  }

  setupDateDisplay() {
    const dateEl = document.getElementById('currentDateDisplay');
    if (dateEl) {
      const now = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const formatted = now.toLocaleDateString('es-EC', options);
      // Capitalize first letter
      dateEl.textContent = formatted.charAt(0).toUpperCase() + formatted.slice(1);
    }
  }

  setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('globalSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderContractsTable();
      });

      // Keyboard shortcut Ctrl + K
      window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
          e.preventDefault();
          searchInput.focus();
        }
      });
    }

    // Modal Upload Classifier
    const openClassifierBtn = document.getElementById('openClassifierBtn');
    if (openClassifierBtn) {
      openClassifierBtn.addEventListener('click', () => this.openClassifierModal());
    }

    const closeClassifierBtn = document.getElementById('closeClassifierBtn');
    if (closeClassifierBtn) {
      closeClassifierBtn.addEventListener('click', () => this.closeClassifierModal());
    }

    // Modal Reference Image (Comunicado Oficial)
    const openReferenceBtn = document.getElementById('openReferenceBtn');
    if (openReferenceBtn) {
      openReferenceBtn.addEventListener('click', () => this.openReferenceModal());
    }

    const closeReferenceBtn = document.getElementById('closeReferenceBtn');
    if (closeReferenceBtn) {
      closeReferenceBtn.addEventListener('click', () => this.closeReferenceModal());
    }

    // Drawer Inspector
    const closeDrawerBtn = document.getElementById('closeDrawerBtn');
    if (closeDrawerBtn) {
      closeDrawerBtn.addEventListener('click', () => this.closeDrawer());
    }

    const drawerOverlay = document.getElementById('drawerOverlay');
    if (drawerOverlay) {
      drawerOverlay.addEventListener('click', () => this.closeDrawer());
    }

    // Dropzone File Upload
    const dropzone = document.getElementById('fileDropzone');
    const fileInput = document.getElementById('contractFileInput');
    if (dropzone && fileInput) {
      dropzone.addEventListener('click', () => fileInput.click());
      fileInput.addEventListener('change', (e) => this.handleFileSelection(e));

      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
      });

      dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('dragover');
      });

      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
        if (e.dataTransfer.files.length > 0) {
          fileInput.files = e.dataTransfer.files;
          this.handleFileSelection({ target: fileInput });
        }
      });
    }

    // Textarea manual analysis
    const analyzeTextBtn = document.getElementById('analyzeTextBtn');
    if (analyzeTextBtn) {
      analyzeTextBtn.addEventListener('click', () => {
        const text = document.getElementById('contractPasteArea')?.value;
        if (text && text.trim().length > 20) {
          this.runClassification(text, 'Texto Escaneado Directo');
        } else {
          this.showToast('Por favor ingrese o pegue el contenido del contrato a evaluar.', 'warning');
        }
      });
    }

    // Confirm and Save in Module
    const saveContractBtn = document.getElementById('saveClassifiedContractBtn');
    if (saveContractBtn) {
      saveContractBtn.addEventListener('click', () => this.saveClassifiedContract());
    }

    // Status filter pills
    const statusPills = document.querySelectorAll('.filter-pill');
    statusPills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        statusPills.forEach(p => p.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.activeStatus = e.currentTarget.getAttribute('data-status') || 'all';
        this.renderContractsTable();
      });
    });

    // Reset Data button
    const resetDataBtn = document.getElementById('resetDataBtn');
    if (resetDataBtn) {
      resetDataBtn.addEventListener('click', () => {
        if (confirm('¿Desea restaurar la base de contratos oficial de Barcelona SC a los valores de muestra originales?')) {
          this.contracts = JSON.parse(JSON.stringify(INITIAL_CONTRACTS));
          this.saveContracts();
          this.showToast('Base de contratos restaurada con éxito.', 'success');
        }
      });
    }

    // Export CSV
    const exportCsvBtn = document.getElementById('exportCsvBtn');
    if (exportCsvBtn) {
      exportCsvBtn.addEventListener('click', () => this.exportToCSV());
    }
  }

  renderSidebar() {
    const navList = document.getElementById('sidebarNavList');
    if (!navList) return;

    let html = `
      <div class="nav-item ${this.activeModule === 'all' ? 'active' : ''}" data-module="all" onclick="app.setModule('all')">
        <div class="nav-item-content">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          <span>Todos los Contratos</span>
        </div>
        <span class="nav-badge" id="badge-all">${this.contracts.length}</span>
      </div>
    `;

    for (const [key, mod] of Object.entries(BSC_MODULES)) {
      const count = this.contracts.filter(c => c.module === key).length;
      const isActive = this.activeModule === key;
      html += `
        <div class="nav-item ${isActive ? 'active' : ''}" data-module="${key}" onclick="app.setModule('${key}')">
          <div class="nav-item-content">
            <span class="nav-num">${mod.number}.</span>
            <span>${mod.name}</span>
          </div>
          <span class="nav-badge" id="badge-${key}">${count}</span>
        </div>
      `;
    }

    navList.innerHTML = html;
  }

  renderSidebarCounts() {
    const allBadge = document.getElementById('badge-all');
    if (allBadge) allBadge.textContent = this.contracts.length;

    for (const key of Object.keys(BSC_MODULES)) {
      const badge = document.getElementById(`badge-${key}`);
      if (badge) {
        badge.textContent = this.contracts.filter(c => c.module === key).length;
      }
    }
  }

  renderModuleChips() {
    const strip = document.getElementById('moduleTabsStrip');
    if (!strip) return;

    let html = `
      <div class="module-chip ${this.activeModule === 'all' ? 'active' : ''}" onclick="app.setModule('all')">
        <span class="module-chip-num">★</span>
        <span class="module-chip-title">Todos los Módulos</span>
        <span class="module-chip-count">${this.contracts.length}</span>
      </div>
    `;

    for (const [key, mod] of Object.entries(BSC_MODULES)) {
      const count = this.contracts.filter(c => c.module === key).length;
      const isActive = this.activeModule === key;
      html += `
        <div class="module-chip ${isActive ? 'active' : ''}" onclick="app.setModule('${key}')">
          <span class="module-chip-num">${mod.number}</span>
          <span class="module-chip-title">${mod.name}</span>
          <span class="module-chip-count">${count}</span>
        </div>
      `;
    }

    strip.innerHTML = html;
  }

  setModule(moduleKey) {
    this.activeModule = moduleKey;
    this.renderSidebar();
    this.renderModuleChips();
    this.renderHeroBanner();
    this.renderContractsTable();
  }

  renderHeroBanner() {
    const titleEl = document.getElementById('heroTitle');
    const badgeEl = document.getElementById('heroBadge');
    const subtitleEl = document.getElementById('heroSubtitle');

    if (this.activeModule === 'all') {
      if (titleEl) titleEl.innerHTML = `Repositorio General de Contratos <span>BSC</span>`;
      if (badgeEl) badgeEl.textContent = '7 Módulos CLM';
      if (subtitleEl) subtitleEl.textContent = 'Gestión centralizada del ciclo de vida de todos los contratos jurídicos de Barcelona Sporting Club de Ecuador.';
    } else {
      const mod = BSC_MODULES[this.activeModule];
      if (mod) {
        if (titleEl) titleEl.innerHTML = `Módulo ${mod.number}: Contratos de ${mod.name}`;
        if (badgeEl) badgeEl.textContent = `Categoría Oficial ${mod.number}`;
        if (subtitleEl) subtitleEl.textContent = mod.description;
      }
    }
  }

  updateMetrics() {
    const totalCount = this.contracts.length;
    const totalVal = this.contracts.reduce((sum, c) => sum + (c.value || 0), 0);
    const expiringCount = this.contracts.filter(c => c.status === 'expiring').length;
    const approvalCount = this.contracts.filter(c => c.status === 'approval' || c.status === 'in_review').length;

    const elTotal = document.getElementById('metricTotalContracts');
    const elValue = document.getElementById('metricTotalValue');
    const elExpiring = document.getElementById('metricExpiringContracts');
    const elApprovals = document.getElementById('metricPendingApprovals');

    if (elTotal) elTotal.textContent = totalCount;
    if (elValue) elValue.textContent = `$${(totalVal / 1000000).toFixed(2)}M`;
    if (elExpiring) elExpiring.textContent = expiringCount;
    if (elApprovals) elApprovals.textContent = approvalCount;

    // Update hero summary
    const heroCount = document.getElementById('heroContractsCount');
    const heroVal = document.getElementById('heroContractsVal');
    if (heroCount) heroCount.textContent = totalCount;
    if (heroVal) heroVal.textContent = `$${(totalVal / 1000000).toFixed(1)}M USD`;
  }

  getFilteredContracts() {
    return this.contracts.filter(c => {
      // Filter by module
      if (this.activeModule !== 'all' && c.module !== this.activeModule) {
        return false;
      }

      // Filter by status
      if (this.activeStatus !== 'all' && c.status !== this.activeStatus) {
        return false;
      }

      // Filter by search query
      if (this.searchQuery) {
        const query = this.searchQuery;
        const matchTitle = (c.title || '').toLowerCase().includes(query);
        const matchParty = (c.counterparty || '').toLowerCase().includes(query);
        const matchId = (c.id || '').toLowerCase().includes(query);
        const matchDesc = (c.description || '').toLowerCase().includes(query);
        const matchMod = (BSC_MODULES[c.module]?.name || '').toLowerCase().includes(query);
        return matchTitle || matchParty || matchId || matchDesc || matchMod;
      }

      return true;
    });
  }

  renderContractsTable() {
    const tbody = document.getElementById('contractsTableBody');
    if (!tbody) return;

    const filtered = this.getFilteredContracts();

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7">
            <div class="empty-state">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
              </svg>
              <h3>No se encontraron contratos</h3>
              <p>No hay contratos que coincidan con los criterios de filtro o búsqueda seleccionados.</p>
              <button class="btn btn-primary btn-sm" style="margin-top: 14px;" onclick="app.openClassifierModal()">
                + Subir o Clasificar Contrato
              </button>
            </div>
          </td>
        </tr>
      `;
      return;
    }

    let html = '';
    filtered.forEach(contract => {
      const mod = BSC_MODULES[contract.module] || { name: contract.module, badgeClass: 'badge-yellow', number: '' };
      const statusBadge = this.formatStatusBadge(contract.status);
      const riskBadge = this.formatRiskBadge(contract.riskLevel);
      const formattedVal = new Intl.NumberFormat('en-US', { style: 'currency', currency: contract.currency || 'USD', maximumFractionDigits: 0 }).format(contract.value || 0);

      html += `
        <tr>
          <td>
            <div class="contract-title-cell">
              <span class="contract-code">${contract.id}</span>
              <span class="contract-name" onclick="app.openDrawer('${contract.id}')">${contract.title}</span>
              <span class="contract-detail-sub">${contract.typeDetail || ''}</span>
            </div>
          </td>
          <td>
            <span class="category-badge ${mod.badgeClass}">
              ${mod.number ? `${mod.number}. ` : ''}${mod.name}
            </span>
          </td>
          <td>
            <strong style="color: var(--text-primary); font-size: 0.85rem;">${contract.counterparty}</strong>
          </td>
          <td>
            <strong style="color: var(--bsc-yellow-primary); font-size: 0.88rem;">${formattedVal}</strong>
          </td>
          <td>
            <div style="font-size: 0.78rem;">
              <div><strong>Inicio:</strong> ${contract.startDate || '-'}</div>
              <div style="color: var(--text-muted);"><strong>Vence:</strong> ${contract.endDate || '-'}</div>
            </div>
          </td>
          <td>
            ${statusBadge}
            <div style="margin-top: 4px;">${riskBadge}</div>
          </td>
          <td>
            <div class="action-buttons">
              <button class="btn-table-action" onclick="app.openDrawer('${contract.id}')" title="Ver Expediente Completo">
                Ver Ficha
              </button>
              <button class="btn-table-action" onclick="app.advanceStage('${contract.id}')" title="Avanzar Etapa de Ciclo de Vida">
                Etapa ➔
              </button>
            </div>
          </td>
        </tr>
      `;
    });

    tbody.innerHTML = html;
  }

  formatStatusBadge(status) {
    const map = {
      active: { text: 'Vigente / Activo', class: 'status-active' },
      expiring: { text: 'Próximo a Vencer', class: 'status-expiring' },
      in_review: { text: 'En Revisión Legal', class: 'status-review' },
      approval: { text: 'Aprobación Directorio', class: 'status-approval' },
      signature: { text: 'Pendiente de Firma', class: 'status-signature' },
      draft: { text: 'Borrador', class: 'status-draft' }
    };

    const s = map[status] || { text: status, class: 'status-draft' };
    return `
      <span class="status-badge ${s.class}">
        <span class="status-dot"></span>
        ${s.text}
      </span>
    `;
  }

  formatRiskBadge(risk) {
    const map = {
      low: { text: 'Riesgo Bajo', class: 'risk-low' },
      medium: { text: 'Riesgo Medio', class: 'risk-medium' },
      high: { text: 'Riesgo Crítico', class: 'risk-high' }
    };
    const r = map[risk] || { text: 'Riesgo Normal', class: 'risk-low' };
    return `<span class="risk-pill ${r.class}">● ${r.text}</span>`;
  }

  // ==========================================================================
  // SMART CLASSIFIER LOGIC & MODAL
  // ==========================================================================
  openClassifierModal() {
    const modal = document.getElementById('classifierModal');
    if (modal) {
      modal.classList.add('active');
      this.resetClassifierModal();
    }
  }

  closeClassifierModal() {
    const modal = document.getElementById('classifierModal');
    if (modal) {
      modal.classList.remove('active');
    }
  }

  resetClassifierModal() {
    document.getElementById('scanningCard').classList.remove('active');
    document.getElementById('classificationResultCard').classList.remove('active');
    document.getElementById('saveClassifiedContractBtn').style.display = 'none';
    const textArea = document.getElementById('contractPasteArea');
    if (textArea) textArea.value = '';
    const fileInput = document.getElementById('contractFileInput');
    if (fileInput) fileInput.value = '';
    this.currentClassification = null;
  }

  testSampleCategory(categoryKey) {
    const sample = TEST_CONTRACT_SAMPLES[categoryKey];
    if (sample) {
      const textArea = document.getElementById('contractPasteArea');
      if (textArea) textArea.value = sample.text;
      this.runClassification(sample.text, sample.title);
    }
  }

  handleFileSelection(e) {
    const file = e.target.files[0];
    if (!file) return;

    this.showToast(`Cargando archivo "${file.name}"...`, 'info');

    // Leer texto del archivo
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      this.runClassification(content, file.name);
    };
    reader.onerror = () => {
      this.showToast('No se pudo leer el archivo seleccionado.', 'error');
    };

    // Intentar leer como texto
    reader.readAsText(file);
  }

  runClassification(text, sourceName) {
    const scanningCard = document.getElementById('scanningCard');
    const resultCard = document.getElementById('classificationResultCard');
    const saveBtn = document.getElementById('saveClassifiedContractBtn');

    // Mostrar radar de escaneo legal
    scanningCard.classList.add('active');
    resultCard.classList.remove('active');
    if (saveBtn) saveBtn.style.display = 'none';

    setTimeout(() => {
      // Ejecutar motor de clasificación BSC
      const result = bscClassifier.classify(text);
      this.currentClassification = {
        ...result,
        sourceName,
        rawText: text
      };

      scanningCard.classList.remove('active');
      this.renderClassificationResult(result);
      resultCard.classList.add('active');
      if (saveBtn) saveBtn.style.display = 'inline-flex';
    }, 750);
  }

  renderClassificationResult(result) {
    const mod = BSC_MODULES[result.module];
    const extracted = result.extractedData;

    // Actualizar Encabezado de Coincidencia
    document.getElementById('detectedModuleName').textContent = `${mod.number}. ${mod.name}`;
    document.getElementById('detectedConfidenceText').textContent = `${result.confidence}% Certeza`;
    document.getElementById('detectedConfidenceFill').style.width = `${result.confidence}%`;
    document.getElementById('detectedRationale').textContent = result.rationale;

    // Llenar campos editables pre-extraídos
    const modSelect = document.getElementById('editClassifiedModule');
    if (modSelect) modSelect.value = result.module;

    const titleInput = document.getElementById('editClassifiedTitle');
    if (titleInput) titleInput.value = extracted.title || `Contrato de ${mod.name} - BSC`;

    const partyInput = document.getElementById('editClassifiedParty');
    if (partyInput) partyInput.value = extracted.counterparty || '';

    const valueInput = document.getElementById('editClassifiedValue');
    if (valueInput) valueInput.value = extracted.value || 0;

    const startInput = document.getElementById('editClassifiedStart');
    if (startInput) startInput.value = extracted.startDate || '';

    const endInput = document.getElementById('editClassifiedEnd');
    if (endInput) endInput.value = extracted.endDate || '';

    const riskSelect = document.getElementById('editClassifiedRisk');
    if (riskSelect) riskSelect.value = extracted.riskLevel || 'medium';
  }

  saveClassifiedContract() {
    if (!this.currentClassification) return;

    const moduleKey = document.getElementById('editClassifiedModule').value;
    const title = document.getElementById('editClassifiedTitle').value;
    const counterparty = document.getElementById('editClassifiedParty').value;
    const value = parseFloat(document.getElementById('editClassifiedValue').value) || 0;
    const startDate = document.getElementById('editClassifiedStart').value;
    const endDate = document.getElementById('editClassifiedEnd').value;
    const riskLevel = document.getElementById('editClassifiedRisk').value;

    const prefixMap = {
      jugadores: 'BSC-JUG',
      auspicios: 'BSC-AUS',
      administradores: 'BSC-ADM',
      creditos: 'BSC-CRE',
      licencias: 'BSC-LIC',
      acuerdos_pago: 'BSC-ACP',
      proveedores: 'BSC-PRO'
    };

    const nextNum = String(this.contracts.filter(c => c.module === moduleKey).length + 1).padStart(3, '0');
    const newId = `${prefixMap[moduleKey] || 'BSC-LEG'}-2026-${nextNum}`;

    const newContract = {
      id: newId,
      title: title || `Contrato Oficial BSC`,
      module: moduleKey,
      counterparty: counterparty || 'Contraparte Registrada',
      typeDetail: `Instrumento Legal clasificado automáticamente (${this.currentClassification.confidence}% certeza)`,
      value: value,
      currency: 'USD',
      startDate: startDate || new Date().toISOString().split('T')[0],
      endDate: endDate || '2027-12-31',
      status: 'in_review',
      riskLevel: riskLevel,
      responsibleLawyer: 'Abg. Carlos Mendoza (Director Jurídico BSC)',
      description: `Contrato registrado mediante el Clasificador Inteligente de BSC CONTRACTS. ${this.currentClassification.rationale}`,
      clauses: this.currentClassification.extractedData.detectedClauses || [
        { number: '1', title: 'Objeto Contractual', text: 'Estipulación principal extraída del documento original analizado por el sistema legal.' },
        { number: '2', title: 'Vigencia y Jurisdicción', text: 'Sometimiento a las leyes de la República del Ecuador y tribunales competentes de Guayaquil.' }
      ],
      auditTrail: [
        {
          date: new Date().toLocaleString('es-EC'),
          user: 'Abg. Carlos Mendoza (Legal BSC)',
          action: `Contrato clasificado e ingresado en Módulo "${BSC_MODULES[moduleKey].name}" con ${this.currentClassification.confidence}% de certeza.`
        }
      ],
      metadata: {
        analisisInteligente: 'Aprobado por Motor NLP BSC',
        certeza: `${this.currentClassification.confidence}%`
      }
    };

    this.contracts.unshift(newContract);
    this.saveContracts();
    this.closeClassifierModal();

    // Navegar y resaltar en el módulo correspondiente
    this.setModule(moduleKey);
    this.showToast(`¡Contrato clasificado y guardado con éxito en Módulo: ${BSC_MODULES[moduleKey].name}!`, 'success');
  }

  // ==========================================================================
  // CONTRACT LIFECYCLE MANAGEMENT (Ironclad Workflow)
  // ==========================================================================
  advanceStage(contractId) {
    const contract = this.contracts.find(c => c.id === contractId);
    if (!contract) return;

    const stages = ['draft', 'in_review', 'approval', 'signature', 'active', 'expiring'];
    const currentIndex = stages.indexOf(contract.status);

    let nextIndex = (currentIndex + 1) % stages.length;
    const newStatus = stages[nextIndex];
    contract.status = newStatus;

    const stageNames = {
      draft: 'Borrador',
      in_review: 'Revisión Legal',
      approval: 'Aprobación de Directorio',
      signature: 'Pendiente de Firma',
      active: 'Vigente / Activo',
      expiring: 'Próximo a Vencer'
    };

    contract.auditTrail = contract.auditTrail || [];
    contract.auditTrail.unshift({
      date: new Date().toLocaleString('es-EC'),
      user: 'Equipo Legal BSC',
      action: `Etapa de ciclo de vida avanzada a: ${stageNames[newStatus]}`
    });

    this.saveContracts();
    this.showToast(`Estado de "${contract.id}" actualizado a: ${stageNames[newStatus]}`, 'info');

    if (this.selectedContract && this.selectedContract.id === contractId) {
      this.openDrawer(contractId);
    }
  }

  // ==========================================================================
  // DRAWER INSPECTOR (Redlining & Key Terms)
  // ==========================================================================
  openDrawer(contractId) {
    const contract = this.contracts.find(c => c.id === contractId);
    if (!contract) return;

    this.selectedContract = contract;
    const drawer = document.getElementById('contractDrawer');
    const overlay = document.getElementById('drawerOverlay');

    if (drawer && overlay) {
      this.renderDrawerContent(contract);
      drawer.classList.add('active');
      overlay.classList.add('active');
    }
  }

  closeDrawer() {
    const drawer = document.getElementById('contractDrawer');
    const overlay = document.getElementById('drawerOverlay');
    if (drawer && overlay) {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
    }
    this.selectedContract = null;
  }

  renderDrawerContent(contract) {
    const mod = BSC_MODULES[contract.module] || { name: contract.module, badgeClass: 'badge-yellow' };
    const formattedVal = new Intl.NumberFormat('en-US', { style: 'currency', currency: contract.currency || 'USD' }).format(contract.value || 0);

    document.getElementById('drawerContractCode').textContent = contract.id;
    document.getElementById('drawerContractTitle').textContent = contract.title;

    // Render Lifecycle Stepper
    this.renderLifecycleStepper(contract.status);

    // Meta Grid in Drawer
    let metaHtml = `
      <div style="background: var(--bsc-black-850); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 16px; margin-bottom: 20px;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 0.8rem;">
          <div><strong style="color: var(--text-muted);">Módulo CLM:</strong> <span class="category-badge ${mod.badgeClass}">${mod.name}</span></div>
          <div><strong style="color: var(--text-muted);">Contraparte:</strong> <span style="color: var(--text-primary);">${contract.counterparty}</span></div>
          <div><strong style="color: var(--text-muted);">Cuantía Total:</strong> <span style="color: var(--bsc-yellow-primary); font-weight: 700;">${formattedVal}</span></div>
          <div><strong style="color: var(--text-muted);">Nivel de Riesgo:</strong> ${this.formatRiskBadge(contract.riskLevel)}</div>
          <div><strong style="color: var(--text-muted);">Vigencia:</strong> ${contract.startDate} al ${contract.endDate}</div>
          <div><strong style="color: var(--text-muted);">Abogado Asignado:</strong> ${contract.responsibleLawyer || 'Departamento Legal BSC'}</div>
        </div>
      </div>
    `;
    document.getElementById('drawerMetaBox').innerHTML = metaHtml;

    // Render Clauses
    const clausesBox = document.getElementById('drawerClausesBox');
    if (clausesBox) {
      if (contract.clauses && contract.clauses.length > 0) {
        let cHtml = '';
        contract.clauses.forEach(cl => {
          cHtml += `
            <div class="clause-card">
              <div class="clause-card-header">${cl.number ? `Cláusula ${cl.number}: ` : ''}${cl.title}</div>
              <div class="clause-card-text">${cl.text}</div>
            </div>
          `;
        });
        clausesBox.innerHTML = cHtml;
      } else {
        clausesBox.innerHTML = `<p style="font-size: 0.8rem; color: var(--text-muted);">Cláusulas contractuales resumidas en archivo anexo.</p>`;
      }
    }

    // Render Audit Trail
    const auditBox = document.getElementById('drawerAuditBox');
    if (auditBox) {
      if (contract.auditTrail && contract.auditTrail.length > 0) {
        let aHtml = '';
        contract.auditTrail.forEach(item => {
          aHtml += `
            <div class="audit-item">
              <div class="audit-dot"></div>
              <div class="audit-content">
                <h5>${item.action}</h5>
                <p>${item.date} • Por: ${item.user}</p>
              </div>
            </div>
          `;
        });
        auditBox.innerHTML = aHtml;
      } else {
        auditBox.innerHTML = `<p style="font-size: 0.8rem; color: var(--text-muted);">Sin historial de cambios reciente.</p>`;
      }
    }
  }

  renderLifecycleStepper(status) {
    const stepper = document.getElementById('lifecycleStepper');
    if (!stepper) return;

    const stages = [
      { id: 'draft', label: 'Borrador' },
      { id: 'in_review', label: 'Revisión Legal' },
      { id: 'approval', label: 'Directorio' },
      { id: 'signature', label: 'Firma' },
      { id: 'active', label: 'Vigente' }
    ];

    const currentIdx = stages.findIndex(s => s.id === status);

    let html = '';
    stages.forEach((st, idx) => {
      let stateClass = '';
      if (idx < currentIdx) stateClass = 'completed';
      else if (idx === currentIdx) stateClass = 'active';

      html += `
        <div class="step-item ${stateClass}" onclick="app.setSpecificStage('${st.id}')">
          <div class="step-circle">${idx < currentIdx ? '✓' : idx + 1}</div>
          <span class="step-label">${st.label}</span>
        </div>
      `;
    });

    stepper.innerHTML = html;
  }

  setSpecificStage(newStageId) {
    if (!this.selectedContract) return;
    this.selectedContract.status = newStageId;
    this.selectedContract.auditTrail = this.selectedContract.auditTrail || [];
    this.selectedContract.auditTrail.unshift({
      date: new Date().toLocaleString('es-EC'),
      user: 'Abg. Carlos Mendoza (Legal BSC)',
      action: `Cambio manual de etapa a: ${newStageId.toUpperCase()}`
    });
    this.saveContracts();
    this.renderLifecycleStepper(newStageId);
    this.showToast(`Etapa actualizada a ${newStageId.toUpperCase()}`, 'info');
  }

  printContractSummary() {
    if (!this.selectedContract) return;
    window.print();
  }

  // ==========================================================================
  // REFERENCE MODAL ("COMUNICADO OFICIAL")
  // ==========================================================================
  openReferenceModal() {
    const modal = document.getElementById('referenceModal');
    if (modal) modal.classList.add('active');
  }

  closeReferenceModal() {
    const modal = document.getElementById('referenceModal');
    if (modal) modal.classList.remove('active');
  }

  // ==========================================================================
  // UTILITIES & EXPORTS
  // ==========================================================================
  exportToCSV() {
    const headers = ['ID', 'Modulo', 'Titulo', 'Contraparte', 'Cuantia_USD', 'Fecha_Inicio', 'Fecha_Fin', 'Estado', 'Riesgo'];
    const rows = this.contracts.map(c => [
      c.id,
      BSC_MODULES[c.module]?.name || c.module,
      `"${(c.title || '').replace(/"/g, '""')}"`,
      `"${(c.counterparty || '').replace(/"/g, '""')}"`,
      c.value || 0,
      c.startDate || '',
      c.endDate || '',
      c.status || '',
      c.riskLevel || ''
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `BSC_CONTRACTS_REPOSITORIO_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.showToast('Reporte CSV generado exitosamente.', 'success');
  }

  showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span style="color: var(--bsc-yellow-primary); font-weight: 800;">BSC Legal:</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
}

// Inicialización global de la aplicación
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new BSCContractsApp();
});
