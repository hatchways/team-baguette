function userSerializer(user){
    return ({
        id: user._id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
    }
    )
}

module.exports = userSerializer
