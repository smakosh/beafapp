import React from 'react'
import Spinner from 'react-spinkit'
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
	uploadFileBefore,
	preview,
	preview_2
}) => (
	<Container vertical>
		<Card>
			<Form>
				<Flex>
					<Item>
						{preview && <img src={preview} alt="preview before" />}
						<input
							onChange={e => uploadFileBefore(e)}
							type="file"
							accept="image/*"
							required
						/>
					</Item>
					<Item>
						{preview_2 && <img src={preview_2} alt="preview before" />}
						<input
							onChange={e => uploadFileAfter(e)}
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
			preview: '',
			img_2: '',
			preview_2: ''
		},
		{
			uploadFileBefore: () => e => {
				const { files } = e.target
				const file = files[0]
				const data = new FormData() // eslint-disable-line
				data.append('upload_preset', 'rambs0b2')
				data.append('file', file, file.name)

				return {
					img: data,
					preview: URL.createObjectURL(e.target.files[0])
				}
			},
			uploadFileAfter: () => e => {
				const { files } = e.target
				const file = files[0]
				const data = new FormData() // eslint-disable-line
				data.append('upload_preset', 'rambs0b2')
				data.append('file', file, file.name)

				return {
					img_2: data,
					preview_2: URL.createObjectURL(e.target.files[0])
				}
			},
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
				.max(40, 'Description has to be smaller than 40 characters!')
				.required()
		}),
		handleSubmit: (values, {
			props: {
				addPost,
				img,
				img_2
			},
			setErrors,
			setSubmitting,
			resetForm
		}) => {
			addPost(img, img_2, values, setErrors, setSubmitting, resetForm)
		}
	})
)

export default enhance(AddPost)
