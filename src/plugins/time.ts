class Time {
    private el: string;
    start: number;
    private finish: number;
    private boolean: boolean;
    private buttonNewWords: HTMLElement;


    constructor(elClass: string, start: number, finish: number, buttonNewWords: HTMLElement) {
        this.el = elClass;
        this.start = start;
        this.finish = finish;
        this.boolean = false;
        this.buttonNewWords = buttonNewWords;
    }

    temporization(){
        this.buttonNewWords.addEventListener('click', () => {
            this.boolean = true;
        })
        const counterSeconds = () => {
            if (this.start === this.finish) {
                document.querySelector(`.${this.el}`).innerHTML = `1:00`
                return this.start;
            }
            if (this.boolean) {
                return;
            }
            const time: string = this.start.toString();
            const containerTime = document.querySelector(`.${this.el}`);
            containerTime.innerHTML = `0:${time}`
            this.start -= 1;
            setTimeout(counterSeconds, 1000)
            return this.start;
        }
        return counterSeconds();
    }
}
export default Time;
