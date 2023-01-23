<template>
  <div class="CardWord">
    <span class="name">{{ name }}</span>
    <span class="amount">{{ amount }}</span>
  </div>
</template>

<script>

export default {
  name: "CardWord",
  props: ["name", "amount"],
};
</script>

<style scoped>
  .CardWord {
    margin: 15px;
    height: 55px;
    border-radius: 30px;
    background-color: #3ec9a7;
    font-size: 1.4em;
    font-weight: bold;
    display: flex;
    align-items: center;
    color: #616668;
  }
  .CardWord .name {
    margin-left: 10px;
  }
  .CardWord .amount{
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 35px;
    border-radius: 18px;
    background-color: #f2e8c4;
    color: #2b879e;
    font-size: 13px;
  }
</style>
