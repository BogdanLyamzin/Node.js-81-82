const User = (name, lastName) => {
    return {
        name,
        lastName,
        fullName: `${name} ${lastName}`
    }
}

export default User;