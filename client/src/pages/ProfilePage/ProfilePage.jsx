import { useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"

const ProfilePage = () => {

    const { loggedUser } = useContext(AuthContext)

    return (
        <div className="ProfilePage">
            <h1>Bienvend@, {loggedUser.username}</h1>
        </div>
    )
}

export default ProfilePage