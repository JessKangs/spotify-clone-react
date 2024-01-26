import styled from "styled-components"

export default function LibraryMenu() {
    return(
        <LibraryContent>
            <Item>
                Playlists
            </Item>
            <Item>
                Artistas
            </Item>
            <Item>
                Álbuns
            </Item>
            <Item>
                Podcasts e programas
            </Item>
        </LibraryContent>
    )
}

const LibraryContent = styled.div`
    display:flex;
    justify-content: space-around;
    width: 360px;
    overflow-x: hidden;
    margin: 10px 0;
`;

const Item = styled.div`
    border-radius: 15px;
    background-color: #2f2f2f;
    padding: 8px;
    box-sizing: border-box;
    font-size: 12px;
    font-weight: 600;
`;