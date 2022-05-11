// 1) All Users With 'userId' = 1.
const url01 =  "https://jsonplaceholder.typicode.com/posts";
async function getUsersWithID01() {
     //  await operator for a promise
    const response01 = await fetch(url01);
    // coverting to to JSON
    const data01 = await response01.json();
    console.log(data01);
    const ul2 = document.getElementById('userwithID01')
    // filter method 
    const userId01 = data01.filter(elements => elements.userId === 1 );
    userId01.forEach(element => {
        //creating list using DOM
        const li = document.createElement('li');
        //craeted textNode for list elements 
        li.appendChild(document.createTextNode((`${element.title}`)))
        ul2.appendChild(li)   
    });
}
getUsersWithID01();

//2) 1.	Display all products name and price, whose products price is greater than 100.
const url02 = "https://fakestoreapi.com/products ";
async function getProdcutsNamePrice(){
    const response02 = await fetch(url02); 
    const data02 = await response02.json();
    //verifying/printing in console
    console.log(data02);
    const ul3 = document.getElementById('productsGraterThan100')
    const productsGT100 = data02.filter(prodcuts => prodcuts.price > 100 );
    productsGT100.forEach(product => {
        const li = document.createElement('li');
        // displaying required 2 elements of Array
        li.appendChild(document.createTextNode((`${product.title}, ${product.price}`))) 
        ul3.appendChild(li);
        
    });

    // 2. Sort by products name in ascending order. (Use array.sort())
    // using sorting with compare function method (by default order: ascending )
    data02.sort(function(a,b){ 
        const name01 = a.title.toUpperCase();
        const name02 = b.title.toUpperCase();
        if (name01 < name02){
            return -1;
        }
        if (name01 > name02){
            return 1;
        }
        return 0;
    })
    console.log(data02)
    ul5 = document.getElementById('ProductsBysAscedingOrder')
    data02.forEach((order) => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode((JSON.stringify(order))))
        ul5.appendChild(li);
    });
 }
 getProdcutsNamePrice();

// 3) 1 - Display all cat names in descending order.

const url03 ="https://api.thecatapi.com/v1/breeds";

async function catsNameInDescending(){
    const response03 = await fetch(url03);
    const data03 = await response03.json();
    console.log(data03);
    data03.sort(function(a,b){
        const cat01 = a.name.toUpperCase();
        const cat02 = b.name.toUpperCase();

        if (cat01 < cat02){
            return -1;
        }
        if (cat01 > cat02){
            return 1;
        }
        return 0;
    })

    data03.reverse(); // Ascending Order To Descending Order By array.reverse method

    const ul6 = document.getElementById('displayCats');;
    data03.forEach(cats => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode((`${cats.name}`)))
        ul6.appendChild(li);
    });

// 2 - Get the cats with country_codes = “US”
    const catsByCountryCodes = data03.filter(cat => cat.country_codes === "US")
    const ul7 = document.getElementById('catsByCountryCodes')
    catsByCountryCodes.forEach(catCountryName => {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode((`${catCountryName.name}`)))
        ul7.appendChild(li); 
    });
} 
catsNameInDescending()




