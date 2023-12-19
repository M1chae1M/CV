import repoURL from '@/config/repoURL.json'
// import pokemonApiProject from '../img/preview/pokemonAPI2.png';
// import zeroAuth from '../img/preview/0Auth.png';
// import zeroAuth from '../img/preview/0Auth2.png';
// import flappyBirdProject from '../img/preview/flappyBird2.png';
// import shoeShopProj from '../img/preview/shoeShop.png';
// import calendarProject from '../img/preview/calendar.png';
import rubikscubeProject from '@/pages/components/img/preview/rubik-s-cube.png';
import chessProject from '@/pages/components/img/preview/chess.png';
// import rubikscubeProject from '../img/preview/rubik-s-cube.png';
// import chessProject from '../img/preview/chess.png';
// import zeroAuth from '../img/preview/0Auth3.png';
import zeroAuth from '@/pages/components/img/preview/0Auth3.png';


export const projectCBData={
    sides:[
        {
            id:0,
            url:`${repoURL}chess`,
            alt:'chess project preview img',
            src:chessProject.src,
            startsOn:0
        },
        // {
        //     id:1,
        //     url:`${repoURL}shoe_shop`,
        //     alt:'css gradient generator project preview img',
        //     src:shoeShopProj.src,
        //     startsOn:90
        // },
        // {
        //     id:1,
        //     url:`${repoURL}my_own_floppy_bird_copy_in_react`,
        //     alt:'flappy bird project preview img',
        //     src:flappyBirdProject.src,
        //     startsOn:90
        // },
        {
            id:1,
            url:`${repoURL}0authFrontend`,
            alt:'0auth app with CRUD preview img',
            src:zeroAuth.src,
            startsOn:90
        },
        // {
        //     id:2,
        //     url:`${repoURL}my_own_floppy_bird_copy_in_react`,
        //     alt:'flappy bird project preview img',
        //     src:flappyBirdProject.src,
        //     startsOn:180
        // },
        {
            id:2,
            url:`${repoURL}chess`,
            alt:'chess project preview img',
            src:chessProject.src,
            startsOn:180
        },
        {
            id:3,
            url:`${repoURL}0authFrontend`,
            alt:'0auth app with CRUD preview img',
            src:zeroAuth.src,
            startsOn:270
        },
        // {
        //     id:3,
        //     url:`${repoURL}training_of_fetch_API`,
        //     alt:'pokemon api project preview img',
        //     src:pokemonApiProject.src,
        //     startsOn:270
        // },
    ],
    top:[
        // {
        //     id:4,
        //     url:`${repoURL}calendar`,
        //     alt:'calendar with backend project preview img',
        //     src:calendarProject.src,
        //     rotateX:90
        // },
        {
            id:4,
            url:`${repoURL}rubik-s-cube`,
            alt:'rubik-s-cube project preview img',
            src:rubikscubeProject.src,
            rotateX:90
        },
        {
            id:5,
            url:`${repoURL}rubik-s-cube`,
            alt:'rubik-s-cube project preview img',
            src:rubikscubeProject.src,
            rotateX:-90
        },
    ]
}