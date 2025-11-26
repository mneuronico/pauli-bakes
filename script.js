// --- DATA ---
const businessInfo = {
    name: "Pauli Bakes",
    slogan: "Tus sueños se convierten en torta ✨",
    whatsapp: "+5491167842994", // Formatted for link
    whatsappDisplay: "+54 9 11 6784-2994",
    email: "pauli.bakes@gmail.com",
    instagram: "@pauli.bakes",
    location: "Villa Crespo, CABA, Argentina",
    pickupInfo: "Actualmente no cuento con servicio de envíos, por lo que los pedidos se retiran por Villa Crespo, CABA. O podés enviar al servicio de mensajería de tu preferencia a retirar.",
    bookingInfo: "Los pedidos se realizan con un mínimo de 4 días de anticipación. (Sujeto a disponibilidad). La fecha se reserva con una seña del 50% del total. Si recibiste presupuesto pero querés señarlo transcurridos varios días, puede que la disponibilidad o el presupuesto se haya modificado. Por favor, confirmá conmigo antes de realizar la seña."
};

const fillings = [
    "Marroc (Ganache de choco con pasta de maní)",
    "Choco Orange (Ganache de chocolate semi amargo con ralladura de naranja)",
    "Frutos Rojos (Ganache de chocolate blanco con pulpa de frutos rojos)",
    "Limón (Ganache de chocolate blanco con jugo de limón)",
    "Café (Ganache de chocolate blanco y café)",
    "Dulce de Leche solo",
    "Dulce de Leche con chips de chocolate",
    "Dulce de Leche con Oreos",
    "Dulce de Leche con nueces y maní",
    "Ganache Chocolate Blanco",
    "Ganache Chocolate Semi Amargo",
    "Crema Bariloche (Ganache de chocolate con dulce de leche)",
    "Oreo (Ganache de chocolate blanco con trozos de galletas Oreo)",
    "Block (Ganache de chocolate semi amargo con maní tostado)"
];

