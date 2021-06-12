
// function temporization(elClass: string, start: number, finish: number, buttonNewWords?: HTMLElement){
//     let boolean: boolean;
//     buttonNewWords.addEventListener('click', () => {
//         boolean = true;
//         console.log(boolean)
//     })
//     if (boolean) {
//         return;
//     }
// const counterSeconds = () => {
//     if (start === finish) {
//         console.log('entro')
//         return start;
//     }
//     const time: string = start.toString();
//     const containerTime = document.querySelector(`.${elClass}`);
//     containerTime.innerHTML = time
//     start -= 1;
//     setTimeout(counterSeconds, 1000)
//     return start;
// }
// return counterSeconds();
// }
// export default temporization;
class Time {
    boolean: boolean;


    temporization(elClass: string, start: number, finish: number, buttonNewWords?: HTMLElement){
        this.boolean = false;
        buttonNewWords.addEventListener('click', () => {
            this.boolean = true;
        })
        const counterSeconds = () => {
            if (start === finish) {
                console.log(start)
                return start;
            }
            if (this.boolean) {
                return;
            }
            const time: string = start.toString();
            const containerTime = document.querySelector(`.${elClass}`);
            containerTime.innerHTML = time
            start -= 1;
            setTimeout(counterSeconds, 1000)
            return start;
        }
        return counterSeconds();
    }
}
export default Time;
