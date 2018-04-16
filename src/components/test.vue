<template>
  <div> 
      <h1> {{ mensaje }} </h1>
  </div>
</template>

<script>
export default {
  name: 'test',
  props: [
      'mensaje'
  ]
}
</script>

