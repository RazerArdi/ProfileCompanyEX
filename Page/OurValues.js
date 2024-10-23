function navigateToHome() {
    window.location.href = "home.html";
}

function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.location.href = "home.html";
    }
}
