class HeroSlider{
  constructor(el){
    this.el = el;
    this.swiper = this._initSwiper();
  }

  _initSwiper(){
    return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
      breakpoints: {
        1024: {
          slidesPerView: 2,
        }
      },
    })
  }

  //処理を分割して値の再利用性を高める
  start(options = {}){
    options = Object.assign({
      delay: 4000,
      disableOnInteraction: false,
    }, options)
    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }

  stop(){
    this.swiper.autoplay.stop();
  }
}