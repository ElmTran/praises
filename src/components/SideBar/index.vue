<script setup lang="ts">
import router from "../../router";
</script>
<template>
  <div class="sidebar-groups">
    <section class="sidebar-group">
      <button class="button" @click="router.push('/')">
        <i-ep-microphone class="icon" />
      </button>
      <button class="button" @click="router.push('/config')">
        <i-ep-tools class="icon" />
      </button>
    </section>
  </div>
</template>

<style scoped lang="scss">
.sidebar-groups {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  .sidebar-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: rgba(245, 73, 145, 0.4);
    // 透明度
    opacity: 0.8;
    width: 40px;
    height: 80%;
    border-radius: 10px;
    box-shadow:
      rgba(0, 0, 0, 0.2) 0px 5px 15px,
      rgba(245, 73, 145, 0.2) 5px 10px 15px;
    .button {
      outline: 0;
      border: 0;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      transition: all ease-in-out 0.3s;
      cursor: pointer;
    }
    .button:hover {
      transform: scale(1.1);
    }
    .icon {
      font-size: 15px;
    }
  }
}
</style>
