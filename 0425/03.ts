/***********************************
 * 함수 인터페이스
 * 인터페이스를 구현하는 함수는 반드시 정의했던 타입의 인자를 받아
 * 정의했던 타입을 리턴해야 에러없이 컴파일이 된다.
 ***********************************/
interface numberOperation {
    (arg1: number, arg2: number): number;
}

const sum: numberOperation = (arg1: number, arg2: number): number => {
    return arg1 + arg2;
};

//정의했던 인터페이스대로 구현된 함수는 굳이 타입을 명시할 필요는 없다.
const multiply: numberOperation = (arg1, arg2) => {
    return arg1 * arg2;
};

//인자로 이상한 타입을 넘기면 타입이 맞지않아 에러가 발생 
/*
const toArray: numberOperation = (arg1: any, arg2: any): any[] => {
    return [arg1, arg2];
}*/