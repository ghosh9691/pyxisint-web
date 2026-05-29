/* Pyxis Tools — curated airport database for the Great Circle Mapper.
   Fields: [IATA, ICAO, Name, City, Country, lat, lon]
   ~160 major international + busy regional airports worldwide.
   Coordinates are approximate field reference points (decimal degrees). */
(function () {
  const A = [
    // North America
    ["ATL","KATL","Hartsfield–Jackson","Atlanta","US",33.6407,-84.4277],
    ["LAX","KLAX","Los Angeles Intl","Los Angeles","US",33.9416,-118.4085],
    ["ORD","KORD","O'Hare Intl","Chicago","US",41.9742,-87.9073],
    ["DFW","KDFW","Dallas/Fort Worth","Dallas","US",32.8998,-97.0403],
    ["DEN","KDEN","Denver Intl","Denver","US",39.8561,-104.6737],
    ["JFK","KJFK","John F. Kennedy Intl","New York","US",40.6413,-73.7781],
    ["SFO","KSFO","San Francisco Intl","San Francisco","US",37.6213,-122.3790],
    ["SEA","KSEA","Seattle–Tacoma","Seattle","US",47.4502,-122.3088],
    ["LAS","KLAS","Harry Reid Intl","Las Vegas","US",36.0840,-115.1537],
    ["MCO","KMCO","Orlando Intl","Orlando","US",28.4312,-81.3081],
    ["EWR","KEWR","Newark Liberty","Newark","US",40.6895,-74.1745],
    ["MIA","KMIA","Miami Intl","Miami","US",25.7959,-80.2870],
    ["BOS","KBOS","Logan Intl","Boston","US",42.3656,-71.0096],
    ["IAH","KIAH","George Bush Intercontinental","Houston","US",29.9902,-95.3368],
    ["PHX","KPHX","Sky Harbor","Phoenix","US",33.4342,-112.0116],
    ["IAD","KIAD","Washington Dulles","Washington","US",38.9531,-77.4565],
    ["DCA","KDCA","Reagan National","Washington","US",38.8512,-77.0402],
    ["LGA","KLGA","LaGuardia","New York","US",40.7769,-73.8740],
    ["MSP","KMSP","Minneapolis–St. Paul","Minneapolis","US",44.8848,-93.2223],
    ["DTW","KDTW","Detroit Metro","Detroit","US",42.2162,-83.3554],
    ["PHL","KPHL","Philadelphia Intl","Philadelphia","US",39.8744,-75.2424],
    ["SLC","KSLC","Salt Lake City","Salt Lake City","US",40.7884,-111.9778],
    ["SAN","KSAN","San Diego Intl","San Diego","US",32.7338,-117.1933],
    ["HNL","PHNL","Daniel K. Inouye","Honolulu","US",21.3245,-157.9251],
    ["ANC","PANC","Ted Stevens Anchorage","Anchorage","US",61.1743,-149.9963],
    ["YYZ","CYYZ","Toronto Pearson","Toronto","CA",43.6777,-79.6248],
    ["YVR","CYVR","Vancouver Intl","Vancouver","CA",49.1967,-123.1815],
    ["YUL","CYUL","Montréal–Trudeau","Montreal","CA",45.4706,-73.7408],
    ["YYC","CYYC","Calgary Intl","Calgary","CA",51.1314,-114.0103],
    ["MEX","MMMX","Benito Juárez","Mexico City","MX",19.4363,-99.0721],
    ["CUN","MMUN","Cancún Intl","Cancún","MX",21.0365,-86.8771],
    // South America
    ["GRU","SBGR","São Paulo–Guarulhos","São Paulo","BR",-23.4356,-46.4731],
    ["GIG","SBGL","Rio de Janeiro–Galeão","Rio de Janeiro","BR",-22.8100,-43.2506],
    ["BOG","SKBO","El Dorado","Bogotá","CO",4.7016,-74.1469],
    ["EZE","SAEZ","Ministro Pistarini","Buenos Aires","AR",-34.8222,-58.5358],
    ["SCL","SCEL","Arturo Merino Benítez","Santiago","CL",-33.3930,-70.7858],
    ["LIM","SPJC","Jorge Chávez","Lima","PE",-12.0219,-77.1143],
    ["PTY","MPTO","Tocumen Intl","Panama City","PA",9.0714,-79.3835],
    // Europe
    ["LHR","EGLL","Heathrow","London","GB",51.4700,-0.4543],
    ["LGW","EGKK","Gatwick","London","GB",51.1537,-0.1821],
    ["CDG","LFPG","Charles de Gaulle","Paris","FR",49.0097,2.5479],
    ["AMS","EHAM","Schiphol","Amsterdam","NL",52.3105,4.7683],
    ["FRA","EDDF","Frankfurt Main","Frankfurt","DE",50.0379,8.5622],
    ["MUC","EDDM","Munich","Munich","DE",48.3538,11.7861],
    ["MAD","LEMD","Adolfo Suárez Barajas","Madrid","ES",40.4983,-3.5676],
    ["BCN","LEBL","Barcelona–El Prat","Barcelona","ES",41.2974,2.0833],
    ["FCO","LIRF","Leonardo da Vinci","Rome","IT",41.8003,12.2389],
    ["MXP","LIMC","Malpensa","Milan","IT",45.6306,8.7281],
    ["ZRH","LSZH","Zürich","Zürich","CH",47.4647,8.5492],
    ["VIE","LOWW","Vienna Intl","Vienna","AT",48.1103,16.5697],
    ["CPH","EKCH","Copenhagen","Copenhagen","DK",55.6180,12.6508],
    ["ARN","ESSA","Stockholm Arlanda","Stockholm","SE",59.6498,17.9239],
    ["OSL","ENGM","Oslo Gardermoen","Oslo","NO",60.1976,11.1004],
    ["HEL","EFHK","Helsinki–Vantaa","Helsinki","FI",60.3172,24.9633],
    ["DUB","EIDW","Dublin","Dublin","IE",53.4213,-6.2701],
    ["BRU","EBBR","Brussels","Brussels","BE",50.9014,4.4844],
    ["LIS","LPPT","Humberto Delgado","Lisbon","PT",38.7742,-9.1342],
    ["ATH","LGAV","Athens Intl","Athens","GR",37.9364,23.9445],
    ["IST","LTFM","Istanbul","Istanbul","TR",41.2753,28.7519],
    ["SAW","LTFJ","Sabiha Gökçen","Istanbul","TR",40.8986,29.3092],
    ["SVO","UUEE","Sheremetyevo","Moscow","RU",55.9726,37.4146],
    ["DME","UUDD","Domodedovo","Moscow","RU",55.4088,37.9063],
    ["WAW","EPWA","Chopin","Warsaw","PL",52.1657,20.9671],
    ["PRG","LKPR","Václav Havel","Prague","CZ",50.1008,14.2600],
    ["MAN","EGCC","Manchester","Manchester","GB",53.3650,-2.2728],
    ["EDI","EGPH","Edinburgh","Edinburgh","GB",55.9500,-3.3725],
    ["GVA","LSGG","Geneva","Geneva","CH",46.2381,6.1090],
    ["KEF","BIKF","Keflavík","Reykjavík","IS",63.9850,-22.6056],
    // Middle East
    ["DXB","OMDB","Dubai Intl","Dubai","AE",25.2532,55.3657],
    ["AUH","OMAA","Abu Dhabi Intl","Abu Dhabi","AE",24.4330,54.6511],
    ["DOH","OTHH","Hamad Intl","Doha","QA",25.2731,51.6081],
    ["JED","OEJN","King Abdulaziz","Jeddah","SA",21.6796,39.1565],
    ["RUH","OERK","King Khalid","Riyadh","SA",24.9576,46.6988],
    ["TLV","LLBG","Ben Gurion","Tel Aviv","IL",32.0114,34.8867],
    ["AMM","OJAI","Queen Alia","Amman","JO",31.7226,35.9932],
    ["KWI","OKBK","Kuwait Intl","Kuwait City","KW",29.2266,47.9689],
    ["BAH","OBBI","Bahrain Intl","Manama","BH",26.2708,50.6336],
    ["MCT","OOMS","Muscat Intl","Muscat","OM",23.5933,58.2844],
    ["IKA","OIIE","Imam Khomeini","Tehran","IR",35.4161,51.1522],
    // Africa
    ["CAI","HECA","Cairo Intl","Cairo","EG",30.1219,31.4056],
    ["JNB","FAOR","O. R. Tambo","Johannesburg","ZA",-26.1392,28.2460],
    ["CPT","FACT","Cape Town Intl","Cape Town","ZA",-33.9690,18.5972],
    ["ADD","HAAB","Bole Intl","Addis Ababa","ET",8.9779,38.7993],
    ["NBO","HKJK","Jomo Kenyatta","Nairobi","KE",-1.3192,36.9278],
    ["LOS","DNMM","Murtala Muhammed","Lagos","NG",6.5774,3.3212],
    ["CMN","GMMN","Mohammed V","Casablanca","MA",33.3675,-7.5899],
    ["ALG","DAAG","Houari Boumediene","Algiers","DZ",36.6910,3.2154],
    ["DKR","GOBD","Blaise Diagne","Dakar","SN",14.6710,-17.0732],
    ["ACC","DGAA","Kotoka Intl","Accra","GH",5.6052,-0.1668],
    // South & Central Asia
    ["DEL","VIDP","Indira Gandhi","Delhi","IN",28.5562,77.1000],
    ["BOM","VABB","Chhatrapati Shivaji","Mumbai","IN",19.0896,72.8656],
    ["BLR","VOBL","Kempegowda","Bengaluru","IN",13.1979,77.7063],
    ["MAA","VOMM","Chennai Intl","Chennai","IN",12.9941,80.1709],
    ["HYD","VOHS","Rajiv Gandhi","Hyderabad","IN",17.2403,78.4294],
    ["CCU","VECC","Netaji Subhas","Kolkata","IN",22.6547,88.4467],
    ["KHI","OPKC","Jinnah Intl","Karachi","PK",24.9065,67.1608],
    ["ISB","OPIS","Islamabad Intl","Islamabad","PK",33.5491,72.8256],
    ["CMB","VCBI","Bandaranaike","Colombo","LK",7.1808,79.8841],
    ["DAC","VGHS","Hazrat Shahjalal","Dhaka","BD",23.8433,90.3978],
    ["KTM","VNKT","Tribhuvan","Kathmandu","NP",27.6966,85.3591],
    // East & Southeast Asia
    ["HND","RJTT","Haneda","Tokyo","JP",35.5494,139.7798],
    ["NRT","RJAA","Narita","Tokyo","JP",35.7720,140.3929],
    ["KIX","RJBB","Kansai Intl","Osaka","JP",34.4347,135.2440],
    ["ICN","RKSI","Incheon Intl","Seoul","KR",37.4602,126.4407],
    ["GMP","RKSS","Gimpo Intl","Seoul","KR",37.5583,126.7906],
    ["PEK","ZBAA","Beijing Capital","Beijing","CN",40.0799,116.6031],
    ["PKX","ZBAD","Beijing Daxing","Beijing","CN",39.5098,116.4109],
    ["PVG","ZSPD","Shanghai Pudong","Shanghai","CN",31.1443,121.8083],
    ["SHA","ZSSS","Shanghai Hongqiao","Shanghai","CN",31.1979,121.3363],
    ["CAN","ZGGG","Guangzhou Baiyun","Guangzhou","CN",23.3924,113.2988],
    ["SZX","ZGSZ","Shenzhen Bao'an","Shenzhen","CN",22.6393,113.8108],
    ["CTU","ZUUU","Chengdu Shuangliu","Chengdu","CN",30.5785,103.9471],
    ["HKG","VHHH","Hong Kong Intl","Hong Kong","HK",22.3080,113.9185],
    ["TPE","RCTP","Taoyuan","Taipei","TW",25.0777,121.2328],
    ["SIN","WSSS","Changi","Singapore","SG",1.3644,103.9915],
    ["KUL","WMKK","Kuala Lumpur Intl","Kuala Lumpur","MY",2.7456,101.7099],
    ["BKK","VTBS","Suvarnabhumi","Bangkok","TH",13.6900,100.7501],
    ["DMK","VTBD","Don Mueang","Bangkok","TH",13.9126,100.6068],
    ["CGK","WIII","Soekarno–Hatta","Jakarta","ID",-6.1256,106.6559],
    ["DPS","WADD","Ngurah Rai","Denpasar","ID",-8.7482,115.1672],
    ["MNL","RPLL","Ninoy Aquino","Manila","PH",14.5086,121.0197],
    ["SGN","VVTS","Tan Son Nhat","Ho Chi Minh City","VN",10.8188,106.6520],
    ["HAN","VVNB","Noi Bai","Hanoi","VN",21.2212,105.8072],
    // Oceania
    ["SYD","YSSY","Kingsford Smith","Sydney","AU",-33.9461,151.1772],
    ["MEL","YMML","Melbourne","Melbourne","AU",-37.6690,144.8410],
    ["BNE","YBBN","Brisbane","Brisbane","AU",-27.3842,153.1175],
    ["PER","YPPH","Perth","Perth","AU",-31.9385,115.9672],
    ["ADL","YPAD","Adelaide","Adelaide","AU",-34.9450,138.5306],
    ["AKL","NZAA","Auckland","Auckland","NZ",-37.0082,174.7850],
    ["CHC","NZCH","Christchurch","Christchurch","NZ",-43.4894,172.5322],
    ["NAN","NFFN","Nadi Intl","Nadi","FJ",-17.7554,177.4434],
    ["GUM","PGUM","Antonio B. Won Pat","Guam","GU",13.4834,144.7960]
  ];

  const byIata = {};
  const byIcao = {};
  const list = A.map(function (r) {
    const o = { iata: r[0], icao: r[1], name: r[2], city: r[3], country: r[4], lat: r[5], lon: r[6] };
    byIata[o.iata] = o;
    byIcao[o.icao] = o;
    return o;
  });

  window.AIRPORTS = {
    list: list,
    /* Look up by IATA (3-letter) or ICAO (4-letter), case-insensitive. */
    lookup: function (code) {
      if (!code) return null;
      const c = String(code).trim().toUpperCase();
      return byIata[c] || byIcao[c] || null;
    }
  };
})();
