import styled from 'styled-components'
import './fonts.css'

export const Container = styled.div`
    font-family: 'Arvo', serif;

    height:100%;
    text-align:center;
    display:flex;
    flex-direction:row;
    background-color:#e6ecf5;
    overflow-y:hidden;
`

export const Column = styled.div`
    font-family: 'Arvo', serif;
    float:left;
    top:0;
    width:50%;
    height:100%;
    justify-content: center;
    padding-top:10%;

`

export const Form = styled.form`
    background-color:hsl(216, 36%, 26%, 0.2);
    justify-content:center;
    display:flex;
    width:30%;
    margin-left:30%;

    padding:2vw;
    border-radius:1vw;
    margin-bottom:4vw;
    height:20vw;
    overflow:scroll;

    flex-direction:column;

`
export const SearchBar = styled.input`
    font-family: 'Arvo', serif;

    margin-bottom:2vw;

`

export const Column2 = styled.div`
    color:#e6ecf5;

    background-color:#2b3f5c;
    justify-content:center;
    border-radius: 30px;
    padding:3vw;
    margin:3vw;
    width:50%;
    height:35vw;
    overflow: scroll;
    box-shadow: 5px 5px 5px 5px #a0acbd;

`


export const StyledButton = styled.button`
    font-family: 'Arvo', serif;
    padding: 0.5vw;
    border: 2px solid white;
    border-radius: 1vw;
    margin-left: 1vw;
    margin-top: 1vw;
    color: white;
    background-color:transparent;
	&:hover {
        transform: scale(1.3);
        transition: transform .3s;

	}

`
