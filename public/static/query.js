/*

*/
function proses(data, textToLookup) {
    //data is in spreadsheet array format i.e. [[[col1],[col2]...],[[col1],[col2]...]] -> [[row1],[row2]]
    //example of full data is in /test/fetchedData.json, it might contain outdated data
    //textToLookup is string

    let textGroup = textToLookup.match(/([^;]*)/gi); //detect multiple input with delimiter ;
    if(textGroup.length == 1) return "not found"; //for input validation if input is empty
    // console.log(textGroup.length,textGroup)

    //regex pattern
    var ipRegex = /\d+\.\d+\.\d+\.\d+/gi;
    var serviceRegex = /\d+_\d+_\w+/gi;
    var slotRegexSingle = /(?=.*slot)\D*(\d+)|(\d+)\/(\d+)\/(\d+)/i; //will return ['slot',pattern1,pattern2,pattern2]
    var portRegexSingle = /(?=.*port)\D*(\d+)|(\d+)\/(\d+)\/(\d+)/i; //will return ['port',pattern1,pattern2,pattern2]
    var slotRegexMultiple = /(?=.*slot)\D*(\d+)|(\d+)\/(\d+)/i; //will return ['slot',pattern1,pattern2,pattern2]
    var portRegexMultiple = /(?=.*port)\D*(\d+)|(\d+)\/(\d+)/i; //will return ['port',pattern1,pattern2,pattern2]

    //lookup data
    if (textGroup.length == 2) { //detect single input format i.e. no delimiter detected.
        var ip = textToLookup.match(ipRegex);
        var service = textToLookup.match(serviceRegex);
        var slot = textToLookup.match(slotRegexSingle); 
        var port = textToLookup.match(portRegexSingle); 
        var slot_port;

        if (inputValidationError()) { return "not found" };
        slotPort();
        var lookupResult = lookup();

        if (lookupResult == undefined) {return "not found"} 
        else {
            let appendResult = "";
            for (let i = 0; i < service.length; i++) {
                appendResult += lookupResult[0] + '\t' + service[i] + '\t' + lookupResult[1] + '\t' + 'Service_Port' + '\n';
            };
            return appendResult;
        };
    } else { //multiple input detected
        let appendResult = "";

        for (let i = 0; i < textGroup.length; i++) {
            // find match for each entry
            if (textGroup[i] == "") {} //regex in textGroup also returned empty array in between match, this is a work around for it
            else {
                var ip = textGroup[i].match(ipRegex);
                var service = textGroup[i].match(serviceRegex);
                var slot = textGroup[i].match(slotRegexMultiple); 
                var port = textGroup[i].match(portRegexMultiple); 
                textGroup[i] = ip[0] + '\t' + "1/" + slot[2] + "/" + port[3] + '\t' + service
                var slot_port = slot[2] + "/" + port[3];

                var lookupResult = lookup();

                //when lookup fail
                if (lookupResult == undefined) {
                    lookupResult = ["not found", "not found"];
                }

                for (let j = 0; j < service.length; j++) {
                    appendResult += lookupResult[0] + '\t' + service[j] + '\t' + lookupResult[1] + '\t' + 'Service_Port' + '\n';
                };
            }
        }
        return appendResult
    }

    //create a combined slot-port variable for easier lookup
    function slotPort() {
        if (slot[3] == undefined) {
            slot_port = slot[1] + "/" + port[1]; //using var because it scoped with {} otherwise slot_port would be undefined
        } else {
            slot_port = slot[3] + "/" + port[4]; //for format 1/slot/port
        }
    }

    //input validation when ip,slot,or port not detected
    function inputValidationError() {
        if (slot == undefined || ip == undefined) {
            return (true)
        }
    }

    //find match in data variable
    function lookup() {
        for (let i = 0; i < data.length; i++) {
            if (ip[0] == data[i][2]) {
                if (data[i][3] == slot_port) {
                    return [data[i][4], data[i][5]];
                };
            }
        }
    }

};

module.exports = proses;
