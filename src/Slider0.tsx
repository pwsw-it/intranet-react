// AwesomeSlider:
// yarn add react-awesome-slider
// NIE MA wersji w TypeScript
// źle: yarn add @types/react-awesome-slider
// trzeba:
// 1) dodać do declarations.d.ts:
// declare module 'react-awesome-slider/dist/autoplay';
// 2) zmienić w tconfig.json:
//     "jsx": "react-jsx",
//  na "jsx": "react"
// https://stackoverflow.com/questions/50432556/cannot-use-jsx-unless-the-jsx-flag-is-provided
// "TypeScript: Select a TypeScript Version...". - 4.1....

// yarn add @types/react-awesome-slider

import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import slide1x1 from './assets/img/slide1x1.png'
import slide1x2 from './assets/img/slide1x2.png'
import slide2x1 from './assets/img/slide2x1.png'
import slide2x2 from './assets/img/slide2x2.png'
import slide3x1 from './assets/img/slide3x1.png'
import slide3x2 from './assets/img/slide3x2.png'
import slide5x1 from './assets/img/slide5x1.png'
import slide5x2 from './assets/img/slide5x2.png'
import slide6x1 from './assets/img/slide6x1.png'
import slide6x2 from './assets/img/slide6x2.png'

// funkcja otwiera url w nowym oknie
const openInNewTab = (url : string) => {
  const newWindow = window.open(url, '_blank', 
                        'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

class Slider0 extends Component<any, any> {

  render() {
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
      <div>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={true} // should stop playing on user interaction
          interval={6000}
        >
          <div
            key={0}
            onClick={() => openInNewTab('https://pwsw.pl')}
          >
            <div style={{zIndex:1}}> 
            <img src={`${slide1x2}`}
              alt=""
              srcSet={`${slide1x1} 320w, ${slide1x2} 800w`}
              sizes={"(max-width: 640px) 320px, 640px"}
            >
            </img>
            </div>
            <div style={{zIndex:99, position:"relative", left:100, top:-500}}> 
            <h1>Coś tu dodajemy</h1></div>
          </div>
          <div
            key={1}
            onClick={() => openInNewTab('https://pwsw.pl')}
          >
            <img src={`${slide2x2}`}
              alt=""
              srcSet={`${slide2x1} 320w, ${slide2x2} 800w`}
              sizes={"(max-width: 640px) 320px, 640px"}
            >
            </img>
          </div>

          <div
            key={2}
            onClick={() => openInNewTab('https://www.int.pwsw.pl')}
          >
            <img src={`${slide3x2}`}
              alt=""
              srcSet={`${slide3x1} 320w, ${slide3x2} 800w`}
              sizes={"(max-width: 640px) 320px, 640px"}
            >
            </img>
          </div>

          <div
            key={3}
            onClick={() => openInNewTab('https://www.ismip.pwsw.pl')}
          >
            <img src={`${slide5x2}`}
              alt=""
              srcSet={`${slide5x1} 320w, ${slide5x2} 800w`}
              sizes={"(max-width: 640px) 320px, 640px"}
            >
            </img>
          </div>

          <div
            key={4}
            onClick={() => openInNewTab('https://www.ih.pwsw.pl')}
          >
            <img src={`${slide6x2}`}
              alt=""
              srcSet={`${slide6x1} 320w, ${slide6x2} 800w`}
              sizes={"(max-width: 640px) 320px, 640px"}
            >
            </img>
          </div>

          <div
            key={5}
            onClick={() => openInNewTab('https://www.ih.pwsw.pl')}
          >
         
          </div>

        </AutoplaySlider>;
      </div>

    )
  }
}

export default Slider0;
