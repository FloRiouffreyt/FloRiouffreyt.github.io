const searchWord = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-validate');
const searchError = document.querySelector('.error-text');
const audioWrapper = document.querySelector('#audio');

const noResult = document.querySelector('#error-message');
const resultBlock = document.querySelector('.results');

const resultWord = document.querySelector('#word-result');
const resultPhonetic = document.querySelector('#word-phonetic');

const resultContent = document.querySelector('#results-content');

const resultSources = document.querySelector('#results-sources');

var previousWord = '';

function emptyQuery() {
    !resultBlock.classList.contains('hidden') && resultBlock.classList.add('hidden');
    searchWord.classList.add('error');
    searchError.classList.remove('hidden');
}

function resetDisplay() {
    resultWord.textContent = '';
    resultPhonetic.textContent = '';
    resultContent.innerHTML = '';
    resultSources.innerHTML = '';
    audioWrapper.innerHTML = '';
    !noResult.classList.contains('hidden') && noResult.classList.add('hidden');
}

function displayResult(resultData) {
    !noResult.classList.contains('hidden') && noResult.classList.add('hidden');

    resultWord.textContent = resultData.word;
    resultPhonetic.textContent = resultData.phonetic;

    for(let phonetic of resultData.phonetics) {
        if (phonetic.audio !== '') {
            audioWrapper.innerHTML = `
            <button class="results__header_audio_btn" id="word-audio-btn">
                <svg class="results__header_audio_btn-img" xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75">
                    <g fill="#A445ED" fill-rule="evenodd">
                        <circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/>
                        <path d="M29 27v21l21-10.5z"/>
                    </g>
                </svg>
            </button>
            <audio src="${phonetic.audio}" id="word-audio"></audio>
            `
        } else if (phonetic.audio === '') {
            audioWrapper.innerHTML = '';
        }
    }

    const resultAudio = document.querySelector('#word-audio');
    const resultAudioBtn = document.querySelector('#word-audio-btn');
    
    resultAudio && resultAudioBtn.addEventListener('click', () => {
        resultAudio.play()
    })

    var output = '';

    for(let meaning of resultData.meanings) {
        output += `
        <div class="results__content_block">
        <div class="results__content_part">
        <h2 class="results__content_part-text">${meaning.partOfSpeech}</h2>
        </div>
        <h3 class="results__content-meaning">Meaning</h3>
        <ul class="results__content_list">
        `
        for(let definition of meaning.definitions) {
            output += `
            <li class="results__content_list-item">
            <p class="results__content_list-item-definition">${definition.definition}</p>
            ${definition.example !== undefined ? `<p class="results__content_list-item-example">"${definition.example}"</p>` : ''}
            </li>
            `
            }
        output += '</ul>'

        if (meaning.synonyms.length > 0) {
            output += `
            <div class="results__content_synonyms">
            <p class="results__content_synonyms-title">Synonyms</p>
            <ul class="results__content_synonyms_list">
            `
            for(let synonym of meaning.synonyms) {
                output += `
                <li class="results__content_synonyms_list-item">${synonym}</li>
                `
            }
            output += '</ul></div>'
        }
        
        if (meaning.antonyms.length > 0) {
            output += `
            <div class="results__content_antonyms">
            <p class="results__content_antonyms-title">Antonyms</p>
            <ul class="results__content_antonyms_list">
            `
            for(let antonym of meaning.antonyms) {
                output += `
                <li class="results__content_antonyms_list-item">${antonym}</li>
                `
            }
            output += '</ul></div>'
        }
        output += '</div>'
    }

    resultContent.innerHTML = output;

    var sourceOutput = `
    <p class="results__sources-title">Source</p>
    <ul class="results__sources_list">
    `;
    for(let source of resultData.sourceUrls) {
        sourceOutput += `
        <li class="results__sources_list-item">
            <a class="results__sources_list-item-link" href="${source}" rel="nofollow noopener noreferrer" target="_blank">${source}</a>
        </li>
        `
    }
    sourceOutput += '</ul>'

    resultSources.innerHTML = sourceOutput;

    
    resultBlock.classList.remove('hidden');
}

