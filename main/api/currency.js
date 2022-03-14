import axios from 'axios'

export async function getCurrency() { 
    const url = 'https://62262b482dfa524018fe0448.mockapi.io/currencyValute'

    const response = await axios(url, {
        method: 'GET',
    })
}