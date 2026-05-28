<script setup lang="ts">
import { computed, ref } from 'vue'

class employee {
    id:string;
    fName:string;
    sName:string;
    birthDate:string;
    startDate:string;
    role:string;
    salary:string;

    constructor(id:string, fName:string, sName:string, birthDate:string, startDate:string, role:string, salary:string) {
        this.id = id;
        this.fName = fName;
        this.sName = sName;
        this.birthDate = birthDate;
        this.startDate = startDate;
        this.role = role;
        this.salary = salary;
    };
};

const emp1 = new employee("001", "John", "Doe", "01/01/2000", "13/05/2026", "Test Engineer", "40000");
const emp2 = new employee("002", "Jane", "Doe", "31/12/2000", "03/03/2021", "Software Engineer", "45000");
const emp3 = new employee("003", "Smithers", "Smitherson", "12/05/1967", "15/07/1998", "Delivery Manager", "75000");
const emp4 = new employee("004", "Katie", "Roche", "01/12/2005", "18/05/2029", "Marketing", "34000");
const emp5 = new employee("005", "Ben", "Steel", "21/12/1989", "23/02/2015", "TechOps", "45000");
const emp6 = new employee("006", "Jim", "Jimbo", "31/12/1999", "03/12/2010", "Marketing", "46000");
const emp7 = new employee("007", "Sally", "Salsberg", "15/02/2007", "13/06/2025", "Solutions Architect", "60000");
const emp8 = new employee("008", "Harry", "Harrison", "17/10/1976", "04/07/2000", "Software Engineer", "55000");
const emp9 = new employee("009", "Jenny", "Jenson", "30/08/1954", "12/09/2005", "Test Engineer", "40000");
const emp10 = new employee("010", "Bob", "Boberts", "04/01/1995", "19/01/2012", "Software Engineer", "50000");

const employees = ref([emp1,emp2,emp3,emp4,emp5,emp6,emp7,emp8,emp9,emp10]);

const currentPage = ref(1);
const itemsPerPage = ref(5);

const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return employees.value.slice(start,end);
});

const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++; 
};

const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};

const totalPages = computed(() => {
    return Math.ceil(employees.value.length / itemsPerPage.value);
});



const getSalaries = () => {
    let total:number = 0;
    for (let index = 0; index < employees.value.length; index++) {
        let salaryNum:number = Number(employees.value[index]?.salary);
        total += salaryNum
    }
    return total
}


</script>



<template>
    <EmployeeTableData/>
    <html>
        <head>
            <title>Employee Table</title>
            <link rel="stylesheet" type="text/css" href="EmployeeTable.css"/>
        </head>
        <body>
            <div class="positionCenter">
            <table border="1">
                <thead>
                    <th colspan="7">Employee Details</th>
                    <tr>
                        <th>ID No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                        <th>Start Date</th>
                        <th>Role</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in paginatedData" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.fName }}</td>
                        <td>{{ item.sName }}</td>
                        <td>{{ item.birthDate }}</td>
                        <td>{{ item.startDate }}</td>
                        <td>{{ item.role }}</td>
                        <td>{{ item.salary }}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th scope="row">Totals:</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{{ getSalaries() }}</td>
                    </tr>
                </tfoot>
            </table>
            <div class="pagination"> 
            <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
            <span class="paginationText">Page: {{ currentPage }} of {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>    
            </div>
            </div>
            </body>
    </html>
</template>

<style scoped>
body {
    background-color: #064179;
    margin: 0 auto;
}

table{
    background-color: white;
    margin: auto;
}

.positionCenter{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

button {
    display: inline-flexbox;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-color: grey;
    border-radius: 10px;
    height: 30px;
    width: 100px;
    margin: auto;
}

.pagination {
    text-align: center;
}

.paginationText {
    color: white;
}

button:hover {
    background-color: lightgrey;
}

button:focus {
    background-color: grey;
}

html {
    background-color: #064179;
    min-height:100vh;
}

</style>