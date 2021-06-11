import validateWords from './validateWords';
import getValidate from './getValidate';

class InputWords {
    private validate: validateWords = new validateWords;
    private containerWords: HTMLDivElement;
    private getValidate: getValidate;

    private counterWords: number = 0;

    constructor() {
        this.containerWords = document.querySelector('.container-words__words');
    }
    run(data: string[]){
        this.containerWords.innerHTML = '';
        for(let i = 0; i < data.length; i++){
            const random: number = Math.floor(Math.random() * data.length);
            this.containerWords.innerHTML += `<p class='words word-${this.counterWords}'>${data[random]} </p>`;
            this.counterWords += 1
        }
        // this.validate.validate();
        this.counterWords = 0;
        this.getValidate = getValidate.getInstance();
    }
}

export default InputWords;