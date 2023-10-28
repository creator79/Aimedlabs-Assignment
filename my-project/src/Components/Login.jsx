import * as React from "react";
import styled from "styled-components";
import Image1 from "../assets/image1.svg"
import Image2 from "../assets/image2.svg"

function MyComponent(props) {

  return (
    <ButtonDiv>
      <ButtonDiv2>
        <ButtonDiv3>
          <Column>
            <Img loading="lazy" src={Image1} />
          </Column>
          <Column2>
            <ButtonDiv4>
              <ButtonDiv5>Login</ButtonDiv5>
              <ButtonDiv6>
                <ButtonDiv7>Login ID</ButtonDiv7>
                <InputBox8 
                type="text"
                placeholder="Enter Login ID"
              />
                <ButtonDiv9>Password</ButtonDiv9>
                <ButtonDiv10>
                <InputBox11 
                type="password"
                placeholder="Enter Password"
              />
                  <Img2 loading="lazy" src={Image2} />
                </ButtonDiv10>
                <ButtonDiv12>
                  <ButtonDiv13>
                    <ButtonDiv14>
                      <ButtonDiv15 type="checkbox"/>
                      <ButtonDiv16>Remember Me</ButtonDiv16>
                    </ButtonDiv14>
                    <ButtonDiv17>
                      <ButtonDiv18 type="checkbox"/>
                      <ButtonDiv19>
                        <span style={{ color: "rgba(115,123,134,1)" }}>
                          Agree to{" "}
                        </span>
                        <span style={{ color: "rgba(247,135,25,1)" }}>
                          Terms & Conditions
                        </span>
                      </ButtonDiv19>
                    </ButtonDiv17>
                  </ButtonDiv13>
                  <ButtonDiv20>Change Password</ButtonDiv20>
                </ButtonDiv12>
                <ButtonDiv21>
                  <ButtonDiv22>Login</ButtonDiv22>
                </ButtonDiv21>
                <ButtonDiv23 >
                  <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, color: "rgba(4,7,47,1)" }}>
                    Don’t have an account?
                  </span>
                  <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "rgba(4,7,47,1)" }}>
                    {" "}
                  </span>
                  <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "rgba(247,135,25,1)" }}>
                    Register Here
                  </span>
                </ButtonDiv23>
              </ButtonDiv6>
            </ButtonDiv4>
          </Column2>
        </ButtonDiv3>
      </ButtonDiv2>
    </ButtonDiv>
  );
}

const ButtonDiv = styled.div`
  justify-content: flex-end;
  align-items: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const ButtonDiv2 = styled.div`
  align-self: center;
  width: 100%;
  max-width: 1738px;
  margin: 40px 0;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ButtonDiv3 = styled.div`
  gap: 20px;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 36%;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Img = styled.img`
  aspect-ratio: 0.86;
  object-fit: cover;
  object-position: center;
  width: 543px;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 64%;
  margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ButtonDiv4 = styled.div`
  border-radius: 12px;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 207px 20px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const ButtonDiv5 = styled.div`
  color: var(--Text-color, #111112);
  text-align: center;
  align-self: center;
  text-wrap: nowrap;
  font: 700 48px/110% Poppins, sans-serif;

  @media (max-width: 991px) {
    font-size: 40px;
    text-wrap: initial;
  }
`;

const ButtonDiv6 = styled.div`
  align-self: center;
  display: flex;
  width: 824px;
  max-width: 100%;
  flex-direction: column;
  margin: 39px 0 -43px;

  @media (max-width: 991px) {
    margin-bottom: 10px;
  }
`;

const ButtonDiv7 = styled.div`
  color: var(--Text-color, #111112);
  align-self: start;
  text-wrap: nowrap;
  font: 500 18px/110% Poppins, sans-serif;

  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const InputBox8 = styled.input`
  color: var(--Light-Color---1, #111112);
  align-self: stretch;
  text-wrap: nowrap;

  border-radius: 8px;
  border: 1px solid rgba(4, 7, 47, 0.4);
  margin-top: 14px;
  padding: 19px 20px 19px 16px;
  font: 400 18px/110% Poppins, sans-serif;

  @media (max-width: 991px) {
    text-wrap: initial;
    max-width: 100%;
  }
`;


const ButtonDiv9 = styled.div`
  color: var(--Text-color, #111112);
  align-self: start;
  margin-top: 33px;
  text-wrap: nowrap;
  font: 500 18px/110% Poppins, sans-serif;

  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const ButtonDiv10 = styled.div`
  border-radius: 8px;
  border: 1px solid rgba(4, 7, 47, 0.4);
  align-self: stretch;
  display: flex;
  margin-top: 20px;
  width: 96%;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  padding: 16px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const InputBox11  = styled.input`
  color: var(--Light-Color---1, #737b86);
  margin: auto 0;
  margin-left: 0px;
  font: 400 18px/110% Poppins, sans-serif;
  border-outline: none; 
  margin-left: 14px;
  border: none;
  focus: none;
  
`;


const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 20px;
  margin: auto 20px;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
`;

const ButtonDiv12 = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 22px;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const ButtonDiv13 = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
`;

const ButtonDiv14 = styled.div`
  align-self: start;
  display: flex;
  width: 154px;
  max-width: 100%;
  align-items: flex-start;
  gap: 8px;
`;

const ButtonDiv15 = styled.input`
  border-radius: 4px;
  border: 1px solid #737b86;
  align-self: start;
  display: flex;
  width: 16px;
  height: 16px;
  flex-direction: column;
`;

const ButtonDiv16 = styled.div`
  color: var(--Light-Color---1, #737b86);
  align-self: start;
  text-wrap: nowrap;
  font: 400 18px/110% Poppins, sans-serif;

  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const ButtonDiv17 = styled.div`
  align-self: start;
  display: flex;
  margin-top: 24px;
  width: 280px;
  max-width: 100%;
  align-items: flex-start;
  gap: 8px;
`;

const ButtonDiv18 = styled.input`
  border-radius: 4px;
  border: 1px solid #737b86;
  align-self: start;
  display: flex;
  width: 16px;
  height: 16px;
  flex-direction: column;
  cursor: pointer;
`;

const ButtonDiv19 = styled.div`
  color: var(--Secondary---1, #f78719);
  text-decoration-line: underline;
  align-self: start;
  text-wrap: nowrap;
  flex-grow: 1;
  flex-basis: auto;
  font: 400 18px Poppins, sans-serif;
  cursor: pointer;

  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const ButtonDiv20 = styled.div`
  color: var(--Secondary---1, #f78719);
  text-align: right;
  align-self: start;
  text-wrap: nowrap;
  cursor: pointer;
  font: 400 18px/110% Poppins, sans-serif;

  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const ButtonDiv21 = styled.button`
  border-radius: 8px;
  background-color: var(--Primary---1, #1575a7);
  align-self: center;
  display: flex;
  margin-top: 41px;
  width: 538px;
  max-width: 100%;
  flex-direction: column;
  padding: 19px 20px;
  cursor: pointer;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ButtonDiv22 = styled.div`
  color: var(--white-color, #fff);
  align-self: center;
  text-wrap: nowrap;
  font: 500 18px/110% Poppins, sans-serif;
  cursor : pointer;

  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const ButtonDiv23 = styled.div`
  color: var(--Secondary---1, #f78719);
  text-decoration-line: underline;
  align-self: center;
  margin-top: 46px;
  text-wrap: nowrap;
  font: 700 18px Poppins, sans-serif;
  cursor: pointer;

  @media (max-width: 991px) {
    margin-top: 40px;
    text-wrap: initial;
  }
`;

export default MyComponent;