import ValidateWords from './validateWords';
const Counters = {
    nextWord: 0,
    lettersBad: 0,
    lettersGood: 0,
    goodWords: 0,
    wrongWords: 0,
}
class GetValidate {
    private static instance: GetValidate;
    private validate: ValidateWords;

    private constructor(data: { nextWord: number; lettersBad: number; lettersGood: number; goodWords: number; wrongWords: number; }) {
        this.getValidate(data);
    }

    static getInstance(){
        if(!GetValidate.instance){
            let replyCounters = Counters;
            GetValidate.instance = new GetValidate(replyCounters);
        }
        return GetValidate.instance;
    }
    private getValidate(data: { nextWord: number; lettersBad: number; lettersGood: number; goodWords: number; wrongWords: number; }) {
        this.validate = new ValidateWords();
        return this.validate.validate(data);
    }
}

export default GetValidate;
