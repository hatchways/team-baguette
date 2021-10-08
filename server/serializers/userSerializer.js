exports.userSerializer = (user)=>{
    return ({
        id: user._id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
    }
    )
}

exports.userForProfileSerializer = (user)=>{
    return({
        id: user._id,
        email: user.email,
        avatar: user.avatar
    })
}

