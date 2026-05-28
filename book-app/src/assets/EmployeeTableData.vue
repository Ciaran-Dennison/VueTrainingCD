<script setup lang="ts">
import { ref } from 'vue'

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


</script>



<template>

</template>

<style scoped>

</style>