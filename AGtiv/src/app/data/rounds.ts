// tslint:disable-next-line
export module data {
    export interface City {
        name: string;
        country: string;
        distance: number;
        x: number;
        y: number;
        year?: number;
        text?: string;
        isSummer?: boolean;
        angleCCW?: boolean;
        left?: boolean;
        isEasternEndpoint?: boolean;
        isWesternStartpoint?: boolean;
        isEasternStartpoint?: boolean;
        isWesternEndpoint?: boolean;
        image?: string;
        isExtraCity?: boolean;
        wikiUrl: string;
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
            postText: `<div class="alert alert-warning">ToDo</div>`,
            startDate: new Date("2020-03-22"),
            text: `<p>- Das AG radelt und läuft gemeinsam mit dem Olympischen Feuer von Olympia nach Tokyo! -</p
            <p>Ziel unseres Projekts <b><i>AG</i>tiv</b> ist es, eine Abwechslung zum momentan sehr bewegungsarmen Home School Alltag zu bieten und auch in Zeiten des social distancing den Gemeinschaftsgeist am Allgäu-Gymnasium zu pflegen. </p>
            <p>Mit einer <b>sportlichen Gemeinschaftsleistung</b> der gesamten Schulfamilie wollen wir versuchen, das Olympische Feuer von der Entzündung in Olympia über die Orte der Olympischen Sommer- und Winterspiele der Neuzeit bis nach Tokyo zu tragen! Aktuell leisten <span class="badge badge-primary fakebadge">{{userCount}} Teilnehmer</span> ihren
                Beitrag für dieses Ziel.
            </p>
            <p>Jedes Mitglied der Schulfamilie - egal ob Radler oder Läufer - kann jeden Tag einen kleinen Beitrag dazu leisten. Näheres erfahrt Ihr in den Regeln. </p>
            <p>Zum Mitmachen eingeladen sind alle Schülerinnen und Schüler, deren Eltern,  Lehrkräfte und sowie alle ehemaligen über den RAVK am Allgäu-Gymnasium. Viel Spaß beim Trainieren! </p>
            <p>Eure SMV</p>`,
            cities: [
                {
                    name: "Olympia",
                    country: "gr",
                    distance: 0,
                    x: 1267,
                    y: 514,
                    year: 0,
                    left: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympischer_Fackellauf",
                    text: "Die heute nicht mehr bewohnte Stadt Olympia ist – wie am Namen unschwer zu erkennen – der Ursprungsort der Olympischen Spiele. In der Antike flankiert von einer heiligen Waffenruhe, die bei den streitlustigen Griechen bitter nötig war, wurden sie im Laufe der Zeit zu einem Symbol der Einheit aller Griechen. Auch heute noch steht der friedensstiftende und der Völkerverständigung dienliche Charakter der Spiele zumindest offiziell im Mittelpunkt. ",
                },
                {
                    name: "Athen",
                    country: "gr",
                    distance: 266,
                    x: 1280,
                    y: 511,
                    year: 2004,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Sommerspiele_1896",
                    text: "Athen, die Hauptstadt Griechenlands, hat eine bewegte Geschichte hinter sich. Nicht nur der Ursprung des Marathons steht der Sage nach in engem Zusammenhang mit Athen, auch die ersten Olympischen Spiele der Neuzeit wurden 1896 hier abgehalten, damals aber noch in deutlich kleinerem Rahmen als heute.",
                    isSummer: true,
                },
				{
                    name: "Istanbul",
                    country: "tr",
                    distance: 1094,
                    left: true,
                    x: 1307,
                    y: 483,
                    wikiUrl: "https://de.wikipedia.org/wiki/Istanbul",
                    isExtraCity: true,
                },
				{
                    name: "Samsun",
                    country: "tr",
                    distance: 731,
                    x: 1348,
                    y: 479,
                    angleCCW: false,
                    wikiUrl: "https://de.wikipedia.org/wiki/Samsun",
                    isExtraCity: true,
                },
				{
                    name: "Sotschi",
                    country: "ru",
                    distance: 903,
                    x: 1386,
                    y: 469,
                    year: 2014,
                    text: "Sotschi liegt am Schwarzen Meer und auf der gleichen Breitenlage wie Florenz und Nizza. Auch die Temperaturen fallen nur sehr selten unter 0°C. Die meisten Wettkämpfe fanden deshalb in den Bergen im Landesinneren auf über 600m Höhe statt. Fast alle Lifte, Bahnen etc. mussten neu gebaut werden, denn vorher war fast nichts vorhanden. Dies machte Sotchi zu den teuersten Spielen bisher.",
                    isSummer: false,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Winterspiele_2014",
                },
				{
                    name: "Rostow am Don",
                    country: "ru",
                    distance: 553,
                    x: 1370,
                    y: 439,
                    wikiUrl: "https://de.wikipedia.org/wiki/Rostow_am_Don",
                    isExtraCity: true,
                },
				{
                    name: "Woronesch",
                    country: "ru",
                    distance: 568,
                    x: 1366,
                    y: 405,
                    wikiUrl: "https://de.wikipedia.org/wiki/Woronesch",
                    isExtraCity: true,
                },
				{
                    name: "Moskau",
                    country: "ru",
                    distance: 515,
                    x: 1362,
                    y: 368,
                    year: 1980,
                    text: "Moskau, die Hauptstadt Russlands liegt an der Moskwa. Berühmt ist die Stadt für den Kreml, den Amtssitz des Präsidenten, und natürlich den Roten Platz mit den Türmen der Basilius-Kathedrale. 1980 war Moskau Austragungsort der olympischen Sommerspiele, die allerdings wegen des 1979 begonnenen Einmarsches der Sowjets in Afghanistan von vielen Ländern, darunter auch Deutschland, boykottiert wurden.",
                    isSummer: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Sommerspiele_1980",
                },
				{
                    name: "Helsinki",
                    country: "fi",
                    distance: 1082,
                    x: 1283,
                    y: 324,
                    year: 1952,
                    text: "Während überall auf der Erde der Meeresspiegel ansteigt, hat Finnland damit kein Problem. Die Gletscher der letzten Eiszeit waren so schwer, dass sie die Erdkruste in Skandinavien in den Erdmantel hineindrückten. Seit das Eis vor 20.000 Jahren abgeschmolzen ist, hebt sich das Land langsam wieder an und der Meeresspiegelanstieg wird dadurch mehr als ausgeglichen. In Teilen Finnlands hebt sich das Land um 1cm/Jahr.",
                    isSummer: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Sommerspiele_1952",
                },
				{
                    name: "Stockholm",
                    country: "se",
                    distance: 524,
                    x: 1244,
                    y: 333,
                    year: 1912,
                    text: "Das Stadtgebiet Stockholms erstreckt sich über insgesamt 14 Inseln, die 53 Brücken miteinander verbinden. Dies hat Stockholm auch die Bezeichnung \"Venedig des Nordens\" eingebracht. Der Küste vorgelagert, finden sich mehr als 24.000 kleinere und größere Inseln, die als Schären bezeichnet werden, und die, wie auch die Ostsee selbst, ein Relikt aus der letzten Eiszeit darstellen.",
                    isSummer: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Sommerspiele_1912",
                },
				{
                    name: "Lillehammer",
                    country: "no",
                    distance: 614,
                    x: 1194,
                    y: 312,
                    year: 1994,
                    text: "Es gibt kaum einen Ort in Norwegen, der weiter vom Meer entfernt ist als Lillehammer. Und das ist auch gut so, denn sonst hätte es dort nie genug Schnee für Winterspiele gegeben. Denn der warme Golfstrom fließt an Norwegens Küste vorbei und beschert zumindest den Küstenregionen ein für diese Breitenlage ungewöhnlich mildes Klima.",
                    isSummer: false,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Winterspiele_1994",
                },
				{
                    name: "Oslo",
                    country: "no",
                    distance: 186,
                    x: 1195,
                    y: 334,
                    year: 1952,
                    text: "Selbst in der Hauptstadt des so weit nördlich gelegenen Norwegen ist die Schneelage nicht immer sicher – für die Olympischen Winterspiele 1952 mussten, weil es zu wenig Schnee für die Abfahrten gab, Pisten künstlich präpariert werden. Oslo hieß bis 1924 „Kristiana\". Fast ein Drittel der gesamten Bevölkerung Norwegens (5,3 Millionen) lebt im Ballungsraum Oslo.",
                    isSummer: false,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Winterspiele_1952",
                },
				{
                    name: "Berlin",
                    country: "de",
                    distance: 990,
                    x: 1208,
                    y: 397,
                    year: 1936,
                    text: "Olympia 1936 in Deutschland: Im Februar in Garmisch-Partenkirchen, im August in Berlin. Das Nazi-Regime nutzte und missbrauchte die Spiele, um sich im Ausland als sportbegeisterte und friedliebende Nation zu präsentieren. Bis heute ist das damals errichtete Olympiastadion ein Wahrzeichen der Stadt und Heimspielstätte von Hertha BSC.",
                    isSummer: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Sommerspiele_1936",
                },
				{
                    name: "Innsbruck",
                    country: "at",
                    distance: 753,
                    x: 1194,
                    y: 444,
                    year: 1976,
                    text: "Innsbruck ist die Hauptstadt des Bundeslandes Tirol. Gerade der Winter 1964 war sehr schneearm, so dass das Bundesheer 20000 Eisblöcke zu den Veranstaltungsorten transportieren musste. Die Bergisel-Schanze in Innsbruck ist wohl die einzige Skisprungschanze, bei der die Skispringer während des Fluges auf einen Friedhof schauen.",
                    isSummer: false,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Winterspiele_1976",
                },
				{
                    name: "Sarajevo",
                    country: "ba",
                    distance: 989,
                    x: 1237,
                    y: 458,
                    year: 1984,
                    text: "1984 fanden die olympischen Winterspiele in Sarajevo im damaligen Jugoslawien statt. Acht Jahre später tobte der Bosnienkrieg. Heute ist Sarajevo die Hauptstadt des Staates Bosnien Herzegowina.",
                    isSummer: false,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Winterspiele_1984",
                },
				{
                    name: "Garmisch-Patenkirchen",
                    country: "de",
                    distance: 985,
                    x: 1193,
                    y: 435,
                    year: 1936,
                    text: "Teile der Olympiaanlage der Winterspiele von Garmisch-Partenkirchen 1936 sind auch heute noch beim alljährlichen Neujahrsspringen der 4-Schanzentournee zu sehen wenn die Athleten nach den Sprüngen im Auslauf unten ankommen. Die Skisprungarena bot zu Beginn der Spiele 40.000 Zuschauer Platz, auf Grund des enormen Zuschauerandrangs wurde sie noch während der Spiele auf 60.000 Plätze ausgebaut.",
                    isSummer: false,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Winterspiele_1936",
                },
				{
                    name: "Turin",
                    country: "it",
                    distance: 578,
                    x: 1179,
                    y: 454,
                    year: 2006,
                    angleCCW: true,
                    text: "Die Stadt Turin ist eine wichtige Industriestadt im Norden Italiens und Zentrum der italienischen Autoindustrie. Viele Wettbewerbe wurden im über 90km entfernten Sestriere ausgetragen, das mit über 2000m Höhe sehr schneesicher ist. Erfolgreichster deutscher Teilnehmer war übrigens ein Allgäuer: Michael Greis aus Nesselwang gewann 3x Gold.",
                    isSummer: false,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Winterspiele_2006",
                },
				{
                    name: "Rom",
                    country: "it",
                    distance: 692,
                    x: 1204,
                    y: 479,
                    angleCCW: true,
                    year: 1960,
                    text: "Rom, die Hauptstadt Italiens, im Sommer 1960: Olympia in der \"Ewigen Stadt\" - Spiele, bei denen es eine ganze Reihe von Höhepunkten gab. Unter anderem lief als erster afrikanischer Sportler Abebe Bikila barfuß zum olympischen Gold im Marathon und der erst 18-jährige Muhammad Ali gewann seine Medaille im Halbschwergewicht. 1960 fand ein Vorläufer der Paralympics statt - die \"Weltspiele der Gelähmten\".",
                    isSummer: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Sommerspiele_1960",
                },
				{
                    name: "Grenoble",
                    country: "fr",
                    distance: 921,
                    x: 1166,
                    y: 455,
                    year: 1968,
                    left: true,
                    text: "Als die Winterspiele 1968 in der französischen Alpenmetropole ausgetragen wurden, gab es die Berliner Mauer schon seit sieben Jahren, doch zum ersten Mal traten die beiden deutschen Mannschaften der DDR und BRD gegeneinander an – allerdings noch mit gleicher Flagge und Hymne. Hier wurden auch die ersten Dopingkontrollen bei Olympischen Spielen durchgeführt.",
                    isSummer: false,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Winterspiele_1968",
                },
				{
                    name: "Paris",
                    country: "fr",
                    distance: 576,
                    x: 1146,
                    y: 424,
                    year: 1924,
                    left: true,
                    text: "Ballonwettfahrten, Hindernisschwimmen und die Jagd auf echte Tauben – was heute merkwürdig klingt, gehörte im Jahr 1900 in der französischen Hauptstadt zu den Disziplinen der Olympischen Spiele, die im Rahmen der Weltausstellung stattfanden. Man darf gespannt sein, was den Zuschauer 2024 in Paris bei den übernächsten Olympischen Spielen erwartet.",
                    isSummer: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Sommerspiele_1924",
                },
				{
                    name: "London",
                    country: "gb",
                    distance: 459,
                    x: 1128,
                    y: 398,
                    year: 2012,
                    angleCCW: false,
                    text: "1908 half in der britischen Hauptstadt der berühmte Sherlock- Holmes-Autor Arthur Doyle einem erschöpften italienischen Marathonläufer über die Ziellinie, der für diese Hilfestellung nachträglich disqualifiziert wurde. 1944 war dagegen ein friedliches, internationales Miteinander undenkbar – der Zweite Weltkrieg verhinderte die Austragung der Spiele in London. Doch schon 1948 und zuletzt 2012 kämpften die Athleten in London wieder friedlich um Medaillen.",
                    isSummer: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Sommerspiele_2012",
                },
				{
                    name: "Amsterdam",
                    country: "nl",
                    distance: 535,
                    x: 1154,
                    y: 396,
                    year: 1928,
                    angleCCW: false,
                    text: "Amsterdam ist von unzähligen Kanälen, den \"Grachten\" durchzogen. Die Häuser stehen auf Millionen von Pfählen (früher aus Holz, heute aus Beton), die bis zu 20m in den moorigen Untergrund gerammt werden müssen, um festere Schichten zu erreichen, die das Gewicht der Häuser tragen können. Das klappt nicht immer: Viele alte Häuser sind so schief, dass die Bewohner ihre Möbel oder Fußböden anpassen müssen, damit z.B. keine Gegenstände vom Tisch rollen.",
                    isSummer: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Sommerspiele_1928",
                },
				{
                    name: "München",
                    country: "de",
                    distance: 827,
                    x: 1197,
                    y: 433,
                    year: 1972,
                    angleCCW: false,
                    text: "München war Austragungsort der Olympischen Sommerspiele im Jahr 1972. Dafür wurde damals sogar extra ein großes Gelände mit Sportstätten und einem olympischen Dorf für die Athletinnen und Athleten gebaut – für heute umgerechnet etwa 1 Milliarde Euro. Überschattet wurden die friedlichen Spiele 1972 von einem Attentat auf israelische Athleten durch Terroristen. Nach einem Trauertag wurden die Spiele wieder aufgenommen, um ein Zeichen für ein friedliches Miteinander und gegen den Terror zu setzen.",
                    isSummer: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Sommerspiele_1972",
                },
				{
                    name: "Cortina d´ Ampezzo",
                    country: "it",
                    distance: 299,
                    x: 1203,
                    y: 441,
                    year: 1956,
                    angleCCW: true,
                    text: "Cortina d´Ampezzo, ein sehr schöner Skiort in den Dolomiten im Norden Italiens, war 1956 Austragungsort der olympischen Winterspiele. Mit dem Monte Cristallo (3221m) und der Tofana di Rozes (3225m) gilt Cortina als die Königin der Dolomiten.",
                    isSummer: false,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Winterspiele_1956",
                },
				{
                    name: "Chamonix",
                    country: "fr",
                    distance: 644,
                    x: 1170,
                    y: 448,
                    year: 1924,
                    angleCCW: false,
                    text: "Chamonix liegt am Fuße des Mont Blanc, des höchsten Berges der Alpen (4810 m). 1924 wurden in Chamonix die ersten olympischen Winterspiele der Neuzeit ausgetragen.",
                    isSummer: false,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Winterspiele_1924",
                },
				{
                    name: "Antwerpen",
                    country: "be",
                    distance: 888,
                    x: 1153,
                    y: 401,
                    year: 1920,
                    left: true,
                    text: "Im Zentrum der belgischen Hafenstadt Antwerpen kann man Antwerpener Architektur im Stil der flämischen Renaissance bewundern. Peter Paul Rubens, einer der bekanntesten Barockmaler ist ein Kind dieser Stadt.",
                    isSummer: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Sommerspiele_1920",
                },
				{
                    name: "St. Moritz",
                    country: "ch",
                    distance: 936,
                    x: 1187,
                    y: 445,
                    year: 1948,
                    angleCCW: false,
                    text: "St. Moritz ist ein luxuriöser Ferienort im schweizerischen Engadin. In dem Skiort auf 1856 Metern Höhe fanden bereits zweimal olympische Winterspiele statt. Hier trifft sich alles, was Rang und Namen hat.",
                    isSummer: false,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Winterspiele_1948",
                },
				{
                    name: "Albertville",
                    country: "fr",
                    distance: 488,
                    x: 1167,
                    y: 448,
                    year: 1992,
                    left: true,
                    text: "Im französischen Albertville trat Deutschland 1992 zum ersten Mal seit der Wiedervereinigung mit einer gesamtdeutschen Mannschaft auf, die am Ende auch den Medaillenspiegel anführte.",
                    isSummer: false,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Winterspiele_1992",
                },
				{
                    name: "Barcelona",
                    country: "es",
                    distance: 713,
                    x: 1143,
                    y: 482,
                    year: 1992,
                    left: true,
                    text: "Barcelona ist die Hauptstadt Kataloniens und die zweitgrößte Stadt Spaniens. Die dort ausgetragenen Olympischen Sommerspiele 1992 waren eine echte Besonderheit. Zum ersten Mal seit 20 Jahren waren Sportler aller Nationen vertreten, denn nach der Auflösung der Sowjetunion schickten Estland, Lettland und Litauen jeweils eine eigene Mannschaft zu den Spielen und das wiedervereinigte Deutschland startete mit einem gesamtdeutschen Team.  ",
                    isSummer: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Sommerspiele_1992",
                },
				{
                    name: "Malaga",
                    country: "es",
                    distance: 954,
                    x: 1099,
                    y: 517,
                    wikiUrl: "https://de.wikipedia.org/wiki/M%C3%A1laga",
                    isExtraCity: true,
                },
				{
                    name: "Casablanca",
                    country: "ma",
                    distance: 537,
                    x: 1089,
                    y: 532,
                    wikiUrl: "https://de.wikipedia.org/wiki/Casablanca",
                    isExtraCity: true,
                },
				{
                    name: "Fuerteventura",
                    country: "es",
                    distance: 826,
                    x: 1044,
                    y: 565,
                    wikiUrl: "https://de.wikipedia.org/wiki/Fuerteventura",
                    isExtraCity: true,
                },
				{
                    name: "Tarrafal",
                    country: "cv",
                    distance: 1732,
                    x: 958,
                    y: 654,
                    wikiUrl: "https://de.wikipedia.org/wiki/Kap_Verde",
                    isExtraCity: true,
                },
				{
                    name: "Ilha Fernando de Noronha",
                    country: "br",
                    distance: 2396,
                    x: 915,
                    y: 788,
                    wikiUrl: "https://de.wikipedia.org/wiki/Fernando_de_Noronha",
                    isExtraCity: true,
                },
				{
                    name: "Touros",
                    country: "br",
                    distance: 409,
                    x: 900,
                    y: 796,
                    left: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Natal_(Brasilien)",
                    isExtraCity: true,
                },
				{
                    name: "Salvador",
                    country: "br",
                    distance: 1182,
                    x: 873,
                    y: 828,
                    wikiUrl: "https://de.wikipedia.org/wiki/Salvador_(Bahia)",
                    isExtraCity: true,
                },
				{
                    name: "Rio de Janeiro",
                    country: "br",
                    distance: 1626,
                    x: 852,
                    y: 900,
                    year: 2016,
                    text: "Amerigo Vespucci (der Namensgeber \"Amerikas\") sichtete am 1. Januar 1502 eine Bucht, die er für einen Fluss hielt und nannte sie \"Fluss des Januar\". Der Zuckerhut, der Corcovado mit der Christusstatue sowie die Strände von Ipanema und Copacabana machen die Stadt zu einer der schönsten der Welt. Dabei wird häufig das Elend der Favelas übersehen, die von Drogenbanden kontrolliert werden.",
                    isSummer: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Sommerspiele_2016",
                },
				{
                    name: "Brasilia",
                    country: "br",
                    distance: 2713,
                    x: 823,
                    y: 847,
                    left: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Bras%C3%ADlia",
                    isExtraCity: true,
                },
				{
                    name: "Manaus",
                    country: "br",
                    distance: 957,
                    x: 757,
                    y: 777,
                    wikiUrl: "https://de.wikipedia.org/wiki/Manaus",
                    isExtraCity: true,
                },
				{
                    name: "Bogota",
                    country: "co",
                    distance: 1782,
                    x: 639,
                    y: 718,
                    wikiUrl: "https://de.wikipedia.org/wiki/Bogot%C3%A1",
                    isExtraCity: true,
                },
				{
                    name: "Panama City",
                    country: "pa",
                    distance: 816,
                    x: 612,
                    y: 707,
                    left: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Panama_City",
                    isExtraCity: true,
                },
				{
                    name: "Guatemala City",
                    country: "gt",
                    distance: 1866,
                    x: 538,
                    y: 663,
                    left: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Guatemala-Stadt",
                    isExtraCity: true,
                },
				{
                    name: "Mexico City",
                    country: "mx",
                    distance: 1396,
                    x: 493,
                    y: 637,
                    year: 1968,
                    left: true,
                    text: "Oktober 1968, Olympische Spiele in Mexico-City: Zwei dunkelhäutige US-Sprinter stehen auf der Siegertreppe. Sie strecken mit gesenktem Kopf ihre geballte Faust in einem schwarzen Handschuh in die Höhe, während die amerikanische Hymne gespielt wird. Vor den Augen der Welt wollen sie damit ein Zeichen setzen gegen Armut und die Ungerechtigkeit gegenüber Schwarzen in den USA. Mit Erfolg, denn die Bilder lösen eine große Diskussion aus: Dürfen SportlerInnen öffentlich eine politische Meinung vertreten und sich während einer Siegerehrung für Gleichberechtigung einsetzen? Das amerikanische Olympiakomitee ist dagegen. Die zwei Sportler müssen danach sofort das olympische Dorf verlassen und dürfen nie wieder an Olympischen Spielen teilnehmen. Erst viele Jahre später, im Dezember 2020, hat das amerikanische Olympiakomitee nun bekannt gegeben, dass seine SportlerInnen künftig „respektvoll protestieren\" dürfen. Ob bei Olympischen Spielen, beim American Football oder beim Fußball - heute ist es verbreitet und wird unterstützt, dass SportlerInnen sich aktiv dafür einsetzen, dass Rassismus in Gesellschaft und Sport keinen Platz haben darf. ",
                    isSummer: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Sommerspiele_1968",
                },
				{
                    name: "Torreon",
                    country: "mx",
                    distance: 999,
                    x: 460,
                    y: 594,
                    wikiUrl: "https://de.wikipedia.org/wiki/Torre%C3%B3n",
                    isExtraCity: true,
                },
				{
                    name: "Los Angeles",
                    country: "us",
                    distance: 600,
                    x: 359,
                    y: 542,
                    year: 1984,
                    left: true,
                    text: "Los Angeles ist sehr erdbebengefährdet, weil dort Erdplatten aneinander entlangdriften oder sich sogar übereinander schieben. Deswegen wurden lange Zeit keine Hochhäuser gebaut. Dadurch ist die Stadt enorm gewachsen: Die Fläche ist viermal so groß wie die von München, aber auf einen Quadratkilometer leben nur gut halb so viele Menschen. Weil die so weite Wege zurücklegen müssen und meistens Auto fahren, herrscht sehr oft Smog. Olympische Spiele gab es in Los Angeles schon zweimal, 1932 und 1984. Aber 1984 haben die Länder des damaligen Ostblocks um die Sowjetunion nicht mitgemacht – in Moskau erfährst du warum! ",
                    isSummer: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Phoenix_(Arizona)",
                    isExtraCity: true,
                },
				{
                    name: "Phoenix",
                    country: "us",
                    distance: 1361,
                    x: 400,
                    y: 544,
                    angleCCW: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Sommerspiele_1984",
                },
				{
                    name: "Albuquerque",
                    country: "us",
                    distance: 1259,
                    x: 439,
                    y: 532,
                    angleCCW: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Albuquerque",
                    isExtraCity: true,
                },
				{
                    name: "Oklahoma City",
                    country: "us",
                    distance: 868,
                    x: 493,
                    y: 532,
                    angleCCW: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Oklahoma_City",
                    isExtraCity: true,
                },
				{
                    name: "Memphis",
                    country: "us",
                    distance: 745,
                    x: 533,
                    y: 533,
                    angleCCW: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Memphis_(Tennessee)",
                    isExtraCity: true,
                },
				{
                    name: "Atlanta",
                    country: "us",
                    distance: 625,
                    x: 583,
                    y: 540,
                    year: 1996,
                    text: "Atlanta ist die Hauptstadt und größte Stadt des US- Bundesstaates Georgia. Ursprünglich siedelten hier Cherokee und Muskogee-Indianer. Atlanta ist auch Geburtsstadt von Martin Luther King. ",
                    isSummer: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Sommerspiele_1996",
                },
				{
                    name: "St. Louis",
                    country: "us",
                    distance: 889,
                    x: 542,
                    y: 515,
                    year: 1904,
                    text: "St. Louis ist allen Karl May-Fans gut bekannt. Old Shatterhand ritt immer wieder in diese Stadt am Mississippi, die als Tor zum Westen galt. Heute ist St. Louis eine Großstadt in Missouri, die mit typischen Problemen zu kämpfen hat. Die Kriminalität ist hoch, in der Innenstadt stehen Bauruinen und wer es sich leisten kann, zieht aus der Innenstadt in attraktivere Vorstädte.",
                    isSummer: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Sommerspiele_1904",
                },
				{
                    name: "Detroit",
                    country: "us",
                    distance: 864,
                    x: 587,
                    y: 467,
                    wikiUrl: "https://de.wikipedia.org/wiki/Detroit",
                    isExtraCity: true,
                },
				{
                    name: "Lake Placid",
                    country: "us",
                    distance: 181,
                    x: 646,
                    y: 444,
                    year: 1980,
                    text: "Nach 1932 fanden im Jahr 1980 bereits die zweiten olympischen Winterspiele in Lake Placid im US-Bundesstaat New York statt. Erstmals nahm die Volksrepublik China an Olympischen Winterspielen teil. Außerdem wurde zum ersten Mal Kunstschnee eingesetzt.",
                    isSummer: false,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Winterspiele_1980",
                },
				{
                    name: "Montreal",
                    country: "ca",
                    distance: 899,
                    x: 649,
                    y: 438,
                    year: 1976,
                    angleCCW: false,
                    text: "Montreal ist die zweitgrößte Stadt Kanadas, die größte Stadt der Provinz Quebec und nach Paris die zweitgrößte französischsprachige Stadt der Welt. Ein Referendum um die Unabhängigkeit Quebecs von Kanada scheiterte 1995 nur äußerst knapp (49.42% zu 50,58%) und seit 2006 gelten die Einwohner Quebecs als eine eigene Nation innerhalb Kanadas.",
                    isSummer: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Sommerspiele_1976"
                },
				{
                    name: "Sault Ste. Marie",
                    country: "ca",
                    distance: 1008,
                    x: 584,
                    angleCCW: false,
                    y: 439,
                    wikiUrl: "https://de.wikipedia.org/wiki/Sault_Ste._Marie_(Ontario)",
                    isExtraCity: true,
                },
				{
                    name: "Devils Lake",
                    country: "us",
                    distance: 1240,
                    x: 491,
                    y: 423,
                    angleCCW: false,
                    wikiUrl: "https://de.wikipedia.org/wiki/Devils_Lake_(North_Dakota)",
                    isExtraCity: true,
                },
				{
                    name: "Calgary",
                    country: "ca",
                    distance: 1300,
                    x: 382,
                    angleCCW: false,
                    y: 411,
                    year: 1988,
                    text: "Calgary liegt auf 1048m Höhe ca. 80km östlich der Rocky Mountains und damit eigentlich optimal für olympische Winterspiele. Leider führte der Chinook (ein warmer Fallwind wie unser Föhn) dazu, dass bei den Spielen an einem einzigen Tag die Temperatur von –30 auf +12°C anstieg und Schnee und Kunsteis schmolz. Die Verantwortlichen hätten gewarnt sein müssen, denn der Chinook ist in dieser Region ein häufiges Phänomen.",
                    isSummer: false,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Winterspiele_1988",
                },
				{
                    name: "Vancouver",
                    country: "ca",
                    distance: 1007,
                    x: 338,
                    y: 429,
                    year: 2010,
                    text: "Vancouver liegt an der Westküste Kanadas und genau dort, wo die feuchten Luftmassen des Pazifiks über eine Gebirgskette aufsteigen müssen. Auf Vancouver Island wächst deshalb ein gemäßigter Regenwald und in den Bergen um Whistler sorgt dies im Winter für hohe Schneemengen – perfekt für Wintersport.",
                    isSummer: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Winterspiele_2010",
                },
				{
                    name: "Portland",
                    country: "us",
                    distance: 520,
                    x: 326,
                    y: 468,
                    left: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Portland_(Oregon)",
                    isExtraCity: true,
                },
				{
                    name: "Salt Lake City",
                    country: "us",
                    distance: 1309,
                    x: 399,
                    y: 482,
                    year: 2002,
                    text: "Der \"Große Salzsee\", der der Hauptstadt der Mormonen seinen Namen gab, ist ca. 120km lang und hat einen Salzgehalt von bis zu 27%. Er ist damit 7x salzhaltiger als das Mittelmeer. Auf den ausgetrockneten Salzebenen rund um den See werden immer wieder Hochgeschwindigkeitsrennen ausgetragen – wenn es nicht ausnahmsweise einmal geregnet hat.",
                    isSummer: false,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Winterspiele_2002"
                },
				{
                    name: "Squaw Valley",
                    country: "us",
                    distance: 1256,
                    x: 354,
                    y: 494,
                    year: 1960,
                    left: true,
                    text: "Als das \"Tal der Indianerin\" den Zuschlag für die Spiele bekam, stand dort nur ein einziges Hotel. Doch das änderte sich schnell: für Olympia 1960 wurde innerhalb kurzer Zeit ein Wintersportparadies aus dem Boden gestampft. Nur die Bobfahrer gingen in diesem Jahr leer aus. Da nur wenige Teilnehmer erwartet wurden, weigerten sich die Veranstalter, ihnen eine Bahn zu bauen.",
                    isSummer: false,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Winterspiele_1960",
                },
				{
                    name: "Hawaii",
                    country: "us",
                    distance: 4742,
                    x: 139,
                    y: 631,
                    isWesternEndpoint: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Hawaii",
                    isExtraCity: true,
                },
				{
                    name: "Howland Island",
                    country: "us",
                    distance: 3113,
                    x: 2300,
                    y: 749,
                    left: true,
                    isEasternStartpoint: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Howlandinsel",
                    isExtraCity: true,
                },
				{
                    name: "Lakena",
                    country: "tv",
                    distance: 1083,
                    x: 2253,
                    y: 805,
                    wikiUrl: "https://de.wikipedia.org/wiki/Lakena",
                    isExtraCity: true,
                },
				{
                    name: "Vanuatu",
                    country: "vu",
                    distance: 1464,
                    x: 2182,
                    y: 870,
                    wikiUrl: "https://de.wikipedia.org/wiki/Vanuatu",
                    isExtraCity: true,
                },
				{
                    name: "Brisbane",
                    country: "au",
                    distance: 1923,
                    x: 2117,
                    y: 918,
                    wikiUrl: "https://de.wikipedia.org/wiki/Brisbane",
                    isExtraCity: true,
                },
				{
                    name: "Sydney",
                    country: "au",
                    distance: 875,
                    x: 2103,
                    y: 976,
                    year: 2000,
                    text: "Diese australische Metropolregion ist nicht nur Hauptstadt des Bundesstaates New South Wales, sondern auch die größte Stadt des Kontinents und dessen Handels- und Finanzzentrum. Jeder kennt das weltberühmteste Opernhaus, das aber auch 10 x mehr kostete als ursprünglich geplant.",
                    isSummer: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Sommerspiele_2000",
                },
				{
                    name: "Melbourne",
                    country: "au",
                    distance: 1752,
                    x: 2071,
                    y: 1010,
                    year: 1956,
                    text: "Traumlage an der Great-Ocean-Road an der SO-Küste Australiens, zweitgrößte Stadt nach Sydney, südöstlichste Millionenstadt der Welt, größter Museumskomplex der Südhalbkugel - die Hauptstadt des australischen Bundesstaats Viktoria kann sich mit vielen Superlativen schmücken - aber Melbourne trägt auch die wichtigsten Sportveranstaltungen Australiens aus!",
                    isSummer: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Sommerspiele_1956",
                },
				{
                    name: "Mackay",
                    country: "au",
                    distance: 1427,
                    x: 2095,
                    y: 897,
                    left: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Mackay_(Queensland)",
                    isExtraCity: true,
                },
				{
                    name: "Atape",
                    country: "pg",
                    distance: 2133,
                    x: 2046,
                    y: 770,
                    wikiUrl: "https://de.wikipedia.org/wiki/Papua-Neuguinea",
                    isExtraCity: true,
                },
				{
                    name: "Palau",
                    country: "fm",
                    distance: 1455,
                    x: 1977,
                    y: 699,
                    wikiUrl: "https://de.wikipedia.org/wiki/Palau",
                    isExtraCity: true,
                },
				{
                    name: "Nago-Okinawa",
                    country: "jp",
                    distance: 2238,
                    x: 1943,
                    y: 610,
                    wikiUrl: "https://de.wikipedia.org/wiki/Nago",
                    isExtraCity: true,
                },
				{
                    name: "Qingdao",
                    country: "cn",
                    distance: 1275,
                    x: 1900,
                    y: 512,
                    left: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Qingdao",
                    isExtraCity: true,
                },
				{
                    name: "Peking",
                    country: "cn",
                    distance: 646,
                    left: true,
                    x: 1870,
                    y: 485,
                    year: 2008,
                    text: "China ist die aufstrebende Weltmacht und zeigt das auch bei Olympischen Spielen: Nach den Sommerspielen 2008 sollen 2022 auch Winterspiele in der Hauptstadt Peking stattfinden. Das hat noch keine andere Stadt fertig gebracht. Aber dazu muss man wissen, dass die Ski- und Langlaufwettbewerbe rund 150 Kilometer von Peking entfernt ausgetragen werden, weil es in Peking selbst gar keine richtigen Berge gibt. Das bedeutet viel Verkehr und  Peking hat ohnehin große Probleme mit schlechter Luft. ",
                    isSummer: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Sommerspiele_2008",
                },
				{
                    name: "Huludao",
                    country: "cn",
                    distance: 462,
                    x: 1898,
                    y: 484,
                    angleCCW: false,
                    wikiUrl: "https://de.wikipedia.org/wiki/Liaoning",
                    isExtraCity: true,
                },
				{
                    name: "Dandong",
                    country: "cn",
                    distance: 488,
                    x: 1942,
                    y: 487,
                    angleCCW: false,
                    wikiUrl: "https://de.wikipedia.org/wiki/Dangdong",
                    isExtraCity: true,
                },
				{
                    name: "Pyeongchang",
                    country: "kr",
                    distance: 633,
                    x: 1949,
                    y: 506,
                    year: 2018,
                    text: "Die bislang letzten Winterspiele fanden in der südkoreanischen Stadt Pyeongchang statt. Südkorea ist heute bekannt für Smartphones, Autos, Hightech, K-Pop und eben auch als Ausrichter von olympischen Spielen. Noch vor gut 60 Jahren war das Land jedoch ein verarmter Agrarstaat, der auf Wirtschaftshilfen, z.B. von Seiten der USA, angewiesen war.",
                    isSummer: false,
                    angleCCW: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Winterspiele_2018"
                },
				{
                    name: "Seoul",
                    country: "kr",
                    distance: 242,
                    x: 1949,
                    y: 504,
                    year: 1988,
                    text: "Hyundai, LG, Samsung – Südkorea ist in unserem Bewusstsein eine reiche und hochtechnisierte Demokratie. Als 1988 die Olympischen Sommerspiele in der Hauptstadt Seoul ausgerichtet wurden, war das noch ganz anders: Südkorea war erst seit kurzem im Begriff, ein demokratischer und wohlhabender Staat zu werden. Beides ist er bis heute, ganz im Gegensatz zu seinem bettelarmen Nachbarn in Nordkorea, wo seit Jahrzehnten Diktatoren herrschen. Nordkorea boykottierte übrigens nach gescheiterten Verhandlungen über eine Beteiligung an der Austragung die Spiele von Seoul.",
                    isSummer: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Sommerspiele_1988",
                },
				{
                    name: "Sapporo",
                    country: "jp",
                    distance: 2623,
                    x: 2038,
                    y: 464,
                    year: 1972,
                    text: "Sapporo liegt auf Hokkaido, der nördlichsten der japanischen Hauptinseln. Im Winter weht ein kalter Wind aus Zentralasien, der Nordwestmonsun, über das Japanische Meer und nimmt Feuchtigkeit auf. In Sapporo stauen sich diese Luftmassen und steigen auf. Dies führt dazu, dass dort im Durchschnitt über 5m Schnee in einer Saison fallen.",
                    isSummer: false,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Winterspiele_1972",
                },
				{
                    name: "Sendai",
                    country: "jp",
                    distance: 747,
                    x: 2029,
                    y: 502,
                    wikiUrl: "https://de.wikipedia.org/wiki/Sendai",
                    isExtraCity: true,
                },
				{
                    name: "Nagano",
                    country: "jp",
                    distance: 472,
                    x: 2011,
                    y: 518,
                    angleCCW: false,
                    year: 1998,
                    text: "Der Inselstaat Japan ist eigentlich ein Gebirge im Meer: über 70% der Landesfläche besteht aus Bergen. Kein Wunder also, dass von hier viele gute Wintersportler kommen und dort bereits zweimal die Winterspiele ausgetragen wurden – obwohl Nagano auf gleicher Breitenlage wie Gibraltar liegt und somit der bisher südlichste Austragungsort für Winterspiele war.",
                    isSummer: false,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Winterspiele_1998",
                },
				{
                    name: "Tokyo",
                    country: "jp",
                    distance: 232,
                    x: 2022,
                    y: 525,
                    year: 1964,
                    text: "In Tokyo lauert die Bedrohung unter der Erde: Unter Japan treffen verschiedene Erdplatten aufeinander und immer wieder erschüttern Erdbeben auch die Regionen um Tokyo. Das letzte schwere Beben ereignete sich im Jahr 1923, bei dem 140.000 Menschen durch einstürzende Gebäude oder Brände starben.  Da die großen Beben ungefähr alle 60 Jahren auftreten, erwarten viele Japaner in naher Zukunft die nächste Katastrophe und versuchen sich durch erdbebensichere Architektur und Katastrophenübungen vorzubereiten.",
                    isSummer: true,
                    wikiUrl: "https://de.wikipedia.org/wiki/Olympische_Sommerspiele_2020"
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
            code: "at",
            name: "Österreich"
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
            code: "ba",
            name: "Bosnien-Herzegowina"
		},
        {
            code: "be",
            name: "Belgien"
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
            code: "cv",
            name: "Cabo Verde"
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
            code: "fm",
            name: "Mikronesien"
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
            code: "gb",
            name: "Großbritannien"
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
            code: "gr",
            name: "Griechenland"
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
            code: "nl",
            name: "Niederlande"
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
            code: "pg",
            name: "Papua Neuguinea"
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
            code: "tv",
            name: "Tuvalu"
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
            code: "vu",
            name: "Vanuatu"
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
