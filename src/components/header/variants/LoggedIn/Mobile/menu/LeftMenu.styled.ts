import styled from 'styled-components';

export const StyledMenuMobile = styled('div')<{ open: boolean }>`
	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
	background: linear-gradient(to bottom, #e8f3f1, #fff, #fff);
	min-width: 16rem;
	position: absolute;
	top: 80px;
	left: 0;
	transition: transform 0.3s ease-in-out;
	height: max(calc(100vh - 5rem), 92vh);
	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: 80vw;
	}

	a,
	a > * {
		font-size: 1rem;
		padding: 0.5rem;
		letter-spacing: 0.1rem;
		color: ${({ theme }) => theme.primaryDark};
		transition: color 0.3s linear;

		@media (max-width: ${({ theme }) => theme.mobile}) {
			font-size: 1.5rem;
		}
	}
`;
