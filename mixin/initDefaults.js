export default {
    beforeCreate () {
      this.$store.dispatch('local-storage/init')
    }
  }