<template>
    <div class="container mt-4">
      <div class="card">
        <div class="card-body">
          <div v-for="(item, index) in form" :key="index">
            <h3>Item {{ index + 1 }}</h3>
            <div class="row">
              <div class="col-sm-5">
                <label>Name {{ item.name }}</label>
                <input type="text" class="form-control" v-model="item.name" />
              </div>
              <div class="col-sm-5">
                <label>Price</label>
                <input type="number" class="form-control" v-model="item.price" />
              </div>
              <div class="col-sm-2 pt-4">
                <button type="button" class="btn btn-danger btn-sm" @click="removeRow(index)">x</button>&nbsp;
                <button type="button" class="btn btn-success btn-sm" @click="addRow">+</button>
              </div>
            </div>
          </div>
          <button type="button" class="btn btn-success mt-3" @click="saveItem">Save</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  
  const form = reactive([
    { name: '', price: 0 }
  ]);
  
  const addRow = () => {
    form.push({ name: '', price: 0 });
  };
  
  const removeRow = (index) => {
    if (form.length > 1) {
      form.splice(index, 1);
    }
  };
  
  const saveItem = () => {
    // axios
   
  };
  </script>
  