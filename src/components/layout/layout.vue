<!--
 * @Author: your name 模板
 * @Date: 2020-08-06 11:32:16
 * @LastEditTime: 2020-08-06 19:59:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \oosjk_pc\oosjk_pc\src\components\layout\layout.vue
-->
<template>
    <div class="layout">
        <!-- 头部 -->
        <my-header></my-header>
        <!-- 中部 -->
        <my-content></my-content>
        <!-- 尾部 -->
        <my-footer></my-footer>
    </div>
</template>
<script>
import myHeader from './header'
import myFooter from './footer'
import myContent from './content'
export default {
    components:{
        myHeader,
        myFooter,
        myContent

    }
}
</script>
<style lang="scss" scoped>
.layout{
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>