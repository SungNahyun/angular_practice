/*************************
 * 다시보기
 * https://hyunseob.github.io/2016/10/17/typescript-interface/
 ************************/
interface Indexable{
    [key: string]: any; //index signature
}

const dict: Indexable = {
    foo: 1,
    bar: 2
};

Object.keys(dict)
.forEach(k=>console.log(dict[k]));