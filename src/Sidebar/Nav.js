import styled from "styled-components"
import logo from "../assets/icons/logo-spotify.png"

export default function Nav() {
    return (
        <Navigation>
            <a href="">
                <img src={logo} alt="logo" />
            </a>
            <ul>
                <li>
                    <a href="">
                        <ion-icon name="home-sharp"></ion-icon>
                        Início
                    </a>
                </li>
                <li>
                    <a href="">
                        <ion-icon name="search-sharp"></ion-icon>
                        Buscar
                    </a>
                </li>
            </ul>

        </Navigation>
    )
}

const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    width: 280px;
    box-sizing: border-box;
    background-color: #121212;
    border-radius: 10px;
    padding: 20px 20px 0 20px;
    position: fixed;
    margin: 6px;
    top: 0;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #b3b3b3;
    }

    a > img {
        height: 28px;
    }

    li {
        margin: 20px 0;
        font-size: 20px;
    }

    ion-icon {
        font-size: 30px;
        margin-right: 20px;
    }

`;