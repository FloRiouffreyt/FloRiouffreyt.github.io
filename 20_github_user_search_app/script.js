const inputData = document.querySelector('#input-data');
const button = document.querySelector('.main__input-btn');
const usercard = document.querySelector('.main__user-card');
const error = document.querySelector('.main__input-error');

var previousUser = '';

button.addEventListener('click', () => {
    
    var username = inputData.value;

    if (previousUser.toLowerCase() === username.toLowerCase()) {
        return false;
    } else {
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

                const user = document.querySelector('#username');
                const img = document.querySelector('#img');
                const name = document.querySelector('#name');
                const usernameLink = document.querySelector('#username-link');
                const createdAt = document.querySelector('#date');
                const bio = document.querySelector('#bio');
                const repos = document.querySelector('#repos');
                const followers = document.querySelector('#followers');
                const following = document.querySelector('#following');
                const location = document.querySelector('#address');
                const twitter = document.querySelector('#twitter');
                const url = document.querySelector('#url');
                const company = document.querySelector('#company');

                img.setAttribute('src', data.avatar_url);
                
                data.name !== null
                ? (name.textContent = data.name, name.classList.remove('no-info'))
                : (name.textContent = "No Name", name.classList.add('no-info'))

                user.textContent = '@' + data.login;
                usernameLink.setAttribute('href', data.html_url)
                
                var DateFormat = new Date(data.created_at)
                .toLocaleDateString('en-GB', { 
                    year:"numeric",
                    month:"short",
                    day:"numeric"
                });
                createdAt.textContent = 'Joined ' + DateFormat;
                
                data.bio !== null 
                ? bio.textContent = data.bio
                : bio.textContent = 'This profile has no bio';
                
                repos.textContent = data.public_repos;
                followers.textContent = data.followers;
                following.textContent = data.following;

                data.location !== null 
                ? (location.textContent = data.location, location.classList.remove('no-info'))
                : (location.textContent = 'Not Available', location.classList.add('no-info'))
                data.twitter_username !== null 
                ? (twitter.textContent = data.twitter_username, twitter.classList.remove('no-info'))
                : (twitter.textContent = 'Not Available', twitter.classList.add('no-info'))
                
                blogData = `<a id="url-link" href="${data.blog}" rel="nofollow noopener noreferrer" target="_blank">${data.blog}</a>`;
                data.blog !== "" 
                ? (url.innerHTML = blogData, url.classList.remove('no-info'))
                : (url.textContent = 'Not Available', url.classList.add('no-info'))
                
                data.company !== null 
                ? (company.textContent = data.company, company.classList.remove('no-info'))
                : (company.textContent = 'Not Available', company.classList.add('no-info'))
                }

            usercard.classList.contains('hidden') && usercard.classList.remove('hidden');
            !error.classList.contains('hidden') && error.classList.add('hidden');
        })
    }
})
