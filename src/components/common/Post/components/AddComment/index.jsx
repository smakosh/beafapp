import React from 'react'
import Spinner from 'react-spinkit'
import * as Yup from 'yup'
import { withFormik, Form, Field } from 'formik'
import { compose } from 'recompose'
import { Wrapper, InputField, Column, Button, Flex } from './styles'
import { Error } from '../../../../common'

const AddNewComment = ({
	isSubmitting,
	errors
}) => (
	<Wrapper>
		<Form>
			<Flex>
				<Column>
					<InputField
						as={Field}
						placeholder="Add a new comment..."
						component="textarea"
						name="comment"
					/>
					{errors.comment && <Error>{errors.comment}</Error>}
				</Column>
				<Column>
					<Button type="submit" disabled={isSubmitting}>
						{isSubmitting ? (
							<Spinner name="circle" color="white" />
						) : (
							<span>SUBMIT</span>
						)}
					</Button>
				</Column>
			</Flex>
		</Form>
	</Wrapper>
)

const enhance = compose(
	withFormik({
		mapPropsToValues: () => ({
			comment: ''
		}),
		validationSchema: () => Yup.object().shape({
			comment: Yup.string()
				.max(120, 'Description has to be smaller than 120 characters!')
				.required()
		}),
		handleSubmit: ({ comment }, {
			props: {
				postNewComment,
				_id,
				_creator,
				userName
			},
			setSubmitting,
			resetForm
		}) => {
			postNewComment(
				_id,
				_creator,
				userName,
				comment,
				setSubmitting,
				resetForm
			)
		}
	})
)

export const AddComment = enhance(AddNewComment)
