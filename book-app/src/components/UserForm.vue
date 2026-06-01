<script setup lang="ts">
import { ref } from 'vue'

const defaultForm = {
    firstname: '',
    lastname: '',
    birthdate: '',
    eye_colour: '',
    email: '',
    username: '',
    address1: '',
    address2: '',
    address3: '',
    city: '',
    county: '',
    postcode: '',
    phone: ''
}

const form = ref({ ...defaultForm })

function resetForm() {
    form.value = { ...defaultForm }
}

const showModal = ref(false)

const handleSubmit = () => {
  let fname = form.value.firstname;
  let sname = form.value.lastname;
  let bday = form.value.birthdate;
  let colour = form.value.eye_colour;
  let email = form.value.email;
  let username = form.value.username;
  let add1 = form.value.address1;
  let add2 = form.value.address2;
  let add3 = form.value.address3;
  let city = form.value.city;
  let county = form.value.county;
  let postcode = form.value.postcode;
  let phone = form.value.phone;
  console.log(fname + " " + sname + " " + bday + " " + colour + " " + email + " " + username + " " + add1 + " " + add2 + " " + add3 + " " + city + " " + county + " " + postcode + " " + phone);
  showModal.value = true;
}

function confirmSubmit() {
    showModal.value = false;
    resetForm();
}
</script>



<template>
  <html>
      <head>
          <title>User Details Form</title>
      </head>
      <body>
        <div>
            <div class="headerFormat">
                <h1>User Details Form</h1>
            </div>
            <div class="positionCenter">
                <form id = "userform" @submit.prevent="handleSubmit">
                    <fieldset>
                        <div>
                            <label for="firstname">First Name</label> </br> <input class="grey-background" type="text" id="firstname" v-model="form.firstname"/>
                            </br>
                            <label for="lastname">Last Name</label> </br> <input class="grey-background" type="text" id="lastname" v-model="form.lastname"/>
                            </br>
                            <label for="birthdate">Date of Birth</label> </br> <input class="grey-background" type="date" id="birthdate" v-model="form.birthdate"/>
                            </br>
                            <label for="colour">Eye Colour</label> <br> <select class="grey-background" id="colour" v-model="form.eye_colour">
                                <option value="Blue">Blue</option>
                                <option value="Green">Green</option>
                                <option value="Brown">Brown</option>
                                <option value="Hazel">Hazel</option>
                                <option value="Grey">Grey</option>
                                <option value="Red">Red</option>
                            </select>
                        </div>
                        <div>
                            <label for="email">Email</label> </br> <input class="grey-background" type="email" id="email" v-model="form.email"/>
                            </br>
                            <label for="username">Username</label> </br> <input class="grey-background" type="text" id="username" v-model="form.username"/>
                            
                        </div>
                        <div>
                            <label for="address1">Address Line 1</label> </br> <input class="grey-background" type="text" id="address1" v-model="form.address1"/>
                            </br>
                            <label for="address2">Address Line 2</label> </br> <input class="grey-background" type="text" id="address2" v-model="form.address2"/>
                            </br>
                            <label for="address3">Address Line 3</label> </br> <input class="grey-background" type="text" id="address3" v-model="form.address3"/>
                        </div>
                        <div>
                            <label for="city">City/Town</label> </br> <input class="grey-background" type="text" id="city" v-model="form.city"/>  
                            </br>
                            <label for="county">County</label> </br> <input class="grey-background" type="text" id="county" v-model="form.county"/> 
                            </br>
                            <label for="postcode">Postcode</label> </br> <input class="grey-background" type="text" id="postcode" v-model="form.postcode"/>
                        </div>
                        <div>
                            <label for="phone">Phone Number</label> </br> <input class="grey-background" type="number" id="phone" v-model="form.phone"/>
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
        <div v-if="showModal" class="modal-overlay">
            <div class="modal">
                <h3>Confirm Submission</h3>
                <p>First Name: {{ form.firstname }}</p>
                <p>Last Name: {{ form.lastname }}</p>
                <p>Date of Birth: {{ form.birthdate }}</p>
                <p>Eye Colour: {{ form.eye_colour }}</p>
                <p>Email: {{ form.email }}</p>
                <p>Username: {{ form.username }}</p>
                <p>Address Line 1: {{ form.address1 }}</p>
                <p>Address Line 2: {{ form.address2 }}</p>
                <p>Address Line 3: {{ form.address3 }}</p>
                <p>City: {{ form.city }}</p>
                <p>County: {{ form.county }}</p>
                <p>Postcode: {{ form.postcode }}</p>
                <p>Phone: {{ form.phone }}</p>
                <div class="modal-buttons">
                    <button type="button" @click="showModal = false">Cancel</button>
                    <button type="button" @click="confirmSubmit">Confirm</button>
                </div>
            </div>
        </div>
      </body>
  </html>
</template>

<style scoped>
label {
    color: black;
    display: inline-flexbox;
    width: 20px;
}

body {
    display: inline-flexbox;
    margin: 0 auto;
}

h1 {
    margin-top: 0;
    text-align: center;
    color: white;
}

form {
    margin: auto;
    display: flexbox;
    width: 275px;
    padding: 1em;
    border: 1px solid #cccccc;
    border-radius: 1em;
    background-color: whitesmoke;
}

div + div {
    margin-top: 1em;
}

label span {
    display: inline-flexbox;
    text-align: right;
}

input,
textarea {
    font: 1em sans-serif;
    min-width: 250px;
    box-sizing: flexbox;
    border: 1px solid #999999;
}

input:focus,
textarea:focus {
    border-color: black;
}

textarea {
    vertical-align: top;
    height: 5em;
    resize: vertical;
}

fieldset {
    min-width: 250px;
    box-sizing: flexbox;
    border: 1px solid #999999;
    margin:auto;
    background-color: white;
}

button {
    display: flexbox;
    margin-top: 20px;
    margin: auto;
}

.grey-background {
    background-color: lightgrey;
}

button:hover {
    background-color: grey;
}

body {
    background-color: #064179;
    margin: 0 auto;
}

.headerFormat {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
}

.positionCenter{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

html {
    background-color: #064179;
    min-height:100vh;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  min-width: 300px;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto; 
}

css.modal-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
}

</style>
