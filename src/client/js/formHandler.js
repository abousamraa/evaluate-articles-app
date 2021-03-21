import { checkUrl } from './checkURL'
const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

const handleSubmit = async (event) => {
    event.preventDefault()
    const button = document.getElementById('btn-submit')
    let linkUrl = document.getElementById('article-url').value
    if (checkUrl(linkUrl)) {
        const result = await post('http://localhost:8085/addUrl', { linkUrl })
        document.getElementById('text').innerText = `text :   ${result.text}`
        document.getElementById('agreement').innerText = `agreement :   ${result.agreement}`
        document.getElementById('subjectivity').innerText = `subjectivity :   ${result.subjectivity}`
        document.getElementById('confidence').innerText = `confidence :   ${result.confidence}`
        document.getElementById('irony').innerText = `irony :   ${result.irony}`
    } else {
        alert('please enter a valid URL ')
    }
}

export { handleSubmit }
