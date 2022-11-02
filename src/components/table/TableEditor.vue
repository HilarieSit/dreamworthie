<template>
  <div id="app">
      <div id="accordion-header">
        <button v-bind:disabled="current_style==0 ? 'disabled' : null" id="prevStylebtn" @click="prevStyle()">&#x2039;</button>
        <h1>Table Style {{current_style+1}}</h1> 
        <button v-bind:disabled="current_style==styling.length-1 ? 'disabled' : null" id="nextStylebtn" @click="nextStyle()">&#x203A;</button>
      </div>
      <div id="accordion-window">
        <table id='edittable' v-bind:class="styling[current_style].table">
          <caption v-bind:style="styling[current_style].caption" contenteditable="true" @blur="updateCaption"><b>{{caption}}</b></caption>
          <thead v-bind:style="styling[current_style].thead">
          <tr v-bind:style="styling[current_style].border">
            <th scope="col" @blur="updateHeader($event, key)" contenteditable="true" v-for="[index, key] in keys.entries()" :key="key" v-bind:style="styling[current_style].border">
              {{key}}
              <img v-if="index != keys.length-1" class="swap swap-col" @click="swapHeaders(key)" :src='require("@/assets/swap-horizontal.png")' alt="swap" />
              <img class="delete delete-col" @click="deleteColumn(key)" :src='require("@/assets/trash.svg")' alt="trash" />
            </th>
            <div></div>
          </tr>
          </thead>
          <tbody v-bind:style="styling[current_style].tbody">
            <draggable style="display: contents;" item-key="id" v-model="items" ghost-class="ghost" @start="onStart" @end="onEnd">
            <template #item="{element}">
              <tr v-bind:style="styling[current_style].border">
                <td v-for="[index, key] in keys.entries()" :key="key" v-bind:style="styling[current_style].border">
                  <TipTap v-if="rowheader && index==0" v-bind:bold="true" v-bind:text="element[key]" @editText="updateText($event, element, key)" />
                  <TipTap v-else v-bind:bold="false" v-bind:text="element[key]" @editText="updateText($event, element, key)" />
                </td>
                <span class="swap-row" style="font-weight: 900; font-size: 20px;">&#8942;</span>
                <img v-if="this.items.length > 1" class="delete" @click="deleteRow(element)" :src='require("@/assets/trash.svg")' alt="trash"/>
              </tr>
            </template>
            </draggable>
          </tbody>
        </table>
      <button class="btn btn-primary appbtn" @click="addColumn()"> Add Column </button>
      <button class="btn btn-primary appbtn" @click="addRow()"> Add Row </button>
      <button class="btn btn-primary appbtn" @click="toggleRowHeader()"> Row Header </button>

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
import TipTap from './TipTap.vue'
import draggable from 'vuedraggable'
export default {
  name: 'App',
  components: {
    TipTap,
    draggable
  },
  data() {
    return {
      styling: [
        {'id': 0, 'table': 'border', 'caption': 'color: #ffffff; background: #606366; padding-top: 5px; padding-bottom: 5px; border-top: 1px solid #cecece; border-left: 1px solid #cecece; border-right: 1px solid #cecece;', 'thead': 'color: #393f47; background-color: #ececec;', 'tbody': 'background-color: white;', 'border': 'border: 1px solid #cecece;'}, 
        {'id': 1, 'table': 'border', 'caption': 'color: #ffffff; background: #3A708B; padding-top: 5px; padding-bottom: 5px; border-top: 1px solid #cecece; border-left: 1px solid #cecece; border-right: 1px solid #cecece;', 'thead': 'color: white; background-color: #4788A7;', 'tbody': 'background-color: white;', 'border': 'border: 1px solid #cecece;'}, 
        {'id': 2, 'table': 'table-striped', 'caption': '', 'thead': 'background-color: #B31B1B; color: white;', 'tbody': 'background-color: white; color: #3b3b3b;'}, 
        {'id': 3, 'table': 'table-striped', 'caption': '', 'thead': 'background-color: #3c86b0; color: white;', 'tbody': 'background-color: white; color: #3b3b3b;'}, 
        {'id': 4, 'table': 'noshadow', 'caption': '', 'thead': 'background-color: #3c86b0; color: white;', 'tbody': 'background-color: #cccccc; color: #3b3b3b;'},
        {'id': 5, 'table': 'noshadow', 'caption': '', 'thead': 'background-color: #fac249; color: #3b3b3b;', 'tbody': 'background-color: #fffbe9; color: #3b3b3b;'}, 
      ],
      current_style: 0,
      text: 'Nothing copied.',
      items: [
        {id: 0, 'Header 1': 'Item 1a', 'Header 2': 'Item 1b' },
        {id: 1, 'Header 1': 'Item 2a', 'Header 2': 'Item 2b' },
        {id: 2, 'Header 1': 'Item 3a', 'Header 2': 'Item 3b' }
      ],
      caption: "Table Caption",
      rowheader: false
    }
  },
  computed:{
    keys(){
      let keylist = Object.keys(this.items[0])
      keylist.splice(0,1);
      return keylist
    }
  },
  methods:{
    toggleRowHeader(){
      if (this.rowheader){
        this.rowheader = false
      } else {
        this.rowheader = true
      }
    },
    updateCaption(event){
      this.caption = event.target.innerText
    },
    swapHeaders(key){
      for (var i = 0; i < this.items.length; i++) {
        let map = new Map(Object.entries(this.items[i]))
        let mapArr = Array.from(map)
        let index = Array.from(map.keys()).indexOf(key)
        var b = mapArr[index];
        console.log(b)
        mapArr[index] = mapArr[index+1];
        mapArr[index+1] = b
        map.clear();
        mapArr.forEach(([k,v]) => map.set(k,v));
        this.items[i] = Object.fromEntries(mapArr)
      }
    },
    // add new Row
    addRow(){
      let item = {}
      let nRows = this.items.length;
      item["id"] = nRows
      for (var i = 0; i < this.keys.length; i++) {
        item[this.keys[i]] = "Item"
      }
      this.items.push(item);
    },
    // add new Column
    addColumn(){
      let nKeys = this.keys.length;
      for (var i = 0; i < this.items.length; i++) {
        this.items[i]["Header "+String(nKeys+1)] = "";
      }
    },
    // delete selected column
    deleteColumn(key){
      for (var i = 0; i < this.items.length; i++) {
        delete this.items[i][key]
      }
    },
    // delete selected row
    deleteRow(item){
      const index = this.items.findIndex(s => s["id"] === item["id"]);
      this.items.splice(index, 1);
    },
    // update section content
    updateHeader(event, key){
      let editText = event.target.innerText.trim()
      if (editText !== key){
        for (var i = 0; i < this.items.length; i++) {
          let map = new Map(Object.entries(this.items[i]))
          let mapArr = Array.from(map)
          let index = Array.from(map.keys()).indexOf(key)
          mapArr[index][0] = editText;
          map.clear();
          mapArr.forEach(([k,v]) => map.set(k,v));
          this.items[i] = Object.fromEntries(mapArr)
        }
      }
    },
    updateText(event, item, key){
      const index = this.items.findIndex(s => s["id"] === item["id"]);
      this.items[index][key] = event
    },
    // on drag end, disable details
    onStart(){
      const tds = document.getElementsByTagName("td");
      for (var i = 0; i < tds.length; i++) { 
        tds[i].classList.add("disabled");
      }
    },
    // on drag end, remove details disable
    onEnd(){
      const tds = document.getElementsByTagName("td");
      for (var i = 0; i < tds.length; i++) { 
        tds[i].classList.remove("disabled");
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
      this.text = "<table width='99%' class='"+cstyle.table+"'>"
      if (this.caption != ""){
        this.text += "<b><caption style='"+cstyle.caption+"'>"+this.caption+"</caption></b>"
      }
      this.text += "<thead style='"+cstyle.thead+"'><tr>"
      for (let ik in this.keys){
        this.text += "<th scope='col' style='"+cstyle.border+"'>" + String(this.keys[ik]) + "</th>"
      }
      this.text += "</tr></thead>"
      this.text += "<tbody style='"+cstyle.border+"'>"
      for (var ii in this.items){
        this.text += "<tr>"
        for (var ik in this.keys){
          if (this.rowheader && ik==0) {
            this.text += "<td scope='row' style='"+cstyle.border+"'><b>" + String(this.items[ii][this.keys[ik]]) + "</b></td>"
          } else {
            this.text += "<td style='"+cstyle.border+"'>" + String(this.items[ii][this.keys[ik]]) + "</td>"
          }
        }
        this.text += "</tr>"
      }
      this.text += "</tbody></table>"
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
.swap-row{
  cursor: move;
}
.delete-col, .swap-col{
  float: right;
}
table th{
  resize: horizontal; 
  overflow: auto;
}
table tr td:last-child{ /* last-child returns the last instance of the td */
   max-width:50px;
   /* additional styles as required */
 }
table{
  caption-side: top;
  border: none !important;
  border-collapse: collapse !important;
}
table td, table tr{
  border: none;
  outline: none;
}
table caption{
  text-align: center;
}
.noshadow td, .table-striped td, .noshadow th, .table-striped th, .noshadow tr, .table-striped tr{
  border: 1px solid white !important;
}
.table-striped tbody tr:nth-child(odd){
  background-color: #eee;
}
.ghost{
  background-color: rgba(0,0,0,0.2);
}
td {
  text-align: left;
}
.delete, .swap{
  cursor: pointer;
  width: 20px;
  margin: 5px;
  border: none;
  background-color: rgba(0,0,0,0);
  font-weight: bolder;
}
/* .swap-row{
  cursor: move;
} */
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
