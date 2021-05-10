import './style/style.css';
import './style/tabStyle.css';

const insertNewElement = (elmntType,elmntId,elmntClass,text,parentElmnt) => {
    const newElmnt = document.createElement(elmntType);
    newElmnt.id = elmntId;
    if(elmntClass!=""){newElmnt.classList.add(elmntClass);}
    newElmnt.textContent = text;
    document.getElementById(parentElmnt).appendChild(newElmnt);
}

const createTabButton = (elmntId,text,parentElmnt,check) => {
    insertNewElement('input',elmntId,"","",parentElmnt);
    document.getElementById(elmntId).type = "radio";
    document.getElementById(elmntId).name = "tabs";
    document.getElementById(elmntId).checked = check;
    insertNewElement("label",elmntId+"Label","",text,parentElmnt);
    document.getElementById(elmntId+"Label").htmlFor = elmntId;
};

const pageLoad = () => {
    insertNewElement('header','pageHeader',"siteHeader","","content");
    insertNewElement('div','addressContainer',"address","","pageHeader");
    insertNewElement('a','addressHeader',"address-text","JL TLOGOWARU 67, MALANG, 65123","addressContainer");
    insertNewElement('a','phoneHeader',"address-text","(0341) 575 676","addressContainer");
    insertNewElement('div','restaurantNameContainer',"restaurantNameContainer","","pageHeader");
    insertNewElement('div','restaurantName',"restaurantName","Cak Ning","restaurantNameContainer");
    insertNewElement('div','tabButtons',"tabs","","content");
    createTabButton("ourStory","Our Story","tabButtons","checked");
    createTabButton("menu","Menu","tabButtons","");
    createTabButton("contact","Contact","tabButtons","");
    insertNewElement("div","tabContent","tabContent","","content");
    displayOurValues();
}

const clearContent = () => {
    while(document.getElementById("tabContent").hasChildNodes()){
        document.getElementById("tabContent").removeChild(document.getElementById("tabContent").firstChild);
    }
}

const displayOurValues = () => {
    insertNewElement("div","ourValueContent","ourValue","","tabContent");
    var valueContent1 = document.createElement("p");
    valueContent1.textContent = "Coming from the pure values and traditions of Javanese people, Cak Ning always serves the best dishes on your table. With the rich of ingredients, we would like to bring you to taste the essence of Java.";
    ourValueContent.appendChild(valueContent1);
    var valueContent2 = document.createElement("p");
    valueContent2.textContent = "Given the global threat of COVID-19 to our community both near and far, we are enforcing and practicing the highest sanitation and food safety protocols across the board. Our goal is to continue to provide a service to our community, to offer security to our staff, and to support our local food sources and suppliers.";
    ourValueContent.appendChild(valueContent2);
}

const displayMenu = () => {
    displayHeader("dinner","Dinner");
    displayItems("rawon","Rawon","Rp 45.000,00");
    displayItems("sotoDaging","Soto Daging","Rp 45.000,00");
    displayItems("ayamPenyet","Ayam Penyet","Rp 35.000,00");
    displayItems("nasiGoreng","Nasi Goreng","Rp 35.000,00");
    displayItems("bakmiGoreng","Bakmi Goreng","Rp 35.000,00");
    displayItems("rujakCingur","Rujak Cingur","Rp 30.000,00");
    displayItems("gadoGado","Gado-gado","Rp 25.000,00");
    displayItems("nasi","Nasi Putih","Rp 10.000,00");
    displayItems("mendhol","Mendhol","Rp 5.000,00");
    displayItems("mendoan","Mendoan","Rp 5.000,00");
    displayItems("nasi","Nasi Putih","Rp 10.000,00");
    displayHeader("beverages","Beverages");
    displayItems("esDegan","Es Degan","Rp 15.000,00");
    displayItems("esDawet","Es Dawet","Rp 15.000,00");
    displayItems("esSelasih","Es Selasih","Rp 15.000,00");
    displayItems("wedangUwuh","Wedang Uwuh","Rp 15.000,00");
    displayItems("wedangJahe","Wedang Jahe","Rp 15.000,00");
    displayHeader("dessert","Dessert");
    displayItems("ondeOnde","Onde Onde","Rp 5.000,00");
    displayItems("mendut","Mendut","Rp 5.000,00");
    displayItems("klepon","Klepon","Rp 5.000,00");
    displayItems("gethukLindri","Gethuk Lindri","Rp 5.000,00");
}

const displayHeader = (menuType,menuText) => {
    insertNewElement("div",menuType,"menuHeader",menuText,"tabContent");
}

const displayItems = (itemType,itemName,itemPrice) => {
    insertNewElement("div",itemType,"itemContainer","","tabContent");
    insertNewElement("div","","itemContentName",itemName,itemType);
    insertNewElement("div","","itemContentPrice",itemPrice,itemType);
}

const displayContactUs = () => {
    insertNewElement("div","contactUsContainer","contactUsContainer","","tabContent")
    insertNewElement("p","","contactInfo","For job opportunities, please send your CV to apply@cakning.co.id","contactUsContainer");
    insertNewElement("p","","contactInfo","For other inquiries, send us message via the form below and we'll get back to you as son as possible.","contactUsContainer");
    insertNewElement("input","inquiryName","shortForms","","contactUsContainer")
    document.getElementById("inquiryName").placeholder = "Name";
    insertNewElement("input","inquiryEmail","shortForms","","contactUsContainer")
    document.getElementById("inquiryEmail").placeholder = "Email";
    insertNewElement("input","inquiryPhone","shortForms","","contactUsContainer")
    document.getElementById("inquiryPhone").placeholder = "Phone Number";
    insertNewElement("textarea","inquiryMessage","longForms","","contactUsContainer")
    document.getElementById("inquiryMessage").placeholder = "Your Message";
    insertNewElement("input","buttonSend","butonSend","Send","contactUsContainer")
    document.getElementById("buttonSend").type = "submit";
    document.getElementById("buttonSend").value = "Submit";
}

export default pageLoad;
export { clearContent, displayOurValues, displayMenu, displayContactUs};