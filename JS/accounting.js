'use strict';
let employeeSec = document.getElementById('employeeSec');
let eemployeeSection = document.getElementById('employeeSection');


render2(readFromLocalS2());


function employee(employeeID, fullName, department, level, imgurl, salary) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imgurl = imgurl  //`./pic/${this.fullName}.jpg`;
    this.salary = salary;
}

function render2(employeeFromLS) {
    employeeSec.innerHTML = '';
     
    let div = document.createElement('div');
    employeeSec.appendChild(div);
    let tbl = document.createElement("table");
    div.appendChild(tbl)
    let tblBody = document.createElement("tbody");
    tbl.appendChild(tblBody);

    let cuntAdmin =0; 
    let adminEmployee = 0
    let adminAvr= 0;

    let cuntMarkit = 0;
    let marketEmployee = 0;
    let marketingAvr =0

    let cuntDev = 0;
    let devEmployee = 0;
    let devAvr = 0;

    let cuntFinance = 0;
    let FinanceEmployee = 0;
    let financeAvr = 0;
    for(let i = 0; i <employeeFromLS.length ; i++){
        let emplo = employeeFromLS[i];

        if(emplo.department == 'administration'){
            cuntAdmin += emplo.salary;
            adminEmployee ++;
            adminAvr = cuntAdmin/adminEmployee;
            
        }else if(emplo.department == 'marketing'){
            cuntMarkit += emplo.salary;
            marketEmployee ++;
            marketingAvr= cuntMarkit/marketEmployee
        }else if(emplo.department == 'development'){
            cuntDev += emplo.salary;
            devEmployee ++;
            devAvr =cuntDev/devEmployee
        }else if(emplo.department == 'finance'){
            cuntFinance += emplo.salary;
            FinanceEmployee ++;
            financeAvr= cuntFinance/FinanceEmployee
        }
    }
    
    for (let j = 0; j <= 0; j++) {

        let row = document.createElement("tr");

        for (let i = 0; i < 4; i++) {

            if (i == 0) {
                let cell = document.createElement("th");
                let cellText = document.createTextNode('Department');

                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (i == 1) {
                let cell = document.createElement("th");
                let cellText = document.createTextNode('Total Salary');

                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (i == 2) {
                let cell = document.createElement("th");
                let cellText = document.createTextNode('Averge');

                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (i == 3) {
                let cell = document.createElement("th");
                let cellText = document.createTextNode('EmployeeNump');

                cell.appendChild(cellText);
                row.appendChild(cell);
            }

        }
        tblBody.appendChild(row);

    }
    

    for (let j = 0; j <= 3; j++) {

        let row = document.createElement("tr");

        for (let i = 0; i < 1; i++) {

            if (j == 0) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode('Administration');
                
                let cell2 = document.createElement('td');
                let cell2Text = document.createTextNode(cuntAdmin)
                let cell3 = document.createElement('td');
                let cell3Text = document.createTextNode(adminAvr)
                let cell4 = document.createElement('td');
                let cell4Text = document.createTextNode(adminEmployee)

                cell.appendChild(cellText);
                row.appendChild(cell);

                cell2.appendChild(cell2Text);
                row.appendChild(cell2)
                cell3.appendChild(cell3Text);
                row.appendChild(cell3)
                cell4.appendChild(cell4Text);
                row.appendChild(cell4)
            } else if (j == 1) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode('Marketing');
                let cell2 = document.createElement('td');
                let cell2Text = document.createTextNode(cuntMarkit)
                let cell3 = document.createElement('td');
                let cell3Text = document.createTextNode(marketingAvr)
                let cell4 = document.createElement('td');
                let cell4Text = document.createTextNode(marketEmployee)

                cell.appendChild(cellText);
                row.appendChild(cell);

                cell2.appendChild(cell2Text);
                row.appendChild(cell2)
                cell3.appendChild(cell3Text);
                row.appendChild(cell3)
                cell4.appendChild(cell4Text);
                row.appendChild(cell4)
            } else if (j == 2) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode('Development');
                let cell2 = document.createElement('td');
                let cell2Text = document.createTextNode(cuntDev)
                let cell3 = document.createElement('td');
                let cell3Text = document.createTextNode(devAvr)
                let cell4 = document.createElement('td');
                let cell4Text = document.createTextNode(devEmployee)

                cell.appendChild(cellText);
                row.appendChild(cell);
                cell2.appendChild(cell2Text);
                row.appendChild(cell2)
                cell3.appendChild(cell3Text);
                row.appendChild(cell3)
                cell4.appendChild(cell4Text);
                row.appendChild(cell4)
            } else if (j == 3) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode('Finance');
                let cell2 = document.createElement('td');
                let cell2Text = document.createTextNode(cuntFinance)
                let cell3 = document.createElement('td');
                let cell3Text = document.createTextNode(financeAvr)
                let cell4 = document.createElement('td');
                let cell4Text = document.createTextNode(FinanceEmployee)

                cell.appendChild(cellText);
                row.appendChild(cell);
                cell2.appendChild(cell2Text);
                row.appendChild(cell2)
                cell3.appendChild(cell3Text);
                row.appendChild(cell3)
                cell4.appendChild(cell4Text);
                row.appendChild(cell4)
            }

        }
        tblBody.appendChild(row);

    }
}

function handelSubmit(event) {
    event.preventDefault();

    // totalSalary(readFromLocalS2());
    render2(readFromLocalS2());

}
function readFromLocalS2() {
    let getArr = localStorage.getItem('employees')
    let arr = JSON.parse(getArr);

    

    if (arr !== null) {
        return arr;
    } else {
        return [];
    }
}

function totalSalary(){
    let cuntAdmin =0; 
    let cuntMarkit = 0;
    let cuntDev = 0;
    let cuntFinance = 0;
    
    for(let i = 0; i <employeeFromLS.length ; i++){
        let emplo = employeeFromLS[i];

        if(emplo.department == 'administration'){
          return  cuntAdmin += emplo.salary;
        }else if(emplo.department == 'marketing'){
           return cuntMarkit += emplo.salary;
        }else if(emplo.department == 'development'){
           return cuntDev += emplo.salary;
        }else if(emplo.department == 'finance'){
           return cuntFinance += emplo.salary;
        }
    }
}
// function tableCreate() {
//     let div = document.createElement('div');
//         employeeSec.appendChild(div);

//     // create elements <table> and a <tbody>
//     let tbl = document.createElement("table");
//         div.appendChild(tbl)
//     let tblBody = document.createElement("tbody");
//         tbl.appendChild(tblBody);
//     // cells creation

// }
// console.log(totalSalary(readFromLocalS2()))


employeeForm.addEventListener('submit', handelSubmit);