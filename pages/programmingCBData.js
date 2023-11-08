import reactIMG from './components/img/programmingLanguages/React-Logo.svg';
import mySqlIMG from './components/img/programmingLanguages/mySQLlogo.png';
import jsIMG from './components/img/programmingLanguages/Javascript_Logo.png';
import nextIMG from './components/img/programmingLanguages/nextjs-icon.svg';
import pythonIMG from './components/img/programmingLanguages/python.png'
import cssIMG from './components/img/programmingLanguages/CSS3_logo.svg.png'

import {Colors} from './_document';

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
            context:"React",txtColor:'#00f4ff',
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
            context:"mySQL",txtColor:'white',
            startsOn:270,
            bgColor:Colors[3]
        },
    ],
    top:[
        {
            id:4,
            src:pythonIMG.src,
            context:"Python",
            color:Colors[Colors.length-2],
            rotateX:90,txtColor:'rgb(255 249 31)',
            bgColor:Colors[4]
        },
        {
            id:5,
            src:cssIMG.src,
            context:"CSS",
            color:Colors[Colors.length-1],
            rotateX:-90,
            bgColor:Colors[5]
        },
    ]
}

const T=()=><div></div>
export default T