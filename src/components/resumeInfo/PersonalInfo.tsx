/** @format */

import { TextField, Paper } from "@mui/material";

export const PersonalInfo = () => {
	return (
		<div className='personal-info'>
			<form className='flex flex-row justify-center mt-32'>
				<Paper elevation={2} className='w-5/6'>
					<div className='personal-info flex justify-center mt-20 mb-4'>
						<div className='first-name m-2'>
							<TextField
								id='first-name'
								label='First Name'
								variant='outlined'
								required
							/>
						</div>
						<div className='last-name m-2'>
							<TextField
								id='last-name'
								label='Last Name'
								required
								variant='outlined'
							/>
						</div>
						<div className='dob m-2'>
							<TextField id='dob' required type='date' variant='outlined' />
						</div>
					</div>
					<div className='personal-address flex flex-wrap justify-center mb-6'>
						<div className='address-1 m-2'>
							<TextField
								id='address-1'
								label='address'
								required
								variant='outlined'
							/>
						</div>
						<div className='city m-2'>
							<TextField id='city' label='city' required variant='outlined' />
						</div>
						<div className='state m-2'>
							<TextField id='state' label='state' required variant='outlined' />
						</div>
						<div className='pincode m-2'>
							<TextField
								id='pincode'
								label='pincode'
								type='number'
								required
								variant='outlined'
							/>
						</div>
					</div>
					<div className='personal-number flex flex-wrap justify-center mb-6'>
						<div className='contact-number m-2'>
							<TextField
								id='phone-number'
								label='Contact Number'
								type='tel'
								required
								variant='outlined'
							/>
						</div>
						<div className='work-number m-2'>
							<TextField
								id='work-number'
								label='Work Number'
								type='tel'
								variant='outlined'
							/>
						</div>
						<div className='home-number m-2'>
							<TextField
								id='home-number'
								label='Home Number'
								type='tel'
								variant='outlined'
							/>
						</div>
					</div>
					<div className='socials flex flex-wrap justify-center mb-20'>
						<div className='linkedIn m-2'>
							<TextField
								id='linkedin'
								label='LinkedIn'
								type='text'
								variant='outlined'
								required
							/>
						</div>
						<div className='github m-2'>
							<TextField
								id='github'
								label='github'
								type='text'
								variant='outlined'
								required
							/>
						</div>
						<div className='portfolio m-2'>
							<TextField
								id='portfolio'
								label='portfolio'
								type='text'
								variant='outlined'
							/>
						</div>
					</div>
				</Paper>
			</form>
		</div>
	);
};
