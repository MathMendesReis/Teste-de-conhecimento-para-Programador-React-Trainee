import styled from "styled-components";

export const Container = styled.ul`
display: flex;
min-height: 50vh;
margin-top: 1rem;
>li{
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 3rem;
  height: 50vh;
  @media (max-width:475px) {
        padding: 0;
      }
  header{
    >h1{
    }
  }
  >section{
    display: flex;
    justify-content: space-between;
    height: 70%;
    >table:last-child{
      align-items: center;
    }
    >table{
      width: 15rem;
      height: 20rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      tr{
      display: flex;
      justify-content: flex-start;
      gap: 2rem;
      }
      td{
      display: flex;
      justify-content: space-around;
      }
    }
  }
}

.notFound{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

`;
