exports.userSerializer = (user)=>{
    return ({
        id: user._id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        name: `${user.firstName} ${user.lastName}`
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

