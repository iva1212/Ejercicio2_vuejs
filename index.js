$(document).ready(function(){
    $('.navbar-nav .nav-item').click(function(){
        $('.navbar-nav .nav-item').removeClass('active');
        $(this).addClass('active');
    })
    });



const app = new Vue({
  data:{
    current: 'home',
    cart: 0,
    layout: 'grid',
    // demo data
		blog_posts: [{
			title: 'Tapping into UGC with Offerpop',
			url: '',
			image: {
				'large': 'https://2e64oz2sjk733hqp882l9xbo-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/header-960x500-copy-960x500.jpg',
				'small': 'https://2e64oz2sjk733hqp882l9xbo-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/header-960x500-copy-300x300.jpg'
			}
		}, {
			title: '5 websites that get design right',
			url: '',
			image: {
				'large': 'https://2e64oz2sjk733hqp882l9xbo-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/HERO-960x500.jpg',
				'small': 'https://2e64oz2sjk733hqp882l9xbo-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/HERO-300x300.jpg'
			}
		}, {
			title: 'Mariachis, Hats, and Pies, Oh My!',
			url: '',
			image: {
				'large': 'https://2e64oz2sjk733hqp882l9xbo-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/IMG_2629.2-960x582.jpg',
				'small': 'https://2e64oz2sjk733hqp882l9xbo-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/IMG_2629.2-300x300.jpg'
			}
		}]
  },
  methods: {
      updateCart: function(event){
          if(event.target.classList.contains("active")){
              event.target.classList.remove("active")
              this.cart = this.cart - event.target.value

          }
          else{
              event.target.classList.add("active")
              this.cart = this.cart + event.target.value
          }
      }
  }
}).$mount('#app')
