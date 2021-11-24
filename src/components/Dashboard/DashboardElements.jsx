import styled from 'styled-components'

export const DashboardContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    /*background-color: #101522;*/
    background-color: black;
    color: #fff;
`;

export const DashboardSearch = styled.section`
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`;
export const DashboardSearchTitle = styled.h1`
    margin-bottom: 2rem;
    text-align: center;
    font-size: 2rem;
    color: #0AFF99;
    text-align: left;
    color: white;
`;

export const SearchForm = styled.form`
    max-width: 56.25rem;
    text-align: center;
`;

export const SearchInput = styled.input`
    padding-left: 1rem;
    max-width: 56.25rem;
    height: 3rem;
    border-radius: 0.25rem;
    border: none;
    width: 95vw;
    background-color: #212121;
    color: white;
`

export const CoinContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        background:#212121;
        border-radius: 0.5rem;
        cursor: pointer;
    }
`;

export const CoinRow = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    height: 5rem;
    border-bottom: 0.0625rem solid #d7d7d7;
    width: 95vw;
    padding: 0 1rem;
    max-width: 56.25rem;
`
export const CoinNameContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 1.5rem;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    @media (min-width: 48rem){
        flex-direction: row;
    }

`
export const CoinName = styled.h1`
    font-size: 1rem;
    padding-right:0.5rem;
`

export const CoinImg = styled.img`
    height: 2rem;
    width: 2rem;
    margin-right: 0.8rem;
`
export const CoinSymbol = styled.p`text-transform: uppercase; `
export const CoinPrice = styled.div`flex: 1`;

export const CoinData = styled.div`
    @media (min-width: 48rem){
        display: flex;
        flex: 2;
    }
`
export const CoinMarketCapShort = styled.div`
    flex: 1;
    display:none;
    @media (max-width: 47.9375rem){
        display: block;
        text-align: right;
    }
`;

export const CoinMarketCapLong = styled.div`
    flex: 1;
    display:none;
    @media (min-width: 48rem){
        display: block;
        text-align: left;
    }
`;
export const Loss = styled.div`flex: 1; color: #ff0000;`;
export const Profit = styled.div`flex: 1; color: #A1FF0A;`;
