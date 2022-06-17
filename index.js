const array = [1, 2,3 ,4, 5, 6, 7];

const arrayFiltrado = array.filter((x, index, array) => {
    if (x >3) {
        return true;
    } else {
        return false;
    }
});

console.log(arrayFiltrado);