function getResult(word) {
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+ word)
    .then(resp => {
        if (!resp.ok) {
            resetDisplay();
            noResult.classList.remove('hidden');
            !resultBlock.classList.contains('hidden') && resultBlock.classList.add('hidden');
            previousWord = word;
            return false;
        } else {
            previousWord = word;
            return resp.json()
        }
    })
    .then(data => {

        const resultData = data[0];
        
        
        if (resultData === undefined) {
            return false;
        } else {
            displayResult(resultData);
            const synonyms = document.querySelectorAll('.results__content_synonyms_list-item');
            const antonyms = document.querySelectorAll('.results__content_antonyms_list-item');
            
            for (let synonym of synonyms) {
                synonym.addEventListener('click', e => {
                    getResult(e.target.innerText);
                })
            }
            for (let antonym of antonyms) {
                antonym.addEventListener('click', e => {
                    getResult(e.target.innerText);
                })
            }
        }
    })
}

function wordResult() {
    const word = searchWord.value;
    
    if (previousWord.toLowerCase() === word.toLowerCase()) {
        return false;
    } else {
        searchWord.classList.contains('error') && searchWord.classList.remove('error');
        !searchError.classList.contains('hidden') && searchError.classList.add('hidden');
        
        getResult(word);
    }
}

searchWord.addEventListener('keydown', e => {
    if (e.key === "Enter") {
        if (searchWord.value === '') {
            resetDisplay();
            emptyQuery();
            return false;
        } else {
            wordResult();
        }
    }
})

searchBtn.addEventListener('click', () => {
    if (searchWord.value === '') {
        resetDisplay();
        emptyQuery();
        return false;
    } else {
        wordResult();
    }
})

//font switcher
const fontBtn = document.querySelector('.header__font');
const fontName = document.querySelector('.header__font_name');
const dropdown = document.querySelector('.dropdown');
fontBtn.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
})
window.addEventListener('click', e => {
    if (!e.target.matches('.header__font') && !e.target.matches('.header__font_name')) {
        dropdown.classList.add('hidden');
    }
})
dropdown.addEventListener('click', e => {
    if (e.target.id === 'sans-serif') {
        document.documentElement.style.setProperty("--font-main", "'Inter', sans-serif");
        fontName.textContent = 'Sans Serif';
    } else if (e.target.id === 'serif') {
        document.documentElement.style.setProperty("--font-main", "'Lora', serif")
        fontName.textContent = 'Serif';
    } else if (e.target.id === 'monospace') {
        document.documentElement.style.setProperty("--font-main", "'Inconsolata', monospace")
        fontName.textContent = 'Mono';
    }
})

// theme switch button
const themeBtn = document.querySelector('#theme');
const themeIcon = document.querySelector('#theme-icon');
themeBtn.addEventListener('click', e => {
    if (e.target.checked) {
        themeBtn.classList.add('active');
        themeIcon.classList.add('active-icon');
        document.documentElement.style.setProperty('--font-color-main', '#fff')
        document.documentElement.style.setProperty('--color-bg-main', '#050505')
        document.documentElement.style.setProperty('--color-bg-input', '#1f1f1f')
        document.documentElement.style.setProperty('--box-shadow', '0px 5px 30px var(--color-accent)')
    } else {
        themeBtn.classList.remove('active');
        themeIcon.classList.remove('active-icon');    
        document.documentElement.style.setProperty('--font-color-main', '#2d2d2d')
        document.documentElement.style.setProperty('--color-bg-main', '#fff')
        document.documentElement.style.setProperty('--color-bg-input', '#f4f4f4')
        document.documentElement.style.setProperty('--box-shadow', '0px 5px 30px rgba(0, 0, 0, 0.1)')
    }
})

function getTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        themeBtn.checked = true;
        themeBtn.classList.add('active');
        themeIcon.classList.add('active-icon'); 
    } else {
        themeBtn.checked = false;
        themeBtn.classList.remove('active');
        themeIcon.classList.remove('active-icon');
    }
}

window.onload = getTheme();