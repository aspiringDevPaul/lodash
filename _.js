const _ = {

    clamp(number, lower, upper) {
        //https://lodash.com/docs/4.17.15#clamp

        let minimum = Math.max(number, lower);
        return Math.min(minimum, upper);
    },

    inRange(number, start, end) {
        //https://lodash.com/docs/4.17.15#inRange

        if (!end) {
            temp = start;
            start = 0;
            end = temp;
        }

        if (start > end) {
            temp = end;
            end = start;
            start = temp;
        }

        if ((number >= start) && (number < end)) {
            return true;
        } else {
            return false;
        }
    },

    words(string) {
        //https://lodash.com/docs/4.17.15#words
        return string.split(' ');
    },

    pad(str, length) {
        //https://lodash.com/docs/4.17.15#pad

        if (str.length > length) {
            return str;
        }

        const difference = length - str.length;

        if (difference % 2 === 0) {
            let repeat = difference / 2;
            console.log(repeat);
            return ' '.repeat(repeat) + str + ' '.repeat(repeat);;
        } else {
            let frontSpace = Math.floor(difference / 2);
            let backSpace = Math.ceil(difference / 2);
            return ' '.repeat(frontSpace) + str + ' '.repeat(backSpace);
        }

    },

    has(obj, key) {
        //https://lodash.com/docs/4.17.15#has
        return obj.hasOwnProperty(key);
    },

    invert(obj) {
        //https://lodash.com/docs/4.17.15#invert
        const keys = Object.keys(obj);
        const values = Object.values(obj);
        let result = {};

        for (key in keys) {
            result[values[key]] = keys[key];
        }

        return result;

    },

    findKey(obj, func) {
        //https://lodash.com/docs/4.17.15#findKey
        const keys = Object.keys(obj);
        for (key in keys) {
            let value = obj[keys[key]];
            if (func(value)) {
                return keys[key]
            }
        }

        return undefined;
    },

    drop(arr, num) {
        //https://lodash.com/docs/4.17.15#drop
        if (!num) {
            arr.shift()
            return arr;
        }

        arr.splice(0, num);
        return arr;

    },

    dropWhile(arr, func) {
        //https://lodash.com/docs/4.17.15#dropWhile
        let dropNumber = arr.findIndex((element, index) => {
            return !func(element, index, arr);
        })

        let droppedArray = this.drop(arr, dropNumber);

        return droppedArray;

    },

    chunk(arr, size = 1) {
        //https://lodash.com/docs/4.17.15#chunk
        let result = [];

        for (let i = 0; i < arr.length; i += size) {
            let chunk = arr.slice(i, i + size)
            result.push(chunk);
        }

        return result;
    }
};




// Do not write or modify code below this line.
module.exports = _;