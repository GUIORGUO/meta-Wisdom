<template>
    <div>
        name:{{ UserInfo.name }}
        <br>
        password:{{ UserInfo.password }}
    </div>
</template>
<script>
import{ getUserInfo }from "@/api/index";
export default {
    data(){
        return{
            UserInfo:{
                name:null,
                password:null,
            },
        };
    },
    created(){
        this.getUserInfo();
    },
    methods:{
        getUserInfo(){
            getUserInfo().then((res) =>{
                console.log('响应的数据');
                console.log(res);
                this.UserInfo = res;
            });
        },
    },
};
</script>