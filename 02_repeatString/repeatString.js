const repeatString = function(word, rpt) {
    let output_string = ""
    rpt = Number(rpt)
    if (rpt < 0) {
        output_string = "ERROR"
    } else {
        for (i=0; i<rpt; i++) {
            output_string = output_string + word
        }
    }
    return output_string
};

// Do not edit below this line
module.exports = repeatString;
