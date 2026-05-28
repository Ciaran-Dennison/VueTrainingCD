<script setup lang="ts">
import { computed, ref } from 'vue'

const employees = ref([
    {id: "001", fname: "John", sname: "Doe", birthdate: "01/01/2000", startdate: "13/05/2026", role: "Test Engineer", salary: "40000"},
    {id: "002", fname: "Jane", sname: "Doe", birthdate: "31/12/2000", startdate: "03/03/2021", role: "Software Engineer", salary: "45000"},
    {id: "003", fname: "Smithers", sname: "Smitherson", birthdate: "12/05/1967", startdate: "15/07/1998", role: "Delivery Manager", salary: "75000"},
    {id: "004", fname: "Katie", sname: "Roche", birthdate: "01/12/2005", startdate: "18/05/2029", role: "Marketing", salary: "34000"},
    {id: "005", fname: "Ben", sname: "Steel", birthdate: "21/12/1989", startdate: "23/02/2015", role: "TechOps", salary: "45000"},
    {id: "006", fname: "Jim", sname: "Jimbo", birthdate: "31/12/1999", startdate: "03/12/2010", role: "Marketing", salary: "46000"},
    {id: "007", fname: "Sally", sname: "Salsberg", birthdate: "15/02/2007", startdate: "13/06/2025", role: "Solutions Architect", salary: "60000"},
    {id: "008", fname: "Harry", sname: "Harrison", birthdate: "17/10/1976", startdate: "04/07/2000", role: "Software Engineer", salary: "55000"},
    {id: "009", fname: "Jenny", sname: "Jenson", birthdate: "30/08/1954", startdate: "12/09/2005", role: "Test Engineer", salary: "40000"},
    {id: "010", fname: "Bob", sname: "Boberts", birthdate: "04/01/1995", startdate: "19/01/2012", role: "Software Engineer", salary: "50000"}
]);

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
            <link rel="stylesheet" type="text/css" href="EmployeeTable.css"/>
        </head>
        <body>
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
                        <td>{{ item.fname }}</td>
                        <td>{{ item.sname }}</td>
                        <td>{{ item.birthdate }}</td>
                        <td>{{ item.startdate }}</td>
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
            <div> 
            <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
            <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>    
            </div>
        </body>
    </html>
</template>

<style scoped>
body {
    background-color: #064179;
}

table{
    background-color: white;
    margin: auto;
    margin-top: 15%;
}
</style>