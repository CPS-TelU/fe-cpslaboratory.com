import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface contactFormEmail {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  }
  
  export const RecentEmail = ({
    name,
    email,
    phone,
    message,
  }: contactFormEmail) => {
  
  
    return (
      <Html>
        <Head />
        <Preview>recent login</Preview>
        <Body style={main}>
          <Container>
            <Section style={content}>
              <Row>
                <Img
                  style={image}
                  width={620}
                  src=""
                />
              </Row>
              <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                <Column>
                  <Heading
                    style={{
                      fontSize: 32,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {name},
                  </Heading>
                  <Heading
                    as="h2"
                    style={{
                      fontSize: 26,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Have Sent an Idea and Critiques For Us 
                  </Heading>
  
                  <Text style={paragraph}>
                    <b>Name: </b>
                    {name}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>E-mail: </b>
                    {email}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Phone Number: </b>
                    {phone}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Messages: </b>
                    {message}
                  </Text>
                  <Text
                    style={{
                      color: "rgb(0,0,0, 0.5)",
                      fontSize: 14,
                      marginTop: -5,
                    }}
                  >
                  </Text>
  
                </Column>
              </Row>
            </Section>
            <Text
              style={{
                textAlign: "center",
                fontSize: 12,
                color: "rgb(0,0,0, 0.7)",
              }}
            >
              © 2024 | Cyber Physical System Laboratory, Telkom University
               | CPS LAB
            </Text>
          </Container>
        </Body>
      </Html>
    );
  };
  
  RecentEmail.PreviewProps = {
    name: "jajang pargoy",
    email: "jajangmiharja@gmail.com",
    phone: "0812xxxxxx",
    message: "Lorem ipsum ip dolor mamet",
  
    
  } as contactFormEmail;
  
  export default RecentEmail;
  
  const main = {
    backgroundColor: "#fff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const paragraph = {
    fontSize: 16,
  };
  const content = {
    border: "1px solid rgb(0,0,0, 0.1)",
    borderRadius: "3px",
    overflow: "hidden",
  };
  
  const image = {
    maxWidth: "100%",
  };
  
  const boxInfos = {
    padding: "20px",
  };
