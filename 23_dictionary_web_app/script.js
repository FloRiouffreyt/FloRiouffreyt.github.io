const searchWord = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-validate');

const resultWord = document.querySelector('#word-result');
const resultPhonetic = document.querySelector('#word-phonetic');
const resultAudio = document.querySelector('#word-audio');
const resultAudioBtn = document.querySelector('#word-audio-btn');

const resultContent = document.querySelector('#results-content');

const resultSources = document.querySelector('#results-sources');

function wordResult() {
    const word = searchWord.value;

    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+ word)
    .then(resp => {
        return resp.json()
    })
    .then(data => {
        console.log(data[0]);

        const resultData = data[0];

        resultWord.textContent = resultData.word;
        resultPhonetic.textContent = resultData.phonetic;

        resultAudio.setAttribute('src', '');
        for(let phonetic of resultData.phonetics) {
            if (phonetic.audio !== '') {
                resultAudio.setAttribute('src', phonetic.audio)
            }
        }
        resultAudioBtn.addEventListener('click', () => {
            resultAudio.play()
        })

        var output = '';

        for(let meaning of resultData.meanings) {
            output += `
            <div>
            <h2 class="results__content_part">${meaning.partOfSpeech}</h2>
            <h3 class="results__content-meaning">Meaning</h3>
            <ul class="results__content_list">
            `
            for(let definition of meaning.definitions) {
                output += `
                <li class="results__content_list-item">
                <p>${definition.definition}</p>
                ${definition.example !== undefined ? `<p>"${definition.example}"</p>` : ''}
                </li>
                `
                }
            output += '</ul>'

            if (meaning.synonyms.length > 0) {
                output += `
                <p class="results__content_synonyms">Synonyms</p>
                <ul class="results__content_synonyms_list">
                `
                for(let synonym of meaning.synonyms) {
                    output += `
                    <li class="results__content_synonyms_list-item">${synonym}</li>
                    `
                }
                output += '</ul>'
            }
            
            if (meaning.antonyms.length > 0) {
                output += `
                <p class="results__content_antonyms">Antonyms</p>
                <ul class="results__content_antonyms_list">
                `
                for(let antonym of meaning.antonyms) {
                    output += `
                    <li class="results__content_antonyms_list-item">${antonym}</li>
                    `
                }
                output += '</ul>'
            }
            output += '</div>'
        }

        resultContent.innerHTML = output;

        var sourceOutput = `
        <p>Source</p>
        <ul>
        `;
        for(let source of resultData.sourceUrls) {
            sourceOutput += `
            <li>
                <a href="${source}">${source}</a>
            </li>
            `
        }
        sourceOutput += '</ul>'

        resultSources.innerHTML = sourceOutput;
    })
}

searchWord.addEventListener('keydown', e => {
    if (e.key === "Enter") {
        wordResult()
    }
})

searchBtn.addEventListener('click', () => {
    wordResult()
})