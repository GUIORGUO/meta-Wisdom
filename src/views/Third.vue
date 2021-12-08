<template>

<div id="Third">
<dv-active-ring-chart :config="config" style="margin-top:-50px;width:300px;height:300px" />
</div>

</template>

<script>

export default {
 
  data(){
    return {
      config: {
            radius: '57%',  //圆环大小
            activeRadius: '77%',//半径大小
            lineWidth: 20,
            data: [
                    {
                    name: '周口',
                    value: 55
                    },
                    {
                    name: '南阳',
                    value: 120
                    },
                    {
                    name: '西峡',
                    value: 78
                    },
                    {
                    name: '驻马店',
                    value: 66
                    },
                    {
                    name: '新乡',
                    value: 80
                    }
                ],
            digitalFlopStyle: {
                fontSize: 20,
               
               
            }
    }
  }
  }
}
</script>
<style lang="scss" scoped>

</style>