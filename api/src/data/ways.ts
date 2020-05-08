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
    ];
}
