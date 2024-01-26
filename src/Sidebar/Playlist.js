import styled from "styled-components"
import capa from "../assets/img/photo-1560880825-533a378316a5.avif"

export default function Playlist() {
    return (
        <Content>
            <img src={capa} alt="" />
            <span>
                <h1>Músicas</h1>
                <div>
                        <h2>Playlist</h2>
                        <h2>Jéssica</h2>
                </div>
            </span>
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    height: 60px;
    width: 260px;

    img {
        height: 40px;
        width: 40px;
        margin-right: 10px;
        border-radius: 5px;
        
    }

    div {
        display: flex;
        justify-content: space-between;
        width: 120px;
        margin-top: 5px;
    }

`;