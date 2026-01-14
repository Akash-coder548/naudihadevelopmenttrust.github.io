fetch("PASTE_YOUR_WEBAPP_URL")
.then(r=>r.text())
.then(t=>document.getElementById("total").innerText=t);

const text={en:{aboutTitle:"About Our Trust",aboutText:"Naudiha Development Trust works for village development, educating children and improving infrastructure.",improveTitle:"How We Can Improve Our Village",donateTitle:"Donation",teamTitle:"Trust Members",eventsTitle:"Recent Events",mapTitle:"Our Location"},hi:{aboutTitle:"हमारा ट्रस्ट",aboutText:"नौडीहा विकास ट्रस्ट गांव के विकास और बच्चों की शिक्षा के लिए कार्य करता है।",improveTitle:"गांव सुधार",donateTitle:"दान",teamTitle:"ट्रस्ट सदस्य",eventsTitle:"गतिविधियाँ",mapTitle:"स्थान"}};
function setLang(l){document.querySelectorAll("[data-key]").forEach(e=>e.innerText=text[l][e.dataset.key]);}
