import styled from "styled-components";
import swagg from "../../assets/swagg.jpeg";

const Home = () => {
  return (
    <HomeWrapper>
      <div>
        <Title>Welcome to Rare Animals website!</Title>
      </div>

      <div>
        <Description>
          This website is a prove of concept for a Micro-Frontend architecture
          using Single-SPA framework.
        </Description>
      </div>

      <div>
        <img src={swagg} alt="home" />
      </div>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
`;

const Title = styled.h2`
  font-weight: bold;
`;

const Description = styled.h3`
  font-style: italic;
`;
