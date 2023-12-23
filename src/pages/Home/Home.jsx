import { useState } from "react";
import { CardItem } from "../../components/CardItem/CardItem";
import { useEffect } from "react";
import axios from "axios";
import { CardsContainer, LinkTo, Text, LinkWrapper } from "./Home.styled";
import { MySlider } from "../../components/Slider/Slider";

function Home() {
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
      try {
          const { data } = await axios.get('https://assortment-sounds-api.vercel.app/api/vinils');
          setCards(data);
          return data;
      } catch (error) {
          console.log(error);
      }
  }

  useEffect(() => {
      fetchCards()
  }, []);

  return (
    <div style={{margin: '30px 0' }}>
      <MySlider/>
      <LinkWrapper>
        <LinkTo to={'/catalog'}>Переглянути всі товари</LinkTo>
      </LinkWrapper>
      <CardsContainer>
        {cards?.map((card, idx) => {
          return <CardItem key={idx}  wide={false} about={card}/>
        })}
      </CardsContainer>
      <Text>
        Звукоряд - ducimus dolorum excepturi inventore consectetur et. Fuga quia nesciunt quos distinctio ducimus earum. Cupiditate iure quidem. Distinctio sint enim accusantium. Doloribus laborum repellat ut provident ut. Inventore dolorum sunt sint ipsam. Molestias tenetur a mollitia et sint aut. Vitae pariatur natus nostrum eius. Eum cum nihil aperiam. Similique quia culpa et est. Voluptas maiores deserunt non sunt modi asperiores eius perspiciatis eum. Nobis ea ut delectus iste necessitatibus suscipit. Nulla voluptas sint harum. Ipsa est et odio.
      </Text>
    </div>  
  );
}

export default Home;