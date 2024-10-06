import './App.css';
import { useEffect } from 'react';
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import Head from './Head';
import Parallax from './Parallax';
import Footer from './Footer';

function App() {
  useEffect(() => {
    // Get DOM elements
    const nextDom = document.getElementById('next');
    const prevDom = document.getElementById('prev');
    const carouselDom = document.querySelector('.carousel');
    const sliderDom = document.querySelector('.carousel .list');
    const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    const thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    const timeDom = document.querySelector('.carousel .time');

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

    let timeRunning = 1000;
    let timeAutoNext = 7000;
    let runTimeOut;
    let runNextAuto;

    // Click event listeners for next and previous buttons
    nextDom.onclick = () => {
      showSlider('next');
    };

    prevDom.onclick = () => {
      showSlider('prev');
    };

    runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    function showSlider(type) {
      const sliderItemsDom = sliderDom.querySelectorAll('.carousel .list .item');
      const thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

      if (type === 'next') {
        sliderDom.appendChild(sliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
      } else {
        sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    }
  }, []);

  return (
    <>
    <Head/>
    <Parallax/>
      <header>
       
    </header>

    {/* <!-- carousel --> */}
    <div className="carousel">
        {/* <!-- list item --> */}
        <div className="list">
            <div className="item">
                <img src={img1}/>
                <div className="content">
                    <div className="title">SHOEZTORE</div>
                    <div className="topic">KERALA</div>
                    <div className="des">
                        {/* <!-- lorem 50 --> */}
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons">
                        <button>SEE MORE</button>
                        <button>BOOK NOW</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={img2}/>
                <div className="content">
                    <div className="title">SHOEZTORE</div>
                    <div className="topic">KERALA</div>
                    <div className="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons">
                        <button>SEE MORE</button>
                        <button>BOOK NOW</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={img3}/>
                <div className="content">
                    <div className="title">SHOEZTORE</div>
                    <div className="topic">KERALA</div>
                    <div className="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons">
                        <button>SEE MORE</button>
                        <button>BOOK NOW</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={img4}/>
                <div className="content">
                    <div className="title">SHOEZTORE</div>
                    <div className="topic">KERALA</div>
                    <div className="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons">
                        <button>SEE MORE</button>
                        <button>BOOK NOW</button>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- list thumnail --> */}
        <div className="thumbnail">
            <div className="item">
                <img src={img4}/>
                <div className="content">
                    <div className="title">
                        SHOEZTORE
                    </div>
                    <div className="description">
                        
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={img1}/>
                <div className="content">
                    <div className="title">
                    SHOEZTORE
                    </div>
                    <div className="description">
                        
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={img2}/>
                <div className="content">
                    <div className="title">
                    SHOEZTORE
                    </div>
                    <div className="description">
                        
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={img3}/>
                <div className="content">
                    <div className="title">
                    SHOEZTORE
                    </div>
                    <div className="description">
                        
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- next prev --> */}

        <div className="arrows">
            <button id="prev"><i className="fa-solid fa-arrow-right"></i></button>
            <button id="next"><i className="fa-solid fa-arrow-left"></i></button>
        </div>
        {/* <!-- time running --> */}
        <div className="time"></div>
    </div>
    <Footer/>
    </>
  );
}

export default App;
