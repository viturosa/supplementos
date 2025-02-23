import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-top: 25px;
	align-items: center;
	background-color:rgba(196, 185, 121, 0.83);
	gap: 12px;
	padding: 30px;
`
export const LogoContainer = styled(Link) `
	display: flex;
	align-items: center;
	gap: 12px;
	`

export const LinksNavBar = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
	padding: 20px;
	a {
		cursor: pointer;
	}
`

