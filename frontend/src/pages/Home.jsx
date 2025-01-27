import { Sidebar, MessageContainer } from '../components/componentsIndex.js';
const Home = () => {
	return (
		<div className='flex gap-4 sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 shadow-2xl p-4'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;