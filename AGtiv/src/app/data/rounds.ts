// tslint:disable-next-line
export module data {
    export interface City {
        name: string;
        country: string;
        distance: number;
        x: number;
        y: number;
        year: number;
        text: string;
        isSummer: boolean;
        angleCCW?: boolean;
        left?: boolean;
        isEasternEndpoint?: boolean;
        isWesternStartpoint?: boolean;
        image?: string;
    }

    export interface Round {
        id: number;
        startDate: Date;
        text: string;
        postText: string;
        cities: City[];
    }

    export interface Country {
        code: string;
        name: string;
    }

    export const rounds: Round[] = [
        {
            id: 1,
            postText: `<p>Schön, dass Du so fleißig mitgemacht hast! Die erste Runde von AGtiv ist leider nun schon vorbei.</p>
            <p>Du findest alle Leistungen und Ergebnisse in der <a href="/scores">Bestenliste</a>.</p>
            <div class="alert alert-primary">
                <h5>Es gibt noch eine zweite Runde mit neuen Zielen!</h5>
                <p>Sie beginnt am <b>Samstag, 30. Mai</b>.</p>
            </div>`,
            startDate: new Date("2021-04-28"),
            text: `<p>- Das AG radelt, rollert und läuft gemeinsam einmal um die Welt! -</p><p>Ziel unseres Projekts <b><i>AG</i>tiv</b> ist es, eine Abwechslung zum momentan sehr bewegungsarmen Home School Alltag zu bieten und auch in Zeiten des social distancing den Gemeinschaftsgeist am Allgäu-Gymnasium zu pflegen. </p>
            <p>Mit einer <b>sportlichen Gemeinschaftsleistung</b> der gesamten Schulfamilie wollen wir versuchen, einmal virtuell die Welt zu umrunden! Aktuell leisten <span class="badge badge-primary fakebadge">{{userCount}} Teilnehmer</span> ihren
                Beitrag für dieses Ziel.
            </p>
            <p>Jedes Mitglied der Schulfamilie - egal ob Radler, Läufer oder Inliner/Skiroller - kann jeden Tag einen kleinen Beitrag dazu leisten. Näheres erfahrt Ihr in den Regeln. </p>
            <p>Zum Mitmachen eingeladen sind alle Schülerinnen und Schüler, deren Eltern und sowie alle Lehrkräfte am Allgäu-Gymnasium. Viel Spaß beim Trainieren! </p>
            <p>Eure Fachschaft Sport</p>`,
            cities: [
                {
                    name: "Kempten",
                    country: "de",
                    distance: 0,
                    x: 1183,
                    y: 426,
                    year: 0,
                    text: "Hier geht's los!",
                    isSummer: true,
                },
                {
                    name: "Olympia",
                    country: "gr",
                    distance: 964,
                    x: 1159,
                    y: 462,
                    year: 1350,
                    text: "Hier waren die ersten Spiele, blablabla",
                    isSummer: true,
                },
            ],
        }
    ]

