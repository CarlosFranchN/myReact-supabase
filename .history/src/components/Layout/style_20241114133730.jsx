import styled from "styled-components";

export const LayoutCabecalho = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LayoutFooter = styled.footer`
     background-color: #333; /* Cor de fundo */
    color: #fff; /* Cor do texto */
    text-align: center; /* Centraliza o texto */
    padding: 20px; /* Espaçamento interno */
    position: fixed; /* Fixa o footer na parte inferior da tela */
    width: 100%; /* Ocupa 100% da largura */
    bottom: 0; /* Fica grudado no final da página */
    font-size: 16px; /* Tamanho da fonte */
    font-family: Arial, sans-serif; /* Fonte */
`