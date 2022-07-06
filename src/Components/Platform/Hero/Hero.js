import React from "react";
import styled from "styled-components";
import { FaGraduationCap } from "react-icons/fa";
import { HiDocumentDuplicate } from "react-icons/hi";
import { Link } from "react-router-dom";
// import wave from "../../Img/wave.svg";

const Hero = () => {
  const style = { color: "blue", height: "20px", width: "20px" };
  return (
    <Container>
      <Wrapper>
        <Uplayer>
          <Left>
            <Layer1>Best Hospital management ERP</Layer1>
            <Layer2>
              <Trust>
                ERP Platform for Day-to-Day Management of your Hospital{" "}
              </Trust>
              <Best>
                Best Features availability & Elegant Hospital, Medical & <br />{" "}
                Health Institues management system
              </Best>
              <Buttonwrap>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Button>
                    {" "}
                    <HiDocumentDuplicate
                      style={{
                        color: "blue",
                        height: "20px",
                        width: "20px",
                        marginRight: "10px",
                      }}
                    />
                    Try Demo
                  </Button>
                </Link>

                <Button style={{ display: "none" }}>
                  <FaGraduationCap style={style} />
                  Documentation
                </Button>
              </Buttonwrap>
            </Layer2>
          </Left>
          <Right>
            <Imagewrap>
              <img src="/assets/laptop.png" />
            </Imagewrap>
          </Right>
        </Uplayer>
        <Lowlayer>
          <Awesome> We Have Awesome Features</Awesome>
          <Features>We give best features</Features>
        </Lowlayer>
      </Wrapper>
    </Container>
  );
};

export default Hero;
const Lowlayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-top: 20px;
`;
const Uplayer = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Awesome = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  width: 250px;
  background-color: rgba(0, 0, 255, 0.1);
  color: blue;
  font-weight: 500;
  border-radius: 5px;
  align-items: center;
`;
const Features = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  margin-top: 20px;
  color: black;
  text-transform: capitalize;
  font-weight: 600;
  align-items: center;
  text-align: center;
  span {
    color: red;
    font-weight: 700;
  }

  @media screen and (max-width: 768px) {
    // font-size: 1.5rem;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  height: 100vh;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  flex-direction: column;
  /* background-color: blue; */
`;
const Layer1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  height: 40px;
  width: 400px;
  font-family: "Poppins", sans-serif;
  background-color: rgba(0, 0, 255, 0.1);
  color: #3100ff;
  font-weight: 500;
  @media screen and (max-width: 425px) {
    width: 80%;
  }
`;
const Layer2 = styled.div`
  /* background-color: pink; */
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    width: 90%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Best = styled.div`
  font-size: 1rem;
  color: #939393;
  margin: 10px 0px;
  margin-right: 0px;
`;

const Trust = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin: 10px 0;
  }
`;
const Buttonwrap = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  /* background-color: green; */
  margin-top: 25px;
  width: 280px;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* height: 45px;
  width: 120px; */
  padding: 10px;
  border-radius: 20px;
  border: 1px solid blue;
  font-weight: 500;
  font-size: 0.8rem;
  font-weight: 600;
  /* background-color: #0000ff; */
`;
const Right = styled.div`
  width: 50%;
  // height: 400px;
  /* background-color: green; */

  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 20px 0;
  }
`;

const Imagewrap = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  /* height: 500px;*/
  width: 100%;
  /* background-color: yellow; */
  margin-top: 20px;
  img {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    /* background-color: yellow; */
  }
`;

const Img1 = styled.img`
  height: 50px;
  width: 50px;
`;
const Left = styled.div`
  width: 450px;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  /* background-color: red; */

  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;
