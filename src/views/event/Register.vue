<template>
    <p>Register for the event here !</p>
    <button @click="register">Register Me</button>
</template>

<script>
export default {
  props: ['event'],
  inject: ['GStore'],
  methods: {
    register() {
        // call API
        // if register then redirect to the events details

        this.GStore.flashMessage = 'You are successfully registered for ' + this.event.title

        setTimeout(() => {
          this.GStore.flashMessage = ''
        }, 3000);
        
        this.$router.push({
            name: 'EventDetails'
            // params: { id: this.event.id }
        })
    }
  }
}
</script>

