<template>
  <div id="app">
    <LeadPage></LeadPage>
  </div>
</template>

<script>
import LeadPage from './containers/LeadPage';
import CreateEventPage from './containers/CreateEventPage';

export default {
  name: 'app',
  components: {
    LeadPage,
    CreateEventPage,
  },
};
</script>

<style>
#app {
  font-family: Raleway, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 400;
}
</style>
