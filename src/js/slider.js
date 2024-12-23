const sliderOptions = [
  {id:1, title:'Chinese', img_url: 'https://images.royoorders.com/insecure/fit/200/200/ce/0/plain/https://s3.us-west-2.amazonaws.com/royoorders2.0-assets/82b5bc/category/icon/liUAYHmQdsFDfzrUdAY5jWlhLRjoCwJteNkFdfXj.jpg@webp'},
  {id:2, title:'Firangi Khana peena (Continental Dishes)', img_url: 'https://images.royoorders.com/insecure/fit/200/200/ce/0/plain/https://s3.us-west-2.amazonaws.com/royoorders2.0-assets/82b5bc/category/icon/fUaviqw0AUoKFUBhF6B3CBTKjiFXeQi4LG3tfQZU.jpg@webp'}, 
  {id:3, title:'Cookies', img_url: 'https://images.royoorders.com/insecure/fit/200/200/ce/0/plain/https://s3.us-west-2.amazonaws.com/royoorders2.0-assets/82b5bc/category/icon/8Us7CzbEU0qk9WnICY3dD7jZ1P1PJL6V3SsdSapA.jpg@webp'}, 
  {id:4, title:'Hot and Cold Beverages', img_url: 'https://images.royoorders.com/insecure/fit/200/200/ce/0/plain/https://s3.us-west-2.amazonaws.com/royoorders2.0-assets/82b5bc/category/icon/WpnBneVRXtKOGaWrRVZ1lxk2Qo4w1tJHRosyZlgV.jpg@webp'}, 
  {id:5, title:'Regional Flavours', img_url: 'https://images.royoorders.com/insecure/fit/200/200/ce/0/plain/https://s3.us-west-2.amazonaws.com/royoorders2.0-assets/82b5bc/category/icon/SkfNxDbMp9e6XVnOgX4hjUSxzkS3AsAWLLtXfiXM.jpg@webp'}, 
  {id:6, title:'Subscriptions (Tiffin/Meals)', img_url: 'https://images.royoorders.com/insecure/fit/200/200/ce/0/plain/https://s3.us-west-2.amazonaws.com/royoorders2.0-assets/82b5bc/category/icon/sC8kUvbg7d5SVBHzT2hWkt8NcNFGDt8cFO5nW3T3.webp@webp'}, 
  {id:7, title:'Combos', img_url: 'https://images.royoorders.com/insecure/fit/200/200/ce/0/plain/https://s3.us-west-2.amazonaws.com/royoorders2.0-assets/82b5bc/category/icon/kT7eUUHDVu366Qmyj02GDbDQ4b47RVmSkKQFlQcR.jpg@webp'},
  {id:8, title:'Rice Treats', img_url: 'https://images.royoorders.com/insecure/fit/200/200/ce/0/plain/https://s3.us-west-2.amazonaws.com/royoorders2.0-assets/82b5bc/category/icon/IX5sUlQwtRpNGiQZ6oajF7YLOwXC053omBvddnv5.jpg@webp'},
  {id:9, title:'Thali', img_url: 'https://images.royoorders.com/insecure/fit/200/200/ce/0/plain/https://s3.us-west-2.amazonaws.com/royoorders2.0-assets/82b5bc/category/icon/5KURuWw1KJ5L90U2xvJxvQimt9V8M34gqIKyOwhY.jpg@webp'}, 
  {id:10, title:'Party Mania', img_url: 'https://images.royoorders.com/insecure/fit/200/200/ce/0/plain/https://s3.us-west-2.amazonaws.com/royoorders2.0-assets/82b5bc/category/icon/sejyyAm5DeZYxIcPxotNr34RPXTHUiGkU3J8dsyr.jpg@webp'}, 
  {id:11, title:'Rotis & Parathas', img_url: 'https://images.royoorders.com/insecure/fit/200/200/ce/0/plain/https://s3.us-west-2.amazonaws.com/royoorders2.0-assets/82b5bc/category/icon/GhiEkj76eULO2XZrodg6HqHBfKZmoU4fCthcwaTj.jpg@webp'},
  {id:12, title:'All Time Nashta', img_url: 'https://images.royoorders.com/insecure/fit/200/200/ce/0/plain/https://s3.us-west-2.amazonaws.com/royoorders2.0-assets/82b5bc/category/icon/N5Pv257X69M8yvY9ILy2J4AXZ6YajkJbViwotEnK.jpg@webp'},
  {id:13, title:'Dry Curries', img_url: 'https://images.royoorders.com/insecure/fit/200/200/ce/0/plain/https://s3.us-west-2.amazonaws.com/royoorders2.0-assets/82b5bc/category/icon/SSg5QO5sw5OdUlffEnROe2feFzuTlP6D5zaENZCS.jpg@webp'},
  {id:14, title:'Biryanis & More', img_url: 'https://images.royoorders.com/insecure/fit/200/200/ce/0/plain/https://s3.us-west-2.amazonaws.com/royoorders2.0-assets/82b5bc/category/icon/W9WacftzRRvuhHuOd46lSgbDTRaEETgz9sfvpLfE.jpg@webp'},
  {id:15, title:'Veg Curries', img_url: 'https://images.royoorders.com/insecure/fit/200/200/ce/0/plain/https://s3.us-west-2.amazonaws.com/royoorders2.0-assets/82b5bc/category/icon/lxFvaztiQMFcwg3rZQgxbNMdpePzA2woCz7GmEwY.png@webp'},
  {id:16, title:'Non-Veg Curries', img_url: 'https://images.royoorders.com/insecure/fit/200/200/ce/0/plain/https://s3.us-west-2.amazonaws.com/royoorders2.0-assets/82b5bc/category/icon/e06yumRsGSIZity7eE2cIn4vnFldpuaKjY7qo4Q5.jpg@webp'},
  {id:17, title:'Dal Darbar', img_url: 'https://images.royoorders.com/insecure/fit/200/200/ce/0/plain/https://s3.us-west-2.amazonaws.com/royoorders2.0-assets/82b5bc/category/icon/6jo7rACyPsIuFlvjADSUaSUMsHcMVPpnadPs6Hr7.jpg@webp'},
  {id:18, title:'Sattvic & Vrat Food', img_url: 'https://images.royoorders.com/insecure/fit/200/200/ce/0/plain/https://s3.us-west-2.amazonaws.com/royoorders2.0-assets/82b5bc/category/icon/yPvHCJFfXzt8kPc1ofvFdf374N37MrlROrDUog2i.jpg@webp'},
  {id:19, title:'Snacks & Chakna', img_url: 'https://images.royoorders.com/insecure/fit/200/200/ce/0/plain/https://s3.us-west-2.amazonaws.com/royoorders2.0-assets/82b5bc/category/icon/CuWYdM3DLorCsS7v31KZDmH0WxdOOfE3EwQjHz5i.jpg@webp'},
  {id:20, title:'Cakes & Bakes', img_url: 'https://images.royoorders.com/insecure/fit/200/200/ce/0/plain/https://s3.us-west-2.amazonaws.com/royoorders2.0-assets/82b5bc/category/icon/2ZGCZkLiuS3WPSkkx91CskcikLO1l8dZB1x5aZP2.jpg@webp'}
]

export default function sliderComponent() {
  return {
      sliderItems: sliderOptions,
      sliderCurrentIndex: 0, // Starting position
      slideWidth: 100 / 9, // Percentage width of each slide

      // Previous Slide
      prevSlide() {
        
        if (this.sliderCurrentIndex > 0) {
          this.sliderCurrentIndex--;
        }
      },
      
      // Next Slide
      nextSlide() {
        // Ensure we don't scroll past the last full set of 9 images
        if (this.sliderCurrentIndex < this.sliderItems.length - 9) {
          this.sliderCurrentIndex++;
        }
      },
  };
}