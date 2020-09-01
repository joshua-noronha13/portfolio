import styled from 'styled-components';

export const Overlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fc5185;
    overflow: hidden;
    width: 100%;
    height: 0;
    border-radius: 10px;
    transition: 0.5s ease;
  `;
export const OverlayText = styled.div`
    text-align:center;
    color: white;
    margin-top:35%;
  `;
