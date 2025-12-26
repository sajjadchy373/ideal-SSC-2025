// nav bar sec

function openNav(){
  document.getElementById("sidebar").classList.add("active");
  document.getElementById("overlay").classList.add("active");
}

function closeNav(){
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}
// teacher sec

const container = document.getElementById("studentContainer");

const cardsData = [
    {  id: "01", oneImage: "teacher img/mizan.jpg",name: "Mizanur Rahaman ", mbNo:"01841286692" ,sub:"ইংরেজী", di:"সব ঘটনা ঘটে না, যা ঘটে তা ঘটনা, যা ঘটে না তা রটনা। বুঝলে বুঝ পাতা না বুঝলে তেজ পাতা। ওয়া ওয়া" ,prGr:"",feacUl:"https://www.facebook.com/mizanrahman.ideal"},
    {  id: "02", oneImage: "teacher img/basar.jpg",name: "Abul Basar ", mbNo:"01812100876" ,sub:"ইংরেজি ১ম,হিসাব বিজ্ঞান", di:"নামিয়ে পেলব,দর ল,রুচির দূরবীক্ষ চলতেছে" ,prGr:"",feacUl:"https://www.facebook.com/abul.basar.984570"},
    {  id: "03", oneImage: "teacher img/zilu.jpg",name: "0 1815-477392", mbNo:"" ,sub:"গণিত(১০ম),আইসিটি(১০ম),জীব বিজ্ঞান", di:"" ,prGr:"",feacUl:""},
    {  id: "04", oneImage: "teacher img/mosta.jpg",name: "Mostafa", mbNo:"01784620962" ,sub:"বিজ্ঞান(১০ম),রসায়ন", di:"আমি বাংলায় দূর্বল, আমি বাংলার প্রতি দূর্বল" ,prGr:"",feacUl:""},
    {  id: "05", oneImage: "teacher img/nozibul alam.jpg",name: "Nazibul Alam", mbNo:"" ,sub:"কৃষি(১০ম)", di:"" ,prGr:"",feacUl:"https://www.facebook.com/nazibul.alam.815022"},
    {  id: "06", oneImage: "teacher img/sala.jpg",name: "Muhammad Salahuddin Ayyubi", mbNo:"" ,sub:"বাংলাদেশ ও বিশ্ব পরিচয়(৯ম),বিজ্ঞান(৯ম),ইংরেজি ২য়(৯ম),কোচিং ইংরেজি(১০ম)", di:"" ,prGr:"",feacUl:"https://www.facebook.com/sk.parvez.148"},
    {  id: "07", oneImage: "teacher img/hasan.jpg",name: "Md Hashem Riad ", mbNo:"" ,sub:"গণিত(১০ম),আইসিটি(১০ম), ফিন্যান্সও ব্যাংক কিং", di:"৫ বেত, ১০বেত" ,prGr:"",feacUl:"https://www.facebook.com/mdhashem.riad.77"},
    {  id: "08", oneImage: "teacher img/mabut.jpg",name: "Abdul Mabut Dalim ", mbNo:"" ,sub:"ব্যবসায় উদ্যোগ,ইসলাম(১০ম)", di:"" ,prGr:"",feacUl:"https://www.facebook.com/abdul.mabut.dalim.2024"},
    {  id: "09", oneImage: "teacher img/imran.jpg",name: "Md Imranur Rahaman ", mbNo:"" ,sub:"পর্দাথ বিজ্ঞান,উচ্চতর গণিত", di:"" ,prGr:"",feacUl:"https://www.facebook.com/mdimranur.rahaman"},
    {  id: "10", oneImage: "teacher img/arif.jpg",name: "Shamim Arif ", mbNo:"" ,sub:"কৃষি(৯ম),বিজ্ঞান(৯ম),ইংরেজি ২য়(১০ম)", di:"" ,prGr:"",feacUl:"https://www.facebook.com/shamim.arif.942900"},
    {  id: "11", oneImage: "teacher img/mosraf.jpg",name: "Mosarraf Hossain", mbNo:"01862654888" ,sub:"অফিস", di:"" ,prGr:"",feacUl:"https://www.facebook.com/mosarrafhossainmt"},
    {  id: "12", oneImage: "teacher img/adil.jpg",name: "Adil Shikder ", mbNo:"" ,sub:"বাংলা১মও২য়(১০ম),ভূগোল ও পরিবেশ", di:"" ,prGr:"",feacUl:"https://www.facebook.com/adilshikder.official"},
    {  id: "13", oneImage: "teacher img/tarek.jpg",name: "Mohammed Tarek ", mbNo:"" ,sub:"বাংলা(৭ম)", di:"" ,prGr:"",feacUl:"https://www.facebook.com/mohammed.tarek.406589"},
    {  id: "14", oneImage: "teacher img/seyed.png",name: "Mohammad Sayed", mbNo:"" ,sub:"কৃষি", di:"" ,prGr:"",feacUl:"https://www.facebook.com/mohammed.sayed.3551380"},
    {  id: "15", oneImage: "teacher img/riduan.jpg",name: "Riduanul Islam Rayhan", mbNo:"" ,sub:"অফিস", di:"" ,prGr:"",feacUl:"https://www.facebook.com/rirayhan.cox"},
    {  id: "16", oneImage: "teacher img/nobab.png",name: "Nawab Mia", mbNo:"" ,sub:"ইতিহাস, পৌরনিতি,বাংলা ১মও২য়(৯ম)", di:"" ,prGr:"",feacUl:""},
    {  id: "17", oneImage: "teacher img/hanif.png",name: "Abu Hanif", mbNo:"" ,sub:"বাংলাদেশ ও বিশ্ব পরিচয়(১০ম)", di:"" ,prGr:"",feacUl:""},
    {  id: "18", oneImage: "teacher img/sefaul.jpg",name: "Shefaul Karim", mbNo:"" ,sub:"ইসলাম(৯ম)", di:"" ,prGr:"",feacUl:""},
    {  id: "19", oneImage: "teacher img/salim.jpg",name: "Salim Ullah Biplob", mbNo:"" ,sub:"", di:"" ,prGr:"",feacUl:"https://www.facebook.com/salim.ullah.biplob.2025"},
    {  id: "20", oneImage: "teacher img/amzad.jpg",name: "Amjad", mbNo:"" ,sub:"বাংলাদেশ ও বিশ্ব পরিচয় (৭ম)", di:"" ,prGr:"",feacUl:""},
    {  id: "21", oneImage: "teacher img/shaed.jpg",name: "Hafez Md. Shahed", mbNo:"" ,sub:"আরবি শিক্ষা(৭ম)", di:"" ,prGr:"",feacUl:"https://www.facebook.com/profile.php?id=100078513652325"},
    {  id: "22", oneImage: "",name: "Hafez Mahmudul Haque", mbNo:"" ,sub:"আরবি শিক্ষা(১০ম)", di:"" ,prGr:"",feacUl:""}
    
];
  function displayCards(data) {
    container.innerHTML = "";
    noResult.style.display = data.length === 0 ? "block" : "none";

    data.forEach(card => {
      container.innerHTML += `<div class="onestudent" onclick="openModal('${card.id}',,'${card.oneImage}','${card.name}','${card.mbNo}','${card.sub}','${card.di}','${card.feacUl}','${card.dk})">
    <p class="stu-p">#${card.id}</p>
    <img src="${card.oneImage}" alt="">
       <div class="pinf">
     <h4 id="student-name">Teacher Name:${card.name}</h4>
         <h6>Phon Number:${card.mbNo}</h6>
         <h6>subject:${card.sub}</h6>
         <h6>Dilog:${card.di}</h6>
        <a href="${card.feacUl}"> এর facebook id দেখতে আমাকে ক্লিক কর</a><br>
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