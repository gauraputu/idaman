// import Notifications from './pages/Notifications'

//process input
export function proses(data, callback) {
    //data is in array format
    let text = document.getElementById("telegramText").value;
    let ip = text.match(/\d+\.\d+\.\d+\.\d+/gi);
    let service = text.match(/\d+_\d+_\w+/gi);
    let slot = text.match(/(?=.*slot)\D*(\d+)|(\d+)\/(\d+)\/(\d+)/i); //['slot',pattern1,pattern2,pattern2]
    let port = text.match(/(?=.*port)\D*(\d+)|(\d+)\/(\d+)\/(\d+)/i); //['port',pattern1,pattern2,pattern2]

    //input validation
    if (slot == undefined){
        return("not found") 
    }

    //create a combined slot-port variable for easier lookup
    if (slot[3] == undefined) {
        var slot_port = slot[1] + "/" + port[1]; //using var because it scoped with {} otherwise slot_port would be undefined
    } else {
        var slot_port = slot[3] + "/" + port[4];
    }


    for (let i = 0; i < data.length; i++) {
        if (ip[0] == data[i][2]) {
            if (data[i][3] == slot_port) {

                document.getElementById("telegramText").value = "";
                
                //copy to clipboard
                let copyResult = function () {
                    let content = "";
                    for (let j = 0; j < service.length; j++) {
                        content += data[i][4] + '\t' + service[j] + '\t' + data[i][5] + 'Service_Port' + '\n';
                    };
                    return content;
                }();
                navigator.clipboard.writeText(copyResult);
                return("Copied to Clipboard!")
            }
        }
        if (i == data.length) {
            return("not found")
        }
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