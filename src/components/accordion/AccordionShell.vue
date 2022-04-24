<template>
  <details open v-bind:style="styling.details">
    <summary v-bind:style="styling.summary" @click="summaryclick">
      <div class="titletiptap" @click="preventToggle()" @keyup.space="preventToggle()">
        <TitleTipTap v-bind:title="sec_content.title" @editTitle="updateTitle" />
      </div>
    </summary>
    <div v-bind:style="styling.textdiv">
      <TipTap v-bind:text="sec_content.text" @editText="updateText" />
    </div>
</details>
</template>

<script>
import TipTap from './TipTap.vue'
import TitleTipTap from './TitleTipTap.vue'
export default {
  components: {
    TipTap,
    TitleTipTap
  },
  props: {
    content: Object,
    styling: Object
  },
  emits: ['editContent'],
  data() {
    return {
      sec_content: this.content,
      toggle: true
    }
  },
  methods:{
    // update section title and emit updated section
    updateTitle(html){
      this.sec_content.title = html
      this.$emit('editContent', this.sec_content);
    },
    // update section text and emit updated section
    updateText(html){
      this.sec_content.text = html
      this.$emit('editContent', this.sec_content);
    },
    // prevent collapse/open 
    summaryclick(event){
      if (this.toggle == false){
        event.preventDefault()
        this.toggle = true
      }
    },
    preventToggle(){
      this.toggle = false
    }
  }
}
</script>

<style>
.titletiptap{
  display: inline-block;
  padding: 0;
  margin: -12px 0;
}
.disabled {
  pointer-events: none;
}
:focus {
  outline: none;
}
</style>