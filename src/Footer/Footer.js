import styled from "styled-components"

export default function Footer() {
    return(
        <FooterContent>
            hello
            <Player>
                <ion-icon name="play-skip-back-sharp"></ion-icon>
                
                <span>
                    <ion-icon name="play-sharp"></ion-icon>
                </span>
                
                <ion-icon name="play-skip-forward-sharp"></ion-icon>
            </Player>
        </FooterContent>
    )
}

const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 90px;
    background-color: black;
`;

const Player = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        background-color: red;
        border-radius: 50%;
        padding: 5px;
        margin: 0 10px;
    }
`;