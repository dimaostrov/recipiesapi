import axios from 'axios'

const appId = '8883644a'
const appKey = '8f1173290091e413808b9164be2543cf'

const generateCall = (search) => {
    return `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${search}&app_id=${appId}&app_key=${appKey}&from=0&to=30`
}

const callApi = async (search) => {
    const link = generateCall(search)
    const result = await axios.get(link)
    return result;
}

export default callApi;