import { useState } from 'react';
import { useSelector } from 'react-redux';
import * as userActions from '../../../../store/user'
export const ChangeEmail = ({ data }) => {
    const user = useSelector(state=> state.session.user)
	const [email, setEmail] = useState();
	return (
		<div className="mainChangeDiv">
			<h2 className="title">Change Your Username</h2>
			<div>
				<label htmlFor="currentEmail">Current Email</label>
				<input
					name="currentEmail"
					className="inputTextBox"
					type="text"
					value={user.email}
                    onChange={() => 1}
				></input>
			</div>
			<div>
				<label htmlFor="newEmail">New Email</label>
				<input
					name="newEmail"
					className="inputTextBox"
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className="buttons">
				<button onClick={()=> 1}>Submit</button>
				<button onClick={() => data.funcs.back('email')}>Back</button>
			</div>
		</div>
	);
};
