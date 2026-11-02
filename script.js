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
            name: 'Royal Halfmoon Betta',
            subtitle: 'Betta splendens • Show Grade',
            image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
            description: 'Stunning 180-degree caudal spread with iridescent hues. Acclimatized to Bengaluru tap water parameters. Hardy, active, and peaceful when housed individually.',
            specs: {
                'Care Level': 'Easy to Moderate',
                'Water Temp': '24°C - 28°C',
                'Diet': 'Carnivore / Pellets & Bloodworms',
                'Tank Size': 'Minimum 15 Litres'
            },
            variants: [
                { name: 'Male', price: 350, stock: 12, label: 'Full 180° Tail • Male' },
                { name: 'Female', price: 220, stock: 8, label: 'Sorority Ready • Female' }
            ],
            featured: true
        },
        {
            id: 'fish-guppy-fancy',
            category: 'fish',
            categoryName: 'Aquarium Fish',
            name: 'Dumbo Ear Mosaic Guppy',
            subtitle: 'Poecilia reticulata • High Fin Strain',
            image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80',
            description: 'Vibrant active livebearers featuring oversized pectoral fins and high-contrast mosaic tail patterns. Great for planted community tanks.',
            specs: {
                'Care Level': 'Beginner Friendly',
                'Water Temp': '22°C - 28°C',
                'Breeding': 'Livebearer',
                'Diet': 'Omnivore / Micro Pellets'
            },
            variants: [
                { name: 'Male', price: 90, stock: 35, label: 'Vibrant Mosaic Fin • Male' },
                { name: 'Female', price: 60, stock: 25, label: 'Breeding Mature • Female' }
            ],
            featured: true
        },
        {
            id: 'fish-goldfish-oranda',
            category: 'fish',
            categoryName: 'Aquarium Fish',
            name: 'Red Cap Oranda Goldfish',
            subtitle: 'Carassius auratus • Fancy Headgrowth',
            image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
            description: 'Classic peaceful fancy goldfish sporting a vibrant crimson wen (crown) on a snow-white body. Healthy swimming posture and friendly temperament.',
            specs: {
                'Care Level': 'Easy',
                'Water Temp': '18°C - 24°C',
                'Diet': 'Herbivore/Omnivore sinking pellets',
                'Life Span': '10+ Years'
            },
            variants: [
                { name: 'Medium (3 inch)', price: 280, stock: 14, label: '3 inch • Medium' },
                { name: 'Large (4.5 inch)', price: 490, stock: 6, label: '4.5 inch • Show Size' }
            ],
            featured: true
        },
        {
            id: 'fish-molly-balloon',
            category: 'fish',
            categoryName: 'Aquarium Fish',
            name: 'Dalmatian Balloon Molly',
            subtitle: 'Poecilia latipinna • Spotted Livebearer',
            image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80',
            description: 'Round-bellied, cheerful livebearers with black and white Dalmatian spotting. Voracious biofilm and algae grazers that keep glass clean.',
            specs: {
                'Care Level': 'Beginner',
                'Water Temp': '24°C - 28°C',
                'Behavior': 'Active & Peaceful',
                'Diet': 'Vegetable flakes & spirulina'
            },
            variants: [
                { name: 'Male', price: 70, stock: 20, label: 'High Sailfin • Male' },
                { name: 'Female', price: 50, stock: 25, label: 'Gravid Female' }
            ],
            featured: false
        },
        {
            id: 'fish-platy-sunset',
            category: 'fish',
            categoryName: 'Aquarium Fish',
            name: 'Sunset Red Wag Platy',
            subtitle: 'Xiphophorus maculatus • Hardy Community Fish',
            image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=800&q=80',
            description: 'Brilliant flame-gradient coloration fading into jet black fins. Extremely hardy and tolerant, ideal for beginners starting their first community aquarium.',
            specs: {
                'Care Level': 'Very Easy',
                'Water Temp': '20°C - 26°C',
                'Diet': 'Omnivore flakes',
                'Compatibility': 'All peaceful community fish'
            },
            variants: [
                { name: 'Male', price: 60, stock: 18, label: 'Vivid Slender • Male' },
                { name: 'Female', price: 45, stock: 22, label: 'Robust • Female' }
            ],
            featured: false
        },
        {
            id: 'fish-tetra-neon',
            category: 'fish',
            categoryName: 'Aquarium Fish',
            name: 'Jumbo Neon Tetra (Pack of 5)',
            subtitle: 'Paracheirodon innesi • Glowing Schoolers',
            image: 'https://images.unsplash.com/photo-1520315342629-6ea920342047?auto=format&fit=crop&w=800&q=80',
            description: 'Iridescent blue horizontal stripe reflecting light with a bold crimson belly. Schooling fish that create dynamic motion across green planted tanks.',
            specs: {
                'Care Level': 'Easy',
                'Pack Size': '5 Pieces Pack',
                'Water Temp': '22°C - 26°C',
                'Diet': 'Micro granules & Daphnia'
            },
            variants: [
                { name: '5 Pcs Pack', price: 180, stock: 15, label: '5 Fishes School' },
                { name: '10 Pcs Pack', price: 320, stock: 10, label: '10 Fishes School (Best Value)' }
            ],
            featured: true
        },
        {
            id: 'fish-angelfish-marble',
            category: 'fish',
            categoryName: 'Aquarium Fish',
            name: 'Marble Veil Angelfish',
            subtitle: 'Pterophyllum scalare • Majestic Centerpiece',
            image: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?auto=format&fit=crop&w=800&q=80',
            description: 'Tall diamond-profile body with trailing veil fins and distinctive black-and-silver marbling. Peaceful centerpiece fish for tall aquariums.',
            specs: {
                'Care Level': 'Moderate',
                'Water Temp': '25°C - 29°C',
                'Height': 'Up to 15cm fin span',
                'Diet': 'Flakes, Pellets & Bloodworms'
            },
            variants: [
                { name: 'Medium (2 inch)', price: 160, stock: 16, label: 'Juvenile 2 inch' },
                { name: 'Large (3.5 inch)', price: 320, stock: 7, label: 'Adult 3.5 inch' }
            ],
            featured: false
        },
        {
            id: 'fish-discus-pigeon',
            category: 'fish',
            categoryName: 'Aquarium Fish',
            name: 'Pigeon Blood Discus',
            subtitle: 'Symphysodon aequifasciatus • King of Aquarium',
            image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
            description: 'The monarch of freshwater tanks. Features a rich striated sunset pattern, round disk symmetry, and bold red iris. Thriving in warm, pristine water.',
            specs: {
                'Care Level': 'Experienced',
                'Water Temp': '28°C - 31°C',
                'pH': '6.2 - 6.8 (Soft Water)',
                'Diet': 'Discus Bits, Beefheart, Artemia'
            },
            variants: [
                { name: '2.5 inch', price: 950, stock: 5, label: 'Juvenile 2.5 inch' },
                { name: '4.0 inch', price: 1850, stock: 3, label: 'Sub-adult 4.0 inch' }
            ],
            featured: false
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
            id: 'tank-nano-rimless',
            category: 'tanks',
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
            featured: true
        },
        {
            id: 'tank-medium-rimless',
            category: 'tanks',
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
            featured: true
        },
        {
            id: 'tank-curved-corner',
            category: 'tanks',
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
            category: 'tanks',
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
    let selectedVariantsMap = {}; // tracks selected variant index per product ID

    // Initialize default selected variant (index 0) for each product
    productsData.forEach(p => {
        selectedVariantsMap[p.id] = 0;
    });

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

    // Render Product Cards
    function renderProducts() {
        const grid = document.getElementById('productsGrid');
        const emptyState = document.getElementById('emptyProductsState');
        const countSpan = document.getElementById('visibleProductsCount');
        const activeFilterBadge = document.getElementById('activeFilterBadge');

        if (!grid) return;

        // Filter products based on currentFilter and currentSearchTerm
        const filtered = productsData.filter(product => {
            // Category check
            const matchesCategory = (currentFilter === 'all') || (product.category === currentFilter);

            // Search query check
            const term = currentSearchTerm.toLowerCase().trim();
            const matchesSearch = !term ||
                product.name.toLowerCase().includes(term) ||
                product.subtitle.toLowerCase().includes(term) ||
                product.categoryName.toLowerCase().includes(term) ||
                product.variants.some(v => v.name.toLowerCase().includes(term) || v.label.toLowerCase().includes(term)) ||
                (product.specs && Object.values(product.specs).some(val => String(val).toLowerCase().includes(term)));

            return matchesCategory && matchesSearch;
        });

        // Update counts
        if (countSpan) countSpan.textContent = filtered.length;
        if (activeFilterBadge) {
            activeFilterBadge.textContent = currentFilter === 'all' ? 'All Products' : currentFilter.replace('-', ' ');
        }

        // Handle empty state
        if (filtered.length === 0) {
            grid.innerHTML = '';
            if (emptyState) emptyState.style.display = 'block';
            return;
        } else {
            if (emptyState) emptyState.style.display = 'none';
        }

        // Render Cards
        grid.innerHTML = filtered.map(product => {
            const currentVariantIdx = selectedVariantsMap[product.id] || 0;
            const currentVariant = product.variants[currentVariantIdx] || product.variants[0];

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
                        <span class="product-category-badge">${product.categoryName}</span>
                        <span class="product-stock-tag">
                            <span class="stock-tag-dot"></span>
                            <span>${currentVariant.stock > 0 ? `In Stock (${currentVariant.stock})` : 'Order on Req'}</span>
                        </span>
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

                        <!-- Price & Live Stock -->
                        <div class="product-price-row">
                            <div>
                                <span class="product-price-label">Price (${currentVariant.name}):</span>
                                <div class="product-live-price" id="price-${product.id}">₹${currentVariant.price.toLocaleString('en-IN')}</div>
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div class="product-actions-group">
                            <button type="button" class="btn-view-details" data-action="quickview" data-product-id="${product.id}">
                                View Details
                            </button>
                            <button type="button" class="btn-add-cart" data-action="add-cart" data-product-id="${product.id}">
                                <span>+ Add to Bag</span>
                            </button>
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

    // Product Quick View Modal
    function openProductModal(productId) {
        const product = productsData.find(p => p.id === productId);
        if (!product) return;

        const modalBackdrop = document.getElementById('productModalBackdrop');
        const contentContainer = document.getElementById('productModalContent');
        if (!modalBackdrop || !contentContainer) return;

        const currentVarIdx = selectedVariantsMap[product.id] || 0;
        const currentVariant = product.variants[currentVarIdx] || product.variants[0];

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
        const variantButtonsHtml = product.variants.map((v, idx) => `
            <button type="button" 
                    class="variant-btn ${idx === currentVarIdx ? 'selected' : ''}" 
                    data-modal-product-id="${product.id}" 
                    data-modal-variant-idx="${idx}">
                ${v.name} (₹${v.price})
            </button>
        `).join('');

        contentContainer.innerHTML = `
            <div class="modal-media-col">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="modal-details-col">
                <span class="modal-cat-tag">${product.categoryName}</span>
                <h2 class="modal-title">${product.name}</h2>
                <p class="modal-subtitle">${product.subtitle}</p>

                <div class="modal-price-box">
                    <span class="modal-price" id="modalPriceDisplay">₹${currentVariant.price.toLocaleString('en-IN')}</span>
                    <span class="modal-stock-info" id="modalStockDisplay">
                        ✓ In Stock: ${currentVariant.stock} available
                    </span>
                </div>

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

                <div class="modal-action-row">
                    <button type="button" class="btn btn-primary" id="modalAddCartBtn" style="flex: 1;">
                        Add to Bag &rarr;
                    </button>
                    <a href="https://wa.me/919620935209?text=${encodeURIComponent(`Hi Nanditha Aquarium! I'm interested in ${product.name} (${currentVariant.name}) priced at ₹${currentVariant.price}. Is it available for delivery?`)}" 
                       target="_blank" rel="noopener" class="btn btn-whatsapp-card" style="padding: 10px 18px;">
                        WhatsApp Enquire
                    </a>
                </div>
            </div>
        `;

        modalBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';

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
            return `
                <div class="search-result-item" data-search-product-id="${product.id}">
                    <img src="${product.image}" alt="${product.name}" class="search-result-thumb">
                    <div class="search-result-info">
                        <div class="search-result-title">${product.name}</div>
                        <span class="search-result-category">${product.categoryName} • ${product.variants.length} variant(s)</span>
                    </div>
                    <div class="search-result-price">
                        From ₹${defaultVariant.price}
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
            pill.addEventListener('click', (e) => {
                filterPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                currentFilter = pill.getAttribute('data-filter');
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
                renderProducts();
            });
        }

        // ---------------------------------------------------------------------
        // Category Cards Direct Filter Navigation
        // ---------------------------------------------------------------------
        const categoryCards = document.querySelectorAll('[data-category-target]');
        categoryCards.forEach(card => {
            card.addEventListener('click', (e) => {
                const targetCat = card.getAttribute('data-category-target');
                if (targetCat === 'aquarium-acc' || targetCat === 'bird-acc') {
                    // Let normal navigation scroll to accessories section
                    return;
                }
                currentFilter = targetCat;
                filterPills.forEach(p => {
                    p.classList.toggle('active', p.getAttribute('data-filter') === targetCat);
                });
                renderProducts();
            });
        });

        // Navigation links with data-filter attribute
        const navFilterLinks = document.querySelectorAll('[data-filter]');
        navFilterLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const cat = link.getAttribute('data-filter');
                if (!cat) return;
                currentFilter = cat;
                filterPills.forEach(p => {
                    p.classList.toggle('active', p.getAttribute('data-filter') === cat);
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
                filterPills.forEach(p => {
                    p.classList.toggle('active', p.getAttribute('data-filter') === cat);
                });
                renderProducts();

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
                if (inlineSearch) inlineSearch.value = '';
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

                            // Update price text
                            const priceEl = card.querySelector(`#price-${productId}`);
                            if (priceEl) {
                                priceEl.textContent = `₹${product.variants[variantIdx].price.toLocaleString('en-IN')}`;
                            }

                            // Update stock/label text
                            const stockEl = card.querySelector(`#stock-text-${productId}`);
                            if (stockEl) {
                                stockEl.textContent = product.variants[variantIdx].label || product.variants[variantIdx].name;
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

        const drawerLinks = document.querySelectorAll('.drawer-nav-item');
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

        // Close on Escape Key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeCartDrawer();
                closeMobileDrawer();
                closeSearchModal();
                closeProductModal();
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

