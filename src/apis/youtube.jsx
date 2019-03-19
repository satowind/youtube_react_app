import axios from 'axios';
const KEY = "AIzaSyBps7J3PXF1t62cgEVTxiU7WkKQAIgDpgE";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }

})