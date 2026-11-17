// Die 1000 häufigsten Wörter im gesprochenen Spanisch, angepasst an Kolumbien (Bogotá).
// Grundlage: Häufigkeitslisten des gesprochenen Spanisch (Gespräche, Filmuntertitel), als Grundformen (Lemmata).
// Wörter, die in Kolumbien anders heissen (carro statt coche, celular statt móvil, ustedes statt vosotros),
// sind ersetzt, typisch kolumbianische Alltagswörter (chévere, plata, tinto, ahorita …) ergänzt.
// Die Reihenfolge ist die Lernreihenfolge: Position 1–100 = Stufe 1 usw.
// Zeile: Spanisch|Deutsch|Wortart|Hinweis Kolumbien (optional)
// Wortart: v Verb · n Nomen · a Adjektiv · d Adverb · f kleines Wort (Artikel, Pronomen, Präposition, Bindewort) · x Ausdruck · z Zahl
// Nomen mit Artikel (zeigt das Geschlecht). Mehrere Formen mit « / » trennen, z.B. «el / la».
const VOCAB_RAW=`
el / la|der, die, das|f
de|von, aus|f
que|dass; der/die/das (Relativ)|f
y|und|f
a|zu, nach, an|f
en|in, an, auf|f
ser|sein (Wesen, Herkunft)|v
no|nicht, nein|d
un / una|ein, eine|f
estar|sein (Zustand, Ort)|v
yo|ich|f
tener|haben|v
por|durch, wegen|f
con|mit|f
para|für, um zu|f
su|sein, ihr, Ihr|f
lo|es, ihn|f
este / esta|dieser, diese|f
me|mich, mir|f
hacer|machen, tun|v
pero|aber|f
ir|gehen, fahren|v
poder|können|v
se|sich|f
qué|was|f
todo|alles, ganz|f
sí|ja|d
bien|gut (Adverb)|d
decir|sagen|v
como|wie, als|f
más|mehr|d
ya|schon|d
te|dich, dir|f
le|ihm, ihr, Ihnen|f
mi|mein|f
usted|Sie|f|In Kolumbien Standard, auch in der Familie und unter Freunden.
tú|du|f
ver|sehen|v
querer|wollen, lieben|v
saber|wissen|v
dar|geben|v
bueno|gut|a
eso|das (da)|f
aquí|hier|d
muy|sehr|d
cuando|wenn, als (zeitlich)|f
porque|weil|f
algo|etwas|f
nada|nichts|f
haber|haben (Hilfsverb)|v
hay|es gibt|x
él|er|f
ella|sie (Singular)|f
si|wenn, falls, ob|f
cómo|wie (Frage)|f
venir|kommen|v
pasar|passieren, verbringen, vorbeigehen|v
gracias|danke|x
también|auch|d
ahora|jetzt|d
o|oder|f
nos|uns|f
dónde|wo|f
pensar|denken|v
el señor|Herr|n
mucho|viel|a
hablar|sprechen, reden|v
hola|hallo|x
la vez|Mal|n
la casa|Haus, Zuhause|n
el día|Tag|n
el tiempo|Zeit, Wetter|n
llegar|ankommen|v
dejar|lassen, verlassen|v
deber|müssen, sollen|v
creer|glauben|v
quién|wer|f
nunca|nie|d
mismo|gleich, selbst|a
la gente|Leute|n
el hombre|Mann, Mensch|n
la cosa|Sache, Ding|n
la vida|Leben|n
el año|Jahr|n
otro|anderer, noch ein|a
claro|klar, natürlich|x
por favor|bitte|x
poco|wenig|a
entonces|dann, also|d
la mujer|Frau|n
gustar|gefallen, mögen|v
siempre|immer|d
nosotros|wir|f
ellos / ellas|sie (Plural)|f
ustedes|ihr, Sie (Plural)|f|Ersetzt in ganz Lateinamerika vosotros, auch unter Freunden.
la mamá|Mama|n
el papá|Papa|n
allá|dort|d|In Kolumbien viel häufiger als allí.
acá|hier|d|In Kolumbien sehr häufig: Venga para acá.
tan|so|d
hasta|bis|f
sobre|über, auf|f
sin|ohne|f
llamar|rufen, anrufen|v
salir|hinausgehen, ausgehen|v
trabajar|arbeiten|v
mirar|schauen|v
encontrar|finden|v
quedar|sich befinden, bleiben|v|¿Dónde queda el baño? = Wo ist das Bad?
esperar|warten, hoffen|v
desde|seit, von … aus|f
los / las|sie (Objekt, Plural)|f
les|ihnen, Ihnen (Plural)|f
a ver|mal sehen|x
no sé|ich weiss nicht|x
vamos|los, gehen wir|x
el amigo / la amiga|Freund, Freundin|n
el hijo / la hija|Sohn, Tochter|n
el hermano / la hermana|Bruder, Schwester|n
la noche|Nacht, Abend|n
mañana|morgen|d
hoy|heute|d
ayer|gestern|d
mal|schlecht (Adverb)|d
después|danach, später|d
antes|vorher, früher|d
luego|dann, nachher|d
todavía|noch|d
solo|nur, allein|d
alguno|irgendein, einige|a
cada|jeder (einzelne)|a
cuál|welcher, welche|f
cuánto|wie viel|f
por qué|warum|f
nadie|niemand|f
alguien|jemand|f
nuevo|neu|a
grande|gross|a
pequeño|klein|a
mejor|besser, beste|a
peor|schlechter, schlimmer|a
primero|erster, zuerst|a
último|letzter|a
igual|gleich|a|Auch: trotzdem, sowieso. Igual voy = Ich gehe trotzdem.
la verdad|Wahrheit|n
el problema|Problem|n
el trabajo|Arbeit|n
el dinero|Geld|n
la plata|Geld (umgangssprachlich)|n|Im Alltag sagt man fast immer plata statt dinero.
la hora|Stunde, Uhrzeit|n
el momento|Moment|n
la parte|Teil|n
el lugar|Ort|n
el mundo|Welt|n
el país|Land|n
la ciudad|Stadt|n
la calle|Strasse|n
el nombre|Name|n
la familia|Familie|n
el niño / la niña|Kind, Junge, Mädchen|n
el padre|Vater|n
la madre|Mutter|n
la semana|Woche|n
el mes|Monat|n
el agua|Wasser|n
la comida|Essen|n
la cabeza|Kopf|n
la mano|Hand|n
el ojo|Auge|n
la puerta|Tür|n
la idea|Idee|n
la historia|Geschichte|n
la pregunta|Frage|n
la razón|Grund, Recht|n
la forma|Form, Art|n
la manera|Art, Weise|n
el caso|Fall|n
seguir|weitermachen, folgen|v
conocer|kennen, kennenlernen|v
necesitar|brauchen|v
sentir|fühlen|v
vivir|leben, wohnen|v
tomar|nehmen, trinken|v
poner|legen, stellen|v
volver|zurückkommen|v
empezar|anfangen|v
entender|verstehen|v
buscar|suchen|v
contar|erzählen, zählen|v
oír|hören|v
escuchar|zuhören|v
comer|essen|v
morir|sterben|v
ayudar|helfen|v
perder|verlieren, verpassen|v
recordar|sich erinnern|v
tratar|behandeln, versuchen|v
parecer|scheinen|v
llevar|tragen, mitnehmen|v
traer|bringen, mitbringen|v
entrar|eintreten, hineingehen|v
pagar|bezahlen|v
comprar|kaufen|v
abrir|öffnen|v
cerrar|schliessen|v
ganar|gewinnen, verdienen|v
jugar|spielen|v
dormir|schlafen|v
pedir|bitten, bestellen|v
preguntar|fragen|v
cambiar|ändern, wechseln|v
terminar|beenden|v
usar|benutzen|v
vender|verkaufen|v
listo|bereit, fertig|a|¡Listo! = Okay, abgemacht. Eines der häufigsten Wörter in Kolumbien.
chévere|toll, cool|a|Typisch kolumbianisch, Jung und Alt sagen es.
rico|lecker, reich|a|In Kolumbien vor allem: lecker, angenehm (¡Qué rico!).
bonito|schön, hübsch|a
lindo|schön, nett|a|Auch für Menschen: Muy lindo de su parte = Sehr nett von Ihnen.
feliz|glücklich|a
difícil|schwierig|a
fácil|einfach, leicht|a
importante|wichtig|a
posible|möglich|a
seguro|sicher|a
cierto|wahr, gewiss|a|¿Cierto? am Satzende = nicht wahr?
malo|schlecht|a
mayor|älter, grösser|a
joven|jung|a
viejo|alt|a
largo|lang|a
tarde|spät|d
temprano|früh|d
cerca|nahe|d
lejos|weit weg|d
casi|fast|d
menos|weniger|d
demasiado|zu viel, zu sehr|d
bastante|ziemlich, genug|d
así|so|d
pues|also, nun|f|Typisch kolumbianisch am Satzende: ¡Hágale pues! = Na dann los!
tal|solch, so|f
andar|gehen, unterwegs sein|v
loco|verrückt|a
por supuesto|selbstverständlich|x
menos mal|zum Glück|x
con razón|kein Wunder|x
de hecho|tatsächlich|x
solamente|nur|d
incluso|sogar|d
jamás|niemals|d
aún|noch, sogar|d
dentro|drinnen, innerhalb|d
fuera|draussen, ausserhalb|d
conmigo|mit mir|f
contigo|mit dir|f
la llamada|Anruf|n
significar|bedeuten|v
la mañana|Morgen, Vormittag|n
la tarde|Nachmittag|n
el fin de semana|Wochenende|n
el carro|Auto|n|In Kolumbien carro, nie coche.
el celular|Handy|n
el teléfono|Telefon|n
el número|Nummer, Zahl|n
el mensaje|Nachricht|n
la foto|Foto|n
la música|Musik|n
la película|Film|n
el libro|Buch|n
el juego|Spiel|n
la fiesta|Fest, Party|n
el cumpleaños|Geburtstag|n
el regalo|Geschenk|n
el café|Kaffee|n
el tinto|kleiner schwarzer Kaffee|n|In Kolumbien kein Rotwein, sondern schwarzer Kaffee. Liebevoll: un tintico.
la cerveza|Bier|n
el almuerzo|Mittagessen|n|Die Hauptmahlzeit des Tages.
el desayuno|Frühstück|n
la comida (de la noche)|Abendessen|n|In Kolumbien heisst das Abendessen meist la comida, seltener la cena.
el pan|Brot|n
el arroz|Reis|n
la carne|Fleisch|n
el pollo|Poulet, Huhn|n
la fruta|Frucht|n
el huevo|Ei|n
la leche|Milch|n
la arepa|Arepa (Maisfladen)|n|Gibt es zu fast jeder Mahlzeit.
la mesa|Tisch|n
la silla|Stuhl|n
la cama|Bett|n
el cuarto|Zimmer|n|In Kolumbien cuarto oder pieza, selten habitación.
el baño|Bad, Toilette|n
la cocina|Küche|n
la ventana|Fenster|n
el piso|Boden, Stockwerk|n
el apartamento|Wohnung|n
el edificio|Gebäude|n
el barrio|Quartier|n
la tienda|Laden|n|Meist der kleine Quartierladen an der Ecke.
la oficina|Büro|n
el banco|Bank|n
el hospital|Spital|n
el médico / la médica|Arzt, Ärztin|n
el colegio|Schule|n|colegio = Schule bis 18. Die Uni heisst universidad.
la universidad|Universität|n
la clase|Unterricht, Klasse|n
el profesor / la profesora|Lehrer, Lehrerin|n
el estudiante / la estudiante|Student, Schüler|n
el jefe / la jefa|Chef, Chefin|n
la empresa|Firma|n
la reunión|Meeting, Treffen|n
la cuenta|Rechnung, Konto|n
el precio|Preis|n
el bus|Bus|n
el taxi|Taxi|n
el avión|Flugzeug|n
el viaje|Reise|n
el camino|Weg|n
el centro|Zentrum|n
el parque|Park|n
la playa|Strand|n
la montaña|Berg|n
el campo|Land, Feld|n
la finca|Landhaus, Bauernhof|n|Am Wochenende fährt man gern a una finca.
la tierra|Erde, Land|n
el sol|Sonne|n
la lluvia|Regen|n
el calor|Hitze, Wärme|n
el cuerpo|Körper|n
el corazón|Herz|n
el pie|Fuss|n
el pelo|Haar|n
la cara|Gesicht|n
la boca|Mund|n
el amor|Liebe|n
el novio / la novia|Freund, Freundin (Partner)|n
el esposo / la esposa|Ehemann, Ehefrau|n
el abuelo / la abuela|Grossvater, Grossmutter|n
el tío / la tía|Onkel, Tante|n
el primo / la prima|Cousin, Cousine|n
el sobrino / la sobrina|Neffe, Nichte|n
el vecino / la vecina|Nachbar, Nachbarin|n
la señora|Frau, Dame|n
don / doña|Herr, Frau (vor dem Vornamen)|n|Respektvoll vor dem Vornamen: don Carlos, doña Marta.
el muchacho / la muchacha|junger Mann, junge Frau|n
el perro|Hund|n
el gato|Katze|n
el gusto|Geschmack, Freude|n|Mucho gusto = Freut mich. Con gusto = Gern geschehen.
el miedo|Angst|n
el hambre|Hunger|n
la sed|Durst|n
el sueño|Traum, Müdigkeit|n
la suerte|Glück (Zufall)|n
la salud|Gesundheit|n
el dolor|Schmerz|n
pobre|arm|a
sano|gesund|a
vivo|lebendig|a
muerto|tot|a
casado|verheiratet|a
soltero|ledig|a
inteligente|intelligent|a
tonto|dumm|a
bobo|dumm, blöd|a|In Kolumbien sehr häufig, oft auch scherzhaft.
pilo|schlau, fleissig|a|Umgangssprachlich: Ese niño es muy pilo.
chiquito|klein (liebevoll)|a|Verkleinerungen auf -ito sind in Kolumbien überall: un momentico, un tintico.
aprender|lernen|v
estudiar|studieren, lernen|v
enseñar|zeigen, lehren|v
leer|lesen|v
escribir|schreiben|v
bailar|tanzen|v
cantar|singen|v
cocinar|kochen|v
caminar|gehen, spazieren|v
correr|rennen|v
viajar|reisen|v
manejar|fahren (Auto)|v|In Kolumbien manejar statt conducir.
subir|hinaufgehen, einsteigen|v
bajar|hinuntergehen, aussteigen|v
caer|fallen|v
levantarse|aufstehen|v
acostarse|ins Bett gehen|v
despertarse|aufwachen|v
bañarse|duschen, baden|v|In Kolumbien sagt man bañarse auch fürs Duschen.
vestirse|sich anziehen|v
sentarse|sich setzen|v
llamarse|heissen|v
acordarse|sich erinnern (an)|v
preocuparse|sich Sorgen machen|v
casarse|heiraten|v
irse|weggehen|v
quedarse|bleiben|v
sentirse|sich fühlen|v
olvidar|vergessen|v
descansar|sich ausruhen|v
limpiar|putzen|v
lavar|waschen|v
arreglar|reparieren, aufräumen|v
mandar|schicken|v
enviar|senden|v
recibir|erhalten|v
contestar|antworten, abnehmen (Telefon)|v
responder|antworten|v
explicar|erklären|v
mostrar|zeigen|v
invitar|einladen|v
visitar|besuchen|v
acompañar|begleiten|v
compartir|teilen|v
regalar|schenken|v|¿Me regala un tinto? = Ich hätte gern einen Kaffee. So bestellt man in Kolumbien.
prestar|leihen|v
cuidar|pflegen, aufpassen auf|v
cobrar|verlangen (Geld), kassieren|v
gastar|ausgeben|v
costar|kosten|v
valer|kosten, wert sein|v|¿Cuánto vale? = Wie viel kostet das?
servir|dienen, nützen, servieren|v
funcionar|funktionieren|v
pasear|spazieren gehen|v
intentar|versuchen|v
lograr|erreichen, schaffen|v
conseguir|bekommen, besorgen|v
permitir|erlauben|v
prometer|versprechen|v
decidir|entscheiden|v
escoger|auswählen|v
preferir|vorziehen|v
odiar|hassen|v
amar|lieben|v
besar|küssen|v
extrañar|vermissen|v|In Kolumbien extrañar statt echar de menos: Lo extraño.
soñar|träumen|v
reír|lachen|v
llorar|weinen|v
gritar|schreien|v
sufrir|leiden|v
nacer|geboren werden|v
crecer|wachsen|v
cumplir|erfüllen, (Jahre) werden|v
celebrar|feiern|v
importar|wichtig sein|v
interesar|interessieren|v
encantar|sehr gefallen|v
doler|wehtun|v
molestar|stören|v
faltar|fehlen|v
alcanzar|erreichen, reichen|v
prender|einschalten, anzünden|v|In Kolumbien prender statt encender: Prenda la luz.
apagar|ausschalten|v
timbrar|klingeln|v|El celular está timbrando = Das Handy klingelt.
marcar|wählen (Telefon), markieren|v
colgar|aufhängen, auflegen|v
parquear|parkieren|v|In Kolumbien parquear statt aparcar.
mudarse|umziehen|v
resolver|lösen|v
abrazar|umarmen|v
cansado|müde|a
contento|zufrieden, froh|a
triste|traurig|a
enfermo|krank|a
ocupado|beschäftigt|a
libre|frei|a
lleno|voll|a
vacío|leer|a
abierto|offen|a
cerrado|geschlossen|a
caro|teuer|a
barato|billig|a
rápido|schnell|a
lento|langsam|a
alto|hoch, gross|a
bajo|niedrig, klein|a
gordo|dick|a
flaco|dünn|a|Auch liebevoll als Anrede: ¿Qué más, flaco?
fuerte|stark|a
débil|schwach|a
caliente|heiss|a
frío|kalt|a
bravo|wütend|a|In Kolumbien: estar bravo = wütend sein.
tranquilo|ruhig|a|¡Tranquilo! = Keine Sorge, alles gut.
juicioso|fleissig, vernünftig|a|Lob für Kinder und Studierende: ¡Qué juicioso!
bacano|cool, super|a|Umgangssprachlich, vor allem unter Jüngeren.
maluco|unangenehm, mies|a|Umgangssprachlich: Me siento maluco = Mir ist nicht gut.
querido|lieb|a
amable|freundlich|a
simpático|sympathisch|a
feo|hässlich|a
hermoso|wunderschön|a
limpio|sauber|a
sucio|schmutzig|a
correcto|richtig|a
raro|seltsam|a
normal|normal|a
especial|besonders|a
diferente|verschieden|a
propio|eigen|a
real|echt, wirklich|a
único|einzig|a
próximo|nächster|a
pasado|vergangen, letzter|a
siguiente|folgender|a
medio|halb|a
completo|vollständig|a
blanco|weiss|a
negro|schwarz|a
rojo|rot|a
azul|blau|a
verde|grün|a
amarillo|gelb|a
uno|eins|z
dos|zwei|z
tres|drei|z
cuatro|vier|z
cinco|fünf|z
seis|sechs|z
siete|sieben|z
ocho|acht|z
nueve|neun|z
diez|zehn|z
once|elf|z
doce|zwölf|z
quince|fünfzehn|z
veinte|zwanzig|z
treinta|dreissig|z
cincuenta|fünfzig|z
cien|hundert|z
mil|tausend|z
millón|Million|z|Preise gehen schnell in die Tausende: diez mil pesos, un millón de pesos.
el lunes|Montag|n
el martes|Dienstag|n
el miércoles|Mittwoch|n
el jueves|Donnerstag|n
el viernes|Freitag|n
el sábado|Samstag|n
el domingo|Sonntag|n
el mediodía|Mittag|n
el minuto|Minute|n
el rato|Weile|n|un rato = eine Weile. Sehr häufig: Ahorita hablamos un rato.
ahorita|gleich, jetzt dann|d|Kann «sofort» heissen, aber auch «irgendwann später».
apenas|kaum, gerade erst|d
pronto|bald|d
despacio|langsam|d
juntos|zusammen|a
afuera|draussen|d
adentro|drinnen|d
arriba|oben|d
abajo|unten|d
adelante|vorne, vorwärts|d|¡Siga adelante! = Kommen Sie herein!
atrás|hinten, zurück|d
encima|oben drauf|d
debajo|darunter|d
enfrente|gegenüber|d
la derecha|rechts|n
la izquierda|links|n
derecho|geradeaus|d
allí|dort|d
ahí|da|d
oiga|hören Sie|x|Um jemanden anzusprechen. Unter Freunden: oye.
mire|schauen Sie|x|Leitet eine Erklärung ein: Mire, lo que pasa es que …
dale|okay, los|x|Zustimmung, sehr häufig: —¿Nos vemos a las 3? —¡Dale!
de una|sofort, klar|x|Umgangssprachlich: ¿Vamos? —¡De una!
qué pena|Entschuldigung, wie peinlich|x|Die typisch kolumbianische Entschuldigung: Qué pena con usted.
qué pesar|wie schade|x|Mitgefühl, wenn jemand krank ist oder Pech hat.
con mucho gusto|gern geschehen|x|Die Antwort auf gracias in Kolumbien.
a la orden|stets zu Diensten|x|Hörst du überall in Läden und auf der Strasse.
perdón|Entschuldigung|x
disculpe|entschuldigen Sie|x
con permiso|Entschuldigung (beim Vorbeigehen)|x
lo siento|es tut mir leid|x
de nada|bitte (nach danke)|x
buenos días|guten Morgen|x
buenas tardes|guten Tag (Nachmittag)|x
buenas noches|guten Abend, gute Nacht|x
chao|tschüss|x
hasta luego|bis später|x
nos vemos|wir sehen uns|x
qué más|wie geht's?|x|Lockere Begrüssung: ¿Qué más? ¿Bien o qué?
quiubo|was geht?|x|Von ¿qué hubo? Sehr umgangssprachlich.
cuídese|passen Sie auf sich auf|x|Typischer Abschied in Kolumbien.
todo bien|alles gut|x|Antwort und Frage zugleich: ¿Todo bien? —Todo bien.
mejor dicho|besser gesagt, kurz gesagt|x|In Kolumbien ein sehr häufiges Füllwort.
ya mismo|sofort|x|Bedeutet wirklich «sofort», anders als ahorita.
pilas|Achtung, pass auf|x|¡Pilas con el celular! = Pass auf dein Handy auf!
hágale|los, mach nur|x|Ermunterung: ¡Hágale pues!
mijo / mija|mein Lieber, meine Liebe|n|Von mi hijo. Liebevoll, auch für Nicht-Verwandte.
el parcero / la parcera|Kumpel|n|Kurz: parce. Ursprünglich aus Medellín, heute überall.
el man|Typ, Kerl|n|Umgangssprachlich: Ese man es muy chévere.
la vaina|Ding, Sache|n|Allzweckwort: ¿Qué es esa vaina?
sumercé|Sie (herzlich)|f|Typisch für Bogotá und Boyacá, vor allem gegenüber Älteren.
de pronto|vielleicht|x|In Kolumbien heisst de pronto meist «vielleicht», nicht «plötzlich».
o sea|das heisst, also|x
es que|es ist so, dass|x
la verdad (es que)|ehrlich gesagt|x
por eso|deshalb|x
por ejemplo|zum Beispiel|x
a veces|manchmal|x
seguido|oft|d|In Kolumbien häufiger als a menudo: Vengo seguido.
sin embargo|jedoch|x
además|ausserdem|d
aunque|obwohl|f
mientras|während|f
sino|sondern|f
ni|nicht einmal; weder … noch|f
según|laut, gemäss|f
entre|zwischen|f
hacia|in Richtung|f
contra|gegen|f
durante|während (Zeitraum)|f
tal vez|vielleicht|x
quizás|vielleicht|d
ojalá|hoffentlich|x
obvio|logisch, na klar|x|¡Obvio! = Na klar! Sehr häufig.
exacto|genau|x
en serio|im Ernst|x
de verdad|wirklich|x
ni modo|da kann man nichts machen|x
qué tal|wie (war, ist) …?|x
adónde|wohin|f
cuándo|wann|f
aquel / aquella|jener, jene|f
ese / esa|dieser da, diese da|f
esto|das (hier)|f
nuestro|unser|f
tu|dein|f
suyo|seiner, ihrer, Ihrer|f
mío|meiner|f
ninguno|keiner|f
varios|mehrere|a
tanto|so viel|a
cualquier|irgendein, jeder beliebige|a
ambos|beide|f
alguna vez|je, irgendwann einmal|x
otra vez|noch einmal|x
cada vez|jedes Mal|x
de repente|plötzlich|x
al final|am Ende|x
por fin|endlich|x
en vez de|statt|x
a pesar de|trotz|x
sobre todo|vor allem|x
más o menos|mehr oder weniger|x
de todas formas|jedenfalls|x
por lo menos|mindestens|x
ya que|da, weil|f
para que|damit|f
antes de|vor (zeitlich)|x
después de|nach (zeitlich)|x
el lado|Seite|n
el punto|Punkt|n
el tema|Thema|n
la persona|Person|n
el pueblo|Dorf, Volk|n
el gobierno|Regierung|n
la policía|Polizei|n
la ley|Gesetz|n
la guerra|Krieg|n
la paz|Frieden|n
el grupo|Gruppe|n
el equipo|Team, Mannschaft|n
el partido|Spiel (Match), Partei|n
el fútbol|Fussball|n
el deporte|Sport|n
el gimnasio|Fitnessstudio|n
la enfermedad|Krankheit|n
la droguería|Apotheke|n|In Kolumbien droguería, seltener farmacia.
el remedio|Medikament|n
la cita|Termin, Date|n
la noticia|Nachricht (News)|n
el periódico|Zeitung|n
la televisión|Fernsehen|n
el internet|Internet|n
el computador|Computer|n|In Kolumbien el computador, nicht el ordenador.
el correo|E-Mail, Post|n
la página|Seite|n
la palabra|Wort|n
el idioma|Sprache|n
el español|Spanisch|n
el inglés|Englisch|n
el alemán|Deutsch|n
la respuesta|Antwort|n
el ejemplo|Beispiel|n
el error|Fehler|n
el cambio|Wechsel, Wechselgeld|n
la vuelta|Runde, Rückkehr|n|las vueltas = Erledigungen: Voy a hacer unas vueltas.
la diligencia|Erledigung|n
el plan|Plan|n
el proyecto|Projekt|n
el negocio|Geschäft|n
el cliente / la cliente|Kunde, Kundin|n
el servicio|Dienst, Service|n
el mercado|Markt|n
el supermercado|Supermarkt|n
el centro comercial|Einkaufszentrum|n|Am Wochenende trifft man sich im centro comercial.
el restaurante|Restaurant|n
el mesero / la mesera|Kellner, Kellnerin|n
el domicilio|Hauslieferung|n|Alles kommt a domicilio: Essen, Medikamente, Einkäufe.
la bolsa|Tüte, Tasche|n
la ropa|Kleidung|n
la camisa|Hemd|n
el zapato|Schuh|n
el saco|Pullover|n|In Bogotá braucht man fast immer un saco.
la chaqueta|Jacke|n
la sombrilla|Regenschirm|n|In Kolumbien sombrilla statt paraguas.
la llave|Schlüssel|n
la caja|Schachtel, Kasse|n
el papel|Papier|n
el vaso|Glas|n
la botella|Flasche|n
el plato|Teller, Gericht|n
la taza|Tasse|n
el aguacate|Avocado|n
la papa|Kartoffel|n|Lateinamerika: papa, nicht patata.
el jugo|Saft|n|Frisch gepresste jugos gibt es überall, en agua o en leche.
la gaseosa|Limonade|n
el ajiaco|Ajiaco (Suppe aus Bogotá)|n
la sopa|Suppe|n
dulce|süss|a
la sal|Salz|n
el azúcar|Zucker|n
el trancón|Stau|n|In Bogotá ein Dauerthema: Había un trancón terrible.
el tráfico|Verkehr|n
el semáforo|Ampel|n
la esquina|Ecke|n
la cuadra|Häuserblock|n|Wegbeschreibung: Siga dos cuadras derecho.
la carrera|Strasse (Nord–Süd), Studium|n|In Bogotá laufen carreras von Nord nach Süd, calles von Ost nach West.
la avenida|Hauptstrasse|n
la estación|Station, Bahnhof|n
el aeropuerto|Flughafen|n
el hotel|Hotel|n
la iglesia|Kirche|n
Dios|Gott|n|Sehr häufig im Alltag: gracias a Dios, si Dios quiere.
el cielo|Himmel|n
el mar|Meer|n
el río|Fluss|n
el árbol|Baum|n
la flor|Blume|n
el animal|Tier|n
el pájaro|Vogel|n
el clima|Klima, Wetter|n
la luz|Licht, Strom|n
el fuego|Feuer|n
el aire|Luft|n
el color|Farbe|n
el tamaño|Grösse|n
la edad|Alter|n
la boda|Hochzeit|n
el bebé|Baby|n
la pareja|Paar, Partner|n
el suegro / la suegra|Schwiegervater, Schwiegermutter|n
el cuñado / la cuñada|Schwager, Schwägerin|n
el compañero / la compañera|Kollege, Kollegin|n
el dueño / la dueña|Besitzer, Besitzerin|n
el paisa / la paisa|Person aus Antioquia (Medellín)|n
el rolo / la rola|Person aus Bogotá|n|Umgangssprachlich. Formell: bogotano.
el costeño / la costeña|Person von der Karibikküste|n
el extranjero / la extranjera|Ausländer, Ausländerin|n
el gringo / la gringa|Ausländer (v.a. aus den USA)|n|Oft für alle hellhäutigen Ausländer, meist nicht böse gemeint.
suizo|schweizerisch, Schweizer|a
colombiano|kolumbianisch, Kolumbianer|a
el verano|Sommer, Trockenzeit|n|Kolumbien hat keine Jahreszeiten: verano = trockene Zeit.
el invierno|Winter, Regenzeit|n|invierno = Regenzeit, nicht Kälte.
las vacaciones|Ferien|n
el puente|Brücke, langes Wochenende|n|Ein puente festivo = verlängertes Wochenende mit Feiertag am Montag.
la Navidad|Weihnachten|n
la novena|Novena (Adventsandacht)|n|Vom 16. bis 24. Dezember trifft sich die Familie jeden Abend zur novena.
el pedazo|Stück|n
el kilo|Kilo|n
el metro|Meter|n
el peso|Peso, Gewicht|n
el billete|Geldschein|n
la moneda|Münze|n
la tarjeta|Karte|n
el efectivo|Bargeld|n
la oferta|Angebot|n
el pedido|Bestellung|n
el paquete|Paket|n
el pago|Zahlung|n
el sueldo|Lohn|n
el arriendo|Miete|n|In Kolumbien arriendo statt alquiler.
el contrato|Vertrag|n
el documento|Dokument|n
la cédula|Ausweis|n|Der kolumbianische Personalausweis. Wird oft verlangt: ¿Me regala su cédula?
el pasaporte|Pass|n
la maleta|Koffer|n
el futuro|Zukunft|n
el recuerdo|Erinnerung, Souvenir|n
la experiencia|Erfahrung|n
la oportunidad|Gelegenheit|n
la costumbre|Gewohnheit, Brauch|n
la cultura|Kultur|n
el arte|Kunst|n
el principio|Anfang|n
el final|Ende|n
el resto|Rest|n
la cantidad|Menge|n
la seguridad|Sicherheit|n
el peligro|Gefahr|n
peligroso|gefährlich|a
el susto|Schreck|n
el lío|Durcheinander, Ärger|n
el chiste|Witz|n
la broma|Scherz|n
la fuerza|Kraft|n
las ganas|Lust|n|tener ganas de = Lust haben auf: Tengo ganas de un tinto.
la paciencia|Geduld|n
el cuidado|Vorsicht|n|¡Cuidado! = Achtung! Vorsicht!
la ayuda|Hilfe|n
el favor|Gefallen|n|¿Me hace un favor? = Können Sie mir einen Gefallen tun?
la culpa|Schuld|n
la pena|Leid, Scham|n
la alegría|Freude|n
la sorpresa|Überraschung|n
el sentido|Sinn|n
acabar|beenden|v|acabar de + Infinitiv = gerade getan haben: Acabo de llegar.
quitar|wegnehmen|v
sacar|herausnehmen, holen|v
meter|hineinstecken|v
coger|nehmen, greifen|v|In Kolumbien ganz normal (= nehmen), anders als in Mexiko oder Argentinien.
agarrar|packen, nehmen|v
tirar|werfen|v
botar|wegwerfen|v|In Kolumbien botar la basura = den Abfall wegwerfen.
romper|brechen, kaputt machen|v
dañar|beschädigen|v|Se dañó = Es ist kaputtgegangen.
cortar|schneiden|v
mover|bewegen|v
tocar|berühren, spielen (Instrument)|v|Me toca = Ich muss, ich bin dran: Me toca trabajar.
parar|anhalten|v
cruzar|überqueren, abbiegen|v
voltear|umdrehen, abbiegen|v
devolver|zurückgeben|v
devolverse|umkehren|v|In Kolumbien: Me devolví a la casa = Ich bin nach Hause zurück.
demorarse|lange brauchen|v|¿Cuánto se demora? = Wie lange dauert es?
tardar|dauern|v
durar|dauern (Zeitraum)|v
madrugar|früh aufstehen|v|Sehr häufig: Mañana me toca madrugar.
trasnochar|die Nacht durchmachen|v
almorzar|zu Mittag essen|v
desayunar|frühstücken|v
cenar|zu Abend essen|v
beber|trinken|v
probar|probieren|v
preparar|vorbereiten|v
ofrecer|anbieten|v
aceptar|annehmen|v
dudar|zweifeln|v
suponer|annehmen, vermuten|v
imaginar|sich vorstellen|v
notar|bemerken|v
darse cuenta|merken|v
fijarse|aufpassen, beachten|v
averiguar|herausfinden|v
equivocarse|sich irren|v
mentir|lügen|v
callarse|schweigen|v
conversar|sich unterhalten|v|In Kolumbien häufiger als charlar.
saludar|grüssen|v
despedirse|sich verabschieden|v
presentar|vorstellen|v
quejarse|sich beklagen|v
reunirse|sich treffen|v
cuadrar|vereinbaren|v|Cuadremos para el sábado = Lass uns etwas für Samstag abmachen.
rumbear|feiern gehen|v
parchar|abhängen, Zeit verbringen|v|Umgangssprachlich: Vamos a parchar el sábado.
enamorarse|sich verlieben|v
enojarse|sich ärgern|v
asustarse|erschrecken|v
aburrirse|sich langweilen|v
divertirse|sich amüsieren|v
mejorar|verbessern, besser werden|v
llenar|füllen|v
guardar|aufbewahren, speichern|v
esconder|verstecken|v
cargar|tragen, laden|v
arrancar|losfahren, anfangen|v
llover|regnen|v
preocupado|besorgt|a
aburrido|langweilig, gelangweilt|a
divertido|lustig|a
nervioso|nervös|a
emocionado|aufgeregt, begeistert|a
orgulloso|stolz|a
oscuro|dunkel|a
duro|hart|a
suave|weich, sanft|a
pesado|schwer, mühsam|a|Auch für Menschen: ¡Qué pesado! = Wie nervig!
liviano|leicht (Gewicht)|a|In Kolumbien liviano statt ligero.
grave|ernst, schlimm|a
tremendo|gewaltig|a
increíble|unglaublich|a
perfecto|perfekt|a
excelente|ausgezeichnet|a
terrible|schrecklich|a
precioso|wunderschön|a
delicioso|köstlich|a
sabroso|lecker|a
picante|scharf|a
fresco|frisch, kühl|a|¡Fresco! = Keine Sorge, ganz ruhig.
cómodo|bequem|a
necesario|nötig|a
suficiente|genug|a
cansón|lästig, nervig|a|Umgangssprachlich: ¡No sea cansón!
regular|mittelmässig, es geht so|a|—¿Cómo está? —Regular. = Es geht so.
el asunto|Angelegenheit|n
la situación|Situation|n
la relación|Beziehung|n
el nivel|Niveau|n
el sistema|System|n
la información|Information|n
la red|Netz|n
la aplicación|App|n
la clave|Passwort, Schlüssel|n
la batería|Akku|n
la pantalla|Bildschirm|n
la señal|Signal, Empfang|n
el video|Video|n
la canción|Lied|n
el baile|Tanz|n
la rumba|Party|n|Irse de rumba = feiern gehen.
el parche|Clique, Plan|n|¿Cuál es el parche hoy? = Was machen wir heute?
la pola|Bier|n|Umgangssprachlich für cerveza: ¿Nos tomamos una pola?
el guayabo|Kater (nach Alkohol)|n|Typisch kolumbianisch: Tengo un guayabo terrible.
el aguardiente|Zuckerrohrschnaps|n|Das Nationalgetränk an Festen, oft einfach guaro.
la empanada|Teigtasche|n
el buñuelo|frittierte Käsekugel|n|Vor allem an Weihnachten.
el chocolate|Schokolade, heisse Schokolade|n|In Bogotá trinkt man chocolate con queso.
el queso|Käse|n
el banano|Banane|n|banano = süsse Banane, plátano = Kochbanane.
el plátano|Kochbanane|n
los frijoles|Bohnen|n
la verdura|Gemüse|n
la ensalada|Salat|n
el postre|Dessert|n
el hielo|Eis (Eiswürfel)|n
el helado|Glace|n
la nevera|Kühlschrank|n
la estufa|Herd|n|In Kolumbien estufa = Kochherd.
la lavadora|Waschmaschine|n
la basura|Abfall|n
el jardín|Garten|n
el patio|Hof|n
la pared|Wand|n
el techo|Dach, Decke|n
la escalera|Treppe|n
el ascensor|Lift|n
la portería|Pförtnerloge|n|Fast jedes Wohnhaus in Bogotá hat eine portería.
el celador / la celadora|Wächter, Portier|n
el conjunto|Wohnanlage|n|Eingezäunte Wohnsiedlung mit portería.
la buseta|Kleinbus|n
el TransMilenio|Schnellbussystem in Bogotá|n
la moto|Motorrad|n
la bicicleta|Fahrrad|n
la cicla|Velo|n|Umgangssprachlich. Sonntags fährt man in Bogotá auf der ciclovía.
el pasaje|Fahrpreis, Ticket|n
el paradero|Haltestelle|n|In Kolumbien paradero statt parada.
el norte|Norden|n
el sur|Süden|n
el oriente|Osten|n
el occidente|Westen|n
el cerro|Hügel, Berg|n|Die cerros orientales mit Monserrate prägen Bogotá.
la costa|Küste|n
la selva|Urwald|n
el paisaje|Landschaft|n
el viento|Wind|n
la nube|Wolke|n
el aguacero|Platzregen|n|In Bogotá fast täglich am Nachmittag.
el temblor|Erdbeben|n
el ruido|Lärm|n
el silencio|Stille|n
el olor|Geruch|n
el sabor|Geschmack|n
la vista|Sicht, Aussicht|n
la voz|Stimme|n
el oído|Ohr (Gehör)|n
la oreja|Ohr|n
la nariz|Nase|n
el diente|Zahn|n
el brazo|Arm|n
la pierna|Bein|n
la espalda|Rücken|n
el estómago|Magen|n
la barriga|Bauch|n
la sangre|Blut|n
la gripa|Grippe, Erkältung|n|In Kolumbien la gripa, nicht la gripe.
la fiebre|Fieber|n
la tos|Husten|n
la pastilla|Tablette|n
enero|Januar|n
febrero|Februar|n
marzo|März|n
abril|April|n
mayo|Mai|n
junio|Juni|n
julio|Juli|n
agosto|August|n
septiembre|September|n
octubre|Oktober|n
noviembre|November|n
diciembre|Dezember|n
`;
