import Time from './time';

class validateWords {
    private time: Time;

    private inputWords: HTMLInputElement;
    private oneWord: HTMLElement;
    private counterGoodWords: HTMLElement;
    private counterWrongWords: HTMLElement;
    private containerKeystrokes: HTMLElement;
    private containerKeystrokesWrong: HTMLElement;
    private buttonNewWords: HTMLElement;
    private containerTime: HTMLElement;

    private nextWord: number = 0;
    private counterLettersGood: number = 0;
    private counterLettersBad: number = 0;
    private goodWords: number;
    private wrongWords: number;

    private boolean: boolean = false;
    private booleanInput: boolean = true;

    constructor() {
        this.containerTime = document.querySelector('.container-words__time')
        this.buttonNewWords = document.querySelector('.container-words__new-words');
        this.inputWords = document.querySelector('.container-words__input');
        this.counterGoodWords = document.querySelector('.results__correct-words');
        this.counterWrongWords = document.querySelector('.results__wrong-words');
        this.containerKeystrokes = document.querySelector('.keystrokes-correct');
        this.containerKeystrokesWrong = document.querySelector('.keystrokes-wrong');
    }
    validate(){
        this.buttonNewWords.addEventListener('click',() => {
            this.containerTime.innerHTML = '1:00';
            this.boolean = true;
            this.booleanInput = true;
        })
        if (this.boolean) {
            const goodWords: number = Math.round(this.counterLettersGood / 5);
            const wrongWords: number = Math.round(this.counterLettersBad / 5);
            this.counterGoodWords.innerHTML = `${goodWords} WPM`;
            this.counterWrongWords.innerHTML = `${wrongWords} Ww`;
            this.nextWord = 0;
            this.counterLettersBad = 0;
            this.counterLettersGood = 0;
            this.inputWords.value = '';
            return;
        }

        this.containerKeystrokes.innerText = `${this.counterLettersGood}`;
        this.containerKeystrokesWrong.innerText = `${this.counterLettersBad}`;

        this.inputWords.addEventListener('input', this.handleInput.bind(this));
    }
    handleInput(e: any) {
        if (this.booleanInput) {
            this.time = new Time('container-words__time', 59, 0, this.buttonNewWords);
            this.time.temporization();
            this.booleanInput = false;
            setTimeout(() => {
                this.counterGoodWords.innerHTML = `${this.goodWords} WPM`;
                this.counterWrongWords.innerHTML = `${this.wrongWords} Ww`;

                this.containerKeystrokes.innerText = `${this.counterLettersGood}`;
                this.containerKeystrokesWrong.innerText = `${this.counterLettersBad}`;
                this.buttonNewWords.click();
            }, 60000);
        }

        if (e.data === ' ') {
            this.keyPressSpace();
        }
        else{
            this.oneWord = document.querySelector(`.word-${this.nextWord}`)

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
    }
    keyPressSpace() {
        this.oneWord = document.querySelector(`.word-${this.nextWord}`)

        const arrayInput = this.inputWords.value.split('');
        const arrayWord = this.oneWord.innerHTML.split('');
        for(const index in arrayInput){
            if(arrayInput[index] === arrayWord[index]){
                this.counterLettersGood += 1;
            }
            else{
                this.counterLettersBad += 1;
            }
        }
        this.counterLettersGood -= 1;
        this.goodWords = Math.round(this.counterLettersGood / 5);
        this.wrongWords= Math.round(this.counterLettersBad / 5);

        this.containerKeystrokes.style.color = 'green'
        this.containerKeystrokesWrong.style.color = 'red'

        this.oneWord.remove();
        this.nextWord += 1;
        this.inputWords.value = '';
    }
}

export default validateWords;