fetch("PASTE_YOUR_GOOGLE_SHEET_WEBAPP_URL")
.then(res => res.text())
.then(total => document.getElementById("total").innerText = total);

const text = {
  en:{
    aboutTitle:"About Our Trust",
    aboutText:"Naudiha Development Trust works for village development, educating children for a better future, and improving infrastructure such as roads, water, health and cleanliness.",
    improveTitle:"How We Can Improve Our Village",
    donateTitle:"Donation",
    teamTitle:"Trust Members",
    newsTitle:"Recent News",
    eventsTitle:"Recent Events",
    mapTitle:"Our Village Location",
    suggestTitle:"Suggestion Box"
  },
  hi:{
    aboutTitle:"हमारा ट्रस्ट",
    aboutText:"नौडीहा विकास ट्रस्ट गांव के विकास, बच्चों को बेहतर भविष्य के लिए शिक्षित करने तथा सड़क, पानी, स्वास्थ्य और स्वच्छता जैसी सुविधाओं में सुधार के लिए कार्य करता है।",
    improveTitle:"हम अपने गांव को कैसे सुधार सकते हैं",
    donateTitle:"दान",
    teamTitle:"ट्रस्ट सदस्य",
    newsTitle:"ताज़ा समाचार",
    eventsTitle:"हाल की गतिविधियाँ",
    mapTitle:"हमारे गांव का स्थान",
    suggestTitle:"सुझाव बॉक्स"
  }
};

function setLang(lang){
  document.querySelectorAll("[data-key]").forEach(el=>{
    el.innerText = text[lang][el.dataset.key];
  });
}
