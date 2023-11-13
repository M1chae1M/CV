import reactIMG from '../img/programmingLanguages/React-Logo.svg';
import mySqlIMG from '../img/programmingLanguages/mySQLlogo.png';
import jsIMG from '../img/programmingLanguages/Javascript_Logo.png';
import nextIMG from '../img/programmingLanguages/nextjs-icon.svg';
// import pythonIMG from '../img/programmingLanguages/python.png'
import bootstrapIMG from '../img/programmingLanguages/bootstrap.webp'
import cssIMG from '../img/programmingLanguages/CSS3_logo.svg.png'
import Colors from '@/config/colors.json';

export const programmingCBData={
    sides:[
        {
            id:0,
            src:jsIMG.src,
            context:"JS",
            startsOn:0,
            bgColor:Colors[0]
        },
        {
            id:1,
            src:reactIMG.src,
            context:"React",
            startsOn:90,
            bgColor:Colors[1]
        },
        {
            id:2,
            src:nextIMG.src,
            context:"NEXT.JS",
            startsOn:180,
            bgColor:Colors[2]
        },
        {
            id:3,
            src:mySqlIMG.src,
            context:"mySQL",
            startsOn:270,
            bgColor:Colors[3]
        },
    ],
    top:[
        {
            id:4,
            // src:pythonIMG.src,
            src:bootstrapIMG.src,
            // context:"Python",
            context:"Bootstrap",
            // color:Colors[Colors.length-2],
            color:'#4a214a',
            rotateX:90,
            // bgColor:Colors[4]
            bgColor:'rgb(206,47,255)',
        },
        {
            id:5,
            src:cssIMG.src,
            context:"CSS",
            // color:Colors[Colors.length-1],
            color:'#0000e7',
            rotateX:-90,
            bgColor:Colors[5]
        },
    ]
}

const T=()=><div></div>
export default T

// bootstrap dodaj może