<template>
<div id="custom"> 
<div id="custom-text">
    <h1> Populate Canvas Course </h1>
</div>
<form id="form" @submit.prevent="getFormValues"></form>
<h5> Course Code </h5>
<input class="classcode" form="form" type="text" name="classcode" value="" required="required" />
<table>
    <tr>
        <p></p>
        <th>Type</th>
        <th>Name</th>
    </tr>
    <draggable style="display: contents;" item-key="id" v-model="rows" ghost-class="ghost">
    <template #item="{element}">
    <tr>
        <img class="drag" :src='require("@/assets/three-vertical-dots.png")' alt="vertical-dots"/>
        <td>
            <select class="pagetype" form="form" name="pagetype">        
                <option value="module">Module</option>
                <option value="watch">Watch</option>
                <option value="read">Read</option>
                <option value="activity">Activity</option>
                <option value="tool">Tool</option>
                <option value="quiz">Quiz</option>
                <option value="discussion">Discussion</option>
                <option value="assignment">Assignment</option>
                <option value="project">Project</option>
            </select>
        </td>
        <td><input class="pagename" form="form" type="text" name="'pagename'" value="" required="required"/></td>
        <p class="delete" @click="deleteRow(element)"> &#10006; </p>
    </tr>
    </template>
    </draggable>
</table>
<button class="btn btn-primary" @click="addRow">Add Row</button>
<input class="btn btn-success" form="form" type="submit" value="Save" />
</div>
</template>

<script>
import axios from 'axios'
import draggable from 'vuedraggable'
export default {
    name: 'App',
    components: {
        draggable
    },
    data() {
        return {
            rows: [{'id': 0}],
            count: 1,
            classcode: null
        }
    },
    methods: {
        getFormValues (submitEvent) {
            let formdata = {}
            let classcode = submitEvent.target.elements.classcode.value
            const pnregex = new RegExp('pagename', 'g');
            const ptregex = new RegExp('pagetype', 'g');
            let pnmatch = Array.prototype.slice.call(submitEvent.target.elements).filter(m => m.name.match(pnregex))
            let ptmatch = Array.prototype.slice.call(submitEvent.target.elements).filter(m => m.name.match(ptregex))
            for (let i=0; i<pnmatch.length; i++){
                formdata[i] = [ptmatch[i].value, pnmatch[i].value]
            }
            axios.get("https://dreamworthie-populate-canvas.herokuapp.com/geturl")
            .then( function (response) {
                let url = response.data.data.url
                let popup = window.open(url, "popup", "width=700,height=420")
                var intervalId;
                intervalId = setInterval(function() {
                    console.log(popup.location.href)
                    if (popup.location.href == 'https://www.dreamworthie.com/wait'){
                        clearInterval(intervalId);
                        axios.get("https://dreamworthie-populate-canvas.herokuapp.com/getcode")
                        .then( function (response) {
                            console.log('hi')
                            let code = response.data.data.code
                            let mydata = {
                                'grant_type': 'authorization_code',
                                'client_id': response.data.data.client_id,
                                'client_secret': response.data.data.client_secret,
                                'redirect_uri': 'https://dreamworthie-populate-canvas.herokuapp.com/oauth2response',
                                'code': String(code)
                            }
                            axios.post("https://dreamworthie-populate-canvas.herokuapp.com/redirect", mydata)
                            .then(function (response) {
                                console.log('hi')
                                let token = response.data.access_token
                                let data = {}
                                data.token = token
                                data.classcode = classcode
                                data.data = formdata
                                axios.post("https://dreamworthie-populate-canvas.herokuapp.com/home", data)
                                .then(function () {
                                    popup.close()
                                    window.location.reload()
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    });
                }
            }, 500);
            })
            .catch(function (error) {
                console.log(error);
            });
            
        },
        addRow(){
            this.count += 1
            this.rows.push({'id': this.count})
        },
        deleteRow(row){
            console.log(row)
            const index = this.rows.findIndex(s => s === row);
            this.rows.splice(index, 1);
        }
    }

}
</script>

<style scoped>
h5{
    font-size: 18px;
    font-weight: bold;
    color: white;
}
th{
    font-size: 18px;
    padding: 15px 0 5px;
}
td{
    border-bottom: 10px solid transparent;
}
#custom{
    display: block;
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 20px;
}
#custom-text{
    text-align: center;
}
select{
    -webkit-appearance: none;
    -moz-appearance: none;
    text-align: center;
    height: 40px;
    width: 150px;
    padding: 0 10px;
    margin: 0 10px 0 0;
    border-radius: 0;
    border: none;
}
.pagename{
    height: 40px;
    max-width: calc(900px - 250px);
    width: calc(100vw - 260px);
    padding: 0 10px;
    margin: 0;
}
.classcode{
    height: 40px;
    max-width: 900px;
    width: calc(100% - 40px);
    padding: 0 10px;
    margin: 0;
}
tr{
    color: white;
}
.btn{
    margin: 30px 10px 10px 0;
}
.delete{
    margin-left: 10px;
    cursor: pointer;
}
.drag{
    font-weight: 900;
    height: 25px;
    cursor: move;
    margin-right: 20px;
}

@media only screen and (max-width: 900px) {
    body{
        overflow-x: hidden;
        width: 100%;
    }
    #custom{
        margin: 0 20px;
    }
}
</style>