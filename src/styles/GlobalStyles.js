import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root{

  /* COLORS:
  #FBA834
  #FE7A36
  #ED7D31

  #333A73//

  #1B3C73

  #265073//

  #40679E//

  #201658

  #1B1A55//

  #070F2B//

  #387ADF
  #50C4ED
  #9AD0C2
  #E78895
  #EE99C2
  #FF407D
  #E26EE5

  #9F70FD//

  #7743DB
  #7F27FF
  #E5D4FF

  #FEFBF6//

  #F6F5F5//

  #FFF7F1//

  

  #ccc//

  #B7C9F2//

  */

&.dark-mode{
    --color-bg-main:  #070F2B;

    --color-bg-sec: #201658;

    --color-el-main: #9F70FD;
    --color-el-sec: #BEADFA;

    --color-el-light-main: #F1EAFF;
    --color-el-light-sec: #265073;

    --color-text-main: #FFF7F1;
    --color-text-sec: #ccc;
    --color-text-btn:#F6F5F5;
    --color-btn-hover:#7743DB;

    --color-correct:#03C988;
    --color-wrong:#BE3144;

    --color-answer-hover:#FB88B4;

    --color-input:#5f577d;

    --color-toggled: #7743DB;

    --color-input-valid: #74E291;
    --color-input-invalid: #EE4266;
} 

&.light-mode{
  --color-bg-main:  #F6F5F5;
    --color-bg-sec: #354259;

    --color-bg-nav: rgba(46, 76, 110, 0.34);

    --color-el-main: #333A73;
    --color-el-sec: #265073;
    

    --color-el-light-main: #B7C9F2;
    --color-el-light-sec: #D0E8F2;

    
    
   
    --color-text-main: #070F2B;
    --color-text-sec: #40679E;
    --color-text-btn:#F6F5F5;
    --color-btn-hover:#1B3C73;

    --color-correct:#9BCF53;
    --color-wrong:#EE4266;
    --color-answer-hover:#F1EAFF;

    --color-input:#c6d1e2;

    --color-toggled: #D0E8F2;

    --color-input-valid: #65B741;
    --color-input-invalid: #FF004D;

  }
  
  --color-confetti-1:#00A9FF;
  --color-confetti-2:#FF6868;
  --color-confetti-3:#45FFCA;
  --color-confetti-4:#FEFF86;
  --color-confetti-5:#EA8FEA;
  --color-confetti-6:#AEE2FF;
  --color-confetti-7:#FFEA20;
  --color-confetti-8:#FEDEFF;
  --color-confetti-9:#CDE990;
  --color-confetti-10:#FD8A8A;
  

    --border-radius-sm: 0.5rem;
    --border-radius-md: 0.5rem;
    --border-radius-lg: 1rem;
    --font-size-sm: 1.2rem;
    --font-size-md: 1.6rem;
    --font-size-lg: 2rem;
    --font-weight-light: 400;
    --font-weight-normal: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --icon-size-sm: 2.5rem;
    --icon-size-md: 3.5rem;
    --icon-size-lg: 4.5rem;
}

*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
    font-family: 'Rubik', sans-serif;
   
}

body{
  background-color:  var(--color-bg-main);
  overflow-x: hidden;
  overflow-y: hidden;
}








::-webkit-scrollbar {
  width: 0.5rem;

  
}


::-webkit-scrollbar-track {
  background: inherit;
  margin: 5rem;
  
}


::-webkit-scrollbar-thumb {
  background: var(--color-el-light-main);
  border-radius: var(--border-radius-md);
}


::-webkit-scrollbar-thumb:hover {
  background: var(--color-el-main);
}






`;

export default GlobalStyles;
