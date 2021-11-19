import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  EventContainer,
  EventWrapper,
  EventRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
} from "./EventsElements";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/status_updates?per_page=5")
      .then((res) => {
        setEvents(res.data.status_updates);
        console.log(res.data.status_updates);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <EventContainer id="events">
      <EventWrapper>
        <Heading>Upcoming Events</Heading>
        {/*events.map((eventIdx, idx) => {
          console.log(idx);
            return (
              <EventRow>
                  <TextWrapper>
                    <TopLine>{eventIdx.user}</TopLine>
                    <Subtitle> {eventIdx.description}</Subtitle>
                  </TextWrapper>
              </EventRow>
            );
        })*/}
      </EventWrapper>
    </EventContainer>
  );
};

export default Events;
