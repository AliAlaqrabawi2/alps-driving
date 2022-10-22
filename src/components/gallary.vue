<template>
    <div>
        <div class="gallery">
  <a target="_blank" :href="urlImg">
    <img :src="urlImg" width="600" height="400">
  </a>
</div>
    </div>
</template>

<script>
export default {
    props:['urlImg']
}
</script>




<style>
div.gallery {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
  border-radius: 5px;
}

div.gallery:hover {
  border: 2px solid #777;
}

div.gallery img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 15px;
  text-align: center;
}
</style>