import React from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { Link } from 'react-router-dom'
import { withStateHandlers, compose } from 'recompose'
import { Modal } from '../../../Modal'
import { UserInfo, Wrapper } from './styles'
import { Delete, DeleteBtn } from '../Comments/styles'
import deleteIcon from '../../assets/delete.svg'

TimeAgo.addLocale(en)

const timeAgo = new TimeAgo('en-US')

const PostHeader = ({
	_creator,
	_creator_username,
	userId,
	date,
	post_id,
	isVisible,
	setPost,
	confirm,
	showModal,
	state_post_id
}) => (
	<>
		<UserInfo>
			<Wrapper>
				<h2>
					<Link to={`/profile/${_creator}`}>{_creator_username}</Link>
				</h2>
				<Link to={`/post/${post_id}`}>
					<p>{timeAgo.format(Date.parse(date))}</p>
				</Link>
			</Wrapper>
			{userId === _creator && (
				<Delete>
					<DeleteBtn
						right
						type="button"
						onClick={() => setPost(post_id)}
					>
						<img
							src={deleteIcon}
							alt="delete post"
						/>
					</DeleteBtn>
				</Delete>
			)}
		</UserInfo>
		{isVisible && (
			<Modal
				title="Are you sure you want to delete this post?"
				action="Confirm"
				onPress={() => confirm(state_post_id, showModal)}
				cancel={showModal}
			/>
		)}
	</>
)

const enhance = compose(
	withStateHandlers(
		{
			isVisible: false,
			state_post_id: ''
		},
		{
			setPost: () => post_id => ({
				isVisible: true,
				state_post_id: post_id
			}),
			confirm: (_state, { deletePost }) => async (post_id, callback) => {
				await deletePost(post_id)
				callback()
			},
			showModal: ({ isVisible }) => () => ({
				isVisible: !isVisible,
				state_post_id: ''
			})
		}
	)
)

export default enhance(PostHeader)
