import styled from "styled-components";
import Playlist from "../Playlist";
import LibraryMenu from "./LibraryMenu";

export default function Library() {
    let items = [1, 2, 4, 5, 6, 7, 8, 9, 10]

    return (
        <YourLib>
            <Title>
                <ion-icon name="library-sharp"></ion-icon>
                <h2>Sua Biblioteca</h2>
                <div>
                    <ion-icon name="add-sharp"></ion-icon>
                    <ion-icon name="arrow-forward-sharp"></ion-icon>
                </div>
            </Title>

            <LibraryMenu />

            <Search>
                <ion-icon name="search-sharp"></ion-icon>
                <div>
                    <h2>Recentes</h2>
                    <ion-icon name="list-sharp"></ion-icon>
                </div>
            </Search>
            <Playlists>
                {items.map((item)=> <Playlist />)}
            </Playlists>
        </YourLib>
    )
}

const YourLib = styled.div`
    width: 280px;
    height: auto;
    min-height: 400px;
    background-color: #121212;
    display: flex;
    flex-direction: column;
    padding: 18px 18px 0 18px;
    border-radius: 8px;
    box-sizing: border-box;
    margin: 6px;
    position: fixed;
    top: 180px;

`;

const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 30px;
    width: 260px;
    font-size: 20px;

    h2 {
        color: #b2b2b2;
    }

    div {
        width: 60px;
    }

`;

const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;
    width: 250px;
    font-size: 12px;
    color: #b2b2b2;
    font-weight: 600;

    div {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 90px;
    }

    ion-icon {
        font-size: 20px;
    }
`;

const Playlists = styled.div`
    margin-top: 20px;
    height: 320px;
    overflow-y: scroll;
    overflow-x: hidden;

`;