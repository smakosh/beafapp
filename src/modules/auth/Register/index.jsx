import React from 'react'
import Spinner from 'react-spinkit'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose, lifecycle, withState } from 'recompose'
import * as Yup from 'yup'
import { withFormik, Form, Field } from 'formik'
import { register } from '../actions'
import { Container, Button, InputField, Error, SEO } from '../../../components/common'
import { Card, Center, Wrapper, Show } from '../styles'

const Register = ({
	errors,
	touched,
	isSubmitting,
	values,
	visible,
	showPassword
}) => (
	<Wrapper as={Container}>
		<SEO
			url="/register"
			title="Register"
			description="Register"
		/>
		<Card register>
			<Form>
				<InputField error={errors.firstName && touched.firstName} label="First name">
					<Field
						autoComplete="off"
						type="text"
						placeholder="First name"
						name="firstName"
					/>
					{errors.firstName && touched.firstName && <Error>{errors.firstName}</Error>}
				</InputField>
				<InputField error={errors.lastName && touched.lastName} label="Surname">
					<Field
						autoComplete="off"
						type="text"
						placeholder="Last name"
						name="lastName"
					/>
					{errors.lastName && touched.lastName && <Error>{errors.lastName}</Error>}
				</InputField>
				<InputField error={errors.username && touched.username} label="Username">
					<Field
						autoComplete="off"
						type="text"
						placeholder="Username"
						name="username"
					/>
					{errors.username && touched.username && <Error>{errors.username}</Error>}
				</InputField>
				<InputField error={errors.email && touched.email} label="Email address">
					<Field
						autoComplete="off"
						value={values.email}
						placeholder="Your email address"
						type="email"
						name="email"
					/>
					{errors.email && touched.email && <Error>{errors.email}</Error>}
				</InputField>
				<InputField relative error={errors.password && touched.password} label="Password">
					{values.password.length > 2 && <Show type="button" onClick={() => showPassword(!visible)}>Show</Show>}
					<Field
						autoComplete="off"
						type={visible ? 'text' : 'password'}
						placeholder="Password must contain more than 6 characters"
						name="password"
					/>
					{errors.password && touched.password && <Error>{errors.password}</Error>}
				</InputField>
				<Center>
					<Button type="submit" disabled={isSubmitting}>
						{isSubmitting ? (
							<Spinner name="circle" color="white" />
						) : (
							<span>Register</span>
						)}
					</Button>
				</Center>
			</Form>
			<Center>
				<p>Already registered? <Link style={{ color: '#2B85FF', textDecoration: 'underline' }} to="/login">Login</Link></p>
			</Center>
		</Card>
	</Wrapper>
)

const enhance = compose(
	connect(null, { register }),
	withState('visible', 'showPassword', false),
	lifecycle({
		componentDidMount() {
			const url = new URL(window.location.href)
			const email = url.searchParams.get('email')
			this.setState({ email })
		}
	}),
	withFormik({
		enableReinitialize: true,
		mapPropsToValues: ({ email }) => {
		  return {
				firstName: '',
				lastName: '',
				username: '',
				email: email || '',
				password: ''
		  }
		},
		validationSchema: () => Yup.object().shape({
			firstName: Yup.string().min(2, 'Password has to be longer than 2 characters!')
				.required('Required field'),
			lastName: Yup.string().min(2, 'Password has to be longer than 2 characters!')
				.required('Required field'),
			username: Yup.string().min(2, 'Password has to be longer than 2 characters!')
				.required('Required field'),
			email: Yup.string().email('E-mail is not valid!')
				.required('Required field'),
			password: Yup.string().min(6, 'Password has to be longer than 6 characters!')
				.required('Required field')
		}),
		handleSubmit(values, { props: { register }, setErrors, setSubmitting, resetForm }) {
			register(values, setErrors, setSubmitting, resetForm)
		}
	})
)

export default enhance(Register)
