function userSerializer(user){
    return ({
        id: user._id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        name: `${user.firstName} ${user.lastName}`
    }
    )
}

module.exports = userSerializer
