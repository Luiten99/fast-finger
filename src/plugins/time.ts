function temporization(elClass: string, start: number, finish: number, buttonNewWords?: HTMLElement){
    if (buttonNewWords) {
        var boolean;
        buttonNewWords.addEventListener('click', () => {
            boolean = true;
            console.log(boolean)
        })
        if (boolean) {
            return;
        }
    }
    const counterSeconds = () => {
        if (start === finish) {
            start = null;
            return;
        }
        const time: string = start.toString();
        const containerTime = document.querySelector(`.${elClass}`);
        containerTime.innerHTML = time
        start -= 1;
        setTimeout(counterSeconds, 1000)
    }
    return counterSeconds();
}
export default temporization;