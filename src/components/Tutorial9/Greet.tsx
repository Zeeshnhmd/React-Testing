import { GreetProps } from './Greet.type';

const Greet = ({ name }: GreetProps) => {
	return <div>Hello {name ? name : 'Guest'}</div>;
};

export default Greet;
