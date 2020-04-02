import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 50px 0;

  img {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.85;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #FFF;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
