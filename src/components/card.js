import style from "styled-components";

const Card = style.div`
	box-shadow: 0 4px 8px 0 ${({color}) => color ?  color : 'rgba(0,0,0,0.9)' };
	width: 100%;
    padding: 20px;
    box-sizing: border-box;
`;


export default Card;