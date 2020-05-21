const INITIAL_STATE = {
  /* sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      //linkUrl: "shop/hats",
      linkUrl: "shop/col12",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "women",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "men",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ], */

  sections: [
    {
      title: "ПАРФУМЫ",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg09.jpg?alt=media&token=66d0aec9-f946-4793-8924-20617d8d33d9",
      //imageUrl: "images/homepage-images/img09.jpg",
      size: "large",
      id: 1,
      linkUrl: "shop/womens",
    },
    {
      title: "декоративная косметика",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg11.jpg?alt=media&token=1a01e3b7-cda7-4739-8c22-08d13d9f7cea",
      //imageUrl: "images/homepage-images/img11.jpg",
      size: "large",
      id: 2,
      linkUrl: "shop/mens",
    },
    {
      title: "обличчя",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg32.jpg?alt=media&token=0a444d5c-3f9f-4067-b4f0-47f4803e4dcc",
      /*  "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg04.jpg?alt=media&token=2144ddbb-18cb-4a95-996e-e71a07d79ef8", */
      //imageUrl: "images/homepage-images/img04.jpg",
      id: 3,
      linkUrl: "shop/hats",
    },
    {
      title: "уход для волос",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg02.jpg?alt=media&token=de8b95cf-6a33-478f-868e-dc1d8bd124d2",
      //imageUrl: "images/homepage-images/img02.jpg",
      id: 4,
      linkUrl: "shop/jackets",
    },
    {
      title: "нігті",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg31.jpg?alt=media&token=77f56afa-37fb-4233-9ad1-5559b5967416", //imageUrl: "images/homepage-images/img06.jpg",
      /* "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg06.jpg?alt=media&token=96af8349-0325-4105-8f0a-8ff1fdcac36a" */ id: 5,
      linkUrl: "shop/sneakers",
    },
    {
      title: "ФАРБУВАННЯ",

      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fkapris%2Fimg36.jpg?alt=media&token=b4df2b85-bd8b-4043-ad10-7de71d7261a2",
      /*"https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fkapris%2Fimg35.jpg?alt=media&token=b428eb21-aef4-4291-853b-8acf68abed6c",*/
      /*"https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg32.jpg?alt=media&token=0a444d5c-3f9f-4067-b4f0-47f4803e4dcc",*/
      /* imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg07.jpg?alt=media&token=b56e5c36-50b1-4894-9914-37089a436f8d", */
      //imageUrl: "images/homepage-images/img07.jpg",
      size: "large",
      id: 6,
      linkUrl: "shop/womens",
    },
    {
      title: "стайлинг",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fkapris%2Fimg34.jpg?alt=media&token=6ef63bc3-9636-4049-94d7-2f1ddfb7c52d",
      /* "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg31.jpg?alt=media&token=77f56afa-37fb-4233-9ad1-5559b5967416",*/
      /* imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg12.jpg?alt=media&token=f0f5d8c9-606d-4001-b861-4fce932a6bd6", */
      //imageUrl: "images/homepage-images/img12.jpg",
      size: "large",
      id: 7,
      linkUrl: "shop/mens",
    },
  ],
  /* sections2: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      //linkUrl: "shop/hats",
      linkUrl: "col12",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "women",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fkapris%2Fimg34.jpg?alt=media&token=6ef63bc3-9636-4049-94d7-2f1ddfb7c52d",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "men",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ], */
  sections2: [
    {
      title: "ПАРФУМЫ",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg19.jpg?alt=media&token=baff45ef-8ed3-49e3-8feb-ad6f0eebe6e0" /*
        "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg21.jpg?alt=media&token=44b1723c-1a9f-44e3-b01a-39b47cd8766b",*/,
      //imageUrl: "images/homepage-images/img09.jpg",
      size: "large",
      id: 1,
      linkUrl: "shop/womens",
    },
    {
      title: "волосся",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg22.jpg?alt=media&token=0e1520df-3c6a-45c3-aaf4-4e20f1c09387",
      //imageUrl: "images/homepage-images/img11.jpg",
      size: "large",
      id: 2,
      linkUrl: "shop/mens",
    },
    {
      title: "борода",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg23.jpg?alt=media&token=09f8ba0e-acf2-4b37-8164-fe00d0911393",
      //imageUrl: "images/homepage-images/img04.jpg",
      id: 3,
      linkUrl: "shop/hats",
    },
    {
      title: "гоління",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg26.jpg?alt=media&token=843afae3-8c2a-4227-bdf6-b1e1cdba2921",
      //imageUrl: "images/homepage-images/img02.jpg",
      id: 4,
      linkUrl: "shop/jackets",
    },
    {
      title: "для душу",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg24.jpg?alt=media&token=2f503e78-0698-4ba1-98b9-f6a1c88cb080",
      //imageUrl: "images/homepage-images/img06.jpg",
      id: 5,
      linkUrl: "shop/sneakers",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
