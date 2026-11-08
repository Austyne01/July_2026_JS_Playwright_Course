/*Q9. Create an object product with name, price and an inner object seller that has sellerName,
rating and location. Print the seller's rating and location using nested dot notation*/

let product={
name:'Soap',
price:35,
seller:{
sellerName:'Hamam',
rating:4.7,
location:'Mumbai'
}
};

console.log(`Seller rating ${product.seller.rating}, seller location ${product.seller.location}`);


