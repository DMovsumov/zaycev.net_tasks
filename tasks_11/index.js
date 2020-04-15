const fruits = [
    {id: 1, type: 'apple', price: 52},
    {id: 2, type: 'apple', price: 76},
    {id: 3, type: 'orange', price: 48},
    {id: 4, type: 'orange', price: 52},
    {id: 5, type: 'apple', price: 32},
    {id: 6, type: 'pineapple', price: 52},
    {id: 7, type: 'apple', price: 88},
    {id: 8, type: 'pineapple', price: 66},
    {id: 9, type: 'apple', price: 52},
    {id: 10, type: 'pineapple', price: 88},
]

// 1 Способ изменяем массив

const methodOne = (items) => {    
    let i
    for (i = items.length - 1; i >= 0; --i) {
        if (items[i].type == 'apple') {
            items.splice(i, 1);
        } else if(items[i].type == 'pineapple') {
            items[i].price = items[i].price * 2
        }
    }
}

methodOne(fruits)
console.log(fruits)

// 2 Способ создаем новый массив, а старый оставляем 

// const newFruits = []
// const methodTwo = (items) => {
//     items.forEach(element => {
//         if(element.type != 'apple') {
//             newFruits.push(element)
            
//         }
//     });
//     newFruits.forEach(item => {
//         if(item.type == 'pineapple') {
//             item.price = item.price * 2
//         }
//     })
// }

// methodTwo(fruits)
// console.log(newFruits)

