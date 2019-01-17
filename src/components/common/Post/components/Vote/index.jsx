import React from 'react'
import Tooltip from 'react-simple-tooltip'
import { Link } from 'react-router-dom'
import { Wrapper, Floating, Btn } from './styles'
import beforeIcon from '../../assets/before.svg'
import afterIcon from '../../assets/after.svg'

const Vote = ({
	isLoggedIn,
	_id,
	userId,
	before_votes,
	after_votes,
	voteBefore,
	voteAfter
}) => (
	<Wrapper>
		<Btn before>
			<Tooltip content="Vote!">
				{isLoggedIn ? (
					<Floating voted={before_votes.includes(userId)} onClick={() => voteBefore(_id, userId)} before="true">
						<img src={beforeIcon} alt="vote before" />
					</Floating>
				) : (
					<Floating as={Link} to="/login" islink="true" before="true">
						<img src={beforeIcon} alt="vote before" />
					</Floating>
				)}
			</Tooltip>
			<p>{before_votes.length}</p>
		</Btn>
		<Btn>
			<Tooltip content="Vote!">
				{isLoggedIn ? (
					<Floating voted={after_votes.includes(userId)} onClick={() => voteAfter(_id, userId)}>
						<img src={afterIcon} alt="vote before" />
					</Floating>
				) : (
					<Floating as={Link} islink="true" to="/login">
						<img src={afterIcon} alt="vote after" />
					</Floating>
				)}
			</Tooltip>
			<p>{after_votes.length}</p>
		</Btn>
	</Wrapper>
)

export { Vote }
