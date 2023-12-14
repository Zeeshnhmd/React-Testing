export const GetByLabelText = () => {
	return (
		<>
			<p>All Elements are mandatory</p>
			<div>
				<label htmlFor="bio">Bio</label>
				<textarea name="bio" id="bio"></textarea>
			</div>
			<div>
				<label htmlFor="Name">Bio</label>
				<input name="Name" id="Name" placeholder="Bio"></input>
			</div>
			<div>
				<label htmlFor="Name">Name</label>
				<input
					name="Name"
					id="Name"
					placeholder="Fullname"
					value="Zeeshan"
					onChange={() => {}}
				></input>
			</div>
		</>
	);
};
