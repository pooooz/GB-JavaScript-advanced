class Order {
    constructor(form) {
        this.form = form;

        this.parameters = [...form.elements.size, ...form.elements.filling, ...form.elements.additives]
            .filter(element => element.checked);

        this._createOrder();
    }

    _createOrder() {
        const size = this.parameters[0].labels[0].textContent;
        const filling = this.parameters[1].labels[0].textContent;
        const additives = this.parameters.filter(element => element.name == "additives")
            .map(element => element.labels[0].textContent);
        const price = this._calculatePrice(this.parameters);
        const calories = this._calculateCalories(this.parameters)

        const burger = new Burger(size, filling, additives, price, calories);
        console.log(burger);
        burger.info();
    }

    _calculatePrice() {
        return this.parameters
            .reduce((acc, element) => acc + Number(element.dataset.price), 0);
    }

    _calculateCalories() {
        return this.parameters
            .reduce((acc, element) => acc + Number(element.dataset.calories), 0);
    }
}

class Burger {
    constructor(size, filling, additives, price, calories) {
        this.size = size;
        this.filling = filling;
        this.additives = additives;
        this.price = price;
        this.calories = calories;
    }

    _getPrice() {
        return this.price;
    }
    
    _getCalories() {
        return this.calories;
    }

    info() {
        console.log(`Размер бургера: ${this.size} ` + 
            `\nНачинка бургера: ${this.filling}` +
            `\nДобавки бургера: ${this.additives.join(", ")}` +
            `\n\nБургер содержит ${this._getCalories()} калорий` + 
            ` и стоит ${this._getPrice()} рублей`);
    }
}

document.querySelector("button").addEventListener("click", () => {

    const form = document.forms[0];

    const order = new Order(form);

    console.log("\n\n---------");
});