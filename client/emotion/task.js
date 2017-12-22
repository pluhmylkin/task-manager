import {css} from "react-emotion";

export default css`
    width: 250px;
    height: auto;
    float: left;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    padding: 10px;
    margin-bottom: 10px;
    transition: box-shadow .3s;
    white-space: pre-wrap;
    word-wrap: break-word;

    &:hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
`