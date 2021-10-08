//download data from google sheet in the form of array
export function sheetData(){
    
    async function get() {
        let url = 'https://script.google.com/macros/s/AKfycbxh6ENRLKyYif-w5j-pder-nGVIN-QL_Y88O5DOBCDxIEuHrhQS_1XR0S1om6uPcMwy3Q/exec'
        let obj = await (await fetch(url)).json();
        
        return obj;
    }

    let data;
    (async () => {
      data = await get()
    //   console.log(data)
    })()
    // console.log("function run")
    return {data}
}  

//process input
export function proses(){
    let text = document.getElementById("telegramText").value;
    let ip = text.match(/\d+\.\d+\.\d+\.\d+/gi);
    let service = text.match(/\d+_\d+_\w+/gi);
    let slot = text.match(/(?=.*slot)\D*(\d+)|(\d+)\/(\d+)\/(\d+)/i); //['slot',pattern1,pattern2,pattern2]
    let port = text.match(/(?=.*port)\D*(\d+)|(\d+)\/(\d+)\/(\d+)/i); //['port',pattern1,pattern2,pattern2]
    
  };
