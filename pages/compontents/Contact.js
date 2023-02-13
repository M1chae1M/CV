import React from 'react';
import SingleContactMethod from './contact/SingleContactMethod';

import emailIMG from './img/contact/5876661171530077749-512 — kopia.0ff11f36ab62c460128a.png';
import githubIMG from './img/contact/4422549621553664904-512.png';
import phoneIMG from './img/contact/18238319521579177877-512 — kopia.png';
import downloadIMG from './img/18499553021577539681-512.png';

// import cvPL from '../pdf/CV_Michał_Maruszewski_PL.pdf';
// import cvEN from '../pdf/CV_Michał_Maruszewski_EN.pdf';

export default class Contact extends React.Component{
  render(){
    const styles={
      Contact:{
        bottom:"0%",
        width:'100%',
        height:'fit-content',
        transform:this.props.topPositions===true?'none':'scale(0%)',
        animation:this.props.topPositions===true?'sssc 0.5s var(--onloadAnimationDelay) ease-in-out both':'none',
        WebkitUserSelect:'none',
        MsUserSelect:'none',
        userSelect:'none',
      },
      header:{
        padding:'10px 0',
        textAlign:'center',
      },
      contactMethods:{
        display:'grid',
        width:'100%',
        height:'auto',
        gridTemplateColumns:'1fr 1fr 1fr 1fr',
      },
    }
    return(
      <div id='Contact' style={styles.Contact} name="Contact">
        <div id='contactMethods' style={styles.contactMethods}>
          {
            this.props.text?
              <React.Fragment>
                <SingleContactMethod
                  href='tel:+48698907778'
                  name={this.props.text.phone}
                  src={phoneIMG.src}
                  alt={this.props.text.phone+'IMG'}
                />
                <SingleContactMethod
                  href='mailto:michalmaru10@gmail.com'
                  name={"Email"}
                  src={emailIMG.src}
                  alt={'email IMG'}
                />
                <SingleContactMethod
                  href='https://github.com/M1chae1M?tab=repositories'
                  name={"Github"}
                  src={githubIMG.src}
                  alt={'github IMG'}
                />
                <SingleContactMethod
                  name={"Download"}
                  src={downloadIMG.src}
                  // href={this.props.language==='PL'?cvPL:cvEN}
                  href={this.props.language==='PL'?'/pdf/CV_Michał_Maruszewski_PL.pdf':'/pdf/CV_Michał_Maruszewski_EN.pdf'}
                  download={this.props.text.Download.downloadedFileName}
                  alt={this.props.text.Download.alt}
                />
              </React.Fragment>
                :null
          }
        </div>
      </div>
    );
  }
}