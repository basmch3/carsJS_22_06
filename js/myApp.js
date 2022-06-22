import Car from "./carClass.js"
import { API_URL } from "./utilities.js"
// request Api Fetch
// const doApi = async() => {
//     let resp = await fetch(API_URL)
//     let data = await resp.json()
//     console.log(data)
// }
const categories = []
const select = document.querySelector('#id_select');
let ar = []
const createCategories = (_data) => {
    categories.push('All')
    _data.forEach(item => {
        if (!categories.includes(item.category))
            categories.push(item.category)
    });
    console.log(categories)

    categories.forEach(item => {
        let opt = document.createElement('option');
        opt.option = item;
        opt.innerHTML = item;
        select.append(opt)
    });
}


// Api axios
const doApi = async() => {
    let resp = await fetch(API_URL)
    let data = await resp.json()
    console.log(data)
    createCategories(data)
    ar = data
    createCars(ar)
}

const createCars = (_ar) => {
    document.querySelector('#parent').innerHTML = ""
    _ar.forEach(item => {
        let car = new Car('#parent', item)
        car.render()
    });
}

const declareEvents = () => {
    select.addEventListener('change', (e) => {
        console.log(e.target.value)
        categoryFilter(e.target.value)
    })
}

const categoryFilter = (_category) => {
    let filtered = []
    if (_category != 'All')
        filtered = ar.filter(item => item.category === _category)
    else
        filtered = ar

    console.log(filtered)

    createCars(filtered)

}
declareEvents()
doApi()