const products = [
    {
        id: "cheesecake",
        name: "Cheesecake 🍓",
        price: 50000,
        description: "Cheesecake sin horno con base de galletitas (vainilla ó chocolate), decorada con reducción de frutos rojos.",
        image: "imgs/cheesecake.jpg",
        category: "Tortas",
        options: [
            {
                name: "Base",
                type: "select",
                choices: ["Vainilla", "Chocolate"]
            }
        ]
    },
    {
        id: "lemon-pau",
        name: "Lemon Pau 💛",
        price: 45000,
        description: "Base de masa sablée, rellena de curd de limón decorada con merengue italiano.",
        image: "imgs/lemon pau.jpg",
        category: "Tortas"
    },
    {
        id: "torta-brownie",
        name: "Torta Brownie 🍫🟪",
        price: 45000,
        description: "Base de brownie (con ó sin nueces), mucho dulce de leche y merengue italiano.",
        image: "imgs/brownie.jpg",
        category: "Tortas",
        options: [
            {
                name: "Nueces",
                type: "select",
                choices: ["Con nueces", "Sin nueces"]
            }
        ]
    },
    {
        id: "torta-brownie-deco",
        name: "Torta Brownie Deco 🍫🟪",
        price: 50000,
        description: "Base de brownie (con o sin nueces), mucho dulce de leche, merengue italiano, decorada con chocolatines de color a elección (hasta dos variedades).",
        image: "imgs/brownie deco.jpg",
        category: "Tortas",
        options: [
            {
                name: "Nueces",
                type: "select",
                choices: ["Con nueces", "Sin nueces"]
            },
            {
                name: "Color Chocolatines 1",
                type: "text",
                placeholder: "Ej: Rosa"
            },
            {
                name: "Color Chocolatines 2",
                type: "text",
                placeholder: "Ej: Blanco"
            },
            {
                name: "Decoración Personalizada",
                type: "textarea",
                placeholder: "Contame tu idea y la presupuestamos..."
            }
        ]
    },
    {
        id: "box-personalizada",
        name: "BOX Personalizada 💝",
        price: 60000,
        description: "BOX surtida ideal para compartir ✨\nContiene:\n• Chocotorta decorada con chocolatines.\n• 4 Cookies.\n• 4 Alfajorcitos de maicena.\n• 4 Scons de queso.\n• 2 Oreos bañadas en chocolate y decoradas.\n\nLas Oreos se pueden personalizar con diseño que más te guste! Contame tu idea y lo hacemos realidad 🖌️🎨",
        image: "imgs/box personalizada.jpg",
        category: "Box Dulce",
        options: [
            {
                name: "Idea para Oreos",
                type: "textarea",
                placeholder: "Describí el diseño para las Oreos..."
            }
        ]
    },
    {
        id: "galletas-personalizadas",
        name: "Galletas personalizadas 🖌️🎨",
        price: 65000,
        description: "Galletas de masa sablée personalizadas con pasta de azúcar acorde a la temática (hasta 4 motivos diferentes).\nPresentadas en cajita por docena ✨\nIdeales para regalar o souvenirs 💝",
        image: "imgs/cookies personalizadas.jpg",
        category: "Cookies",
        options: [
            {
                name: "Temática/Motivos",
                type: "textarea",
                placeholder: "Describí la temática y los 4 motivos..."
            },
            {
                name: "Presentación",
                type: "select",
                choices: [
                    { label: "En cajita (Estándar)", priceMod: 0 },
                    { label: "Embolsadas individualmente (+$2.000)", priceMod: 2000 }
                ]
            }
        ]
    },
    {
        id: "chocotorta",
        name: "Chocotorta 🍫🟪",
        price: 42000, // Base price for smallest size
        description: "Capas intercaladas de crema chocotorta (queso crema y dulce de leche) y galletitas chocolinas, decorada con dulce de leche.",
        image: "imgs/chocotorta.jpg",
        category: "Tortas",
        options: [
            {
                name: "Tamaño",
                type: "select",
                choices: [
                    { label: "16 cm – 10/12 porciones ($42.000)", price: 42000 },
                    { label: "20 cm – 15/20 porciones ($60.000)", price: 60000 }
                ]
            }
        ]
    },
    {
        id: "chocotorta-deco",
        name: "Chocotorta Deco 🍫🟪",
        price: 52000, // Base price for smallest size
        description: "Capas intercaladas de crema chocotorta (queso crema y dulce de leche) y galletitas chocolinas, decorada con drip de chocolate (efecto chorreado 💧) y chocolatines de color a elección (hasta dos variedades).",
        image: "imgs/chocotorta deco.jpg",
        category: "Tortas",
        options: [
            {
                name: "Tamaño",
                type: "select",
                choices: [
                    { label: "16 cm – 10/12 porciones ($52.000)", price: 52000 },
                    { label: "20 cm – 15/20 porciones ($72.000)", price: 72000 }
                ]
            },
            {
                name: "Color Chocolatines 1",
                type: "text",
                placeholder: "Ej: Dorado"
            },
            {
                name: "Color Chocolatines 2",
                type: "text",
                placeholder: "Ej: Negro"
            },
            {
                name: "Decoración Personalizada",
                type: "textarea",
                placeholder: "Contame tu idea y la hacemos realidad..."
            }
        ]
    },
    {
        id: "number-cake",
        name: "Number Cake 🔟",
        price: 68000,
        description: "Base de brownie (con o sin nueces), mucho dulce de leche, merengue italiano, decorada con chocolatines de color a elección (hasta dos variedades).\nEl valor corresponde a las dos cifras.\nCada número tiene un rinde aproximado de 10–12 porciones.",
        image: "imgs/number cake.jpg",
        category: "Tortas Tendencia",
        options: [
            {
                name: "Números",
                type: "text",
                placeholder: "Ej: 25"
            },
            {
                name: "Nueces",
                type: "select",
                choices: ["Con nueces", "Sin nueces"]
            },
            {
                name: "Color Chocolatines 1",
                type: "text",
                placeholder: "Ej: Azul"
            },
            {
                name: "Color Chocolatines 2",
                type: "text",
                placeholder: "Ej: Plata"
            },
            {
                name: "Decoración Personalizada",
                type: "textarea",
                placeholder: "Contame tu idea y la presupuestamos..."
            }
        ]
    },
    {
        id: "letter-cake",
        name: "Letter / Number Cake 🅰️",
        price: 62000,
        description: "Letra de base brownie (con o sin nueces), mucho dulce de leche, merengue italiano, decorada con chocolatines de color a elección (hasta dos variedades).\nPresentada en bandeja de 30x30 cm.\nTiene un rinde aproximado de 15 porciones.",
        image: "imgs/letter cake.jpg",
        category: "Tortas Tendencia",
        options: [
            {
                name: "Letra/Número",
                type: "text",
                placeholder: "Ej: A"
            },
            {
                name: "Nueces",
                type: "select",
                choices: ["Con nueces", "Sin nueces"]
            },
            {
                name: "Color Chocolatines 1",
                type: "text",
                placeholder: "Ej: Rosa"
            },
            {
                name: "Color Chocolatines 2",
                type: "text",
                placeholder: "Ej: Violeta"
            },
            {
                name: "Decoración Personalizada",
                type: "textarea",
                placeholder: "Contame tu idea y la presupuestamos..."
            }
        ]
    },
    {
        id: "tabla-surtida",
        name: "Tabla de pastelería surtida",
        price: 120000, // Base price
        description: "Piezas de pastelería surtida de 6x6 cm. Ideal para complementar tu mesa dulce.\nPodés elegir 4 ó hasta 5 variedades de tortas entre los diferentes sabores:\n🍋 Lemon pie\n🍓 Cheesecake\n🍫 Chocotorta\n🍫🟪 Torta Brownie\n🍏 Manzana\n🥕 Carrot cake\n🍫🟪 Havannete\n\nPresentadas en bandeja rígida de MDF.",
        image: "imgs/tabla surtida.jpg",
        category: "Mesa Dulce",
        options: [
            {
                name: "Cantidad",
                type: "select",
                choices: [
                    { label: "20 piezas ($120.000)", price: 120000 },
                    { label: "30 piezas ($170.000)", price: 170000 },
                    { label: "40 piezas ($220.000)", price: 220000 }
                ]
            },
            {
                name: "Variedades (Elegir 4 o 5)",
                type: "textarea",
                placeholder: "Ej: Lemon pie, Chocotorta, Brownie, Carrot cake"
            }
        ]
    },
    {
        id: "cookies",
        name: "Cookies 🍪",
        price: 25000, // Base price
        description: "Riquísimas variedades de cookies para elegir:\n🍪 Classic: Clásica galleta de vainilla con trozos de chocolate semi amargo.\n🍪 De la casa: Galleta con un toque de canela, trozos de chocolate semi amargo y nuez.\n🍪 Choco: Galleta de chocolate con trozos de chocolate blanco.\n🍋 Limón: Galleta azucarada de limón.\n🥕 Carrot: Galleta especiada de zanahoria con nuez, decorada con glasé.\n🍪 Frambuesa: Galleta con frambuesas y chocolate blanco.\n\nPresentadas en caja por Docena.",
        image: "imgs/cookies.jpg",
        category: "Cookies",
        options: [
            {
                name: "Cantidad",
                type: "select",
                choices: [
                    { label: "x6 ($25.000)", price: 25000 },
                    { label: "x12 ($40.000)", price: 40000 }
                ]
            },
            {
                name: "Sabores",
                type: "textarea",
                placeholder: "Elegí tus sabores..."
            }
        ]
    },
    {
        id: "torta-ganache",
        name: "Tortas personalizadas – Ganache 🍫🟪🎨",
        price: 45000, // Base price
        description: "Bizcocho de Vainilla ó chocolate, con dos variedad de rellenos a elección. Sellada y decorada con ganache de chocolate blanco, coloreado a elección 🌈☁️. El valor depende del tamaño y decoración.",
        image: "imgs/ganache personalizada.jpg",
        category: "Tortas Personalizadas",
        options: [
            {
                name: "Tamaño",
                type: "select",
                choices: [
                    { label: "15 cm (10–12 porciones) - Base ($45.000)", price: 45000, customDecoExtra: 40000 },
                    { label: "20 cm (15–20 porciones) - Base ($55.000)", price: 55000, customDecoExtra: 50000 },
                    { label: "24 cm (25–30 porciones) - Base ($70.000)", price: 70000, customDecoExtra: 60000 }
                ]
            },
            {
                name: "Nivel de Decoración",
                type: "select",
                choices: [
                    { label: "Estándar / Simple (Precio Base)", priceMod: 0 },
                    { label: "Personalizada (+ deco a medida)", isDynamic: true }
                ]
            },
            {
                name: "Bizcocho",
                type: "select",
                choices: ["Vainilla", "Chocolate"]
            },
            {
                name: "Relleno 1",
                type: "select",
                choices: "FILLINGS_REFERENCE"
            },
            {
                name: "Relleno 2",
                type: "select",
                choices: "FILLINGS_REFERENCE"
            },
            {
                name: "Detalle Decoración",
                type: "textarea",
                placeholder: "Contame tu idea..."
            }
        ]
    },
    {
        id: "torta-forrada",
        name: "Tortas personalizadas – Forradas 🖌️🎨",
        price: 55000, // Base price
        description: "Bizcocho de Vainilla ó chocolate, con dos variedad de rellenos a elección. Sellada con ganache de chocolate semi amargo, y forrada y decorada con pasta de azúcar, y la temática elegida ✨. Los diseños están 100% pintados a mano 🖌️🎨.",
        image: "imgs/forrada personalizada.jpg",
        category: "Tortas Personalizadas",
        options: [
            {
                name: "Tamaño",
                type: "select",
                choices: [
                    { label: "15 cm (10–12 porciones)", price: 55000, customDecoExtra: 60000 },
                    { label: "20 cm (15–20 porciones)", price: 70000, customDecoExtra: 80000 },
                    { label: "24 cm (25–30 porciones)", price: 90000, customDecoExtra: 100000 }
                ]
            },
            {
                name: "Nivel de Decoración",
                type: "select",
                choices: [
                    { label: "Estándar / Simple (Precio Base)", priceMod: 0 },
                    { label: "Personalizada (+ deco a medida)", isDynamic: true }
                ]
            },
            {
                name: "Bizcocho",
                type: "select",
                choices: ["Vainilla", "Chocolate"]
            },
            {
                name: "Relleno 1",
                type: "select",
                choices: "FILLINGS_REFERENCE"
            },
            {
                name: "Relleno 2",
                type: "select",
                choices: "FILLINGS_REFERENCE"
            },
            {
                name: "Detalle Decoración",
                type: "textarea",
                placeholder: "Contame tu idea..."
            }
        ]
    }
];

