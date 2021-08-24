function redirectTo() {
    let contact = document.getElementById('contact');
    let countryCode = document.getElementById('countryCode');
    location.replace('https://wa.me/'+countryCode.value+contact.value);
    contact.value = '';
    // console.log('https://wa.me/'+countryCode.value+contact.value);
}
