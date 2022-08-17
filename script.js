function redirectTo() {
    let contact = document.getElementById('contact');
    contact = contact.value.replaceAll(" ","");
    contact = contact.slice(3);
    // console.log(contact)            
    let countryCode = document.getElementById('countryCode');
    location.replace('https://wa.me/'+countryCode.value+contact);
    contact.value = '';
    // console.log('https://wa.me/'+countryCode.value+contact.value);
}


