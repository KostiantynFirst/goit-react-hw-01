import PropTypes from 'prop-types';
import { FriendsItem, FriendsStatus, FriendsAvatar, FriendsName, FriendStatusText } from "./FriendListItem.styled"

const FriendListItem = ({avatar, name, isOnline}) => {
    return <FriendsItem>
                <FriendsStatus isOnline={isOnline}></FriendsStatus>
                <FriendsAvatar src={avatar} alt={name} width="48"/>
                <FriendsName>{name}</FriendsName>
                <FriendStatusText isOnline={isOnline}>{isOnline ? '(Online)' : '(Offline)'}</FriendStatusText>
        
            </FriendsItem>
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem

    