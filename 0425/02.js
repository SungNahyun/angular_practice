var dict = {
    foo: 1,
    bar: 2
};
Object.keys(dict)
    .forEach(function (k) { return console.log(dict[k]); });
