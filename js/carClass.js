export default class Car {

    constructor(_parent, item) {
        this.category = item.category
        this.parent = _parent;
        this.year = item.year;
        this.img_url = item.img_url
        this.price = item.price
        this.model = item.model
        this.company = item.company
    }

    render() {
        let div = document.createElement('div')
        div.className = 'p-3 col-lg-3 col-md-4'
        document.querySelector(this.parent).append(div);
        div.innerHTML = `
        <div class="box overflow-hidden h-100">
        <img width="100%" src=${this.img_url}
            alt=${this.company}>
        <div class="p-3">
            <h1>${this.company}</h1>
            <h3>Price:${this.price}</h3>
            <p>${this.category}</p>
            <p>${this.model} Year:${this.year}</p>
        </div>
    </div>
        `
    }
}