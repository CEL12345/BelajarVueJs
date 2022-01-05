<template>
 <section>
   <div class="blog" id="blog">
      <div class="container-fluid p-0">
        <img :src="images.cover1" alt="habout" class="w-100">
        <h1 class="mt-5 centered text-black style fw-bold" style="font-size:3vw;">Blog</h1>
      </div>
    </div>
    
    
   <div class="container-fluid d-flex">
    <div class="container-fluid ml-5 my-5 pt-5 mt-5 align-items-center" style="width: 1500px;">
      <h1 class="">Artikel Kami</h1>
        <div class="card-group">
          <div class="card" style="width:auto;">
            <img class="card-img-top" :src="images.card1" alt="Card image 1">
              <div class="card-body">
                <h5 class="card-title">Artikel Belum Tersedia</h5>
                <p class="card-text">Kosong</p>
                  <router-link to="/About" class="btn d-block btn-outline-primary text-wrap">Lebih Lanjut</router-link>
                </div>
              </div>
               
          <div class="card" style="width:auto;">
            <img class="card-img-top" :src="images.card1" alt="Card image 2">
              <div class="card-body">
                <h5 class="card-title">Artikel Belum Tersedia</h5>
                <p class="card-text">Kosong</p>
                  <router-link to="/About" class="btn d-block btn-outline-primary text-wrap">Lebih Lanjut</router-link>

                   <div class="card" style="width:auto;">
            <img class="card-img-top" :src="images.card1" alt="Card image 2">
              <div class="card-body">
                <h5 class="card-title">Artikel Belum Tersedia</h5>
                <p class="card-text">Kosong</p>
                  <router-link to="/About" class="btn d-block btn-outline-primary text-wrap">Lebih Lanjut</router-link>
               
              <a class="carousel-control-prev" href="#slideshow" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#slideshow" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
                 </div>
               </div>
              </div>
             </div>
           </div>
           </div>
           </div>
  </section>

  </template>

<script>
export default {
    data() {
        return {
            images: {
                cover1: require('@/assets/hero/flat.png'),
                cover2: require('@/assets/gallery/section_bg01.png'),
                about: require('@/assets/gallery/popular_sub3.png'),
                logo: require('@/assets/logo/logo.png')
            }
        }
    }
}
</script>

<style>

</style>