const heroBackgrounds = [
    "imgs/showcase 1.jpg",
    "imgs/showcase 2.jpg",
    "imgs/showcase 3.jpg",
    "imgs/showcase 4.jpg",
    "imgs/showcase 5.jpg",
    "imgs/showcase 6.jpg"
];

// --- LOGIC ---

// State
let cart = JSON.parse(localStorage.getItem('pauliBakesCart')) || [];
let currentProduct = null;
let currentOptions = {};

// DOM Elements
const productGrid = document.getElementById('product-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('product-modal');
const closeModalBtn = document.getElementById('close-modal');
const addToCartBtn = document.getElementById('add-to-cart-btn');
const cartBtn = document.getElementById('cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalPriceEl = document.getElementById('cart-total-price');
const cartCountEl = document.getElementById('cart-count');
const checkoutBtn = document.getElementById('checkout-btn');
const navToggle = document.getElementById('nav-toggle');
const headerEl = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a');

// Initialize
function init() {
    renderProducts('all');
    updateCartUI();
    setupEventListeners();
    initHeroBackgroundRotation();
}

function initHeroBackgroundRotation() {
    const bgContainer = document.getElementById('hero-backgrounds');
    if (!bgContainer || heroBackgrounds.length === 0) return;

    heroBackgrounds.forEach((src, index) => {
        const frame = document.createElement('div');
        frame.className = 'hero-bg-frame';
        frame.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('${src}')`;
        if (index === 0) frame.classList.add('active');
        bgContainer.appendChild(frame);
    });

    const frames = bgContainer.querySelectorAll('.hero-bg-frame');
    if (frames.length <= 1) return;

    let current = 0;
    setInterval(() => {
        frames[current].classList.remove('active');
        current = (current + 1) % frames.length;
        frames[current].classList.add('active');
    }, 6000);
}

// Render Products
function renderProducts(category) {
    productGrid.innerHTML = '';

    const filteredProducts = category === 'all'
        ? products
        : products.filter(p => p.category === category);

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => openModal(product);

        // Find display price (lowest or base)
        let displayPrice = product.price;
        if (product.options) {
            const sizeOption = product.options.find(o => o.name === 'Tamaño' || o.name === 'Cantidad');
            if (sizeOption && sizeOption.choices[0].price) {
                displayPrice = sizeOption.choices[0].price;
            }
        }

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="card-img">
            <div class="card-content">
                <h3 class="card-title">${product.name}</h3>
                <div class="card-price">$${displayPrice.toLocaleString('es-AR')}</div>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Modal Logic
function openModal(product) {
    currentProduct = product;
    currentOptions = {};

    document.getElementById('modal-img').src = product.image;
    document.getElementById('modal-title').innerText = product.name;
    document.getElementById('modal-desc').innerText = product.description;

    const optionsContainer = document.getElementById('modal-options');
    optionsContainer.innerHTML = '';

    if (product.options) {
        product.options.forEach((option, index) => {
            const group = document.createElement('div');
            group.className = 'option-group';

            const label = document.createElement('label');
            label.innerText = option.name;
            group.appendChild(label);

            if (option.type === 'select') {
                const select = document.createElement('select');
                select.dataset.optionName = option.name;

                let choices = option.choices;
                if (choices === 'FILLINGS_REFERENCE') {
                    choices = fillings;
                }

                choices.forEach(choice => {
                    const opt = document.createElement('option');
                    if (typeof choice === 'string') {
                        opt.value = choice;
                        opt.innerText = choice;
                    } else {
                        // Object with label/price
                        opt.value = choice.label;
                        opt.innerText = choice.label;
                        if (choice.price) opt.dataset.price = choice.price;
                        if (choice.priceMod) opt.dataset.priceMod = choice.priceMod;
                        if (choice.customDecoExtra) opt.dataset.customDecoExtra = choice.customDecoExtra;
                        if (choice.isDynamic) opt.dataset.isDynamic = true;
                    }
                    select.appendChild(opt);
                });

                select.onchange = () => updateModalPrice();
                group.appendChild(select);

                // Set default
                currentOptions[option.name] = select.value;

            } else if (option.type === 'text' || option.type === 'textarea') {
                const input = document.createElement(option.type === 'textarea' ? 'textarea' : 'input');
                if (option.type === 'text') input.type = 'text';
                input.placeholder = option.placeholder;
                input.dataset.optionName = option.name;
                input.oninput = (e) => currentOptions[option.name] = e.target.value;
                group.appendChild(input);
            }

            optionsContainer.appendChild(group);
        });
    }

    updateModalPrice();
    modal.classList.add('active');
}

function updateModalPrice() {
    if (!currentProduct) return;

    let price = currentProduct.price;
    const selects = document.querySelectorAll('#modal-options select');

    // First pass: Determine base price (Size)
    let selectedSizeOption = null;

    selects.forEach(select => {
        const selectedOption = select.options[select.selectedIndex];
        if (selectedOption.dataset.price) {
            price = parseInt(selectedOption.dataset.price);
            // Store reference to size option if it has custom deco surcharge
            if (selectedOption.dataset.customDecoExtra) {
                selectedSizeOption = selectedOption;
            }
        }
        currentOptions[select.dataset.optionName] = select.value;
    });

    // Second pass: Apply modifiers and determine extra deco costs
    let applyCustomDeco = false;

    selects.forEach(select => {
        const selectedOption = select.options[select.selectedIndex];

        // Add-ons
        if (selectedOption.dataset.priceMod) {
            price += parseInt(selectedOption.dataset.priceMod);
        }

        if (selectedOption.dataset.isDynamic === 'true') {
            applyCustomDeco = true;
        }
    });

    if (applyCustomDeco && selectedSizeOption?.dataset.customDecoExtra) {
        price += parseInt(selectedSizeOption.dataset.customDecoExtra);
    }

    document.getElementById('modal-price').innerText = `$${price.toLocaleString('es-AR')}`;
    document.getElementById('add-to-cart-btn').dataset.finalPrice = price;
}

function closeModal() {
    modal.classList.remove('active');
    currentProduct = null;
}

// Cart Logic
function addToCart() {
    if (!currentProduct) return;

    const finalPrice = parseInt(document.getElementById('add-to-cart-btn').dataset.finalPrice);

    // Collect text inputs
    const inputs = document.querySelectorAll('#modal-options input, #modal-options textarea');
    inputs.forEach(input => {
        if (input.value.trim()) {
            currentOptions[input.dataset.optionName] = input.value.trim();
        }
    });

    const item = {
        id: Date.now(), // Simple ID
        product: currentProduct,
        options: { ...currentOptions },
        price: finalPrice
    };

    cart.push(item);
    saveCart();
    updateCartUI();
    closeModal();

    // Open cart feedback
    cartSidebar.classList.add('active');
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
}

function updateCartUI() {
    cartCountEl.innerText = cart.length;
    cartItemsContainer.innerHTML = '';

    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: #888; margin-top: 2rem;">Tu carrito está vacío</p>';
    } else {
        cart.forEach(item => {
            total += item.price;

            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';

            // Format options string
            let optionsStr = '';
            for (const [key, value] of Object.entries(item.options)) {
                if (value && value !== 'Sin nueces' && !value.includes('Estándar')) { // Filter out defaults if desired, or keep all
                    optionsStr += `<br>• ${key}: ${value}`;
                }
            }

            itemEl.innerHTML = `
                <img src="${item.product.image}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4>${item.product.name}</h4>
                    <div class="cart-item-price">$${item.price.toLocaleString('es-AR')}</div>
                    <div class="cart-item-options">${optionsStr}</div>
                    <div class="remove-item" onclick="window.removeItem(${item.id})">Eliminar</div>
                </div>
            `;
            cartItemsContainer.appendChild(itemEl);
        });
    }

    cartTotalPriceEl.innerText = `$${total.toLocaleString('es-AR')}`;
}

function saveCart() {
    localStorage.setItem('pauliBakesCart', JSON.stringify(cart));
}

// Checkout Logic
function checkout() {
    if (cart.length === 0) return;

    let message = `Hola Pauli Bakes! 👋\nQuiero realizar el siguiente pedido:\n\n`;
    let total = 0;

    cart.forEach((item, index) => {
        message += `*${index + 1}. ${item.product.name}*\n`;
        for (const [key, value] of Object.entries(item.options)) {
            message += `   - ${key}: ${value}\n`;
        }
        message += `   Precio: $${item.price.toLocaleString('es-AR')}\n\n`;
        total += item.price;
    });

    message += `*Total Estimado: $${total.toLocaleString('es-AR')}*\n\n`;
    message += `Espero confirmación de disponibilidad. Gracias!`;

    const url = `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Event Listeners
function setupEventListeners() {
    // Filters
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.dataset.category);
        });
    });

    // Modal
    closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Cart
    addToCartBtn.addEventListener('click', addToCart);
    cartBtn.addEventListener('click', () => cartSidebar.classList.add('active'));
    closeCartBtn.addEventListener('click', () => cartSidebar.classList.remove('active'));
    checkoutBtn.addEventListener('click', checkout);

    // Expose remove function globally
    window.removeItem = removeFromCart;

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const isOpen = headerEl.classList.toggle('nav-open');
            navToggle.setAttribute('aria-expanded', isOpen);
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            headerEl.classList.remove('nav-open');
            if (navToggle) {
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
}

// Run
document.addEventListener('DOMContentLoaded', init);
