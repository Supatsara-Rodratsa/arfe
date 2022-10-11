export interface Menu {
    name: any,
    quantity?: any,
    ingredient: any,
    price: any,
    color: any
}

export const iceCoffee: Menu[] = [
    {
        name: 'Iced Latté',
        price: '4,00',
        quantity: '300ml',
        ingredient: 'Espresso with milk, iced',
        color: '#CC8AFF'
    },
    {
        name: 'Iced Matcha',
        price: '4,50',
        quantity: '300ml',
        ingredient: 'Matcha with plant-based wilk, iced',
        color: '#CC8AFF'
    },
    {
        name: 'Frappucino',
        price: '4,00',
        quantity: '300ml',
        ingredient: 'Espresso blended with almound milk and creeme, iced',
        color: '#CC8AFF'
    }
]

export const hotCoffee: Menu[] = [
    {
        name: 'Cappucino',
        price: '3,00',
        quantity: '250ml',
        ingredient: 'Espresso with milk (whole/plant-based)',
        color: '#CC8AFF'
    },
    {
        name: 'Moca',
        price: '3,90',
        quantity: '300ml',
        ingredient: 'Dark chocolate moca with cream',
        color: '#CC8AFF'
    },
    {
        name: 'Special Brew',
        price: '3,50',
        quantity: '',
        ingredient: 'Our special in-house blend (ask barista for details)',
        color: '#CC8AFF'
    }
]

export const coldDrink: Menu[] = [
    {
        name: 'Cold-pressed juice',
        price: '4,00',
        quantity: '300ml',
        ingredient: 'Orange/Apple/Cherry',
        color: '#FF8A9D'
    },
    {
        name: 'Healthy shots ',
        price: '3,00',
        quantity: '80ml',
        ingredient: 'Ginger/Kale shots',
        color: '#FF8A9D'
    },
    {
        name: 'Smoothie',
        price: '4,50',
        quantity: '350ml',
        ingredient: 'Strawberry & Banana with almound milk',
        color: '#FF8A9D'
    }
]

export const hotDrink: Menu[] = [
    {
        name: 'Chai Tea',
        price: '4,00',
        quantity: '300ml',
        ingredient: 'Black tea with spices served with milk',
        color: '#FF8A9D'
    },
    {
        name: 'Ecologic Fusions',
        price: '4,90',
        quantity: '400ml',
        ingredient: 'Chamomile / Lavender / Rooibos / White ',
        color: '#FF8A9D'
    },
    {
        name: 'Hot Chocolate',
        price: '3,50',
        quantity: '280ml',
        ingredient: 'Dark Chocolate drink with oat milk',
        color: '#FF8A9D'
    }
]

export const sweetCorner: Menu[] = [
    {
        name: 'Vegan Mocha Brownie',
        price: '4,00',
        quantity: '230gr',
        ingredient: 'With salty tahini caramel',
        color: '#7AE1E3'
    },
    {
        name: 'Chocolate Croissant ',
        price: '3,00',
        quantity: '200gr',
        ingredient: 'With raw dark chocolate paste',
        color: '#7AE1E3'
    },
    {
        name: 'Matcha Cheesecake',
        price: '3,90',
        quantity: '300gr',
        ingredient: 'With a side of passion fruit puree',
        color: '#7AE1E3'
    }
]

export const breakfast: Menu[] = [
    {
        name: 'Avocado toast',
        price: '7,00',
        quantity: '350gr',
        ingredient: 'Comes with as poached egg ',
        color: '#7AE1E3'
    },
    {
        name: 'Vegan Pancakes ',
        price: '7,90',
        quantity: '400gr',
        ingredient: 'With seasonal berries ',
        color: '#7AE1E3'
    },
    {
        name: 'Bagel',
        price: '6,50',
        quantity: '390gr',
        ingredient: 'Grain bagel with salmon & cream cheese',
        color: '#7AE1E3'
    }
]

