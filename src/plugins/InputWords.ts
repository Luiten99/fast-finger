import validateWords from './validateWords';

class InputWords {
    private validate: validateWords = new validateWords;
    private containerWords: HTMLDivElement;

    private counterWords: number = 0;

    constructor(data: string[]) {
        this.containerWords = document.querySelector('.container-words__words');
        this.run(data);
    }
    run(data: string[]){
        this.containerWords.innerHTML = '';
        for(let i = 0; i < data.length; i++){
            const random: number = Math.floor(Math.random() * data.length);
            this.containerWords.innerHTML += `<p class='words word-${this.counterWords}'>${data[random]} </p>`;
            this.counterWords += 1
        }
        this.validate.validate();
        this.counterWords = 0;
    }
}

export default InputWords;