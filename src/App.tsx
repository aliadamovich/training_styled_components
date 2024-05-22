import React from 'react';
import './App.css';
import styled, { css, keyframes } from 'styled-components';
import Rectangle from './images/Rectangle.jpg';
import { log } from 'console';
import { myTheme } from './styles/myTheme.styled';

function App() {
  return (
    <div className="App">
      <Wrapper>
				<Card>
					<img src={Rectangle} alt="landscape" />
					<Content>
						<Headline>Headline</Headline>
						<Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
						<Buttons>
							<Button primary>Save</Button>
							<Button as='a' href='#' outlined>See more</Button>
						</Buttons>
					</Content>
				</Card>
			</Wrapper> 
    </div>
  );
}

export default App;

const Wrapper = styled.div `
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`
const Card = styled.div`
	width: 300px;
	height: 350px;
	background: #FFF;
	border-radius: 15px;
	padding: 10px;
	
`
const Content = styled.div`
padding: 20px 10px 0 10px;
>*:not(:last-child) {
		margin-bottom: 20px;
	}
`
const Headline = styled.h1`
	font-size: 16px;
	color: ${myTheme.colors.grey.dark};
	font-weight: 800;
`
const Text = styled.p`
	color: #ABB3BA;
	font-size: 12px;
	font-weight: 500;
	line-height: 167%;
	text-align: left;
`

type ButtonPropsType = {
	color?: string
	fontSize?: string
	primary?: boolean
	outlined?: boolean
	btnType?: 'primary' | 'outlined'
	border?: string
}

const Button = styled.button<ButtonPropsType>`
	font-size: ${props => props.fontSize || '10px'};
	font-weight: 700;
	line-height: 1;
	border-radius: 5px;
	padding: 8px;
	width: 86px;
	display: flex;
	align-content: center;
	justify-content: center;
	border: 2px solid ${myTheme.colors.primary};
	text-decoration: none;
	color: ${ props => props.color || myTheme.colors.secondary };
	cursor: pointer;
	transition: all 0.3s ease 0s;

	${props => props.primary && css<ButtonPropsType>`
		background-color: ${myTheme.colors.primary};
		&:hover{
			background-color: transparent;
			color: ${myTheme.colors.primary};
		}
	`}

	${props => props.outlined && css<ButtonPropsType>`
		background-color: transparent;
		color: ${myTheme.colors.primary};
		&:hover{
			background-color: ${myTheme.colors.primary};
			color: ${myTheme.colors.secondary};
		}
	`}
	`

const Buttons = styled.div`
	display: flex;
	gap: 12px;

	@media ${myTheme.media.tablet} {

	};
`


const MyAnimation = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`
