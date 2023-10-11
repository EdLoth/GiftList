import styled from 'styled-components'

export const SectionCoffesContainer = styled.div`
`
export const TitlePage = styled.h1`
    color: white;
`

export const HeaderCoffes = styled.h1`
   display: flex;
   align-items: center;
   justify-content: space-around;
   flex-direction: row;
   text-align: center;
    width: 100%;
    font-family: 'Baloo 2', cursive;
    padding-top: 20px;
`

export const ContentCoffes = styled.div`
    width: 100%;
    margin: auto;
    max-width: 1800px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
    margin-bottom: 2.5rem;
`

interface CardCoffeProps {
    bgImage: string;
  }

  export const CardCoffe = styled.div`
    background-color: ${(props) => props.theme['base-card']};
    width: 300px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    border-radius: 6px 36px 6px 36px;
   


   & img {

    height: 1rem;
   }
`

export const CardTop = styled.div<CardCoffeProps>`
  background-image: url(${(props) => props.bgImage});
  background-size: cover; 
  width: 100%;
  height: 300px;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  background-position: center ;
`

export const TitleCoffe = styled.h1`
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 24px;
    line-height: 130%;
    padding:  10px 24px  0px 24px;

    font-weight: bold;
    font-family: 'Baloo 2', cursive;
`

export const DescriptionCoffe = styled.span`
    color: ${(props) => props.theme['base-label']};
    font-size: 14px;
    padding: 24px;

    line-height: 130%;
`

export const BottomCoffes = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 24px;

`

export const ValueInfos = styled.div`
    color: ${(props) => props.theme['base-text']};

    span:first-child {
        font-weight: 400;
        font-size: 14px;
        padding-right: 4px;
    }

    /* Estilos para o último span dentro de ValueInfos */
    span:last-child {
        font-weight: bold;
        font-family: 'Baloo 2', cursive;
        font-size: 24px;
    }
`

export const CartButton = styled.a`
    width: 100%;
    height: 35px;
    padding: 0px 30px;
    background-color: #724fbe;
    border-radius: 6px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    color: white;
    text-decoration: none;
`

export const CartButtonImage = styled.button`
    width: 100%;
    height: 35px;
    padding: 0px 30px;
    margin-bottom: 8px;
    background-color: ${(props) => props.theme['yellow-dark']};
    border-radius: 6px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    color: white;
    text-decoration: none;
`