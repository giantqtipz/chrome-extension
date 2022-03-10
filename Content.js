let willSmithImages = [
    "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwNTA3MzM1ODM4NDEwMDg4/will-smith-attends-varietys-creative-impact-awards-and-10-directors-to-watch-brunch-at-the-parker-palm-springs-on-january-3-2016-in-palm-springs-california-photo-by-jerod-harrisgetty-images.jpg",
    "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B1080%2C495%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F11%2F02%2Fwill-smith-2019-2000.jpg",
    "https://m.media-amazon.com/images/M/MV5BMGI3OTI0NjctMjM2ZC00MjZiLWIxMjctODczN2M4MTFjZmY1XkEyXkFqcGdeQXJoYW5uYWg@._V1_UX477_CR0,0,477,268_AL_.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfonyeTav5KA0CT0-pnhLAQ9Gzn3PwlQ3cmg&usqp=CAU",
    "https://cdn.justjared.com/wp-content/uploads/headlines/2021/09/will-smith-face-august-alsina-interview1.jpg",
]

const imgs = document.getElementsByTagName('img');

for(let i=0;i<imgs.length;i++) {
    const randomImg = Math.floor(Math.random() * willSmithImages.length);
    imgs[i].src = willSmithImages[randomImg];
}