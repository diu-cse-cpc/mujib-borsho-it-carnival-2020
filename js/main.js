let today = new Date(`${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`).getTime();
let deadline = new Date("01/10/2020").getTime();
let dayBaki = (deadline - today) / (1000 * 3600 * 24);

document.querySelector('#poster').textContent = `${dayBaki} Days to go`;
document.querySelector('#project').textContent = `${dayBaki} Days to go`;
document.querySelector('#idea').textContent = `${dayBaki} Days to go`;
document.querySelector('#vdo').textContent = `${dayBaki} Days to go`;
document.querySelector('#photo').textContent = `${dayBaki} Days to go`;
document.querySelector('#tech').textContent = `${dayBaki} Days to go`;
document.querySelector('#rubic').textContent = `${dayBaki} Days to go`;
document.querySelector('#data').textContent = `${dayBaki} Days to go`;
document.querySelector('#job').textContent = `${dayBaki} Days to go`;
