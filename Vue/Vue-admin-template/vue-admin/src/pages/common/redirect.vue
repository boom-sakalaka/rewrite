<!--
 * @Author: GZH
 * @Date: 2021-11-04 11:53:28
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-04 11:53:28
 * @FilePath: \vue-admin\src\pages\common\redirect.vue
 * @Description: 
-->
<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
    setup() {
        const $route = useRoute()
        const $router = useRouter()
        const { params, query } = $route
        const { path } = params
        $router.replace({ path: `/${path}`, query })
        return () => ''
    }
})
</script>
