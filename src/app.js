document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
    showImage: true,
        items:[
            {
        id: 1,
        name: 'Chocolate Brownies', 
        img: '1.jpg', 
        price: 15000 },
            {
        id: 2,
        name: 'Butter Croissant',
        img: '2.jpg',
        price: 17000 },
            {
        id: 3,
        name: 'Tiramisu',
        img: '3.jpg',
        price: 25000 },
            {
        id: 4,
        name: 'Mixed Sandwitch',
        img: '4.jpg',
        price: 30000 },
            {
        id: 5,
        name: 'Ice Cream',
        img: '5.jpg',
        price: 10000 },
            {
        id: 6,
        name: 'Coffee Beans',
        img: '6.jpg',
        price: 35000 },
        ],
    }));
});