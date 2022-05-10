function onSubmitForm() {
  
    let Name = document.getElementById('name').value;
    let email = document.getElementById('Email-add').value;
    let job = document.getElementById('job').value;
    let wage = document.getElementById('wage').value;
    let phone = document.getElementById('phone').value
    
    let array = [Name, email, job, wage, phone];
    

    let tr = document.createElement('tr');
    
    for (let i=0; i < array.length; i++) {
        let td = document.createElement('td');
        td.innerHTML = array[i];
        tr.append(td);
    }

    tbody.append(tr);
}