/* ============================================
   SIDEBAR MODERNA - SYON SISTEMAS
   JavaScript funcional com Lucide Icons
   ============================================ */

// --- Icones SVG Lucide (inline) ---
const LUCIDE_ICONS = {
  // Navegacao
  home: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
  
  // Modulos
  package: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"></path><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>',
  users: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
  dollarSign: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>',
  shoppingCart: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>',
  factory: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8L8 13V8L2 13Z"></path><path d="M10 14v-4"></path><path d="M14 12v-2"></path><path d="M18 10V-2"></path></svg>',
  truck: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>',
  store: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M2 7h20"></path><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"></path></svg>',
  inbox: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>',
  userCheck: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>',
  globe: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>',
  barChart: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"></line><line x1="18" x2="18" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="16"></line></svg>',
  folder: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>',
  
  // Extras
  puzzle: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.315 8.685a.98.98 0 0 1 .837-.276c.47.07.802.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.446-.166-.855-.497-.925-.968a.979.979 0 0 1 .276-.837l1.61-1.61a2.404 2.404 0 0 1 1.705-.707c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.969a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"></path></svg>',
  helpCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>',
  
  // UI
  chevronRight: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg>',
  chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>',
  chevronLeft: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"></path></svg>',
  menu: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>',
  search: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>',
  x: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>',
  fileText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>',
  creditCard: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>',
  scale: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>',
  percent: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="5" y1="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>',
  user: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>'
};

// --- Estrutura de Dados da Navegacao ---
const NAVIGATION_DATA = [
  {
    id: 'inicio',
    label: 'Inicio',
    icon: 'home',
    url: 'index.html'
  },
  {
    id: 'modulos',
    section: 'Modulos',
    items: [
      {
        id: 'produtos',
        label: 'Produtos',
        icon: 'package',
        url: 'modulos/produtos/'
      },
      {
        id: 'clientes',
        label: 'Clientes',
        icon: 'users',
        url: 'modulos/clientes/'
      },
      {
        id: 'custos',
        label: 'Custos',
        icon: 'dollarSign',
        url: 'modulos/custos/'
      },
      {
        id: 'pedidos',
        label: 'Pedidos',
        icon: 'shoppingCart',
        url: 'modulos/pedidos/'
      },
      {
        id: 'producao',
        label: 'Producao',
        icon: 'factory',
        url: 'modulos/producao/'
      },
      {
        id: 'expedicao',
        label: 'Expedicao',
        icon: 'truck',
        url: 'modulos/expedicao/',
        children: [
          {
            id: 'expedicao-visao',
            label: 'Expedicao',
            icon: 'fileText',
            url: 'modulos/expedicao/index.html'
          },
          {
            id: 'nfe-debitos',
            label: 'NFe Debitos',
            icon: 'creditCard',
            url: 'modulos/expedicao/nfe-debitos/',
            children: [
              {
                id: 'nfe-debitos-visao',
                label: 'NFe Debitos',
                icon: 'fileText',
                url: 'modulos/expedicao/nfe-debitos/index.html'
              },
              {
                id: 'nfe',
                label: 'NFe',
                icon: 'fileText',
                url: 'modulos/expedicao/nfe-debitos/nfe.html'
              },
              {
                id: 'debito',
                label: 'Debito',
                icon: 'creditCard',
                url: 'modulos/expedicao/nfe-debitos/debito.html'
              },
              {
                id: 'multa',
                label: 'Multa',
                icon: 'scale',
                url: 'modulos/expedicao/nfe-debitos/multa.html'
              },
              {
                id: 'juros',
                label: 'Juros',
                icon: 'percent',
                url: 'modulos/expedicao/nfe-debitos/juros.html'
              }
            ]
          }
        ]
      },
      {
        id: 'compras',
        label: 'Compras',
        icon: 'store',
        url: 'modulos/compras/'
      },
      {
        id: 'recebimento',
        label: 'Recebimento',
        icon: 'inbox',
        url: 'modulos/recebimento/'
      },
      {
        id: 'pessoas',
        label: 'Pessoas',
        icon: 'userCheck',
        url: 'modulos/pessoas/'
      },
      {
        id: 'marketplace',
        label: 'Marketplace',
        icon: 'globe',
        url: 'modulos/marketplace/'
      },
      {
        id: 'indicadores',
        label: 'Indicadores',
        icon: 'barChart',
        url: 'modulos/indicadores/'
      },
      {
        id: 'arquivos',
        label: 'Arquivos',
        icon: 'folder',
        url: 'modulos/arquivos/'
      }
    ]
  },
  {
    id: 'extras-section',
    section: 'Outros',
    items: [
      {
        id: 'extras',
        label: 'Extras',
        icon: 'puzzle',
        url: 'extras.html'
      },
      {
        id: 'ajuda',
        label: 'Ajuda',
        icon: 'helpCircle',
        url: 'ajuda.html'
      }
    ]
  }
];

