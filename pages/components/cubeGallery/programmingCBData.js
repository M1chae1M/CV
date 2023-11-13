import Colors from '@/config/colors.json';

import {FaBootstrap,FaReact} from 'react-icons/fa'
import {SiJavascript,SiNextdotjs} from 'react-icons/si'
import {BiLogoCss3} from 'react-icons/bi'
import {GrMysql} from 'react-icons/gr'

export const programmingCBData={
    sides:[
        {
            id:0,
            src:<SiJavascript/>,
            context:"JS",
            startsOn:0,
            color:'black',
            bgColor:Colors[0]
        },
        {
            id:1,
            src:<FaReact/>,
            context:"React",
            startsOn:90,
            txtColor:'#00caff',
            color:'#00caff',
            bgColor:Colors[1]
        },
        {
            id:2,
            src:<SiNextdotjs/>,
            context:"NEXT.JS",
            startsOn:180,
            bgColor:Colors[2]
        },
        {
            id:3,
            src:<GrMysql/>,
            context:"mySQL",
            txtColor:'black',
            color:'black',
            startsOn:270,
            bgColor:Colors[3]
        },
    ],
    top:[
        {
            id:4,
            src:<FaBootstrap/>,
            context:"Bootstrap",
            txtColor:'#4a214a',
            color:'rgb(77,2,163)',
            rotateX:90,
            bgColor:'rgb(206,47,255)',
        },
        {
            id:5,
            src:<BiLogoCss3/>,
            context:"CSS",
            color:'#0000e7',
            rotateX:-90,
            bgColor:Colors[5]
        },
    ]
}

const T=()=><div></div>
export default T