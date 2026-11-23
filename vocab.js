// Die 1000 häufigsten Wörter im gesprochenen Spanisch, angepasst an Kolumbien (Bogotá).
// Grundlage: Häufigkeitslisten des gesprochenen Spanisch (Gespräche, Filmuntertitel), als Grundformen (Lemmata).
// Wörter, die in Kolumbien anders heissen (carro statt coche, celular statt móvil, ustedes statt vosotros),
// sind ersetzt, typisch kolumbianische Alltagswörter (chévere, plata, tinto, ahorita …) ergänzt.
// Die Reihenfolge ist die Lernreihenfolge: Position 1–100 = Stufe 1 usw.
// Zeile: Spanisch|Deutsch|Wortart|Hinweis Kolumbien (optional, sonst leer)|Beispielsatz|Übersetzung
// Wortart: v Verb · n Nomen · a Adjektiv · d Adverb · f kleines Wort (Artikel, Pronomen, Präposition, Bindewort) · x Ausdruck · z Zahl
// Nomen mit Artikel (zeigt das Geschlecht). Mehrere Formen mit « / » trennen, z.B. «el / la».
const VOCAB_RAW=`
el / la|der, die, das|f||La casa de mi mamá es muy bonita.|Das Haus meiner Mama ist sehr schön.
de|von, aus|f||Yo soy de Suiza.|Ich bin aus der Schweiz.
que|dass; der/die/das (Relativ)|f||Creo que hoy va a llover.|Ich glaube, dass es heute regnen wird.
y|und|f||Quiero un tinto y un pan.|Ich möchte einen Kaffee und ein Brot.
a|zu, nach, an|f||Mañana vamos a Medellín.|Morgen fahren wir nach Medellín.
en|in, an, auf|f||Mi celular está en la mesa.|Mein Handy ist auf dem Tisch.
ser|sein (Wesen, Herkunft)|v||Mi amiga es muy simpática.|Meine Freundin ist sehr sympathisch.
no|nicht, nein|d||No tengo hambre ahora.|Ich habe jetzt keinen Hunger.
un / una|ein, eine|f||Necesito un taxi, por favor.|Ich brauche ein Taxi, bitte.
estar|sein (Zustand, Ort)|v||¿Cómo está usted hoy?|Wie geht es Ihnen heute?
yo|ich|f||Yo vivo en Bogotá.|Ich wohne in Bogotá.
tener|haben|v||Tengo dos hermanos.|Ich habe zwei Geschwister.
por|durch, wegen|f||Gracias por la ayuda.|Danke für die Hilfe.
con|mit|f||Voy al cine con mis amigos.|Ich gehe mit meinen Freunden ins Kino.
para|für, um zu|f||Este regalo es para usted.|Dieses Geschenk ist für Sie.
su|sein, ihr, Ihr|f||Su casa queda muy cerca.|Sein Haus ist ganz in der Nähe.
lo|es, ihn|f||No lo sé.|Ich weiss es nicht.
este / esta|dieser, diese|f||Esta semana tengo mucho trabajo.|Diese Woche habe ich viel Arbeit.
me|mich, mir|f||¿Me ayuda, por favor?|Helfen Sie mir, bitte?
hacer|machen, tun|v||¿Qué hace usted el fin de semana?|Was machen Sie am Wochenende?
pero|aber|f||Quiero ir, pero no tengo tiempo.|Ich will gehen, aber ich habe keine Zeit.
ir|gehen, fahren|v||Voy al trabajo en bus.|Ich fahre mit dem Bus zur Arbeit.
poder|können|v||¿Puedo pagar con tarjeta?|Kann ich mit Karte bezahlen?
se|sich|f||Mi hermano se llama Andrés.|Mein Bruder heisst Andrés.
qué|was|f||¿Qué quiere tomar?|Was möchten Sie trinken?
todo|alles, ganz|f||Todo está bien.|Alles ist gut.
sí|ja|d||Sí, quiero un tinto.|Ja, ich möchte einen Kaffee.
bien|gut (Adverb)|d||Hoy dormí muy bien.|Heute habe ich sehr gut geschlafen.
decir|sagen|v||¿Qué dice el médico?|Was sagt der Arzt?
como|wie, als|f||Ella habla como una profesora.|Sie spricht wie eine Lehrerin.
más|mehr|d||Quiero más café, por favor.|Ich möchte mehr Kaffee, bitte.
ya|schon|d||Ya comí, gracias.|Ich habe schon gegessen, danke.
te|dich, dir|f||Te llamo mañana.|Ich rufe dich morgen an.
le|ihm, ihr, Ihnen|f||Le doy el número de mi celular.|Ich gebe ihm meine Handynummer.
mi|mein|f||Mi papá trabaja en un banco.|Mein Papa arbeitet in einer Bank.
usted|Sie|f|In Kolumbien Standard, auch in der Familie und unter Freunden.|¿Usted quiere un tinto?|Möchten Sie einen Kaffee?
tú|du|f||¿Tú hablas inglés?|Sprichst du Englisch?
ver|sehen|v||No veo bien sin gafas.|Ohne Brille sehe ich nicht gut.
querer|wollen, lieben|v||Quiero aprender español.|Ich will Spanisch lernen.
saber|wissen|v||No sé dónde está el baño.|Ich weiss nicht, wo das Bad ist.
dar|geben|v||¿Me da la cuenta, por favor?|Geben Sie mir bitte die Rechnung?
bueno|gut|a||Este restaurante es muy bueno.|Dieses Restaurant ist sehr gut.
eso|das (da)|f||Eso no es verdad.|Das stimmt nicht.
aquí|hier|d||Aquí vive mi familia.|Hier wohnt meine Familie.
muy|sehr|d||Bogotá es muy grande.|Bogotá ist sehr gross.
cuando|wenn, als (zeitlich)|f||Cuando llueve, tomo un taxi.|Wenn es regnet, nehme ich ein Taxi.
porque|weil|f||No voy porque estoy cansado.|Ich gehe nicht, weil ich müde bin.
algo|etwas|f||¿Quiere comer algo?|Möchten Sie etwas essen?
nada|nichts|f||No tengo nada en la nevera.|Ich habe nichts im Kühlschrank.
haber|haben (Hilfsverb)|v||Nunca he estado en Cartagena.|Ich bin noch nie in Cartagena gewesen.
hay|es gibt|x||¿Hay una farmacia por aquí?|Gibt es hier eine Apotheke?
él|er|f||Él es mi jefe.|Er ist mein Chef.
ella|sie (Singular)|f||Ella trabaja en un hospital.|Sie arbeitet in einem Spital.
si|wenn, falls, ob|f||Si quiere, lo llevo en el carro.|Wenn Sie wollen, nehme ich Sie im Auto mit.
cómo|wie (Frage)|f||¿Cómo se llama usted?|Wie heissen Sie?
venir|kommen|v||¿Usted viene a la fiesta?|Kommen Sie zum Fest?
pasar|passieren, verbringen, vorbeigehen|v||¿Qué pasó ayer?|Was ist gestern passiert?
gracias|danke|x||Muchas gracias por todo.|Vielen Dank für alles.
también|auch|d||Yo también quiero ir.|Ich will auch gehen.
ahora|jetzt|d||Ahora no puedo hablar.|Jetzt kann ich nicht sprechen.
o|oder|f||¿Quiere tinto o jugo?|Möchten Sie Kaffee oder Saft?
nos|uns|f||Nos vemos mañana.|Wir sehen uns morgen.
dónde|wo|f||¿Dónde está la estación?|Wo ist der Bahnhof?
pensar|denken|v||Pienso mucho en mi familia.|Ich denke viel an meine Familie.
el señor|Herr|n||El señor de la tienda es muy amable.|Der Herr vom Laden ist sehr freundlich.
mucho|viel|a||Hay mucho tráfico hoy.|Heute hat es viel Verkehr.
hablar|sprechen, reden|v||¿Puede hablar más despacio?|Können Sie langsamer sprechen?
hola|hallo|x||Hola, ¿cómo está?|Hallo, wie geht es Ihnen?
la vez|Mal|n||Voy al gimnasio tres veces por semana.|Ich gehe dreimal pro Woche ins Fitnessstudio.
la casa|Haus, Zuhause|n||Hoy me quedo en casa.|Heute bleibe ich zu Hause.
el día|Tag|n||Hoy es un día muy bonito.|Heute ist ein sehr schöner Tag.
el tiempo|Zeit, Wetter|n||No tengo tiempo hoy.|Ich habe heute keine Zeit.
llegar|ankommen|v||El avión llega a las ocho.|Das Flugzeug kommt um acht an.
dejar|lassen, verlassen|v||Dejé el celular en el carro.|Ich habe das Handy im Auto gelassen.
deber|müssen, sollen|v||Debo trabajar mañana.|Ich muss morgen arbeiten.
creer|glauben|v||Creo que tiene razón.|Ich glaube, Sie haben recht.
quién|wer|f||¿Quién es esa mujer?|Wer ist diese Frau?
nunca|nie|d||Nunca como carne.|Ich esse nie Fleisch.
mismo|gleich, selbst|a||Tenemos el mismo celular.|Wir haben das gleiche Handy.
la gente|Leute|n||La gente aquí es muy amable.|Die Leute hier sind sehr freundlich.
el hombre|Mann, Mensch|n||Ese hombre es mi vecino.|Dieser Mann ist mein Nachbar.
la cosa|Sache, Ding|n||Tengo muchas cosas que hacer.|Ich habe viele Sachen zu tun.
la vida|Leben|n||La vida en Bogotá es interesante.|Das Leben in Bogotá ist interessant.
el año|Jahr|n||Vivo aquí hace un año.|Ich wohne seit einem Jahr hier.
otro|anderer, noch ein|a||¿Me da otro tinto, por favor?|Geben Sie mir bitte noch einen Kaffee?
claro|klar, natürlich|x||¡Claro, con mucho gusto!|Klar, sehr gerne!
por favor|bitte|x||Un jugo de mora, por favor.|Einen Brombeersaft, bitte.
poco|wenig|a||Tengo poco tiempo hoy.|Ich habe heute wenig Zeit.
entonces|dann, also|d||Entonces nos vemos a las tres.|Dann sehen wir uns um drei.
la mujer|Frau|n||La mujer de la tienda es muy amable.|Die Frau vom Laden ist sehr freundlich.
gustar|gefallen, mögen|v||Me gusta mucho el café colombiano.|Der kolumbianische Kaffee gefällt mir sehr.
siempre|immer|d||Siempre tomo tinto en la mañana.|Am Morgen trinke ich immer einen Kaffee.
nosotros|wir|f||Nosotros vivimos en Chapinero.|Wir wohnen in Chapinero.
ellos / ellas|sie (Plural)|f||Ellos llegan mañana de Cali.|Sie kommen morgen aus Cali an.
ustedes|ihr, Sie (Plural)|f|Ersetzt in ganz Lateinamerika vosotros, auch unter Freunden.|¿Ustedes quieren algo de tomar?|Möchtet ihr etwas trinken?
la mamá|Mama|n||Mi mamá cocina muy rico.|Meine Mama kocht sehr lecker.
el papá|Papa|n||Mi papá está en la oficina.|Mein Papa ist im Büro.
allá|dort|d|In Kolumbien viel häufiger als allí.|Mi carro está allá.|Mein Auto ist dort.
acá|hier|d|In Kolumbien sehr häufig: Venga para acá.|¡Venga para acá!|Kommen Sie hierher!
tan|so|d||¡La comida está tan rica!|Das Essen ist so lecker!
hasta|bis|f||Trabajo hasta las seis.|Ich arbeite bis sechs.
sobre|über, auf|f||El libro está sobre la mesa.|Das Buch liegt auf dem Tisch.
sin|ohne|f||Quiero un tinto sin azúcar.|Ich möchte einen Kaffee ohne Zucker.
llamar|rufen, anrufen|v||Lo llamo más tarde.|Ich rufe Sie später an.
salir|hinausgehen, ausgehen|v||¿Salimos esta noche?|Gehen wir heute Abend aus?
trabajar|arbeiten|v||Trabajo en una empresa grande.|Ich arbeite in einer grossen Firma.
mirar|schauen|v||Mire, allá está el bus.|Schauen Sie, dort ist der Bus.
encontrar|finden|v||No encuentro mis llaves.|Ich finde meine Schlüssel nicht.
quedar|sich befinden, bleiben|v|¿Dónde queda el baño? = Wo ist das Bad?|¿Dónde queda el baño?|Wo ist das Bad?
esperar|warten, hoffen|v||Lo espero en la entrada.|Ich warte am Eingang auf Sie.
desde|seit, von … aus|f||Vivo aquí desde enero.|Ich wohne seit Januar hier.
los / las|sie (Objekt, Plural)|f||¿Las llaves? Las tengo yo.|Die Schlüssel? Ich habe sie.
les|ihnen, Ihnen (Plural)|f||Les doy la dirección por mensaje.|Ich gebe Ihnen die Adresse per Nachricht.
a ver|mal sehen|x||A ver, ¿cuánto es?|Mal sehen, wie viel kostet es?
no sé|ich weiss nicht|x||No sé dónde queda la calle.|Ich weiss nicht, wo die Strasse ist.
vamos|los, gehen wir|x||¡Vamos, ya es tarde!|Los, es ist schon spät!
el amigo / la amiga|Freund, Freundin|n||Mi amiga vive en Medellín.|Meine Freundin wohnt in Medellín.
el hijo / la hija|Sohn, Tochter|n||Mi hija tiene cinco años.|Meine Tochter ist fünf Jahre alt.
el hermano / la hermana|Bruder, Schwester|n||Mi hermano trabaja en Cali.|Mein Bruder arbeitet in Cali.
la noche|Nacht, Abend|n||Esta noche vamos a cenar afuera.|Heute Abend gehen wir auswärts essen.
mañana|morgen|d||Mañana tengo una reunión.|Morgen habe ich eine Sitzung.
hoy|heute|d||Hoy hace mucho frío.|Heute ist es sehr kalt.
ayer|gestern|d||Ayer fui al centro.|Gestern ging ich ins Zentrum.
mal|schlecht (Adverb)|d||Me siento mal hoy.|Ich fühle mich heute schlecht.
después|danach, später|d||Después del trabajo voy al gimnasio.|Nach der Arbeit gehe ich ins Fitnessstudio.
antes|vorher, früher|d||Antes vivía en Zúrich.|Früher wohnte ich in Zürich.
luego|dann, nachher|d||Luego lo llamo.|Ich rufe Sie nachher an.
todavía|noch|d||Todavía no he comido.|Ich habe noch nicht gegessen.
solo|nur, allein|d||Solo quiero un tinto.|Ich möchte nur einen Kaffee.
alguno|irgendein, einige|a||¿Tiene alguna pregunta?|Haben Sie irgendeine Frage?
cada|jeder (einzelne)|a||Voy a la tienda cada día.|Ich gehe jeden Tag in den Laden.
cuál|welcher, welche|f||¿Cuál es su número de celular?|Was ist Ihre Handynummer?
cuánto|wie viel|f||¿Cuánto cuesta el pasaje?|Wie viel kostet die Fahrkarte?
por qué|warum|f||¿Por qué no viene con nosotros?|Warum kommen Sie nicht mit uns?
nadie|niemand|f||No hay nadie en la casa.|Es ist niemand im Haus.
alguien|jemand|f||Alguien está en la puerta.|Jemand ist an der Tür.
nuevo|neu|a||Tengo un celular nuevo.|Ich habe ein neues Handy.
grande|gross|a||Mi apartamento es muy grande.|Meine Wohnung ist sehr gross.
pequeño|klein|a||Tengo un perro pequeño.|Ich habe einen kleinen Hund.
mejor|besser, beste|a||Este café es mejor.|Dieser Kaffee ist besser.
peor|schlechter, schlimmer|a||El tráfico hoy está peor.|Der Verkehr ist heute schlimmer.
primero|erster, zuerst|a||Es mi primera vez en Colombia.|Es ist mein erstes Mal in Kolumbien.
último|letzter|a||Es el último bus de la noche.|Es ist der letzte Bus der Nacht.
igual|gleich|a|Auch: trotzdem, sowieso. Igual voy = Ich gehe trotzdem.|Los dos carros son iguales.|Die beiden Autos sind gleich.
la verdad|Wahrheit|n||Quiero saber la verdad.|Ich will die Wahrheit wissen.
el problema|Problem|n||No hay problema.|Kein Problem.
el trabajo|Arbeit|n||Me gusta mucho mi trabajo.|Meine Arbeit gefällt mir sehr.
el dinero|Geld|n||No tengo dinero en efectivo.|Ich habe kein Bargeld.
la plata|Geld (umgangssprachlich)|n|Im Alltag sagt man fast immer plata statt dinero.|No tengo plata para el taxi.|Ich habe kein Geld für das Taxi.
la hora|Stunde, Uhrzeit|n||¿Qué hora es?|Wie spät ist es?
el momento|Moment|n||Un momento, por favor.|Einen Moment, bitte.
la parte|Teil|n||Una parte de mi familia vive aquí.|Ein Teil meiner Familie wohnt hier.
el lugar|Ort|n||Este lugar es muy bonito.|Dieser Ort ist sehr schön.
el mundo|Welt|n||Quiero viajar por todo el mundo.|Ich will um die ganze Welt reisen.
el país|Land|n||Colombia es un país muy bonito.|Kolumbien ist ein sehr schönes Land.
la ciudad|Stadt|n||Bogotá es una ciudad grande.|Bogotá ist eine grosse Stadt.
la calle|Strasse|n||Vivo en esta calle.|Ich wohne in dieser Strasse.
el nombre|Name|n||¿Cuál es su nombre?|Wie ist Ihr Name?
la familia|Familie|n||Mi familia vive en Suiza.|Meine Familie wohnt in der Schweiz.
el niño / la niña|Kind, Junge, Mädchen|n||El niño juega en el parque.|Der Junge spielt im Park.
el padre|Vater|n||Mi padre tiene sesenta años.|Mein Vater ist sechzig Jahre alt.
la madre|Mutter|n||Mi madre es profesora.|Meine Mutter ist Lehrerin.
la semana|Woche|n||La próxima semana voy a Cali.|Nächste Woche fahre ich nach Cali.
el mes|Monat|n||Llevo un mes en Bogotá.|Ich bin seit einem Monat in Bogotá.
el agua|Wasser|n||¿Me da un vaso de agua?|Geben Sie mir ein Glas Wasser?
la comida|Essen|n||La comida colombiana es muy rica.|Das kolumbianische Essen ist sehr lecker.
la cabeza|Kopf|n||Me duele la cabeza.|Ich habe Kopfschmerzen.
la mano|Hand|n||Me lavo las manos antes de comer.|Ich wasche mir vor dem Essen die Hände.
el ojo|Auge|n||Ella tiene los ojos verdes.|Sie hat grüne Augen.
la puerta|Tür|n||Por favor, cierre la puerta.|Bitte schliessen Sie die Tür.
la idea|Idee|n||¡Qué buena idea!|Was für eine gute Idee!
la historia|Geschichte|n||Mi abuelo cuenta una historia.|Mein Grossvater erzählt eine Geschichte.
la pregunta|Frage|n||Tengo una pregunta.|Ich habe eine Frage.
la razón|Grund, Recht|n||Usted tiene razón.|Sie haben recht.
la forma|Form, Art|n||Esa es la mejor forma de aprender.|Das ist die beste Art zu lernen.
la manera|Art, Weise|n||No hay otra manera.|Es gibt keine andere Art.
el caso|Fall|n||En ese caso, me quedo en casa.|In diesem Fall bleibe ich zu Hause.
seguir|weitermachen, folgen|v||Siga derecho dos cuadras.|Gehen Sie zwei Blocks geradeaus weiter.
conocer|kennen, kennenlernen|v||Quiero conocer a su familia.|Ich möchte Ihre Familie kennenlernen.
necesitar|brauchen|v||Necesito un taxi.|Ich brauche ein Taxi.
sentir|fühlen|v||Siento mucho frío.|Mir ist sehr kalt.
vivir|leben, wohnen|v||Vivo en un apartamento pequeño.|Ich wohne in einer kleinen Wohnung.
tomar|nehmen, trinken|v||Tomo un tinto cada mañana.|Ich trinke jeden Morgen einen Kaffee.
poner|legen, stellen|v||Ponga la maleta aquí, por favor.|Stellen Sie den Koffer bitte hierhin.
volver|zurückkommen|v||Vuelvo en cinco minutos.|Ich komme in fünf Minuten zurück.
empezar|anfangen|v||La clase empieza a las ocho.|Der Unterricht fängt um acht an.
entender|verstehen|v||No entiendo la pregunta.|Ich verstehe die Frage nicht.
buscar|suchen|v||Busco un apartamento en Bogotá.|Ich suche eine Wohnung in Bogotá.
contar|erzählen, zählen|v||Le cuento todo mañana.|Ich erzähle Ihnen morgen alles.
oír|hören|v||No lo oigo bien.|Ich höre Sie nicht gut.
escuchar|zuhören|v||Me gusta escuchar música.|Ich höre gern Musik.
comer|essen|v||¿Dónde comemos hoy?|Wo essen wir heute?
morir|sterben|v||Mi perro murió el año pasado.|Mein Hund ist letztes Jahr gestorben.
ayudar|helfen|v||¿Me puede ayudar?|Können Sie mir helfen?
perder|verlieren, verpassen|v||Perdí el bus otra vez.|Ich habe den Bus wieder verpasst.
recordar|sich erinnern|v||No recuerdo su nombre.|Ich erinnere mich nicht an seinen Namen.
tratar|behandeln, versuchen|v||Trato de hablar español todos los días.|Ich versuche, jeden Tag Spanisch zu sprechen.
parecer|scheinen|v||Parece que va a llover.|Es scheint, dass es regnen wird.
llevar|tragen, mitnehmen|v||Siempre llevo paraguas en Bogotá.|In Bogotá nehme ich immer einen Schirm mit.
traer|bringen, mitbringen|v||¿Qué traigo para la cena?|Was bringe ich zum Abendessen mit?
entrar|eintreten, hineingehen|v||¿Puedo entrar?|Darf ich hereinkommen?
pagar|bezahlen|v||Hoy yo pago el almuerzo.|Heute bezahle ich das Mittagessen.
comprar|kaufen|v||Quiero comprar un celular nuevo.|Ich will ein neues Handy kaufen.
abrir|öffnen|v||¿A qué hora abren la tienda?|Um wie viel Uhr öffnen sie den Laden?
cerrar|schliessen|v||Por favor, cierra la ventana.|Bitte schliess das Fenster.
ganar|gewinnen, verdienen|v||Mi hermano gana bien en su trabajo.|Mein Bruder verdient gut bei seiner Arbeit.
jugar|spielen|v||Los niños juegan en el parque.|Die Kinder spielen im Park.
dormir|schlafen|v||Anoche dormí muy poco.|Letzte Nacht habe ich sehr wenig geschlafen.
pedir|bitten, bestellen|v||Voy a pedir un tinto, por favor.|Ich bestelle einen schwarzen Kaffee, bitte.
preguntar|fragen|v||¿Le puedo preguntar algo?|Darf ich Sie etwas fragen?
cambiar|ändern, wechseln|v||Necesito cambiar dólares a pesos.|Ich muss Dollar in Pesos wechseln.
terminar|beenden|v||¿A qué hora termina la clase?|Um wie viel Uhr endet der Unterricht?
usar|benutzen|v||¿Usted usa el bus todos los días?|Benutzen Sie jeden Tag den Bus?
vender|verkaufen|v||Ellos venden fruta en el mercado.|Sie verkaufen Früchte auf dem Markt.
listo|bereit, fertig|a|¡Listo! = Okay, abgemacht. Eines der häufigsten Wörter in Kolumbien.|¿Nos vemos a las tres? ¡Listo!|Sehen wir uns um drei? Okay, abgemacht!
chévere|toll, cool|a|Typisch kolumbianisch, Jung und Alt sagen es.|¡Qué chévere tu apartamento!|Wie toll deine Wohnung ist!
rico|lecker, reich|a|In Kolumbien vor allem: lecker, angenehm (¡Qué rico!).|¡Qué rica está esta arepa!|Wie lecker diese Arepa ist!
bonito|schön, hübsch|a||Bogotá tiene parques muy bonitos.|Bogotá hat sehr schöne Parks.
lindo|schön, nett|a|Auch für Menschen: Muy lindo de su parte = Sehr nett von Ihnen.|Muy lindo de su parte, gracias.|Sehr nett von Ihnen, danke.
feliz|glücklich|a||Hoy estoy muy feliz.|Heute bin ich sehr glücklich.
difícil|schwierig|a||El español no es tan difícil.|Spanisch ist nicht so schwierig.
fácil|einfach, leicht|a||Esta pregunta es muy fácil.|Diese Frage ist sehr einfach.
importante|wichtig|a||Mañana tengo una reunión importante.|Morgen habe ich ein wichtiges Meeting.
posible|möglich|a||¿Es posible pagar con tarjeta?|Ist es möglich, mit Karte zu bezahlen?
seguro|sicher|a||¿Estás seguro de eso?|Bist du dir da sicher?
cierto|wahr, gewiss|a|¿Cierto? am Satzende = nicht wahr?|Hace frío en Bogotá, ¿cierto?|Es ist kalt in Bogotá, nicht wahr?
malo|schlecht|a||El tráfico hoy está muy malo.|Der Verkehr ist heute sehr schlecht.
mayor|älter, grösser|a||Mi hermana mayor vive en Medellín.|Meine ältere Schwester wohnt in Medellín.
joven|jung|a||Mi profesora es muy joven.|Meine Lehrerin ist sehr jung.
viejo|alt|a||Este carro ya está muy viejo.|Dieses Auto ist schon sehr alt.
largo|lang|a||Hoy fue un día muy largo.|Heute war ein sehr langer Tag.
tarde|spät|d||Perdón, llegué un poco tarde.|Entschuldigung, ich bin etwas spät gekommen.
temprano|früh|d||Mañana me levanto temprano.|Morgen stehe ich früh auf.
cerca|nahe|d||El banco está muy cerca.|Die Bank ist ganz in der Nähe.
lejos|weit weg|d||Mi casa queda lejos del centro.|Mein Haus ist weit weg vom Zentrum.
casi|fast|d||Ya casi son las ocho.|Es ist schon fast acht Uhr.
menos|weniger|d||Hoy hace menos frío.|Heute ist es weniger kalt.
demasiado|zu viel, zu sehr|d||Comí demasiado en el almuerzo.|Ich habe beim Mittagessen zu viel gegessen.
bastante|ziemlich, genug|d||El español es bastante fácil.|Spanisch ist ziemlich einfach.
así|so|d||¿Así está bien?|Ist es so gut?
pues|also, nun|f|Typisch kolumbianisch am Satzende: ¡Hágale pues! = Na dann los!|Listo, nos vemos mañana pues.|Okay, dann sehen wir uns morgen.
tal|solch, so|f||Nunca he visto tal cosa.|So etwas habe ich noch nie gesehen.
andar|gehen, unterwegs sein|v||Hoy ando en carro.|Heute bin ich mit dem Auto unterwegs.
loco|verrückt|a||¿Estás loco? Hace mucho frío.|Bist du verrückt? Es ist sehr kalt.
por supuesto|selbstverständlich|x||¿Me ayudas? Por supuesto.|Hilfst du mir? Selbstverständlich.
menos mal|zum Glück|x||Menos mal que llegaste temprano.|Zum Glück bist du früh gekommen.
con razón|kein Wunder|x||Con razón estás tan cansado.|Kein Wunder, bist du so müde.
de hecho|tatsächlich|x||De hecho, yo vivo cerca de aquí.|Tatsächlich wohne ich hier in der Nähe.
solamente|nur|d||Solamente quiero un tinto.|Ich will nur einen schwarzen Kaffee.
incluso|sogar|d||Incluso los domingos trabaja.|Sogar sonntags arbeitet er.
jamás|niemals|d||Jamás he estado en la playa.|Ich war noch niemals am Strand.
aún|noch, sogar|d||Aún no he comido nada.|Ich habe noch nichts gegessen.
dentro|drinnen, innerhalb|d||Los niños están dentro de la casa.|Die Kinder sind drinnen im Haus.
fuera|draussen, ausserhalb|d||Te espero fuera del edificio.|Ich warte draussen vor dem Gebäude auf dich.
conmigo|mit mir|f||¿Quieres ir conmigo al cine?|Willst du mit mir ins Kino gehen?
contigo|mit dir|f||Quiero hablar contigo un momento.|Ich will kurz mit dir sprechen.
la llamada|Anruf|n||Tengo una llamada de mi jefe.|Ich habe einen Anruf von meinem Chef.
significar|bedeuten|v||¿Qué significa esta palabra?|Was bedeutet dieses Wort?
la mañana|Morgen, Vormittag|n||En la mañana siempre tomo tinto.|Am Morgen trinke ich immer schwarzen Kaffee.
la tarde|Nachmittag|n||Nos vemos en la tarde.|Wir sehen uns am Nachmittag.
el fin de semana|Wochenende|n||¿Qué haces el fin de semana?|Was machst du am Wochenende?
el carro|Auto|n|In Kolumbien carro, nie coche.|Vamos en mi carro.|Fahren wir mit meinem Auto.
el celular|Handy|n||Te llamo al celular.|Ich rufe dich auf dem Handy an.
el teléfono|Telefon|n||El teléfono de la oficina no funciona.|Das Telefon im Büro funktioniert nicht.
el número|Nummer, Zahl|n||¿Me das tu número?|Gibst du mir deine Nummer?
el mensaje|Nachricht|n||Te mandé un mensaje anoche.|Ich habe dir gestern Abend eine Nachricht geschickt.
la foto|Foto|n||¿Nos tomamos una foto?|Machen wir ein Foto?
la música|Musik|n||Me gusta la música colombiana.|Ich mag kolumbianische Musik.
la película|Film|n||Vamos a ver una película.|Wir schauen einen Film.
el libro|Buch|n||Estoy leyendo un libro muy bueno.|Ich lese gerade ein sehr gutes Buch.
el juego|Spiel|n||Este juego es muy divertido.|Dieses Spiel macht viel Spass.
la fiesta|Fest, Party|n||El sábado hay una fiesta en mi casa.|Am Samstag gibt es eine Party bei mir.
el cumpleaños|Geburtstag|n||Hoy es el cumpleaños de mi mamá.|Heute ist der Geburtstag meiner Mutter.
el regalo|Geschenk|n||Te traje un regalo.|Ich habe dir ein Geschenk mitgebracht.
el café|Kaffee|n||¿Quieres un café con leche?|Willst du einen Milchkaffee?
el tinto|kleiner schwarzer Kaffee|n|In Kolumbien kein Rotwein, sondern schwarzer Kaffee. Liebevoll: un tintico.|¿Nos tomamos un tinto?|Trinken wir einen schwarzen Kaffee?
la cerveza|Bier|n||Una cerveza bien fría, por favor.|Ein schön kaltes Bier, bitte.
el almuerzo|Mittagessen|n|Die Hauptmahlzeit des Tages.|El almuerzo está listo.|Das Mittagessen ist bereit.
el desayuno|Frühstück|n||Siempre tomo el desayuno a las siete.|Ich frühstücke immer um sieben.
la comida (de la noche)|Abendessen|n|In Kolumbien heisst das Abendessen meist la comida, seltener la cena.|Hoy la comida es a las ocho.|Heute gibt es das Abendessen um acht.
el pan|Brot|n||Compro pan en la tienda.|Ich kaufe Brot im Laden.
el arroz|Reis|n||Quiero arroz con pollo.|Ich möchte Reis mit Poulet.
la carne|Fleisch|n||Yo no como carne roja.|Ich esse kein rotes Fleisch.
el pollo|Poulet, Huhn|n||El pollo está muy rico.|Das Poulet ist sehr lecker.
la fruta|Frucht|n||En Colombia hay mucha fruta.|In Kolumbien gibt es viele Früchte.
el huevo|Ei|n||Desayuno huevos con arepa.|Ich frühstücke Eier mit Arepa.
la leche|Milch|n||¿Tomas el café con leche?|Trinkst du den Kaffee mit Milch?
la arepa|Arepa (Maisfladen)|n|Gibt es zu fast jeder Mahlzeit.|Quiero una arepa con queso.|Ich möchte eine Arepa mit Käse.
la mesa|Tisch|n||La comida está en la mesa.|Das Essen steht auf dem Tisch.
la silla|Stuhl|n||Siéntate en esta silla.|Setz dich auf diesen Stuhl.
la cama|Bett|n||Todavía estoy en la cama.|Ich bin noch im Bett.
el cuarto|Zimmer|n|In Kolumbien cuarto oder pieza, selten habitación.|Mi cuarto es pequeño pero bonito.|Mein Zimmer ist klein, aber schön.
el baño|Bad, Toilette|n||¿Dónde está el baño?|Wo ist die Toilette?
la cocina|Küche|n||Mi mamá está en la cocina.|Meine Mutter ist in der Küche.
la ventana|Fenster|n||¿Puedo abrir la ventana?|Darf ich das Fenster öffnen?
el piso|Boden, Stockwerk|n||El celular se cayó al piso.|Das Handy ist auf den Boden gefallen.
el apartamento|Wohnung|n||Mi apartamento queda en el norte.|Meine Wohnung liegt im Norden.
el edificio|Gebäude|n||La oficina está en ese edificio.|Das Büro ist in diesem Gebäude.
el barrio|Quartier|n||Mi barrio es muy tranquilo.|Mein Quartier ist sehr ruhig.
la tienda|Laden|n|Meist der kleine Quartierladen an der Ecke.|Voy a la tienda a comprar pan.|Ich gehe in den Laden, Brot kaufen.
la oficina|Büro|n||Hoy trabajo en la oficina.|Heute arbeite ich im Büro.
el banco|Bank|n||El banco cierra a las cuatro.|Die Bank schliesst um vier.
el hospital|Spital|n||Mi abuelo está en el hospital.|Mein Grossvater ist im Spital.
el médico / la médica|Arzt, Ärztin|n||Necesito ir al médico.|Ich muss zum Arzt gehen.
el colegio|Schule|n|colegio = Schule bis 18. Die Uni heisst universidad.|Mis hijos van al colegio en bus.|Meine Kinder fahren mit dem Bus zur Schule.
la universidad|Universität|n||Mi hermana estudia en la universidad.|Meine Schwester studiert an der Universität.
la clase|Unterricht, Klasse|n||La clase empieza a las ocho.|Der Unterricht beginnt um acht.
el profesor / la profesora|Lehrer, Lehrerin|n||La profesora habla muy despacio.|Die Lehrerin spricht sehr langsam.
el estudiante / la estudiante|Student, Schüler|n||Los estudiantes llegan temprano.|Die Schüler kommen früh.
el jefe / la jefa|Chef, Chefin|n||Mi jefe es muy chévere.|Mein Chef ist sehr cool.
la empresa|Firma|n||Trabajo en una empresa pequeña.|Ich arbeite in einer kleinen Firma.
la reunión|Meeting, Treffen|n||Tengo una reunión a las diez.|Ich habe um zehn ein Meeting.
la cuenta|Rechnung, Konto|n||La cuenta, por favor.|Die Rechnung, bitte.
el precio|Preis|n||El precio está muy alto.|Der Preis ist sehr hoch.
el bus|Bus|n||Tomo el bus para ir al trabajo.|Ich nehme den Bus zur Arbeit.
el taxi|Taxi|n||Mejor pidamos un taxi.|Bestellen wir lieber ein Taxi.
el avión|Flugzeug|n||El avión sale a las seis.|Das Flugzeug fliegt um sechs ab.
el viaje|Reise|n||El viaje a Cartagena fue chévere.|Die Reise nach Cartagena war toll.
el camino|Weg|n||¿Este es el camino al centro?|Ist das der Weg ins Zentrum?
el centro|Zentrum|n||Vamos al centro en bus.|Wir fahren mit dem Bus ins Zentrum.
el parque|Park|n||Los domingos camino en el parque.|Sonntags spaziere ich im Park.
la playa|Strand|n||En diciembre vamos a la playa.|Im Dezember gehen wir an den Strand.
la montaña|Berg|n||Desde Bogotá se ven las montañas.|Von Bogotá aus sieht man die Berge.
el campo|Land, Feld|n||Mis abuelos viven en el campo.|Meine Grosseltern leben auf dem Land.
la finca|Landhaus, Bauernhof|n|Am Wochenende fährt man gern a una finca.|Este fin de semana vamos a una finca.|Dieses Wochenende fahren wir auf ein Landhaus.
la tierra|Erde, Land|n||La tierra aquí es muy buena.|Die Erde hier ist sehr gut.
el sol|Sonne|n||Hoy hace mucho sol.|Heute scheint die Sonne stark.
la lluvia|Regen|n||Con esta lluvia no salgo.|Bei diesem Regen gehe ich nicht raus.
el calor|Hitze, Wärme|n||En la costa hace mucho calor.|An der Küste ist es sehr heiss.
el cuerpo|Körper|n||Me duele todo el cuerpo.|Mir tut der ganze Körper weh.
el corazón|Herz|n||Ella tiene un gran corazón.|Sie hat ein grosses Herz.
el pie|Fuss|n||Me duele el pie.|Mir tut der Fuss weh.
el pelo|Haar|n||Tienes el pelo muy largo.|Du hast sehr lange Haare.
la cara|Gesicht|n||Tienes algo en la cara.|Du hast etwas im Gesicht.
la boca|Mund|n||No hables con la boca llena.|Sprich nicht mit vollem Mund.
el amor|Liebe|n||El amor es lo más importante.|Die Liebe ist das Wichtigste.
el novio / la novia|Freund, Freundin (Partner)|n||Mi novia es de Cali.|Meine Freundin ist aus Cali.
el esposo / la esposa|Ehemann, Ehefrau|n||Mi esposo trabaja en un banco.|Mein Mann arbeitet in einer Bank.
el abuelo / la abuela|Grossvater, Grossmutter|n||Mi abuela cocina muy rico.|Meine Grossmutter kocht sehr lecker.
el tío / la tía|Onkel, Tante|n||Mi tía vive en Medellín.|Meine Tante wohnt in Medellín.
el primo / la prima|Cousin, Cousine|n||Mañana viene mi primo de Cali.|Morgen kommt mein Cousin aus Cali.
el sobrino / la sobrina|Neffe, Nichte|n||Mi sobrina cumple cinco años hoy.|Meine Nichte wird heute fünf Jahre alt.
el vecino / la vecina|Nachbar, Nachbarin|n||Mi vecino tiene un perro grande.|Mein Nachbar hat einen grossen Hund.
la señora|Frau, Dame|n||La señora de la tienda es muy amable.|Die Frau im Laden ist sehr freundlich.
don / doña|Herr, Frau (vor dem Vornamen)|n|Respektvoll vor dem Vornamen: don Carlos, doña Marta.|Buenos días, don Carlos, ¿cómo está?|Guten Tag, Herr Carlos, wie geht es Ihnen?
el muchacho / la muchacha|junger Mann, junge Frau|n||Ese muchacho trabaja en la tienda.|Dieser junge Mann arbeitet im Laden.
el perro|Hund|n||Mi perro se llama Max.|Mein Hund heisst Max.
el gato|Katze|n||El gato duerme en la cama.|Die Katze schläft auf dem Bett.
el gusto|Geschmack, Freude|n|Mucho gusto = Freut mich. Con gusto = Gern geschehen.|Mucho gusto, me llamo Ana.|Freut mich, ich heisse Ana.
el miedo|Angst|n||Le tengo miedo a los perros.|Ich habe Angst vor Hunden.
el hambre|Hunger|n||Tengo mucha hambre.|Ich habe grossen Hunger.
la sed|Durst|n||¿Tienes sed? ¿Quieres agua?|Hast du Durst? Willst du Wasser?
el sueño|Traum, Müdigkeit|n||Hoy tengo mucho sueño.|Heute bin ich sehr müde.
la suerte|Glück (Zufall)|n||¡Buena suerte en el examen!|Viel Glück bei der Prüfung!
la salud|Gesundheit|n||Mi abuelo está bien de salud.|Meinem Grossvater geht es gesundheitlich gut.
el dolor|Schmerz|n||Tengo dolor de cabeza.|Ich habe Kopfschmerzen.
pobre|arm|a||Es una familia muy pobre.|Es ist eine sehr arme Familie.
sano|gesund|a||Quiero comer más sano.|Ich will gesünder essen.
vivo|lebendig|a||El pez todavía está vivo.|Der Fisch lebt noch.
muerto|tot|a||Mi planta está muerta.|Meine Pflanze ist tot.
casado|verheiratet|a||Mi hermano ya está casado.|Mein Bruder ist schon verheiratet.
soltero|ledig|a||Mi prima todavía es soltera.|Meine Cousine ist noch ledig.
inteligente|intelligent|a||Tu hija es muy inteligente.|Deine Tochter ist sehr intelligent.
tonto|dumm|a||No soy tonto, entiendo todo.|Ich bin nicht dumm, ich verstehe alles.
bobo|dumm, blöd|a|In Kolumbien sehr häufig, oft auch scherzhaft.|¡Ay, no sea bobo, hombre!|Ach, sei nicht blöd, Mann!
pilo|schlau, fleissig|a|Umgangssprachlich: Ese niño es muy pilo.|Ese niño es muy pilo.|Dieser Junge ist sehr schlau.
chiquito|klein (liebevoll)|a|Verkleinerungen auf -ito sind in Kolumbien überall: un momentico, un tintico.|Tengo un perro chiquito.|Ich habe einen kleinen Hund.
aprender|lernen|v||Quiero aprender español rápido.|Ich will schnell Spanisch lernen.
estudiar|studieren, lernen|v||Estudio español todos los días.|Ich lerne jeden Tag Spanisch.
enseñar|zeigen, lehren|v||¿Me enseñas a bailar salsa?|Bringst du mir Salsa tanzen bei?
leer|lesen|v||Me gusta leer en la cama.|Ich lese gerne im Bett.
escribir|schreiben|v||Te escribo un mensaje más tarde.|Ich schreibe dir später eine Nachricht.
bailar|tanzen|v||¿Quieres bailar conmigo?|Willst du mit mir tanzen?
cantar|singen|v||Mi tía canta muy bonito.|Meine Tante singt sehr schön.
cocinar|kochen|v||Hoy cocino yo para todos.|Heute koche ich für alle.
caminar|gehen, spazieren|v||Me gusta caminar por el barrio.|Ich spaziere gerne durchs Quartier.
correr|rennen|v||Corro en el parque los sábados.|Samstags renne ich im Park.
viajar|reisen|v||Quiero viajar a Cartagena.|Ich will nach Cartagena reisen.
manejar|fahren (Auto)|v|In Kolumbien manejar statt conducir.|Mi papá maneja un taxi.|Mein Vater fährt ein Taxi.
subir|hinaufgehen, einsteigen|v||Subimos al quinto piso.|Wir gehen in den fünften Stock hinauf.
bajar|hinuntergehen, aussteigen|v||Me bajo en la próxima parada.|Ich steige an der nächsten Haltestelle aus.
caer|fallen|v||Cuidado, te vas a caer.|Pass auf, du fällst gleich.
levantarse|aufstehen|v||Me levanto a las seis.|Ich stehe um sechs auf.
acostarse|ins Bett gehen|v||Los niños se acuestan temprano.|Die Kinder gehen früh ins Bett.
despertarse|aufwachen|v||Hoy me desperté muy tarde.|Heute bin ich sehr spät aufgewacht.
bañarse|duschen, baden|v|In Kolumbien sagt man bañarse auch fürs Duschen.|Me baño todas las mañanas.|Ich dusche jeden Morgen.
vestirse|sich anziehen|v||Me visto rápido y salgo.|Ich ziehe mich schnell an und gehe los.
sentarse|sich setzen|v||Siéntese aquí, por favor.|Setzen Sie sich bitte hierhin.
llamarse|heissen|v||¿Cómo se llama usted?|Wie heissen Sie?
acordarse|sich erinnern (an)|v||¿Te acuerdas de mí?|Erinnerst du dich an mich?
preocuparse|sich Sorgen machen|v||No te preocupes, todo está bien.|Mach dir keine Sorgen, alles ist gut.
casarse|heiraten|v||Mi hermana se casa en diciembre.|Meine Schwester heiratet im Dezember.
irse|weggehen|v||Ya me voy, nos vemos mañana.|Ich gehe jetzt, wir sehen uns morgen.
quedarse|bleiben|v||Hoy me quedo en la casa.|Heute bleibe ich zu Hause.
sentirse|sich fühlen|v||¿Cómo te sientes hoy?|Wie fühlst du dich heute?
olvidar|vergessen|v||Olvidé mi celular en el taxi.|Ich habe mein Handy im Taxi vergessen.
descansar|sich ausruhen|v||El domingo quiero descansar.|Am Sonntag will ich mich ausruhen.
limpiar|putzen|v||Hoy tengo que limpiar la casa.|Heute muss ich das Haus putzen.
lavar|waschen|v||Voy a lavar la ropa.|Ich wasche jetzt die Kleider.
arreglar|reparieren, aufräumen|v||Necesito arreglar el carro.|Ich muss das Auto reparieren.
mandar|schicken|v||Le mando una foto por WhatsApp.|Ich schicke Ihnen ein Foto per WhatsApp.
enviar|senden|v||Voy a enviar el correo ahora.|Ich sende die E-Mail jetzt.
recibir|erhalten|v||¿Usted recibió mi mensaje ayer?|Haben Sie gestern meine Nachricht erhalten?
contestar|antworten, abnehmen (Telefon)|v||Mi mamá no contesta el celular.|Meine Mutter nimmt das Handy nicht ab.
responder|antworten|v||¿Por qué no me responde el mensaje?|Warum antworten Sie nicht auf meine Nachricht?
explicar|erklären|v||¿Me puede explicar esta palabra?|Können Sie mir dieses Wort erklären?
mostrar|zeigen|v||Le muestro el camino al hotel.|Ich zeige Ihnen den Weg zum Hotel.
invitar|einladen|v||Te invito a un tinto.|Ich lade dich auf einen Kaffee ein.
visitar|besuchen|v||Este fin de semana visito a mis abuelos.|Dieses Wochenende besuche ich meine Grosseltern.
acompañar|begleiten|v||¿Me acompañas al supermercado?|Begleitest du mich in den Supermarkt?
compartir|teilen|v||Compartimos un taxi al aeropuerto.|Wir teilen uns ein Taxi zum Flughafen.
regalar|schenken|v|¿Me regala un tinto? = Ich hätte gern einen Kaffee. So bestellt man in Kolumbien.|Le regalo un libro a mi hermana.|Ich schenke meiner Schwester ein Buch.
prestar|leihen|v||¿Me prestas tu carro mañana?|Leihst du mir morgen dein Auto?
cuidar|pflegen, aufpassen auf|v||Mi hermana cuida a los niños hoy.|Meine Schwester passt heute auf die Kinder auf.
cobrar|verlangen (Geld), kassieren|v||¿Cuánto cobra hasta el centro?|Wie viel verlangen Sie bis ins Zentrum?
gastar|ausgeben|v||Gasto mucha plata en comida.|Ich gebe viel Geld für Essen aus.
costar|kosten|v||¿Cuánto cuesta el pasaje?|Wie viel kostet das Ticket?
valer|kosten, wert sein|v|¿Cuánto vale? = Wie viel kostet das?|¿Cuánto vale esta camisa?|Wie viel kostet dieses Hemd?
servir|dienen, nützen, servieren|v||Este celular viejo ya no sirve.|Dieses alte Handy taugt nichts mehr.
funcionar|funktionieren|v||El internet no funciona hoy.|Das Internet funktioniert heute nicht.
pasear|spazieren gehen|v||Los domingos paseamos por el parque.|Sonntags spazieren wir durch den Park.
intentar|versuchen|v||Voy a intentar llegar temprano.|Ich werde versuchen, früh anzukommen.
lograr|erreichen, schaffen|v||Por fin logré terminar el trabajo.|Endlich habe ich es geschafft, die Arbeit fertigzumachen.
conseguir|bekommen, besorgen|v||¿Dónde consigo un taxi?|Wo bekomme ich ein Taxi?
permitir|erlauben|v||Aquí no se permite fumar.|Hier ist Rauchen nicht erlaubt.
prometer|versprechen|v||Te prometo que llego a tiempo.|Ich verspreche dir, dass ich pünktlich komme.
decidir|entscheiden|v||Todavía no he decidido qué estudiar.|Ich habe noch nicht entschieden, was ich studieren soll.
escoger|auswählen|v||Escoja la mesa que quiera.|Wählen Sie den Tisch, den Sie möchten.
preferir|vorziehen|v||Prefiero el café sin azúcar.|Ich trinke den Kaffee lieber ohne Zucker.
odiar|hassen|v||Odio levantarme temprano los lunes.|Ich hasse es, montags früh aufzustehen.
amar|lieben|v||Amo mucho a mi familia.|Ich liebe meine Familie sehr.
besar|küssen|v||La mamá besa al bebé.|Die Mutter küsst das Baby.
extrañar|vermissen|v|In Kolumbien extrañar statt echar de menos: Lo extraño.|Extraño mucho a mis papás.|Ich vermisse meine Eltern sehr.
soñar|träumen|v||Anoche soñé con mi abuela.|Letzte Nacht habe ich von meiner Grossmutter geträumt.
reír|lachen|v||Nos reímos mucho con ese chiste.|Wir haben viel über diesen Witz gelacht.
llorar|weinen|v||El bebé llora toda la noche.|Das Baby weint die ganze Nacht.
gritar|schreien|v||Por favor, no grite tanto.|Bitte schreien Sie nicht so.
sufrir|leiden|v||Mi abuelo sufre mucho del corazón.|Mein Grossvater leidet stark an Herzproblemen.
nacer|geboren werden|v||Mi hija nació en Bogotá.|Meine Tochter wurde in Bogotá geboren.
crecer|wachsen|v||Los niños crecen muy rápido.|Die Kinder wachsen sehr schnell.
cumplir|erfüllen, (Jahre) werden|v||Mañana cumplo treinta años.|Morgen werde ich dreissig.
celebrar|feiern|v||Vamos a celebrar tu cumpleaños.|Wir feiern deinen Geburtstag.
importar|wichtig sein|v||No me importa el precio.|Der Preis ist mir nicht wichtig.
interesar|interessieren|v||Me interesa mucho la historia.|Geschichte interessiert mich sehr.
encantar|sehr gefallen|v||Me encanta la comida colombiana.|Ich liebe kolumbianisches Essen.
doler|wehtun|v||Me duele la cabeza.|Mir tut der Kopf weh.
molestar|stören|v||¿Le molesta si abro la ventana?|Stört es Sie, wenn ich das Fenster öffne?
faltar|fehlen|v||Me faltan dos mil pesos.|Mir fehlen zweitausend Pesos.
alcanzar|erreichen, reichen|v||La plata no me alcanza.|Das Geld reicht mir nicht.
prender|einschalten, anzünden|v|In Kolumbien prender statt encender: Prenda la luz.|Prenda la luz, por favor.|Machen Sie bitte das Licht an.
apagar|ausschalten|v||Apague la luz antes de salir.|Schalten Sie das Licht aus, bevor Sie gehen.
timbrar|klingeln|v|El celular está timbrando = Das Handy klingelt.|Tu celular está timbrando.|Dein Handy klingelt.
marcar|wählen (Telefon), markieren|v||Marque el número sin el cero.|Wählen Sie die Nummer ohne die Null.
colgar|aufhängen, auflegen|v||Ella me colgó sin decir nada.|Sie hat aufgelegt, ohne etwas zu sagen.
parquear|parkieren|v|In Kolumbien parquear statt aparcar.|¿Dónde puedo parquear el carro?|Wo kann ich das Auto parkieren?
mudarse|umziehen|v||Nos mudamos a Bogotá el próximo mes.|Wir ziehen nächsten Monat nach Bogotá.
resolver|lösen|v||Tenemos que resolver este problema.|Wir müssen dieses Problem lösen.
abrazar|umarmen|v||Mi abuela me abraza muy fuerte.|Meine Grossmutter umarmt mich ganz fest.
cansado|müde|a||Estoy muy cansado hoy.|Ich bin heute sehr müde.
contento|zufrieden, froh|a||Estamos contentos con el apartamento.|Wir sind zufrieden mit der Wohnung.
triste|traurig|a||¿Por qué estás triste?|Warum bist du traurig?
enfermo|krank|a||Hoy no trabajo porque estoy enfermo.|Heute arbeite ich nicht, weil ich krank bin.
ocupado|beschäftigt|a||Ahora estoy ocupado, ¿hablamos después?|Ich bin gerade beschäftigt, sprechen wir später?
libre|frei|a||¿Está libre esta silla?|Ist dieser Stuhl frei?
lleno|voll|a||El bus está muy lleno.|Der Bus ist sehr voll.
vacío|leer|a||La nevera está vacía.|Der Kühlschrank ist leer.
abierto|offen|a||¿La tienda está abierta?|Ist der Laden offen?
cerrado|geschlossen|a||El banco está cerrado los domingos.|Die Bank ist sonntags geschlossen.
caro|teuer|a||Este restaurante es muy caro.|Dieses Restaurant ist sehr teuer.
barato|billig|a||La fruta aquí es muy barata.|Das Obst ist hier sehr billig.
rápido|schnell|a||Es más rápido ir en bus.|Mit dem Bus ist es schneller.
lento|langsam|a||El internet está muy lento hoy.|Das Internet ist heute sehr langsam.
alto|hoch, gross|a||Mi hermano es muy alto.|Mein Bruder ist sehr gross.
bajo|niedrig, klein|a||Ella es baja como su mamá.|Sie ist klein wie ihre Mutter.
gordo|dick|a||Mi perro está muy gordo.|Mein Hund ist sehr dick.
flaco|dünn|a|Auch liebevoll als Anrede: ¿Qué más, flaco?|Estás muy flaco, ¿comes bien?|Du bist sehr dünn, isst du genug?
fuerte|stark|a||Mi papá es muy fuerte.|Mein Vater ist sehr stark.
débil|schwach|a||Después de la gripa estoy débil.|Nach der Grippe bin ich schwach.
caliente|heiss|a||Cuidado, la sopa está caliente.|Vorsicht, die Suppe ist heiss.
frío|kalt|a||En Bogotá las noches son frías.|In Bogotá sind die Nächte kalt.
bravo|wütend|a|In Kolumbien: estar bravo = wütend sein.|Mi jefe está bravo conmigo.|Mein Chef ist wütend auf mich.
tranquilo|ruhig|a|¡Tranquilo! = Keine Sorge, alles gut.|Tranquilo, no pasa nada.|Keine Sorge, alles in Ordnung.
juicioso|fleissig, vernünftig|a|Lob für Kinder und Studierende: ¡Qué juicioso!|Mi hijo es muy juicioso en el colegio.|Mein Sohn ist in der Schule sehr fleissig.
bacano|cool, super|a|Umgangssprachlich, vor allem unter Jüngeren.|¡Qué bacano tu carro nuevo!|Wie cool, dein neues Auto!
maluco|unangenehm, mies|a|Umgangssprachlich: Me siento maluco = Mir ist nicht gut.|Hoy me siento maluco.|Heute ist mir nicht gut.
querido|lieb|a||Querida María, gracias por todo.|Liebe María, danke für alles.
amable|freundlich|a||La señora de la tienda es muy amable.|Die Frau im Laden ist sehr freundlich.
simpático|sympathisch|a||Tu novio es muy simpático.|Dein Freund ist sehr sympathisch.
feo|hässlich|a||Ese carro es muy feo.|Dieses Auto ist sehr hässlich.
hermoso|wunderschön|a||¡Qué día tan hermoso!|Was für ein wunderschöner Tag!
limpio|sauber|a||La cocina ya está limpia.|Die Küche ist schon sauber.
sucio|schmutzig|a||Tus zapatos están muy sucios.|Deine Schuhe sind sehr schmutzig.
correcto|richtig|a||Sí, esa es la respuesta correcta.|Ja, das ist die richtige Antwort.
raro|seltsam|a||Qué raro, el bus no ha llegado.|Seltsam, der Bus ist noch nicht gekommen.
normal|normal|a||Es normal tener miedo.|Es ist normal, Angst zu haben.
especial|besonders|a||Hoy es un día especial para mí.|Heute ist ein besonderer Tag für mich.
diferente|verschieden|a||Mis hermanos son muy diferentes.|Meine Geschwister sind sehr verschieden.
propio|eigen|a||Quiero tener mi propia casa.|Ich möchte mein eigenes Haus haben.
real|echt, wirklich|a||¿Esta historia es real?|Ist diese Geschichte echt?
único|einzig|a||Eres mi único amigo aquí.|Du bist mein einziger Freund hier.
próximo|nächster|a||Nos vemos la próxima semana.|Wir sehen uns nächste Woche.
pasado|vergangen, letzter|a||El año pasado viajé a Cartagena.|Letztes Jahr bin ich nach Cartagena gereist.
siguiente|folgender|a||Al día siguiente volvimos a Bogotá.|Am folgenden Tag sind wir nach Bogotá zurückgekehrt.
medio|halb|a||Llego en media hora.|Ich komme in einer halben Stunde.
completo|vollständig|a||Necesito su nombre completo.|Ich brauche Ihren vollständigen Namen.
blanco|weiss|a||Quiero una camisa blanca.|Ich möchte ein weisses Hemd.
negro|schwarz|a||Me gusta el café negro.|Ich mag schwarzen Kaffee.
rojo|rot|a||El semáforo está en rojo.|Die Ampel ist rot.
azul|blau|a||Ella tiene los ojos azules.|Sie hat blaue Augen.
verde|grün|a||La casa verde es la mía.|Das grüne Haus ist meins.
amarillo|gelb|a||Los taxis en Bogotá son amarillos.|Die Taxis in Bogotá sind gelb.
uno|eins|z||¿Cuántos quiere? Solo uno.|Wie viele möchten Sie? Nur einen.
dos|zwei|z||Tengo dos hermanas mayores.|Ich habe zwei ältere Schwestern.
tres|drei|z||Quiero tres empanadas, por favor.|Ich möchte drei Empanadas, bitte.
cuatro|vier|z||Somos cuatro en la familia.|Wir sind vier in der Familie.
cinco|fünf|z||La clase empieza a las cinco.|Der Unterricht beginnt um fünf.
seis|sechs|z||Me levanto a las seis.|Ich stehe um sechs auf.
siete|sieben|z||La semana tiene siete días.|Die Woche hat sieben Tage.
ocho|acht|z||Trabajo ocho horas al día.|Ich arbeite acht Stunden am Tag.
nueve|neun|z||Mi hijo tiene nueve años.|Mein Sohn ist neun Jahre alt.
diez|zehn|z||Espéreme diez minutos, por favor.|Warten Sie bitte zehn Minuten auf mich.
once|elf|z||El bus llega a las once.|Der Bus kommt um elf.
doce|zwölf|z||Almorzamos a las doce.|Wir essen um zwölf zu Mittag.
quince|fünfzehn|z||Nos vemos en quince minutos.|Wir sehen uns in fünfzehn Minuten.
veinte|zwanzig|z||Tengo veinte mil pesos.|Ich habe zwanzigtausend Pesos.
treinta|dreissig|z||Mi hermana tiene treinta años.|Meine Schwester ist dreissig Jahre alt.
cincuenta|fünfzig|z||Son cincuenta mil pesos, por favor.|Das macht fünfzigtausend Pesos, bitte.
cien|hundert|z||Hay cien personas en la fiesta.|An der Party sind hundert Leute.
mil|tausend|z||El tinto cuesta dos mil pesos.|Der Kaffee kostet zweitausend Pesos.
millón|Million|z|Preise gehen schnell in die Tausende: diez mil pesos, un millón de pesos.|El arriendo cuesta un millón de pesos.|Die Miete kostet eine Million Pesos.
el lunes|Montag|n||El lunes empiezo un trabajo nuevo.|Am Montag fange ich eine neue Arbeit an.
el martes|Dienstag|n||El martes tengo clase de español.|Am Dienstag habe ich Spanischunterricht.
el miércoles|Mittwoch|n||El miércoles vamos al cine.|Am Mittwoch gehen wir ins Kino.
el jueves|Donnerstag|n||¿Nos vemos el jueves?|Sehen wir uns am Donnerstag?
el viernes|Freitag|n||El viernes salimos a bailar.|Am Freitag gehen wir tanzen.
el sábado|Samstag|n||El sábado no trabajo.|Am Samstag arbeite ich nicht.
el domingo|Sonntag|n||El domingo almorzamos en familia.|Am Sonntag essen wir mit der Familie zu Mittag.
el mediodía|Mittag|n||Nos vemos al mediodía.|Wir sehen uns am Mittag.
el minuto|Minute|n||Espere un minuto, por favor.|Warten Sie bitte eine Minute.
el rato|Weile|n|un rato = eine Weile. Sehr häufig: Ahorita hablamos un rato.|Descanso un rato y sigo trabajando.|Ich ruhe mich eine Weile aus und arbeite dann weiter.
ahorita|gleich, jetzt dann|d|Kann «sofort» heissen, aber auch «irgendwann später».|Ahorita lo llamo, señor.|Ich rufe Sie gleich an.
apenas|kaum, gerade erst|d||Apenas llegué a la casa.|Ich bin gerade erst nach Hause gekommen.
pronto|bald|d||Espero verte muy pronto.|Ich hoffe, dich bald zu sehen.
despacio|langsam|d||Hable más despacio, por favor.|Sprechen Sie bitte langsamer.
juntos|zusammen|a||Vamos juntos al concierto.|Wir gehen zusammen ans Konzert.
afuera|draussen|d||Los niños juegan afuera.|Die Kinder spielen draussen.
adentro|drinnen|d||Mejor esperamos adentro.|Wir warten besser drinnen.
arriba|oben|d||Mi cuarto está arriba.|Mein Zimmer ist oben.
abajo|unten|d||El baño está abajo.|Das Bad ist unten.
adelante|vorne, vorwärts|d|¡Siga adelante! = Kommen Sie herein!|¡Siga adelante, está en su casa!|Kommen Sie herein, fühlen Sie sich wie zu Hause!
atrás|hinten, zurück|d||Los niños van atrás en el carro.|Die Kinder sitzen hinten im Auto.
encima|oben drauf|d||Deje las llaves encima de la mesa.|Legen Sie die Schlüssel auf den Tisch.
debajo|darunter|d||El gato está debajo de la cama.|Die Katze ist unter dem Bett.
enfrente|gegenüber|d||La panadería está enfrente del banco.|Die Bäckerei ist gegenüber der Bank.
la derecha|rechts|n||La tienda está a la derecha.|Der Laden ist rechts.
la izquierda|links|n||Voltee a la izquierda en la esquina.|Biegen Sie an der Ecke links ab.
derecho|geradeaus|d||Siga derecho dos cuadras.|Gehen Sie zwei Blocks geradeaus.
allí|dort|d||Allí vive mi abuela.|Dort wohnt meine Grossmutter.
ahí|da|d||Ahí está el baño.|Da ist das Bad.
oiga|hören Sie|x|Um jemanden anzusprechen. Unter Freunden: oye.|Oiga, ¿dónde queda la estación?|Hören Sie, wo ist die Station?
mire|schauen Sie|x|Leitet eine Erklärung ein: Mire, lo que pasa es que …|Mire, lo que pasa es que no tengo tiempo.|Schauen Sie, es ist so, dass ich keine Zeit habe.
dale|okay, los|x|Zustimmung, sehr häufig: —¿Nos vemos a las 3? —¡Dale!|¡Dale, nos vemos a las tres!|Okay, wir sehen uns um drei!
de una|sofort, klar|x|Umgangssprachlich: ¿Vamos? —¡De una!|¿Vamos por un tinto? ¡De una!|Gehen wir einen Kaffee trinken? Klar, sofort!
qué pena|Entschuldigung, wie peinlich|x|Die typisch kolumbianische Entschuldigung: Qué pena con usted.|Qué pena con usted, llegué tarde.|Entschuldigen Sie, ich bin zu spät gekommen.
qué pesar|wie schade|x|Mitgefühl, wenn jemand krank ist oder Pech hat.|¡Qué pesar que estés enfermo!|Wie schade, dass du krank bist!
con mucho gusto|gern geschehen|x|Die Antwort auf gracias in Kolumbien.|Con mucho gusto, señora, que le vaya bien.|Gern geschehen, alles Gute!
a la orden|stets zu Diensten|x|Hörst du überall in Läden und auf der Strasse.|A la orden, ¿qué necesita?|Zu Diensten, was brauchen Sie?
perdón|Entschuldigung|x||Perdón, no lo vi.|Entschuldigung, ich habe Sie nicht gesehen.
disculpe|entschuldigen Sie|x||Disculpe, ¿qué hora es?|Entschuldigen Sie, wie spät ist es?
con permiso|Entschuldigung (beim Vorbeigehen)|x||Con permiso, necesito pasar.|Entschuldigung, ich muss vorbei.
lo siento|es tut mir leid|x||Lo siento, no puedo ir mañana.|Es tut mir leid, ich kann morgen nicht kommen.
de nada|bitte (nach danke)|x||De nada, para eso estamos.|Bitte, dafür sind wir ja da.
buenos días|guten Morgen|x||Buenos días, ¿cómo amaneció?|Guten Morgen, wie haben Sie geschlafen?
buenas tardes|guten Tag (Nachmittag)|x||Buenas tardes, ¿cómo está usted?|Guten Tag, wie geht es Ihnen?
buenas noches|guten Abend, gute Nacht|x||Buenas noches, que descanse.|Gute Nacht, schlafen Sie gut.
chao|tschüss|x||Chao, nos hablamos mañana.|Tschüss, wir sprechen uns morgen.
hasta luego|bis später|x||Hasta luego, que le vaya bien.|Bis später, alles Gute.
nos vemos|wir sehen uns|x||Nos vemos el viernes en la oficina.|Wir sehen uns am Freitag im Büro.
qué más|wie geht's?|x|Lockere Begrüssung: ¿Qué más? ¿Bien o qué?|¿Qué más? ¿Bien o qué?|Wie geht's? Alles gut?
quiubo|was geht?|x|Von ¿qué hubo? Sehr umgangssprachlich.|Quiubo, parce, ¿todo bien?|Was geht, Kumpel, alles gut?
cuídese|passen Sie auf sich auf|x|Typischer Abschied in Kolumbien.|Chao, mija, cuídese mucho.|Tschüss, meine Liebe, pass gut auf dich auf.
todo bien|alles gut|x|Antwort und Frage zugleich: ¿Todo bien? —Todo bien.|¿Todo bien? Sí, todo bien.|Alles gut? Ja, alles gut.
mejor dicho|besser gesagt, kurz gesagt|x|In Kolumbien ein sehr häufiges Füllwort.|Es caro, mejor dicho, carísimo.|Es ist teuer, besser gesagt, sehr teuer.
ya mismo|sofort|x|Bedeutet wirklich «sofort», anders als ahorita.|Ya mismo salgo para allá.|Ich mache mich sofort auf den Weg.
pilas|Achtung, pass auf|x|¡Pilas con el celular! = Pass auf dein Handy auf!|¡Pilas con el celular en el bus!|Pass im Bus auf dein Handy auf!
hágale|los, mach nur|x|Ermunterung: ¡Hágale pues!|¿Puedo empezar ya? ¡Hágale pues!|Kann ich schon anfangen? Los, mach nur!
mijo / mija|mein Lieber, meine Liebe|n|Von mi hijo. Liebevoll, auch für Nicht-Verwandte.|Mijo, venga a comer.|Mein Lieber, komm essen.
el parcero / la parcera|Kumpel|n|Kurz: parce. Ursprünglich aus Medellín, heute überall.|Mi parcero me ayudó con la mudanza.|Mein Kumpel hat mir beim Umzug geholfen.
el man|Typ, Kerl|n|Umgangssprachlich: Ese man es muy chévere.|Ese man es muy chévere.|Der Typ ist sehr cool.
la vaina|Ding, Sache|n|Allzweckwort: ¿Qué es esa vaina?|¿Qué es esa vaina?|Was ist das für ein Ding?
sumercé|Sie (herzlich)|f|Typisch für Bogotá und Boyacá, vor allem gegenüber Älteren.|¿Sumercé quiere otro tinto?|Möchten Sie noch einen Kaffee?
de pronto|vielleicht|x|In Kolumbien heisst de pronto meist «vielleicht», nicht «plötzlich».|De pronto llueve más tarde.|Vielleicht regnet es später.
o sea|das heisst, also|x||O sea, ¿no vienes a la fiesta?|Das heisst, du kommst nicht an die Party?
es que|es ist so, dass|x||Es que no tengo plata.|Ich habe nämlich kein Geld.
la verdad (es que)|ehrlich gesagt|x||La verdad es que no me gusta.|Ehrlich gesagt gefällt es mir nicht.
por eso|deshalb|x||Llueve mucho, por eso no salgo.|Es regnet stark, deshalb gehe ich nicht raus.
por ejemplo|zum Beispiel|x||Me gustan las frutas, por ejemplo, el mango.|Ich mag Früchte, zum Beispiel Mango.
a veces|manchmal|x||A veces voy al gimnasio.|Manchmal gehe ich ins Fitnessstudio.
seguido|oft|d|In Kolumbien häufiger als a menudo: Vengo seguido.|Vengo seguido a este café.|Ich komme oft in dieses Café.
sin embargo|jedoch|x||Es caro; sin embargo, vale la pena.|Es ist teuer, jedoch lohnt es sich.
además|ausserdem|d||Es barato y además es muy rico.|Es ist günstig und ausserdem sehr lecker.
aunque|obwohl|f||Aunque llueve, vamos al parque.|Obwohl es regnet, gehen wir in den Park.
mientras|während|f||Mientras cocino, escucho música.|Während ich koche, höre ich Musik.
sino|sondern|f||No es mi hermano, sino mi primo.|Er ist nicht mein Bruder, sondern mein Cousin.
ni|nicht einmal; weder … noch|f||No tengo ni un peso.|Ich habe nicht einmal einen Peso.
según|laut, gemäss|f||Según Google, el restaurante cierra a las diez.|Laut Google schliesst das Restaurant um zehn.
entre|zwischen|f||La tienda está entre el banco y la droguería.|Der Laden liegt zwischen der Bank und der Apotheke.
hacia|in Richtung|f||Vamos hacia el norte de la ciudad.|Wir fahren Richtung Norden der Stadt.
contra|gegen|f||Mañana Colombia juega contra Brasil.|Morgen spielt Kolumbien gegen Brasilien.
durante|während (Zeitraum)|f||Durante la semana trabajo mucho.|Während der Woche arbeite ich viel.
tal vez|vielleicht|x||Tal vez llego tarde hoy.|Vielleicht komme ich heute spät.
quizás|vielleicht|d||Quizás vamos al cine el sábado.|Vielleicht gehen wir am Samstag ins Kino.
ojalá|hoffentlich|x||¡Ojalá no llueva mañana!|Hoffentlich regnet es morgen nicht!
obvio|logisch, na klar|x|¡Obvio! = Na klar! Sehr häufig.|¿Vienes a la fiesta? ¡Obvio!|Kommst du zur Party? Na klar!
exacto|genau|x||¿Es a las tres? Exacto, a las tres.|Ist es um drei? Genau, um drei.
en serio|im Ernst|x||¿En serio? ¡No te creo!|Im Ernst? Das glaube ich dir nicht!
de verdad|wirklich|x||¿De verdad te gusta el tinto?|Magst du wirklich schwarzen Kaffee?
ni modo|da kann man nichts machen|x||Perdimos el bus, ni modo.|Wir haben den Bus verpasst, da kann man nichts machen.
qué tal|wie (war, ist) …?|x||¿Qué tal el fin de semana?|Wie war das Wochenende?
adónde|wohin|f||¿Adónde vas tan temprano?|Wohin gehst du so früh?
cuándo|wann|f||¿Cuándo es tu cumpleaños?|Wann hast du Geburtstag?
aquel / aquella|jener, jene|f||¿Ves aquella casa blanca?|Siehst du jenes weisse Haus dort?
ese / esa|dieser da, diese da|f||¿Cuánto cuesta esa camisa?|Wie viel kostet dieses Hemd da?
esto|das (hier)|f||Esto es muy importante para mí.|Das hier ist mir sehr wichtig.
nuestro|unser|f||Nuestro apartamento está cerca del centro.|Unsere Wohnung ist in der Nähe des Zentrums.
tu|dein|f||¿Cuál es tu número de celular?|Was ist deine Handynummer?
suyo|seiner, ihrer, Ihrer|f||Este celular no es mío, es suyo.|Dieses Handy ist nicht meins, es ist seins.
mío|meiner|f||Perdón, esa chaqueta negra es mía.|Entschuldigung, die schwarze Jacke da ist meine.
ninguno|keiner|f||Ninguno de mis amigos habla alemán.|Keiner meiner Freunde spricht Deutsch.
varios|mehrere|a||Tengo varios amigos en Bogotá.|Ich habe mehrere Freunde in Bogotá.
tanto|so viel|a||¡Tengo tanto trabajo hoy!|Ich habe heute so viel Arbeit!
cualquier|irgendein, jeder beliebige|a||Puedes llamarme a cualquier hora.|Du kannst mich jederzeit anrufen.
ambos|beide|f||Ambos hablan inglés muy bien.|Beide sprechen sehr gut Englisch.
alguna vez|je, irgendwann einmal|x||¿Alguna vez has estado en Cartagena?|Warst du je in Cartagena?
otra vez|noch einmal|x||¿Puede repetir otra vez, por favor?|Können Sie das bitte noch einmal wiederholen?
cada vez|jedes Mal|x||Cada vez que voy, está cerrado.|Jedes Mal, wenn ich hingehe, ist es geschlossen.
de repente|plötzlich|x||De repente empezó a llover.|Plötzlich fing es an zu regnen.
al final|am Ende|x||Al final, nos quedamos en casa.|Am Ende sind wir zu Hause geblieben.
por fin|endlich|x||¡Por fin es viernes!|Endlich ist Freitag!
en vez de|statt|x||Tomo agua en vez de gaseosa.|Ich trinke Wasser statt Limonade.
a pesar de|trotz|x||A pesar de la lluvia, salimos.|Trotz des Regens sind wir rausgegangen.
sobre todo|vor allem|x||Me gusta Colombia, sobre todo la comida.|Mir gefällt Kolumbien, vor allem das Essen.
más o menos|mehr oder weniger|x||Hablo español más o menos.|Ich spreche mehr oder weniger Spanisch.
de todas formas|jedenfalls|x||De todas formas, te llamo mañana.|Jedenfalls rufe ich dich morgen an.
por lo menos|mindestens|x||El viaje dura por lo menos dos horas.|Die Reise dauert mindestens zwei Stunden.
ya que|da, weil|f||Ya que estás aquí, comamos juntos.|Da du hier bist, lass uns zusammen essen.
para que|damit|f||Te doy plata para que compres pan.|Ich gebe dir Geld, damit du Brot kaufst.
antes de|vor (zeitlich)|x||Me lavo las manos antes de comer.|Ich wasche mir vor dem Essen die Hände.
después de|nach (zeitlich)|x||Después del trabajo voy al gimnasio.|Nach der Arbeit gehe ich ins Fitnessstudio.
el lado|Seite|n||El banco está al otro lado de la calle.|Die Bank ist auf der anderen Strassenseite.
el punto|Punkt|n||Ese es un buen punto.|Das ist ein guter Punkt.
el tema|Thema|n||No quiero hablar de ese tema.|Über dieses Thema will ich nicht reden.
la persona|Person|n||Es una persona muy amable.|Sie ist eine sehr freundliche Person.
el pueblo|Dorf, Volk|n||Mis abuelos viven en un pueblo pequeño.|Meine Grosseltern wohnen in einem kleinen Dorf.
el gobierno|Regierung|n||No me gusta el nuevo gobierno.|Die neue Regierung gefällt mir nicht.
la policía|Polizei|n||Anoche llamamos a la policía.|Gestern Abend haben wir die Polizei gerufen.
la ley|Gesetz|n||Manejar borracho va contra la ley.|Betrunken Auto fahren ist gegen das Gesetz.
la guerra|Krieg|n||Mi abuelo me cuenta historias de la guerra.|Mein Grossvater erzählt mir Geschichten vom Krieg.
la paz|Frieden|n||Todos queremos vivir en paz.|Wir alle wollen in Frieden leben.
el grupo|Gruppe|n||Viajamos en grupo a Villa de Leyva.|Wir reisen als Gruppe nach Villa de Leyva.
el equipo|Team, Mannschaft|n||¿Cuál es tu equipo favorito?|Was ist deine Lieblingsmannschaft?
el partido|Spiel (Match), Partei|n||Hoy vemos el partido en la casa de Juan.|Heute schauen wir das Spiel bei Juan zu Hause.
el fútbol|Fussball|n||Los domingos juego fútbol con mis amigos.|Sonntags spiele ich mit meinen Freunden Fussball.
el deporte|Sport|n||¿Qué deporte te gusta más?|Welcher Sport gefällt dir am besten?
el gimnasio|Fitnessstudio|n||Voy al gimnasio tres veces por semana.|Ich gehe dreimal pro Woche ins Fitnessstudio.
la enfermedad|Krankheit|n||Es una enfermedad muy común.|Das ist eine sehr häufige Krankheit.
la droguería|Apotheke|n|In Kolumbien droguería, seltener farmacia.|¿Hay una droguería cerca de aquí?|Gibt es hier in der Nähe eine Apotheke?
el remedio|Medikament|n||Tómese este remedio dos veces al día.|Nehmen Sie dieses Medikament zweimal am Tag.
la cita|Termin, Date|n||Mañana tengo una cita con el médico.|Morgen habe ich einen Termin beim Arzt.
la noticia|Nachricht (News)|n||Tengo una buena noticia para ti.|Ich habe eine gute Nachricht für dich.
el periódico|Zeitung|n||Mi papá lee el periódico todas las mañanas.|Mein Vater liest jeden Morgen die Zeitung.
la televisión|Fernsehen|n||No veo mucha televisión.|Ich schaue nicht viel Fernsehen.
el internet|Internet|n||El internet está muy lento hoy.|Das Internet ist heute sehr langsam.
el computador|Computer|n|In Kolumbien el computador, nicht el ordenador.|Trabajo todo el día en el computador.|Ich arbeite den ganzen Tag am Computer.
el correo|E-Mail, Post|n||Te mando la información por correo.|Ich schicke dir die Informationen per E-Mail.
la página|Seite|n||Abran el libro en la página diez.|Öffnet das Buch auf Seite zehn.
la palabra|Wort|n||¿Qué significa esta palabra?|Was bedeutet dieses Wort?
el idioma|Sprache|n||¿Cuántos idiomas hablas?|Wie viele Sprachen sprichst du?
el español|Spanisch|n||Estoy aprendiendo español en Bogotá.|Ich lerne Spanisch in Bogotá.
el inglés|Englisch|n||Mi jefe habla inglés muy bien.|Mein Chef spricht sehr gut Englisch.
el alemán|Deutsch|n||El alemán es difícil para los colombianos.|Deutsch ist für Kolumbianer schwierig.
la respuesta|Antwort|n||Todavía no tengo una respuesta.|Ich habe noch keine Antwort.
el ejemplo|Beispiel|n||¿Me puedes dar un ejemplo?|Kannst du mir ein Beispiel geben?
el error|Fehler|n||Perdón, fue un error.|Entschuldigung, das war ein Fehler.
el cambio|Wechsel, Wechselgeld|n||¿Tiene cambio de cincuenta mil?|Haben Sie Wechselgeld für fünfzigtausend?
la vuelta|Runde, Rückkehr|n|las vueltas = Erledigungen: Voy a hacer unas vueltas.|Damos una vuelta por el parque.|Wir drehen eine Runde im Park.
la diligencia|Erledigung|n||Hoy tengo que hacer una diligencia en el banco.|Heute muss ich bei der Bank etwas erledigen.
el plan|Plan|n||¿Cuál es el plan para hoy?|Was ist der Plan für heute?
el proyecto|Projekt|n||Estamos trabajando en un proyecto nuevo.|Wir arbeiten an einem neuen Projekt.
el negocio|Geschäft|n||Mi tía tiene un negocio de ropa.|Meine Tante hat ein Kleidergeschäft.
el cliente / la cliente|Kunde, Kundin|n||El cliente siempre tiene la razón.|Der Kunde hat immer recht.
el servicio|Dienst, Service|n||El servicio en este restaurante es excelente.|Der Service in diesem Restaurant ist ausgezeichnet.
el mercado|Markt|n||Compramos frutas en el mercado.|Wir kaufen Früchte auf dem Markt.
el supermercado|Supermarkt|n||Voy al supermercado a comprar leche.|Ich gehe in den Supermarkt, um Milch zu kaufen.
el centro comercial|Einkaufszentrum|n|Am Wochenende trifft man sich im centro comercial.|Nos vemos en el centro comercial a las tres.|Wir treffen uns um drei im Einkaufszentrum.
el restaurante|Restaurant|n||Conozco un restaurante muy bueno cerca.|Ich kenne ein sehr gutes Restaurant in der Nähe.
el mesero / la mesera|Kellner, Kellnerin|n||El mesero nos trae la carta.|Der Kellner bringt uns die Speisekarte.
el domicilio|Hauslieferung|n|Alles kommt a domicilio: Essen, Medikamente, Einkäufe.|Esta noche pedimos pizza a domicilio.|Heute Abend lassen wir uns Pizza nach Hause liefern.
la bolsa|Tüte, Tasche|n||¿Le doy una bolsa?|Soll ich Ihnen eine Tüte geben?
la ropa|Kleidung|n||Necesito comprar ropa nueva.|Ich muss neue Kleider kaufen.
la camisa|Hemd|n||Esta camisa me queda grande.|Dieses Hemd ist mir zu gross.
el zapato|Schuh|n||Estos zapatos son muy cómodos.|Diese Schuhe sind sehr bequem.
el saco|Pullover|n|In Bogotá braucht man fast immer un saco.|Llévate un saco, que hace frío.|Nimm einen Pullover mit, es ist kalt.
la chaqueta|Jacke|n||Mi chaqueta está en el carro.|Meine Jacke ist im Auto.
la sombrilla|Regenschirm|n|In Kolumbien sombrilla statt paraguas.|No olvides la sombrilla, va a llover.|Vergiss den Regenschirm nicht, es wird regnen.
la llave|Schlüssel|n||¿Dónde están las llaves de la casa?|Wo sind die Hausschlüssel?
la caja|Schachtel, Kasse|n||Pague en la caja, por favor.|Bitte bezahlen Sie an der Kasse.
el papel|Papier|n||¿Tienes papel y lápiz?|Hast du Papier und Bleistift?
el vaso|Glas|n||¿Me regala un vaso de agua?|Können Sie mir ein Glas Wasser geben?
la botella|Flasche|n||Compramos una botella de vino.|Wir kaufen eine Flasche Wein.
el plato|Teller, Gericht|n||El ajiaco es mi plato favorito.|Ajiaco ist mein Lieblingsgericht.
la taza|Tasse|n||Me tomo una taza de chocolate.|Ich trinke eine Tasse heisse Schokolade.
el aguacate|Avocado|n||El aguacate aquí es muy barato.|Avocados sind hier sehr günstig.
la papa|Kartoffel|n|Lateinamerika: papa, nicht patata.|El ajiaco lleva tres tipos de papa.|In den Ajiaco kommen drei Sorten Kartoffeln.
el jugo|Saft|n|Frisch gepresste jugos gibt es überall, en agua o en leche.|Quiero un jugo de naranja, por favor.|Ich möchte einen Orangensaft, bitte.
la gaseosa|Limonade|n||¿Quieres una gaseosa o un jugo?|Möchtest du eine Limonade oder einen Saft?
el ajiaco|Ajiaco (Suppe aus Bogotá)|n||En Bogotá comemos ajiaco los domingos.|In Bogotá essen wir sonntags Ajiaco.
la sopa|Suppe|n||La sopa está muy caliente.|Die Suppe ist sehr heiss.
dulce|süss|a||Este café está muy dulce.|Dieser Kaffee ist sehr süss.
la sal|Salz|n||¿Me pasas la sal, por favor?|Gibst du mir bitte das Salz?
el azúcar|Zucker|n||¿El tinto con o sin azúcar?|Den Kaffee mit oder ohne Zucker?
el trancón|Stau|n|In Bogotá ein Dauerthema: Había un trancón terrible.|Llegué tarde por el trancón.|Ich bin wegen des Staus zu spät gekommen.
el tráfico|Verkehr|n||A esta hora hay mucho tráfico.|Um diese Zeit ist viel Verkehr.
el semáforo|Ampel|n||Gire a la derecha en el semáforo.|Biegen Sie an der Ampel rechts ab.
la esquina|Ecke|n||Te espero en la esquina.|Ich warte an der Ecke auf dich.
la cuadra|Häuserblock|n|Wegbeschreibung: Siga dos cuadras derecho.|Siga dos cuadras derecho.|Gehen Sie zwei Blocks geradeaus.
la carrera|Strasse (Nord–Süd), Studium|n|In Bogotá laufen carreras von Nord nach Süd, calles von Ost nach West.|Vivo en la carrera 7 con calle 45.|Ich wohne an der Carrera 7, Ecke Calle 45.
la avenida|Hauptstrasse|n||La avenida está llena de carros.|Die Hauptstrasse ist voller Autos.
la estación|Station, Bahnhof|n||¿Dónde está la estación de TransMilenio?|Wo ist die TransMilenio-Station?
el aeropuerto|Flughafen|n||¿Cuánto se demora el taxi al aeropuerto?|Wie lange braucht das Taxi zum Flughafen?
el hotel|Hotel|n||El hotel queda cerca del centro.|Das Hotel liegt in der Nähe des Zentrums.
la iglesia|Kirche|n||La iglesia está en la plaza.|Die Kirche steht auf dem Platz.
Dios|Gott|n|Sehr häufig im Alltag: gracias a Dios, si Dios quiere.|Si Dios quiere, nos vemos mañana.|So Gott will, sehen wir uns morgen.
el cielo|Himmel|n||Hoy el cielo está muy azul.|Heute ist der Himmel sehr blau.
el mar|Meer|n||En diciembre vamos al mar.|Im Dezember fahren wir ans Meer.
el río|Fluss|n||El río Magdalena es muy largo.|Der Fluss Magdalena ist sehr lang.
el árbol|Baum|n||Hay un árbol grande en el parque.|Im Park steht ein grosser Baum.
la flor|Blume|n||Le compré flores a mi mamá.|Ich habe meiner Mutter Blumen gekauft.
el animal|Tier|n||¿Te gustan los animales?|Magst du Tiere?
el pájaro|Vogel|n||Colombia tiene muchos pájaros bonitos.|Kolumbien hat viele schöne Vögel.
el clima|Klima, Wetter|n||El clima de Bogotá cambia mucho.|Das Wetter in Bogotá ändert sich oft.
la luz|Licht, Strom|n||Se fue la luz en todo el barrio.|Im ganzen Quartier ist der Strom ausgefallen.
el fuego|Feuer|n||No juegues con el fuego.|Spiel nicht mit dem Feuer.
el aire|Luft|n||Abre la ventana, necesito aire.|Mach das Fenster auf, ich brauche Luft.
el color|Farbe|n||¿Cuál es tu color favorito?|Was ist deine Lieblingsfarbe?
el tamaño|Grösse|n||¿Lo tiene en otro tamaño?|Haben Sie das in einer anderen Grösse?
la edad|Alter|n||¿Qué edad tiene tu hijo?|Wie alt ist dein Sohn?
la boda|Hochzeit|n||La boda es en diciembre.|Die Hochzeit ist im Dezember.
el bebé|Baby|n||El bebé está durmiendo.|Das Baby schläft.
la pareja|Paar, Partner|n||Son una pareja muy bonita.|Sie sind ein sehr schönes Paar.
el suegro / la suegra|Schwiegervater, Schwiegermutter|n||Mi suegra cocina muy rico.|Meine Schwiegermutter kocht sehr lecker.
el cuñado / la cuñada|Schwager, Schwägerin|n||Mi cuñado vive en Medellín.|Mein Schwager wohnt in Medellín.
el compañero / la compañera|Kollege, Kollegin|n||Almuerzo con mis compañeros de trabajo.|Ich esse mit meinen Arbeitskollegen zu Mittag.
el dueño / la dueña|Besitzer, Besitzerin|n||El dueño de la tienda es muy amable.|Der Besitzer des Ladens ist sehr freundlich.
el paisa / la paisa|Person aus Antioquia (Medellín)|n||Mi novia es paisa, de Medellín.|Meine Freundin ist Paisa, aus Medellín.
el rolo / la rola|Person aus Bogotá|n|Umgangssprachlich. Formell: bogotano.|Juan es rolo, nació en Bogotá.|Juan ist Rolo, er ist in Bogotá geboren.
el costeño / la costeña|Person von der Karibikküste|n||Los costeños hablan muy rápido.|Die Leute von der Küste sprechen sehr schnell.
el extranjero / la extranjera|Ausländer, Ausländerin|n||Muchos extranjeros viven en Chapinero.|Viele Ausländer wohnen in Chapinero.
el gringo / la gringa|Ausländer (v.a. aus den USA)|n|Oft für alle hellhäutigen Ausländer, meist nicht böse gemeint.|Me dicen gringo, pero soy suizo.|Sie nennen mich Gringo, aber ich bin Schweizer.
suizo|schweizerisch, Schweizer|a||El chocolate suizo es muy famoso.|Schweizer Schokolade ist sehr berühmt.
colombiano|kolumbianisch, Kolumbianer|a||Me encanta la comida colombiana.|Ich liebe das kolumbianische Essen.
el verano|Sommer, Trockenzeit|n|Kolumbien hat keine Jahreszeiten: verano = trockene Zeit.|En verano casi no llueve.|In der Trockenzeit regnet es fast nie.
el invierno|Winter, Regenzeit|n|invierno = Regenzeit, nicht Kälte.|En invierno llueve todos los días.|In der Regenzeit regnet es jeden Tag.
las vacaciones|Ferien|n||¿Adónde vas en las vacaciones?|Wohin gehst du in den Ferien?
el puente|Brücke, langes Wochenende|n|Ein puente festivo = verlängertes Wochenende mit Feiertag am Montag.|El lunes es festivo, ¡hay puente!|Am Montag ist Feiertag, es gibt ein langes Wochenende!
la Navidad|Weihnachten|n||En Navidad toda la familia se reúne.|An Weihnachten trifft sich die ganze Familie.
la novena|Novena (Adventsandacht)|n|Vom 16. bis 24. Dezember trifft sich die Familie jeden Abend zur novena.|Esta noche rezamos la novena en casa de mi tía.|Heute Abend beten wir die Novena bei meiner Tante.
el pedazo|Stück|n||¿Quieres un pedazo de torta?|Willst du ein Stück Kuchen?
el kilo|Kilo|n||Un kilo de papa, por favor.|Ein Kilo Kartoffeln, bitte.
el metro|Meter|n||La mesa mide dos metros.|Der Tisch ist zwei Meter lang.
el peso|Peso, Gewicht|n||Esto cuesta diez mil pesos.|Das kostet zehntausend Pesos.
el billete|Geldschein|n||Solo tengo un billete de cien mil.|Ich habe nur einen Hunderttausender-Schein.
la moneda|Münze|n||¿Tienes monedas para el bus?|Hast du Münzen für den Bus?
la tarjeta|Karte|n||¿Puedo pagar con tarjeta?|Kann ich mit Karte bezahlen?
el efectivo|Bargeld|n||Aquí solo aceptan efectivo.|Hier nehmen sie nur Bargeld.
la oferta|Angebot|n||Hoy hay una oferta en el supermercado.|Heute gibt es ein Angebot im Supermarkt.
el pedido|Bestellung|n||Su pedido llega en treinta minutos.|Ihre Bestellung kommt in dreissig Minuten.
el paquete|Paket|n||Te llegó un paquete.|Für dich ist ein Paket angekommen.
el pago|Zahlung|n||El pago es el primero de cada mes.|Die Zahlung ist am Ersten jedes Monats fällig.
el sueldo|Lohn|n||Mi sueldo no alcanza para todo.|Mein Lohn reicht nicht für alles.
el arriendo|Miete|n|In Kolumbien arriendo statt alquiler.|El arriendo sube cada año.|Die Miete steigt jedes Jahr.
el contrato|Vertrag|n||Mañana firmo el contrato.|Morgen unterschreibe ich den Vertrag.
el documento|Dokument|n||Necesito estos documentos para el banco.|Ich brauche diese Dokumente für die Bank.
la cédula|Ausweis|n|Der kolumbianische Personalausweis. Wird oft verlangt: ¿Me regala su cédula?|¿Me regala su cédula, por favor?|Können Sie mir bitte Ihren Ausweis geben?
el pasaporte|Pass|n||No olvides el pasaporte.|Vergiss den Pass nicht.
la maleta|Koffer|n||Mi maleta pesa veinte kilos.|Mein Koffer wiegt zwanzig Kilo.
el futuro|Zukunft|n||Nadie sabe qué pasa en el futuro.|Niemand weiss, was in der Zukunft passiert.
el recuerdo|Erinnerung, Souvenir|n||Te traje un recuerdo de Suiza.|Ich habe dir ein Souvenir aus der Schweiz mitgebracht.
la experiencia|Erfahrung|n||Fue una experiencia muy bonita.|Es war eine sehr schöne Erfahrung.
la oportunidad|Gelegenheit|n||Es una buena oportunidad para aprender.|Es ist eine gute Gelegenheit zum Lernen.
la costumbre|Gewohnheit, Brauch|n||Aquí es costumbre tomar tinto en la tarde.|Hier ist es Brauch, am Nachmittag einen Kaffee zu trinken.
la cultura|Kultur|n||Me interesa mucho la cultura colombiana.|Die kolumbianische Kultur interessiert mich sehr.
el arte|Kunst|n||Me gusta mucho el arte de Botero.|Die Kunst von Botero gefällt mir sehr.
el principio|Anfang|n||Al principio todo era difícil.|Am Anfang war alles schwierig.
el final|Ende|n||No me gustó el final de la película.|Das Ende des Films hat mir nicht gefallen.
el resto|Rest|n||Me como el resto mañana.|Den Rest esse ich morgen.
la cantidad|Menge|n||Es una cantidad muy grande.|Das ist eine sehr grosse Menge.
la seguridad|Sicherheit|n||La seguridad es muy importante aquí.|Sicherheit ist hier sehr wichtig.
el peligro|Gefahr|n||No hay peligro, tranquilo.|Es gibt keine Gefahr, keine Sorge.
peligroso|gefährlich|a||Ese barrio es peligroso de noche.|Dieses Quartier ist nachts gefährlich.
el susto|Schreck|n||¡Qué susto me diste!|Was für einen Schreck du mir eingejagt hast!
el lío|Durcheinander, Ärger|n||Tengo un lío con los papeles.|Ich habe ein Durcheinander mit den Papieren.
el chiste|Witz|n||Mi papá siempre cuenta el mismo chiste.|Mein Vater erzählt immer denselben Witz.
la broma|Scherz|n||Tranquilo, es solo una broma.|Keine Sorge, das ist nur ein Scherz.
la fuerza|Kraft|n||Hoy no tengo fuerza para correr.|Heute habe ich keine Kraft zum Rennen.
las ganas|Lust|n|tener ganas de = Lust haben auf: Tengo ganas de un tinto.|Tengo ganas de un tinto.|Ich habe Lust auf einen Kaffee.
la paciencia|Geduld|n||Hay que tener paciencia con el tráfico.|Mit dem Verkehr muss man Geduld haben.
el cuidado|Vorsicht|n|¡Cuidado! = Achtung! Vorsicht!|¡Cuidado con la calle!|Vorsicht mit der Strasse!
la ayuda|Hilfe|n||Gracias por tu ayuda.|Danke für deine Hilfe.
el favor|Gefallen|n|¿Me hace un favor? = Können Sie mir einen Gefallen tun?|¿Me hace un favor, por favor?|Können Sie mir bitte einen Gefallen tun?
la culpa|Schuld|n||No es mi culpa.|Das ist nicht meine Schuld.
la pena|Leid, Scham|n||Me da pena hablar en español.|Es ist mir peinlich, Spanisch zu sprechen.
la alegría|Freude|n||¡Qué alegría verte otra vez!|Was für eine Freude, dich wiederzusehen!
la sorpresa|Überraschung|n||La fiesta es una sorpresa.|Das Fest ist eine Überraschung.
el sentido|Sinn|n||Eso no tiene sentido.|Das ergibt keinen Sinn.
acabar|beenden|v|acabar de + Infinitiv = gerade getan haben: Acabo de llegar.|Acabo de llegar a la casa.|Ich bin gerade nach Hause gekommen.
quitar|wegnehmen|v||Por favor, quite el carro de ahí.|Bitte fahren Sie das Auto dort weg.
sacar|herausnehmen, holen|v||Voy a sacar plata del cajero.|Ich hole Geld am Bankomaten.
meter|hineinstecken|v||Metí el celular en la maleta.|Ich habe das Handy in den Koffer gesteckt.
coger|nehmen, greifen|v|In Kolumbien ganz normal (= nehmen), anders als in Mexiko oder Argentinien.|Vamos a coger un taxi.|Wir nehmen ein Taxi.
agarrar|packen, nehmen|v||Agarre la bolsa, por favor.|Nehmen Sie bitte die Tasche.
tirar|werfen|v||No tire papeles en la calle.|Werfen Sie keine Papiere auf die Strasse.
botar|wegwerfen|v|In Kolumbien botar la basura = den Abfall wegwerfen.|Tengo que botar la basura.|Ich muss den Abfall wegwerfen.
romper|brechen, kaputt machen|v||El niño rompió el vaso.|Das Kind hat das Glas zerbrochen.
dañar|beschädigen|v|Se dañó = Es ist kaputtgegangen.|Se me dañó el celular.|Mein Handy ist kaputtgegangen.
cortar|schneiden|v||¿Me puede cortar el pelo corto?|Können Sie mir die Haare kurz schneiden?
mover|bewegen|v||No se mueva, por favor.|Bewegen Sie sich bitte nicht.
tocar|berühren, spielen (Instrument)|v|Me toca = Ich muss, ich bin dran: Me toca trabajar.|Hoy me toca trabajar.|Heute muss ich arbeiten.
parar|anhalten|v||Pare aquí en la esquina, por favor.|Halten Sie bitte hier an der Ecke an.
cruzar|überqueren, abbiegen|v||Cruce la calle con cuidado.|Überqueren Sie die Strasse vorsichtig.
voltear|umdrehen, abbiegen|v||Voltee a la derecha en el semáforo.|Biegen Sie an der Ampel rechts ab.
devolver|zurückgeben|v||Mañana te devuelvo el libro.|Morgen gebe ich dir das Buch zurück.
devolverse|umkehren|v|In Kolumbien: Me devolví a la casa = Ich bin nach Hause zurück.|Se me olvidó la llave y me devolví.|Ich habe den Schlüssel vergessen und bin umgekehrt.
demorarse|lange brauchen|v|¿Cuánto se demora? = Wie lange dauert es?|¿Cuánto se demora el bus?|Wie lange braucht der Bus?
tardar|dauern|v||El pedido no tarda mucho.|Die Bestellung dauert nicht lange.
durar|dauern (Zeitraum)|v||La película dura dos horas.|Der Film dauert zwei Stunden.
madrugar|früh aufstehen|v|Sehr häufig: Mañana me toca madrugar.|Mañana me toca madrugar.|Morgen muss ich früh aufstehen.
trasnochar|die Nacht durchmachen|v||No me gusta trasnochar.|Ich mache nicht gern die Nacht durch.
almorzar|zu Mittag essen|v||¿Dónde almorzamos hoy?|Wo essen wir heute zu Mittag?
desayunar|frühstücken|v||Siempre desayuno huevos con arepa.|Ich frühstücke immer Eier mit Arepa.
cenar|zu Abend essen|v||Esta noche cenamos en casa.|Heute Abend essen wir zu Hause.
beber|trinken|v||Hay que beber mucha agua.|Man muss viel Wasser trinken.
probar|probieren|v||¿Quiere probar el ajiaco?|Wollen Sie den Ajiaco probieren?
preparar|vorbereiten|v||Mi mamá prepara la comida.|Meine Mutter bereitet das Essen zu.
ofrecer|anbieten|v||¿Le puedo ofrecer un tinto?|Darf ich Ihnen einen Kaffee anbieten?
aceptar|annehmen|v||¿Aceptan tarjeta?|Nehmen Sie Karte?
dudar|zweifeln|v||Dudo que llegue a tiempo.|Ich bezweifle, dass er rechtzeitig ankommt.
suponer|annehmen, vermuten|v||Supongo que está en la oficina.|Ich nehme an, er ist im Büro.
imaginar|sich vorstellen|v||Me imagino que estás cansado.|Ich stelle mir vor, dass du müde bist.
notar|bemerken|v||Noto que hablas mejor español.|Ich bemerke, dass du besser Spanisch sprichst.
darse cuenta|merken|v||No me di cuenta de la hora.|Ich habe die Uhrzeit nicht gemerkt.
fijarse|aufpassen, beachten|v||Fíjese bien en el precio.|Achten Sie gut auf den Preis.
averiguar|herausfinden|v||Voy a averiguar el horario.|Ich werde die Öffnungszeiten herausfinden.
equivocarse|sich irren|v||Perdón, me equivoqué de número.|Entschuldigung, ich habe mich in der Nummer geirrt.
mentir|lügen|v||No me mienta, por favor.|Lügen Sie mich bitte nicht an.
callarse|schweigen|v||¡Cállate un momento!|Sei einen Moment still!
conversar|sich unterhalten|v|In Kolumbien häufiger als charlar.|Me gusta conversar con mis vecinos.|Ich unterhalte mich gern mit meinen Nachbarn.
saludar|grüssen|v||Siempre saludo al celador.|Ich grüsse immer den Portier.
despedirse|sich verabschieden|v||Me despido y me voy.|Ich verabschiede mich und gehe.
presentar|vorstellen|v||Te presento a mi novia.|Ich stelle dir meine Freundin vor.
quejarse|sich beklagen|v||Mi jefe siempre se queja.|Mein Chef beklagt sich immer.
reunirse|sich treffen|v||Nos reunimos los lunes.|Wir treffen uns montags.
cuadrar|vereinbaren|v|Cuadremos para el sábado = Lass uns etwas für Samstag abmachen.|Cuadremos para el sábado.|Lass uns etwas für Samstag abmachen.
rumbear|feiern gehen|v||El viernes vamos a rumbear.|Am Freitag gehen wir feiern.
parchar|abhängen, Zeit verbringen|v|Umgangssprachlich: Vamos a parchar el sábado.|Vamos a parchar en el parque.|Wir hängen im Park ab.
enamorarse|sich verlieben|v||Me enamoré de Bogotá.|Ich habe mich in Bogotá verliebt.
enojarse|sich ärgern|v||No se enoje conmigo.|Ärgern Sie sich nicht über mich.
asustarse|erschrecken|v||Me asusté con el ruido.|Ich bin wegen des Lärms erschrocken.
aburrirse|sich langweilen|v||Los niños se aburren en la casa.|Die Kinder langweilen sich zu Hause.
divertirse|sich amüsieren|v||Nos divertimos mucho en la fiesta.|Wir haben uns auf dem Fest sehr amüsiert.
mejorar|verbessern, besser werden|v||Mi español mejora cada día.|Mein Spanisch wird jeden Tag besser.
llenar|füllen|v||Llene la botella de agua.|Füllen Sie die Flasche mit Wasser.
guardar|aufbewahren, speichern|v||Guardo la plata en el banco.|Ich bewahre das Geld auf der Bank auf.
esconder|verstecken|v||El perro esconde los zapatos.|Der Hund versteckt die Schuhe.
cargar|tragen, laden|v||Tengo que cargar el celular.|Ich muss das Handy laden.
arrancar|losfahren, anfangen|v||El bus ya arrancó.|Der Bus ist schon losgefahren.
llover|regnen|v||En Bogotá llueve mucho.|In Bogotá regnet es viel.
preocupado|besorgt|a||Estoy preocupado por el examen.|Ich bin wegen der Prüfung besorgt.
aburrido|langweilig, gelangweilt|a||La película es muy aburrida.|Der Film ist sehr langweilig.
divertido|lustig|a||Tu hermano es muy divertido.|Dein Bruder ist sehr lustig.
nervioso|nervös|a||Estoy nervioso antes de la entrevista.|Ich bin vor dem Vorstellungsgespräch nervös.
emocionado|aufgeregt, begeistert|a||Estamos emocionados con el viaje.|Wir sind begeistert von der Reise.
orgulloso|stolz|a||Estoy orgulloso de ti.|Ich bin stolz auf dich.
oscuro|dunkel|a||La calle está muy oscura.|Die Strasse ist sehr dunkel.
duro|hart|a||Este pan está duro.|Dieses Brot ist hart.
suave|weich, sanft|a||La cama es muy suave.|Das Bett ist sehr weich.
pesado|schwer, mühsam|a|Auch für Menschen: ¡Qué pesado! = Wie nervig!|La maleta es muy pesada.|Der Koffer ist sehr schwer.
liviano|leicht (Gewicht)|a|In Kolumbien liviano statt ligero.|Necesito una chaqueta liviana.|Ich brauche eine leichte Jacke.
grave|ernst, schlimm|a||No es nada grave.|Es ist nichts Schlimmes.
tremendo|gewaltig|a||Cayó un aguacero tremendo.|Es gab einen gewaltigen Platzregen.
increíble|unglaublich|a||¡Es increíble!|Das ist unglaublich!
perfecto|perfekt|a||El día está perfecto para salir.|Der Tag ist perfekt zum Ausgehen.
excelente|ausgezeichnet|a||La comida es excelente.|Das Essen ist ausgezeichnet.
terrible|schrecklich|a||El tráfico está terrible hoy.|Der Verkehr ist heute schrecklich.
precioso|wunderschön|a||¡Qué paisaje tan precioso!|Was für eine wunderschöne Landschaft!
delicioso|köstlich|a||El ajiaco está delicioso.|Der Ajiaco ist köstlich.
sabroso|lecker|a||¡Qué sabroso este jugo!|Wie lecker dieser Saft ist!
picante|scharf|a||¿La salsa es picante?|Ist die Sauce scharf?
fresco|frisch, kühl|a|¡Fresco! = Keine Sorge, ganz ruhig.|El jugo está bien fresco.|Der Saft ist schön kühl.
cómodo|bequem|a||Estos zapatos son muy cómodos.|Diese Schuhe sind sehr bequem.
necesario|nötig|a||No es necesario pagar ahora.|Es ist nicht nötig, jetzt zu bezahlen.
suficiente|genug|a||¿Tenemos suficiente plata?|Haben wir genug Geld?
cansón|lästig, nervig|a|Umgangssprachlich: ¡No sea cansón!|¡No sea cansón!|Seien Sie nicht so nervig!
regular|mittelmässig, es geht so|a|—¿Cómo está? —Regular. = Es geht so.|¿Cómo está? Regular.|Wie geht es Ihnen? Es geht so.
el asunto|Angelegenheit|n||Tenemos que hablar de un asunto.|Wir müssen über eine Angelegenheit sprechen.
la situación|Situation|n||La situación es difícil.|Die Situation ist schwierig.
la relación|Beziehung|n||Tenemos una buena relación.|Wir haben eine gute Beziehung.
el nivel|Niveau|n||Mi nivel de español es básico.|Mein Spanischniveau ist einfach.
el sistema|System|n||El sistema no funciona hoy.|Das System funktioniert heute nicht.
la información|Information|n||Necesito más información.|Ich brauche mehr Informationen.
la red|Netz|n||No hay red en el edificio.|Im Gebäude gibt es kein Netz.
la aplicación|App|n||Descargue la aplicación del banco.|Laden Sie die App der Bank herunter.
la clave|Passwort, Schlüssel|n||Se me olvidó la clave del wifi.|Ich habe das WLAN-Passwort vergessen.
la batería|Akku|n||Mi celular no tiene batería.|Mein Handy hat keinen Akku mehr.
la pantalla|Bildschirm|n||La pantalla está rota.|Der Bildschirm ist kaputt.
la señal|Signal, Empfang|n||Aquí no hay señal.|Hier gibt es keinen Empfang.
el video|Video|n||Mira este video.|Schau dir dieses Video an.
la canción|Lied|n||Me encanta esta canción.|Ich liebe dieses Lied.
el baile|Tanz|n||La salsa es mi baile favorito.|Salsa ist mein Lieblingstanz.
la rumba|Party|n|Irse de rumba = feiern gehen.|Anoche nos fuimos de rumba.|Gestern Abend sind wir feiern gegangen.
el parche|Clique, Plan|n|¿Cuál es el parche hoy? = Was machen wir heute?|¿Cuál es el parche hoy?|Was machen wir heute?
la pola|Bier|n|Umgangssprachlich für cerveza: ¿Nos tomamos una pola?|¿Nos tomamos una pola?|Trinken wir ein Bier?
el guayabo|Kater (nach Alkohol)|n|Typisch kolumbianisch: Tengo un guayabo terrible.|Tengo un guayabo terrible.|Ich habe einen schrecklichen Kater.
el aguardiente|Zuckerrohrschnaps|n|Das Nationalgetränk an Festen, oft einfach guaro.|En la fiesta tomamos aguardiente.|Am Fest haben wir Zuckerrohrschnaps getrunken.
la empanada|Teigtasche|n||Quiero dos empanadas, por favor.|Ich möchte bitte zwei Teigtaschen.
el buñuelo|frittierte Käsekugel|n|Vor allem an Weihnachten.|En diciembre comemos buñuelos.|Im Dezember essen wir frittierte Käsekugeln.
el chocolate|Schokolade, heisse Schokolade|n|In Bogotá trinkt man chocolate con queso.|Me gusta el chocolate con queso.|Ich mag heisse Schokolade mit Käse.
el queso|Käse|n||¿La arepa tiene queso?|Hat die Arepa Käse?
el banano|Banane|n|banano = süsse Banane, plátano = Kochbanane.|Me como un banano en el desayuno.|Ich esse eine Banane zum Frühstück.
el plátano|Kochbanane|n||El plátano frito es delicioso.|Die frittierte Kochbanane ist köstlich.
los frijoles|Bohnen|n||Hoy hay frijoles con arroz.|Heute gibt es Bohnen mit Reis.
la verdura|Gemüse|n||Compro verdura en la plaza.|Ich kaufe Gemüse auf dem Markt.
la ensalada|Salat|n||Quiero una ensalada, por favor.|Ich möchte bitte einen Salat.
el postre|Dessert|n||¿Qué hay de postre?|Was gibt es zum Dessert?
el hielo|Eis (Eiswürfel)|n||Un jugo sin hielo, por favor.|Einen Saft ohne Eis, bitte.
el helado|Glace|n||Los niños quieren helado.|Die Kinder wollen Glace.
la nevera|Kühlschrank|n||La leche está en la nevera.|Die Milch ist im Kühlschrank.
la estufa|Herd|n|In Kolumbien estufa = Kochherd.|Apague la estufa, por favor.|Schalten Sie bitte den Herd aus.
la lavadora|Waschmaschine|n||La lavadora no funciona.|Die Waschmaschine funktioniert nicht.
la basura|Abfall|n||Hay mucha basura en la calle.|Es gibt viel Abfall auf der Strasse.
el jardín|Garten|n||Mi abuela tiene un jardín bonito.|Meine Grossmutter hat einen schönen Garten.
el patio|Hof|n||Los niños juegan en el patio.|Die Kinder spielen im Hof.
la pared|Wand|n||Hay una foto en la pared.|An der Wand hängt ein Foto.
el techo|Dach, Decke|n||El techo de la casa es rojo.|Das Dach des Hauses ist rot.
la escalera|Treppe|n||Suba por la escalera.|Gehen Sie die Treppe hinauf.
el ascensor|Lift|n||El ascensor está dañado.|Der Lift ist kaputt.
la portería|Pförtnerloge|n|Fast jedes Wohnhaus in Bogotá hat eine portería.|Deje el paquete en la portería.|Lassen Sie das Paket in der Pförtnerloge.
el celador / la celadora|Wächter, Portier|n||El celador abre la puerta.|Der Portier öffnet die Tür.
el conjunto|Wohnanlage|n|Eingezäunte Wohnsiedlung mit portería.|Vivo en un conjunto en el norte.|Ich wohne in einer Wohnanlage im Norden.
la buseta|Kleinbus|n||La buseta va muy llena.|Der Kleinbus ist sehr voll.
el TransMilenio|Schnellbussystem in Bogotá|n||Voy al trabajo en TransMilenio.|Ich fahre mit dem TransMilenio zur Arbeit.
la moto|Motorrad|n||Mi hermano tiene una moto.|Mein Bruder hat ein Motorrad.
la bicicleta|Fahrrad|n||Quiero comprar una bicicleta.|Ich möchte ein Fahrrad kaufen.
la cicla|Velo|n|Umgangssprachlich. Sonntags fährt man in Bogotá auf der ciclovía.|Los domingos salgo en cicla.|Sonntags fahre ich Velo.
el pasaje|Fahrpreis, Ticket|n||¿Cuánto vale el pasaje?|Wie viel kostet die Fahrt?
el paradero|Haltestelle|n|In Kolumbien paradero statt parada.|Me bajo en el próximo paradero.|Ich steige an der nächsten Haltestelle aus.
el norte|Norden|n||Mi oficina queda en el norte.|Mein Büro liegt im Norden.
el sur|Süden|n||Mi familia vive en el sur.|Meine Familie wohnt im Süden.
el oriente|Osten|n||Los cerros están en el oriente.|Die Hügel liegen im Osten.
el occidente|Westen|n||El aeropuerto queda en el occidente.|Der Flughafen liegt im Westen.
el cerro|Hügel, Berg|n|Die cerros orientales mit Monserrate prägen Bogotá.|Subimos al cerro de Monserrate.|Wir sind auf den Monserrate gestiegen.
la costa|Küste|n||En vacaciones vamos a la costa.|In den Ferien fahren wir an die Küste.
la selva|Urwald|n||En la selva hay muchos animales.|Im Urwald gibt es viele Tiere.
el paisaje|Landschaft|n||El paisaje es muy bonito.|Die Landschaft ist sehr schön.
el viento|Wind|n||Hoy hace mucho viento.|Heute ist es sehr windig.
la nube|Wolke|n||Hay muchas nubes hoy.|Heute gibt es viele Wolken.
el aguacero|Platzregen|n|In Bogotá fast täglich am Nachmittag.|Cayó un aguacero por la tarde.|Am Nachmittag gab es einen Platzregen.
el temblor|Erdbeben|n||Anoche hubo un temblor.|Gestern Nacht gab es ein Erdbeben.
el ruido|Lärm|n||Hay mucho ruido en la calle.|Auf der Strasse ist viel Lärm.
el silencio|Stille|n||Necesito silencio para estudiar.|Ich brauche Stille zum Lernen.
el olor|Geruch|n||¡Qué rico olor a café!|Was für ein feiner Kaffeegeruch!
el sabor|Geschmack|n||Me gusta el sabor del mango.|Ich mag den Geschmack der Mango.
la vista|Sicht, Aussicht|n||Desde aquí hay una vista increíble.|Von hier hat man eine unglaubliche Aussicht.
la voz|Stimme|n||Tienes una voz muy bonita.|Du hast eine sehr schöne Stimme.
el oído|Ohr (Gehör)|n||Me duele el oído.|Mir tut das Ohr weh.
la oreja|Ohr|n||El niño tiene la oreja roja.|Das Kind hat ein rotes Ohr.
la nariz|Nase|n||Tengo la nariz tapada.|Ich habe eine verstopfte Nase.
el diente|Zahn|n||Me duele un diente.|Mir tut ein Zahn weh.
el brazo|Arm|n||Me duele el brazo.|Mir tut der Arm weh.
la pierna|Bein|n||Me duelen las piernas de caminar.|Mir tun die Beine vom Laufen weh.
la espalda|Rücken|n||Tengo dolor de espalda.|Ich habe Rückenschmerzen.
el estómago|Magen|n||Tengo el estómago lleno.|Ich habe den Magen voll.
la barriga|Bauch|n||Me duele la barriga.|Mir tut der Bauch weh.
la sangre|Blut|n||Hoy me sacan sangre.|Heute wird mir Blut abgenommen.
la gripa|Grippe, Erkältung|n|In Kolumbien la gripa, nicht la gripe.|Tengo gripa.|Ich bin erkältet.
la fiebre|Fieber|n||El niño tiene fiebre.|Das Kind hat Fieber.
la tos|Husten|n||Tengo mucha tos.|Ich habe starken Husten.
la pastilla|Tablette|n||Tómese una pastilla cada ocho horas.|Nehmen Sie alle acht Stunden eine Tablette.
enero|Januar|n||En enero empiezo a trabajar.|Im Januar fange ich an zu arbeiten.
febrero|Februar|n||Mi cumpleaños es en febrero.|Mein Geburtstag ist im Februar.
marzo|März|n||En marzo viajo a Medellín.|Im März reise ich nach Medellín.
abril|April|n||En abril llueve mucho.|Im April regnet es viel.
mayo|Mai|n||El curso termina en mayo.|Der Kurs endet im Mai.
junio|Juni|n||En junio tenemos vacaciones.|Im Juni haben wir Ferien.
julio|Juli|n||Mi hermana se casa en julio.|Meine Schwester heiratet im Juli.
agosto|August|n||En agosto hay festival de cometas.|Im August gibt es ein Drachenfest.
septiembre|September|n||Llegué a Bogotá en septiembre.|Ich bin im September in Bogotá angekommen.
octubre|Oktober|n||En octubre llueve bastante en Bogotá.|Im Oktober regnet es in Bogotá ziemlich viel.
noviembre|November|n||En noviembre hay muchos festivos.|Im November gibt es viele Feiertage.
diciembre|Dezember|n||En diciembre comemos buñuelos y natilla.|Im Dezember essen wir Käsekugeln und Natilla.
`;
