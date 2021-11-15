<template>
    <div v-show='showForm'>
      <AddTask @add-task='addTask' />
    </div>
    <Tasks @toggle-reminder="toggleReminder"
           @delete-task="taskDelete"
           :tasks="tasks"/>
</template>
<script>
import AddTask from '../components/AddTask'
import Tasks from '../components/Tasks'

export default{
    name:'Home',
    props:{
      showForm:Boolean
    },
    components:{
        AddTask,
        Tasks
    },
    data(){
        return {
        tasks:[],
        }
  },
  methods:{
    async addTask(task){
      const res=await fetch('api/tasks',{
        method:'POST',
        headers:{
          'Content-type':'application/json' 
        },
        body:JSON.stringify(task)
      })
      const data=await res.json()
      this.tasks=[...this.tasks,data]
    },
    async taskDelete(id){
        const res=await fetch(`api/tasks/${id}`,{
          method:"DELETE",
        });
        if(res.status==200){
          this.tasks= this.tasks.filter((task)=> task.id != id)
        }else{
          alert('Error in deleting task');
        }
    },
    async toggleReminder(id){
      const taskToggle=await this.fetchTask(id)
      const updTask={...taskToggle,reminder:!taskToggle.reminder}
      const res=await fetch(`api/tasks/${id}`,{
        method:'PUT',
        headers:{
          'Content-type':'application/json'
        },
        body: JSON.stringify(updTask)
      });
      const data=await res.json();
      this.tasks=this.tasks.map((task)=>
        task.id===id?{...task, reminder : !data.reminder}:task
      )
    },
    async fetchData(){
      const res=await fetch("api/tasks");
      const data=await res.json();
      return data
    }, 
    async fetchTask(id){
      const res=await fetch(`api/tasks/${id}`);
      const data=await res.json();
      return data
    },
  },
  async created(){
      this.tasks= await this.fetchData();
    }
}
</script>
