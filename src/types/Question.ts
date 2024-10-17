interface Option {
    option: string,
    correct: boolean,
    checked? : boolean
};

interface Question {
    imageUrl? : string,
    question? : string,
    questionEn? : string,
    questionFr? : string,
    options? : Array<Option>,
    optionsEn? : Array<Option>,
    optionsFr? : Array<Option>,
    correctlyAnswered? : boolean
};

export type { Question, Option };