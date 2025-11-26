export const businessInfo = {
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

export const fillings = [
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

export const products = [
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
                    { label: "20 cm – 15/20 porciones ($48.000)", price: 48000 }
                ]
            }
        ]
    },
    {
        id: "chocotorta-deco",
        name: "Chocotorta Deco 🍫🟪",
        price: 48000, // Base price for smallest size
        description: "Capas intercaladas de crema chocotorta (queso crema y dulce de leche) y galletitas chocolinas, decorada con drip de chocolate (efecto chorreado 💧) y chocolatines de color a elección (hasta dos variedades).",
        image: "imgs/chocotorta deco.jpg",
        category: "Tortas",
        options: [
            {
                name: "Tamaño",
                type: "select",
                choices: [
                    { label: "16 cm – 10/12 porciones ($48.000)", price: 48000 },
                    { label: "20 cm – 15/20 porciones ($52.000)", price: 52000 }
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
                    { label: "15 cm (10–12 porciones) - Base ($45.000)", price: 45000 },
                    { label: "15 cm (10–12 porciones) - Deco Personalizada ($40.000)", price: 40000 }, // Wait, the prompt says "Decoración personalizada... -> ARS 40.000". This seems to be the PRICE of the cake with that deco, or an EXTRA? 
                    // Re-reading prompt: "Precios base... 15cm -> 45.000". "Decoración personalizada... 15cm -> 40.000". 
                    // This is confusing. Usually custom deco is MORE expensive. 
                    // Let's look at the numbers: Base 45k, Deco 40k. Base 55k, Deco 50k. Base 70k, Deco 60k.
                    // Maybe "Decoración personalizada" listed there is the COST of the decoration itself? Or maybe it's a cheaper option?
                    // "El valor de la torta depende del tamaño y decoración que necesites."
                    // Actually, looking at "Tortas personalizadas – Forradas": Base 55k, Deco 60k. Base 70k, Deco 80k. Here Deco is HIGHER.
                    // In Ganache: Base 45k, Deco 40k. Base 55k, Deco 50k. Base 70k, Deco 60k.
                    // It's weird that "Deco personalizada" is CHEAPER than "Precio base" for Ganache.
                    // Maybe "Precio base" INCLUDES some standard deco?
                    // Or maybe I should treat them as two different price tiers.
                    // Let's assume they are mutually exclusive options for the final price.
                    // Option A: Base Price (Simple/Standard). Option B: Custom Deco Price.
                    // But for Ganache, Custom is cheaper? That's odd.
                    // Let's re-read carefully:
                    // "Precios base (dependen del tamaño): 15cm -> 45.000..."
                    // "Decoración personalizada (depende del tamaño): 15cm -> 40.000..."
                    // Could it be that the "Decoración personalizada" is an ADDITIONAL cost?
                    // "El valor de la torta depende del tamaño y decoración que necesites."
                    // If it was additional, 45+40 = 85k. That sounds reasonable for a custom cake.
                    // For Forradas: Base 55k. Deco 60k. Total 115k?
                    // Let's look at the text again.
                    // "Precios base... 15cm -> 45.000"
                    // "Decoración personalizada... 15cm -> 40.000"
                    // If I look at Forradas: Base 55k. Deco 60k.
                    // If it's additive, it makes sense.
                    // If it's replacement, why would custom be cheaper for Ganache?
                    // I will assume it is ADDITIVE (Base + Deco tier).
                    // Wait, "Precios base... 15cm -> 45.000". This likely covers the cake itself + simple sealing.
                    // "Decoración personalizada... 15cm -> 40.000". This likely covers the complex decoration work.
                    // So total = Base + Deco.
                    // Let's implement it as: Base Price is fixed per size. Then user chooses "Tipo de Decoración": "Básica (Incluida)" or "Personalizada (+$40.000)".
                    // BUT, the prompt lists "Decoración personalizada" with a price list. It doesn't explicitly say "Adicional".
                    // However, for "Galletas", it says "Por un valor adicional de $2.000".
                    // Here it lists "Precios base" and "Decoración personalizada" as two separate blocks.
                    // Let's assume they are separate categories of PRICING, i.e., "If you want a base cake it's X, if you want custom deco it's Y".
                    // But again, Custom < Base for Ganache is weird.
                    // Let's look at the numbers again.
                    // Ganache: Base 45, Custom 40. (Custom is -5k)
                    // Forradas: Base 55, Custom 60. (Custom is +5k)
                    // This inconsistency suggests maybe "Decoración personalizada" IS the price for that tier?
                    // Maybe the "Base" for Ganache is actually more expensive because... I don't know.
                    // Let's assume the user made a typo or I'm misunderstanding.
                    // OR, maybe "Decoración personalizada" is the EXTRA cost.
                    // If I assume it's EXTRA:
                    // Ganache 15cm: 45k (cake) + 40k (deco) = 85k.
                    // Forrada 15cm: 55k (cake) + 60k (deco) = 115k.
                    // This seems consistent with "Professional Custom Cakes".
                    // I will implement it as an ADD-ON option. "Agregar Decoración Personalizada".
                    
                    { label: "15 cm (10–12 porciones)", price: 45000, customDecoPrice: 40000 },
                    { label: "20 cm (15–20 porciones)", price: 55000, customDecoPrice: 50000 },
                    { label: "24 cm (25–30 porciones)", price: 70000, customDecoPrice: 60000 }
                ]
            },
            {
                name: "Nivel de Decoración",
                type: "select",
                choices: [
                    { label: "Estándar / Simple (Precio Base)", priceMod: 0 },
                    { label: "Personalizada (Ver costos arriba)", isDynamic: true } // Logic will handle this based on size
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
                choices: "FILLINGS_REFERENCE" // Will replace in code
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
                    { label: "15 cm (10–12 porciones)", price: 55000, customDecoPrice: 60000 },
                    { label: "20 cm (15–20 porciones)", price: 70000, customDecoPrice: 80000 },
                    { label: "24 cm (25–30 porciones)", price: 90000, customDecoPrice: 100000 }
                ]
            },
            {
                name: "Nivel de Decoración",
                type: "select",
                choices: [
                    { label: "Estándar / Simple (Precio Base)", priceMod: 0 },
                    { label: "Personalizada (Ver costos arriba)", isDynamic: true }
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
