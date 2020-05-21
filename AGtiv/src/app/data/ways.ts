// tslint:disable-next-line
export module data {
    export interface City {
        name: string;
        country: string;
        distance: number;
        x: number;
        y: number;
        angleCCW?: boolean;
        left?: boolean;
        isEasternEndpoint?: boolean;
        isWesternStartpoint?: boolean;
        image?: string;
    }

    export interface Country {
        code: string;
        name: string;
    }

    export const cities: City[] = [
        {
            name: "Kempten",
            country: "de",
            distance: 0,
            x: 1183,
            y: 426,
        },
        {
            name: "Marseille",
            country: "fr",
            distance: 964,
            x: 1159,
            y: 462,
        },
        {
            name: "Barcelona",
            country: "es",
            distance: 508,
            x: 1136,
            y: 481,
        },
        {
            name: "Gibraltar",
            country: "gi",
            distance: 1108,
            x: 1104,
            y: 513,
        },
        {
            name: "Marrakesch",
            country: "ma",
            distance: 653,
            x: 1077,
            y: 548,
        },
        {
            name: "Ad Dakhla",
            country: "eh",
            distance: 1406,
            x: 1034,
            y: 585,
        },
        {
            name: "Dakar",
            country: "sn",
            distance: 1367,
            x: 1008,
            y: 657,
        },
        {
            name: "Conakry",
            country: "gn",
            distance: 1199,
            x: 1027,
            y: 682,
            angleCCW: true,
        },
        {
            name: "Makeni",
            country: "sl",
            distance: 271,
            x: 1051,
            y: 690,
            angleCCW: true,
        },
        {
            name: "Nzerekore",
            country: "gn",
            distance: 516,
            x: 1077,
            y: 699,
            angleCCW: true,
        },
        {
            name: "Yamoussoukro",
            country: "ci",
            distance: 519,
            x: 1089,
            y: 703,
            angleCCW: true,
        },
        {
            name: "Kumasi",
            country: "gh",
            distance: 516,
            x: 1118,
            y: 706,
            angleCCW: true,
        },
        {
            name: "Porto-Novo",
            country: "bj",
            distance: 648,
            x: 1139,
            y: 708,
            angleCCW: true,
        },
        {
            name: "Onitsha",
            country: "ng",
            distance: 543,
            x: 1163,
            y: 710,
            angleCCW: true,
        },
        {
            name: "Douala",
            country: "cm",
            distance: 666,
            x: 1180,
            y: 723,
        },
        {
            name: "Oyem",
            country: "ga",
            distance: 546,
            x: 1195,
            y: 740,
        },
        {
            name: "Mandilou",
            country: "ga",
            distance: 602,
            x: 1181,
            y: 756,
        },
        {
            name: "Dolisie",
            country: "cg",
            distance: 445,
            x: 1190,
            y: 770,
            left: true,
        },
        {
            name: "Kinshasa",
            country: "cd",
            distance: 390,
            x: 1214,
            y: 773,
        },
        {
            name: "Luanda",
            country: "ao",
            distance: 818,
            x: 1205,
            y: 795,
        },
        {
            name: "Lubango",
            country: "ao",
            distance: 898,
            x: 1208,
            y: 844,
        },
        {
            name: "Windhuk",
            country: "na",
            distance: 1158,
            x: 1221,
            y: 890,
        },
        {
            name: "Kapstadt",
            country: "za",
            distance: 1479,
            x: 1230,
            y: 966,
            left: true,
        },
        {
            name: "Port Elizabeth",
            country: "za",
            distance: 749,
            x: 1285,
            y: 969,
        },
        {
            name: "Durban",
            country: "za",
            distance: 910,
            x: 1313,
            y: 949,
        },
        {
            name: "Maputo",
            country: "mz",
            distance: 542,
            x: 1323,
            y: 922,
        },
        {
            name: "Harare",
            country: "zw",
            distance: 1163,
            x: 1307,
            y: 847,
        },
        {
            name: "Lilongwe",
            country: "mw",
            distance: 817,
            x: 1324,
            y: 821,
        },
        {
            name: "Dodoma",
            country: "tz",
            distance: 1312,
            x: 1345,
            y: 778,
        },
        {
            name: "Nairobi",
            country: "ke",
            distance: 689,
            x: 1352,
            y: 750,
        },
        {
            name: "Awassa",
            country: "et",
            distance: 1273,
            x: 1368,
            y: 708,
        },
        {
            name: "Dschibuti",
            country: "dj",
            distance: 998,
            x: 1389,
            y: 676,
        },
        {
            name: "Salala",
            country: "om",
            distance: 1549,
            x: 1469,
            y: 641,
        },
        {
            name: "Dubai",
            country: "ae",
            distance: 1281,
            x: 1480,
            y: 590,
            left: true,
        },
        {
            name: "Tschahbahar",
            country: "ir",
            distance: 667,
            x: 1516,
            y: 587,
            angleCCW: false,
        },
        {
            name: "Karatschi",
            country: "pk",
            distance: 980,
            x: 1550,
            y: 590,
            angleCCW: false,
        },
        {
            name: "Ahmedabad",
            country: "in",
            distance: 851,
            x: 1588,
            y: 602,
        },
        {
            name: "Mumbai",
            country: "in",
            distance: 525,
            x: 1592,
            y: 628,
        },
        {
            name: "Madurai",
            country: "in",
            distance: 1427,
            x: 1626,
            y: 686,
        },
        {
            name: "Kakinada",
            country: "in",
            distance: 1123,
            x: 1660,
            y: 632,
        },
        {
            name: "Kalkutta",
            country: "in",
            distance: 1025,
            x: 1688,
            y: 607,
            angleCCW: false,
        },
        {
            name: "Mandalay",
            country: "mm",
            distance: 1399,
            x: 1744,
            y: 612,
            angleCCW: false,
        },
        {
            name: "Rangun",
            country: "mm",
            distance: 628,
            x: 1741,
            y: 638,
        },
        {
            name: "Bangkok",
            country: "th",
            distance: 837,
            x: 1770,
            y: 657,
            angleCCW: true,
        },
        {
            name: "Phnom Penh",
            country: "kh",
            distance: 719,
            x: 1793,
            y: 659,
            angleCCW: true,
        },
        {
            name: "Pleiku",
            country: "vn",
            distance: 627,
            x: 1816,
            y: 659,
            angleCCW: true,
        },
        {
            name: "Hanoi",
            country: "vn",
            distance: 1102,
            x: 1794,
            y: 618,
            angleCCW: false,
        },
        {
            name: "Hongkong",
            country: "hk",
            distance: 1078,
            x: 1853,
            y: 605,
        },
        {
            name: "Zhangzhou",
            country: "cn",
            distance: 713,
            x: 1873,
            y: 587,
        },
        {
            name: "Fuzhou",
            country: "cn",
            distance: 834,
            x: 1853,
            y: 562,
            angleCCW: false,
        },
        {
            name: "Shanghai",
            country: "cn",
            distance: 771,
            x: 1900,
            y: 545,
        },
        {
            name: "Peking",
            country: "cn",
            distance: 1191,
            x: 1859,
            y: 481,
            angleCCW: false,
        },
        {
            name: "Shengyang",
            country: "cn",
            distance: 685,
            x: 1916,
            y: 459,
            angleCCW: false,
        },
        {
            name: "Wladiwostok",
            country: "ru",
            distance: 1095,
            x: 1967,
            y: 456,
        },
        {
            name: "Chabarowsk",
            country: "ru",
            distance: 795,
            x: 1984,
            y: 412,
        },
        {
            name: "Swobodny",
            country: "ru",
            distance: 764,
            x: 1941,
            y: 385,
        },
        {
            name: "Nerjungri",
            country: "ru",
            distance: 851,
            x: 1913,
            y: 340,
        },
        {
            name: "Jakutsk",
            country: "ru",
            distance: 861,
            x: 1951,
            y: 293,
            angleCCW: false,
        },
        {
            name: "Sussuman",
            country: "ru",
            distance: 1228,
            x: 2071,
            y: 285,
        },
        {
            name: "Magadan",
            country: "ru",
            distance: 626,
            x: 2089,
            y: 317,
            angleCCW: true,
            isEasternEndpoint: true,
        },
        {
            name: "Anchorage",
            country: "us",
            distance: 2832,
            x: 95,
            y: 346,
            isWesternStartpoint: true,
            angleCCW: true,
        },
        {
            name: "Watson Lake",
            country: "ca",
            distance: 1569,
            x: 272,
            y: 352,
        },
        {
            name: "Prince George",
            country: "ca",
            distance: 1323,
            x: 327,
            y: 391,
        },
        {
            name: "Vancouver",
            country: "ca",
            distance: 783,
            x: 339,
            y: 427,
        },
        {
            name: "Portland",
            country: "us",
            distance: 509,
            x: 339,
            y: 459,
        },
        {
            name: "Sacramento",
            country: "us",
            distance: 930,
            x: 346,
            y: 512,
        },
        {
            name: "Los Angeles",
            country: "us",
            distance: 617,
            x: 369,
            y: 543,
            angleCCW: true,
        },
        {
            name: "Phoenix",
            country: "us",
            distance: 600,
            x: 413,
            y: 548,
            angleCCW: true,
        },
        {
            name: "Hermosillo",
            country: "mx",
            distance: 861,
            x: 423,
            y: 569,
        },
        {
            name: "Guadalajara",
            country: "mx",
            distance: 1355,
            x: 461,
            y: 621,
        },
        {
            name: "Mexiko Stadt",
            country: "mx",
            distance: 553,
            x: 484,
            y: 635,
        },
        {
            name: "Oaxaca",
            country: "mx",
            distance: 462,
            x: 500,
            y: 648,
            angleCCW: true,
        },
        {
            name: "Guatemala Stadt",
            country: "gt",
            distance: 986,
            x: 535,
            y: 660,
            angleCCW: true,
        },
        {
            name: "Tegucigalpa",
            country: "hn",
            distance: 651,
            x: 559,
            y: 668,
        },
        {
            name: "Managua",
            country: "ni",
            distance: 366,
            x: 568,
            y: 678,
            angleCCW: true,
        },
        {
            name: "San José",
            country: "cr",
            distance: 424,
            x: 578,
            y: 693,
            angleCCW: true,
        },
        {
            name: "Panama City",
            country: "pa",
            distance: 851,
            x: 609,
            y: 703,
            angleCCW: true,
        },
        {
            name: "Medellin",
            country: "co",
            distance: 494,
            x: 637,
            y: 718,
        },
        {
            name: "Quito",
            country: "ec",
            distance: 1183,
            x: 614,
            y: 757,
        },
        {
            name: "Guayaquil",
            country: "ec",
            distance: 421,
            x: 607,
            y: 769,
        },
        {
            name: "Sullana",
            country: "pe",
            distance: 451,
            x: 600,
            y: 785,
        },
        {
            name: "Lima",
            country: "pe",
            distance: 1019,
            x: 623,
            y: 827,
            angleCCW: true,
        },
        {
            name: "La Paz",
            country: "bo",
            distance: 1517,
            x: 675,
            y: 853,
        },
        {
            name: "Antofagasta",
            country: "cl",
            distance: 1116,
            x: 670,
            y: 893,
        },
        {
            name: "Santiago de Chile",
            country: "cl",
            distance: 1335,
            x: 664,
            y: 968,
        },
        {
            name: "Bariloche",
            country: "ar",
            distance: 1155,
            x: 653,
            y: 1021,
        },
        {
            name: "Rio Gallegos",
            country: "ar",
            distance: 1539,
            x: 680,
            y: 1099,
        },
        {
            name: "Comodo Rivadavia",
            country: "ar",
            distance: 779,
            x: 692,
            y: 1058,
        },
        {
            name: "Bahia Blanca",
            country: "ar",
            distance: 1093,
            x: 729,
            y: 1011,
        },
        {
            name: "Buenos Aires",
            country: "ar",
            distance: 635,
            x: 752,
            y: 987,
            left: true,
        },
        {
            name: "Montevideo",
            country: "uy",
            distance: 184,
            x: 764,
            y: 982,
        },
        {
            name: "Porto Alegre",
            country: "br",
            distance: 789,
            x: 797,
            y: 941,
        },
        {
            name: "Curtiba",
            country: "br",
            distance: 684,
            x: 809,
            y: 916,
        },
        {
            name: "Sao Paulo",
            country: "br",
            distance: 417,
            x: 833,
            y: 902,
        },
        {
            name: "Rio de Janeiro",
            country: "br",
            distance: 434,
            x: 855,
            y: 892,
        },
        {
            name: "Vitória",
            country: "br",
            distance: 524,
            x: 867,
            y: 869,
        },
        {
            name: "Salvador",
            country: "br",
            distance: 1167,
            x: 870,
            y: 827,
        },
        {
            name: "Recife",
            country: "br",
            distance: 805,
            x: 896,
            y: 801,
        },
        {
            name: "Fortaleza",
            country: "br",
            distance: 759,
            x: 868,
            y: 772,
            angleCCW: true,
        },
        {
            name: "Sao Luis",
            country: "br",
            distance: 900,
            x: 831,
            y: 772,
            angleCCW: true,
        },
        {
            name: "Belèm",
            country: "br",
            distance: 580,
            x: 806,
            y: 758,
        },
        {
            name: "Macapá",
            country: "br",
            distance: 333,
            x: 794,
            y: 746,
        },
        {
            name: "Cayenne",
            country: "gf",
            distance: 333,
            x: 781,
            y: 720,
        },
        {
            name: "Paramaribo",
            country: "sr",
            distance: 333,
            x: 762,
            y: 711,
            angleCCW: true,
        },
        {
            name: "Georgetown",
            country: "gy",
            distance: 444,
            x: 737,
            y: 706,
            angleCCW: false,
        },
        {
            name: "Caracas",
            country: "ve",
            distance: 1044,
            x: 681,
            y: 688,
            left: true,
        },
        {
            name: "Port au Prince",
            country: "ht",
            distance: 520,
            x: 662,
            y: 643,
        },
        {
            name: "Havanna",
            country: "cu",
            distance: 880,
            x: 596,
            y: 609,
        },
        {
            name: "Miami",
            country: "us",
            distance: 1068,
            x: 602,
            y: 585,
        },
        {
            name: "Atlanta",
            country: "us",
            distance: 711,
            x: 573,
            y: 538,
        },
        {
            name: "Charlotte",
            country: "us",
            distance: 268,
            x: 600,
            y: 520,
        },
        {
            name: "Washington",
            country: "us",
            distance: 405,
            x: 628,
            y: 487,
        },
        {
            name: "New York City",
            country: "us",
            distance: 241,
            x: 653,
            y: 477,
        },
        {
            name: "Bangor",
            country: "us",
            distance: 481,
            x: 671,
            y: 451,
        },
        {
            name: "Rigolet",
            country: "ca",
            distance: 1280,
            x: 736,
            y: 373,
        },
        {
            name: "Nanortalik",
            country: "gl",
            distance: 1028,
            x: 807,
            y: 319,
        },
        {
            name: "Ammassalik",
            country: "gl",
            distance: 720,
            x: 876,
            y: 270,
            angleCCW: false,
        },
        {
            name: "Reykjavík",
            country: "is",
            distance: 757,
            x: 963,
            y: 282,
            angleCCW: false,
        },
        {
            name: "Neskaupstaður",
            country: "is",
            distance: 703,
            x: 1024,
            y: 271,
            angleCCW: false,
        },
        {
            name: "Bodø",
            country: "no",
            distance: 1269,
            x: 1213,
            y: 255,
        },
        {
            name: "Nordkap",
            country: "no",
            distance: 995,
            x: 1287,
            y: 212,
        },
        {
            name: "Murmansk",
            country: "ru",
            distance: 709,
            x: 1337,
            y: 240,
        },
        {
            name: "Oulu",
            country: "fi",
            distance: 1473,
            x: 1286,
            y: 277,
        },
        {
            name: "Petrosawodsk",
            country: "ru",
            distance: 758,
            x: 1349,
            y: 314,
            left: true,
        },
        {
            name: "Archangelsk",
            country: "ru",
            distance: 1335,
            x: 1386,
            y: 279,
        },
        {
            name: "Kotlas",
            country: "ru",
            distance: 631,
            x: 1414,
            y: 314,
        },
        {
            name: "Perm",
            country: "ru",
            distance: 923,
            x: 1477,
            y: 340,
        },
        {
            name: "Kasan",
            country: "ru",
            distance: 663,
            x: 1432,
            y: 357,
            angleCCW: true,
        },
        {
            name: "Moskau",
            country: "by",
            distance: 810,
            x: 1369,
            y: 358,
            angleCCW: true,
        },
        {
            name: "Minsk",
            country: "by",
            distance: 715,
            x: 1298,
            y: 374,
            angleCCW: true,
        },
        {
            name: "Danzig",
            country: "pl",
            distance: 715,
            x: 1242,
            y: 372,
            angleCCW: false,
        },
        {
            name: "Kopenhagen",
            country: "dk",
            distance: 609,
            x: 1198,
            y: 357,
            angleCCW: false,
        },
        {
            name: "Hamburg",
            country: "de",
            distance: 338,
            x: 1188,
            y: 384,
        },
        {
            name: "Würzburg",
            country: "de",
            distance: 518,
            x: 1189,
            y: 409,
        },
        {
            name: "Kempten",
            country: "de",
            distance: 268,
            x: 1183,
            y: 426,
            image: "de_kempten_2.jpg",
        },
    ];

