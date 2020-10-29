<template>
    <div>
        <ul>
            <li v-for="(item,index) in list">{{item.name}}+{{index}}</li>
        </ul>
        <!-- <div @click="handleClick">
            {{navList[0]}}
        </div> -->
    </div>
</template>
<script>
import { onMounted,provide,reactive,ref } from 'vue'
export default {
    name:'home',
    data(){
        return {
            list:[{name:'测试001'},{name:'测试002'}]
        }
    },
    setup(props,context){
       
        const list=[{name:'测试00213123'},{name:'测试002'}]
        let div=ref(0)
        let div1=ref('测试')
        let count=reactive({div1})

        const handleClick=()=>{
            alert(1)
        }
        onMounted(()=>{
             count.div1='测试111'
             console.error(div.value,'0')
             console.error(div1.value,'1')
             
             console.error(count.div1,'2')
        })
        return {
            list,
            handleClick
        }
    },
    methods:{
        handleClick(){
            alert('点击我了')
        }
    }
}
</script>
<style scoped>

</style>