import type { GetServerSidePropsContext, NextPage } from "next"
import type { GetServerSideProps } from "next"
import { prisma } from "~/server/db"
import User from "~/components/User"
import UserIcon from "public/userIcon/profile-user.png"
import Navbar from "~/components/Navbar"
import Hamburger from "~/components/Hamburger/Hamburger";
import { useState } from "react";


interface UserProp {
    username: string
}

const UserProfile: NextPage<UserProp> = (props: UserProp) => {
    const [show, setShow] = useState(false);
    const onHamburgerChange = () => {
        if (!show) {
        setShow(true)
        return
        }
        setShow(false)
    }
    const router = useRouter()
    return (  
        <>
            <Navbar onHamburgerClick={onHamburgerChange} onAccountClick={() => {console.log("clicked")}} hamburgerShown={show} setHamburgerShown={setShow}></Navbar>
            <Hamburger show={show} onGreyAreaClick={onHamburgerChange}></Hamburger>
            <User username={props.username} user_pic={UserIcon.src} rent_vehicles={10} mileage={11} total_spent={100} total_time={104} />
        </>
    )
}

export const getServerSideProps: GetServerSideProps<UserProp> = async (context: any) => {
    const sessionId = context.query.sessionId
    const user = await prisma.user.findFirst({
        where: {
            sessionId: sessionId
        }
    })
    if (user) {
        return {props: {username: user.username}}
    }
    return {props: {username: "giglo"}}
}

export default UserProfile