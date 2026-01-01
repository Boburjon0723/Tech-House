const products = [
    {
        id: 1,
        name: "Samsung Muzlatgich RF85",
        category: "kitchen",
        description: "2 kamerali, No Frost, 450L hajm, A++ energiya samaradorligi. Zamonaviy dizayn va yuqori sifatli sovutish tizimi bilan uyingiz uchun eng yaxshi tanlov.",
        price: 8500000,
        image: "https://minapi.beemarket.uz/prod-media/productImages/583b76d6-931a-4249-9717-2adb58f2c751/2b6230c6-57dc-4729-9029-edb33411de9a.webp",
        badge: "Yangi",
        features: [
            "Hajmi: 450 L",
            "Energiya klassi: A++",
            "Sovutish turi: No Frost",
            "Kafolat: 3 yil"
        ]
    },
    {
        id: 2,
        name: "LG Kir Yuvish Mashinasi",
        category: "kitchen",
        description: "8kg yuklash, inverter motor, 14 dastur, energiya A+++. Kuchli va tejamkor kir yuvish tajribasi.",
        price: 3600000,
        oldPrice: 4500000,
        image: "https://minapi.beemarket.uz/prod-media/productImages/1729581064jEhx2sC2SJI1.webp",
        badge: "sale",
        badgeText: "-20%",
        features: [
            "Sig'imi: 8 kg",
            "Dvigatel turi: Inverter",
            "Dasturlar soni: 14 ta",
            "Energiya klassi: A+++"
        ]
    },
    {
        id: 3,
        name: "Artel Gaz Plita 4 Kamonli",
        category: "kitchen",
        description: "Elektr duhovka, grill, toaster, avtomatik yonish. Sifatli materiallardan tayyorlangan va uzoq yil xizmat qiladi.",
        price: 2800000,
        image: "https://minapi.beemarket.uz/prod-media/productImages/1761220164M8AuFEd3LkSl.webp",
        features: [
            "Konforkalar soni: 4 ta",
            "Duhovka turi: Elektr",
            "Grill funksiyasi: Bor",
            "Avtoayonish: Bor Sessions"
        ]
    },
    {
        id: 4,
        name: "Philips Changyutgich",
        category: "cleaning",
        description: "2000W quvvat, HEPA filtr, 5L hajm, shovqinsiz ishlash. Uyingizni tozalashda sizning eng yaqin ko'makchingiz.",
        price: 1450000,
        image: "https://cdn.mediapark.uz/imgs/dd2b4765-2484-4158-89a2-e1d4e013bb47_Artboard-1.webp",
        features: [
            "Quvvati: 2000 W",
            "Filtr: HEPA",
            "Chang hajmi: 5 L",
            "Shovqin darajasi: 72 dB"
        ]
    },
    {
        id: 5,
        name: "Daikin Konditsioner 24000 BTU",
        category: "climate",
        description: "Inverter texnologiya, sovutish/isitish, A++ energiya. Har qanday ob-havoda qulay iqlim.",
        price: 6200000,
        image: "https://asset.openshop.uz/storage/uploads/products/photos/202312/SjV5sF3BlD1AjJXNXmijy8Md5HfroAKC3ybJhwgQ.jpg",
        badge: "Hit",
        features: [
            "Quvvati: 24000 BTU",
            "Texnologiya: Inverter",
            "Rejimlari: Sovutish/Isitish",
            "Maydoni: 70-80 kv.m"
        ]
    },
    {
        id: 6,
        name: "Tefal Blender 1000W",
        category: "small",
        description: "Shisha idish, 5 tezlik, muz maydalash funksiyasi. Oshxonada ishingizni osonlashtiradi.",
        price: 6500000,
        image: "https://asset.openshop.uz/storage/uploads/products/photos/202502/5dwKrK5rFSMf6dPXDhdkuVngiNmoZ4QbqB60wVwK.jpg",
        features: [
            "Quvvati: 1000 W",
            "Pichoqlari: Zanglamas po'lat",
            "Tezliklari: 5 ta",
            "Muz maydalash: Bor"
        ]
    },
    {
        id: 7,
        name: "Samsung Mikroto'lqinli Pech",
        category: "small",
        description: "23L hajm, grill funksiyasi, keramik qoplama. Taomlarni tez va mazali tayyorlang.",
        price: 1020000,
        oldPrice: 1200000,
        image: "https://minapi.beemarket.uz/prod-media/productImages/d7dbb9fd-1c02-4111-9fd9-d3d84d53abd7/41fe6001-8fdd-49d2-9695-d6d59f7661b1.jpg",
        badge: "sale",
        badgeText: "-15%",
        features: [
            "Hajmi: 23 L",
            "Qoplamasi: Keramik",
            "Grill: Bor",
            "Quvvati: 800 W"
        ]
    },
    {
        id: 8,
        name: "Bosch Elektr Choynak",
        category: "small",
        description: "1.7L, po'lat korpus, tez qaynatish, avto o'chish. Sifatli va chidamli.",
        price: 3200000,
        image: "https://avatars.mds.yandex.net/get-mpic/16299004/2a0000019915ef58e9b67dda52865c51a79f/optimize",
        features: [
            "Hajmi: 1.7 L",
            "Korpus: Zanglamas po'lat",
            "Himoya: Suvsiz yonishdan",
            "Quvvati: 2400 W"
        ]
    },
    {
        id: 9,
        name: "Electrolux Konvektor",
        category: "climate",
        description: "2000W, 3 ish rejimi, termostat, devorga o'rnatish. Sovuq kunlarda issiqlik manbai.",
        price: 890000,
        image: "https://minapi.beemarket.uz/prod-media/productImages/68006e77-23f7-4e42-9cb4-5541133dcfb4/67d121bf-fe78-403b-9282-81852ddc7623.jpg",
        features: [
            "Quvvati: 2000 W",
            "Rejimlari: 3 ta",
            "O'rnatish: Devorga/Oyoqqa",
            "Xona hajmi: 25-30 kv.m"
        ]
    },
    {
        id: 10,
        name: "Bosch Idish Yuvish Mashinasi",
        category: "kitchen",
        description: "12 to'plam, 6 dastur, A++ energiya, shovqinsiz. Idishlarni o'zi yarqiratadi.",
        price: 5500000,
        image: "https://minapi.beemarket.uz/prod-media/productImages/ca351167-915d-4bd2-8c2c-5812c712ed5f/20a81077-382f-4ecb-91b9-66b365251d9f.jpg",
        badge: "Yangi",
        features: [
            "Sig'imi: 12 to'plam",
            "Dasturlari: 6 ta",
            "Energiya klassi: A++",
            "Shovqin: 48 dB"
        ]
    },
    {
        id: 11,
        name: "Philips Toster HD2581",
        category: "small",
        description: "2 bo'lim, 8 qizarish darajasi, kroshka patnisi. Qarsildoq nonlar uchun.",
        price: 280000,
        image: "https://minapi.beemarket.uz/prod-media/productImages/34d5f9e2-3b07-453d-9066-4109f3d70f45/cade2ad1-b012-40b0-86ab-6c51bfa6c6ab.jpg",
        features: [
            "Bo'limlari: 2 ta",
            "Qizarish rejimi: 8 ta",
            "Patnisi: Bor",
            "Quvvati: 830 W"
        ]
    },
    {
        id: 12,
        name: "Xiaomi Robot Changyutgich",
        category: "cleaning",
        description: "Wi-Fi, app boshqaruv, 2600mAh batareya, 90 daqiqa ish vaqti. Siz dam oling, u ishlasin.",
        price: 2100000,
        image: "https://minapi.beemarket.uz/prod-media/productImages/1729061680qKFlKChtpQUl.webp",
        badge: "Hit",
        features: [
            "Boshqaruv: Garchi / Mobil ilova",
            "Ish vaqti: 90 daqiqa",
            "Akumulyator: 2600 mAh",
            "Nam tozalash: Bor"
        ]
    }
];
