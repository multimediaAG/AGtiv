const ways = [
    {
        city: "Kempten",
        country: "DE",
        distance: "0"
    },
    {
        city: "Marseille",
        country: "IT",
        distance: "964"
    },
    {
        city: "Barcelona",
        country: "ES",
        distance: "508"
    },
    {
        city: "Gibraltar",
        country: "GI",
        distance: "1108"
    },
    {
        city: "Marrakesch",
        country: "MA",
        distance: "653"
    },
    {
        city: "Ad Dakhla",
        country: "EH",
        distance: "1406"
    },
    {
        city: "Dakar",
        country: "SN",
        distance: "1367"
    },
    {
        city: "Conakry",
        country: "GN",
        distance: "1199"
    },
    {
        city: "Makeni",
        country: "SL",
        distance: "271"
    },
    {
        city: "Nzerekore",
        country: "GN",
        distance: "516"
    },
    {
        city: "Yamoussoukro",
        country: "CI",
        distance: "519"
    },
    {
        city: "Kumasi",
        country: "GH",
        distance: "516"
    },
    {
        city: "Proto-Novo",
        country: "BJ",
        distance: "648"
    },
    {
        city: "Onitsha",
        country: "NG",
        distance: "543"
    },
    {
        city: "Douala",
        country: "CM",
        distance: "666"
    },
    {
        city: "Oyem",
        country: "GA",
        distance: "546"
    },
    {
        city: "Mandilou",
        country: "GA",
        distance: "602"
    },
    {
        city: "Dolisie",
        country: "CG",
        distance: "445"
    },
    {
        city: "Kinshasa",
        country: "CD",
        distance: "390"
    },
    {
        city: "Kinshasa",
        country: "CD",
        distance: "390"
    },
    {
        city: "Luanda",
        country: "AO",
        distance: "818"
    },
    {
        city: "Lubango",
        country: "AO",
        distance: "898"
    },
    {
        city: "Windhuk",
        country: "NA",
        distance: "1158"
    },
    {
        city: "Kapstadt",
        country: "ZA",
        distance: "1479"
    },
    {
        city: "Port Elizabeth",
        country: "ZA",
        distance: "749"
    },
    {
        city: "Durban",
        country: "ZA",
        distance: "910"
    },
    {
        city: "Maputo",
        country: "MZ",
        distance: "542"
    },
    {
        city: "Harare",
        country: "ZW",
        distance: "1163"
    },
    {
        city: "Lilongwe",
        country: "MW",
        distance: "817"
    },
    {
        city: "Dodome",
        country: "TZ",
        distance: "1312"
    },
    {
        city: "Nairobi",
        country: "KE",
        distance: "689"
    },
    {
        city: "Awassa",
        country: "ET",
        distance: "1273"
    },
    {
        city: "Dschibouti",
        country: "DJ",
        distance: "998"
    },
    {
        city: "Salala",
        country: "OM",
        distance: "1549"
    },
    {
        city: "Dubai",
        country: "AE",
        distance: "1281"
    },
    {
        city: "Tschahbahar",
        country: "IR",
        distance: "667"
    },
    {
        city: "Karatschi",
        country: "PK",
        distance: "980"
    },
    {
        city: "Ahmedabad",
        country: "IN",
        distance: "851"
    },
    {
        city: "Mumbai",
        country: "IN",
        distance: "525"
    },
    {
        city: "Madurai",
        country: "IN",
        distance: "1427"
    },
    {
        city: "Kakinada",
        country: "IN",
        distance: "1123"
    },
    {
        city: "Kalkutta",
        country: "IN",
        distance: "1025"
    },
    {
        city: "Mandalay",
        country: "MM",
        distance: "1399"
    },
    {
        city: "Rangun",
        country: "MM",
        distance: "628"
    },
    {
        city: "Bangkok",
        country: "TH",
        distance: "837"
    },
    {
        city: "Phnom Penh",
        country: "KD",
        distance: "719"
    },
    {
        city: "Pleiku",
        country: "VN",
        distance: "627"
    },
    {
        city: "Hanoi",
        country: "VN",
        distance: "1102"
    },
];

const countries = [
    {
        code: "DE",
        name: "Deutschland"
    },
    {
        code: "IT",
        name: "Italien"
    },
    {
        code: "ES",
        name: "Spanien"
    },
    {
        code: "GI",
        name: "Gibraltar"
    },
    {
        code: "MA",
        name: "Marokko"
    },
    {
        code: "EH",
        name: "Westsahara"
    },
    {
        code: "SN",
        name: "Senegal"
    },
    {
        code: "GN",
        name: "Guinea"
    },
    {
        code: "SL",
        name: "Sierra Leone"
    },
    {
        code: "CI",
        name: "Elfenbeinküste"
    },
    {
        code: "GH",
        name: "Ghana"
    },
    {
        code: "BJ",
        name: "Benin"
    },
    {
        code: "NG",
        name: "Nigeria"
    },
    {
        code: "CM",
        name: "Kamerun"
    },
    {
        code: "GA",
        name: "Gabun"
    },
    {
        code: "CG",
        name: "Kongo"
    },
    {
        code: "CD",
        name: "D. R. Kongo"
    },
    {
        code: "VN",
        name: "Vietnam"
    },
    {
        code: "KH",
        name: "Kambodscha"
    },
    {
        code: "TH",
        name: "Thailand"
    },
    {
        code: "MM",
        name: "Myanmar"
    },
    {
        code: "IN",
        name: "Indien"
    },
    {
        code: "PK",
        name: "Pakistan"
    },
    {
        code: "IR",
        name: "Iran"
    },
    {
        code: "AE",
        name: "Ver. arab. Emirate"
    },
    {
        code: "OM",
        name: "Oman"
    },
    {
        code: "DJ",
        name: "Dschibouti"
    },
    {
        code: "ET",
        name: "Äthiopien"
    },
    {
        code: "AO",
        name: "Angola"
    },
    {
        code: "NA",
        name: "Namibia"
    },
    {
        code: "ZA",
        name: "Südafrika"
    },
    {
        code: "MZ",
        name: "Mosambik"
    },
    {
        code: "ZW",
        name: "Simbabwe"
    },
    {
        code: "MW",
        name: "Malawi"
    },
    {
        code: "TZ",
        name: "Tansania"
    },
    {
        code: "KE",
        name: "Kenia"
    },
];