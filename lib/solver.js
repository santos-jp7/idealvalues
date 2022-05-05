module.exports = function(value, numbers = [], options = {}){
    if(!value) throw new Error("Value not definied.");
    if(numbers.length == 0) throw new Error("Numbers not definied.");

    options = Object.assign({
        debug: false,
        fullDebug: false,
        maxAttempts: 1000,
        extends: false
    }, options);

    if(options.debug) console.log("Value: ", value);
    if(options.debug) console.log("Numbers:", numbers);
    if(options.debug) console.log("Options:", options);

    let values = []; indexs = []; sum = 0, i = 0, s = 0, r = 1;

    while(r != options.maxAttempts){
        if(options.debug && options.fullDebug) console.log("Attemp:", i);

        if(sum == value) break;
        numbers.map((number, index) => {
            if(indexs.includes(index)) return;
    
            if((number + sum) > value) return;
    
            sum = sum + number;
    
            if(options.debug && options.fullDebug) console.log("Value push:", number);

            values.push(number);
            indexs.push(index);
    
            return true;
        })
    
        if(s == 10 ){
            indexs = [];
            values = [];
            sum = 0;
            s = 0;
            r++;
    
            if(options.debug && options.fullDebug) console.log("Clear and Shuffle");

            numbers = numbers
            .map(v => ({ v, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ v }) => v)
        }
    
        i++;
        s++;
    }
    
    if(options.debug) console.log("Necessary values: ", values);
    if(options.debug) console.log("Sum of values:", sum);
    if(options.debug) console.log("Number of Attempts:", r);

    if(sum != value) throw new Error("Unable to get a result.");
    
    if(options.extends){
        return { values, sum, attempts: r}
    } else{
        return values
    };
}