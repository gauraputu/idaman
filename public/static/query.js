//process input
export function proses(data) {
    //data is in array format
    let text = document.getElementById("telegramText").value;

    //detect multiple input
    let textGroup = text.match(/.+[\w\W]*;/gi);
    if (textGroup == undefined) {
        var ip = text.match(/\d+\.\d+\.\d+\.\d+/gi);
        var service = text.match(/\d+_\d+_\w+/gi);
        var slot = text.match(/(?=.*slot)\D*(\d+)|(\d+)\/(\d+)\/(\d+)/i); //['slot',pattern1,pattern2,pattern2]
        var port = text.match(/(?=.*port)\D*(\d+)|(\d+)\/(\d+)\/(\d+)/i); //['port',pattern1,pattern2,pattern2]
        var slot_port;

        if (inputValidationError()) { return "not found" };
        slotPort();
        var lookupResult = lookup();
        document.getElementById("telegramText").value = "";
        if (lookupResult == undefined) { return "not found" } else { return copyToClipboard(lookupResult, service) };
    } else {
        var content = "";
        console.log(textGroup)
        for (let i = 0; i < textGroup.length; i++) {
            var ip = textGroup[i].match(/\d+\.\d+\.\d+\.\d+/gi);
            var service = textGroup[i].match(/\d+_\d+_\w+/gi);
            var slot = textGroup[i].match(/(?=.*slot)\D*(\d+)|(\d+)\/(\d+)/i); //['slot',pattern1,pattern2,pattern2]
            var port = textGroup[i].match(/(?=.*port)\D*(\d+)|(\d+)\/(\d+)/i); //['port',pattern1,pattern2,pattern2]
            textGroup[i] = ip[0] + '\t' + "1/" + slot[2] + "/" + port[3] + '\t' + service
            var slot_port = slot[2] + "/" + port[3];
            var lookupResult = lookup();
            
            //when lookup fail
            if (lookupResult==undefined) {
                lookupResult=["not found","not found"];
            } 
            
            for (let j = 0; j < service.length; j++) {
                content += lookupResult[0] + '\t' + service[j] + '\t' + lookupResult[1] + '\t' + 'Service_Port' + '\n';
            };
        }
        navigator.clipboard.writeText(content);
        document.getElementById("telegramText").value = "";
        return ("Copied to Clipboard!")
    }
    //create a combined slot-port variable for easier lookup
    function slotPort() {
        if (slot[3] == undefined) {
            slot_port = slot[1] + "/" + port[1]; //using var because it scoped with {} otherwise slot_port would be undefined
        } else {
            slot_port = slot[3] + "/" + port[4]; //for format 1/slot/port
        }
    }

    function inputValidationError() {
        if (slot == undefined || ip == undefined) {
            return (true)
        }
    }


    function lookup() {
        for (let i = 0; i < data.length; i++) {
            if (ip[0] == data[i][2]) {
                if (data[i][3] == slot_port) {
                    return [data[i][4], data[i][5]];
                };
            }
        }
    }

    function copyToClipboard(lookupResult, service) {
        let copyResult="";
        for (let i = 0; i < service.length; i++) {
            copyResult += lookupResult[0] + '\t' + service[i] + '\t' + lookupResult[1] + '\t' + 'Service_Port' + '\n';
        };
        navigator.clipboard.writeText(copyResult);
        return "Copied to Clipboard!"
    }
};

//download data from google sheet in the form of array obsolete code (easier to use swr) but will be here for future reference
// export function sheetData(){

//     async function get() {
//         let url = 'https://script.google.com/macros/s/AKfycbxh6ENRLKyYif-w5j-pder-nGVIN-QL_Y88O5DOBCDxIEuHrhQS_1XR0S1om6uPcMwy3Q/exec'
//         let obj = await (await fetch(url)).json();

//         return obj;
//     }

//     let data;
//     (async () => {
//       data = await get()
//     //   console.log(data)
//     })()
// }  