    export const countries: Country[] = [
        {
            code: "ae",
            name: "Ver. arab. Emirate"
        },
        {
            code: "af",
            name: "Afghanistan"
        },
        {
            code: "ao",
            name: "Angola"
        },
        {
            code: "ar",
            name: "Argentinien"
        },
        {
            code: "au",
            name: "Australien"
        },
        {
            code: "az",
            name: "Aserbaidschan"
        },
        {
            code: "bg",
            name: "Bulgarien"
        },
        {
            code: "bj",
            name: "Benin"
        },
        {
            code: "bn",
            name: "Brunei"
        },
        {
            code: "bo",
            name: "Bolivien"
        },
        {
            code: "br",
            name: "Brasilien"
        },
        {
            code: "bt",
            name: "Bhutan"
        },
        {
            code: "by",
            name: "Weißrussland"
        },
        {
            code: "ca",
            name: "Kanada"
        },
        {
            code: "cd",
            name: "D. R. Kongo"
        },
        {
            code: "cd",
            name: "Demokratische Republik Kongo"
        },
        {
            code: "cg",
            name: "Kongo"
        },
        {
            code: "ch",
            name: "Schweiz"
        },
        {
            code: "ci",
            name: "Cote d`Ivoir"
        },
        {
            code: "ck",
            name: "Cookinseln"
        },
        {
            code: "cl",
            name: "Chile"
        },
        {
            code: "cm",
            name: "Kamerun"
        },
        {
            code: "cn",
            name: "China"
        },
        {
            code: "cn",
            name: "Tibet"
        },
        {
            code: "co",
            name: "Kolumbien"
        },
        {
            code: "cr",
            name: "Costa Rica"
        },
        {
            code: "cu",
            name: "Kuba"
        },
        {
            code: "de",
            name: "Deutschland"
        },
        {
            code: "dj",
            name: "Dschibouti"
        },
        {
            code: "dk",
            name: "Dänemark"
        },
        {
            code: "dz",
            name: "Algerien"
        },
        {
            code: "ec",
            name: "Ecuador"
        },
        {
            code: "eh",
            name: "Westsahara"
        },
        {
            code: "es",
            name: "Spanien"
        },
        {
            code: "et",
            name: "Äthiopien"
        },
        {
            code: "fi",
            name: "Finnland"
        },
        {
            code: "fj",
            name: "Fidschi"
        },
        {
            code: "fr",
            name: "Frankreich"
        },
        {
            code: "ga",
            name: "Gabun"
        },
        {
            code: "ge",
            name: "Georgien"
        },
        {
            code: "gf",
            name: "Franz. Guyana"
        },
        {
            code: "gh",
            name: "Ghana"
        },
        {
            code: "gi",
            name: "Gibraltar"
        },
        {
            code: "gl",
            name: "Grönland"
        },
        {
            code: "gn",
            name: "Guinea"
        },
        {
            code: "gt",
            name: "Guatemala"
        },
        {
            code: "gy",
            name: "Guyana"
        },
        {
            code: "hk",
            name: "Hongkong"
        },
        {
            code: "hn",
            name: "Honduras"
        },
        {
            code: "hr",
            name: "Kroatien"
        },
        {
            code: "ht",
            name: "Haiti"
        },
        {
            code: "id",
            name: "Indonesien"
        },
        {
            code: "in",
            name: "Indien"
        },
        {
            code: "ir",
            name: "Iran"
        },
        {
            code: "is",
            name: "Island"
        },
        {
            code: "it",
            name: "Italien"
        },
        {
            code: "jp",
            name: "Japan"
        },
        {
            code: "ke",
            name: "Kenia"
        },
        {
            code: "kh",
            name: "Kambodscha"
        },
        {
            code: "kr",
            name: "Südkorea"
        },
        {
            code: "ma",
            name: "Marokko"
        },
        {
            code: "mm",
            name: "Myanmar"
        },
        {
            code: "mw",
            name: "Malawi"
        },
        {
            code: "mx",
            name: "Mexiko"
        },
        {
            code: "mz",
            name: "Mosambik"
        },
        {
            code: "na",
            name: "Namibia"
        },
        {
            code: "ne",
            name: "Niger"
        },
        {
            code: "ng",
            name: "Nigeria"
        },
        {
            code: "ni",
            name: "Nicaragua"
        },
        {
            code: "no",
            name: "Norwegen"
        },
        {
            code: "np",
            name: "Nepal"
        },
        {
            code: "nz",
            name: "Neuseeland"
        },
        {
            code: "om",
            name: "Oman"
        },
        {
            code: "pa",
            name: "Panama"
        },
        {
            code: "pe",
            name: "Peru"
        },
        {
            code: "pf",
            name: "Französisch-Polynesien"
        },
        {
            code: "ph",
            name: "Philippinen"
        },
        {
            code: "pk",
            name: "Pakistan"
        },
        {
            code: "pl",
            name: "Polen"
        },
        {
            code: "pn",
            name: "Piticairninseln"
        },
        {
            code: "py",
            name: "Paraguay"
        },
        {
            code: "rs",
            name: "Serbien"
        },
        {
            code: "ru",
            name: "Russland"
        },
        {
            code: "se",
            name: "Schweden"
        },
        {
            code: "sh",
            name: "St. Helena"
        },
        {
            code: "sl",
            name: "Sierra Leone"
        },
        {
            code: "sn",
            name: "Senegal"
        },
        {
            code: "sr",
            name: "Suriname"
        },
        {
            code: "ss",
            name: "Südsudan"
        },
        {
            code: "td",
            name: "Tschad"
        },
        {
            code: "th",
            name: "Thailand"
        },
        {
            code: "tl",
            name: "Osttimor"
        },
        {
            code: "tm",
            name: "Turkmenistan"
        },
        {
            code: "tn",
            name: "Tunesien"
        },
        {
            code: "to",
            name: "Tonga"
        },
        {
            code: "tr",
            name: "Türkei"
        },
        {
            code: "tw",
            name: "Taiwan"
        },
        {
            code: "tz",
            name: "Tansania"
        },
        {
            code: "us",
            name: "USA"
        },
        {
            code: "uy",
            name: "Uruguay"
        },
        {
            code: "ve",
            name: "Venezuela"
        },
        {
            code: "vn",
            name: "Vietnam"
        },
        {
            code: "ws",
            name: "Samoa"
        },
        {
            code: "za",
            name: "Südafrika"
        },
        {
            code: "zw",
            name: "Simbabwe"
        },
    ];
}
