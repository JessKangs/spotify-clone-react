import styled from "styled-components"
import capa from "../assets/img/photo-1560880825-533a378316a5.avif"

export default function Playlist() {
    return (
        <Content>
            <img src={capa} alt="foto da playlist" />
            <span>
                <h1>Músicas</h1>
                <div>
                    <h2>Playlist</h2>
                    <h2>•</h2>
                    <h2> Username</h2>
                </div>
            </span>
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    height: 60px;
    width: 260px;
    font-weight: 600;

    img {
        height: 45px;
        width: 45px;
        margin-right: 10px;
        border-radius: 5px;
        
    }

    div {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;
        color: #b2b2b2;
    }

    h2 {
        font-size: 12px;
        margin-right: 5px;
    }

`;