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

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem){
        // check apakah ada barang yang sama di cart
    const cartItem = this.items.find((item) => item.id === newItem.id);

    // jika belum ada / cart kosong
    if(!cartItem){
        this.items.push({...newItem, quantity: 1, total: newItem.price});
        this.quantity++
        this.total += newItem.price
    }  else{
        // jika barang sudah ada, cek apakah sama dengan yang dicart atau beda
    this.items = this.items.map((item) => {
        if(item.id !== newItem.id){
            return item;
        }else{
            item.quantity++
            item.total = item.price * item.quantity
            this.quantity++
            this.total += item.price
            return item;
        }
    })
}
        },
        remove(id){
            // ambil iitem yang mau diremove berdasarkan id
            const cartItem = this.items.find((item) => item.id === id);
             if(cartItem.quantity > 1){
            // telusuri 1 1
            this.items = this.items.map((item) =>{
                if(item.id !== id){
                    return item;
                }else{
            item.quantity--
            item.total = item.price * item.quantity
            this.quantity--
            this.total -= item.price
            return item;
                }
            })
        }else if(cartItem.quantity === 1){
            // jika barang sisa 1
            this.items = this.items.filter((item) => item.id !== id)
            this.quantity--
            this.total -= cartItem.price
        }
        },
    });
});

// Form Validation
const checkoutButton = document.querySelector('.checkout-button')
checkoutButton.disabled = true;

const form = document.querySelector('#checkoutForm');
form.addEventListener('keyup', function(){
    for(let i = 0; i > form.elements.lenght; i++){
        if(form.elements[i].value.lenght !== 0){
            checkoutButton.classList.remove('disabled')
            checkoutButton.classList.add('disabled')
        }else{
            return false;
        }
    }
    checkoutButton.disabled = false;
    checkoutButton.classList.remove('disabled');
})
// Konversi ke rupiah

const rupiah =  (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
}
