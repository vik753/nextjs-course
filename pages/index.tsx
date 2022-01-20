import type {NextPage} from 'next';
import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";

const Home: NextPage = () => {

    return (
        <>
            <Htag tag="h1">Hello Dolly</Htag>
            <Button appearance="primary" arrow='right'>Click me</Button>
            <Button appearance="ghost" arrow='down'>Click me</Button>
        </>
    );
};

export default Home;
