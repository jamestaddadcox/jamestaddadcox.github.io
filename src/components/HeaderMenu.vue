<template>
  <div>
    <div id="header">
      <p id="bio">
          <span id="home" v-scroll-to="'#header'">James Tadd Adcox is a writer and software developer living in Pittsburgh.</span>
      </p>
      <div class="menu">
          <button v-scroll-to="'#writing'">Writing</button> | <button v-scroll-to="'#code'">Code</button> | <button v-scroll-to="'#contact'">Contact</button>
      </div>
      <hr>
    </div>
    <MainText/>
  </div>
</template>

<script>
import MainText from './MainText.vue'

export default {
    components: {
        MainText
    }
}
</script>

<style scoped>
#header {
  position: fixed;
  background-color: white;
  width: 100%;
  top: 0;
  left: 0;
}
#bio {
  padding: 5px 20px;
}
#home {
  cursor: pointer;
}
button {
  border: none;
  background-color: transparent;
  padding: 0px 20px 10px;
  margin: 0;
  cursor: pointer;
  outline: none;
  color: inherit;
  font: inherit;
  appearance: none;
}
</style>