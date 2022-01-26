'use strict';



let employeeForm = document.getElementById('employeeForm');
let employeeSec = document.getElementById('employee');

function employee(employeeID, fullName, department, level,imgurl, salary) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imgurl = imgurl  //`./pic/${this.fullName}.jpg`;
    this.salary = salary;
}

employee.prototype.newEmployeeID = function(){
    this.employeeID = getRndInteger(1000,9999);
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


employee.prototype.render = function () {
    // document.write(`<p> ${this.fullName} the salary: ${this.newSalary()} </p>`)
    let div = document.createElement('div');
    employeeSec.appendChild(div);

    let img = document.createElement('img');
    div.appendChild(img);
    if(this.imgurl != ''){
    img.setAttribute('src',this.imgurl);
    img.setAttribute('alt',this.fullName);
    }else{
        img.setAttribute('src',`./pic/${this.fullName}.jpg`);
        img.setAttribute('alt',this.fullName);
    }
    let p = document.createElement('p');
    div.appendChild(p);
    p.textContent = `Name: ${this.fullName} - ID: ${this.employeeID}`

    let p2 =document.createElement('p');
    div.appendChild(p2);
    p2.textContent =`Depertment: ${this.department} - Level: ${this.level}`

    let p3 =document.createElement('p');
    div.appendChild(p3);
    p3.textContent= `${this.salary}`

}




function handelSubmit(event){
    event.preventDefault();
    let fullName = event.target.name.value;


    let department = event.target.department.value;

    let level = event.target.level.value;
    
    let imgurl = event.target.imgurl.value;

    let newEmplouee = new employee(0,fullName, department, level, imgurl);

    newEmplouee.newEmployeeID();
    newEmplouee.newSalary();
    newEmplouee.render();
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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