// --- Classe Principal da Sidebar ---
class SyonSidebar {
  constructor() {
    this.sidebar = null;
    this.overlay = null;
    this.hamburger = null;
    this.isCollapsed = false;
    this.isOpen = false;
    this.init();
  }

  // Inicializar
  init() {
    this.createSidebar();
    this.createOverlay();
    this.createHamburger();
    this.bindEvents();
    this.setActiveItem();
    this.loadState();
  }

  // Criar estrutura HTML da sidebar
  createSidebar() {
    // Verificar se ja existe
    const existing = document.querySelector('.sidebar');
    if (existing) existing.remove();

    this.sidebar = document.createElement('nav');
    this.sidebar.className = 'sidebar';
    this.sidebar.innerHTML = this.getSidebarHTML();
    document.body.appendChild(this.sidebar);

    // Inicializar icones Lucide
    this.initLucideIcons();
  }

  // HTML da sidebar
  getSidebarHTML() {
    return `
      <!-- Logo Section -->
      <div class="sidebar__logo">
        <div class="sidebar__logo-content">
          <div class="sidebar__logo-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
            </svg>
          </div>
          <span class="sidebar__logo-text">Syon Sistemas</span>
        </div>
        <button class="sidebar__toggle" id="sidebar-toggle" aria-label="Recolher menu">
          ${LUCIDE_ICONS.chevronLeft}
        </button>
      </div>

      <!-- Search Box -->
      <div class="sidebar__search">
        <div class="sidebar__search-wrapper">
          <span class="sidebar__search-icon">${LUCIDE_ICONS.search}</span>
          <input 
            type="text" 
            class="sidebar__search-input" 
            placeholder="Buscar..." 
            id="sidebar-search"
            autocomplete="off"
          />
          <span class="sidebar__search-shortcut">Ctrl+K</span>
        </div>
      </div>

      <!-- Navigation -->
      <div class="sidebar__nav" id="sidebar-nav">
        ${this.renderNavigation(NAVIGATION_DATA)}
      </div>

      <!-- Footer -->
      <div class="sidebar__footer">
        <div class="sidebar__footer-avatar">
          ${LUCIDE_ICONS.user}
        </div>
        <div class="sidebar__footer-info">
          <div class="sidebar__footer-name">Administrador</div>
          <div class="sidebar__footer-role">Admin</div>
        </div>
      </div>
    `;
  }

  // Renderizar navegacao recursivamente
  renderNavigation(items, level = 0) {
    return items.map(item => {
      if (item.section) {
        return `
          <div class="sidebar__section">
            <div class="sidebar__section-title">${item.section}</div>
            ${this.renderNavigation(item.items, level)}
          </div>
        `;
      }

      const hasChildren = item.children && item.children.length > 0;
      const tooltip = level === 0 ? `data-tooltip="${item.label}"` : '';

      return `
        <div class="sidebar__item ${hasChildren ? 'sidebar__item--parent' : ''}" data-id="${item.id}">
          <a 
            href="${item.url}" 
            class="sidebar__link" 
            ${tooltip}
            data-url="${item.url}"
          >
            <span class="sidebar__link-icon" data-lucide="${item.icon}"></span>
            <span class="sidebar__link-text">${item.label}</span>
            ${hasChildren ? `<span class="sidebar__expand-icon">${LUCIDE_ICONS.chevronRight}</span>` : ''}
          </a>
          ${hasChildren ? `
            <div class="sidebar__nested">
              ${this.renderNavigation(item.children, level + 1)}
            </div>
          ` : ''}
        </div>
      `;
    }).join('');
  }

  // Inicializar icones Lucide
  initLucideIcons() {
    const iconElements = this.sidebar.querySelectorAll('[data-lucide]');
    iconElements.forEach(el => {
      const iconName = el.getAttribute('data-lucide');
      if (LUCIDE_ICONS[iconName]) {
        el.innerHTML = LUCIDE_ICONS[iconName];
      }
    });
  }

  // Criar overlay para mobile
  createOverlay() {
    this.overlay = document.createElement('div');
    this.overlay.className = 'sidebar__overlay';
    document.body.appendChild(this.overlay);
  }

  // Criar botao hamburger para mobile
  createHamburger() {
    this.hamburger = document.createElement('button');
    this.hamburger.className = 'sidebar__hamburger';
    this.hamburger.innerHTML = LUCIDE_ICONS.menu;
    this.hamburger.setAttribute('aria-label', 'Abrir menu');
    document.body.appendChild(this.hamburger);
  }

