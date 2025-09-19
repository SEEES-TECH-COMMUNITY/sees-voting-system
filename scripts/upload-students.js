// Configuration
const API_URL = 'http://localhost:3009/v1/students/bulk-create';

// Student data - modify this array with your students
const studentsData = [
  {
    mat_number: 'ENG2403655',
    level: '100',
    phone_number: '+2349023074047',
  },
  {
    mat_number: 'ENG2403656',
    level: '100',
    phone_number: '+2347087408975',
  },
  {
    mat_number: 'ENG2403657',
    level: '100',
    phone_number: '+2348135544175',
  },
  {
    mat_number: 'ENG2403658',
    level: '100',
    phone_number: '+2349018414637',
  },
  {
    mat_number: 'ENG2403659',
    level: '100',
    phone_number: '+2349079215117',
  },
  {
    mat_number: 'ENG2403662',
    level: '100',
    phone_number: '+2349042760119',
  },
  {
    mat_number: 'ENG2403663',
    level: '100',
    phone_number: '+2347039975300',
  },
  {
    mat_number: 'ENG2403664',
    level: '100',
    phone_number: '+2348162059162',
  },
  {
    mat_number: 'ENG2403665',
    level: '100',
    phone_number: '+2349052624724',
  },
  {
    mat_number: 'ENG2403666',
    level: '100',
    phone_number: '+2348025861789',
  },
  {
    mat_number: 'ENG2403667',
    level: '100',
    phone_number: '+2349121111925',
  },
  {
    mat_number: 'ENG2403668',
    level: '100',
    phone_number: '+2349050474680',
  },
  {
    mat_number: 'ENG2403669',
    level: '100',
    phone_number: '+2348134960930',
  },
  {
    mat_number: 'ENG2403670',
    level: '100',
    phone_number: '+2347049243536',
  },
  {
    mat_number: 'ENG2403671',
    level: '100',
    phone_number: '+2348130845184',
  },
  {
    mat_number: 'ENG2403672',
    level: '100',
    phone_number: '+2349150322342',
  },
  {
    mat_number: 'ENG2403673',
    level: '100',
    phone_number: '+2349066828122',
  },
  {
    mat_number: 'ENG2403674',
    level: '100',
    phone_number: '+2347019830058',
  },
  {
    mat_number: '202441561238EA',
    level: '100',
    phone_number: '+2348052154137',
  },
  {
    mat_number: 'ENG2403676',
    level: '100',
    phone_number: '+2347088433896',
  },
  {
    mat_number: 'ENG2409689',
    level: '100',
    phone_number: '+2349154659453',
  },
  {
    mat_number: 'ENG2403679',
    level: '100',
    phone_number: '+2348133491753',
  },
  {
    mat_number: 'ENG2403680',
    level: '100',
    phone_number: '+2348164833923',
  },
  {
    mat_number: 'ENG2403681',
    level: '100',
    phone_number: '+2347056137830',
  },
  {
    mat_number: 'ENG2403682',
    level: '100',
    phone_number: '+2347040127380',
  },
  {
    mat_number: 'ENG2403684',
    level: '100',
    phone_number: '+2349044542079',
  },
  {
    mat_number: 'ENG2403685',
    level: '100',
    phone_number: '+2349037436015',
  },
  {
    mat_number: 'ENG2403686',
    level: '100',
    phone_number: '+2348110604905',
  },
  {
    mat_number: 'ENG2403687',
    level: '100',
    phone_number: '+2349059379266',
  },
  {
    mat_number: 'ENG2403688',
    level: '100',
    phone_number: '+2348146415516',
  },
  {
    mat_number: 'ENG2403689',
    level: '100',
    phone_number: '+2347042779291',
  },
  {
    mat_number: 'ENG2403690',
    level: '100',
    phone_number: '+2349025690268',
  },
  {
    mat_number: 'ENG2403691',
    level: '100',
    phone_number: '+2349155464094',
  },
  {
    mat_number: 'ENG2303870',
    level: '100',
    phone_number: '+2348169577162',
  },
  {
    mat_number: 'ENG2403692',
    level: '100',
    phone_number: '+2347041562360',
  },
  {
    mat_number: 'ENG2403693',
    level: '100',
    phone_number: '+2347010299123',
  },
  {
    mat_number: 'ENG2403661',
    level: '100',
    phone_number: '+2347055075969',
  },
  {
    mat_number: 'ENG2403694',
    level: '100',
    phone_number: '+2348052000157',
  },
  {
    mat_number: 'ENG2403695',
    level: '100',
    phone_number: '+2348151600272',
  },
  {
    mat_number: 'ENG2403696',
    level: '100',
    phone_number: '+2348164675610',
  },
  {
    mat_number: 'ENG2403697',
    level: '100',
    phone_number: '+2348148238282',
  },
  {
    mat_number: 'ENG2403698',
    level: '100',
    phone_number: '+2347075517567',
  },
  {
    mat_number: 'ENG2403699',
    level: '100',
    phone_number: '+2349151995668',
  },
  {
    mat_number: 'ENG2403701',
    level: '100',
    phone_number: '+2349128688878',
  },
  {
    mat_number: 'ENG2403702',
    level: '100',
    phone_number: '+2347011789464',
  },
  {
    mat_number: 'ENG2403703',
    level: '100',
    phone_number: '+2348142460172',
  },
  {
    mat_number: 'ENG2403704',
    level: '100',
    phone_number: '+2349044025653',
  },
  {
    mat_number: 'ENG2403705',
    level: '100',
    phone_number: '+2348119031023',
  },
  {
    mat_number: 'ENG2403706',
    level: '100',
    phone_number: '+2347088910163',
  },
  {
    mat_number: 'ENG2403707',
    level: '100',
    phone_number: '+2347045368559',
  },
  {
    mat_number: 'ENG2403708',
    level: '100',
    phone_number: '+2348071936356',
  },
  {
    mat_number: 'ENG2403709',
    level: '100',
    phone_number: '+2347060501422',
  },
  {
    mat_number: 'ENG2403710',
    level: '100',
    phone_number: '+2349038746158',
  },
  {
    mat_number: 'ENG2403712',
    level: '100',
    phone_number: '+2348154593981',
  },
  {
    mat_number: 'ENG2403713',
    level: '100',
    phone_number: '+2347040149267',
  },
  {
    mat_number: 'ENG2403714',
    level: '100',
    phone_number: '+2349121832705',
  },
  {
    mat_number: 'ENG2403715',
    level: '100',
    phone_number: '+2349155889259',
  },
  {
    mat_number: '202441756648GF',
    level: '100',
    phone_number: '+2348101573416',
  },
  {
    mat_number: 'ENG2403717',
    level: '100',
    phone_number: '+2349021642940',
  },
  {
    mat_number: 'ENG2403718',
    level: '100',
    phone_number: '+2348118525004',
  },
  {
    mat_number: 'ENG2403719',
    level: '100',
    phone_number: '+2348160277638',
  },
  {
    mat_number: 'ENG2403722',
    level: '100',
    phone_number: '+2348109727443',
  },
  {
    mat_number: 'ENG2403723',
    level: '100',
    phone_number: '+2348141725157',
  },
  {
    mat_number: 'ENG2403725',
    level: '100',
    phone_number: '+2348087118965',
  },
  {
    mat_number: 'ENG2403726',
    level: '100',
    phone_number: '+2348149287551',
  },
  {
    mat_number: 'ENG2403727',
    level: '100',
    phone_number: '+2349134500610',
  },
  {
    mat_number: 'ENG2403728',
    level: '100',
    phone_number: '+2348149257587',
  },
  {
    mat_number: 'ENG2403729',
    level: '100',
    phone_number: '+2348156710740',
  },
  {
    mat_number: 'ENG2403730',
    level: '100',
    phone_number: '+2349126486522',
  },
  {
    mat_number: 'ENG2403731',
    level: '100',
    phone_number: '+2347036844097',
  },
  {
    mat_number: 'ENG2403732',
    level: '100',
    phone_number: '+2348026886331',
  },
  {
    mat_number: 'ENG2403733',
    level: '100',
    phone_number: '+2348132580023',
  },
  {
    mat_number: 'ENG2403734',
    level: '100',
    phone_number: '+2348109974691',
  },
  {
    mat_number: 'ENG2409690',
    level: '100',
    phone_number: '+2349057776322',
  },
  {
    mat_number: 'ENG2403735',
    level: '100',
    phone_number: '+2348103484438',
  },
  {
    mat_number: 'ENG2403736',
    level: '100',
    phone_number: '+2349166139695',
  },
  {
    mat_number: 'ENG2403737',
    level: '100',
    phone_number: '+2349027702372',
  },
  {
    mat_number: 'ENG2403740',
    level: '100',
    phone_number: '+2349032081493',
  },
  {
    mat_number: 'ENG2403741',
    level: '100',
    phone_number: '+2348078004216',
  },
  {
    mat_number: 'ENG2403742',
    level: '100',
    phone_number: '+2347055007542',
  },
  {
    mat_number: 'ENG2409055',
    level: '100',
    phone_number: '+2347034525576',
  },
  {
    mat_number: 'B1248346',
    level: '200',
    phone_number: '+2349136153444',
  },
  {
    mat_number: 'ENG2303837',
    level: '200',
    phone_number: '+2349021596068',
  },
  {
    mat_number: 'ENG2303838',
    level: '200',
    phone_number: '+2349067057805',
  },
  {
    mat_number: 'ENG2303839',
    level: '200',
    phone_number: '+2348167323392',
  },
  {
    mat_number: 'ENG2204991',
    level: '200',
    phone_number: '+2348122323477',
  },
  {
    mat_number: 'ENG2303840',
    level: '200',
    phone_number: '+2349134625453',
  },
  {
    mat_number: 'ENG2203829',
    level: '200',
    phone_number: '+2349046586175',
  },
  {
    mat_number: 'ENG2204993',
    level: '200',
    phone_number: '+2349035478948',
  },
  {
    mat_number: 'ENG2303841',
    level: '200',
    phone_number: '+2347048144701',
  },
  {
    mat_number: 'ENG2303842',
    level: '200',
    phone_number: '+2348162040523',
  },
  {
    mat_number: 'ENG2303843',
    level: '200',
    phone_number: '+2349077035236',
  },
  {
    mat_number: 'ENG2303844',
    level: '200',
    phone_number: '+2349135479175',
  },
  {
    mat_number: 'ENG2303845',
    level: '200',
    phone_number: '+2348131050922',
  },
  {
    mat_number: 'ENG2303846',
    level: '200',
    phone_number: '+2347040508399',
  },
  {
    mat_number: 'ENG2303847',
    level: '200',
    phone_number: '+2349133066187',
  },
  {
    mat_number: 'ENG2303848',
    level: '200',
    phone_number: '+2348036073512',
  },
  {
    mat_number: 'ENG2303932',
    level: '200',
    phone_number: '+2349121998591',
  },
  {
    mat_number: 'ENG2303849',
    level: '200',
    phone_number: '+2349165067433',
  },
  {
    mat_number: 'ENG2303850',
    level: '200',
    phone_number: '+2349121654526',
  },
  {
    mat_number: 'ENG2303851',
    level: '200',
    phone_number: '+2349167303706',
  },
  {
    mat_number: 'ENG2303852',
    level: '200',
    phone_number: '+2348139955912',
  },
  {
    mat_number: 'ENG2309737',
    level: '200',
    phone_number: '+2347054701845',
  },
  {
    mat_number: 'ENG2303935',
    level: '200',
    phone_number: '+2348034271156',
  },
  {
    mat_number: 'ENG2303853',
    level: '200',
    phone_number: '+2348139350634',
  },
  {
    mat_number: 'ENG2303854',
    level: '200',
    phone_number: '+2349157662756',
  },
  {
    mat_number: 'ENG2303617',
    level: '200',
    phone_number: '+2348059901942',
  },
  {
    mat_number: 'ENG2303855',
    level: '200',
    phone_number: '+2348158163303',
  },
  {
    mat_number: 'B1243613',
    level: '200',
    phone_number: '+2347088300134',
  },
  {
    mat_number: 'ENG2303856',
    level: '200',
    phone_number: '+2348095516123',
  },
  {
    mat_number: 'ENG2303857',
    level: '200',
    phone_number: '+2349069376918',
  },

  {
    mat_number: 'B1197751',
    level: '200',
    phone_number: '+2349115209117',
  },
  {
    mat_number: 'ENG2303858',
    level: '200',
    phone_number: '+2349124689250',
  },
  {
    mat_number: 'ENG2303859',
    level: '200',
    phone_number: '+2348163234167',
  },
  {
    mat_number: 'ENG2303860',
    level: '200',
    phone_number: '+2349024729615',
  },
  {
    mat_number: 'ENG2302861',
    level: '200',
    phone_number: '+2347088981469',
  },
  {
    mat_number: 'ENG2303862',
    level: '200',
    phone_number: '+2347042580220',
  },
  {
    mat_number: 'ENG2309647',
    level: '200',
    phone_number: '+2348080965933',
  },
  {
    mat_number: 'ENG2303865',
    level: '200',
    phone_number: '+2348119692783',
  },
  {
    mat_number: 'ENG2303866',
    level: '200',
    phone_number: '+2347061539047',
  },
  {
    mat_number: 'ENG2304335',
    level: '200',
    phone_number: '+2347042951942',
  },
  {
    mat_number: 'ENG2303867',
    level: '200',
    phone_number: '+2349024721267',
  },
  {
    mat_number: 'ENG2303868',
    level: '200',
    phone_number: '+2348038133621',
  },
  {
    mat_number: 'ENG2309666',
    level: '200',
    phone_number: '+2347038179574',
  },
  {
    mat_number: 'B1249894',
    level: '200',
    phone_number: '+2348072124608',
  },
  {
    mat_number: 'ENG2303872',
    level: '200',
    phone_number: '+2347082764793',
  },
  {
    mat_number: 'ENG2303874',
    level: '200',
    phone_number: '+2347079596370',
  },
  {
    mat_number: 'ENG2303875',
    level: '200',
    phone_number: '+2348086621621',
  },
  {
    mat_number: 'ENG2303876',
    level: '200',
    phone_number: '+2347032901697',
  },
  {
    mat_number: 'ENG2303877',
    level: '200',
    phone_number: '+2349138993690',
  },
  {
    mat_number: 'ENG2303878',
    level: '200',
    phone_number: '+2349138620533',
  },
  {
    mat_number: 'B1244720',
    level: '200',
    phone_number: '+2349159518072',
  },
  {
    mat_number: 'ENG2303879',
    level: '200',
    phone_number: '+2348142432345',
  },
  {
    mat_number: 'ENG2303881',
    level: '200',
    phone_number: '+2347043110596',
  },
  {
    mat_number: 'ENG2303882',
    level: '200',
    phone_number: '+2349014538245',
  },
  {
    mat_number: 'ENG2303883',
    level: '200',
    phone_number: '+2349038841000',
  },
  {
    mat_number: 'ENG2303884',
    level: '200',
    phone_number: '+2349161925305',
  },
  {
    mat_number: 'ENG2309554',
    level: '200',
    phone_number: '+2348036496229',
  },
  {
    mat_number: 'ENG2204274',
    level: '200',
    phone_number: '+2349033337026',
  },
  {
    mat_number: 'ENG2303524',
    level: '200',
    phone_number: '+2348101102423',
  },
  {
    mat_number: 'ENG2303885',
    level: '200',
    phone_number: '+2348083910558',
  },
  {
    mat_number: 'ENG2303886',
    level: '200',
    phone_number: '+2347084741910',
  },
  {
    mat_number: 'ENG2303887',
    level: '200',
    phone_number: '+2348163480079',
  },
  {
    mat_number: 'ENG2303916',
    level: '200',
    phone_number: '+2347061424177',
  },
  {
    mat_number: 'ENG2303889',
    level: '200',
    phone_number: '+2349151604761',
  },
  {
    mat_number: 'ENG2303891',
    level: '200',
    phone_number: '+2347030574312',
  },
  {
    mat_number: 'ENG2303892',
    level: '200',
    phone_number: '+2349155464113',
  },
  {
    mat_number: 'B1248343',
    level: '200',
    phone_number: '+2348157452376',
  },
  {
    mat_number: 'ENG2303894',
    level: '200',
    phone_number: '+2348058570880',
  },
  {
    mat_number: 'ENG2303895',
    level: '200',
    phone_number: '+2349169012128',
  },
  {
    mat_number: 'ENG2303893',
    level: '200',
    phone_number: '+2349019819251',
  },
  {
    mat_number: 'ENG2303896',
    level: '200',
    phone_number: '+2348165319424',
  },
  {
    mat_number: 'ENG2309542',
    level: '200',
    phone_number: '+2349065186578',
  },
  {
    mat_number: 'ENG2303897',
    level: '200',
    phone_number: '+2349153308381',
  },
  {
    mat_number: 'ENG2303898',
    level: '200',
    phone_number: '+2349011215451',
  },
  {
    mat_number: 'B1248345',
    level: '200',
    phone_number: '+2349131897877',
  },
  {
    mat_number: 'ENG2303899',
    level: '200',
    phone_number: '+2348052083553',
  },
  {
    mat_number: 'ENG2303900',
    level: '200',
    phone_number: '+2348128515737',
  },
  {
    mat_number: 'B1243611',
    level: '200',
    phone_number: '+2349160611546',
  },
  {
    mat_number: 'ENG2303901',
    level: '200',
    phone_number: '+2347063707366',
  },
  {
    mat_number: 'ENG2204972',
    level: '200',
    phone_number: '+2349025819370',
  },
  {
    mat_number: 'B1244719',
    level: '200',
    phone_number: '+2347084450871',
  },
  {
    mat_number: 'B1247582',
    level: '200',
    phone_number: '+2349059384186',
  },
  {
    mat_number: 'ENG2303902',
    level: '200',
    phone_number: '+2349038498385',
  },
  {
    mat_number: 'ENG2303903',
    level: '200',
    phone_number: '+2349019308142',
  },
  {
    mat_number: 'ENG2303904',
    level: '200',
    phone_number: '+2349153548606',
  },
  {
    mat_number: 'ENG2303905',
    level: '200',
    phone_number: '+2349043893676',
  },
  {
    mat_number: 'ENG2303906',
    level: '200',
    phone_number: '+2348136103830',
  },
  {
    mat_number: 'ENG2303907',
    level: '200',
    phone_number: '+2347083378775',
  },
  {
    mat_number: 'ENG2309543',
    level: '200',
    phone_number: '+2349165534527',
  },
  {
    mat_number: 'ENG2303908',
    level: '200',
    phone_number: '+2347078943242',
  },
  {
    mat_number: 'ENG2303910',
    level: '200',
    phone_number: '+2347025663537',
  },
  {
    mat_number: 'ENG2303909',
    level: '200',
    phone_number: '+2349073237956',
  },
  {
    mat_number: 'ENG2303911',
    level: '200',
    phone_number: '+2349070517134',
  },
  {
    mat_number: 'ENG2303912',
    level: '200',
    phone_number: '+2347061787462',
  },
  {
    mat_number: 'ENG2303913',
    level: '200',
    phone_number: '+2347067090914',
  },
  {
    mat_number: 'ENG2303914',
    level: '200',
    phone_number: '+2348129574445',
  },
  {
    mat_number: 'ENG2303915',
    level: '200',
    phone_number: '+2348163268398',
  },
  {
    mat_number: 'B1248342',
    level: '200',
    phone_number: '+2349152672047',
  },
  {
    mat_number: 'ENG2303917',
    level: '200',
    phone_number: '+2349160578679',
  },
  {
    mat_number: 'ENG2303918',
    level: '200',
    phone_number: '+2349131580722',
  },
  {
    mat_number: 'ENG2303919',
    level: '200',
    phone_number: '+2348068620624',
  },
  {
    mat_number: 'ENG2303920',
    level: '200',
    phone_number: '+2349159253114',
  },
  {
    mat_number: 'B1248341',
    level: '200',
    phone_number: '+2348056849076',
  },
  {
    mat_number: 'ENG2303921',
    level: '200',
    phone_number: '+2349158735721',
  },
  {
    mat_number: 'ENG2303922',
    level: '200',
    phone_number: '+2348067173861',
  },
  {
    mat_number: 'ENG2303923',
    level: '200',
    phone_number: '+2347018821476',
  },
  {
    mat_number: 'B1243610',
    level: '200',
    phone_number: '+2349033095180',
  },
  {
    mat_number: 'ENG2303924',
    level: '200',
    phone_number: '+2348104879072',
  },
  {
    mat_number: 'ENG2303925',
    level: '200',
    phone_number: '+2349018849645',
  },
  {
    mat_number: 'B1249893',
    level: '200',
    phone_number: '+2349019315584',
  },
  {
    mat_number: 'ENG2303926',
    level: '200',
    phone_number: '+2349120763156',
  },
  {
    mat_number: 'ENG2303927',
    level: '200',
    phone_number: '+2347055081962',
  },
  {
    mat_number: 'ENG1243612',
    level: '200',
    phone_number: '+2349067205899',
  },
  {
    mat_number: 'ENG20224249',
    level: '300',
    phone_number: '+2349120850071',
  },
  {
    mat_number: 'ENG2102148',
    level: '300',
    phone_number: '+2348136905224',
  },
  {
    mat_number: 'ENG2102151',
    level: '300',
    phone_number: '+2349167359218',
  },
  {
    mat_number: 'ENG2102152',
    level: '300',
    phone_number: '+2349035674344',
  },
  {
    mat_number: 'ENG2102154',
    level: '300',
    phone_number: '+2349065287834',
  },
  {
    mat_number: 'ENG2102668',
    level: '300',
    phone_number: '+2348058179395',
  },
  {
    mat_number: 'ENG2102945',
    level: '300',
    phone_number: '+2349053063354',
  },
  {
    mat_number: 'ENG2102967',
    level: '300',
    phone_number: '+2348053595789',
  },
  {
    mat_number: 'ENG2202456',
    level: '300',
    phone_number: '+2348119698256',
  },
  {
    mat_number: 'ENG2203851',
    level: '300',
    phone_number: '+2349041243522',
  },
  {
    mat_number: 'ENG2203868',
    level: '300',
    phone_number: '+2349064180172',
  },
  {
    mat_number: 'ENG2204218',
    level: '300',
    phone_number: '+2347063502118',
  },
  {
    mat_number: 'ENG2204219',
    level: '300',
    phone_number: '+2347039929206',
  },
  {
    mat_number: 'ENG2204221',
    level: '300',
    phone_number: '+2349016067364',
  },
  {
    mat_number: 'ENG2204222',
    level: '300',
    phone_number: '+2348089663953',
  },
  {
    mat_number: 'ENG2204223',
    level: '300',
    phone_number: '+2348156033806',
  },
  {
    mat_number: 'ENG2204224',
    level: '300',
    phone_number: '+2347067105798',
  },
  {
    mat_number: 'ENG2204225',
    level: '300',
    phone_number: '+2348151244059',
  },
  {
    mat_number: 'ENG2204226',
    level: '300',
    phone_number: '+2347041057128',
  },
  {
    mat_number: 'ENG2204227',
    level: '300',
    phone_number: '+2348087459660',
  },
  {
    mat_number: 'ENG2204228',
    level: '300',
    phone_number: '+2348052879413',
  },
  {
    mat_number: 'ENG2204230',
    level: '300',
    phone_number: '+2348082656971',
  },
  {
    mat_number: 'ENG2204231',
    level: '300',
    phone_number: '+2349030319278',
  },
  {
    mat_number: 'ENG2204233',
    level: '300',
    phone_number: '+2349017118681',
  },
  {
    mat_number: 'ENG2204235',
    level: '300',
    phone_number: '+2347059042537',
  },
  {
    mat_number: 'ENG2204237',
    level: '300',
    phone_number: '+2347044342664',
  },
  {
    mat_number: 'ENG2204238',
    level: '300',
    phone_number: '+2349061141596',
  },
  {
    mat_number: 'ENG2204239',
    level: '300',
    phone_number: '+2348112956276',
  },
  {
    mat_number: 'ENG2204240',
    level: '300',
    phone_number: '+2349052024298',
  },
  {
    mat_number: 'ENG2204241',
    level: '300',
    phone_number: '+2349041194707',
  },
  {
    mat_number: 'ENG2204242',
    level: '300',
    phone_number: '+2347066979604',
  },
  {
    mat_number: 'ENG2204243',
    level: '300',
    phone_number: '+2348109528971',
  },
  {
    mat_number: 'ENG2204246',
    level: '300',
    phone_number: '+2348145252049',
  },
  {
    mat_number: 'ENG2204247',
    level: '300',
    phone_number: '+2348145491128',
  },
  {
    mat_number: 'ENG2204250',
    level: '300',
    phone_number: '+2349013313321',
  },
  {
    mat_number: 'ENG2204251',
    level: '300',
    phone_number: '+2347042390171',
  },
  {
    mat_number: 'ENG2204253',
    level: '300',
    phone_number: '+2348119292800',
  },
  {
    mat_number: 'ENG2204255',
    level: '300',
    phone_number: '+2348070500861',
  },
  {
    mat_number: 'ENG2204257',
    level: '300',
    phone_number: '+2348104694174',
  },
  {
    mat_number: 'ENG2204258',
    level: '300',
    phone_number: '+2347055867901',
  },
  {
    mat_number: 'ENG2204259',
    level: '300',
    phone_number: '+2347043948273',
  },
  {
    mat_number: 'ENG2204260',
    level: '300',
    phone_number: '+2348157847054',
  },
  {
    mat_number: 'ENG2204265',
    level: '300',
    phone_number: '+2348062372588',
  },
  {
    mat_number: 'ENG2204267',
    level: '300',
    phone_number: '+2348118864020',
  },
  {
    mat_number: 'ENG2204268',
    level: '300',
    phone_number: '+2348129629272',
  },
  {
    mat_number: 'ENG2204269',
    level: '300',
    phone_number: '+2348106590285',
  },
  {
    mat_number: 'ENG2204270',
    level: '300',
    phone_number: '+2348143678098',
  },
  {
    mat_number: 'ENG2204271',
    level: '300',
    phone_number: '+2349013156795',
  },
  {
    mat_number: 'ENG2204272',
    level: '300',
    phone_number: '+2349053579930',
  },
  {
    mat_number: 'ENG2204276',
    level: '300',
    phone_number: '+2348059293571',
  },
  {
    mat_number: 'ENG2204277',
    level: '300',
    phone_number: '+2348138806185',
  },
  {
    mat_number: 'ENG2204278',
    level: '300',
    phone_number: '+2348137810218',
  },
  {
    mat_number: 'ENG2204279',
    level: '300',
    phone_number: '+2348086583430',
  },
  {
    mat_number: 'ENG2204280',
    level: '300',
    phone_number: '+2349039423843',
  },
  {
    mat_number: 'ENG2204281',
    level: '300',
    phone_number: '+2348154721783',
  },
  {
    mat_number: 'ENG2204282',
    level: '300',
    phone_number: '+2348073673407',
  },
  {
    mat_number: 'ENG2204286',
    level: '300',
    phone_number: '+2349065070051',
  },
  {
    mat_number: 'ENG2204287',
    level: '300',
    phone_number: '+2349136707805',
  },
  {
    mat_number: 'ENG2204289',
    level: '300',
    phone_number: '+2347042866043',
  },
  {
    mat_number: 'ENG2204290',
    level: '300',
    phone_number: '+2348148206336',
  },
  {
    mat_number: 'ENG2204291',
    level: '300',
    phone_number: '+2348161589947',
  },
  {
    mat_number: 'ENG2204292',
    level: '300',
    phone_number: '+2348108292795',
  },
  {
    mat_number: 'ENG2204293',
    level: '300',
    phone_number: '+2347026259390',
  },
  {
    mat_number: 'ENG2204294',
    level: '300',
    phone_number: '+2348154510165',
  },
  {
    mat_number: 'ENG2204295',
    level: '300',
    phone_number: '+2349121194619',
  },
  {
    mat_number: 'ENG2204296',
    level: '300',
    phone_number: '+2348136924478',
  },
  {
    mat_number: 'ENG2204297',
    level: '300',
    phone_number: '+2348113604750',
  },
  {
    mat_number: 'ENG2204299',
    level: '300',
    phone_number: '+2348157003427',
  },
  {
    mat_number: 'ENG2204301',
    level: '300',
    phone_number: '+2348057610355',
  },
  {
    mat_number: 'ENG2204302',
    level: '300',
    phone_number: '+2347038316250',
  },
  {
    mat_number: 'ENG2204303',
    level: '300',
    phone_number: '+2348138351032',
  },
  {
    mat_number: 'ENG2204304',
    level: '300',
    phone_number: '+2348139938224',
  },
  {
    mat_number: 'ENG2204305',
    level: '300',
    phone_number: '+2348105582723',
  },
  {
    mat_number: 'ENG2204307',
    level: '300',
    phone_number: '+2349161429054',
  },
  {
    mat_number: 'ENG2204308',
    level: '300',
    phone_number: '+2348039159072',
  },
  {
    mat_number: 'ENG2204311',
    level: '300',
    phone_number: '+2349037296143',
  },
  {
    mat_number: 'ENG2204312',
    level: '300',
    phone_number: '+2349036818243',
  },
  {
    mat_number: 'ENG2204313',
    level: '300',
    phone_number: '+2349071457082',
  },
  {
    mat_number: 'ENG2204314',
    level: '300',
    phone_number: '+2348158071769',
  },
  {
    mat_number: 'ENG2204315',
    level: '300',
    phone_number: '+2347089326652',
  },
  {
    mat_number: 'ENG2204316',
    level: '300',
    phone_number: '+2349053873684',
  },
  {
    mat_number: 'ENG2208242',
    level: '300',
    phone_number: '+2349161578328',
  },
  {
    mat_number: 'ENG2209375',
    level: '300',
    phone_number: '+2349077444611',
  },
  {
    mat_number: 'ENG2303871',
    level: '300',
    phone_number: '+2349078620030',
  },

  {
    mat_number: 'ENG2102913',
    level: '400',
    phone_number: '+2348105975216',
  },
  {
    mat_number: 'ENG2102915',
    level: '400',
    phone_number: '+2348108253269',
  },
  {
    mat_number: 'ENG2102919',
    level: '400',
    phone_number: '+2347037418869',
  },
  {
    mat_number: 'ENG2006101',
    level: '400',
    phone_number: '+2347042056281',
  },
  {
    mat_number: 'ENG2102921',
    level: '400',
    phone_number: '+2348143284214',
  },
  {
    mat_number: 'ENG2102924',
    level: '400',
    phone_number: '+2347010867098',
  },
  {
    mat_number: 'ENG2102925',
    level: '400',
    phone_number: '+2349017649301',
  },
  {
    mat_number: 'ENG2209633',
    level: '400',
    phone_number: '+2348149191527',
  },
  {
    mat_number: 'ENG2102927',
    level: '400',
    phone_number: '+2349160038229',
  },
  {
    mat_number: 'ENG2102928',
    level: '400',
    phone_number: '+2349132590552',
  },
  {
    mat_number: 'ENG2102929',
    level: '400',
    phone_number: '+2349122691405',
  },
  {
    mat_number: 'ENG2102930',
    level: '400',
    phone_number: '+2349037596640',
  },
  {
    mat_number: 'ENG2102933',
    level: '400',
    phone_number: '+2348133027358',
  },
  {
    mat_number: 'ENG2102934',
    level: '400',
    phone_number: '+2349062000091',
  },
  {
    mat_number: 'ENG2102935',
    level: '400',
    phone_number: '+2348141917073',
  },
  {
    mat_number: 'ENG2204248',
    level: '400',
    phone_number: '+2349015987533',
  },
  {
    mat_number: 'ENG2102937',
    level: '400',
    phone_number: '+2348053235920',
  },
  {
    mat_number: 'ENG2102938',
    level: '400',
    phone_number: '+2348114687943',
  },
  {
    mat_number: 'ENG2102976',
    level: '400',
    phone_number: '+2349065688763',
  },
  {
    mat_number: 'ENG2102939',
    level: '400',
    phone_number: '+2349156477967',
  },
  {
    mat_number: 'ENG2209722',
    level: '400',
    phone_number: '+2348142718357',
  },
  {
    mat_number: 'ENG2102940',
    level: '400',
    phone_number: '+2348114142335',
  },
  {
    mat_number: 'ENG2102941',
    level: '400',
    phone_number: '+2349157215605',
  },
  {
    mat_number: 'ENG2002235',
    level: '400',
    phone_number: '+2349021830318',
  },
  {
    mat_number: 'ENG2102944',
    level: '400',
    phone_number: '+2347025237967',
  },
  {
    mat_number: 'ENG2102946',
    level: '400',
    phone_number: '+2349053660179',
  },
  {
    mat_number: 'ENG2102949',
    level: '400',
    phone_number: '+2347043683804',
  },
  {
    mat_number: 'ENG2102950',
    level: '400',
    phone_number: '+2349073668435',
  },
  {
    mat_number: 'ENG2209873',
    level: '400',
    phone_number: '+2349167973884',
  },
  {
    mat_number: 'ENG2102951',
    level: '400',
    phone_number: '+2348126944753',
  },
  {
    mat_number: 'ENG2102952',
    level: '400',
    phone_number: '+2348123276763',
  },
  {
    mat_number: 'ENG2102953',
    level: '400',
    phone_number: '+2348120419138',
  },
  {
    mat_number: 'ENG2102955',
    level: '400',
    phone_number: '+2349079149842',
  },
  {
    mat_number: 'ENG2102956',
    level: '400',
    phone_number: '+2348075595156',
  },
  {
    mat_number: 'ENG2102957',
    level: '400',
    phone_number: '+2349033494298',
  },
  {
    mat_number: 'ENG2102958',
    level: '400',
    phone_number: '+2348139059424',
  },
  {
    mat_number: 'ENG2102959',
    level: '400',
    phone_number: '+2349016438332',
  },
  {
    mat_number: 'ENG2204261',
    level: '400',
    phone_number: '+2348143798224',
  },
  {
    mat_number: 'ENG2102960',
    level: '400',
    phone_number: '+2348132484552',
  },
  {
    mat_number: 'ENG2204264',
    level: '400',
    phone_number: '+2349131866926',
  },
  {
    mat_number: 'ENG2102961',
    level: '400',
    phone_number: '+2348168459779',
  },
  {
    mat_number: 'ENG2102964',
    level: '400',
    phone_number: '+2349071877246',
  },
  {
    mat_number: 'ENG2102965',
    level: '400',
    phone_number: '+2349079176310',
  },
  {
    mat_number: 'ENG2102966',
    level: '400',
    phone_number: '+2348153249905',
  },
  {
    mat_number: 'ENG2102968',
    level: '400',
    phone_number: '+2349055734624',
  },
  {
    mat_number: 'ENG2102969',
    level: '400',
    phone_number: '+2349160721774',
  },
  {
    mat_number: 'ENG2102970',
    level: '400',
    phone_number: '+2349161132032',
  },
  {
    mat_number: 'ENG2102971',
    level: '400',
    phone_number: '+2348095078106',
  },
  {
    mat_number: 'ENG2105510',
    level: '400',
    phone_number: '+2348140260818',
  },
  {
    mat_number: 'ENG2209518',
    level: '400',
    phone_number: '+2347066599541',
  },
  {
    mat_number: 'ENG2102977',
    level: '400',
    phone_number: '+2347026383304',
  },
  {
    mat_number: 'ENG2106363',
    level: '400',
    phone_number: '+2349077408513',
  },
  {
    mat_number: 'ENG2102978',
    level: '400',
    phone_number: '+2349126763089',
  },
  {
    mat_number: 'ENG2005356',
    level: '400',
    phone_number: '+2348105606265',
  },
  {
    mat_number: 'ENG2102979',
    level: '400',
    phone_number: '+2347063718319',
  },
  {
    mat_number: 'ENG2102994',
    level: '400',
    phone_number: '+2348062704654',
  },
  {
    mat_number: 'ENG2102980',
    level: '400',
    phone_number: '+2347068789773',
  },
  {
    mat_number: 'ENG2102981',
    level: '400',
    phone_number: '+2348108778713',
  },
  {
    mat_number: 'ENG2102982',
    level: '400',
    phone_number: '+2349022787562',
  },
  {
    mat_number: 'ENG2102984',
    level: '400',
    phone_number: '+2347043808482',
  },
  {
    mat_number: 'ENG2209822',
    level: '400',
    phone_number: '+2347032199791',
  },
  {
    mat_number: 'ENG2102985',
    level: '400',
    phone_number: '+2349041983336',
  },
  {
    mat_number: 'ENG2102986',
    level: '400',
    phone_number: '+2348122574522',
  },
  {
    mat_number: 'ENG2102988',
    level: '400',
    phone_number: '+2349011025018',
  },
  {
    mat_number: 'ENG2209756',
    level: '400',
    phone_number: '+2348068835455',
  },
  {
    mat_number: 'ENG2008297',
    level: '400',
    phone_number: '+2347051185704',
  },
  {
    mat_number: 'ENG2102990',
    level: '400',
    phone_number: '+2349157303911',
  },
  {
    mat_number: 'ENG2102992',
    level: '400',
    phone_number: '+2349013795693',
  },
  {
    mat_number: 'ENG2102993',
    level: '400',
    phone_number: '+2348109900694',
  },
  {
    mat_number: 'ENG2106254',
    level: '400',
    phone_number: '+2348124200800',
  },
  {
    mat_number: 'ENG2102995',
    level: '400',
    phone_number: '+2348155002106',
  },
  {
    mat_number: 'ENG2102996',
    level: '400',
    phone_number: '+2349016537809',
  },
  {
    mat_number: 'ENG2102998',
    level: '400',
    phone_number: '+2347040491593',
  },
  {
    mat_number: 'ENG2002316',
    level: '400',
    phone_number: '+2348073603401',
  },
  {
    mat_number: 'ENG2103001',
    level: '400',
    phone_number: '+2349120908025',
  },
  {
    mat_number: 'ENG2103002',
    level: '400',
    phone_number: '+2349067280928',
  },
  {
    mat_number: 'ENG2002324',
    level: '400',
    phone_number: '+2349124577499',
  },
  {
    mat_number: 'ENG2103005',
    level: '400',
    phone_number: '+2349037868136',
  },
  {
    mat_number: 'ENG2103007',
    level: '400',
    phone_number: '+2348119526920',
  },
  {
    mat_number: 'ENG2209131',
    level: '400',
    phone_number: '+2347040456723',
  },
  {
    mat_number: 'ENG2103008',
    level: '400',
    phone_number: '+2349032688670',
  },
  {
    mat_number: 'ENG2103009',
    level: '400',
    phone_number: '+2349039765246',
  },
  {
    mat_number: 'ENG2103010',
    level: '400',
    phone_number: '+2348086530889',
  },
  {
    mat_number: 'ENG2103011',
    level: '400',
    phone_number: '+2348129384228',
  },
  {
    mat_number: 'ENG1903172',
    level: '500',
    phone_number: '+2347041758121',
  },
  {
    mat_number: 'ENG1903186',
    level: '500',
    phone_number: '+2348135492002',
  },
  {
    mat_number: 'ENG1904884',
    level: '500',
    phone_number: '+2347035224395',
  },
  {
    mat_number: 'ENG1904888',
    level: '500',
    phone_number: '+2348153687939',
  },
  {
    mat_number: 'ENG1905403',
    level: '500',
    phone_number: '+2347086013663',
  },
  {
    mat_number: 'ENG1905240',
    level: '500',
    phone_number: '+2347025079111',
  },
  {
    mat_number: 'ENG1905556',
    level: '500',
    phone_number: '+2348143027016',
  },
  {
    mat_number: 'ENG2002199',
    level: '500',
    phone_number: '+2349125954871',
  },
  {
    mat_number: 'ENG2002200',
    level: '500',
    phone_number: '+2347089023087',
  },
  {
    mat_number: 'ENG2002201',
    level: '500',
    phone_number: '+2348154218561',
  },
  {
    mat_number: 'ENG2002202',
    level: '500',
    phone_number: '+2347048734541',
  },
  {
    mat_number: 'ENG2002203',
    level: '500',
    phone_number: '+2349025706926',
  },
  {
    mat_number: 'ENG2002205',
    level: '500',
    phone_number: '+2348120322590',
  },
  {
    mat_number: 'ENG2002207',
    level: '500',
    phone_number: '+2349157314701',
  },
  {
    mat_number: 'ENG2002209',
    level: '500',
    phone_number: '+2347056748753',
  },
  {
    mat_number: 'ENG2002210',
    level: '500',
    phone_number: '+2348145049272',
  },
  {
    mat_number: 'ENG2002211',
    level: '500',
    phone_number: '+2349054057475',
  },
  {
    mat_number: 'ENG2002212',
    level: '500',
    phone_number: '+2349059839797',
  },
  {
    mat_number: 'ENG2002214',
    level: '500',
    phone_number: '+2348155265902',
  },
  {
    mat_number: 'ENG2002215',
    level: '500',
    phone_number: '+2348084425090',
  },
  {
    mat_number: 'ENG2002217',
    level: '500',
    phone_number: '+2347043253995',
  },
  {
    mat_number: 'ENG2002218',
    level: '500',
    phone_number: '+2348167216687',
  },
  {
    mat_number: 'ENG2002219',
    level: '500',
    phone_number: '+2347089130851',
  },
  {
    mat_number: 'ENG2002220',
    level: '500',
    phone_number: '+2348132548753',
  },
  {
    mat_number: 'ENG2002221',
    level: '500',
    phone_number: '+2349155532917',
  },
  {
    mat_number: 'ENG2002222',
    level: '500',
    phone_number: '+2349128869757',
  },
  {
    mat_number: 'ENG2002223',
    level: '500',
    phone_number: '+2348111760285',
  },
  {
    mat_number: 'ENG2002224',
    level: '500',
    phone_number: '+2347046675994',
  },
  {
    mat_number: 'ENG2002225',
    level: '500',
    phone_number: '+2348164198494',
  },
  {
    mat_number: 'ENG2002226',
    level: '500',
    phone_number: '+2349060239501',
  },
  {
    mat_number: 'ENG2002227',
    level: '500',
    phone_number: '+2348159463604',
  },
  {
    mat_number: 'ENG2002228',
    level: '500',
    phone_number: '+2349011514078',
  },
  {
    mat_number: 'ENG2002229',
    level: '500',
    phone_number: '+2349020400888',
  },
  {
    mat_number: 'ENG2002230',
    level: '500',
    phone_number: '+2348130710549',
  },
  {
    mat_number: 'ENG2002231',
    level: '500',
    phone_number: '+2348071014443',
  },
  {
    mat_number: 'ENG2002232',
    level: '500',
    phone_number: '+2348113415728',
  },
  {
    mat_number: 'ENG2002233',
    level: '500',
    phone_number: '+2347066412663',
  },
  {
    mat_number: 'ENG2002234',
    level: '500',
    phone_number: '+2349031467507',
  },
  {
    mat_number: 'ENG2002236',
    level: '500',
    phone_number: '+2348136089548',
  },
  {
    mat_number: 'ENG2002237',
    level: '500',
    phone_number: '+2349126420640',
  },
  {
    mat_number: 'ENG2002238',
    level: '500',
    phone_number: '+2349054750545',
  },
  {
    mat_number: 'ENG2002239',
    level: '500',
    phone_number: '+2349043639486',
  },
  {
    mat_number: 'ENG2002243',
    level: '500',
    phone_number: '+2349153176824',
  },
  {
    mat_number: 'ENG2002244',
    level: '500',
    phone_number: '+2348103528497',
  },
  {
    mat_number: 'ENG2002245',
    level: '500',
    phone_number: '+2349013936536',
  },
  {
    mat_number: 'ENG2002246',
    level: '500',
    phone_number: '+2348059762278',
  },
  {
    mat_number: 'ENG2002247',
    level: '500',
    phone_number: '+2348137724493',
  },
  {
    mat_number: 'ENG2002248',
    level: '500',
    phone_number: '+2349023920195',
  },
  {
    mat_number: 'ENG2002249',
    level: '500',
    phone_number: '+2348113595380',
  },
  {
    mat_number: 'ENG2002250',
    level: '500',
    phone_number: '+2349160364680',
  },
  {
    mat_number: 'ENG2002251',
    level: '500',
    phone_number: '+2348137128512',
  },
  {
    mat_number: 'ENG2002252',
    level: '500',
    phone_number: '+2348117940610',
  },
  {
    mat_number: 'ENG2002253',
    level: '500',
    phone_number: '+2349063075597',
  },
  {
    mat_number: 'ENG2002254',
    level: '500',
    phone_number: '+2349019647265',
  },
  {
    mat_number: 'ENG2002255',
    level: '500',
    phone_number: '+2349047827208',
  },
  {
    mat_number: 'ENG2002256',
    level: '500',
    phone_number: '+2349138280802',
  },
  {
    mat_number: 'ENG2002257',
    level: '500',
    phone_number: '+2349052851740',
  },
  {
    mat_number: 'ENG2002258',
    level: '500',
    phone_number: '+2347012153742',
  },
  {
    mat_number: 'ENG2002259',
    level: '500',
    phone_number: '+2349074632617',
  },
  {
    mat_number: 'ENG2002260',
    level: '500',
    phone_number: '+2349133885666',
  },
  {
    mat_number: 'ENG2002261',
    level: '500',
    phone_number: '+2349025063212',
  },
  {
    mat_number: 'ENG2002262',
    level: '500',
    phone_number: '+2348066860907',
  },
  {
    mat_number: 'ENG2002263',
    level: '500',
    phone_number: '+2349017017055',
  },
  {
    mat_number: 'ENG2002264',
    level: '500',
    phone_number: '+2347039683600',
  },
  {
    mat_number: 'ENG2002265',
    level: '500',
    phone_number: '+2347085614528',
  },
  {
    mat_number: 'ENG2002266',
    level: '500',
    phone_number: '+2349166866851',
  },
  {
    mat_number: 'ENG2002269',
    level: '500',
    phone_number: '+2349068020552',
  },
  {
    mat_number: 'ENG2002270',
    level: '500',
    phone_number: '+2348165336488',
  },
  {
    mat_number: 'ENG2002271',
    level: '500',
    phone_number: '+2349078474533',
  },
  {
    mat_number: 'ENG2002272',
    level: '500',
    phone_number: '+2348154046260',
  },
  {
    mat_number: 'ENG2002273',
    level: '500',
    phone_number: '+2347042021285',
  },
  {
    mat_number: 'ENG2002274',
    level: '500',
    phone_number: '+2348027482563',
  },
  {
    mat_number: 'ENG2002275',
    level: '500',
    phone_number: '+2349064705033',
  },
  {
    mat_number: 'ENG2002276',
    level: '500',
    phone_number: '+2347031050947',
  },
  {
    mat_number: 'ENG2002277',
    level: '500',
    phone_number: '+2349167830147',
  },
  {
    mat_number: 'ENG2002278',
    level: '500',
    phone_number: '+2348022518791',
  },
  {
    mat_number: 'ENG2002279',
    level: '500',
    phone_number: '+2347060564226',
  },
  {
    mat_number: 'ENG2002280',
    level: '500',
    phone_number: '+2348150353860',
  },
  {
    mat_number: 'ENG2002281',
    level: '500',
    phone_number: '+2347052517132',
  },
  {
    mat_number: 'ENG2002282',
    level: '500',
    phone_number: '+2349038325136',
  },
  {
    mat_number: 'ENG2002283',
    level: '500',
    phone_number: '+2349133604256',
  },
  {
    mat_number: 'ENG2002284',
    level: '500',
    phone_number: '+2348061247126',
  },
  {
    mat_number: 'ENG2002285',
    level: '500',
    phone_number: '+2349073509062',
  },
  {
    mat_number: 'ENG2002286',
    level: '500',
    phone_number: '+2349132473036',
  },
  {
    mat_number: 'ENG2002287',
    level: '500',
    phone_number: '+2347035045536',
  },
  {
    mat_number: 'ENG2002288',
    level: '500',
    phone_number: '+2348054652017',
  },
  {
    mat_number: 'ENG2002289',
    level: '500',
    phone_number: '+2348023162374',
  },
  {
    mat_number: 'ENG2002291',
    level: '500',
    phone_number: '+2349163258387',
  },
  {
    mat_number: 'ENG2002292',
    level: '500',
    phone_number: '+2348025839088',
  },
  {
    mat_number: 'ENG2002293',
    level: '500',
    phone_number: '+2348109739302',
  },
  {
    mat_number: 'ENG2002294',
    level: '500',
    phone_number: '+2349025559506',
  },
  {
    mat_number: 'ENG2002295',
    level: '500',
    phone_number: '+2348106897112',
  },
  {
    mat_number: 'ENG2002296',
    level: '500',
    phone_number: '+2347050768194',
  },
  {
    mat_number: 'ENG2002297',
    level: '500',
    phone_number: '+2348103223696',
  },
  {
    mat_number: 'ENG2002298',
    level: '500',
    phone_number: '+2347063576984',
  },
  {
    mat_number: 'ENG2002299',
    level: '500',
    phone_number: '+2348132355541',
  },
  {
    mat_number: 'ENG2002300',
    level: '500',
    phone_number: '+2349137205889',
  },
  {
    mat_number: 'ENG2002301',
    level: '500',
    phone_number: '+2349019721798',
  },
  {
    mat_number: 'ENG2002303',
    level: '500',
    phone_number: '+2348154314227',
  },
  {
    mat_number: 'ENG2002304',
    level: '500',
    phone_number: '+2348115640339',
  },
  {
    mat_number: 'ENG2002305',
    level: '500',
    phone_number: '+2347018421120',
  },
  {
    mat_number: 'ENG2002306',
    level: '500',
    phone_number: '+2349076530865',
  },
  {
    mat_number: 'ENG2002308',
    level: '500',
    phone_number: '+2349015810604',
  },
  {
    mat_number: 'ENG2002309',
    level: '500',
    phone_number: '+2348105219286',
  },
  {
    mat_number: 'ENG2002310',
    level: '500',
    phone_number: '+2348141764247',
  },
  {
    mat_number: 'ENG2002311',
    level: '500',
    phone_number: '+2348022623069',
  },
  {
    mat_number: 'ENG2002312',
    level: '500',
    phone_number: '+2349069524431',
  },
  {
    mat_number: 'ENG2002313',
    level: '500',
    phone_number: '+2347036872178',
  },
  {
    mat_number: 'ENG2002317',
    level: '500',
    phone_number: '+2349052431274',
  },
  {
    mat_number: 'ENG2002318',
    level: '500',
    phone_number: '+2348080282864',
  },
  {
    mat_number: 'ENG2002319',
    level: '500',
    phone_number: '+2349066212527',
  },
  {
    mat_number: 'ENG2002321',
    level: '500',
    phone_number: '+2347083040543',
  },
  {
    mat_number: 'ENG2002322',
    level: '500',
    phone_number: '+2349036529628',
  },
  {
    mat_number: 'ENG2002323',
    level: '500',
    phone_number: '+2348026428530',
  },
  {
    mat_number: 'ENG2002325',
    level: '500',
    phone_number: '+2349038409765',
  },
  {
    mat_number: 'ENG2002327',
    level: '500',
    phone_number: '+2349065117916',
  },
  {
    mat_number: 'ENG2002328',
    level: '500',
    phone_number: '+2348079215647',
  },
  {
    mat_number: 'ENG2002329',
    level: '500',
    phone_number: '+2349075963037',
  },
  {
    mat_number: 'ENG2002330',
    level: '500',
    phone_number: '+2348149401045',
  },
  {
    mat_number: 'ENG2002331',
    level: '500',
    phone_number: '+2349070972636',
  },
  {
    mat_number: 'ENG2002333',
    level: '500',
    phone_number: '+2348110202493',
  },
  {
    mat_number: 'ENG2002334',
    level: '500',
    phone_number: '+2348181617875',
  },
  {
    mat_number: 'ENG2002380',
    level: '500',
    phone_number: '+2348063948904',
  },
  {
    mat_number: 'ENG2002586',
    level: '500',
    phone_number: '+2348122004020',
  },
  {
    mat_number: 'ENG2002674',
    level: '500',
    phone_number: '+2349031141116',
  },
  {
    mat_number: 'ENG2006243',
    level: '500',
    phone_number: '+2348164873446',
  },
  {
    mat_number: 'ENG2006244',
    level: '500',
    phone_number: '+2348128727638',
  },
  {
    mat_number: 'ENG2006246',
    level: '500',
    phone_number: '+2348137310463',
  },
  {
    mat_number: 'ENG2006248',
    level: '500',
    phone_number: '+2348030627607',
  },
  {
    mat_number: 'ENG2006249',
    level: '500',
    phone_number: '+2349031631581',
  },
  {
    mat_number: 'ENG2006253',
    level: '500',
    phone_number: '+2348138814218',
  },
  {
    mat_number: 'ENG2006256',
    level: '500',
    phone_number: '+2349157309884',
  },
  {
    mat_number: 'ENG2006257',
    level: '500',
    phone_number: '+2349025406929',
  },
  {
    mat_number: 'ENG2006258',
    level: '500',
    phone_number: '+2349150360791',
  },
  {
    mat_number: 'ENG2006261',
    level: '500',
    phone_number: '+2348082049050',
  },
  {
    mat_number: 'ENG2006265',
    level: '500',
    phone_number: '+2348130105840',
  },
  {
    mat_number: 'ENG2006267',
    level: '500',
    phone_number: '+2348128280649',
  },
  {
    mat_number: 'ENG2006268',
    level: '500',
    phone_number: '+2348133861794',
  },
  {
    mat_number: 'ENG2006269',
    level: '500',
    phone_number: '+2349156117385',
  },
  {
    mat_number: 'ENG2006271',
    level: '500',
    phone_number: '+2348065339446',
  },
  {
    mat_number: 'ENG2006272',
    level: '500',
    phone_number: '+2348146914271',
  },
  {
    mat_number: 'ENG2006273',
    level: '500',
    phone_number: '+2348105383967',
  },
  {
    mat_number: 'ENG2006274',
    level: '500',
    phone_number: '+2348124493077',
  },
  {
    mat_number: 'ENG2006275',
    level: '500',
    phone_number: '+2347033168716',
  },
  {
    mat_number: 'ENG2006276',
    level: '500',
    phone_number: '+2348133228619',
  },
  {
    mat_number: 'ENG2006277',
    level: '500',
    phone_number: '+2348158157727',
  },
  {
    mat_number: 'ENG2006278',
    level: '500',
    phone_number: '+2349070130458',
  },
  {
    mat_number: 'ENG2006319',
    level: '500',
    phone_number: '+2348069321324',
  },
  {
    mat_number: 'ENG2008341',
    level: '500',
    phone_number: '+2348114050750',
  },
  {
    mat_number: 'ENG2008365',
    level: '500',
    phone_number: '+2348114871683',
  },
  {
    mat_number: 'ENG2008369',
    level: '500',
    phone_number: '+2349025756853',
  },
  {
    mat_number: 'ENG2009339',
    level: '500',
    phone_number: '+2349012973700',
  },
  {
    mat_number: 'ENG2009590',
    level: '500',
    phone_number: '+2349038204753',
  },
  {
    mat_number: 'ENG2009594',
    level: '500',
    phone_number: '+2348165823960',
  },
  {
    mat_number: 'ENG2009608',
    level: '500',
    phone_number: '+2348163571572',
  },
  {
    mat_number: 'ENG2009629',
    level: '500',
    phone_number: '+2348131196601',
  },
  {
    mat_number: 'ENG2010367',
    level: '500',
    phone_number: '+2348100246851',
  },
  {
    mat_number: 'ENG2010448',
    level: '500',
    phone_number: '+2348187040707',
  },
  {
    mat_number: 'ENG2010451',
    level: '500',
    phone_number: '+2348155830205',
  },
  {
    mat_number: 'ENG2010933',
    level: '500',
    phone_number: '+2348080029116',
  },
  {
    mat_number: 'ENG2102932',
    level: '500',
    phone_number: '+2349076522613',
  },
  {
    mat_number: 'ENG2102974',
    level: '500',
    phone_number: '+2349058436989',
  },
  {
    mat_number: 'ENG2102975',
    level: '500',
    phone_number: '+2347084031221',
  },
  {
    mat_number: 'ENG2102983',
    level: '500',
    phone_number: '+2349153552842',
  },
  {
    mat_number: 'ENG2106253',
    level: '500',
    phone_number: '+2348114501438',
  },
  {
    mat_number: 'ENG2106362',
    level: '500',
    phone_number: '+2348050417569',
  },
  {
    mat_number: 'ENG2106408',
    level: '500',
    phone_number: '+2347064230287',
  },
];

// Upload function
async function uploadStudents() {
  try {
    console.log('Starting students upload...');
    console.log(`Uploading ${studentsData.length} students...`);

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        students: studentsData,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorData}`);
    }

    const result = await response.json();
    console.log('Students uploaded successfully!');
    console.log('Response:', result);
  } catch (error) {
    console.error('Error uploading students:', error.message);
    process.exit(1);
  }
}

// Run the upload
uploadStudents();
