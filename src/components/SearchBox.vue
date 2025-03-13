<template>
    <!--Description: 图书检索框和检索按钮 -->  
    <div class="search-box">
        <input type="text" placeholder="请输入图书名称" />
        <button @click="handleSearch">检索</button>
    </div>
</template>

<script setup>
function handleSearch() {
    window.location.href = 'http://ykt.dl-library.net.cn/uhtbin/cgisirsi/?ps=NULgth7XG7/DALIANLIB/X/60/1182/X';
    console.log('检索');
}

</script>

<style scoped>
.search-box {
    display: flex;
    gap: 1rem;
    margin-top: 3rem;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
}

.search-box input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 20px;
    height: 30px;
  }

  .search-box  button {
    padding: 0.5rem 1rem;
    background-color: #3354ca;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    border-radius: 20px;
    height: 50px;
  }

  .search-button:hover {
    background-color: #abd0e8;
  }
</style>