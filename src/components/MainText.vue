<template>
  <div class="main">
    <img id="splash" src="../assets/sn.jpg" alt="manipulated image">
    <div class="spacer"></div>
    <div id="writing" class="content">
      <WritingSection/>
    </div>
    <div class="spacer"></div>
    <div id="code" class="content">
      Here are some things I coded
    </div>
    <div class="spacer"></div>
    <div id="contact" class="content">
      Here's where I put my contact information
    </div>
    <div class="spacer"></div>
    <div id="secret">
      And here's a little secret, just for you
    </div>
  </div>
</template>

<script>
import WritingSection from './WritingSection.vue'

export default {
    components: {
      WritingSection
    }
}
</script>

<style>
    #splash {
      padding: 110px 0px;
    }
    .spacer {
      height: 1000px;
    }
    .content {
      padding: 100px 0px 0px;
      text-align: left;
    }
</style>