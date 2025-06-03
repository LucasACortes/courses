const arrayA = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const arrayB = [2, 5, 1, 1, 3, 5, 1, 2, 4];
const arrayC = [2, 5, 1, 3 , 4];

const findRecurring = (array) => {
    const map = new Map();

    for (let key = 0; key < array.length; key++) {
        const value = array[key];
        
        if(map.has(value)) {
            return value;
        };
        
        map.set(value, key);
    }
}
