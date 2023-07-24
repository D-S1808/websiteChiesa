let language = "IT"

function setLanguage(lang) {
    language = lang;
    window.location.href = `/${language}/index.html`;
}