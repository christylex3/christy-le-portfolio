import React from "react";

function Footer() {
	return (
		<footer className="bg-transparent flex flex-col flex-wrap-reverse items-center justify-center p-3 relative">
			{/* <section className="flex justify-between items-center max-w-3xl p-2"> */}
			<div className="flex gap-8 md:gap-12 p-3 m-1">
				{/* Phone */}
				<a className="bg-white p-2 rounded-full" href="tel:770-843-6811">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 48 48"
						width="30px"
						height="30px"
					>
						<path
							fill="#000"
							d="M35,40c0,1.104-0.896,2-2,2H15c-1.104,0-2-0.896-2-2V7c0-1.104,0.896-2,2-2h18c1.104,0,2,0.896,2,2V40z"
						/>
						<path fill="#fff" d="M16 8.001H32V28H16z" />
						<path
							fill="#222222"
							d="M24 29A1 1 0 1 0 24 31 1 1 0 1 0 24 29zM33 37c0 1.104-.896 2-2 2H17c-1.104 0-2-.896-2-2v-3c0-1.104.896-2 2-2h14c1.104 0 2 .896 2 2V37z"
						/>
						<g>
							<path fill="#fff" d="M15 35H33V36H15z" />
							<path
								fill="#fff"
								d="M20 32H21V39H20zM27 32H28V39H27z"
							/>
						</g>
					</svg>
				</a>
				{/* Gmail */}
				<a className="bg-white/50 p-2 rounded-full" href="mailto: christylex3@gmail.com">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 30 30"
						width="30px"
						height="30px"
					>
						<path
							fill="#000"
							d="M 4 5 C 2.9069372 5 2 5.9069372 2 7 L 2 23 C 2 24.093063 2.9069372 25 4 25 L 26 25 C 27.093063 25 28 24.093063 28 23 L 28 7 C 28 5.9069372 27.093063 5 26 5 L 4 5 z M 6.6992188 7 L 23.300781 7 L 15 13.134766 L 6.6992188 7 z M 5 9.4746094 L 15 16.865234 L 25 9.4746094 L 25 23 L 5 23 L 5 9.4746094 z"
						/>
					</svg>
				</a>
				{/* GitHub */}
				<a
				className="bg-white/50 p-2 rounded-full"
					href="https://github.com/christylex3"
					target="_blank"
					rel="noreferrer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 48 48"
						width="30px"
						height="30px"
					>
						<path
							fill="#000"
							d="M41,24c0,9.4-7.6,17-17,17S7,33.4,7,24S14.6,7,24,7S41,14.6,41,24z"
						/>
						<path
							fill="#fff"
							d="M21 41v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-6.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h1.8c.2-.3.2-.6.2-1.1V36c0-2.2-1.9-5.2-4.3-5.2h-2.5c-2.3 0-4.3 3.1-4.3 5.2v3.9c0 .4.1.8.2 1.1L21 41 21 41zM40.1 26.4C40.1 26.4 40.1 26.4 40.1 26.4c0 0-1.3-.4-2.4-.4 0 0-.1 0-.1 0-1.1 0-2.9.3-2.9.3-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2-.3 3.1-.3 1.1 0 2.4.4 2.5.4.1 0 .1.1.1.2C40.2 26.3 40.2 26.4 40.1 26.4zM39.8 27.2C39.8 27.2 39.8 27.2 39.8 27.2c0 0-1.4-.4-2.6-.4-.9 0-3 .2-3.1.2-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2.2-.2 3.1-.2 1.3 0 2.6.4 2.6.4.1 0 .1.1.1.2C39.9 27.1 39.9 27.2 39.8 27.2zM7.8 26.4c-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.2.8-.2 2.4-.5 3.3-.5.8 0 3.5.2 3.6.2.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0-2.7-.2-3.5-.2C10.1 26 8.6 26.2 7.8 26.4 7.8 26.4 7.8 26.4 7.8 26.4zM8.2 27.9c0 0-.1 0-.1-.1 0-.1 0-.1 0-.2.1 0 1.4-.8 2.9-1 1.3-.2 4 .1 4.2.1.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0 0 0 0 0 0 0-2.8-.3-4.1-.1C9.6 27.1 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9z"
						/>
						<path
							fill="#fff"
							d="M14.2,23.5c0-4.4,4.6-8.5,10.3-8.5c5.7,0,10.3,4,10.3,8.5S31.5,31,24.5,31S14.2,27.9,14.2,23.5z"
						/>
						<path
							fill="#fff"
							d="M28.6 16.3c0 0 1.7-2.3 4.8-2.3 1.2 1.2.4 4.8 0 5.8L28.6 16.3zM20.4 16.3c0 0-1.7-2.3-4.8-2.3-1.2 1.2-.4 4.8 0 5.8L20.4 16.3zM20.1 35.9c0 0-2.3 0-2.8 0-1.2 0-2.3-.5-2.8-1.5-.6-1.1-1.1-2.3-2.6-3.3-.3-.2-.1-.4.4-.4.5.1 1.4.2 2.1 1.1.7.9 1.5 2 2.8 2 1.3 0 2.7 0 3.5-.9L20.1 35.9z"
						/>
						<path
							fill="#000"
							d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z M24,40c-8.8,0-16-7.2-16-16S15.2,8,24,8 s16,7.2,16,16S32.8,40,24,40z"
						/>
					</svg>
				</a>
				{/* LinkedIn */}
				<a
					className="bg-white/50 p-2 rounded-full"
					href="https://www.linkedin.com/in/christy-le-316960209/"
					target="_blank"
					rel="noreferrer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 48 48"
						width="30px"
						height="30px"
					>
						<path
							fill="#000"
							d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
						/>
						<path
							fill="#fff"
							d="M14 19H18V34H14zM15.988 17h-.022C14.772 17 14 16.11 14 14.999 14 13.864 14.796 13 16.011 13c1.217 0 1.966.864 1.989 1.999C18 16.11 17.228 17 15.988 17zM35 24.5c0-3.038-2.462-5.5-5.5-5.5-1.862 0-3.505.928-4.5 2.344V19h-4v15h4v-8c0-1.657 1.343-3 3-3s3 1.343 3 3v8h4C35 34 35 24.921 35 24.5z"
						/>
					</svg>
				</a>
			</div>
			<p className="flex text-black text-lg md:text-xl font-narrow pt-2 md:p-0 text-xs font-firamono">
				© Christy Le 2023
			</p>
			{/* </section> */}
		</footer>
	);
}

export default Footer;
