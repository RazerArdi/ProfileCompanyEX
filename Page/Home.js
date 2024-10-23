function navigateToHome() {
    window.location.href = "home.html";
}

function scrollToContact() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}
