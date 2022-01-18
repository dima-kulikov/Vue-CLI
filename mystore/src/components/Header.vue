<template>
    <div>Header
        {{ usersList }}
    </div>
</template>


<script>
import { mapGetters} from 'vuex';

export default {
    name: 'Header',
    computed: {
       ...mapGetters("users", ["usersList"]) 
    }
}
</script>