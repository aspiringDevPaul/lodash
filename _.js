const _ = {

    clamp(number, lower, upper){
        //https://lodash.com/docs/4.17.15#clamp

        let minimum = Math.max(number, lower);
        return Math.min(minimum, upper);
    },

    inRange(number, start, end){
        //https://lodash.com/docs/4.17.15#inRange

        if(!end){
            temp = start;
            start = 0;
            end = temp;
        }

        if(start > end){
            temp = end;
            end = start;
            start = temp;
        }

        if ((number >= start) && (number < end)){
            return true;
        } else{
            return false;
        }

    }

};




// Do not write or modify code below this line.
module.exports = _;