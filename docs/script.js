// 🔄 Auto Donation Fetch
fetch("PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEBAPP_URL_HERE")
.then(res => res.text())
.then(total => document.getElementById("total").innerText = total);

// 🌐 Language Switch
const text = {
en:{
  aboutTitle:"About Our Trust",
  aboutText:"Naudiha Development Trust works for village development, educating children for a better future, and improving infrastructure.",
  improveTitle:"How We Can Improve Our Village",
  donateTitle:"Donation",
  teamTitle:"Trust Members",
  eventsTitle:"Recent Events",
  mapTitle:"Our Village Location"
},
hi:{
  aboutTitle:"हमारा ट्रस्ट",
  aboutText:"नौडीहा विकास ट्रस्ट गांव के विकास, बच्चों को बेहतर भविष्य के लिए शिक्षित करने और बुनियादी ढांचे में सुधार के लिए कार्य करता है।",
  improveTitle:"हम अपने गांव को कैसे सुधार सकते हैं",
  donateTitle:"दान",
  teamTitle:"ट्रस्ट सदस्य",
  eventsTitle:"हाल की गतिविधियाँ",
  mapTitle:"हमारे गांव का स्थान"
}
};

function setLang(lang){
  document.querySelectorAll("[data-key]").forEach(el=>{
    el.innerText = text[lang][el.dataset.key];
  });
}
