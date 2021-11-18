import styles from '../styles/Home.module.css';
import 'tailwindcss/tailwind.css'

const Navbar = () => (
    <>
    	<nav class="bg-white ">
		<div class="max-w-6xl mx-auto px-4">
			<div class="flex justify-between">
				<div class="flex space-x-7">
					{/* <div>
						<a href="#" class="flex items-center py-4 px-2">
							<img src="logo.png" alt="Logo" class="h-8 w-8 mr-2" />
							<span class="font-semibold text-gray-500 text-lg"
								>Navigation</span
							>
						</a>
					</div> */}
					<div class="hidden md:flex items-center space-x-1">
						<a
							href=""
							class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold "
							>PSBAlter</a
						>
						<a
							href=""
							class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
							>SOP</a
						>
					</div>
				</div>
			</div>
		</div>
	</nav>
    </>
);

export default Navbar;
