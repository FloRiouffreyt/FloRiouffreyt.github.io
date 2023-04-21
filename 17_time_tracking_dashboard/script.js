const output = document.querySelector('#data-output');
const fragment = document.createDocumentFragment();

const options = document.querySelectorAll('.main__grid_profile_bottom-option');
var activeOption = document.querySelector('.active').id;
    
options.forEach(option => {
    option.addEventListener('click', e => {
        for (let i = 0; i < options.length; i++) {
            if (options[i].classList.contains('active')) {
                options[i].classList.remove('active')
            }
        }
        e.target.classList.add('active');
        activeOption = e.target.id;
        resetStats();
        getStats();
    })
})

function resetStats() {
    const cards = document.querySelectorAll('.main__grid_card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].remove();
    }
}

function getStats() {
    fetch('data.json')
    .then(response => {
        return response.json();
    })
    .then(stats => {
        for (let stat of stats) {
            let div = document.createElement('div');
            div.classList.add('main__grid_card');
            div.classList.add(stat.class);
            div.innerHTML = `
            <div class="main__grid_card_content">
                <div class="main__grid_card_content-title">
                    <h2>${stat.title}</h2>
                    <img src="images/icon-ellipsis.svg" alt="dots">
                </div>
                <div class="main__grid_card_content-stats">
                    ${activeOption === 'daily' ? 
                    `<div class="main__grid_card_content-current">${stat.timeframes.daily.current}hrs</div>
                    <div class="main__grid_card_content-previous">Yesterday - ${stat.timeframes.daily.previous}hrs</div>`
                    : activeOption === 'weekly' ? 
                    `<div class="main__grid_card_content-current">${stat.timeframes.weekly.current}hrs</div>
                    <div class="main__grid_card_content-previous">Last Week - ${stat.timeframes.weekly.previous}hrs</div>`
                    : activeOption === 'monthly' ? 
                    `<div class="main__grid_card_content-current">${stat.timeframes.monthly.current}hrs</div>
                    <div class="main__grid_card_content-previous">Last Month - ${stat.timeframes.monthly.previous}hrs</div>`
                    : ''}
                </div>
            </div>`
            fragment.appendChild(div)
        }

        output.appendChild(fragment);
    }) 
}

document.onload = getStats();