const { userForProfileSerializer } = require('./userSerializer');

function profileSerializer(profile) {
    return ({
        id: profile._id,
        firstName: profile.firstName,
        lastName: profile.lastName,
        description: profile.description,
        gender: profile.gender,
        birthDate: profile.birthDate,
        phone: profile.phone,
        address: profile.address,
        availableDays: profile.availableDays
        ,
        availablePeriod: profile.availablePeriod
        ,
        gallery: profile.gallery,
        user: userForProfileSerializer(profile.user),

    })
}

module.exports = profileSerializer
