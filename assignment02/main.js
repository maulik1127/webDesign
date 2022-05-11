const rawData =  [
    {
        "name":"Harry Potter",
         "city":"London"
    },
    {
        "name":"Don Quixote",
        "city":"Madrid"
    },
    {
        "name":"Joan of Arc",
        "city":"Paris"
    },
    {
        "name":"Rosa Park",
        "city":"Alabama"
    },
    {
        "name":"John",
        "city":" Paris"
    }
]	

// Display All The Users From Array
const ul = document.getElementById('displayAllUsers');
rawData.forEach(element => {
    const user = element.name;
    let li = document.createElement('li');
    li.innerHTML = `${user}`;
    ul.appendChild(li);
})
// Display All User Names From City London 
const ul1 = document.getElementById('usersFromLondon')
const usersLondon = rawData.filter(items => items.city === "London");
usersLondon.forEach((elements) => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode((`${elements.name}`)));
    ul1.appendChild(li);
})














