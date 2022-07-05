import { AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import {
  FaBriefcaseMedical,
  FaCalendarAlt,
  FaUserAlt,
  FaUserNurse,
} from "react-icons/fa";

import { AiOutlineClose } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { BsBarChart } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { removeUser } from "../../ReduxState/Global";
import axios from "axios";
const AdminHead = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const hospitalId = user.hospital;
  console.log("Got the hospital id", hospitalId);

  const [hospitalData, setHospitalData] = useState();

  const getHospital = async () => {
    const mainURL = "https://ucarebackend.herokuapp.com";
    const localURL = "http://localhost:1210";
    const url = `${localURL}/api/hospital/${hospitalId}`;
    await axios
      .get(url)
      .then((res) => {
        console.log("Get response from the Head", res);

        // console.log(res);
        setHospitalData(res.data.data);
        console.log("Hospital data on the Head", hospitalData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const logOut = () => {
    dispatch(removeUser());
    navigate(`/hospital/${hospitalId}/detail`);
  };

  useEffect(() => {
    getHospital();
  }, []);
  return (
    <Container>
      {user ? (
        <Top>
          <Left>
            <Menu>
              <AiOutlineMenu
                id="menu"
                onClick={() => {
                  document.getElementById("sidebar").style.width = "300px";
                  document.getElementById("menu").style.display = "none";
                  document.getElementById("close").style.display = "block";
                }}
              />
            </Menu>
            <Hold style={{ display: "none" }}>
              <FiSearch />
              <Input placeholder="Search" />
            </Hold>
          </Left>
          <Right>
            <BiHelpCircle
              style={{
                marginRight: "10px",
              }}
            />
            <BsBell
              style={{
                marginRight: "10px",
              }}
            />
            <Name>
              {user.firstName} {user.lastName}
            </Name>
            {user.avatar ? (
              <Image src={user.avatar} />
            ) : (
              <Image src="/assets/img1.jpg" />
            )}
          </Right>
        </Top>
      ) : null}

      <SideBar id="sidebar">
        <Cancel>
          <AiOutlineClose
            id="close"
            style={{ display: "none" }}
            onClick={() => {
              document.getElementById("sidebar").style.width = "0";
              document.getElementById("menu").style.display = "block";
              document.getElementById("close").style.display = "none";
            }}
          />
        </Cancel>
        <Header>
          {hospitalData ? (
            <>
              <img src={hospitalData.logo} />
              <span>{hospitalData.hospitalName}</span>
            </>
          ) : null}
        </Header>
        <Tops>
          <NavLink to="/patient-overview" style={{ textDecoration: "none" }}>
            <Holder>
              <BsBarChart />
              <span>OverView</span>
            </Holder>
          </NavLink>

          <NavLink to="/create" style={{ textDecoration: "none" }}>
            <Holder>
              <FaUserAlt />
              <span> Update Profile</span>
            </Holder>
          </NavLink>

          <NavLink to="/create-appointment" style={{ textDecoration: "none" }}>
            <Holder>
              <FaCalendarAlt />
              <span>Book Appointment</span>
            </Holder>
          </NavLink>
          <NavLink to="/doc" style={{ textDecoration: "none" }}>
            <Holder>
              <FaUserNurse />
              <span>Specialists</span>
            </Holder>
          </NavLink>

          <NavLink to="/history" style={{ textDecoration: "none" }}>
            {" "}
            <Holder>
              <FaBriefcaseMedical />
              <span>Appointment History</span>
            </Holder>
          </NavLink>
        </Tops>
        <Bottom>
          <Holder onClick={logOut}>
            <AiOutlineLogout />
            <span>Log out</span>
          </Holder>
        </Bottom>
      </SideBar>
    </Container>
  );
};

export default AdminHead;
const Cancel = styled.div`
  /* display:none; */
  @media (max-width: 768px) {
    width: 90%;
    justify-content: flex-end;
    display: flex;
  }

  align-items: center;
`;
const MyLink = styled.div`
  color: white;
`;

const Wrapper = styled.div`
  width: 85%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Header = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;

  align-items: center;

  span {
    padding-top: 10px;
    font-weight: bold;
    margin-bottom: 20px;
    color: white;
    font-size: 17px;
    display: flex;
  }
`;

const Tops = styled.div`
  width: 100%;
  height: 60%;
  margin-bottom: 10px;
`;

const Holder = styled.div`
  margin-bottom: 20px;
  color: white;
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  transition: 350ms;
  cursor: pointer;
  :hover {
    background: rgba(255, 255, 255, 0.9);
    color: #0000cc;
  }
  span {
    margin-left: 20px;
    font-weight: 500;
    font-size: 13px;

    /* font-size: 17px; */
  }
`;

const Bottom = styled.div`
  /* flex: 1; */
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SideBar = styled.div`
  color: white;
  width: 0;
  height: 100vh;
  position: fixed;
  background: #0000cc;
  top: 0;
  left: 0;
  display: none;
  overflow: hidden;
  transition: all 300ms;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
`;
const Menu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Hold = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Name = styled.div`
  margin-right: 10px;
  margin-left: 10px;
  font-weight: 600;
  text-transform: capitalize;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  background: greenyellow;
  border-radius: 25px;
  margin-right: 5px;
  object-fit: cover;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  margin-left: 5px;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Top = styled.div`
  padding: 0px 10px;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
  position: sticky;
  height: 100%;
  display: flex;
  justify-content: center;
  width: 100%;
`;
