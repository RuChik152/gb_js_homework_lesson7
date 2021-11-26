"use strict";
/* 
Разметка товара:

<div class="product">
    <div>${здесь_название_товара}</div>
    <img src="${здесь путь до картинки}" alt="">
    <div>${здесь_цена}</div>
    <a href="https://example.com/producs/${здесь_id_товара}">Подробнее</a>
</div>
*/

const products = {
    phones: [
        {
            id: 1,
            name: "Смартфон 1",
            price: "23,99 р.",
            imageUrl: "https://picsum.photos/seed/1/200",
        },
        {
            id: 2,
            name: "Смартфон 2",
            price: "11,99 р.",
            imageUrl: "https://picsum.photos/seed/2/200",
        },
        {
            id: 3,
            name: "Смартфон 3",
            price: "22,99 р.",
            imageUrl: "https://picsum.photos/seed/3/200",
        },
    ],

    tablets: [
        {
            id: 4,
            name: "Планшет 4",
            price: "99,99 р.",
            imageUrl: "https://picsum.photos/seed/4/200",
        },
        {
            id: 5,
            name: "Планшет 5",
            price: "44,99 р.",
            imageUrl: "https://picsum.photos/seed/5/200",
        },
    ],

    tv: [
        {
            id: 6,
            name: "Телевизор 6",
            price: "199,99 р.",
            imageUrl: "https://picsum.photos/seed/6/200",
        },
        {
            id: 7,
            name: "Телевизор 7",
            price: "244,99 р.",
            imageUrl: "https://picsum.photos/seed/7/200",
        },
        {
            id: 8,
            name: "Телевизор 8",
            price: "399,99 р.",
            imageUrl: "https://picsum.photos/seed/8/200",
        },
        {
            id: 9,
            name: "Телевизор 9",
            price: "444,99 р.",
            imageUrl: "https://picsum.photos/seed/9/200",
        },
    ],
};

let btn = document.querySelectorAll('button');
let productsBlock = document.querySelector('.products');

btn.forEach(function (item) {
    item.addEventListener('click', clickHandler);
});

/**
 * Эта функция должна вызываться при клике по кнопкам.
 * @param {MouseEvent} event
 */
function clickHandler(event) {
    productsBlock.innerHTML = '';
    let data = event.currentTarget.dataset.type;
    showCategory(data);
}

/**
 * Функция берет товары (объекты) из соответствующего массива phones,
 * tablets или tv. Генерирует разметку, используя getProductMarkup
 * и вставляет в .products
 * @param {string} category сюда должно прилетать значение атрибута data-type у кнопки,
 * по которой кликнули.
 */
function showCategory(category) {
    switch (category) {
        case 'phones':
            getProductMarkup(products.phones);
            break;
        case 'tablets':
            getProductMarkup(products.tablets);
            break;
        case 'tv':
            getProductMarkup(products.tv);
            break;
    }
}

/**
 * @param {Object} product объект из массива phones, tablets или tv.
 * @param {number} product.id id продукта
 * @param {string} product.name название продукта
 * @param {string} product.price цена продукта
 * @param {string} product.imageUrl путь до картинки товара
 * @returns {string} html-разметка для товара по аналогии из комментария
 * в верху этого файла.
 */
function getProductMarkup(product) {
    product.forEach(function (element) {
        let str = `<div class="product">
                        <div>${element.name}</div>
                        <img src="${element.imageUrl}" alt="">
                        <div>${element.price}</div>
                        <a href="https://example.com/producs/${element.id}">Подробнее</a>
                    </div>`;
        productsBlock.insertAdjacentHTML('afterbegin', str);
    });

    //Решил попробовать без шаблонного литерала, все таки с ним короче выходит, хотя работае и то и то
    /*
    product.forEach(function(element){
        let div = document.createElement('div');
        div.classList.add('product');

        let nameDiv = document.createElement('div');
        let imgDiv = document.createElement('img');
        let pricDiv = document.createElement('div');
        let aDiv = document.createElement('a');

        nameDiv.innerHTML = element.name;
        imgDiv.src = element.imageUrl;
        pricDiv.innerHTML = element.price;
        aDiv.href = `https://example.com/producs/${element.id}`
        aDiv.innerHTML = 'Подробнее';

        div.insertAdjacentElement('afterbegin', aDiv);
        div.insertAdjacentElement('afterbegin', pricDiv);
        div.insertAdjacentElement('afterbegin', imgDiv);
        div.insertAdjacentElement('afterbegin', nameDiv);

        productsBlock.insertAdjacentElement('afterbegin', div);
    });
    */
}
