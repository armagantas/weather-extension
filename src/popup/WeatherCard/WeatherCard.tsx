import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography } from "@material-ui/core";
import { OpenWeatherData, fetchOpenWeatherData } from "../../utils/api";

const WeatherCardContainer: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <Box mx={"4px"} my={"16px"}>
      <Card>
        <CardContent>{children}</CardContent>
      </Card>
    </Box>
  );
};

type WeatherCardState = "loading" | "error" | "ready";

const WeatherCard: React.FC<{
  city: string;
}> = ({ city }) => {
  const [WeatherData, setWeatherData] = useState<OpenWeatherData | null>(null);
  const [cardState, setCardState] = useState<WeatherCardState>("loading");
  useEffect(() => {
    fetchOpenWeatherData(city)
      .then((data) => {
        setWeatherData(data);
        setCardState("ready");
      })
      .catch((err) => setCardState("error"));
  }, [city]);

  if (cardState == "loading" || cardState == "error") {
    return (
      <WeatherCardContainer>
        <Typography variant="body1">
          {cardState == "loading"
            ? "Loading..."
            : "Error: could not retrieve weather data for this city."}
        </Typography>
      </WeatherCardContainer>
    );
  }

  return (
    <WeatherCardContainer>
      <Typography variant="h5">{WeatherData.name}</Typography>
      <Typography variant="body1">
        {Math.round(WeatherData.main.temp)}
      </Typography>
      <Typography variant="body1">
        Feels like: {Math.round(WeatherData.main.feels_like)}
      </Typography>
    </WeatherCardContainer>
  );
};

export default WeatherCard;
