CREATE TABLE IF NOT EXISTS usersDB (
    `id` INT,
    `nombre` VARCHAR(12) CHARACTER SET utf8,
    `apellido` VARCHAR(10) CHARACTER SET utf8,
    `password` VARCHAR(6) CHARACTER SET utf8,
    `email` VARCHAR(27) CHARACTER SET utf8,
    `userAvatar` VARCHAR(6) CHARACTER SET utf8,
    `skills` VARCHAR(18) CHARACTER SET utf8,
    `bio` VARCHAR(141) CHARACTER SET utf8,
    `pathAbsolute_userAvatar_native` VARCHAR(102) CHARACTER SET utf8,
    `Column_10` VARCHAR(100) CHARACTER SET utf8
);
INSERT INTO usersDB VALUES
    (1,'Aaron','Kenny','B0?;NV','Aaron.Kenny@gmail.com','07.jpg','Cantante','Vivo en Rosario. Tengo influencias del jazz de Miles Davis. 34 años','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\07','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\'),
    (2,'Nate','Parrish','JF;XMH','Nate.Parrish@gmail.com','05.jpg','Guitarrista','Influencias de RHCP y de RATM. Vivo en Nueva York pero mantengo mis raices Argentinas ;-)','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\05',NULL),
    (3,'Bad','Snacks','S0=ORD','Bad.Snacks@gmail.com','01.jpg','Guitarrista','Toco la guitarra y canto. Me gusta el rock y el trap','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\01',NULL),
    (4,'Cheel',NULL,'?OFX3Y','Cheel@gmail.com','02.jpg','Multinstrumentista','Vivo en Chubut. Estoy disponible para crear bandas','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\02',NULL),
    (5,'Chris','Haugen','=C3LBN','Chris.Haugen@gmail.com','06.jpg','Bajista','Nerd musical. Mis influencias son tan variadas que van desde la clasica hasta el rock fusion','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\06',NULL),
    (6,'Corbyn','Kites','<>GW94','Corbyn.Kites@yahoo.com','03.jpg','Multinstrumentista','Somos una banda de Avellaneda. Nos influencia la musica urbana. Tocamos desde hace 10 años','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\03',NULL),
    (7,'Jamelle','Monae','KSI6;1','Jamelle.Monae@gmail.com','08.jpg','Cantante','Me encanta Bork. Actualmente estoy sin banda por lo que estoy disponible para cantar en una','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\08',NULL),
    (8,'Timothy','Hansen','ZHWDEX','Timothy.Hansen@gmail.com','09.jpg','Guitarrista','Mis influencias son Jamie Collum. Mi genero musical preferido es el jazz contemporaneo','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\09',NULL),
    (9,'Delicate','Steve','5U3WBJ','Delicate.Steve@gmail.com','48.jpg','Cantante','Tengo una voz suave y armoniosa. Mi preferencia son las melodias y las baladas romanticas','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\',NULL),
    (10,'Replacements',NULL,'UF6I0Y','Replacements@gmail.com','04.jpg','Bajista','Creamos Replacements porque somos amigos del barrio de Boedo. Hinchas de San Lorenzo y amantes del rock','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\04',NULL),
    (11,'Outside In',NULL,':K4;WV','Outside In@gmail.com','11.jpg','Baterista','Outside in es una banda de Mar del Plata con influencias reggae. Estamos disponibles para shows','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\11',NULL),
    (12,'Emmit','Fenn','V=6P>M','Emmit.Fenn@yahoo.com','10.jpg','Guitarrista','Soy Americano pero vivo en Buenos Aires desde los 14 años. Me influencia Radiohead y Pulp','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\10',NULL),
    (13,'E''s','Jammy Jams','<SXSP@','E''s.Jammy Jams@gmail.com','13.jpg','Multinstrumentista','Amante de la musica electronica. Geek de sintetizadores y guitarras electricas','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\13',NULL),
    (14,'Aillike','Leddy','UNY6UL','Aillike.Leddy@gmail.com','19.jpg','Bajista','Duo de musica electronica, versatiles en todos los generos musicales.','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\19',NULL),
    (15,'Godmode',NULL,'JSFASP','Godmode@gmail.com','14.jpg','Bajista','Trio trio creado en La Plata. Hacemos rock hasta llegar a los cimientos de la tierra','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\14',NULL),
    (16,'Jeremy','Korpas','4>=@O<','Jeremy.Korpas@yahoo.com','12.jpg','Guitarrista','Mis estilos preferidos son el Pop y el Rock, y logro combinaciones exquisitas con ellos','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\12',NULL),
    (17,'JHS','Pedals','UKHP;G','JHS.Pedals@gmail.com','15.jpg','Baterista','Me especializo en ponerle ritmo a las melodias. Soy Baterista y percusionista','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\15',NULL),
    (18,'Joel','Cummins','9P0?O@','Joel.Cummins@yahoo.com','16.jpg','Guitarrista','5 discos editados y 5 canciones en el Billboard chart. Toque en el Quilmes Rock','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\16',NULL),
    (19,'Lauren','Duski','LSE?ZK','Lauren.Duski@gmail.com','21.jpg','Cantante','Me gusta conocer los misterios de la voz y desentranarlos. Soy cantante desde que tengo memoria','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\21',NULL),
    (20,'Travis','Scott','TNBVG9','Travis.Scott@gmail.com','17.jpg','Guitarrista','Soy guitarrista, compositor y cantante. Me gustan bandas tipo Kings of Lions','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\17',NULL),
    (21,'Glass','Animals','YSG3LA','Glass.Animals@gmail.com','18.jpg','Guitarrista','Hacemos power rock para despertar conciencias.','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\18',NULL),
    (22,'Nathan','Moore','TRG?<Z','Nathan.Moore@yahoo.com','20.jpg','Guitarrista','Soy introvertido y me gusta crear mis composiciones en mi home studio. 30 años','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\20',NULL),
    (23,'Ofshane',NULL,'DSHL<@','Ofshane@gmail.com','22.jpg','Bajista','Estamos disponibles para shows y eventos empresariales. 3 discos editados. Influencias Magic Numbers','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\22',NULL),
    (24,'Patiño',NULL,'?=@BWR','Patiño@yahoo.com','23.jpg','Cantante','Soy Zenegales. Vivo en Argentina desde hace 5 años. Disponible para bandas','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\23',NULL),
    (25,'Quincas','Moreira','27TGQ8','Quincas.Moreira@gmail.com','25.jpg','Cantante','Admiro a los cantantes de musica folk y country. Vivo en Arkansas','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\25',NULL),
    (26,'RAGE',NULL,'TVBHXI','RAGE@gmail.com','26.jpg','Baterista','Somos una banda de Hurlingham. Nuestras influencias son bandas nacionales como Seru Giran y Pescado Rabioso. Tocamos juntos desde hace 5 años','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\26',NULL),
    (27,'Reed','Mathis','XHD4TR','Reed.Mathis@yahoo.com','24.jpg','Guitarrista','Vivo en la ciduad de Sao Paulo. Soy brasileño y me influencia el funk clasico','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\24',NULL),
    (28,'Robotanists',NULL,'FZN<YU','Robotanists@gmail.com','27.jpg','Baterista','Somos un duo de Drum and Bass. Nuestras influencias son claro, la mejor banda de todos los tiempos Morphine','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\27',NULL),
    (29,'SefChol',NULL,'O41BWP','SefChol@gmail.com','29.jpg','Cantante','Banda de sonidos eclecticos y originales. Nos encanta la musica y poder fusionarla','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\29',NULL),
    (30,'Kid','Head','Q;T<I:','Kid.Head@yahoo.com','30.jpg','Bajista','Tenemos influencias en el rock californiano. Combinamos la musica con el skate.','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\30',NULL),
    (31,'Steve','Adams','8LHR2M','Steve.Adams@gmail.com','28.jpg','Guitarrista','Solista y multinstrumentista. Mi pasion es componer. La musica cambia al mundo','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\28',NULL),
    (32,'Air','Review','ATWBFM','Air.Review@gmail.com','32.jpg','Cantante','Banda relajada de Rock and roll clasico, influenciados por Led Zeppellin y Black Sabbath','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\32',NULL),
    (33,'Roosevelt','Sea','5IB6T@','Roosevelt.Sea@gmail.com','34.jpg','Cantante','Luego de haber pasado por varias bandas, inicie mi carrera solista y lance tres discos hasta el momento','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\34',NULL),
    (34,'Dave','Fields','4UQ64Y','Dave.Fields@yahoo.com','36.jpg','Guitarrista','Observo el mundo desde mi estudio y escribo acerca de el, en tonos de rock sinfonico','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\36',NULL),
    (35,'Chloe','Morondo','S0P10P','Chloe.Morondo@gmail.com','31.jpg','Cantante','Soy Mezzosoprano. Cantante de opera profesional','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\31',NULL),
    (36,'TrackTribe',NULL,'XOJ192','TrackTribe@gmail.com','37.jpg','Cantante','Estamos disponibles para shows y eventos empresariales. 2 discos editados. Influencias de grupos rhythm and blues','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\37',NULL),
    (37,'Trevor','Garrod','<22MC2','Trevor.Garrod@gmail.com','40.jpg','Cantante','Canto y compongo mis propias canciones, siendo influenciado por los clasicos del soul','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\40',NULL),
    (38,'Back 2 zero',NULL,'<QEUQ>','Back 2 zero@yahoo.com','35.jpg','Cantante','Banda liderada por la cantante Julia Nono. Hacemos Jazz vocal y shows tributo','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\35',NULL),
    (39,'Hallmarc',NULL,'CBR00D','Hallmarc@gmail.com','39.jpg','Cantante','Soy Morena Lopez. Nuestras influencias van desde el flamenco hasta la electronica','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\39',NULL),
    (40,'Vans','in Japan','H6ADHO','Vans.in Japan@gmail.com','33.jpg','Cantante','Lidero la banda Vans in Japan. Nos gusta experimentar y crear nuevas variantes de los clasicos generos musicales','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\33',NULL),
    (41,'Parks','Square','?AIVTU','Parks.Square@yahoo.com','38.jpg','Guitarrista','Trio que recrea los clasicos del rock nacional. Banda Tributo a los clasicos nacionales','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\38',NULL),
    (42,'Zachariah','Hickman','BK8MU2','Zachariah.Hickman@gmail.com','44.jpg','Tecladista','Banda reggae de la zona oeste del gran Buenos Aires. 3 discos editados','C:\\Users\\danin\\Downloads\\VSC-DH\\Proyecto-Integrador-DH\\public\\images\\usersAvatars\\resizedandcropped\\44',NULL);
