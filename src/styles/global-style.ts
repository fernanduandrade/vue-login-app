import { injectGlobal } from 'vue-styled-components'

injectGlobal([`
  * {
    border: 0;
    margin: 0;
    outline: none;
    padding: 0;

    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
  -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  input:-webkit-autofill{
    -webkit-text-fill-color: #747478 !important;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: #EAEBF3;
    font-family: sans-serif;
    font-size: 1.6rem;
  }
  
  @import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
`])
