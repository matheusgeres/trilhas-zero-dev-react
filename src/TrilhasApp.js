import React from 'react';
import logo from './logo.svg';
import './TrilhasApp.css';
import Video from './pages/Video';
import 'bootstrap';

function TrilhasApp() {

  let intervalo;

  function scrollDireita(){
    intervalo = setInterval(function(){ document.getElementById('scroller').scrollLeft += 1 }  , 5);
  };
  function scrollEsquerda(){
    intervalo = setInterval(function(){ document.getElementById('scroller').scrollLeft -= 1 }  , 5);
  };
  function clearScroll(){
    clearInterval(intervalo);
  };

  return (
    <div class="contain">
      <h2 class="title">Siga uma das trilhas recomendadas pelo o seu tutor!</h2>
      
      <div class="slider">
        <h3>Node.JS</h3>
        <span onmouseover="scrollEsquerda()" onmouseout="clearScroll()" class="handle handlePrev active">
          <i class="fa fa-caret-left" aria-hidden="true"></i>
        </span>

        <Video></Video>
        <span onmouseover="scrollDireita()" onmouseout="clearScroll()"  class="handle handleNext active">
          <i class="fa fa-caret-right" aria-hidden="true"></i>
        </span>
      </div>

      <div class="slider">
        <h3>React</h3>
        <span onmouseover="scrollEsquerda()" onmouseout="clearScroll()" class="handle handlePrev active">
          <i class="fa fa-caret-left" aria-hidden="true"></i>
        </span>

        <Video></Video>
        <span onmouseover="scrollDireita()" onmouseout="clearScroll()"  class="handle handleNext active">
          <i class="fa fa-caret-right" aria-hidden="true"></i>
        </span>
      </div>

      <div class="slider">
        <h3>React Native</h3>
        <span onmouseover="scrollEsquerda()" onmouseout="clearScroll()" class="handle handlePrev active">
          <i class="fa fa-caret-left" aria-hidden="true"></i>
        </span>

        <Video></Video>        
        <span onmouseover="scrollDireita()" onmouseout="clearScroll()"  class="handle handleNext active">
          <i class="fa fa-caret-right" aria-hidden="true"></i>
        </span>
      </div>

    </div>
  );
}

export default TrilhasApp;
