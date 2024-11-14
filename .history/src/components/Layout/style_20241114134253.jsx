import styled from "styled-components";

export const LayoutCabecalho = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #333; 
  color: #fff; 
  padding: 20px; 
  text-align: center; 
  font-family: Arial, sans-serif; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  position:
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
export const LayoutFooterP = styled.p`
     margin: 0;

`

export const LayoutMain = styled.main`
     background-color: #f5f5f5; /* Cor de fundo */
  padding: 40px; /* Espaçamento interno */
  margin: 20px auto; /* Espaçamento externo */
  max-width: 1200px; /* Largura máxima da área de conteúdo */
  border-radius: 8px; /* Bordas arredondadas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra leve ao redor */
  font-family: Arial, sans-serif; /* Fonte */
  color: #333; /* Cor do texto */
`