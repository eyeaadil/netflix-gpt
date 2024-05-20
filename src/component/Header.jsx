import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLang } from "../utils/configSlice";
const Header = () => {
	const dispatch = useDispatch();

	const user = useSelector((store) => store.user);
	const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
	const navigate = useNavigate();
	const handleSignOut = () => {
		// const auth = getAuth();
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				// navigate("/");
			})
			.catch((error) => {
				navigate("/error");
			});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				const { uid, email, displayName, photoURL } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					})
				);
				navigate("/browse");
			} else {
				// User is signed out
				dispatch(removeUser());
				navigate("/");
			}
		});

		//unsubscribe when component unmounts
		return () => unsubscribe();
	}, []);

	const handleGptSearchClick = () => {
		// toggle GPT search
		dispatch(toggleGptSearchView());
	};
	const handleLanguageChange = (e) => {
		// console.log(e.target.value)
		dispatch(changeLang(e.target.value));
	};
	return (
		<div className="absolute  w-screen  px-8 py-2  bg-transparent z-10 flex flex-col md:flex-row justify-between">
			<img
				className="w-44 mx-auto md:mx-0"
				src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
				alt="logo"
			/>

			{user && (
				<div className="flex p-2">
					{showGptSearch && (
						<select
							className="bg-red-500 p-2 m-2 text-white rounded-lg"
							onChange={handleLanguageChange}
						>
							{SUPPORTED_LANGUAGES.map((lang) => (
								<option
									key={lang.identifier}
									value={lang.identifier}
									className="bg-white text-black"
								>
									{lang.name}
								</option>
							))}
						</select>
					)}

					<button
						className="py-2 px-4 bg-purple-800 my-2 mx-4 rounded-lg"
						onClick={handleGptSearchClick}
					>
						{showGptSearch?"HomePage":"GPT Search"}

					</button>
					<img	
						src={user?.PhotoURL}
						alt="UserProfile"
						className="w-12 h-12 bg-red-600"
					/>

					<button onClick={handleSignOut} className="font-bold text-white">
						(Sign Out)
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
