<template>
        <label for="filteredNames">Search Your Hero</label>
        <input v-model='findName' id="filterName" type="text" >
        <br>
        <hr>
        <ul>
            <li :key='name' v-for="name in filteredNames">{{name}}</li>
        </ul>
        <div>
            {{date}}
        </div>
        {{methodDate}}
</template>
<script>
    export default{
        name:'Search',
        data(){
            return {
                findName:'',
                names:[
                    'Evan You',
                    'John Lindquist',
                    'Jen Looper',
                    'Miriam Suzanne',
                    'Chris Coyier',
                    'Geoff Graham',
                    'Divya Sasidharan',
                    'Lea Verou',
                    'Rachel Andrew',
                    'Vitaly Friedman',
                    'Ryan Florence',
                    'Dan Abramov',
                    'Jen Simmons',
                    'Robin Rendle',
                    'Nicole Sullivan'
                ]
            }
        },
        computed:{
        filteredNames() {
            let filter=new RegExp(this.findName,'i')
            return this.names.filter(n => n.match(filter))
        },
        date(){
            return Date.now();  
        }
    },
    methods:{
        methodDate(){
            return Date.now;
        }
    }
}
</script>
<style scoped>
h1 {
  text-align: center;
  margin: 5px;
}
li {
  list-style: none outside none;
  color: rgb(251, 145, 145);
}
#filterName{
    margin-left: 12px;
}
</style>