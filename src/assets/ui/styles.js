// src/styles.js
import { css } from 'styled-components';

export const colors = {
    black: "#000000",
    white: "#FFFFFF",
    gray900: "#323232",        // 가장 어두운 회색
    gray700: "#777777",        // 중간 회색
    gray500: "#bbbbbb",        // 밝은 회색
    gray300: "#dddddd",        // 강조 회색
    gray100: "#f0f0f0",        // 매우 밝은 회색
    gray50: "#f9f9f9",         // 흰색에 가까운 색
    cyan: "#40babd",
    darkblue: "#405277",
    lightCyan: "#BAE2E3",
    skyblue: "#EDF2FA",
    darkgray: "#323232", 
    midgray: "#777777",
    gray: "#bbbbbb",
    highlightgray:'#dddddd',
    lightgray:'#f0f0f0',
    highlightRed: '#F5E1DC',
    red: '#E46140',
    highlightBlue: '#D9DCE4',
    borderBlue: '#A7B3C2',
  };
  
  export const fonts = {
    header: "Open Sans",
    content: "Roboto"
  };
  
  export const fontSize = {
    h1: "2.5rem",  
    h2: "2rem",     
    h3: "1.75rem",  
    h4: "1.5rem",   
    h5: "1.25rem",  
    h6: "1rem",    
    large: "1.5rem",   
    medium: "1.25rem", 
    small: "1rem"   
  };
  
  export const media = {
    mobile: (styles) => css`
      @media (max-width: 768px) {
        ${styles}
      }
    `
  };