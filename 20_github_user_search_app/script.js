const themeStyle = document.querySelector('#theme-style');
const themeToggle = document.querySelector('#theme-toggle');
const themeLabel = document.querySelector('.header__theme-text');

function themeSetup() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        themeStyle.attributes.href.value = './assets/css/dark.css'
        themeLabel.textContent = 'LIGHT'
        themeToggle.checked = true;
    } else {
        themeStyle.attributes.href.value = './assets/css/style.css'
        themeLabel.textContent = 'DARK';
        themeToggle.checked = false;
    }
}

window.onload = themeSetup()

themeToggle.addEventListener('click', e => {
    if (themeToggle.checked) {
        themeStyle.attributes.href.value = './assets/css/dark.css'
        themeLabel.textContent = 'LIGHT'
    } else {
        themeStyle.attributes.href.value = './assets/css/style.css'
        themeLabel.textContent = 'DARK';
    }
})

const inputData = document.querySelector('#input-data');
const button = document.querySelector('.main__input-btn');
const usercard = document.querySelector('.main__user-card');
const error = document.querySelector('.main__input-error');
const user = document.querySelector('#username');
const img = document.querySelector('#img');
const displayName = document.querySelector('#name');
const usernameLink = document.querySelector('#username-link');
const createdAt = document.querySelector('#date');
const bio = document.querySelector('#bio');
const repos = document.querySelector('#repos');
const followers = document.querySelector('#followers');
const following = document.querySelector('#following');
const userLocation = document.querySelector('#address');
const twitter = document.querySelector('#twitter');
const url = document.querySelector('#url');
const company = document.querySelector('#company');

var previousUser = '';

function displayInfo(data) {
    img.setAttribute('src', data.avatar_url);

    data.name !== null
        ? (displayName.textContent = data.name, displayName.classList.remove('no-info'))
        : (displayName.textContent = "No Name", displayName.classList.add('no-info'));

    usernameLink.setAttribute('href', data.html_url);
    user.textContent = '@' + data.login;

    var DateFormat = new Date(data.created_at)
    .toLocaleDateString('en-GB', {
        year: "numeric",
        month: "short",
        day: "numeric"
    });
    createdAt.textContent = 'Joined ' + DateFormat;

    data.bio !== null
        ? bio.textContent = data.bio
        : bio.textContent = 'This profile has no bio';

    repos.textContent = data.public_repos;
    followers.textContent = data.followers;
    following.textContent = data.following;

    data.location !== null
        ? (userLocation.textContent = data.location, userLocation.classList.remove('no-info'))
        : (userLocation.textContent = 'Not Available', userLocation.classList.add('no-info'));
    data.twitter_username !== null
        ? (twitter.textContent = data.twitter_username, twitter.classList.remove('no-info'))
        : (twitter.textContent = 'Not Available', twitter.classList.add('no-info'));

    blogData = `<a id="url-link" href="${data.blog}" rel="nofollow noopener noreferrer" target="_blank">${data.blog}</a>`;
    data.blog !== ""
        ? (url.innerHTML = blogData, url.classList.remove('no-info'))
        : (url.textContent = 'Not Available', url.classList.add('no-info'));

    data.company !== null
        ? (company.textContent = data.company, company.classList.remove('no-info'))
        : (company.textContent = 'Not Available', company.classList.add('no-info'));
}

function getInfo(username) {
    fetch("https://api.github.com/users/" + username)
        .then(resp => {
            return resp.json()
        })
        .then(data => {

            if (data.message) {
                error.classList.remove('hidden');
                usercard.classList.add('hidden');
                previousUser = username;
                return false;
            } else {
                previousUser = username;
                displayInfo(data);
            }

        })
}

function submitSearch() {
    var username = inputData.value;

    if (previousUser.toLowerCase() === username.toLowerCase()) {
        return false;
    } else {
        getInfo(username);
        
        usercard.classList.contains('hidden') && usercard.classList.remove('hidden');
        !error.classList.contains('hidden') && error.classList.add('hidden');
    }
}

button.addEventListener('click', () => {
    submitSearch();
})

inputData.addEventListener('keydown', e => {
    if (e.key === "Enter") {
        submitSearch();
    }
})