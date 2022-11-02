<template>
  <div id="app">
      <div id="accordion-header">
        <button v-bind:disabled="current_style==0 ? 'disabled' : null" id="prevStylebtn" @click="prevStyle()">&#x2039;</button>
        <h1>Accordion Style {{current_style+1}}</h1> 
        <button v-bind:disabled="current_style==styling.length-1 ? 'disabled' : null" id="nextStylebtn" @click="nextStyle()">&#x203A;</button>
      </div>
      <div id="accordion-window">
      <draggable v-model="content_list" item-key="id" ghost-class="ghost" @start="onStart" @end="onEnd">
        <template #item="{element}">
          <div class="accordion">
            <Accordion :content="element" v-bind:styling="styling[current_style]" @editContent='updateSection' />
            <button class="deletebtn" @click="deleteSection(element)"> &#10006; </button>
        </div>
        </template>
      </draggable>
      <button class="btn btn-primary appbtn" @click="addSection()"> Add Section </button>

      <input id="copytext" class="copytext" 
        v-on:focus="$event.target.select()" 
        ref="clone" 
        readonly 
        :value="text"/>
      <button class="btn btn-success appbtn" id="copybtn" @click="copy()"> Copy HTML </button>
   </div>
  </div>
</template>

<script>
import Accordion from './AccordionShell.vue'
import draggable from 'vuedraggable'

export default {
  name: 'App',
  components: {
    Accordion,
    draggable
  },
  data() {
    return {
      content_list: [
        {'id': 0, 'title': 'Section Title 1', 'text': '<p>Add text here. Drag accordion sections to rearrange order. Select text to edit style and enter new line for more formats.'}, 
        {'id': 1, 'title': 'Section Title 2', 'text': ''}
      ],
      styling: [
        {'id': 0, 'details': 'border: 2px solid #ddd; margin-bottom: -2px;', 'summary': 'padding: 12px 15px; color: #b31b1b; cursor: pointer; background-color: #eee;', 'textdiv': 'padding: 0px 10px 10px;'}, 
        {'id': 1, 'details': 'margin-bottom: -2px;', 'summary': 'padding: 12px 15px; border: 2px solid #eeeeee; color: #b31b1b; font-size: 15.5pt; font-weight: bold; cursor: pointer;', 'textdiv': 'padding: 10px;'},
        {'id': 2, 'details': '', 'summary': 'color: white; background-color: #de2424; padding: 10px; border: 3px solid #B31B1B; border-radius: 30px; width: 170px; text-align: center; margin-top: 10px; position: relative;', 'textdiv': 'padding: 20px; background-color: #eee; border: 3px solid #aaa; border-radius: 30px; margin-left: 25px; margin-top: -25px; z-index: 2;'}
      ],
      current_style: 0,
      text: 'Nothing copied.'
    }
  },
  methods:{
    // add new section
    addSection(){
      let nSections = this.content_list.length;
      let section = {'id': nSections, 'title': 'Section Title ' + String(nSections+1), 'text': ''};
      this.content_list.push(section);
    },
    // delete selected section
    deleteSection(section){
      const taskIndex = this.content_list.findIndex(s => s.id === section.id);
      this.content_list.splice(taskIndex, 1);
    },
    // update section content
    updateSection(section){
      const taskIndex = this.content_list.findIndex(s => s.id === section.id);
      this.content_list[taskIndex] = section
    },
    // on drag end, disable details
    onStart(){
      const detailstag = document.getElementsByTagName("details");
      for (var i = 0; i < detailstag.length; i++) { 
        detailstag[i].classList.add("disabled");
      }
    },
    // on drag end, remove details disable
    onEnd(){
      const detailstag = document.getElementsByTagName("details");
      for (var i = 0; i < detailstag.length; i++) { 
        detailstag[i].classList.remove("disabled");
      }
    },
    // go to next accordion style
    nextStyle(){
      this.current_style += 1;
    },
    // go to previous accordion style
    prevStyle(){
      this.current_style -= 1;
    },
    // html string in textarea and copy to clipboard
    copy(){
      var cstyle = this.styling[this.current_style];
      this.text = "<div style='margin-bottom: 2px; overflow: hidden; padding-bottom: 2px;'>"
      for (let i = 0; i < this.content_list.length; i++) { 
        var ccontent = this.content_list[i];
        this.text += "<details style='"+cstyle.details+"'><summary style='"+cstyle.summary+"'>"+ccontent.title+"</summary><div style='"+cstyle.textdiv+"'>"+ccontent.text+"</div></details>";
      }
      this.text += "</div>"
      document.getElementById("copytext").value = this.text;
      this.$refs.clone.focus();
      document.execCommand('copy');
      var copybtn = document.getElementById('copybtn');
      var lasttext = copybtn.innerHTML;
      copybtn.innerHTML = 'Copied!';
      setTimeout(function () {
          copybtn.innerHTML = lasttext;
      }.bind(this), 500);
    }
  }
}
</script>

<style>
p{
  margin: 12px 0;
}
.disabled{
  pointer-events: none;
}
.copytext{
  opacity: 0;
  position: absolute;
  left: -999999px;
}
.ghost{
  opacity: 30%;
}
body{ 
  background-color: #eee;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#accordion-window{
  border-radius: 5px;
  padding: 5px;
  align-items: center;
  margin: 0 auto;
  background-color: white;
  border: 2px #888 solid;
  max-width: 900px;
}
#accordion-header{
  margin: 25px 0 0;
  text-align: center;
  padding-bottom: 10px;
}
#accordion-header h1{
  width: 100%;
  margin: 0;
  padding: 0;
  display: inline;
}
.appbtn{
  width: 120px;
  margin-top: 10px;
  margin-right: 5px;
}
.deletebtn{
  position: absolute;
  top: 2px;
  right: 5px;
  padding: 5px;
  border: none;
  background-color:rgba(255, 0, 0, 0);
}
.deletebtn:hover{
  color: #aaa;
}
.accordion{
  position: relative;
}
#prevStylebtn, #nextStylebtn{
  border: none;
  background-color: #eee;
  font-size: 40px;
  margin: 0;
  padding: 0 10px;
}

@media only screen and (max-width: 900px) {
  #accordion-window{
    margin: 0 20px;
  }
}

</style>
