import React from 'react'
import Spinner from 'react-spinkit'
import { connect } from 'react-redux'
import { compose, withState } from 'recompose'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { withFormik, Form, FastField } from 'formik'
import Recaptcha from 'react-google-recaptcha'
import { login } from '../actions'
import { Container, Button, InputField, Error, SEO } from '../../../components/common'
import { Card, Center, Show } from '../styles'

const Login = ({
	errors,
	touched,
	isSubmitting,
	showPassword,
	visible,
	values,
	setFieldValue
}) => (
	<Container vertical>
		<SEO
			url="/login"
			title="Login"
			description="Login"
		/>
		<Card>
			<Form>
				<InputField label="Email" error={errors.email && touched.email}>
					<FastField type="email" name="email" placeholder="Email" />
					{errors.email && touched.email && <Error>{errors.email}</Error>}
				</InputField>
				<InputField relative label="Password" error={errors.password && touched.password}>
					{values.password.length > 2 && <Show type="button" onClick={() => showPassword(!visible)}>Show</Show>}
					<FastField type={visible ? 'text' : 'password'} name="password" placeholder="Password" />
					{errors.password && touched.password && <Error>{errors.password}</Error>}
				</InputField>
				<InputField>
					<FastField
						component={Recaptcha}
						sitekey="6Lcs6lQUAAAAAEwhNH2IsobIe2csdda4TU3efpMN"
						name="recaptcha"
						onChange={value => setFieldValue('recaptcha', value)}
					/>
					{errors.recaptcha && touched.recaptcha && <Error>{errors.recaptcha}</Error>}
				</InputField>
				<Center>
					<Button type="submit" disabled={isSubmitting}>
						{isSubmitting ? (
							<Spinner name="circle" color="white" />
						) : (
							<span>Login</span>
						)}
					</Button>
				</Center>
			</Form>
			<Center>
				<p>Don't have an account? no worries! <Link style={{ color: '#2B85FF', textDecoration: 'underline' }} to="/register">Create one</Link></p>
			</Center>
		</Card>
	</Container>
)

const enhance = compose(
	connect(null, { login }),
	withState('visible', 'showPassword', false),
	withFormik({
		mapPropsToValues: () => ({
			email: '',
			password: '',
			recaptcha: ''
		}),
		validationSchema: () => Yup.object().shape({
			email: Yup.string().email('Invalid email')
				.required('Required field'),
			password: Yup.string().min(6, 'Password has to be longer than 6 characters!')
				.required('Required field'),
			recaptcha: Yup.string().required('Robots are not welcome yet! maybe soon 😊')
		}),
		handleSubmit: (values, { props, setErrors, setSubmitting, resetForm }) => {
			const payload = {
				email: values.email,
				password: values.password
			}
			props.login(payload, setErrors, setSubmitting, resetForm)
		}
	})
)

export default enhance(Login)
