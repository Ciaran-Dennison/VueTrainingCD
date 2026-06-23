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
    <html>
        <head>
            <title>Employee Table</title>
        </head>
        <body>
            <div class="container">
                <div class="grid-table">

                        <div class="grid-title">Employee Details</div>

                        <div class="grid-header">ID No.</div>
                        <div class="grid-header">First Name</div>
                        <div class="grid-header">Last Name</div>
                        <div class="grid-header">Date of Birth</div>
                        <div class="grid-header">Start Date</div>
                        <div class="grid-header">Role</div>
                        <div class="grid-header">Salary</div>

                        <template v-for="item in paginatedData" :key="item.id">
                            <div class="grid-cell">{{ item.id }}</div>
                            <div class="grid-cell">{{ item.fName }}</div>
                            <div class="grid-cell">{{ item.sName }}</div>
                            <div class="grid-cell">{{ item.birthDate }}</div>
                            <div class="grid-cell">{{ item.startDate }}</div>
                            <div class="grid-cell">{{ item.role }}</div>
                            <div class="grid-cell">{{ item.salary }}</div>
                        </template>

                        <div class="grid-footer">Totals:</div>
                        <div class="grid-cell"></div>
                        <div class="grid-cell"></div>
                        <div class="grid-cell"></div>
                        <div class="grid-cell"></div>
                        <div class="grid-cell"></div>
                        <div class="grid-cell">{{ getSalaries() }}</div>

                    </div>
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



.grid-table {
  display: grid;
  grid-template-columns: repeat(7, auto);
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 5px 2px #333;
  margin: auto;
  width: fit-content;
}

.grid-title {
  grid-column: 1 / 8;
  text-align: center;
  font-weight: bold;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.grid-header {
  font-weight: bold;
  padding: 10px;
  background-color: #f0f0f0;
  text-align: center;
}

.grid-cell {
  padding: 10px;
  text-align: center;
}

.grid-footer {
  font-weight: bold;
  padding: 10px;
}



.container{
    overflow-x: auto;
    padding-top: 25vh;
    align-content: center;
}

button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
    height: 30px;
    width: 100px;
    margin: auto;
    box-shadow: 0 0 5px 2px #333;
}

.grid-cell:nth-child(14n+8),
.grid-cell:nth-child(14n+9),
.grid-cell:nth-child(14n+10),
.grid-cell:nth-child(14n+11),
.grid-cell:nth-child(14n+12),
.grid-cell:nth-child(14n+13),
.grid-cell:nth-child(14n+14) {
  background-color: whitesmoke;
}

.grid-cell:hover {
  background-color: #3068a0;
  color: white;
}

.pagination {
    padding-top: 10px;
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