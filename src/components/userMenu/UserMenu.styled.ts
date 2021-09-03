import styled from 'styled-components';

export const StyledMenu = styled('div')<{ open: boolean }>`
	display: flex;
	flex-direction: column;
	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
	background: linear-gradient(to bottom, #e8f3f1, #fff, #fff);
	height: max(calc(100vh - 5rem), 92vh);
	min-width: 16rem;
	text-align: left;
	padding: 1rem 1.5rem;
	position: absolute;
	top: max(8vh, 5rem);
	right: 0;
	transition: transform 0.3s ease-in-out;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: 80vw;
	}

	a,
	a > * {
		font-size: 1rem;
		padding: 0.5rem 0;
		letter-spacing: 0.1rem;
		color: ${({ theme }) => theme.primaryDark};
		transition: color 0.3s linear;

		@media (max-width: ${({ theme }) => theme.mobile}) {
			font-size: 1.5rem;
		}
	}
`;
