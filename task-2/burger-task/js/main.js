class Order {
    constructor(form) {
        this.form = form;

        this.parameters = [...form.elements.size, ...form.elements.filling, ...form.elements.additives]
            .filter(element => element.checked);

        this.createOrder();
    }

    createOrder() {
        const size = this.parameters[0].labels[0].textContent;
        const filling = this.parameters[1].labels[0].textContent;
        const additives = this.parameters.filter(element => element.name == "additives")
            .map(element => element.labels[0].textContent);
        const price = this.calculatePrice(this.parameters);
        const calories = this.calculateCalories(this.parameters)

        const burger = new Burger(size, filling, additives, price, calories);
        console.log(burger);
        burger.info();
    }

    calculatePrice() {
        return this.parameters
            .filter(element => element.checked)
            .reduce((acc, element) => acc + Number(element.dataset.price), 0);
    }

    calculateCalories() {
        return this.parameters
            .filter(element => element.checked)
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

    getPrice() {
        return this.price;
    }
    
    getCalories() {
        return this.calories;
    }

    info() {
        console.log(`Размер бургера: ${this.size} ` + 
            `\nНачинка бургера: ${this.filling}` +
            `\nДобавки бургера: ${this.additives.join(", ")}` +
            `\n\nБургер содержит ${this.getCalories()} калорий` + 
            ` и стоит ${this.getPrice()} рублей`);
    }
}

document.querySelector("button").addEventListener("click", () => {

    const form = document.forms[0];

    const order = new Order(form);

    console.log("\n\n---------");
});