    export const countries: Country[] = [
        {
            code: "de",
            name: "Deutschland"
        },
        {
            code: "fr",
            name: "Frankreich"
        },
        {
            code: "it",
            name: "Italien"
        },
        {
            code: "es",
            name: "Spanien"
        },
        {
            code: "gi",
            name: "Gibraltar"
        },
        {
            code: "ma",
            name: "Marokko"
        },
        {
            code: "eh",
            name: "Westsahara"
        },
        {
            code: "sn",
            name: "Senegal"
        },
        {
            code: "gn",
            name: "Guinea"
        },
        {
            code: "sl",
            name: "Sierra Leone"
        },
        {
            code: "ci",
            name: "Cote d`Ivoir"
        },
        {
            code: "gh",
            name: "Ghana"
        },
        {
            code: "bj",
            name: "Benin"
        },
        {
            code: "ng",
            name: "Nigeria"
        },
        {
            code: "cm",
            name: "Kamerun"
        },
        {
            code: "ga",
            name: "Gabun"
        },
        {
            code: "cg",
            name: "Kongo"
        },
        {
            code: "cd",
            name: "D. R. Kongo"
        },
        {
            code: "vn",
            name: "Vietnam"
        },
        {
            code: "kh",
            name: "Kambodscha"
        },
        {
            code: "th",
            name: "Thailand"
        },
        {
            code: "mm",
            name: "Myanmar"
        },
        {
            code: "in",
            name: "Indien"
        },
        {
            code: "pk",
            name: "Pakistan"
        },
        {
            code: "ir",
            name: "Iran"
        },
        {
            code: "ae",
            name: "Ver. arab. Emirate"
        },
        {
            code: "om",
            name: "Oman"
        },
        {
            code: "dj",
            name: "Dschibouti"
        },
        {
            code: "et",
            name: "Äthiopien"
        },
        {
            code: "ao",
            name: "Angola"
        },
        {
            code: "na",
            name: "Namibia"
        },
        {
            code: "za",
            name: "Südafrika"
        },
        {
            code: "mz",
            name: "Mosambik"
        },
        {
            code: "zw",
            name: "Simbabwe"
        },
        {
            code: "mw",
            name: "Malawi"
        },
        {
            code: "tz",
            name: "Tansania"
        },
        {
            code: "ke",
            name: "Kenia"
        },
        {
            code: "hk",
            name: "Hongkong"
        },
        {
            code: "cn",
            name: "China"
        },
        {
            code: "ru",
            name: "Russland"
        },
        {
            code: "us",
            name: "USA"
        },
        {
            code: "ca",
            name: "Kanada"
        },
        {
            code: "mx",
            name: "Mexiko"
        },
        {
            code: "gt",
            name: "Guatemala"
        },
        {
            code: "hn",
            name: "Honduras"
        },
        {
            code: "ni",
            name: "Nicaragua"
        },
        {
            code: "cr",
            name: "Costa Rica"
        },

        {
            code: "pa",
            name: "Panama"
        },
        {
            code: "co",
            name: "Kolumbien"
        },
        {
            code: "ec",
            name: "Ecuador"
        },
        {
            code: "pe",
            name: "Peru"
        },
        {
            code: "bo",
            name: "Bolivien"
        },
        {
            code: "cl",
            name: "Chile"
        },
        {
            code: "ar",
            name: "Argentinien"
        },
        {
            code: "uy",
            name: "Uruguay"
        },
        {
            code: "br",
            name: "Brasilien"
        },
        {
            code: "gf",
            name: "Franz. Guyana"
        },
        {
            code: "sr",
            name: "Suriname"
        },
        {
            code: "gy",
            name: "Guyana"
        },
        {
            code: "ve",
            name: "Venezuela"
        },
        {
            code: "ht",
            name: "Haiti"
        },
        {
            code: "cu",
            name: "Kuba"
        },
        {
            code: "gl",
            name: "Grönland"
        },
        {
            code: "is",
            name: "Island"
        },
        {
            code: "no",
            name: "Norwegen"
        },
        {
            code: "se",
            name: "Schweden"
        },
        {
            code: "dk",
            name: "Dänemark"
        },
        {
            code: "fi",
            name: "Finnland"
        },
        {
            code: "by",
            name: "Weißrussland"
        },
        {
            code: "pl",
            name: "Polen"
        },

    ];
}
