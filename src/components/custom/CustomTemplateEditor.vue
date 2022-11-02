<template>
    <div id="custom"> 
        <div id="custom-text">
            <h1> Fill in Custom Template </h1>
            <p> Add a descriptive label between <code>##%%</code> and <code>%%##</code> in the template where you want to fill in text.</p>
        </div>
        <textarea v-model="customhtml" id="cm-editor"></textarea>
        <div v-if="keywords" id="keywords-box">
            <p> Complete the form below and copy HTML.</p>
            <table id="keywordstable">
                <tr class="keywords" v-for="keyword in keywords" :key="keyword">
                    <td class="keywords-label"><label><b>{{keyword}}</b></label> </td>
                    <td><div class="keywords-text" contenteditable="true" @blur="onDivBlur($event, keyword)"></div></td>
                </tr>
            </table>
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
import * as CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/xq-light.css'
import 'codemirror/mode/xml/xml.js'
import 'codemirror/addon/selection/active-line'
import 'codemirror/addon/display/placeholder.js'

export default {
    data() {
        return {
            customhtml: '',
            replacedhtml: '',
            editor: null, 
            text: '',
            keywords_obj: {}
        }
    },
    computed: {
        keywords: function() {
            const regex = /(##%%)(.*?)(%%##)/g;
            let matches = this.customhtml.match(regex)
            if (matches != null){
                for (let i=0; i<matches.length; i++){
                    matches[i] = matches[i].replace(/(##%%)|(%%##)/g, '')
                }
                return [...new Set(matches)]
            }
            return matches
        }
    },
    mounted() {
        this.editor = CodeMirror.fromTextArea(document.getElementById('cm-editor'), {
            lineNumbers: true,
            theme: 'xq-light',
            styleActiveLine: { nonEmpty: true },
            placeholder: 'Paste your HTML template here'
        }),
        this.editor.on('change', (editor) => {
            this.customhtml = editor.getValue()
        });
    },
    methods: {
        onDivBlur(e, keyword) {
            this.keywords_obj[keyword] = e.target.innerHTML;
        },
        // html string in textarea and copy to clipboard
        copy(){
            this.replacedhtml = this.customhtml.replace(/(##%%)(.*?)(%%##)/g, m => this.keywords_obj[m.replace(/(##%%)|(%%##)/g, '')]);
            document.getElementById("copytext").value = this.replacedhtml;
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

<style scoped>
#keywords-box{
    margin: 30px 25px;
}
#table-window, .CodeMirror{
  border-radius: 5px;
  padding: 5px;
  align-items: center;
  margin: 0 25px;
  background-color: white;
  border: 2px #888 solid;
}
.CodeMirror pre.CodeMirror-placeholder { 
    color: #999;
}
.CodeMirror{
    height: 150px;
    min-height: 50px;
    resize: vertical;
}
#custom{
    display: block;
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
}
#custom-text{
    margin: 45px 25px 20px;
}
#custom-text h1{
    text-align: center;
}
table{
    width: 100%;
    border-radius: 5px !important;
    border: 2px #888 solid;
    text-align: center;
    border-collapse: collapse;
}
td, tr{
    border: 1px #888 solid;
    align-content: left;
    padding: 5px;
}
.keywords-label{
    width: 30vw;
    background-color: #ddd;
}
.keywords-text{
    padding-left: 3px;
    text-align: left;
}
.disabled{
    pointer-events: none;
}
</style>