// ===== ELEMENTS =====
const navbarNav  = document.querySelector('.navbar-nav');
const searchForm = document.querySelector('.search-form');
const searchBox  = document.querySelector('#search-box');
const shoppingCart = document.querySelector('.shopping-cart')

const hm = document.querySelector('#hamburg-icon');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-icon');


// ===== HAMBURGER MENU =====
hm.addEventListener('click', function (e) {
    e.preventDefault();       // karena pakai <a>
    e.stopPropagation();     // cegah bubbling ke document

    navbarNav.classList.toggle('active');
    searchForm.classList.remove('active'); // tutup search
    shoppingCart.classList.remove('active');
});

// ===== SEARCH MENU =====
sb.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    searchForm.classList.toggle('active');
    navbarNav.classList.remove('active');  // tutup hamburger
    shoppingCart.classList.remove('active');
    searchBox.focus();
});

// ===== SHOPPING CART MENU =====
sc.addEventListener('click', function (e) {
    e.preventDefault();       // karena pakai <a>
    e.stopPropagation();     // cegah bubbling ke document

    shoppingCart.classList.toggle('active');
    navbarNav.classList.remove('active');
    searchForm.classList.remove('active');
});
// ===== ITEM DETAIL MENU =====
const itemDetailModal = document.querySelector('#item-detail-modal')
const itemDetailButtons = document.querySelectorAll('.item-detail-button')

itemDetailButtons.forEach((btn) => {
btn.onclick = (e) => {
itemDetailModal.style.display = 'flex';
e.preventDefault();
}
})
// klik  tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) =>{
    itemDetailModal.style.display = 'none';
    e.preventDefault();
};

// ===== CLICK DI LUAR =====
document.addEventListener('click', function (e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
    itemDetailModal.addEventListener('click', function (e) {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
})})
