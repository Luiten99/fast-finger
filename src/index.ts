import InputWords from './plugins/InputWords';

const newWords: HTMLElement = document.querySelector('.container-words__new-words');

const words = ['the','be','to','of','and','of','and','a','in','that','have','I','it','for','not','on','with','he','as','you','do','at','this','bat','his','by','from','they','we','say','her','she','or','an','will','my','one','all','would','there','their','what','so','up','out','if','about','who','get','which','go','me'];

const classValidate: InputWords = new InputWords(words);

newWords.addEventListener('click', () => {
    classValidate.run(words);
})

