

export default function FriendList({ friends }) {
    return <ul className="friendUL">{
        friends.map((friend) => {
            return <li className="friendLi" key={friend.id}>
                <img className="imgFriend"src={friend.avatar} alt={friend.name} />
                <p className="name">{friend.name}</p>
                <p className="status" style={{ color: friend.isOnline ? 'green' : 'red' }}>{friend.isOnline ? "Online" : "Offline"}</p>
            </li>
        })
    }</ul>
    
}