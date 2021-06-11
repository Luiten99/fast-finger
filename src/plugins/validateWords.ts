class validateWords {
    private inputWords: HTMLInputElement;
    private oneWord: HTMLElement;
    private counterGoodWords: HTMLElement;
    private counterWrongWords: HTMLElement;
    private containerKeystrokes: HTMLElement;
    private containerKeystrokesWrong: HTMLElement;

    constructor() {
        this.inputWords = document.querySelector('.container-words__input');
        this.counterGoodWords = document.querySelector('.results__correct-words');
        this.counterWrongWords = document.querySelector('.results__wrong-words');
        this.containerKeystrokes = document.querySelector('.keystrokes-correct');
        this.containerKeystrokesWrong = document.querySelector('.keystrokes-wrong')
    }
    validate(counter: any){
            this.counterGoodWords.innerHTML = `${counter.goodWords} WPM`;
            this.counterWrongWords.innerHTML = `${counter.wrongWords} Ww`;

            this.containerKeystrokes.innerText = `${counter.lettersGood}`;
            this.containerKeystrokesWrong.innerText = `${counter.lettersBad}`;
            this.inputWords.value = '';

        this.inputWords.addEventListener('input',(e: any) => {
            this.oneWord = document.querySelector(`.word-${counter.nextWord}`);
            if (!this.oneWord) {
                return;
            }

            if (e.data === ' ') {
                this.keyPressSpace(counter);
            }
            else{
                const arrayInput = this.inputWords.value.split('');
                const arrayWord = this.oneWord.innerHTML.split('');
                for(const index in arrayInput){
                    if(arrayInput[index] === arrayWord[index]){
                        this.oneWord.style.color = 'green';
                    }
                    else{
                        this.oneWord.style.color = 'red';
                        return;
                    }
                }
            }
        })
    }
    private keyPressSpace(counter) {
        const arrayInput = this.inputWords.value.split('');
        const arrayWord = this.oneWord.innerHTML.split('');
        for(const index in arrayInput){
            if(arrayInput[index] === arrayWord[index]){
                counter.lettersGood += 1;
            }
            else{
                counter.lettersBad += 1;
            }
        }
        counter.lettersGood -= 1;
        counter.goodWords = Math.round(counter.lettersGood / 5);
        counter.wrongWords = Math.round(counter.lettersBad / 5);
        this.counterGoodWords.innerHTML = `${counter.goodWords} WPM`;
        this.counterWrongWords.innerHTML = `${counter.wrongWords} Ww`;

        this.containerKeystrokes.innerText = `${counter.lettersGood}`
        this.containerKeystrokesWrong.innerText = `${counter.lettersBad}`

        this.containerKeystrokes.style.color = 'green'
        this.containerKeystrokesWrong.style.color = 'red'

        counter.nextWord += 1;
        this.oneWord.remove();
        this.inputWords.value = '';
    }
}

export default validateWords;