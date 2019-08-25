const lastModified = document.getElementById('lastModified')

const date = new Date(document.lastModified)
console.log(new Intl.DateTimeFormat('ja').format(date))

lastModified.textContent = new Intl.DateTimeFormat('ja').format(date)
