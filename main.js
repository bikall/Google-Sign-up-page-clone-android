function toggle(){
  gmaillogin.style.border='2px solid rgba(38, 120, 232, 1)'
}
//this is to avoid a problem in android devices which decreases the viewport when an input field is focused
var viewport = document.querySelector("meta[name=viewport]");
viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);
//5.66
//this checks for selected index
setInterval(check, 1)

function check() {
  if (sel.selectedIndex == 1) {
    s1.innerText = 'साइन इन'
    Continue.innerText = 'आफ्नो Google खाता प्रयोग गर्नुहोस्'
    gmaillogin.placeholder = 'इमेल वा फोन नम्बर'
    forgot.innerText = 'इमेल ठेगाना बिर्सनुभयो?'
    guest.innerHTML='तपाईंको कम्प्युटर होइन? निजी रूपमा साइन इन गर्न अतिथि मोड प्रयोग गर्नुहोस्।<button id="lmb">&nbsp;थप जान्नुहोस्</button>'
        createacc.innerText = 'खाता सिर्जना गर्नुहोस्'
    next.innerText = 'अर्को'
  }
  else if(sel.selectedIndex==0) {
    s1.innerText='Sign In'
    Continue.innerText='Use your Google Account'
    gmaillogin.placeholder='Email or phone'
    forgot.innerText='Forgot email?'
    guest.innerHTML='Not your computer? Use guest mode to sign in privately.<button id="lmb">&nbsp;Learn more</button>'
    createacc.innerText='Create account'
    next.innerText='Next'
  }
  else{
    s1.innerText='साइन इन करें'
    Continue.innerText='अपने Google खाते का इस्तेमाल करें'
    gmaillogin.placeholder='ईमेल या फ़ोन'
    forgot.innerText='ईमेल भूल गए?'
    guest.innerHTML='आपका कंप्यूटर नहीं है? निजी रूप से साइन इन करने के लिए मेहमान मोड का इस्तेमाल करें.<button id="lmb">&nbsp;ज़्यादा जानें</button>'
    createacc.innerText='खाता बनाएं'
    next.innerText='आगे'
  }
}
