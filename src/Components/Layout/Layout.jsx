import styled from "styled-components"

const TransparentPanel = styled.div`
    top:0;
    left:0;
    z-index:2;
     width:100vw;
    height:100vh;
    position:fixed;
    background-color: rgba(97, 109, 113, 0.406); ;
    display: flex;
    align-items : center;
    justify-content : center;
`;
const MainContainer = styled.div`
      width: 70vw;
      height:100vh;
      display:flex;
`;
const ContentPanel = styled.div`
    width:35vw;;
    height:100vh;
    overflow-y: scroll;
    color:white;        
`;
const DeviceHeight = window.innerHeight;
const DeviceWidth = window.innerWidth;
export default {
    TransparentPanel,
    DeviceHeight,
    ContentPanel,
    MainContainer,
    DeviceWidth
}