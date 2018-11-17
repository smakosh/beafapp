import React from 'react'
import Spinner from 'react-spinkit'
import axios from 'axios'
import * as Yup from 'yup'
import { Field, Form, withFormik } from 'formik'
import { compose, withStateHandlers } from 'recompose'
import { connect } from 'react-redux'
import { addPost } from './actions'
import { InputField, Error, Container, Button } from '../../components/common'
import { Card, Center, Flex, Item } from './styles'

const AddPost = ({
	touched,
	errors,
	isSubmitting,
	uploadFileAfter,
	uploadFileBefore
}) => (
	<Container vertical>
		<Card>
			<Form>
				<Flex>
					<Item>
						<input
							onChange={uploadFileBefore}
							type="file"
							accept="image/*"
							required
						/>
					</Item>
					<Item>
						<input
							onChange={uploadFileAfter}
							type="file"
							accept="image/*"
							required
						/>
					</Item>
				</Flex>
				<InputField label="Title">
					<Field type="text" name="title" />
					{errors.title && touched.title && <Error>{errors.title}</Error>}
				</InputField>
				<InputField label="Description">
					<Field type="text" name="description" />
					{errors.description && touched.description && <Error>{errors.description}</Error>}
				</InputField>
				<Center>
					<Button type="submit" disabled={isSubmitting}>
						{isSubmitting ? (
							<Spinner name="circle" color="white" />
						) : (
							<span>SUBMIT</span>
						)}
					</Button>
				</Center>
			</Form>
		</Card>
	</Container>
)

const enhance = compose(
	connect(null, { addPost }),
	withStateHandlers(
		{
			img: '',
			preview: ''
		},
		{
			upload: () => async e => {
				const { files } = e.target
				const file = files[0]
				const data = new FormData() // eslint-disable-line
				data.append('upload_preset', 'test')
				data.append('file', file, file.name)

				const config = {
					headers: {
						'content-type': 'multipart/form-data',
					},
				}

				try {
					const res = await axios.post('https://api.cloudinary.com/v1_1/app_name/image/upload', data, config)
					return {
						img: res.data.secure_url,
						preview: URL.createObjectURL(e.target.files[0])
					}
				} catch (err) {
					console.log(err)
				}
			}
		}
	),
	withFormik({
		mapPropsToValues: () => ({
			title: '',
			description: ''
		}),
		validationSchema: () => Yup.object().shape({
			title: Yup.string()
				.min(2, 'Title has to be longer than 2 characters!')
				.required(),
			description: Yup.string()
				.min(2, 'Description has to be longer than 2 characters!')
				.max(20, 'Description has to be smaller than 20 characters!')
				.required()
		}),
		handleSubmit: (values, { props: { addPost }, setErrors, setSubmitting, resetForm }) => {
			addPost(values, setErrors, setSubmitting, resetForm)
		}
	})
)

export default enhance(AddPost)
