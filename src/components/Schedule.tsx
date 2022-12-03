import React, { FC } from "react";
import styled from "styled-components";
import { ScheduleData } from "./ScheduleData";

const Schedule: FC = () => {
  return (
    <>
      <ScheduleBoard>
        <Container>
          {ScheduleData.map((item, index) => {
              return (
                  <Field key={index}>
                    <Header style={item.style}>
                      <Status>{item.title}</Status>
                      <Image src={item.image} />
                    </Header>
                    <FieldBody>
                      {item.cards.map((card, key)=>{
                        if(item.title !== "Completed"){
                          return(
                            <Card key={key} style={card.backgroundColor}>
                              <Cardtext>{card.text}</Cardtext>
                              <Cardtime>{card.time}</Cardtime>
                            </Card>
                          )
                        }else{
                          return(
                            <CompletedCard key={key}>
                              <CompletedCardtext>{card.text}</CompletedCardtext>
                              <CompletedCardtime>{card.time}</CompletedCardtime>
                            </CompletedCard>
                          )
                        }
                      })}
                    </FieldBody>
                  </Field>
              )
            })}
            <Statusfield>
              <Inputfield>
                <CreateElement placeholder="+ Create status" />
              </Inputfield>
            </Statusfield>
          </Container>
      </ScheduleBoard>
    </>
  );
};

const ScheduleBoard = styled.div`
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
`;

const Container = styled.div`
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
`;

const Field = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  flex: 0 0 18%;
  max-width: 18%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0px 15px 0px;
`;

const FieldBody = styled.div`
  border: 1px solid #F3F3F3;
  border-left: none;
  padding: 40px 10px 10px 10px;
  height: 749px;
`;

const Card = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: yellow;
`;

const Cardtext = styled.p`
  margin-bottom: 10px;
`;

const Cardtime = styled.p`

`;

const CompletedCard = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: #F0F0F0;
  color: grey;
`;

const CompletedCardtext = styled.p`
  margin-bottom: 10px;
  text-decoration-line: line-through;
`;

const CompletedCardtime = styled.p`
  text-decoration-line: line-through;
`;

const Status = styled.p`
  color: #222222;
  font-weight: 600;
  float: left;
`;

const Image = styled.img`
  margin-left: 10px;
  float: left;
`;

const Statusfield = styled.div`
  flex: 0 0 28%;
  max-width: 28%;
`;

const Inputfield = styled.div`
  padding: 30px 15px 17px 30px;
  border-bottom: 1px solid #F3F3F3;
`;

const CreateElement = styled.input`
  width: 23rem;
  border: 1px solid transparent;
`;


export default Schedule;
