<template>
    <header>
        <h1>{{title}}</h1>
        <Button 
            v-show='homePage' 
            @toggle-form="$emit('toggle-form')" 
            :text="this.showForm?'Close':'Add Task'" 
            :color="this.showForm?'red':'green'"/>
    </header>
</template>
<script>
import Button from './Button'
export default{
    name:'Header',
    components:{
        Button
    },
    computed:{
        homePage(){
            if(this.$route.path==='/'){
                return true
            }else{
                return false
            }
        }
    },
    props:{
        title:String,
        showForm:Boolean
    },
}
    
</script>
<style scoped>
header{
  display:flex ;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
