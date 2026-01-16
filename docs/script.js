// 🔄 Auto Donation Fetch
fetch("https://script.google.com/macros/s/AKfycbyAPMxlilID9I7_7jz6Sx54uyeI-tdk-sVi38AN9iNY7VKZ5isr8g1mNUVyH6lu6NBbTw/exec")
.then(res => res.text())
.then(total => document.getElementById("total").innerText = total);

const text = {
en:{
  aboutTitle:"Who We Are",
  aboutText:"Naudiha Development Trust works for village development, education of children and infrastructure.",
  improveTitle:"Our Focus Areas",
  donateTitle:"Support Our Mission",
  teamTitle:"Trust Leadership",
  eventsTitle:"Recent Activities",
  mapTitle:"Village Location",
  suggestTitle:"Suggestion Box"
},
hi:{
  aboutTitle:"हम कौन हैं",
  aboutText:"नौडीहा विकास ट्रस्ट गांव के विकास, बच्चों की शिक्षा और बुनियादी ढांचे पर कार्य करता है।",
  improveTitle:"हमारे कार्य क्षेत्र",
  donateTitle:"हमारे मिशन का समर्थन करें",
  teamTitle:"ट्रस्ट नेतृत्व",
  eventsTitle:"हाल की गतिविधियाँ",
  mapTitle:"गांव का स्थान",
  suggestTitle:"सुझाव बॉक्स"
}
};

function setLang(lang){
  document.querySelectorAll("[data-key]").forEach(el=>{
    el.innerText = text[lang][el.dataset.key];
  });
}
