import styled from "styled-components"
import Nav from "./Nav"
import Library from "./Library/Library"

export function Sidebar() {
    return (
        <LibraryContent>
            <Nav />
            <Library />
        </LibraryContent>
    )
}

const LibraryContent = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;
