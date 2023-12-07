<template>
  <div id="main">
    <img id="splash" src="../assets/sn.jpg" alt="manipulated image">
    <div class="spacer"></div>
    <div id="writing" class="content">
      <WritingSection/>
    </div>
    <div class="spacer"></div>
    <div id="code" class="content">
      <CodeSection/>
    </div>
    <div class="spacer"></div>
    <div id="contact" class="content">
      <ContactSection/>
    </div>
    <div class="spacer"></div>
    <div id="secret">
      <p></p> 
    </div>
  </div>
</template>

<script>
import CodeSection from './CodeSection.vue'
import ContactSection from './ContactSection.vue'
import WritingSection from './WritingSection.vue'

export default {
    components: {
      WritingSection,
      CodeSection,
      ContactSection
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