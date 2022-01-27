'use strict';



let employeeForm = document.getElementById('employeeForm');
let eemployeeSection = document.getElementById('employeeSection');


let employees =[];
checkLocalAndPush();


function employee(employeeID, fullName, department, level, imgurl, salary) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imgurl = imgurl  //`./pic/${this.fullName}.jpg`;
    this.salary = salary;
}



employee.prototype.newEmployeeID = function () {
    this.employeeID = getRndInteger(1000, 9999);
}



employee.prototype.newSalary = function () {
    // let clSalary;
    if (this.level == 'Senior') {
        this.salary = getRndInteger(1500, 2000);
    } else if (this.level == 'Mid-Senior') {
        this.salary = getRndInteger(1000, 1500);
    } else if (this.level == 'Junior') {
        this.salary = getRndInteger(500, 1000);
    }
    // clSalary = clSalary - (clSalary * 0.075);
    // return clSalary; 
}




function render(employeeFromLS) {
    // document.write(`<p> ${this.fullName} the salary: ${this.newSalary()} </p>`)

    employeeSection.innerHTML ='';

    for(let i = 0 ; i < employeeFromLS.length ; i++){
        let emplo = employeeFromLS [i];

    let div = document.createElement('div');
    eemployeeSection.appendChild(div);

    let img = document.createElement('img');
    div.appendChild(img);

    if (emplo.imgurl != '') {
        img.setAttribute('src', emplo.imgurl);
        img.setAttribute('alt', emplo.fullName);
    } else {
        img.setAttribute('src', `./pic/${emplo.fullName}.jpg`);
        img.setAttribute('alt', emplo.fullName);
    }
    let p = document.createElement('p');
    div.appendChild(p);
    p.textContent = `Name: ${emplo.fullName} - ID: ${emplo.employeeID}`

    let p2 = document.createElement('p');
    div.appendChild(p2);
    p2.textContent = `Depertment: ${emplo.department} - Level: ${emplo.level}`

    let p3 = document.createElement('p');
    div.appendChild(p3);
    p3.textContent = `${emplo.salary}`

}

}


function handelSubmit(event) {
    event.preventDefault();
    let fullName = event.target.name.value;


    let department = event.target.department.value;

    let level = event.target.level.value;

    let imgurl = event.target.imgurl.value;

    let newEmplouee = new employee(0, fullName, department, level, imgurl);

    newEmplouee.newEmployeeID();
    newEmplouee.newSalary();
    // newEmplouee.render();

    employees.push(newEmplouee);

    let jsonArr = toJSON();


    saveToLocalS(jsonArr);

    render(readFromLocalS());

}

function readFromLocalS(){
    let gitArr = localStorage.getItem('employees')
    let arr = JSON.parse(gitArr); // to conveart frome json to array
    
    if(arr !== null){   //  ??
        return arr;
    }else{
        return[];
    }

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function saveToLocalS(jsonArr){
    localStorage.setItem('employees', jsonArr)
}



function toJSON(){
    let jsonArray = JSON.stringify(employees);// to conveart frome Array to json
    return jsonArray;
}


function checkLocalAndPush(){
    if(employees.length == 0){
        let arr = readFromLocalS();
        if (arr.length != 0){
            employees =arr;
        }
    }
}

render(readFromLocalS());
employeeForm.addEventListener('submit', handelSubmit);



// const ghaziSamer = new employee('1000', 'Ghazi Samer', 'Administration', 'Senior', );
// ghaziSamer.render();

// const lanaAli = new employee('1001', 'Lana Ali', 'Finance', 'Senior');
// lanaAli.render();

// const tamaraAyoub = new employee('1002', 'Tamara Ayoub', 'Marketing', 'Senior');
// tamaraAyoub.render();

// const safiWalid = new employee('1003', 'Safi Walid', 'Administration', 'Mid-Senior');
// safiWalid.render();

// const omarZaid = new employee('1004', 'Omar Zaid', 'Development', 'Senior');
// omarZaid.render();

// const ranaSaleh = new employee('1005', 'Rana Saleh', 'Development', 'Junior');
// ranaSaleh.render();

// const hadiAhmad = new employee('1006', 'Hadi Ahmad', 'Finance', 'Mid-Senior');
// hadiAhmad.render();


