

export default function Home(props) {
    const navigate = useNavigate();
    if (props.loggedIn) {
        return <>Logged in</>;
    } else {
        return {
            <div>
                <p> not logged in </p>
                <button 
                    onClick = {() => {
                        navigate("/login")
                    }}


        };
    }
}