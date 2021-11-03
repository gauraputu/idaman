import useSWR from 'swr';

//url of google appscript that post data on load
const url = 'https://script.google.com/macros/s/AKfycbxh6ENRLKyYif-w5j-pder-nGVIN-QL_Y88O5DOBCDxIEuHrhQS_1XR0S1om6uPcMwy3Q/exec';

//fetching data on client side
const fetcher = (...args) => fetch(...args).then(res => res.json())
function FetchData() {
    const { data, error } = useSWR(url, fetcher)

    if (error) return "failed to load"
    if (!data) return "loading..."

    return data
}

module.exports = FetchData;

