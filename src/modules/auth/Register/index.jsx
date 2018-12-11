import React from 'react'
import Spinner from 'react-spinkit'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import * as Yup from 'yup'
import { withFormik, Form, Field } from 'formik'
import { register } from '../actions'
import { Container, Button, InputField, Error, SEO } from '../../../components/common'
import { Card, Center, Wrapper, Flex } from '../styles'

const Register = ({
	errors,
	touched,
	isSubmitting,
	values
}) => (
	<Wrapper as={Container}>
		<SEO
			url="/register"
			title="Register"
			description="Register"
		/>
		<Card register>
			<Form>
				<Flex>
					<InputField flex label="First name">
						<Field type="text" name="firstName" />
						{errors.firstName && touched.firstName && <Error>{errors.firstName}</Error>}
					</InputField>
					<InputField flex label="Surname">
						<Field type="text" name="lastName" />
						{errors.lastName && touched.lastName && <Error>{errors.lastName}</Error>}
					</InputField>
				</Flex>
				<InputField label="Username">
					<Field type="text" name="username" />
					{errors.username && touched.username && <Error>{errors.username}</Error>}
				</InputField>
				<InputField label="Email address">
					<Field value={values.email} type="email" name="email" />
					{errors.email && touched.email && <Error>{errors.email}</Error>}
				</InputField>
				<InputField label="Password">
					<Field type="password" name="password" />
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
			firstName: Yup.string().min(2, 'Password has to be longer than 2 characters!').required(),
			lastName: Yup.string().min(2, 'Password has to be longer than 2 characters!').required(),
			username: Yup.string().min(2, 'Password has to be longer than 2 characters!').required(),
			email: Yup.string().email('E-mail is not valid!').required(),
			password: Yup.string().min(6, 'Password has to be longer than 6 characters!').required()
		}),
		handleSubmit(values, { props: { register }, setErrors, setSubmitting, resetForm }) {
			register(values, setErrors, setSubmitting, resetForm)
		}
	})
)

export default enhance(Register)