  // Eventos
  bindEvents() {
    // Toggle sidebar
    const toggleBtn = document.getElementById('sidebar-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => this.toggle());
    }

    // Hamburger mobile
    if (this.hamburger) {
      this.hamburger.addEventListener('click', () => this.open());
    }

    // Overlay click
    if (this.overlay) {
      this.overlay.addEventListener('click', () => this.close());
    }

    // Expandable items
    this.sidebar.addEventListener('click', (e) => {
      const link = e.target.closest('.sidebar__link');
      if (!link) return;

      const item = link.closest('.sidebar__item');
      if (!item) return;

      const hasNested = item.querySelector('.sidebar__nested');
      if (hasNested) {
        e.preventDefault();
        this.toggleItem(item);
      }
    });

    // Search
    const searchInput = document.getElementById('sidebar-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => this.search(e.target.value));
    }

    // Ctrl+K shortcut
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (searchInput) searchInput.focus();
      }
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.close();
      }
    });

    // Close on resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        this.close();
      }
    });
  }

  // Toggle item expansao
  toggleItem(item) {
    const isExpanded = item.classList.contains('sidebar__item--expanded');
    
    // Fechar outros items no mesmo nivel
    const parent = item.parentElement;
    if (parent) {
      const siblings = parent.querySelectorAll(':scope > .sidebar__item--parent');
      siblings.forEach(sibling => {
        if (sibling !== item) {
          sibling.classList.remove('sidebar__item--expanded');
        }
      });
    }

    item.classList.toggle('sidebar__item--expanded', !isExpanded);
  }

  // Expandir item
  expandItem(item) {
    item.classList.add('sidebar__item--expanded');
    
    // Expandir pais recursivamente
    let parent = item.parentElement;
    while (parent) {
      if (parent.classList && parent.classList.contains('sidebar__item--parent')) {
        parent.classList.add('sidebar__item--expanded');
      }
      parent = parent.parentElement;
    }
  }

  // Definir item ativo
  setActiveItem() {
    const currentUrl = window.location.pathname;
    const links = this.sidebar.querySelectorAll('.sidebar__link');
    
    links.forEach(link => {
      link.classList.remove('sidebar__link--active');
      const url = link.getAttribute('data-url');
      
      if (url && currentUrl.includes(url.replace(/index\.html$/, '').replace(/\.html$/, ''))) {
        link.classList.add('sidebar__link--active');
        
        // Expandir pais
        const item = link.closest('.sidebar__item');
        if (item) {
          this.expandItem(item);
        }
      }
    });
  }

  // Busca
  search(query) {
    if (!query) {
      this.sidebar.querySelectorAll('.sidebar__item').forEach(item => {
        item.style.display = '';
      });
      return;
    }

    const lowerQuery = query.toLowerCase();
    this.sidebar.querySelectorAll('.sidebar__item').forEach(item => {
      const text = item.textContent.toLowerCase();
      const match = text.includes(lowerQuery);
      item.style.display = match ? '' : 'none';
      
      if (match) {
        // Expandir pais
        let parent = item.parentElement;
        while (parent) {
          if (parent.classList && parent.classList.contains('sidebar__item--parent')) {
            parent.style.display = '';
            parent.classList.add('sidebar__item--expanded');
          }
          parent = parent.parentElement;
        }
      }
    });
  }

  // Toggle sidebar
  toggle() {
    this.isCollapsed = !this.isCollapsed;
    this.sidebar.classList.toggle('sidebar--collapsed', this.isCollapsed);
    localStorage.setItem('sidebar-collapsed', this.isCollapsed);
  }

  // Abrir sidebar (mobile)
  open() {
    this.isOpen = true;
    this.sidebar.classList.add('sidebar--open');
    this.overlay.classList.add('sidebar__overlay--active');
    document.body.style.overflow = 'hidden';
  }

  // Fechar sidebar (mobile)
  close() {
    this.isOpen = false;
    this.sidebar.classList.remove('sidebar--open');
    this.overlay.classList.remove('sidebar__overlay--active');
    document.body.style.overflow = '';
  }

  // Carregar estado salvo
  loadState() {
    const saved = localStorage.getItem('sidebar-collapsed');
    if (saved === 'true') {
      this.isCollapsed = true;
      this.sidebar.classList.add('sidebar--collapsed');
    }
  }
}

// --- Inicializar ---
document.addEventListener('DOMContentLoaded', () => {
  // Remover sidebar do MkDocs
  const mkdocsSidebar = document.querySelector('.md-sidebar');
  if (mkdocsSidebar) {
    mkdocsSidebar.style.display = 'none';
  }

  // Criar nova sidebar
  new SyonSidebar();
});

// Exportar para uso externo
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SyonSidebar, LUCIDE_ICONS, NAVIGATION_DATA };
}
