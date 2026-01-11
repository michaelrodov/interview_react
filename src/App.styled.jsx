import styled from 'styled-components';


export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing.md};
    :not(:last-child) {
    margin-bottom: ${props => props.theme.spacing.xl};
  }
  /* BUG: Table layout overflow issue - table extends beyond container */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: ${props => props.theme.spacing.md};
    table-layout: fixed;
    min-width: 1200px;
  }

  th, td {
    text-align: left;
    padding: ${props => props.theme.spacing.sm};
    border-bottom: 2px solid ${props => props.theme.colors.border};
    overflow: hidden;
    text-overflow: clip;
    white-space: nowrap;
  }

  th {
    border-bottom: 2px solid ${props => props.theme.colors.border};
  }

  tr {
    margin: 0.25rem;
    &:nth-child(even) {
      background-color: ${props => props.theme.colors.infoBg};
    }
    &:nth-child(odd) {
      background-color: ${props => props.theme.colors.lightBg};
    }
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
`;

export const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes.xxlarge};
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const Subtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.secondary};
  margin: 0;
`;

export const Card = styled.div`
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.medium};
  max-width: 70vw;
  width: 100%;
  overflow: hidden; /* BUG: Part of layout issue - hides overflow instead of allowing scroll */

  /* BUG: Multiple conflicting selectors targeting border-color and background-color */

  /* Specificity: (0,0,1) - Type selector */
  input {
    padding: 15px;
    border-radius: 8px;
    font-size: 18px;
    width: 100%;
    background-color: #f0f0f0;
    border-color: #dddddd;
  }

  /* Specificity: (0,1,1) - Class + type */
  input.text-input {
    background-color: #e8f4f8;
    border-color: #4a90e2;
  }

  /* Specificity: (0,2,1) - Multiple classes + type */
  input.text-input.user-input {
    background-color: #fff3cd;
    border-color: #ffc107;
  }

  /* Specificity: (0,1,2) - Descendant combinator */
  &.input-card input {
    background-color: #d4edda;
    border-color: #28a745;
  }

  /* Specificity: (0,2,2) - Class + descendant + class */
  &.input-card input.user-input {
    background-color: #cce5ff;
    border-color: #004085;
  }

  /* Specificity: (0,1,1) - Attribute selector */
  input[data-input-type="text"] {
    background-color: #f8d7da;
    border-color: #dc3545;
  }

  /* Specificity: (0,2,1) - Multiple attribute selectors */
  input[data-input-type="text"][data-priority="high"] {
    background-color: #d1ecf1;
    border-color: #0c5460;
  }

  /* Specificity: (0,1,1) - Pseudo-class */
  input:focus {
    border-color: #6610f2 !important;
    outline: none;
    background-color: #e7e3fc !important;
  }

  /* Specificity: (1,0,1) - ID selector (highest non-inline) */
  #textInputField {
    background-color: #ffeaa7;
    border-color: #fd79a8;
  }
`;

export const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  font-size: ${props => props.theme.fontSizes.medium};
  font-family: ${props => props.theme.fonts.primary};
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: ${props => props.theme.spacing.lg};

  &:hover {
    background-color: ${props => props.theme.colors.info};
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${props => props.theme.spacing.lg} 0;
`;

export const FeatureItem = styled.li`
  padding: ${props => props.theme.spacing.sm} 0;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  
  &:last-child {
    border-bottom: none;
  }

  &:before {
    content: '✓';
    color: ${props => props.theme.colors.success};
    font-weight: bold;
    margin-right: ${props => props.theme.spacing.sm};
  }
`;
export const Line = styled.div`
    margin: 5px;

`;

export const OutputStyled = styled.div`
    padding: 2ch;
    min-height: 2rem;
`;
