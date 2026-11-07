/**
 * NANDITHA AQUARIUM – MAIN APPLICATION JAVASCRIPT
 * Bengaluru's Premier Retail Aquarium & Bird Shop
 * KR Puram, Bengaluru | WhatsApp: +91 96209 35209
 */

(function () {
    'use strict';

    // =========================================================================
    // 1. PRODUCT CATALOG DATABASE (Rich structured data with separate variants)
    // =========================================================================
    const productsData = [
        // --- A. AQUARIUM FISH ---
        {
            id: 'fish-betta-halfmoon',
            category: 'fish',
            categoryName: 'Aquarium Fish',
            name: 'Red Tail Shark',
            subtitle: 'Epalzeorhynchos bicolor • Striking Contrast',
            image: 'https://res.cloudinary.com/dfzk4sfkw/image/upload/v1793999139/Red-Tail-Shark2_zy5o3s.png',
            description: 'A striking freshwater aquarium fish featuring a deep black body and a vibrant red tail. Known for its active swimming behaviour and territorial nature. Best suited for a spacious aquarium with hiding spots, caves and driftwood.',
            specs: {
                'Care Level': 'Moderate',
                'Water Temp': '22°C – 26°C',
                'Diet': 'Omnivore – sinking pellets, algae wafers and occasional protein-rich foods',
                'Tank Size': 'Minimum 15 Litres'
            },
            variants: [
                { name: 'Pair', price: 130, label: 'Rs.130' },
            ],
            featured: true
        },
        {
            id: 'fish-guppy',
            category: 'fish',
            categoryName: 'Aquarium Fish',
            name: 'Guppy',
            subtitle: 'Poecilia reticulata',
            image: 'https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794000711/a53aee47-9dde-4f75-82b0-90065a019dc7.png',
            description: 'A beautiful fancy guppy featuring a shimmering golden-silver body and a vibrant yellow-orange tail decorated with distinctive black leopard-like spots. Its attractive colours and peaceful nature make it a popular choice for community aquariums.',
            specs: {
                'Care Level': 'Beginner Friendly',
                'Water Temp': '22°C – 28°C',
                'Breeding': 'Livebearer',
                'Diet': 'Omnivore / Micro Pellets'
            },
            variants: [
                { name: 'Pair', price: 50, label: 'Rs.50' },
            ],
            featured: true
        },
        {
            id: 'fish-guppy-imported',
            category: 'fish',
            categoryName: 'Aquarium Fish',
            name: 'Imported Guppy',
            subtitle: 'Poecilia reticulata',
            image: 'https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794001298/061b38d0-37a3-4f62-ac59-eb2689193d54.png',
            description: 'A beautiful fancy guppy featuring a shimmering golden-silver body and a vibrant yellow-orange tail decorated with distinctive black leopard-like spots. Its attractive colours and peaceful nature make it a popular choice for community aquariums.',
            specs: {
                'Care Level': 'Beginner Friendly',
                'Water Temp': '22°C – 28°C',
                'Breeding': 'Livebearer',
                'Diet': 'Omnivore / Micro Pellets'
            },
            variants: [
                { name: 'Pair', price: 150, label: 'Rs.150' },
            ],
            featured: true
        },
        {
            id: 'fish-goldfish-oranda',
            category: 'fish',
            categoryName: 'Aquarium Fish',
            name: 'Red Cap Oranda Goldfish',
            subtitle: 'Carassius auratus • Fancy Headgrowth',
            image: 'https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794001793/e083ee5f-67c6-46af-ae53-a2bef2bf0e4f.png',
            video: 'https://res.cloudinary.com/dfzk4sfkw/video/upload/v1794007622/From_Klickpin.com-_Curly_Hair_Tips_That_Feel_So_Put_Together_3385-pin-id-456763587232065547_nbdcib.mp4',
            description: 'A beautiful fancy goldfish featuring a pearly white body and a distinctive bright red fleshy head growth (wen). Its flowing fins, rounded body and graceful swimming movement make it an attractive centrepiece for freshwater aquariums.',
            specs: {
                'Care Level': 'Easy',
                'Water Temp': '18°C - 24°C',
                'Diet': 'Herbivore/Omnivore sinking pellets',
                'Life Span': '10+ Years'
            },
            variants: [
                { name: 'Small (Pair)', price: 60, label: 'Small' },
                { name: 'Medium (Pair)', price: 100, label: 'Medium' },
                { name: 'Large (Pair)', price: 300, label: 'Large' }
            ],
            featured: true
        },
        {
            id: 'fish-neon-tetra',
            category: 'fish',
            categoryName: 'Aquarium Fish',
            name: 'Neon Tetra',
            subtitle: 'Paracheirodon innesi • Electric Glow',
            image: 'https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794002276/b4dda770-2645-41bc-a9f0-25a6fa979a37.png',
            description: 'A beautiful and peaceful freshwater schooling fish featuring a brilliant iridescent blue stripe and a vibrant red stripe along its body. Its glowing colours and active swimming behaviour make it a popular choice for planted and community aquariums.',
            specs: {
                'Care Level': 'Easy',
                'Water Temp': '18°C - 24°C',
                'Diet': 'Herbivore/Omnivore sinking pellets',
                'Life Span': '10+ Years'
            },
            variants: [
                { name: 'Pair', price: 50, label: 'Rs.50' },
            ],
            featured: true
        },
        {
            id: 'fish-Zebra-Danio-Neon-GloLight',
            category: 'fish',
            categoryName: 'Aquarium Fish',
            name: 'Zebra Danio Neon GloLight',
            subtitle: 'Poecilia reticulata • Premium Quality',
            image: 'https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794003555/fe55bcb0-581b-46dc-a94a-363c3ca8c7d2.png',
            description: 'A vibrant and colourful freshwater schooling fish featuring brilliant fluorescent shades of green, orange, pink, yellow and blue. Known for its active swimming behaviour, peaceful temperament and glowing appearance under aquarium lighting. Perfect for planted and community aquariums.',
            specs: {
                'Care Level': 'Easy',
                'Water Temp': '22°C - 28°C',
                'Diet': 'Micro pellets & brine shrimp',
                'Origin': 'Thailand Import'
            },
            variants: [
                { name: 'Pair', price: 25, label: 'Rs.25' },
            ],
            featured: false
        },
        {
            id: 'fish-molly-balloon',
            category: 'fish',
            categoryName: 'Aquarium Fish',
            name: 'Dalmatian Balloon Molly',
            subtitle: 'Poecilia latipinna • Spotted Livebearer',
            image: 'https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794004123/e03e2388-1a19-46f8-a8f9-255fab82922e.png',
            description: 'Round-bellied, cheerful livebearers with black and white Dalmatian spotting. Voracious biofilm and algae grazers that keep glass clean.',
            specs: {
                'Care Level': 'Beginner',
                'Water Temp': '24°C - 28°C',
                'Behavior': 'Active & Peaceful',
                'Diet': 'Vegetable flakes,Micro pellets & spirulina'
            },
            variants: [
                { name: 'Pair', price: 50, label: 'Rs.50' }
            ],
            featured: false
        },
        {
            id: 'fish-Albino-Pacu',
            category: 'fish',
            categoryName: 'Aquarium Fish',
            name: 'Albino Pacu',
            subtitle: 'Piaractus brachypomus • Albino freshwater fish',
            image: 'https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794004666/bf0a9249-b844-4fac-a0f2-352fe2a7fbbb.png',
            description: 'Brilliant flame-gradient coloration fading into jet black fins. Extremely hardy and tolerant, ideal for beginners starting their first community aquarium.',
            specs: {
                'Care Level': 'Very Easy',
                'Water Temp': '20°C - 26°C',
                'Diet': 'Omnivore flakes',
                'Compatibility': 'All peaceful community fish'
            },
            variants: [
                { name: 'Single', price: 150, label: 'Rs.150' },
                { name: 'Pair', price: 300, label: 'Rs.300' }
            ],
            featured: false
        },
        {
            id: 'fish-Albino-Tiger-Oscar-Fish',
            category: 'fish',
            categoryName: 'Aquarium Fish',
            name: 'Albino Tiger Oscar Fish',
            subtitle: 'Astronotus ocellatus • Premium Quality',
            image: 'https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794005068/e0e5d2b3-d1d3-4934-949f-d340fbc1df81.png',
            images: [
                'https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794006391/2ec9ace3-9e58-4ae3-9b90-647bffbec5ef.png',
            ],
            description: 'A beautiful freshwater cichlid featuring a creamy white to pale pink body with distinctive red-orange tiger-like markings and striking reddish eyes. Known for its intelligent behaviour, bold personality and attractive appearance. A popular choice for large cichlid aquariums.',
            specs: {
                'Care Level': 'Moderate',
                'Diet': 'Cichlid pellets, Prawns, Insects & Occasional Vegetables',
                'Water Temp': '22°C - 26°C',
            },
            variants: [
                { name: 'Single', price: 275, label: 'Rs.275' },
                { name: 'Pair', price: 550, label: 'Rs.550 (Best Value)' }
            ],
            featured: true
        },
        {
            id: 'fish-common-goldfish',
            category: 'fish',
            categoryName: 'Aquarium Fish',
            name: 'Common Goldfish',
            subtitle: 'Carassius auratus',
            image: 'https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794007832/6aabf6ef-3849-46c9-ab0a-3990a1c6c02a.png',
            video: 'https://res.cloudinary.com/dfzk4sfkw/video/upload/v1794007930/125afdc2b765b9a3f966aafd00f5cfa0_b4k3ia.mp4',
            description: 'A popular freshwater aquarium fish featuring a bright golden-orange body, streamlined shape and flowing tail. Known for its active swimming behaviour and hardy nature, making it a classic choice for home aquariums and outdoor ponds.',
            specs: {
                'Care Level': 'Easy',
                'Water Temp': '18°C - 24°C',
                'Diet': 'Sinking pellets, Peas & occasional insects',
            },
            variants: [
                { name: 'Small (Pair)', price: 30, label: 'Small' },
                { name: 'Medium (Pair)', price: 120, label: 'Medium' },
                { name: 'Large (Pair)', price: 180, label: 'Large' }
            ],
            featured: false
        },
        {
            id: 'fish-Red-Tiger-Oscar',
            category: 'fish',
            categoryName: 'Aquarium Fish',
            name: 'Red Tiger Oscar',
            subtitle: 'Astronotus ocellatus • Red Tiger',
            image: 'https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794007119/8fd1b18a-d070-4ba9-ab77-ee88ab19b374.png',
            video: 'https://res.cloudinary.com/dfzk4sfkw/video/upload/v1794006345/755cfd48a49772f987e6b4d74bd93c21_qeudqz.mp4',
            description: 'A striking freshwater cichlid admired for its dramatic jet-black base colour accented with brilliant red-orange tiger-like stripes and captivating reddish eyes. Known for its bold, curious personality and ability to learn routines, making it a highly interactive aquarium centerpiece.',
            specs: {
                'Care Level': 'Moderate',
                'Diet': 'Cichlid pellets, Prawns, Insects & Occasional Vegetables',
                'Water Temp': '22°C - 26°C',
            },
            variants: [
                { name: 'Single', price: 275, label: 'Rs.275' },
                { name: 'Pair', price: 550, label: 'Rs.550 (Best Value)' }
            ],
            featured: false
        },
        {
            id: 'fish-alligator-gar',
            category: 'fish',
            categoryName: 'Aquarium Fish',
            name: 'Alligator Gar',
            subtitle: 'Atractosteus spatula • Ancient Predator',
            pricingType: 'enquiry', //pricingType: "fixed"
            image: 'https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794008575/dc0b3a0f-1d9b-4b41-ad8d-91cface52318.png',
            images: [
                'https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794008672/fc30626f-e7b9-4e15-9400-04b67e149beb.png',
                'https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794008643/002531ab-c236-4297-850e-e95822fab55f.png',
            ],
            description: 'A fascinating prehistoric-looking freshwater predator featuring an elongated body, powerful jaws and sharp teeth resembling an alligator. Its distinctive diamond-shaped scales and impressive appearance make it a remarkable species for large specialised aquatic exhibits.',
            specs: {
                'Care Level': 'Expert',
                'Diet': 'Fish, Prawns and Other Meaty Foods',
                'Water Temp': '22°C - 26°C',
            },
            variants: [
                { name: 'Single', label: 'Single' },
                { name: 'Pair', label: 'Pair' }
            ],
            featured: true
        },
        {
            id: "fish-japa-koi-karp",
            category: "fish",
            categoryName: "Aquarium Fish",
            name: "Japanese Koi Carp",
            subtitle: "Cyprinus rubrofuscus (Koi variety)",
            image: "https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794010306/8d374473-46f4-4c21-a3dc-e7506b2517ab.png",
            description: "A beautiful ornamental freshwater fish originating from Japan, known for its vibrant colours, elegant patterns and graceful swimming. Japanese Koi feature combinations of white, red, orange, yellow and black, making them popular for garden ponds and decorative water features.",
            specs: {
                'Care Level': 'Moderate',
                'Temperature Range': '10°C - 25°C',
                'Diet': 'Premium Koi Pellets, Peas, Wheat Germ',
                'Maximum Size': '2-3 feet'
            },
            variants: [
                { name: 'Small ', price: 90, label: '(Pair)' },
                { name: 'Medium ', price: 500, label: '(Pair)' },
                { name: 'Large ', price: 950, label: '(Pair)' }
            ],
            featured: true
        },
        {
            id: "fish-Tinfoil-Barb",
            category: "fish",
            categoryName: "Aquarium Fish",
            name: "Tinfoil Barb",
            subtitle: "Arowana • Thai Ornamental Fish Variety",
            image: "https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794010774/e99eabdd-ea62-4c13-9d1a-1e951ad3ea43.png",
            description: "A stunning ornamental fish known for its vibrant red colour, metallic sheen and graceful, elongated body. This variety is prized for its beautiful appearance and elegant swimming behaviour, making it a captivating centerpiece for large aquariums.",
            specs: {
                'Care Level': 'Advanced',
                'Diet': 'High-quality pellets, Insects, Shrimp, Small Fish',
                'Water Temperature': '24°C - 28°C',
                'Tank Size': 'Minimum 150 gallons'
            },
            variants: [
                { name: 'Small', price: 50, label: '(Pair)' },
                { name: 'Medium', price: 200, label: '(Pair)' },
                { name: 'Large', price: 350, label: '(Pair)' }
            ],
            featured: true
        },
        {
            id: "fish-Albino-Tinfoil-Barb",
            category: "fish",
            categoryName: "Aquarium Fish",
            name: "Albino Tinfoil Barb",
            subtitle: "Barbonymus schwanenfeldii • Albino Variety",
            image: "https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794011530/e421fd7d-40a8-4143-a633-3ca12fcd16e5.png",
            images: [
                'https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794011624/784dcc17-27a5-4aae-b0fb-92dc9fb3a35a.png',
            ],
            description: "A stunning ornamental fish known for its vibrant red colour, metallic sheen and graceful, elongated body. This variety is prized for its beautiful appearance and elegant swimming behaviour, making it a captivating centerpiece for large aquariums.",
            specs: {
                'Care Level': 'Moderate',
                'Diet': 'High-quality pellets, Insects, Shrimp, Small Fish',
                'Water Temperature': '24°C - 28°C',
                'Tank Size': 'Minimum 150 gallons',
                'Important': 'Can grow up to 35 cm and requires a spacious aquarium or pond. Best kept in groups.'
            },
            variants: [
                { name: 'Single', price: 60, label: 'Single' },
                { name: 'Pair', price: 120, label: 'Pair' }
            ],
            featured: true
        },
        {
            id: "fish-molly",
            category: "fish",
            categoryName: "Aquarium Fish",
            name: "Common Molly",
            subtitle: "Pygocentrus nattereri • Golden Variety",
            image: "https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794012827/05002a63-46e9-4cc5-a70e-c54a3914a188.png",
            images: [
                'https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794012394/b27a2092-ae94-4138-84ad-4652a507c601.png',
                'https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794012304/5a9f3ab9-44e2-4713-b228-41b551fb0c40.png'
            ],
            description: "A hardy and peaceful livebearer, the Common Molly is an excellent choice for beginners and community tanks. Known for its tolerance of varying water conditions, it comes in many colors and shapes.",
            specs: {
                'Care Level': 'Easy',
                'Diet': 'Flakes, pellets, algae, spirulina and vegetables',
                'Water Temperature': '24°C - 28°C',
                'Nature': 'Peaceful Beauty'
            },
            variants: [
                { name: 'Single', price: 10, label: 'Single' },
                { name: 'Pair', price: 25, label: 'Pair' }
            ],
            featured: true
        },
        {
            id: "fish-GloFish-tetra",
            category: "fish",
            categoryName: "Aquarium Fish",
            name: "GloFish Tetra",
            subtitle: "Gymnocorymbus ternetzi",
            image: "https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794013554/d9698569-b2f7-4b7a-bff7-7390dd4f00d1.png",
            video: "https://res.cloudinary.com/dfzk4sfkw/video/upload/v1794013987/2d03a1e164cb794522c7947a5feae216_cqvxl5.mp4",
            description: "A colourful freshwater schooling fish featuring brilliant fluorescent shades of yellow, pink, green, orange and blue. Known for its vibrant glowing appearance, active swimming behaviour and playful personality. A beautiful addition to planted and community aquariums.",
            specs: {
                'Care Level': 'Easy',
                'Diet': 'Flakes, micro pellets, brine shrimp and bloodworms',
                'Water Temperature': '24°C - 28°C',
                'Nature': 'Peaceful Beauty'
            },
            variants: [
                { name: 'Single', price: 25, label: 'Single' },
                { name: 'Pair', price: 50, label: 'Pair' }
            ],
            featured: true
        },
        {
            id: "fish-flowerhorn",
            category: "fish",
            categoryName: "Aquarium Fish",
            name: "Flowerhorn",
            subtitle: "Gymnocorymbus ternetzi",
            image: "https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794014388/d02f6f5f-d730-46dd-b76f-653bbe2b2930.png",
            video: "https://res.cloudinary.com/dfzk4sfkw/video/upload/v1794014428/ab1323b9a97adb39405a976259c601a0_d2tcz2.mp4",
            description: "A stunning ornamental freshwater fish known for its prominent forehead hump (Kok), vibrant red and pink colours, pearly markings and distinctive body patterns. Flowerhorns are admired for their intelligent behaviour, interactive personality and striking appearance, making them a popular centrepiece fish.",
            specs: {
                'Care Level': 'Moderate',
                'Diet': 'Flowerhorn pellets, prawns, insects and protein-rich foods',
                'Water Temperature': '26°C – 30°C',
                'Nature': 'Aggressive and territorial, best kept alone'
            },
            variants: [
                { name: 'Small', price: 1950, label: 'Single' },
            ],
            featured: true
        },
        {
            id: "fish-Gourami",
            category: "fish",
            categoryName: "Aquarium Fish",
            name: "Gourami",
            subtitle: "Trichopodus spp",
            image: "https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794014833/57d10d35-1361-40e6-894e-ed5e77811686.png",
            description: "A beautiful freshwater aquarium fish known for its laterally compressed body, delicate flowing fins and distinctive thread-like pelvic feelers. Gouramis come in a variety of attractive colours and patterns. They are popular for their graceful swimming behaviour and unique appearance.",
            specs: {
                'Care Level': 'Moderate',
                'Diet': 'Flakes, pellets, brine shrimp, bloodworms and vegetables',
                'Water Temperature': '26°C – 30°C',
                'Nature': 'Peaceful and social, best kept in groups'
            },
            variants: [
                { name: 'Small', price: 60, label: 'Pair' },
                { name: 'Medium', price: 90, label: 'Pair' },
                { name: 'Large', price: 150, label: 'Pair' }
            ],
            featured: true
        },
        {
            id: "fish-tiger-shark",
            category: "fish",
            categoryName: "Aquarium Fish",
            name: "Black Tiger Shark",
            subtitle: "Pangasianodon hypophthalmus",
            image: "https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794050094/a33f6eb4-ff18-4d1d-b3b7-2685ea2a4fe8.png",
            images: [
                "https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794050520/d4d14fd4-51bb-42da-8c7f-db64e97e7980.png",
            ],
            description: "A stunning freshwater fish with an elongated body, sleek silver-grey appearance, and bold black stripes running along its sides. Known for its active swimming behaviour, peaceful nature, and graceful movements, the Black Tiger Shark adds a dynamic and elegant touch to large aquariums.",
            specs: {
                'Care Level': 'Moderate',
                'Diet': 'Pellets, crustaceans, insects, and aquatic plants',
                'Water Temperature': '26°C – 30°C',
                'Nature': 'Peaceful and social, best kept in groups'
            },
            variants: [
                { name: 'Single', price: 25, label: 'Single' },
                { name: 'Pair', price: 50, label: 'Pair' }
            ],
            featured: true
        },
        {
            id: "fish-Albino-Tiger-Shark",
            category: "fish",
            categoryName: "Aquarium Fish",
            name: "Albino Tiger Shark",
            subtitle: "Pangasianodon hypophthalmus albino",
            image: "https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794050889/6345806c-e81c-41fa-ba01-3ba414207786.png",
            description: "A stunning freshwater fish with an elongated body, sleek silver-grey appearance, and bold black stripes running along its sides. Known for its active swimming behaviour, peaceful nature, and graceful movements, the Black Tiger Shark adds a dynamic and elegant touch to large aquariums.",
            specs: {
                'Care Level': 'Easy',
                'Diet': 'Pellets, crustaceans, insects, and aquatic plants',
                'Water Temperature': '24°C - 28°C',
                'Nature': 'Peaceful Beauty'
            },
            variants: [
                { name: 'Single', price: 35, label: 'Single' },
                { name: 'Pair', price: 75, label: 'Pair' }
            ],
            featured: true
        },
        {
            id: "fish-Pleco",
            category: "fish",
            categoryName: "Aquarium Fish",
            name: "Pleco",
            subtitle: "",
            image: "https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794051232/da9f40cd-5f33-4531-9268-201346048470.png",
            description: "A striking freshwater bottom-dwelling catfish featuring a dark body covered with beautiful leopard-like reticulated patterns and an impressive sail-shaped dorsal fin. Known for its distinctive appearance and algae-grazing behaviour, making it a popular choice for large freshwater aquariums.",
            specs: {
                'Care Level': 'Easy',
                'Diet': 'Algae wafers, sinking pellets, vegetables and occasional protein-rich foods',
                'Water Temperature': '24°C - 28°C',
                'Nature': 'Peaceful Bottom-dweller'
            },
            variants: [
                { name: 'Single', price: 25, label: 'Single' },
                { name: 'Pair', price: 50, label: 'Pair' }
            ],
            featured: true
        },
        {
            id: "fish-Betta",
            category: "fish",
            categoryName: "Aquarium Fish",
            name: "Betta Fish",
            subtitle: "Fighter Fish",
            image: "https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794051753/67945665-6c47-48c7-a63c-3e4d9decf910.png",
            images: [
                "https://res.cloudinary.com/dfzk4sfkw/image/upload/v1794051787/9b3b6409-9c5b-44d3-9782-ed6e2f6526e0.png",

            ],
            description: "Betta fish, also known as Siamese fighting fish, are popular freshwater aquarium fish prized for their vibrant colors, flowing fins, and feisty personalities. Originating from the Mekong Basin in Southeast Asia, these fish are known for their beauty and are relatively easy to care for, making them a favorite among aquarium hobbyists.",
            specs: {
                'Care Level': 'Easy',
                'Diet': 'Algae wafers, sinking pellets, vegetables and occasional protein-rich foods',
                'Water Temperature': '24°C - 28°C',
                'Nature': 'Peaceful Bottom-dweller'
            },
            variants: [
                { name: 'Male', price: 150, label: 'Single' },
                { name: 'Female', price: 100, label: 'Single' }
            ],
            featured: true
        },

        // --- B. FISH FOOD ---
        {
            id: 'food-hikari-micro',
            category: 'fish-food',
            categoryName: 'Fish Food',
            name: 'Hikari Micro Pellets (Japan)',
            subtitle: 'Brand: Hikari Japan • Complete Nutrition',
            image: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?auto=format&fit=crop&w=800&q=80',
            description: 'Multi-colored micro-granules designed for small-mouth tropical fish like Tetras, Guppies, and Platys. Enriched with marine protein and spirulina for color enhancement.',
            specs: {
                'Brand': 'Hikari (Made in Japan)',
                'Type': 'Slow Sinking Micro Pellets',
                'Beneficial For': 'Tetras, Guppies, Barbs, Bettas',
                'Shelf Life': '24 Months'
            },
            variants: [
                { name: '45g Pack', price: 260, stock: 24, label: '45g Pouch' },
                { name: '100g Pack', price: 480, stock: 15, label: '100g Economical Canister' }
            ],
            featured: true
        },
        {
            id: 'food-tetrabits-complete',
            category: 'fish-food',
            categoryName: 'Fish Food',
            name: 'TetraBits Complete Color Granules',
            subtitle: 'Brand: Tetra Germany • Natural Red Booster',
            image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
            description: 'World-renowned slow-sinking granules formulated with carotenes to maximize natural red and yellow pigmentation in Discus, Angelfish, and Goldfish.',
            specs: {
                'Brand': 'Tetra (Germany)',
                'Type': 'Slow Sinking Granules',
                'Protein Content': '47.5% Minimum',
                'Target Fish': 'Discus, Cichlids, Angels, Gourami'
            },
            variants: [
                { name: '30g', price: 175, stock: 30, label: '30g Can' },
                { name: '93g', price: 395, stock: 20, label: '93g Can' },
                { name: '300g (1000ml)', price: 920, stock: 8, label: '300g Jumbo Tin' }
            ],
            featured: false
        },
        {
            id: 'food-frozen-bloodworms',
            category: 'fish-food',
            categoryName: 'Fish Food',
            name: 'Bio-Pure Frozen Bloodworms (Blister Pack)',
            subtitle: 'Hikari / Ocean Free • Flash Frozen & UV Sterilized',
            image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
            description: '100% natural Chironomus larvae sterilized to destroy parasites and bacteria. Promotes vibrant health, conditioning before breeding, and voracious appetite.',
            specs: {
                'Storage': 'Keep in Freezer (-18°C)',
                'Sterilization': '3-Step UV & Ozone',
                'Portioning': '24 Pre-cut Blister Cubes',
                'Net Weight': '100g'
            },
            variants: [
                { name: 'Single Pack (100g)', price: 160, stock: 18, label: '100g Blister (24 Cubes)' },
                { name: '3-Pack Bundle', price: 440, stock: 10, label: '3 x 100g Bundle (Save ₹40)' }
            ],
            featured: true
        },
        {
            id: 'food-live-daphnia',
            category: 'fish-food',
            categoryName: 'Fish Food',
            name: 'Live Daphnia & Bloodworm Culture',
            subtitle: 'Fresh Live Food • Natural Hunting Instincts',
            image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80',
            description: 'Freshly harvested live water fleas rich in enzymes, chitin, and natural vitamins. Ideal for picky eaters, Betta flaring, and young fry growth.',
            specs: {
                'Type': 'Live Freshwater Zooplankton',
                'Serving Size': '300ml Bottled Culture',
                'Shelf Life': 'Feed within 4 days (aerated)',
                'Use For': 'Fry, Betta, Guppy fry'
            },
            variants: [
                { name: '300ml Bottle', price: 80, stock: 15, label: '300ml Live Culture' }
            ],
            featured: false
        },

        // --- C. COCKATIELS ---
        {
            id: 'bird-cockatiel-lutino',
            category: 'cockatiels',
            categoryName: 'Cockatiels',
            name: 'Lutino Cockatiel (Hand-Tamed)',
            subtitle: 'Nymphicus hollandicus • Lemon Crest & Orange Cheeks',
            image: 'https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=800&q=80',
            description: 'Charming snow-and-buttercup yellow mutation with distinct sunset orange cheek patches and fiery red eyes. Hand-raised, socialized, and loves head scratches.',
            specs: {
                'Mutation': 'Pure Lutino (Yellow & White)',
                'Age': '3.5 - 5 Months (Weaned & Independent)',
                'Temperament': 'Affectionate, Whistling, Cuddly',
                'Lifespan': '15 - 20 Years'
            },
            variants: [
                { name: 'Male (Singing)', price: 2600, stock: 4, label: 'Male • Vocal & Whistling' },
                { name: 'Female (Gentle)', price: 2300, stock: 5, label: 'Female • Calm & Sweet' },
                { name: 'Unisex / Young', price: 2100, stock: 3, label: 'Young Weaned (Gender Unknown)' }
            ],
            featured: true
        },
        {
            id: 'bird-cockatiel-pied',
            category: 'cockatiels',
            categoryName: 'Cockatiels',
            name: 'Pied & Pearl Cockatiel Pair',
            subtitle: 'Nymphicus hollandicus • Scalloped Feather Pattern',
            image: 'https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80',
            description: 'Unique mottled grey-and-yellow feather patterns with elegant scalloped wings. Active personality, very responsive to human voice and mimicry.',
            specs: {
                'Mutation': 'High Pied / Pearl Feathering',
                'Age': '4 Months',
                'Health': 'Dewormed & Diet Acclimatized',
                'Diet': 'Foxtail millet, sunflower kernels, sprouts'
            },
            variants: [
                { name: 'Male', price: 2400, stock: 3, label: 'Male • Tune Mimicker' },
                { name: 'Female', price: 2100, stock: 4, label: 'Female • Gentle Companion' },
                { name: 'Bonded Pair (M+F)', price: 4200, stock: 2, label: 'Bonded Pair (Save ₹300)' }
            ],
            featured: false
        },
        {
            id: 'bird-cockatiel-grey',
            category: 'cockatiels',
            categoryName: 'Cockatiels',
            name: 'Classic Grey Normal Cockatiel',
            subtitle: 'Wild Type Ancestral Form • Robust & Intelligent',
            image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
            description: 'The natural wild-type coloration known for unmatched vocal clarity, robust immune resistance, and striking white wing flashbars.',
            specs: {
                'Mutation': 'Ancestral Grey',
                'Age': '3 Months',
                'Vocal Ability': 'High whistling capacity',
                'Housing': 'Spacious cage with natural perches'
            },
            variants: [
                { name: 'Male', price: 2100, stock: 6, label: 'Male • Bright Yellow Mask' },
                { name: 'Female', price: 1850, stock: 5, label: 'Female • Barred Tail' },
                { name: 'Unisex', price: 1750, stock: 4, label: 'Young Unisex' }
            ],
            featured: false
        },

        // --- D. BUDGIES ---
        {
            id: 'bird-budgie-skyblue',
            category: 'budgies',
            categoryName: 'Budgies',
            name: 'Sky Blue Opaline Budgie',
            subtitle: 'Melopsittacus undulatus • English & Australian Bloodlines',
            image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
            description: 'Playful and spirited parakeet featuring dazzling sky-blue belly plumage with soft opaline mantle bars. Very communicative, social, and easy to tame.',
            specs: {
                'Colour': 'Vibrant Sky Blue / Cobalt',
                'Age': '2 - 3.5 Months',
                'Social Needs': 'High (Enjoys mirrors & bells)',
                'Lifespan': '7 - 10 Years'
            },
            variants: [
                { name: 'Male', price: 350, stock: 15, label: 'Male (Blue Cere)' },
                { name: 'Female', price: 300, stock: 18, label: 'Female (Tan/White Cere)' },
                { name: 'Pair (Male + Female)', price: 600, stock: 10, label: 'Pair Discount (₹600)' }
            ],
            featured: true
        },
        {
            id: 'bird-budgie-yellow-lutino',
            category: 'budgies',
            categoryName: 'Budgies',
            name: 'Lutino & Albino Solid Budgies',
            subtitle: 'Melopsittacus undulatus • Solid Yellow / White Mutations',
            image: 'https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=800&q=80',
            description: 'Pure solid canary-yellow and snow-white budgies with ruby eyes. Eye-catching birds that add cheerful color and melodious chatter to any room.',
            specs: {
                'Colour': 'Pure Lutino Yellow / Pure Albino White',
                'Age': '2.5 Months',
                'Temperament': 'Lively, Acrobatic, Vocal',
                'Diet': 'Millet blend, coriander leaves, boiled egg'
            },
            variants: [
                { name: 'Lutino Yellow (Male)', price: 420, stock: 8, label: 'Lutino Yellow Male' },
                { name: 'Lutino Yellow (Female)', price: 380, stock: 9, label: 'Lutino Yellow Female' },
                { name: 'Albino White (Unisex)', price: 400, stock: 6, label: 'Pure Albino White' }
            ],
            featured: false
        },
        {
            id: 'bird-budgie-green',
            category: 'budgies',
            categoryName: 'Budgies',
            name: 'Emerald Green Heritage Budgie',
            subtitle: 'Wild Green Lineage • High Energy & Robust',
            image: 'https://images.unsplash.com/photo-1608096299210-db7e38487075?auto=format&fit=crop&w=800&q=80',
            description: 'The energetic classic budgerigar with brilliant grass-green chest and yellow face mask. Inquisitive nature, loves flying across the cage and ringing toys.',
            specs: {
                'Colour': 'Emerald Green / Olive',
                'Age': '3 Months',
                'Care Level': 'Beginner Friendly',
                'Origin': 'Locally Acclimatized Breeder'
            },
            variants: [
                { name: 'Male', price: 300, stock: 20, label: 'Male' },
                { name: 'Female', price: 270, stock: 22, label: 'Female' },
                { name: 'Unisex', price: 250, stock: 15, label: 'Juvenile' }
            ],
            featured: false
        },

        // --- E. BIRD FOOD ---
        {
            id: 'food-bird-millet-spray',
            category: 'bird-food',
            categoryName: 'Bird Food',
            name: 'Sun-Cured Golden Spray Millet (500g)',
            subtitle: 'Natural Foraging Treat for Cockatiels & Budgies',
            image: 'https://images.unsplash.com/photo-1608096299210-db7e38487075?auto=format&fit=crop&w=800&q=80',
            description: 'Top-grade whole golden foxtail millet stalks grown under sunshine. Irresistible treat essential for hand-taming birds, weaning chicks, and rewarding good behavior.',
            specs: {
                'Net Weight': '500g Fresh Stalks',
                'Packaging': 'Airtight resealable bag',
                'Nutrients': 'Easy-to-digest carbohydrates & fiber',
                'Suitable For': 'Budgies, Cockatiels, Lovebirds, Finches'
            },
            variants: [
                { name: '250g Pouch', price: 160, stock: 25, label: '250g Treat Pack' },
                { name: '500g Value Pack', price: 280, stock: 18, label: '500g Family Bag' },
                { name: '1kg Bulk Box', price: 520, stock: 10, label: '1kg Hobbyist Box' }
            ],
            featured: true
        },
        {
            id: 'food-bird-prestige-mix',
            category: 'bird-food',
            categoryName: 'Bird Food',
            name: 'Fortified Multi-Seed Daily Blend',
            subtitle: 'Canary Seed, Yellow Millet, Red Millet & Sunflower Kernels',
            image: 'https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?auto=format&fit=crop&w=800&q=80',
            description: 'Triple-cleaned seed mixture fortified with essential amino acids, vitamin pellets, and crushed oyster shell for optimal gizzard digestion and feather sheen.',
            specs: {
                'Ingredients': 'Yellow millet, white millet, canary seed, niger, safflower',
                'Dust Level': '0% Air-blown Cleaned',
                'Shelf Life': '12 Months'
            },
            variants: [
                { name: 'Budgie Blend (1kg)', price: 210, stock: 30, label: '1kg Budgie Blend' },
                { name: 'Cockatiel Blend (1kg)', price: 240, stock: 25, label: '1kg Cockatiel Blend (with Sunflower)' }
            ],
            featured: false
        },
        {
            id: 'food-bird-cuttlefish-calcium',
            category: 'bird-food',
            categoryName: 'Bird Food',
            name: 'Natural Cuttlefish Bone with Metal Holder',
            subtitle: 'Pure Calcium Carbonate & Beak Conditioning',
            image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80',
            description: 'Genuine marine cuttlebone rich in bioavailable calcium and trace minerals. Essential for eggshell formation in breeding females and keeps beaks trimmed.',
            specs: {
                'Package': '2 Bones with metal cage clamps',
                'Length': '6 - 7 inches each',
                'Benefit': 'Prevents soft egg binding & overgrown beaks'
            },
            variants: [
                { name: 'Twin Pack (2 pcs)', price: 120, stock: 35, label: 'Twin Pack (2 pcs)' },
                { name: 'Pack of 5', price: 260, stock: 20, label: 'Pack of 5 (Save ₹40)' }
            ],
            featured: false
        },

        // --- F. AQUARIUM TANKS ---
        {
            id: 'tank-12x6x6-top',
            category: 'Tank',
            categoryName: 'Fish Tank',
            name: 'Fish Tank (12x6x6) with Tank Top',
            subtitle: '12 x 6 x 6 inches • Glass Tank with Top Cover',
            pricingType: 'fixed',
            image: 'https://images.unsplash.com/photo-1520315342629-6ea920342047?auto=format&fit=crop&w=800&q=80',
            description: 'Clear glass fish tank measuring 12x6x6 inches with matching protective glass tank top cover. Suitable for small aquarium setups, desktop displays, and aquatic pets.',
            specs: {
                'Dimensions': '12 x 6 x 6 inches',
                'Tank Cover': 'Glass Tank Top Included',
                'Material': 'Clear Float Glass'
            },
            variants: [
                { name: '12x6x6 with Top', price: 300, label: '12x6x6 with Top • ₹300' }
            ],
            featured: true
        },
        {
            id: 'tank-12x6x8-top',
            category: 'Tank',
            categoryName: 'Fish Tank',
            name: 'Fish Tank (12x6x8) with Tank Top',
            subtitle: '12 x 6 x 8 inches • Glass Tank with Top Cover',
            pricingType: 'fixed',
            image: 'https://images.unsplash.com/photo-1520315342629-6ea920342047?auto=format&fit=crop&w=800&q=80',
            description: 'Clear glass fish tank measuring 12x6x8 inches with matching protective glass tank top cover. Offers added vertical swimming height for desktop aquariums.',
            specs: {
                'Dimensions': '12 x 6 x 8 inches',
                'Tank Cover': 'Glass Tank Top Included',
                'Material': 'Clear Float Glass'
            },
            variants: [
                { name: '12x6x8 with Top', price: 400, label: '12x6x8 with Top • ₹400' }
            ],
            featured: true
        },
        {
            id: 'tank-18x9x9-top',
            category: 'Tank',
            categoryName: 'Fish Tank',
            name: 'Fish Tank (18x9x9) with Tank Top',
            subtitle: '18 x 9 x 9 inches • Glass Tank with Top Cover',
            pricingType: 'fixed',
            image: 'https://images.unsplash.com/photo-1520315342629-6ea920342047?auto=format&fit=crop&w=800&q=80',
            description: 'Rectangular clear glass aquarium measuring 18x9x9 inches with protective glass tank top. Balanced dimensions for small planted setups and community fish.',
            specs: {
                'Dimensions': '18 x 9 x 9 inches',
                'Tank Cover': 'Glass Tank Top Included',
                'Material': 'Clear Float Glass'
            },
            variants: [
                { name: '18x9x9 with Top', price: 750, label: '18x9x9 with Top • ₹750' }
            ],
            featured: true
        },
        {
            id: 'tank-18x9x12-top',
            category: 'Tank',
            categoryName: 'Fish Tank',
            name: 'Fish Tank (18x9x12) with Tank Top',
            subtitle: '18 x 9 x 12 inches • Glass Tank with Top Cover',
            pricingType: 'fixed',
            image: 'https://images.unsplash.com/photo-1520315342629-6ea920342047?auto=format&fit=crop&w=800&q=80',
            description: 'Clear glass aquarium measuring 18x9x12 inches with matching glass tank top cover. Generous depth and vertical swimming area for planted aquascapes.',
            specs: {
                'Dimensions': '18 x 9 x 12 inches',
                'Tank Cover': 'Glass Tank Top Included',
                'Material': 'Clear Float Glass'
            },
            variants: [
                { name: '18x9x12 with Top', price: 850, label: '18x9x12 with Top • ₹850' }
            ],
            featured: true
        },
        {
            id: 'tank-24x12x12-top',
            category: 'Tank',
            categoryName: 'Fish Tank',
            name: 'Fish Tank (24x12x12) with Tank Top',
            subtitle: '24 x 12 x 12 inches • 2-Foot Glass Tank with Top Cover',
            pricingType: 'fixed',
            image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=800&q=80',
            description: 'Standard 2-foot glass aquarium measuring 24x12x12 inches complete with protective glass tank top. Ideal for community freshwater fish and planted layouts.',
            specs: {
                'Dimensions': '24 x 12 x 12 inches',
                'Tank Cover': 'Glass Tank Top Included',
                'Material': 'Clear Float Glass'
            },
            variants: [
                { name: '24x12x12 with Top', price: 1350, label: '24x12x12 with Top • ₹1,350' }
            ],
            featured: true
        },
        {
            id: 'tank-24x12x15-top',
            category: 'Tank',
            categoryName: 'Fish Tank',
            name: 'Fish Tank (24x12x15) with Tank Top',
            subtitle: '24 x 12 x 15 inches • 2-Foot Tall Glass Tank with Top Cover',
            pricingType: 'fixed',
            image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=800&q=80',
            description: 'Spacious 2-foot tall profile glass fish tank measuring 24x12x15 inches with protective glass tank top. Provides extra water volume and panoramic viewing.',
            specs: {
                'Dimensions': '24 x 12 x 15 inches',
                'Tank Cover': 'Glass Tank Top Included',
                'Material': 'Clear Float Glass'
            },
            variants: [
                { name: '24x12x15 with Top', price: 1550, label: '24x12x15 with Top • ₹1,550' }
            ],
            featured: true
        },
        {
            id: 'tank-30x12x15-8mm-top',
            category: 'Tank',
            categoryName: 'Fish Tank',
            name: 'Fish Tank (30x12x15) with Tank Top (8mm)',
            subtitle: '30 x 12 x 15 inches • 8mm Glass • Includes Tank Top',
            pricingType: 'fixed',
            image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
            description: 'Heavy-duty 2.5-foot fish tank constructed with 8mm thick glass for exceptional structural strength and durability. Includes protective glass tank top cover.',
            specs: {
                'Dimensions': '30 x 12 x 15 inches',
                'Glass Thickness': '8mm Heavy-Duty Glass',
                'Tank Cover': 'Glass Tank Top Included',
                'Material': 'Machine Polished Float Glass'
            },
            variants: [
                { name: '30x12x15 (8mm) with Top', price: 2750, label: '30x12x15 (8mm) with Top • ₹2,750' }
            ],
            featured: true
        },
        {
            id: 'tank-36x15x18-8mm-top',
            category: 'Tank',
            categoryName: 'Fish Tank',
            name: 'Fish Tank (36x15x18) with Tank Top (8mm)',
            subtitle: '36 x 15 x 18 inches • 8mm Glass • Includes Tank Top',
            pricingType: 'fixed',
            image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
            description: 'Expansive 3-foot display aquarium constructed from 8mm heavy-duty glass with matching protective glass tank top cover. Ideal for large community setups.',
            specs: {
                'Dimensions': '36 x 15 x 18 inches',
                'Glass Thickness': '8mm Heavy-Duty Glass',
                'Tank Cover': 'Glass Tank Top Included',
                'Material': 'Machine Polished Float Glass'
            },
            variants: [
                { name: '36x15x18 (8mm) with Top', price: 3750, label: '36x15x18 (8mm) with Top • ₹3,750' }
            ],
            featured: true
        },
        {
            id: 'tank-nano-rimless',
            category: 'Tank',
            categoryName: 'Aquarium Tanks',
            name: 'Crystal Clear Rimless Nano Cube',
            subtitle: '30x30x30 cm • 27 Litres • Low-Iron Float Glass',
            image: 'https://images.unsplash.com/photo-1520315342629-6ea920342047?auto=format&fit=crop&w=800&q=80',
            description: 'Modern minimalist aquascaping tank crafted from high-transmittance low-iron glass with German translucent silicone seams and diamond-beveled edges. Leveling mat included.',
            specs: {
                'Dimensions': '30 x 30 x 30 cm (12 x 12 x 12 inches)',
                'Capacity': '27 Litres (7.1 Gallons)',
                'Glass Thickness': '5mm Ultra-Clear Glass',
                'Inclusions': 'Black foam leveling base mat'
            },
            variants: [
                { name: '30cm Cube (27L)', price: 1450, stock: 8, label: '30cm Cube • 27L' },
                { name: '40cm Cube (64L)', price: 2400, stock: 5, label: '40cm Cube • 64L' }
            ],
            featured: false
        },
        {
            id: 'tank-medium-rimless',
            category: 'Tank',
            categoryName: 'Aquarium Tanks',
            name: '2-Feet Planted Aquascape Tank',
            subtitle: '60x30x36 cm • 64 Litres • 6mm Beveled Glass',
            image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
            description: 'The golden ratio standard for home aquascaping and community fish. Wide panoramic perspective allows generous swimming space for schooling tetras and planted sceneries.',
            specs: {
                'Dimensions': '60 x 30 x 36 cm (24 x 12 x 14 inches)',
                'Capacity': '64 Litres (17 Gallons)',
                'Glass Type': '6mm High Precision Float Glass',
                'Warranty': '1 Year Leakproof Warranty'
            },
            variants: [
                { name: 'Standard Float (6mm)', price: 2850, stock: 6, label: 'Standard Float Glass • ₹2,850' },
                { name: 'Ultra-White Low Iron', price: 3950, stock: 4, label: 'Ultra-Clear Optiwhite • ₹3,950' }
            ],
            featured: false
        },
        {
            id: 'tank-curved-corner',
            category: 'Tank',
            categoryName: 'Aquarium Tanks',
            name: 'Seamless Curved Front Glass Aquarium',
            subtitle: 'Bent Glass Panoramic Display with Molded Hood',
            image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=800&q=80',
            description: 'One-piece curved front glass bends seamlessly around the corners for distortion-free viewing from any room angle. Perfect for living room credenzas.',
            specs: {
                'Dimensions': '45 x 28 x 35 cm',
                'Capacity': '44 Litres',
                'Design': 'Seamless hot-bent 90° corners',
                'Glass Thickness': '5mm'
            },
            variants: [
                { name: '1.5ft Curved (44L)', price: 2150, stock: 5, label: '1.5ft Curved (44L)' },
                { name: '2.5ft Curved (95L)', price: 4600, stock: 3, label: '2.5ft Curved (95L)' }
            ],
            featured: false
        },
        {
            id: 'tank-custom-3ft',
            category: 'Tank',
            categoryName: 'Aquarium Tanks',
            name: '3-Feet Heavy Display Aquarium',
            subtitle: '90x45x45 cm • 182 Litres • 8mm Toughened Glass',
            image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
            description: 'Spacious exhibition tank engineered to support dense rock layouts, driftwood branch systems, and larger fish like Discus, Angelfish, and Silver Dollars.',
            specs: {
                'Dimensions': '90 x 45 x 45 cm (36 x 18 x 18 inches)',
                'Capacity': '182 Litres (48 Gallons)',
                'Glass': '8mm Machine Polished Float Glass',
                'Silicon': 'High-tensile Dow Corning structural bond'
            },
            variants: [
                { name: 'Tank Only (8mm)', price: 5400, stock: 3, label: 'Tank Only (8mm Glass)' },
                { name: 'Tank + Metal Stand Combo', price: 8900, stock: 2, label: 'Tank + Heavy Stand Combo' }
            ],
            featured: false
        },

        // --- G. AQUARIUM ACCESSORIES ---
        {
            id: 'acc-hob-filter',
            category: 'aquarium-acc',
            categoryName: 'Aquarium Accessories',
            name: 'Hang-On-Back Waterfall Filter (500 L/H)',
            subtitle: 'Multi-Stage Mechanical & Biological Filtration',
            image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=800&q=80',
            description: 'Ultra-slim HOB filter that clips to the back glass pane. Provides gentle oxygenating waterfall return, surface oil skimming, and replaceable activated carbon bio-cartridges.',
            specs: {
                'Flow Rate': '500 Litres / Hour (Adjustable knob)',
                'Power Consumption': '5 Watts (Silent motor)',
                'Media Chamber': 'Sponge + Carbon Cartridge + Bio-rings',
                'Suitable For': 'Tanks up to 60 Litres'
            },
            variants: [
                { name: '5W (For 1-1.5ft)', price: 490, stock: 22, label: '5W (For Tanks up to 45L)' },
                { name: '8W (For 2ft Tanks)', price: 680, stock: 16, label: '8W High Output (Up to 80L)' }
            ],
            featured: false
        },
        {
            id: 'acc-led-rgb-light',
            category: 'aquarium-acc',
            categoryName: 'Aquarium Accessories',
            name: 'Full-Spectrum Extendable Plant LED Light',
            subtitle: 'RGB+W 6500K LEDs • Promotes Plant Growth & Fish Pop',
            image: 'https://images.unsplash.com/photo-1520315342629-6ea920342047?auto=format&fit=crop&w=800&q=80',
            description: 'Anodized aluminum slim light bar with extendable stainless steel brackets. Emits balanced spectrum wavelengths (660nm red, 450nm royal blue, 6500K white) for luxuriant plant growth.',
            specs: {
                'Color Spectrum': 'Full Spectrum RGB + White',
                'Mounting': 'Extendable rustproof brackets',
                'Housing': 'Aviation grade slim alloy with heat sinks',
                'Input Voltage': '220V with India 2-pin plug'
            },
            variants: [
                { name: '30cm - 45cm (12W)', price: 750, stock: 14, label: '30-45cm Tank (12W)' },
                { name: '60cm - 75cm (24W)', price: 1250, stock: 10, label: '60-75cm Tank (24W)' }
            ],
            featured: false
        },
        {
            id: 'acc-auto-heater',
            category: 'aquarium-acc',
            categoryName: 'Aquarium Accessories',
            name: 'Automatic Quartz Submersible Heater',
            subtitle: 'Precise Thermostat • 20°C to 34°C Dial Control',
            image: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?auto=format&fit=crop&w=800&q=80',
            description: 'Shatterproof quartz tube heater featuring bi-metallic thermostat with auto shut-off once preset water temperature is reached. Essential for Bengaluru chilly winters and monsoon seasons.',
            specs: {
                'Safety': 'Auto shut-off overheat sensor',
                'Temperature Range': '20°C - 34°C adjustable dial',
                'Cord Length': '1.5m heavy insulated wire',
                'Accessories': '2 Heavy-duty suction clamp brackets'
            },
            variants: [
                { name: '50W (For 1ft/Nano)', price: 380, stock: 15, label: '50 Watts (Up to 40L)' },
                { name: '100W (For 2ft Tanks)', price: 460, stock: 18, label: '100 Watts (Up to 80L)' },
                { name: '200W (For 3ft Tanks)', price: 580, stock: 12, label: '200 Watts (Up to 180L)' }
            ],
            featured: false
        },
        {
            id: 'acc-siphon-gravel-vacuum',
            category: 'aquarium-acc',
            categoryName: 'Aquarium Accessories',
            name: 'Quick-Start Siphon Gravel Cleaner & Water Changer',
            subtitle: 'With Hand Squeeze Pump & Debris Guard Screen',
            image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
            description: 'Takes the hassle out of weekly water changes. Simply squeeze the hand bulb 2-3 times to initiate continuous water suction while the flared intake tube lifts fish waste without siphoning sand.',
            specs: {
                'Hose Length': '1.8 Metres flexible kink-resistant tube',
                'Filter Screen': 'Internal mesh to prevent fish accidental suction',
                'Flow Valve': 'Thumb pinch clamp to control drain speed'
            },
            variants: [
                { name: 'Standard 1.8m Siphon', price: 240, stock: 25, label: '1.8m Manual Siphon' }
            ],
            featured: false
        },

        // --- G. BIRD ACCESSORIES ---
        {
            id: 'acc-bird-dome-cage',
            category: 'bird-acc',
            categoryName: 'Bird Accessories',
            name: 'Spacious Enamelled Dome Bird Cage',
            subtitle: 'Twin Feeding Cups, Wooden Perch & Pull-out Hygiene Tray',
            image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80',
            description: 'Safe non-toxic baked enamel wire spacing designed specifically for budgies, lovebirds, and cockatiels. Features a wide front doorway, hanging hoop, and easy-clean slide tray.',
            specs: {
                'Dimensions': '18 x 14 x 24 inches (Height)',
                'Wire Spacing': '1.0 cm (Safe against head entrapment)',
                'Accessories': '2 crystal seed cups, 2 perches, 1 swing',
                'Color Options': 'Pearl White, Deep Ocean Navy'
            },
            variants: [
                { name: 'Medium (1.5 ft)', price: 950, stock: 12, label: 'Medium (18x14x24 in)' },
                { name: 'Large (2 ft Deluxe)', price: 1650, stock: 7, label: 'Large (24x18x32 in)' }
            ],
            featured: false
        },
        {
            id: 'acc-bird-perches-natural',
            category: 'bird-acc',
            categoryName: 'Bird Accessories',
            name: 'Natural Hardwood Branch Perches (Pack of 2)',
            subtitle: 'Varying Thickness to Prevent Bumblefoot',
            image: 'https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80',
            description: 'Unlike uniform plastic dowels, varying natural branch contours massage bird foot pads, exercise tendons, and naturally wear down sharp nail tips.',
            specs: {
                'Material': 'Oven-dried natural fruitwood',
                'Fasteners': 'Stainless steel wingnuts & wide metal washers',
                'Length': '25 - 30 cm per branch'
            },
            variants: [
                { name: 'Pack of 2 Branches', price: 290, stock: 20, label: 'Pack of 2 Natural Perches' }
            ],
            featured: false
        },
        {
            id: 'acc-bird-toy-ladder',
            category: 'bird-acc',
            categoryName: 'Bird Accessories',
            name: 'Colorful Wooden Chewing Ladder & Bell Swing',
            subtitle: 'Non-Toxic Vegetable Dye • Foraging & Exercise Fun',
            image: 'https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=800&q=80',
            description: 'Acrobatic climbing ladder with colorful rungs, cotton rope tassels, and a cheerful chime bell. Relieves bird boredom and prevents stress feather plucking.',
            specs: {
                'Dyes': '100% Pet-safe edible food dyes',
                'Clips': 'Quick-link metal cage carabiner',
                'Rungs': '8 Steps Wooden Ladder'
            },
            variants: [
                { name: 'Ladder + Bell Swing Combo', price: 220, stock: 28, label: 'Ladder & Swing Set' }
            ],
            featured: false
        },
        {
            id: 'acc-bird-toy-ladder',
            category: 'bird-acc',
            categoryName: 'Bird Accessories',
            name: 'Colorful Wooden Chewing Ladder & Bell Swing',
            subtitle: 'Non-Toxic Vegetable Dye • Foraging & Exercise Fun',
            image: 'https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=800&q=80',
            description: 'Acrobatic climbing ladder with colorful rungs, cotton rope tassels, and a cheerful chime bell. Relieves bird boredom and prevents stress feather plucking.',
            specs: {
                'Dyes': '100% Pet-safe edible food dyes',
                'Clips': 'Quick-link metal cage carabiner',
                'Rungs': '8 Steps Wooden Ladder'
            },
            variants: [
                { name: 'Ladder + Bell Swing Combo', price: 220, stock: 28, label: 'Ladder & Swing Set' }
            ],
            featured: false
        },
        {
            id: 'acc-bird-nest-box',
            category: 'bird-acc',
            categoryName: 'Bird Accessories',
            name: 'Natural Pine Breeding Nest Box',
            subtitle: 'Concave Bottom with Inspection Inspection Door',
            image: 'https://images.unsplash.com/photo-1608096299210-db7e38487075?auto=format&fit=crop&w=800&q=80',
            description: 'Crafted from solid kiln-dried pine wood. Features a recessed concave nesting bowl to prevent egg roll, anti-predator entrance hole, and top-opening lid for chick inspection.',
            specs: {
                'Ventilation': 'Laser-cut breathing slits',
                'Mounting': 'Exterior or interior cage hook brackets',
                'Wood': 'Untreated natural pine'
            },
            variants: [
                { name: 'Budgie Size', price: 320, stock: 15, label: 'Budgie Size (8 x 6 x 6 in)' },
                { name: 'Cockatiel Size', price: 540, stock: 10, label: 'Cockatiel Size (11 x 8 x 8 in)' }
            ],
            featured: false
        }
    ];

    // =========================================================================
    // 2. STATE MANAGEMENT & LOCAL STORAGE
    // =========================================================================
    const CART_STORAGE_KEY = 'nanditha_cart_v1';
    let cart = [];
    let currentFilter = 'all';
    let currentSearchTerm = '';
    let currentSortOption = 'featured';
    const PRODUCTS_PER_PAGE = 12;
    let visibleProductsLimit = PRODUCTS_PER_PAGE;
    let selectedVariantsMap = {}; // tracks selected variant index per product ID

    // Initialize default selected variant (index 0) for each product
    productsData.forEach(p => {
        selectedVariantsMap[p.id] = 0;
    });

    // Helper: Category matcher for filter pills and nav items
    function matchesCategory(product, filter) {
        if (!filter || filter === 'all') return true;
        if (filter === 'fish') return product.category === 'fish';
        if (filter === 'birds') return product.category === 'birds' || product.category === 'cockatiels' || product.category === 'budgies';
        if (filter === 'cockatiels') return product.category === 'cockatiels';
        if (filter === 'budgies') return product.category === 'budgies';
        if (filter === 'fish-food') return product.category === 'fish-food';
        if (filter === 'bird-food') return product.category === 'bird-food';
        if (filter === 'tanks' || filter === 'Tank' || filter === 'tank') {
            return product.category === 'tanks' || product.category === 'Tank' || product.category === 'tank';
        }
        if (filter === 'fish-bowls') {
            return product.id === 'tank-nano-rimless' ||
                product.name.toLowerCase().includes('nano') ||
                product.name.toLowerCase().includes('cube') ||
                product.name.toLowerCase().includes('bowl');
        }
        if (filter === 'imported-tanks') {
            return product.id === 'tank-curved-corner' ||
                product.id === 'tank-custom-3ft' ||
                product.id === 'tank-medium-rimless';
        }
        if (filter === 'bird-acc') return product.category === 'bird-acc';
        if (filter === 'aquarium-acc') return product.category === 'aquarium-acc';
        return product.category === filter;
    }

    // Helper: Build WhatsApp enquiry URL for enquiry products
    function getEnquiryWhatsAppUrl(product, variant = null) {
        const vText = variant && variant.name ? ` (${variant.name})` : '';
        const message = `Hi, I am interested in ${product.name}${vText}. Please share its current price and availability.`;
        return `https://wa.me/919620935209?text=${encodeURIComponent(message)}`;
    }

    // Helper: Sort products according to selected option
    function sortProducts(items, sortOption) {
        const list = [...items];
        switch (sortOption) {
            case 'price-asc':
                return list.sort((a, b) => {
                    const isEnquiryA = a.pricingType === 'enquiry' || typeof a.variants[0]?.price !== 'number';
                    const isEnquiryB = b.pricingType === 'enquiry' || typeof b.variants[0]?.price !== 'number';
                    if (isEnquiryA && isEnquiryB) return 0;
                    if (isEnquiryA) return 1;
                    if (isEnquiryB) return -1;
                    const priceA = a.variants[0]?.price || 0;
                    const priceB = b.variants[0]?.price || 0;
                    return priceA - priceB;
                });
            case 'price-desc':
                return list.sort((a, b) => {
                    const isEnquiryA = a.pricingType === 'enquiry' || typeof a.variants[0]?.price !== 'number';
                    const isEnquiryB = b.pricingType === 'enquiry' || typeof b.variants[0]?.price !== 'number';
                    if (isEnquiryA && isEnquiryB) return 0;
                    if (isEnquiryA) return 1;
                    if (isEnquiryB) return -1;
                    const priceA = a.variants[0]?.price || 0;
                    const priceB = b.variants[0]?.price || 0;
                    return priceB - priceA;
                });
            case 'name-asc':
                return list.sort((a, b) => a.name.localeCompare(b.name));
            case 'featured':
            default:
                return list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        }
    }

    // Load Cart from localStorage
    function loadCart() {
        try {
            const raw = localStorage.getItem(CART_STORAGE_KEY);
            cart = raw ? JSON.parse(raw) : [];
        } catch (e) {
            console.warn('Could not load cart from storage', e);
            cart = [];
        }
    }

    // Save Cart to localStorage
    function saveCart() {
        try {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
        } catch (e) {
            console.warn('Could not persist cart to storage', e);
        }
        updateCartUI();
    }

    // =========================================================================
    // 3. UI RENDERING & COMPONENT BUILDERS
    // =========================================================================

    // Render Product Cards (with Category Filtering, Sort, Search, and Load More Pagination)
    function renderProducts() {
        const grid = document.getElementById('productsGrid');
        const emptyState = document.getElementById('emptyProductsState');
        const countSpan = document.getElementById('visibleProductsCount');
        const totalCountSpan = document.getElementById('totalMatchingCount');
        const activeFilterBadge = document.getElementById('activeFilterBadge');
        const loadMoreWrapper = document.getElementById('loadMoreWrapper');
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        const allLoadedText = document.getElementById('allLoadedText');
        const totalViewedCount = document.getElementById('totalViewedCount');

        if (!grid) return;

        // 1. Filter products based on currentFilter and currentSearchTerm
        const term = currentSearchTerm.toLowerCase().trim();
        const filtered = productsData.filter(product => {
            const matchesCat = matchesCategory(product, currentFilter);
            const matchesSearch = !term ||
                product.name.toLowerCase().includes(term) ||
                product.subtitle.toLowerCase().includes(term) ||
                product.categoryName.toLowerCase().includes(term) ||
                product.variants.some(v => v.name.toLowerCase().includes(term) || (v.label && v.label.toLowerCase().includes(term))) ||
                (product.specs && Object.values(product.specs).some(val => String(val).toLowerCase().includes(term)));

            return matchesCat && matchesSearch;
        });

        // 2. Sort matching products
        const sorted = sortProducts(filtered, currentSortOption);

        const totalMatching = sorted.length;
        const visibleItems = sorted.slice(0, visibleProductsLimit);
        const visibleCount = visibleItems.length;

        // 3. Update count displays
        if (countSpan) countSpan.textContent = visibleCount;
        if (totalCountSpan) totalCountSpan.textContent = totalMatching;
        if (totalViewedCount) totalViewedCount.textContent = totalMatching;

        if (activeFilterBadge) {
            const labelMap = {
                'all': 'All Products',
                'fish': 'Aquarium Fish',
                'birds': 'Birds',
                'fish-food': 'Fish Food',
                'bird-food': 'Bird Food',
                'tanks': 'Aquarium Tanks',
                'Tank': 'Aquarium Tanks',
                'tank': 'Aquarium Tanks',
                'fish-bowls': 'Fish Bowls',
                'imported-tanks': 'Imported Tanks',
                'bird-acc': 'Bird Accessories',
                'aquarium-acc': 'Aquarium Accessories',
                'cockatiels': 'Cockatiels',
                'budgies': 'Budgies'
            };
            activeFilterBadge.textContent = labelMap[currentFilter] || currentFilter.replace('-', ' ');
        }

        // 4. Handle empty state
        if (totalMatching === 0) {
            grid.innerHTML = '';
            if (emptyState) emptyState.style.display = 'block';
            if (loadMoreWrapper) loadMoreWrapper.style.display = 'none';
            return;
        } else {
            if (emptyState) emptyState.style.display = 'none';
            if (loadMoreWrapper) loadMoreWrapper.style.display = 'flex';
        }

        // 5. Handle Load More button visibility
        if (loadMoreBtn && allLoadedText) {
            if (visibleCount < totalMatching) {
                loadMoreBtn.style.display = 'inline-flex';
                allLoadedText.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'none';
                allLoadedText.style.display = totalMatching > 0 ? 'inline-flex' : 'none';
            }
        }

        // 6. Render visible Cards
        grid.innerHTML = visibleItems.map(product => {
            const currentVariantIdx = selectedVariantsMap[product.id] || 0;
            const currentVariant = product.variants[currentVariantIdx] || product.variants[0];
            const isEnquiry = product.pricingType === 'enquiry';

            // Build Variant Pills
            const variantButtonsHtml = product.variants.map((v, idx) => {
                const isSelected = idx === currentVariantIdx;
                return `
                    <button type="button" 
                            class="variant-btn ${isSelected ? 'selected' : ''}" 
                            data-product-id="${product.id}" 
                            data-variant-idx="${idx}">
                        ${v.name}
                    </button>
                `;
            }).join('');

            return `
                <article class="product-card" id="card-${product.id}">
                    <div class="product-card-media">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                    </div>

                    <div class="product-card-body">
                        <h3 class="product-card-title">${product.name}</h3>
                        <div class="product-card-subtitle">
                            <span>${product.subtitle}</span>
                        </div>

                        <!-- Variant Selector -->
                        <div class="product-variants-wrap">
                            <div class="variants-label-row">
                                <span>Choose Variant:</span>
                                <span class="variant-stock-display" id="stock-text-${product.id}">
                                    ${currentVariant.label || currentVariant.name}
                                </span>
                            </div>
                            <div class="variant-pills-row">
                                ${variantButtonsHtml}
                            </div>
                        </div>

                        <!-- Price Section -->
                        ${isEnquiry ? `
                            <div class="product-price-row product-price-row-enquiry">
                                <div class="product-enquiry-badge">
                                    <span class="enquiry-pulse-dot"></span>
                                    <span>Price on WhatsApp Enquiry</span>
                                </div>
                            </div>
                        ` : `
                            <div class="product-price-row">
                                <div>
                                    <span class="product-price-label" id="price-label-${product.id}">Price (${currentVariant.name}):</span>
                                    <div class="product-live-price" id="price-${product.id}">₹${currentVariant.price.toLocaleString('en-IN')}</div>
                                </div>
                            </div>
                        `}

                        <!-- Action Buttons -->
                        <div class="product-actions-group">
                            <button type="button" class="btn-view-details" data-action="quickview" data-product-id="${product.id}">
                                View Details
                            </button>
                            ${isEnquiry ? `
                                <a href="${getEnquiryWhatsAppUrl(product, currentVariant)}" target="_blank" rel="noopener" class="btn-add-cart btn-enquire-card" id="enquire-${product.id}">
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/>
                                    </svg>
                                    <span>Enquire on WhatsApp</span>
                                </a>
                            ` : `
                                <button type="button" class="btn-add-cart" data-action="add-cart" data-product-id="${product.id}">
                                    <span>+ Add to Bag</span>
                                </button>
                            `}
                        </div>
                    </div>
                </article>
            `;
        }).join('');
    }

    // Update Cart UI in Header and Drawer
    function updateCartUI() {
        const badge = document.getElementById('cartCountBadge');
        const itemCountText = document.getElementById('cartItemCountText');
        const drawerItems = document.getElementById('cartDrawerItems');
        const totalPriceEl = document.getElementById('cartTotalPrice');

        const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        if (badge) {
            badge.textContent = totalItemsCount;
            badge.style.transform = 'scale(1.25)';
            setTimeout(() => { badge.style.transform = 'scale(1)'; }, 200);
        }

        if (itemCountText) {
            itemCountText.textContent = `${totalItemsCount} ${totalItemsCount === 1 ? 'item' : 'items'}`;
        }

        if (totalPriceEl) {
            totalPriceEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
        }

        if (!drawerItems) return;

        if (cart.length === 0) {
            drawerItems.innerHTML = `
                <div class="empty-cart-view">
                    <div class="empty-cart-icon">🫧</div>
                    <h4>Your Bag is Empty</h4>
                    <p>Explore our beautiful fishes, birds, tanks, and nutritious food to add items here.</p>
                    <a href="#products" class="btn btn-outline btn-sm" id="emptyCartBrowseBtn">Browse Products</a>
                </div>
            `;
            return;
        }

        drawerItems.innerHTML = cart.map((item, index) => {
            return `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-details">
                        <h4 class="cart-item-title">${item.name}</h4>
                        <span class="cart-item-variant-tag">Variant: <strong>${item.variantName}</strong> (₹${item.price})</span>
                        <div class="cart-item-bottom">
                            <strong class="cart-item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</strong>
                            <div class="cart-qty-control">
                                <button type="button" class="qty-btn" data-action="dec" data-index="${index}" aria-label="Decrease quantity">-</button>
                                <span class="qty-num">${item.quantity}</span>
                                <button type="button" class="qty-btn" data-action="inc" data-index="${index}" aria-label="Increase quantity">+</button>
                                <button type="button" class="cart-item-remove-btn" data-action="remove" data-index="${index}" title="Remove item">&times;</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Show Toast Notification
    function showToast(message) {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
        container.appendChild(toast);

        setTimeout(() => {
            if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 3400);
    }

    // Add Item to Cart
    function addToCart(productId, specificVariantIdx = null) {
        const product = productsData.find(p => p.id === productId);
        if (!product) return;

        // Disallow adding enquiry products to cart
        if (product.pricingType === 'enquiry') {
            showToast('This item is available via WhatsApp enquiry.');
            return;
        }

        const variantIdx = specificVariantIdx !== null ? specificVariantIdx : (selectedVariantsMap[productId] || 0);
        const variant = product.variants[variantIdx] || product.variants[0];

        // Unique item key by product and variant
        const cartItemKey = `${product.id}_${variant.name}`;
        const existingItem = cart.find(item => item.key === cartItemKey);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                key: cartItemKey,
                id: product.id,
                name: product.name,
                categoryName: product.categoryName,
                variantName: variant.name,
                price: variant.price,
                image: product.image,
                quantity: 1
            });
        }

        saveCart();
        showToast(`Added "${product.name} (${variant.name})" to your bag!`);

        // Open cart drawer for instant feedback
        openCartDrawer();
    }

    // =========================================================================
    // 4. MODALS & DRAWERS HANDLERS
    // =========================================================================

    // Cart Drawer Controls
    function openCartDrawer() {
        const drawer = document.getElementById('cartDrawer');
        const backdrop = document.getElementById('cartDrawerBackdrop');
        if (drawer && backdrop) {
            drawer.classList.add('active');
            backdrop.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeCartDrawer() {
        const drawer = document.getElementById('cartDrawer');
        const backdrop = document.getElementById('cartDrawerBackdrop');
        if (drawer && backdrop) {
            drawer.classList.remove('active');
            backdrop.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Mobile Navigation Drawer Controls
    function openMobileDrawer() {
        const drawer = document.getElementById('mobileDrawer');
        const backdrop = document.getElementById('mobileDrawerBackdrop');
        if (drawer && backdrop) {
            drawer.classList.add('active');
            backdrop.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeMobileDrawer() {
        const drawer = document.getElementById('mobileDrawer');
        const backdrop = document.getElementById('mobileDrawerBackdrop');
        if (drawer && backdrop) {
            drawer.classList.remove('active');
            backdrop.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Search Modal Controls
    function openSearchModal() {
        const modal = document.getElementById('searchModalBackdrop');
        const input = document.getElementById('globalSearchInput');
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            if (input) {
                setTimeout(() => input.focus(), 100);
            }
        }
    }

    function closeSearchModal() {
        const modal = document.getElementById('searchModalBackdrop');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Helper to determine if a URL points to video content
    function isVideoMedia(url) {
        if (!url || typeof url !== 'string') return false;
        return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url) || url.includes('/video/upload/');
    }

    // Helper to extract and normalize all media items for a product with 100% backward compatibility
    function getProductMedia(product) {
        if (!product) return [];
        const list = [];

        // 1. Check explicit media array: [{ type: 'image'|'video', url, poster }, ...] or ['url1', ...]
        if (Array.isArray(product.media) && product.media.length > 0) {
            product.media.forEach(item => {
                if (typeof item === 'string' && item.trim()) {
                    list.push({
                        type: isVideoMedia(item) ? 'video' : 'image',
                        url: item.trim()
                    });
                } else if (item && item.url) {
                    list.push({
                        type: item.type || (isVideoMedia(item.url) ? 'video' : 'image'),
                        url: item.url,
                        poster: item.poster || null
                    });
                }
            });
        }

        // 2. If no explicit media array, start with primary image
        if (list.length === 0 && product.image && typeof product.image === 'string') {
            list.push({
                type: isVideoMedia(product.image) ? 'video' : 'image',
                url: product.image
            });
        }

        // 3. Collect optional images array: images: ['url1', 'url2', ...]
        if (Array.isArray(product.images)) {
            product.images.forEach(imgUrl => {
                if (typeof imgUrl === 'string' && imgUrl.trim()) {
                    const u = imgUrl.trim();
                    if (!list.some(m => m.url === u)) {
                        list.push({
                            type: isVideoMedia(u) ? 'video' : 'image',
                            url: u
                        });
                    }
                }
            });
        }

        // 4. Collect optional numbered images: image2, image3, image4, image5...
        ['image2', 'image3', 'image4', 'image5'].forEach(key => {
            if (product[key] && typeof product[key] === 'string' && product[key].trim()) {
                const u = product[key].trim();
                if (!list.some(m => m.url === u)) {
                    list.push({
                        type: isVideoMedia(u) ? 'video' : 'image',
                        url: u
                    });
                }
            }
        });

        // 5. Collect optional video / videos: video: 'url' OR videos: ['url1', ...]
        if (product.video) {
            if (typeof product.video === 'string' && product.video.trim()) {
                const vUrl = product.video.trim();
                if (!list.some(m => m.url === vUrl)) {
                    list.push({ type: 'video', url: vUrl });
                }
            } else if (product.video.url) {
                if (!list.some(m => m.url === product.video.url)) {
                    list.push({ type: 'video', url: product.video.url, poster: product.video.poster || null });
                }
            }
        }
        if (Array.isArray(product.videos)) {
            product.videos.forEach(v => {
                const url = typeof v === 'string' ? v.trim() : (v && v.url);
                const poster = (v && v.poster) || null;
                if (url && !list.some(m => m.url === url)) {
                    list.push({ type: 'video', url: url, poster: poster });
                }
            });
        }

        // Fallback: If still empty but product has image property
        if (list.length === 0 && product.image) {
            list.push({ type: 'image', url: product.image });
        }

        return list;
    }

    // Modal Image & Video Slider Interactive Controller
    function initModalSlider(container, mediaList) {
        const wrap = container.querySelector('#modalSliderWrap');
        const track = container.querySelector('#modalSliderTrack');
        const prevBtn = container.querySelector('#modalSliderPrev');
        const nextBtn = container.querySelector('#modalSliderNext');
        const counter = container.querySelector('#activeSlideNum');
        const thumbs = container.querySelectorAll('.modal-thumb-item');
        const slides = container.querySelectorAll('.modal-slide');
        if (!wrap || !track || mediaList.length <= 1) return;

        let currentIdx = 0;

        function updateSlider(newIdx) {
            // Pause any playing videos before changing slides
            const videos = container.querySelectorAll('.modal-product-video');
            videos.forEach(v => {
                try { v.pause(); } catch (err) { }
            });

            currentIdx = (newIdx + mediaList.length) % mediaList.length;

            // Shift track
            track.style.transform = `translateX(-${currentIdx * 100}%)`;

            // Update counter
            if (counter) counter.textContent = currentIdx + 1;

            // Update active states
            slides.forEach((s, idx) => s.classList.toggle('active', idx === currentIdx));
            thumbs.forEach((t, idx) => t.classList.toggle('active', idx === currentIdx));

            // Scroll active thumb into view
            if (thumbs[currentIdx]) {
                try {
                    thumbs[currentIdx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                } catch (e) { }
            }
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                updateSlider(currentIdx - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                updateSlider(currentIdx + 1);
            });
        }

        thumbs.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const idx = parseInt(btn.getAttribute('data-thumb-index'), 10);
                if (!isNaN(idx)) updateSlider(idx);
            });
        });

        // Touch Swipe Navigation for mobile
        let startX = 0;
        let startY = 0;
        let isTouching = false;

        wrap.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
                isTouching = true;
            }
        }, { passive: true });

        wrap.addEventListener('touchend', (e) => {
            if (!isTouching) return;
            isTouching = false;
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const diffX = endX - startX;
            const diffY = endY - startY;

            // Only trigger if horizontal swipe is dominant and exceeds threshold
            if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
                if (diffX < 0) {
                    updateSlider(currentIdx + 1); // Swipe Left -> Next
                } else {
                    updateSlider(currentIdx - 1); // Swipe Right -> Prev
                }
            }
        }, { passive: true });

        // Keyboard arrow navigation
        const handleKeyDown = (e) => {
            const modalBackdrop = document.getElementById('productModalBackdrop');
            if (!modalBackdrop || !modalBackdrop.classList.contains('active')) {
                document.removeEventListener('keydown', handleKeyDown);
                return;
            }
            if (e.key === 'ArrowLeft') {
                updateSlider(currentIdx - 1);
            } else if (e.key === 'ArrowRight') {
                updateSlider(currentIdx + 1);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
    }

    // Product Quick View Modal
    function openProductModal(productId) {
        const product = productsData.find(p => p.id === productId);
        if (!product) return;

        const modalBackdrop = document.getElementById('productModalBackdrop');
        const contentContainer = document.getElementById('productModalContent');
        if (!modalBackdrop || !contentContainer) return;

        const currentVarIdx = selectedVariantsMap[product.id] || 0;
        const currentVariant = product.variants[currentVarIdx] || product.variants[0];
        const isEnquiry = product.pricingType === 'enquiry';

        // Specs List
        let specsHtml = '';
        if (product.specs) {
            specsHtml = Object.entries(product.specs).map(([key, val]) => `
                <div>
                    <span>${key}:</span>
                    <strong>${val}</strong>
                </div>
            `).join('');
        }

        // Variants Pills
        const variantButtonsHtml = product.variants.map((v, idx) => {
            const priceLabel = (!isEnquiry && typeof v.price === 'number') ? ` (₹${v.price})` : '';
            return `
            <button type="button" 
                    class="variant-btn ${idx === currentVarIdx ? 'selected' : ''}" 
                    data-modal-product-id="${product.id}" 
                    data-modal-variant-idx="${idx}">
                ${v.name}${priceLabel}
            </button>
            `;
        }).join('');

        // Extract media items (images & optional videos)
        const mediaList = getProductMedia(product);
        const hasMultipleMedia = mediaList.length > 1;

        let mediaColHtml = '';
        if (!hasMultipleMedia) {
            // Single image: clean, zero slider controls, backward compatible
            const singleMedia = mediaList[0] || { type: 'image', url: product.image };
            mediaColHtml = `
                <div class="modal-media-col">
                    <img src="${singleMedia.url}" alt="${product.name}" class="modal-product-img" style="width: 100%; height: 100%; max-width: none; max-height: none; object-fit: contain; display: block;">
                </div>
            `;
        } else {
            // Multiple images/videos: automatic slider with arrows, counter & thumbnails
            mediaColHtml = `
                <div class="modal-media-col has-slider">
                    <div class="modal-slider-wrap" id="modalSliderWrap">
                        <div class="modal-slider-track" id="modalSliderTrack">
                            ${mediaList.map((m, idx) => `
                                <div class="modal-slide ${idx === 0 ? 'active' : ''}" data-slide-index="${idx}">
                                    ${m.type === 'video' ? `
                                        <video class="modal-product-video" controls playsinline preload="metadata" ${m.poster ? `poster="${m.poster}"` : ''}>
                                            <source src="${m.url}" type="video/mp4">
                                            Your browser does not support the video tag.
                                        </video>
                                    ` : `
                                        <img src="${m.url}" alt="${product.name} - View ${idx + 1}" class="modal-product-img" style="width: 100%; height: 100%; max-width: none; max-height: none; object-fit: contain; display: block;">
                                    `}
                                </div>
                            `).join('')}
                        </div>

                        <button type="button" class="modal-slider-arrow modal-slider-prev" id="modalSliderPrev" aria-label="Previous image">&#10094;</button>
                        <button type="button" class="modal-slider-arrow modal-slider-next" id="modalSliderNext" aria-label="Next image">&#10095;</button>

                        <div class="modal-media-counter" id="modalMediaCounter">
                            <span id="activeSlideNum">1</span> / ${mediaList.length}
                        </div>

                        <div class="modal-thumb-strip" id="modalThumbStrip">
                            ${mediaList.map((m, idx) => `
                                <button type="button" class="modal-thumb-item ${idx === 0 ? 'active' : ''}" data-thumb-index="${idx}" aria-label="View slide ${idx + 1}">
                                    ${m.type === 'video' ? `
                                        <div class="thumb-video-badge">▶</div>
                                        <img src="${m.poster || product.image}" alt="Thumb ${idx + 1}">
                                    ` : `
                                        <img src="${m.url}" alt="Thumb ${idx + 1}">
                                    `}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        const priceBoxHtml = isEnquiry ? `
            <div class="modal-price-box modal-price-box-enquiry">
                <span class="modal-enquiry-badge">
                    <span class="enquiry-pulse-dot"></span>
                    Price on WhatsApp Enquiry
                </span>
            </div>
        ` : `
            <div class="modal-price-box">
                <span class="modal-price" id="modalPriceDisplay">₹${typeof currentVariant.price === 'number' ? currentVariant.price.toLocaleString('en-IN') : ''}</span>
            </div>
        `;

        const actionRowHtml = isEnquiry ? `
            <div class="modal-action-row modal-action-row-enquiry">
                <a href="${getEnquiryWhatsAppUrl(product, currentVariant)}" 
                   target="_blank" rel="noopener" class="btn btn-whatsapp-card modal-whatsapp-btn modal-enquiry-primary-btn" id="modalWhatsappEnquireBtn">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/>
                    </svg>
                    <span>Enquire on WhatsApp</span>
                </a>
            </div>
        ` : `
            <div class="modal-action-row">
                <button type="button" class="btn btn-primary modal-add-cart-btn" id="modalAddCartBtn">
                    Add to Bag &rarr;
                </button>
                <a href="https://wa.me/919620935209?text=${encodeURIComponent(`Hi Nanditha Aquarium! I'm interested in ${product.name} (${currentVariant.name}) priced at ₹${currentVariant.price}. Is it available for delivery?`)}" 
                   target="_blank" rel="noopener" class="btn btn-whatsapp-card modal-whatsapp-btn">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/>
                    </svg>
                    <span>WhatsApp Enquire</span>
                </a>
            </div>
        `;

        contentContainer.innerHTML = `
            ${mediaColHtml}
            <div class="modal-details-col">
                <span class="modal-cat-tag">${product.categoryName}</span>
                <h2 class="modal-title">${product.name}</h2>
                <p class="modal-subtitle">${product.subtitle}</p>

                ${priceBoxHtml}

                <p class="modal-desc">${product.description}</p>

                <div class="product-variants-wrap" style="margin-bottom: 16px;">
                    <div class="variants-label-row">
                        <span>Select Variant:</span>
                        <span class="variant-stock-display" id="modalVariantDetailLabel">${currentVariant.label || currentVariant.name}</span>
                    </div>
                    <div class="variant-pills-row">
                        ${variantButtonsHtml}
                    </div>
                </div>

                ${specsHtml ? `<div class="modal-specs-list">${specsHtml}</div>` : ''}

                ${actionRowHtml}
            </div>
        `;

        modalBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Initialize slider controller if multiple media items exist
        if (hasMultipleMedia) {
            initModalSlider(contentContainer, mediaList);
        }

        // Bind Modal Variant Switches
        const modalVariantBtns = contentContainer.querySelectorAll('[data-modal-variant-idx]');
        modalVariantBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt(e.currentTarget.getAttribute('data-modal-variant-idx'), 10);
                selectedVariantsMap[product.id] = idx;

                // Re-render modal to reflect chosen variant
                openProductModal(product.id);
                // Also update card in grid
                renderProducts();
            });
        });

        // Bind Modal Add Cart
        const modalAddBtn = document.getElementById('modalAddCartBtn');
        if (modalAddBtn) {
            modalAddBtn.addEventListener('click', () => {
                addToCart(product.id, selectedVariantsMap[product.id]);
                closeProductModal();
            });
        }
    }

    function closeProductModal() {
        const modalBackdrop = document.getElementById('productModalBackdrop');
        if (modalBackdrop) {
            modalBackdrop.classList.remove('active');
            document.body.style.overflow = '';
            // Pause any playing videos
            const videos = modalBackdrop.querySelectorAll('video');
            videos.forEach(v => {
                try { v.pause(); } catch (err) { }
            });
        }
    }

    // =========================================================================
    // 5. WHATSAPP CHECKOUT ORDER GENERATOR
    // =========================================================================
    function checkoutWhatsAppOrder() {
        if (cart.length === 0) {
            showToast('Your shopping bag is empty. Please add items first!');
            return;
        }

        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        let orderItemsText = '';
        cart.forEach((item, i) => {
            orderItemsText += `${i + 1}. *${item.name}* (${item.variantName})\n   • Qty: ${item.quantity} × ₹${item.price} = *₹${item.quantity * item.price}*\n`;
        });

        const message =
            `🐟 *NEW ORDER REQUEST – NANDITHA AQUARIUM* 🦜
----------------------------------------------
Hello Nanditha Aquarium team, I would like to place an order from your retail website:

*ITEMS ORDERED:*
${orderItemsText}
----------------------------------------------
💰 *ESTIMATED SUBTOTAL:* ₹${subtotal.toLocaleString('en-IN')}

📍 *DELIVERY / PICKUP INFO:*
• Customer Name: 
• Delivery Address (Bengaluru area): 
• Preferred Delivery Date & Time: 

Please confirm availability and share payment / delivery confirmation. Thank you!`;

        const whatsappUrl = `https://wa.me/919620935209?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }

    // =========================================================================
    // 6. SEARCH FUNCTIONALITY (MODAL & INSTANT)
    // =========================================================================
    function handleGlobalSearch(query) {
        const resultsList = document.getElementById('searchResultsList');
        if (!resultsList) return;

        const term = query.toLowerCase().trim();
        if (!term) {
            resultsList.innerHTML = `<p class="search-hint">Type any product name or category above to instantly view live stock and prices.</p>`;
            return;
        }

        const matches = productsData.filter(p => {
            return p.name.toLowerCase().includes(term) ||
                p.categoryName.toLowerCase().includes(term) ||
                p.subtitle.toLowerCase().includes(term) ||
                p.variants.some(v => v.name.toLowerCase().includes(term) || v.label.toLowerCase().includes(term));
        });

        if (matches.length === 0) {
            resultsList.innerHTML = `<p class="search-hint">No products found matching "<strong>${query}</strong>". Try searching for Betta, Cockatiel, Tank, or Food.</p>`;
            return;
        }

        resultsList.innerHTML = matches.map(product => {
            const defaultVariant = product.variants[0];
            const isEnquiry = product.pricingType === 'enquiry';
            const priceDisplay = (isEnquiry || typeof defaultVariant?.price !== 'number')
                ? 'Price on Enquiry'
                : `From ₹${defaultVariant.price.toLocaleString('en-IN')}`;

            return `
                <div class="search-result-item" data-search-product-id="${product.id}">
                    <img src="${product.image}" alt="${product.name}" class="search-result-thumb">
                    <div class="search-result-info">
                        <div class="search-result-title">${product.name}</div>
                        <span class="search-result-category">${product.categoryName} • ${product.variants.length} variant(s)</span>
                    </div>
                    <div class="search-result-price">
                        ${priceDisplay}
                    </div>
                </div>
            `;
        }).join('');

        // Attach click listeners to search results
        const items = resultsList.querySelectorAll('[data-search-product-id]');
        items.forEach(el => {
            el.addEventListener('click', () => {
                const pId = el.getAttribute('data-search-product-id');
                closeSearchModal();
                openProductModal(pId);
            });
        });
    }

    // =========================================================================
    // 7. REVIEWS SLIDER CAROUSEL
    // =========================================================================
    let currentReviewSlide = 0;
    function initReviewsSlider() {
        const track = document.getElementById('reviewsTrack');
        const dotsContainer = document.getElementById('reviewDots');
        const prevBtn = document.getElementById('prevReviewBtn');
        const nextBtn = document.getElementById('nextReviewBtn');

        if (!track || !dotsContainer) return;

        const cards = track.querySelectorAll('.review-card');
        const totalCards = cards.length;

        // Build Dots
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalCards; i++) {
            const dot = document.createElement('div');
            dot.className = `dot ${i === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => goToReview(i));
            dotsContainer.appendChild(dot);
        }

        function updateSlider() {
            track.style.transform = `translateX(-${currentReviewSlide * 100}%)`;
            const dots = dotsContainer.querySelectorAll('.dot');
            dots.forEach((d, i) => {
                d.classList.toggle('active', i === currentReviewSlide);
            });
        }

        function goToReview(index) {
            currentReviewSlide = index;
            if (currentReviewSlide >= totalCards) currentReviewSlide = 0;
            if (currentReviewSlide < 0) currentReviewSlide = totalCards - 1;
            updateSlider();
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => goToReview(currentReviewSlide + 1));
        }
        if (prevBtn) {
            prevBtn.addEventListener('click', () => goToReview(currentReviewSlide - 1));
        }

        // Auto slide every 6 seconds
        setInterval(() => {
            goToReview(currentReviewSlide + 1);
        }, 6000);
    }

    // =========================================================================
    // 8. THEME MANAGEMENT (Dark Mode & Light Mode Switcher)
    // =========================================================================
    const THEME_STORAGE_KEY = 'nanditha_theme';

    function getPreferredTheme() {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme === 'light' || savedTheme === 'dark') {
            return savedTheme;
        }
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'dark'; // Default aquatic dark theme
    }

    function applyTheme(theme, animate = true) {
        if (animate) {
            document.documentElement.classList.add('theme-transitioning');
            setTimeout(() => {
                document.documentElement.classList.remove('theme-transitioning');
            }, 350);
        }

        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_STORAGE_KEY, theme);

        // Update meta theme color
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', theme === 'dark' ? '#071827' : '#FFFFFF');
        }

        // Update button titles and accessibility labels
        const themeToggleBtn = document.getElementById('themeToggleBtn');
        if (themeToggleBtn) {
            const nextMode = theme === 'dark' ? 'Light' : 'Dark';
            themeToggleBtn.setAttribute('title', `Switch to ${nextMode} Mode`);
            themeToggleBtn.setAttribute('aria-label', `Switch to ${nextMode} Mode`);
        }

        const drawerThemeToggleBtn = document.getElementById('drawerThemeToggleBtn');
        if (drawerThemeToggleBtn) {
            const nextMode = theme === 'dark' ? 'Light' : 'Dark';
            drawerThemeToggleBtn.setAttribute('title', `Switch to ${nextMode} Mode`);
            drawerThemeToggleBtn.setAttribute('aria-label', `Switch to ${nextMode} Mode`);
        }
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme, true);
        showToast(newTheme === 'dark' ? 'Switched to Aquatic Dark Mode 🌙' : 'Switched to Fresh Light Mode ☀️');
    }

    function initTheme() {
        const theme = getPreferredTheme();
        applyTheme(theme, false);

        // Header theme toggle button
        const themeToggleBtn = document.getElementById('themeToggleBtn');
        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', toggleTheme);
        }

        // Mobile drawer theme toggle button
        const drawerThemeToggleBtn = document.getElementById('drawerThemeToggleBtn');
        if (drawerThemeToggleBtn) {
            drawerThemeToggleBtn.addEventListener('click', toggleTheme);
        }

        // Listen for OS system theme changes if no manual preference is stored
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (!localStorage.getItem(THEME_STORAGE_KEY)) {
                    applyTheme(e.matches ? 'dark' : 'light', true);
                }
            });
        }
    }

    // =========================================================================
    // 9. EVENT LISTENERS & INITIALIZATION
    // =========================================================================
    document.addEventListener('DOMContentLoaded', () => {
        initTheme();
        loadCart();
        renderProducts();
        updateCartUI();
        initReviewsSlider();

        // Update footer copyright year dynamically
        const yearEl = document.getElementById('currentYear');
        if (yearEl) yearEl.textContent = new Date().getFullYear();

        // Update Hero total products count badge
        const heroCountBadge = document.getElementById('heroTotalProductsCount');
        if (heroCountBadge) {
            heroCountBadge.textContent = `${productsData.length}+ Products`;
        }

        // ---------------------------------------------------------------------
        // Sticky Header Scroll Effect
        // ---------------------------------------------------------------------
        const header = document.getElementById('siteHeader');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // ---------------------------------------------------------------------
        // Shop Navigation Dropdown (Desktop & Touch Support)
        // ---------------------------------------------------------------------
        const shopDropdownWrap = document.getElementById('shopDropdownWrap');
        const shopDropdownTrigger = document.getElementById('shopDropdownTrigger');
        if (shopDropdownWrap && shopDropdownTrigger) {
            shopDropdownTrigger.addEventListener('click', (e) => {
                if (window.innerWidth <= 1024) {
                    e.preventDefault();
                    const isOpen = shopDropdownWrap.classList.toggle('open');
                    shopDropdownTrigger.setAttribute('aria-expanded', isOpen);
                }
            });

            document.addEventListener('click', (e) => {
                if (!shopDropdownWrap.contains(e.target)) {
                    shopDropdownWrap.classList.remove('open');
                    shopDropdownTrigger.setAttribute('aria-expanded', 'false');
                }
            });

            const dropdownLinks = shopDropdownWrap.querySelectorAll('.dropdown-item, .dropdown-footer-link');
            dropdownLinks.forEach(link => {
                link.addEventListener('click', () => {
                    shopDropdownWrap.classList.remove('open');
                    shopDropdownTrigger.setAttribute('aria-expanded', 'false');
                });
            });
        }

        // ---------------------------------------------------------------------
        // Mobile Drawer Shop Accordion Toggle
        // ---------------------------------------------------------------------
        const drawerShopToggle = document.getElementById('drawerShopToggle');
        const drawerShopAccordion = document.getElementById('drawerShopAccordion');
        if (drawerShopToggle && drawerShopAccordion) {
            drawerShopToggle.addEventListener('click', () => {
                const isOpen = drawerShopAccordion.classList.toggle('open');
                drawerShopToggle.setAttribute('aria-expanded', isOpen);
            });
        }

        // ---------------------------------------------------------------------
        // Category Filter Buttons (Filter Bar)
        // ---------------------------------------------------------------------
        const filterPills = document.querySelectorAll('.filter-pill');
        filterPills.forEach(pill => {
            pill.addEventListener('click', () => {
                filterPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                currentFilter = pill.getAttribute('data-filter');
                visibleProductsLimit = PRODUCTS_PER_PAGE; // Reset limit when filter changes
                renderProducts();
            });
        });

        // ---------------------------------------------------------------------
        // Inline Product Search Input in Toolbar
        // ---------------------------------------------------------------------
        const inlineSearch = document.getElementById('inlineProductSearch');
        if (inlineSearch) {
            inlineSearch.addEventListener('input', (e) => {
                currentSearchTerm = e.target.value;
                visibleProductsLimit = PRODUCTS_PER_PAGE; // Reset limit when search changes
                renderProducts();
            });
        }

        // ---------------------------------------------------------------------
        // Catalog Sort Select Dropdown
        // ---------------------------------------------------------------------
        const catalogSort = document.getElementById('catalogSortSelect');
        if (catalogSort) {
            catalogSort.addEventListener('change', (e) => {
                currentSortOption = e.target.value;
                visibleProductsLimit = PRODUCTS_PER_PAGE; // Reset limit on sort change
                renderProducts();
            });
        }

        // ---------------------------------------------------------------------
        // Load More Products Button
        // ---------------------------------------------------------------------
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                visibleProductsLimit += PRODUCTS_PER_PAGE;
                renderProducts();
            });
        }

        // ---------------------------------------------------------------------
        // Category Cards Direct Filter Navigation
        // ---------------------------------------------------------------------
        const categoryCards = document.querySelectorAll('[data-category-target]');
        categoryCards.forEach(card => {
            card.addEventListener('click', () => {
                const targetCat = card.getAttribute('data-category-target');
                if (targetCat === 'aquarium-acc' || targetCat === 'bird-acc') {
                    // Let normal navigation scroll to accessories section
                    return;
                }
                currentFilter = targetCat;
                visibleProductsLimit = PRODUCTS_PER_PAGE;
                filterPills.forEach(p => {
                    const pillFilter = p.getAttribute('data-filter');
                    const isDirect = pillFilter === targetCat;
                    const isBirdSub = pillFilter === 'birds' && (targetCat === 'cockatiels' || targetCat === 'budgies');
                    p.classList.toggle('active', isDirect || isBirdSub);
                });
                renderProducts();
            });
        });

        // Navigation links with data-filter attribute
        const navFilterLinks = document.querySelectorAll('[data-filter]');
        navFilterLinks.forEach(link => {
            link.addEventListener('click', () => {
                const cat = link.getAttribute('data-filter');
                if (!cat) return;
                currentFilter = cat;
                visibleProductsLimit = PRODUCTS_PER_PAGE;
                filterPills.forEach(p => {
                    const pillFilter = p.getAttribute('data-filter');
                    const isDirect = pillFilter === cat;
                    const isBirdSub = pillFilter === 'birds' && (cat === 'cockatiels' || cat === 'budgies');
                    p.classList.toggle('active', isDirect || isBirdSub);
                });
                renderProducts();
                closeMobileDrawer();
            });
        });

        // Quick filter buttons in accessories section
        const quickAccBtns = document.querySelectorAll('[data-quick-filter]');
        quickAccBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const cat = btn.getAttribute('data-quick-filter');
                currentFilter = cat;
                visibleProductsLimit = PRODUCTS_PER_PAGE;
                filterPills.forEach(p => {
                    p.classList.toggle('active', p.getAttribute('data-filter') === cat);
                });
                renderProducts();
                closeMobileDrawer();

                // Smooth scroll to catalog
                const prodSection = document.getElementById('products');
                if (prodSection) prodSection.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Reset Filters Button
        const resetBtn = document.getElementById('resetFiltersBtn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                currentFilter = 'all';
                currentSearchTerm = '';
                currentSortOption = 'featured';
                visibleProductsLimit = PRODUCTS_PER_PAGE;
                if (inlineSearch) inlineSearch.value = '';
                if (catalogSort) catalogSort.value = 'featured';
                filterPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-filter') === 'all'));
                renderProducts();
            });
        }

        // ---------------------------------------------------------------------
        // Delegated Product Card Interactions (Variants, Add to Cart, Quickview)
        // ---------------------------------------------------------------------
        const productsGrid = document.getElementById('productsGrid');
        if (productsGrid) {
            productsGrid.addEventListener('click', (e) => {
                // 1. Variant button switch
                const variantBtn = e.target.closest('.variant-btn');
                if (variantBtn) {
                    const productId = variantBtn.getAttribute('data-product-id');
                    const variantIdx = parseInt(variantBtn.getAttribute('data-variant-idx'), 10);
                    selectedVariantsMap[productId] = variantIdx;

                    const product = productsData.find(p => p.id === productId);
                    if (product) {
                        const card = document.getElementById(`card-${productId}`);
                        if (card) {
                            // Update selected button styling
                            card.querySelectorAll('.variant-btn').forEach((btn, idx) => {
                                btn.classList.toggle('selected', idx === variantIdx);
                            });

                            const isEnquiry = product.pricingType === 'enquiry';
                            const selectedVariant = product.variants[variantIdx];

                            // Update price text
                            const priceEl = card.querySelector(`#price-${productId}`);
                            if (priceEl) {
                                if (isEnquiry || typeof selectedVariant.price !== 'number') {
                                    priceEl.style.display = 'none';
                                } else {
                                    priceEl.style.display = '';
                                    priceEl.textContent = `₹${selectedVariant.price.toLocaleString('en-IN')}`;
                                }
                            }

                            // Update price label
                            const priceLabelEl = card.querySelector(`#price-label-${productId}`);
                            if (priceLabelEl) {
                                if (isEnquiry) {
                                    priceLabelEl.style.display = 'none';
                                } else {
                                    priceLabelEl.style.display = '';
                                    priceLabelEl.textContent = `Price (${selectedVariant.name}):`;
                                }
                            }

                            // Update WhatsApp enquire button link on card if enquiry product
                            const enquireBtn = card.querySelector(`#enquire-${productId}`);
                            if (enquireBtn && isEnquiry) {
                                enquireBtn.href = getEnquiryWhatsAppUrl(product, selectedVariant);
                            }

                            // Update stock/label text
                            const stockEl = card.querySelector(`#stock-text-${productId}`);
                            if (stockEl) {
                                stockEl.textContent = selectedVariant.label || selectedVariant.name;
                            }
                        }
                    }
                    return;
                }

                // 2. Add to Bag button
                const addCartBtn = e.target.closest('[data-action="add-cart"]');
                if (addCartBtn) {
                    const pId = addCartBtn.getAttribute('data-product-id');
                    addToCart(pId);
                    return;
                }

                // 3. View Details button
                const quickviewBtn = e.target.closest('[data-action="quickview"]');
                if (quickviewBtn) {
                    const pId = quickviewBtn.getAttribute('data-product-id');
                    openProductModal(pId);
                    return;
                }
            });
        }

        // ---------------------------------------------------------------------
        // Delegated Cart Drawer Actions (Increment, Decrement, Remove)
        // ---------------------------------------------------------------------
        const cartDrawerItems = document.getElementById('cartDrawerItems');
        if (cartDrawerItems) {
            cartDrawerItems.addEventListener('click', (e) => {
                const btn = e.target.closest('button[data-action]');
                if (!btn) return;

                const action = btn.getAttribute('data-action');
                const index = parseInt(btn.getAttribute('data-index'), 10);

                if (action === 'inc') {
                    cart[index].quantity += 1;
                    saveCart();
                } else if (action === 'dec') {
                    if (cart[index].quantity > 1) {
                        cart[index].quantity -= 1;
                    } else {
                        cart.splice(index, 1);
                    }
                    saveCart();
                } else if (action === 'remove') {
                    cart.splice(index, 1);
                    saveCart();
                }
            });
        }

        // Cart Drawer Open/Close buttons
        const cartOpenBtn = document.getElementById('cartOpenBtn');
        const cartCloseBtn = document.getElementById('cartCloseBtn');
        const cartBackdrop = document.getElementById('cartDrawerBackdrop');
        const clearCartBtn = document.getElementById('clearCartBtn');
        const whatsappCheckoutBtn = document.getElementById('whatsappCheckoutBtn');

        if (cartOpenBtn) cartOpenBtn.addEventListener('click', openCartDrawer);
        if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
        if (cartBackdrop) cartBackdrop.addEventListener('click', closeCartDrawer);

        if (clearCartBtn) {
            clearCartBtn.addEventListener('click', () => {
                if (cart.length === 0) return;
                if (confirm('Are you sure you want to clear all items from your bag?')) {
                    cart = [];
                    saveCart();
                    showToast('Shopping bag cleared.');
                }
            });
        }

        if (whatsappCheckoutBtn) {
            whatsappCheckoutBtn.addEventListener('click', checkoutWhatsAppOrder);
        }

        // ---------------------------------------------------------------------
        // Mobile Drawer Controls
        // ---------------------------------------------------------------------
        const menuToggleBtn = document.getElementById('menuToggleBtn');
        const closeDrawerBtn = document.getElementById('closeDrawerBtn');
        const mobileBackdrop = document.getElementById('mobileDrawerBackdrop');

        if (menuToggleBtn) menuToggleBtn.addEventListener('click', openMobileDrawer);
        if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeMobileDrawer);
        if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileDrawer);

        const drawerLinks = document.querySelectorAll('.drawer-nav-item, .drawer-sub-link');
        drawerLinks.forEach(link => {
            link.addEventListener('click', closeMobileDrawer);
        });

        // Mobile drawer search
        const drawerSearchInput = document.getElementById('drawerSearchInput');
        const drawerSearchSubmit = document.getElementById('drawerSearchSubmit');
        if (drawerSearchSubmit && drawerSearchInput) {
            drawerSearchSubmit.addEventListener('click', () => {
                const term = drawerSearchInput.value.trim();
                if (term) {
                    closeMobileDrawer();
                    currentSearchTerm = term;
                    renderProducts();
                    const prodEl = document.getElementById('products');
                    if (prodEl) prodEl.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }

        // ---------------------------------------------------------------------
        // Search Modal Controls
        // ---------------------------------------------------------------------
        const searchTriggerBtn = document.getElementById('searchTriggerBtn');
        const closeSearchModalBtn = document.getElementById('closeSearchModalBtn');
        const searchModalBackdrop = document.getElementById('searchModalBackdrop');
        const globalSearchInput = document.getElementById('globalSearchInput');
        const clearSearchBtn = document.getElementById('clearSearchBtn');

        if (searchTriggerBtn) searchTriggerBtn.addEventListener('click', openSearchModal);
        if (closeSearchModalBtn) closeSearchModalBtn.addEventListener('click', closeSearchModal);
        if (searchModalBackdrop) {
            searchModalBackdrop.addEventListener('click', (e) => {
                if (e.target === searchModalBackdrop) closeSearchModal();
            });
        }

        if (globalSearchInput) {
            globalSearchInput.addEventListener('input', (e) => {
                handleGlobalSearch(e.target.value);
            });
        }

        if (clearSearchBtn && globalSearchInput) {
            clearSearchBtn.addEventListener('click', () => {
                globalSearchInput.value = '';
                handleGlobalSearch('');
                globalSearchInput.focus();
            });
        }

        // Popular search quick tags
        const quickTags = document.querySelectorAll('.quick-tag');
        quickTags.forEach(tag => {
            tag.addEventListener('click', () => {
                const tagName = tag.getAttribute('data-tag');
                if (globalSearchInput) {
                    globalSearchInput.value = tagName;
                    handleGlobalSearch(tagName);
                }
            });
        });

        // ---------------------------------------------------------------------
        // Product Modal Close Handler
        // ---------------------------------------------------------------------
        const closeProductModalBtn = document.getElementById('closeProductModalBtn');
        const productModalBackdrop = document.getElementById('productModalBackdrop');

        if (closeProductModalBtn) closeProductModalBtn.addEventListener('click', closeProductModal);
        if (productModalBackdrop) {
            productModalBackdrop.addEventListener('click', (e) => {
                if (e.target === productModalBackdrop) closeProductModal();
            });
        }

        // Close on Escape Key (Accessibility)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeCartDrawer();
                closeMobileDrawer();
                closeSearchModal();
                closeProductModal();
                const shopDropdownWrap = document.getElementById('shopDropdownWrap');
                const shopDropdownTrigger = document.getElementById('shopDropdownTrigger');
                if (shopDropdownWrap) {
                    shopDropdownWrap.classList.remove('open');
                }
                if (shopDropdownTrigger) {
                    shopDropdownTrigger.setAttribute('aria-expanded', 'false');
                }
            }
        });

        // ---------------------------------------------------------------------
        // Quick Contact Inquiry Form via WhatsApp
        // ---------------------------------------------------------------------
        const contactForm = document.getElementById('quickContactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('inqName').value.trim();
                const phone = document.getElementById('inqPhone').value.trim();
                const category = document.getElementById('inqCategory').value;
                const message = document.getElementById('inqMessage').value.trim();

                const waText =
                    `🐟 *WEBSITE ENQUIRY – NANDITHA AQUARIUM*
-----------------------------------------
• Name: ${name}
• Phone: ${phone}
• Topic: ${category}
• Message: ${message}

(Sent from Nanditha Aquarium website contact form)`;

                const waUrl = `https://wa.me/919620935209?text=${encodeURIComponent(waText)}`;
                window.open(waUrl, '_blank');
                contactForm.reset();
                showToast('Opening WhatsApp with your enquiry details...');
            });
        }

    });

})();

