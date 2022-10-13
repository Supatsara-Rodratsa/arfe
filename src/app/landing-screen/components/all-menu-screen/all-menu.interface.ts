export interface Menu {
    name: any,
    quantity?: any,
    ingredient: any,
    price: any,
    color: any,
    image?: string,
    index: number,
    price_no: number
}

export const iceCoffee: Menu[] = [
    {
        index: 0,
        name: 'Iced Latté',
        price: '4,00',
        quantity: '300ml',
        ingredient: 'Espresso with milk, iced',
        color: '#CC8AFF',
        image: 'assets/images/coffee/icedCoffee.png',
        price_no: 4
    },
    {
        index: 1,
        name: 'Iced Matcha',
        price: '4,50',
        quantity: '300ml',
        ingredient: 'Matcha with plant-based wilk, iced',
        color: '#CC8AFF',
        image: 'assets/images/coffee/ice_matcha.png',
        price_no: 4.5
    },
    {
        index: 2,
        name: 'Frappucino',
        price: '4,00',
        quantity: '300ml',
        ingredient: 'Espresso blended with almound milk and creeme, iced',
        color: '#CC8AFF',
        image: 'assets/images/coffee/frappucino.png',
        price_no: 4
    }
]

export const hotCoffee: Menu[] = [
    {
        index: 3,
        name: 'Cappucino',
        price: '3,00',
        quantity: '250ml',
        ingredient: 'Espresso with milk (whole/plant-based)',
        color: '#CC8AFF',
        image: 'assets/images/coffee/cappuccino.png',
        price_no: 3
    },
    {
        index: 4,
        name: 'Moca',
        price: '3,90',
        quantity: '300ml',
        ingredient: 'Dark chocolate moca with cream',
        color: '#CC8AFF',
        image: 'assets/images/coffee/moca.png',
        price_no: 3.9
    },
    {
        index: 5,
        name: 'Special Brew',
        price: '3,50',
        quantity: '250ml',
        ingredient: 'Our special in-house blend (ask barista for details)',
        color: '#CC8AFF',
        image: 'assets/images/coffee/special_brew.png',
        price_no: 3.5
    }
]

export const coldDrink: Menu[] = [
    {
        index: 0,
        name: 'Cold-pressed juice',
        price: '4,00',
        quantity: '300ml',
        ingredient: 'Orange/Apple/Cherry',
        color: '#FF8A9D',
        image: 'assets/images/drink/juice.png',
        price_no: 4
    },
    {
        index: 1,
        name: 'Healthy shots ',
        price: '3,00',
        quantity: '80ml',
        ingredient: 'Ginger/Kale shots',
        color: '#FF8A9D',
        image: 'assets/images/drink/health-shot.png',
        price_no: 3
    },
    {
        index: 2,
        name: 'Smoothie',
        price: '4,50',
        quantity: '350ml',
        ingredient: 'Strawberry & Banana with almound milk',
        color: '#FF8A9D',
        image: 'assets/images/drink/smoothie.png',
        price_no: 4.5
    }
]

export const hotDrink: Menu[] = [
    {
        index: 3,
        name: 'Chai Tea',
        price: '4,00',
        quantity: '300ml',
        ingredient: 'Black tea with spices served with milk',
        color: '#FF8A9D',
        image: 'assets/images/drink/Chai-Latte.png',
        price_no: 4
    },
    {
        index: 4,
        name: 'Ecologic Fusions',
        price: '4,90',
        quantity: '400ml',
        ingredient: 'Chamomile / Lavender / Rooibos / White ',
        color: '#FF8A9D',
        image: 'assets/images/drink/turmeric.png',
        price_no: 4.9
    },
    {
        index: 5,
        name: 'Hot Chocolate',
        price: '3,50',
        quantity: '280ml',
        ingredient: 'Dark Chocolate drink with oat milk',
        color: '#FF8A9D',
        image: 'assets/images/drink/hot-chocolate.png',
        price_no: 3.5
    }
]

export const sweetCorner: Menu[] = [
    {
        index: 0,
        name: 'Vegan Mocha Brownie',
        price: '4,00',
        quantity: '230gr',
        ingredient: 'With salty tahini caramel',
        color: '#7AE1E3',
        image: 'assets/images/snack/vegan.png',
        price_no: 4
    },
    {
        index: 1,
        name: 'Chocolate Croissant ',
        price: '3,00',
        quantity: '200gr',
        ingredient: 'With raw dark chocolate paste',
        color: '#7AE1E3',
        image: 'assets/images/snack/croissant.png',
        price_no: 3
    },
    {
        index: 2,
        name: 'Matcha Cheesecake',
        price: '3,90',
        quantity: '300gr',
        ingredient: 'With a side of passion fruit puree',
        color: '#7AE1E3',
        image: 'assets/images/snack/matcha-cheesecake.png',
        price_no: 3.9
    }
]

export const breakfast: Menu[] = [
    {
        index: 3,
        name: 'Avocado toast',
        price: '7,00',
        quantity: '350gr',
        ingredient: 'Comes with as poached egg ',
        color: '#7AE1E3',
        image: 'assets/images/snack/avocado-toast.png',
        price_no: 7
    },
    {
        index: 4,
        name: 'Vegan Pancakes ',
        price: '7,90',
        quantity: '400gr',
        ingredient: 'With seasonal berries ',
        color: '#7AE1E3',
        image: 'assets/images/snack/vegan-pancake.png',
        price_no: 7.9
    },
    {
        index: 5,
        name: 'Bagel',
        price: '6,50',
        quantity: '390gr',
        ingredient: 'Grain bagel with salmon & cream cheese',
        color: '#7AE1E3',
        image: 'assets/images/snack/salmon-bagal.png',
        price_no: 6.5
    }
]

