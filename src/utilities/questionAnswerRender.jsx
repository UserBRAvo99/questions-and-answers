import { nanoid } from "nanoid";
import React from "react";
import { styled } from "styled-components";

function questionAnswerRender(data) {
  return (
    <List>
      {data.map(({ question, answer }) => {
        return (
          <Item key={nanoid()}>
            <Title>{question}</Title>
            <Paragraph>{answer}</Paragraph>
          </Item>
        );
      })}
    </List>
  );
}

export default questionAnswerRender;

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Item = styled.li``;

const Title = styled.h2``;

const Paragraph = styled.p``;
