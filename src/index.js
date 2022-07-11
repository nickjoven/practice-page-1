// GOALS:

// Get 5 resources from an API
// append a set of images with text displaying over the images to the DOM

let divArray = []
let exampleAPI = 'https://www.reddit.com/r/all/top.json?raw_json=1&limit=5&t=day'

// function to allow use of API url by passing arguments
const customUrl = (subreddit = 'all', sort = 'top', limit = '10', time = 'day') => {
    let fullUrl = `https://www.reddit.com/r/${subreddit}/${sort}.json?raw_json=1&limit=${limit}&t=${time}`
    return fullUrl
}

// function to use while and for loop over array and store results in an array to display

const fetchData = (url) => {
    fetch(url)
    .then(req => req.json())
    .then(res => {
        while (divArray.length < 4) {
            for (let i = 1; i < res.data.children.length; i++) {
                let newObj = {}
                newObj.imgUrl = res.data.children[i].data["thumbnail_height"] ? res.data.children[i].data.preview.images[0].resolutions[1].url : ''
                divArray.push(newObj)
            }
        }
    })
}

fetchData(exampleAPI)




