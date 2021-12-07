import Vue from 'vue'

export default new Vue({
    methods: {
        setCurrentUser(cUser) {
            this.$emit('userSelected', cUser)
        },
        onUserSelected(callback) {
            this.$on('userSelected', callback)
        }
    }
})