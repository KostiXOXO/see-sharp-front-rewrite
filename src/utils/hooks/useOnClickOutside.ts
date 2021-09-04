import { useEffect } from 'react';

export const useOnClickOutside = (ref: React.RefObject<any>, handler: (arr: Event) => void): void => {
	useEffect(() => {
		const listener = (event: Event) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			handler(event);
		};
		document.addEventListener('mousedown', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
		};
	}, [ref, handler]);
};

export default useOnClickOutside;
