// tslint:disable-next-line
export module data {
    export interface City {
        name: string;
        country: string;
        distance: number;
        x?: number;
        y?: number;
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
            x: 500,
            y: 172,
        },
        {
            name: "Marseille",
            country: "fr",
            distance: 964,
            x: 500,
            y: 191,
        },
        {
            name: "Barcelona",
            country: "es",
            distance: 508,
            x: 490,
            y: 200,
        },
        {
            name: "Gibraltar",
            country: "gi",
            distance: 1108,
            x: 468,
            y: 217,
        },
        {
            name: "Marrakesch",
            country: "ma",
            distance: 653,
            x: 465,
            y: 234,
        },
        {
            name: "Ad Dakhla",
            country: "eh",
            distance: 1406,
            x: 442,
            y: 261,
        },
        {
            name: "Dakar",
            country: "sn",
            distance: 1367,
            x: 432,
            y: 297,
        },
        {
            name: "Conakry",
            country: "gn",
            distance: 1199,
            x: 446,
            y: 314,
        },
        {
            name: "Makeni",
            country: "sl",
            distance: 271,
            x: 452,
            y: 316,
        },
        {
            name: "Nzerekore",
            country: "gn",
            distance: 516,
            x: 460,
            y: 319
        },
        {
            name: "Yamoussoukro",
            country: "ci",
            distance: 519,
            x: 471,
            y: 322,
        },
        {
            name: "Kumasi",
            country: "gh",
            distance: 516,
            x: 481,
            y: 321
        },
        {
            name: "Proto-Novo",
            country: "bj",
            distance: 648,
            x: 490,
            y: 323,
        },
        {
            name: "Onitsha",
            country: "ng",
            distance: 543
        },
        {
            name: "Douala",
            country: "cm",
            distance: 666
        },
        {
            name: "Oyem",
            country: "ga",
            distance: 546
        },
        {
            name: "Mandilou",
            country: "ga",
            distance: 602
        },
        {
            name: "Dolisie",
            country: "cg",
            distance: 445
        },
        {
            name: "Kinshasa",
            country: "cd",
            distance: 390
        },
        {
            name: "Luanda",
            country: "ao",
            distance: 818
        },
        {
            name: "Lubango",
            country: "ao",
            distance: 898
        },
        {
            name: "Windhuk",
            country: "na",
            distance: 1158
        },
        {
            name: "Kapstadt",
            country: "za",
            distance: 1479
        },
        {
            name: "Port Elizabeth",
            country: "za",
            distance: 749
        },
        {
            name: "Durban",
            country: "za",
            distance: 910
        },
        {
            name: "Maputo",
            country: "mz",
            distance: 542
        },
        {
            name: "Harare",
            country: "zw",
            distance: 1163
        },
        {
            name: "Lilongwe",
            country: "mw",
            distance: 817
        },
        {
            name: "Dodoma",
            country: "tz",
            distance: 1312
        },
        {
            name: "Nairobi",
            country: "ke",
            distance: 689
        },
        {
            name: "Awassa",
            country: "et",
            distance: 1273
        },
        {
            name: "Dschibouti",
            country: "dj",
            distance: 998
        },
        {
            name: "Salala",
            country: "om",
            distance: 1549
        },
        {
            name: "Dubai",
            country: "ae",
            distance: 1281
        },
        {
            name: "Tschahbahar",
            country: "ir",
            distance: 667
        },
        {
            name: "Karatschi",
            country: "pk",
            distance: 980
        },
        {
            name: "Ahmedabad",
            country: "in",
            distance: 851
        },
        {
            name: "Mumbai",
            country: "in",
            distance: 525
        },
        {
            name: "Madurai",
            country: "in",
            distance: 1427
        },
        {
            name: "Kakinada",
            country: "in",
            distance: 1123
        },
        {
            name: "Kalkutta",
            country: "in",
            distance: 1025
        },
        {
            name: "Mandalay",
            country: "mm",
            distance: 1399
        },
        {
            name: "Rangun",
            country: "mm",
            distance: 628
        },
        {
            name: "Bangkok",
            country: "th",
            distance: 837
        },
        {
            name: "Phnom Penh",
            country: "kh",
            distance: 719
        },
        {
            name: "Pleiku",
            country: "vn",
            distance: 627
        },
        {
            name: "Hanoi",
            country: "vn",
            distance: 1102
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
    ];
}
