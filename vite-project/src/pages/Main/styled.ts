import styled from "styled-components";
import backgroundImage from '../../assets/background.png'


export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-image: url(${backgroundImage});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
width: 100%;
height: 100vh;
padding: 3% 10%;
>main{
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  >header{
    height: 8rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme})=> theme.colors.white};
    span{
      font-size: ${({theme})=> theme.fontSize["4xl"]};
      font-weight: 600;
    }
  }
  >main{
    height: 100%;
    padding: 1rem;
    background-color: ${({theme})=> theme.colors.white + "80"};
    >header{
      >label{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap:1rem;
        >span{
          width: 100%;
        }
       >div{
        display: flex;
        width: 100%;
        gap: 1rem;
        >input{
          width: 80%;
          border-radius: 12px;
          border:1px solid
        }
        >button{
          background-color:#007dc1;
          border-radius:1.75rem;
          border:1px solid #007dc1;;
          display:inline-block;
          cursor:pointer;
          color:#ffffff;
          font-family:Arial;
          font-size:17px;
          padding:1rem 3.75rem;
          text-decoration:none;
          text-shadow:0px 1px 0px #007dc1;
          &:active{
            transform: translateY(2px);
          }
        }
       }
      }
    }
 }
}




`;
