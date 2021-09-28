function userSerializer(user){
    return ({
        id: user._id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        gallery: user.gallery
    }
    )
}

module.exports = userSerializer
