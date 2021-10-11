'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Images',
      [
          {url: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/mobile/Aventador_ultimae_model_mobile.png', alt: 'Lamborghini', spotId: 1, createdAt: new Date(), updatedAt: new Date()},
          {url: 'https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/explorer/2021/collections/equipment/3-2/21_FRD_EPR_07_Explorer_Hybrid_32.jpg/jcr:content/renditions/cq5dam.web.768.768.jpeg', alt: 'Ford Explorer', spotId: 2, createdAt: new Date(), updatedAt: new Date()},
          {url: 'https://media.ford.com/content/fordmedia/fna/us/en/news/2020/06/25/built-for-getting-things-done-ford-f150/jcr:content/image.img.881.495.jpg/1600201093702.jpg', alt: 'Ford F150', spotId: 3, createdAt: new Date(), updatedAt: new Date()},
          {url: 'https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/2021/wrangler/vlp-gallery/MY21-Wrangler-Overview-GalleryExpanded-01-Desktop.jpg', alt: 'Jeep',  spotId: 4, createdAt: new Date(), updatedAt: new Date()},
          {url: 'https://cdn.motor1.com/images/mgl/6m0zr/s1/tesla-model-3-white.jpg', alt: 'Tesal Model 3', spotId: 5, createdAt: new Date(), updatedAt: new Date()},
          {url: 'https://www.motortrend.com/uploads/sites/5/2020/11/2022-Honda-Civic-Prototype-51.jpg', alt: 'Honda Civic', spotId: 6, createdAt: new Date(), updatedAt: new Date()},
          {url: 'https://api.ferrarinetwork.ferrari.com/v2/network-content/medias//resize/6093c2680abef6224c06a042-ferrari-magazine-oGehKAJD4w.jpg?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF', alt: 'Ferrari', spotId: 7, createdAt: new Date(), updatedAt: new Date()},
          {url: 'https://i0.wp.com/newford2021.com/wp-content/uploads/2019/10/2021-Ford-Excursion-Exterior.jpg?resize=700%2C388&ssl=1', alt: 'Ford Excursion', spotId: 8, createdAt: new Date(), updatedAt: new Date()},
          {url: 'https://www.motortrend.com/uploads/sites/5/2021/06/2022-Ram-1500-Limited-10th-Anniversary-Edition-02.jpg', alt: 'Ram 1500', spotId: 9, createdAt: new Date(), updatedAt: new Date()},
          {url: 'https://cdn.getyourguide.com/img/tour/5f4ccfc665207.jpeg/99.jpg', alt: 'Dune Buggy', spotId: 10, createdAt: new Date(), updatedAt: new Date()},
          {url: 'https://www.motortrend.com/uploads/sites/5/2021/02/2022-Chevrolet-Bolt-EV-11.jpg?fit=around%7C875:492.1875', alt: 'Chevrolet Bolt', spotId: 11, createdAt: new Date(), updatedAt: new Date()},
          {url: 'https://media.ed.edmunds-media.com/hyundai/sonata/2021/oem/2021_hyundai_sonata_sedan_limited_fq_oem_1_1280.jpg', alt: 'Hyndai Sonata', spotId: 12, createdAt: new Date(), updatedAt: new Date()},
          {url: 'https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2021/collections/dm/21_FRD_MST_wdmp_200510_02298.tif?croppathe=1_21x9&wid=1440', alt: 'Ford Mustang', spotId: 13, createdAt: new Date(), updatedAt: new Date()},
          {url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-chevrolet-tahoe-z71-105-1597017418.jpg?crop=0.599xw:0.673xh;0.232xw,0.264xh&resize=640:*', alt: 'Chevrolet Tahoe', spotId: 14, createdAt: new Date(), updatedAt: new Date()},
          {url: 'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2021/trucks/silverado-ld/mov/01-images/2021-silverado-ld-masthead-01.jpg?imwidth=960', alt: 'Chevrolet Silverado', spotId: 15, createdAt: new Date(), updatedAt: new Date()},
          {url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bronco-2dr-01-1594669368.jpg', alt: 'Ford Bronco', spotId: 16, createdAt: new Date(), updatedAt: new Date()},
          {url: 'https://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2018/09/myniroev9.jpg?quality=100&strip=all', alt: 'Kia Niro EV', spotId: 17, createdAt: new Date(), updatedAt: new Date()},
          {url: 'https://www.cnet.com/a/img/HScsDTiZqEyCavRXzK6LyHPEvQU=/1240x775/2021/01/07/a9cb3648-5bc3-49ed-8bad-4c88b231a4ec/2021-honda-accord-008.jpg', alt: 'Honda Accord', spotId: 18, createdAt: new Date(), updatedAt: new Date()},




      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Images', null, {});
  }
};
