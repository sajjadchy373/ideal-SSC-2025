// nav bar sec


function openNav(){
  document.getElementById("sidebar").classList.add("active");
  document.getElementById("overlay").classList.add("active");
}

function closeNav(){
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}


// student sec
const b ="Business Studies";
  const s ="Science";
  const h ="Humanities";

const cgc ="Cox's Bazar Government College";
const ndc ="Notre Dame College, Dhaka";
const rgc ="Ramu Government College";
const ccc ="Cox's Bazar City College";

const o = "(onabashik)";
const a =" (abashik)";




  const cardsData = [
    {  dn: "01",id:"আবু নাছের", oneImage: "friend img one/abu naser.jpg",name: "ABU NASER", mbNo:"01827580783" ,crColl:"Govt. Shaheed Suhrawardy College,Dhaka", crGr:s ,prGr:s,gpa:"5.00",feacUl:"https://www.facebook.com/abunaser01122007",rsalImg:"Result img/19.pdf",dk:a},
    {  dn: "02",id:"আশফাকুল আলম তাপহিম", oneImage: "friend img one/tfhim.jpg",name: "ASHFAKUL ALAM TAFHIM", mbNo:"01613748084" ,crColl:ndc, crGr:b ,prGr:b,gpa:"5.00",feacUl:"https://www.facebook.com/ashfakul.alam.tafim",rsalImg:"Result img/333.pdf",dk:a},
    {  dn: "03",id:"আজমাইন আওসাফ হামিম", oneImage: "friend img one/aj aus hamim.jpg",name: "AJMAIN AWSAF HAMIM(চাইর ব্যাটারি,চশমা)", mbNo:"01690178250" ,crColl:"Chittagong Government Model School & College,Chattogram", crGr:s ,prGr:s,gpa:"5.00",feacUl:"https://www.facebook.com/Ajmain.Hamim.ee",rsalImg:"Result img/21.pdf",dk:`(last 10 mounth abashik)`},
    {  dn: "04",id:"রাইসুর আহমেদ রাফি", oneImage: "friend img one/rafi.jpg",name: "RAISUL AHMMED RAFI", mbNo:"01822075446" ,crColl:"Government College of Commerce, Chattogram", crGr:b ,prGr:b,gpa:"4.72",feacUl:"https://www.facebook.com/rafi.ahmed.891226",rsalImg:"Result img/554.pdf",dk:a},
    {  dn: "05",id:"হাসিবুল হাসান আনান", oneImage: "friend img one/anan.jpg",name: "HASSIBUL HOSSIN ANAN", mbNo:"01833275220" ,crColl:"Milestone College", crGr:s ,prGr:s,gpa:"5.00",feacUl:"https://www.facebook.com/profile.php?id=61584562113773",rsalImg:"Result img/20.pdf",dk:a},
    {  dn: "06",id:"আবদুল হামিদ বাবু", oneImage: "friend img one/babo1.jpg",name: "MD. ABDUL HAMID BABU", mbNo:"01896028803,01852521257" ,crColl:"Bhawal Badre Alam Government College,Gazipul", crGr:s ,prGr:s,gpa:"4.94",feacUl:"https://www.facebook.com/profile.php?id=61579621607706",rsalImg:"Result img/4324.pdf",dk:a},
    {  dn: "07",id:"তৌহিদুল ইসলাম ইমন", oneImage: "friend img one/emon.jpg",name: "MD TOWHIDUL ISLAM", mbNo:"01894415001" ,crColl:"Government City College, Chattogram", crGr:b ,prGr:b,gpa:"4.72",feacUl:"https://www.facebook.com/profile.php?id=61583995178075",rsalImg:"Result img/320.pdf",dk:o},
    {  dn: "08",id:"আনাস বিন আবছার", oneImage: "friend img one/anas bin abser.jpg",name: "ANAS BIN ABSAR", mbNo:"01817873695" ,crColl:"Chattogram Cantonment Public College,Chattogram", crGr:b ,prGr:b,gpa:"4.50",feacUl:"https://www.facebook.com/ar.anas.244589",rsalImg:"Result img/352.pdf",dk:a},
    {  dn: "09",id:"রাকিবুর হাসান রাকিব", oneImage: "friend img one/rakib.jpg",name: "RAKIBUL HASAN RAKIB", mbNo:"01894415046" ,crColl:cgc, crGr:b ,prGr:b,gpa:"4.67",feacUl:"https://www.facebook.com/srl.rakib.2025/friends_mutual",rsalImg:"Result img/332.pdf",dk:a},
    {  dn: "10",id:"মো.সাজ্জাদ", oneImage: "friend img one/sajjad.jpeg",name: "MD SAJJAD", mbNo:"01872340134" ,crColl:cgc, crGr:b ,prGr:b,gpa:"4.83",feacUl:"https://www.facebook.com/mohammad.sajjad.271125/friends",rsalImg:"Result img/330.pdf",dk:o},
    {  dn: "11",id:"ইউনুস বাঙালি", oneImage: "friend img one/younous1.jpg",name: "MOHAMMAD YOUNOS", mbNo:"01886090577" ,crColl:ccc, crGr:h ,prGr:h,gpa:"4.17",feacUl:"https://www.facebook.com/profile.php?id=61584699957875",rsalImg:"Result img/433.pdf",dk:a},
    {  dn: "12",id:"ইতমাম রাফিদ ", oneImage: "friend img one/rafid.jpg",name: "ETMAM RAFID", mbNo:"01839036373" ,crColl:ccc, crGr:s ,prGr:s,gpa:"4.56",feacUl:"https://www.facebook.com/etmamrafid.cox",rsalImg:"Result img/4318.pdf",dk:o},
    {  dn: "13",id:"সাজ্জাদ হোসাইন", oneImage: "friend img one/sazzad.jpeg",name: "SAZZAD HOSSEN", mbNo:"01806268152" ,crColl:"Chittagong College,Chattogram ", crGr:h ,prGr:s,gpa:"4.94",feacUl:"https://www.facebook.com/sazzad.hossen.875531",rsalImg:"Result img/4326.pdf",dk:a},
    {  dn: "14",id:"মাসুদুর হাবিব ইয়াছিন", oneImage: "friend img one/eyasin1.jpg",name: "MOHAMMAD MASUDUL HABIB EYASIN", mbNo:"01644725422" ,crColl:"Chattogram Polytechnic Institute.Day Shift", crGr:"Electrical Engineering" ,prGr:s,gpa:"4.72",feacUl:"https://www.facebook.com/masudul.habib.eyasin",rsalImg:"Result img/4327.pdf",dk:a},
    {  dn: "15",id:"নুরুল ফয়সাল রানা", oneImage: "friend img one/rana.jpg",name: "NURUL FAISAL RANA", mbNo:"01890658468" ,crColl:ndc, crGr:h ,prGr:h,gpa:"4.56",feacUl:"https://www.facebook.com/profile.php?id=100077173407392",rsalImg:"Result img/425.pdf",dk:a},
    {  dn: "16",id:"মোহাইমিন নেওয়াজ রাহাত", oneImage: "friend img one/mo rahat.jpeg",name: "MOHAIMEN NIZE RAHAT", mbNo:"01865244742" ,crColl:"Government Bangla College,Dhaka", crGr:b ,prGr:b,gpa:"4.83",feacUl:"https://www.facebook.com/niyaz.rahat",rsalImg:"Result img/329.pdf",dk:a},
    {  dn: "17",id:"আবিদুর রহমান আবিদ", oneImage: "friend img one/abid.jpg",name: "ABIDUR RAHMAN ABID", mbNo:"01735787733" ,crColl:cgc, crGr:b ,prGr:b,gpa:"4.89",feacUl:"https://www.facebook.com/abidur.rahman.994065",rsalImg:"Result img/321.pdf",dk:`(last 10 mounth abashik)`},
    {  dn: "18",id:"মহিতুল ইসলাম আবির", oneImage: "friend img one/mo abir.jpeg",name: "MOHITUL ISLAM ABIR", mbNo:"01831720269" ,crColl:"Bakalia Government College,Chattogram", crGr:b ,prGr:b,gpa:"4.67",feacUl:"https://www.facebook.com/profile.php?id=100092248513853",rsalImg:"Result img/323.pdf",dk:o},
    {  dn: "19",id:"সামিল ইসলাম সাইফ ", oneImage: "friend img one/samil.jpg",name: "SAMIL ISLAM SAIF", mbNo:"01843102759" ,crColl:cgc, crGr:b,prGr:b,gpa:"4.28",feacUl:"https://www.facebook.com/samil.islam.577232",rsalImg:"Result img/343.pdf",dk:a},
    {  dn: "20",id:"রিদুয়ানুল ইসলাম হ্রদয় ", oneImage: "friend img one/redunul is.jpg",name: "REDUANUL ISLAM RIDOY", mbNo:"01894415037" ,crColl:"Govt. Shaheed Suhrawardy College, Dhaka", crGr:h ,prGr:b,gpa:"4.28",feacUl:"https://www.facebook.com/profile.php?id=100063760262982",rsalImg:"Result img/327.pdf",dk:o},
    {  dn: "21",id:"মুনতাসিরুর মুকতাদির", oneImage: "friend img one/montasir.jpg",name: "MONTASIRUL MUKTADIR", mbNo:"01882331111" ,crColl:cgc, crGr:h ,prGr:s,gpa:"4.89",feacUl:"https://www.facebook.com/monir.gaming.71",rsalImg:"Result img/4322.pdf",dk:a},
    {  dn: "22",id:"আল আমিন ", oneImage: "friend img one/al-amin.jpg",name: "MOHAMMAD AL-AMIN", mbNo:"01632714826" ,crColl:cgc, crGr:b ,prGr:b,gpa:"4.78",feacUl:"https://www.facebook.com/profile.php?id=61579756881326",rsalImg:"Result img/322.pdf",dk:o},
    {  dn: "23",id:"ইমরুল কায়েস জয়", oneImage: "friend img one/imrul.jpg",name: "IMRUL KAIES JOY", mbNo:"01317691638" ,crColl:rgc, crGr:b ,prGr:b,gpa:"4.22",feacUl:"https://www.facebook.com/profile.php?id=61577695636195",rsalImg:"Result img/340.pdf",dk:a},
    {  dn: "24",id:"রিদুয়ানুর হক ", oneImage: "friend img one/ridunwl hoq1.jpg",name: "MD. RIDUANUL HOQUE", mbNo:"01709334769(ma),01885283984" ,crColl:cgc, crGr:b ,prGr:b,gpa:"4.72",feacUl:"https://www.facebook.com/profile.php?id=61581578504490",rsalImg:"Result img/353.pdf",dk:a},
    {  dn: "25",id:"রিসাত হোসেন", oneImage: "friend img one/rishat.jpg",name: "RISHAT HOSSEN", mbNo:"01840280282" ,crColl:rgc, crGr:h ,prGr:h,gpa:"4.50",feacUl:"https://www.facebook.com/profile.php?id=61578637574700",rsalImg:"Result img/426.pdf",dk:`(last 6 mounth abashik)`},
    {  dn: "26",id:"নাছির উদ্দিন ", oneImage: "friend img one/nasir.jpg",name: "NASIR UDDIN", mbNo:"01873745792" ,crColl:ccc, crGr:h ,prGr:h,gpa:"3.50",feacUl:"https://www.facebook.com/nachira.uddina.351680",rsalImg:"Result img/429.pdf",dk:o},
    {  dn: "27",id:"মো.সায়েম", oneImage: "friend img one/sayem2.jpg",name: "MOHAMMAD SAYEM", mbNo:"01629005290" ,crColl:"Probasi College", crGr:"Moeny Earn" ,prGr:h,gpa:"4.00",feacUl:"http://facebook.com/profile.php?id=61561312382845",rsalImg:"Result img/430.pdf",dk:o},
    {  dn: "28",id:"সায়েম সোবহান তামিম", oneImage: "friend img one/tamim.jpg",name: "SAYEM SUBHAN TAMIM", mbNo:"01894599537" ,crColl:rgc, crGr:b ,prGr:b,gpa:"4.00",feacUl:"https://www.facebook.com/saim.sobhan.tamim",rsalImg:"Result img/336.pdf",dk:`(last 16 mounth abashik)`},
    {  dn: "29",id:"সাদনান ইসলাম সানবিন", oneImage: "friend img one/sadnan.jpg",name: "SADNAN ISLAM SANBIM", mbNo:"01700876797" ,crColl:"Chittagong Government Model School & College,Chattogram", crGr:h ,prGr:s,gpa:"4.56",feacUl:"https://www.facebook.com/sadnan.islam.29/friends_mutual",rsalImg:"Result img/4325.pdf",dk:`(last 5 mounth abashik)`},
    {  dn: "30",id:"মিনহাজুর রহমান তৌহিদ ", oneImage: "friend img one/tawhidmin.jpg",name: "MINHAZUR RAHMAN TAWHID", mbNo:"01870806991" ,crColl:"Probasi College", crGr:"Moeny Earn" ,prGr:h,gpa:"3.89",feacUl:"",rsalImg:"Result img/428.pdf",dk:o},
    {  dn: "31",id:"সানজিদুল ইসলাম ", oneImage: "friend img one/shanjid.jpg",name: "SHANJIDUL ISLAM", mbNo:"01848496705" ,crColl:ndc, crGr:b ,prGr:b,gpa:"4.89",feacUl:"https://www.facebook.com/profile.php?id=61578358404355",rsalImg:"Result img/317.pdf",dk:a},
    {  dn: "32",id:"উসমান গণি ", oneImage: "friend img one/osman.jpg",name: "MD. OSMAN GONIE", mbNo:"01894415028,01300741402" ,crColl:"Cox's Bazar Polytechnic Institute.Morning Shift", crGr:"Civil Engineering" ,prGr:b,gpa:"4.72",feacUl:"https://www.facebook.com/profile.php?id=61581165890094",rsalImg:"Result img/337.pdf",dk:o},
    {  dn: "33",id:"মিজবাউর রহমান আকিব", oneImage: "friend img one/mijba.jpg",name: "MISBAHUR RAHMAN AKIB", mbNo:"" ,crColl:"", crGr:h ,prGr:h,gpa:"3.50",feacUl:"https://www.facebook.com/safi.alam.607856",rsalImg:"Result img/427.pdf",dk:o},
    {  dn: "34",id:"সাইফুল ইসলাম সাইমুন", oneImage: "friend img one/siful.jpg",name: "SAIFUL ISLAM SYMON", mbNo:"01826599695" ,crColl:cgc, crGr:b ,prGr:b,gpa:"4.56",feacUl:"https://www.facebook.com/si.saiful.947010",rsalImg:"Result img/326.pdf",dk:o},
    {  dn: "35",id:"আনাস বিন হোসাইন ", oneImage: "friend img one/anas bin hossin.jpg",name: "ANAS BIN HOSSAIN", mbNo:"01894415034" ,crColl:rgc, crGr:b,prGr:b,gpa:"3.44",feacUl:"https://www.facebook.com/profile.php?id=61581208207834",rsalImg:"Result img/338.pdf",dk:o},
    {  dn: "36",id:"মো.হোসাইন ", oneImage: "friend img one/hossin.jpg",name: "MOHAMMAD HOSSAIN", mbNo:"01613309176" ,crColl:cgc, crGr:h ,prGr:s,gpa:"4.22",feacUl:"https://www.facebook.com/md.hossain.175113",rsalImg:"Result img/4323.pdf",dk:`(last 6 mounth abashik)`},
    {  dn: "37",id:"আবু বক্কর ছিদ্দিক অভি ", oneImage: "friend img one/ovi.jpg",name: "ABU BAKKAR SIDDIK OVI", mbNo:"01307897342 " ,crColl:rgc, crGr:b ,prGr:b,gpa:"3.78",feacUl:"https://www.facebook.com/profile.php?id=61577375153240",rsalImg:"Result img/324.pdf",dk:a},
    {  dn: "38",id:"এমরানুুর ইসলাম", oneImage: "friend img one/amran.jpg",name: "AMRANUL ISLAM", mbNo:"01792948513 " ,crColl:"Khulna Polytechnic Institute.Day Shift", crGr:"Computer Engineering" ,prGr:b,gpa:"4.17",feacUl:"https://www.facebook.com/md.amran.king.401030",rsalImg:"Result img/351.pdf",dk:a},
    {  dn: "39",id:"শহিদু উল্লাহ ", oneImage: "friend img one/shohid.jpg",name: "SHAHID ULLAH", mbNo:"01873824446" ,crColl:"Ideal School & College, Motijheel, Dhaka", crGr:b ,prGr:b,gpa:"4.28",feacUl:"https://www.facebook.com/sohid.ullah.817647",rsalImg:"Result img/355.pdf",dk:a},
    {  dn: "40",id:"আরিফ উল্লাহ", oneImage: "friend img one/alif.jpg",name: "ARIF ULLAH", mbNo:"01602007935" ,crColl:rgc, crGr:b ,prGr:b,gpa:"4.22",feacUl:"https://www.facebook.com/ariful.islam.913526",rsalImg:"Result img/345.pdf",dk:a},
    {  dn: "41",id:"আসনিক সাইফ রউফ", oneImage: "friend img one/rauf.jpg",name: "ASNIK SAYED RAUF", mbNo:"01612917223(baba),01627499023" ,crColl:"Cumilla Polytechnic Institute.Morning Shift", crGr:"Civil Engineering" ,prGr:b,gpa:"4.06",feacUl:"",rsalImg:"Result img/341.pdf",dk:a},
    {  dn: "42",id:"মাহফুজুল করিম সিফাত", oneImage: "friend img one/shifat2.jpg",name: "MAHAFUZ KARIM SIFAT", mbNo:"01305066632" ,crColl:rgc, crGr:b ,prGr:b,gpa:"4.22",feacUl:"https://www.facebook.com/mks.mahafuz.karim.sifat",rsalImg:"Result img/331.pdf",dk:a},
    {  dn: "43",id:"রবিউল করিম সোহাগ", oneImage: "friend img one/shohag.jpg",name: "ROBIUL KARIM SHOHAG", mbNo:"01861578682" ,crColl:cgc, crGr:b ,prGr:b,gpa:"4.28",feacUl:"https://www.facebook.com/profile.php?id=61580012685371",rsalImg:"Result img/349.pdf",dk:o},
    {  dn: "44",id:"তারেক হোসেন", oneImage: "friend img one/tarek.jpg",name: "TAREK HOSSEN", mbNo:"01890658224" ,crColl:rgc, crGr:b ,prGr:b,gpa:"4.06",feacUl:"https://www.facebook.com/tarek.hosen.tarek.2024",rsalImg:"Result img/350.pdf",dk:o},
    {  dn: "45",id:"আবরার যাওয়াদ জারিফ", oneImage: "friend img one/abrar.jpg",name: "ABRAR ZAWAD ZARIF", mbNo:"01760193378" ,crColl:"Govt Bangla College,Mirpur,Dhaka ", crGr:h ,prGr:h,gpa:"4.06",feacUl:"https://www.facebook.com/profile.php?id=61577795380203",rsalImg:"Result img/424.pdf",dk:a},
    {  dn: "46",id:"ফাহিম মিল্লাত", oneImage: "friend img one/fahim billat.jpg",name:"FAHIM MILLAT", mbNo:"01759036250" ,crColl:rgc, crGr:b ,prGr:b,gpa:"3.78",feacUl:"https://www.facebook.com/md.fahim.360473/friends_mutual",rsalImg:"Result img/347.png",dk:o},
    {  dn: "47",id:"সালমান বিন কলিম", oneImage: "friend img one/salman.jpg",name: "SALMAN BIN KALIM", mbNo:"01625167741" ,crColl:cgc, crGr:b ,prGr:b,gpa:"4.22",feacUl:"https://www.facebook.com/jamal.hele",rsalImg:"Result img/346.pdf",dk:a},
    {  dn: "48",id:"সাইদুল হক", oneImage: "friend img one/saidul.jpg",name: "SAIDUL HOQUE", mbNo:"01872342398" ,crColl:rgc, crGr:b ,prGr:b,gpa:"4.00",feacUl:"https://www.facebook.com/saidol.khan.2024",rsalImg:"Result img/342.pdf",dk:a},
    {  dn: "49",id:"মোবারক হোসেন", oneImage: "friend img one/mobrok.jpg",name: "MUBARAK HOSEN", mbNo:"01894415049" ,crColl:cgc, crGr:b ,prGr:b,gpa:"4.61",feacUl:"",rsalImg:"Result img/328.pdf",dk:`(last 10 mounth abashik)`},
    {  dn: "50",id:"ইয়াছিন আরফাত জনি", oneImage: "friend img one/joni.jpeg",name: "YEASIN FARHAD JONI", mbNo:"01894415013" ,crColl:"Cox's Bazar Uttaran College", crGr:h ,prGr:b,gpa:"3.39",feacUl:"https://www.facebook.com/profile.php?id=61576061836774",rsalImg:"Result img/432.pdf",dk:o},
    {  dn: "51",id:"মো.কায়সার", oneImage: "friend img one/kaisar.jpg",name: "MOHAMMAD KAISAR", mbNo:"01848336319" ,crColl:cgc, crGr:b ,prGr:b,gpa:"4.33",feacUl:"https://www.facebook.com/profile.php?id=100080252992079&sk=friends_mutual",rsalImg:"Result img/344.pdf",dk:a},
    {  dn: "52",id:"তুহিনুল কবির সাহাদ", oneImage: "friend img one/টুহিন.jpg",name: "TUHINUL KARIM SAHAD", mbNo:"01873217206" ,crColl:cgc, crGr:b ,prGr:b,gpa:"4.50",feacUl:"https://www.facebook.com/profile.php?id=61579043284775",rsalImg:"Result img/325.pdf",dk:o},
    {  dn: "53",id:"মহি উদ্দিন", oneImage: "friend img one/mohi.jpg",name: "MD MOHI UDDIN", mbNo:"01327154208" ,crColl:rgc, crGr:b ,prGr:b,gpa:"4.17",feacUl:"https://www.facebook.com/md.mohi.uddin.419988",rsalImg:"Result img/348.pdf",dk:o},
    {  dn: "54",id:"রিয়াজ উদ্দিন", oneImage: "friend img one/riaj.jpg",name: "RIAJ UDDIN RIAZ", mbNo:"01894415032" ,crColl:ccc, crGr:b ,prGr:b,gpa:"3.39",feacUl:"https://www.facebook.com/riaz.uddin.590321",rsalImg:"Result img/339.pdf",dk:o},
    {  dn: "56",id:"মো.ফাহিম", oneImage: "friend img one/fahim.jpg",name: "MD. FAHIM", mbNo:"01338711237" ,crColl:rgc, crGr:b ,prGr:b,gpa:"3.83",feacUl:"https://www.facebook.com/profile.php?id=61576348133332",rsalImg:"Result img/334.pdf",dk:o},
    {  dn: "57",id:"আশেক উল্লাহ", oneImage: "friend img one/asik.jpg",name: "ASHAK ULLAH", mbNo:"01972399289" ,crColl:ccc, crGr:h ,prGr:h,gpa:"3.67",feacUl:"https://www.facebook.com/profile.php?id=61575995111672",rsalImg:"Result img/431.pdf",dk:a},
    {  dn: "58",id:"মো. আকিব", oneImage: "friend img one/akib.jpg",name: "IFTEKAR UDDIN AKIB", mbNo:"01860963234" ,crColl:rgc, crGr:b ,prGr:b,gpa:"3.56",feacUl:"https://www.facebook.com/mohammad.akib.681644",rsalImg:"Result img/335.pdf",dk:`(last 16 mounth abashik)`},
    {  dn: "59",id:"ফাহিম রেজা", oneImage: "friend img one/fahim raja.jpg",name: "FAHIM REJA", mbNo:"01851730680" ,crColl:"Eidgah Roshid Ahmed College", crGr:b ,prGr:b,gpa:"3.78",feacUl:"https://www.facebook.com/profile.php?id=100090547991915",rsalImg:"Result img/318.pdf",dk:a},
    {  dn: "60",id:"আজাহাদ হোসাইন ইমন", oneImage: "friend img one/azahad2.jpg",name: "AZAHAD HASAN EMON", mbNo:"01880028876" ,crColl:ndc, crGr:b ,prGr:b,gpa:"5.00",feacUl:"https://www.facebook.com/azahadx.emon",rsalImg:"Result img/319.pdf",dk:a},
    {  dn: "61",id:"তানবির তাহছিন তন্ময়", oneImage: "friend img one/tomoi.jpg",name: "TANVIR TAHASIN TONMOY", mbNo:"01600839621" ,crColl:"Islamia College, Chattogram", crGr:h ,prGr:h,gpa:"3.78",feacUl:"https://www.facebook.com/tanmoy.cox",rsalImg:"Result img/434.pdf",dk:`(stating class 10 abashik)`},
    {  dn: "61",id:"আতিক সাহেলিয়া তানবির", oneImage: "friend img one/tan.jpg",name: "Atik Shariya Tanvir ", mbNo:"01600839621" ,crColl:"SSC দেই নাই", crGr:"SSC দেই নাই" ,prGr:b,gpa:"SSC দেই নাই",feacUl:"https://www.facebook.com/atik.shariya.tanvir.2025",rsalImg:"",dk:o},
    {  dn: "62",id:"মো.রিয়াদ", oneImage: "friend img one/riad.jpg",name: "Mohammad Riad", mbNo:"" ,crColl:"বিবাহিত", crGr:"SSC দেই নাই" ,prGr:b,gpa:"SSC দেই নাই",feacUl:"https://www.facebook.com/md.riad.654361",rsalImg:"",dk:o}
    
  
  ];

  const container = document.getElementById("studentContainer");
  const noResult = document.getElementById("noResult");

  function displayCards(data) {
    container.innerHTML = "";
    noResult.style.display = data.length === 0 ? "block" : "none";

    data.forEach(card => {
      container.innerHTML += `<div class="onestudent" onclick="openModal('${card.id}','${card.dn}','${card.oneImage}','${card.name}','${card.mbNo}','${card.crColl}','${card.crGr}',${card.gpa}','${card.feacUl}','${card.rsalImg}'${card.dk})">
    <p class="stu-p">#<span class="id">${card.id}</span>${card.dn}</p>
    <img src="${card.oneImage}" alt="">
       <div class="pinf">
     <h4 id="student-name">Student Name:${card.name}<span class="oa">${card.dk}</span></h4>
         <h6>Phon Number:${card.mbNo}</h6>
         <h6>Current Collage Name:${card.crColl}</h6>
         <h6>Current Group Subject:${card.crGr}</h6>
         <h6>Previous Group Subject:${card.prGr}</h6>
         <h6>SSC GPA=${card.gpa}</h6>
         <a href="${card.feacUl}"> এর facebook id দেখতে আমাকে ক্লিক কর</a><br>
         <a href="${card.rsalImg}"> এর SSC মার্কশিট দেখতে আমাকে ক্লিক কর</a>
       </div>
   </div>`;
    });
  }

  displayCards(cardsData);

  function searchCard() {
    const value = document.getElementById("search").value.toLowerCase();
    const filtered = cardsData.filter(card =>
      card.name.toLowerCase().includes(value) ||
      card.id.includes(value)
    );
    displayCards(filtered);
  }

 

  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }